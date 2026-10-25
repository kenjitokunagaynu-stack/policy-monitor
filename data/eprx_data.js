// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/25〜2026/10/24）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-25",
  "fetchedAt": "2026-10-25",
  "avgWindowLabel": "過去30日平均（2026/09/25〜2026/10/24）",
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
      "ouatsu": 1261.409,
      "saikou": 10,
      "heikin": 3.2,
      "boshuAvg30d": 1092.1,
      "heikinAvg30d": 3.016
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 934,
      "ouatsu": 1327.331,
      "saikou": 8.4,
      "heikin": 2.71,
      "boshuAvg30d": 1092.1,
      "heikinAvg30d": 2.919
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 934,
      "ouatsu": 1326.685,
      "saikou": 8.06,
      "heikin": 3,
      "boshuAvg30d": 1092.1,
      "heikinAvg30d": 2.824
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 934,
      "ouatsu": 1504.44,
      "saikou": 8.07,
      "heikin": 2.95,
      "boshuAvg30d": 1092.1,
      "heikinAvg30d": 2.795
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 931,
      "ouatsu": 1508.096,
      "saikou": 8.26,
      "heikin": 2.9,
      "boshuAvg30d": 1088.7,
      "heikinAvg30d": 2.825
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 930,
      "ouatsu": 1545.259,
      "saikou": 8.39,
      "heikin": 2.94,
      "boshuAvg30d": 1087.7,
      "heikinAvg30d": 2.883
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 927,
      "ouatsu": 1655.827,
      "saikou": 8.39,
      "heikin": 2.53,
      "boshuAvg30d": 1099.6,
      "heikinAvg30d": 3.07
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 929,
      "ouatsu": 1660.143,
      "saikou": 8.81,
      "heikin": 2.98,
      "boshuAvg30d": 1101.4,
      "heikinAvg30d": 3.254
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 931,
      "ouatsu": 1637.664,
      "saikou": 9.01,
      "heikin": 2.93,
      "boshuAvg30d": 1103.6,
      "heikinAvg30d": 3.327
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 932,
      "ouatsu": 1651.755,
      "saikou": 9.06,
      "heikin": 3,
      "boshuAvg30d": 1104.4,
      "heikinAvg30d": 3.531
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 932,
      "ouatsu": 1644.077,
      "saikou": 10,
      "heikin": 3.15,
      "boshuAvg30d": 1104.4,
      "heikinAvg30d": 3.585
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 932,
      "ouatsu": 1620.623,
      "saikou": 8.94,
      "heikin": 2.83,
      "boshuAvg30d": 1104.4,
      "heikinAvg30d": 3.596
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 992,
      "ouatsu": 1670.533,
      "saikou": 8.82,
      "heikin": 3.09,
      "boshuAvg30d": 1165.6,
      "heikinAvg30d": 3.61
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1015,
      "ouatsu": 1726.513,
      "saikou": 8.96,
      "heikin": 3.11,
      "boshuAvg30d": 1188.2,
      "heikinAvg30d": 3.459
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1036,
      "ouatsu": 1570.659,
      "saikou": 8.78,
      "heikin": 2.94,
      "boshuAvg30d": 1209.6,
      "heikinAvg30d": 3.015
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1053,
      "ouatsu": 1619.115,
      "saikou": 9.47,
      "heikin": 2.96,
      "boshuAvg30d": 1226.8,
      "heikinAvg30d": 2.818
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1053,
      "ouatsu": 1612.923,
      "saikou": 9.55,
      "heikin": 2.47,
      "boshuAvg30d": 1227.0,
      "heikinAvg30d": 2.986
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1053,
      "ouatsu": 1779.3,
      "saikou": 10,
      "heikin": 2.31,
      "boshuAvg30d": 1227.0,
      "heikinAvg30d": 2.978
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 985,
      "ouatsu": 1696.913,
      "saikou": 10,
      "heikin": 2.46,
      "boshuAvg30d": 1191.7,
      "heikinAvg30d": 3.188
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 988,
      "ouatsu": 1718.888,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1194.9,
      "heikinAvg30d": 3.204
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 993,
      "ouatsu": 1715.858,
      "saikou": 10,
      "heikin": 3.1,
      "boshuAvg30d": 1197.9,
      "heikinAvg30d": 3.257
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 993,
      "ouatsu": 1712.72,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1197.9,
      "heikinAvg30d": 3.196
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 990,
      "ouatsu": 1654.143,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1194.9,
      "heikinAvg30d": 3.213
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 989,
      "ouatsu": 1721.104,
      "saikou": 10,
      "heikin": 3.38,
      "boshuAvg30d": 1193.9,
      "heikinAvg30d": 3.153
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 969,
      "ouatsu": 1533.425,
      "saikou": 10,
      "heikin": 3.66,
      "boshuAvg30d": 1176.2,
      "heikinAvg30d": 3.009
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 969,
      "ouatsu": 1558.54,
      "saikou": 10,
      "heikin": 3.66,
      "boshuAvg30d": 1176.2,
      "heikinAvg30d": 3.006
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 969,
      "ouatsu": 1696.476,
      "saikou": 10,
      "heikin": 3.34,
      "boshuAvg30d": 1176.2,
      "heikinAvg30d": 3.111
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 967,
      "ouatsu": 1729,
      "saikou": 10,
      "heikin": 3.3,
      "boshuAvg30d": 1173.4,
      "heikinAvg30d": 3.247
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 964,
      "ouatsu": 1846.393,
      "saikou": 10,
      "heikin": 2.89,
      "boshuAvg30d": 1170.0,
      "heikinAvg30d": 3.264
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 958,
      "ouatsu": 1810.738,
      "saikou": 10,
      "heikin": 2.71,
      "boshuAvg30d": 1163.8,
      "heikinAvg30d": 3.3
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1024,
      "ouatsu": 1862.651,
      "saikou": 9.78,
      "heikin": 2.43,
      "boshuAvg30d": 1202.2,
      "heikinAvg30d": 3.264
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1024,
      "ouatsu": 1783.451,
      "saikou": 9.67,
      "heikin": 2.57,
      "boshuAvg30d": 1202.2,
      "heikinAvg30d": 3.471
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1025,
      "ouatsu": 1784.16,
      "saikou": 10,
      "heikin": 2.62,
      "boshuAvg30d": 1203.0,
      "heikinAvg30d": 3.892
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1024,
      "ouatsu": 1555.085,
      "saikou": 10,
      "heikin": 2.76,
      "boshuAvg30d": 1201.8,
      "heikinAvg30d": 4.192
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1022,
      "ouatsu": 1583.755,
      "saikou": 10,
      "heikin": 2.58,
      "boshuAvg30d": 1197.4,
      "heikinAvg30d": 4.15
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1017,
      "ouatsu": 1679.31,
      "saikou": 10,
      "heikin": 2.95,
      "boshuAvg30d": 1192.2,
      "heikinAvg30d": 4.223
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1012,
      "ouatsu": 1644.615,
      "saikou": 10,
      "heikin": 3.03,
      "boshuAvg30d": 1185.6,
      "heikinAvg30d": 4.05
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1012,
      "ouatsu": 1684.689,
      "saikou": 10,
      "heikin": 2.88,
      "boshuAvg30d": 1185.6,
      "heikinAvg30d": 3.991
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1012,
      "ouatsu": 1855.756,
      "saikou": 10,
      "heikin": 2.49,
      "boshuAvg30d": 1185.8,
      "heikinAvg30d": 3.833
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1011,
      "ouatsu": 1773.946,
      "saikou": 10,
      "heikin": 2.53,
      "boshuAvg30d": 1184.8,
      "heikinAvg30d": 3.618
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1003,
      "ouatsu": 1807.058,
      "saikou": 10,
      "heikin": 2.27,
      "boshuAvg30d": 1177.4,
      "heikinAvg30d": 3.56
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1003,
      "ouatsu": 1671.893,
      "saikou": 10,
      "heikin": 2.54,
      "boshuAvg30d": 1176.6,
      "heikinAvg30d": 3.495
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 913,
      "ouatsu": 1685.034,
      "saikou": 9.58,
      "heikin": 2.41,
      "boshuAvg30d": 1097.5,
      "heikinAvg30d": 3.392
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 916,
      "ouatsu": 1771.235,
      "saikou": 8.82,
      "heikin": 2.37,
      "boshuAvg30d": 1100.5,
      "heikinAvg30d": 3.435
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 917,
      "ouatsu": 1582.288,
      "saikou": 9.07,
      "heikin": 2.64,
      "boshuAvg30d": 1104.9,
      "heikinAvg30d": 3.392
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 912,
      "ouatsu": 1714.845,
      "saikou": 8.85,
      "heikin": 2.39,
      "boshuAvg30d": 1096.5,
      "heikinAvg30d": 3.248
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 903,
      "ouatsu": 1672.226,
      "saikou": 9.13,
      "heikin": 2.42,
      "boshuAvg30d": 1087.9,
      "heikinAvg30d": 3.32
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 896,
      "ouatsu": 1590.396,
      "saikou": 8.8,
      "heikin": 2.91,
      "boshuAvg30d": 1080.7,
      "heikinAvg30d": 3.03
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
        "saikou": 7.75,
        "heikin": 2.99,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 3.787
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 146.008,
        "saikou": 7.8,
        "heikin": 2.52,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 3.691
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 115.958,
        "saikou": 7.69,
        "heikin": 2.57,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 3.683
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 146.138,
        "saikou": 7.8,
        "heikin": 3.11,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 3.479
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 156.908,
        "saikou": 7.69,
        "heikin": 2.93,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 3.92
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 222.908,
        "saikou": 5.77,
        "heikin": 2.5,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 3.593
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 208.958,
        "saikou": 5.8,
        "heikin": 2.05,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 3.902
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 194.958,
        "saikou": 4.85,
        "heikin": 1.98,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 3.798
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 196.908,
        "saikou": 8.78,
        "heikin": 1.88,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 3.916
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 214.95,
        "saikou": 1.53,
        "heikin": 1.42,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 3.671
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 213,
        "saikou": 1.53,
        "heikin": 1.42,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 3.942
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 214.968,
        "saikou": 1.53,
        "heikin": 1.41,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 4.017
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 193.908,
        "saikou": 4.78,
        "heikin": 2.87,
        "boshuAvg30d": 52.2,
        "heikinAvg30d": 3.778
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 242.208,
        "saikou": 4.23,
        "heikin": 2.68,
        "boshuAvg30d": 52.2,
        "heikinAvg30d": 3.845
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 153.908,
        "saikou": 8.78,
        "heikin": 3.36,
        "boshuAvg30d": 52.4,
        "heikinAvg30d": 3.161
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 202.208,
        "saikou": 9.47,
        "heikin": 3.55,
        "boshuAvg30d": 53.2,
        "heikinAvg30d": 3.166
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 114.908,
        "saikou": 9.55,
        "heikin": 3.5,
        "boshuAvg30d": 53.2,
        "heikinAvg30d": 3.216
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 195.218,
        "saikou": 1.53,
        "heikin": 1.3,
        "boshuAvg30d": 53.2,
        "heikinAvg30d": 2.798
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 148.908,
        "saikou": 1.53,
        "heikin": 1.29,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 2.948
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 114.908,
        "saikou": 9.55,
        "heikin": 3.49,
        "boshuAvg30d": 54.4,
        "heikinAvg30d": 2.805
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 162.108,
        "saikou": 7.8,
        "heikin": 3.37,
        "boshuAvg30d": 54.4,
        "heikinAvg30d": 3.307
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 162.108,
        "saikou": 7.8,
        "heikin": 3.33,
        "boshuAvg30d": 55.2,
        "heikinAvg30d": 2.496
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 114.908,
        "saikou": 7.69,
        "heikin": 3.05,
        "boshuAvg30d": 55.2,
        "heikinAvg30d": 3.336
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 146.118,
        "saikou": 7.8,
        "heikin": 3.28,
        "boshuAvg30d": 55.2,
        "heikinAvg30d": 3.179
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 112.94,
        "saikou": 9.55,
        "heikin": 3.53,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 3.061
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 114.908,
        "saikou": 9.55,
        "heikin": 3.49,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 3.124
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 163.208,
        "saikou": 7.8,
        "heikin": 3.51,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 2.697
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 114.908,
        "saikou": 9.55,
        "heikin": 3.49,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 3.144
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 155.008,
        "saikou": 7.8,
        "heikin": 3.37,
        "boshuAvg30d": 52.4,
        "heikinAvg30d": 3.232
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 114.908,
        "saikou": 8.78,
        "heikin": 3.21,
        "boshuAvg30d": 52.4,
        "heikinAvg30d": 3.878
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 159.268,
        "saikou": 7.8,
        "heikin": 1.66,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 2.927
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 150.968,
        "saikou": 1.54,
        "heikin": 1.45,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 4.074
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 275.768,
        "saikou": 1.53,
        "heikin": 1.34,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 5.099
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 137.768,
        "saikou": 1.53,
        "heikin": 1.34,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 5.273
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 90.958,
        "saikou": 1.53,
        "heikin": 1.52,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 4.789
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 139.258,
        "saikou": 1.53,
        "heikin": 1.5,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 4.948
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 115.918,
        "saikou": 1.53,
        "heikin": 1.46,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 4.596
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 115.918,
        "saikou": 1.53,
        "heikin": 1.45,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 4.676
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 235.86,
        "saikou": 1.53,
        "heikin": 1.35,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 4.484
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 112,
        "saikou": 1.53,
        "heikin": 1.53,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 4.455
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 157.778,
        "saikou": 1.53,
        "heikin": 1.34,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.243
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 112.918,
        "saikou": 1.53,
        "heikin": 1.48,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 3.905
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 168.828,
        "saikou": 1.53,
        "heikin": 1.33,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 4.132
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 115.958,
        "saikou": 3.85,
        "heikin": 1.61,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 4.187
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 141.908,
        "saikou": 7.8,
        "heikin": 1.75,
        "boshuAvg30d": 52.2,
        "heikinAvg30d": 4.347
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 170.778,
        "saikou": 1.53,
        "heikin": 1.33,
        "boshuAvg30d": 52.2,
        "heikinAvg30d": 4.067
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 125.958,
        "saikou": 1.54,
        "heikin": 1.47,
        "boshuAvg30d": 52.2,
        "heikinAvg30d": 4.325
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 154.958,
        "saikou": 7.69,
        "heikin": 2.02,
        "boshuAvg30d": 52.2,
        "heikinAvg30d": 3.854
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 54.852,
        "saikou": 10,
        "heikin": 4.11,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 5.682
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 56.182,
        "saikou": 4.71,
        "heikin": 3.56,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 5.859
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 86.73,
        "saikou": 5.28,
        "heikin": 4.08,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 5.794
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 88.69,
        "saikou": 6.06,
        "heikin": 4.41,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 5.789
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 74.074,
        "saikou": 5.58,
        "heikin": 4.2,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 5.865
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 84.744,
        "saikou": 4.7,
        "heikin": 3.86,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 5.938
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 87.19,
        "saikou": 4.67,
        "heikin": 3.91,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 6.059
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 90.62,
        "saikou": 5.61,
        "heikin": 4.36,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 5.947
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 68.688,
        "saikou": 4.57,
        "heikin": 4.16,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 5.847
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 70.618,
        "saikou": 7,
        "heikin": 4.99,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 5.821
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 83.188,
        "saikou": 10,
        "heikin": 5.65,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 6.096
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 83.188,
        "saikou": 6.49,
        "heikin": 4.99,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 6.204
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 107.188,
        "saikou": 6.49,
        "heikin": 5.26,
        "boshuAvg30d": 135.8,
        "heikinAvg30d": 6.461
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 105.688,
        "saikou": 5.63,
        "heikin": 4.52,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 6.637
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 107.188,
        "saikou": 5.14,
        "heikin": 4.04,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 7.002
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 105.688,
        "saikou": 5.25,
        "heikin": 3.71,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 7.19
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 107.188,
        "saikou": 5.39,
        "heikin": 4.11,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 7.512
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 105.688,
        "saikou": 5.12,
        "heikin": 4.02,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 7.565
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 109.184,
        "saikou": 4.65,
        "heikin": 3.85,
        "boshuAvg30d": 100.9,
        "heikinAvg30d": 7.359
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 97.184,
        "saikou": 3.51,
        "heikin": 3.51,
        "boshuAvg30d": 101.3,
        "heikinAvg30d": 7.558
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 105.329,
        "saikou": 4.67,
        "heikin": 3.83,
        "boshuAvg30d": 100.6,
        "heikinAvg30d": 7.553
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 105.329,
        "saikou": 4.57,
        "heikin": 3.92,
        "boshuAvg30d": 100.8,
        "heikinAvg30d": 7.667
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 109.184,
        "saikou": 4.57,
        "heikin": 3.92,
        "boshuAvg30d": 101.6,
        "heikinAvg30d": 7.76
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 109.184,
        "saikou": 4.68,
        "heikin": 3.88,
        "boshuAvg30d": 101.6,
        "heikinAvg30d": 7.701
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 107.188,
        "saikou": 4.69,
        "heikin": 3.91,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 7.617
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 105.838,
        "saikou": 4.7,
        "heikin": 3.79,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 7.485
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 107.834,
        "saikou": 4.71,
        "heikin": 3.79,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 7.074
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 109.184,
        "saikou": 4.7,
        "heikin": 3.88,
        "boshuAvg30d": 97.2,
        "heikinAvg30d": 6.877
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 97.184,
        "saikou": 3.48,
        "heikin": 3.48,
        "boshuAvg30d": 96.8,
        "heikinAvg30d": 7.149
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 97.184,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 94.2,
        "heikinAvg30d": 6.155
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 73.184,
        "saikou": 5.25,
        "heikin": 4.07,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 6.156
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 73.184,
        "saikou": 2.99,
        "heikin": 2.77,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 5.218
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 73.184,
        "saikou": 5.25,
        "heikin": 3.35,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 5.144
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 71.648,
        "saikou": 6.34,
        "heikin": 3.98,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 5.129
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 73.148,
        "saikou": 6.95,
        "heikin": 4.04,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 4.986
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 71.648,
        "saikou": 6.34,
        "heikin": 3.92,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 4.669
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 71.152,
        "saikou": 5.25,
        "heikin": 3.69,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 4.735
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 69.688,
        "saikou": 5.25,
        "heikin": 3.63,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 4.339
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 71.188,
        "saikou": 4.39,
        "heikin": 3.34,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 4.405
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 71.188,
        "saikou": 4.39,
        "heikin": 3.24,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 4.679
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 67.333,
        "saikou": 3.95,
        "heikin": 3.22,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 4.677
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 103.333,
        "saikou": 5.14,
        "heikin": 3.68,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 4.82
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 92.688,
        "saikou": 4.67,
        "heikin": 3.38,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 5.029
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 92.688,
        "saikou": 3.34,
        "heikin": 2.74,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 4.844
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 92.688,
        "saikou": 4.57,
        "heikin": 3.31,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 5.018
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 91.338,
        "saikou": 4.74,
        "heikin": 3.31,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 5.011
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 91.338,
        "saikou": 4.75,
        "heikin": 3.32,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 5.204
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 91.188,
        "saikou": 5.98,
        "heikin": 4.03,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 5.493
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 174,
        "ouatsu": 300.081,
        "saikou": 6.47,
        "heikin": 3.11,
        "boshuAvg30d": 292.7,
        "heikinAvg30d": 3.894
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 174,
        "ouatsu": 308.507,
        "saikou": 6.2,
        "heikin": 1.87,
        "boshuAvg30d": 292.7,
        "heikinAvg30d": 3.917
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 174,
        "ouatsu": 305.138,
        "saikou": 6.44,
        "heikin": 2.8,
        "boshuAvg30d": 292.7,
        "heikinAvg30d": 3.66
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 174,
        "ouatsu": 370.967,
        "saikou": 6.58,
        "heikin": 2.6,
        "boshuAvg30d": 292.7,
        "heikinAvg30d": 3.742
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 173,
        "ouatsu": 357.358,
        "saikou": 6.14,
        "heikin": 2.71,
        "boshuAvg30d": 291.5,
        "heikinAvg30d": 3.701
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 172,
        "ouatsu": 336.873,
        "saikou": 6.65,
        "heikin": 2.85,
        "boshuAvg30d": 290.7,
        "heikinAvg30d": 3.658
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 170,
        "ouatsu": 393.787,
        "saikou": 5.99,
        "heikin": 1.55,
        "boshuAvg30d": 288.9,
        "heikinAvg30d": 3.844
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 172,
        "ouatsu": 390.344,
        "saikou": 2.56,
        "heikin": 2.13,
        "boshuAvg30d": 290.7,
        "heikinAvg30d": 3.924
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 172,
        "ouatsu": 375.676,
        "saikou": 6.27,
        "heikin": 2.04,
        "boshuAvg30d": 290.9,
        "heikinAvg30d": 3.963
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 173,
        "ouatsu": 363.738,
        "saikou": 7.17,
        "heikin": 2.37,
        "boshuAvg30d": 291.7,
        "heikinAvg30d": 4.174
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 173,
        "ouatsu": 377.45,
        "saikou": 6.8,
        "heikin": 3.44,
        "boshuAvg30d": 291.7,
        "heikinAvg30d": 4.069
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 173,
        "ouatsu": 369.692,
        "saikou": 6.78,
        "heikin": 2.21,
        "boshuAvg30d": 291.7,
        "heikinAvg30d": 4.332
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 192,
        "ouatsu": 363.214,
        "saikou": 4.92,
        "heikin": 2.33,
        "boshuAvg30d": 311.1,
        "heikinAvg30d": 4.284
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 200,
        "ouatsu": 351.123,
        "saikou": 4.29,
        "heikin": 2.89,
        "boshuAvg30d": 319.1,
        "heikinAvg30d": 4.572
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 205,
        "ouatsu": 379.462,
        "saikou": 4.29,
        "heikin": 2.23,
        "boshuAvg30d": 324.1,
        "heikinAvg30d": 3.978
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 210,
        "ouatsu": 379.462,
        "saikou": 4.41,
        "heikin": 2.28,
        "boshuAvg30d": 329.1,
        "heikinAvg30d": 3.667
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 210,
        "ouatsu": 451.05,
        "saikou": 3.99,
        "heikin": 1.99,
        "boshuAvg30d": 329.1,
        "heikinAvg30d": 3.863
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 210,
        "ouatsu": 451.05,
        "saikou": 4,
        "heikin": 1.9,
        "boshuAvg30d": 329.1,
        "heikinAvg30d": 3.786
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 202,
        "ouatsu": 475.633,
        "saikou": 3.5,
        "heikin": 1.48,
        "boshuAvg30d": 323.9,
        "heikinAvg30d": 4.109
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 202,
        "ouatsu": 487.557,
        "saikou": 2.98,
        "heikin": 1.62,
        "boshuAvg30d": 323.9,
        "heikinAvg30d": 4.175
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 202,
        "ouatsu": 450.421,
        "saikou": 3.88,
        "heikin": 1.24,
        "boshuAvg30d": 324.2,
        "heikinAvg30d": 4.17
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 201,
        "ouatsu": 462.737,
        "saikou": 3.55,
        "heikin": 1.26,
        "boshuAvg30d": 323.2,
        "heikinAvg30d": 4.041
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 199,
        "ouatsu": 457.571,
        "saikou": 2.81,
        "heikin": 1.4,
        "boshuAvg30d": 321.0,
        "heikinAvg30d": 4.037
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 199,
        "ouatsu": 462.175,
        "saikou": 2.29,
        "heikin": 1.94,
        "boshuAvg30d": 321.0,
        "heikinAvg30d": 3.923
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 196,
        "ouatsu": 391.947,
        "saikou": 6.81,
        "heikin": 3.17,
        "boshuAvg30d": 318.1,
        "heikinAvg30d": 3.75
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 196,
        "ouatsu": 401.818,
        "saikou": 6.82,
        "heikin": 3.29,
        "boshuAvg30d": 318.1,
        "heikinAvg30d": 3.664
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 196,
        "ouatsu": 419.005,
        "saikou": 3.45,
        "heikin": 2.13,
        "boshuAvg30d": 318.1,
        "heikinAvg30d": 3.802
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 196,
        "ouatsu": 482.397,
        "saikou": 3.39,
        "heikin": 2.04,
        "boshuAvg30d": 317.9,
        "heikinAvg30d": 3.931
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 195,
        "ouatsu": 625.151,
        "saikou": 2.59,
        "heikin": 2.11,
        "boshuAvg30d": 316.9,
        "heikinAvg30d": 3.812
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 194,
        "ouatsu": 624.4,
        "saikou": 2.05,
        "heikin": 1.14,
        "boshuAvg30d": 316.1,
        "heikinAvg30d": 3.613
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 192,
        "ouatsu": 633.258,
        "saikou": 2.66,
        "heikin": 1.51,
        "boshuAvg30d": 314.3,
        "heikinAvg30d": 3.45
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 192,
        "ouatsu": 550.248,
        "saikou": 4.1,
        "heikin": 2.3,
        "boshuAvg30d": 314.3,
        "heikinAvg30d": 3.428
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 192,
        "ouatsu": 488.237,
        "saikou": 4.85,
        "heikin": 2.12,
        "boshuAvg30d": 314.3,
        "heikinAvg30d": 3.55
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 192,
        "ouatsu": 417.663,
        "saikou": 7,
        "heikin": 2.6,
        "boshuAvg30d": 314.3,
        "heikinAvg30d": 3.695
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 192,
        "ouatsu": 422.817,
        "saikou": 2.39,
        "heikin": 1.89,
        "boshuAvg30d": 312.3,
        "heikinAvg30d": 3.534
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 192,
        "ouatsu": 442.013,
        "saikou": 6.82,
        "heikin": 2.47,
        "boshuAvg30d": 311.9,
        "heikinAvg30d": 3.522
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 195,
        "ouatsu": 451.496,
        "saikou": 6.81,
        "heikin": 2.38,
        "boshuAvg30d": 313.7,
        "heikinAvg30d": 3.644
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 195,
        "ouatsu": 449.637,
        "saikou": 5.93,
        "heikin": 2.14,
        "boshuAvg30d": 313.7,
        "heikinAvg30d": 3.483
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 195,
        "ouatsu": 483.151,
        "saikou": 5.16,
        "heikin": 2.17,
        "boshuAvg30d": 313.9,
        "heikinAvg30d": 3.544
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 195,
        "ouatsu": 489.314,
        "saikou": 4.31,
        "heikin": 2,
        "boshuAvg30d": 313.9,
        "heikinAvg30d": 3.345
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 193,
        "ouatsu": 487.486,
        "saikou": 2.39,
        "heikin": 1.32,
        "boshuAvg30d": 311.9,
        "heikinAvg30d": 3.298
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 193,
        "ouatsu": 446.517,
        "saikou": 2.39,
        "heikin": 1.66,
        "boshuAvg30d": 311.9,
        "heikinAvg30d": 3.503
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 193,
        "ouatsu": 400.238,
        "saikou": 2.39,
        "heikin": 1.58,
        "boshuAvg30d": 311.7,
        "heikinAvg30d": 3.17
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 193,
        "ouatsu": 532.201,
        "saikou": 2.4,
        "heikin": 1.6,
        "boshuAvg30d": 311.7,
        "heikinAvg30d": 3.269
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 193,
        "ouatsu": 345.553,
        "saikou": 2.64,
        "heikin": 2.16,
        "boshuAvg30d": 315.1,
        "heikinAvg30d": 2.963
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 191,
        "ouatsu": 441.604,
        "saikou": 2.7,
        "heikin": 1.59,
        "boshuAvg30d": 310.1,
        "heikinAvg30d": 3.231
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 189,
        "ouatsu": 432.306,
        "saikou": 2.49,
        "heikin": 1.67,
        "boshuAvg30d": 308.1,
        "heikinAvg30d": 3.703
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 188,
        "ouatsu": 327.086,
        "saikou": 6.57,
        "heikin": 3.97,
        "boshuAvg30d": 307.1,
        "heikinAvg30d": 3.73
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 59,
        "ouatsu": 258.188,
        "saikou": 3.14,
        "heikin": 2.01,
        "boshuAvg30d": 99.3,
        "heikinAvg30d": 1.743
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 59,
        "ouatsu": 285.635,
        "saikou": 5.04,
        "heikin": 2.12,
        "boshuAvg30d": 99.3,
        "heikinAvg30d": 1.515
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 59,
        "ouatsu": 283.651,
        "saikou": 5.15,
        "heikin": 2.23,
        "boshuAvg30d": 99.3,
        "heikinAvg30d": 1.532
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 314.102,
        "saikou": 4.7,
        "heikin": 2.24,
        "boshuAvg30d": 99.3,
        "heikinAvg30d": 1.579
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 58,
        "ouatsu": 318.153,
        "saikou": 4.45,
        "heikin": 1.98,
        "boshuAvg30d": 98.3,
        "heikinAvg30d": 1.515
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 316.169,
        "saikou": 4.3,
        "heikin": 2.18,
        "boshuAvg30d": 98.3,
        "heikinAvg30d": 1.507
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 341.866,
        "saikou": 2.62,
        "heikin": 1.8,
        "boshuAvg30d": 97.5,
        "heikinAvg30d": 1.424
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 316.578,
        "saikou": 3.23,
        "heikin": 1.79,
        "boshuAvg30d": 97.5,
        "heikinAvg30d": 1.543
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 58,
        "ouatsu": 316.298,
        "saikou": 3.19,
        "heikin": 1.89,
        "boshuAvg30d": 98.3,
        "heikinAvg30d": 1.554
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 58,
        "ouatsu": 319.435,
        "saikou": 2.85,
        "heikin": 1.69,
        "boshuAvg30d": 98.3,
        "heikinAvg30d": 1.551
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 58,
        "ouatsu": 321.425,
        "saikou": 1.95,
        "heikin": 1.13,
        "boshuAvg30d": 98.3,
        "heikinAvg30d": 1.592
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 58,
        "ouatsu": 316.785,
        "saikou": 3.49,
        "heikin": 1.57,
        "boshuAvg30d": 98.3,
        "heikinAvg30d": 1.536
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 338.49,
        "saikou": 3.07,
        "heikin": 1.52,
        "boshuAvg30d": 107.5,
        "heikinAvg30d": 1.791
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 71,
        "ouatsu": 338.49,
        "saikou": 2.8,
        "heikin": 1.72,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 1.855
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 74,
        "ouatsu": 309.085,
        "saikou": 4.91,
        "heikin": 2.95,
        "boshuAvg30d": 114.3,
        "heikinAvg30d": 1.995
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 76,
        "ouatsu": 318.769,
        "saikou": 5.34,
        "heikin": 2.8,
        "boshuAvg30d": 116.3,
        "heikinAvg30d": 2.0
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 76,
        "ouatsu": 320.759,
        "saikou": 2.85,
        "heikin": 1.96,
        "boshuAvg30d": 116.3,
        "heikinAvg30d": 2.124
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 76,
        "ouatsu": 358.057,
        "saikou": 3,
        "heikin": 1.89,
        "boshuAvg30d": 116.3,
        "heikinAvg30d": 2.266
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 81,
        "ouatsu": 362.039,
        "saikou": 2.74,
        "heikin": 2.11,
        "boshuAvg30d": 121.1,
        "heikinAvg30d": 2.696
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 81,
        "ouatsu": 362.039,
        "saikou": 3.29,
        "heikin": 1.86,
        "boshuAvg30d": 121.1,
        "heikinAvg30d": 2.745
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 81,
        "ouatsu": 348.25,
        "saikou": 4.47,
        "heikin": 2.17,
        "boshuAvg30d": 121.3,
        "heikinAvg30d": 2.951
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 81,
        "ouatsu": 339.229,
        "saikou": 2.89,
        "heikin": 2.24,
        "boshuAvg30d": 121.1,
        "heikinAvg30d": 2.973
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 80,
        "ouatsu": 341.265,
        "saikou": 2.74,
        "heikin": 2.13,
        "boshuAvg30d": 120.1,
        "heikinAvg30d": 2.851
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 79,
        "ouatsu": 341.171,
        "saikou": 2.74,
        "heikin": 2.29,
        "boshuAvg30d": 119.1,
        "heikinAvg30d": 2.898
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 75,
        "ouatsu": 306.508,
        "saikou": 2.75,
        "heikin": 2.36,
        "boshuAvg30d": 115.3,
        "heikinAvg30d": 2.86
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 75,
        "ouatsu": 314.386,
        "saikou": 2.7,
        "heikin": 2.3,
        "boshuAvg30d": 115.3,
        "heikinAvg30d": 2.832
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 75,
        "ouatsu": 341.073,
        "saikou": 2.53,
        "heikin": 2.25,
        "boshuAvg30d": 115.3,
        "heikinAvg30d": 2.723
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 74,
        "ouatsu": 348.855,
        "saikou": 2.71,
        "heikin": 2.28,
        "boshuAvg30d": 114.5,
        "heikinAvg30d": 2.735
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 74,
        "ouatsu": 333.78,
        "saikou": 2.92,
        "heikin": 2.31,
        "boshuAvg30d": 114.3,
        "heikinAvg30d": 2.948
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 74,
        "ouatsu": 340.996,
        "saikou": 3.12,
        "heikin": 2.34,
        "boshuAvg30d": 114.3,
        "heikinAvg30d": 2.898
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 72,
        "ouatsu": 378.482,
        "saikou": 3.28,
        "heikin": 1.85,
        "boshuAvg30d": 112.5,
        "heikinAvg30d": 2.658
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 72,
        "ouatsu": 378.482,
        "saikou": 3.68,
        "heikin": 1.46,
        "boshuAvg30d": 112.5,
        "heikinAvg30d": 2.812
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 72,
        "ouatsu": 354.481,
        "saikou": 3.52,
        "heikin": 1.41,
        "boshuAvg30d": 112.5,
        "heikinAvg30d": 2.779
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 72,
        "ouatsu": 374.109,
        "saikou": 2.49,
        "heikin": 1.27,
        "boshuAvg30d": 112.5,
        "heikinAvg30d": 2.881
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 72,
        "ouatsu": 375.609,
        "saikou": 2.49,
        "heikin": 1.32,
        "boshuAvg30d": 112.5,
        "heikinAvg30d": 2.63
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 71,
        "ouatsu": 370.526,
        "saikou": 2.84,
        "heikin": 1.25,
        "boshuAvg30d": 111.7,
        "heikinAvg30d": 2.663
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 69,
        "ouatsu": 372.202,
        "saikou": 2.39,
        "heikin": 1.21,
        "boshuAvg30d": 109.7,
        "heikinAvg30d": 2.295
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 69,
        "ouatsu": 372.202,
        "saikou": 2.45,
        "heikin": 1.19,
        "boshuAvg30d": 109.7,
        "heikinAvg30d": 2.189
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 69,
        "ouatsu": 399.614,
        "saikou": 1.7,
        "heikin": 0.91,
        "boshuAvg30d": 109.7,
        "heikinAvg30d": 1.944
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 69,
        "ouatsu": 419.205,
        "saikou": 1.5,
        "heikin": 0.96,
        "boshuAvg30d": 109.7,
        "heikinAvg30d": 1.803
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 69,
        "ouatsu": 409.3,
        "saikou": 1.59,
        "heikin": 0.93,
        "boshuAvg30d": 109.7,
        "heikinAvg30d": 1.726
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 69,
        "ouatsu": 405.416,
        "saikou": 2.1,
        "heikin": 0.99,
        "boshuAvg30d": 109.7,
        "heikinAvg30d": 1.781
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 70,
        "ouatsu": 377.64,
        "saikou": 2.84,
        "heikin": 1.05,
        "boshuAvg30d": 110.5,
        "heikinAvg30d": 1.656
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 71,
        "ouatsu": 374.098,
        "saikou": 2.84,
        "heikin": 1.49,
        "boshuAvg30d": 111.5,
        "heikinAvg30d": 1.887
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 71,
        "ouatsu": 345.849,
        "saikou": 2.97,
        "heikin": 1.8,
        "boshuAvg30d": 111.5,
        "heikinAvg30d": 1.875
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 347.833,
        "saikou": 5.1,
        "heikin": 1.91,
        "boshuAvg30d": 110.5,
        "heikinAvg30d": 1.891
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 328.906,
        "saikou": 2.6,
        "heikin": 1.79,
        "boshuAvg30d": 109.5,
        "heikinAvg30d": 1.78
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 325.422,
        "saikou": 2.73,
        "heikin": 1.81,
        "boshuAvg30d": 106.5,
        "heikinAvg30d": 1.906
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.2,
        "boshuAvg30d": 56.2,
        "heikinAvg30d": 1.009
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 56.2,
        "heikinAvg30d": 0.976
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.75,
        "heikin": 1.7,
        "boshuAvg30d": 56.2,
        "heikinAvg30d": 1.067
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.15,
        "heikin": 2,
        "boshuAvg30d": 56.2,
        "heikinAvg30d": 1.0
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 3,
        "heikin": 2.75,
        "boshuAvg30d": 56.2,
        "heikinAvg30d": 0.946
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 56.2,
        "heikinAvg30d": 1.089
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.4,
        "boshuAvg30d": 56.2,
        "heikinAvg30d": 1.215
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 56.2,
        "heikinAvg30d": 1.57
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.45,
        "boshuAvg30d": 56.2,
        "heikinAvg30d": 1.371
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 56.2,
        "heikinAvg30d": 1.379
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.93,
        "boshuAvg30d": 56.2,
        "heikinAvg30d": 1.637
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.1,
        "boshuAvg30d": 56.2,
        "heikinAvg30d": 1.676
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.9,
        "heikin": 1.88,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.782
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.38,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.629
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.5,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 1.55
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 18.9,
        "saikou": 3.05,
        "heikin": 2.97,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 1.522
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 22.928,
        "saikou": 2.91,
        "heikin": 2.91,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.682
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 6.704,
        "saikou": 3.15,
        "heikin": 1.99,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.401
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.789
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.68,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 3.103
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 3.979
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 4.209
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 5.496,
        "saikou": 4.75,
        "heikin": 4.39,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 3.341
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 16.292,
        "saikou": 5.24,
        "heikin": 5.24,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 3.009
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 5.24,
        "heikin": 5.24,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 2.36
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 4.75,
        "heikin": 4.75,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 2.136
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 22.278,
        "saikou": 3.31,
        "heikin": 3.31,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 3.485
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 3.31,
        "heikin": 3.31,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 3.059
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 2.923
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 2.666
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 3.627
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 4.498
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.7,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 3.393
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 3.201
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 2.869
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 3.669
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 5.1,
        "heikin": 4.62,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 2.692
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 4.61,
        "heikin": 4.61,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 2.823
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 3.83,
        "heikin": 3.83,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 2.654
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 3.63,
        "heikin": 3.63,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 2.233
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 22.928,
        "saikou": 3.83,
        "heikin": 3.83,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.06
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 3.19,
        "heikin": 3.19,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 1.657
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 3.19,
        "heikin": 3.1,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 1.682
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 2.8,
        "heikin": 0.88,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 1.81
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 2.63,
        "heikin": 2.59,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.274
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 12.314,
        "saikou": 2.63,
        "heikin": 2.55,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 1.843
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 22.928,
        "saikou": 2.3,
        "heikin": 0.82,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 1.561
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 22.928,
        "saikou": 2.45,
        "heikin": 0.74,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.375
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 51.954,
        "saikou": 1.84,
        "heikin": 1.49,
        "boshuAvg30d": 128.8,
        "heikinAvg30d": 1.421
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 48.571,
        "saikou": 1.84,
        "heikin": 1.43,
        "boshuAvg30d": 128.8,
        "heikinAvg30d": 1.162
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 48.054,
        "saikou": 1.84,
        "heikin": 1.41,
        "boshuAvg30d": 128.8,
        "heikinAvg30d": 1.087
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 95.401,
        "saikou": 1.84,
        "heikin": 1.26,
        "boshuAvg30d": 128.8,
        "heikinAvg30d": 1.048
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 93.461,
        "saikou": 1.84,
        "heikin": 1.25,
        "boshuAvg30d": 127.8,
        "heikinAvg30d": 0.979
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 97.399,
        "saikou": 1.99,
        "heikin": 1.6,
        "boshuAvg30d": 127.6,
        "heikinAvg30d": 1.185
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 105.286,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 127.8,
        "heikinAvg30d": 1.36
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.7,
        "boshuAvg30d": 127.8,
        "heikinAvg30d": 1.577
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.63,
        "boshuAvg30d": 128.8,
        "heikinAvg30d": 1.482
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.7,
        "boshuAvg30d": 128.8,
        "heikinAvg30d": 1.594
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 128.8,
        "heikinAvg30d": 1.551
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 94.274,
        "saikou": 1.99,
        "heikin": 1.61,
        "boshuAvg30d": 128.8,
        "heikinAvg30d": 1.399
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 109.274,
        "saikou": 2.14,
        "heikin": 1.64,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.583
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 107.276,
        "saikou": 2.14,
        "heikin": 1.71,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 1.545
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 103.288,
        "saikou": 2.14,
        "heikin": 1.84,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 1.611
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 103.288,
        "saikou": 2.2,
        "heikin": 1.89,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 1.657
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 103.288,
        "saikou": 2.14,
        "heikin": 1.86,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 1.715
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 132.755,
        "saikou": 3,
        "heikin": 2.07,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 2.111
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 113.141,
        "saikou": 2.08,
        "heikin": 2.06,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 2.281
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 136.752,
        "saikou": 3.95,
        "heikin": 2.27,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 2.247
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 134.767,
        "saikou": 5.95,
        "heikin": 2.09,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 2.493
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 133.324,
        "saikou": 5.95,
        "heikin": 2.48,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.598
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 111.698,
        "saikou": 5.95,
        "heikin": 2.68,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 2.71
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 113.141,
        "saikou": 3,
        "heikin": 2.46,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 2.453
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 113.141,
        "saikou": 2.39,
        "heikin": 2.14,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.249
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 113.141,
        "saikou": 2.39,
        "heikin": 2.13,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.365
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 136.752,
        "saikou": 2.43,
        "heikin": 1.72,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.57
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 136.752,
        "saikou": 2.4,
        "heikin": 1.84,
        "boshuAvg30d": 149.2,
        "heikinAvg30d": 2.425
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 156.366,
        "saikou": 2.6,
        "heikin": 1.58,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.32
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 175.98,
        "saikou": 2.59,
        "heikin": 1.34,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.208
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 188.557,
        "saikou": 3,
        "heikin": 1.51,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 2.343
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 172.667,
        "saikou": 3,
        "heikin": 1.6,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 2.594
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 134.882,
        "saikou": 3.95,
        "heikin": 2.17,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 2.459
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 103.842,
        "saikou": 2.38,
        "heikin": 2.02,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 2.281
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 174.159,
        "saikou": 2.5,
        "heikin": 1.44,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 2.32
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 149.787,
        "saikou": 2.98,
        "heikin": 1.55,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 2.579
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 105.195,
        "saikou": 2.2,
        "heikin": 1.89,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 2.071
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 150.458,
        "saikou": 2.42,
        "heikin": 1.5,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 2.115
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 171.886,
        "saikou": 1.94,
        "heikin": 1.2,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 2.04
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 182.015,
        "saikou": 1.99,
        "heikin": 1.17,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 1.976
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 180.03,
        "saikou": 1.9,
        "heikin": 1.02,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 1.905
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 107.289,
        "saikou": 1.99,
        "heikin": 1.72,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 1.904
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.7,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 1.878
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 109.274,
        "saikou": 2,
        "heikin": 1.77,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 1.947
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 109.274,
        "saikou": 2,
        "heikin": 1.77,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 1.965
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 126.89,
        "saikou": 1.99,
        "heikin": 1.51,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 1.918
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 148.502,
        "saikou": 1.99,
        "heikin": 1.36,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 1.56
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 148.502,
        "saikou": 1.99,
        "heikin": 1.36,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 1.668
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 63.525,
        "saikou": 2.29,
        "heikin": 1.9,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.097
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 63.525,
        "saikou": 2.29,
        "heikin": 1.9,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.249
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 65.325,
        "saikou": 2.29,
        "heikin": 1.88,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.096
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 67.315,
        "saikou": 2.29,
        "heikin": 1.87,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 1.934
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 67.315,
        "saikou": 2.29,
        "heikin": 1.87,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 1.921
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 67.315,
        "saikou": 2.29,
        "heikin": 1.87,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.128
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 84.174,
        "saikou": 2.29,
        "heikin": 1.77,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.302
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 84.174,
        "saikou": 2.29,
        "heikin": 1.77,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.641
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 84.174,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.931
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 84.174,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 3.353
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 84.174,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 3.251
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 84.174,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 3.193
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 59.917,
        "saikou": 2.29,
        "heikin": 1.63,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 3.246
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 82.186,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 2.725
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 82.186,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.789
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 82.186,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 1.515
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 80.188,
        "saikou": 2.29,
        "heikin": 2.13,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 1.586
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 78.19,
        "saikou": 2.29,
        "heikin": 2.29,
        "boshuAvg30d": 145.6,
        "heikinAvg30d": 1.676
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 62.294,
        "saikou": 2.29,
        "heikin": 2.12,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 1.919
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 62.294,
        "saikou": 2.29,
        "heikin": 2.29,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 1.913
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 62.294,
        "saikou": 2.29,
        "heikin": 2.29,
        "boshuAvg30d": 151.6,
        "heikinAvg30d": 1.735
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 62.294,
        "saikou": 2.29,
        "heikin": 2.24,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 1.639
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 62.294,
        "saikou": 2.29,
        "heikin": 2.29,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 1.711
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 62.294,
        "saikou": 2.29,
        "heikin": 2.29,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 1.751
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 62.294,
        "saikou": 2.29,
        "heikin": 2.29,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.633
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 62.294,
        "saikou": 2.29,
        "heikin": 2.29,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.723
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 62.294,
        "saikou": 2.29,
        "heikin": 2.29,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.984
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 62.294,
        "saikou": 2.29,
        "heikin": 2.23,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 1.908
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 62.294,
        "saikou": 2.29,
        "heikin": 2.29,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 1.957
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 39.66,
        "saikou": 2.29,
        "heikin": 2.29,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.01
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 64.292,
        "saikou": 2.7,
        "heikin": 2.12,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 2.331
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 64.292,
        "saikou": 2.7,
        "heikin": 2.14,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 2.583
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 64.095,
        "saikou": 2.7,
        "heikin": 2.2,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 3.003
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 64.095,
        "saikou": 2.5,
        "heikin": 2.18,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 3.869
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 66.093,
        "saikou": 2.5,
        "heikin": 2.2,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 4.335
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 66.093,
        "saikou": 2.7,
        "heikin": 2.21,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 4.358
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 65.103,
        "saikou": 2.29,
        "heikin": 2.16,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 4.451
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 65.103,
        "saikou": 2.29,
        "heikin": 2.13,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 4.41
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 80.999,
        "saikou": 2.29,
        "heikin": 1.91,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 4.075
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 85.174,
        "saikou": 2.29,
        "heikin": 1.91,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 3.598
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 85.174,
        "saikou": 2.29,
        "heikin": 1.79,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.865
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 85.174,
        "saikou": 2.29,
        "heikin": 1.79,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 3.668
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 85.174,
        "saikou": 2.29,
        "heikin": 1.79,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 3.94
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 85.174,
        "saikou": 2.29,
        "heikin": 1.78,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 3.652
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 85.174,
        "saikou": 2.29,
        "heikin": 1.78,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 3.543
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 85.174,
        "saikou": 2.29,
        "heikin": 1.79,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 2.992
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 83.374,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 3.017
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 83.374,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 2.108
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
        "heikinAvg30d": 0.805
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
        "heikinAvg30d": 0.875
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 221.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.912
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
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.876
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.816
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.766
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.8,
        "heikinAvg30d": 0.784
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 205.343,
        "saikou": 1.7,
        "heikin": 0.71,
        "boshuAvg30d": 45.8,
        "heikinAvg30d": 0.727
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 203.343,
        "saikou": 1.7,
        "heikin": 0.72,
        "boshuAvg30d": 45.8,
        "heikinAvg30d": 0.775
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 169.343,
        "saikou": 1.7,
        "heikin": 0.78,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.034
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 170.343,
        "saikou": 1.7,
        "heikin": 0.77,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.015
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 170.343,
        "saikou": 1.7,
        "heikin": 0.77,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.008
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 0.943
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 169.343,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.004
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 190.343,
        "saikou": 1.7,
        "heikin": 0.89,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.018
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 0.993
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.015
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 163.343,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.036
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 163.343,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.047
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 174.343,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.08
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 175.343,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.015
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 166.343,
        "saikou": 1.6,
        "heikin": 1.01,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.045
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 190.343,
        "saikou": 1.7,
        "heikin": 1.49,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.082
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.197
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.47,
        "boshuAvg30d": 44.2,
        "heikinAvg30d": 1.289
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.47,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.426
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.47,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.391
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.39
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.438
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.314
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.335
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.316
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.45,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.307
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.938
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
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.918
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.904
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.954
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.89,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.936
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 189.63,
        "saikou": 9.12,
        "heikin": 6.16,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 4.63
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 190.632,
        "saikou": 8.4,
        "heikin": 5.66,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 4.269
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 193.558,
        "saikou": 8.06,
        "heikin": 5.45,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 4.122
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 193.556,
        "saikou": 8.07,
        "heikin": 5.45,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 3.96
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 193.556,
        "saikou": 8.26,
        "heikin": 5.55,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 3.924
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 191.58,
        "saikou": 8.39,
        "heikin": 5.66,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 4.222
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 209.295,
        "saikou": 8.39,
        "heikin": 5.62,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 4.406
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 260.467,
        "saikou": 8.81,
        "heikin": 6.5,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 4.868
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 261.375,
        "saikou": 9.01,
        "heikin": 6.61,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.111
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 264.295,
        "saikou": 9.06,
        "heikin": 6.65,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.489
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 230.295,
        "saikou": 9,
        "heikin": 6.58,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.739
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 232.271,
        "saikou": 8.94,
        "heikin": 6.52,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.647
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 270.271,
        "saikou": 8.82,
        "heikin": 6.43,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 5.231
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 271.271,
        "saikou": 8.96,
        "heikin": 6.49,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 4.489
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 207.271,
        "saikou": 8.41,
        "heikin": 5.45,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 3.355
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 207.271,
        "saikou": 8.32,
        "heikin": 5.39,
        "boshuAvg30d": 175.0,
        "heikinAvg30d": 3.143
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 207.271,
        "saikou": 7.48,
        "heikin": 4.84,
        "boshuAvg30d": 175.0,
        "heikinAvg30d": 3.157
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 248.295,
        "saikou": 10,
        "heikin": 5.86,
        "boshuAvg30d": 175.0,
        "heikinAvg30d": 3.263
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 233.443,
        "saikou": 10,
        "heikin": 6.08,
        "boshuAvg30d": 179.0,
        "heikinAvg30d": 3.274
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 283.883,
        "saikou": 10,
        "heikin": 7.36,
        "boshuAvg30d": 179.0,
        "heikinAvg30d": 3.117
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 278.418,
        "saikou": 10,
        "heikin": 7.51,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.026
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 276.428,
        "saikou": 10,
        "heikin": 7.42,
        "boshuAvg30d": 180.8,
        "heikinAvg30d": 3.005
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 282.384,
        "saikou": 10,
        "heikin": 7.59,
        "boshuAvg30d": 181.0,
        "heikinAvg30d": 2.879
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 280.386,
        "saikou": 10,
        "heikin": 7.88,
        "boshuAvg30d": 181.0,
        "heikinAvg30d": 2.935
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 262.136,
        "saikou": 10,
        "heikin": 7.82,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 2.499
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 268.884,
        "saikou": 10,
        "heikin": 7.81,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 2.688
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 280.689,
        "saikou": 10,
        "heikin": 7.85,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 3.165
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 288.339,
        "saikou": 10,
        "heikin": 7.75,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 3.805
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 238.339,
        "saikou": 10,
        "heikin": 7.3,
        "boshuAvg30d": 179.0,
        "heikinAvg30d": 3.854
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 238.339,
        "saikou": 10,
        "heikin": 7.49,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 4.327
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 195.339,
        "saikou": 9.78,
        "heikin": 6.46,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 4.749
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 199.339,
        "saikou": 9.67,
        "heikin": 6.48,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 5.092
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 199.242,
        "saikou": 10,
        "heikin": 6.81,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 6.113
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 191.689,
        "saikou": 10,
        "heikin": 6.91,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 6.676
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 186.7,
        "saikou": 10,
        "heikin": 6.88,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 6.822
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 245.714,
        "saikou": 10,
        "heikin": 7.51,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 6.873
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 250.278,
        "saikou": 10,
        "heikin": 7.54,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 6.864
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 248.412,
        "saikou": 10,
        "heikin": 7.54,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 6.804
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 199.787,
        "saikou": 10,
        "heikin": 7,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 6.433
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 201.779,
        "saikou": 10,
        "heikin": 6.97,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 5.934
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 206.686,
        "saikou": 10,
        "heikin": 6.97,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 6.131
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 197.975,
        "saikou": 10,
        "heikin": 6.79,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 5.78
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 203.921,
        "saikou": 9.58,
        "heikin": 6.39,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 5.768
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 214.571,
        "saikou": 8.82,
        "heikin": 5.89,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 5.731
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 214.571,
        "saikou": 9.07,
        "heikin": 6.04,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 5.942
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 214.571,
        "saikou": 8.85,
        "heikin": 5.9,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 5.605
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 214.571,
        "saikou": 9.13,
        "heikin": 6.09,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 5.448
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 212.595,
        "saikou": 8.8,
        "heikin": 5.9,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 4.621
      }
    ]
  }
};
