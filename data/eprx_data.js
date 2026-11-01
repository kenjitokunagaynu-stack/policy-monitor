// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/02〜2026/10/31）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-01",
  "fetchedAt": "2026-11-01",
  "avgWindowLabel": "過去30日平均（2026/10/02〜2026/10/31）",
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
      "boshu": 938,
      "ouatsu": 1401.81,
      "saikou": 10,
      "heikin": 1.86,
      "boshuAvg30d": 1049.2,
      "heikinAvg30d": 3.115
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 938,
      "ouatsu": 1406.786,
      "saikou": 10,
      "heikin": 1.56,
      "boshuAvg30d": 1049.2,
      "heikinAvg30d": 3.007
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 938,
      "ouatsu": 1524.171,
      "saikou": 10,
      "heikin": 1.63,
      "boshuAvg30d": 1049.2,
      "heikinAvg30d": 2.91
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 937,
      "ouatsu": 1525.752,
      "saikou": 10,
      "heikin": 1.57,
      "boshuAvg30d": 1049.2,
      "heikinAvg30d": 2.873
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 931,
      "ouatsu": 1570.933,
      "saikou": 10,
      "heikin": 1.56,
      "boshuAvg30d": 1046.2,
      "heikinAvg30d": 2.934
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 931,
      "ouatsu": 1502.305,
      "saikou": 10,
      "heikin": 1.88,
      "boshuAvg30d": 1045.2,
      "heikinAvg30d": 2.958
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 928,
      "ouatsu": 1609.106,
      "saikou": 10,
      "heikin": 2.17,
      "boshuAvg30d": 1045.1,
      "heikinAvg30d": 3.144
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 932,
      "ouatsu": 1547.186,
      "saikou": 10,
      "heikin": 2.67,
      "boshuAvg30d": 1047.1,
      "heikinAvg30d": 3.371
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 932,
      "ouatsu": 1574.338,
      "saikou": 10,
      "heikin": 2.52,
      "boshuAvg30d": 1049.1,
      "heikinAvg30d": 3.436
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 934,
      "ouatsu": 1521.79,
      "saikou": 10,
      "heikin": 2.8,
      "boshuAvg30d": 1050.1,
      "heikinAvg30d": 3.617
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 934,
      "ouatsu": 1571.158,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1050.1,
      "heikinAvg30d": 3.644
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 934,
      "ouatsu": 1513.427,
      "saikou": 10,
      "heikin": 2.44,
      "boshuAvg30d": 1050.1,
      "heikinAvg30d": 3.617
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 993,
      "ouatsu": 1443.415,
      "saikou": 10,
      "heikin": 3.1,
      "boshuAvg30d": 1110.1,
      "heikinAvg30d": 3.639
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1018,
      "ouatsu": 1472.991,
      "saikou": 10,
      "heikin": 2.75,
      "boshuAvg30d": 1133.1,
      "heikinAvg30d": 3.533
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1037,
      "ouatsu": 1406.739,
      "saikou": 10,
      "heikin": 2.3,
      "boshuAvg30d": 1154.1,
      "heikinAvg30d": 3.155
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1052,
      "ouatsu": 1422.211,
      "saikou": 10,
      "heikin": 1.73,
      "boshuAvg30d": 1171.4,
      "heikinAvg30d": 2.865
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1052,
      "ouatsu": 1498.729,
      "saikou": 10,
      "heikin": 1.67,
      "boshuAvg30d": 1171.7,
      "heikinAvg30d": 2.841
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1052,
      "ouatsu": 1538.999,
      "saikou": 10,
      "heikin": 1.59,
      "boshuAvg30d": 1171.7,
      "heikinAvg30d": 2.782
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 981,
      "ouatsu": 1422.415,
      "saikou": 10,
      "heikin": 1.7,
      "boshuAvg30d": 1123.8,
      "heikinAvg30d": 2.954
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 986,
      "ouatsu": 1515.791,
      "saikou": 10,
      "heikin": 1.77,
      "boshuAvg30d": 1126.8,
      "heikinAvg30d": 2.994
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 990,
      "ouatsu": 1451.813,
      "saikou": 10,
      "heikin": 1.97,
      "boshuAvg30d": 1129.6,
      "heikinAvg30d": 3.0
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 994,
      "ouatsu": 1451.881,
      "saikou": 10,
      "heikin": 1.99,
      "boshuAvg30d": 1129.6,
      "heikinAvg30d": 2.982
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 988,
      "ouatsu": 1433.645,
      "saikou": 10,
      "heikin": 1.81,
      "boshuAvg30d": 1126.6,
      "heikinAvg30d": 2.97
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 988,
      "ouatsu": 1465.655,
      "saikou": 10,
      "heikin": 1.85,
      "boshuAvg30d": 1125.6,
      "heikinAvg30d": 2.931
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 969,
      "ouatsu": 1372.708,
      "saikou": 10,
      "heikin": 1.71,
      "boshuAvg30d": 1105.2,
      "heikinAvg30d": 2.781
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 969,
      "ouatsu": 1356.547,
      "saikou": 10,
      "heikin": 1.53,
      "boshuAvg30d": 1105.2,
      "heikinAvg30d": 2.803
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 969,
      "ouatsu": 1475.606,
      "saikou": 10,
      "heikin": 1.93,
      "boshuAvg30d": 1105.2,
      "heikinAvg30d": 2.942
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 965,
      "ouatsu": 1414.298,
      "saikou": 10,
      "heikin": 1.49,
      "boshuAvg30d": 1102.9,
      "heikinAvg30d": 3.04
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 964,
      "ouatsu": 1489.724,
      "saikou": 10,
      "heikin": 1.76,
      "boshuAvg30d": 1099.9,
      "heikinAvg30d": 3.019
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 958,
      "ouatsu": 1540.089,
      "saikou": 10,
      "heikin": 1.87,
      "boshuAvg30d": 1093.9,
      "heikinAvg30d": 3.149
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1029,
      "ouatsu": 1551.4,
      "saikou": 10,
      "heikin": 2.79,
      "boshuAvg30d": 1142.7,
      "heikinAvg30d": 3.193
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1029,
      "ouatsu": 1562.357,
      "saikou": 10,
      "heikin": 2.56,
      "boshuAvg30d": 1142.4,
      "heikinAvg30d": 3.352
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1029,
      "ouatsu": 1589.003,
      "saikou": 10,
      "heikin": 3.58,
      "boshuAvg30d": 1143.1,
      "heikinAvg30d": 3.768
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1027,
      "ouatsu": 1633.756,
      "saikou": 9.85,
      "heikin": 3.54,
      "boshuAvg30d": 1142.1,
      "heikinAvg30d": 4.044
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1025,
      "ouatsu": 1780.849,
      "saikou": 10,
      "heikin": 3.41,
      "boshuAvg30d": 1138.1,
      "heikinAvg30d": 3.969
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1020,
      "ouatsu": 1786.67,
      "saikou": 10,
      "heikin": 3.39,
      "boshuAvg30d": 1132.7,
      "heikinAvg30d": 4.032
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1016,
      "ouatsu": 1728.831,
      "saikou": 10,
      "heikin": 3.22,
      "boshuAvg30d": 1126.7,
      "heikinAvg30d": 3.832
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1016,
      "ouatsu": 1727.374,
      "saikou": 10,
      "heikin": 3.15,
      "boshuAvg30d": 1126.7,
      "heikinAvg30d": 3.797
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1016,
      "ouatsu": 1844.493,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1126.7,
      "heikinAvg30d": 3.616
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1014,
      "ouatsu": 1825.606,
      "saikou": 10,
      "heikin": 2.83,
      "boshuAvg30d": 1126.0,
      "heikinAvg30d": 3.428
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1007,
      "ouatsu": 1912.595,
      "saikou": 10,
      "heikin": 2.93,
      "boshuAvg30d": 1118.0,
      "heikinAvg30d": 3.396
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1007,
      "ouatsu": 1845.654,
      "saikou": 10,
      "heikin": 2.89,
      "boshuAvg30d": 1118.0,
      "heikinAvg30d": 3.316
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 918,
      "ouatsu": 1750.551,
      "saikou": 9.48,
      "heikin": 2.64,
      "boshuAvg30d": 1039.5,
      "heikinAvg30d": 3.22
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 921,
      "ouatsu": 1926.418,
      "saikou": 8.94,
      "heikin": 2.38,
      "boshuAvg30d": 1042.5,
      "heikinAvg30d": 3.266
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 920,
      "ouatsu": 1816.603,
      "saikou": 8.32,
      "heikin": 2.33,
      "boshuAvg30d": 1046.9,
      "heikinAvg30d": 3.275
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 913,
      "ouatsu": 1921.389,
      "saikou": 8.42,
      "heikin": 2.45,
      "boshuAvg30d": 1038.9,
      "heikinAvg30d": 3.088
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 905,
      "ouatsu": 1850.955,
      "saikou": 8.15,
      "heikin": 2.35,
      "boshuAvg30d": 1030.2,
      "heikinAvg30d": 3.172
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 897,
      "ouatsu": 1642.722,
      "saikou": 10,
      "heikin": 1.73,
      "boshuAvg30d": 1022.5,
      "heikinAvg30d": 2.914
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
        "ouatsu": 150.408,
        "saikou": 2.36,
        "heikin": 2.33,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.159
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 151.458,
        "saikou": 2.36,
        "heikin": 2.33,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.037
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 201.708,
        "saikou": 2.35,
        "heikin": 1.84,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 3.984
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 151.458,
        "saikou": 2.36,
        "heikin": 2.33,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 3.792
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 201.708,
        "saikou": 2.35,
        "heikin": 1.84,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.225
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 145.458,
        "saikou": 5.77,
        "heikin": 2.74,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 3.853
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 161.918,
        "saikou": 2.36,
        "heikin": 2.12,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.118
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 163.888,
        "saikou": 7.5,
        "heikin": 2.77,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.155
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 176.508,
        "saikou": 2.35,
        "heikin": 1.86,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.227
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 128.958,
        "saikou": 2.79,
        "heikin": 2.37,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 3.95
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 176.508,
        "saikou": 2.35,
        "heikin": 1.86,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.348
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 172.618,
        "saikou": 2.35,
        "heikin": 1.86,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.455
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 161.908,
        "saikou": 7,
        "heikin": 2.93,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.172
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 168.458,
        "saikou": 3.89,
        "heikin": 2.48,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.275
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 117.908,
        "saikou": 8.67,
        "heikin": 3.8,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 3.656
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 155.458,
        "saikou": 2.35,
        "heikin": 2.31,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.716
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 150.408,
        "saikou": 9.44,
        "heikin": 2.99,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.777
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 191.968,
        "saikou": 7.5,
        "heikin": 2.87,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.094
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 150.408,
        "saikou": 6.7,
        "heikin": 2.47,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 3.207
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 148.458,
        "saikou": 8.9,
        "heikin": 3.25,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 3.113
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 157.458,
        "saikou": 7.8,
        "heikin": 4.68,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 3.679
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 155.508,
        "saikou": 7.5,
        "heikin": 4.51,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 2.882
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 114.908,
        "saikou": 7.58,
        "heikin": 3.5,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 3.672
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 155.508,
        "saikou": 7.5,
        "heikin": 4,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 3.481
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 112.918,
        "saikou": 9.44,
        "heikin": 3.69,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.463
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 124.718,
        "saikou": 2.35,
        "heikin": 2.14,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.47
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 177.908,
        "saikou": 7.69,
        "heikin": 3.78,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.057
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 147.458,
        "saikou": 9.44,
        "heikin": 2.39,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.488
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 158.908,
        "saikou": 2.35,
        "heikin": 1.71,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 3.561
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 129.458,
        "saikou": 2.35,
        "heikin": 2.35,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.585
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 141.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 3.8
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 187.458,
        "saikou": 2.36,
        "heikin": 2.1,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 4.701
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 174.408,
        "saikou": 8.41,
        "heikin": 2.71,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 5.855
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 233.758,
        "saikou": 4.76,
        "heikin": 2.05,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 6.001
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 172.408,
        "saikou": 1.52,
        "heikin": 1.49,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 5.499
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 218.758,
        "saikou": 2.9,
        "heikin": 2.13,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 5.679
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 197.408,
        "saikou": 1.48,
        "heikin": 1.45,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 5.379
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 195.458,
        "saikou": 1.41,
        "heikin": 1.38,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 5.419
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 260.708,
        "saikou": 3.05,
        "heikin": 2.91,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 5.164
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 210.458,
        "saikou": 3.75,
        "heikin": 3.13,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 5.0
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 257.708,
        "saikou": 2.9,
        "heikin": 1.46,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 4.794
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 192.458,
        "saikou": 3.75,
        "heikin": 3.22,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 4.289
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 197.408,
        "saikou": 4.5,
        "heikin": 3.96,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 4.396
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 207.758,
        "saikou": 4.6,
        "heikin": 1.63,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.508
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 158.408,
        "saikou": 4.76,
        "heikin": 1.49,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.624
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 243.758,
        "saikou": 2.6,
        "heikin": 2.53,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.193
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 245.708,
        "saikou": 3.8,
        "heikin": 2.72,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.474
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 156.458,
        "saikou": 4.76,
        "heikin": 1.67,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.012
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 56.948,
        "saikou": 10,
        "heikin": 5.9,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 5.506
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 56.948,
        "saikou": 10,
        "heikin": 7.75,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 5.615
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 76.826,
        "saikou": 10,
        "heikin": 7.34,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 5.493
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 78.786,
        "saikou": 10,
        "heikin": 7.34,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 5.478
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 74.84,
        "saikou": 10,
        "heikin": 7.34,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 5.455
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 62.27,
        "saikou": 10,
        "heikin": 6.65,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 5.539
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 91.786,
        "saikou": 10,
        "heikin": 7.09,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 5.518
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 93.286,
        "saikou": 10,
        "heikin": 6.92,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 5.444
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 97.284,
        "saikou": 10,
        "heikin": 6.92,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 5.247
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 97.284,
        "saikou": 10,
        "heikin": 6.92,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 5.265
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 97.284,
        "saikou": 10,
        "heikin": 6.85,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 5.561
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 97.284,
        "saikou": 10,
        "heikin": 6.85,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 5.676
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 109.284,
        "saikou": 10,
        "heikin": 5.96,
        "boshuAvg30d": 124.0,
        "heikinAvg30d": 5.969
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 107.784,
        "saikou": 10,
        "heikin": 5.41,
        "boshuAvg30d": 129.0,
        "heikinAvg30d": 6.127
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 109.284,
        "saikou": 10,
        "heikin": 5.47,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 6.464
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 107.784,
        "saikou": 10,
        "heikin": 7.51,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 6.529
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 109.284,
        "saikou": 10,
        "heikin": 6.28,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 6.662
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 107.784,
        "saikou": 10,
        "heikin": 8.74,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 6.61
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 112.61,
        "saikou": 10,
        "heikin": 8.26,
        "boshuAvg30d": 78.1,
        "heikinAvg30d": 6.525
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 109.36,
        "saikou": 10,
        "heikin": 7.01,
        "boshuAvg30d": 78.1,
        "heikinAvg30d": 6.707
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 101.408,
        "saikou": 10,
        "heikin": 6.61,
        "boshuAvg30d": 77.2,
        "heikinAvg30d": 6.738
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 100.828,
        "saikou": 10,
        "heikin": 6.3,
        "boshuAvg30d": 77.2,
        "heikinAvg30d": 6.878
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 108.714,
        "saikou": 10,
        "heikin": 6.04,
        "boshuAvg30d": 78.2,
        "heikinAvg30d": 6.907
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 106.784,
        "saikou": 10,
        "heikin": 6.16,
        "boshuAvg30d": 78.2,
        "heikinAvg30d": 6.905
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 121.284,
        "saikou": 10,
        "heikin": 6.64,
        "boshuAvg30d": 74.2,
        "heikinAvg30d": 6.899
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 108.714,
        "saikou": 10,
        "heikin": 7.53,
        "boshuAvg30d": 74.2,
        "heikinAvg30d": 6.778
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 112.61,
        "saikou": 10,
        "heikin": 6.9,
        "boshuAvg30d": 74.2,
        "heikinAvg30d": 6.245
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 108.78,
        "saikou": 10,
        "heikin": 5.41,
        "boshuAvg30d": 73.2,
        "heikinAvg30d": 6.09
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 108.78,
        "saikou": 10,
        "heikin": 5.5,
        "boshuAvg30d": 73.2,
        "heikinAvg30d": 6.125
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 110.71,
        "saikou": 10,
        "heikin": 4.63,
        "boshuAvg30d": 71.2,
        "heikinAvg30d": 5.448
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 123.28,
        "saikou": 10,
        "heikin": 6.12,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 5.285
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 123.28,
        "saikou": 10,
        "heikin": 5.96,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 4.429
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 123.28,
        "saikou": 10,
        "heikin": 5.79,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 4.45
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 107.784,
        "saikou": 9.38,
        "heikin": 5.96,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 4.435
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 109.284,
        "saikou": 8.94,
        "heikin": 6.18,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 4.294
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 107.784,
        "saikou": 8.94,
        "heikin": 6.05,
        "boshuAvg30d": 131.0,
        "heikinAvg30d": 4.007
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 109.284,
        "saikou": 8.94,
        "heikin": 5.06,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 3.958
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 107.784,
        "saikou": 8.94,
        "heikin": 4.84,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 3.517
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 107.283,
        "saikou": 4.91,
        "heikin": 3.29,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 3.574
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 107.283,
        "saikou": 5.96,
        "heikin": 3.86,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 3.91
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 105.329,
        "saikou": 6.36,
        "heikin": 3.8,
        "boshuAvg30d": 129.0,
        "heikinAvg30d": 3.849
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 105.329,
        "saikou": 6.38,
        "heikin": 4.1,
        "boshuAvg30d": 129.0,
        "heikinAvg30d": 4.072
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 95.384,
        "saikou": 5.94,
        "heikin": 3.48,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 4.363
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 83.364,
        "saikou": 6.33,
        "heikin": 4.84,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 4.211
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 97.284,
        "saikou": 7.52,
        "heikin": 5.03,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 4.229
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 84.714,
        "saikou": 7.2,
        "heikin": 5.82,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 4.514
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 95.934,
        "saikou": 7.45,
        "heikin": 4.82,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.638
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 83.214,
        "saikou": 10,
        "heikin": 9.14,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 5.009
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 167,
        "ouatsu": 386.724,
        "saikou": 1.63,
        "heikin": 1.32,
        "boshuAvg30d": 242.6,
        "heikinAvg30d": 3.682
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 167,
        "ouatsu": 375.204,
        "saikou": 1.97,
        "heikin": 1.27,
        "boshuAvg30d": 242.6,
        "heikinAvg30d": 3.655
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 167,
        "ouatsu": 395.815,
        "saikou": 1.56,
        "heikin": 1.06,
        "boshuAvg30d": 242.6,
        "heikinAvg30d": 3.478
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 167,
        "ouatsu": 390.142,
        "saikou": 1.81,
        "heikin": 1.13,
        "boshuAvg30d": 242.6,
        "heikinAvg30d": 3.531
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 165,
        "ouatsu": 386.311,
        "saikou": 1.55,
        "heikin": 0.87,
        "boshuAvg30d": 241.6,
        "heikinAvg30d": 3.554
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 165,
        "ouatsu": 384.639,
        "saikou": 1.51,
        "heikin": 0.92,
        "boshuAvg30d": 240.6,
        "heikinAvg30d": 3.344
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 163,
        "ouatsu": 367.236,
        "saikou": 1.4,
        "heikin": 0.79,
        "boshuAvg30d": 238.6,
        "heikinAvg30d": 3.578
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 165,
        "ouatsu": 361.996,
        "saikou": 1.28,
        "heikin": 0.83,
        "boshuAvg30d": 240.6,
        "heikinAvg30d": 3.712
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 341.8,
        "saikou": 1.1,
        "heikin": 0.61,
        "boshuAvg30d": 240.6,
        "heikinAvg30d": 3.707
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 166,
        "ouatsu": 345.563,
        "saikou": 1.13,
        "heikin": 0.58,
        "boshuAvg30d": 241.6,
        "heikinAvg30d": 3.906
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 166,
        "ouatsu": 343.73,
        "saikou": 1.1,
        "heikin": 0.58,
        "boshuAvg30d": 241.6,
        "heikinAvg30d": 3.756
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 166,
        "ouatsu": 354.811,
        "saikou": 2.01,
        "heikin": 0.69,
        "boshuAvg30d": 241.6,
        "heikinAvg30d": 3.925
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 186,
        "ouatsu": 296.53,
        "saikou": 7.46,
        "heikin": 3.26,
        "boshuAvg30d": 260.6,
        "heikinAvg30d": 3.869
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 194,
        "ouatsu": 314.968,
        "saikou": 6.89,
        "heikin": 2.32,
        "boshuAvg30d": 268.6,
        "heikinAvg30d": 4.191
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 198,
        "ouatsu": 307.114,
        "saikou": 6.78,
        "heikin": 2.21,
        "boshuAvg30d": 273.6,
        "heikinAvg30d": 3.674
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 203,
        "ouatsu": 370.052,
        "saikou": 2.67,
        "heikin": 1.2,
        "boshuAvg30d": 278.9,
        "heikinAvg30d": 3.359
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 203,
        "ouatsu": 365.987,
        "saikou": 2.47,
        "heikin": 0.84,
        "boshuAvg30d": 279.3,
        "heikinAvg30d": 3.324
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 203,
        "ouatsu": 368.177,
        "saikou": 2.46,
        "heikin": 0.92,
        "boshuAvg30d": 279.3,
        "heikinAvg30d": 3.226
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 193,
        "ouatsu": 345.823,
        "saikou": 1.78,
        "heikin": 0.62,
        "boshuAvg30d": 271.3,
        "heikinAvg30d": 3.322
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 193,
        "ouatsu": 366.257,
        "saikou": 1.65,
        "heikin": 0.77,
        "boshuAvg30d": 271.3,
        "heikinAvg30d": 3.405
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 193,
        "ouatsu": 362.53,
        "saikou": 1.72,
        "heikin": 0.76,
        "boshuAvg30d": 271.9,
        "heikinAvg30d": 3.347
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 193,
        "ouatsu": 361.01,
        "saikou": 1.91,
        "heikin": 0.85,
        "boshuAvg30d": 270.9,
        "heikinAvg30d": 3.299
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 190,
        "ouatsu": 339.551,
        "saikou": 3.15,
        "heikin": 0.95,
        "boshuAvg30d": 268.9,
        "heikinAvg30d": 3.31
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 190,
        "ouatsu": 330.051,
        "saikou": 5.9,
        "heikin": 0.93,
        "boshuAvg30d": 268.9,
        "heikinAvg30d": 3.269
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 188,
        "ouatsu": 360.117,
        "saikou": 5.2,
        "heikin": 0.91,
        "boshuAvg30d": 265.6,
        "heikinAvg30d": 3.089
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 188,
        "ouatsu": 364.132,
        "saikou": 2.7,
        "heikin": 0.8,
        "boshuAvg30d": 265.6,
        "heikinAvg30d": 3.052
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 188,
        "ouatsu": 294.607,
        "saikou": 2.07,
        "heikin": 0.94,
        "boshuAvg30d": 265.6,
        "heikinAvg30d": 3.22
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 188,
        "ouatsu": 286.02,
        "saikou": 1.62,
        "heikin": 0.76,
        "boshuAvg30d": 265.2,
        "heikinAvg30d": 3.284
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 187,
        "ouatsu": 286.02,
        "saikou": 1.39,
        "heikin": 0.84,
        "boshuAvg30d": 264.2,
        "heikinAvg30d": 3.119
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 187,
        "ouatsu": 311.868,
        "saikou": 1.5,
        "heikin": 0.82,
        "boshuAvg30d": 263.2,
        "heikinAvg30d": 2.942
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 185,
        "ouatsu": 271.34,
        "saikou": 6.69,
        "heikin": 3.54,
        "boshuAvg30d": 261.2,
        "heikinAvg30d": 2.864
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 185,
        "ouatsu": 324.927,
        "saikou": 7.12,
        "heikin": 2.88,
        "boshuAvg30d": 260.9,
        "heikinAvg30d": 2.823
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 185,
        "ouatsu": 412.248,
        "saikou": 6.8,
        "heikin": 3.79,
        "boshuAvg30d": 260.6,
        "heikinAvg30d": 2.836
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 185,
        "ouatsu": 506.529,
        "saikou": 6.21,
        "heikin": 2.55,
        "boshuAvg30d": 260.6,
        "heikinAvg30d": 2.915
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 185,
        "ouatsu": 614.485,
        "saikou": 4.23,
        "heikin": 1.64,
        "boshuAvg30d": 258.6,
        "heikinAvg30d": 2.792
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 185,
        "ouatsu": 620.388,
        "saikou": 4.03,
        "heikin": 1.53,
        "boshuAvg30d": 258.2,
        "heikinAvg30d": 2.782
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 187,
        "ouatsu": 559.634,
        "saikou": 4.02,
        "heikin": 1.84,
        "boshuAvg30d": 260.2,
        "heikinAvg30d": 2.966
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 187,
        "ouatsu": 555.723,
        "saikou": 3.95,
        "heikin": 1.72,
        "boshuAvg30d": 260.2,
        "heikinAvg30d": 2.737
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 187,
        "ouatsu": 555.723,
        "saikou": 4.23,
        "heikin": 1.8,
        "boshuAvg30d": 260.2,
        "heikinAvg30d": 2.824
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 527.638,
        "saikou": 2.67,
        "heikin": 1.53,
        "boshuAvg30d": 260.6,
        "heikinAvg30d": 2.589
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 186,
        "ouatsu": 567.551,
        "saikou": 2.89,
        "heikin": 1.59,
        "boshuAvg30d": 258.6,
        "heikinAvg30d": 2.576
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 186,
        "ouatsu": 563.766,
        "saikou": 2.14,
        "heikin": 1.39,
        "boshuAvg30d": 258.6,
        "heikinAvg30d": 2.792
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 185,
        "ouatsu": 487.995,
        "saikou": 2.5,
        "heikin": 1.25,
        "boshuAvg30d": 258.6,
        "heikinAvg30d": 2.483
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 185,
        "ouatsu": 621.948,
        "saikou": 2.72,
        "heikin": 1.6,
        "boshuAvg30d": 258.6,
        "heikinAvg30d": 2.588
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 185,
        "ouatsu": 556.397,
        "saikou": 2.37,
        "heikin": 1.45,
        "boshuAvg30d": 261.9,
        "heikinAvg30d": 2.54
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 183,
        "ouatsu": 518.617,
        "saikou": 2.4,
        "heikin": 1.55,
        "boshuAvg30d": 256.9,
        "heikinAvg30d": 2.601
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 181,
        "ouatsu": 499.015,
        "saikou": 2.69,
        "heikin": 1.86,
        "boshuAvg30d": 255.3,
        "heikinAvg30d": 3.116
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 180,
        "ouatsu": 419.817,
        "saikou": 1.53,
        "heikin": 0.97,
        "boshuAvg30d": 253.6,
        "heikinAvg30d": 3.188
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 60,
        "ouatsu": 228.022,
        "saikou": 1.66,
        "heikin": 0.98,
        "boshuAvg30d": 104.2,
        "heikinAvg30d": 1.706
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 60,
        "ouatsu": 228.022,
        "saikou": 1.59,
        "heikin": 1.08,
        "boshuAvg30d": 104.2,
        "heikinAvg30d": 1.566
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 60,
        "ouatsu": 244.259,
        "saikou": 1.59,
        "heikin": 1.05,
        "boshuAvg30d": 104.2,
        "heikinAvg30d": 1.577
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 248.231,
        "saikou": 1.49,
        "heikin": 1.04,
        "boshuAvg30d": 104.2,
        "heikinAvg30d": 1.65
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 59,
        "ouatsu": 238.118,
        "saikou": 1.2,
        "heikin": 0.98,
        "boshuAvg30d": 103.2,
        "heikinAvg30d": 1.612
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 236.134,
        "saikou": 1.55,
        "heikin": 1.03,
        "boshuAvg30d": 103.2,
        "heikinAvg30d": 1.589
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 258.111,
        "saikou": 1.4,
        "heikin": 1.03,
        "boshuAvg30d": 102.2,
        "heikinAvg30d": 1.463
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 232.823,
        "saikou": 1.96,
        "heikin": 1.27,
        "boshuAvg30d": 102.2,
        "heikinAvg30d": 1.513
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 238.399,
        "saikou": 1.86,
        "heikin": 1.26,
        "boshuAvg30d": 103.2,
        "heikinAvg30d": 1.489
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 222.609,
        "saikou": 1.96,
        "heikin": 1.2,
        "boshuAvg30d": 103.2,
        "heikinAvg30d": 1.472
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 226.459,
        "saikou": 2.05,
        "heikin": 1.25,
        "boshuAvg30d": 103.2,
        "heikinAvg30d": 1.448
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 222.975,
        "saikou": 2.08,
        "heikin": 1.24,
        "boshuAvg30d": 103.2,
        "heikinAvg30d": 1.402
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 190.936,
        "saikou": 2.57,
        "heikin": 1.5,
        "boshuAvg30d": 112.2,
        "heikinAvg30d": 1.613
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 72,
        "ouatsu": 190.936,
        "saikou": 2.46,
        "heikin": 1.42,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 1.664
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 75,
        "ouatsu": 170.731,
        "saikou": 1.94,
        "heikin": 1.04,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 1.961
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 77,
        "ouatsu": 171.215,
        "saikou": 5.68,
        "heikin": 1.34,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 1.995
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 77,
        "ouatsu": 171.215,
        "saikou": 2.02,
        "heikin": 1.05,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 2.062
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 77,
        "ouatsu": 163.249,
        "saikou": 7.85,
        "heikin": 1.56,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 2.207
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 82,
        "ouatsu": 172.465,
        "saikou": 7.85,
        "heikin": 1.94,
        "boshuAvg30d": 126.2,
        "heikinAvg30d": 2.64
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 82,
        "ouatsu": 171.249,
        "saikou": 7.85,
        "heikin": 1.93,
        "boshuAvg30d": 126.2,
        "heikinAvg30d": 2.663
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 82,
        "ouatsu": 159.36,
        "saikou": 7.85,
        "heikin": 2.03,
        "boshuAvg30d": 126.2,
        "heikinAvg30d": 2.854
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 82,
        "ouatsu": 165.441,
        "saikou": 7.85,
        "heikin": 2,
        "boshuAvg30d": 126.2,
        "heikinAvg30d": 2.857
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 81,
        "ouatsu": 165.386,
        "saikou": 7.85,
        "heikin": 1.92,
        "boshuAvg30d": 125.2,
        "heikinAvg30d": 2.706
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 80,
        "ouatsu": 163.402,
        "saikou": 7.85,
        "heikin": 1.93,
        "boshuAvg30d": 124.2,
        "heikinAvg30d": 2.743
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 76,
        "ouatsu": 125.472,
        "saikou": 7.85,
        "heikin": 1.93,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 2.642
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 76,
        "ouatsu": 120.464,
        "saikou": 7.85,
        "heikin": 1.9,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 2.613
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 76,
        "ouatsu": 160.035,
        "saikou": 7.85,
        "heikin": 1.88,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 2.666
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 76,
        "ouatsu": 171.219,
        "saikou": 5.9,
        "heikin": 1.78,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 2.717
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 76,
        "ouatsu": 173.209,
        "saikou": 5.68,
        "heikin": 1.77,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 2.962
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 76,
        "ouatsu": 189.446,
        "saikou": 2.03,
        "heikin": 1.28,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 2.867
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 74,
        "ouatsu": 208.711,
        "saikou": 2.63,
        "heikin": 1.49,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 2.713
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 74,
        "ouatsu": 244.469,
        "saikou": 5.02,
        "heikin": 1.44,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 2.863
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 74,
        "ouatsu": 180.851,
        "saikou": 4.8,
        "heikin": 1.76,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 2.802
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 73,
        "ouatsu": 125.911,
        "saikou": 4.58,
        "heikin": 2.05,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 2.805
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 73,
        "ouatsu": 133.108,
        "saikou": 4.36,
        "heikin": 2.11,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 2.655
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 72,
        "ouatsu": 163.9,
        "saikou": 4.14,
        "heikin": 1.88,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 2.576
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 185.041,
        "saikou": 3.92,
        "heikin": 1.71,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 2.15
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 185.041,
        "saikou": 3.7,
        "heikin": 1.57,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 2.078
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 212.639,
        "saikou": 2.14,
        "heikin": 1.45,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.801
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 266.946,
        "saikou": 2.19,
        "heikin": 1.49,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.645
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 70,
        "ouatsu": 257.041,
        "saikou": 2.15,
        "heikin": 1.46,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.541
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 70,
        "ouatsu": 255.057,
        "saikou": 2.5,
        "heikin": 1.55,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.594
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 72,
        "ouatsu": 272.483,
        "saikou": 2.03,
        "heikin": 1.4,
        "boshuAvg30d": 115.2,
        "heikinAvg30d": 1.523
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 72,
        "ouatsu": 272.483,
        "saikou": 2.04,
        "heikin": 1.4,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 1.782
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 72,
        "ouatsu": 269.319,
        "saikou": 2.1,
        "heikin": 1.41,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 1.758
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 271.303,
        "saikou": 2.07,
        "heikin": 1.43,
        "boshuAvg30d": 115.2,
        "heikinAvg30d": 1.816
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 271.303,
        "saikou": 1.95,
        "heikin": 1.27,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.715
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 249.598,
        "saikou": 1.95,
        "heikin": 1.25,
        "boshuAvg30d": 111.2,
        "heikinAvg30d": 1.83
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 28.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.312
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 28.928,
        "saikou": 0.49,
        "heikin": 0.49,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.316
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 26.93,
        "saikou": 0.43,
        "heikin": 0.43,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.31
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 26.93,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.193
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 28.928,
        "saikou": 0.49,
        "heikin": 0.49,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.338
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 28.928,
        "saikou": 1.5,
        "heikin": 0.79,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.352
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 28.928,
        "saikou": 4.64,
        "heikin": 4.4,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.605
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 28.928,
        "saikou": 4.64,
        "heikin": 4.27,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.024
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 28.928,
        "saikou": 3.09,
        "heikin": 3.09,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.852
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 33.994,
        "saikou": 4.95,
        "heikin": 4.69,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.854
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 28.928,
        "saikou": 4.78,
        "heikin": 4.57,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.013
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 39.836,
        "saikou": 4.38,
        "heikin": 4.04,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.003
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 55.842,
        "saikou": 3.15,
        "heikin": 2.97,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.058
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 63.928,
        "saikou": 2.75,
        "heikin": 2.62,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.084
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 63.928,
        "saikou": 1.73,
        "heikin": 1.6,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.38
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.25,
        "heikin": 2.82,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 1.995
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 3.201
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.3,
        "heikin": 3.22,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.865
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 3.2,
        "heikin": 3.12,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 3.258
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.68,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 3.629
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.43,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 4.31
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.14,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 4.433
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.8,
        "heikin": 4.72,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 3.45
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.8,
        "heikin": 4.7,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 3.218
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.2,
        "heikin": 5.15,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 2.461
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.55,
        "heikin": 4.5,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 2.151
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.95,
        "heikin": 5.85,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 3.732
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.73,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 3.001
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 63.928,
        "saikou": 4.95,
        "heikin": 1.17,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 3.661
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 63.928,
        "saikou": 4.25,
        "heikin": 1.36,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 3.646
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 63.928,
        "saikou": 2.45,
        "heikin": 2.32,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 4.549
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 63.928,
        "saikou": 2.77,
        "heikin": 2.64,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 5.608
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 34.034,
        "saikou": 4.45,
        "heikin": 1.8,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 4.396
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.05,
        "heikin": 3.95,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 3.907
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.2,
        "heikin": 4.1,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 3.706
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.2,
        "heikin": 4.1,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 4.248
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.37,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 3.371
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.55,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 4.028
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 3.17
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 3.099
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.662
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 14.39,
        "saikou": 2.51,
        "heikin": 2.51,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.254
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 7.628,
        "saikou": 2.51,
        "heikin": 2.51,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.378
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 28.928,
        "saikou": 2.51,
        "heikin": 2.51,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.361
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 28.928,
        "saikou": 4.29,
        "heikin": 4.29,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.678
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 28.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.28
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 28.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.995
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.537
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 125,
        "ouatsu": 85.627,
        "saikou": 1.44,
        "heikin": 1.22,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 1.293
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 125,
        "ouatsu": 129.186,
        "saikou": 1.44,
        "heikin": 0.98,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 1.085
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 125,
        "ouatsu": 74.763,
        "saikou": 1.69,
        "heikin": 0.8,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 1.029
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 125,
        "ouatsu": 123.347,
        "saikou": 1.44,
        "heikin": 0.87,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 1.015
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 135.17,
        "saikou": 1.44,
        "heikin": 0.91,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 0.979
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 139.018,
        "saikou": 1.69,
        "heikin": 1.05,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 1.21
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 124,
        "ouatsu": 146.905,
        "saikou": 1.62,
        "heikin": 1.06,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 1.323
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 107.334,
        "saikou": 1.94,
        "heikin": 1.65,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 1.491
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 125,
        "ouatsu": 107.334,
        "saikou": 1.99,
        "heikin": 1.65,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 1.423
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 125,
        "ouatsu": 107.334,
        "saikou": 1.94,
        "heikin": 1.63,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 1.493
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 125,
        "ouatsu": 111.201,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 1.494
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 125,
        "ouatsu": 111.201,
        "saikou": 1.99,
        "heikin": 1.57,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 1.379
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 135,
        "ouatsu": 111.201,
        "saikou": 1.64,
        "heikin": 1.43,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 1.494
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 139,
        "ouatsu": 111.201,
        "saikou": 1.94,
        "heikin": 1.53,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 1.48
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 144,
        "ouatsu": 148.774,
        "saikou": 2,
        "heikin": 1.37,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 1.548
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 148.774,
        "saikou": 2.09,
        "heikin": 1.41,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 1.625
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 148.774,
        "saikou": 2.09,
        "heikin": 1.41,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 1.602
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 154.76,
        "saikou": 3.94,
        "heikin": 2.13,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 2.054
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 154.76,
        "saikou": 3,
        "heikin": 1.88,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 2.177
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 148,
        "ouatsu": 178.698,
        "saikou": 3.94,
        "heikin": 1.9,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 2.128
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 148,
        "ouatsu": 129.288,
        "saikou": 5.94,
        "heikin": 1.76,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 2.261
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 147,
        "ouatsu": 129.288,
        "saikou": 5.94,
        "heikin": 1.75,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 2.415
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 145,
        "ouatsu": 176.828,
        "saikou": 5.94,
        "heikin": 1.86,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 2.465
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 146,
        "ouatsu": 176.828,
        "saikou": 3,
        "heikin": 1.61,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 2.227
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 144,
        "ouatsu": 160.385,
        "saikou": 3,
        "heikin": 1.31,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 2.027
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 144,
        "ouatsu": 160.385,
        "saikou": 3,
        "heikin": 1.28,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 2.165
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 144,
        "ouatsu": 178.698,
        "saikou": 5.94,
        "heikin": 1.82,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 2.465
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 144,
        "ouatsu": 154.76,
        "saikou": 3,
        "heikin": 1.6,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 2.254
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 144,
        "ouatsu": 154.76,
        "saikou": 4.44,
        "heikin": 1.95,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 2.239
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 144,
        "ouatsu": 178.698,
        "saikou": 3,
        "heikin": 1.53,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 2.019
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 144,
        "ouatsu": 178.698,
        "saikou": 3,
        "heikin": 1.64,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.321
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 144,
        "ouatsu": 154.76,
        "saikou": 3.94,
        "heikin": 2.11,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.568
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 144,
        "ouatsu": 111.201,
        "saikou": 3.94,
        "heikin": 2.81,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.478
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 144,
        "ouatsu": 90.215,
        "saikou": 2.38,
        "heikin": 2.05,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.166
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 144,
        "ouatsu": 105.215,
        "saikou": 2.5,
        "heikin": 2.25,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.204
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 143,
        "ouatsu": 90.215,
        "saikou": 2.5,
        "heikin": 2.27,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 2.477
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 141,
        "ouatsu": 101.812,
        "saikou": 1.95,
        "heikin": 1.73,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 1.923
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 141,
        "ouatsu": 101.812,
        "saikou": 1.94,
        "heikin": 1.69,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 1.951
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 141,
        "ouatsu": 107.334,
        "saikou": 1.75,
        "heikin": 1.55,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 1.831
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 140,
        "ouatsu": 107.334,
        "saikou": 1.94,
        "heikin": 1.7,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 1.796
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 139,
        "ouatsu": 105.349,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.722
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 140,
        "ouatsu": 105.349,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.742
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 140,
        "ouatsu": 107.334,
        "saikou": 1.99,
        "heikin": 1.55,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.696
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 140,
        "ouatsu": 129.618,
        "saikou": 1.99,
        "heikin": 1.51,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.83
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 140,
        "ouatsu": 126.948,
        "saikou": 1.99,
        "heikin": 1.52,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.784
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 138,
        "ouatsu": 124.95,
        "saikou": 1.99,
        "heikin": 1.42,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 1.633
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 137,
        "ouatsu": 126.948,
        "saikou": 1.99,
        "heikin": 1.4,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 1.411
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 135,
        "ouatsu": 107.334,
        "saikou": 1.94,
        "heikin": 1.67,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 1.583
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 143,
        "ouatsu": 187.109,
        "saikou": 1.75,
        "heikin": 1.64,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.432
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 143,
        "ouatsu": 187.109,
        "saikou": 1.9,
        "heikin": 1.7,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.528
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 143,
        "ouatsu": 188.909,
        "saikou": 1.84,
        "heikin": 1.67,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.232
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 143,
        "ouatsu": 190.899,
        "saikou": 1.75,
        "heikin": 1.65,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.029
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 143,
        "ouatsu": 190.899,
        "saikou": 1.9,
        "heikin": 1.72,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.069
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 143,
        "ouatsu": 190.899,
        "saikou": 2.09,
        "heikin": 1.83,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.342
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 143,
        "ouatsu": 207.574,
        "saikou": 4.96,
        "heikin": 3.19,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.549
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 144,
        "ouatsu": 207.574,
        "saikou": 4.27,
        "heikin": 2.95,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.919
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 144,
        "ouatsu": 207.574,
        "saikou": 4.53,
        "heikin": 2.92,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.28
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 144,
        "ouatsu": 207.574,
        "saikou": 6.09,
        "heikin": 4.09,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.621
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 144,
        "ouatsu": 207.574,
        "saikou": 6.24,
        "heikin": 4.21,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.441
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 144,
        "ouatsu": 140.504,
        "saikou": 2.36,
        "heikin": 2.34,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.347
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 146,
        "ouatsu": 137.516,
        "saikou": 2.29,
        "heikin": 1.71,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 3.366
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 147,
        "ouatsu": 135.518,
        "saikou": 2.29,
        "heikin": 1.71,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.042
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 147,
        "ouatsu": 135.702,
        "saikou": 2.29,
        "heikin": 1.71,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 2.094
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 148,
        "ouatsu": 135.702,
        "saikou": 2.29,
        "heikin": 1.72,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 1.737
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 148,
        "ouatsu": 119.835,
        "saikou": 2.29,
        "heikin": 1.75,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 1.801
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 148,
        "ouatsu": 119.835,
        "saikou": 2.29,
        "heikin": 1.73,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 1.853
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 103.939,
        "saikou": 7.98,
        "heikin": 1.89,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.06
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 152,
        "ouatsu": 103.939,
        "saikou": 7.98,
        "heikin": 1.95,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.092
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 153,
        "ouatsu": 103.939,
        "saikou": 7.98,
        "heikin": 1.85,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 1.688
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 154,
        "ouatsu": 103.939,
        "saikou": 7.98,
        "heikin": 1.87,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 1.721
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 154,
        "ouatsu": 103.939,
        "saikou": 2.7,
        "heikin": 1.78,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 1.638
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 154,
        "ouatsu": 103.939,
        "saikou": 2.7,
        "heikin": 1.81,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 1.739
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 151,
        "ouatsu": 113.891,
        "saikou": 2.7,
        "heikin": 1.8,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.525
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 151,
        "ouatsu": 113.891,
        "saikou": 2.7,
        "heikin": 1.81,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.772
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 151,
        "ouatsu": 113.891,
        "saikou": 2.7,
        "heikin": 1.77,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.871
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 151,
        "ouatsu": 113.891,
        "saikou": 2.7,
        "heikin": 1.79,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.836
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 151,
        "ouatsu": 113.891,
        "saikou": 2.7,
        "heikin": 1.81,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.903
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 150,
        "ouatsu": 113.891,
        "saikou": 2.7,
        "heikin": 1.86,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.967
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 150,
        "ouatsu": 113.891,
        "saikou": 2.7,
        "heikin": 1.89,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.223
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 150,
        "ouatsu": 113.891,
        "saikou": 2.7,
        "heikin": 1.86,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.436
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 150,
        "ouatsu": 113.891,
        "saikou": 7.99,
        "heikin": 2.15,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.968
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 150,
        "ouatsu": 113.891,
        "saikou": 7.99,
        "heikin": 2.15,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.722
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 150,
        "ouatsu": 196.644,
        "saikou": 7.99,
        "heikin": 2.8,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.932
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 150,
        "ouatsu": 186.692,
        "saikou": 4.57,
        "heikin": 2.87,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 4.021
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 150,
        "ouatsu": 185.702,
        "saikou": 4.57,
        "heikin": 2.93,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 4.046
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 150,
        "ouatsu": 185.702,
        "saikou": 4.53,
        "heikin": 2.78,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 4.043
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 150,
        "ouatsu": 203.596,
        "saikou": 4.23,
        "heikin": 2.55,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.81
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 150,
        "ouatsu": 207.758,
        "saikou": 2.29,
        "heikin": 1.69,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.577
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 149,
        "ouatsu": 207.574,
        "saikou": 4.57,
        "heikin": 2.82,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.908
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 149,
        "ouatsu": 207.758,
        "saikou": 2.29,
        "heikin": 1.75,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.784
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 207.758,
        "saikou": 2.29,
        "heikin": 1.71,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 3.905
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 207.758,
        "saikou": 2.29,
        "heikin": 1.71,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 3.672
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 207.758,
        "saikou": 1.9,
        "heikin": 1.69,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 3.522
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 147,
        "ouatsu": 207.758,
        "saikou": 1.75,
        "heikin": 1.62,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 3.01
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 146,
        "ouatsu": 207.758,
        "saikou": 1.66,
        "heikin": 1.57,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.063
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 146,
        "ouatsu": 239.012,
        "saikou": 1.56,
        "heikin": 1.09,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.118
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 148.843,
        "saikou": 1.6,
        "heikin": 0.45,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.883
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 149.843,
        "saikou": 1.7,
        "heikin": 0.6,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.834
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 149.843,
        "saikou": 1.7,
        "heikin": 0.47,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.789
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 150.843,
        "saikou": 1.6,
        "heikin": 0.37,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.797
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 149.843,
        "saikou": 1.6,
        "heikin": 0.37,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.8
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 149.843,
        "saikou": 1.6,
        "heikin": 0.37,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.793
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 168.843,
        "saikou": 1.6,
        "heikin": 0.44,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.819
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 122.3,
        "saikou": 1.6,
        "heikin": 0.44,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.864
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 132.843,
        "saikou": 1.6,
        "heikin": 0.44,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.892
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 132.843,
        "saikou": 1.6,
        "heikin": 0.44,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.953
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 133.843,
        "saikou": 1.6,
        "heikin": 0.44,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.925
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 133.843,
        "saikou": 1.6,
        "heikin": 0.44,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.889
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 136.843,
        "saikou": 1.7,
        "heikin": 0.74,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.991
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 135.843,
        "saikou": 1.7,
        "heikin": 0.73,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.922
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 135.843,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.857
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 205.843,
        "saikou": 0.38,
        "heikin": 0.37,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 0.879
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 205.843,
        "saikou": 1.7,
        "heikin": 0.85,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 0.826
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 205.843,
        "saikou": 1.7,
        "heikin": 0.75,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 0.858
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 171.843,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.122
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.076
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.115
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.03
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.086
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.103
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 171.843,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.077
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 171.843,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.099
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.088
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.71,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.116
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.183
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.118
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.182
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.228
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.43
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 207.343,
        "saikou": 1.6,
        "heikin": 0.6,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.566
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 203.343,
        "saikou": 1.6,
        "heikin": 0.58,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.663
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 168.343,
        "saikou": 1.7,
        "heikin": 1.2,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.661
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 168.343,
        "saikou": 1.7,
        "heikin": 1.22,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.608
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 171.343,
        "saikou": 1.6,
        "heikin": 1.31,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.623
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 168.343,
        "saikou": 1.6,
        "heikin": 1.22,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.493
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 168.343,
        "saikou": 1.6,
        "heikin": 1.22,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.523
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 168.343,
        "saikou": 1.6,
        "heikin": 1.22,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.521
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 1.18,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.491
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.07
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.967
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.49,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.954
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 202.343,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.901
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 203.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.982
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 202.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.962
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 129.201,
        "saikou": 6.5,
        "heikin": 4.07,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.18
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 100.088,
        "saikou": 4.57,
        "heikin": 2.36,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.965
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 165.118,
        "saikou": 4.45,
        "heikin": 3.1,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.901
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 165.116,
        "saikou": 3.45,
        "heikin": 2.44,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.802
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 165.116,
        "saikou": 4.45,
        "heikin": 3.22,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.794
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 165.116,
        "saikou": 5.95,
        "heikin": 4.53,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.034
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 177.805,
        "saikou": 6.57,
        "heikin": 6,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.223
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 229.057,
        "saikou": 8.57,
        "heikin": 7.45,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.716
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 243.668,
        "saikou": 8.71,
        "heikin": 8.11,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.895
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 245.631,
        "saikou": 8.71,
        "heikin": 8.08,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 6.19
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 245.631,
        "saikou": 8.71,
        "heikin": 8.08,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 6.33
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 240.355,
        "saikou": 8.71,
        "heikin": 6.74,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 6.242
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 243.355,
        "saikou": 8.71,
        "heikin": 6.36,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 5.925
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 244.355,
        "saikou": 8.57,
        "heikin": 6.23,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 5.288
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 217.455,
        "saikou": 4.07,
        "heikin": 3.04,
        "boshuAvg30d": 175.0,
        "heikinAvg30d": 4.319
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 123.455,
        "saikou": 4.16,
        "heikin": 2.35,
        "boshuAvg30d": 176.0,
        "heikinAvg30d": 3.663
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 223.455,
        "saikou": 2.67,
        "heikin": 2.13,
        "boshuAvg30d": 176.0,
        "heikinAvg30d": 3.468
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 223.455,
        "saikou": 0.81,
        "heikin": 0.43,
        "boshuAvg30d": 176.0,
        "heikinAvg30d": 3.419
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 206.639,
        "saikou": 0.84,
        "heikin": 0.44,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.435
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 209.559,
        "saikou": 1.04,
        "heikin": 0.46,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.435
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 209.559,
        "saikou": 1.12,
        "heikin": 0.47,
        "boshuAvg30d": 181.0,
        "heikinAvg30d": 3.306
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 207.596,
        "saikou": 1.04,
        "heikin": 0.47,
        "boshuAvg30d": 182.0,
        "heikinAvg30d": 3.285
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 196.048,
        "saikou": 0.81,
        "heikin": 0.44,
        "boshuAvg30d": 182.0,
        "heikinAvg30d": 3.072
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 200.872,
        "saikou": 0.91,
        "heikin": 0.44,
        "boshuAvg30d": 182.0,
        "heikinAvg30d": 3.065
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 202.87,
        "saikou": 0.86,
        "heikin": 0.44,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 2.787
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 188.472,
        "saikou": 0.8,
        "heikin": 0.44,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 2.909
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 209.586,
        "saikou": 1,
        "heikin": 0.47,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.51
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 203.899,
        "saikou": 1.2,
        "heikin": 0.47,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 4.086
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 205.885,
        "saikou": 2.51,
        "heikin": 2.16,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.968
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 217.747,
        "saikou": 3.84,
        "heikin": 3.19,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 4.698
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 225.301,
        "saikou": 4.54,
        "heikin": 3.53,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 5.047
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 125.301,
        "saikou": 6.2,
        "heikin": 3.45,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 5.269
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 214.747,
        "saikou": 8.71,
        "heikin": 6.31,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 6.216
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 244.397,
        "saikou": 9.85,
        "heikin": 7.19,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 6.902
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 242.434,
        "saikou": 10,
        "heikin": 7.45,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 7.036
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 226.662,
        "saikou": 10,
        "heikin": 7.61,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 7.149
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 217.679,
        "saikou": 10,
        "heikin": 7.52,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 7.057
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 220.583,
        "saikou": 10,
        "heikin": 7.72,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 7.049
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 224.939,
        "saikou": 10,
        "heikin": 7.24,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 6.81
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 225.918,
        "saikou": 10,
        "heikin": 6.93,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 6.378
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 239.772,
        "saikou": 10,
        "heikin": 7.72,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 6.633
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 234.204,
        "saikou": 10,
        "heikin": 6.95,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 6.231
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 173.218,
        "saikou": 9.48,
        "heikin": 6.28,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 6.161
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 173.218,
        "saikou": 8.94,
        "heikin": 5.91,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 5.997
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 170.218,
        "saikou": 8.32,
        "heikin": 5.49,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 6.144
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 239.018,
        "saikou": 8.42,
        "heikin": 5.91,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 5.875
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 172.018,
        "saikou": 8.15,
        "heikin": 5.22,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 5.686
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 121.018,
        "saikou": 8.49,
        "heikin": 4.45,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 5.06
      }
    ]
  }
};
