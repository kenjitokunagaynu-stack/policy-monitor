// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/29〜2026/10/28）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-29",
  "fetchedAt": "2026-10-29",
  "avgWindowLabel": "過去30日平均（2026/09/29〜2026/10/28）",
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
      "boshu": 934,
      "ouatsu": 1399.932,
      "saikou": 9.88,
      "heikin": 2.73,
      "boshuAvg30d": 1052.6,
      "heikinAvg30d": 3.077
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 934,
      "ouatsu": 1504.583,
      "saikou": 9.25,
      "heikin": 2.7,
      "boshuAvg30d": 1052.6,
      "heikinAvg30d": 2.969
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 934,
      "ouatsu": 1588.296,
      "saikou": 9.28,
      "heikin": 2.53,
      "boshuAvg30d": 1052.6,
      "heikinAvg30d": 2.869
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 934,
      "ouatsu": 1618.214,
      "saikou": 9.2,
      "heikin": 2.41,
      "boshuAvg30d": 1052.6,
      "heikinAvg30d": 2.856
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 931,
      "ouatsu": 1634.637,
      "saikou": 9.28,
      "heikin": 2.38,
      "boshuAvg30d": 1049.4,
      "heikinAvg30d": 2.891
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 930,
      "ouatsu": 1522.627,
      "saikou": 9.78,
      "heikin": 2.61,
      "boshuAvg30d": 1048.4,
      "heikinAvg30d": 2.893
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 927,
      "ouatsu": 1760.691,
      "saikou": 10,
      "heikin": 2.92,
      "boshuAvg30d": 1057.1,
      "heikinAvg30d": 3.101
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 929,
      "ouatsu": 1661.359,
      "saikou": 9.79,
      "heikin": 3.33,
      "boshuAvg30d": 1059.0,
      "heikinAvg30d": 3.3
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 931,
      "ouatsu": 1684.611,
      "saikou": 9.94,
      "heikin": 3,
      "boshuAvg30d": 1061.1,
      "heikinAvg30d": 3.399
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 932,
      "ouatsu": 1783.086,
      "saikou": 9.94,
      "heikin": 3.4,
      "boshuAvg30d": 1062.0,
      "heikinAvg30d": 3.607
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 932,
      "ouatsu": 1877.465,
      "saikou": 9.94,
      "heikin": 3.38,
      "boshuAvg30d": 1062.0,
      "heikinAvg30d": 3.645
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 932,
      "ouatsu": 1795.298,
      "saikou": 9.94,
      "heikin": 3.23,
      "boshuAvg30d": 1062.0,
      "heikinAvg30d": 3.634
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 992,
      "ouatsu": 1677.854,
      "saikou": 10,
      "heikin": 3.5,
      "boshuAvg30d": 1122.4,
      "heikinAvg30d": 3.634
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1015,
      "ouatsu": 1734.029,
      "saikou": 10,
      "heikin": 3.65,
      "boshuAvg30d": 1145.3,
      "heikinAvg30d": 3.506
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1036,
      "ouatsu": 1645.591,
      "saikou": 10,
      "heikin": 3.2,
      "boshuAvg30d": 1166.4,
      "heikinAvg30d": 3.074
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1063,
      "ouatsu": 1712.691,
      "saikou": 10,
      "heikin": 2.83,
      "boshuAvg30d": 1183.5,
      "heikinAvg30d": 2.845
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1063,
      "ouatsu": 1792.596,
      "saikou": 10,
      "heikin": 2.44,
      "boshuAvg30d": 1183.9,
      "heikinAvg30d": 2.897
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1063,
      "ouatsu": 1738.868,
      "saikou": 10,
      "heikin": 2.23,
      "boshuAvg30d": 1183.9,
      "heikinAvg30d": 2.839
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 995,
      "ouatsu": 1686.413,
      "saikou": 8.1,
      "heikin": 2.38,
      "boshuAvg30d": 1145.0,
      "heikinAvg30d": 3.06
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 998,
      "ouatsu": 1810.448,
      "saikou": 9.44,
      "heikin": 2.25,
      "boshuAvg30d": 1148.1,
      "heikinAvg30d": 3.108
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1012,
      "ouatsu": 1919.21,
      "saikou": 10,
      "heikin": 1.9,
      "boshuAvg30d": 1150.8,
      "heikinAvg30d": 3.155
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1012,
      "ouatsu": 1933.616,
      "saikou": 10,
      "heikin": 1.81,
      "boshuAvg30d": 1150.8,
      "heikinAvg30d": 3.09
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1009,
      "ouatsu": 1812.87,
      "saikou": 10,
      "heikin": 1.74,
      "boshuAvg30d": 1147.8,
      "heikinAvg30d": 3.095
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1008,
      "ouatsu": 1795.338,
      "saikou": 10,
      "heikin": 1.86,
      "boshuAvg30d": 1146.8,
      "heikinAvg30d": 3.031
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 988,
      "ouatsu": 1832.029,
      "saikou": 10,
      "heikin": 1.7,
      "boshuAvg30d": 1127.3,
      "heikinAvg30d": 2.866
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 988,
      "ouatsu": 1775.305,
      "saikou": 10,
      "heikin": 1.79,
      "boshuAvg30d": 1127.3,
      "heikinAvg30d": 2.87
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 988,
      "ouatsu": 1659.297,
      "saikou": 7.87,
      "heikin": 2.91,
      "boshuAvg30d": 1127.3,
      "heikinAvg30d": 3.019
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 976,
      "ouatsu": 1654.255,
      "saikou": 10,
      "heikin": 2.88,
      "boshuAvg30d": 1125.0,
      "heikinAvg30d": 3.128
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 973,
      "ouatsu": 1797.924,
      "saikou": 10,
      "heikin": 2.96,
      "boshuAvg30d": 1121.9,
      "heikinAvg30d": 3.114
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 967,
      "ouatsu": 1445.863,
      "saikou": 10,
      "heikin": 3.46,
      "boshuAvg30d": 1115.8,
      "heikinAvg30d": 3.2
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1033,
      "ouatsu": 1460.309,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1158.3,
      "heikinAvg30d": 3.177
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1033,
      "ouatsu": 1489.694,
      "saikou": 10,
      "heikin": 4.06,
      "boshuAvg30d": 1158.0,
      "heikinAvg30d": 3.364
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1025,
      "ouatsu": 1454.673,
      "saikou": 10,
      "heikin": 3.93,
      "boshuAvg30d": 1158.9,
      "heikinAvg30d": 3.811
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1024,
      "ouatsu": 1402.369,
      "saikou": 10,
      "heikin": 4.31,
      "boshuAvg30d": 1157.8,
      "heikinAvg30d": 4.14
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1022,
      "ouatsu": 1477.433,
      "saikou": 10,
      "heikin": 4.24,
      "boshuAvg30d": 1153.7,
      "heikinAvg30d": 4.072
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1017,
      "ouatsu": 1535.389,
      "saikou": 10,
      "heikin": 4.28,
      "boshuAvg30d": 1148.4,
      "heikinAvg30d": 4.151
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1012,
      "ouatsu": 1567.829,
      "saikou": 10,
      "heikin": 4.12,
      "boshuAvg30d": 1142.2,
      "heikinAvg30d": 3.975
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1012,
      "ouatsu": 1604.535,
      "saikou": 10,
      "heikin": 3.87,
      "boshuAvg30d": 1142.2,
      "heikinAvg30d": 3.931
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1012,
      "ouatsu": 1563.263,
      "saikou": 10,
      "heikin": 3.55,
      "boshuAvg30d": 1142.3,
      "heikinAvg30d": 3.733
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1021,
      "ouatsu": 1558.654,
      "saikou": 10,
      "heikin": 3.26,
      "boshuAvg30d": 1141.3,
      "heikinAvg30d": 3.525
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1013,
      "ouatsu": 1607.991,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1133.5,
      "heikinAvg30d": 3.462
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1013,
      "ouatsu": 1556.288,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1133.2,
      "heikinAvg30d": 3.381
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 923,
      "ouatsu": 1611.493,
      "saikou": 10,
      "heikin": 3.22,
      "boshuAvg30d": 1054.5,
      "heikinAvg30d": 3.298
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 926,
      "ouatsu": 1530.204,
      "saikou": 8.96,
      "heikin": 2.47,
      "boshuAvg30d": 1057.5,
      "heikinAvg30d": 3.352
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 927,
      "ouatsu": 1430.524,
      "saikou": 9.09,
      "heikin": 2.65,
      "boshuAvg30d": 1061.8,
      "heikinAvg30d": 3.32
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 922,
      "ouatsu": 1436.636,
      "saikou": 8.96,
      "heikin": 2.71,
      "boshuAvg30d": 1053.7,
      "heikinAvg30d": 3.185
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 913,
      "ouatsu": 1375.548,
      "saikou": 8.88,
      "heikin": 2.33,
      "boshuAvg30d": 1045.2,
      "heikinAvg30d": 3.264
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 896,
      "ouatsu": 1558.679,
      "saikou": 9.98,
      "heikin": 2.88,
      "boshuAvg30d": 1037.8,
      "heikinAvg30d": 2.98
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
        "saikou": 3.68,
        "heikin": 1.24,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.004
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 125.958,
        "saikou": 6.17,
        "heikin": 2.09,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 3.906
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 176.208,
        "saikou": 1.63,
        "heikin": 1.39,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 3.858
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 115.958,
        "saikou": 7.69,
        "heikin": 1.67,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 3.724
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 166.208,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.118
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 115.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 3.744
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 244.208,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.001
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 191.968,
        "saikou": 3.89,
        "heikin": 2.48,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 3.921
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 208.408,
        "saikou": 3.89,
        "heikin": 2.47,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.048
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 191.968,
        "saikou": 3.98,
        "heikin": 3.31,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 3.759
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 244.208,
        "saikou": 3.5,
        "heikin": 3.26,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.118
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 242.258,
        "saikou": 3.53,
        "heikin": 3.3,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.243
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 192.908,
        "saikou": 3.89,
        "heikin": 2.52,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 4.024
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 216.108,
        "saikou": 3.89,
        "heikin": 2.7,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 4.134
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 114.908,
        "saikou": 8.67,
        "heikin": 2.82,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.498
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 209.258,
        "saikou": 1.64,
        "heikin": 1.37,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.623
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 114.908,
        "saikou": 9.44,
        "heikin": 3.44,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.626
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 200.258,
        "saikou": 7.69,
        "heikin": 2.22,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 2.989
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 151.958,
        "saikou": 7.58,
        "heikin": 2.84,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 3.073
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 161.258,
        "saikou": 9.44,
        "heikin": 2.42,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 3.011
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 149.968,
        "saikou": 9.34,
        "heikin": 3.2,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 3.527
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 151.958,
        "saikou": 7.69,
        "heikin": 2.81,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 2.751
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 199.258,
        "saikou": 7.58,
        "heikin": 1.94,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 3.592
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 183.458,
        "saikou": 7.58,
        "heikin": 2.31,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 3.378
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 114.908,
        "saikou": 9.44,
        "heikin": 3.54,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.282
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 149.968,
        "saikou": 9.44,
        "heikin": 2.79,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.345
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 163.908,
        "saikou": 7.69,
        "heikin": 2.57,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 2.995
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 122.958,
        "saikou": 2.29,
        "heikin": 1.69,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 3.402
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 239.218,
        "saikou": 3.89,
        "heikin": 2.19,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.524
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 205.958,
        "saikou": 4.24,
        "heikin": 4.02,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 4.256
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 129.908,
        "saikou": 4.88,
        "heikin": 4.79,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 3.375
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 228.418,
        "saikou": 8.79,
        "heikin": 8.29,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.352
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 247.418,
        "saikou": 8.41,
        "heikin": 7.88,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 5.521
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 193.418,
        "saikou": 9.19,
        "heikin": 7.97,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 5.76
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 90.958,
        "saikou": 8.85,
        "heikin": 8.61,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 5.034
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 131.468,
        "saikou": 9.05,
        "heikin": 8.54,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 5.311
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 117.908,
        "saikou": 8.12,
        "heikin": 7.69,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.929
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 158.458,
        "saikou": 7.24,
        "heikin": 6.76,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 5.21
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 132.908,
        "saikou": 7.18,
        "heikin": 6.89,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.821
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 130.958,
        "saikou": 7.31,
        "heikin": 7.04,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.724
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 178.208,
        "saikou": 5.31,
        "heikin": 4.73,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 4.472
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 112.958,
        "saikou": 5.15,
        "heikin": 5.05,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 3.982
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 164.218,
        "saikou": 5.01,
        "heikin": 4.21,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 4.106
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 145.658,
        "saikou": 4.31,
        "heikin": 3.99,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 4.214
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 115.958,
        "saikou": 7.69,
        "heikin": 5.46,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 4.313
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 164.258,
        "saikou": 4.75,
        "heikin": 3.96,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 4.073
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 115.958,
        "saikou": 4.14,
        "heikin": 3.7,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 4.296
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 174.258,
        "saikou": 3.78,
        "heikin": 3.27,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.869
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 68.848,
        "saikou": 7.77,
        "heikin": 6.26,
        "boshuAvg30d": 110.3,
        "heikinAvg30d": 5.447
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 68.848,
        "saikou": 8.63,
        "heikin": 6.96,
        "boshuAvg30d": 110.3,
        "heikinAvg30d": 5.576
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 88.726,
        "saikou": 8.51,
        "heikin": 6.87,
        "boshuAvg30d": 110.3,
        "heikinAvg30d": 5.441
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 90.686,
        "saikou": 7.77,
        "heikin": 6.26,
        "boshuAvg30d": 110.3,
        "heikinAvg30d": 5.438
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 86.74,
        "saikou": 7.77,
        "heikin": 6.25,
        "boshuAvg30d": 110.3,
        "heikinAvg30d": 5.479
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 86.74,
        "saikou": 7.77,
        "heikin": 6.26,
        "boshuAvg30d": 110.3,
        "heikinAvg30d": 5.583
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 89.186,
        "saikou": 6.47,
        "heikin": 5.12,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 5.665
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 90.686,
        "saikou": 6.47,
        "heikin": 5.01,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 5.574
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 94.684,
        "saikou": 6.29,
        "heikin": 4.83,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 5.377
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 94.684,
        "saikou": 6.17,
        "heikin": 4.48,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 5.396
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 109.184,
        "saikou": 5.98,
        "heikin": 4.36,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 5.688
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 109.184,
        "saikou": 5.98,
        "heikin": 4.48,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 5.774
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 109.184,
        "saikou": 7,
        "heikin": 5.17,
        "boshuAvg30d": 127.9,
        "heikinAvg30d": 6.051
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 107.684,
        "saikou": 7,
        "heikin": 5.21,
        "boshuAvg30d": 132.9,
        "heikinAvg30d": 6.225
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 109.184,
        "saikou": 7.54,
        "heikin": 6.08,
        "boshuAvg30d": 136.1,
        "heikinAvg30d": 6.569
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 119.684,
        "saikou": 10,
        "heikin": 6.14,
        "boshuAvg30d": 138.3,
        "heikinAvg30d": 6.693
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 121.184,
        "saikou": 10,
        "heikin": 7.07,
        "boshuAvg30d": 138.3,
        "heikinAvg30d": 6.929
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 119.684,
        "saikou": 10,
        "heikin": 5.95,
        "boshuAvg30d": 138.3,
        "heikinAvg30d": 6.911
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 123.18,
        "saikou": 8.1,
        "heikin": 6.43,
        "boshuAvg30d": 88.5,
        "heikinAvg30d": 6.876
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 117.354,
        "saikou": 8.26,
        "heikin": 5.36,
        "boshuAvg30d": 88.7,
        "heikinAvg30d": 7.098
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 117.941,
        "saikou": 10,
        "heikin": 7.41,
        "boshuAvg30d": 87.9,
        "heikinAvg30d": 7.025
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 103.441,
        "saikou": 10,
        "heikin": 7.24,
        "boshuAvg30d": 87.9,
        "heikinAvg30d": 7.172
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 121.184,
        "saikou": 10,
        "heikin": 6.51,
        "boshuAvg30d": 88.9,
        "heikinAvg30d": 7.231
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 108.68,
        "saikou": 10,
        "heikin": 7.03,
        "boshuAvg30d": 88.9,
        "heikinAvg30d": 7.203
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 119.834,
        "saikou": 10,
        "heikin": 7.26,
        "boshuAvg30d": 85.2,
        "heikinAvg30d": 7.209
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 106.684,
        "saikou": 10,
        "heikin": 6.9,
        "boshuAvg30d": 85.2,
        "heikinAvg30d": 7.067
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 123.18,
        "saikou": 7.87,
        "heikin": 5.03,
        "boshuAvg30d": 85.2,
        "heikinAvg30d": 6.607
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 108.68,
        "saikou": 6.77,
        "heikin": 5.18,
        "boshuAvg30d": 84.1,
        "heikinAvg30d": 6.393
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 108.68,
        "saikou": 5.31,
        "heikin": 4.48,
        "boshuAvg30d": 83.9,
        "heikinAvg30d": 6.599
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 86.61,
        "saikou": 5.76,
        "heikin": 3.89,
        "boshuAvg30d": 81.7,
        "heikinAvg30d": 5.613
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 99.18,
        "saikou": 4.74,
        "heikin": 4.08,
        "boshuAvg30d": 137.1,
        "heikinAvg30d": 5.593
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 95.183,
        "saikou": 4.42,
        "heikin": 3.04,
        "boshuAvg30d": 137.1,
        "heikinAvg30d": 4.533
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 97.148,
        "saikou": 4.16,
        "heikin": 2.84,
        "boshuAvg30d": 137.1,
        "heikinAvg30d": 4.53
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 81.683,
        "saikou": 4.16,
        "heikin": 3.44,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 4.576
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 87.144,
        "saikou": 3.9,
        "heikin": 3.32,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 4.451
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 83.648,
        "saikou": 4.12,
        "heikin": 3.29,
        "boshuAvg30d": 134.9,
        "heikinAvg30d": 4.186
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 85.184,
        "saikou": 4.22,
        "heikin": 3.37,
        "boshuAvg30d": 133.9,
        "heikinAvg30d": 4.131
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 95.684,
        "saikou": 4.3,
        "heikin": 2.89,
        "boshuAvg30d": 133.9,
        "heikinAvg30d": 3.713
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 109.184,
        "saikou": 3.54,
        "heikin": 2.73,
        "boshuAvg30d": 133.9,
        "heikinAvg30d": 3.819
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 109.184,
        "saikou": 3.69,
        "heikin": 2.85,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 4.073
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 105.329,
        "saikou": 4.93,
        "heikin": 3.43,
        "boshuAvg30d": 132.9,
        "heikinAvg30d": 4.052
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 105.329,
        "saikou": 5.09,
        "heikin": 3.34,
        "boshuAvg30d": 132.9,
        "heikinAvg30d": 4.278
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 95.834,
        "saikou": 4.99,
        "heikin": 3.21,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 4.557
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 82.684,
        "saikou": 5.76,
        "heikin": 4.1,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 4.344
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 84.584,
        "saikou": 4.47,
        "heikin": 2.71,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 4.427
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 82.684,
        "saikou": 5.27,
        "heikin": 3.37,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 4.563
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 82.684,
        "saikou": 5.8,
        "heikin": 3.4,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 4.721
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 81.184,
        "saikou": 6.34,
        "heikin": 3.6,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 5.103
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 174,
        "ouatsu": 488.266,
        "saikou": 2.88,
        "heikin": 2.3,
        "boshuAvg30d": 258.7,
        "heikinAvg30d": 3.834
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 174,
        "ouatsu": 524.924,
        "saikou": 2.94,
        "heikin": 2.35,
        "boshuAvg30d": 258.7,
        "heikinAvg30d": 3.822
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 174,
        "ouatsu": 555.031,
        "saikou": 2.74,
        "heikin": 2.2,
        "boshuAvg30d": 258.7,
        "heikinAvg30d": 3.612
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 174,
        "ouatsu": 568.248,
        "saikou": 2.33,
        "heikin": 1.87,
        "boshuAvg30d": 258.7,
        "heikinAvg30d": 3.693
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 173,
        "ouatsu": 566.482,
        "saikou": 2.37,
        "heikin": 1.92,
        "boshuAvg30d": 257.6,
        "heikinAvg30d": 3.689
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 172,
        "ouatsu": 564.665,
        "saikou": 2.42,
        "heikin": 1.92,
        "boshuAvg30d": 256.7,
        "heikinAvg30d": 3.477
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 170,
        "ouatsu": 584.578,
        "saikou": 2.36,
        "heikin": 1.89,
        "boshuAvg30d": 254.8,
        "heikinAvg30d": 3.712
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 172,
        "ouatsu": 581.138,
        "saikou": 2.65,
        "heikin": 2.11,
        "boshuAvg30d": 256.7,
        "heikinAvg30d": 3.798
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 172,
        "ouatsu": 564.507,
        "saikou": 2.68,
        "heikin": 2.11,
        "boshuAvg30d": 256.8,
        "heikinAvg30d": 3.875
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 173,
        "ouatsu": 537.202,
        "saikou": 2.45,
        "heikin": 1.96,
        "boshuAvg30d": 257.7,
        "heikinAvg30d": 4.107
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 173,
        "ouatsu": 496.653,
        "saikou": 5.91,
        "heikin": 1.97,
        "boshuAvg30d": 257.7,
        "heikinAvg30d": 4.012
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 173,
        "ouatsu": 411.035,
        "saikou": 2.52,
        "heikin": 1.97,
        "boshuAvg30d": 257.7,
        "heikinAvg30d": 4.162
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 192,
        "ouatsu": 308.174,
        "saikou": 6.15,
        "heikin": 2.08,
        "boshuAvg30d": 276.8,
        "heikinAvg30d": 4.027
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 200,
        "ouatsu": 306.2,
        "saikou": 6.39,
        "heikin": 2.71,
        "boshuAvg30d": 284.8,
        "heikinAvg30d": 4.374
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 205,
        "ouatsu": 469.767,
        "saikou": 3.19,
        "heikin": 2.12,
        "boshuAvg30d": 289.8,
        "heikinAvg30d": 3.838
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 220,
        "ouatsu": 414.56,
        "saikou": 3.29,
        "heikin": 2.07,
        "boshuAvg30d": 294.8,
        "heikinAvg30d": 3.527
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 220,
        "ouatsu": 603.76,
        "saikou": 3,
        "heikin": 1.8,
        "boshuAvg30d": 295.2,
        "heikinAvg30d": 3.55
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 220,
        "ouatsu": 530.771,
        "saikou": 5.96,
        "heikin": 2.28,
        "boshuAvg30d": 295.2,
        "heikinAvg30d": 3.435
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 212,
        "ouatsu": 576.205,
        "saikou": 2.47,
        "heikin": 1.57,
        "boshuAvg30d": 290.1,
        "heikinAvg30d": 3.674
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 212,
        "ouatsu": 601.746,
        "saikou": 6.31,
        "heikin": 2.41,
        "boshuAvg30d": 290.1,
        "heikinAvg30d": 3.756
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 221,
        "ouatsu": 601.138,
        "saikou": 2.18,
        "heikin": 1.5,
        "boshuAvg30d": 290.4,
        "heikinAvg30d": 3.752
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 220,
        "ouatsu": 635.857,
        "saikou": 2.44,
        "heikin": 1.6,
        "boshuAvg30d": 289.4,
        "heikinAvg30d": 3.63
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 218,
        "ouatsu": 588.096,
        "saikou": 2.74,
        "heikin": 1.93,
        "boshuAvg30d": 287.4,
        "heikinAvg30d": 3.624
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 218,
        "ouatsu": 584.493,
        "saikou": 3,
        "heikin": 2.13,
        "boshuAvg30d": 287.4,
        "heikinAvg30d": 3.548
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 215,
        "ouatsu": 597.191,
        "saikou": 6.2,
        "heikin": 1.37,
        "boshuAvg30d": 284.2,
        "heikinAvg30d": 3.379
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 215,
        "ouatsu": 605.048,
        "saikou": 6.2,
        "heikin": 1.56,
        "boshuAvg30d": 284.2,
        "heikinAvg30d": 3.317
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 215,
        "ouatsu": 617.838,
        "saikou": 6.13,
        "heikin": 3.26,
        "boshuAvg30d": 284.2,
        "heikinAvg30d": 3.514
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 205,
        "ouatsu": 646.481,
        "saikou": 6.06,
        "heikin": 2.33,
        "boshuAvg30d": 284.1,
        "heikinAvg30d": 3.596
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 204,
        "ouatsu": 705.827,
        "saikou": 4.36,
        "heikin": 2.16,
        "boshuAvg30d": 283.1,
        "heikinAvg30d": 3.442
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 203,
        "ouatsu": 497.8,
        "saikou": 5.42,
        "heikin": 2.59,
        "boshuAvg30d": 282.2,
        "heikinAvg30d": 3.206
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 201,
        "ouatsu": 519.35,
        "saikou": 3.22,
        "heikin": 1.84,
        "boshuAvg30d": 280.2,
        "heikinAvg30d": 3.059
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 201,
        "ouatsu": 441.632,
        "saikou": 2.44,
        "heikin": 1.67,
        "boshuAvg30d": 279.9,
        "heikinAvg30d": 3.087
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 192,
        "ouatsu": 513.367,
        "saikou": 2.2,
        "heikin": 1.53,
        "boshuAvg30d": 279.9,
        "heikinAvg30d": 3.15
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 192,
        "ouatsu": 456.298,
        "saikou": 2.31,
        "heikin": 1.65,
        "boshuAvg30d": 279.9,
        "heikinAvg30d": 3.29
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 192,
        "ouatsu": 507.8,
        "saikou": 2.11,
        "heikin": 1.55,
        "boshuAvg30d": 277.9,
        "heikinAvg30d": 3.145
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 192,
        "ouatsu": 498.33,
        "saikou": 2.19,
        "heikin": 1.59,
        "boshuAvg30d": 277.5,
        "heikinAvg30d": 3.121
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 195,
        "ouatsu": 535.602,
        "saikou": 5.97,
        "heikin": 1.56,
        "boshuAvg30d": 279.5,
        "heikinAvg30d": 3.308
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 195,
        "ouatsu": 515.408,
        "saikou": 2.38,
        "heikin": 1.14,
        "boshuAvg30d": 279.5,
        "heikinAvg30d": 3.073
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 195,
        "ouatsu": 458.313,
        "saikou": 2.39,
        "heikin": 1.21,
        "boshuAvg30d": 279.5,
        "heikinAvg30d": 3.14
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 205,
        "ouatsu": 476.709,
        "saikou": 4.23,
        "heikin": 1.34,
        "boshuAvg30d": 279.5,
        "heikinAvg30d": 2.91
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 203,
        "ouatsu": 479.641,
        "saikou": 2.88,
        "heikin": 1.48,
        "boshuAvg30d": 277.5,
        "heikinAvg30d": 2.86
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 203,
        "ouatsu": 473.776,
        "saikou": 2.78,
        "heikin": 1.62,
        "boshuAvg30d": 277.5,
        "heikinAvg30d": 3.082
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 203,
        "ouatsu": 445.314,
        "saikou": 2.12,
        "heikin": 1.35,
        "boshuAvg30d": 277.5,
        "heikinAvg30d": 2.79
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 203,
        "ouatsu": 450.516,
        "saikou": 2.4,
        "heikin": 1.55,
        "boshuAvg30d": 277.5,
        "heikinAvg30d": 2.868
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 203,
        "ouatsu": 419.906,
        "saikou": 1.7,
        "heikin": 1.1,
        "boshuAvg30d": 280.8,
        "heikinAvg30d": 2.719
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 201,
        "ouatsu": 427.775,
        "saikou": 2.88,
        "heikin": 1.8,
        "boshuAvg30d": 275.8,
        "heikinAvg30d": 2.847
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 199,
        "ouatsu": 394.045,
        "saikou": 2.61,
        "heikin": 1.82,
        "boshuAvg30d": 274.2,
        "heikinAvg30d": 3.355
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 188,
        "ouatsu": 385.734,
        "saikou": 5.69,
        "heikin": 2.01,
        "boshuAvg30d": 272.8,
        "heikinAvg30d": 3.396
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 59,
        "ouatsu": 253.221,
        "saikou": 2.64,
        "heikin": 1.27,
        "boshuAvg30d": 99.9,
        "heikinAvg30d": 1.714
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 59,
        "ouatsu": 262.447,
        "saikou": 1.75,
        "heikin": 1.27,
        "boshuAvg30d": 99.9,
        "heikinAvg30d": 1.541
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 59,
        "ouatsu": 261.884,
        "saikou": 1.75,
        "heikin": 1.26,
        "boshuAvg30d": 99.9,
        "heikinAvg30d": 1.568
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 274.516,
        "saikou": 1.75,
        "heikin": 1.15,
        "boshuAvg30d": 99.9,
        "heikinAvg30d": 1.641
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 58,
        "ouatsu": 260.601,
        "saikou": 1.75,
        "heikin": 1.24,
        "boshuAvg30d": 98.9,
        "heikinAvg30d": 1.57
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 260.517,
        "saikou": 1.65,
        "heikin": 1.34,
        "boshuAvg30d": 98.9,
        "heikinAvg30d": 1.561
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 282.356,
        "saikou": 1.93,
        "heikin": 1.31,
        "boshuAvg30d": 97.9,
        "heikinAvg30d": 1.455
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 256.068,
        "saikou": 2.15,
        "heikin": 1.2,
        "boshuAvg30d": 97.9,
        "heikinAvg30d": 1.519
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 58,
        "ouatsu": 276.584,
        "saikou": 2.2,
        "heikin": 1.15,
        "boshuAvg30d": 98.9,
        "heikinAvg30d": 1.509
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 58,
        "ouatsu": 300.622,
        "saikou": 1.67,
        "heikin": 1.16,
        "boshuAvg30d": 98.9,
        "heikinAvg30d": 1.507
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 58,
        "ouatsu": 363.812,
        "saikou": 1.88,
        "heikin": 1.11,
        "boshuAvg30d": 98.9,
        "heikinAvg30d": 1.495
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 58,
        "ouatsu": 359.968,
        "saikou": 1.17,
        "heikin": 1.06,
        "boshuAvg30d": 98.9,
        "heikinAvg30d": 1.453
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 400.102,
        "saikou": 1.17,
        "heikin": 0.97,
        "boshuAvg30d": 107.9,
        "heikinAvg30d": 1.72
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 71,
        "ouatsu": 400.072,
        "saikou": 1.42,
        "heikin": 1.07,
        "boshuAvg30d": 111.9,
        "heikinAvg30d": 1.776
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 74,
        "ouatsu": 381.836,
        "saikou": 1.93,
        "heikin": 1.47,
        "boshuAvg30d": 114.9,
        "heikinAvg30d": 2.003
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 76,
        "ouatsu": 365.599,
        "saikou": 2.91,
        "heikin": 2.04,
        "boshuAvg30d": 116.9,
        "heikinAvg30d": 2.015
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 76,
        "ouatsu": 385.81,
        "saikou": 2.82,
        "heikin": 1.81,
        "boshuAvg30d": 116.9,
        "heikinAvg30d": 2.105
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 76,
        "ouatsu": 380.026,
        "saikou": 2.95,
        "heikin": 2.12,
        "boshuAvg30d": 116.9,
        "heikinAvg30d": 2.22
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 81,
        "ouatsu": 344.851,
        "saikou": 4.48,
        "heikin": 2.59,
        "boshuAvg30d": 121.8,
        "heikinAvg30d": 2.65
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 81,
        "ouatsu": 319.022,
        "saikou": 2.56,
        "heikin": 1.64,
        "boshuAvg30d": 121.8,
        "heikinAvg30d": 2.707
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 81,
        "ouatsu": 221.712,
        "saikou": 2.43,
        "heikin": 1.1,
        "boshuAvg30d": 121.9,
        "heikinAvg30d": 2.926
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 81,
        "ouatsu": 223.701,
        "saikou": 2.44,
        "heikin": 0.98,
        "boshuAvg30d": 121.8,
        "heikinAvg30d": 2.927
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 80,
        "ouatsu": 201.723,
        "saikou": 2.26,
        "heikin": 1.13,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 2.77
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 79,
        "ouatsu": 197.776,
        "saikou": 2.28,
        "heikin": 0.98,
        "boshuAvg30d": 119.8,
        "heikinAvg30d": 2.814
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 75,
        "ouatsu": 171.531,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 115.9,
        "heikinAvg30d": 2.687
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 75,
        "ouatsu": 201.281,
        "saikou": 1.89,
        "heikin": 0.45,
        "boshuAvg30d": 115.9,
        "heikinAvg30d": 2.666
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 75,
        "ouatsu": 215.346,
        "saikou": 3.65,
        "heikin": 1.55,
        "boshuAvg30d": 115.9,
        "heikinAvg30d": 2.665
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 74,
        "ouatsu": 217.33,
        "saikou": 3.14,
        "heikin": 2.14,
        "boshuAvg30d": 114.9,
        "heikinAvg30d": 2.723
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 74,
        "ouatsu": 229.494,
        "saikou": 3.3,
        "heikin": 2.41,
        "boshuAvg30d": 114.9,
        "heikinAvg30d": 2.945
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 74,
        "ouatsu": 212.79,
        "saikou": 3.71,
        "heikin": 2.78,
        "boshuAvg30d": 114.9,
        "heikinAvg30d": 2.836
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 72,
        "ouatsu": 278.366,
        "saikou": 4.25,
        "heikin": 2.89,
        "boshuAvg30d": 112.9,
        "heikinAvg30d": 2.639
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 72,
        "ouatsu": 191.488,
        "saikou": 9.37,
        "heikin": 2.85,
        "boshuAvg30d": 112.9,
        "heikinAvg30d": 2.786
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 72,
        "ouatsu": 168.629,
        "saikou": 9.37,
        "heikin": 2.75,
        "boshuAvg30d": 112.9,
        "heikinAvg30d": 2.731
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 72,
        "ouatsu": 176.469,
        "saikou": 9.37,
        "heikin": 2.72,
        "boshuAvg30d": 112.9,
        "heikinAvg30d": 2.766
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 72,
        "ouatsu": 246.521,
        "saikou": 5.13,
        "heikin": 2.98,
        "boshuAvg30d": 112.9,
        "heikinAvg30d": 2.596
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 71,
        "ouatsu": 283.182,
        "saikou": 3.37,
        "heikin": 2.18,
        "boshuAvg30d": 112.0,
        "heikinAvg30d": 2.605
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 69,
        "ouatsu": 292.45,
        "saikou": 1.97,
        "heikin": 1.63,
        "boshuAvg30d": 110.0,
        "heikinAvg30d": 2.223
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 69,
        "ouatsu": 287.219,
        "saikou": 1.85,
        "heikin": 1.44,
        "boshuAvg30d": 110.0,
        "heikinAvg30d": 2.121
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 69,
        "ouatsu": 320.022,
        "saikou": 1.87,
        "heikin": 1.29,
        "boshuAvg30d": 110.0,
        "heikinAvg30d": 1.849
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 69,
        "ouatsu": 341.513,
        "saikou": 1.93,
        "heikin": 1.37,
        "boshuAvg30d": 110.0,
        "heikinAvg30d": 1.672
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 69,
        "ouatsu": 333.598,
        "saikou": 1.93,
        "heikin": 1.09,
        "boshuAvg30d": 110.0,
        "heikinAvg30d": 1.58
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 69,
        "ouatsu": 331.614,
        "saikou": 1.39,
        "heikin": 1.03,
        "boshuAvg30d": 110.0,
        "heikinAvg30d": 1.654
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 70,
        "ouatsu": 337.533,
        "saikou": 1.39,
        "heikin": 1.03,
        "boshuAvg30d": 110.9,
        "heikinAvg30d": 1.523
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 71,
        "ouatsu": 376.754,
        "saikou": 3.38,
        "heikin": 1.75,
        "boshuAvg30d": 111.9,
        "heikinAvg30d": 1.782
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 71,
        "ouatsu": 323.884,
        "saikou": 4.12,
        "heikin": 1.8,
        "boshuAvg30d": 111.9,
        "heikinAvg30d": 1.74
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 325.868,
        "saikou": 4.37,
        "heikin": 2.01,
        "boshuAvg30d": 110.9,
        "heikinAvg30d": 1.795
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 374.939,
        "saikou": 4.3,
        "heikin": 2.41,
        "boshuAvg30d": 109.9,
        "heikinAvg30d": 1.681
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 372.955,
        "saikou": 3.13,
        "heikin": 1.82,
        "boshuAvg30d": 106.9,
        "heikinAvg30d": 1.847
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 3.54,
        "heikin": 3.33,
        "boshuAvg30d": 56.7,
        "heikinAvg30d": 1.086
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.82,
        "heikin": 2.67,
        "boshuAvg30d": 56.7,
        "heikinAvg30d": 1.055
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.63,
        "heikin": 2.54,
        "boshuAvg30d": 56.7,
        "heikinAvg30d": 1.171
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 0.6,
        "heikin": 0.6,
        "boshuAvg30d": 56.7,
        "heikinAvg30d": 1.042
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.63,
        "heikin": 2.44,
        "boshuAvg30d": 56.7,
        "heikinAvg30d": 1.108
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 3.54,
        "heikin": 3.19,
        "boshuAvg30d": 56.7,
        "heikinAvg30d": 1.134
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 4.32,
        "heikin": 4.02,
        "boshuAvg30d": 56.7,
        "heikinAvg30d": 1.334
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 7.28,
        "heikin": 6.36,
        "boshuAvg30d": 56.7,
        "heikinAvg30d": 1.664
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 4.81,
        "heikin": 4.36,
        "boshuAvg30d": 56.7,
        "heikinAvg30d": 1.521
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 4.19,
        "heikin": 4.19,
        "boshuAvg30d": 56.7,
        "heikinAvg30d": 1.51
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 3.81,
        "heikin": 3.81,
        "boshuAvg30d": 56.7,
        "heikinAvg30d": 1.762
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 46.598,
        "saikou": 3.81,
        "heikin": 3.81,
        "boshuAvg30d": 56.7,
        "heikinAvg30d": 1.8
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 22.928,
        "saikou": 4.32,
        "heikin": 4.32,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.928
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 22.928,
        "saikou": 4.81,
        "heikin": 4.81,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.892
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 7.39,
        "heikin": 7.39,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.851
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 22.928,
        "saikou": 4.32,
        "heikin": 4.05,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 1.759
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 22.928,
        "saikou": 3.68,
        "heikin": 3.68,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 3.031
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 22.928,
        "saikou": 3.95,
        "heikin": 3.81,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.666
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 5.73,
        "heikin": 5.28,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 3.245
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 3.95,
        "heikin": 3.9,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 3.621
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 0.64,
        "heikin": 0.64,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 4.442
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 4.588
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 3.576
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 45.81,
        "saikou": 1.06,
        "heikin": 0.76,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 3.389
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 71.116,
        "saikou": 0.85,
        "heikin": 0.6,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 2.445
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 79.068,
        "saikou": 1.06,
        "heikin": 0.79,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 2.089
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 5.95,
        "heikin": 3.41,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 3.647
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 4.61,
        "heikin": 4.29,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 3.04
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 6.49,
        "heikin": 6.14,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 3.405
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 8.13,
        "heikin": 7.43,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 3.252
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 8.45,
        "heikin": 8.03,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 4.366
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 47.928,
        "saikou": 10,
        "heikin": 9.74,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 5.304
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 40.066,
        "saikou": 10,
        "heikin": 9.41,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 4.259
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 31.442,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 3.79
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 3.474
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 4.05
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 28.374,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 3.316
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 38.922,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 3.666
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 35.344,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 3.09
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 8.81,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 2.908
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 22.928,
        "saikou": 8.96,
        "heikin": 8.62,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.539
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 8.8,
        "heikin": 8.8,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.985
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 8.66,
        "heikin": 8.66,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.096
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 7.97,
        "heikin": 7.08,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.15
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 6.43,
        "heikin": 5.76,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.517
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 6.68,
        "heikin": 5.96,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 2.116
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 22.928,
        "saikou": 6.68,
        "heikin": 5.93,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 1.801
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 21.782,
        "saikou": 3.68,
        "heikin": 3.45,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 1.425
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 106.771,
        "saikou": 1.49,
        "heikin": 1.17,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 1.335
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 150.84,
        "saikou": 1.73,
        "heikin": 0.9,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 1.118
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 131.079,
        "saikou": 1.73,
        "heikin": 0.73,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 1.035
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 189.402,
        "saikou": 1.73,
        "heikin": 0.74,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 1.036
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 171.304,
        "saikou": 1.73,
        "heikin": 0.81,
        "boshuAvg30d": 127.3,
        "heikinAvg30d": 0.995
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 113.422,
        "saikou": 1.79,
        "heikin": 1.3,
        "boshuAvg30d": 127.2,
        "heikinAvg30d": 1.186
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 97.698,
        "saikou": 1.94,
        "heikin": 1.56,
        "boshuAvg30d": 127.3,
        "heikinAvg30d": 1.331
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 127.3,
        "heikinAvg30d": 1.527
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.6,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 1.44
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 146.949,
        "saikou": 1.68,
        "heikin": 1.1,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 1.559
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 146.949,
        "saikou": 1.73,
        "heikin": 1.1,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 1.533
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 131.949,
        "saikou": 1.61,
        "heikin": 1.07,
        "boshuAvg30d": 128.3,
        "heikinAvg30d": 1.368
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 101.686,
        "saikou": 1.64,
        "heikin": 1.43,
        "boshuAvg30d": 139.4,
        "heikinAvg30d": 1.537
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 101.686,
        "saikou": 1.63,
        "heikin": 1.53,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 1.483
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 99.567,
        "saikou": 2,
        "heikin": 1.78,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 1.562
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 144.83,
        "saikou": 2.09,
        "heikin": 1.43,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 1.67
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 147.62,
        "saikou": 2.09,
        "heikin": 1.38,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 1.671
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 150.816,
        "saikou": 3.95,
        "heikin": 1.95,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.077
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 101.595,
        "saikou": 3,
        "heikin": 2.5,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.238
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 170.469,
        "saikou": 3.95,
        "heikin": 1.66,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.217
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 235.988,
        "saikou": 2.03,
        "heikin": 0.43,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.411
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 235.988,
        "saikou": 2.41,
        "heikin": 0.56,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 2.534
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 234.253,
        "saikou": 2.03,
        "heikin": 0.54,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.607
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 234.253,
        "saikou": 2.03,
        "heikin": 0.54,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.389
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 217.255,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 2.173
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 217.81,
        "saikou": 1.99,
        "heikin": 0.72,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 2.286
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 143.565,
        "saikou": 5.95,
        "heikin": 2.01,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 2.541
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 99.745,
        "saikou": 2.39,
        "heikin": 2.06,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 2.342
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 99.745,
        "saikou": 4.45,
        "heikin": 2.64,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 2.268
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 99.745,
        "saikou": 3,
        "heikin": 2.28,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 2.117
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 99.745,
        "saikou": 3.95,
        "heikin": 2.82,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 2.332
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 99.745,
        "saikou": 3.95,
        "heikin": 2.79,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 2.576
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 84.745,
        "saikou": 3,
        "heikin": 2.62,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 2.465
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 78.759,
        "saikou": 2.38,
        "heikin": 2.02,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 2.212
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 93.759,
        "saikou": 2.5,
        "heikin": 2.22,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 2.246
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 93.759,
        "saikou": 2.64,
        "heikin": 2.45,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 2.524
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 93.649,
        "saikou": 1.95,
        "heikin": 1.85,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.997
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 92.206,
        "saikou": 1.94,
        "heikin": 1.81,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.03
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 96.285,
        "saikou": 1.94,
        "heikin": 1.65,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.914
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 97.728,
        "saikou": 1.99,
        "heikin": 1.72,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 1.867
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 99.701,
        "saikou": 1.99,
        "heikin": 1.68,
        "boshuAvg30d": 142.4,
        "heikinAvg30d": 1.79
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 99.701,
        "saikou": 1.84,
        "heikin": 1.63,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 1.825
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 101.686,
        "saikou": 1.57,
        "heikin": 1.56,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 1.777
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.76,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 1.847
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.75,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 1.825
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.61,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 1.758
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.62,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 1.454
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 146.949,
        "saikou": 1.99,
        "heikin": 1.3,
        "boshuAvg30d": 137.3,
        "heikinAvg30d": 1.581
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 66.523,
        "saikou": 2.29,
        "heikin": 1.88,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.269
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 66.523,
        "saikou": 2.29,
        "heikin": 1.88,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.386
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 68.323,
        "saikou": 2.29,
        "heikin": 1.87,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.12
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 70.313,
        "saikou": 2.29,
        "heikin": 1.85,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 1.977
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 70.313,
        "saikou": 2.29,
        "heikin": 1.86,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 1.979
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 70.313,
        "saikou": 2.29,
        "heikin": 1.85,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.191
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 150.64,
        "saikou": 6.57,
        "heikin": 3.98,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.432
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 150.64,
        "saikou": 9.57,
        "heikin": 5.09,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.741
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 150.64,
        "saikou": 7.07,
        "heikin": 4.02,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 3.081
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 150.64,
        "saikou": 6.44,
        "heikin": 3.77,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 3.474
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 150.64,
        "saikou": 6.06,
        "heikin": 3.6,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 3.344
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 150.64,
        "saikou": 6.06,
        "heikin": 3.6,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 3.275
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 149.64,
        "saikou": 6.57,
        "heikin": 3.85,
        "boshuAvg30d": 142.9,
        "heikinAvg30d": 3.403
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 149.64,
        "saikou": 7.07,
        "heikin": 4.07,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 2.939
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 86.172,
        "saikou": 2.29,
        "heikin": 1.78,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 1.906
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 57.124,
        "saikou": 2.29,
        "heikin": 1.45,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 1.538
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 86.172,
        "saikou": 2.29,
        "heikin": 1.76,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 1.606
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 86.172,
        "saikou": 2.29,
        "heikin": 1.77,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 1.649
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 113.891,
        "saikou": 2.7,
        "heikin": 1.73,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 1.863
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 113.891,
        "saikou": 2.7,
        "heikin": 1.67,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 1.882
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 190.563,
        "saikou": 1.56,
        "heikin": 1.3,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 1.635
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 190.563,
        "saikou": 1.56,
        "heikin": 0.88,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 1.586
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 190.563,
        "saikou": 2.29,
        "heikin": 1.33,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 1.56
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 190.563,
        "saikou": 2.29,
        "heikin": 1.5,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 1.654
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 190.563,
        "saikou": 1.56,
        "heikin": 0.88,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.462
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 113.891,
        "saikou": 2.29,
        "heikin": 1.7,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.552
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 64.49,
        "saikou": 2.7,
        "heikin": 1.83,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.732
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 112.091,
        "saikou": 2.29,
        "heikin": 1.7,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 1.787
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 64.49,
        "saikou": 2.7,
        "heikin": 1.82,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 1.811
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 64.49,
        "saikou": 2.7,
        "heikin": 2.05,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.882
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 66.29,
        "saikou": 2.7,
        "heikin": 2.12,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 2.158
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 129.758,
        "saikou": 5.26,
        "heikin": 3.58,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 2.355
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 129.758,
        "saikou": 9.33,
        "heikin": 5.84,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 2.858
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 129.758,
        "saikou": 9.33,
        "heikin": 5.84,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 3.922
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 129.758,
        "saikou": 9.33,
        "heikin": 6.25,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 4.245
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 129.758,
        "saikou": 9.33,
        "heikin": 5.85,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 4.277
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 128.768,
        "saikou": 9.56,
        "heikin": 6.95,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 4.39
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 128.768,
        "saikou": 7.07,
        "heikin": 4.67,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 4.438
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 148.65,
        "saikou": 7.07,
        "heikin": 4.33,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 4.083
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 150.64,
        "saikou": 6.5,
        "heikin": 3.78,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 3.688
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 150.64,
        "saikou": 8.26,
        "heikin": 4.64,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.937
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 150.64,
        "saikou": 6.31,
        "heikin": 4.09,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 3.752
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 150.64,
        "saikou": 6.56,
        "heikin": 4.33,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 4.058
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 150.64,
        "saikou": 5.15,
        "heikin": 3.19,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 3.771
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 150.64,
        "saikou": 8.56,
        "heikin": 4.68,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 3.63
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 120.853,
        "saikou": 8.81,
        "heikin": 5.44,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 3.111
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 87.172,
        "saikou": 2.29,
        "heikin": 1.77,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 3.209
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 87.172,
        "saikou": 2.29,
        "heikin": 1.79,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 2.241
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 1.26,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.864
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.838
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.792
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
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.796
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.795
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.808
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 68.8,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.853
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.872
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.7,
        "heikin": 0.96,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.918
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.7,
        "heikin": 0.99,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.889
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.7,
        "heikin": 1.06,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.85
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 83.343,
        "saikou": 1.7,
        "heikin": 1.05,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.956
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 96.343,
        "saikou": 1.7,
        "heikin": 0.81,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.913
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 96.343,
        "saikou": 1.7,
        "heikin": 0.78,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.84
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 112.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 0.868
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 148.843,
        "saikou": 1.7,
        "heikin": 1.08,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 0.79
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 148.843,
        "saikou": 1.7,
        "heikin": 1.09,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 0.844
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 1.4,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.07
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 1.35,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.044
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 137.843,
        "saikou": 1.6,
        "heikin": 1.53,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.057
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 137.843,
        "saikou": 1.6,
        "heikin": 1.44,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 0.993
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 137.843,
        "saikou": 1.6,
        "heikin": 1.52,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.049
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 137.843,
        "saikou": 1.6,
        "heikin": 1.52,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.069
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 137.843,
        "saikou": 1.6,
        "heikin": 1.52,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.053
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 137.843,
        "saikou": 1.6,
        "heikin": 1.52,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.075
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 1.35,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.091
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 1.34,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.088
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 118.343,
        "saikou": 1.6,
        "heikin": 1.53,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.118
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 62.343,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.05
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 62.343,
        "saikou": 1.6,
        "heikin": 1.44,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.105
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 62.343,
        "saikou": 4.99,
        "heikin": 2.15,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.137
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 49.343,
        "saikou": 10,
        "heikin": 3.55,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.304
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 49.343,
        "saikou": 10,
        "heikin": 3.56,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 1.404
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 49.343,
        "saikou": 2.3,
        "heikin": 1.67,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.533
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 49.343,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.533
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.482
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.521
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.398
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.426
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.415
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.415
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 83.343,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.006
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 83.343,
        "saikou": 1.6,
        "heikin": 0.85,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.961
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 83.343,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.948
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 83.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.911
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 83.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.973
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 83.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.952
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 182.124,
        "saikou": 9.88,
        "heikin": 6.64,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.026
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 185.772,
        "saikou": 9.25,
        "heikin": 6.2,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 4.676
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 187.774,
        "saikou": 9.28,
        "heikin": 6.23,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 4.578
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 189.82,
        "saikou": 9.2,
        "heikin": 6.19,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 4.432
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 193.718,
        "saikou": 9.28,
        "heikin": 6.2,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 4.406
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 191.741,
        "saikou": 9.78,
        "heikin": 6.55,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 4.614
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 208.754,
        "saikou": 10,
        "heikin": 6.68,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 4.817
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 197.445,
        "saikou": 9.79,
        "heikin": 6.59,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.356
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 184.831,
        "saikou": 9.94,
        "heikin": 6.49,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.61
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 257.75,
        "saikou": 9.94,
        "heikin": 7.44,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 5.953
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 262.748,
        "saikou": 9.94,
        "heikin": 7.44,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.136
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 263.323,
        "saikou": 9.94,
        "heikin": 7.21,
        "boshuAvg30d": 168.7,
        "heikinAvg30d": 6.046
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 309.889,
        "saikou": 10,
        "heikin": 7.41,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 5.672
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 333.368,
        "saikou": 10,
        "heikin": 7.37,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 4.968
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 264.886,
        "saikou": 10,
        "heikin": 7.34,
        "boshuAvg30d": 174.7,
        "heikinAvg30d": 3.858
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 266.365,
        "saikou": 8.91,
        "heikin": 6.26,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 3.487
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 161.371,
        "saikou": 8.63,
        "heikin": 4.83,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 3.358
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 99.37,
        "saikou": 5.7,
        "heikin": 1.49,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 3.471
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 136.962,
        "saikou": 4.9,
        "heikin": 2.44,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.489
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 188.937,
        "saikou": 3.76,
        "heikin": 2.51,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.391
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 241.129,
        "saikou": 2.95,
        "heikin": 2.36,
        "boshuAvg30d": 180.7,
        "heikinAvg30d": 3.313
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 231.337,
        "saikou": 2.82,
        "heikin": 2.31,
        "boshuAvg30d": 181.6,
        "heikinAvg30d": 3.233
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 117.022,
        "saikou": 2.82,
        "heikin": 1.66,
        "boshuAvg30d": 181.7,
        "heikinAvg30d": 3.056
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 112.462,
        "saikou": 2.88,
        "heikin": 1.61,
        "boshuAvg30d": 181.7,
        "heikinAvg30d": 3.023
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 211.788,
        "saikou": 2.74,
        "heikin": 2.2,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 2.688
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 163.712,
        "saikou": 3.1,
        "heikin": 2.17,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 2.826
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 193.199,
        "saikou": 7.75,
        "heikin": 4.96,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.378
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 209.199,
        "saikou": 10,
        "heikin": 6.03,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.993
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 209.199,
        "saikou": 10,
        "heikin": 6.23,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 3.876
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 193.199,
        "saikou": 10,
        "heikin": 6.53,
        "boshuAvg30d": 177.7,
        "heikinAvg30d": 4.638
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 182.199,
        "saikou": 10,
        "heikin": 6.58,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 5.021
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 193.199,
        "saikou": 10,
        "heikin": 6.85,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 5.333
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 124.199,
        "saikou": 10,
        "heikin": 4.83,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 6.367
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 205.199,
        "saikou": 10,
        "heikin": 7.09,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 6.991
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 249.222,
        "saikou": 10,
        "heikin": 7.49,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 7.136
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 242.973,
        "saikou": 10,
        "heikin": 7.51,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 7.193
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 236.551,
        "saikou": 10,
        "heikin": 7.53,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 7.154
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 238.527,
        "saikou": 10,
        "heikin": 7.49,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 7.082
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 213.214,
        "saikou": 10,
        "heikin": 7.05,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.754
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 179.651,
        "saikou": 10,
        "heikin": 6.51,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.319
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 188.603,
        "saikou": 10,
        "heikin": 6.52,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.551
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 209.999,
        "saikou": 10,
        "heikin": 6.86,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.136
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 209.997,
        "saikou": 10,
        "heikin": 6.84,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 6.108
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 115.995,
        "saikou": 8.96,
        "heikin": 3.35,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 6.065
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 127.595,
        "saikou": 9.09,
        "heikin": 3.4,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 6.238
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 107.241,
        "saikou": 8.96,
        "heikin": 2.45,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 6.01
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 112.793,
        "saikou": 8.88,
        "heikin": 2.44,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 5.849
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 205.302,
        "saikou": 9.98,
        "heikin": 6.63,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 5.04
      }
    ]
  }
};
