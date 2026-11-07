// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/08〜2026/11/06）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-07",
  "fetchedAt": "2026-11-07",
  "avgWindowLabel": "過去30日平均（2026/10/08〜2026/11/06）",
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
      "boshu": 1356,
      "ouatsu": 1551.28,
      "saikou": 10,
      "heikin": 2.12,
      "boshuAvg30d": 1069.0,
      "heikinAvg30d": 2.965
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1356,
      "ouatsu": 1638.618,
      "saikou": 10,
      "heikin": 2.4,
      "boshuAvg30d": 1069.0,
      "heikinAvg30d": 2.878
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1356,
      "ouatsu": 1672.107,
      "saikou": 10,
      "heikin": 2.52,
      "boshuAvg30d": 1069.0,
      "heikinAvg30d": 2.774
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1355,
      "ouatsu": 1705.322,
      "saikou": 10,
      "heikin": 1.92,
      "boshuAvg30d": 1068.8,
      "heikinAvg30d": 2.73
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1349,
      "ouatsu": 1664.13,
      "saikou": 10,
      "heikin": 2.18,
      "boshuAvg30d": 1065.2,
      "heikinAvg30d": 2.773
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1349,
      "ouatsu": 1701.329,
      "saikou": 10,
      "heikin": 2.96,
      "boshuAvg30d": 1064.4,
      "heikinAvg30d": 2.817
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1346,
      "ouatsu": 1780.932,
      "saikou": 10,
      "heikin": 2.56,
      "boshuAvg30d": 1061.4,
      "heikinAvg30d": 3.0
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1350,
      "ouatsu": 1740.853,
      "saikou": 10,
      "heikin": 2.99,
      "boshuAvg30d": 1063.8,
      "heikinAvg30d": 3.258
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1350,
      "ouatsu": 1723.718,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1065.4,
      "heikinAvg30d": 3.286
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1352,
      "ouatsu": 1638.651,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1066.6,
      "heikinAvg30d": 3.417
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1352,
      "ouatsu": 1611.005,
      "saikou": 10,
      "heikin": 3.32,
      "boshuAvg30d": 1066.6,
      "heikinAvg30d": 3.475
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1352,
      "ouatsu": 1579.635,
      "saikou": 10,
      "heikin": 3.4,
      "boshuAvg30d": 1066.6,
      "heikinAvg30d": 3.454
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1411,
      "ouatsu": 1599.685,
      "saikou": 10,
      "heikin": 3.83,
      "boshuAvg30d": 1126.4,
      "heikinAvg30d": 3.524
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1436,
      "ouatsu": 1635.222,
      "saikou": 10,
      "heikin": 3.48,
      "boshuAvg30d": 1149.8,
      "heikinAvg30d": 3.43
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1455,
      "ouatsu": 1468.785,
      "saikou": 10,
      "heikin": 2.8,
      "boshuAvg30d": 1170.4,
      "heikinAvg30d": 3.17
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1470,
      "ouatsu": 1642.029,
      "saikou": 10,
      "heikin": 2.34,
      "boshuAvg30d": 1187.3,
      "heikinAvg30d": 2.882
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1470,
      "ouatsu": 1678.979,
      "saikou": 10,
      "heikin": 2.48,
      "boshuAvg30d": 1187.6,
      "heikinAvg30d": 2.805
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1470,
      "ouatsu": 1653.711,
      "saikou": 10,
      "heikin": 2.6,
      "boshuAvg30d": 1191.5,
      "heikinAvg30d": 2.775
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1399,
      "ouatsu": 1623.052,
      "saikou": 10,
      "heikin": 2.24,
      "boshuAvg30d": 1143.0,
      "heikinAvg30d": 2.854
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1404,
      "ouatsu": 1612.233,
      "saikou": 10,
      "heikin": 2.25,
      "boshuAvg30d": 1146.4,
      "heikinAvg30d": 2.896
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1408,
      "ouatsu": 1582.797,
      "saikou": 10,
      "heikin": 2.16,
      "boshuAvg30d": 1148.9,
      "heikinAvg30d": 2.887
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1412,
      "ouatsu": 1593.404,
      "saikou": 10,
      "heikin": 1.89,
      "boshuAvg30d": 1149.7,
      "heikinAvg30d": 2.86
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1406,
      "ouatsu": 1552.643,
      "saikou": 10,
      "heikin": 1.74,
      "boshuAvg30d": 1146.1,
      "heikinAvg30d": 2.823
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1406,
      "ouatsu": 1534.506,
      "saikou": 10,
      "heikin": 1.72,
      "boshuAvg30d": 1145.3,
      "heikinAvg30d": 2.837
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1387,
      "ouatsu": 1568.249,
      "saikou": 10,
      "heikin": 1.98,
      "boshuAvg30d": 1125.2,
      "heikinAvg30d": 2.679
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1387,
      "ouatsu": 1659.213,
      "saikou": 10,
      "heikin": 2.04,
      "boshuAvg30d": 1125.2,
      "heikinAvg30d": 2.7
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1387,
      "ouatsu": 1630.193,
      "saikou": 10,
      "heikin": 1.82,
      "boshuAvg30d": 1125.2,
      "heikinAvg30d": 2.902
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1383,
      "ouatsu": 1652.17,
      "saikou": 10,
      "heikin": 2.47,
      "boshuAvg30d": 1122.5,
      "heikinAvg30d": 3.045
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1382,
      "ouatsu": 1524.003,
      "saikou": 10,
      "heikin": 2.37,
      "boshuAvg30d": 1119.9,
      "heikinAvg30d": 3.057
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1376,
      "ouatsu": 1592.057,
      "saikou": 10,
      "heikin": 2.24,
      "boshuAvg30d": 1113.9,
      "heikinAvg30d": 3.194
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1447,
      "ouatsu": 1653.123,
      "saikou": 10,
      "heikin": 2.49,
      "boshuAvg30d": 1172.3,
      "heikinAvg30d": 3.258
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1447,
      "ouatsu": 1547.015,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1171.9,
      "heikinAvg30d": 3.409
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1447,
      "ouatsu": 1639.198,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1172.4,
      "heikinAvg30d": 3.791
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1445,
      "ouatsu": 1663.311,
      "saikou": 10,
      "heikin": 4.85,
      "boshuAvg30d": 1171.2,
      "heikinAvg30d": 3.962
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1443,
      "ouatsu": 1747.966,
      "saikou": 10,
      "heikin": 3.8,
      "boshuAvg30d": 1162.9,
      "heikinAvg30d": 3.904
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1438,
      "ouatsu": 1704.263,
      "saikou": 10,
      "heikin": 4,
      "boshuAvg30d": 1157.9,
      "heikinAvg30d": 3.929
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1434,
      "ouatsu": 1603.36,
      "saikou": 10,
      "heikin": 3.69,
      "boshuAvg30d": 1152.1,
      "heikinAvg30d": 3.741
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1434,
      "ouatsu": 1642.622,
      "saikou": 9.99,
      "heikin": 3.18,
      "boshuAvg30d": 1152.1,
      "heikinAvg30d": 3.751
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1434,
      "ouatsu": 1855.845,
      "saikou": 9.99,
      "heikin": 3.58,
      "boshuAvg30d": 1152.1,
      "heikinAvg30d": 3.54
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1432,
      "ouatsu": 1896.597,
      "saikou": 10,
      "heikin": 2.88,
      "boshuAvg30d": 1151.3,
      "heikinAvg30d": 3.407
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1425,
      "ouatsu": 1879.327,
      "saikou": 9.74,
      "heikin": 3.17,
      "boshuAvg30d": 1143.5,
      "heikinAvg30d": 3.346
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1425,
      "ouatsu": 1895.391,
      "saikou": 10,
      "heikin": 3.59,
      "boshuAvg30d": 1143.5,
      "heikinAvg30d": 3.283
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1336,
      "ouatsu": 1935.862,
      "saikou": 10,
      "heikin": 3.27,
      "boshuAvg30d": 1056.5,
      "heikinAvg30d": 3.185
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1339,
      "ouatsu": 1897.858,
      "saikou": 10,
      "heikin": 3.32,
      "boshuAvg30d": 1059.5,
      "heikinAvg30d": 3.178
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1338,
      "ouatsu": 1738.453,
      "saikou": 10,
      "heikin": 3.82,
      "boshuAvg30d": 1063.1,
      "heikinAvg30d": 3.22
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1331,
      "ouatsu": 1864.006,
      "saikou": 10,
      "heikin": 3.65,
      "boshuAvg30d": 1054.7,
      "heikinAvg30d": 3.055
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1323,
      "ouatsu": 1779.681,
      "saikou": 10,
      "heikin": 4.02,
      "boshuAvg30d": 1046.3,
      "heikinAvg30d": 3.102
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1315,
      "ouatsu": 1741.075,
      "saikou": 10,
      "heikin": 3.49,
      "boshuAvg30d": 1038.4,
      "heikinAvg30d": 2.836
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
        "ouatsu": 181.918,
        "saikou": 2.36,
        "heikin": 1.94,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.109
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 184.918,
        "saikou": 5.68,
        "heikin": 2.32,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.18
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 187.968,
        "saikou": 1.91,
        "heikin": 1.81,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 3.983
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 187.968,
        "saikou": 5.68,
        "heikin": 2.26,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.007
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 183.918,
        "saikou": 1.91,
        "heikin": 1.75,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.24
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 186.968,
        "saikou": 5.68,
        "heikin": 1.97,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 3.895
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 193.408,
        "saikou": 2.36,
        "heikin": 1.7,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.223
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 152.458,
        "saikou": 5.68,
        "heikin": 2.28,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.5
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 152.418,
        "saikou": 3.3,
        "heikin": 2.04,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.521
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 150.468,
        "saikou": 2.79,
        "heikin": 1.98,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.36
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 152.418,
        "saikou": 3.35,
        "heikin": 2.04,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.69
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 150.468,
        "saikou": 2.86,
        "heikin": 1.99,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.733
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 183.418,
        "saikou": 5.68,
        "heikin": 2.78,
        "boshuAvg30d": 49.2,
        "heikinAvg30d": 4.551
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 181.468,
        "saikou": 3.89,
        "heikin": 2.28,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.636
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 148.418,
        "saikou": 8.67,
        "heikin": 2.71,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.014
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 187.076,
        "saikou": 6.1,
        "heikin": 2.49,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 4.21
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 187.526,
        "saikou": 9.44,
        "heikin": 3.85,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 4.398
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 146.958,
        "saikou": 8.4,
        "heikin": 2.91,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 3.684
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 187.526,
        "saikou": 6.15,
        "heikin": 3.44,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 3.786
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 182.576,
        "saikou": 8.18,
        "heikin": 3.72,
        "boshuAvg30d": 51.4,
        "heikinAvg30d": 3.776
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 148.908,
        "saikou": 9.8,
        "heikin": 2.82,
        "boshuAvg30d": 51.4,
        "heikinAvg30d": 4.224
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 185.576,
        "saikou": 6.8,
        "heikin": 3.52,
        "boshuAvg30d": 52.4,
        "heikinAvg30d": 3.468
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 146.918,
        "saikou": 7.2,
        "heikin": 2.87,
        "boshuAvg30d": 52.4,
        "heikinAvg30d": 4.227
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 144.968,
        "saikou": 7,
        "heikin": 2.78,
        "boshuAvg30d": 52.4,
        "heikinAvg30d": 4.157
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 193.05,
        "saikou": 9.44,
        "heikin": 4.32,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 3.998
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 191.1,
        "saikou": 9.44,
        "heikin": 4.16,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 3.963
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 148.908,
        "saikou": 9.8,
        "heikin": 2.82,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 3.684
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 184.1,
        "saikou": 9.44,
        "heikin": 4.21,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 4.303
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 153.908,
        "saikou": 9.91,
        "heikin": 3.23,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 4.27
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 170.11,
        "saikou": 6.1,
        "heikin": 3.56,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 5.128
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 188.908,
        "saikou": 8,
        "heikin": 2.83,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 4.504
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 148.968,
        "saikou": 8.79,
        "heikin": 3.79,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 5.287
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 211.908,
        "saikou": 5.68,
        "heikin": 2.28,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 6.184
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 180.758,
        "saikou": 1.91,
        "heikin": 1.79,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 6.09
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 174.918,
        "saikou": 5.68,
        "heikin": 2.99,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 5.55
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 209,
        "saikou": 5.68,
        "heikin": 2.31,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 5.624
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 197.95,
        "saikou": 5.68,
        "heikin": 2.27,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 5.367
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 212.968,
        "saikou": 5.68,
        "heikin": 2.24,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 5.566
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 212.968,
        "saikou": 5.68,
        "heikin": 2.28,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 5.35
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 212.968,
        "saikou": 5.68,
        "heikin": 2.28,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 5.369
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 209.968,
        "saikou": 5.68,
        "heikin": 3.07,
        "boshuAvg30d": 46.8,
        "heikinAvg30d": 5.223
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 209.968,
        "saikou": 5.68,
        "heikin": 2.7,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 4.697
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 199.918,
        "saikou": 5.68,
        "heikin": 3.06,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 4.753
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 150.958,
        "saikou": 5.68,
        "heikin": 2.88,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 4.857
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 183.918,
        "saikou": 5.68,
        "heikin": 2.34,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.827
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 176.968,
        "saikou": 5.68,
        "heikin": 2.32,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 4.417
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 181.918,
        "saikou": 5.68,
        "heikin": 2.46,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.717
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 184.958,
        "saikou": 5.68,
        "heikin": 2.46,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 4.154
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 70.603,
        "saikou": 10,
        "heikin": 8.16,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 5.49
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 71.953,
        "saikou": 10,
        "heikin": 8.26,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 5.551
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 79.261,
        "saikou": 10,
        "heikin": 7.99,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 5.582
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 80.218,
        "saikou": 10,
        "heikin": 9.66,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 5.561
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 73.343,
        "saikou": 10,
        "heikin": 8.16,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 5.459
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 72.34,
        "saikou": 10,
        "heikin": 6.9,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 5.449
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 94.771,
        "saikou": 10,
        "heikin": 7.02,
        "boshuAvg30d": 118.2,
        "heikinAvg30d": 5.437
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 108.291,
        "saikou": 10,
        "heikin": 7.12,
        "boshuAvg30d": 118.4,
        "heikinAvg30d": 5.267
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 110.939,
        "saikou": 10,
        "heikin": 6.53,
        "boshuAvg30d": 118.2,
        "heikinAvg30d": 5.107
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 112.289,
        "saikou": 10,
        "heikin": 6.59,
        "boshuAvg30d": 118.4,
        "heikinAvg30d": 5.121
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 112.289,
        "saikou": 10,
        "heikin": 6.59,
        "boshuAvg30d": 118.4,
        "heikinAvg30d": 5.338
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 112.289,
        "saikou": 10,
        "heikin": 6.84,
        "boshuAvg30d": 118.4,
        "heikinAvg30d": 5.401
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 124.289,
        "saikou": 10,
        "heikin": 6.43,
        "boshuAvg30d": 125.4,
        "heikinAvg30d": 5.64
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 122.789,
        "saikou": 10,
        "heikin": 6.06,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 5.656
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 124.289,
        "saikou": 10,
        "heikin": 6.56,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 6.01
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 122.789,
        "saikou": 10,
        "heikin": 6.36,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 6.074
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 124.289,
        "saikou": 10,
        "heikin": 6.35,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 5.968
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 122.789,
        "saikou": 10,
        "heikin": 6.39,
        "boshuAvg30d": 135.2,
        "heikinAvg30d": 6.103
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 126.285,
        "saikou": 10,
        "heikin": 5.54,
        "boshuAvg30d": 70.3,
        "heikinAvg30d": 5.931
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 126.285,
        "saikou": 10,
        "heikin": 5.65,
        "boshuAvg30d": 70.5,
        "heikinAvg30d": 5.97
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 110.657,
        "saikou": 10,
        "heikin": 5.46,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 5.936
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 122.33,
        "saikou": 10,
        "heikin": 5.58,
        "boshuAvg30d": 69.8,
        "heikinAvg30d": 6.125
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 113.715,
        "saikou": 10,
        "heikin": 5.17,
        "boshuAvg30d": 70.6,
        "heikinAvg30d": 6.102
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 110.711,
        "saikou": 10,
        "heikin": 5.42,
        "boshuAvg30d": 70.6,
        "heikinAvg30d": 6.144
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 108.368,
        "saikou": 10,
        "heikin": 5.56,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 6.167
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 136.289,
        "saikou": 10,
        "heikin": 6.01,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 6.18
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 138.285,
        "saikou": 10,
        "heikin": 5.92,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 5.629
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 136.289,
        "saikou": 10,
        "heikin": 6.18,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 5.785
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 136.289,
        "saikou": 10,
        "heikin": 6.03,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 5.703
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 136.289,
        "saikou": 10,
        "heikin": 6.13,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 5.181
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 126.285,
        "saikou": 10,
        "heikin": 6.64,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 5.172
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 114.285,
        "saikou": 10,
        "heikin": 6.89,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 4.447
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 114.285,
        "saikou": 10,
        "heikin": 6.64,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 4.277
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 96.788,
        "saikou": 9.5,
        "heikin": 6.8,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 4.222
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 88.289,
        "saikou": 7.52,
        "heikin": 4.48,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 4.263
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 86.789,
        "saikou": 7.52,
        "heikin": 4.24,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 4.125
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 74.288,
        "saikou": 10,
        "heikin": 2.7,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 3.86
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 74.789,
        "saikou": 4,
        "heikin": 2.48,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 3.564
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 88.289,
        "saikou": 7.52,
        "heikin": 3.64,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 3.486
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 88.289,
        "saikou": 10,
        "heikin": 7.24,
        "boshuAvg30d": 131.0,
        "heikinAvg30d": 3.775
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 73.664,
        "saikou": 7.52,
        "heikin": 7.52,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 3.671
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 84.334,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 3.778
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 87.719,
        "saikou": 10,
        "heikin": 5.6,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 4.048
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 99.719,
        "saikou": 10,
        "heikin": 6.39,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 4.083
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 96.816,
        "saikou": 10,
        "heikin": 6.41,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 4.131
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 96.816,
        "saikou": 10,
        "heikin": 9.66,
        "boshuAvg30d": 43.1,
        "heikinAvg30d": 4.543
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 98.716,
        "saikou": 10,
        "heikin": 7.68,
        "boshuAvg30d": 41.3,
        "heikinAvg30d": 4.423
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 98.219,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 4.972
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 273,
        "ouatsu": 407.34,
        "saikou": 1.69,
        "heikin": 0.87,
        "boshuAvg30d": 238.7,
        "heikinAvg30d": 3.229
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 273,
        "ouatsu": 445.403,
        "saikou": 8.6,
        "heikin": 1.48,
        "boshuAvg30d": 238.7,
        "heikinAvg30d": 3.167
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 273,
        "ouatsu": 431.138,
        "saikou": 10,
        "heikin": 2.84,
        "boshuAvg30d": 238.7,
        "heikinAvg30d": 2.977
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 273,
        "ouatsu": 444.788,
        "saikou": 1,
        "heikin": 0.61,
        "boshuAvg30d": 238.7,
        "heikinAvg30d": 2.973
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 271,
        "ouatsu": 422.811,
        "saikou": 3,
        "heikin": 1.21,
        "boshuAvg30d": 237.5,
        "heikinAvg30d": 2.989
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 271,
        "ouatsu": 420.689,
        "saikou": 10,
        "heikin": 2.94,
        "boshuAvg30d": 236.7,
        "heikinAvg30d": 2.814
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 269,
        "ouatsu": 410.742,
        "saikou": 1,
        "heikin": 0.61,
        "boshuAvg30d": 234.7,
        "heikinAvg30d": 3.049
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 271,
        "ouatsu": 400.233,
        "saikou": 3,
        "heikin": 1.27,
        "boshuAvg30d": 236.7,
        "heikinAvg30d": 3.204
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 271,
        "ouatsu": 384.135,
        "saikou": 10,
        "heikin": 3.13,
        "boshuAvg30d": 236.7,
        "heikinAvg30d": 3.242
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 272,
        "ouatsu": 305.064,
        "saikou": 0.56,
        "heikin": 0.42,
        "boshuAvg30d": 237.7,
        "heikinAvg30d": 3.284
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 272,
        "ouatsu": 295.659,
        "saikou": 0.6,
        "heikin": 0.43,
        "boshuAvg30d": 237.7,
        "heikinAvg30d": 3.196
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 272,
        "ouatsu": 293.85,
        "saikou": 0.61,
        "heikin": 0.44,
        "boshuAvg30d": 237.7,
        "heikinAvg30d": 3.371
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 292,
        "ouatsu": 295.692,
        "saikou": 7.49,
        "heikin": 2.32,
        "boshuAvg30d": 256.9,
        "heikinAvg30d": 3.503
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 300,
        "ouatsu": 351.005,
        "saikou": 7.58,
        "heikin": 1.59,
        "boshuAvg30d": 264.9,
        "heikinAvg30d": 3.625
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 304,
        "ouatsu": 310.945,
        "saikou": 2.02,
        "heikin": 1.17,
        "boshuAvg30d": 269.7,
        "heikinAvg30d": 3.426
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 309,
        "ouatsu": 347.065,
        "saikou": 2.2,
        "heikin": 0.94,
        "boshuAvg30d": 275.0,
        "heikinAvg30d": 3.063
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 309,
        "ouatsu": 313.125,
        "saikou": 2,
        "heikin": 0.94,
        "boshuAvg30d": 275.3,
        "heikinAvg30d": 2.824
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 309,
        "ouatsu": 349.261,
        "saikou": 7.95,
        "heikin": 2.63,
        "boshuAvg30d": 279.2,
        "heikinAvg30d": 2.88
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 299,
        "ouatsu": 353.308,
        "saikou": 7.58,
        "heikin": 1.23,
        "boshuAvg30d": 270.8,
        "heikinAvg30d": 2.753
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 299,
        "ouatsu": 303.799,
        "saikou": 7.56,
        "heikin": 2.26,
        "boshuAvg30d": 270.8,
        "heikinAvg30d": 2.841
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 299,
        "ouatsu": 314.516,
        "saikou": 8,
        "heikin": 2.68,
        "boshuAvg30d": 271.4,
        "heikinAvg30d": 2.859
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 299,
        "ouatsu": 313.401,
        "saikou": 2.58,
        "heikin": 0.82,
        "boshuAvg30d": 270.6,
        "heikinAvg30d": 2.79
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 296,
        "ouatsu": 303.383,
        "saikou": 1.92,
        "heikin": 0.89,
        "boshuAvg30d": 268.4,
        "heikinAvg30d": 2.822
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 296,
        "ouatsu": 301.475,
        "saikou": 4.03,
        "heikin": 1.01,
        "boshuAvg30d": 268.4,
        "heikinAvg30d": 2.887
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 294,
        "ouatsu": 295.115,
        "saikou": 5,
        "heikin": 1.16,
        "boshuAvg30d": 265.3,
        "heikinAvg30d": 2.646
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 294,
        "ouatsu": 322.685,
        "saikou": 3.52,
        "heikin": 1.01,
        "boshuAvg30d": 265.3,
        "heikinAvg30d": 2.633
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 294,
        "ouatsu": 320.792,
        "saikou": 1.29,
        "heikin": 0.68,
        "boshuAvg30d": 265.3,
        "heikinAvg30d": 2.924
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 294,
        "ouatsu": 330.624,
        "saikou": 8.4,
        "heikin": 2.1,
        "boshuAvg30d": 265.0,
        "heikinAvg30d": 2.852
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 293,
        "ouatsu": 253.225,
        "saikou": 7.28,
        "heikin": 2.86,
        "boshuAvg30d": 264.0,
        "heikinAvg30d": 2.855
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 293,
        "ouatsu": 295.496,
        "saikou": 3.75,
        "heikin": 0.61,
        "boshuAvg30d": 263.2,
        "heikinAvg30d": 2.76
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 291,
        "ouatsu": 319.964,
        "saikou": 1.02,
        "heikin": 0.58,
        "boshuAvg30d": 261.2,
        "heikinAvg30d": 2.602
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 291,
        "ouatsu": 283.41,
        "saikou": 1.2,
        "heikin": 0.83,
        "boshuAvg30d": 260.8,
        "heikinAvg30d": 2.61
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 291,
        "ouatsu": 333.578,
        "saikou": 7.4,
        "heikin": 2.23,
        "boshuAvg30d": 260.5,
        "heikinAvg30d": 2.558
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 291,
        "ouatsu": 321.337,
        "saikou": 7.19,
        "heikin": 3.28,
        "boshuAvg30d": 260.5,
        "heikinAvg30d": 2.509
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 291,
        "ouatsu": 458.618,
        "saikou": 3.92,
        "heikin": 1.33,
        "boshuAvg30d": 258.5,
        "heikinAvg30d": 2.408
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 291,
        "ouatsu": 412.652,
        "saikou": 7.74,
        "heikin": 1.27,
        "boshuAvg30d": 258.5,
        "heikinAvg30d": 2.469
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 293,
        "ouatsu": 394,
        "saikou": 7.61,
        "heikin": 1.24,
        "boshuAvg30d": 260.3,
        "heikinAvg30d": 2.649
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 293,
        "ouatsu": 401.527,
        "saikou": 7.6,
        "heikin": 1.1,
        "boshuAvg30d": 260.3,
        "heikinAvg30d": 2.466
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 293,
        "ouatsu": 498.306,
        "saikou": 9.95,
        "heikin": 2.72,
        "boshuAvg30d": 260.3,
        "heikinAvg30d": 2.537
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 293,
        "ouatsu": 496.556,
        "saikou": 1,
        "heikin": 0.6,
        "boshuAvg30d": 260.7,
        "heikinAvg30d": 2.359
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 292,
        "ouatsu": 502.439,
        "saikou": 7.62,
        "heikin": 1.22,
        "boshuAvg30d": 258.9,
        "heikinAvg30d": 2.358
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 292,
        "ouatsu": 508.001,
        "saikou": 8.69,
        "heikin": 2.66,
        "boshuAvg30d": 258.9,
        "heikinAvg30d": 2.579
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 291,
        "ouatsu": 502.046,
        "saikou": 7.75,
        "heikin": 1.41,
        "boshuAvg30d": 258.7,
        "heikinAvg30d": 2.303
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 291,
        "ouatsu": 503.041,
        "saikou": 7.75,
        "heikin": 1.71,
        "boshuAvg30d": 258.7,
        "heikinAvg30d": 2.308
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 291,
        "ouatsu": 321.031,
        "saikou": 7.47,
        "heikin": 3.09,
        "boshuAvg30d": 261.7,
        "heikinAvg30d": 2.304
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 289,
        "ouatsu": 452.538,
        "saikou": 7.54,
        "heikin": 2.52,
        "boshuAvg30d": 256.7,
        "heikinAvg30d": 2.391
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 287,
        "ouatsu": 389.628,
        "saikou": 6.96,
        "heikin": 3.18,
        "boshuAvg30d": 255.0,
        "heikinAvg30d": 2.874
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 286,
        "ouatsu": 422.511,
        "saikou": 10,
        "heikin": 4.37,
        "boshuAvg30d": 253.3,
        "heikinAvg30d": 2.863
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 243,
        "ouatsu": 281.847,
        "saikou": 9.19,
        "heikin": 1.78,
        "boshuAvg30d": 114.4,
        "heikinAvg30d": 1.609
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 243,
        "ouatsu": 274.645,
        "saikou": 9.19,
        "heikin": 1.88,
        "boshuAvg30d": 114.4,
        "heikinAvg30d": 1.559
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 243,
        "ouatsu": 281.861,
        "saikou": 9.19,
        "heikin": 2.28,
        "boshuAvg30d": 114.4,
        "heikinAvg30d": 1.592
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 242,
        "ouatsu": 285.833,
        "saikou": 9.19,
        "heikin": 2.25,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.645
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 242,
        "ouatsu": 275.622,
        "saikou": 9.19,
        "heikin": 2.24,
        "boshuAvg30d": 113.4,
        "heikinAvg30d": 1.643
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 241,
        "ouatsu": 273.638,
        "saikou": 9.19,
        "heikin": 1.94,
        "boshuAvg30d": 113.2,
        "heikinAvg30d": 1.607
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 240,
        "ouatsu": 295.713,
        "saikou": 9.19,
        "heikin": 1.86,
        "boshuAvg30d": 112.2,
        "heikinAvg30d": 1.465
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 240,
        "ouatsu": 270.425,
        "saikou": 9.19,
        "heikin": 1.83,
        "boshuAvg30d": 112.2,
        "heikinAvg30d": 1.502
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 240,
        "ouatsu": 276.001,
        "saikou": 8.88,
        "heikin": 1.79,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 1.443
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 240,
        "ouatsu": 260.073,
        "saikou": 8.88,
        "heikin": 1.81,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 1.456
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 240,
        "ouatsu": 231.349,
        "saikou": 8.88,
        "heikin": 1.74,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 1.43
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 240,
        "ouatsu": 225.965,
        "saikou": 8.88,
        "heikin": 1.67,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 1.355
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 250,
        "ouatsu": 187.805,
        "saikou": 8.88,
        "heikin": 1.68,
        "boshuAvg30d": 122.2,
        "heikinAvg30d": 1.595
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 255,
        "ouatsu": 185.905,
        "saikou": 9.27,
        "heikin": 1.64,
        "boshuAvg30d": 126.4,
        "heikinAvg30d": 1.647
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 258,
        "ouatsu": 187.636,
        "saikou": 9.27,
        "heikin": 2,
        "boshuAvg30d": 129.4,
        "heikinAvg30d": 1.947
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 260,
        "ouatsu": 188.12,
        "saikou": 9.27,
        "heikin": 1.54,
        "boshuAvg30d": 131.4,
        "heikinAvg30d": 2.035
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 260,
        "ouatsu": 180.91,
        "saikou": 9.27,
        "heikin": 1.4,
        "boshuAvg30d": 131.4,
        "heikinAvg30d": 2.055
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 260,
        "ouatsu": 188.126,
        "saikou": 9.49,
        "heikin": 1.6,
        "boshuAvg30d": 131.4,
        "heikinAvg30d": 2.233
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 265,
        "ouatsu": 192.108,
        "saikou": 9.49,
        "heikin": 1.76,
        "boshuAvg30d": 136.4,
        "heikinAvg30d": 2.613
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 265,
        "ouatsu": 192.108,
        "saikou": 9.49,
        "heikin": 1.76,
        "boshuAvg30d": 136.4,
        "heikinAvg30d": 2.609
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 265,
        "ouatsu": 178.236,
        "saikou": 9.49,
        "heikin": 1.91,
        "boshuAvg30d": 136.4,
        "heikinAvg30d": 2.736
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 265,
        "ouatsu": 147.354,
        "saikou": 9.49,
        "heikin": 1.95,
        "boshuAvg30d": 136.4,
        "heikinAvg30d": 2.728
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 264,
        "ouatsu": 145.71,
        "saikou": 9.49,
        "heikin": 2.01,
        "boshuAvg30d": 135.4,
        "heikinAvg30d": 2.568
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 263,
        "ouatsu": 163.635,
        "saikou": 9.49,
        "heikin": 1.83,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 2.601
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 259,
        "ouatsu": 148.388,
        "saikou": 9.49,
        "heikin": 2.34,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 2.546
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 259,
        "ouatsu": 158.564,
        "saikou": 9.49,
        "heikin": 2.47,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 2.497
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 259,
        "ouatsu": 190.161,
        "saikou": 9.49,
        "heikin": 1.77,
        "boshuAvg30d": 130.4,
        "heikinAvg30d": 2.501
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 259,
        "ouatsu": 191.251,
        "saikou": 9.49,
        "heikin": 1.77,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 2.611
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 259,
        "ouatsu": 192.108,
        "saikou": 9.49,
        "heikin": 1.76,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 2.794
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 259,
        "ouatsu": 190.124,
        "saikou": 9.69,
        "heikin": 1.78,
        "boshuAvg30d": 129.6,
        "heikinAvg30d": 2.719
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 257,
        "ouatsu": 229.608,
        "saikou": 9.69,
        "heikin": 1.78,
        "boshuAvg30d": 127.6,
        "heikinAvg30d": 2.786
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 257,
        "ouatsu": 229.608,
        "saikou": 9.69,
        "heikin": 1.91,
        "boshuAvg30d": 127.6,
        "heikinAvg30d": 2.906
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 257,
        "ouatsu": 190.124,
        "saikou": 9.69,
        "heikin": 1.77,
        "boshuAvg30d": 127.6,
        "heikinAvg30d": 2.766
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 256,
        "ouatsu": 169.226,
        "saikou": 9.69,
        "heikin": 3.65,
        "boshuAvg30d": 127.4,
        "heikinAvg30d": 2.736
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 256,
        "ouatsu": 182.941,
        "saikou": 9.69,
        "heikin": 2.67,
        "boshuAvg30d": 127.4,
        "heikinAvg30d": 2.591
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 255,
        "ouatsu": 168.731,
        "saikou": 9.69,
        "heikin": 2.75,
        "boshuAvg30d": 126.4,
        "heikinAvg30d": 2.478
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 253,
        "ouatsu": 213.341,
        "saikou": 9.69,
        "heikin": 2.39,
        "boshuAvg30d": 124.4,
        "heikinAvg30d": 2.139
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 253,
        "ouatsu": 238.139,
        "saikou": 9.69,
        "heikin": 2.84,
        "boshuAvg30d": 124.4,
        "heikinAvg30d": 2.059
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 253,
        "ouatsu": 277.544,
        "saikou": 9.69,
        "heikin": 2.51,
        "boshuAvg30d": 124.4,
        "heikinAvg30d": 1.779
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 253,
        "ouatsu": 301.119,
        "saikou": 9.69,
        "heikin": 2.92,
        "boshuAvg30d": 124.4,
        "heikinAvg30d": 1.655
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 253,
        "ouatsu": 291.214,
        "saikou": 9.69,
        "heikin": 2.71,
        "boshuAvg30d": 124.4,
        "heikinAvg30d": 1.571
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 253,
        "ouatsu": 289.23,
        "saikou": 9.27,
        "heikin": 2.52,
        "boshuAvg30d": 124.4,
        "heikinAvg30d": 1.601
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 255,
        "ouatsu": 276.322,
        "saikou": 8.88,
        "heikin": 2.14,
        "boshuAvg30d": 125.6,
        "heikinAvg30d": 1.529
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 255,
        "ouatsu": 276.322,
        "saikou": 8.88,
        "heikin": 2.05,
        "boshuAvg30d": 126.4,
        "heikinAvg30d": 1.729
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 255,
        "ouatsu": 272.438,
        "saikou": 8.88,
        "heikin": 2.11,
        "boshuAvg30d": 126.4,
        "heikinAvg30d": 1.729
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 253,
        "ouatsu": 276.322,
        "saikou": 9.27,
        "heikin": 2.41,
        "boshuAvg30d": 125.2,
        "heikinAvg30d": 1.8
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 252,
        "ouatsu": 274.422,
        "saikou": 9.27,
        "heikin": 2.22,
        "boshuAvg30d": 124.2,
        "heikinAvg30d": 1.671
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 249,
        "ouatsu": 269.038,
        "saikou": 9.27,
        "heikin": 2.19,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 1.763
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.65,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 1.374
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.25,
        "heikin": 2.1,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 1.277
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 1.93,
        "saikou": 2.05,
        "heikin": 2.05,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 1.288
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 1.93,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 1.186
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 3.928,
        "saikou": 1.85,
        "heikin": 1.8,
        "boshuAvg30d": 57.6,
        "heikinAvg30d": 1.316
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 1.361
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.75,
        "heikin": 1.5,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 1.722
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.93,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 2.091
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 17.824,
        "saikou": 10,
        "heikin": 8.28,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 1.945
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.7,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 2.101
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.12,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 2.381
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.34,
        "boshuAvg30d": 57.8,
        "heikinAvg30d": 2.247
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.35,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.989
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.073
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.35,
        "heikin": 3.1,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.525
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 15.93,
        "saikou": 8.68,
        "heikin": 7.38,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 2.215
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 6.818,
        "saikou": 3.85,
        "heikin": 3.72,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 3.04
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.4,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 2.943
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 3.4,
        "heikin": 3.3,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 3.384
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 22.928,
        "saikou": 3.7,
        "heikin": 0.95,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 3.751
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 47.928,
        "saikou": 5.55,
        "heikin": 1.04,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 4.492
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 47.928,
        "saikou": 6.96,
        "heikin": 0.87,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 4.816
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 82.928,
        "saikou": 5,
        "heikin": 0.6,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 3.73
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 61.704,
        "saikou": 5,
        "heikin": 0.67,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 3.607
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 82.928,
        "saikou": 5.4,
        "heikin": 0.62,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 2.326
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 82.928,
        "saikou": 4.75,
        "heikin": 0.59,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 2.073
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 49.5,
        "saikou": 6.15,
        "heikin": 0.91,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 3.953
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 22.928,
        "saikou": 2.75,
        "heikin": 0.79,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 3.338
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.15,
        "heikin": 5.05,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 3.933
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.45,
        "heikin": 4.35,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 3.8
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 6.45,
        "heikin": 6.35,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 5.059
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 22.928,
        "saikou": 7.45,
        "heikin": 6.95,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 5.888
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 22.928,
        "saikou": 7.87,
        "heikin": 7.3,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 4.617
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.01,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 4.181
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.01,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 4.277
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.01,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 4.622
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 22.928,
        "saikou": 7.87,
        "heikin": 6.97,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 3.634
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.45,
        "heikin": 3.99,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 4.235
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.6,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 3.199
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.75,
        "boshuAvg30d": 66.8,
        "heikinAvg30d": 3.375
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 22.928,
        "saikou": 7.71,
        "heikin": 6.82,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 2.811
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 22.928,
        "saikou": 9.01,
        "heikin": 8.01,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.705
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 22.928,
        "saikou": 8.86,
        "heikin": 7.98,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.677
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 22.928,
        "saikou": 6.19,
        "heikin": 5.74,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.646
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 26.998,
        "saikou": 10,
        "heikin": 9.47,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.837
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 20.51,
        "saikou": 10,
        "heikin": 9.29,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.389
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.6,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.191
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.43,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.672
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 74.624,
        "saikou": 9,
        "heikin": 2.8,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.215
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 121.946,
        "saikou": 9.99,
        "heikin": 2.75,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.023
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 153.177,
        "saikou": 9,
        "heikin": 0.98,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 0.946
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 168.823,
        "saikou": 9.99,
        "heikin": 1.52,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 0.942
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 152.398,
        "saikou": 9,
        "heikin": 1.24,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 0.952
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 121.004,
        "saikou": 9.99,
        "heikin": 1.98,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 1.155
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 128.891,
        "saikou": 9.99,
        "heikin": 2.18,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 1.309
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 132.879,
        "saikou": 9.99,
        "heikin": 2.33,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 1.512
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 156.824,
        "saikou": 9.99,
        "heikin": 2.39,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.484
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 156.824,
        "saikou": 9.99,
        "heikin": 2.31,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.507
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 156.824,
        "saikou": 2.97,
        "heikin": 1.83,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.499
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 156.824,
        "saikou": 2.83,
        "heikin": 1.77,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.42
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 156.824,
        "saikou": 2.68,
        "heikin": 1.73,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 1.47
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 136.746,
        "saikou": 9,
        "heikin": 2.83,
        "boshuAvg30d": 155.1,
        "heikinAvg30d": 1.48
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 3.82,
        "boshuAvg30d": 160.1,
        "heikinAvg30d": 1.584
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 111.146,
        "saikou": 9.99,
        "heikin": 3.86,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 1.614
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 154.705,
        "saikou": 9.99,
        "heikin": 2.89,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 1.607
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 160.691,
        "saikou": 9.99,
        "heikin": 3.37,
        "boshuAvg30d": 162.9,
        "heikinAvg30d": 2.176
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 145.691,
        "saikou": 9.99,
        "heikin": 3.44,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 2.226
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 160.691,
        "saikou": 9.99,
        "heikin": 3.45,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 2.289
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 158.706,
        "saikou": 9.99,
        "heikin": 3.59,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 2.211
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 156.856,
        "saikou": 9.99,
        "heikin": 3.6,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 2.338
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 157.398,
        "saikou": 9.99,
        "heikin": 3.59,
        "boshuAvg30d": 169.7,
        "heikinAvg30d": 2.384
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 151.404,
        "saikou": 9.99,
        "heikin": 3.16,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 2.104
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 141.695,
        "saikou": 9.99,
        "heikin": 3.24,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 1.843
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 160.691,
        "saikou": 9.99,
        "heikin": 3.32,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 1.9
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 160.691,
        "saikou": 9.99,
        "heikin": 3.57,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 2.327
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 160.691,
        "saikou": 9.99,
        "heikin": 3.38,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 2.242
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 160.691,
        "saikou": 9.99,
        "heikin": 3.5,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 2.402
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 148.426,
        "saikou": 9.99,
        "heikin": 3.65,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 2.164
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 136.746,
        "saikou": 9.99,
        "heikin": 3.93,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 2.481
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 4.53,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 2.647
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 160.691,
        "saikou": 9.99,
        "heikin": 3.75,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 2.629
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 139.705,
        "saikou": 9.99,
        "heikin": 4.39,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 2.174
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 154.705,
        "saikou": 9.99,
        "heikin": 4.42,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 2.239
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 118.248,
        "saikou": 9.99,
        "heikin": 4.28,
        "boshuAvg30d": 162.6,
        "heikinAvg30d": 2.497
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 105.893,
        "saikou": 9.99,
        "heikin": 4.01,
        "boshuAvg30d": 160.6,
        "heikinAvg30d": 1.941
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 112.325,
        "saikou": 9.99,
        "heikin": 3.76,
        "boshuAvg30d": 160.6,
        "heikinAvg30d": 1.927
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 3.67,
        "boshuAvg30d": 160.6,
        "heikinAvg30d": 1.759
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 120.054,
        "saikou": 9,
        "heikin": 1.79,
        "boshuAvg30d": 159.6,
        "heikinAvg30d": 1.742
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 100.147,
        "saikou": 9,
        "heikin": 2.78,
        "boshuAvg30d": 158.6,
        "heikinAvg30d": 1.714
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 115.147,
        "saikou": 9,
        "heikin": 2.75,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 1.75
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 117.132,
        "saikou": 9,
        "heikin": 2.6,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 1.722
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 117.132,
        "saikou": 9,
        "heikin": 2.45,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 1.779
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 117.132,
        "saikou": 9,
        "heikin": 2.45,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 1.776
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 117.132,
        "saikou": 9.99,
        "heikin": 3.26,
        "boshuAvg30d": 157.6,
        "heikinAvg30d": 1.598
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 111.415,
        "saikou": 9.99,
        "heikin": 3.09,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 1.465
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 101.595,
        "saikou": 5,
        "heikin": 2.11,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 1.566
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 143,
        "ouatsu": 189.461,
        "saikou": 7.99,
        "heikin": 2.17,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 2.387
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 143,
        "ouatsu": 189.461,
        "saikou": 3.59,
        "heikin": 2.36,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 2.559
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 143,
        "ouatsu": 191.261,
        "saikou": 2.52,
        "heikin": 1.99,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 2.235
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 143,
        "ouatsu": 193.251,
        "saikou": 2.52,
        "heikin": 1.99,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 2.065
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 143,
        "ouatsu": 193.251,
        "saikou": 3.95,
        "heikin": 2.45,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 2.126
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 143,
        "ouatsu": 193.251,
        "saikou": 4.63,
        "heikin": 2.76,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 2.384
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 143,
        "ouatsu": 212.103,
        "saikou": 7,
        "heikin": 1.79,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 2.486
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 144,
        "ouatsu": 212.103,
        "saikou": 7,
        "heikin": 1.82,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 2.795
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 144,
        "ouatsu": 154.631,
        "saikou": 7,
        "heikin": 1.82,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 3.019
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 144,
        "ouatsu": 154.631,
        "saikou": 7,
        "heikin": 1.82,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 3.376
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 144,
        "ouatsu": 154.631,
        "saikou": 7,
        "heikin": 2.11,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 3.232
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 144,
        "ouatsu": 148.211,
        "saikou": 8.8,
        "heikin": 2.23,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 3.048
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 146,
        "ouatsu": 153.631,
        "saikou": 8.8,
        "heikin": 2.2,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 3.043
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 147,
        "ouatsu": 153.631,
        "saikou": 8.8,
        "heikin": 2.2,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 2.881
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 147,
        "ouatsu": 199.153,
        "saikou": 4.63,
        "heikin": 2.56,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 2.12
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 148,
        "ouatsu": 199.153,
        "saikou": 2.29,
        "heikin": 1.54,
        "boshuAvg30d": 146.4,
        "heikinAvg30d": 1.85
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 148,
        "ouatsu": 202.486,
        "saikou": 2.29,
        "heikin": 1.48,
        "boshuAvg30d": 146.4,
        "heikinAvg30d": 1.888
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 148,
        "ouatsu": 205.838,
        "saikou": 2.29,
        "heikin": 1.02,
        "boshuAvg30d": 146.4,
        "heikinAvg30d": 1.895
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 185.956,
        "saikou": 2.29,
        "heikin": 1.02,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.035
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 152,
        "ouatsu": 185.956,
        "saikou": 2.29,
        "heikin": 1.02,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.093
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 153,
        "ouatsu": 185.956,
        "saikou": 2.29,
        "heikin": 1.02,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 1.677
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 154,
        "ouatsu": 185.956,
        "saikou": 2.29,
        "heikin": 1.02,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 1.739
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 154,
        "ouatsu": 185.956,
        "saikou": 2.29,
        "heikin": 1.02,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 1.589
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 154,
        "ouatsu": 185.956,
        "saikou": 2.29,
        "heikin": 1.02,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 1.718
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 151,
        "ouatsu": 185.956,
        "saikou": 2.29,
        "heikin": 1.02,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 1.58
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 151,
        "ouatsu": 188.389,
        "saikou": 2.29,
        "heikin": 1.01,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 1.785
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 151,
        "ouatsu": 185.956,
        "saikou": 2.29,
        "heikin": 1.02,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 1.84
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 151,
        "ouatsu": 190.387,
        "saikou": 2.29,
        "heikin": 1.01,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 1.92
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 151,
        "ouatsu": 187.954,
        "saikou": 1.56,
        "heikin": 0.68,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 1.984
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 150,
        "ouatsu": 197.906,
        "saikou": 2.29,
        "heikin": 1.02,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 2.063
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 150,
        "ouatsu": 197.906,
        "saikou": 2.7,
        "heikin": 1.08,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 2.241
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 150,
        "ouatsu": 197.906,
        "saikou": 7,
        "heikin": 1.95,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 2.488
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 150,
        "ouatsu": 197.906,
        "saikou": 8.5,
        "heikin": 2.2,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.04
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 150,
        "ouatsu": 187.754,
        "saikou": 8.5,
        "heikin": 3.22,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.729
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 150,
        "ouatsu": 189.752,
        "saikou": 7,
        "heikin": 3.64,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.899
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 150,
        "ouatsu": 177.802,
        "saikou": 8.5,
        "heikin": 3.8,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.969
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 150,
        "ouatsu": 176.812,
        "saikou": 7.63,
        "heikin": 4.2,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.976
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 150,
        "ouatsu": 176.812,
        "saikou": 7.63,
        "heikin": 4.21,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.917
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 150,
        "ouatsu": 196.694,
        "saikou": 7.63,
        "heikin": 4.15,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.666
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 150,
        "ouatsu": 210.634,
        "saikou": 8.68,
        "heikin": 4.48,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 3.431
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 149,
        "ouatsu": 210.634,
        "saikou": 7.63,
        "heikin": 4.55,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 3.78
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 149,
        "ouatsu": 210.634,
        "saikou": 7.63,
        "heikin": 4.24,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 3.655
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 210.634,
        "saikou": 7.17,
        "heikin": 4.21,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 3.706
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 206.595,
        "saikou": 7.63,
        "heikin": 4.18,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 3.53
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 206.657,
        "saikou": 7.59,
        "heikin": 4.49,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 3.45
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 147,
        "ouatsu": 206.457,
        "saikou": 6.59,
        "heikin": 3.7,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 2.948
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 146,
        "ouatsu": 206.339,
        "saikou": 6.07,
        "heikin": 3.48,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 2.844
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 146,
        "ouatsu": 206.511,
        "saikou": 7.99,
        "heikin": 2.39,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 2.112
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.792
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 202.343,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.752
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 203.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.716
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 202.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.72
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.722
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 203.343,
        "saikou": 1.6,
        "heikin": 1.06,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.701
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 199.343,
        "saikou": 1.6,
        "heikin": 1.08,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.722
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 188.8,
        "saikou": 1.6,
        "heikin": 1.49,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.739
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 199.343,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.777
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 199.343,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.83
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 200.343,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.814
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 199.343,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 40.8,
        "heikinAvg30d": 0.763
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 203.343,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 43.6,
        "heikinAvg30d": 0.947
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 203.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 43.8,
        "heikinAvg30d": 0.85
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 204.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 44.8,
        "heikinAvg30d": 0.783
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 258.343,
        "saikou": 0.38,
        "heikin": 0.37,
        "boshuAvg30d": 45.8,
        "heikinAvg30d": 0.824
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 258.343,
        "saikou": 0.38,
        "heikin": 0.38,
        "boshuAvg30d": 45.8,
        "heikinAvg30d": 0.798
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 258.343,
        "saikou": 1.7,
        "heikin": 1.03,
        "boshuAvg30d": 45.8,
        "heikinAvg30d": 0.81
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 1.13,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.029
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 1.13,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 0.986
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 1.15,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.025
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 1.15,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.961
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 1.15,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.97
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 1.15,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.987
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 1.21,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 0.995
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 1.1,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.008
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 1.21,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.005
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 1.16,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.04
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 1.12,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.087
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 1.13,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 1.037
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 1.112
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 1.12
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 1.339
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 203.343,
        "saikou": 1.6,
        "heikin": 0.6,
        "boshuAvg30d": 43.8,
        "heikinAvg30d": 1.464
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 192.343,
        "saikou": 1.6,
        "heikin": 0.58,
        "boshuAvg30d": 43.6,
        "heikinAvg30d": 1.524
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 191.343,
        "saikou": 1.6,
        "heikin": 0.81,
        "boshuAvg30d": 42.8,
        "heikinAvg30d": 1.605
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 157.343,
        "saikou": 1.6,
        "heikin": 1.31,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.55
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 161.343,
        "saikou": 1.6,
        "heikin": 1.44,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.507
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 163.343,
        "saikou": 1.6,
        "heikin": 1.44,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.458
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 163.343,
        "saikou": 1.6,
        "heikin": 1.44,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.466
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 161.343,
        "saikou": 1.6,
        "heikin": 0.99,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.435
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 157.343,
        "saikou": 1.6,
        "heikin": 1.31,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 1.415
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 205.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.948
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 204.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.889
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 198.543,
        "saikou": 1.7,
        "heikin": 0.9,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.864
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 197.543,
        "saikou": 1.6,
        "heikin": 1.04,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.784
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.04,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 0.863
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 202.343,
        "saikou": 1.7,
        "heikin": 1.06,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.85
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 140.216,
        "saikou": 9.99,
        "heikin": 4,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 5.371
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 144.021,
        "saikou": 6.95,
        "heikin": 4.13,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 5.065
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 142.168,
        "saikou": 6.12,
        "heikin": 3.91,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 5.002
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 140.168,
        "saikou": 4.98,
        "heikin": 3.26,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.847
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 134.516,
        "saikou": 6.12,
        "heikin": 4.09,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 4.818
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 226.168,
        "saikou": 7.98,
        "heikin": 5.38,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.151
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 242.033,
        "saikou": 9.21,
        "heikin": 7.5,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 5.481
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 271.736,
        "saikou": 10,
        "heikin": 8.17,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 6.112
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 271.603,
        "saikou": 10,
        "heikin": 8.26,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 6.163
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 296.031,
        "saikou": 10,
        "heikin": 8.24,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 6.345
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 303.564,
        "saikou": 10,
        "heikin": 8.54,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 6.637
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 288.757,
        "saikou": 10,
        "heikin": 8.64,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 6.471
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 290.755,
        "saikou": 10,
        "heikin": 8.58,
        "boshuAvg30d": 172.6,
        "heikinAvg30d": 6.221
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 296.407,
        "saikou": 9.23,
        "heikin": 7.83,
        "boshuAvg30d": 173.6,
        "heikinAvg30d": 5.799
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 178.927,
        "saikou": 5.83,
        "heikin": 3.81,
        "boshuAvg30d": 174.6,
        "heikinAvg30d": 4.911
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 212.407,
        "saikou": 4.28,
        "heikin": 2.85,
        "boshuAvg30d": 175.6,
        "heikinAvg30d": 4.205
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 250.777,
        "saikou": 4.12,
        "heikin": 3.1,
        "boshuAvg30d": 175.6,
        "heikinAvg30d": 3.961
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 217.777,
        "saikou": 3.69,
        "heikin": 3.39,
        "boshuAvg30d": 175.6,
        "heikinAvg30d": 3.81
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 203.907,
        "saikou": 3.38,
        "heikin": 3.11,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 3.783
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 213.547,
        "saikou": 1.02,
        "heikin": 0.99,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 3.757
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 213.547,
        "saikou": 0.73,
        "heikin": 0.44,
        "boshuAvg30d": 180.6,
        "heikinAvg30d": 3.525
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 209.66,
        "saikou": 0.8,
        "heikin": 0.45,
        "boshuAvg30d": 181.6,
        "heikinAvg30d": 3.484
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 192.292,
        "saikou": 0.6,
        "heikin": 0.42,
        "boshuAvg30d": 181.6,
        "heikinAvg30d": 3.273
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 190.31,
        "saikou": 0.6,
        "heikin": 0.42,
        "boshuAvg30d": 181.6,
        "heikinAvg30d": 3.257
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 188.406,
        "saikou": 0.54,
        "heikin": 0.41,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 3.133
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 194.224,
        "saikou": 0.6,
        "heikin": 0.42,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 3.212
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 211.557,
        "saikou": 0.74,
        "heikin": 0.44,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 3.856
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 211.557,
        "saikou": 2.38,
        "heikin": 2.24,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 4.424
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 211.557,
        "saikou": 1.26,
        "heikin": 1.22,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 4.332
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 225.435,
        "saikou": 3.05,
        "heikin": 2.95,
        "boshuAvg30d": 177.6,
        "heikinAvg30d": 5.07
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 225.435,
        "saikou": 4.12,
        "heikin": 3.5,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 5.385
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 208.435,
        "saikou": 8.12,
        "heikin": 5.89,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 5.55
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 183.435,
        "saikou": 9.48,
        "heikin": 6.82,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 6.534
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 341.472,
        "saikou": 10,
        "heikin": 8.64,
        "boshuAvg30d": 173.6,
        "heikinAvg30d": 7.153
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 283.472,
        "saikou": 10,
        "heikin": 8.12,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 7.321
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 316.77,
        "saikou": 10,
        "heikin": 8.38,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 7.382
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 260.805,
        "saikou": 10,
        "heikin": 8.18,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 7.374
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 260.791,
        "saikou": 9.9,
        "heikin": 7.22,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 7.391
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 297.641,
        "saikou": 9.98,
        "heikin": 7.29,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 6.987
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 299.706,
        "saikou": 9.94,
        "heikin": 7.58,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 6.583
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 306.99,
        "saikou": 9.74,
        "heikin": 7.25,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.763
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 297.806,
        "saikou": 10,
        "heikin": 7.19,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.408
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 313.82,
        "saikou": 10,
        "heikin": 7.21,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 6.314
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 316.82,
        "saikou": 9.94,
        "heikin": 7.68,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 6.151
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 314.92,
        "saikou": 10,
        "heikin": 7.92,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 6.318
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 319.72,
        "saikou": 10,
        "heikin": 7.85,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 6.063
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 311.972,
        "saikou": 10,
        "heikin": 8.47,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 5.858
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 251.972,
        "saikou": 7.32,
        "heikin": 5.55,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 5.194
      }
    ]
  }
};
