// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/04〜2026/10/03）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-04",
  "fetchedAt": "2026-10-04",
  "avgWindowLabel": "過去30日平均（2026/09/04〜2026/10/03）",
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
      "boshu": 1024,
      "ouatsu": 1540.714,
      "saikou": 10,
      "heikin": 2.92,
      "boshuAvg30d": 1260.9,
      "heikinAvg30d": 2.693
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1024,
      "ouatsu": 1525.641,
      "saikou": 10,
      "heikin": 2.45,
      "boshuAvg30d": 1260.9,
      "heikinAvg30d": 2.622
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1024,
      "ouatsu": 1660.02,
      "saikou": 10,
      "heikin": 2.31,
      "boshuAvg30d": 1260.9,
      "heikinAvg30d": 2.685
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1024,
      "ouatsu": 1706.897,
      "saikou": 10,
      "heikin": 2.27,
      "boshuAvg30d": 1260.9,
      "heikinAvg30d": 2.66
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1021,
      "ouatsu": 1667.468,
      "saikou": 10,
      "heikin": 2.09,
      "boshuAvg30d": 1256.1,
      "heikinAvg30d": 2.641
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1020,
      "ouatsu": 1661.933,
      "saikou": 10,
      "heikin": 2.38,
      "boshuAvg30d": 1255.1,
      "heikinAvg30d": 2.721
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1017,
      "ouatsu": 1865.784,
      "saikou": 10,
      "heikin": 2.44,
      "boshuAvg30d": 1272.0,
      "heikinAvg30d": 2.826
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1019,
      "ouatsu": 1794.454,
      "saikou": 10,
      "heikin": 2.8,
      "boshuAvg30d": 1273.1,
      "heikinAvg30d": 2.925
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1021,
      "ouatsu": 1856.815,
      "saikou": 10,
      "heikin": 2.79,
      "boshuAvg30d": 1276.0,
      "heikinAvg30d": 2.982
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1022,
      "ouatsu": 1866.76,
      "saikou": 10,
      "heikin": 2.99,
      "boshuAvg30d": 1276.1,
      "heikinAvg30d": 3.028
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1022,
      "ouatsu": 1619.856,
      "saikou": 10,
      "heikin": 2.82,
      "boshuAvg30d": 1276.1,
      "heikinAvg30d": 3.15
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1022,
      "ouatsu": 1644.632,
      "saikou": 10,
      "heikin": 2.57,
      "boshuAvg30d": 1276.1,
      "heikinAvg30d": 3.144
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1082,
      "ouatsu": 1555.539,
      "saikou": 10,
      "heikin": 2.86,
      "boshuAvg30d": 1341.5,
      "heikinAvg30d": 3.296
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1105,
      "ouatsu": 1674.057,
      "saikou": 10,
      "heikin": 2.44,
      "boshuAvg30d": 1362.7,
      "heikinAvg30d": 3.07
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1126,
      "ouatsu": 1608.354,
      "saikou": 10,
      "heikin": 2.7,
      "boshuAvg30d": 1385.5,
      "heikinAvg30d": 2.995
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1143,
      "ouatsu": 1359.932,
      "saikou": 9.99,
      "heikin": 2.35,
      "boshuAvg30d": 1403.4,
      "heikinAvg30d": 2.919
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1143,
      "ouatsu": 1373.202,
      "saikou": 10,
      "heikin": 2.36,
      "boshuAvg30d": 1404.3,
      "heikinAvg30d": 3.13
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1143,
      "ouatsu": 1488.222,
      "saikou": 10,
      "heikin": 2.24,
      "boshuAvg30d": 1404.3,
      "heikinAvg30d": 3.253
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1075,
      "ouatsu": 1379.393,
      "saikou": 10,
      "heikin": 2.43,
      "boshuAvg30d": 1369.7,
      "heikinAvg30d": 3.369
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1078,
      "ouatsu": 1382.656,
      "saikou": 10,
      "heikin": 2.41,
      "boshuAvg30d": 1373.6,
      "heikinAvg30d": 3.405
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1083,
      "ouatsu": 1359.798,
      "saikou": 10,
      "heikin": 2.65,
      "boshuAvg30d": 1381.3,
      "heikinAvg30d": 3.414
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1083,
      "ouatsu": 1365.184,
      "saikou": 10,
      "heikin": 2.66,
      "boshuAvg30d": 1381.3,
      "heikinAvg30d": 3.397
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1080,
      "ouatsu": 1459.256,
      "saikou": 10,
      "heikin": 2.58,
      "boshuAvg30d": 1378.3,
      "heikinAvg30d": 3.323
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1079,
      "ouatsu": 1457.718,
      "saikou": 10,
      "heikin": 2.53,
      "boshuAvg30d": 1377.3,
      "heikinAvg30d": 3.251
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1059,
      "ouatsu": 1416.77,
      "saikou": 10,
      "heikin": 2.51,
      "boshuAvg30d": 1366.1,
      "heikinAvg30d": 3.175
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1059,
      "ouatsu": 1440.148,
      "saikou": 10,
      "heikin": 2.58,
      "boshuAvg30d": 1366.1,
      "heikinAvg30d": 3.176
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1059,
      "ouatsu": 1369.292,
      "saikou": 10,
      "heikin": 2.54,
      "boshuAvg30d": 1363.1,
      "heikinAvg30d": 3.337
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1057,
      "ouatsu": 1400.699,
      "saikou": 10,
      "heikin": 2.29,
      "boshuAvg30d": 1357.9,
      "heikinAvg30d": 3.393
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1054,
      "ouatsu": 1263.623,
      "saikou": 10,
      "heikin": 2.64,
      "boshuAvg30d": 1353.1,
      "heikinAvg30d": 3.435
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1048,
      "ouatsu": 1289.403,
      "saikou": 10,
      "heikin": 2.68,
      "boshuAvg30d": 1346.2,
      "heikinAvg30d": 3.461
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1114,
      "ouatsu": 1505.04,
      "saikou": 10,
      "heikin": 1.98,
      "boshuAvg30d": 1384.0,
      "heikinAvg30d": 3.387
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1114,
      "ouatsu": 1403.032,
      "saikou": 10,
      "heikin": 2.54,
      "boshuAvg30d": 1384.0,
      "heikinAvg30d": 3.61
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1115,
      "ouatsu": 1454.244,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1384.1,
      "heikinAvg30d": 3.705
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1114,
      "ouatsu": 1499.883,
      "saikou": 9.9,
      "heikin": 3.23,
      "boshuAvg30d": 1382.1,
      "heikinAvg30d": 3.878
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1112,
      "ouatsu": 1631.85,
      "saikou": 9.7,
      "heikin": 3.12,
      "boshuAvg30d": 1374.2,
      "heikinAvg30d": 3.953
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1107,
      "ouatsu": 1811.834,
      "saikou": 8.19,
      "heikin": 3.2,
      "boshuAvg30d": 1369.7,
      "heikinAvg30d": 3.981
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1102,
      "ouatsu": 1800.747,
      "saikou": 8.19,
      "heikin": 3.17,
      "boshuAvg30d": 1362.0,
      "heikinAvg30d": 4.041
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1102,
      "ouatsu": 1923.741,
      "saikou": 8.13,
      "heikin": 2.9,
      "boshuAvg30d": 1362.0,
      "heikinAvg30d": 3.987
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1102,
      "ouatsu": 1852.221,
      "saikou": 8.13,
      "heikin": 3.11,
      "boshuAvg30d": 1362.6,
      "heikinAvg30d": 3.889
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1101,
      "ouatsu": 1884.234,
      "saikou": 8.04,
      "heikin": 2.9,
      "boshuAvg30d": 1361.6,
      "heikinAvg30d": 3.729
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1093,
      "ouatsu": 1890.004,
      "saikou": 8.03,
      "heikin": 3.37,
      "boshuAvg30d": 1356.3,
      "heikinAvg30d": 3.676
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1093,
      "ouatsu": 1913.067,
      "saikou": 7.66,
      "heikin": 2.89,
      "boshuAvg30d": 1352.7,
      "heikinAvg30d": 3.62
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1003,
      "ouatsu": 2008.651,
      "saikou": 7.3,
      "heikin": 2.94,
      "boshuAvg30d": 1265.7,
      "heikinAvg30d": 3.403
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1006,
      "ouatsu": 1932.424,
      "saikou": 8.06,
      "heikin": 3.13,
      "boshuAvg30d": 1268.7,
      "heikinAvg30d": 3.48
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1007,
      "ouatsu": 1740.758,
      "saikou": 7.36,
      "heikin": 3.18,
      "boshuAvg30d": 1270.1,
      "heikinAvg30d": 3.313
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1002,
      "ouatsu": 1771.139,
      "saikou": 7.79,
      "heikin": 3.09,
      "boshuAvg30d": 1263.3,
      "heikinAvg30d": 3.237
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 993,
      "ouatsu": 1875.146,
      "saikou": 6.98,
      "heikin": 2.8,
      "boshuAvg30d": 1256.1,
      "heikinAvg30d": 3.211
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 986,
      "ouatsu": 1728.253,
      "saikou": 7.06,
      "heikin": 2.16,
      "boshuAvg30d": 1248.2,
      "heikinAvg30d": 3.046
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
        "ouatsu": 172.908,
        "saikou": 7.08,
        "heikin": 2.38,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.079
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 151.958,
        "saikou": 6.15,
        "heikin": 1.43,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 0.963
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 168.058,
        "saikou": 3.85,
        "heikin": 1.61,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.071
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 199.958,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 0.963
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 193.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.245
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 191.958,
        "saikou": 3.5,
        "heikin": 1.53,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.425
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 242.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.266
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 191.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.106
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 252.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.355
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 250.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.147
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 154.908,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.272
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 201.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.42
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 188.908,
        "saikou": 5.73,
        "heikin": 2.16,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.804
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 229.161,
        "saikou": 2.12,
        "heikin": 1.3,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.425
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 188.908,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.287
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 180.108,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 1.321
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 0.897
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 194.055,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 0.973
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 0.913
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 0.934
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 163.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 0.992
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 112.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 1.008
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 161.24,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 0.909
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 161.258,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 0.936
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 114.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 1.014
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 0.962
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 200.608,
        "saikou": 8,
        "heikin": 1.09,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 1.301
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 192.415,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 1.226
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 154.908,
        "saikou": 8,
        "heikin": 2.45,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.203
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 152.958,
        "saikou": 9.8,
        "heikin": 2.97,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 1.364
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 203.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.077
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 162.958,
        "saikou": 6.14,
        "heikin": 2.07,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.82
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 179.358,
        "saikou": 7.9,
        "heikin": 1.58,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.256
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 191.958,
        "saikou": 8.14,
        "heikin": 3.11,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.298
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 177.208,
        "saikou": 2.38,
        "heikin": 1.85,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 2.361
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 171.3,
        "saikou": 3.33,
        "heikin": 2.48,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.232
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 126.958,
        "saikou": 2.98,
        "heikin": 2.91,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 2.174
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 195.408,
        "saikou": 3.01,
        "heikin": 2.29,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 2.378
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 112.958,
        "saikou": 2.36,
        "heikin": 2.22,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 1.825
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 110.968,
        "saikou": 2.21,
        "heikin": 2.08,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 1.733
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 197.3,
        "saikou": 4.39,
        "heikin": 3,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.805
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 150.968,
        "saikou": 2.21,
        "heikin": 1.92,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 1.628
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 201.222,
        "saikou": 2.1,
        "heikin": 1.62,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 1.256
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 152.958,
        "saikou": 4.16,
        "heikin": 1.85,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.732
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 152.958,
        "saikou": 3.7,
        "heikin": 2.15,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.285
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 174.958,
        "saikou": 3.95,
        "heikin": 2.04,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.341
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 201.258,
        "saikou": 1.35,
        "heikin": 1.2,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.244
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 198.011,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.318
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 83.109,
        "saikou": 7.06,
        "heikin": 5.24,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 7.619
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 83.109,
        "saikou": 7.57,
        "heikin": 5.4,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 7.861
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 102.987,
        "saikou": 8.48,
        "heikin": 6.11,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 8.075
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 102.987,
        "saikou": 8.48,
        "heikin": 6.13,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 8.112
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 100.989,
        "saikou": 8.48,
        "heikin": 6.14,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 8.156
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 100.989,
        "saikou": 8.48,
        "heikin": 6.1,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 8.198
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 93.987,
        "saikou": 8.24,
        "heikin": 6.9,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 8.189
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 95.487,
        "saikou": 7.67,
        "heikin": 6.54,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 8.148
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 97.486,
        "saikou": 7.44,
        "heikin": 6.47,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 8.144
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 97.486,
        "saikou": 7.36,
        "heikin": 6.43,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 8.12
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 7.58,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 8.116
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 7.17,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 8.137
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 85.486,
        "saikou": 10,
        "heikin": 7.95,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 8.248
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 83.986,
        "saikou": 10,
        "heikin": 8.39,
        "boshuAvg30d": 182.1,
        "heikinAvg30d": 8.349
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 61.486,
        "saikou": 10,
        "heikin": 7.96,
        "boshuAvg30d": 187.8,
        "heikinAvg30d": 8.465
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 81.986,
        "saikou": 9.99,
        "heikin": 7.64,
        "boshuAvg30d": 191.6,
        "heikinAvg30d": 8.486
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 95.486,
        "saikou": 10,
        "heikin": 8.55,
        "boshuAvg30d": 191.6,
        "heikinAvg30d": 8.708
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 93.986,
        "saikou": 10,
        "heikin": 8.63,
        "boshuAvg30d": 191.6,
        "heikinAvg30d": 8.646
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 101.437,
        "saikou": 10,
        "heikin": 8.65,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 8.34
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 100.087,
        "saikou": 10,
        "heikin": 8.66,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 8.333
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 101.437,
        "saikou": 10,
        "heikin": 8.66,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 8.333
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 101.436,
        "saikou": 10,
        "heikin": 8.65,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 8.345
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 99.441,
        "saikou": 10,
        "heikin": 8.64,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 8.359
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 101.437,
        "saikou": 10,
        "heikin": 8.65,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 8.38
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 95.676,
        "saikou": 10,
        "heikin": 8.67,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 8.51
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 97.641,
        "saikou": 10,
        "heikin": 8.63,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 8.465
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 89.437,
        "saikou": 10,
        "heikin": 8.4,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 8.245
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 87.507,
        "saikou": 10,
        "heikin": 7.62,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 8.194
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 86.157,
        "saikou": 10,
        "heikin": 7.54,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 8.203
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 87.507,
        "saikou": 10,
        "heikin": 6.25,
        "boshuAvg30d": 138.9,
        "heikinAvg30d": 7.731
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 91.437,
        "saikou": 10,
        "heikin": 7.19,
        "boshuAvg30d": 187.9,
        "heikinAvg30d": 8.172
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 67.437,
        "saikou": 10,
        "heikin": 6.55,
        "boshuAvg30d": 187.9,
        "heikinAvg30d": 7.612
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 79.437,
        "saikou": 10,
        "heikin": 6.5,
        "boshuAvg30d": 187.9,
        "heikinAvg30d": 7.689
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 65.937,
        "saikou": 9.9,
        "heikin": 6.46,
        "boshuAvg30d": 187.0,
        "heikinAvg30d": 7.472
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 79.437,
        "saikou": 9.7,
        "heikin": 6.19,
        "boshuAvg30d": 185.1,
        "heikinAvg30d": 7.337
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 49.376,
        "saikou": 2.7,
        "heikin": 2.7,
        "boshuAvg30d": 183.2,
        "heikinAvg30d": 7.235
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 59.556,
        "saikou": 4,
        "heikin": 4,
        "boshuAvg30d": 182.2,
        "heikinAvg30d": 7.368
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 44.136,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 182.2,
        "heikinAvg30d": 7.349
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 80.306,
        "saikou": 5.49,
        "heikin": 4.36,
        "boshuAvg30d": 182.2,
        "heikinAvg30d": 7.438
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 82.206,
        "saikou": 5.54,
        "heikin": 4,
        "boshuAvg30d": 181.3,
        "heikinAvg30d": 7.567
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 70.206,
        "saikou": 5.54,
        "heikin": 4.45,
        "boshuAvg30d": 181.2,
        "heikinAvg30d": 7.611
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 97.486,
        "saikou": 6.66,
        "heikin": 5.01,
        "boshuAvg30d": 181.2,
        "heikinAvg30d": 7.61
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 97.486,
        "saikou": 6.9,
        "heikin": 5.38,
        "boshuAvg30d": 97.0,
        "heikinAvg30d": 7.743
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 109.486,
        "saikou": 8.06,
        "heikin": 5.69,
        "boshuAvg30d": 97.0,
        "heikinAvg30d": 7.908
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 97.486,
        "saikou": 7.36,
        "heikin": 5.95,
        "boshuAvg30d": 97.0,
        "heikinAvg30d": 7.91
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 97.486,
        "saikou": 7.79,
        "heikin": 5.94,
        "boshuAvg30d": 96.0,
        "heikinAvg30d": 7.872
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 85.486,
        "saikou": 6.43,
        "heikin": 5.51,
        "boshuAvg30d": 94.9,
        "heikinAvg30d": 8.027
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 95.986,
        "saikou": 7.06,
        "heikin": 5.88,
        "boshuAvg30d": 94.0,
        "heikinAvg30d": 8.167
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 374.959,
        "saikou": 10,
        "heikin": 4.64,
        "boshuAvg30d": 451.1,
        "heikinAvg30d": 3.475
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 391.198,
        "saikou": 10,
        "heikin": 4.53,
        "boshuAvg30d": 451.1,
        "heikinAvg30d": 3.433
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 407.691,
        "saikou": 10,
        "heikin": 3.85,
        "boshuAvg30d": 451.1,
        "heikinAvg30d": 3.307
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 400.694,
        "saikou": 10,
        "heikin": 4.15,
        "boshuAvg30d": 451.1,
        "heikinAvg30d": 3.331
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 390.601,
        "saikou": 10,
        "heikin": 4.09,
        "boshuAvg30d": 449.2,
        "heikinAvg30d": 3.259
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 390.601,
        "saikou": 10,
        "heikin": 4.14,
        "boshuAvg30d": 449.1,
        "heikinAvg30d": 3.291
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 402.573,
        "saikou": 10,
        "heikin": 4.16,
        "boshuAvg30d": 448.0,
        "heikinAvg30d": 3.271
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 399.204,
        "saikou": 10,
        "heikin": 4.23,
        "boshuAvg30d": 449.1,
        "heikinAvg30d": 3.426
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 400.724,
        "saikou": 10,
        "heikin": 4.24,
        "boshuAvg30d": 450.0,
        "heikinAvg30d": 3.457
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 400.693,
        "saikou": 10,
        "heikin": 4.28,
        "boshuAvg30d": 450.1,
        "heikinAvg30d": 3.469
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 298.394,
        "saikou": 6.49,
        "heikin": 2.2,
        "boshuAvg30d": 450.1,
        "heikinAvg30d": 3.493
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 296.494,
        "saikou": 6.61,
        "heikin": 2.23,
        "boshuAvg30d": 450.1,
        "heikinAvg30d": 3.521
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 304.227,
        "saikou": 6.5,
        "heikin": 2.49,
        "boshuAvg30d": 470.9,
        "heikinAvg30d": 3.859
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 304.227,
        "saikou": 7.9,
        "heikin": 2.84,
        "boshuAvg30d": 478.9,
        "heikinAvg30d": 3.817
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 463.498,
        "saikou": 10,
        "heikin": 4.62,
        "boshuAvg30d": 483.9,
        "heikinAvg30d": 3.803
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 304.298,
        "saikou": 7.9,
        "heikin": 3.16,
        "boshuAvg30d": 488.9,
        "heikinAvg30d": 3.802
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 330.849,
        "saikou": 7.9,
        "heikin": 2.91,
        "boshuAvg30d": 488.9,
        "heikinAvg30d": 4.206
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 330.849,
        "saikou": 7.9,
        "heikin": 2.88,
        "boshuAvg30d": 488.9,
        "heikinAvg30d": 4.191
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 325.678,
        "saikou": 8.09,
        "heikin": 2.85,
        "boshuAvg30d": 486.0,
        "heikinAvg30d": 4.371
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 330.249,
        "saikou": 8.12,
        "heikin": 2.8,
        "boshuAvg30d": 486.0,
        "heikinAvg30d": 4.385
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 311.184,
        "saikou": 8.49,
        "heikin": 3.61,
        "boshuAvg30d": 486.0,
        "heikinAvg30d": 4.223
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 311.184,
        "saikou": 8.49,
        "heikin": 3.77,
        "boshuAvg30d": 485.0,
        "heikinAvg30d": 4.134
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 328.253,
        "saikou": 8.1,
        "heikin": 3.89,
        "boshuAvg30d": 482.1,
        "heikinAvg30d": 4.148
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 326.353,
        "saikou": 8.1,
        "heikin": 3.86,
        "boshuAvg30d": 482.1,
        "heikinAvg30d": 4.127
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 316.357,
        "saikou": 8.1,
        "heikin": 3.89,
        "boshuAvg30d": 480.9,
        "heikinAvg30d": 3.966
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 320.949,
        "saikou": 8.06,
        "heikin": 3.86,
        "boshuAvg30d": 480.9,
        "heikinAvg30d": 4.024
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 267.794,
        "saikou": 8.08,
        "heikin": 3.79,
        "boshuAvg30d": 477.9,
        "heikinAvg30d": 4.098
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 267.794,
        "saikou": 8.05,
        "heikin": 3.79,
        "boshuAvg30d": 477.4,
        "heikinAvg30d": 4.197
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 267.794,
        "saikou": 6.5,
        "heikin": 3.09,
        "boshuAvg30d": 476.4,
        "heikinAvg30d": 4.292
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 286.23,
        "saikou": 9.66,
        "heikin": 3.43,
        "boshuAvg30d": 476.3,
        "heikinAvg30d": 4.115
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 254.144,
        "saikou": 6.49,
        "heikin": 2.45,
        "boshuAvg30d": 475.2,
        "heikinAvg30d": 4.078
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 250.259,
        "saikou": 6.49,
        "heikin": 2.96,
        "boshuAvg30d": 475.2,
        "heikinAvg30d": 3.969
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 269.805,
        "saikou": 6.49,
        "heikin": 3.75,
        "boshuAvg30d": 475.2,
        "heikinAvg30d": 4.183
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 321.286,
        "saikou": 7.52,
        "heikin": 3.73,
        "boshuAvg30d": 475.1,
        "heikinAvg30d": 4.347
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 389.723,
        "saikou": 6.49,
        "heikin": 3.66,
        "boshuAvg30d": 471.0,
        "heikinAvg30d": 4.235
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 587.642,
        "saikou": 6.15,
        "heikin": 3.15,
        "boshuAvg30d": 470.6,
        "heikinAvg30d": 4.209
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 595.351,
        "saikou": 6.15,
        "heikin": 3.31,
        "boshuAvg30d": 472.7,
        "heikinAvg30d": 4.362
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 610.144,
        "saikou": 6.15,
        "heikin": 3,
        "boshuAvg30d": 472.7,
        "heikinAvg30d": 4.271
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 593.881,
        "saikou": 6.15,
        "heikin": 3.01,
        "boshuAvg30d": 473.2,
        "heikinAvg30d": 4.318
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 597.621,
        "saikou": 6.15,
        "heikin": 2.8,
        "boshuAvg30d": 473.2,
        "heikinAvg30d": 4.235
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 496.164,
        "saikou": 6.04,
        "heikin": 3.77,
        "boshuAvg30d": 471.2,
        "heikinAvg30d": 4.198
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 522.813,
        "saikou": 6.17,
        "heikin": 2.9,
        "boshuAvg30d": 471.2,
        "heikinAvg30d": 4.206
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 520.151,
        "saikou": 6.18,
        "heikin": 3.19,
        "boshuAvg30d": 470.3,
        "heikinAvg30d": 4.034
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 480.212,
        "saikou": 6.26,
        "heikin": 3.84,
        "boshuAvg30d": 470.3,
        "heikinAvg30d": 4.174
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 320.612,
        "saikou": 6.5,
        "heikin": 4.23,
        "boshuAvg30d": 470.7,
        "heikinAvg30d": 3.834
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 404.294,
        "saikou": 6.5,
        "heikin": 4.05,
        "boshuAvg30d": 468.7,
        "heikinAvg30d": 4.014
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 420.85,
        "saikou": 5.99,
        "heikin": 3.63,
        "boshuAvg30d": 466.7,
        "heikinAvg30d": 4.061
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 385.372,
        "saikou": 6.49,
        "heikin": 2.62,
        "boshuAvg30d": 465.7,
        "heikinAvg30d": 4.049
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 59,
        "ouatsu": 186.322,
        "saikou": 2,
        "heikin": 1.89,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 1.864
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 59,
        "ouatsu": 170.001,
        "saikou": 1.89,
        "heikin": 1.38,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 1.786
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 59,
        "ouatsu": 209.96,
        "saikou": 1.89,
        "heikin": 1.34,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 1.835
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 207.981,
        "saikou": 1.87,
        "heikin": 1.34,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 1.946
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 58,
        "ouatsu": 188.236,
        "saikou": 1.61,
        "heikin": 0.9,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 1.884
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 198.043,
        "saikou": 1.89,
        "heikin": 1.24,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 1.918
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 221.838,
        "saikou": 1.6,
        "heikin": 1.12,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.88
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 217.998,
        "saikou": 1.82,
        "heikin": 1.66,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.067
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 58,
        "ouatsu": 221.798,
        "saikou": 1.89,
        "heikin": 1.71,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 2.081
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 58,
        "ouatsu": 223.698,
        "saikou": 1.96,
        "heikin": 1.7,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 1.986
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 58,
        "ouatsu": 187.459,
        "saikou": 1.99,
        "heikin": 1.88,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 2.099
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 58,
        "ouatsu": 187.819,
        "saikou": 1.99,
        "heikin": 1.87,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 2.09
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 189.319,
        "saikou": 2.18,
        "heikin": 1.63,
        "boshuAvg30d": 74.5,
        "heikinAvg30d": 2.137
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 71,
        "ouatsu": 189.319,
        "saikou": 2,
        "heikin": 1.2,
        "boshuAvg30d": 77.6,
        "heikinAvg30d": 2.076
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 74,
        "ouatsu": 171.098,
        "saikou": 2.34,
        "heikin": 1.72,
        "boshuAvg30d": 80.6,
        "heikinAvg30d": 2.146
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 76,
        "ouatsu": 125.499,
        "saikou": 2.4,
        "heikin": 1.84,
        "boshuAvg30d": 82.6,
        "heikinAvg30d": 2.024
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 76,
        "ouatsu": 122.109,
        "saikou": 3.49,
        "heikin": 2.07,
        "boshuAvg30d": 82.6,
        "heikinAvg30d": 2.26
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 76,
        "ouatsu": 133.946,
        "saikou": 3.48,
        "heikin": 2.03,
        "boshuAvg30d": 82.6,
        "heikinAvg30d": 2.422
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 81,
        "ouatsu": 135.786,
        "saikou": 3.49,
        "heikin": 2.53,
        "boshuAvg30d": 86.7,
        "heikinAvg30d": 2.766
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 81,
        "ouatsu": 137.776,
        "saikou": 3.48,
        "heikin": 2.48,
        "boshuAvg30d": 86.7,
        "heikinAvg30d": 2.868
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 81,
        "ouatsu": 133.8,
        "saikou": 3.96,
        "heikin": 2.69,
        "boshuAvg30d": 87.6,
        "heikinAvg30d": 3.103
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 81,
        "ouatsu": 133.8,
        "saikou": 4.3,
        "heikin": 2.83,
        "boshuAvg30d": 86.7,
        "heikinAvg30d": 3.187
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 80,
        "ouatsu": 135.786,
        "saikou": 3.57,
        "heikin": 2.64,
        "boshuAvg30d": 85.7,
        "heikinAvg30d": 2.981
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 79,
        "ouatsu": 135.786,
        "saikou": 3.5,
        "heikin": 2.61,
        "boshuAvg30d": 84.7,
        "heikinAvg30d": 2.713
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 75,
        "ouatsu": 125.951,
        "saikou": 3.49,
        "heikin": 2.51,
        "boshuAvg30d": 81.6,
        "heikinAvg30d": 2.736
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 75,
        "ouatsu": 133.787,
        "saikou": 4.48,
        "heikin": 2.74,
        "boshuAvg30d": 81.6,
        "heikinAvg30d": 2.684
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 75,
        "ouatsu": 135.786,
        "saikou": 4.48,
        "heikin": 2.73,
        "boshuAvg30d": 81.6,
        "heikinAvg30d": 2.638
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 74,
        "ouatsu": 135.786,
        "saikou": 3.47,
        "heikin": 2.46,
        "boshuAvg30d": 81.5,
        "heikinAvg30d": 2.62
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 74,
        "ouatsu": 137.776,
        "saikou": 4.48,
        "heikin": 2.71,
        "boshuAvg30d": 80.6,
        "heikinAvg30d": 2.816
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 74,
        "ouatsu": 137.776,
        "saikou": 4.48,
        "heikin": 2.74,
        "boshuAvg30d": 80.6,
        "heikinAvg30d": 2.808
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 72,
        "ouatsu": 191.749,
        "saikou": 2.93,
        "heikin": 1.45,
        "boshuAvg30d": 79.5,
        "heikinAvg30d": 2.611
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 72,
        "ouatsu": 193.249,
        "saikou": 3.48,
        "heikin": 2.52,
        "boshuAvg30d": 79.5,
        "heikinAvg30d": 2.58
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 72,
        "ouatsu": 193.249,
        "saikou": 2.7,
        "heikin": 2.39,
        "boshuAvg30d": 79.5,
        "heikinAvg30d": 2.591
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 72,
        "ouatsu": 208.498,
        "saikou": 3.32,
        "heikin": 2.72,
        "boshuAvg30d": 79.5,
        "heikinAvg30d": 2.759
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 72,
        "ouatsu": 244.498,
        "saikou": 2.69,
        "heikin": 2.4,
        "boshuAvg30d": 79.5,
        "heikinAvg30d": 2.616
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 71,
        "ouatsu": 226.587,
        "saikou": 2.66,
        "heikin": 1.99,
        "boshuAvg30d": 79.4,
        "heikinAvg30d": 2.506
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 69,
        "ouatsu": 239.246,
        "saikou": 2.42,
        "heikin": 1.22,
        "boshuAvg30d": 77.4,
        "heikinAvg30d": 2.371
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 69,
        "ouatsu": 291.719,
        "saikou": 2.2,
        "heikin": 1.34,
        "boshuAvg30d": 77.4,
        "heikinAvg30d": 2.272
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 69,
        "ouatsu": 293.718,
        "saikou": 2.22,
        "heikin": 1.26,
        "boshuAvg30d": 77.4,
        "heikinAvg30d": 2.073
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 69,
        "ouatsu": 293.718,
        "saikou": 2.2,
        "heikin": 1.08,
        "boshuAvg30d": 77.4,
        "heikinAvg30d": 2.115
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 69,
        "ouatsu": 342.501,
        "saikou": 2.2,
        "heikin": 1.2,
        "boshuAvg30d": 77.4,
        "heikinAvg30d": 2.216
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 69,
        "ouatsu": 342.501,
        "saikou": 2.19,
        "heikin": 1.09,
        "boshuAvg30d": 77.4,
        "heikinAvg30d": 2.228
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 70,
        "ouatsu": 346.477,
        "saikou": 2,
        "heikin": 1.39,
        "boshuAvg30d": 77.5,
        "heikinAvg30d": 2.052
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 71,
        "ouatsu": 346.477,
        "saikou": 2.19,
        "heikin": 1.98,
        "boshuAvg30d": 78.5,
        "heikinAvg30d": 2.189
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 71,
        "ouatsu": 328.387,
        "saikou": 2,
        "heikin": 1.28,
        "boshuAvg30d": 78.5,
        "heikinAvg30d": 2.253
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 307.57,
        "saikou": 1.99,
        "heikin": 1.55,
        "boshuAvg30d": 77.5,
        "heikinAvg30d": 2.214
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 290.137,
        "saikou": 2.17,
        "heikin": 1.96,
        "boshuAvg30d": 76.5,
        "heikinAvg30d": 2.173
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 247.002,
        "saikou": 2.02,
        "heikin": 1.94,
        "boshuAvg30d": 73.5,
        "heikinAvg30d": 2.174
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 80.93,
        "saikou": 1.55,
        "heikin": 0.42,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 0.947
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 1.45,
        "heikin": 1.1,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 1.039
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 1.7,
        "heikin": 1.12,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 1.021
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 1.85,
        "heikin": 1.11,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 1.133
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 1.55,
        "heikin": 1.04,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 1.268
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 1.55,
        "heikin": 1.19,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 1.002
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 1.55,
        "heikin": 1.17,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 1.186
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 1.55,
        "heikin": 1.17,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 1.418
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 1.55,
        "heikin": 1.17,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 1.272
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 1.64,
        "heikin": 1.24,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 1.382
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 1.95,
        "heikin": 1.26,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 1.598
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 1.55,
        "heikin": 1.17,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 1.532
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.95,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 1.675
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 1.462
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.5,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.504
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.5,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.514
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 4.17,
        "boshuAvg30d": 60.4,
        "heikinAvg30d": 1.571
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 3.2,
        "heikin": 2.91,
        "boshuAvg30d": 60.4,
        "heikinAvg30d": 2.111
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.4,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 2.728
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.04,
        "boshuAvg30d": 61.4,
        "heikinAvg30d": 2.634
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.78,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 3.513
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.71,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 2.833
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.85,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 3.357
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.9,
        "heikin": 3.9,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 3.124
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 4.72,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.112
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.43,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.414
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 6,
        "heikin": 5.78,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.279
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.8,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.305
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.53,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.18
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.53,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.68
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.083
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 47.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.597
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.181
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 56.132,
        "saikou": 2.75,
        "heikin": 0.57,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.513
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.527
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 74.282,
        "saikou": 1.38,
        "heikin": 1,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 3.32
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 82.928,
        "saikou": 2.4,
        "heikin": 0.75,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.756
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 82.928,
        "saikou": 0.89,
        "heikin": 0.67,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.435
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 47.928,
        "saikou": 2,
        "heikin": 0.87,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.642
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 62.686,
        "saikou": 1.75,
        "heikin": 0.46,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.915
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 60.28,
        "saikou": 2.2,
        "heikin": 0.82,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 2.025
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 73.748,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 2.136
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 82.928,
        "saikou": 0.89,
        "heikin": 0.67,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 1.928
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 1.934
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 82.928,
        "saikou": 0.53,
        "heikin": 0.45,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 1.866
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 1.676
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 65.702,
        "saikou": 1.06,
        "heikin": 0.73,
        "boshuAvg30d": 58.4,
        "heikinAvg30d": 1.605
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 65.574,
        "saikou": 0.49,
        "heikin": 0.42,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 1.266
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 89.45,
        "saikou": 1.98,
        "heikin": 1.37,
        "boshuAvg30d": 131.6,
        "heikinAvg30d": 2.145
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 89.509,
        "saikou": 1.5,
        "heikin": 0.77,
        "boshuAvg30d": 131.6,
        "heikinAvg30d": 1.845
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 114.95,
        "saikou": 1.72,
        "heikin": 1.02,
        "boshuAvg30d": 131.6,
        "heikinAvg30d": 1.756
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 134.917,
        "saikou": 1.78,
        "heikin": 0.88,
        "boshuAvg30d": 131.6,
        "heikinAvg30d": 1.7
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 127.624,
        "saikou": 1.5,
        "heikin": 0.87,
        "boshuAvg30d": 130.6,
        "heikinAvg30d": 1.687
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 129.608,
        "saikou": 1.84,
        "heikin": 0.9,
        "boshuAvg30d": 129.7,
        "heikinAvg30d": 1.79
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 142.804,
        "saikou": 1.5,
        "heikin": 0.9,
        "boshuAvg30d": 130.6,
        "heikinAvg30d": 1.952
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 142.804,
        "saikou": 1.7,
        "heikin": 1.14,
        "boshuAvg30d": 130.6,
        "heikinAvg30d": 2.064
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 118.859,
        "saikou": 1.85,
        "heikin": 1.14,
        "boshuAvg30d": 131.6,
        "heikinAvg30d": 2.005
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 118.859,
        "saikou": 1.98,
        "heikin": 1.4,
        "boshuAvg30d": 131.6,
        "heikinAvg30d": 2.067
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 118.859,
        "saikou": 1.98,
        "heikin": 0.94,
        "boshuAvg30d": 131.6,
        "heikinAvg30d": 2.03
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 118.859,
        "saikou": 1.39,
        "heikin": 0.46,
        "boshuAvg30d": 131.6,
        "heikinAvg30d": 1.833
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 118.859,
        "saikou": 2,
        "heikin": 1.19,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 1.978
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 142.804,
        "saikou": 2,
        "heikin": 1.3,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 1.913
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 142.804,
        "saikou": 2,
        "heikin": 1.28,
        "boshuAvg30d": 151.6,
        "heikinAvg30d": 2.064
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 116.959,
        "saikou": 2.44,
        "heikin": 1.73,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 2.061
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 111.092,
        "saikou": 2.7,
        "heikin": 1.8,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 2.231
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 120.826,
        "saikou": 3.95,
        "heikin": 2.05,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 2.436
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 120.826,
        "saikou": 3.97,
        "heikin": 2.31,
        "boshuAvg30d": 154.6,
        "heikinAvg30d": 2.63
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 120.826,
        "saikou": 3.95,
        "heikin": 2.26,
        "boshuAvg30d": 154.6,
        "heikinAvg30d": 2.707
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 118.841,
        "saikou": 5.95,
        "heikin": 2.68,
        "boshuAvg30d": 154.6,
        "heikinAvg30d": 2.981
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 126.462,
        "saikou": 5.95,
        "heikin": 2.36,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 2.987
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 143.328,
        "saikou": 5.95,
        "heikin": 2.26,
        "boshuAvg30d": 154.4,
        "heikinAvg30d": 2.882
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 143.674,
        "saikou": 3.95,
        "heikin": 2.01,
        "boshuAvg30d": 154.4,
        "heikinAvg30d": 2.556
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 126.344,
        "saikou": 4.45,
        "heikin": 2.23,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 2.467
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 120.826,
        "saikou": 5.95,
        "heikin": 2.49,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 2.354
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 120.826,
        "saikou": 5.95,
        "heikin": 2.6,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 2.752
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 101.212,
        "saikou": 2.93,
        "heikin": 2.34,
        "boshuAvg30d": 153.4,
        "heikinAvg30d": 2.619
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 97.345,
        "saikou": 4.45,
        "heikin": 2.59,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 2.637
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 97.345,
        "saikou": 3.4,
        "heikin": 2.37,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 2.564
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 118.859,
        "saikou": 2.49,
        "heikin": 1.65,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 2.483
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 103.112,
        "saikou": 2.9,
        "heikin": 2.31,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 2.683
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 103.112,
        "saikou": 2.7,
        "heikin": 2.21,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 2.594
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 99.799,
        "saikou": 2.78,
        "heikin": 2.28,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 2.677
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 99.799,
        "saikou": 2.5,
        "heikin": 2.21,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 2.767
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 101.242,
        "saikou": 2.5,
        "heikin": 2.19,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 2.705
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 99.282,
        "saikou": 2.19,
        "heikin": 2.12,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 2.499
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 101.152,
        "saikou": 2.19,
        "heikin": 2.12,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 2.462
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 103.112,
        "saikou": 2.19,
        "heikin": 2.12,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 2.546
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 103.112,
        "saikou": 2.19,
        "heikin": 2.13,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 2.488
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 95.262,
        "saikou": 2.19,
        "heikin": 2.14,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 2.454
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 97.26,
        "saikou": 2.19,
        "heikin": 2.14,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 2.44
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 99.245,
        "saikou": 2,
        "heikin": 1.96,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 2.373
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 99.245,
        "saikou": 2.19,
        "heikin": 2.08,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 2.301
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 99.245,
        "saikou": 2,
        "heikin": 1.95,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 2.365
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 99.245,
        "saikou": 1.98,
        "heikin": 1.89,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 2.308
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 166.749,
        "saikou": 1.39,
        "heikin": 0.41,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 2.001
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 150.306,
        "saikou": 1.98,
        "heikin": 0.48,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 2.114
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 200.579,
        "saikou": 2,
        "heikin": 1.56,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.682
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 200.579,
        "saikou": 2.29,
        "heikin": 1.31,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.764
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 202.379,
        "saikou": 2.29,
        "heikin": 1.5,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.873
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 204.369,
        "saikou": 2.29,
        "heikin": 1.5,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.793
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 219.745,
        "saikou": 1.56,
        "heikin": 0.88,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.721
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 204.369,
        "saikou": 2.29,
        "heikin": 1.51,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.867
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 221.228,
        "saikou": 2.29,
        "heikin": 1.67,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.063
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 221.228,
        "saikou": 2.29,
        "heikin": 1.79,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.216
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 234.594,
        "saikou": 2.29,
        "heikin": 1.77,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.155
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 236.604,
        "saikou": 2.75,
        "heikin": 2.14,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.436
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 236.604,
        "saikou": 2.48,
        "heikin": 2.08,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.756
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 204.87,
        "saikou": 2.29,
        "heikin": 1.83,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.722
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 204.87,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 3.017
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 220.69,
        "saikou": 2,
        "heikin": 1.67,
        "boshuAvg30d": 142.2,
        "heikinAvg30d": 2.208
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 220.69,
        "saikou": 2.29,
        "heikin": 1.51,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 1.87
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 220.69,
        "saikou": 2.29,
        "heikin": 1.06,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 1.592
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 220.69,
        "saikou": 2.29,
        "heikin": 1.06,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 1.571
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 220.69,
        "saikou": 2.29,
        "heikin": 1.05,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 2.072
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 193.755,
        "saikou": 3.4,
        "heikin": 1.19,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.184
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 193.755,
        "saikou": 3,
        "heikin": 1.21,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.232
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 193.755,
        "saikou": 3,
        "heikin": 1.21,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 2.436
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 193.755,
        "saikou": 4,
        "heikin": 1.23,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 2.292
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 193.755,
        "saikou": 4,
        "heikin": 1.25,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 2.235
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 193.755,
        "saikou": 4,
        "heikin": 1.25,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 2.179
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 292.079,
        "saikou": 4,
        "heikin": 0.92,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.863
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 268.532,
        "saikou": 2.7,
        "heikin": 0.95,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.824
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 207.388,
        "saikou": 2.7,
        "heikin": 1.11,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.116
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 268.532,
        "saikou": 2.7,
        "heikin": 0.95,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.096
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 220.69,
        "saikou": 2.7,
        "heikin": 1.07,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.093
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 212.634,
        "saikou": 2.7,
        "heikin": 1.53,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.303
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 220.69,
        "saikou": 2.7,
        "heikin": 1.58,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 2.497
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 220.69,
        "saikou": 2.7,
        "heikin": 1.73,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.034
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 188.956,
        "saikou": 2.7,
        "heikin": 1.35,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 2.868
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 188.956,
        "saikou": 2.7,
        "heikin": 1.9,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.396
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 188.956,
        "saikou": 2.7,
        "heikin": 1.73,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.882
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 188.956,
        "saikou": 2.66,
        "heikin": 2.49,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.146
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 186.966,
        "saikou": 2.29,
        "heikin": 2.13,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.381
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 186.966,
        "saikou": 2.29,
        "heikin": 2.13,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.371
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 202.88,
        "saikou": 2.73,
        "heikin": 2.47,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.955
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 204.87,
        "saikou": 2.29,
        "heikin": 1.87,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.539
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 204.87,
        "saikou": 2.38,
        "heikin": 2.26,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.326
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 204.87,
        "saikou": 2.29,
        "heikin": 1.64,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 3.002
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 204.87,
        "saikou": 2.29,
        "heikin": 2.14,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 3.092
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 204.87,
        "saikou": 2.29,
        "heikin": 1.62,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 3.027
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 204.87,
        "saikou": 2.29,
        "heikin": 1.89,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.883
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 204.87,
        "saikou": 2.29,
        "heikin": 1.69,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.554
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 234.566,
        "saikou": 2.34,
        "heikin": 2.18,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 2.594
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 236.604,
        "saikou": 1.76,
        "heikin": 1.69,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 1.815
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.814
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.835
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.846
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.834
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.41,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.824
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.83
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.95
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 172.93,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.917
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.938
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.975
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.47,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.958
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.47,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.905
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.47,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.98
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.954
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.002
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 0.911
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 0.896
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 0.911
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.968
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 47.2,
        "heikinAvg30d": 0.965
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.979
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.958
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.956
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.969
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 1.126
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 1.092
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 1.037
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 1.054
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.0
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.925
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.955
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.963
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.76,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.983
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 0.971
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.002
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.011
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 1.07,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.029
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 1.02,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.043
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.063
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 1.11,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.074
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 1.2,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.052
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 1.11,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.06
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.717
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.732
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.749
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 134.973,
        "saikou": 1.7,
        "heikin": 0.82,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.755
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 134.973,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.772
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 134.973,
        "saikou": 1.7,
        "heikin": 0.82,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.838
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 164.984,
        "saikou": 4.56,
        "heikin": 3.48,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 3.844
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 168.886,
        "saikou": 1.95,
        "heikin": 1.54,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 3.261
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 183.594,
        "saikou": 1.89,
        "heikin": 1.31,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 2.921
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 185.59,
        "saikou": 1.88,
        "heikin": 1.29,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 2.76
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 175.964,
        "saikou": 1.5,
        "heikin": 1.32,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 2.636
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 175.964,
        "saikou": 1.89,
        "heikin": 1.65,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 2.85
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 273.745,
        "saikou": 3.51,
        "heikin": 2.33,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 3.08
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 269.917,
        "saikou": 5.46,
        "heikin": 3.98,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 3.31
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 263.745,
        "saikou": 5.72,
        "heikin": 4.18,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 3.553
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 271.761,
        "saikou": 5.72,
        "heikin": 4.98,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 3.876
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 270.745,
        "saikou": 6.88,
        "heikin": 5.65,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 4.068
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 270.445,
        "saikou": 5.88,
        "heikin": 5.68,
        "boshuAvg30d": 165.4,
        "heikinAvg30d": 3.884
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 272.469,
        "saikou": 5.87,
        "heikin": 4.9,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 3.593
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 312.469,
        "saikou": 2.64,
        "heikin": 2.46,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 3.128
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 168.469,
        "saikou": 2.25,
        "heikin": 1.19,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 2.745
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 138.991,
        "saikou": 2.55,
        "heikin": 1.87,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 2.856
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 148.617,
        "saikou": 2.3,
        "heikin": 1.21,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 3.075
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 202.469,
        "saikou": 2.29,
        "heikin": 0.95,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 3.477
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 191.552,
        "saikou": 2.3,
        "heikin": 1.02,
        "boshuAvg30d": 175.5,
        "heikinAvg30d": 3.577
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 189.604,
        "saikou": 2.3,
        "heikin": 1.02,
        "boshuAvg30d": 175.5,
        "heikinAvg30d": 3.542
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 180.172,
        "saikou": 2.68,
        "heikin": 1.05,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 3.401
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 228.188,
        "saikou": 3.89,
        "heikin": 0.98,
        "boshuAvg30d": 176.6,
        "heikinAvg30d": 3.523
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 240.052,
        "saikou": 2.75,
        "heikin": 0.89,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 3.476
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 238.054,
        "saikou": 2.79,
        "heikin": 0.89,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 3.459
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 188.054,
        "saikou": 3.1,
        "heikin": 1.03,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 3.054
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 188.054,
        "saikou": 3,
        "heikin": 1.05,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 3.178
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 190.052,
        "saikou": 2.75,
        "heikin": 1.03,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 3.56
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 190.052,
        "saikou": 2.88,
        "heikin": 1.06,
        "boshuAvg30d": 176.4,
        "heikinAvg30d": 4.051
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 141.552,
        "saikou": 3.1,
        "heikin": 2.09,
        "boshuAvg30d": 175.5,
        "heikinAvg30d": 4.311
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 157.552,
        "saikou": 2.59,
        "heikin": 1.37,
        "boshuAvg30d": 174.4,
        "heikinAvg30d": 4.534
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 188.552,
        "saikou": 2.29,
        "heikin": 1.36,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 4.739
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 203.926,
        "saikou": 3.98,
        "heikin": 2.96,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 5.491
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 203.926,
        "saikou": 5.24,
        "heikin": 3.79,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 5.549
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 213.844,
        "saikou": 6.95,
        "heikin": 4.95,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 5.8
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 215.828,
        "saikou": 7.98,
        "heikin": 5.62,
        "boshuAvg30d": 169.4,
        "heikinAvg30d": 5.702
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 258.976,
        "saikou": 8.19,
        "heikin": 6.49,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.763
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 256.987,
        "saikou": 8.19,
        "heikin": 6.82,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 5.798
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 257.815,
        "saikou": 8.13,
        "heikin": 6.73,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 5.672
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 263.965,
        "saikou": 8.13,
        "heikin": 7.09,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 5.384
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 275.58,
        "saikou": 8.04,
        "heikin": 6.7,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 4.988
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 269.948,
        "saikou": 8.03,
        "heikin": 6.78,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 4.859
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 269.948,
        "saikou": 7.66,
        "heikin": 6.61,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 4.762
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 268.799,
        "saikou": 7.3,
        "heikin": 6.19,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 4.593
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 268.775,
        "saikou": 6.95,
        "heikin": 5.34,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.426
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 266.799,
        "saikou": 6.98,
        "heikin": 5.73,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.474
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 264.815,
        "saikou": 6.95,
        "heikin": 5.87,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 4.058
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 275.425,
        "saikou": 6.98,
        "heikin": 6.47,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 3.995
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 214.425,
        "saikou": 4.29,
        "heikin": 3.58,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 3.522
      }
    ]
  }
};
