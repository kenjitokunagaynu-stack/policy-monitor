// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/30〜2026/11/28）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-29",
  "fetchedAt": "2026-11-28",
  "avgWindowLabel": "過去30日平均（2026/10/30〜2026/11/28）",
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
      "boshu": 1017,
      "ouatsu": 1725.117,
      "saikou": 10,
      "heikin": 1.46,
      "boshuAvg30d": 1162.8,
      "heikinAvg30d": 2.333
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1017,
      "ouatsu": 1778.416,
      "saikou": 10,
      "heikin": 1.81,
      "boshuAvg30d": 1162.8,
      "heikinAvg30d": 2.276
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1017,
      "ouatsu": 1739.718,
      "saikou": 10,
      "heikin": 1.72,
      "boshuAvg30d": 1162.8,
      "heikinAvg30d": 2.235
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1016,
      "ouatsu": 1744.327,
      "saikou": 10,
      "heikin": 1.74,
      "boshuAvg30d": 1161.9,
      "heikinAvg30d": 2.142
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1010,
      "ouatsu": 1595.592,
      "saikou": 10,
      "heikin": 1.86,
      "boshuAvg30d": 1156.1,
      "heikinAvg30d": 2.18
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1010,
      "ouatsu": 1584.548,
      "saikou": 8.2,
      "heikin": 1.73,
      "boshuAvg30d": 1156.0,
      "heikinAvg30d": 2.345
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1007,
      "ouatsu": 1701.191,
      "saikou": 7.61,
      "heikin": 1.81,
      "boshuAvg30d": 1164.5,
      "heikinAvg30d": 2.416
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1011,
      "ouatsu": 1709.247,
      "saikou": 8.13,
      "heikin": 2.11,
      "boshuAvg30d": 1168.4,
      "heikinAvg30d": 2.588
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1011,
      "ouatsu": 1685.957,
      "saikou": 8.2,
      "heikin": 2,
      "boshuAvg30d": 1168.5,
      "heikinAvg30d": 2.638
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1013,
      "ouatsu": 1675.902,
      "saikou": 8.13,
      "heikin": 1.93,
      "boshuAvg30d": 1170.4,
      "heikinAvg30d": 2.59
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1013,
      "ouatsu": 1653.596,
      "saikou": 7.54,
      "heikin": 1.88,
      "boshuAvg30d": 1170.4,
      "heikinAvg30d": 2.704
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1013,
      "ouatsu": 1543.2,
      "saikou": 7.48,
      "heikin": 1.87,
      "boshuAvg30d": 1170.4,
      "heikinAvg30d": 2.758
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1072,
      "ouatsu": 1550.6,
      "saikou": 7.44,
      "heikin": 2.15,
      "boshuAvg30d": 1229.5,
      "heikinAvg30d": 3.016
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1097,
      "ouatsu": 1468.835,
      "saikou": 8.99,
      "heikin": 2.89,
      "boshuAvg30d": 1254.4,
      "heikinAvg30d": 3.151
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1116,
      "ouatsu": 1397.292,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1273.5,
      "heikinAvg30d": 3.196
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1131,
      "ouatsu": 1673.484,
      "saikou": 10,
      "heikin": 2.39,
      "boshuAvg30d": 1288.6,
      "heikinAvg30d": 3.024
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1131,
      "ouatsu": 1777.089,
      "saikou": 10,
      "heikin": 1.88,
      "boshuAvg30d": 1288.6,
      "heikinAvg30d": 2.881
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1131,
      "ouatsu": 1685.525,
      "saikou": 10,
      "heikin": 2.77,
      "boshuAvg30d": 1292.5,
      "heikinAvg30d": 2.908
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1060,
      "ouatsu": 1833.842,
      "saikou": 9.91,
      "heikin": 2.77,
      "boshuAvg30d": 1247.5,
      "heikinAvg30d": 2.802
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1065,
      "ouatsu": 1700.485,
      "saikou": 10,
      "heikin": 2.75,
      "boshuAvg30d": 1252.4,
      "heikinAvg30d": 2.798
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1069,
      "ouatsu": 1673.802,
      "saikou": 9.99,
      "heikin": 2.85,
      "boshuAvg30d": 1256.4,
      "heikinAvg30d": 2.826
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1073,
      "ouatsu": 1541.302,
      "saikou": 10,
      "heikin": 2.61,
      "boshuAvg30d": 1260.2,
      "heikinAvg30d": 2.823
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1067,
      "ouatsu": 1604.372,
      "saikou": 10,
      "heikin": 2.75,
      "boshuAvg30d": 1254.0,
      "heikinAvg30d": 2.761
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1067,
      "ouatsu": 1553.063,
      "saikou": 9.99,
      "heikin": 2.67,
      "boshuAvg30d": 1253.9,
      "heikinAvg30d": 2.873
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1048,
      "ouatsu": 1453.336,
      "saikou": 9.99,
      "heikin": 2.12,
      "boshuAvg30d": 1234.9,
      "heikinAvg30d": 2.694
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1048,
      "ouatsu": 1496.07,
      "saikou": 9.99,
      "heikin": 1.93,
      "boshuAvg30d": 1234.9,
      "heikinAvg30d": 2.768
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1048,
      "ouatsu": 1554.129,
      "saikou": 9.99,
      "heikin": 2.13,
      "boshuAvg30d": 1234.9,
      "heikinAvg30d": 2.791
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1044,
      "ouatsu": 1568.984,
      "saikou": 10,
      "heikin": 2.18,
      "boshuAvg30d": 1231.0,
      "heikinAvg30d": 2.857
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1043,
      "ouatsu": 1623.06,
      "saikou": 10,
      "heikin": 2.12,
      "boshuAvg30d": 1229.9,
      "heikinAvg30d": 2.929
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1037,
      "ouatsu": 1587.81,
      "saikou": 10,
      "heikin": 2.89,
      "boshuAvg30d": 1223.9,
      "heikinAvg30d": 3.025
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1108,
      "ouatsu": 1734.251,
      "saikou": 9.97,
      "heikin": 3.47,
      "boshuAvg30d": 1277.7,
      "heikinAvg30d": 3.189
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1108,
      "ouatsu": 1677.374,
      "saikou": 10,
      "heikin": 3.83,
      "boshuAvg30d": 1277.7,
      "heikinAvg30d": 3.299
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1108,
      "ouatsu": 1773.441,
      "saikou": 6.36,
      "heikin": 2.48,
      "boshuAvg30d": 1277.8,
      "heikinAvg30d": 3.621
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1106,
      "ouatsu": 1740.024,
      "saikou": 7.81,
      "heikin": 2.42,
      "boshuAvg30d": 1275.8,
      "heikinAvg30d": 3.702
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1104,
      "ouatsu": 1694.556,
      "saikou": 10,
      "heikin": 3.02,
      "boshuAvg30d": 1269.5,
      "heikinAvg30d": 3.765
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1099,
      "ouatsu": 1610.442,
      "saikou": 10,
      "heikin": 2.86,
      "boshuAvg30d": 1260.7,
      "heikinAvg30d": 3.671
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1095,
      "ouatsu": 1519.166,
      "saikou": 10,
      "heikin": 2.84,
      "boshuAvg30d": 1256.6,
      "heikinAvg30d": 3.482
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1095,
      "ouatsu": 1581.76,
      "saikou": 10,
      "heikin": 2.79,
      "boshuAvg30d": 1256.6,
      "heikinAvg30d": 3.339
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1095,
      "ouatsu": 1698.882,
      "saikou": 8.64,
      "heikin": 2,
      "boshuAvg30d": 1256.6,
      "heikinAvg30d": 3.264
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1093,
      "ouatsu": 1847.836,
      "saikou": 7.81,
      "heikin": 1.76,
      "boshuAvg30d": 1254.7,
      "heikinAvg30d": 3.214
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1086,
      "ouatsu": 1854.757,
      "saikou": 7.41,
      "heikin": 1.76,
      "boshuAvg30d": 1247.6,
      "heikinAvg30d": 3.15
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1086,
      "ouatsu": 1733.681,
      "saikou": 8.3,
      "heikin": 2.22,
      "boshuAvg30d": 1247.6,
      "heikinAvg30d": 3.182
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 997,
      "ouatsu": 1800.86,
      "saikou": 8.68,
      "heikin": 2.26,
      "boshuAvg30d": 1161.4,
      "heikinAvg30d": 3.072
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1000,
      "ouatsu": 1842.169,
      "saikou": 10,
      "heikin": 2.55,
      "boshuAvg30d": 1164.4,
      "heikinAvg30d": 3.014
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 999,
      "ouatsu": 1879.134,
      "saikou": 7.13,
      "heikin": 2.19,
      "boshuAvg30d": 1163.5,
      "heikinAvg30d": 3.001
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 992,
      "ouatsu": 1861.943,
      "saikou": 10,
      "heikin": 2.3,
      "boshuAvg30d": 1156.7,
      "heikinAvg30d": 2.944
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 984,
      "ouatsu": 1840.868,
      "saikou": 10,
      "heikin": 2.16,
      "boshuAvg30d": 1148.6,
      "heikinAvg30d": 2.888
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 976,
      "ouatsu": 1881.457,
      "saikou": 10,
      "heikin": 2.4,
      "boshuAvg30d": 1140.7,
      "heikinAvg30d": 2.625
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
        "ouatsu": 87.918,
        "saikou": 8.5,
        "heikin": 1.18,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 3.153
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 99.908,
        "saikou": 9,
        "heikin": 2.24,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 3.255
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 97.958,
        "saikou": 8.6,
        "heikin": 1.71,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 2.951
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 85.968,
        "saikou": 1.45,
        "heikin": 1.45,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 3.276
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 88.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.646
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 88.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.275
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 92.118,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.706
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 102.118,
        "saikou": 6.63,
        "heikin": 2,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.579
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 92.118,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.73
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 92.118,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.55
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 92.118,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.492
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 92.118,
        "saikou": 1.45,
        "heikin": 1.45,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.181
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 101.108,
        "saikou": 7.44,
        "heikin": 1.72,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 4.633
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 139.408,
        "saikou": 8.85,
        "heikin": 2.92,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.595
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 142.008,
        "saikou": 9,
        "heikin": 1.57,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.938
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 151.308,
        "saikou": 9.8,
        "heikin": 4.06,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.737
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 99.908,
        "saikou": 6,
        "heikin": 1.54,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.813
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 89.908,
        "saikou": 6,
        "heikin": 1.73,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.408
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 175.218,
        "saikou": 9.91,
        "heikin": 3.87,
        "boshuAvg30d": 51.9,
        "heikinAvg30d": 4.136
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 126.918,
        "saikou": 7,
        "heikin": 1.61,
        "boshuAvg30d": 52.9,
        "heikinAvg30d": 3.592
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 127.518,
        "saikou": 8.65,
        "heikin": 3.85,
        "boshuAvg30d": 52.9,
        "heikinAvg30d": 3.513
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 87.918,
        "saikou": 9,
        "heikin": 1.72,
        "boshuAvg30d": 53.9,
        "heikinAvg30d": 3.787
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 136.218,
        "saikou": 9,
        "heikin": 4.18,
        "boshuAvg30d": 53.9,
        "heikinAvg30d": 3.797
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 136.218,
        "saikou": 7.99,
        "heikin": 3.89,
        "boshuAvg30d": 53.9,
        "heikinAvg30d": 3.978
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 85.968,
        "saikou": 5.99,
        "heikin": 1.55,
        "boshuAvg30d": 52.8,
        "heikinAvg30d": 3.226
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 123.968,
        "saikou": 5.99,
        "heikin": 1.2,
        "boshuAvg30d": 52.8,
        "heikinAvg30d": 3.337
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 134.268,
        "saikou": 9.91,
        "heikin": 4.56,
        "boshuAvg30d": 52.8,
        "heikinAvg30d": 3.481
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 136.258,
        "saikou": 9.36,
        "heikin": 4.4,
        "boshuAvg30d": 51.9,
        "heikinAvg30d": 4.462
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 126.918,
        "saikou": 7,
        "heikin": 1.58,
        "boshuAvg30d": 51.8,
        "heikinAvg30d": 4.327
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 87.918,
        "saikou": 7,
        "heikin": 1.58,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.406
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 141.918,
        "saikou": 7,
        "heikin": 1.8,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.833
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 115.918,
        "saikou": 7.47,
        "heikin": 1.82,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 5.677
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 146.908,
        "saikou": 6.36,
        "heikin": 1.97,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 6.268
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 117.908,
        "saikou": 6.84,
        "heikin": 2.02,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 6.258
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 164.218,
        "saikou": 5.6,
        "heikin": 1.85,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 6.01
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 141.208,
        "saikou": 5.6,
        "heikin": 1.81,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 5.822
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 90.918,
        "saikou": 1.45,
        "heikin": 1.45,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 5.353
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 100.918,
        "saikou": 6.91,
        "heikin": 2.03,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 5.089
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 90.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 5.011
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 105.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 5.063
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 102.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 49.7,
        "heikinAvg30d": 5.266
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 102.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 4.719
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 105.918,
        "saikou": 1.21,
        "heikin": 1.21,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 4.949
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 117.908,
        "saikou": 7.68,
        "heikin": 1.94,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 5.101
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 137.968,
        "saikou": 6.77,
        "heikin": 2.5,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 5.038
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 88.968,
        "saikou": 1.45,
        "heikin": 1.45,
        "boshuAvg30d": 51.8,
        "heikinAvg30d": 5.044
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 88.968,
        "saikou": 1.45,
        "heikin": 1.45,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.709
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 88.968,
        "saikou": 1.45,
        "heikin": 1.45,
        "boshuAvg30d": 51.8,
        "heikinAvg30d": 4.362
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 92.496,
        "saikou": 10,
        "heikin": 5.51,
        "boshuAvg30d": 112.1,
        "heikinAvg30d": 4.568
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 116.496,
        "saikou": 10,
        "heikin": 7,
        "boshuAvg30d": 112.1,
        "heikinAvg30d": 4.868
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 116.496,
        "saikou": 10,
        "heikin": 6.75,
        "boshuAvg30d": 112.1,
        "heikinAvg30d": 5.073
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 118.456,
        "saikou": 10,
        "heikin": 6.75,
        "boshuAvg30d": 112.1,
        "heikinAvg30d": 5.154
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 116.472,
        "saikou": 10,
        "heikin": 6.45,
        "boshuAvg30d": 112.1,
        "heikinAvg30d": 4.998
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 116.436,
        "saikou": 8.2,
        "heikin": 4.81,
        "boshuAvg30d": 112.1,
        "heikinAvg30d": 4.564
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 129.62,
        "saikou": 7.61,
        "heikin": 4.43,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 4.535
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 131.12,
        "saikou": 8.13,
        "heikin": 5.79,
        "boshuAvg30d": 123.5,
        "heikinAvg30d": 4.077
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 135.118,
        "saikou": 8.2,
        "heikin": 5.85,
        "boshuAvg30d": 122.6,
        "heikinAvg30d": 4.095
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 135.118,
        "saikou": 8.13,
        "heikin": 5.5,
        "boshuAvg30d": 123.5,
        "heikinAvg30d": 4.226
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 136.918,
        "saikou": 7.54,
        "heikin": 5.33,
        "boshuAvg30d": 123.5,
        "heikinAvg30d": 4.194
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 135.268,
        "saikou": 7.48,
        "heikin": 5.28,
        "boshuAvg30d": 123.5,
        "heikinAvg30d": 4.082
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 134.953,
        "saikou": 7.33,
        "heikin": 4.44,
        "boshuAvg30d": 130.5,
        "heikinAvg30d": 4.239
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 133.453,
        "saikou": 7.43,
        "heikin": 4.36,
        "boshuAvg30d": 133.7,
        "heikinAvg30d": 4.177
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 111.154,
        "saikou": 10,
        "heikin": 5.08,
        "boshuAvg30d": 137.6,
        "heikinAvg30d": 4.734
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 113.45,
        "saikou": 10,
        "heikin": 6.8,
        "boshuAvg30d": 139.6,
        "heikinAvg30d": 4.802
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 102.284,
        "saikou": 10,
        "heikin": 6.18,
        "boshuAvg30d": 139.6,
        "heikinAvg30d": 4.609
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 111.65,
        "saikou": 10,
        "heikin": 5.58,
        "boshuAvg30d": 139.6,
        "heikinAvg30d": 4.93
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 133.254,
        "saikou": 7.46,
        "heikin": 4.23,
        "boshuAvg30d": 78.9,
        "heikinAvg30d": 4.469
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 123.043,
        "saikou": 10,
        "heikin": 5.98,
        "boshuAvg30d": 79.9,
        "heikinAvg30d": 4.473
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 122.491,
        "saikou": 7.51,
        "heikin": 5.22,
        "boshuAvg30d": 81.9,
        "heikinAvg30d": 4.827
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 94.735,
        "saikou": 10,
        "heikin": 6.11,
        "boshuAvg30d": 82.8,
        "heikinAvg30d": 5.0
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 98.69,
        "saikou": 10,
        "heikin": 5.93,
        "boshuAvg30d": 82.9,
        "heikinAvg30d": 5.004
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 85.04,
        "saikou": 7.57,
        "heikin": 4.99,
        "boshuAvg30d": 82.9,
        "heikinAvg30d": 5.114
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 83.344,
        "saikou": 7.51,
        "heikin": 5.53,
        "boshuAvg30d": 77.9,
        "heikinAvg30d": 5.31
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 84.694,
        "saikou": 7.57,
        "heikin": 5.15,
        "boshuAvg30d": 77.9,
        "heikinAvg30d": 5.24
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 97.394,
        "saikou": 8.59,
        "heikin": 6.29,
        "boshuAvg30d": 77.9,
        "heikinAvg30d": 4.499
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 98.82,
        "saikou": 10,
        "heikin": 5.81,
        "boshuAvg30d": 76.9,
        "heikinAvg30d": 4.72
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 98.69,
        "saikou": 10,
        "heikin": 5.88,
        "boshuAvg30d": 76.9,
        "heikinAvg30d": 4.505
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 139.016,
        "saikou": 10,
        "heikin": 5.71,
        "boshuAvg30d": 75.9,
        "heikinAvg30d": 3.996
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 116.946,
        "saikou": 8.17,
        "heikin": 4.17,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 4.073
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 116.946,
        "saikou": 10,
        "heikin": 3.42,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 4.403
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 115.146,
        "saikou": 5.62,
        "heikin": 3.74,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 4.435
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 85.89,
        "saikou": 5.08,
        "heikin": 3.06,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 4.14
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 87.194,
        "saikou": 5.07,
        "heikin": 3.47,
        "boshuAvg30d": 137.6,
        "heikinAvg30d": 4.499
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 84.044,
        "saikou": 5,
        "heikin": 3.27,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 3.735
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 61.162,
        "saikou": 4.99,
        "heikin": 3.75,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 3.342
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 47.662,
        "saikou": 2.97,
        "heikin": 2.34,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 3.083
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 63.158,
        "saikou": 5.06,
        "heikin": 3.28,
        "boshuAvg30d": 135.6,
        "heikinAvg30d": 3.086
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 63.158,
        "saikou": 5.08,
        "heikin": 2.94,
        "boshuAvg30d": 134.7,
        "heikinAvg30d": 3.134
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 85.159,
        "saikou": 5.05,
        "heikin": 3.5,
        "boshuAvg30d": 134.6,
        "heikinAvg30d": 3.301
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 85.159,
        "saikou": 5.15,
        "heikin": 3.54,
        "boshuAvg30d": 134.6,
        "heikinAvg30d": 3.396
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 85.153,
        "saikou": 4.28,
        "heikin": 2.04,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 2.902
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 85.153,
        "saikou": 4.3,
        "heikin": 1.83,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.424
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 76.954,
        "saikou": 3.99,
        "heikin": 1.7,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.527
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 100.384,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 4.085
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 99.034,
        "saikou": 10,
        "heikin": 8,
        "boshuAvg30d": 46.4,
        "heikinAvg30d": 3.994
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 97.784,
        "saikou": 10,
        "heikin": 9.09,
        "boshuAvg30d": 45.5,
        "heikinAvg30d": 4.861
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 157,
        "ouatsu": 533.832,
        "saikou": 1.78,
        "heikin": 0.83,
        "boshuAvg30d": 224.3,
        "heikinAvg30d": 1.523
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 157,
        "ouatsu": 550.382,
        "saikou": 1.23,
        "heikin": 0.61,
        "boshuAvg30d": 224.3,
        "heikinAvg30d": 1.502
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 157,
        "ouatsu": 534.09,
        "saikou": 1.23,
        "heikin": 0.51,
        "boshuAvg30d": 224.3,
        "heikinAvg30d": 1.663
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 157,
        "ouatsu": 565.627,
        "saikou": 1.18,
        "heikin": 0.57,
        "boshuAvg30d": 224.3,
        "heikinAvg30d": 1.247
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 155,
        "ouatsu": 548.744,
        "saikou": 0.64,
        "heikin": 0.39,
        "boshuAvg30d": 222.3,
        "heikinAvg30d": 1.273
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 155,
        "ouatsu": 552.569,
        "saikou": 0.64,
        "heikin": 0.38,
        "boshuAvg30d": 222.3,
        "heikinAvg30d": 1.537
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 153,
        "ouatsu": 562.528,
        "saikou": 1.05,
        "heikin": 0.44,
        "boshuAvg30d": 220.3,
        "heikinAvg30d": 1.396
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 155,
        "ouatsu": 559.088,
        "saikou": 0.49,
        "heikin": 0.37,
        "boshuAvg30d": 222.3,
        "heikinAvg30d": 1.562
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 155,
        "ouatsu": 538.272,
        "saikou": 0.39,
        "heikin": 0.35,
        "boshuAvg30d": 222.3,
        "heikinAvg30d": 1.71
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 156,
        "ouatsu": 542.042,
        "saikou": 0.39,
        "heikin": 0.35,
        "boshuAvg30d": 223.3,
        "heikinAvg30d": 1.555
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 156,
        "ouatsu": 507.323,
        "saikou": 0.47,
        "heikin": 0.38,
        "boshuAvg30d": 223.3,
        "heikinAvg30d": 1.645
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 156,
        "ouatsu": 402.481,
        "saikou": 0.39,
        "heikin": 0.37,
        "boshuAvg30d": 223.3,
        "heikinAvg30d": 1.772
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 176,
        "ouatsu": 372.384,
        "saikou": 5.08,
        "heikin": 1.71,
        "boshuAvg30d": 243.2,
        "heikinAvg30d": 2.307
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 184,
        "ouatsu": 333.706,
        "saikou": 5.09,
        "heikin": 1.94,
        "boshuAvg30d": 251.2,
        "heikinAvg30d": 2.479
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 188,
        "ouatsu": 245.822,
        "saikou": 4.97,
        "heikin": 2.51,
        "boshuAvg30d": 255.3,
        "heikinAvg30d": 2.618
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 193,
        "ouatsu": 423.68,
        "saikou": 2.43,
        "heikin": 1.59,
        "boshuAvg30d": 260.3,
        "heikinAvg30d": 2.407
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 193,
        "ouatsu": 563.452,
        "saikou": 2.4,
        "heikin": 0.86,
        "boshuAvg30d": 260.3,
        "heikinAvg30d": 1.96
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 193,
        "ouatsu": 421.682,
        "saikou": 2.72,
        "heikin": 1.41,
        "boshuAvg30d": 264.1,
        "heikinAvg30d": 2.51
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 183,
        "ouatsu": 419.762,
        "saikou": 3.36,
        "heikin": 1.27,
        "boshuAvg30d": 254.3,
        "heikinAvg30d": 1.935
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 183,
        "ouatsu": 402.269,
        "saikou": 5.24,
        "heikin": 0.95,
        "boshuAvg30d": 254.3,
        "heikinAvg30d": 1.855
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 183,
        "ouatsu": 408.07,
        "saikou": 5.02,
        "heikin": 0.95,
        "boshuAvg30d": 254.3,
        "heikinAvg30d": 1.789
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 183,
        "ouatsu": 382.736,
        "saikou": 1.64,
        "heikin": 0.75,
        "boshuAvg30d": 254.2,
        "heikinAvg30d": 1.776
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 384.44,
        "saikou": 1.52,
        "heikin": 0.68,
        "boshuAvg30d": 250.9,
        "heikinAvg30d": 1.826
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 378.934,
        "saikou": 9.56,
        "heikin": 1.39,
        "boshuAvg30d": 250.9,
        "heikinAvg30d": 2.044
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 178,
        "ouatsu": 323.065,
        "saikou": 1.51,
        "heikin": 0.64,
        "boshuAvg30d": 248.8,
        "heikinAvg30d": 1.52
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 178,
        "ouatsu": 336.756,
        "saikou": 1.45,
        "heikin": 0.56,
        "boshuAvg30d": 248.8,
        "heikinAvg30d": 1.511
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 178,
        "ouatsu": 379.796,
        "saikou": 1.44,
        "heikin": 0.61,
        "boshuAvg30d": 248.8,
        "heikinAvg30d": 1.83
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 360.182,
        "saikou": 1.44,
        "heikin": 0.69,
        "boshuAvg30d": 248.8,
        "heikinAvg30d": 1.6
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 177,
        "ouatsu": 375.395,
        "saikou": 6.62,
        "heikin": 1.57,
        "boshuAvg30d": 247.8,
        "heikinAvg30d": 1.823
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 177,
        "ouatsu": 359.423,
        "saikou": 1.66,
        "heikin": 1.02,
        "boshuAvg30d": 247.8,
        "heikinAvg30d": 1.935
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 175,
        "ouatsu": 384.182,
        "saikou": 6.42,
        "heikin": 1.46,
        "boshuAvg30d": 246.1,
        "heikinAvg30d": 2.041
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 175,
        "ouatsu": 406.481,
        "saikou": 9.22,
        "heikin": 2.18,
        "boshuAvg30d": 246.1,
        "heikinAvg30d": 1.956
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 175,
        "ouatsu": 442.537,
        "saikou": 5.02,
        "heikin": 1.41,
        "boshuAvg30d": 246.1,
        "heikinAvg30d": 2.063
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 175,
        "ouatsu": 463.095,
        "saikou": 2.32,
        "heikin": 1.33,
        "boshuAvg30d": 246.1,
        "heikinAvg30d": 2.076
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 175,
        "ouatsu": 458.632,
        "saikou": 2.2,
        "heikin": 1.31,
        "boshuAvg30d": 246.1,
        "heikinAvg30d": 2.011
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 175,
        "ouatsu": 431.097,
        "saikou": 1.92,
        "heikin": 1.24,
        "boshuAvg30d": 242.3,
        "heikinAvg30d": 2.158
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 177,
        "ouatsu": 436.245,
        "saikou": 2.05,
        "heikin": 1.21,
        "boshuAvg30d": 244.3,
        "heikinAvg30d": 1.948
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 177,
        "ouatsu": 437.967,
        "saikou": 1.96,
        "heikin": 1.17,
        "boshuAvg30d": 244.3,
        "heikinAvg30d": 1.864
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 177,
        "ouatsu": 445.496,
        "saikou": 1.78,
        "heikin": 0.96,
        "boshuAvg30d": 244.3,
        "heikinAvg30d": 1.875
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 177,
        "ouatsu": 486.597,
        "saikou": 4.84,
        "heikin": 0.86,
        "boshuAvg30d": 244.3,
        "heikinAvg30d": 1.772
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 176,
        "ouatsu": 476.923,
        "saikou": 1.41,
        "heikin": 0.81,
        "boshuAvg30d": 243.3,
        "heikinAvg30d": 1.87
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 176,
        "ouatsu": 451.009,
        "saikou": 4.8,
        "heikin": 1.42,
        "boshuAvg30d": 243.3,
        "heikinAvg30d": 1.999
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 175,
        "ouatsu": 410.679,
        "saikou": 1.84,
        "heikin": 0.75,
        "boshuAvg30d": 242.3,
        "heikinAvg30d": 1.81
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 175,
        "ouatsu": 389.714,
        "saikou": 3.21,
        "heikin": 1.04,
        "boshuAvg30d": 242.3,
        "heikinAvg30d": 1.816
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 175,
        "ouatsu": 467.233,
        "saikou": 6.69,
        "heikin": 1.38,
        "boshuAvg30d": 242.3,
        "heikinAvg30d": 1.94
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 173,
        "ouatsu": 560.954,
        "saikou": 3.93,
        "heikin": 1.69,
        "boshuAvg30d": 240.3,
        "heikinAvg30d": 2.024
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 171,
        "ouatsu": 517.851,
        "saikou": 3.76,
        "heikin": 1.1,
        "boshuAvg30d": 238.3,
        "heikinAvg30d": 2.237
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 457.09,
        "saikou": 5.34,
        "heikin": 2.13,
        "boshuAvg30d": 237.3,
        "heikinAvg30d": 2.028
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 60,
        "ouatsu": 363.668,
        "saikou": 2.72,
        "heikin": 1.86,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 2.075
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 60,
        "ouatsu": 303.182,
        "saikou": 2.38,
        "heikin": 1.45,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 1.994
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 60,
        "ouatsu": 301.499,
        "saikou": 2.22,
        "heikin": 1.39,
        "boshuAvg30d": 157.5,
        "heikinAvg30d": 2.023
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 301.627,
        "saikou": 2.49,
        "heikin": 1.46,
        "boshuAvg30d": 156.6,
        "heikinAvg30d": 2.066
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 59,
        "ouatsu": 287.388,
        "saikou": 5.61,
        "heikin": 1.61,
        "boshuAvg30d": 156.5,
        "heikinAvg30d": 2.101
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 264.307,
        "saikou": 5.6,
        "heikin": 1.32,
        "boshuAvg30d": 155.6,
        "heikinAvg30d": 2.095
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 297.445,
        "saikou": 5.62,
        "heikin": 1.32,
        "boshuAvg30d": 154.6,
        "heikinAvg30d": 2.052
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 284.093,
        "saikou": 5.65,
        "heikin": 1.47,
        "boshuAvg30d": 154.6,
        "heikinAvg30d": 2.005
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 282.493,
        "saikou": 2.94,
        "heikin": 1.31,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 1.903
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 269.793,
        "saikou": 4.5,
        "heikin": 1.55,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 1.961
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 271.783,
        "saikou": 3.09,
        "heikin": 1.37,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 1.887
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 268.383,
        "saikou": 5.53,
        "heikin": 1.49,
        "boshuAvg30d": 154.7,
        "heikinAvg30d": 1.916
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 271.783,
        "saikou": 5.45,
        "heikin": 1.61,
        "boshuAvg30d": 164.6,
        "heikinAvg30d": 2.143
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 72,
        "ouatsu": 265.881,
        "saikou": 5.55,
        "heikin": 2.04,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 2.194
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 75,
        "ouatsu": 265.881,
        "saikou": 6.56,
        "heikin": 1.92,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 2.337
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 77,
        "ouatsu": 264.381,
        "saikou": 5.69,
        "heikin": 1.96,
        "boshuAvg30d": 174.5,
        "heikinAvg30d": 2.375
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 77,
        "ouatsu": 266.371,
        "saikou": 2.62,
        "heikin": 1.85,
        "boshuAvg30d": 174.5,
        "heikinAvg30d": 2.357
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 77,
        "ouatsu": 268.299,
        "saikou": 7.54,
        "heikin": 3.12,
        "boshuAvg30d": 174.5,
        "heikinAvg30d": 2.456
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 82,
        "ouatsu": 234.687,
        "saikou": 6.9,
        "heikin": 3.01,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 2.411
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 82,
        "ouatsu": 209.309,
        "saikou": 7.16,
        "heikin": 4.91,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 2.798
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 82,
        "ouatsu": 201.97,
        "saikou": 6.98,
        "heikin": 5.25,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 2.905
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 82,
        "ouatsu": 170.309,
        "saikou": 6.62,
        "heikin": 4.97,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 2.895
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 81,
        "ouatsu": 179.17,
        "saikou": 6.83,
        "heikin": 4.71,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 2.892
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 80,
        "ouatsu": 165.302,
        "saikou": 9.67,
        "heikin": 4.69,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 3.195
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 76,
        "ouatsu": 174.43,
        "saikou": 9.4,
        "heikin": 5.24,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 3.672
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 76,
        "ouatsu": 158.311,
        "saikou": 6.56,
        "heikin": 4.57,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 3.612
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 76,
        "ouatsu": 142.457,
        "saikou": 6.56,
        "heikin": 2.17,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 2.659
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 76,
        "ouatsu": 146.41,
        "saikou": 6.56,
        "heikin": 2.11,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 2.615
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 76,
        "ouatsu": 168.164,
        "saikou": 6.56,
        "heikin": 2.04,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 2.642
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 76,
        "ouatsu": 186.306,
        "saikou": 6.56,
        "heikin": 2.25,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 2.747
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 74,
        "ouatsu": 203.371,
        "saikou": 9.47,
        "heikin": 2.81,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 2.988
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 74,
        "ouatsu": 248.805,
        "saikou": 9.47,
        "heikin": 2.48,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 2.898
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 74,
        "ouatsu": 254.093,
        "saikou": 2.71,
        "heikin": 2.25,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 2.946
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 73,
        "ouatsu": 351.428,
        "saikou": 4.5,
        "heikin": 1.67,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 3.6
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 73,
        "ouatsu": 356.856,
        "saikou": 4,
        "heikin": 1.41,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 3.501
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 72,
        "ouatsu": 353.195,
        "saikou": 2.81,
        "heikin": 1.33,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 3.023
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 358.575,
        "saikou": 5.71,
        "heikin": 1.79,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 3.011
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 352.622,
        "saikou": 5.56,
        "heikin": 1.8,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 2.975
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 477.216,
        "saikou": 1.6,
        "heikin": 0.89,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 2.401
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 532.004,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 2.492
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 70,
        "ouatsu": 523.966,
        "saikou": 1.59,
        "heikin": 0.8,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 2.313
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 70,
        "ouatsu": 421.498,
        "saikou": 5.62,
        "heikin": 1.09,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 2.197
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 72,
        "ouatsu": 485.643,
        "saikou": 1.83,
        "heikin": 1.04,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 2.08
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 72,
        "ouatsu": 505.048,
        "saikou": 1.86,
        "heikin": 1.05,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 2.304
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 72,
        "ouatsu": 495.846,
        "saikou": 1.77,
        "heikin": 1.02,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 2.282
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 373.502,
        "saikou": 1.49,
        "heikin": 0.97,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 2.241
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 363.502,
        "saikou": 1.5,
        "heikin": 0.97,
        "boshuAvg30d": 166.6,
        "heikinAvg30d": 2.135
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 383.663,
        "saikou": 1.27,
        "heikin": 1.03,
        "boshuAvg30d": 163.6,
        "heikinAvg30d": 2.079
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 4.369
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 0,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 3.781
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 0,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 3.3
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 3.872
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 1.998,
        "saikou": 7,
        "heikin": 7,
        "boshuAvg30d": 59.8,
        "heikinAvg30d": 3.567
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 7,
        "heikin": 7,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 3.41
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 5.549
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 4.545
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 3.87
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 5.019
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 4.982
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 4.615
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 5.487
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 1.998,
        "saikou": 7,
        "heikin": 7,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 5.135
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 1.998,
        "saikou": 7,
        "heikin": 7,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 5.781
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 1.998,
        "saikou": 7,
        "heikin": 7,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 4.916
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 9.008,
        "saikou": 4.23,
        "heikin": 4.23,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 5.89
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 61.998,
        "saikou": 7,
        "heikin": 1.69,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 4.95
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 61.998,
        "saikou": 9.05,
        "heikin": 4.4,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 5.619
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 61.998,
        "saikou": 9.9,
        "heikin": 4.42,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 5.858
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 26.998,
        "saikou": 9.99,
        "heikin": 5.06,
        "boshuAvg30d": 68.8,
        "heikinAvg30d": 6.768
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 61.998,
        "saikou": 9.99,
        "heikin": 2.33,
        "boshuAvg30d": 68.8,
        "heikinAvg30d": 7.034
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 61.998,
        "saikou": 9.99,
        "heikin": 3.02,
        "boshuAvg30d": 68.8,
        "heikinAvg30d": 6.745
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 61.998,
        "saikou": 9.99,
        "heikin": 1.12,
        "boshuAvg30d": 68.8,
        "heikinAvg30d": 6.264
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 61.998,
        "saikou": 9.99,
        "heikin": 0.99,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 4.696
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 61.998,
        "saikou": 9.99,
        "heikin": 0.76,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 5.406
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 61.998,
        "saikou": 9.99,
        "heikin": 1.12,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 6.887
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 61.998,
        "saikou": 9.99,
        "heikin": 0.76,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 5.962
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 42.742,
        "saikou": 9.99,
        "heikin": 0.88,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 6.692
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 1.998,
        "saikou": 9.99,
        "heikin": 9.99,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 6.427
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 1.998,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 69.7,
        "heikinAvg30d": 6.93
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 1.998,
        "saikou": 9.99,
        "heikin": 9.99,
        "boshuAvg30d": 69.7,
        "heikinAvg30d": 7.074
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 26.998,
        "saikou": 4.06,
        "heikin": 4.06,
        "boshuAvg30d": 69.8,
        "heikinAvg30d": 6.869
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 69.8,
        "heikinAvg30d": 6.36
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 69.8,
        "heikinAvg30d": 6.697
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 69.8,
        "heikinAvg30d": 6.599
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 69.7,
        "heikinAvg30d": 5.805
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 69.7,
        "heikinAvg30d": 6.425
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 69.7,
        "heikinAvg30d": 5.584
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 69.7,
        "heikinAvg30d": 5.962
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 5.426
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 5.614
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 4.99
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 5.039
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 5.679
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 5.393
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 5.468
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 4.28
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 213.754,
        "saikou": 2.94,
        "heikin": 1.36,
        "boshuAvg30d": 232.7,
        "heikinAvg30d": 3.35
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 237.699,
        "saikou": 2.83,
        "heikin": 1.15,
        "boshuAvg30d": 232.7,
        "heikinAvg30d": 2.49
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 229.855,
        "saikou": 2.83,
        "heikin": 1.14,
        "boshuAvg30d": 232.7,
        "heikinAvg30d": 2.355
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 205.712,
        "saikou": 2.81,
        "heikin": 1.04,
        "boshuAvg30d": 232.7,
        "heikinAvg30d": 2.36
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 110.949,
        "saikou": 7.44,
        "heikin": 2.5,
        "boshuAvg30d": 231.7,
        "heikinAvg30d": 2.829
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 146.607,
        "saikou": 7.44,
        "heikin": 2.51,
        "boshuAvg30d": 231.7,
        "heikinAvg30d": 3.227
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 115.257,
        "saikou": 5.3,
        "heikin": 2.84,
        "boshuAvg30d": 231.7,
        "heikinAvg30d": 3.626
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 115.257,
        "saikou": 6.9,
        "heikin": 4.01,
        "boshuAvg30d": 231.7,
        "heikinAvg30d": 3.928
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 115.257,
        "saikou": 6.78,
        "heikin": 3.69,
        "boshuAvg30d": 232.7,
        "heikinAvg30d": 3.631
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 115.257,
        "saikou": 4.8,
        "heikin": 2.92,
        "boshuAvg30d": 232.7,
        "heikinAvg30d": 3.412
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 115.257,
        "saikou": 5.13,
        "heikin": 3.09,
        "boshuAvg30d": 232.7,
        "heikinAvg30d": 3.457
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 115.257,
        "saikou": 5.41,
        "heikin": 1.83,
        "boshuAvg30d": 232.7,
        "heikinAvg30d": 3.471
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 137.425,
        "saikou": 6.8,
        "heikin": 1.82,
        "boshuAvg30d": 242.8,
        "heikinAvg30d": 3.571
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 66.389,
        "saikou": 8.99,
        "heikin": 6.98,
        "boshuAvg30d": 246.8,
        "heikinAvg30d": 3.618
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 115.257,
        "saikou": 7.44,
        "heikin": 4.42,
        "boshuAvg30d": 251.8,
        "heikinAvg30d": 4.469
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 115.257,
        "saikou": 7.44,
        "heikin": 4.08,
        "boshuAvg30d": 253.8,
        "heikinAvg30d": 4.65
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 154.479,
        "saikou": 3.05,
        "heikin": 1.75,
        "boshuAvg30d": 253.8,
        "heikinAvg30d": 4.541
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 119.124,
        "saikou": 8.99,
        "heikin": 6.18,
        "boshuAvg30d": 253.8,
        "heikinAvg30d": 4.916
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 119.124,
        "saikou": 9.53,
        "heikin": 6.19,
        "boshuAvg30d": 264.3,
        "heikinAvg30d": 5.03
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 119.124,
        "saikou": 9.97,
        "heikin": 6.37,
        "boshuAvg30d": 264.3,
        "heikinAvg30d": 4.995
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 167.37,
        "saikou": 9.98,
        "heikin": 4.61,
        "boshuAvg30d": 264.3,
        "heikinAvg30d": 4.852
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 160.698,
        "saikou": 9.98,
        "heikin": 4.79,
        "boshuAvg30d": 263.3,
        "heikinAvg30d": 4.743
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 162.683,
        "saikou": 9.99,
        "heikin": 4.88,
        "boshuAvg30d": 261.4,
        "heikinAvg30d": 4.65
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 162.683,
        "saikou": 9.99,
        "heikin": 4.86,
        "boshuAvg30d": 262.3,
        "heikinAvg30d": 4.427
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 162.683,
        "saikou": 9.99,
        "heikin": 4.68,
        "boshuAvg30d": 260.4,
        "heikinAvg30d": 3.962
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 162.683,
        "saikou": 9.99,
        "heikin": 4.65,
        "boshuAvg30d": 260.4,
        "heikinAvg30d": 4.003
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 162.683,
        "saikou": 9.99,
        "heikin": 4.81,
        "boshuAvg30d": 260.4,
        "heikinAvg30d": 4.685
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 162.683,
        "saikou": 9.99,
        "heikin": 4.81,
        "boshuAvg30d": 260.4,
        "heikinAvg30d": 4.747
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 159.242,
        "saikou": 9.99,
        "heikin": 4.77,
        "boshuAvg30d": 260.4,
        "heikinAvg30d": 5.244
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 161.24,
        "saikou": 9.99,
        "heikin": 4.82,
        "boshuAvg30d": 260.4,
        "heikinAvg30d": 5.164
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 182.291,
        "saikou": 9.97,
        "heikin": 4.33,
        "boshuAvg30d": 260.3,
        "heikinAvg30d": 5.126
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 9.47,
        "heikin": 6.28,
        "boshuAvg30d": 260.3,
        "heikinAvg30d": 5.258
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 3.05,
        "heikin": 2.84,
        "boshuAvg30d": 260.3,
        "heikinAvg30d": 5.041
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 3.05,
        "heikin": 2.84,
        "boshuAvg30d": 260.3,
        "heikinAvg30d": 4.613
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 6.79,
        "heikin": 2.98,
        "boshuAvg30d": 256.0,
        "heikinAvg30d": 4.911
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 119.124,
        "saikou": 3.05,
        "heikin": 2.84,
        "boshuAvg30d": 255.0,
        "heikinAvg30d": 4.803
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 117.164,
        "saikou": 7.6,
        "heikin": 4.47,
        "boshuAvg30d": 253.0,
        "heikinAvg30d": 4.712
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 117.164,
        "saikou": 7.91,
        "heikin": 4.51,
        "boshuAvg30d": 253.0,
        "heikinAvg30d": 4.717
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 119.124,
        "saikou": 3.05,
        "heikin": 2.84,
        "boshuAvg30d": 253.0,
        "heikinAvg30d": 4.659
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 2.83,
        "heikin": 2.83,
        "boshuAvg30d": 252.0,
        "heikinAvg30d": 3.962
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 117.139,
        "saikou": 3.05,
        "heikin": 2.84,
        "boshuAvg30d": 251.0,
        "heikinAvg30d": 4.506
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 117.139,
        "saikou": 3.05,
        "heikin": 2.84,
        "boshuAvg30d": 251.9,
        "heikinAvg30d": 4.542
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 3.05,
        "heikin": 2.84,
        "boshuAvg30d": 251.9,
        "heikinAvg30d": 4.233
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 115.257,
        "saikou": 2.83,
        "heikin": 2.83,
        "boshuAvg30d": 251.9,
        "heikinAvg30d": 4.212
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 115.257,
        "saikou": 2.83,
        "heikin": 2.83,
        "boshuAvg30d": 251.9,
        "heikinAvg30d": 4.155
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 140.051,
        "saikou": 2.83,
        "heikin": 1.99,
        "boshuAvg30d": 250.0,
        "heikinAvg30d": 4.236
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 117.465,
        "saikou": 2.83,
        "heikin": 1.62,
        "boshuAvg30d": 248.9,
        "heikinAvg30d": 4.036
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 147.883,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 246.9,
        "heikinAvg30d": 3.584
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 103,
        "ouatsu": 128.423,
        "saikou": 2.29,
        "heikin": 1.35,
        "boshuAvg30d": 117.5,
        "heikinAvg30d": 2.31
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 103,
        "ouatsu": 102.969,
        "saikou": 2.29,
        "heikin": 1.72,
        "boshuAvg30d": 117.5,
        "heikinAvg30d": 2.327
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 103,
        "ouatsu": 92.042,
        "saikou": 2.29,
        "heikin": 1.93,
        "boshuAvg30d": 117.5,
        "heikinAvg30d": 2.269
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 103,
        "ouatsu": 94.032,
        "saikou": 2.29,
        "heikin": 2.06,
        "boshuAvg30d": 117.5,
        "heikinAvg30d": 1.991
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 103,
        "ouatsu": 70.166,
        "saikou": 6.75,
        "heikin": 2.11,
        "boshuAvg30d": 117.5,
        "heikinAvg30d": 2.017
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 103,
        "ouatsu": 54.299,
        "saikou": 2.29,
        "heikin": 2.16,
        "boshuAvg30d": 117.5,
        "heikinAvg30d": 2.256
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 103,
        "ouatsu": 62.029,
        "saikou": 4.31,
        "heikin": 2.18,
        "boshuAvg30d": 117.5,
        "heikinAvg30d": 2.469
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 104,
        "ouatsu": 63.322,
        "saikou": 6.7,
        "heikin": 5.55,
        "boshuAvg30d": 118.5,
        "heikinAvg30d": 2.893
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 104,
        "ouatsu": 63.322,
        "saikou": 4.7,
        "heikin": 3.33,
        "boshuAvg30d": 118.5,
        "heikinAvg30d": 2.848
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 104,
        "ouatsu": 63.322,
        "saikou": 5.38,
        "heikin": 4.39,
        "boshuAvg30d": 118.5,
        "heikinAvg30d": 2.94
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 104,
        "ouatsu": 63.322,
        "saikou": 5.48,
        "heikin": 4.4,
        "boshuAvg30d": 118.5,
        "heikinAvg30d": 3.166
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 104,
        "ouatsu": 63.322,
        "saikou": 5.78,
        "heikin": 4.88,
        "boshuAvg30d": 118.5,
        "heikinAvg30d": 3.039
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 106,
        "ouatsu": 60.452,
        "saikou": 2,
        "heikin": 1.88,
        "boshuAvg30d": 120.5,
        "heikinAvg30d": 3.286
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 107,
        "ouatsu": 56.503,
        "saikou": 7.99,
        "heikin": 7.03,
        "boshuAvg30d": 121.5,
        "heikinAvg30d": 3.635
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 107,
        "ouatsu": 56.503,
        "saikou": 8.09,
        "heikin": 6.22,
        "boshuAvg30d": 121.5,
        "heikinAvg30d": 3.664
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 108,
        "ouatsu": 95.913,
        "saikou": 2.29,
        "heikin": 2,
        "boshuAvg30d": 122.5,
        "heikinAvg30d": 3.338
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 108,
        "ouatsu": 158.74,
        "saikou": 5.55,
        "heikin": 3.8,
        "boshuAvg30d": 122.5,
        "heikinAvg30d": 3.303
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 108,
        "ouatsu": 170.017,
        "saikou": 9.5,
        "heikin": 3.2,
        "boshuAvg30d": 122.5,
        "heikinAvg30d": 2.744
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 111,
        "ouatsu": 171.467,
        "saikou": 9.5,
        "heikin": 3.61,
        "boshuAvg30d": 125.5,
        "heikinAvg30d": 2.822
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 112,
        "ouatsu": 173.427,
        "saikou": 9.5,
        "heikin": 3.14,
        "boshuAvg30d": 126.6,
        "heikinAvg30d": 2.651
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 113,
        "ouatsu": 173.427,
        "saikou": 7.36,
        "heikin": 2.39,
        "boshuAvg30d": 127.6,
        "heikinAvg30d": 2.628
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 114,
        "ouatsu": 173.427,
        "saikou": 9.5,
        "heikin": 3.13,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 2.48
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 114,
        "ouatsu": 173.427,
        "saikou": 9.5,
        "heikin": 3,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 2.371
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 114,
        "ouatsu": 173.427,
        "saikou": 9.5,
        "heikin": 3,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 2.294
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 111,
        "ouatsu": 173.427,
        "saikou": 2.29,
        "heikin": 1.18,
        "boshuAvg30d": 125.5,
        "heikinAvg30d": 2.225
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 111,
        "ouatsu": 173.427,
        "saikou": 2.29,
        "heikin": 1.23,
        "boshuAvg30d": 125.5,
        "heikinAvg30d": 2.418
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 111,
        "ouatsu": 173.427,
        "saikou": 2.29,
        "heikin": 1.16,
        "boshuAvg30d": 125.5,
        "heikinAvg30d": 2.513
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 111,
        "ouatsu": 173.427,
        "saikou": 8.48,
        "heikin": 1.4,
        "boshuAvg30d": 125.5,
        "heikinAvg30d": 2.53
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 111,
        "ouatsu": 173.427,
        "saikou": 9.5,
        "heikin": 2.14,
        "boshuAvg30d": 125.5,
        "heikinAvg30d": 2.456
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 110,
        "ouatsu": 173.427,
        "saikou": 8.48,
        "heikin": 3.81,
        "boshuAvg30d": 124.5,
        "heikinAvg30d": 2.72
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 110,
        "ouatsu": 173.427,
        "saikou": 8.23,
        "heikin": 4.68,
        "boshuAvg30d": 124.5,
        "heikinAvg30d": 3.085
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 110,
        "ouatsu": 173.427,
        "saikou": 6.75,
        "heikin": 3.93,
        "boshuAvg30d": 124.5,
        "heikinAvg30d": 3.501
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 110,
        "ouatsu": 229.452,
        "saikou": 5.39,
        "heikin": 2.77,
        "boshuAvg30d": 124.5,
        "heikinAvg30d": 3.816
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 110,
        "ouatsu": 188.166,
        "saikou": 2.7,
        "heikin": 1.85,
        "boshuAvg30d": 124.5,
        "heikinAvg30d": 4.413
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 110,
        "ouatsu": 109.692,
        "saikou": 7.1,
        "heikin": 2.82,
        "boshuAvg30d": 124.5,
        "heikinAvg30d": 4.976
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 110,
        "ouatsu": 79.076,
        "saikou": 2.7,
        "heikin": 2.31,
        "boshuAvg30d": 124.5,
        "heikinAvg30d": 4.775
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 110,
        "ouatsu": 57.383,
        "saikou": 7.58,
        "heikin": 6.32,
        "boshuAvg30d": 124.5,
        "heikinAvg30d": 4.699
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 110,
        "ouatsu": 59.372,
        "saikou": 7.93,
        "heikin": 6.35,
        "boshuAvg30d": 124.5,
        "heikinAvg30d": 4.242
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 110,
        "ouatsu": 59.372,
        "saikou": 2.7,
        "heikin": 2.7,
        "boshuAvg30d": 124.5,
        "heikinAvg30d": 4.115
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 110,
        "ouatsu": 61.362,
        "saikou": 2.7,
        "heikin": 2.7,
        "boshuAvg30d": 124.5,
        "heikinAvg30d": 3.901
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 109,
        "ouatsu": 61.362,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 123.5,
        "heikinAvg30d": 4.184
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 109,
        "ouatsu": 61.362,
        "saikou": 6.95,
        "heikin": 5.67,
        "boshuAvg30d": 123.5,
        "heikinAvg30d": 4.17
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 107,
        "ouatsu": 61.362,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 121.5,
        "heikinAvg30d": 3.856
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 107,
        "ouatsu": 95.057,
        "saikou": 2.29,
        "heikin": 2.22,
        "boshuAvg30d": 121.5,
        "heikinAvg30d": 3.476
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 107,
        "ouatsu": 107.594,
        "saikou": 2.74,
        "heikin": 2.39,
        "boshuAvg30d": 121.5,
        "heikinAvg30d": 3.202
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 107,
        "ouatsu": 162.152,
        "saikou": 2.29,
        "heikin": 1.78,
        "boshuAvg30d": 121.5,
        "heikinAvg30d": 2.842
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 106,
        "ouatsu": 225.787,
        "saikou": 2.68,
        "heikin": 1.99,
        "boshuAvg30d": 120.5,
        "heikinAvg30d": 2.893
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 106,
        "ouatsu": 225.787,
        "saikou": 2.29,
        "heikin": 1.38,
        "boshuAvg30d": 120.5,
        "heikinAvg30d": 2.391
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.99,
        "heikin": 0.94,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.812
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.99,
        "heikin": 0.94,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.779
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.99,
        "heikin": 0.93,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.754
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.99,
        "heikin": 0.94,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.709
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 6.8,
        "heikin": 1.05,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.726
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 176.8,
        "saikou": 6.8,
        "heikin": 0.99,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.767
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 173.8,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.814
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 173.8,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.79
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 173.8,
        "saikou": 5.65,
        "heikin": 0.74,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.826
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 173.8,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.85
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 2.49,
        "heikin": 0.75,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.868
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 2.49,
        "heikin": 0.75,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.832
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 188.343,
        "saikou": 6.6,
        "heikin": 0.86,
        "boshuAvg30d": 42.1,
        "heikinAvg30d": 0.907
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 188.343,
        "saikou": 7.55,
        "heikin": 0.88,
        "boshuAvg30d": 43.1,
        "heikinAvg30d": 0.845
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 188.343,
        "saikou": 7.6,
        "heikin": 0.98,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 0.857
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 222.343,
        "saikou": 2.49,
        "heikin": 0.88,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 0.875
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 222.343,
        "saikou": 2.49,
        "heikin": 0.69,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 0.885
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 222.343,
        "saikou": 1.6,
        "heikin": 0.76,
        "boshuAvg30d": 45.1,
        "heikinAvg30d": 0.769
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.911
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.87
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.88
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.892
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 176.8,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.933
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 176.8,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.921
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 176.8,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.924
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 176.8,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.926
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 176.8,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.896
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.879
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.872
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 46.1,
        "heikinAvg30d": 0.883
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 1.04,
        "boshuAvg30d": 43.1,
        "heikinAvg30d": 0.967
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 1.31,
        "boshuAvg30d": 43.1,
        "heikinAvg30d": 0.921
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 43.1,
        "heikinAvg30d": 0.971
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 43.1,
        "heikinAvg30d": 0.937
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 142.8,
        "saikou": 6.6,
        "heikin": 0.84,
        "boshuAvg30d": 42.1,
        "heikinAvg30d": 1.012
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 142.8,
        "saikou": 4.95,
        "heikin": 0.8,
        "boshuAvg30d": 42.1,
        "heikinAvg30d": 0.978
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 142.8,
        "saikou": 7.95,
        "heikin": 0.88,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 1.037
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 142.8,
        "saikou": 4.95,
        "heikin": 0.8,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.995
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 1.032
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 1.085
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 1.054
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 1.031
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.949
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.924
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.94,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.907
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.94,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.88
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.932
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.863
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 114.685,
        "saikou": 2.4,
        "heikin": 1.64,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.385
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 179.437,
        "saikou": 4.38,
        "heikin": 2.68,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.17
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 179.435,
        "saikou": 4.21,
        "heikin": 2.55,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 3.963
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 182.564,
        "saikou": 4.47,
        "heikin": 2.73,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 3.828
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 182.564,
        "saikou": 4.43,
        "heikin": 2.66,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 3.516
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 182.564,
        "saikou": 4.78,
        "heikin": 2.83,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 3.843
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 266.396,
        "saikou": 4.79,
        "heikin": 3.42,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.013
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 278.451,
        "saikou": 4.66,
        "heikin": 3.39,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.211
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 283.579,
        "saikou": 4.6,
        "heikin": 3.7,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.27
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 282.454,
        "saikou": 4.66,
        "heikin": 3.44,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.572
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 279.534,
        "saikou": 4.85,
        "heikin": 3.54,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.742
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 279.03,
        "saikou": 4.82,
        "heikin": 3.56,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.834
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 282.154,
        "saikou": 5.04,
        "heikin": 3.66,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 4.958
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 283.154,
        "saikou": 5.11,
        "heikin": 3.75,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 5.262
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 270.326,
        "saikou": 5.11,
        "heikin": 3.73,
        "boshuAvg30d": 173.1,
        "heikinAvg30d": 4.327
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 285.154,
        "saikou": 4.54,
        "heikin": 3.11,
        "boshuAvg30d": 174.1,
        "heikinAvg30d": 3.885
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 200.504,
        "saikou": 7.1,
        "heikin": 3.37,
        "boshuAvg30d": 174.1,
        "heikinAvg30d": 3.946
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 220.504,
        "saikou": 6.32,
        "heikin": 3.84,
        "boshuAvg30d": 174.1,
        "heikinAvg30d": 3.59
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 329.989,
        "saikou": 3.31,
        "heikin": 1.67,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 3.541
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 296.054,
        "saikou": 3.99,
        "heikin": 1.67,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 3.416
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 257.615,
        "saikou": 5.94,
        "heikin": 2.22,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 3.557
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 221.138,
        "saikou": 4.29,
        "heikin": 1.22,
        "boshuAvg30d": 180.1,
        "heikinAvg30d": 3.389
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 230.946,
        "saikou": 2.99,
        "heikin": 0.9,
        "boshuAvg30d": 180.1,
        "heikinAvg30d": 2.906
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 212.661,
        "saikou": 2.74,
        "heikin": 0.72,
        "boshuAvg30d": 180.1,
        "heikinAvg30d": 2.723
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 211.621,
        "saikou": 1.59,
        "heikin": 0.49,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 2.589
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 217.433,
        "saikou": 1.87,
        "heikin": 0.53,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 2.715
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 225.306,
        "saikou": 1.74,
        "heikin": 0.57,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 3.11
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 240.863,
        "saikou": 2.77,
        "heikin": 0.68,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 3.752
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 290.139,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 4.111
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 290.139,
        "saikou": 4.26,
        "heikin": 4.03,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 4.667
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 328.775,
        "saikou": 7.41,
        "heikin": 6.63,
        "boshuAvg30d": 173.1,
        "heikinAvg30d": 4.658
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 328.775,
        "saikou": 8.08,
        "heikin": 6.96,
        "boshuAvg30d": 173.1,
        "heikinAvg30d": 5.205
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 284.84,
        "saikou": 4.88,
        "heikin": 4.03,
        "boshuAvg30d": 173.1,
        "heikinAvg30d": 5.994
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 258.072,
        "saikou": 7.81,
        "heikin": 6.34,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 6.362
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 254.042,
        "saikou": 10,
        "heikin": 8.5,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 6.507
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 257.9,
        "saikou": 10,
        "heikin": 8.65,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 6.602
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 252.921,
        "saikou": 10,
        "heikin": 8.38,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.584
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 321.257,
        "saikou": 10,
        "heikin": 8.03,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.22
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 287.257,
        "saikou": 8.64,
        "heikin": 7.5,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.215
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 323.332,
        "saikou": 7.81,
        "heikin": 7.13,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.126
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 330.949,
        "saikou": 7.41,
        "heikin": 6.75,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 5.749
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 338.255,
        "saikou": 8.3,
        "heikin": 6.39,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 5.939
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 329.64,
        "saikou": 8.68,
        "heikin": 6.99,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 5.772
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 330.691,
        "saikou": 10,
        "heikin": 8.84,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 5.411
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 274.941,
        "saikou": 7.13,
        "heikin": 6.62,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 5.14
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 232.591,
        "saikou": 6.32,
        "heikin": 5.21,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 5.068
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 224.92,
        "saikou": 6.21,
        "heikin": 4.65,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 4.867
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 276.941,
        "saikou": 8.96,
        "heikin": 5.11,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 4.142
      }
    ]
  }
};
