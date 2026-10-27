// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/27〜2026/10/26）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-27",
  "fetchedAt": "2026-10-27",
  "avgWindowLabel": "過去30日平均（2026/09/27〜2026/10/26）",
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
      "boshu": 923,
      "ouatsu": 1482.628,
      "saikou": 10,
      "heikin": 2.99,
      "boshuAvg30d": 1071.1,
      "heikinAvg30d": 3.031
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 923,
      "ouatsu": 1593.728,
      "saikou": 9.38,
      "heikin": 3.06,
      "boshuAvg30d": 1071.1,
      "heikinAvg30d": 2.91
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 923,
      "ouatsu": 1585.306,
      "saikou": 9.07,
      "heikin": 3,
      "boshuAvg30d": 1071.1,
      "heikinAvg30d": 2.837
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 923,
      "ouatsu": 1551.835,
      "saikou": 9.29,
      "heikin": 2.8,
      "boshuAvg30d": 1071.1,
      "heikinAvg30d": 2.814
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 920,
      "ouatsu": 1603.483,
      "saikou": 9.29,
      "heikin": 2.97,
      "boshuAvg30d": 1067.8,
      "heikinAvg30d": 2.848
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 919,
      "ouatsu": 1637.741,
      "saikou": 9.37,
      "heikin": 2.92,
      "boshuAvg30d": 1066.8,
      "heikinAvg30d": 2.859
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 916,
      "ouatsu": 1705.125,
      "saikou": 9.73,
      "heikin": 3.19,
      "boshuAvg30d": 1078.5,
      "heikinAvg30d": 3.038
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 918,
      "ouatsu": 1659.991,
      "saikou": 9.78,
      "heikin": 3.29,
      "boshuAvg30d": 1080.4,
      "heikinAvg30d": 3.265
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 920,
      "ouatsu": 1675.844,
      "saikou": 10,
      "heikin": 3.58,
      "boshuAvg30d": 1082.5,
      "heikinAvg30d": 3.327
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 921,
      "ouatsu": 1625.997,
      "saikou": 9.34,
      "heikin": 3.43,
      "boshuAvg30d": 1083.4,
      "heikinAvg30d": 3.528
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 921,
      "ouatsu": 1656.506,
      "saikou": 9.44,
      "heikin": 3.5,
      "boshuAvg30d": 1083.4,
      "heikinAvg30d": 3.576
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 921,
      "ouatsu": 1648.83,
      "saikou": 9.68,
      "heikin": 3.59,
      "boshuAvg30d": 1083.4,
      "heikinAvg30d": 3.576
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 981,
      "ouatsu": 1799.836,
      "saikou": 9.82,
      "heikin": 3.71,
      "boshuAvg30d": 1144.2,
      "heikinAvg30d": 3.584
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1004,
      "ouatsu": 1693.759,
      "saikou": 9.81,
      "heikin": 2.93,
      "boshuAvg30d": 1166.9,
      "heikinAvg30d": 3.454
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1025,
      "ouatsu": 1812.482,
      "saikou": 10,
      "heikin": 3.42,
      "boshuAvg30d": 1188.2,
      "heikinAvg30d": 3.028
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1042,
      "ouatsu": 1704.084,
      "saikou": 10,
      "heikin": 3.22,
      "boshuAvg30d": 1205.3,
      "heikinAvg30d": 2.837
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1042,
      "ouatsu": 1786.021,
      "saikou": 10,
      "heikin": 2.91,
      "boshuAvg30d": 1205.5,
      "heikinAvg30d": 2.96
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1042,
      "ouatsu": 1849.77,
      "saikou": 10,
      "heikin": 2.62,
      "boshuAvg30d": 1205.5,
      "heikinAvg30d": 2.929
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 974,
      "ouatsu": 1795.552,
      "saikou": 10,
      "heikin": 2.79,
      "boshuAvg30d": 1169.8,
      "heikinAvg30d": 3.146
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 977,
      "ouatsu": 1765.995,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1172.9,
      "heikinAvg30d": 3.197
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 982,
      "ouatsu": 1966.005,
      "saikou": 8.97,
      "heikin": 2.61,
      "boshuAvg30d": 1175.8,
      "heikinAvg30d": 3.25
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 982,
      "ouatsu": 2077.478,
      "saikou": 7.51,
      "heikin": 2.71,
      "boshuAvg30d": 1175.8,
      "heikinAvg30d": 3.181
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 979,
      "ouatsu": 2045.196,
      "saikou": 7.77,
      "heikin": 2.1,
      "boshuAvg30d": 1172.8,
      "heikinAvg30d": 3.198
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 978,
      "ouatsu": 2007.828,
      "saikou": 8.77,
      "heikin": 1.94,
      "boshuAvg30d": 1171.8,
      "heikinAvg30d": 3.137
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 958,
      "ouatsu": 1918.44,
      "saikou": 9.86,
      "heikin": 1.4,
      "boshuAvg30d": 1153.2,
      "heikinAvg30d": 3.009
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 958,
      "ouatsu": 1929.388,
      "saikou": 9.97,
      "heikin": 1.48,
      "boshuAvg30d": 1153.2,
      "heikinAvg30d": 3.012
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 958,
      "ouatsu": 1911.067,
      "saikou": 9.49,
      "heikin": 2.35,
      "boshuAvg30d": 1153.2,
      "heikinAvg30d": 3.101
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 956,
      "ouatsu": 1847.6,
      "saikou": 8.49,
      "heikin": 2.3,
      "boshuAvg30d": 1150.7,
      "heikinAvg30d": 3.233
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 953,
      "ouatsu": 1827.51,
      "saikou": 10,
      "heikin": 2.64,
      "boshuAvg30d": 1147.4,
      "heikinAvg30d": 3.214
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 947,
      "ouatsu": 1568.337,
      "saikou": 10,
      "heikin": 3.35,
      "boshuAvg30d": 1141.3,
      "heikinAvg30d": 3.241
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1013,
      "ouatsu": 1629.804,
      "saikou": 10,
      "heikin": 3.7,
      "boshuAvg30d": 1180.3,
      "heikinAvg30d": 3.216
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1013,
      "ouatsu": 1470.886,
      "saikou": 10,
      "heikin": 3.74,
      "boshuAvg30d": 1180.3,
      "heikinAvg30d": 3.409
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1014,
      "ouatsu": 1401.964,
      "saikou": 10,
      "heikin": 4.01,
      "boshuAvg30d": 1181.1,
      "heikinAvg30d": 3.863
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1013,
      "ouatsu": 1284.166,
      "saikou": 10,
      "heikin": 4.46,
      "boshuAvg30d": 1180.0,
      "heikinAvg30d": 4.151
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1011,
      "ouatsu": 1211.641,
      "saikou": 10,
      "heikin": 4.39,
      "boshuAvg30d": 1175.7,
      "heikinAvg30d": 4.102
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1006,
      "ouatsu": 1174.458,
      "saikou": 10,
      "heikin": 4.32,
      "boshuAvg30d": 1170.5,
      "heikinAvg30d": 4.187
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1001,
      "ouatsu": 1283.331,
      "saikou": 10,
      "heikin": 3.91,
      "boshuAvg30d": 1164.1,
      "heikinAvg30d": 4.011
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1001,
      "ouatsu": 1381.167,
      "saikou": 10,
      "heikin": 4.23,
      "boshuAvg30d": 1164.1,
      "heikinAvg30d": 3.941
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1001,
      "ouatsu": 1507.24,
      "saikou": 10,
      "heikin": 4.25,
      "boshuAvg30d": 1164.2,
      "heikinAvg30d": 3.771
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1000,
      "ouatsu": 1592.273,
      "saikou": 10,
      "heikin": 3.99,
      "boshuAvg30d": 1163.2,
      "heikinAvg30d": 3.568
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 992,
      "ouatsu": 1507.35,
      "saikou": 9.91,
      "heikin": 3.69,
      "boshuAvg30d": 1155.6,
      "heikinAvg30d": 3.501
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 992,
      "ouatsu": 1514.213,
      "saikou": 9.39,
      "heikin": 3.56,
      "boshuAvg30d": 1155.1,
      "heikinAvg30d": 3.443
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 902,
      "ouatsu": 1560.47,
      "saikou": 9.3,
      "heikin": 3.3,
      "boshuAvg30d": 1076.2,
      "heikinAvg30d": 3.347
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 905,
      "ouatsu": 1814.512,
      "saikou": 9.77,
      "heikin": 3.28,
      "boshuAvg30d": 1079.2,
      "heikinAvg30d": 3.371
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 906,
      "ouatsu": 1690.339,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1083.5,
      "heikinAvg30d": 3.378
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 901,
      "ouatsu": 1616.675,
      "saikou": 9.88,
      "heikin": 3.12,
      "boshuAvg30d": 1075.3,
      "heikinAvg30d": 3.191
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 892,
      "ouatsu": 1663.448,
      "saikou": 9.68,
      "heikin": 3.29,
      "boshuAvg30d": 1066.5,
      "heikinAvg30d": 3.269
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 885,
      "ouatsu": 1637.097,
      "saikou": 9.14,
      "heikin": 2.6,
      "boshuAvg30d": 1059.4,
      "heikinAvg30d": 3.016
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
        "ouatsu": 162.358,
        "saikou": 4.05,
        "heikin": 3.98,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.882
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 164.258,
        "saikou": 3.65,
        "heikin": 3.59,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.785
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 117.908,
        "saikou": 3.96,
        "heikin": 3.89,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.765
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 135.938,
        "saikou": 3.35,
        "heikin": 3.3,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.605
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 133.878,
        "saikou": 7.58,
        "heikin": 4.31,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.984
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 208.008,
        "saikou": 4.22,
        "heikin": 3.81,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.633
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 148.918,
        "saikou": 3.91,
        "heikin": 3.36,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.896
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 129.958,
        "saikou": 9.58,
        "heikin": 4.28,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.812
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 197.208,
        "saikou": 4.29,
        "heikin": 4,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.926
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 178.258,
        "saikou": 4.29,
        "heikin": 4.07,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.651
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 143.908,
        "saikou": 4.28,
        "heikin": 3.95,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.986
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 129.958,
        "saikou": 3.96,
        "heikin": 3.71,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 4.128
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 220.018,
        "saikou": 4.61,
        "heikin": 4.23,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.882
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 221.978,
        "saikou": 4.6,
        "heikin": 4.24,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.983
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 193.908,
        "saikou": 6.9,
        "heikin": 6.48,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 3.301
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 112.958,
        "saikou": 9.36,
        "heikin": 8.2,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 3.332
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 133.908,
        "saikou": 9.44,
        "heikin": 6.88,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 3.388
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 210.398,
        "saikou": 3.9,
        "heikin": 3.2,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 2.876
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 190.918,
        "saikou": 3.9,
        "heikin": 2.52,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 2.988
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 110.99,
        "saikou": 8.9,
        "heikin": 1.1,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 2.949
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 139.478,
        "saikou": 6.2,
        "heikin": 1.41,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 3.482
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 135.708,
        "saikou": 6.8,
        "heikin": 1.46,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 2.694
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 114.908,
        "saikou": 7.58,
        "heikin": 1.73,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 3.477
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 135.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 3.331
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 185.198,
        "saikou": 2.41,
        "heikin": 1.26,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 3.196
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 156.958,
        "saikou": 2.29,
        "heikin": 1.24,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 3.259
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 139.908,
        "saikou": 7.69,
        "heikin": 2.3,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 2.879
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 190.958,
        "saikou": 3.9,
        "heikin": 2.58,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 3.319
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 190.918,
        "saikou": 3.79,
        "heikin": 3.5,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 3.42
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 161.258,
        "saikou": 6.99,
        "heikin": 5.07,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 4.093
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 163.208,
        "saikou": 7.31,
        "heikin": 7.26,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 3.187
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 115.958,
        "saikou": 8.91,
        "heikin": 8.66,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.194
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 166.208,
        "saikou": 8.95,
        "heikin": 8.51,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 5.319
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 88.968,
        "saikou": 9.8,
        "heikin": 9.05,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 5.507
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 141.208,
        "saikou": 9.1,
        "heikin": 8.99,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.795
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 90.958,
        "saikou": 8.85,
        "heikin": 8.72,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 5.054
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 115.918,
        "saikou": 7.91,
        "heikin": 7.65,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.615
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 115.958,
        "saikou": 7.73,
        "heikin": 7.57,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.769
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 166.208,
        "saikou": 7.23,
        "heikin": 7.1,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.532
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 164.258,
        "saikou": 6.63,
        "heikin": 6.49,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.541
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 114.908,
        "saikou": 5.13,
        "heikin": 4.9,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.249
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 112.958,
        "saikou": 4.13,
        "heikin": 4.06,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 3.876
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 155.118,
        "saikou": 1.12,
        "heikin": 1.09,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.097
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 125.958,
        "saikou": 3.74,
        "heikin": 1.2,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 4.128
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 147.108,
        "saikou": 1.12,
        "heikin": 1.09,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 4.291
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 115.958,
        "saikou": 9.8,
        "heikin": 1.49,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 4.008
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 157.108,
        "saikou": 1.12,
        "heikin": 1.09,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 4.282
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 115.958,
        "saikou": 7.58,
        "heikin": 1.39,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.855
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 82.178,
        "saikou": 5.49,
        "heikin": 3.64,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 5.582
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 92.848,
        "saikou": 5.88,
        "heikin": 3.75,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 5.721
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 112.726,
        "saikou": 5.83,
        "heikin": 3.94,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 5.63
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 114.686,
        "saikou": 5.83,
        "heikin": 3.9,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 5.626
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 110.74,
        "saikou": 5.83,
        "heikin": 3.79,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 5.675
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 109.39,
        "saikou": 5.91,
        "heikin": 3.98,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 5.774
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 113.186,
        "saikou": 5.83,
        "heikin": 4.01,
        "boshuAvg30d": 124.6,
        "heikinAvg30d": 5.841
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 116.616,
        "saikou": 5.98,
        "heikin": 3.89,
        "boshuAvg30d": 124.6,
        "heikinAvg30d": 5.747
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 114.686,
        "saikou": 5.83,
        "heikin": 3.97,
        "boshuAvg30d": 124.6,
        "heikinAvg30d": 5.597
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 116.616,
        "saikou": 5.83,
        "heikin": 3.92,
        "boshuAvg30d": 124.6,
        "heikinAvg30d": 5.611
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 129.186,
        "saikou": 5.83,
        "heikin": 3.91,
        "boshuAvg30d": 124.6,
        "heikinAvg30d": 5.899
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 129.186,
        "saikou": 6.4,
        "heikin": 3.79,
        "boshuAvg30d": 124.6,
        "heikinAvg30d": 5.999
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 129.186,
        "saikou": 6.49,
        "heikin": 4.65,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 6.247
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 79.686,
        "saikou": 4.93,
        "heikin": 3.47,
        "boshuAvg30d": 136.9,
        "heikinAvg30d": 6.415
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 81.186,
        "saikou": 5.97,
        "heikin": 4.23,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 6.744
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 91.686,
        "saikou": 5.69,
        "heikin": 3.39,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 6.931
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 93.186,
        "saikou": 3.75,
        "heikin": 3.47,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 7.23
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 91.686,
        "saikou": 4.32,
        "heikin": 3.04,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 7.254
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 95.182,
        "saikou": 4.57,
        "heikin": 4.31,
        "boshuAvg30d": 96.1,
        "heikinAvg30d": 7.108
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 83.182,
        "saikou": 5.66,
        "heikin": 5.66,
        "boshuAvg30d": 96.4,
        "heikinAvg30d": 7.317
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 115.327,
        "saikou": 6.49,
        "heikin": 3.93,
        "boshuAvg30d": 95.7,
        "heikinAvg30d": 7.225
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 115.327,
        "saikou": 6.73,
        "heikin": 4.18,
        "boshuAvg30d": 95.8,
        "heikinAvg30d": 7.344
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 119.182,
        "saikou": 7.77,
        "heikin": 4.89,
        "boshuAvg30d": 96.7,
        "heikinAvg30d": 7.446
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 119.182,
        "saikou": 8.77,
        "heikin": 5.58,
        "boshuAvg30d": 96.7,
        "heikinAvg30d": 7.387
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 115.19,
        "saikou": 9.86,
        "heikin": 7.76,
        "boshuAvg30d": 93.3,
        "heikinAvg30d": 7.274
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 115,
        "saikou": 9.97,
        "heikin": 7.84,
        "boshuAvg30d": 93.3,
        "heikinAvg30d": 7.132
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 119.182,
        "saikou": 5.92,
        "heikin": 4.68,
        "boshuAvg30d": 93.3,
        "heikinAvg30d": 6.815
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 119.182,
        "saikou": 3.77,
        "heikin": 3.38,
        "boshuAvg30d": 92.1,
        "heikinAvg30d": 6.597
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 83.182,
        "saikou": 6.22,
        "heikin": 5.4,
        "boshuAvg30d": 91.8,
        "heikinAvg30d": 6.764
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 83.182,
        "saikou": 4.6,
        "heikin": 4.18,
        "boshuAvg30d": 89.4,
        "heikinAvg30d": 5.82
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 71.182,
        "saikou": 6.95,
        "heikin": 5.55,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 5.889
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 71.146,
        "saikou": 10,
        "heikin": 4.8,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 4.866
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 69.15,
        "saikou": 10,
        "heikin": 4.71,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 4.874
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 67.65,
        "saikou": 10,
        "heikin": 4.9,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 4.905
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 71.146,
        "saikou": 10,
        "heikin": 4.89,
        "boshuAvg30d": 139.9,
        "heikinAvg30d": 4.753
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 69.646,
        "saikou": 9.69,
        "heikin": 4.98,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 4.461
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 69.186,
        "saikou": 5.28,
        "heikin": 3.38,
        "boshuAvg30d": 137.7,
        "heikinAvg30d": 4.496
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 67.686,
        "saikou": 4,
        "heikin": 3.26,
        "boshuAvg30d": 137.7,
        "heikinAvg30d": 4.093
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 69.186,
        "saikou": 4,
        "heikin": 3.27,
        "boshuAvg30d": 137.7,
        "heikinAvg30d": 4.133
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 69.186,
        "saikou": 4.6,
        "heikin": 3.3,
        "boshuAvg30d": 137.6,
        "heikinAvg30d": 4.399
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 77.331,
        "saikou": 4.69,
        "heikin": 3.69,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 4.39
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 66.661,
        "saikou": 6.08,
        "heikin": 3.91,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 4.552
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 66.686,
        "saikou": 6.08,
        "heikin": 3.89,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 4.787
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 89.336,
        "saikou": 6.22,
        "heikin": 5,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 4.543
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 89.336,
        "saikou": 5.83,
        "heikin": 4.48,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 4.665
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 89.336,
        "saikou": 5.83,
        "heikin": 4.2,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 4.742
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 90.686,
        "saikou": 6.2,
        "heikin": 4.17,
        "boshuAvg30d": 56.2,
        "heikinAvg30d": 4.867
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 89.186,
        "saikou": 7.77,
        "heikin": 6.11,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 5.19
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 324.702,
        "saikou": 6.4,
        "heikin": 2.84,
        "boshuAvg30d": 275.9,
        "heikinAvg30d": 3.873
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 351.734,
        "saikou": 6.13,
        "heikin": 2.33,
        "boshuAvg30d": 275.9,
        "heikinAvg30d": 3.859
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 372.204,
        "saikou": 5.84,
        "heikin": 2.24,
        "boshuAvg30d": 275.9,
        "heikinAvg30d": 3.655
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 391.051,
        "saikou": 5.99,
        "heikin": 2.46,
        "boshuAvg30d": 275.9,
        "heikinAvg30d": 3.711
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 162,
        "ouatsu": 377.089,
        "saikou": 5.99,
        "heikin": 2.48,
        "boshuAvg30d": 274.7,
        "heikinAvg30d": 3.715
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 161,
        "ouatsu": 355.071,
        "saikou": 5.88,
        "heikin": 2.04,
        "boshuAvg30d": 273.9,
        "heikinAvg30d": 3.535
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 159,
        "ouatsu": 391.8,
        "saikou": 5.99,
        "heikin": 2.4,
        "boshuAvg30d": 272.0,
        "heikinAvg30d": 3.694
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 161,
        "ouatsu": 418.398,
        "saikou": 2.9,
        "heikin": 2.15,
        "boshuAvg30d": 273.9,
        "heikinAvg30d": 3.877
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 161,
        "ouatsu": 394.203,
        "saikou": 6.12,
        "heikin": 2.62,
        "boshuAvg30d": 274.0,
        "heikinAvg30d": 3.891
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 162,
        "ouatsu": 400.306,
        "saikou": 5.99,
        "heikin": 2.35,
        "boshuAvg30d": 274.9,
        "heikinAvg30d": 4.129
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 162,
        "ouatsu": 393.603,
        "saikou": 2.17,
        "heikin": 1.75,
        "boshuAvg30d": 274.9,
        "heikinAvg30d": 4.044
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 162,
        "ouatsu": 396.245,
        "saikou": 5.73,
        "heikin": 1.78,
        "boshuAvg30d": 274.9,
        "heikinAvg30d": 4.197
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 181,
        "ouatsu": 415.445,
        "saikou": 6.42,
        "heikin": 2.42,
        "boshuAvg30d": 294.1,
        "heikinAvg30d": 4.12
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 189,
        "ouatsu": 395.818,
        "saikou": 5.25,
        "heikin": 2.18,
        "boshuAvg30d": 302.1,
        "heikinAvg30d": 4.466
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 429.824,
        "saikou": 6.31,
        "heikin": 2.34,
        "boshuAvg30d": 307.1,
        "heikinAvg30d": 3.911
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 199,
        "ouatsu": 433.41,
        "saikou": 3.95,
        "heikin": 2.26,
        "boshuAvg30d": 312.1,
        "heikinAvg30d": 3.621
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 199,
        "ouatsu": 465.604,
        "saikou": 3.79,
        "heikin": 1.72,
        "boshuAvg30d": 312.1,
        "heikinAvg30d": 3.728
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 199,
        "ouatsu": 424.025,
        "saikou": 3.89,
        "heikin": 2.34,
        "boshuAvg30d": 312.1,
        "heikinAvg30d": 3.589
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 191,
        "ouatsu": 454.634,
        "saikou": 3.1,
        "heikin": 1.22,
        "boshuAvg30d": 307.0,
        "heikinAvg30d": 3.881
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 191,
        "ouatsu": 459.759,
        "saikou": 3.05,
        "heikin": 1.36,
        "boshuAvg30d": 307.0,
        "heikinAvg30d": 3.971
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 191,
        "ouatsu": 653.651,
        "saikou": 2.95,
        "heikin": 2.15,
        "boshuAvg30d": 307.3,
        "heikinAvg30d": 3.954
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 190,
        "ouatsu": 715.51,
        "saikou": 2.79,
        "heikin": 2.12,
        "boshuAvg30d": 306.3,
        "heikinAvg30d": 3.816
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 188,
        "ouatsu": 689.591,
        "saikou": 2.3,
        "heikin": 1.7,
        "boshuAvg30d": 304.2,
        "heikinAvg30d": 3.826
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 188,
        "ouatsu": 687.691,
        "saikou": 1.96,
        "heikin": 1.61,
        "boshuAvg30d": 304.2,
        "heikinAvg30d": 3.752
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 185,
        "ouatsu": 673.656,
        "saikou": 0.96,
        "heikin": 0.64,
        "boshuAvg30d": 301.1,
        "heikinAvg30d": 3.621
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 185,
        "ouatsu": 692.143,
        "saikou": 1.12,
        "heikin": 0.76,
        "boshuAvg30d": 301.1,
        "heikinAvg30d": 3.577
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 185,
        "ouatsu": 725.692,
        "saikou": 3,
        "heikin": 1.48,
        "boshuAvg30d": 301.1,
        "heikinAvg30d": 3.68
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 185,
        "ouatsu": 669.305,
        "saikou": 2.52,
        "heikin": 1.86,
        "boshuAvg30d": 301.0,
        "heikinAvg30d": 3.781
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 184,
        "ouatsu": 630.298,
        "saikou": 3.9,
        "heikin": 1.96,
        "boshuAvg30d": 300.0,
        "heikinAvg30d": 3.648
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 183,
        "ouatsu": 346.654,
        "saikou": 6.26,
        "heikin": 2.59,
        "boshuAvg30d": 299.1,
        "heikinAvg30d": 3.342
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 181,
        "ouatsu": 336.447,
        "saikou": 5.27,
        "heikin": 2.81,
        "boshuAvg30d": 297.3,
        "heikinAvg30d": 3.211
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 181,
        "ouatsu": 259.58,
        "saikou": 6.01,
        "heikin": 2.09,
        "boshuAvg30d": 297.3,
        "heikinAvg30d": 3.248
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 181,
        "ouatsu": 239.934,
        "saikou": 2.6,
        "heikin": 1.75,
        "boshuAvg30d": 297.3,
        "heikinAvg30d": 3.348
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 181,
        "ouatsu": 241.924,
        "saikou": 5.39,
        "heikin": 2.04,
        "boshuAvg30d": 297.3,
        "heikinAvg30d": 3.479
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 181,
        "ouatsu": 241.924,
        "saikou": 5.21,
        "heikin": 2.01,
        "boshuAvg30d": 295.3,
        "heikinAvg30d": 3.342
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 181,
        "ouatsu": 240.208,
        "saikou": 6.75,
        "heikin": 2.11,
        "boshuAvg30d": 294.9,
        "heikinAvg30d": 3.308
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 184,
        "ouatsu": 342.076,
        "saikou": 6.27,
        "heikin": 2.72,
        "boshuAvg30d": 296.8,
        "heikinAvg30d": 3.457
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 184,
        "ouatsu": 328.284,
        "saikou": 5.84,
        "heikin": 2.6,
        "boshuAvg30d": 296.8,
        "heikinAvg30d": 3.243
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 184,
        "ouatsu": 342.278,
        "saikou": 5.34,
        "heikin": 2.47,
        "boshuAvg30d": 296.9,
        "heikinAvg30d": 3.35
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 184,
        "ouatsu": 395.111,
        "saikou": 4.62,
        "heikin": 2.05,
        "boshuAvg30d": 296.9,
        "heikinAvg30d": 3.145
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 182,
        "ouatsu": 345.367,
        "saikou": 5.35,
        "heikin": 1.59,
        "boshuAvg30d": 294.9,
        "heikinAvg30d": 3.089
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 182,
        "ouatsu": 355.909,
        "saikou": 5.93,
        "heikin": 1.81,
        "boshuAvg30d": 294.9,
        "heikinAvg30d": 3.305
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 182,
        "ouatsu": 351.747,
        "saikou": 5.95,
        "heikin": 1.75,
        "boshuAvg30d": 294.8,
        "heikinAvg30d": 2.974
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 182,
        "ouatsu": 592.539,
        "saikou": 2.03,
        "heikin": 1.63,
        "boshuAvg30d": 294.8,
        "heikinAvg30d": 3.055
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 182,
        "ouatsu": 419.669,
        "saikou": 3,
        "heikin": 1.9,
        "boshuAvg30d": 298.1,
        "heikinAvg30d": 2.908
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 180,
        "ouatsu": 395.44,
        "saikou": 2.45,
        "heikin": 1.75,
        "boshuAvg30d": 293.1,
        "heikinAvg30d": 3.027
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 178,
        "ouatsu": 416.962,
        "saikou": 6.23,
        "heikin": 3.26,
        "boshuAvg30d": 291.1,
        "heikinAvg30d": 3.481
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 177,
        "ouatsu": 466.699,
        "saikou": 2.68,
        "heikin": 1.68,
        "boshuAvg30d": 290.1,
        "heikinAvg30d": 3.62
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 59,
        "ouatsu": 289.206,
        "saikou": 1.84,
        "heikin": 0.88,
        "boshuAvg30d": 99.6,
        "heikinAvg30d": 1.719
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 59,
        "ouatsu": 260.123,
        "saikou": 1.27,
        "heikin": 1.15,
        "boshuAvg30d": 99.6,
        "heikinAvg30d": 1.504
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 59,
        "ouatsu": 266.159,
        "saikou": 1.28,
        "heikin": 1.14,
        "boshuAvg30d": 99.6,
        "heikinAvg30d": 1.536
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 265.883,
        "saikou": 1.67,
        "heikin": 1.19,
        "boshuAvg30d": 99.6,
        "heikinAvg30d": 1.602
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 58,
        "ouatsu": 277.083,
        "saikou": 1.36,
        "heikin": 1.14,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 1.529
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 292.166,
        "saikou": 1.67,
        "heikin": 1.26,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 1.516
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 334.928,
        "saikou": 1.93,
        "heikin": 1.19,
        "boshuAvg30d": 97.7,
        "heikinAvg30d": 1.424
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 309.64,
        "saikou": 1.67,
        "heikin": 1.09,
        "boshuAvg30d": 97.7,
        "heikinAvg30d": 1.534
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 58,
        "ouatsu": 319.577,
        "saikou": 2.2,
        "heikin": 1.06,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 1.534
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 58,
        "ouatsu": 317.647,
        "saikou": 2.15,
        "heikin": 1.13,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 1.534
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 58,
        "ouatsu": 319.637,
        "saikou": 1.95,
        "heikin": 1.06,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 1.537
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 58,
        "ouatsu": 334.295,
        "saikou": 1.95,
        "heikin": 0.93,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 1.497
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 394.017,
        "saikou": 1.36,
        "heikin": 0.98,
        "boshuAvg30d": 107.7,
        "heikinAvg30d": 1.751
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 71,
        "ouatsu": 452.107,
        "saikou": 1.9,
        "heikin": 1.01,
        "boshuAvg30d": 111.6,
        "heikinAvg30d": 1.811
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 74,
        "ouatsu": 431.902,
        "saikou": 2,
        "heikin": 1.26,
        "boshuAvg30d": 114.6,
        "heikinAvg30d": 1.972
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 76,
        "ouatsu": 414.244,
        "saikou": 2.33,
        "heikin": 1.34,
        "boshuAvg30d": 116.6,
        "heikinAvg30d": 1.989
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 76,
        "ouatsu": 450.607,
        "saikou": 1.84,
        "heikin": 1.16,
        "boshuAvg30d": 116.6,
        "heikinAvg30d": 2.101
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 76,
        "ouatsu": 448.623,
        "saikou": 1.99,
        "heikin": 1.16,
        "boshuAvg30d": 116.6,
        "heikinAvg30d": 2.253
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 81,
        "ouatsu": 337.79,
        "saikou": 2.48,
        "heikin": 1.67,
        "boshuAvg30d": 121.5,
        "heikinAvg30d": 2.689
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 81,
        "ouatsu": 394.602,
        "saikou": 2.48,
        "heikin": 1.88,
        "boshuAvg30d": 121.5,
        "heikinAvg30d": 2.731
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 81,
        "ouatsu": 397.968,
        "saikou": 3.05,
        "heikin": 2.56,
        "boshuAvg30d": 121.6,
        "heikinAvg30d": 2.968
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 81,
        "ouatsu": 397.225,
        "saikou": 3.12,
        "heikin": 2.55,
        "boshuAvg30d": 121.5,
        "heikinAvg30d": 2.968
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 80,
        "ouatsu": 366.83,
        "saikou": 2.48,
        "heikin": 2.15,
        "boshuAvg30d": 120.5,
        "heikinAvg30d": 2.828
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 79,
        "ouatsu": 325.622,
        "saikou": 2.48,
        "heikin": 1.91,
        "boshuAvg30d": 119.5,
        "heikinAvg30d": 2.87
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 75,
        "ouatsu": 176.739,
        "saikou": 2.33,
        "heikin": 0.64,
        "boshuAvg30d": 115.6,
        "heikinAvg30d": 2.826
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 75,
        "ouatsu": 186.633,
        "saikou": 2.33,
        "heikin": 0.75,
        "boshuAvg30d": 115.6,
        "heikinAvg30d": 2.806
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 75,
        "ouatsu": 263.137,
        "saikou": 9.49,
        "heikin": 2.5,
        "boshuAvg30d": 115.6,
        "heikinAvg30d": 2.711
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 74,
        "ouatsu": 314.277,
        "saikou": 3.1,
        "heikin": 2.37,
        "boshuAvg30d": 114.7,
        "heikinAvg30d": 2.741
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 74,
        "ouatsu": 355.234,
        "saikou": 3.82,
        "heikin": 2.56,
        "boshuAvg30d": 114.6,
        "heikinAvg30d": 2.943
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 74,
        "ouatsu": 314.023,
        "saikou": 2.39,
        "heikin": 1.42,
        "boshuAvg30d": 114.6,
        "heikinAvg30d": 2.876
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 72,
        "ouatsu": 345.721,
        "saikou": 2.73,
        "heikin": 1.87,
        "boshuAvg30d": 112.7,
        "heikinAvg30d": 2.614
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 72,
        "ouatsu": 345.321,
        "saikou": 2.48,
        "heikin": 2.22,
        "boshuAvg30d": 112.7,
        "heikinAvg30d": 2.778
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 72,
        "ouatsu": 300.572,
        "saikou": 9.49,
        "heikin": 2.38,
        "boshuAvg30d": 112.7,
        "heikinAvg30d": 2.713
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 72,
        "ouatsu": 302.058,
        "saikou": 3.45,
        "heikin": 2.26,
        "boshuAvg30d": 112.7,
        "heikinAvg30d": 2.77
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 72,
        "ouatsu": 298.062,
        "saikou": 2.47,
        "heikin": 2.22,
        "boshuAvg30d": 112.7,
        "heikinAvg30d": 2.586
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 71,
        "ouatsu": 298.475,
        "saikou": 2.48,
        "heikin": 2.06,
        "boshuAvg30d": 111.9,
        "heikinAvg30d": 2.636
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 69,
        "ouatsu": 305.841,
        "saikou": 2.3,
        "heikin": 1.66,
        "boshuAvg30d": 109.9,
        "heikinAvg30d": 2.261
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 69,
        "ouatsu": 307.839,
        "saikou": 2,
        "heikin": 1.6,
        "boshuAvg30d": 109.9,
        "heikinAvg30d": 2.156
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 69,
        "ouatsu": 331.426,
        "saikou": 1.5,
        "heikin": 1.32,
        "boshuAvg30d": 109.9,
        "heikinAvg30d": 1.892
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 69,
        "ouatsu": 349.054,
        "saikou": 1.94,
        "heikin": 1.31,
        "boshuAvg30d": 109.9,
        "heikinAvg30d": 1.733
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 69,
        "ouatsu": 339.149,
        "saikou": 1.44,
        "heikin": 0.97,
        "boshuAvg30d": 109.9,
        "heikinAvg30d": 1.662
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 69,
        "ouatsu": 353.675,
        "saikou": 1.44,
        "heikin": 1.2,
        "boshuAvg30d": 109.9,
        "heikinAvg30d": 1.717
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 70,
        "ouatsu": 337.376,
        "saikou": 1.4,
        "heikin": 0.96,
        "boshuAvg30d": 110.7,
        "heikinAvg30d": 1.585
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 71,
        "ouatsu": 345.394,
        "saikou": 1.37,
        "heikin": 1.07,
        "boshuAvg30d": 111.7,
        "heikinAvg30d": 1.835
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 71,
        "ouatsu": 315.592,
        "saikou": 1.37,
        "heikin": 0.88,
        "boshuAvg30d": 111.7,
        "heikinAvg30d": 1.838
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 284.862,
        "saikou": 1.37,
        "heikin": 1,
        "boshuAvg30d": 110.7,
        "heikinAvg30d": 1.862
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 269.109,
        "saikou": 1.36,
        "heikin": 0.93,
        "boshuAvg30d": 109.7,
        "heikinAvg30d": 1.748
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 314.385,
        "saikou": 2.88,
        "heikin": 1.34,
        "boshuAvg30d": 106.7,
        "heikinAvg30d": 1.901
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 1.079
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 0.77,
        "heikin": 0.77,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 1.034
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 20.93,
        "saikou": 2.86,
        "heikin": 2.86,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 1.102
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 0.4,
        "heikin": 0.4,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 1.042
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.86,
        "heikin": 2.73,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 1.022
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.5,
        "heikin": 0.58,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 1.125
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.09,
        "heikin": 1.09,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 1.286
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.95,
        "heikin": 1.17,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 1.634
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.2,
        "heikin": 1.67,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 1.41
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.63,
        "heikin": 2.63,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 1.363
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 3.09,
        "heikin": 2.89,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 1.65
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.91,
        "heikin": 2.85,
        "boshuAvg30d": 56.5,
        "heikinAvg30d": 1.72
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 22.928,
        "saikou": 2.91,
        "heikin": 2.79,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.821
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 22.928,
        "saikou": 3.31,
        "heikin": 3.31,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.681
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 3.17,
        "heikin": 3.17,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.634
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 22.928,
        "saikou": 3.17,
        "heikin": 3.17,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 1.593
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 22.928,
        "saikou": 3.83,
        "heikin": 3.83,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.751
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 22.928,
        "saikou": 5.1,
        "heikin": 5.1,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.452
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 38.56,
        "saikou": 9.98,
        "heikin": 8.93,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.944
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 47.928,
        "saikou": 9.28,
        "heikin": 8.46,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 3.358
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 5.24,
        "heikin": 5.24,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 4.374
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 5.24,
        "heikin": 5.24,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 4.527
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 4.75,
        "heikin": 4.75,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 3.551
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 4.75,
        "heikin": 4.75,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 3.361
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 12.606,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 2.535
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 16.282,
        "saikou": 0.53,
        "heikin": 0.53,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 2.178
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 8.858,
        "saikou": 5.85,
        "heikin": 5.44,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 3.465
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.72,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 2.967
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 7.85,
        "heikin": 7.85,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 3.119
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 9.31,
        "heikin": 9.31,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 2.881
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 82.928,
        "saikou": 10,
        "heikin": 9.68,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 3.833
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 82.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 4.684
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 82.928,
        "saikou": 10,
        "heikin": 9.54,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 3.7
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 47.928,
        "saikou": 10,
        "heikin": 9.58,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 3.378
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 47.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 2.959
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 47.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 3.738
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 8.68,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 2.964
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 3.176
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 2.916
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 5.1,
        "heikin": 5.1,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 2.521
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 22.928,
        "saikou": 4.46,
        "heikin": 4.46,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.258
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 3.68,
        "heikin": 3.68,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.742
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 18.544,
        "saikou": 4.46,
        "heikin": 4.46,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.824
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 16.636,
        "saikou": 4.46,
        "heikin": 4.46,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.86
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 3.21,
        "heikin": 3.21,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.383
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 3.02,
        "heikin": 3.02,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.932
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 21.234,
        "saikou": 3.11,
        "heikin": 3.11,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.598
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 6.496,
        "saikou": 2.45,
        "heikin": 1.62,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.32
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 133.029,
        "saikou": 1.68,
        "heikin": 1.06,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 1.385
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 175.686,
        "saikou": 1.44,
        "heikin": 0.72,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 1.127
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 169.134,
        "saikou": 1.4,
        "heikin": 0.69,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 1.055
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 152.116,
        "saikou": 1.4,
        "heikin": 0.7,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 1.016
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 160.032,
        "saikou": 1.45,
        "heikin": 0.74,
        "boshuAvg30d": 127.5,
        "heikinAvg30d": 0.971
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 125.709,
        "saikou": 1.99,
        "heikin": 1.22,
        "boshuAvg30d": 127.4,
        "heikinAvg30d": 1.198
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 119.322,
        "saikou": 1.94,
        "heikin": 1.33,
        "boshuAvg30d": 127.5,
        "heikinAvg30d": 1.337
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 99.699,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 127.5,
        "heikinAvg30d": 1.558
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 99.699,
        "saikou": 1.99,
        "heikin": 1.61,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 1.464
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 99.699,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 1.576
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 97.701,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 1.535
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 84.699,
        "saikou": 1.9,
        "heikin": 1.57,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 1.372
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 99.699,
        "saikou": 1.64,
        "heikin": 1.53,
        "boshuAvg30d": 139.8,
        "heikinAvg30d": 1.545
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 99.699,
        "saikou": 1.95,
        "heikin": 1.54,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 1.5
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 121.191,
        "saikou": 2,
        "heikin": 1.57,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 1.579
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 121.191,
        "saikou": 2.2,
        "heikin": 1.6,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 1.637
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 97.58,
        "saikou": 1.78,
        "heikin": 1.77,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 1.697
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 129.81,
        "saikou": 1.54,
        "heikin": 0.45,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 2.114
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 115.44,
        "saikou": 2.6,
        "heikin": 2.54,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 2.272
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 144.871,
        "saikou": 2.82,
        "heikin": 2.21,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 2.24
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 142.886,
        "saikou": 3,
        "heikin": 1.85,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 2.492
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 141.443,
        "saikou": 3,
        "heikin": 1.91,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 2.61
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 168.482,
        "saikou": 3,
        "heikin": 1.64,
        "boshuAvg30d": 149.8,
        "heikinAvg30d": 2.706
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 167.039,
        "saikou": 3,
        "heikin": 1.73,
        "boshuAvg30d": 149.8,
        "heikinAvg30d": 2.485
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 226.216,
        "saikou": 2.39,
        "heikin": 1.02,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 2.293
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 231.655,
        "saikou": 2.39,
        "heikin": 0.93,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 2.389
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 98.165,
        "saikou": 5.95,
        "heikin": 2.89,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 2.537
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 99.608,
        "saikou": 2.39,
        "heikin": 2.27,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 2.39
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 99.608,
        "saikou": 3,
        "heikin": 2.35,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 2.288
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 99.608,
        "saikou": 2.59,
        "heikin": 2.11,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 2.155
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 99.608,
        "saikou": 3.95,
        "heikin": 2.82,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 2.317
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 97.738,
        "saikou": 2.7,
        "heikin": 2.57,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 2.567
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 97.738,
        "saikou": 3.95,
        "heikin": 2.84,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 2.454
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 76.752,
        "saikou": 2.38,
        "heikin": 2.02,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 2.247
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 76.752,
        "saikou": 2.5,
        "heikin": 2.11,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 2.264
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 93.622,
        "saikou": 3.1,
        "heikin": 2.57,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 2.519
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 91.662,
        "saikou": 2.2,
        "heikin": 1.88,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 2.035
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 91.662,
        "saikou": 2.02,
        "heikin": 1.93,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 2.066
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 95.741,
        "saikou": 1.94,
        "heikin": 1.66,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.967
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 95.741,
        "saikou": 1.99,
        "heikin": 1.7,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 1.911
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 93.756,
        "saikou": 1.59,
        "heikin": 1.59,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 1.838
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 93.756,
        "saikou": 1.99,
        "heikin": 1.71,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 1.865
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 95.741,
        "saikou": 1.57,
        "heikin": 1.55,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 1.82
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 95.741,
        "saikou": 1.99,
        "heikin": 1.72,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 1.886
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 94.298,
        "saikou": 1.88,
        "heikin": 1.64,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 1.895
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 93.743,
        "saikou": 1.94,
        "heikin": 1.58,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 1.832
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 95.741,
        "saikou": 1.94,
        "heikin": 1.6,
        "boshuAvg30d": 139.7,
        "heikinAvg30d": 1.5
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 95.741,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 137.7,
        "heikinAvg30d": 1.617
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 184.281,
        "saikou": 3.14,
        "heikin": 2.31,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.169
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 184.281,
        "saikou": 4.18,
        "heikin": 3.15,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.279
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 186.265,
        "saikou": 3.23,
        "heikin": 2.36,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.108
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 188.255,
        "saikou": 3.23,
        "heikin": 2.26,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 1.944
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 188.255,
        "saikou": 3.23,
        "heikin": 2.25,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 1.932
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 188.071,
        "saikou": 3.14,
        "heikin": 2.31,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.135
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 204.93,
        "saikou": 4.5,
        "heikin": 3.4,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.309
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 204.93,
        "saikou": 4.5,
        "heikin": 3.4,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.659
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 204.93,
        "saikou": 5.04,
        "heikin": 3.83,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.92
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 204.93,
        "saikou": 6.06,
        "heikin": 4.51,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 3.306
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 204.93,
        "saikou": 6.53,
        "heikin": 4.99,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 3.212
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 204.93,
        "saikou": 6.35,
        "heikin": 4.85,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 3.171
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 204.93,
        "saikou": 6.35,
        "heikin": 4.76,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 3.243
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 204.93,
        "saikou": 6.74,
        "heikin": 4.29,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 2.735
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 204.93,
        "saikou": 3.23,
        "heikin": 2.41,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.801
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 218.054,
        "saikou": 2.06,
        "heikin": 1.8,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 1.547
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 202.095,
        "saikou": 2.29,
        "heikin": 1.62,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 1.675
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 202.187,
        "saikou": 1.56,
        "heikin": 1.4,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 1.785
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 184.303,
        "saikou": 2.29,
        "heikin": 1.52,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 1.991
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 180.481,
        "saikou": 2.29,
        "heikin": 1.58,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 1.999
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 180.481,
        "saikou": 2.7,
        "heikin": 1.57,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 1.791
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 193.915,
        "saikou": 2.7,
        "heikin": 1.61,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 1.72
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 193.915,
        "saikou": 2.29,
        "heikin": 1.52,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 1.738
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 193.915,
        "saikou": 2.29,
        "heikin": 1.55,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 1.77
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 191.917,
        "saikou": 1.69,
        "heikin": 0.94,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.609
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 193.915,
        "saikou": 1.72,
        "heikin": 1.3,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.695
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 193.915,
        "saikou": 2.29,
        "heikin": 1.5,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.885
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 180.481,
        "saikou": 2.7,
        "heikin": 1.57,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 1.863
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 180.481,
        "saikou": 2.7,
        "heikin": 1.61,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 1.916
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 193.823,
        "saikou": 2.29,
        "heikin": 1.57,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.018
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 181.909,
        "saikou": 2.7,
        "heikin": 1.63,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 2.29
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 190.425,
        "saikou": 3.04,
        "heikin": 2.42,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 2.49
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 206.246,
        "saikou": 4.15,
        "heikin": 3.08,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 2.952
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 206.246,
        "saikou": 7.55,
        "heikin": 5.42,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 3.865
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 66.29,
        "saikou": 2.5,
        "heikin": 2.27,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 4.308
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 66.29,
        "saikou": 3.23,
        "heikin": 2.3,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 4.326
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 65.3,
        "saikou": 7.99,
        "heikin": 2.44,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 4.416
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 164.561,
        "saikou": 6.99,
        "heikin": 5.53,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 4.368
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 203.94,
        "saikou": 8.56,
        "heikin": 6.79,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 4.023
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 205.93,
        "saikou": 8.3,
        "heikin": 6.34,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 3.569
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 205.93,
        "saikou": 8.06,
        "heikin": 6.19,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.836
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 205.93,
        "saikou": 7.27,
        "heikin": 5.57,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 3.678
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 205.93,
        "saikou": 7.54,
        "heikin": 5.78,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 3.966
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 205.93,
        "saikou": 7.01,
        "heikin": 5.37,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 3.64
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 205.93,
        "saikou": 6.53,
        "heikin": 4.99,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 3.519
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 205.93,
        "saikou": 5.7,
        "heikin": 4.34,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 2.967
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 204.13,
        "saikou": 5.7,
        "heikin": 4.34,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 3.032
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 204.13,
        "saikou": 3.14,
        "heikin": 2.29,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 2.116
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.48,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.865
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.48,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.826
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.793
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.789
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 148.843,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.789
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 148.843,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.801
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 132.843,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.807
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 121.3,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.849
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 86.343,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.876
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.911
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.882
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.844
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 49.343,
        "saikou": 1.6,
        "heikin": 1.26,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.904
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 62.343,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.843
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 62.343,
        "saikou": 1.6,
        "heikin": 1.26,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.793
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 87.343,
        "saikou": 1.6,
        "heikin": 1.45,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 0.809
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 1.09,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 0.75
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 1.12,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 0.802
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 171.843,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.057
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 137.3,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.035
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 137.3,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.043
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 137.3,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 0.978
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 137.3,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.034
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 160.3,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.05
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 126.3,
        "saikou": 1.6,
        "heikin": 1.42,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.019
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 126.3,
        "saikou": 1.6,
        "heikin": 1.52,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.037
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 137.843,
        "saikou": 1.6,
        "heikin": 1.42,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.063
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 137.843,
        "saikou": 1.6,
        "heikin": 1.42,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.061
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 132.843,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.083
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 1.11,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.024
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 114.843,
        "saikou": 1.7,
        "heikin": 1.18,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.069
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 114.843,
        "saikou": 1.7,
        "heikin": 0.94,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.127
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 49.343,
        "saikou": 2,
        "heikin": 1.69,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.24
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 49.343,
        "saikou": 2,
        "heikin": 1.69,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 1.331
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 37.8,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.474
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 37.8,
        "saikou": 2.85,
        "heikin": 1.73,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.437
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 37.8,
        "saikou": 2.4,
        "heikin": 1.68,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.427
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 37.8,
        "saikou": 1.95,
        "heikin": 1.64,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.469
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 37.8,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.352
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.379
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.362
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.352
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 83.343,
        "saikou": 1.6,
        "heikin": 1.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.936
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 83.343,
        "saikou": 1.7,
        "heikin": 0.68,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.922
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 135.843,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.919
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 135.843,
        "saikou": 1.6,
        "heikin": 0.53,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.907
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 135.843,
        "saikou": 1.6,
        "heikin": 0.53,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.957
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 135.843,
        "saikou": 1.6,
        "heikin": 0.53,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.95
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 187.603,
        "saikou": 10,
        "heikin": 6.73,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.777
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 245.527,
        "saikou": 9.38,
        "heikin": 7.04,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.381
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 243.637,
        "saikou": 9.07,
        "heikin": 6.29,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.296
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 184.635,
        "saikou": 9.29,
        "heikin": 6.2,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.175
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 184.635,
        "saikou": 9.29,
        "heikin": 6.21,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.142
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 187.555,
        "saikou": 9.37,
        "heikin": 6.26,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.404
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 236.27,
        "saikou": 9.73,
        "heikin": 6.78,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 4.594
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 236.522,
        "saikou": 9.78,
        "heikin": 7.12,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.089
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 236.27,
        "saikou": 10,
        "heikin": 7.71,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.328
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 205.27,
        "saikou": 9.34,
        "heikin": 6.45,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.696
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 264.27,
        "saikou": 9.44,
        "heikin": 7.52,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.888
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 266.246,
        "saikou": 9.68,
        "heikin": 7.88,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.799
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 264.27,
        "saikou": 9.82,
        "heikin": 7.08,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 5.438
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 154.27,
        "saikou": 9.81,
        "heikin": 5.24,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 4.734
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 264.27,
        "saikou": 10,
        "heikin": 7.24,
        "boshuAvg30d": 174.3,
        "heikinAvg30d": 3.599
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 202.27,
        "saikou": 10,
        "heikin": 6.52,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 3.371
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 205.27,
        "saikou": 10,
        "heikin": 6.54,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 3.343
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 205.27,
        "saikou": 10,
        "heikin": 6.53,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 3.475
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 206.882,
        "saikou": 10,
        "heikin": 6.38,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.502
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 206.882,
        "saikou": 10,
        "heikin": 6.3,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.408
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 175.986,
        "saikou": 8.97,
        "heikin": 5.82,
        "boshuAvg30d": 180.3,
        "heikinAvg30d": 3.334
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 218.122,
        "saikou": 7.51,
        "heikin": 5.65,
        "boshuAvg30d": 181.2,
        "heikinAvg30d": 3.276
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 232.06,
        "saikou": 4.09,
        "heikin": 3.04,
        "boshuAvg30d": 181.3,
        "heikinAvg30d": 3.174
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 195.183,
        "saikou": 3.9,
        "heikin": 2.75,
        "boshuAvg30d": 181.3,
        "heikinAvg30d": 3.141
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 210.618,
        "saikou": 2.72,
        "heikin": 2.17,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 2.868
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 210.502,
        "saikou": 2.87,
        "heikin": 2.28,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 3.016
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 224.367,
        "saikou": 4.87,
        "heikin": 3.78,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 3.435
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 132.018,
        "saikou": 8.49,
        "heikin": 4.24,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 4.073
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 132.018,
        "saikou": 10,
        "heikin": 4.9,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.945
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 232.018,
        "saikou": 10,
        "heikin": 7.16,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 4.554
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 233.958,
        "saikou": 10,
        "heikin": 6.65,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 4.927
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 192.947,
        "saikou": 10,
        "heikin": 6.87,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 5.255
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 189.845,
        "saikou": 10,
        "heikin": 6.9,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 6.369
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 203.297,
        "saikou": 10,
        "heikin": 7.21,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 6.92
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 230.531,
        "saikou": 10,
        "heikin": 7.63,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 7.095
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 229.531,
        "saikou": 10,
        "heikin": 7.6,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 7.15
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 232.62,
        "saikou": 10,
        "heikin": 7.74,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 7.138
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 244.449,
        "saikou": 10,
        "heikin": 7.51,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 7.073
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 256.733,
        "saikou": 10,
        "heikin": 7.45,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.689
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 240.722,
        "saikou": 10,
        "heikin": 7.43,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.2
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 258.638,
        "saikou": 9.91,
        "heikin": 7.69,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.412
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 253.053,
        "saikou": 9.39,
        "heikin": 7.16,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.057
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 245.985,
        "saikou": 9.3,
        "heikin": 7.37,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.032
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 259.635,
        "saikou": 9.77,
        "heikin": 7.13,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 5.987
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 259.635,
        "saikou": 10,
        "heikin": 7.24,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 6.201
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 272.635,
        "saikou": 9.88,
        "heikin": 7.2,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 5.876
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 272.635,
        "saikou": 9.68,
        "heikin": 6.67,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 5.726
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 208.659,
        "saikou": 9.14,
        "heikin": 6.08,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 4.907
      }
    ]
  }
};
