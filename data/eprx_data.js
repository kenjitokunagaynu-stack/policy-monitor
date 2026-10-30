// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/30〜2026/10/29）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-30",
  "fetchedAt": "2026-10-30",
  "avgWindowLabel": "過去30日平均（2026/09/30〜2026/10/29）",
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
      "boshu": 1055,
      "ouatsu": 1436.365,
      "saikou": 9.13,
      "heikin": 2.95,
      "boshuAvg30d": 1044.9,
      "heikinAvg30d": 3.057
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1055,
      "ouatsu": 1547.19,
      "saikou": 8.99,
      "heikin": 3,
      "boshuAvg30d": 1044.9,
      "heikinAvg30d": 2.959
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1055,
      "ouatsu": 1645.483,
      "saikou": 8.09,
      "heikin": 2.5,
      "boshuAvg30d": 1044.9,
      "heikinAvg30d": 2.854
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1055,
      "ouatsu": 1614.091,
      "saikou": 8.09,
      "heikin": 2.21,
      "boshuAvg30d": 1044.9,
      "heikinAvg30d": 2.838
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1052,
      "ouatsu": 1686.038,
      "saikou": 8.77,
      "heikin": 2.36,
      "boshuAvg30d": 1041.9,
      "heikinAvg30d": 2.886
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1051,
      "ouatsu": 1606.56,
      "saikou": 8.8,
      "heikin": 2.87,
      "boshuAvg30d": 1040.9,
      "heikinAvg30d": 2.895
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1048,
      "ouatsu": 1668.205,
      "saikou": 9.29,
      "heikin": 2.83,
      "boshuAvg30d": 1046.6,
      "heikinAvg30d": 3.104
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1050,
      "ouatsu": 1662.291,
      "saikou": 9.88,
      "heikin": 3.4,
      "boshuAvg30d": 1048.5,
      "heikinAvg30d": 3.315
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1052,
      "ouatsu": 1728.487,
      "saikou": 9.8,
      "heikin": 3.57,
      "boshuAvg30d": 1050.6,
      "heikinAvg30d": 3.4
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1053,
      "ouatsu": 1709.934,
      "saikou": 9.8,
      "heikin": 3.39,
      "boshuAvg30d": 1051.5,
      "heikinAvg30d": 3.614
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1053,
      "ouatsu": 1591.515,
      "saikou": 10,
      "heikin": 3.35,
      "boshuAvg30d": 1051.5,
      "heikinAvg30d": 3.642
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1053,
      "ouatsu": 1671.868,
      "saikou": 10,
      "heikin": 3.36,
      "boshuAvg30d": 1051.5,
      "heikinAvg30d": 3.628
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1113,
      "ouatsu": 1674.867,
      "saikou": 9.68,
      "heikin": 3.38,
      "boshuAvg30d": 1111.7,
      "heikinAvg30d": 3.633
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1136,
      "ouatsu": 1751.513,
      "saikou": 9.79,
      "heikin": 3.33,
      "boshuAvg30d": 1134.7,
      "heikinAvg30d": 3.508
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1157,
      "ouatsu": 1863.26,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1155.7,
      "heikinAvg30d": 3.07
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1174,
      "ouatsu": 1702.527,
      "saikou": 10,
      "heikin": 3.44,
      "boshuAvg30d": 1173.1,
      "heikinAvg30d": 2.821
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1174,
      "ouatsu": 1783.423,
      "saikou": 10,
      "heikin": 2.95,
      "boshuAvg30d": 1173.5,
      "heikinAvg30d": 2.84
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1174,
      "ouatsu": 1764.515,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1173.5,
      "heikinAvg30d": 2.771
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1192,
      "ouatsu": 1493.721,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1131.6,
      "heikinAvg30d": 2.988
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1195,
      "ouatsu": 1534.887,
      "saikou": 10,
      "heikin": 3.52,
      "boshuAvg30d": 1134.6,
      "heikinAvg30d": 3.03
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1200,
      "ouatsu": 1507.516,
      "saikou": 10,
      "heikin": 2.62,
      "boshuAvg30d": 1137.5,
      "heikinAvg30d": 3.062
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1200,
      "ouatsu": 1578.364,
      "saikou": 10,
      "heikin": 3.34,
      "boshuAvg30d": 1137.5,
      "heikinAvg30d": 3.004
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1197,
      "ouatsu": 1679,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1134.5,
      "heikinAvg30d": 3.009
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1196,
      "ouatsu": 1686.265,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1133.5,
      "heikinAvg30d": 2.956
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1176,
      "ouatsu": 1692.194,
      "saikou": 10,
      "heikin": 3.63,
      "boshuAvg30d": 1113.6,
      "heikinAvg30d": 2.785
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1176,
      "ouatsu": 1760.809,
      "saikou": 10,
      "heikin": 3.93,
      "boshuAvg30d": 1113.6,
      "heikinAvg30d": 2.794
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1176,
      "ouatsu": 1742.257,
      "saikou": 10,
      "heikin": 3.42,
      "boshuAvg30d": 1113.6,
      "heikinAvg30d": 2.979
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1174,
      "ouatsu": 1605.945,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1111.1,
      "heikinAvg30d": 3.078
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1171,
      "ouatsu": 1604.83,
      "saikou": 10,
      "heikin": 3.02,
      "boshuAvg30d": 1108.0,
      "heikinAvg30d": 3.07
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1165,
      "ouatsu": 1452.557,
      "saikou": 10,
      "heikin": 3.91,
      "boshuAvg30d": 1102.0,
      "heikinAvg30d": 3.175
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1145,
      "ouatsu": 1522.932,
      "saikou": 10,
      "heikin": 4.56,
      "boshuAvg30d": 1147.6,
      "heikinAvg30d": 3.155
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1145,
      "ouatsu": 1434.389,
      "saikou": 10,
      "heikin": 4.61,
      "boshuAvg30d": 1147.3,
      "heikinAvg30d": 3.359
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1146,
      "ouatsu": 1415.505,
      "saikou": 10,
      "heikin": 4.79,
      "boshuAvg30d": 1148.0,
      "heikinAvg30d": 3.772
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1145,
      "ouatsu": 1443.377,
      "saikou": 10,
      "heikin": 4.55,
      "boshuAvg30d": 1146.9,
      "heikinAvg30d": 4.115
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1143,
      "ouatsu": 1405.841,
      "saikou": 10,
      "heikin": 4.27,
      "boshuAvg30d": 1142.9,
      "heikinAvg30d": 4.052
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1138,
      "ouatsu": 1464.408,
      "saikou": 10,
      "heikin": 4.21,
      "boshuAvg30d": 1137.5,
      "heikinAvg30d": 4.132
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1133,
      "ouatsu": 1401.493,
      "saikou": 10,
      "heikin": 3.82,
      "boshuAvg30d": 1131.4,
      "heikinAvg30d": 3.948
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1133,
      "ouatsu": 1520.418,
      "saikou": 10,
      "heikin": 4.18,
      "boshuAvg30d": 1131.4,
      "heikinAvg30d": 3.9
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1133,
      "ouatsu": 1562.279,
      "saikou": 10,
      "heikin": 3.64,
      "boshuAvg30d": 1131.5,
      "heikinAvg30d": 3.699
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1132,
      "ouatsu": 1630.12,
      "saikou": 10,
      "heikin": 3.61,
      "boshuAvg30d": 1130.8,
      "heikinAvg30d": 3.486
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1124,
      "ouatsu": 1572.995,
      "saikou": 10,
      "heikin": 3.61,
      "boshuAvg30d": 1122.9,
      "heikinAvg30d": 3.423
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1124,
      "ouatsu": 1446.887,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1122.8,
      "heikinAvg30d": 3.348
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1034,
      "ouatsu": 1555.054,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1044.1,
      "heikinAvg30d": 3.264
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1037,
      "ouatsu": 1590.467,
      "saikou": 10,
      "heikin": 3.68,
      "boshuAvg30d": 1047.1,
      "heikinAvg30d": 3.297
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1038,
      "ouatsu": 1705.576,
      "saikou": 10,
      "heikin": 3.49,
      "boshuAvg30d": 1051.5,
      "heikinAvg30d": 3.289
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1033,
      "ouatsu": 1724.538,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1043.4,
      "heikinAvg30d": 3.15
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1024,
      "ouatsu": 1717.203,
      "saikou": 10,
      "heikin": 2.71,
      "boshuAvg30d": 1034.8,
      "heikinAvg30d": 3.229
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1017,
      "ouatsu": 1679.119,
      "saikou": 9.64,
      "heikin": 2.99,
      "boshuAvg30d": 1027.1,
      "heikinAvg30d": 2.971
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
        "saikou": 2.94,
        "heikin": 2.89,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.014
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 115.958,
        "saikou": 7.69,
        "heikin": 1.38,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.953
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 166.208,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.882
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 115.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.748
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 164.218,
        "saikou": 2.23,
        "heikin": 1.77,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.129
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 115.958,
        "saikou": 2.18,
        "heikin": 2.15,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.743
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 174.918,
        "saikou": 2.53,
        "heikin": 2.48,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.001
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 223.258,
        "saikou": 3.3,
        "heikin": 2.7,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.97
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 225.208,
        "saikou": 3.3,
        "heikin": 2.72,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.097
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 193.708,
        "saikou": 2.79,
        "heikin": 2.53,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.836
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 176.908,
        "saikou": 7,
        "heikin": 3.14,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.193
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 217.458,
        "saikou": 3.3,
        "heikin": 3.08,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.318
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 173.908,
        "saikou": 5.71,
        "heikin": 3.56,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.075
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 171.958,
        "saikou": 5.71,
        "heikin": 3.7,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.196
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 222.208,
        "saikou": 5.71,
        "heikin": 3.19,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 3.562
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 183.468,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 3.641
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 173.908,
        "saikou": 5.71,
        "heikin": 2.41,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 3.712
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 220.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 3.031
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 114.908,
        "saikou": 7.58,
        "heikin": 1.37,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 3.141
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 171.258,
        "saikou": 1.19,
        "heikin": 1.12,
        "boshuAvg30d": 51.6,
        "heikinAvg30d": 3.064
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 124.908,
        "saikou": 4.93,
        "heikin": 1.57,
        "boshuAvg30d": 51.6,
        "heikinAvg30d": 3.607
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 122.958,
        "saikou": 5.59,
        "heikin": 1.64,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 2.818
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 171.218,
        "saikou": 1.19,
        "heikin": 1.12,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 3.63
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 169.268,
        "saikou": 2.9,
        "heikin": 1.31,
        "boshuAvg30d": 52.5,
        "heikinAvg30d": 3.428
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 112.918,
        "saikou": 9.44,
        "heikin": 1.81,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 3.374
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 120.968,
        "saikou": 1.82,
        "heikin": 1.25,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 3.412
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 136.518,
        "saikou": 2,
        "heikin": 1.3,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 3.053
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 112.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 3.43
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 163.208,
        "saikou": 1.15,
        "heikin": 1.09,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 3.563
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 127.958,
        "saikou": 9.29,
        "heikin": 8.85,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 4.333
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 176.218,
        "saikou": 9.16,
        "heikin": 8.49,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 3.506
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 130.958,
        "saikou": 8.94,
        "heikin": 8.53,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 4.552
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 181.208,
        "saikou": 9.56,
        "heikin": 8.71,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 5.687
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 154.258,
        "saikou": 9.54,
        "heikin": 8.79,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 5.944
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 92.908,
        "saikou": 9.4,
        "heikin": 9.09,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 5.287
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 137.268,
        "saikou": 8.89,
        "heikin": 8.25,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 5.562
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 115.918,
        "saikou": 8.18,
        "heikin": 7.83,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 5.152
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 156.557,
        "saikou": 8.18,
        "heikin": 7.69,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 5.402
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 130.918,
        "saikou": 6.92,
        "heikin": 6.72,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 5.017
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 165.768,
        "saikou": 6.69,
        "heikin": 6.2,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 4.926
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 127.918,
        "saikou": 7.5,
        "heikin": 6.95,
        "boshuAvg30d": 46.6,
        "heikinAvg30d": 4.596
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 159.268,
        "saikou": 6.64,
        "heikin": 6.15,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 4.117
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 117.908,
        "saikou": 7.41,
        "heikin": 6.3,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 4.213
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 115.958,
        "saikou": 9.15,
        "heikin": 8.15,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.315
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 164.258,
        "saikou": 6.51,
        "heikin": 5.99,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.458
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 152.065,
        "saikou": 2.62,
        "heikin": 2.14,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.165
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 115.958,
        "saikou": 4.01,
        "heikin": 3.58,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.387
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 159.258,
        "saikou": 3.56,
        "heikin": 3.11,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 3.946
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 81.518,
        "saikou": 7,
        "heikin": 4.6,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 5.475
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 81.518,
        "saikou": 7.15,
        "heikin": 4.74,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 5.623
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 101.396,
        "saikou": 7.61,
        "heikin": 6.37,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 5.457
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 103.356,
        "saikou": 7.82,
        "heikin": 6.73,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 5.433
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 99.41,
        "saikou": 7.57,
        "heikin": 6.37,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 5.467
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 99.41,
        "saikou": 7.47,
        "heikin": 6.25,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 5.57
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 101.856,
        "saikou": 7.21,
        "heikin": 4.69,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 5.612
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 103.356,
        "saikou": 7,
        "heikin": 4.86,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 5.517
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 107.354,
        "saikou": 7,
        "heikin": 4.84,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 5.314
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 96.684,
        "saikou": 6.91,
        "heikin": 4.74,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 5.321
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 107.354,
        "saikou": 10,
        "heikin": 5.22,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 5.609
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 107.354,
        "saikou": 7,
        "heikin": 5.23,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 5.699
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 107.354,
        "saikou": 7,
        "heikin": 5.6,
        "boshuAvg30d": 126.0,
        "heikinAvg30d": 5.998
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 105.854,
        "saikou": 6.22,
        "heikin": 4.7,
        "boshuAvg30d": 131.0,
        "heikinAvg30d": 6.176
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 107.354,
        "saikou": 6.17,
        "heikin": 4.42,
        "boshuAvg30d": 134.1,
        "heikinAvg30d": 6.552
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 105.854,
        "saikou": 6.09,
        "heikin": 4.81,
        "boshuAvg30d": 136.1,
        "heikinAvg30d": 6.666
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 107.354,
        "saikou": 4.57,
        "heikin": 3.15,
        "boshuAvg30d": 136.1,
        "heikinAvg30d": 6.882
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 105.854,
        "saikou": 2.92,
        "heikin": 2.66,
        "boshuAvg30d": 136.1,
        "heikinAvg30d": 6.832
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 144,
        "ouatsu": 74.68,
        "saikou": 2.55,
        "heikin": 2.12,
        "boshuAvg30d": 83.3,
        "heikinAvg30d": 6.812
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 144,
        "ouatsu": 72.78,
        "saikou": 2.99,
        "heikin": 2.1,
        "boshuAvg30d": 83.4,
        "heikinAvg30d": 6.989
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 146,
        "ouatsu": 102.145,
        "saikou": 4.82,
        "heikin": 3.45,
        "boshuAvg30d": 82.5,
        "heikinAvg30d": 6.983
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 146,
        "ouatsu": 92.825,
        "saikou": 4.98,
        "heikin": 4.09,
        "boshuAvg30d": 82.6,
        "heikinAvg30d": 7.118
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 147,
        "ouatsu": 118.782,
        "saikou": 4.57,
        "heikin": 3.42,
        "boshuAvg30d": 83.5,
        "heikinAvg30d": 7.155
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 147,
        "ouatsu": 118.782,
        "saikou": 4.75,
        "heikin": 3.58,
        "boshuAvg30d": 83.5,
        "heikinAvg30d": 7.152
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 143,
        "ouatsu": 129.356,
        "saikou": 6.49,
        "heikin": 3.73,
        "boshuAvg30d": 79.7,
        "heikinAvg30d": 7.162
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 143,
        "ouatsu": 115.436,
        "saikou": 6.16,
        "heikin": 3.89,
        "boshuAvg30d": 79.7,
        "heikinAvg30d": 7.016
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 143,
        "ouatsu": 95.352,
        "saikou": 4.81,
        "heikin": 3.23,
        "boshuAvg30d": 79.7,
        "heikinAvg30d": 6.495
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 142,
        "ouatsu": 81.432,
        "saikou": 5.38,
        "heikin": 4.12,
        "boshuAvg30d": 78.6,
        "heikinAvg30d": 6.285
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 142,
        "ouatsu": 58.782,
        "saikou": 3.1,
        "heikin": 2.06,
        "boshuAvg30d": 78.6,
        "heikinAvg30d": 6.457
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 140,
        "ouatsu": 57.396,
        "saikou": 6.49,
        "heikin": 4.64,
        "boshuAvg30d": 76.5,
        "heikinAvg30d": 5.435
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 71.316,
        "saikou": 6.49,
        "heikin": 4.14,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 5.429
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 71.316,
        "saikou": 10,
        "heikin": 3.47,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 4.335
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 71.316,
        "saikou": 10,
        "heikin": 3.69,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 4.325
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 69.816,
        "saikou": 9.5,
        "heikin": 3.65,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 4.392
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 71.316,
        "saikou": 4.74,
        "heikin": 3.43,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 4.262
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 69.852,
        "saikou": 5.38,
        "heikin": 3.16,
        "boshuAvg30d": 132.9,
        "heikinAvg30d": 3.997
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 71.354,
        "saikou": 4,
        "heikin": 3.22,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 3.944
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 69.854,
        "saikou": 4,
        "heikin": 3.02,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 3.512
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 71.354,
        "saikou": 4,
        "heikin": 3.09,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 3.611
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 71.354,
        "saikou": 4.05,
        "heikin": 3.16,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 3.869
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 79.399,
        "saikou": 4,
        "heikin": 2.9,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 3.922
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 79.399,
        "saikou": 4,
        "heikin": 3.07,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 4.142
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 83.354,
        "saikou": 2.76,
        "heikin": 2.12,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 4.425
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 70.748,
        "saikou": 1.65,
        "heikin": 1.42,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 4.234
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 70.784,
        "saikou": 3.75,
        "heikin": 2.83,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 4.267
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 94.784,
        "saikou": 7.63,
        "heikin": 4.95,
        "boshuAvg30d": 52.4,
        "heikinAvg30d": 4.422
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 107.354,
        "saikou": 6.22,
        "heikin": 3.76,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 4.587
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 93.284,
        "saikou": 6.67,
        "heikin": 4.1,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 4.966
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 174,
        "ouatsu": 316.041,
        "saikou": 5.93,
        "heikin": 1.67,
        "boshuAvg30d": 250.3,
        "heikinAvg30d": 3.715
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 174,
        "ouatsu": 342.674,
        "saikou": 6.32,
        "heikin": 2.48,
        "boshuAvg30d": 250.3,
        "heikinAvg30d": 3.735
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 174,
        "ouatsu": 399.663,
        "saikou": 1.81,
        "heikin": 1.52,
        "boshuAvg30d": 250.3,
        "heikinAvg30d": 3.522
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 174,
        "ouatsu": 401.467,
        "saikou": 1.54,
        "heikin": 1.1,
        "boshuAvg30d": 250.3,
        "heikinAvg30d": 3.582
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 173,
        "ouatsu": 410.819,
        "saikou": 1.44,
        "heikin": 1.18,
        "boshuAvg30d": 249.3,
        "heikinAvg30d": 3.613
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 172,
        "ouatsu": 411.132,
        "saikou": 1.58,
        "heikin": 1.28,
        "boshuAvg30d": 248.3,
        "heikinAvg30d": 3.397
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 170,
        "ouatsu": 361.871,
        "saikou": 6.48,
        "heikin": 2.42,
        "boshuAvg30d": 246.3,
        "heikinAvg30d": 3.624
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 172,
        "ouatsu": 338.89,
        "saikou": 6.46,
        "heikin": 3.48,
        "boshuAvg30d": 248.3,
        "heikinAvg30d": 3.719
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 172,
        "ouatsu": 335.313,
        "saikou": 6.44,
        "heikin": 2.99,
        "boshuAvg30d": 248.3,
        "heikinAvg30d": 3.788
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 173,
        "ouatsu": 366.496,
        "saikou": 6.5,
        "heikin": 2.38,
        "boshuAvg30d": 249.3,
        "heikinAvg30d": 4.011
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 173,
        "ouatsu": 308.489,
        "saikou": 2.12,
        "heikin": 1.63,
        "boshuAvg30d": 249.3,
        "heikinAvg30d": 3.907
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 173,
        "ouatsu": 370.576,
        "saikou": 2.01,
        "heikin": 1.61,
        "boshuAvg30d": 249.3,
        "heikinAvg30d": 4.049
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 192,
        "ouatsu": 404.136,
        "saikou": 6.32,
        "heikin": 3,
        "boshuAvg30d": 268.4,
        "heikinAvg30d": 3.915
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 200,
        "ouatsu": 484.232,
        "saikou": 5.96,
        "heikin": 2.57,
        "boshuAvg30d": 276.4,
        "heikinAvg30d": 4.287
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 205,
        "ouatsu": 484.232,
        "saikou": 3,
        "heikin": 2.34,
        "boshuAvg30d": 281.4,
        "heikinAvg30d": 3.716
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 210,
        "ouatsu": 467.504,
        "saikou": 6.39,
        "heikin": 2.87,
        "boshuAvg30d": 286.7,
        "heikinAvg30d": 3.403
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 210,
        "ouatsu": 556.871,
        "saikou": 2.99,
        "heikin": 1.8,
        "boshuAvg30d": 287.0,
        "heikinAvg30d": 3.418
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 210,
        "ouatsu": 447.901,
        "saikou": 2.83,
        "heikin": 1.84,
        "boshuAvg30d": 287.0,
        "heikinAvg30d": 3.317
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 202,
        "ouatsu": 424.463,
        "saikou": 2.8,
        "heikin": 1.77,
        "boshuAvg30d": 282.0,
        "heikinAvg30d": 3.512
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 202,
        "ouatsu": 450.77,
        "saikou": 2.12,
        "heikin": 1.64,
        "boshuAvg30d": 282.0,
        "heikinAvg30d": 3.627
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 202,
        "ouatsu": 448.255,
        "saikou": 1.99,
        "heikin": 1.14,
        "boshuAvg30d": 282.6,
        "heikinAvg30d": 3.578
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 201,
        "ouatsu": 430.568,
        "saikou": 3.04,
        "heikin": 1.33,
        "boshuAvg30d": 281.6,
        "heikinAvg30d": 3.486
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 199,
        "ouatsu": 451.534,
        "saikou": 2.01,
        "heikin": 1.2,
        "boshuAvg30d": 279.6,
        "heikinAvg30d": 3.494
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 199,
        "ouatsu": 424.347,
        "saikou": 2.15,
        "heikin": 1.17,
        "boshuAvg30d": 279.6,
        "heikinAvg30d": 3.432
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 196,
        "ouatsu": 568.626,
        "saikou": 2.56,
        "heikin": 1.37,
        "boshuAvg30d": 276.3,
        "heikinAvg30d": 3.244
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 196,
        "ouatsu": 548.238,
        "saikou": 3.37,
        "heikin": 1.51,
        "boshuAvg30d": 276.3,
        "heikinAvg30d": 3.191
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 196,
        "ouatsu": 478.999,
        "saikou": 2.96,
        "heikin": 1.17,
        "boshuAvg30d": 276.3,
        "heikinAvg30d": 3.443
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 196,
        "ouatsu": 438.937,
        "saikou": 4.6,
        "heikin": 1.31,
        "boshuAvg30d": 276.0,
        "heikinAvg30d": 3.491
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 195,
        "ouatsu": 443.59,
        "saikou": 2.85,
        "heikin": 1.56,
        "boshuAvg30d": 275.0,
        "heikinAvg30d": 3.317
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 194,
        "ouatsu": 401.564,
        "saikou": 7.02,
        "heikin": 3.01,
        "boshuAvg30d": 274.0,
        "heikinAvg30d": 3.098
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 192,
        "ouatsu": 403.373,
        "saikou": 7.67,
        "heikin": 3.93,
        "boshuAvg30d": 272.0,
        "heikinAvg30d": 2.918
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 192,
        "ouatsu": 278.552,
        "saikou": 4.58,
        "heikin": 1.77,
        "boshuAvg30d": 271.7,
        "heikinAvg30d": 2.968
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 192,
        "ouatsu": 299.242,
        "saikou": 4.68,
        "heikin": 1.72,
        "boshuAvg30d": 271.4,
        "heikinAvg30d": 3.005
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 192,
        "ouatsu": 331.539,
        "saikou": 2.8,
        "heikin": 1.82,
        "boshuAvg30d": 271.4,
        "heikinAvg30d": 3.145
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 192,
        "ouatsu": 365.249,
        "saikou": 2.07,
        "heikin": 1.56,
        "boshuAvg30d": 269.4,
        "heikinAvg30d": 3.01
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 192,
        "ouatsu": 389.154,
        "saikou": 1.91,
        "heikin": 1.49,
        "boshuAvg30d": 269.0,
        "heikinAvg30d": 2.987
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 195,
        "ouatsu": 402.432,
        "saikou": 1.7,
        "heikin": 1.38,
        "boshuAvg30d": 271.0,
        "heikinAvg30d": 3.174
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 195,
        "ouatsu": 396.538,
        "saikou": 1.97,
        "heikin": 1.29,
        "boshuAvg30d": 271.0,
        "heikinAvg30d": 2.93
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 195,
        "ouatsu": 420.679,
        "saikou": 5.69,
        "heikin": 1.11,
        "boshuAvg30d": 271.0,
        "heikinAvg30d": 2.996
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 195,
        "ouatsu": 431.52,
        "saikou": 4.97,
        "heikin": 0.99,
        "boshuAvg30d": 271.4,
        "heikinAvg30d": 2.782
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 193,
        "ouatsu": 433.841,
        "saikou": 5.42,
        "heikin": 1.87,
        "boshuAvg30d": 269.4,
        "heikinAvg30d": 2.731
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 193,
        "ouatsu": 415.765,
        "saikou": 6.21,
        "heikin": 1.44,
        "boshuAvg30d": 269.4,
        "heikinAvg30d": 2.959
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 193,
        "ouatsu": 392.161,
        "saikou": 1.5,
        "heikin": 1.04,
        "boshuAvg30d": 269.3,
        "heikinAvg30d": 2.657
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 193,
        "ouatsu": 506.835,
        "saikou": 3.18,
        "heikin": 1.55,
        "boshuAvg30d": 269.3,
        "heikinAvg30d": 2.742
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 193,
        "ouatsu": 505.323,
        "saikou": 3.05,
        "heikin": 1.71,
        "boshuAvg30d": 272.7,
        "heikinAvg30d": 2.636
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 191,
        "ouatsu": 542.294,
        "saikou": 2.43,
        "heikin": 1.45,
        "boshuAvg30d": 267.7,
        "heikinAvg30d": 2.752
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 189,
        "ouatsu": 553.406,
        "saikou": 2.46,
        "heikin": 1.68,
        "boshuAvg30d": 266.0,
        "heikinAvg30d": 3.26
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 188,
        "ouatsu": 452.381,
        "saikou": 6.39,
        "heikin": 3.02,
        "boshuAvg30d": 264.4,
        "heikinAvg30d": 3.313
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 180,
        "ouatsu": 379.095,
        "saikou": 8.99,
        "heikin": 1.98,
        "boshuAvg30d": 100.0,
        "heikinAvg30d": 1.695
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 180,
        "ouatsu": 399.314,
        "saikou": 8.99,
        "heikin": 2.04,
        "boshuAvg30d": 100.0,
        "heikinAvg30d": 1.536
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 180,
        "ouatsu": 414.763,
        "saikou": 3.19,
        "heikin": 1.86,
        "boshuAvg30d": 100.0,
        "heikinAvg30d": 1.558
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 180,
        "ouatsu": 414.874,
        "saikou": 3.1,
        "heikin": 1.89,
        "boshuAvg30d": 100.0,
        "heikinAvg30d": 1.629
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 179,
        "ouatsu": 410.62,
        "saikou": 8.77,
        "heikin": 1.84,
        "boshuAvg30d": 99.0,
        "heikinAvg30d": 1.581
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 179,
        "ouatsu": 406.776,
        "saikou": 8.77,
        "heikin": 2.06,
        "boshuAvg30d": 99.0,
        "heikinAvg30d": 1.575
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 178,
        "ouatsu": 428.615,
        "saikou": 8.77,
        "heikin": 1.85,
        "boshuAvg30d": 98.0,
        "heikinAvg30d": 1.465
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 178,
        "ouatsu": 407.225,
        "saikou": 8.77,
        "heikin": 1.75,
        "boshuAvg30d": 98.0,
        "heikinAvg30d": 1.519
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 179,
        "ouatsu": 412.801,
        "saikou": 8.88,
        "heikin": 1.79,
        "boshuAvg30d": 99.0,
        "heikinAvg30d": 1.501
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 179,
        "ouatsu": 399.009,
        "saikou": 8.88,
        "heikin": 1.78,
        "boshuAvg30d": 99.0,
        "heikinAvg30d": 1.492
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 179,
        "ouatsu": 344.727,
        "saikou": 8.88,
        "heikin": 1.42,
        "boshuAvg30d": 99.0,
        "heikinAvg30d": 1.475
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 179,
        "ouatsu": 340.743,
        "saikou": 8.88,
        "heikin": 1.37,
        "boshuAvg30d": 99.0,
        "heikinAvg30d": 1.431
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 188,
        "ouatsu": 393.812,
        "saikou": 3.67,
        "heikin": 1.12,
        "boshuAvg30d": 108.0,
        "heikinAvg30d": 1.691
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 192,
        "ouatsu": 393.812,
        "saikou": 4.07,
        "heikin": 1.63,
        "boshuAvg30d": 112.0,
        "heikinAvg30d": 1.744
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 195,
        "ouatsu": 391.828,
        "saikou": 4.07,
        "heikin": 1.57,
        "boshuAvg30d": 115.0,
        "heikinAvg30d": 2.017
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 197,
        "ouatsu": 373.651,
        "saikou": 4.24,
        "heikin": 1.89,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 2.038
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 197,
        "ouatsu": 393.862,
        "saikou": 3.67,
        "heikin": 1.35,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 2.103
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 197,
        "ouatsu": 373.878,
        "saikou": 7.33,
        "heikin": 1.86,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 2.225
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 202,
        "ouatsu": 331.249,
        "saikou": 3.67,
        "heikin": 2.06,
        "boshuAvg30d": 122.0,
        "heikinAvg30d": 2.652
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 202,
        "ouatsu": 300.022,
        "saikou": 9.36,
        "heikin": 2.31,
        "boshuAvg30d": 122.0,
        "heikinAvg30d": 2.681
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 202,
        "ouatsu": 307.215,
        "saikou": 9.36,
        "heikin": 2.09,
        "boshuAvg30d": 122.0,
        "heikinAvg30d": 2.873
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 202,
        "ouatsu": 342.02,
        "saikou": 7.01,
        "heikin": 2.26,
        "boshuAvg30d": 122.0,
        "heikinAvg30d": 2.876
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 201,
        "ouatsu": 340.17,
        "saikou": 2.31,
        "heikin": 1.75,
        "boshuAvg30d": 121.0,
        "heikinAvg30d": 2.73
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 200,
        "ouatsu": 338.186,
        "saikou": 6.26,
        "heikin": 1.81,
        "boshuAvg30d": 120.0,
        "heikinAvg30d": 2.77
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 196,
        "ouatsu": 301.298,
        "saikou": 9.27,
        "heikin": 2.47,
        "boshuAvg30d": 116.0,
        "heikinAvg30d": 2.629
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 196,
        "ouatsu": 309.239,
        "saikou": 9.27,
        "heikin": 2.45,
        "boshuAvg30d": 116.0,
        "heikinAvg30d": 2.614
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 196,
        "ouatsu": 347.812,
        "saikou": 6.9,
        "heikin": 2.49,
        "boshuAvg30d": 116.0,
        "heikinAvg30d": 2.653
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 195,
        "ouatsu": 349.796,
        "saikou": 6.9,
        "heikin": 2.3,
        "boshuAvg30d": 115.0,
        "heikinAvg30d": 2.712
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 195,
        "ouatsu": 349.796,
        "saikou": 8.26,
        "heikin": 3.18,
        "boshuAvg30d": 115.0,
        "heikinAvg30d": 2.95
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 195,
        "ouatsu": 330.747,
        "saikou": 9.36,
        "heikin": 3.53,
        "boshuAvg30d": 115.0,
        "heikinAvg30d": 2.849
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 193,
        "ouatsu": 320.356,
        "saikou": 9.54,
        "heikin": 5,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 2.659
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 193,
        "ouatsu": 305.456,
        "saikou": 9.7,
        "heikin": 5.03,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 2.805
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 193,
        "ouatsu": 294.951,
        "saikou": 9.47,
        "heikin": 3.73,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 2.753
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 294.937,
        "saikou": 9.47,
        "heikin": 3.63,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 2.79
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 193,
        "ouatsu": 294.937,
        "saikou": 9.47,
        "heikin": 3.56,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 2.631
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 192,
        "ouatsu": 292.952,
        "saikou": 8.98,
        "heikin": 3.23,
        "boshuAvg30d": 112.1,
        "heikinAvg30d": 2.605
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 190,
        "ouatsu": 308.03,
        "saikou": 8.98,
        "heikin": 2.94,
        "boshuAvg30d": 110.1,
        "heikinAvg30d": 2.209
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 190,
        "ouatsu": 313.73,
        "saikou": 8.98,
        "heikin": 3,
        "boshuAvg30d": 110.1,
        "heikinAvg30d": 2.097
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 190,
        "ouatsu": 331.486,
        "saikou": 8.77,
        "heikin": 2.35,
        "boshuAvg30d": 110.1,
        "heikinAvg30d": 1.822
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 190,
        "ouatsu": 347.275,
        "saikou": 8.77,
        "heikin": 2.37,
        "boshuAvg30d": 110.1,
        "heikinAvg30d": 1.657
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 190,
        "ouatsu": 337.37,
        "saikou": 8.77,
        "heikin": 1.89,
        "boshuAvg30d": 110.1,
        "heikinAvg30d": 1.545
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 190,
        "ouatsu": 335.386,
        "saikou": 8.77,
        "heikin": 1.67,
        "boshuAvg30d": 110.1,
        "heikinAvg30d": 1.613
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 191,
        "ouatsu": 345.293,
        "saikou": 8.77,
        "heikin": 1.71,
        "boshuAvg30d": 111.0,
        "heikinAvg30d": 1.503
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 192,
        "ouatsu": 347.291,
        "saikou": 8.77,
        "heikin": 2.01,
        "boshuAvg30d": 112.0,
        "heikinAvg30d": 1.766
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 192,
        "ouatsu": 339.327,
        "saikou": 8.77,
        "heikin": 1.64,
        "boshuAvg30d": 112.0,
        "heikinAvg30d": 1.728
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 191,
        "ouatsu": 355.311,
        "saikou": 8.77,
        "heikin": 1.8,
        "boshuAvg30d": 111.0,
        "heikinAvg30d": 1.787
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 190,
        "ouatsu": 360.401,
        "saikou": 3,
        "heikin": 1.22,
        "boshuAvg30d": 110.0,
        "heikinAvg30d": 1.703
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 187,
        "ouatsu": 360.417,
        "saikou": 3,
        "heikin": 1.65,
        "boshuAvg30d": 107.0,
        "heikinAvg30d": 1.82
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.35,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 1.184
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 1.144
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.75,
        "heikin": 1.7,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 1.199
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.15,
        "heikin": 2.1,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 1.049
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.65,
        "heikin": 1.55,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 1.177
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 1.223
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 1.79,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 1.455
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.93,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 1.863
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.18,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 1.653
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.45,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 1.636
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.1,
        "heikin": 2.02,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 1.869
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.19,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 1.907
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.25,
        "heikin": 2.07,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 2.008
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.57,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 2.008
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.85,
        "heikin": 2.7,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.085
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 7.812,
        "saikou": 7.96,
        "heikin": 5.35,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 1.87
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 21.19,
        "saikou": 9.48,
        "heikin": 8.31,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 3.042
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 8.83,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.65
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 8.81,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 3.119
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 8.92,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 3.436
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 4.147
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.33,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 4.284
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.07,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 3.27
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.15,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 3.107
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 8.92,
        "heikin": 8.23,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.333
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 8.92,
        "heikin": 8.15,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.989
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.6,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 3.613
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 8.75,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.878
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 13.688,
        "saikou": 10,
        "heikin": 8.43,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 3.492
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 9.126,
        "saikou": 10,
        "heikin": 7.48,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 3.499
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 9.368,
        "saikou": 10,
        "heikin": 8.34,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 4.483
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.48,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 5.39
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 10.524,
        "saikou": 10,
        "heikin": 7.77,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 4.24
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 9.828,
        "saikou": 10,
        "heikin": 7.52,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 3.817
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 4.1,
        "heikin": 3.9,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 3.692
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 4.1,
        "heikin": 4.02,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 4.27
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.35,
        "heikin": 2.32,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 3.538
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 8.92,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 3.891
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 16.828,
        "saikou": 10,
        "heikin": 8.17,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 3.346
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 12.21,
        "saikou": 10,
        "heikin": 7.78,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 3.128
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.27,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.753
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.25,
        "heikin": 3.05,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.196
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.17,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.309
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.2,
        "heikin": 2.79,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.311
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.57,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.626
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.65,
        "heikin": 2.52,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.243
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.35,
        "heikin": 2.32,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.981
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.43,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.523
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 74.882,
        "saikou": 1.49,
        "heikin": 1.28,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 1.325
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 133.907,
        "saikou": 1.46,
        "heikin": 1.01,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 1.099
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 89.704,
        "saikou": 1.46,
        "heikin": 0.88,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 1.039
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 96.75,
        "saikou": 1.4,
        "heikin": 0.91,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 1.044
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 115.509,
        "saikou": 1.46,
        "heikin": 1.01,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 1.002
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 89.811,
        "saikou": 1.99,
        "heikin": 1.46,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 1.208
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 97.698,
        "saikou": 1.99,
        "heikin": 1.49,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 1.332
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 127.1,
        "heikinAvg30d": 1.517
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.59,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 1.441
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 1.521
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.64,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 1.531
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 86.686,
        "saikou": 1.99,
        "heikin": 1.56,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 1.385
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.54,
        "boshuAvg30d": 139.2,
        "heikinAvg30d": 1.545
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.55,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 1.488
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 99.567,
        "saikou": 2,
        "heikin": 1.79,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 1.554
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 99.567,
        "saikou": 2.09,
        "heikin": 1.84,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 1.638
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 99.567,
        "saikou": 2.09,
        "heikin": 1.84,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 1.633
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 105.553,
        "saikou": 3.95,
        "heikin": 2.75,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.057
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 103.644,
        "saikou": 3,
        "heikin": 2.43,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 2.217
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 88.644,
        "saikou": 3,
        "heikin": 2.62,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 2.178
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 85.216,
        "saikou": 3,
        "heikin": 2.33,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 2.329
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 100.216,
        "saikou": 5.95,
        "heikin": 2.9,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 2.455
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 103.644,
        "saikou": 5.95,
        "heikin": 2.54,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.528
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 103.644,
        "saikou": 3,
        "heikin": 2.26,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.304
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 101.646,
        "saikou": 3,
        "heikin": 2,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.115
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 103.644,
        "saikou": 3,
        "heikin": 1.96,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.248
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 103.644,
        "saikou": 5.95,
        "heikin": 2.23,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.514
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 103.644,
        "saikou": 3,
        "heikin": 2.1,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.316
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 105.553,
        "saikou": 4.45,
        "heikin": 2.55,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.265
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 105.553,
        "saikou": 3,
        "heikin": 2.25,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.096
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 105.553,
        "saikou": 3.95,
        "heikin": 2.8,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.323
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 105.553,
        "saikou": 3.95,
        "heikin": 2.76,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.569
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 104.11,
        "saikou": 3.95,
        "heikin": 2.82,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.462
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 98.124,
        "saikou": 2.38,
        "heikin": 2.03,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.197
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 99.567,
        "saikou": 2.5,
        "heikin": 2.24,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.231
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 99.567,
        "saikou": 3.39,
        "heikin": 2.52,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 2.519
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 97.607,
        "saikou": 1.95,
        "heikin": 1.74,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 1.973
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 97.607,
        "saikou": 1.94,
        "heikin": 1.71,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 2.005
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.68,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 1.878
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.72,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 1.842
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 99.701,
        "saikou": 1.99,
        "heikin": 1.68,
        "boshuAvg30d": 142.2,
        "heikinAvg30d": 1.766
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 99.701,
        "saikou": 1.99,
        "heikin": 1.65,
        "boshuAvg30d": 142.2,
        "heikinAvg30d": 1.798
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 146.949,
        "saikou": 1.99,
        "heikin": 1.19,
        "boshuAvg30d": 142.2,
        "heikinAvg30d": 1.75
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.75,
        "boshuAvg30d": 142.2,
        "heikinAvg30d": 1.823
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.74,
        "boshuAvg30d": 142.2,
        "heikinAvg30d": 1.802
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.61,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 1.732
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.62,
        "boshuAvg30d": 139.2,
        "heikinAvg30d": 1.428
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 137.2,
        "heikinAvg30d": 1.544
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 187.463,
        "saikou": 7.99,
        "heikin": 4.09,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.304
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 187.463,
        "saikou": 6.55,
        "heikin": 4.76,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.401
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 187.463,
        "saikou": 5.3,
        "heikin": 3.91,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.13
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 189.453,
        "saikou": 2.68,
        "heikin": 1.98,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 1.992
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 191.253,
        "saikou": 3.66,
        "heikin": 2.73,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 1.994
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 191.253,
        "saikou": 6.55,
        "heikin": 4.76,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.208
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 208.112,
        "saikou": 2.29,
        "heikin": 1.89,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.521
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 208.112,
        "saikou": 5.5,
        "heikin": 3.91,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.854
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 196.99,
        "saikou": 7.45,
        "heikin": 5.57,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.168
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 208.112,
        "saikou": 8.15,
        "heikin": 5.86,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.555
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 208.112,
        "saikou": 8.16,
        "heikin": 5.89,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.405
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 208.112,
        "saikou": 7.94,
        "heikin": 5.99,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.334
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 207.112,
        "saikou": 7.51,
        "heikin": 5.11,
        "boshuAvg30d": 142.9,
        "heikinAvg30d": 3.421
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 207.112,
        "saikou": 8.15,
        "heikin": 5.51,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 2.996
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 207.112,
        "saikou": 8.17,
        "heikin": 6.2,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 1.921
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 149.64,
        "saikou": 9.95,
        "heikin": 5.61,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 1.524
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 149.64,
        "saikou": 9.81,
        "heikin": 5.25,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 1.619
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 207.112,
        "saikou": 8.8,
        "heikin": 5.55,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 1.655
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 187.23,
        "saikou": 8.16,
        "heikin": 5.48,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.862
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 122.866,
        "saikou": 8.15,
        "heikin": 5.86,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 1.884
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 187.23,
        "saikou": 2.68,
        "heikin": 1.97,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 1.629
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 187.23,
        "saikou": 5.96,
        "heikin": 4.18,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 1.566
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 187.23,
        "saikou": 2.68,
        "heikin": 2.01,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 1.555
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 187.23,
        "saikou": 2.68,
        "heikin": 2,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 1.655
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 66.29,
        "saikou": 7.99,
        "heikin": 1.98,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.442
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 129.758,
        "saikou": 9.77,
        "heikin": 5.83,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.56
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 187.23,
        "saikou": 5.4,
        "heikin": 3.93,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.743
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 187.23,
        "saikou": 2.68,
        "heikin": 2,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.765
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 187.23,
        "saikou": 2.67,
        "heikin": 1.99,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.821
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 187.23,
        "saikou": 2.7,
        "heikin": 2.03,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.891
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 187.23,
        "saikou": 2.7,
        "heikin": 1.8,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.168
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 176.108,
        "saikou": 3.8,
        "heikin": 2.71,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.4
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 153.535,
        "saikou": 8.14,
        "heikin": 6.44,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.892
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 187.23,
        "saikou": 8.16,
        "heikin": 5.69,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.927
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 187.23,
        "saikou": 8.17,
        "heikin": 5.79,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 4.225
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 187.23,
        "saikou": 8.17,
        "heikin": 5.68,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 4.294
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 186.24,
        "saikou": 8.16,
        "heikin": 5.46,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 4.383
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 186.24,
        "saikou": 7.94,
        "heikin": 5.94,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 4.374
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 206.122,
        "saikou": 7.51,
        "heikin": 5.46,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 4.052
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 208.112,
        "saikou": 7.05,
        "heikin": 5.22,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 3.592
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 208.112,
        "saikou": 6.9,
        "heikin": 5.22,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.908
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 116.945,
        "saikou": 9.81,
        "heikin": 6.09,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.727
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 174.417,
        "saikou": 8.75,
        "heikin": 6.34,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 4.04
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 158.55,
        "saikou": 8.17,
        "heikin": 5.79,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 3.735
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 177.75,
        "saikou": 5.05,
        "heikin": 4.48,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 3.66
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 177.75,
        "saikou": 3.04,
        "heikin": 2.35,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 3.201
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 177.75,
        "saikou": 3.04,
        "heikin": 2.36,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.211
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 211.445,
        "saikou": 2.69,
        "heikin": 2.26,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.249
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.883
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.835
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.789
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.796
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.799
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.48,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.798
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.815
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 68.8,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.856
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.876
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.928
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.899
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.863
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 83.343,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.971
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 83.343,
        "saikou": 1.6,
        "heikin": 0.76,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.919
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 83.343,
        "saikou": 1.7,
        "heikin": 0.8,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.849
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 83.343,
        "saikou": 1.7,
        "heikin": 0.82,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 0.874
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 83.343,
        "saikou": 1.7,
        "heikin": 1.05,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 0.804
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 83.343,
        "saikou": 1.7,
        "heikin": 0.83,
        "boshuAvg30d": 46.0,
        "heikinAvg30d": 0.858
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 49.343,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.099
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 49.343,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.071
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 49.343,
        "saikou": 4.55,
        "heikin": 2.27,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.086
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 49.343,
        "saikou": 1.6,
        "heikin": 1.45,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.021
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 62.343,
        "saikou": 1.6,
        "heikin": 1.49,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.075
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 62.343,
        "saikou": 1.6,
        "heikin": 1.45,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.095
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 90.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.079
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 91.343,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.102
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 91.343,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.107
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 90.343,
        "saikou": 1.6,
        "heikin": 1.1,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 1.102
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 62.343,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.152
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 62.343,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.076
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 62.343,
        "saikou": 4.55,
        "heikin": 2.15,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.129
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 62.343,
        "saikou": 1.7,
        "heikin": 1.49,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.188
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 49.343,
        "saikou": 1.95,
        "heikin": 1.6,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.397
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 49.343,
        "saikou": 4.55,
        "heikin": 2.29,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.499
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 49.343,
        "saikou": 4.55,
        "heikin": 2.35,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.563
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 49.343,
        "saikou": 4.55,
        "heikin": 2.35,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.561
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 4.55,
        "heikin": 2.35,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.509
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.548
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 1.99,
        "heikin": 1.63,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.425
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 1.99,
        "heikin": 1.63,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.452
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 1.99,
        "heikin": 1.63,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.442
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.442
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.041
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.97
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.952
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.913
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.975
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.954
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 182.187,
        "saikou": 9.13,
        "heikin": 6.14,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 5.079
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 186.085,
        "saikou": 8.69,
        "heikin": 5.85,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.764
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 186.015,
        "saikou": 8.09,
        "heikin": 5.45,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.69
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 191.962,
        "saikou": 8.09,
        "heikin": 5.45,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.576
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 193.938,
        "saikou": 8.26,
        "heikin": 5.56,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.559
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 191.949,
        "saikou": 8.8,
        "heikin": 5.93,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.778
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 210.864,
        "saikou": 9.29,
        "heikin": 6.17,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 4.985
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 207.036,
        "saikou": 9.88,
        "heikin": 6.57,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 5.506
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 264.864,
        "saikou": 9.8,
        "heikin": 6.62,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 5.756
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 259.968,
        "saikou": 9.8,
        "heikin": 6.47,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.11
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 259.968,
        "saikou": 10,
        "heikin": 6.65,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.243
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 256.668,
        "saikou": 10,
        "heikin": 6.84,
        "boshuAvg30d": 168.9,
        "heikinAvg30d": 6.182
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 199.588,
        "saikou": 9.68,
        "heikin": 6.42,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 5.817
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 199.588,
        "saikou": 9.79,
        "heikin": 6.46,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 5.069
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 263.688,
        "saikou": 10,
        "heikin": 6.85,
        "boshuAvg30d": 174.8,
        "heikinAvg30d": 3.964
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 231.688,
        "saikou": 10,
        "heikin": 7.03,
        "boshuAvg30d": 175.8,
        "heikinAvg30d": 3.496
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 197.688,
        "saikou": 10,
        "heikin": 6.6,
        "boshuAvg30d": 175.8,
        "heikinAvg30d": 3.313
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 197.688,
        "saikou": 10,
        "heikin": 6.6,
        "boshuAvg30d": 175.8,
        "heikinAvg30d": 3.279
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 185.276,
        "saikou": 10,
        "heikin": 6.48,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 3.34
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 256.276,
        "saikou": 10,
        "heikin": 8.24,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 3.249
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 180.276,
        "saikou": 10,
        "heikin": 6.46,
        "boshuAvg30d": 180.8,
        "heikinAvg30d": 3.176
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 230.276,
        "saikou": 10,
        "heikin": 8.04,
        "boshuAvg30d": 181.8,
        "heikinAvg30d": 3.096
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 221.151,
        "saikou": 10,
        "heikin": 7.92,
        "boshuAvg30d": 181.8,
        "heikinAvg30d": 2.901
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 259.537,
        "saikou": 10,
        "heikin": 8.25,
        "boshuAvg30d": 181.8,
        "heikinAvg30d": 2.875
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 298.789,
        "saikou": 10,
        "heikin": 8.63,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 2.574
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 319.255,
        "saikou": 10,
        "heikin": 8.61,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 2.709
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 278.431,
        "saikou": 10,
        "heikin": 8.5,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 3.343
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 218.677,
        "saikou": 10,
        "heikin": 8.09,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 3.964
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 220.64,
        "saikou": 10,
        "heikin": 7.91,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 3.865
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 170.64,
        "saikou": 10,
        "heikin": 6.73,
        "boshuAvg30d": 177.9,
        "heikinAvg30d": 4.64
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 187.175,
        "saikou": 10,
        "heikin": 6.8,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 4.999
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 281.175,
        "saikou": 10,
        "heikin": 7.95,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 5.319
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 251.276,
        "saikou": 10,
        "heikin": 7.55,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 6.276
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 248.302,
        "saikou": 10,
        "heikin": 7.38,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 6.97
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 241.363,
        "saikou": 10,
        "heikin": 7.28,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 7.153
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 235.114,
        "saikou": 10,
        "heikin": 7.31,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 7.213
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 166.641,
        "saikou": 10,
        "heikin": 6.92,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 7.198
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 227.621,
        "saikou": 10,
        "heikin": 7.49,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 7.124
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 233.863,
        "saikou": 10,
        "heikin": 7.43,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.814
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 242.852,
        "saikou": 10,
        "heikin": 7.34,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.368
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 233.383,
        "saikou": 10,
        "heikin": 7.25,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.609
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 187.152,
        "saikou": 10,
        "heikin": 6.91,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.215
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 194.701,
        "saikou": 10,
        "heikin": 6.82,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.147
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 189.128,
        "saikou": 10,
        "heikin": 6.82,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 6.011
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 246.177,
        "saikou": 10,
        "heikin": 7.27,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 6.171
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 200.377,
        "saikou": 10,
        "heikin": 6.83,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 5.923
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 200.377,
        "saikou": 10,
        "heikin": 6.68,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 5.754
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 200.377,
        "saikou": 9.64,
        "heikin": 6.66,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 5.137
      }
    ]
  }
};
