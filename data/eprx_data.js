// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/07〜2026/10/06）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-07",
  "fetchedAt": "2026-10-07",
  "avgWindowLabel": "過去30日平均（2026/09/07〜2026/10/06）",
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
      "boshu": 1207,
      "ouatsu": 1420.854,
      "saikou": 7.85,
      "heikin": 2.91,
      "boshuAvg30d": 1226.3,
      "heikinAvg30d": 2.69
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1207,
      "ouatsu": 1417.328,
      "saikou": 7.19,
      "heikin": 2.77,
      "boshuAvg30d": 1226.3,
      "heikinAvg30d": 2.601
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1207,
      "ouatsu": 1507.596,
      "saikou": 7.03,
      "heikin": 2.65,
      "boshuAvg30d": 1226.3,
      "heikinAvg30d": 2.64
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1207,
      "ouatsu": 1541.759,
      "saikou": 7,
      "heikin": 2.69,
      "boshuAvg30d": 1226.3,
      "heikinAvg30d": 2.605
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1204,
      "ouatsu": 1497.712,
      "saikou": 10,
      "heikin": 2.92,
      "boshuAvg30d": 1221.7,
      "heikinAvg30d": 2.573
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1203,
      "ouatsu": 1523.986,
      "saikou": 6.81,
      "heikin": 2.59,
      "boshuAvg30d": 1220.7,
      "heikinAvg30d": 2.675
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1200,
      "ouatsu": 1570.676,
      "saikou": 6.61,
      "heikin": 2.8,
      "boshuAvg30d": 1240.1,
      "heikinAvg30d": 2.792
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1202,
      "ouatsu": 1605.016,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1241.3,
      "heikinAvg30d": 2.913
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1204,
      "ouatsu": 1598.504,
      "saikou": 7,
      "heikin": 3.14,
      "boshuAvg30d": 1244.1,
      "heikinAvg30d": 3.008
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1205,
      "ouatsu": 1638.144,
      "saikou": 7.04,
      "heikin": 3.26,
      "boshuAvg30d": 1244.3,
      "heikinAvg30d": 3.079
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1205,
      "ouatsu": 1588.685,
      "saikou": 9,
      "heikin": 3.36,
      "boshuAvg30d": 1244.3,
      "heikinAvg30d": 3.161
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1205,
      "ouatsu": 1493.147,
      "saikou": 10,
      "heikin": 3.55,
      "boshuAvg30d": 1244.3,
      "heikinAvg30d": 3.189
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1265,
      "ouatsu": 1619.579,
      "saikou": 9.98,
      "heikin": 3.31,
      "boshuAvg30d": 1309.1,
      "heikinAvg30d": 3.321
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1288,
      "ouatsu": 1694.944,
      "saikou": 8,
      "heikin": 3.33,
      "boshuAvg30d": 1330.5,
      "heikinAvg30d": 3.105
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1309,
      "ouatsu": 1545.758,
      "saikou": 8.7,
      "heikin": 2.59,
      "boshuAvg30d": 1353.1,
      "heikinAvg30d": 2.988
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1326,
      "ouatsu": 1500.229,
      "saikou": 10,
      "heikin": 2.47,
      "boshuAvg30d": 1370.9,
      "heikinAvg30d": 2.897
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1326,
      "ouatsu": 1546.229,
      "saikou": 10,
      "heikin": 2.54,
      "boshuAvg30d": 1371.7,
      "heikinAvg30d": 3.092
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1326,
      "ouatsu": 1521.87,
      "saikou": 7.2,
      "heikin": 2.3,
      "boshuAvg30d": 1371.7,
      "heikinAvg30d": 3.198
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1344,
      "ouatsu": 1541.399,
      "saikou": 10,
      "heikin": 2.55,
      "boshuAvg30d": 1342.4,
      "heikinAvg30d": 3.346
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1347,
      "ouatsu": 1677.968,
      "saikou": 10,
      "heikin": 2.41,
      "boshuAvg30d": 1346.2,
      "heikinAvg30d": 3.365
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1352,
      "ouatsu": 1682.807,
      "saikou": 10,
      "heikin": 2.28,
      "boshuAvg30d": 1353.6,
      "heikinAvg30d": 3.392
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1352,
      "ouatsu": 1667.576,
      "saikou": 10,
      "heikin": 2.33,
      "boshuAvg30d": 1353.6,
      "heikinAvg30d": 3.364
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1349,
      "ouatsu": 1669.226,
      "saikou": 10,
      "heikin": 2.45,
      "boshuAvg30d": 1350.6,
      "heikinAvg30d": 3.286
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1348,
      "ouatsu": 1622.873,
      "saikou": 10,
      "heikin": 2.39,
      "boshuAvg30d": 1349.6,
      "heikinAvg30d": 3.217
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1328,
      "ouatsu": 1527.437,
      "saikou": 10,
      "heikin": 2.07,
      "boshuAvg30d": 1337.1,
      "heikinAvg30d": 3.122
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1328,
      "ouatsu": 1532.769,
      "saikou": 10,
      "heikin": 1.99,
      "boshuAvg30d": 1337.1,
      "heikinAvg30d": 3.122
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1328,
      "ouatsu": 1514.537,
      "saikou": 10,
      "heikin": 2.15,
      "boshuAvg30d": 1334.1,
      "heikinAvg30d": 3.295
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1326,
      "ouatsu": 1372.886,
      "saikou": 10,
      "heikin": 2.38,
      "boshuAvg30d": 1329.3,
      "heikinAvg30d": 3.312
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1323,
      "ouatsu": 1512.524,
      "saikou": 10,
      "heikin": 2.09,
      "boshuAvg30d": 1324.7,
      "heikinAvg30d": 3.352
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1317,
      "ouatsu": 1396.443,
      "saikou": 10,
      "heikin": 2.28,
      "boshuAvg30d": 1317.9,
      "heikinAvg30d": 3.408
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1297,
      "ouatsu": 1637.911,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1350.9,
      "heikinAvg30d": 3.323
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1297,
      "ouatsu": 1671.647,
      "saikou": 7.21,
      "heikin": 2.35,
      "boshuAvg30d": 1350.9,
      "heikinAvg30d": 3.554
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1298,
      "ouatsu": 1834.294,
      "saikou": 8.73,
      "heikin": 3.04,
      "boshuAvg30d": 1351.1,
      "heikinAvg30d": 3.708
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1297,
      "ouatsu": 1803.059,
      "saikou": 10,
      "heikin": 3.92,
      "boshuAvg30d": 1349.2,
      "heikinAvg30d": 3.917
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1295,
      "ouatsu": 1908.498,
      "saikou": 8.81,
      "heikin": 3.47,
      "boshuAvg30d": 1341.5,
      "heikinAvg30d": 4.003
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1290,
      "ouatsu": 1857.433,
      "saikou": 9.91,
      "heikin": 3.74,
      "boshuAvg30d": 1336.9,
      "heikinAvg30d": 4.051
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1285,
      "ouatsu": 1772.856,
      "saikou": 8.31,
      "heikin": 3.16,
      "boshuAvg30d": 1329.5,
      "heikinAvg30d": 4.101
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1285,
      "ouatsu": 1761.525,
      "saikou": 8.36,
      "heikin": 3.13,
      "boshuAvg30d": 1329.5,
      "heikinAvg30d": 4.03
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1285,
      "ouatsu": 1895.759,
      "saikou": 8.5,
      "heikin": 3.21,
      "boshuAvg30d": 1329.9,
      "heikinAvg30d": 3.932
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1284,
      "ouatsu": 1845.743,
      "saikou": 8.08,
      "heikin": 3.25,
      "boshuAvg30d": 1328.9,
      "heikinAvg30d": 3.754
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1276,
      "ouatsu": 1837.551,
      "saikou": 7.77,
      "heikin": 3.03,
      "boshuAvg30d": 1323.3,
      "heikinAvg30d": 3.698
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1276,
      "ouatsu": 1913.804,
      "saikou": 7.44,
      "heikin": 2.88,
      "boshuAvg30d": 1320.1,
      "heikinAvg30d": 3.626
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1272,
      "ouatsu": 2002.036,
      "saikou": 6.97,
      "heikin": 2.77,
      "boshuAvg30d": 1239.2,
      "heikinAvg30d": 3.44
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1275,
      "ouatsu": 1784.958,
      "saikou": 7.57,
      "heikin": 3.41,
      "boshuAvg30d": 1242.2,
      "heikinAvg30d": 3.528
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1276,
      "ouatsu": 1763.609,
      "saikou": 7.95,
      "heikin": 3.49,
      "boshuAvg30d": 1243.6,
      "heikinAvg30d": 3.366
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1271,
      "ouatsu": 1888.255,
      "saikou": 7.14,
      "heikin": 3.04,
      "boshuAvg30d": 1237.0,
      "heikinAvg30d": 3.256
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1262,
      "ouatsu": 1896.633,
      "saikou": 7.28,
      "heikin": 3.08,
      "boshuAvg30d": 1229.6,
      "heikinAvg30d": 3.238
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1255,
      "ouatsu": 1854.339,
      "saikou": 6.89,
      "heikin": 2.63,
      "boshuAvg30d": 1221.8,
      "heikinAvg30d": 3.026
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
        "ouatsu": 162.908,
        "saikou": 7.85,
        "heikin": 2.93,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 1.2
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 126.958,
        "saikou": 7.09,
        "heikin": 1.88,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 0.984
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 126.918,
        "saikou": 7.03,
        "heikin": 1.81,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 1.091
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 173.278,
        "saikou": 1.17,
        "heikin": 1.11,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 0.974
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 168.908,
        "saikou": 6.94,
        "heikin": 1.68,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 1.213
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 174.278,
        "saikou": 1.12,
        "heikin": 1.07,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 1.449
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 129.908,
        "saikou": 1.31,
        "heikin": 1.27,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.261
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 176.258,
        "saikou": 1.37,
        "heikin": 1.27,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.11
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 127.918,
        "saikou": 1.44,
        "heikin": 1.38,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.351
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 176.258,
        "saikou": 1.57,
        "heikin": 1.46,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.166
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 129.908,
        "saikou": 1.71,
        "heikin": 1.62,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.266
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 178.208,
        "saikou": 1.84,
        "heikin": 1.7,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.441
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 178.208,
        "saikou": 6.6,
        "heikin": 1.67,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.836
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 168.908,
        "saikou": 6.2,
        "heikin": 0.97,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.509
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 163.858,
        "saikou": 8.7,
        "heikin": 3.01,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.381
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 161.958,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.316
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 161.958,
        "saikou": 1.01,
        "heikin": 0.81,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 0.907
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 159.858,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 0.979
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 129.908,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 0.918
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 169.013,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 0.943
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 163.908,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 1.001
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 163.013,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 1.007
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 164.963,
        "saikou": 1,
        "heikin": 0.65,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 0.914
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 123.858,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 0.946
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 123.818,
        "saikou": 1.01,
        "heikin": 0.67,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 1.02
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 164.913,
        "saikou": 1.01,
        "heikin": 0.8,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 0.968
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 127.94,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 1.319
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 169.013,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 1.232
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 129.908,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.266
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 161.958,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.453
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 206.023,
        "saikou": 1.82,
        "heikin": 1.09,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 1.117
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 125.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 1.971
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 169.013,
        "saikou": 5.16,
        "heikin": 4.8,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 2.588
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 127.045,
        "saikou": 7.02,
        "heikin": 6.93,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 2.679
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 85.99,
        "saikou": 5.71,
        "heikin": 5.71,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 2.735
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 129.013,
        "saikou": 6.7,
        "heikin": 6.53,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 2.624
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 87.958,
        "saikou": 5.15,
        "heikin": 5.05,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 2.618
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 129.013,
        "saikou": 3.93,
        "heikin": 3.81,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 2.73
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 89.908,
        "saikou": 3.49,
        "heikin": 3.38,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 2.109
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 165.658,
        "saikou": 2.93,
        "heikin": 2.73,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 1.94
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 127.918,
        "saikou": 2.18,
        "heikin": 2.04,
        "boshuAvg30d": 59.6,
        "heikinAvg30d": 1.975
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 125.968,
        "saikou": 1.93,
        "heikin": 1.84,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 1.718
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 174.268,
        "saikou": 1.39,
        "heikin": 1.28,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 1.336
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 125.968,
        "saikou": 2.46,
        "heikin": 2.26,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 1.768
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 151.268,
        "saikou": 7.95,
        "heikin": 2.86,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.324
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 174.268,
        "saikou": 1.97,
        "heikin": 1.82,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.445
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 125.968,
        "saikou": 1.84,
        "heikin": 1.71,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.294
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 215.258,
        "saikou": 1.39,
        "heikin": 1.28,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.309
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 99.664,
        "saikou": 7,
        "heikin": 5.51,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 7.403
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 111.664,
        "saikou": 7.19,
        "heikin": 5.63,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 7.697
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 129.544,
        "saikou": 6.69,
        "heikin": 5.23,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 7.832
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 129.544,
        "saikou": 7,
        "heikin": 5.69,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 7.888
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 127.546,
        "saikou": 10,
        "heikin": 5.84,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 7.934
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 127.546,
        "saikou": 6.75,
        "heikin": 5.49,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 7.979
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 128.044,
        "saikou": 6.53,
        "heikin": 5.35,
        "boshuAvg30d": 162.6,
        "heikinAvg30d": 7.978
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 129.544,
        "saikou": 10,
        "heikin": 5.71,
        "boshuAvg30d": 162.6,
        "heikinAvg30d": 7.927
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 131.543,
        "saikou": 7,
        "heikin": 5.57,
        "boshuAvg30d": 162.6,
        "heikinAvg30d": 7.924
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 109.543,
        "saikou": 6.69,
        "heikin": 5.99,
        "boshuAvg30d": 162.6,
        "heikinAvg30d": 7.882
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 109.543,
        "saikou": 9,
        "heikin": 6.79,
        "boshuAvg30d": 162.6,
        "heikinAvg30d": 7.921
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 109.543,
        "saikou": 10,
        "heikin": 6.78,
        "boshuAvg30d": 162.6,
        "heikinAvg30d": 7.912
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 131.543,
        "saikou": 7.99,
        "heikin": 5.57,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 8.042
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 130.043,
        "saikou": 7.99,
        "heikin": 6.18,
        "boshuAvg30d": 176.2,
        "heikinAvg30d": 8.154
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 131.543,
        "saikou": 8.4,
        "heikin": 6.58,
        "boshuAvg30d": 181.6,
        "heikinAvg30d": 8.279
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 130.043,
        "saikou": 10,
        "heikin": 8.22,
        "boshuAvg30d": 185.2,
        "heikinAvg30d": 8.265
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 131.543,
        "saikou": 10,
        "heikin": 8.55,
        "boshuAvg30d": 185.2,
        "heikinAvg30d": 8.522
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 82.043,
        "saikou": 7.17,
        "heikin": 7.04,
        "boshuAvg30d": 185.2,
        "heikinAvg30d": 8.429
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 144,
        "ouatsu": 97.539,
        "saikou": 10,
        "heikin": 8,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 8.151
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 144,
        "ouatsu": 97.539,
        "saikou": 10,
        "heikin": 8.38,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 8.23
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 146,
        "ouatsu": 93.584,
        "saikou": 10,
        "heikin": 8.45,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 8.277
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 146,
        "ouatsu": 91.588,
        "saikou": 10,
        "heikin": 8.46,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 8.283
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 147,
        "ouatsu": 95.543,
        "saikou": 10,
        "heikin": 8.43,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 8.3
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 147,
        "ouatsu": 94.193,
        "saikou": 10,
        "heikin": 8.43,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 8.303
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 143,
        "ouatsu": 93.578,
        "saikou": 10,
        "heikin": 8.42,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 8.407
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 143,
        "ouatsu": 95.543,
        "saikou": 10,
        "heikin": 8.41,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 8.318
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 143,
        "ouatsu": 97.539,
        "saikou": 10,
        "heikin": 7.8,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 8.016
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 142,
        "ouatsu": 95.609,
        "saikou": 10,
        "heikin": 7.46,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 7.791
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 142,
        "ouatsu": 95.609,
        "saikou": 10,
        "heikin": 7.06,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 7.915
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 140,
        "ouatsu": 72.259,
        "saikou": 10,
        "heikin": 5.87,
        "boshuAvg30d": 137.4,
        "heikinAvg30d": 7.325
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 75.539,
        "saikou": 10,
        "heikin": 5.62,
        "boshuAvg30d": 181.8,
        "heikinAvg30d": 7.73
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 75.539,
        "saikou": 6.07,
        "heikin": 4.75,
        "boshuAvg30d": 181.8,
        "heikinAvg30d": 7.242
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 75.539,
        "saikou": 4.4,
        "heikin": 3.4,
        "boshuAvg30d": 181.8,
        "heikinAvg30d": 7.354
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 60.043,
        "saikou": 4.99,
        "heikin": 4.26,
        "boshuAvg30d": 181.0,
        "heikinAvg30d": 7.17
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 61.543,
        "saikou": 4.99,
        "heikin": 4.26,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 7.105
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 58.113,
        "saikou": 5.99,
        "heikin": 4.11,
        "boshuAvg30d": 177.4,
        "heikinAvg30d": 6.817
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 83.578,
        "saikou": 4.4,
        "heikin": 3.24,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 6.98
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 82.113,
        "saikou": 4,
        "heikin": 3.17,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 6.804
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 106.263,
        "saikou": 4,
        "heikin": 3.31,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 6.957
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 105.613,
        "saikou": 4.64,
        "heikin": 3.26,
        "boshuAvg30d": 175.6,
        "heikinAvg30d": 7.135
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 100.308,
        "saikou": 5.51,
        "heikin": 3.74,
        "boshuAvg30d": 175.4,
        "heikinAvg30d": 7.12
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 102.238,
        "saikou": 5.8,
        "heikin": 3.84,
        "boshuAvg30d": 175.4,
        "heikinAvg30d": 7.22
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 126,
        "ouatsu": 131.543,
        "saikou": 6.43,
        "heikin": 4.63,
        "boshuAvg30d": 97.1,
        "heikinAvg30d": 7.355
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 126,
        "ouatsu": 130.193,
        "saikou": 6,
        "heikin": 4.29,
        "boshuAvg30d": 97.1,
        "heikinAvg30d": 7.523
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 126,
        "ouatsu": 131.543,
        "saikou": 7.19,
        "heikin": 4.39,
        "boshuAvg30d": 97.1,
        "heikinAvg30d": 7.539
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 125,
        "ouatsu": 131.543,
        "saikou": 5.8,
        "heikin": 4.27,
        "boshuAvg30d": 96.1,
        "heikinAvg30d": 7.494
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 123,
        "ouatsu": 131.543,
        "saikou": 5.94,
        "heikin": 4.36,
        "boshuAvg30d": 94.9,
        "heikinAvg30d": 7.636
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 123,
        "ouatsu": 130.043,
        "saikou": 6.42,
        "heikin": 4.7,
        "boshuAvg30d": 94.1,
        "heikinAvg30d": 7.82
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 395.803,
        "saikou": 5.9,
        "heikin": 3.18,
        "boshuAvg30d": 423.6,
        "heikinAvg30d": 3.542
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 401.977,
        "saikou": 5.9,
        "heikin": 2.9,
        "boshuAvg30d": 423.6,
        "heikinAvg30d": 3.517
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 422.83,
        "saikou": 6.3,
        "heikin": 2.96,
        "boshuAvg30d": 423.6,
        "heikinAvg30d": 3.342
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 434.718,
        "saikou": 5.95,
        "heikin": 2.71,
        "boshuAvg30d": 423.6,
        "heikinAvg30d": 3.378
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 422.043,
        "saikou": 6.31,
        "heikin": 3.22,
        "boshuAvg30d": 421.8,
        "heikinAvg30d": 3.309
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 443.344,
        "saikou": 5.95,
        "heikin": 2.65,
        "boshuAvg30d": 421.6,
        "heikinAvg30d": 3.33
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 411.01,
        "saikou": 5.95,
        "heikin": 2.8,
        "boshuAvg30d": 420.4,
        "heikinAvg30d": 3.341
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 397.507,
        "saikou": 5.95,
        "heikin": 3.24,
        "boshuAvg30d": 421.6,
        "heikinAvg30d": 3.456
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 394.905,
        "saikou": 5.95,
        "heikin": 3.28,
        "boshuAvg30d": 422.4,
        "heikinAvg30d": 3.542
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 384.306,
        "saikou": 5.95,
        "heikin": 3.74,
        "boshuAvg30d": 422.6,
        "heikinAvg30d": 3.608
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 404.797,
        "saikou": 5.95,
        "heikin": 3.41,
        "boshuAvg30d": 422.6,
        "heikinAvg30d": 3.543
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 295.23,
        "saikou": 7.54,
        "heikin": 4.52,
        "boshuAvg30d": 422.6,
        "heikinAvg30d": 3.616
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 381.722,
        "saikou": 6.03,
        "heikin": 3.43,
        "boshuAvg30d": 443.2,
        "heikinAvg30d": 3.863
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 479.943,
        "saikou": 7.49,
        "heikin": 4.51,
        "boshuAvg30d": 451.2,
        "heikinAvg30d": 3.978
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 459.526,
        "saikou": 6.98,
        "heikin": 2.72,
        "boshuAvg30d": 456.2,
        "heikinAvg30d": 3.833
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 449.341,
        "saikou": 7.4,
        "heikin": 3.1,
        "boshuAvg30d": 461.2,
        "heikinAvg30d": 3.783
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 472.999,
        "saikou": 7,
        "heikin": 2.55,
        "boshuAvg30d": 461.2,
        "heikinAvg30d": 4.051
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 463.506,
        "saikou": 7.2,
        "heikin": 2.73,
        "boshuAvg30d": 461.2,
        "heikinAvg30d": 4.098
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 473.054,
        "saikou": 7.88,
        "heikin": 2.93,
        "boshuAvg30d": 458.4,
        "heikinAvg30d": 4.317
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 454.617,
        "saikou": 7.88,
        "heikin": 2.84,
        "boshuAvg30d": 458.4,
        "heikinAvg30d": 4.368
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 400.952,
        "saikou": 8.49,
        "heikin": 2.47,
        "boshuAvg30d": 458.4,
        "heikinAvg30d": 4.234
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 398.984,
        "saikou": 8.49,
        "heikin": 2.57,
        "boshuAvg30d": 457.4,
        "heikinAvg30d": 4.158
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 416.081,
        "saikou": 7.79,
        "heikin": 2.44,
        "boshuAvg30d": 454.6,
        "heikinAvg30d": 4.154
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 414.181,
        "saikou": 7.88,
        "heikin": 2.4,
        "boshuAvg30d": 454.6,
        "heikinAvg30d": 4.131
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 368.062,
        "saikou": 7.39,
        "heikin": 2.54,
        "boshuAvg30d": 453.2,
        "heikinAvg30d": 3.953
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 330.19,
        "saikou": 7.28,
        "heikin": 2.56,
        "boshuAvg30d": 453.2,
        "heikinAvg30d": 3.982
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 331.158,
        "saikou": 7.39,
        "heikin": 2.41,
        "boshuAvg30d": 450.2,
        "heikinAvg30d": 4.11
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 312.665,
        "saikou": 8.01,
        "heikin": 2.3,
        "boshuAvg30d": 449.8,
        "heikinAvg30d": 4.232
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 312.665,
        "saikou": 5.37,
        "heikin": 2.04,
        "boshuAvg30d": 448.8,
        "heikinAvg30d": 4.249
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 359.667,
        "saikou": 5.96,
        "heikin": 2.11,
        "boshuAvg30d": 448.6,
        "heikinAvg30d": 4.087
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 437.865,
        "saikou": 10,
        "heikin": 3.85,
        "boshuAvg30d": 447.4,
        "heikinAvg30d": 4.007
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 590.814,
        "saikou": 6.02,
        "heikin": 2.3,
        "boshuAvg30d": 447.4,
        "heikinAvg30d": 3.958
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 549.971,
        "saikou": 4.57,
        "heikin": 2.2,
        "boshuAvg30d": 447.4,
        "heikinAvg30d": 4.256
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 541.453,
        "saikou": 5.89,
        "heikin": 2.7,
        "boshuAvg30d": 447.3,
        "heikinAvg30d": 4.455
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 623.75,
        "saikou": 5.98,
        "heikin": 3.02,
        "boshuAvg30d": 443.2,
        "heikinAvg30d": 4.38
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 569.374,
        "saikou": 6.43,
        "heikin": 2.76,
        "boshuAvg30d": 442.8,
        "heikinAvg30d": 4.305
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 578.265,
        "saikou": 4.9,
        "heikin": 2.46,
        "boshuAvg30d": 445.0,
        "heikinAvg30d": 4.44
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 513.628,
        "saikou": 5.3,
        "heikin": 2.61,
        "boshuAvg30d": 445.0,
        "heikinAvg30d": 4.32
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 513.628,
        "saikou": 5.28,
        "heikin": 2.71,
        "boshuAvg30d": 445.4,
        "heikinAvg30d": 4.336
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 507.907,
        "saikou": 5.33,
        "heikin": 3.15,
        "boshuAvg30d": 445.4,
        "heikinAvg30d": 4.217
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 541.267,
        "saikou": 5.56,
        "heikin": 2.74,
        "boshuAvg30d": 443.4,
        "heikinAvg30d": 4.198
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 633.556,
        "saikou": 4.28,
        "heikin": 2.41,
        "boshuAvg30d": 443.4,
        "heikinAvg30d": 4.188
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 646.596,
        "saikou": 4.28,
        "heikin": 2.02,
        "boshuAvg30d": 442.6,
        "heikinAvg30d": 4.06
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 531.227,
        "saikou": 5.34,
        "heikin": 3.39,
        "boshuAvg30d": 442.6,
        "heikinAvg30d": 4.205
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 533.275,
        "saikou": 5.69,
        "heikin": 3.43,
        "boshuAvg30d": 443.0,
        "heikinAvg30d": 3.896
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 625.112,
        "saikou": 5.57,
        "heikin": 2.5,
        "boshuAvg30d": 441.0,
        "heikinAvg30d": 4.052
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 612.405,
        "saikou": 5.27,
        "heikin": 2.76,
        "boshuAvg30d": 439.0,
        "heikinAvg30d": 4.121
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 622.023,
        "saikou": 4.9,
        "heikin": 2.39,
        "boshuAvg30d": 438.0,
        "heikinAvg30d": 4.093
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 242,
        "ouatsu": 192.527,
        "saikou": 5.1,
        "heikin": 1.9,
        "boshuAvg30d": 68.1,
        "heikinAvg30d": 1.927
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 242,
        "ouatsu": 230.738,
        "saikou": 5.1,
        "heikin": 1.87,
        "boshuAvg30d": 68.1,
        "heikinAvg30d": 1.792
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 242,
        "ouatsu": 252.57,
        "saikou": 2.59,
        "heikin": 1.79,
        "boshuAvg30d": 68.1,
        "heikinAvg30d": 1.846
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 242,
        "ouatsu": 252.57,
        "saikou": 5.1,
        "heikin": 1.82,
        "boshuAvg30d": 68.1,
        "heikinAvg30d": 1.933
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 241,
        "ouatsu": 228.986,
        "saikou": 5.1,
        "heikin": 1.83,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 1.83
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 241,
        "ouatsu": 236.795,
        "saikou": 2.48,
        "heikin": 1.8,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 1.863
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 240,
        "ouatsu": 262.45,
        "saikou": 2.37,
        "heikin": 1.56,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 1.827
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 240,
        "ouatsu": 258.61,
        "saikou": 2.37,
        "heikin": 1.57,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 2.015
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 241,
        "ouatsu": 263.709,
        "saikou": 2.41,
        "heikin": 1.66,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 2.059
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 241,
        "ouatsu": 265.569,
        "saikou": 2.37,
        "heikin": 1.56,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 1.968
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 241,
        "ouatsu": 267.559,
        "saikou": 2.55,
        "heikin": 1.25,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 2.074
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 241,
        "ouatsu": 256.974,
        "saikou": 2.89,
        "heikin": 1.51,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 2.076
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 250,
        "ouatsu": 246.742,
        "saikou": 9.98,
        "heikin": 2.72,
        "boshuAvg30d": 76.9,
        "heikinAvg30d": 2.126
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 254,
        "ouatsu": 246.742,
        "saikou": 8,
        "heikin": 2.5,
        "boshuAvg30d": 80.1,
        "heikinAvg30d": 2.098
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 257,
        "ouatsu": 228.521,
        "saikou": 5.1,
        "heikin": 2.23,
        "boshuAvg30d": 83.1,
        "heikinAvg30d": 2.2
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 259,
        "ouatsu": 184.885,
        "saikou": 5.1,
        "heikin": 2.23,
        "boshuAvg30d": 85.1,
        "heikinAvg30d": 2.077
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 259,
        "ouatsu": 183.385,
        "saikou": 3.48,
        "heikin": 2.3,
        "boshuAvg30d": 85.1,
        "heikinAvg30d": 2.358
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 259,
        "ouatsu": 191.269,
        "saikou": 3.48,
        "heikin": 2.24,
        "boshuAvg30d": 85.1,
        "heikinAvg30d": 2.447
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 264,
        "ouatsu": 193.259,
        "saikou": 3.49,
        "heikin": 2.59,
        "boshuAvg30d": 89.3,
        "heikinAvg30d": 2.739
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 264,
        "ouatsu": 193.259,
        "saikou": 3.48,
        "heikin": 2.57,
        "boshuAvg30d": 89.3,
        "heikinAvg30d": 2.738
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 264,
        "ouatsu": 185.353,
        "saikou": 4.52,
        "heikin": 2.94,
        "boshuAvg30d": 90.1,
        "heikinAvg30d": 2.971
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 264,
        "ouatsu": 185.353,
        "saikou": 6.61,
        "heikin": 3.32,
        "boshuAvg30d": 89.3,
        "heikinAvg30d": 3.025
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 263,
        "ouatsu": 154.084,
        "saikou": 7,
        "heikin": 3.5,
        "boshuAvg30d": 88.3,
        "heikinAvg30d": 2.818
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 262,
        "ouatsu": 154.084,
        "saikou": 7,
        "heikin": 3.47,
        "boshuAvg30d": 87.3,
        "heikinAvg30d": 2.701
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 258,
        "ouatsu": 132,
        "saikou": 4.48,
        "heikin": 2.59,
        "boshuAvg30d": 84.1,
        "heikinAvg30d": 2.633
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 258,
        "ouatsu": 139.936,
        "saikou": 4.48,
        "heikin": 2.57,
        "boshuAvg30d": 84.1,
        "heikinAvg30d": 2.62
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 258,
        "ouatsu": 143.825,
        "saikou": 4.48,
        "heikin": 2.56,
        "boshuAvg30d": 84.1,
        "heikinAvg30d": 2.536
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 257,
        "ouatsu": 143.825,
        "saikou": 4.48,
        "heikin": 2.47,
        "boshuAvg30d": 83.9,
        "heikinAvg30d": 2.549
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 257,
        "ouatsu": 143.825,
        "saikou": 8,
        "heikin": 3.26,
        "boshuAvg30d": 83.1,
        "heikinAvg30d": 2.738
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 257,
        "ouatsu": 135.805,
        "saikou": 8,
        "heikin": 3.45,
        "boshuAvg30d": 83.1,
        "heikinAvg30d": 2.772
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 255,
        "ouatsu": 213.233,
        "saikou": 4.03,
        "heikin": 2.96,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 2.479
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 255,
        "ouatsu": 256.135,
        "saikou": 3.48,
        "heikin": 2.41,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 2.501
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 255,
        "ouatsu": 407.27,
        "saikou": 5.1,
        "heikin": 2.03,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 2.454
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 255,
        "ouatsu": 426.755,
        "saikou": 2.76,
        "heikin": 2.55,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 2.62
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 255,
        "ouatsu": 442.421,
        "saikou": 2.69,
        "heikin": 1.88,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 2.529
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 254,
        "ouatsu": 433.028,
        "saikou": 2.75,
        "heikin": 2.05,
        "boshuAvg30d": 81.7,
        "heikinAvg30d": 2.493
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 252,
        "ouatsu": 432.534,
        "saikou": 2.69,
        "heikin": 1.6,
        "boshuAvg30d": 79.7,
        "heikinAvg30d": 2.317
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 252,
        "ouatsu": 442.385,
        "saikou": 2.59,
        "heikin": 1.55,
        "boshuAvg30d": 79.7,
        "heikinAvg30d": 2.253
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 252,
        "ouatsu": 444.384,
        "saikou": 2.47,
        "heikin": 1.54,
        "boshuAvg30d": 79.7,
        "heikinAvg30d": 2.048
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 252,
        "ouatsu": 444.384,
        "saikou": 2.17,
        "heikin": 1.95,
        "boshuAvg30d": 79.7,
        "heikinAvg30d": 2.086
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 252,
        "ouatsu": 436.478,
        "saikou": 2.2,
        "heikin": 1.5,
        "boshuAvg30d": 79.7,
        "heikinAvg30d": 2.143
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 252,
        "ouatsu": 436.478,
        "saikou": 2.19,
        "heikin": 1.56,
        "boshuAvg30d": 79.7,
        "heikinAvg30d": 2.145
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 253,
        "ouatsu": 427.404,
        "saikou": 3.58,
        "heikin": 1.71,
        "boshuAvg30d": 79.9,
        "heikinAvg30d": 2.065
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 254,
        "ouatsu": 365.629,
        "saikou": 5.1,
        "heikin": 1.97,
        "boshuAvg30d": 80.9,
        "heikinAvg30d": 2.202
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 254,
        "ouatsu": 317.558,
        "saikou": 5.1,
        "heikin": 1.82,
        "boshuAvg30d": 80.9,
        "heikinAvg30d": 2.246
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 253,
        "ouatsu": 327.367,
        "saikou": 5.1,
        "heikin": 2.17,
        "boshuAvg30d": 79.9,
        "heikinAvg30d": 2.21
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 252,
        "ouatsu": 325.507,
        "saikou": 5.1,
        "heikin": 2.27,
        "boshuAvg30d": 78.9,
        "heikinAvg30d": 2.166
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 249,
        "ouatsu": 325.867,
        "saikou": 3.51,
        "heikin": 2.24,
        "boshuAvg30d": 75.9,
        "heikinAvg30d": 2.166
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.55,
        "heikin": 1.55,
        "boshuAvg30d": 53.8,
        "heikinAvg30d": 0.936
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 53.8,
        "heikinAvg30d": 1.061
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.7,
        "heikin": 1.68,
        "boshuAvg30d": 53.8,
        "heikinAvg30d": 1.036
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.85,
        "heikin": 1.85,
        "boshuAvg30d": 53.8,
        "heikinAvg30d": 1.149
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 53.8,
        "heikinAvg30d": 1.211
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 53.8,
        "heikinAvg30d": 0.973
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 53.8,
        "heikinAvg30d": 1.177
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.92,
        "boshuAvg30d": 53.8,
        "heikinAvg30d": 1.444
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 53.8,
        "heikinAvg30d": 1.263
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 53.8,
        "heikinAvg30d": 1.35
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 53.8,
        "heikinAvg30d": 1.612
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 53.8,
        "heikinAvg30d": 1.571
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.95,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 1.767
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 1.598
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.5,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.547
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 68.212,
        "saikou": 2.4,
        "heikin": 0.51,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.648
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 5.3,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 1.788
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 3.1,
        "heikin": 2.85,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 2.176
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.35,
        "heikin": 2.35,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 2.674
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.06,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 2.642
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 3.574
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.71,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.721
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.85,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 3.304
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.9,
        "heikin": 3.9,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.955
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 63.928,
        "saikou": 3.8,
        "heikin": 0.58,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.284
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 63.928,
        "saikou": 3.35,
        "heikin": 0.57,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.554
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 63.928,
        "saikou": 5.55,
        "heikin": 0.71,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.561
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.306
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.45,
        "heikin": 3.45,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.257
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.45,
        "heikin": 3.45,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.844
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.1,
        "heikin": 5.1,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.218
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.6,
        "heikin": 5.6,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.748
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.7,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.296
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 2.88,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.382
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.332
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 3.366
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.796
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.583
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.34,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.738
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.7,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 1.88
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.1,
        "heikin": 2.1,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 2.065
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 2.135
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.25,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 1.952
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 2.022
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.6,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 1.986
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.35,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 1.766
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 58.8,
        "heikinAvg30d": 1.639
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.244
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 139.101,
        "saikou": 2.44,
        "heikin": 1.2,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 2.033
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 113.216,
        "saikou": 2.44,
        "heikin": 1.08,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 1.688
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 135.201,
        "saikou": 2.44,
        "heikin": 1.15,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 1.615
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 109.128,
        "saikou": 2.44,
        "heikin": 1.28,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 1.548
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 117.334,
        "saikou": 2.44,
        "heikin": 1.18,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 1.521
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 109.128,
        "saikou": 2.44,
        "heikin": 1.28,
        "boshuAvg30d": 129.4,
        "heikinAvg30d": 1.651
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 101.749,
        "saikou": 2.44,
        "heikin": 1.51,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 1.845
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 120.953,
        "saikou": 2.44,
        "heikin": 1.58,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 1.962
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 144.898,
        "saikou": 2.44,
        "heikin": 1.26,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 1.918
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 120.953,
        "saikou": 2.44,
        "heikin": 1.6,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 1.994
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 1.99,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 1.911
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 120.953,
        "saikou": 1.99,
        "heikin": 1.65,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 1.738
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 120.953,
        "saikou": 2.44,
        "heikin": 1.83,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 1.882
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 120.953,
        "saikou": 2.44,
        "heikin": 1.7,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 1.812
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 118.955,
        "saikou": 2.44,
        "heikin": 1.67,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 1.938
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 99.341,
        "saikou": 2.44,
        "heikin": 1.99,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 1.978
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 99.341,
        "saikou": 2.44,
        "heikin": 2.11,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 2.202
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 101.339,
        "saikou": 3.95,
        "heikin": 2.36,
        "boshuAvg30d": 155.0,
        "heikinAvg30d": 2.43
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 107.193,
        "saikou": 3.95,
        "heikin": 3.04,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 2.625
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 125.364,
        "saikou": 3.95,
        "heikin": 2.38,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 2.627
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 195.212,
        "saikou": 5.95,
        "heikin": 1.94,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 2.921
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 196.655,
        "saikou": 5.95,
        "heikin": 1.84,
        "boshuAvg30d": 154.0,
        "heikinAvg30d": 2.902
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 198.64,
        "saikou": 5.95,
        "heikin": 1.97,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.807
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 198.64,
        "saikou": 3.95,
        "heikin": 1.81,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.54
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 145.846,
        "saikou": 3,
        "heikin": 1.75,
        "boshuAvg30d": 153.6,
        "heikinAvg30d": 2.354
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 107.193,
        "saikou": 2.32,
        "heikin": 2.28,
        "boshuAvg30d": 153.6,
        "heikinAvg30d": 2.318
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 107.193,
        "saikou": 5.95,
        "heikin": 3.02,
        "boshuAvg30d": 153.6,
        "heikinAvg30d": 2.704
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 107.193,
        "saikou": 3,
        "heikin": 2.78,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 2.557
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 192.862,
        "saikou": 3,
        "heikin": 1.55,
        "boshuAvg30d": 153.6,
        "heikinAvg30d": 2.549
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 141.32,
        "saikou": 3.4,
        "heikin": 2.3,
        "boshuAvg30d": 153.6,
        "heikinAvg30d": 2.498
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 126.801,
        "saikou": 3.95,
        "heikin": 2.27,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 2.429
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 107.193,
        "saikou": 3.95,
        "heikin": 2.78,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 2.62
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 107.193,
        "saikou": 3.95,
        "heikin": 2.65,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 2.515
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 105.195,
        "saikou": 2.78,
        "heikin": 2.6,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 2.596
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 103.208,
        "saikou": 2.76,
        "heikin": 2.5,
        "boshuAvg30d": 152.6,
        "heikinAvg30d": 2.64
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 88.208,
        "saikou": 2.76,
        "heikin": 2.61,
        "boshuAvg30d": 151.6,
        "heikinAvg30d": 2.676
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 101.248,
        "saikou": 2.76,
        "heikin": 2.48,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.434
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 101.248,
        "saikou": 2.78,
        "heikin": 2.58,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.491
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 101.339,
        "saikou": 3.51,
        "heikin": 2.55,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.566
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 101.339,
        "saikou": 2.5,
        "heikin": 2.32,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 2.506
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 99.354,
        "saikou": 2.5,
        "heikin": 2.33,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 2.454
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 99.354,
        "saikou": 2.47,
        "heikin": 2.29,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 2.424
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 2.05,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 2.334
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 2.25,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 2.333
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 101.339,
        "saikou": 2.44,
        "heikin": 2.22,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 2.388
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 101.339,
        "saikou": 2.71,
        "heikin": 2.05,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 2.304
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 162.958,
        "saikou": 2.44,
        "heikin": 1.39,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 1.901
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 84.896,
        "saikou": 2.35,
        "heikin": 2.14,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 1.998
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 179.54,
        "saikou": 2.29,
        "heikin": 1.83,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.584
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 179.54,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.666
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 181.34,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.771
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 183.33,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.652
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 183.33,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.563
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 183.33,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.733
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 200.189,
        "saikou": 2.29,
        "heikin": 2.03,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.962
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 200.189,
        "saikou": 2.29,
        "heikin": 2.08,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.164
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 200.189,
        "saikou": 4.55,
        "heikin": 3.32,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.211
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 200.189,
        "saikou": 4.75,
        "heikin": 3.41,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.464
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 200.189,
        "saikou": 4.55,
        "heikin": 3.33,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.726
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 200.189,
        "saikou": 4.55,
        "heikin": 3.3,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.768
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 200.189,
        "saikou": 5.07,
        "heikin": 3.43,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 3.054
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 182.305,
        "saikou": 2.31,
        "heikin": 2.13,
        "boshuAvg30d": 142.4,
        "heikinAvg30d": 2.253
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 182.305,
        "saikou": 2.29,
        "heikin": 1.63,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 1.85
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 182.305,
        "saikou": 2.29,
        "heikin": 1.23,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 1.59
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 182.305,
        "saikou": 2.29,
        "heikin": 1.62,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 1.703
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 182.305,
        "saikou": 2.29,
        "heikin": 1.17,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 1.93
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 182.305,
        "saikou": 2.29,
        "heikin": 1.19,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.141
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 280.034,
        "saikou": 1.56,
        "heikin": 0.56,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.14
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 288.104,
        "saikou": 1.56,
        "heikin": 0.63,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 2.316
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 288.104,
        "saikou": 1.56,
        "heikin": 0.68,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.118
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 288.104,
        "saikou": 1.56,
        "heikin": 1.1,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.111
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 288.104,
        "saikou": 1.98,
        "heikin": 1.42,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.041
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 268.258,
        "saikou": 1.56,
        "heikin": 0.49,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.794
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 288.104,
        "saikou": 2.29,
        "heikin": 0.91,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.775
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 292.079,
        "saikou": 1.56,
        "heikin": 0.55,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.056
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 181.852,
        "saikou": 2.7,
        "heikin": 1.16,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 1.873
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 273.426,
        "saikou": 2.29,
        "heikin": 0.83,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 1.885
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 182.305,
        "saikou": 4,
        "heikin": 1.65,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.107
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 182.305,
        "saikou": 2.29,
        "heikin": 1.27,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.442
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 186.995,
        "saikou": 2,
        "heikin": 1.53,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.829
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 182.305,
        "saikou": 2.29,
        "heikin": 2.06,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.74
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 188.565,
        "saikou": 6.57,
        "heikin": 3.85,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.332
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 188.565,
        "saikou": 6.29,
        "heikin": 3.74,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.729
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 188.565,
        "saikou": 6.67,
        "heikin": 3.9,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.01
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 186.575,
        "saikou": 6.32,
        "heikin": 3.72,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.29
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 186.575,
        "saikou": 6.29,
        "heikin": 3.72,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 4.275
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 204.459,
        "saikou": 7.1,
        "heikin": 3.86,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.999
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 206.449,
        "saikou": 6.58,
        "heikin": 3.66,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 3.592
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 206.449,
        "saikou": 7.23,
        "heikin": 4.41,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.404
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 206.449,
        "saikou": 6.75,
        "heikin": 4.21,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 3.028
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 206.449,
        "saikou": 6.6,
        "heikin": 4.03,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 3.224
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 200.189,
        "saikou": 6.32,
        "heikin": 4.28,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 3.114
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 200.189,
        "saikou": 6.3,
        "heikin": 4.27,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 2.912
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 200.189,
        "saikou": 5.07,
        "heikin": 3.59,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 2.512
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 200.189,
        "saikou": 5.56,
        "heikin": 3.87,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 2.627
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 200.189,
        "saikou": 2.53,
        "heikin": 1.81,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 1.771
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 61.473,
        "saikou": 1.7,
        "heikin": 1.59,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.77
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 61.473,
        "saikou": 1.7,
        "heikin": 1.59,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.781
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 61.473,
        "saikou": 1.6,
        "heikin": 1.58,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.773
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 61.473,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.761
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 61.473,
        "saikou": 1.7,
        "heikin": 1.59,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.76
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 61.473,
        "saikou": 1.7,
        "heikin": 1.59,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.773
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 61.473,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.892
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 49.93,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.886
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 61.473,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.912
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 61.473,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.947
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 61.473,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.914
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 61.473,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.88
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 89.473,
        "saikou": 1.7,
        "heikin": 1.14,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.95
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 90.473,
        "saikou": 1.7,
        "heikin": 1.18,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.924
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 90.473,
        "saikou": 1.6,
        "heikin": 1.16,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.972
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 136.973,
        "saikou": 1.7,
        "heikin": 1.1,
        "boshuAvg30d": 45.2,
        "heikinAvg30d": 0.873
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 113.973,
        "saikou": 1.7,
        "heikin": 1.02,
        "boshuAvg30d": 45.2,
        "heikinAvg30d": 0.883
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 136.973,
        "saikou": 1.6,
        "heikin": 1.12,
        "boshuAvg30d": 45.2,
        "heikinAvg30d": 0.932
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 162.973,
        "saikou": 2.3,
        "heikin": 0.97,
        "boshuAvg30d": 47.2,
        "heikinAvg30d": 1.027
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 162.973,
        "saikou": 1.65,
        "heikin": 0.96,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 0.995
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 167.973,
        "saikou": 1.6,
        "heikin": 0.98,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.014
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 167.973,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 0.987
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 167.973,
        "saikou": 1.6,
        "heikin": 1.16,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.011
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 167.973,
        "saikou": 1.6,
        "heikin": 1.16,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.016
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 170.973,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.168
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 170.973,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.134
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 170.973,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.072
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 170.973,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.075
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 170.973,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.038
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 147.973,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 47.2,
        "heikinAvg30d": 0.97
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 136.973,
        "saikou": 1.6,
        "heikin": 1.12,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.003
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 101.473,
        "saikou": 1.6,
        "heikin": 1.25,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.041
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 64.473,
        "saikou": 1.6,
        "heikin": 1.58,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.034
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 51.473,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 1.037
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 50.473,
        "saikou": 1.95,
        "heikin": 1.63,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.112
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 49.473,
        "saikou": 1.95,
        "heikin": 1.63,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.056
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.102
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.157
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.115
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.131
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.95,
        "heikin": 1.63,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.115
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 1.95,
        "heikin": 1.63,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.113
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 48.473,
        "saikou": 3.84,
        "heikin": 2.14,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.751
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 61.473,
        "saikou": 1.7,
        "heikin": 1.61,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.738
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 61.473,
        "saikou": 1.7,
        "heikin": 1.61,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.763
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 61.473,
        "saikou": 1.7,
        "heikin": 1.61,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.756
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 61.473,
        "saikou": 1.7,
        "heikin": 1.61,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.766
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 61.473,
        "saikou": 1.7,
        "heikin": 1.59,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.823
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 185.91,
        "saikou": 7.17,
        "heikin": 5.11,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 3.87
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 187.834,
        "saikou": 6.7,
        "heikin": 5.61,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 3.25
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 193.792,
        "saikou": 6.7,
        "heikin": 5.38,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 2.897
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 193.79,
        "saikou": 6.8,
        "heikin": 5.18,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 2.678
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 184.164,
        "saikou": 6.8,
        "heikin": 5.74,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 2.577
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 184.164,
        "saikou": 6.81,
        "heikin": 5.76,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 2.828
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 271.925,
        "saikou": 6.61,
        "heikin": 5.72,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 3.108
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 268.097,
        "saikou": 6.72,
        "heikin": 6.04,
        "boshuAvg30d": 165.0,
        "heikinAvg30d": 3.433
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 269.941,
        "saikou": 6.91,
        "heikin": 6.13,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 3.711
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 315.925,
        "saikou": 7.04,
        "heikin": 6.48,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 4.078
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 309.949,
        "saikou": 6.97,
        "heikin": 6.41,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 4.251
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 266.649,
        "saikou": 7.04,
        "heikin": 6.41,
        "boshuAvg30d": 165.8,
        "heikinAvg30d": 4.148
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 266.821,
        "saikou": 6.97,
        "heikin": 5.34,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 3.894
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 271.649,
        "saikou": 6.62,
        "heikin": 5.45,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 3.273
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 166.649,
        "saikou": 3.41,
        "heikin": 2.71,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 2.801
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 87.171,
        "saikou": 2.68,
        "heikin": 2,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 2.917
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 196.797,
        "saikou": 3.44,
        "heikin": 2.8,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 3.153
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 200.649,
        "saikou": 3.35,
        "heikin": 2.8,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 3.53
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 191.24,
        "saikou": 3.15,
        "heikin": 2.62,
        "boshuAvg30d": 176.0,
        "heikinAvg30d": 3.617
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 191.241,
        "saikou": 2.94,
        "heikin": 2.49,
        "boshuAvg30d": 176.0,
        "heikinAvg30d": 3.566
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 183.793,
        "saikou": 2.9,
        "heikin": 2.51,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 3.469
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 171.978,
        "saikou": 2.29,
        "heikin": 2.15,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 3.568
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 179.91,
        "saikou": 2.26,
        "heikin": 2.05,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 3.453
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 177.912,
        "saikou": 2.27,
        "heikin": 2.05,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 3.426
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 160.974,
        "saikou": 1.85,
        "heikin": 0.56,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 2.952
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 171.989,
        "saikou": 2,
        "heikin": 0.89,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 3.131
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 179.902,
        "saikou": 1.9,
        "heikin": 1.73,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 3.533
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 187.828,
        "saikou": 3.08,
        "heikin": 2.57,
        "boshuAvg30d": 176.8,
        "heikinAvg30d": 4.052
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 189.328,
        "saikou": 2.9,
        "heikin": 2.56,
        "boshuAvg30d": 176.0,
        "heikinAvg30d": 4.336
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 191.228,
        "saikou": 4.05,
        "heikin": 3.18,
        "boshuAvg30d": 174.8,
        "heikinAvg30d": 4.65
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 255.244,
        "saikou": 6.87,
        "heikin": 5.2,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 4.814
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 223.602,
        "saikou": 7.21,
        "heikin": 3.35,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 5.541
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 274.602,
        "saikou": 8.73,
        "heikin": 7.61,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 5.689
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 298.602,
        "saikou": 10,
        "heikin": 7.78,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 5.984
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 348.62,
        "saikou": 8.81,
        "heikin": 6.63,
        "boshuAvg30d": 169.8,
        "heikinAvg30d": 5.888
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 337.731,
        "saikou": 9.91,
        "heikin": 7.42,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 6.034
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 250.297,
        "saikou": 8.31,
        "heikin": 6.37,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 6.099
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 254.162,
        "saikou": 8.36,
        "heikin": 6.34,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 5.938
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 383.377,
        "saikou": 8.5,
        "heikin": 6.44,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 5.692
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 261.992,
        "saikou": 8.08,
        "heikin": 6.1,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 5.26
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 273.376,
        "saikou": 7.77,
        "heikin": 6.48,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 5.134
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 257.36,
        "saikou": 7.44,
        "heikin": 6.16,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 4.997
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 262.036,
        "saikou": 6.97,
        "heikin": 6.14,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 4.819
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 265.012,
        "saikou": 7.57,
        "heikin": 6.87,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.696
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 263.036,
        "saikou": 7.57,
        "heikin": 6.91,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.778
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 263.036,
        "saikou": 7.14,
        "heikin": 6.56,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 4.305
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 272.662,
        "saikou": 7.28,
        "heikin": 6.66,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 4.352
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 210.662,
        "saikou": 6.89,
        "heikin": 4.93,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 3.751
      }
    ]
  }
};
