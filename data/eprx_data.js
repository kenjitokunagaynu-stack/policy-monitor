// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/26〜2026/10/25）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-26",
  "fetchedAt": "2026-10-26",
  "avgWindowLabel": "過去30日平均（2026/09/26〜2026/10/25）",
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
      "ouatsu": 1487.548,
      "saikou": 10,
      "heikin": 3.21,
      "boshuAvg30d": 1081.6,
      "heikinAvg30d": 3.008
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 934,
      "ouatsu": 1413.061,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1081.6,
      "heikinAvg30d": 2.896
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 934,
      "ouatsu": 1430.167,
      "saikou": 10,
      "heikin": 3.41,
      "boshuAvg30d": 1081.6,
      "heikinAvg30d": 2.817
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 934,
      "ouatsu": 1585.921,
      "saikou": 8.77,
      "heikin": 3.29,
      "boshuAvg30d": 1081.6,
      "heikinAvg30d": 2.791
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 931,
      "ouatsu": 1484.309,
      "saikou": 8.7,
      "heikin": 3.4,
      "boshuAvg30d": 1078.2,
      "heikinAvg30d": 2.817
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 930,
      "ouatsu": 1642.463,
      "saikou": 7.8,
      "heikin": 2.27,
      "boshuAvg30d": 1077.2,
      "heikinAvg30d": 2.874
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 927,
      "ouatsu": 1711.792,
      "saikou": 8.39,
      "heikin": 2.42,
      "boshuAvg30d": 1089.1,
      "heikinAvg30d": 3.049
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 929,
      "ouatsu": 1641.768,
      "saikou": 9.69,
      "heikin": 3.19,
      "boshuAvg30d": 1090.9,
      "heikinAvg30d": 3.246
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 931,
      "ouatsu": 1671.966,
      "saikou": 8.9,
      "heikin": 3.17,
      "boshuAvg30d": 1093.1,
      "heikinAvg30d": 3.317
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 932,
      "ouatsu": 1694.759,
      "saikou": 9.15,
      "heikin": 3.12,
      "boshuAvg30d": 1093.9,
      "heikinAvg30d": 3.526
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 932,
      "ouatsu": 1704.66,
      "saikou": 9.55,
      "heikin": 2.98,
      "boshuAvg30d": 1093.9,
      "heikinAvg30d": 3.581
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 932,
      "ouatsu": 1644.307,
      "saikou": 8.97,
      "heikin": 2.84,
      "boshuAvg30d": 1093.9,
      "heikinAvg30d": 3.582
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 992,
      "ouatsu": 1757.112,
      "saikou": 9.15,
      "heikin": 2.57,
      "boshuAvg30d": 1154.9,
      "heikinAvg30d": 3.598
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1015,
      "ouatsu": 1725.385,
      "saikou": 9.76,
      "heikin": 2.84,
      "boshuAvg30d": 1177.6,
      "heikinAvg30d": 3.458
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1036,
      "ouatsu": 1586.297,
      "saikou": 10,
      "heikin": 3.13,
      "boshuAvg30d": 1198.9,
      "heikinAvg30d": 3.016
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1053,
      "ouatsu": 1616.55,
      "saikou": 10,
      "heikin": 3.08,
      "boshuAvg30d": 1216.1,
      "heikinAvg30d": 2.826
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1053,
      "ouatsu": 1520.039,
      "saikou": 10,
      "heikin": 3.22,
      "boshuAvg30d": 1216.2,
      "heikinAvg30d": 2.958
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1053,
      "ouatsu": 1536.122,
      "saikou": 10,
      "heikin": 3.21,
      "boshuAvg30d": 1216.2,
      "heikinAvg30d": 2.936
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 985,
      "ouatsu": 1645.874,
      "saikou": 10,
      "heikin": 3.86,
      "boshuAvg30d": 1180.7,
      "heikinAvg30d": 3.139
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 988,
      "ouatsu": 1669.48,
      "saikou": 10,
      "heikin": 4.41,
      "boshuAvg30d": 1183.9,
      "heikinAvg30d": 3.176
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 993,
      "ouatsu": 1679.635,
      "saikou": 10,
      "heikin": 4.14,
      "boshuAvg30d": 1186.9,
      "heikinAvg30d": 3.242
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 993,
      "ouatsu": 1506.708,
      "saikou": 10,
      "heikin": 3.94,
      "boshuAvg30d": 1186.9,
      "heikinAvg30d": 3.18
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 990,
      "ouatsu": 1513.553,
      "saikou": 10,
      "heikin": 3.62,
      "boshuAvg30d": 1183.9,
      "heikinAvg30d": 3.207
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 989,
      "ouatsu": 1414.321,
      "saikou": 10,
      "heikin": 3.09,
      "boshuAvg30d": 1182.9,
      "heikinAvg30d": 3.163
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 969,
      "ouatsu": 1551.108,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1164.7,
      "heikinAvg30d": 3.032
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 969,
      "ouatsu": 1632.06,
      "saikou": 10,
      "heikin": 3.48,
      "boshuAvg30d": 1164.7,
      "heikinAvg30d": 3.022
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 969,
      "ouatsu": 1716.844,
      "saikou": 10,
      "heikin": 3.54,
      "boshuAvg30d": 1164.7,
      "heikinAvg30d": 3.117
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 967,
      "ouatsu": 1642.801,
      "saikou": 10,
      "heikin": 4.08,
      "boshuAvg30d": 1162.0,
      "heikinAvg30d": 3.235
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 964,
      "ouatsu": 1570.872,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1158.7,
      "heikinAvg30d": 3.233
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 958,
      "ouatsu": 1420.019,
      "saikou": 10,
      "heikin": 3.68,
      "boshuAvg30d": 1152.5,
      "heikinAvg30d": 3.259
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1024,
      "ouatsu": 1560.951,
      "saikou": 10,
      "heikin": 3.94,
      "boshuAvg30d": 1191.2,
      "heikinAvg30d": 3.22
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1024,
      "ouatsu": 1568.384,
      "saikou": 10,
      "heikin": 4.04,
      "boshuAvg30d": 1191.2,
      "heikinAvg30d": 3.424
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1025,
      "ouatsu": 1464.674,
      "saikou": 10,
      "heikin": 4.34,
      "boshuAvg30d": 1192.1,
      "heikinAvg30d": 3.839
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1024,
      "ouatsu": 1471.749,
      "saikou": 10,
      "heikin": 4.28,
      "boshuAvg30d": 1190.9,
      "heikinAvg30d": 4.134
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1022,
      "ouatsu": 1551.989,
      "saikou": 10,
      "heikin": 4.01,
      "boshuAvg30d": 1186.6,
      "heikinAvg30d": 4.088
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1017,
      "ouatsu": 1492.617,
      "saikou": 10,
      "heikin": 4.22,
      "boshuAvg30d": 1181.4,
      "heikinAvg30d": 4.176
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1012,
      "ouatsu": 1663.435,
      "saikou": 10,
      "heikin": 4.09,
      "boshuAvg30d": 1174.9,
      "heikinAvg30d": 4.007
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1012,
      "ouatsu": 1599.872,
      "saikou": 10,
      "heikin": 4.05,
      "boshuAvg30d": 1174.9,
      "heikinAvg30d": 3.943
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1012,
      "ouatsu": 1727.502,
      "saikou": 10,
      "heikin": 3.9,
      "boshuAvg30d": 1175.0,
      "heikinAvg30d": 3.772
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1011,
      "ouatsu": 1688.408,
      "saikou": 10,
      "heikin": 3.7,
      "boshuAvg30d": 1174.0,
      "heikinAvg30d": 3.561
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1003,
      "ouatsu": 1708.21,
      "saikou": 10,
      "heikin": 3.4,
      "boshuAvg30d": 1166.5,
      "heikinAvg30d": 3.5
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1003,
      "ouatsu": 1796.085,
      "saikou": 9.86,
      "heikin": 3.1,
      "boshuAvg30d": 1165.9,
      "heikinAvg30d": 3.445
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 913,
      "ouatsu": 1797.677,
      "saikou": 9.86,
      "heikin": 3,
      "boshuAvg30d": 1086.8,
      "heikinAvg30d": 3.352
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 916,
      "ouatsu": 1709.54,
      "saikou": 9.77,
      "heikin": 2.91,
      "boshuAvg30d": 1089.8,
      "heikinAvg30d": 3.369
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 917,
      "ouatsu": 1693.503,
      "saikou": 9.87,
      "heikin": 3.16,
      "boshuAvg30d": 1094.2,
      "heikinAvg30d": 3.353
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 912,
      "ouatsu": 1808.546,
      "saikou": 10,
      "heikin": 2.56,
      "boshuAvg30d": 1085.9,
      "heikinAvg30d": 3.193
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 903,
      "ouatsu": 1708.53,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1077.2,
      "heikinAvg30d": 3.267
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 896,
      "ouatsu": 1756.139,
      "saikou": 10,
      "heikin": 2.64,
      "boshuAvg30d": 1070.0,
      "heikinAvg30d": 3.0
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
        "ouatsu": 182.908,
        "saikou": 3.7,
        "heikin": 1.95,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 3.853
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 185.008,
        "saikou": 7.8,
        "heikin": 2.38,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 3.741
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 154.958,
        "saikou": 7.69,
        "heikin": 2.34,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 3.736
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 185.138,
        "saikou": 7.8,
        "heikin": 2.67,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 3.549
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 143.908,
        "saikou": 7.8,
        "heikin": 2.34,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 3.939
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 143.908,
        "saikou": 7.8,
        "heikin": 2.3,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 3.593
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 173.018,
        "saikou": 7.8,
        "heikin": 1.28,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 3.892
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 115.958,
        "saikou": 9.69,
        "heikin": 1.73,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 3.788
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 127.908,
        "saikou": 8.78,
        "heikin": 1.75,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 3.901
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 172.25,
        "saikou": 1.37,
        "heikin": 1.23,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 3.643
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 125.958,
        "saikou": 9.55,
        "heikin": 1.83,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 3.956
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 115.958,
        "saikou": 8.78,
        "heikin": 3.8,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 4.031
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 148.24,
        "saikou": 8.78,
        "heikin": 3.45,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.82
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 163.208,
        "saikou": 7.8,
        "heikin": 3.51,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.895
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 114.908,
        "saikou": 8.78,
        "heikin": 3.19,
        "boshuAvg30d": 51.8,
        "heikinAvg30d": 3.222
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 163.208,
        "saikou": 7.8,
        "heikin": 2.98,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.26
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 114.908,
        "saikou": 9.55,
        "heikin": 3.27,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.31
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 161.218,
        "saikou": 7.8,
        "heikin": 2.94,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 2.808
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 114.908,
        "saikou": 7.69,
        "heikin": 1.76,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 2.957
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 153.908,
        "saikou": 9.55,
        "heikin": 2.66,
        "boshuAvg30d": 53.8,
        "heikinAvg30d": 2.888
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 199.908,
        "saikou": 9.45,
        "heikin": 3.57,
        "boshuAvg30d": 53.8,
        "heikinAvg30d": 3.391
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 150.94,
        "saikou": 9.55,
        "heikin": 4.28,
        "boshuAvg30d": 54.7,
        "heikinAvg30d": 2.578
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 114.908,
        "saikou": 7.69,
        "heikin": 2.89,
        "boshuAvg30d": 54.7,
        "heikinAvg30d": 3.409
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 114.908,
        "saikou": 7.69,
        "heikin": 2.97,
        "boshuAvg30d": 54.7,
        "heikinAvg30d": 3.259
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 200.218,
        "saikou": 6.97,
        "heikin": 2.14,
        "boshuAvg30d": 52.8,
        "heikinAvg30d": 3.15
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 153.908,
        "saikou": 9.55,
        "heikin": 2.25,
        "boshuAvg30d": 52.8,
        "heikinAvg30d": 3.21
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 202.208,
        "saikou": 7.8,
        "heikin": 3.57,
        "boshuAvg30d": 52.8,
        "heikinAvg30d": 2.786
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 163.908,
        "saikou": 9.55,
        "heikin": 3.5,
        "boshuAvg30d": 52.8,
        "heikinAvg30d": 3.234
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 165.008,
        "saikou": 7.8,
        "heikin": 4.02,
        "boshuAvg30d": 51.8,
        "heikinAvg30d": 3.319
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 114.908,
        "saikou": 8.78,
        "heikin": 6.05,
        "boshuAvg30d": 51.8,
        "heikinAvg30d": 3.959
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 240.258,
        "saikou": 9.17,
        "heikin": 7.92,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 2.952
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 236.268,
        "saikou": 9.02,
        "heikin": 7.82,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 4.038
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 195.908,
        "saikou": 9.18,
        "heikin": 8.64,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 5.066
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 170.908,
        "saikou": 9.18,
        "heikin": 8.63,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 5.284
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 212.858,
        "saikou": 9.01,
        "heikin": 5.94,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.63
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 168.958,
        "saikou": 9.02,
        "heikin": 8.79,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 4.795
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 240.808,
        "saikou": 8.19,
        "heikin": 5.08,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.487
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 196.908,
        "saikou": 8.18,
        "heikin": 7.22,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.571
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 234.9,
        "saikou": 7.82,
        "heikin": 5.36,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.387
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 194.958,
        "saikou": 6.5,
        "heikin": 6.04,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.374
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 158.808,
        "saikou": 4.57,
        "heikin": 3.27,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 4.173
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 203.908,
        "saikou": 7.18,
        "heikin": 1.79,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 3.849
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 234.9,
        "saikou": 1.37,
        "heikin": 1.24,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 4.089
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 194.958,
        "saikou": 3.85,
        "heikin": 1.44,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.114
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 208.94,
        "saikou": 7.8,
        "heikin": 1.7,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 4.264
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 240.808,
        "saikou": 1.37,
        "heikin": 1.23,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.996
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 115.958,
        "saikou": 1.37,
        "heikin": 1.34,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 4.266
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 115.958,
        "saikou": 7.69,
        "heikin": 1.64,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.83
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 72.678,
        "saikou": 10,
        "heikin": 5.47,
        "boshuAvg30d": 113.2,
        "heikinAvg30d": 5.577
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 81.998,
        "saikou": 10,
        "heikin": 5.01,
        "boshuAvg30d": 113.2,
        "heikinAvg30d": 5.735
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 103.226,
        "saikou": 10,
        "heikin": 5.02,
        "boshuAvg30d": 113.2,
        "heikinAvg30d": 5.671
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 105.186,
        "saikou": 6.42,
        "heikin": 4.81,
        "boshuAvg30d": 113.2,
        "heikinAvg30d": 5.676
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 101.199,
        "saikou": 6.51,
        "heikin": 4.48,
        "boshuAvg30d": 113.2,
        "heikinAvg30d": 5.746
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 101.24,
        "saikou": 7.74,
        "heikin": 6.66,
        "boshuAvg30d": 113.2,
        "heikinAvg30d": 5.809
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 89.186,
        "saikou": 7.06,
        "heikin": 5.53,
        "boshuAvg30d": 126.5,
        "heikinAvg30d": 5.931
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 92.616,
        "saikou": 6.83,
        "heikin": 5.6,
        "boshuAvg30d": 126.5,
        "heikinAvg30d": 5.833
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 94.684,
        "saikou": 6.42,
        "heikin": 4.82,
        "boshuAvg30d": 126.5,
        "heikinAvg30d": 5.727
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 96.614,
        "saikou": 6.42,
        "heikin": 5.04,
        "boshuAvg30d": 126.5,
        "heikinAvg30d": 5.734
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 109.184,
        "saikou": 6.25,
        "heikin": 4.94,
        "boshuAvg30d": 126.5,
        "heikinAvg30d": 6.026
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 109.184,
        "saikou": 7,
        "heikin": 5.34,
        "boshuAvg30d": 126.5,
        "heikinAvg30d": 6.112
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 121.184,
        "saikou": 8.95,
        "heikin": 5.26,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 6.376
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 119.684,
        "saikou": 9.76,
        "heikin": 4.87,
        "boshuAvg30d": 138.8,
        "heikinAvg30d": 6.537
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 121.184,
        "saikou": 10,
        "heikin": 5.33,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 6.852
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 119.648,
        "saikou": 10,
        "heikin": 5.3,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 7.024
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 73.148,
        "saikou": 6.49,
        "heikin": 5.07,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 7.365
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 71.648,
        "saikou": 6.49,
        "heikin": 4.75,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 7.399
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 99.144,
        "saikou": 7.52,
        "heikin": 6.43,
        "boshuAvg30d": 98.5,
        "heikinAvg30d": 7.195
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 99.144,
        "saikou": 7.47,
        "heikin": 6.53,
        "boshuAvg30d": 98.8,
        "heikinAvg30d": 7.381
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 93.329,
        "saikou": 3.6,
        "heikin": 3.54,
        "boshuAvg30d": 98.1,
        "heikinAvg30d": 7.393
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 95.325,
        "saikou": 5.44,
        "heikin": 4.03,
        "boshuAvg30d": 98.3,
        "heikinAvg30d": 7.497
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 97.83,
        "saikou": 5.44,
        "heikin": 4.19,
        "boshuAvg30d": 99.1,
        "heikinAvg30d": 7.594
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 97.83,
        "saikou": 4.83,
        "heikin": 3.86,
        "boshuAvg30d": 99.1,
        "heikinAvg30d": 7.527
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 97.184,
        "saikou": 3.46,
        "heikin": 3.42,
        "boshuAvg30d": 96.0,
        "heikinAvg30d": 7.444
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 97.184,
        "saikou": 3.8,
        "heikin": 3.37,
        "boshuAvg30d": 96.0,
        "heikinAvg30d": 7.304
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 97.794,
        "saikou": 6.93,
        "heikin": 6,
        "boshuAvg30d": 96.0,
        "heikinAvg30d": 6.895
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 99.144,
        "saikou": 6.65,
        "heikin": 5.92,
        "boshuAvg30d": 94.6,
        "heikinAvg30d": 6.699
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 75.144,
        "saikou": 3.75,
        "heikin": 3.14,
        "boshuAvg30d": 94.3,
        "heikinAvg30d": 6.959
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 75.18,
        "saikou": 5.64,
        "heikin": 4.09,
        "boshuAvg30d": 91.8,
        "heikinAvg30d": 5.976
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 75.144,
        "saikou": 10,
        "heikin": 5.52,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 5.999
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 75.144,
        "saikou": 9.69,
        "heikin": 4.38,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 5.014
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 75.144,
        "saikou": 10,
        "heikin": 4.5,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 5.019
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 73.644,
        "saikou": 9.69,
        "heikin": 4.7,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 5.042
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 75.144,
        "saikou": 10,
        "heikin": 4.51,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 4.897
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 73.644,
        "saikou": 9.69,
        "heikin": 4.68,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 4.578
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 73.184,
        "saikou": 6.94,
        "heikin": 3.94,
        "boshuAvg30d": 139.7,
        "heikinAvg30d": 4.637
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 71.684,
        "saikou": 5.65,
        "heikin": 3.63,
        "boshuAvg30d": 139.7,
        "heikinAvg30d": 4.241
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 73.184,
        "saikou": 4.29,
        "heikin": 3.31,
        "boshuAvg30d": 139.7,
        "heikinAvg30d": 4.295
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 73.184,
        "saikou": 5.67,
        "heikin": 3.8,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 4.566
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 93.329,
        "saikou": 5.48,
        "heikin": 3.65,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 4.562
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 82.659,
        "saikou": 5.93,
        "heikin": 3.65,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 4.723
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 94.684,
        "saikou": 5.72,
        "heikin": 3.78,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.947
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 70.684,
        "saikou": 4.71,
        "heikin": 3.99,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.696
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 70.684,
        "saikou": 2,
        "heikin": 1.51,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 4.907
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 70.684,
        "saikou": 4.71,
        "heikin": 4.01,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 4.907
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 94.684,
        "saikou": 4.71,
        "heikin": 3.23,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 5.058
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 93.184,
        "saikou": 5.99,
        "heikin": 3.92,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 5.363
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 174,
        "ouatsu": 238.642,
        "saikou": 7.41,
        "heikin": 5.03,
        "boshuAvg30d": 284.3,
        "heikinAvg30d": 3.847
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 174,
        "ouatsu": 226.316,
        "saikou": 7.41,
        "heikin": 5.24,
        "boshuAvg30d": 284.3,
        "heikinAvg30d": 3.828
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 174,
        "ouatsu": 228.266,
        "saikou": 7.41,
        "heikin": 5.25,
        "boshuAvg30d": 284.3,
        "heikinAvg30d": 3.61
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 174,
        "ouatsu": 337.816,
        "saikou": 7.41,
        "heikin": 4.17,
        "boshuAvg30d": 284.3,
        "heikinAvg30d": 3.693
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 173,
        "ouatsu": 297.119,
        "saikou": 7.65,
        "heikin": 5.37,
        "boshuAvg30d": 283.1,
        "heikinAvg30d": 3.655
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 172,
        "ouatsu": 430.525,
        "saikou": 2.17,
        "heikin": 1.43,
        "boshuAvg30d": 282.3,
        "heikinAvg30d": 3.614
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 170,
        "ouatsu": 383.125,
        "saikou": 2.37,
        "heikin": 1.74,
        "boshuAvg30d": 280.4,
        "heikinAvg30d": 3.762
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 172,
        "ouatsu": 395.006,
        "saikou": 8.6,
        "heikin": 4.21,
        "boshuAvg30d": 282.3,
        "heikinAvg30d": 3.857
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 172,
        "ouatsu": 400.036,
        "saikou": 7.4,
        "heikin": 3.78,
        "boshuAvg30d": 282.4,
        "heikinAvg30d": 3.892
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 173,
        "ouatsu": 409.535,
        "saikou": 7.4,
        "heikin": 3.8,
        "boshuAvg30d": 283.3,
        "heikinAvg30d": 4.124
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 173,
        "ouatsu": 430.779,
        "saikou": 6.9,
        "heikin": 3.68,
        "boshuAvg30d": 283.3,
        "heikinAvg30d": 4.05
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 173,
        "ouatsu": 374.137,
        "saikou": 2.19,
        "heikin": 1.78,
        "boshuAvg30d": 283.3,
        "heikinAvg30d": 4.273
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 192,
        "ouatsu": 441.04,
        "saikou": 2.51,
        "heikin": 1.26,
        "boshuAvg30d": 302.6,
        "heikinAvg30d": 4.217
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 200,
        "ouatsu": 432.844,
        "saikou": 4.31,
        "heikin": 2.57,
        "boshuAvg30d": 310.6,
        "heikinAvg30d": 4.525
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 205,
        "ouatsu": 363.878,
        "saikou": 7.16,
        "heikin": 3.11,
        "boshuAvg30d": 315.6,
        "heikinAvg30d": 3.932
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 210,
        "ouatsu": 378.348,
        "saikou": 7.11,
        "heikin": 3.93,
        "boshuAvg30d": 320.6,
        "heikinAvg30d": 3.621
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 210,
        "ouatsu": 381.094,
        "saikou": 7.59,
        "heikin": 3.73,
        "boshuAvg30d": 320.6,
        "heikinAvg30d": 3.767
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 210,
        "ouatsu": 356.522,
        "saikou": 3.94,
        "heikin": 2.66,
        "boshuAvg30d": 320.6,
        "heikinAvg30d": 3.674
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 202,
        "ouatsu": 435.23,
        "saikou": 3.99,
        "heikin": 2.65,
        "boshuAvg30d": 315.4,
        "heikinAvg30d": 3.96
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 202,
        "ouatsu": 385.612,
        "saikou": 8.1,
        "heikin": 3.38,
        "boshuAvg30d": 315.4,
        "heikinAvg30d": 4.03
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 202,
        "ouatsu": 392.468,
        "saikou": 7.61,
        "heikin": 3.21,
        "boshuAvg30d": 315.8,
        "heikinAvg30d": 4.028
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 201,
        "ouatsu": 338.523,
        "saikou": 4.09,
        "heikin": 2.69,
        "boshuAvg30d": 314.8,
        "heikinAvg30d": 3.901
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 199,
        "ouatsu": 366.933,
        "saikou": 3.95,
        "heikin": 2.59,
        "boshuAvg30d": 312.6,
        "heikinAvg30d": 3.912
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 199,
        "ouatsu": 365.683,
        "saikou": 7.45,
        "heikin": 2.97,
        "boshuAvg30d": 312.6,
        "heikinAvg30d": 3.825
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 196,
        "ouatsu": 333.13,
        "saikou": 6.7,
        "heikin": 2.29,
        "boshuAvg30d": 309.6,
        "heikinAvg30d": 3.707
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 196,
        "ouatsu": 446.152,
        "saikou": 6.7,
        "heikin": 3.91,
        "boshuAvg30d": 309.6,
        "heikinAvg30d": 3.617
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 196,
        "ouatsu": 421.586,
        "saikou": 6.7,
        "heikin": 3.23,
        "boshuAvg30d": 309.6,
        "heikinAvg30d": 3.735
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 196,
        "ouatsu": 394.492,
        "saikou": 6.8,
        "heikin": 3.69,
        "boshuAvg30d": 309.4,
        "heikinAvg30d": 3.823
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 195,
        "ouatsu": 426.68,
        "saikou": 7.02,
        "heikin": 3.71,
        "boshuAvg30d": 308.4,
        "heikinAvg30d": 3.699
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 194,
        "ouatsu": 274.875,
        "saikou": 4.78,
        "heikin": 1.8,
        "boshuAvg30d": 307.6,
        "heikinAvg30d": 3.45
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 192,
        "ouatsu": 280.805,
        "saikou": 4.37,
        "heikin": 1.94,
        "boshuAvg30d": 305.8,
        "heikinAvg30d": 3.316
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 192,
        "ouatsu": 353.11,
        "saikou": 6.25,
        "heikin": 3.54,
        "boshuAvg30d": 305.8,
        "heikinAvg30d": 3.308
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 192,
        "ouatsu": 254.539,
        "saikou": 5.86,
        "heikin": 2.36,
        "boshuAvg30d": 305.8,
        "heikinAvg30d": 3.422
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 192,
        "ouatsu": 242.697,
        "saikou": 4.21,
        "heikin": 2.15,
        "boshuAvg30d": 305.8,
        "heikinAvg30d": 3.582
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 192,
        "ouatsu": 260.127,
        "saikou": 6.5,
        "heikin": 2.4,
        "boshuAvg30d": 303.8,
        "heikinAvg30d": 3.413
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 192,
        "ouatsu": 256.297,
        "saikou": 3.33,
        "heikin": 1.87,
        "boshuAvg30d": 303.4,
        "heikinAvg30d": 3.421
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 195,
        "ouatsu": 343.236,
        "saikou": 6.15,
        "heikin": 3.29,
        "boshuAvg30d": 305.2,
        "heikinAvg30d": 3.531
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 195,
        "ouatsu": 331.202,
        "saikou": 5.83,
        "heikin": 2.8,
        "boshuAvg30d": 305.2,
        "heikinAvg30d": 3.363
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 195,
        "ouatsu": 345.745,
        "saikou": 5.48,
        "heikin": 2.8,
        "boshuAvg30d": 305.4,
        "heikinAvg30d": 3.425
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 195,
        "ouatsu": 317.023,
        "saikou": 6.15,
        "heikin": 2.23,
        "boshuAvg30d": 305.4,
        "heikinAvg30d": 3.214
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 193,
        "ouatsu": 328.936,
        "saikou": 5.98,
        "heikin": 1.89,
        "boshuAvg30d": 303.4,
        "heikinAvg30d": 3.161
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 193,
        "ouatsu": 389.776,
        "saikou": 2.29,
        "heikin": 1.72,
        "boshuAvg30d": 303.4,
        "heikinAvg30d": 3.38
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 193,
        "ouatsu": 310.732,
        "saikou": 5.85,
        "heikin": 1.52,
        "boshuAvg30d": 303.2,
        "heikinAvg30d": 3.06
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 193,
        "ouatsu": 325.106,
        "saikou": 3.05,
        "heikin": 1.67,
        "boshuAvg30d": 303.2,
        "heikinAvg30d": 3.126
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 193,
        "ouatsu": 335.761,
        "saikou": 7.96,
        "heikin": 3.55,
        "boshuAvg30d": 306.6,
        "heikinAvg30d": 2.89
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 191,
        "ouatsu": 403.338,
        "saikou": 2.29,
        "heikin": 1.24,
        "boshuAvg30d": 301.6,
        "heikinAvg30d": 3.106
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 189,
        "ouatsu": 412.785,
        "saikou": 2.29,
        "heikin": 1.42,
        "boshuAvg30d": 299.6,
        "heikinAvg30d": 3.57
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 188,
        "ouatsu": 454.56,
        "saikou": 2.34,
        "heikin": 1.98,
        "boshuAvg30d": 298.6,
        "heikinAvg30d": 3.66
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 59,
        "ouatsu": 271.707,
        "saikou": 1.31,
        "heikin": 0.92,
        "boshuAvg30d": 99.5,
        "heikinAvg30d": 1.743
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 59,
        "ouatsu": 286.222,
        "saikou": 4.35,
        "heikin": 2.03,
        "boshuAvg30d": 99.5,
        "heikinAvg30d": 1.506
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 59,
        "ouatsu": 284.208,
        "saikou": 8.88,
        "heikin": 2.19,
        "boshuAvg30d": 99.5,
        "heikinAvg30d": 1.527
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 291.982,
        "saikou": 8.5,
        "heikin": 2.7,
        "boshuAvg30d": 99.5,
        "heikinAvg30d": 1.57
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 58,
        "ouatsu": 278.097,
        "saikou": 7.84,
        "heikin": 1.85,
        "boshuAvg30d": 98.5,
        "heikinAvg30d": 1.508
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 277.973,
        "saikou": 1.78,
        "heikin": 1.36,
        "boshuAvg30d": 98.5,
        "heikinAvg30d": 1.508
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 301.81,
        "saikou": 1.7,
        "heikin": 1.32,
        "boshuAvg30d": 97.6,
        "heikinAvg30d": 1.411
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 284.92,
        "saikou": 1.8,
        "heikin": 1.36,
        "boshuAvg30d": 97.6,
        "heikinAvg30d": 1.526
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 58,
        "ouatsu": 305.701,
        "saikou": 1.8,
        "heikin": 1.36,
        "boshuAvg30d": 98.5,
        "heikinAvg30d": 1.539
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 58,
        "ouatsu": 272.724,
        "saikou": 2.72,
        "heikin": 1.3,
        "boshuAvg30d": 98.5,
        "heikinAvg30d": 1.535
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 58,
        "ouatsu": 293.761,
        "saikou": 1.29,
        "heikin": 1.19,
        "boshuAvg30d": 98.5,
        "heikinAvg30d": 1.551
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 58,
        "ouatsu": 307.344,
        "saikou": 2.46,
        "heikin": 1.28,
        "boshuAvg30d": 98.5,
        "heikinAvg30d": 1.508
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 328.918,
        "saikou": 1.29,
        "heikin": 1.19,
        "boshuAvg30d": 107.6,
        "heikinAvg30d": 1.761
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 71,
        "ouatsu": 328.918,
        "saikou": 1.4,
        "heikin": 0.91,
        "boshuAvg30d": 111.5,
        "heikinAvg30d": 1.824
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 74,
        "ouatsu": 336.134,
        "saikou": 2.16,
        "heikin": 0.97,
        "boshuAvg30d": 114.5,
        "heikinAvg30d": 2.004
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 76,
        "ouatsu": 353.683,
        "saikou": 2.1,
        "heikin": 1.18,
        "boshuAvg30d": 116.5,
        "heikinAvg30d": 2.007
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 76,
        "ouatsu": 373.815,
        "saikou": 2.1,
        "heikin": 1.86,
        "boshuAvg30d": 116.5,
        "heikinAvg30d": 2.102
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 76,
        "ouatsu": 371.831,
        "saikou": 2.72,
        "heikin": 2.34,
        "boshuAvg30d": 116.5,
        "heikinAvg30d": 2.238
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 81,
        "ouatsu": 375.813,
        "saikou": 4.68,
        "heikin": 2.57,
        "boshuAvg30d": 121.3,
        "heikinAvg30d": 2.663
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 81,
        "ouatsu": 357.671,
        "saikou": 5.2,
        "heikin": 2.7,
        "boshuAvg30d": 121.3,
        "heikinAvg30d": 2.716
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 81,
        "ouatsu": 345.782,
        "saikou": 5.16,
        "heikin": 2.75,
        "boshuAvg30d": 121.5,
        "heikinAvg30d": 2.933
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 81,
        "ouatsu": 349.761,
        "saikou": 5.35,
        "heikin": 2.89,
        "boshuAvg30d": 121.3,
        "heikinAvg30d": 2.954
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 80,
        "ouatsu": 355.677,
        "saikou": 9.58,
        "heikin": 2.74,
        "boshuAvg30d": 120.3,
        "heikinAvg30d": 2.821
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 79,
        "ouatsu": 351.695,
        "saikou": 4.98,
        "heikin": 2.58,
        "boshuAvg30d": 119.3,
        "heikinAvg30d": 2.874
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 75,
        "ouatsu": 327.995,
        "saikou": 4.95,
        "heikin": 2.6,
        "boshuAvg30d": 115.5,
        "heikinAvg30d": 2.827
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 75,
        "ouatsu": 337.875,
        "saikou": 4.49,
        "heikin": 2.46,
        "boshuAvg30d": 115.5,
        "heikinAvg30d": 2.803
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 75,
        "ouatsu": 371.835,
        "saikou": 8.39,
        "heikin": 2.63,
        "boshuAvg30d": 115.5,
        "heikinAvg30d": 2.696
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 74,
        "ouatsu": 373.819,
        "saikou": 8.5,
        "heikin": 3.19,
        "boshuAvg30d": 114.6,
        "heikinAvg30d": 2.711
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 74,
        "ouatsu": 369.734,
        "saikou": 8.36,
        "heikin": 2.9,
        "boshuAvg30d": 114.5,
        "heikinAvg30d": 2.922
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 74,
        "ouatsu": 350.75,
        "saikou": 2.49,
        "heikin": 2.01,
        "boshuAvg30d": 114.5,
        "heikinAvg30d": 2.879
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 72,
        "ouatsu": 379.438,
        "saikou": 4.68,
        "heikin": 2.42,
        "boshuAvg30d": 112.6,
        "heikinAvg30d": 2.623
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 72,
        "ouatsu": 375.85,
        "saikou": 4.68,
        "heikin": 2.36,
        "boshuAvg30d": 112.6,
        "heikinAvg30d": 2.777
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 72,
        "ouatsu": 339.162,
        "saikou": 4.68,
        "heikin": 2.28,
        "boshuAvg30d": 112.6,
        "heikinAvg30d": 2.713
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 72,
        "ouatsu": 340.648,
        "saikou": 2.49,
        "heikin": 2.16,
        "boshuAvg30d": 112.6,
        "heikinAvg30d": 2.769
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 72,
        "ouatsu": 331.448,
        "saikou": 2.49,
        "heikin": 2.16,
        "boshuAvg30d": 112.6,
        "heikinAvg30d": 2.578
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 71,
        "ouatsu": 327.865,
        "saikou": 2.49,
        "heikin": 2.05,
        "boshuAvg30d": 111.8,
        "heikinAvg30d": 2.634
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 69,
        "ouatsu": 337.231,
        "saikou": 1.99,
        "heikin": 1.57,
        "boshuAvg30d": 109.8,
        "heikinAvg30d": 2.27
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 69,
        "ouatsu": 348.429,
        "saikou": 2,
        "heikin": 1.6,
        "boshuAvg30d": 109.8,
        "heikinAvg30d": 2.163
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 69,
        "ouatsu": 367.443,
        "saikou": 1.56,
        "heikin": 1.4,
        "boshuAvg30d": 109.8,
        "heikinAvg30d": 1.905
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 69,
        "ouatsu": 387.034,
        "saikou": 1.5,
        "heikin": 1.15,
        "boshuAvg30d": 109.8,
        "heikinAvg30d": 1.757
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 69,
        "ouatsu": 394.129,
        "saikou": 1.59,
        "heikin": 0.98,
        "boshuAvg30d": 109.8,
        "heikinAvg30d": 1.679
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 69,
        "ouatsu": 394.33,
        "saikou": 1.61,
        "heikin": 1.17,
        "boshuAvg30d": 109.8,
        "heikinAvg30d": 1.733
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 70,
        "ouatsu": 381.154,
        "saikou": 1.55,
        "heikin": 1.02,
        "boshuAvg30d": 110.6,
        "heikinAvg30d": 1.609
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 71,
        "ouatsu": 367.206,
        "saikou": 2.44,
        "heikin": 1.17,
        "boshuAvg30d": 111.6,
        "heikinAvg30d": 1.851
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 71,
        "ouatsu": 363.222,
        "saikou": 1.39,
        "heikin": 1,
        "boshuAvg30d": 111.6,
        "heikinAvg30d": 1.859
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 365.206,
        "saikou": 1.61,
        "heikin": 1,
        "boshuAvg30d": 110.6,
        "heikinAvg30d": 1.87
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 371.032,
        "saikou": 1.39,
        "heikin": 0.99,
        "boshuAvg30d": 109.6,
        "heikinAvg30d": 1.751
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 374.69,
        "saikou": 1.39,
        "heikin": 1.04,
        "boshuAvg30d": 106.6,
        "heikinAvg30d": 1.883
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 47.928,
        "saikou": 1.06,
        "heikin": 0.77,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 1.066
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2,
        "heikin": 0.66,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 1.025
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 20.93,
        "saikou": 1.75,
        "heikin": 0.5,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 1.108
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 1.05
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.65,
        "heikin": 0.59,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 1.023
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 47.928,
        "saikou": 1.5,
        "heikin": 0.83,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 1.123
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 47.928,
        "saikou": 1.06,
        "heikin": 0.77,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 1.28
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 47.928,
        "saikou": 1.03,
        "heikin": 0.75,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 1.622
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 1.438
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.3,
        "heikin": 0.57,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 1.366
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 77.196,
        "saikou": 1.95,
        "heikin": 0.47,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 1.685
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 82.928,
        "saikou": 2.3,
        "heikin": 0.47,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 1.73
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 82.928,
        "saikou": 1.9,
        "heikin": 0.46,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.829
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 47.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 60.3,
        "heikinAvg30d": 1.691
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 28.928,
        "saikou": 1.06,
        "heikin": 1.06,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 1.615
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.606
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.764
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.452
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 28.928,
        "saikou": 10,
        "heikin": 9.05,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.721
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 28.928,
        "saikou": 10,
        "heikin": 9.14,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 3.142
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 28.928,
        "saikou": 10,
        "heikin": 9.46,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 4.059
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 28.928,
        "saikou": 10,
        "heikin": 9.55,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 4.209
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 28.928,
        "saikou": 10,
        "heikin": 9.22,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 3.377
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 28.928,
        "saikou": 10,
        "heikin": 9.22,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 3.184
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.535
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.178
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 3.465
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 3.069
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 8.98,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.82
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.547
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.27,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 3.524
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.44,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 4.369
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 8.96,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 3.402
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.22,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 3.071
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 2.736
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 3.533
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 2.711
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 2.842
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 2.65
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 2.243
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 22.928,
        "saikou": 7.82,
        "heikin": 7.82,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.071
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 5.1,
        "heikin": 5.1,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.655
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 5.1,
        "heikin": 5.1,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.678
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 4.61,
        "heikin": 4.4,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.739
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 3.81,
        "heikin": 3.81,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 2.28
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 3.17,
        "heikin": 3.17,
        "boshuAvg30d": 62.3,
        "heikinAvg30d": 1.853
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 22.928,
        "saikou": 3.14,
        "heikin": 3.14,
        "boshuAvg30d": 61.3,
        "heikinAvg30d": 1.508
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 22.928,
        "saikou": 0.4,
        "heikin": 0.4,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 1.319
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 141.615,
        "saikou": 1.49,
        "heikin": 0.89,
        "boshuAvg30d": 128.7,
        "heikinAvg30d": 1.401
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 113.597,
        "saikou": 1.79,
        "heikin": 1.06,
        "boshuAvg30d": 128.7,
        "heikinAvg30d": 1.138
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 107.749,
        "saikou": 1.49,
        "heikin": 1.03,
        "boshuAvg30d": 128.7,
        "heikinAvg30d": 1.065
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 108.078,
        "saikou": 1.49,
        "heikin": 1.03,
        "boshuAvg30d": 128.7,
        "heikinAvg30d": 1.021
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 106.267,
        "saikou": 1.79,
        "heikin": 1.05,
        "boshuAvg30d": 127.7,
        "heikinAvg30d": 0.951
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 111.076,
        "saikou": 1.79,
        "heikin": 1.32,
        "boshuAvg30d": 127.5,
        "heikinAvg30d": 1.17
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 99.349,
        "saikou": 1.94,
        "heikin": 1.61,
        "boshuAvg30d": 127.7,
        "heikinAvg30d": 1.347
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 103.337,
        "saikou": 1.89,
        "heikin": 1.57,
        "boshuAvg30d": 127.7,
        "heikinAvg30d": 1.566
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 103.337,
        "saikou": 1.9,
        "heikin": 1.59,
        "boshuAvg30d": 128.7,
        "heikinAvg30d": 1.466
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 103.337,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 128.7,
        "heikinAvg30d": 1.58
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 103.337,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 128.7,
        "heikinAvg30d": 1.537
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 88.337,
        "saikou": 1.99,
        "heikin": 1.6,
        "boshuAvg30d": 128.7,
        "heikinAvg30d": 1.382
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 103.337,
        "saikou": 1.94,
        "heikin": 1.6,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 1.566
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 101.339,
        "saikou": 1.59,
        "heikin": 1.54,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 1.522
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 97.351,
        "saikou": 2.09,
        "heikin": 1.84,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.592
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 97.351,
        "saikou": 2.09,
        "heikin": 1.86,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 1.649
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 89.763,
        "saikou": 2.09,
        "heikin": 1.87,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 1.712
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 97.618,
        "saikou": 3,
        "heikin": 2.65,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 2.103
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 82.618,
        "saikou": 3,
        "heikin": 2.65,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 2.261
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 97.618,
        "saikou": 3.95,
        "heikin": 2.9,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 2.226
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 93.693,
        "saikou": 5.95,
        "heikin": 3.19,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 2.466
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 93.693,
        "saikou": 5.95,
        "heikin": 3.24,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 2.584
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 95.678,
        "saikou": 5.95,
        "heikin": 3.23,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 2.693
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 95.678,
        "saikou": 3,
        "heikin": 2.72,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 2.488
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 93.808,
        "saikou": 2.45,
        "heikin": 2.32,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.293
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 92.365,
        "saikou": 2.39,
        "heikin": 2.32,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.389
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 94.305,
        "saikou": 2.43,
        "heikin": 2.29,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.536
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 95.748,
        "saikou": 2.35,
        "heikin": 2.26,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.396
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 99.616,
        "saikou": 4.45,
        "heikin": 2.74,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.274
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 99.616,
        "saikou": 2.59,
        "heikin": 2.39,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.155
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 99.616,
        "saikou": 3.95,
        "heikin": 2.84,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.298
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 99.616,
        "saikou": 3.95,
        "heikin": 2.84,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.554
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 99.616,
        "saikou": 3.95,
        "heikin": 2.85,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.438
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 93.63,
        "saikou": 2.38,
        "heikin": 1.99,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.258
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 93.63,
        "saikou": 2.5,
        "heikin": 2.16,
        "boshuAvg30d": 148.2,
        "heikinAvg30d": 2.27
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 93.63,
        "saikou": 2.5,
        "heikin": 2.07,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.544
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 90.227,
        "saikou": 1.95,
        "heikin": 1.85,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 2.055
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 90.227,
        "saikou": 2.02,
        "heikin": 1.92,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 2.081
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 99.616,
        "saikou": 1.59,
        "heikin": 1.59,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 1.994
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 99.616,
        "saikou": 1.89,
        "heikin": 1.63,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 1.935
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 97.631,
        "saikou": 1.89,
        "heikin": 1.65,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 1.861
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 93.764,
        "saikou": 1.94,
        "heikin": 1.7,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 1.887
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 102.629,
        "saikou": 1.99,
        "heikin": 1.6,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 1.843
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 119.36,
        "saikou": 2,
        "heikin": 1.5,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 1.911
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 138.974,
        "saikou": 2,
        "heikin": 1.32,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 1.927
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 156.59,
        "saikou": 1.79,
        "heikin": 0.97,
        "boshuAvg30d": 141.7,
        "heikinAvg30d": 1.876
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 158.588,
        "saikou": 1.79,
        "heikin": 0.98,
        "boshuAvg30d": 139.8,
        "heikinAvg30d": 1.543
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 158.588,
        "saikou": 1.94,
        "heikin": 1.07,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 1.656
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 112.126,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.131
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 111.126,
        "saikou": 2.29,
        "heikin": 1.77,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.272
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 112.926,
        "saikou": 2.29,
        "heikin": 1.75,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.117
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 114.916,
        "saikou": 2.29,
        "heikin": 1.74,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 1.954
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 114.916,
        "saikou": 2.29,
        "heikin": 1.76,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 1.941
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 114.916,
        "saikou": 2.29,
        "heikin": 1.74,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.15
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 131.775,
        "saikou": 2.29,
        "heikin": 1.69,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.321
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 131.775,
        "saikou": 2.29,
        "heikin": 1.71,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.653
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 131.775,
        "saikou": 2.29,
        "heikin": 1.73,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.945
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 131.775,
        "saikou": 2.29,
        "heikin": 1.72,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 3.371
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 131.775,
        "saikou": 2.29,
        "heikin": 1.71,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 3.265
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 131.775,
        "saikou": 2.29,
        "heikin": 1.71,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 3.213
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 131.775,
        "saikou": 2.29,
        "heikin": 1.71,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 3.254
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 131.775,
        "saikou": 2.29,
        "heikin": 1.71,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 2.745
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 125.303,
        "saikou": 2.29,
        "heikin": 1.68,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.813
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 131.775,
        "saikou": 2.29,
        "heikin": 1.85,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 1.537
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 131.775,
        "saikou": 5.78,
        "heikin": 3.27,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 1.621
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 131.775,
        "saikou": 9.76,
        "heikin": 4.76,
        "boshuAvg30d": 145.7,
        "heikinAvg30d": 1.716
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 113.891,
        "saikou": 9.81,
        "heikin": 5.4,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 1.952
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 129.758,
        "saikou": 9.81,
        "heikin": 5.97,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 1.951
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 129.758,
        "saikou": 8.27,
        "heikin": 5.17,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 1.772
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 129.758,
        "saikou": 9.76,
        "heikin": 5.94,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 1.678
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 129.758,
        "saikou": 7.99,
        "heikin": 4.75,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 1.752
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 129.758,
        "saikou": 6.63,
        "heikin": 4.26,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 1.792
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 129.758,
        "saikou": 2.65,
        "heikin": 2.39,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.677
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 129.758,
        "saikou": 2.65,
        "heikin": 2.4,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.767
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 143.561,
        "saikou": 6.38,
        "heikin": 2.76,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.016
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 143.561,
        "saikou": 8.21,
        "heikin": 5.28,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 1.933
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 143.561,
        "saikou": 7.99,
        "heikin": 5.16,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 1.975
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 143.561,
        "saikou": 9.81,
        "heikin": 6.01,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.03
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 143.561,
        "saikou": 7.12,
        "heikin": 4.74,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 2.345
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 80.093,
        "saikou": 7.99,
        "heikin": 3.01,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 2.603
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 80.093,
        "saikou": 6.38,
        "heikin": 2.95,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 3.005
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 127.694,
        "saikou": 8.76,
        "heikin": 5.15,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 3.823
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 127.694,
        "saikou": 7.07,
        "heikin": 4.52,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 4.283
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 127.694,
        "saikou": 7.07,
        "heikin": 4.53,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 4.306
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 126.704,
        "saikou": 7.07,
        "heikin": 4.79,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 4.398
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 126.704,
        "saikou": 7.07,
        "heikin": 4.56,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 4.358
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 144.588,
        "saikou": 7.07,
        "heikin": 4.46,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 4.014
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 146.578,
        "saikou": 7.07,
        "heikin": 4.44,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 3.548
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 162.445,
        "saikou": 7.07,
        "heikin": 4.92,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.811
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 162.445,
        "saikou": 7.07,
        "heikin": 4.92,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 3.62
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 162.445,
        "saikou": 6.5,
        "heikin": 4.83,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 3.893
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 161.445,
        "saikou": 6.38,
        "heikin": 4.4,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 3.571
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 147.642,
        "saikou": 5.76,
        "heikin": 3.7,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 3.462
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 147.642,
        "saikou": 5.12,
        "heikin": 3.5,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 2.912
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 131.207,
        "saikou": 5.09,
        "heikin": 3.51,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 2.956
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 145.842,
        "saikou": 2.31,
        "heikin": 2.08,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 2.069
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.867
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.829
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.796
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.792
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.792
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.804
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 221.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.806
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 209.8,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.848
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 221.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.876
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 221.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.911
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 221.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.883
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 221.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.845
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.47,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.876
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.45,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.816
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.45,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.767
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 45.8,
        "heikinAvg30d": 0.782
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 45.8,
        "heikinAvg30d": 0.726
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 175.343,
        "saikou": 1.6,
        "heikin": 1.31,
        "boshuAvg30d": 45.8,
        "heikinAvg30d": 0.784
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 1.11,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.043
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 1.07,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.023
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 137.843,
        "saikou": 1.6,
        "heikin": 1.45,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.017
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 137.843,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 0.952
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 137.843,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.008
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 137.843,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.024
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 0.993
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.012
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.037
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 1.07,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.048
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 1.11,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.074
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 1.11,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.009
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 1.2,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.052
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 1.2,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.109
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 1.2,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.222
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 171.343,
        "saikou": 1.6,
        "heikin": 1.28,
        "boshuAvg30d": 44.2,
        "heikinAvg30d": 1.313
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 180.343,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.45
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 180.343,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.414
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.412
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 1.25,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.46
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 184.343,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.336
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.357
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.339
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.329
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.937
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.921
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 181.843,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.918
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 171.843,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.907
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 171.843,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.957
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 171.843,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.948
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 195.601,
        "saikou": 9.31,
        "heikin": 6.31,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 4.661
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 161.523,
        "saikou": 8.59,
        "heikin": 5.23,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 4.293
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 193.561,
        "saikou": 8.8,
        "heikin": 6.11,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 4.189
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 195.534,
        "saikou": 8.77,
        "heikin": 6.09,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 4.049
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 195.532,
        "saikou": 8.7,
        "heikin": 6.04,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 4.013
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 190.554,
        "saikou": 7.57,
        "heikin": 5.05,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 4.309
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 264.258,
        "saikou": 8.39,
        "heikin": 5.38,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.488
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 260.428,
        "saikou": 8.57,
        "heikin": 5.9,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 4.976
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 264.254,
        "saikou": 8.9,
        "heikin": 6.16,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.223
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 264.253,
        "saikou": 9.15,
        "heikin": 6.43,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.592
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 211.327,
        "saikou": 9.1,
        "heikin": 6.12,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.795
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 213.301,
        "saikou": 8.97,
        "heikin": 6.03,
        "boshuAvg30d": 168.3,
        "heikinAvg30d": 5.698
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 209.347,
        "saikou": 9.15,
        "heikin": 6.06,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 5.296
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 209.346,
        "saikou": 9.6,
        "heikin": 6.31,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 4.593
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 208.268,
        "saikou": 10,
        "heikin": 6.68,
        "boshuAvg30d": 174.2,
        "heikinAvg30d": 3.447
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 178.266,
        "saikou": 9.86,
        "heikin": 5.94,
        "boshuAvg30d": 175.2,
        "heikinAvg30d": 3.244
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 161.265,
        "saikou": 10,
        "heikin": 5.57,
        "boshuAvg30d": 175.2,
        "heikinAvg30d": 3.233
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 166.239,
        "saikou": 10,
        "heikin": 5.66,
        "boshuAvg30d": 175.2,
        "heikinAvg30d": 3.367
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 227.999,
        "saikou": 10,
        "heikin": 7.24,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 3.368
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 301.998,
        "saikou": 10,
        "heikin": 7.95,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 3.252
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 257.926,
        "saikou": 10,
        "heikin": 7.61,
        "boshuAvg30d": 180.2,
        "heikinAvg30d": 3.189
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 181.937,
        "saikou": 10,
        "heikin": 6.58,
        "boshuAvg30d": 181.0,
        "heikinAvg30d": 3.163
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 185.998,
        "saikou": 10,
        "heikin": 6.53,
        "boshuAvg30d": 181.2,
        "heikinAvg30d": 3.058
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 91.998,
        "saikou": 10,
        "heikin": 2.81,
        "boshuAvg30d": 181.2,
        "heikinAvg30d": 3.139
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 174.744,
        "saikou": 10,
        "heikin": 7.14,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 2.714
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 180.547,
        "saikou": 10,
        "heikin": 6.93,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 2.869
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 191.284,
        "saikou": 10,
        "heikin": 6.84,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.318
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 200.858,
        "saikou": 10,
        "heikin": 6.76,
        "boshuAvg30d": 179.3,
        "heikinAvg30d": 3.964
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 100.858,
        "saikou": 10,
        "heikin": 2.97,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 3.984
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 170.858,
        "saikou": 10,
        "heikin": 6.15,
        "boshuAvg30d": 177.3,
        "heikinAvg30d": 4.482
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 151.858,
        "saikou": 10,
        "heikin": 5.8,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 4.873
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 158.032,
        "saikou": 10,
        "heikin": 6.4,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 5.216
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 229.941,
        "saikou": 10,
        "heikin": 7.67,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 6.252
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 228.257,
        "saikou": 10,
        "heikin": 7.53,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 6.818
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 247.817,
        "saikou": 10,
        "heikin": 7.5,
        "boshuAvg30d": 172.3,
        "heikinAvg30d": 6.963
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 241.258,
        "saikou": 10,
        "heikin": 7.53,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 7.035
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 238.774,
        "saikou": 10,
        "heikin": 7.51,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 7.027
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 244.447,
        "saikou": 10,
        "heikin": 7.53,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.966
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 254.755,
        "saikou": 10,
        "heikin": 7.45,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.58
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 256.744,
        "saikou": 10,
        "heikin": 7.23,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.079
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 259.661,
        "saikou": 10,
        "heikin": 7.19,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 6.276
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 255.932,
        "saikou": 9.86,
        "heikin": 7.03,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 5.92
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 263.862,
        "saikou": 9.86,
        "heikin": 7.03,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 5.896
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 223.51,
        "saikou": 9.77,
        "heikin": 6.71,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 5.842
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 223.509,
        "saikou": 9.87,
        "heikin": 6.78,
        "boshuAvg30d": 171.3,
        "heikinAvg30d": 6.057
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 229.507,
        "saikou": 10,
        "heikin": 6.92,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 5.716
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 229.505,
        "saikou": 10,
        "heikin": 6.9,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 5.565
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 218.546,
        "saikou": 10,
        "heikin": 6.86,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 4.732
      }
    ]
  }
};
