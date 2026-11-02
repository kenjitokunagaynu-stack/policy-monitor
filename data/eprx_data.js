// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/03〜2026/11/01）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-02",
  "fetchedAt": "2026-11-02",
  "avgWindowLabel": "過去30日平均（2026/10/03〜2026/11/01）",
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
      "ouatsu": 1402.581,
      "saikou": 10,
      "heikin": 2.31,
      "boshuAvg30d": 1046.3,
      "heikinAvg30d": 3.062
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 938,
      "ouatsu": 1480.757,
      "saikou": 10,
      "heikin": 1.53,
      "boshuAvg30d": 1046.3,
      "heikinAvg30d": 2.955
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 938,
      "ouatsu": 1506.426,
      "saikou": 10,
      "heikin": 1.32,
      "boshuAvg30d": 1046.3,
      "heikinAvg30d": 2.868
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 937,
      "ouatsu": 1393.996,
      "saikou": 10,
      "heikin": 1.43,
      "boshuAvg30d": 1046.3,
      "heikinAvg30d": 2.841
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 931,
      "ouatsu": 1455.741,
      "saikou": 10,
      "heikin": 1.24,
      "boshuAvg30d": 1043.2,
      "heikinAvg30d": 2.9
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 931,
      "ouatsu": 1434.202,
      "saikou": 9.13,
      "heikin": 1.26,
      "boshuAvg30d": 1042.2,
      "heikinAvg30d": 2.934
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 928,
      "ouatsu": 1570.854,
      "saikou": 8.95,
      "heikin": 1.86,
      "boshuAvg30d": 1042.1,
      "heikinAvg30d": 3.124
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 932,
      "ouatsu": 1574.907,
      "saikou": 9.58,
      "heikin": 2.4,
      "boshuAvg30d": 1044.2,
      "heikinAvg30d": 3.359
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 932,
      "ouatsu": 1530.986,
      "saikou": 9.8,
      "heikin": 2.5,
      "boshuAvg30d": 1046.1,
      "heikinAvg30d": 3.403
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 934,
      "ouatsu": 1484.53,
      "saikou": 9.91,
      "heikin": 2.68,
      "boshuAvg30d": 1047.1,
      "heikinAvg30d": 3.588
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 934,
      "ouatsu": 1513.526,
      "saikou": 9.8,
      "heikin": 2.6,
      "boshuAvg30d": 1047.1,
      "heikinAvg30d": 3.61
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 934,
      "ouatsu": 1577.621,
      "saikou": 9.92,
      "heikin": 2.92,
      "boshuAvg30d": 1047.1,
      "heikinAvg30d": 3.571
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 993,
      "ouatsu": 1705.394,
      "saikou": 10,
      "heikin": 3.1,
      "boshuAvg30d": 1107.1,
      "heikinAvg30d": 3.62
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1018,
      "ouatsu": 1714.161,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1130.2,
      "heikinAvg30d": 3.521
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1037,
      "ouatsu": 1705.623,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1151.1,
      "heikinAvg30d": 3.145
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1052,
      "ouatsu": 1749.444,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1168.4,
      "heikinAvg30d": 2.848
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1052,
      "ouatsu": 1761.893,
      "saikou": 10,
      "heikin": 3.7,
      "boshuAvg30d": 1168.7,
      "heikinAvg30d": 2.81
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1168,
      "ouatsu": 1853.416,
      "saikou": 10,
      "heikin": 3.58,
      "boshuAvg30d": 1168.7,
      "heikinAvg30d": 2.752
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1226,
      "ouatsu": 1694.275,
      "saikou": 10,
      "heikin": 3.84,
      "boshuAvg30d": 1120.7,
      "heikinAvg30d": 2.926
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1231,
      "ouatsu": 1776.693,
      "saikou": 10,
      "heikin": 3.81,
      "boshuAvg30d": 1123.7,
      "heikinAvg30d": 2.965
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1235,
      "ouatsu": 1818.648,
      "saikou": 10,
      "heikin": 3.45,
      "boshuAvg30d": 1126.5,
      "heikinAvg30d": 2.968
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1239,
      "ouatsu": 1707.687,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1126.6,
      "heikinAvg30d": 2.954
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1233,
      "ouatsu": 1752.279,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1123.5,
      "heikinAvg30d": 2.934
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1233,
      "ouatsu": 1760.374,
      "saikou": 10,
      "heikin": 3.34,
      "boshuAvg30d": 1122.5,
      "heikinAvg30d": 2.895
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1214,
      "ouatsu": 1726.972,
      "saikou": 10,
      "heikin": 2.8,
      "boshuAvg30d": 1102.2,
      "heikinAvg30d": 2.755
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1214,
      "ouatsu": 1765.039,
      "saikou": 10,
      "heikin": 2.9,
      "boshuAvg30d": 1102.2,
      "heikinAvg30d": 2.772
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1214,
      "ouatsu": 1787.791,
      "saikou": 10,
      "heikin": 3.58,
      "boshuAvg30d": 1102.2,
      "heikinAvg30d": 2.925
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1210,
      "ouatsu": 1801.184,
      "saikou": 10,
      "heikin": 4.07,
      "boshuAvg30d": 1099.8,
      "heikinAvg30d": 3.008
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1209,
      "ouatsu": 1708.522,
      "saikou": 10,
      "heikin": 4,
      "boshuAvg30d": 1096.9,
      "heikinAvg30d": 3.0
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1203,
      "ouatsu": 1770.829,
      "saikou": 10,
      "heikin": 3.6,
      "boshuAvg30d": 1090.9,
      "heikinAvg30d": 3.138
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1274,
      "ouatsu": 1809.167,
      "saikou": 10,
      "heikin": 3.49,
      "boshuAvg30d": 1139.9,
      "heikinAvg30d": 3.198
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1274,
      "ouatsu": 1923.224,
      "saikou": 10,
      "heikin": 3.96,
      "boshuAvg30d": 1139.5,
      "heikinAvg30d": 3.348
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1274,
      "ouatsu": 1817.799,
      "saikou": 10,
      "heikin": 3.6,
      "boshuAvg30d": 1140.2,
      "heikinAvg30d": 3.761
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1272,
      "ouatsu": 1765.627,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1139.2,
      "heikinAvg30d": 4.033
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1141,
      "ouatsu": 1755.501,
      "saikou": 10,
      "heikin": 3.55,
      "boshuAvg30d": 1135.2,
      "heikinAvg30d": 3.958
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1136,
      "ouatsu": 1578.897,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1130.2,
      "heikinAvg30d": 4.022
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1132,
      "ouatsu": 1683.811,
      "saikou": 10,
      "heikin": 3.74,
      "boshuAvg30d": 1124.2,
      "heikinAvg30d": 3.812
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1132,
      "ouatsu": 1668.668,
      "saikou": 10,
      "heikin": 3.65,
      "boshuAvg30d": 1124.2,
      "heikinAvg30d": 3.792
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1132,
      "ouatsu": 1770.021,
      "saikou": 10,
      "heikin": 3.96,
      "boshuAvg30d": 1124.2,
      "heikinAvg30d": 3.603
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1130,
      "ouatsu": 1788.12,
      "saikou": 10,
      "heikin": 3.97,
      "boshuAvg30d": 1123.5,
      "heikinAvg30d": 3.418
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1123,
      "ouatsu": 1687.571,
      "saikou": 10,
      "heikin": 3.94,
      "boshuAvg30d": 1115.5,
      "heikinAvg30d": 3.383
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1123,
      "ouatsu": 1677.242,
      "saikou": 10,
      "heikin": 3.51,
      "boshuAvg30d": 1115.5,
      "heikinAvg30d": 3.303
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1034,
      "ouatsu": 1754.156,
      "saikou": 10,
      "heikin": 3.63,
      "boshuAvg30d": 1037.0,
      "heikinAvg30d": 3.213
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1037,
      "ouatsu": 1795.963,
      "saikou": 10,
      "heikin": 3.41,
      "boshuAvg30d": 1040.0,
      "heikinAvg30d": 3.242
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1036,
      "ouatsu": 1606.097,
      "saikou": 10,
      "heikin": 3.17,
      "boshuAvg30d": 1044.0,
      "heikinAvg30d": 3.254
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1029,
      "ouatsu": 1657.13,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1035.9,
      "heikinAvg30d": 3.087
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1021,
      "ouatsu": 1650.516,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1027.3,
      "heikinAvg30d": 3.152
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1013,
      "ouatsu": 1725.965,
      "saikou": 10,
      "heikin": 3.64,
      "boshuAvg30d": 1019.6,
      "heikinAvg30d": 2.892
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
        "ouatsu": 163.208,
        "saikou": 2,
        "heikin": 1.13,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.175
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 113.99,
        "saikou": 6.17,
        "heikin": 1.97,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.085
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 164.24,
        "saikou": 1.8,
        "heikin": 1.29,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.022
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 113.99,
        "saikou": 9.8,
        "heikin": 2.73,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 3.846
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 164.24,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.255
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 164.258,
        "saikou": 2.1,
        "heikin": 1.28,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 3.915
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 117.418,
        "saikou": 5.8,
        "heikin": 1.88,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.158
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 138.388,
        "saikou": 9.58,
        "heikin": 3.24,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.218
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 87.408,
        "saikou": 9.8,
        "heikin": 3.71,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.26
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 81.758,
        "saikou": 9.91,
        "heikin": 7.21,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.001
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 35.408,
        "saikou": 9.8,
        "heikin": 3.72,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.376
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 31.468,
        "saikou": 9.8,
        "heikin": 3.42,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.484
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 122.908,
        "saikou": 7.5,
        "heikin": 4.9,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.243
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 158.958,
        "saikou": 7.5,
        "heikin": 4.53,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.331
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 116.408,
        "saikou": 8.67,
        "heikin": 4.86,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 3.749
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 112.468,
        "saikou": 7.8,
        "heikin": 4.37,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.765
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 159.408,
        "saikou": 9.44,
        "heikin": 6.45,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.849
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 235.458,
        "saikou": 5.95,
        "heikin": 5.6,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.161
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 190.94,
        "saikou": 8.18,
        "heikin": 7.92,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 3.262
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 239.258,
        "saikou": 8.18,
        "heikin": 7,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.194
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 192.908,
        "saikou": 6.54,
        "heikin": 6.32,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.806
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 112.958,
        "saikou": 6.8,
        "heikin": 2.27,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 3.003
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 218.408,
        "saikou": 7.2,
        "heikin": 6.57,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 3.76
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 190.958,
        "saikou": 7,
        "heikin": 6.76,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 3.586
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 161.24,
        "saikou": 9.44,
        "heikin": 2.89,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.559
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 157.3,
        "saikou": 9.44,
        "heikin": 2.79,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.512
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 204.418,
        "saikou": 6.43,
        "heikin": 6.26,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.156
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 190.958,
        "saikou": 10,
        "heikin": 9.81,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.541
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 187.908,
        "saikou": 10,
        "heikin": 9.7,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 3.59
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 230.234,
        "saikou": 9.71,
        "heikin": 9.25,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.634
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 142.918,
        "saikou": 9.3,
        "heikin": 8.43,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 3.8
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 141.988,
        "saikou": 9.44,
        "heikin": 8.65,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 4.742
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 111.908,
        "saikou": 8.41,
        "heikin": 7.9,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 5.898
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 70.958,
        "saikou": 9.8,
        "heikin": 7.93,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 6.033
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 96.208,
        "saikou": 9.8,
        "heikin": 7.69,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 5.508
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 40.958,
        "saikou": 9.8,
        "heikin": 7.69,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 5.716
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 95.218,
        "saikou": 8,
        "heikin": 7.36,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 5.394
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 125.958,
        "saikou": 10,
        "heikin": 9.35,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 5.431
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 174.24,
        "saikou": 10,
        "heikin": 8.57,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 5.227
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 175.208,
        "saikou": 9.95,
        "heikin": 8.74,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 5.071
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 137.918,
        "saikou": 9.24,
        "heikin": 7.75,
        "boshuAvg30d": 46.1,
        "heikinAvg30d": 4.809
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 112.958,
        "saikou": 3.63,
        "heikin": 3.56,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 4.363
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 166.208,
        "saikou": 7.5,
        "heikin": 4.21,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 4.499
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 164.258,
        "saikou": 7.9,
        "heikin": 4.64,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.525
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 117.908,
        "saikou": 6.51,
        "heikin": 4.7,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.637
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 113.968,
        "saikou": 5.76,
        "heikin": 5.03,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.238
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 165.899,
        "saikou": 4.23,
        "heikin": 4.07,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.529
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 115.958,
        "saikou": 7.58,
        "heikin": 1.9,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.039
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 83.448,
        "saikou": 10,
        "heikin": 6.69,
        "boshuAvg30d": 115.3,
        "heikinAvg30d": 5.48
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 83.448,
        "saikou": 10,
        "heikin": 6.54,
        "boshuAvg30d": 115.3,
        "heikinAvg30d": 5.632
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 101.325,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 115.3,
        "heikinAvg30d": 5.51
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 105.286,
        "saikou": 10,
        "heikin": 9.53,
        "boshuAvg30d": 115.3,
        "heikinAvg30d": 5.495
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 101.34,
        "saikou": 10,
        "heikin": 9.58,
        "boshuAvg30d": 115.3,
        "heikinAvg30d": 5.471
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 90.67,
        "saikou": 9.13,
        "heikin": 7.09,
        "boshuAvg30d": 115.3,
        "heikinAvg30d": 5.532
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 103.786,
        "saikou": 8.95,
        "heikin": 5.5,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 5.527
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 105.286,
        "saikou": 8.83,
        "heikin": 5.36,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 5.448
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 109.284,
        "saikou": 8.65,
        "heikin": 5.26,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 5.254
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 109.284,
        "saikou": 8.63,
        "heikin": 5.22,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 5.258
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 109.284,
        "saikou": 8.47,
        "heikin": 5.31,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 5.542
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 109.284,
        "saikou": 7.81,
        "heikin": 5.25,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 5.656
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 109.284,
        "saikou": 9.34,
        "heikin": 5.46,
        "boshuAvg30d": 124.2,
        "heikinAvg30d": 5.962
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 105.786,
        "saikou": 9.83,
        "heikin": 5.14,
        "boshuAvg30d": 129.2,
        "heikinAvg30d": 6.081
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 107.286,
        "saikou": 9.97,
        "heikin": 5.79,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 6.367
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 93.786,
        "saikou": 9.95,
        "heikin": 5.17,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 6.5
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 95.286,
        "saikou": 10,
        "heikin": 4.74,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 6.606
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 105.786,
        "saikou": 10,
        "heikin": 5.21,
        "boshuAvg30d": 134.2,
        "heikinAvg30d": 6.629
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 98.612,
        "saikou": 6.08,
        "heikin": 4.32,
        "boshuAvg30d": 78.2,
        "heikinAvg30d": 6.532
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 96.712,
        "saikou": 6.08,
        "heikin": 4.62,
        "boshuAvg30d": 78.2,
        "heikinAvg30d": 6.669
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 92.757,
        "saikou": 5.83,
        "heikin": 4.57,
        "boshuAvg30d": 77.4,
        "heikinAvg30d": 6.686
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 90.827,
        "saikou": 6.08,
        "heikin": 5.02,
        "boshuAvg30d": 77.4,
        "heikinAvg30d": 6.816
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 96.712,
        "saikou": 5.77,
        "heikin": 4.19,
        "boshuAvg30d": 78.4,
        "heikinAvg30d": 6.836
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 94.746,
        "saikou": 5.77,
        "heikin": 4.42,
        "boshuAvg30d": 78.4,
        "heikinAvg30d": 6.839
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 117.9,
        "saikou": 5.42,
        "heikin": 3.1,
        "boshuAvg30d": 74.3,
        "heikinAvg30d": 6.846
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 118.716,
        "saikou": 8.24,
        "heikin": 4.81,
        "boshuAvg30d": 74.3,
        "heikinAvg30d": 6.754
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 98.612,
        "saikou": 4.33,
        "heikin": 3.06,
        "boshuAvg30d": 74.3,
        "heikinAvg30d": 6.201
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 92.781,
        "saikou": 8.14,
        "heikin": 7.07,
        "boshuAvg30d": 73.3,
        "heikinAvg30d": 5.994
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 82.782,
        "saikou": 8.08,
        "heikin": 7.54,
        "boshuAvg30d": 73.3,
        "heikinAvg30d": 6.039
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 84.712,
        "saikou": 7.6,
        "heikin": 6.65,
        "boshuAvg30d": 71.4,
        "heikinAvg30d": 5.353
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 97.282,
        "saikou": 10,
        "heikin": 5.1,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 5.374
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 97.282,
        "saikou": 10,
        "heikin": 5.47,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 4.527
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 97.282,
        "saikou": 10,
        "heikin": 4.39,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 4.378
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 95.782,
        "saikou": 10,
        "heikin": 5.12,
        "boshuAvg30d": 133.2,
        "heikinAvg30d": 4.369
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 97.246,
        "saikou": 10,
        "heikin": 4.69,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 4.4
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 95.746,
        "saikou": 10,
        "heikin": 6.26,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 4.109
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 107.286,
        "saikou": 10,
        "heikin": 4.6,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 3.914
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 93.786,
        "saikou": 2.64,
        "heikin": 2.41,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 3.533
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 107.286,
        "saikou": 4.9,
        "heikin": 2.73,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 3.529
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 107.286,
        "saikou": 3.93,
        "heikin": 2.36,
        "boshuAvg30d": 130.2,
        "heikinAvg30d": 3.877
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 103.331,
        "saikou": 10,
        "heikin": 3.36,
        "boshuAvg30d": 129.2,
        "heikinAvg30d": 3.818
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 103.331,
        "saikou": 6.7,
        "heikin": 3.36,
        "boshuAvg30d": 129.2,
        "heikinAvg30d": 4.039
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 107.286,
        "saikou": 6.4,
        "heikin": 3.69,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 4.272
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 93.366,
        "saikou": 6.42,
        "heikin": 3.49,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 4.159
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 105.386,
        "saikou": 4.9,
        "heikin": 2.35,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 4.185
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 93.366,
        "saikou": 5.11,
        "heikin": 2.62,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.506
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 105.936,
        "saikou": 6.64,
        "heikin": 3.24,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 4.492
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 93.216,
        "saikou": 8.96,
        "heikin": 5.79,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 5.007
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 167,
        "ouatsu": 296.747,
        "saikou": 7.01,
        "heikin": 2.95,
        "boshuAvg30d": 239.4,
        "heikinAvg30d": 3.583
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 167,
        "ouatsu": 334.692,
        "saikou": 1.34,
        "heikin": 1.08,
        "boshuAvg30d": 239.4,
        "heikinAvg30d": 3.529
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 167,
        "ouatsu": 337.724,
        "saikou": 1.53,
        "heikin": 1.08,
        "boshuAvg30d": 239.4,
        "heikinAvg30d": 3.356
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 167,
        "ouatsu": 344.401,
        "saikou": 1.1,
        "heikin": 0.76,
        "boshuAvg30d": 239.4,
        "heikinAvg30d": 3.427
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 165,
        "ouatsu": 346.713,
        "saikou": 1.07,
        "heikin": 0.77,
        "boshuAvg30d": 238.3,
        "heikinAvg30d": 3.441
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 165,
        "ouatsu": 343.141,
        "saikou": 1.26,
        "heikin": 0.85,
        "boshuAvg30d": 237.4,
        "heikinAvg30d": 3.232
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 163,
        "ouatsu": 403.788,
        "saikou": 6.44,
        "heikin": 2.41,
        "boshuAvg30d": 235.4,
        "heikinAvg30d": 3.463
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 165,
        "ouatsu": 394.902,
        "saikou": 6.47,
        "heikin": 2.59,
        "boshuAvg30d": 237.4,
        "heikinAvg30d": 3.594
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 359.798,
        "saikou": 6.5,
        "heikin": 2.63,
        "boshuAvg30d": 237.4,
        "heikinAvg30d": 3.563
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 166,
        "ouatsu": 338.279,
        "saikou": 7.06,
        "heikin": 2.11,
        "boshuAvg30d": 238.4,
        "heikinAvg30d": 3.772
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 166,
        "ouatsu": 350.768,
        "saikou": 6.25,
        "heikin": 1.29,
        "boshuAvg30d": 238.4,
        "heikinAvg30d": 3.612
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 166,
        "ouatsu": 346.635,
        "saikou": 6.63,
        "heikin": 2.83,
        "boshuAvg30d": 238.4,
        "heikinAvg30d": 3.763
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 186,
        "ouatsu": 419.567,
        "saikou": 6.31,
        "heikin": 2.17,
        "boshuAvg30d": 257.4,
        "heikinAvg30d": 3.81
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 194,
        "ouatsu": 399.079,
        "saikou": 5.8,
        "heikin": 2.17,
        "boshuAvg30d": 265.4,
        "heikinAvg30d": 4.092
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 198,
        "ouatsu": 439.554,
        "saikou": 6.23,
        "heikin": 2.06,
        "boshuAvg30d": 270.4,
        "heikinAvg30d": 3.632
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 203,
        "ouatsu": 421.283,
        "saikou": 2.67,
        "heikin": 1.77,
        "boshuAvg30d": 275.7,
        "heikinAvg30d": 3.285
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 203,
        "ouatsu": 490.16,
        "saikou": 3.26,
        "heikin": 1.35,
        "boshuAvg30d": 276.0,
        "heikinAvg30d": 3.187
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 319,
        "ouatsu": 528.33,
        "saikou": 6.82,
        "heikin": 2.71,
        "boshuAvg30d": 276.0,
        "heikinAvg30d": 3.105
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 309,
        "ouatsu": 539.713,
        "saikou": 7.39,
        "heikin": 2,
        "boshuAvg30d": 268.0,
        "heikinAvg30d": 3.178
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 309,
        "ouatsu": 536.823,
        "saikou": 6.91,
        "heikin": 2.18,
        "boshuAvg30d": 268.0,
        "heikinAvg30d": 3.247
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 309,
        "ouatsu": 653.829,
        "saikou": 2.24,
        "heikin": 1.38,
        "boshuAvg30d": 268.6,
        "heikinAvg30d": 3.177
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 309,
        "ouatsu": 614.679,
        "saikou": 6.91,
        "heikin": 2.11,
        "boshuAvg30d": 267.6,
        "heikinAvg30d": 3.155
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 306,
        "ouatsu": 589.234,
        "saikou": 2.14,
        "heikin": 1.66,
        "boshuAvg30d": 265.6,
        "heikinAvg30d": 3.175
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 306,
        "ouatsu": 588.516,
        "saikou": 7.97,
        "heikin": 2.44,
        "boshuAvg30d": 265.6,
        "heikinAvg30d": 3.126
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 304,
        "ouatsu": 600.009,
        "saikou": 3.21,
        "heikin": 2.18,
        "boshuAvg30d": 262.3,
        "heikinAvg30d": 2.97
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 304,
        "ouatsu": 620.018,
        "saikou": 7.75,
        "heikin": 2.28,
        "boshuAvg30d": 262.3,
        "heikinAvg30d": 2.93
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 304,
        "ouatsu": 601.764,
        "saikou": 5.92,
        "heikin": 3.15,
        "boshuAvg30d": 262.3,
        "heikinAvg30d": 3.109
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 304,
        "ouatsu": 620.95,
        "saikou": 8.08,
        "heikin": 2.46,
        "boshuAvg30d": 262.0,
        "heikinAvg30d": 3.171
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 303,
        "ouatsu": 580.794,
        "saikou": 8,
        "heikin": 2.37,
        "boshuAvg30d": 261.0,
        "heikinAvg30d": 3.007
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 303,
        "ouatsu": 588.481,
        "saikou": 7.25,
        "heikin": 2.25,
        "boshuAvg30d": 260.0,
        "heikinAvg30d": 2.855
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 301,
        "ouatsu": 537.916,
        "saikou": 3.15,
        "heikin": 1.64,
        "boshuAvg30d": 258.0,
        "heikinAvg30d": 2.848
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 301,
        "ouatsu": 550.849,
        "saikou": 3.15,
        "heikin": 1.57,
        "boshuAvg30d": 257.7,
        "heikinAvg30d": 2.811
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 301,
        "ouatsu": 607.689,
        "saikou": 5.79,
        "heikin": 1.97,
        "boshuAvg30d": 257.4,
        "heikinAvg30d": 2.816
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 301,
        "ouatsu": 620.502,
        "saikou": 6.05,
        "heikin": 1.45,
        "boshuAvg30d": 257.4,
        "heikinAvg30d": 2.88
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 301,
        "ouatsu": 624.428,
        "saikou": 5.94,
        "heikin": 1.15,
        "boshuAvg30d": 255.4,
        "heikinAvg30d": 2.74
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 301,
        "ouatsu": 539.756,
        "saikou": 6.17,
        "heikin": 1.87,
        "boshuAvg30d": 255.4,
        "heikinAvg30d": 2.734
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 303,
        "ouatsu": 566.484,
        "saikou": 6.73,
        "heikin": 2.58,
        "boshuAvg30d": 257.3,
        "heikinAvg30d": 2.902
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 303,
        "ouatsu": 524.009,
        "saikou": 5.84,
        "heikin": 2.07,
        "boshuAvg30d": 257.3,
        "heikinAvg30d": 2.691
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 303,
        "ouatsu": 507.148,
        "saikou": 6.65,
        "heikin": 2.68,
        "boshuAvg30d": 257.3,
        "heikinAvg30d": 2.779
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 303,
        "ouatsu": 504.511,
        "saikou": 6.7,
        "heikin": 2.55,
        "boshuAvg30d": 257.7,
        "heikinAvg30d": 2.549
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 302,
        "ouatsu": 446.255,
        "saikou": 6.72,
        "heikin": 3,
        "boshuAvg30d": 255.7,
        "heikinAvg30d": 2.521
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 302,
        "ouatsu": 439.304,
        "saikou": 6.63,
        "heikin": 3.04,
        "boshuAvg30d": 255.7,
        "heikinAvg30d": 2.724
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 301,
        "ouatsu": 409.241,
        "saikou": 6.65,
        "heikin": 3.2,
        "boshuAvg30d": 255.7,
        "heikinAvg30d": 2.451
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 301,
        "ouatsu": 446.814,
        "saikou": 6.69,
        "heikin": 2.43,
        "boshuAvg30d": 255.7,
        "heikinAvg30d": 2.561
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 301,
        "ouatsu": 280.262,
        "saikou": 2.15,
        "heikin": 1.48,
        "boshuAvg30d": 258.7,
        "heikinAvg30d": 2.501
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 299,
        "ouatsu": 343.485,
        "saikou": 7.7,
        "heikin": 3.04,
        "boshuAvg30d": 253.7,
        "heikinAvg30d": 2.579
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 297,
        "ouatsu": 279.501,
        "saikou": 6.68,
        "heikin": 3.47,
        "boshuAvg30d": 252.0,
        "heikinAvg30d": 3.095
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 296,
        "ouatsu": 381.712,
        "saikou": 7.79,
        "heikin": 4.7,
        "boshuAvg30d": 250.3,
        "heikinAvg30d": 3.136
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 60,
        "ouatsu": 181.487,
        "saikou": 2.09,
        "heikin": 1.2,
        "boshuAvg30d": 104.2,
        "heikinAvg30d": 1.665
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 60,
        "ouatsu": 181.487,
        "saikou": 0.95,
        "heikin": 0.71,
        "boshuAvg30d": 104.2,
        "heikinAvg30d": 1.541
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 60,
        "ouatsu": 175.507,
        "saikou": 0.96,
        "heikin": 0.71,
        "boshuAvg30d": 104.2,
        "heikinAvg30d": 1.566
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 177.619,
        "saikou": 1.51,
        "heikin": 0.78,
        "boshuAvg30d": 104.2,
        "heikinAvg30d": 1.63
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 59,
        "ouatsu": 171.502,
        "saikou": 1.53,
        "heikin": 0.93,
        "boshuAvg30d": 103.2,
        "heikinAvg30d": 1.603
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 171.408,
        "saikou": 1.78,
        "heikin": 1.05,
        "boshuAvg30d": 103.2,
        "heikinAvg30d": 1.574
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 195.245,
        "saikou": 1.97,
        "heikin": 1.2,
        "boshuAvg30d": 102.2,
        "heikinAvg30d": 1.447
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 169.957,
        "saikou": 1.99,
        "heikin": 1.33,
        "boshuAvg30d": 102.2,
        "heikinAvg30d": 1.499
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 212.672,
        "saikou": 2.4,
        "heikin": 1.5,
        "boshuAvg30d": 103.1,
        "heikinAvg30d": 1.472
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 198.742,
        "saikou": 1.89,
        "heikin": 1.27,
        "boshuAvg30d": 103.1,
        "heikinAvg30d": 1.453
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 200.732,
        "saikou": 2.47,
        "heikin": 1.42,
        "boshuAvg30d": 103.1,
        "heikinAvg30d": 1.43
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 273.28,
        "saikou": 2.52,
        "heikin": 1.34,
        "boshuAvg30d": 103.1,
        "heikinAvg30d": 1.382
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 258.543,
        "saikou": 4.47,
        "heikin": 1.79,
        "boshuAvg30d": 112.2,
        "heikinAvg30d": 1.604
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 72,
        "ouatsu": 235.632,
        "saikou": 3.55,
        "heikin": 1.61,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 1.644
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 75,
        "ouatsu": 237.848,
        "saikou": 3.64,
        "heikin": 1.83,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 1.92
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 77,
        "ouatsu": 279.055,
        "saikou": 4.46,
        "heikin": 2.05,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 1.971
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 77,
        "ouatsu": 225.334,
        "saikou": 4.8,
        "heikin": 2.47,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 2.023
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 77,
        "ouatsu": 229.376,
        "saikou": 4.94,
        "heikin": 2,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 2.185
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 82,
        "ouatsu": 225.338,
        "saikou": 5.14,
        "heikin": 2.74,
        "boshuAvg30d": 126.2,
        "heikinAvg30d": 2.655
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 82,
        "ouatsu": 227.238,
        "saikou": 5.41,
        "heikin": 2.81,
        "boshuAvg30d": 126.2,
        "heikinAvg30d": 2.682
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 82,
        "ouatsu": 205.467,
        "saikou": 6,
        "heikin": 3.02,
        "boshuAvg30d": 126.2,
        "heikinAvg30d": 2.807
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 82,
        "ouatsu": 213.536,
        "saikou": 6.03,
        "heikin": 3.03,
        "boshuAvg30d": 126.2,
        "heikinAvg30d": 2.803
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 81,
        "ouatsu": 235.666,
        "saikou": 5.62,
        "heikin": 2.9,
        "boshuAvg30d": 125.2,
        "heikinAvg30d": 2.656
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 80,
        "ouatsu": 229.686,
        "saikou": 5.66,
        "heikin": 2.91,
        "boshuAvg30d": 124.2,
        "heikinAvg30d": 2.694
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 76,
        "ouatsu": 211.742,
        "saikou": 5.94,
        "heikin": 2.82,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 2.598
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 76,
        "ouatsu": 215.67,
        "saikou": 5.94,
        "heikin": 2.74,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 2.568
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 76,
        "ouatsu": 235.64,
        "saikou": 4.94,
        "heikin": 2.77,
        "boshuAvg30d": 120.2,
        "heikinAvg30d": 2.636
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 76,
        "ouatsu": 286.788,
        "saikou": 9.91,
        "heikin": 3.83,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 2.684
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 76,
        "ouatsu": 260.393,
        "saikou": 9.96,
        "heikin": 3.79,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 2.919
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 76,
        "ouatsu": 321.757,
        "saikou": 9.55,
        "heikin": 4.22,
        "boshuAvg30d": 119.2,
        "heikinAvg30d": 2.803
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 74,
        "ouatsu": 379.331,
        "saikou": 9.93,
        "heikin": 4.75,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 2.656
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 74,
        "ouatsu": 377.431,
        "saikou": 9.71,
        "heikin": 4.94,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 2.796
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 74,
        "ouatsu": 275.788,
        "saikou": 4.47,
        "heikin": 2.15,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 2.772
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 73,
        "ouatsu": 256.166,
        "saikou": 5.1,
        "heikin": 2.03,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 2.786
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 73,
        "ouatsu": 258.026,
        "saikou": 2.2,
        "heikin": 1.92,
        "boshuAvg30d": 117.2,
        "heikinAvg30d": 2.641
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 72,
        "ouatsu": 256.535,
        "saikou": 3.44,
        "heikin": 1.79,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 2.543
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 271.927,
        "saikou": 3.44,
        "heikin": 1.39,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 2.137
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 281.127,
        "saikou": 3.44,
        "heikin": 1.44,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 2.058
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 302.839,
        "saikou": 1.91,
        "heikin": 1.2,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.774
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 318.628,
        "saikou": 1.92,
        "heikin": 1.2,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.618
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 70,
        "ouatsu": 308.723,
        "saikou": 1.91,
        "heikin": 1.19,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.525
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 70,
        "ouatsu": 340.829,
        "saikou": 3.27,
        "heikin": 1.4,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.574
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 72,
        "ouatsu": 338.616,
        "saikou": 3.6,
        "heikin": 1.47,
        "boshuAvg30d": 115.2,
        "heikinAvg30d": 1.501
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 72,
        "ouatsu": 357.72,
        "saikou": 3.5,
        "heikin": 1.26,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 1.763
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 72,
        "ouatsu": 355.736,
        "saikou": 2.04,
        "heikin": 1.01,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 1.729
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 357.72,
        "saikou": 2.09,
        "heikin": 1.1,
        "boshuAvg30d": 115.2,
        "heikinAvg30d": 1.798
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 349.7,
        "saikou": 3.57,
        "heikin": 1.19,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 1.681
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 354.236,
        "saikou": 3.21,
        "heikin": 1.51,
        "boshuAvg30d": 111.2,
        "heikinAvg30d": 1.795
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 1.273
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 1.266
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 61.93,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 1.268
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 61.93,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 1.145
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 63.928,
        "saikou": 1.45,
        "heikin": 0.42,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 1.306
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 1.5,
        "heikin": 0.46,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 1.329
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 63.928,
        "saikou": 1.25,
        "heikin": 0.42,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 1.751
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 63.3,
        "saikou": 1.95,
        "heikin": 0.49,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 2.101
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 45.928,
        "saikou": 2.2,
        "heikin": 0.61,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 1.955
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 28.928,
        "saikou": 0.49,
        "heikin": 0.49,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 2.01
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 28.928,
        "saikou": 0.49,
        "heikin": 0.49,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 2.099
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 28.928,
        "saikou": 0.49,
        "heikin": 0.49,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 2.072
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 2.09
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 2.171
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 2.95,
        "heikin": 2.75,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.412
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.25,
        "heikin": 2.82,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.076
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.65,
        "heikin": 3.65,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 3.188
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 3.3,
        "heikin": 3.22,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.96
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 3.2,
        "heikin": 3.12,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 3.347
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.68,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 3.737
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.43,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 4.472
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.14,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 4.617
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.8,
        "heikin": 4.72,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 3.591
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.8,
        "heikin": 4.7,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 3.358
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.2,
        "heikin": 5.15,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 2.62
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.55,
        "heikin": 4.5,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 2.285
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 5.95,
        "heikin": 5.85,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 3.908
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.73,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 3.076
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.95,
        "heikin": 4.64,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 3.687
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.928,
        "saikou": 4.25,
        "heikin": 4.2,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 3.653
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 6.25,
        "heikin": 6.15,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 4.626
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 7.25,
        "heikin": 7.1,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 5.503
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.45,
        "heikin": 4.07,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 4.333
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 4.05,
        "heikin": 3.95,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 3.947
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 3.733
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 67.1,
        "heikinAvg30d": 4.257
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.37,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 3.37
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 4.024
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 3.092
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.928,
        "saikou": 3.5,
        "heikin": 3.44,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 3.025
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.928,
        "saikou": 2.1,
        "heikin": 2.1,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.588
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.85,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.254
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.8,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.385
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.3,
        "heikin": 2.84,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.368
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.734
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.215
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.35,
        "heikin": 2.32,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.931
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.43,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.467
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 125,
        "ouatsu": 85.764,
        "saikou": 1.69,
        "heikin": 1.23,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 1.266
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 125,
        "ouatsu": 173.289,
        "saikou": 1.19,
        "heikin": 0.67,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 1.049
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 125,
        "ouatsu": 165.747,
        "saikou": 1.4,
        "heikin": 0.74,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 1.034
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 125,
        "ouatsu": 104.481,
        "saikou": 1.69,
        "heikin": 0.55,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 1.015
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 163.729,
        "saikou": 1.44,
        "heikin": 0.75,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 0.993
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 158.632,
        "saikou": 1.69,
        "heikin": 0.97,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 1.19
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 124,
        "ouatsu": 103.346,
        "saikou": 1.69,
        "heikin": 1.4,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 1.299
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 107.334,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 131.2,
        "heikinAvg30d": 1.48
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 125,
        "ouatsu": 107.334,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 1.437
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 125,
        "ouatsu": 107.334,
        "saikou": 1.94,
        "heikin": 1.58,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 1.503
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 125,
        "ouatsu": 111.201,
        "saikou": 1.59,
        "heikin": 1.54,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 1.48
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 125,
        "ouatsu": 111.201,
        "saikou": 1.5,
        "heikin": 1.47,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 1.409
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 135,
        "ouatsu": 111.201,
        "saikou": 1.51,
        "heikin": 1.4,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 1.501
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 139,
        "ouatsu": 130.815,
        "saikou": 1.99,
        "heikin": 1.39,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 1.49
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 144,
        "ouatsu": 144.443,
        "saikou": 2,
        "heikin": 1.4,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 1.536
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 191.999,
        "saikou": 2.09,
        "heikin": 1.2,
        "boshuAvg30d": 155.1,
        "heikinAvg30d": 1.605
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 140.852,
        "saikou": 2.09,
        "heikin": 1.4,
        "boshuAvg30d": 155.1,
        "heikinAvg30d": 1.578
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 103.613,
        "saikou": 3.94,
        "heikin": 2.84,
        "boshuAvg30d": 155.1,
        "heikinAvg30d": 2.054
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 103.613,
        "saikou": 3,
        "heikin": 2.49,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 2.163
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 103.613,
        "saikou": 3.94,
        "heikin": 2.85,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 2.191
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 101.628,
        "saikou": 5.94,
        "heikin": 2.94,
        "boshuAvg30d": 155.2,
        "heikinAvg30d": 2.238
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 101.628,
        "saikou": 5.94,
        "heikin": 2.91,
        "boshuAvg30d": 154.2,
        "heikinAvg30d": 2.394
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 100.3,
        "saikou": 5.94,
        "heikin": 2.85,
        "boshuAvg30d": 153.2,
        "heikinAvg30d": 2.444
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 100.3,
        "saikou": 3,
        "heikin": 2.4,
        "boshuAvg30d": 153.2,
        "heikinAvg30d": 2.197
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 101.743,
        "saikou": 3,
        "heikin": 2.07,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 1.986
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 101.743,
        "saikou": 3,
        "heikin": 1.95,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 2.123
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 103.613,
        "saikou": 5.94,
        "heikin": 2.74,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 2.444
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 103.613,
        "saikou": 3,
        "heikin": 2.1,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 2.256
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 88.613,
        "saikou": 3,
        "heikin": 2.29,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 2.254
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 88.613,
        "saikou": 3,
        "heikin": 2.21,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 2.053
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 88.613,
        "saikou": 3,
        "heikin": 2.65,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.307
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 88.613,
        "saikou": 3,
        "heikin": 2.62,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.545
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 88.613,
        "saikou": 3,
        "heikin": 2.66,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.481
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 82.627,
        "saikou": 2.38,
        "heikin": 2.06,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.143
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 144,
        "ouatsu": 82.627,
        "saikou": 2.5,
        "heikin": 2.15,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.184
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 143,
        "ouatsu": 82.627,
        "saikou": 2.5,
        "heikin": 2.28,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 2.456
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 141,
        "ouatsu": 79.224,
        "saikou": 1.95,
        "heikin": 1.71,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 1.903
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 141,
        "ouatsu": 79.224,
        "saikou": 1.92,
        "heikin": 1.66,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 1.94
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 141,
        "ouatsu": 84.746,
        "saikou": 1.9,
        "heikin": 1.62,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 1.805
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 140,
        "ouatsu": 84.746,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 1.776
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 139,
        "ouatsu": 82.761,
        "saikou": 1.99,
        "heikin": 1.65,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 1.7
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 140,
        "ouatsu": 82.761,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 1.723
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 140,
        "ouatsu": 99.746,
        "saikou": 1.99,
        "heikin": 1.56,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 1.676
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 140,
        "ouatsu": 99.746,
        "saikou": 1.99,
        "heikin": 1.76,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 1.806
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 140,
        "ouatsu": 99.746,
        "saikou": 1.99,
        "heikin": 1.74,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 1.757
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 138,
        "ouatsu": 97.748,
        "saikou": 1.99,
        "heikin": 1.62,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 1.61
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 137,
        "ouatsu": 99.746,
        "saikou": 1.99,
        "heikin": 1.62,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 1.395
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 135,
        "ouatsu": 99.746,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 1.569
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 143,
        "ouatsu": 202.496,
        "saikou": 2.29,
        "heikin": 1.51,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 2.356
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 143,
        "ouatsu": 202.496,
        "saikou": 1.56,
        "heikin": 1.33,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 2.512
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 143,
        "ouatsu": 202.496,
        "saikou": 1.56,
        "heikin": 1.29,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 2.214
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 143,
        "ouatsu": 182.834,
        "saikou": 2.29,
        "heikin": 1.47,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 2.029
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 143,
        "ouatsu": 182.834,
        "saikou": 2.29,
        "heikin": 1.47,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 2.052
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 143,
        "ouatsu": 184.634,
        "saikou": 2.29,
        "heikin": 1.3,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 2.334
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 143,
        "ouatsu": 201.493,
        "saikou": 1.56,
        "heikin": 1.29,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 2.577
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 144,
        "ouatsu": 192.341,
        "saikou": 2.29,
        "heikin": 1.62,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 2.895
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 144,
        "ouatsu": 192.675,
        "saikou": 2.29,
        "heikin": 1.71,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 3.24
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 144,
        "ouatsu": 201.355,
        "saikou": 2.29,
        "heikin": 1.79,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 3.617
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 144,
        "ouatsu": 201.355,
        "saikou": 2.29,
        "heikin": 1.79,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 3.448
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 144,
        "ouatsu": 201.355,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 3.28
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 146,
        "ouatsu": 200.493,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 3.283
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 147,
        "ouatsu": 200.493,
        "saikou": 2.29,
        "heikin": 1.87,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 3.042
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 147,
        "ouatsu": 191.586,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 2.106
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 148,
        "ouatsu": 200.355,
        "saikou": 4.22,
        "heikin": 2.7,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 1.773
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 148,
        "ouatsu": 200.355,
        "saikou": 5.1,
        "heikin": 3.55,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 1.837
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 148,
        "ouatsu": 200.355,
        "saikou": 4.57,
        "heikin": 3.18,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 1.89
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 180.473,
        "saikou": 4.23,
        "heikin": 2.91,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 2.107
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 152,
        "ouatsu": 180.473,
        "saikou": 3.95,
        "heikin": 2.86,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.141
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 153,
        "ouatsu": 180.473,
        "saikou": 2.7,
        "heikin": 2.26,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 1.733
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 154,
        "ouatsu": 180.473,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 1.767
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 154,
        "ouatsu": 180.473,
        "saikou": 2.29,
        "heikin": 1.73,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 1.674
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 154,
        "ouatsu": 180.473,
        "saikou": 2.29,
        "heikin": 1.54,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 1.776
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 151,
        "ouatsu": 178.621,
        "saikou": 7.98,
        "heikin": 1.58,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 1.56
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 151,
        "ouatsu": 178.621,
        "saikou": 7.98,
        "heikin": 1.56,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 1.807
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 151,
        "ouatsu": 178.621,
        "saikou": 7.98,
        "heikin": 1.61,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 1.912
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 151,
        "ouatsu": 178.621,
        "saikou": 2.7,
        "heikin": 1.55,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 1.879
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 151,
        "ouatsu": 178.621,
        "saikou": 2.7,
        "heikin": 1.56,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 1.948
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 150,
        "ouatsu": 178.621,
        "saikou": 7.99,
        "heikin": 1.64,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.012
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 150,
        "ouatsu": 204.302,
        "saikou": 7.99,
        "heikin": 1.72,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.261
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 150,
        "ouatsu": 204.256,
        "saikou": 2.29,
        "heikin": 1.85,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.448
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 150,
        "ouatsu": 204.256,
        "saikou": 4.22,
        "heikin": 2.85,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.985
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 150,
        "ouatsu": 194.654,
        "saikou": 6.09,
        "heikin": 3.89,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 3.705
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 150,
        "ouatsu": 184.702,
        "saikou": 7.17,
        "heikin": 4.92,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 3.881
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 150,
        "ouatsu": 186.692,
        "saikou": 7.17,
        "heikin": 4.95,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 3.971
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 150,
        "ouatsu": 185.702,
        "saikou": 6.59,
        "heikin": 4.57,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 3.992
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 150,
        "ouatsu": 185.702,
        "saikou": 6.59,
        "heikin": 4.53,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 3.987
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 150,
        "ouatsu": 205.584,
        "saikou": 6.09,
        "heikin": 4.18,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 3.76
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 150,
        "ouatsu": 207.574,
        "saikou": 6.59,
        "heikin": 4.49,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 3.505
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 149,
        "ouatsu": 207.574,
        "saikou": 6.07,
        "heikin": 4.07,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.873
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 149,
        "ouatsu": 207.574,
        "saikou": 5.65,
        "heikin": 3.74,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.715
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 207.574,
        "saikou": 5.74,
        "heikin": 3.69,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 3.83
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 207.574,
        "saikou": 5.65,
        "heikin": 3.74,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 3.601
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 207.574,
        "saikou": 5.65,
        "heikin": 3.74,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 3.494
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 147,
        "ouatsu": 207.758,
        "saikou": 2.29,
        "heikin": 2,
        "boshuAvg30d": 145.1,
        "heikinAvg30d": 3.003
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 146,
        "ouatsu": 207.758,
        "saikou": 2.33,
        "heikin": 2.08,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.997
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 146,
        "ouatsu": 239.012,
        "saikou": 2.29,
        "heikin": 1.71,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.093
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.878
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.832
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 206.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.782
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 212.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.786
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 203.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.79
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.46,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.783
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 232.343,
        "saikou": 0.38,
        "heikin": 0.37,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.811
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 220.8,
        "saikou": 0.38,
        "heikin": 0.37,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.841
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 234.343,
        "saikou": 0.38,
        "heikin": 0.36,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.885
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 235.343,
        "saikou": 0.38,
        "heikin": 0.34,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.946
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 234.343,
        "saikou": 0.38,
        "heikin": 0.34,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.918
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 234.343,
        "saikou": 0.38,
        "heikin": 0.34,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.882
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 235.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 0.995
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 234.343,
        "saikou": 0.38,
        "heikin": 0.37,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.926
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 220.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.852
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 0.864
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 0.828
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.68,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 0.856
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 115.843,
        "saikou": 1.7,
        "heikin": 0.97,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.114
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 149.843,
        "saikou": 1.7,
        "heikin": 0.83,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.073
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 149.843,
        "saikou": 1.7,
        "heikin": 0.85,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.108
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 150.843,
        "saikou": 1.7,
        "heikin": 0.86,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.026
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 203.343,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.071
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 203.343,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.083
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.07
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.087
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.083
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 171.343,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.113
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 169.343,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.178
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 168.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.109
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 211.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 1.174
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 211.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 1.223
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 1.425
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.61,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.539
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 155.343,
        "saikou": 1.6,
        "heikin": 0.6,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 1.635
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.653
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.06,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.6
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 155.343,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.618
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.21,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.485
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 1.21,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.515
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 155.343,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.512
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.82,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.479
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.062
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.969
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.951
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.894
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.964
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.944
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 124.16,
        "saikou": 5.91,
        "heikin": 3.75,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.149
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 126.084,
        "saikou": 2.8,
        "heikin": 2.09,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.906
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 91.114,
        "saikou": 2.03,
        "heikin": 1.41,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.882
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 91.112,
        "saikou": 1.58,
        "heikin": 1.23,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.802
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 58.112,
        "saikou": 1.5,
        "heikin": 1,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 4.823
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 56.188,
        "saikou": 1.5,
        "heikin": 1.04,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.088
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 149.507,
        "saikou": 2.8,
        "heikin": 1.8,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.311
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 182.599,
        "saikou": 5.71,
        "heikin": 3.79,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.857
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 181.544,
        "saikou": 6.06,
        "heikin": 4.03,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 6.026
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 183.507,
        "saikou": 7.18,
        "heikin": 4.7,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 6.287
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 241.507,
        "saikou": 9.62,
        "heikin": 6.45,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 6.445
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 241.127,
        "saikou": 9.92,
        "heikin": 6.81,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 6.306
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 244.127,
        "saikou": 10,
        "heikin": 6.85,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 5.978
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 245.127,
        "saikou": 10,
        "heikin": 6.95,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 5.401
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 244.227,
        "saikou": 10,
        "heikin": 6.93,
        "boshuAvg30d": 174.9,
        "heikinAvg30d": 4.362
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 245.227,
        "saikou": 10,
        "heikin": 7.02,
        "boshuAvg30d": 175.9,
        "heikinAvg30d": 3.667
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 245.227,
        "saikou": 10,
        "heikin": 7.9,
        "boshuAvg30d": 175.9,
        "heikinAvg30d": 3.462
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 245.227,
        "saikou": 10,
        "heikin": 9.84,
        "boshuAvg30d": 175.9,
        "heikinAvg30d": 3.353
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 235.815,
        "saikou": 10,
        "heikin": 7.76,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 3.373
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 238.805,
        "saikou": 10,
        "heikin": 7.72,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 3.4
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 237.815,
        "saikou": 10,
        "heikin": 7.78,
        "boshuAvg30d": 180.9,
        "heikinAvg30d": 3.259
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 238.815,
        "saikou": 10,
        "heikin": 7.79,
        "boshuAvg30d": 181.9,
        "heikinAvg30d": 3.257
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 124.215,
        "saikou": 10,
        "heikin": 5.97,
        "boshuAvg30d": 181.9,
        "heikinAvg30d": 3.031
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 168.424,
        "saikou": 10,
        "heikin": 7.96,
        "boshuAvg30d": 181.9,
        "heikinAvg30d": 3.027
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 150.446,
        "saikou": 10,
        "heikin": 7.06,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 2.775
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 144.7,
        "saikou": 10,
        "heikin": 7.34,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 2.899
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 159.852,
        "saikou": 10,
        "heikin": 6.78,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.497
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 152.202,
        "saikou": 10,
        "heikin": 7.12,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 4.041
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 156.14,
        "saikou": 10,
        "heikin": 6.94,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 3.979
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 106.14,
        "saikou": 10,
        "heikin": 5.58,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 4.717
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 143.534,
        "saikou": 10,
        "heikin": 5.93,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 5.031
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 247.534,
        "saikou": 10,
        "heikin": 7.78,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 5.219
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 239.992,
        "saikou": 10,
        "heikin": 7.75,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 6.219
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 252.667,
        "saikou": 10,
        "heikin": 7.4,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 6.917
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 252.993,
        "saikou": 10,
        "heikin": 8.01,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 7.063
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 218.312,
        "saikou": 10,
        "heikin": 8.18,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 7.171
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 219.699,
        "saikou": 10,
        "heikin": 8.08,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 7.108
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 219.591,
        "saikou": 10,
        "heikin": 8.05,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 7.114
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 229.907,
        "saikou": 10,
        "heikin": 8.01,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 6.863
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 231.896,
        "saikou": 10,
        "heikin": 7.97,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 6.431
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 241.738,
        "saikou": 10,
        "heikin": 8.03,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.707
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 232.214,
        "saikou": 10,
        "heikin": 7.77,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.288
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 233.214,
        "saikou": 10,
        "heikin": 7.77,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 6.201
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 234.214,
        "saikou": 10,
        "heikin": 8.04,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 6.025
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 234.214,
        "saikou": 10,
        "heikin": 8.01,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 6.164
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 237.814,
        "saikou": 10,
        "heikin": 7.49,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 5.914
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 236.705,
        "saikou": 10,
        "heikin": 7.55,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 5.706
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 236.814,
        "saikou": 10,
        "heikin": 7.38,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 5.079
      }
    ]
  }
};
