// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近29日間（本データでは2026/09/20〜2026/10/19）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-20",
  "fetchedAt": "2026-10-20",
  "avgWindowLabel": "過去29日平均（2026/09/20〜2026/10/19）",
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
      "ouatsu": 1434.242,
      "saikou": 10,
      "heikin": 4.29,
      "boshuAvg30d": 1127.1,
      "heikinAvg30d": 2.93
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1024,
      "ouatsu": 1636.365,
      "saikou": 9.91,
      "heikin": 3.38,
      "boshuAvg30d": 1127.1,
      "heikinAvg30d": 2.867
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1024,
      "ouatsu": 1676.357,
      "saikou": 9.8,
      "heikin": 3.04,
      "boshuAvg30d": 1127.1,
      "heikinAvg30d": 2.813
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1024,
      "ouatsu": 1539.173,
      "saikou": 10,
      "heikin": 4.11,
      "boshuAvg30d": 1127.1,
      "heikinAvg30d": 2.699
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1021,
      "ouatsu": 1550.872,
      "saikou": 10,
      "heikin": 3.82,
      "boshuAvg30d": 1123.3,
      "heikinAvg30d": 2.733
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1020,
      "ouatsu": 1630.167,
      "saikou": 9.8,
      "heikin": 3.19,
      "boshuAvg30d": 1122.3,
      "heikinAvg30d": 2.823
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1017,
      "ouatsu": 1776.601,
      "saikou": 10,
      "heikin": 4.04,
      "boshuAvg30d": 1135.3,
      "heikinAvg30d": 2.981
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1019,
      "ouatsu": 1647.669,
      "saikou": 10,
      "heikin": 3.78,
      "boshuAvg30d": 1136.9,
      "heikinAvg30d": 3.19
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1021,
      "ouatsu": 1753.536,
      "saikou": 9.91,
      "heikin": 3.41,
      "boshuAvg30d": 1139.3,
      "heikinAvg30d": 3.261
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1022,
      "ouatsu": 1617.462,
      "saikou": 10,
      "heikin": 3.99,
      "boshuAvg30d": 1139.9,
      "heikinAvg30d": 3.435
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1022,
      "ouatsu": 1614.663,
      "saikou": 10,
      "heikin": 4.62,
      "boshuAvg30d": 1139.9,
      "heikinAvg30d": 3.476
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1022,
      "ouatsu": 1563.629,
      "saikou": 10,
      "heikin": 4.53,
      "boshuAvg30d": 1139.9,
      "heikinAvg30d": 3.497
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1082,
      "ouatsu": 1580.588,
      "saikou": 10,
      "heikin": 4.33,
      "boshuAvg30d": 1202.2,
      "heikinAvg30d": 3.559
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1105,
      "ouatsu": 1629.628,
      "saikou": 10,
      "heikin": 4.54,
      "boshuAvg30d": 1224.4,
      "heikinAvg30d": 3.362
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1126,
      "ouatsu": 1428.966,
      "saikou": 10,
      "heikin": 3.75,
      "boshuAvg30d": 1246.2,
      "heikinAvg30d": 2.964
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1143,
      "ouatsu": 1386.533,
      "saikou": 10,
      "heikin": 3.02,
      "boshuAvg30d": 1263.6,
      "heikinAvg30d": 2.786
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1143,
      "ouatsu": 1585.314,
      "saikou": 10,
      "heikin": 3.6,
      "boshuAvg30d": 1263.9,
      "heikinAvg30d": 2.968
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1143,
      "ouatsu": 1423.042,
      "saikou": 10,
      "heikin": 3.08,
      "boshuAvg30d": 1263.9,
      "heikinAvg30d": 2.972
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1075,
      "ouatsu": 1296.799,
      "saikou": 10,
      "heikin": 4.07,
      "boshuAvg30d": 1230.6,
      "heikinAvg30d": 3.196
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1078,
      "ouatsu": 1334.942,
      "saikou": 10,
      "heikin": 4.24,
      "boshuAvg30d": 1234.0,
      "heikinAvg30d": 3.169
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1093,
      "ouatsu": 1458.147,
      "saikou": 10,
      "heikin": 4.33,
      "boshuAvg30d": 1237.1,
      "heikinAvg30d": 3.258
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1093,
      "ouatsu": 1470.843,
      "saikou": 10,
      "heikin": 4.4,
      "boshuAvg30d": 1237.1,
      "heikinAvg30d": 3.184
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1090,
      "ouatsu": 1457.806,
      "saikou": 10,
      "heikin": 4.25,
      "boshuAvg30d": 1234.1,
      "heikinAvg30d": 3.179
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1089,
      "ouatsu": 1463.357,
      "saikou": 10,
      "heikin": 4.64,
      "boshuAvg30d": 1233.1,
      "heikinAvg30d": 3.113
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1059,
      "ouatsu": 1684.386,
      "saikou": 10,
      "heikin": 4.27,
      "boshuAvg30d": 1218.1,
      "heikinAvg30d": 3.006
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1059,
      "ouatsu": 1701.55,
      "saikou": 10,
      "heikin": 4.34,
      "boshuAvg30d": 1218.1,
      "heikinAvg30d": 3.02
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1059,
      "ouatsu": 1469.79,
      "saikou": 10,
      "heikin": 5.03,
      "boshuAvg30d": 1218.1,
      "heikinAvg30d": 3.108
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1057,
      "ouatsu": 1373.665,
      "saikou": 10,
      "heikin": 4.83,
      "boshuAvg30d": 1214.9,
      "heikinAvg30d": 3.19
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1054,
      "ouatsu": 1400.116,
      "saikou": 10,
      "heikin": 5.46,
      "boshuAvg30d": 1211.1,
      "heikinAvg30d": 3.163
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1048,
      "ouatsu": 1181.646,
      "saikou": 10,
      "heikin": 4.14,
      "boshuAvg30d": 1204.8,
      "heikinAvg30d": 3.239
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1114,
      "ouatsu": 1319.599,
      "saikou": 10,
      "heikin": 4.16,
      "boshuAvg30d": 1240.7,
      "heikinAvg30d": 3.149
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1114,
      "ouatsu": 1251.797,
      "saikou": 10,
      "heikin": 4.31,
      "boshuAvg30d": 1240.7,
      "heikinAvg30d": 3.391
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1115,
      "ouatsu": 1335.768,
      "saikou": 10,
      "heikin": 5.02,
      "boshuAvg30d": 1241.3,
      "heikinAvg30d": 3.806
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1114,
      "ouatsu": 1329.205,
      "saikou": 10,
      "heikin": 4.63,
      "boshuAvg30d": 1239.8,
      "heikinAvg30d": 4.132
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1112,
      "ouatsu": 1346.416,
      "saikou": 10,
      "heikin": 4.98,
      "boshuAvg30d": 1236.8,
      "heikinAvg30d": 4.167
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1107,
      "ouatsu": 1270.018,
      "saikou": 10,
      "heikin": 4.77,
      "boshuAvg30d": 1231.8,
      "heikinAvg30d": 4.258
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1102,
      "ouatsu": 1201.559,
      "saikou": 10,
      "heikin": 4.11,
      "boshuAvg30d": 1225.7,
      "heikinAvg30d": 4.183
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1102,
      "ouatsu": 1239.984,
      "saikou": 10,
      "heikin": 4.23,
      "boshuAvg30d": 1225.7,
      "heikinAvg30d": 4.079
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1102,
      "ouatsu": 1428.095,
      "saikou": 10,
      "heikin": 4,
      "boshuAvg30d": 1225.7,
      "heikinAvg30d": 3.992
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1101,
      "ouatsu": 1530.069,
      "saikou": 10,
      "heikin": 4,
      "boshuAvg30d": 1224.7,
      "heikinAvg30d": 3.755
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1093,
      "ouatsu": 1478.945,
      "saikou": 10,
      "heikin": 3.77,
      "boshuAvg30d": 1217.8,
      "heikinAvg30d": 3.709
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1093,
      "ouatsu": 1532.037,
      "saikou": 10,
      "heikin": 3.82,
      "boshuAvg30d": 1216.3,
      "heikinAvg30d": 3.647
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1003,
      "ouatsu": 1594.379,
      "saikou": 10,
      "heikin": 3.62,
      "boshuAvg30d": 1137.0,
      "heikinAvg30d": 3.496
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1006,
      "ouatsu": 1607.053,
      "saikou": 10,
      "heikin": 4.12,
      "boshuAvg30d": 1140.0,
      "heikinAvg30d": 3.53
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1007,
      "ouatsu": 1423.616,
      "saikou": 9.97,
      "heikin": 3.52,
      "boshuAvg30d": 1141.4,
      "heikinAvg30d": 3.463
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1002,
      "ouatsu": 1526.613,
      "saikou": 10,
      "heikin": 4.26,
      "boshuAvg30d": 1135.6,
      "heikinAvg30d": 3.293
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 993,
      "ouatsu": 1413.44,
      "saikou": 10,
      "heikin": 4.12,
      "boshuAvg30d": 1127.4,
      "heikinAvg30d": 3.31
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 986,
      "ouatsu": 1462.92,
      "saikou": 10,
      "heikin": 4.33,
      "boshuAvg30d": 1120.0,
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
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 8.09,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 3.161
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 78.458,
        "saikou": 9.91,
        "heikin": 9.22,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 2.957
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 8.09,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 2.969
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 78.458,
        "saikou": 9.91,
        "heikin": 9.08,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 2.648
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 8.09,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 3.213
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 8.03,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 3.132
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 95.708,
        "saikou": 9.91,
        "heikin": 9.37,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 3.41
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 8.09,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 3.438
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 95.708,
        "saikou": 9.91,
        "heikin": 9.4,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 3.511
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 45.418,
        "saikou": 9.77,
        "heikin": 8.01,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 3.302
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 93.74,
        "saikou": 9.91,
        "heikin": 9.4,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 3.44
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 93.74,
        "saikou": 9.91,
        "heikin": 9.41,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 3.642
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 8.09,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 3.315
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 99.948,
        "saikou": 9.91,
        "heikin": 9.39,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 3.24
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 55.418,
        "saikou": 9.77,
        "heikin": 8.15,
        "boshuAvg30d": 55.4,
        "heikinAvg30d": 2.708
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 57.408,
        "saikou": 9.8,
        "heikin": 8.16,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 2.733
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 105.708,
        "saikou": 9.91,
        "heikin": 9.15,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 2.684
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 57.408,
        "saikou": 9.8,
        "heikin": 7.96,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 2.317
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 60.408,
        "saikou": 9.8,
        "heikin": 7.82,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 2.514
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 8.07,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 2.114
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 53.918,
        "saikou": 9.77,
        "heikin": 6.58,
        "boshuAvg30d": 57.4,
        "heikinAvg30d": 2.764
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 55.908,
        "saikou": 9.8,
        "heikin": 6.7,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 1.906
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 43.918,
        "saikou": 9.77,
        "heikin": 8,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 2.682
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 43.918,
        "saikou": 9.77,
        "heikin": 7.93,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 2.472
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 53.918,
        "saikou": 9.77,
        "heikin": 6.58,
        "boshuAvg30d": 56.4,
        "heikinAvg30d": 2.537
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 45.908,
        "saikou": 9.8,
        "heikin": 8.07,
        "boshuAvg30d": 56.4,
        "heikinAvg30d": 2.718
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 95.708,
        "saikou": 9.91,
        "heikin": 9.3,
        "boshuAvg30d": 56.4,
        "heikinAvg30d": 2.172
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 55.418,
        "saikou": 9.77,
        "heikin": 7.76,
        "boshuAvg30d": 56.4,
        "heikinAvg30d": 2.677
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 91.75,
        "saikou": 9.91,
        "heikin": 9.34,
        "boshuAvg30d": 55.4,
        "heikinAvg30d": 2.88
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 43.45,
        "saikou": 9.77,
        "heikin": 8.01,
        "boshuAvg30d": 55.4,
        "heikinAvg30d": 3.222
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 45.44,
        "saikou": 9.8,
        "heikin": 8.09,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 2.393
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 95.708,
        "saikou": 9.91,
        "heikin": 9.37,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 3.502
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 91.79,
        "saikou": 9.91,
        "heikin": 9.32,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 4.548
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 18.49,
        "saikou": 9.8,
        "heikin": 5.75,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 4.981
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 66.768,
        "saikou": 9.55,
        "heikin": 8.45,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 4.762
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 17.178,
        "saikou": 9.8,
        "heikin": 9.09,
        "boshuAvg30d": 53.4,
        "heikinAvg30d": 4.642
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 32.408,
        "saikou": 9.8,
        "heikin": 9.5,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 4.54
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 73.908,
        "saikou": 9.91,
        "heikin": 9.4,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 4.442
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 8.08,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 4.093
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 88.418,
        "saikou": 9.91,
        "heikin": 9.37,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 3.962
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 8.03,
        "boshuAvg30d": 52.4,
        "heikinAvg30d": 3.915
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 90.408,
        "saikou": 9.91,
        "heikin": 9.37,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 3.59
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 8.03,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 3.841
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 90.458,
        "saikou": 9.91,
        "heikin": 9.33,
        "boshuAvg30d": 54.1,
        "heikinAvg30d": 4.144
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 45.418,
        "saikou": 9.77,
        "heikin": 8,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 3.985
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 90.458,
        "saikou": 9.91,
        "heikin": 9.27,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 3.702
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 47.408,
        "saikou": 9.8,
        "heikin": 8.07,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 4.009
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 100.458,
        "saikou": 9.91,
        "heikin": 9.13,
        "boshuAvg30d": 55.1,
        "heikinAvg30d": 3.474
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 78.598,
        "saikou": 10,
        "heikin": 6.23,
        "boshuAvg30d": 124.8,
        "heikinAvg30d": 6.171
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 76.698,
        "saikou": 7.93,
        "heikin": 6.04,
        "boshuAvg30d": 124.8,
        "heikinAvg30d": 6.464
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 98.476,
        "saikou": 8.3,
        "heikin": 7.26,
        "boshuAvg30d": 124.8,
        "heikinAvg30d": 6.465
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 101.436,
        "saikou": 7.67,
        "heikin": 5.47,
        "boshuAvg30d": 124.8,
        "heikinAvg30d": 6.53
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 97.84,
        "saikou": 7.67,
        "heikin": 6.15,
        "boshuAvg30d": 124.8,
        "heikinAvg30d": 6.559
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 97.84,
        "saikou": 7.83,
        "heikin": 5.62,
        "boshuAvg30d": 124.8,
        "heikinAvg30d": 6.629
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 114.771,
        "saikou": 7.83,
        "heikin": 6.76,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 6.633
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 116.286,
        "saikou": 7.83,
        "heikin": 6.92,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 6.54
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 108.284,
        "saikou": 7.67,
        "heikin": 5.4,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 6.497
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 108.284,
        "saikou": 7.47,
        "heikin": 5.12,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 6.47
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 108.284,
        "saikou": 9.97,
        "heikin": 5.85,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 6.652
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 108.284,
        "saikou": 9.97,
        "heikin": 5.86,
        "boshuAvg30d": 138.6,
        "heikinAvg30d": 6.746
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 108.284,
        "saikou": 9.97,
        "heikin": 6.25,
        "boshuAvg30d": 146.4,
        "heikinAvg30d": 6.983
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 106.784,
        "saikou": 9.97,
        "heikin": 6.31,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 7.146
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 108.284,
        "saikou": 10,
        "heikin": 6.41,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 7.397
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 94.784,
        "saikou": 9.97,
        "heikin": 6.17,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 7.613
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 96.284,
        "saikou": 9,
        "heikin": 6.44,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 7.991
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 70.784,
        "saikou": 9,
        "heikin": 6.58,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 7.998
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 74.246,
        "saikou": 9.4,
        "heikin": 5.79,
        "boshuAvg30d": 114.6,
        "heikinAvg30d": 7.833
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 74.28,
        "saikou": 8.2,
        "heikin": 5.82,
        "boshuAvg30d": 115.3,
        "heikinAvg30d": 7.999
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 81.855,
        "saikou": 4.98,
        "heikin": 4.88,
        "boshuAvg30d": 114.8,
        "heikinAvg30d": 8.039
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 81.855,
        "saikou": 4.98,
        "heikin": 4.69,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 8.148
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 95.38,
        "saikou": 5.47,
        "heikin": 5.37,
        "boshuAvg30d": 115.8,
        "heikinAvg30d": 8.178
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 84.71,
        "saikou": 9,
        "heikin": 6.64,
        "boshuAvg30d": 115.8,
        "heikinAvg30d": 8.069
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 82.714,
        "saikou": 3.21,
        "heikin": 3.21,
        "boshuAvg30d": 113.7,
        "heikinAvg30d": 8.091
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 95.284,
        "saikou": 4.99,
        "heikin": 3.75,
        "boshuAvg30d": 113.7,
        "heikinAvg30d": 7.973
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 71.282,
        "saikou": 5.25,
        "heikin": 5.03,
        "boshuAvg30d": 113.7,
        "heikinAvg30d": 7.642
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 58.676,
        "saikou": 9.97,
        "heikin": 7.12,
        "boshuAvg30d": 111.9,
        "heikinAvg30d": 7.246
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 72.246,
        "saikou": 9.97,
        "heikin": 6.94,
        "boshuAvg30d": 111.1,
        "heikinAvg30d": 7.417
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 72.246,
        "saikou": 9.97,
        "heikin": 5.52,
        "boshuAvg30d": 108.0,
        "heikinAvg30d": 6.56
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 72.246,
        "saikou": 10,
        "heikin": 6.04,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 6.604
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 72.246,
        "saikou": 10,
        "heikin": 4.81,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 5.913
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 72.246,
        "saikou": 10,
        "heikin": 4.8,
        "boshuAvg30d": 156.1,
        "heikinAvg30d": 5.865
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 70.746,
        "saikou": 9.97,
        "heikin": 4.41,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 5.894
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 74.244,
        "saikou": 10,
        "heikin": 4.39,
        "boshuAvg30d": 154.4,
        "heikinAvg30d": 5.774
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 72.744,
        "saikou": 9.97,
        "heikin": 4.26,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 5.429
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 72.248,
        "saikou": 10,
        "heikin": 4.13,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 5.517
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 70.784,
        "saikou": 9.97,
        "heikin": 3.77,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 5.177
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 73.614,
        "saikou": 10,
        "heikin": 3.79,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 5.167
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 73.614,
        "saikou": 10,
        "heikin": 4.52,
        "boshuAvg30d": 151.6,
        "heikinAvg30d": 5.313
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 81.759,
        "saikou": 6.5,
        "heikin": 3.77,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 5.329
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 91.859,
        "saikou": 6.48,
        "heikin": 4.2,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 5.482
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 106.364,
        "saikou": 7.3,
        "heikin": 4.81,
        "boshuAvg30d": 73.5,
        "heikinAvg30d": 5.644
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 106.364,
        "saikou": 7.08,
        "heikin": 4.73,
        "boshuAvg30d": 73.5,
        "heikinAvg30d": 5.43
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 107.714,
        "saikou": 9.97,
        "heikin": 4.94,
        "boshuAvg30d": 73.5,
        "heikinAvg30d": 5.735
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 95.714,
        "saikou": 7.3,
        "heikin": 4.46,
        "boshuAvg30d": 72.5,
        "heikinAvg30d": 5.667
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 95.714,
        "saikou": 7.91,
        "heikin": 4.78,
        "boshuAvg30d": 70.9,
        "heikinAvg30d": 5.813
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 94.214,
        "saikou": 9.97,
        "heikin": 4.85,
        "boshuAvg30d": 70.5,
        "heikinAvg30d": 6.191
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 328.306,
        "saikou": 10,
        "heikin": 5.32,
        "boshuAvg30d": 321.9,
        "heikinAvg30d": 3.891
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 458.785,
        "saikou": 3.5,
        "heikin": 2.37,
        "boshuAvg30d": 321.9,
        "heikinAvg30d": 4.039
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 530.522,
        "saikou": 3.39,
        "heikin": 2.34,
        "boshuAvg30d": 321.9,
        "heikinAvg30d": 3.713
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 347.661,
        "saikou": 10,
        "heikin": 5.22,
        "boshuAvg30d": 321.9,
        "heikinAvg30d": 3.595
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 405.001,
        "saikou": 10,
        "heikin": 4.74,
        "boshuAvg30d": 320.5,
        "heikinAvg30d": 3.589
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 437.37,
        "saikou": 5.76,
        "heikin": 2.81,
        "boshuAvg30d": 319.9,
        "heikinAvg30d": 3.621
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 444.21,
        "saikou": 10,
        "heikin": 4.9,
        "boshuAvg30d": 318.2,
        "heikinAvg30d": 3.756
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 437.024,
        "saikou": 10,
        "heikin": 4.51,
        "boshuAvg30d": 319.9,
        "heikinAvg30d": 3.86
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 454.246,
        "saikou": 5.84,
        "heikin": 2.57,
        "boshuAvg30d": 320.2,
        "heikinAvg30d": 3.965
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 398.765,
        "saikou": 10,
        "heikin": 4.97,
        "boshuAvg30d": 320.9,
        "heikinAvg30d": 4.137
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 330.506,
        "saikou": 10,
        "heikin": 6.06,
        "boshuAvg30d": 320.9,
        "heikinAvg30d": 4.047
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 328.156,
        "saikou": 10,
        "heikin": 6.07,
        "boshuAvg30d": 320.9,
        "heikinAvg30d": 4.269
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 340.255,
        "saikou": 10,
        "heikin": 5.96,
        "boshuAvg30d": 340.6,
        "heikinAvg30d": 4.26
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 340.255,
        "saikou": 10,
        "heikin": 6.01,
        "boshuAvg30d": 348.6,
        "heikinAvg30d": 4.498
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 216.508,
        "saikou": 5.81,
        "heikin": 4.57,
        "boshuAvg30d": 353.6,
        "heikinAvg30d": 4.064
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 308.076,
        "saikou": 5.76,
        "heikin": 3.63,
        "boshuAvg30d": 358.6,
        "heikinAvg30d": 3.775
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 476.175,
        "saikou": 10,
        "heikin": 5.02,
        "boshuAvg30d": 358.6,
        "heikinAvg30d": 3.976
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 390.512,
        "saikou": 5.2,
        "heikin": 3.83,
        "boshuAvg30d": 358.6,
        "heikinAvg30d": 3.933
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 335.396,
        "saikou": 5.18,
        "heikin": 4.06,
        "boshuAvg30d": 353.3,
        "heikinAvg30d": 4.295
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 335.396,
        "saikou": 5.18,
        "heikin": 4.07,
        "boshuAvg30d": 353.3,
        "heikinAvg30d": 4.36
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 302,
        "ouatsu": 464.64,
        "saikou": 6.77,
        "heikin": 4.76,
        "boshuAvg30d": 353.3,
        "heikinAvg30d": 4.324
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 301,
        "ouatsu": 473.877,
        "saikou": 6.81,
        "heikin": 4.74,
        "boshuAvg30d": 352.3,
        "heikinAvg30d": 4.151
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 299,
        "ouatsu": 452.513,
        "saikou": 7.49,
        "heikin": 5.03,
        "boshuAvg30d": 350.0,
        "heikinAvg30d": 4.097
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 299,
        "ouatsu": 334.621,
        "saikou": 5.19,
        "heikin": 4.39,
        "boshuAvg30d": 350.0,
        "heikinAvg30d": 4.032
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 592.744,
        "saikou": 4.69,
        "heikin": 3.96,
        "boshuAvg30d": 347.7,
        "heikinAvg30d": 3.936
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 595.576,
        "saikou": 5.01,
        "heikin": 4.01,
        "boshuAvg30d": 347.7,
        "heikinAvg30d": 3.891
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 376.448,
        "saikou": 7.12,
        "heikin": 4.75,
        "boshuAvg30d": 347.7,
        "heikinAvg30d": 3.964
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 336.45,
        "saikou": 6.38,
        "heikin": 5.13,
        "boshuAvg30d": 347.7,
        "heikinAvg30d": 4.09
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 337.45,
        "saikou": 10,
        "heikin": 6.49,
        "boshuAvg30d": 346.7,
        "heikinAvg30d": 3.941
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 337.45,
        "saikou": 10,
        "heikin": 6.52,
        "boshuAvg30d": 346.1,
        "heikinAvg30d": 3.683
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 328.632,
        "saikou": 6.8,
        "heikin": 4.84,
        "boshuAvg30d": 344.4,
        "heikinAvg30d": 3.616
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 171.417,
        "saikou": 3.5,
        "heikin": 2.3,
        "boshuAvg30d": 344.4,
        "heikinAvg30d": 3.624
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 167.54,
        "saikou": 3.03,
        "heikin": 2.29,
        "boshuAvg30d": 344.4,
        "heikinAvg30d": 3.878
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 167.54,
        "saikou": 3.08,
        "heikin": 2.3,
        "boshuAvg30d": 344.4,
        "heikinAvg30d": 4.126
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 167.54,
        "saikou": 3.08,
        "heikin": 2.3,
        "boshuAvg30d": 344.1,
        "heikinAvg30d": 3.952
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 163.79,
        "saikou": 3,
        "heikin": 2.29,
        "boshuAvg30d": 343.7,
        "heikinAvg30d": 3.962
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 175.285,
        "saikou": 3.03,
        "heikin": 2.3,
        "boshuAvg30d": 346.3,
        "heikinAvg30d": 4.084
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 175.285,
        "saikou": 2.98,
        "heikin": 2.15,
        "boshuAvg30d": 346.3,
        "heikinAvg30d": 3.899
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 349.778,
        "saikou": 6.74,
        "heikin": 4.68,
        "boshuAvg30d": 346.3,
        "heikinAvg30d": 3.99
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 387.177,
        "saikou": 6.6,
        "heikin": 4.74,
        "boshuAvg30d": 346.3,
        "heikinAvg30d": 3.748
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 383.45,
        "saikou": 6.6,
        "heikin": 4.75,
        "boshuAvg30d": 344.3,
        "heikinAvg30d": 3.795
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 383.45,
        "saikou": 7.54,
        "heikin": 5.1,
        "boshuAvg30d": 344.3,
        "heikinAvg30d": 3.889
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 379.307,
        "saikou": 10,
        "heikin": 5.3,
        "boshuAvg30d": 344.0,
        "heikinAvg30d": 3.594
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 369.74,
        "saikou": 9.57,
        "heikin": 4.85,
        "boshuAvg30d": 344.0,
        "heikinAvg30d": 3.64
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 279.384,
        "saikou": 8,
        "heikin": 3,
        "boshuAvg30d": 344.3,
        "heikinAvg30d": 3.303
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 316.764,
        "saikou": 10,
        "heikin": 5.35,
        "boshuAvg30d": 342.3,
        "heikinAvg30d": 3.515
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 286.837,
        "saikou": 10,
        "heikin": 6.1,
        "boshuAvg30d": 340.3,
        "heikinAvg30d": 3.774
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 250.615,
        "saikou": 10,
        "heikin": 6.57,
        "boshuAvg30d": 339.3,
        "heikinAvg30d": 3.934
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 59,
        "ouatsu": 363.067,
        "saikou": 2.84,
        "heikin": 1.4,
        "boshuAvg30d": 93.6,
        "heikinAvg30d": 1.926
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 59,
        "ouatsu": 406.496,
        "saikou": 3,
        "heikin": 1.61,
        "boshuAvg30d": 93.6,
        "heikinAvg30d": 1.728
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 59,
        "ouatsu": 404.512,
        "saikou": 1.7,
        "heikin": 1.5,
        "boshuAvg30d": 93.6,
        "heikinAvg30d": 1.74
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 418.318,
        "saikou": 3,
        "heikin": 1.49,
        "boshuAvg30d": 93.6,
        "heikinAvg30d": 1.783
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 58,
        "ouatsu": 404.403,
        "saikou": 1.73,
        "heikin": 1.44,
        "boshuAvg30d": 92.6,
        "heikinAvg30d": 1.68
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 402.419,
        "saikou": 3,
        "heikin": 1.43,
        "boshuAvg30d": 92.6,
        "heikinAvg30d": 1.681
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 445.181,
        "saikou": 1.51,
        "heikin": 1.4,
        "boshuAvg30d": 92.0,
        "heikinAvg30d": 1.57
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 419.893,
        "saikou": 1.62,
        "heikin": 1.47,
        "boshuAvg30d": 92.0,
        "heikinAvg30d": 1.722
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 58,
        "ouatsu": 417.579,
        "saikou": 1.71,
        "heikin": 1.5,
        "boshuAvg30d": 92.6,
        "heikinAvg30d": 1.746
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 58,
        "ouatsu": 382.566,
        "saikou": 1.57,
        "heikin": 1.26,
        "boshuAvg30d": 92.6,
        "heikinAvg30d": 1.7
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 58,
        "ouatsu": 422.704,
        "saikou": 1.89,
        "heikin": 1.48,
        "boshuAvg30d": 92.6,
        "heikinAvg30d": 1.782
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 58,
        "ouatsu": 377.32,
        "saikou": 1.51,
        "heikin": 0.92,
        "boshuAvg30d": 92.6,
        "heikinAvg30d": 1.756
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 406.536,
        "saikou": 1.53,
        "heikin": 1.13,
        "boshuAvg30d": 102.0,
        "heikinAvg30d": 2.001
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 71,
        "ouatsu": 397.536,
        "saikou": 1.55,
        "heikin": 0.87,
        "boshuAvg30d": 105.6,
        "heikinAvg30d": 2.064
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 74,
        "ouatsu": 417.637,
        "saikou": 3.72,
        "heikin": 1.25,
        "boshuAvg30d": 108.6,
        "heikinAvg30d": 2.076
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 76,
        "ouatsu": 367.146,
        "saikou": 3,
        "heikin": 1.01,
        "boshuAvg30d": 110.6,
        "heikinAvg30d": 2.076
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 76,
        "ouatsu": 363.026,
        "saikou": 4.28,
        "heikin": 1.3,
        "boshuAvg30d": 110.6,
        "heikinAvg30d": 2.226
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 76,
        "ouatsu": 364.231,
        "saikou": 3,
        "heikin": 1.58,
        "boshuAvg30d": 110.6,
        "heikinAvg30d": 2.318
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 81,
        "ouatsu": 263.227,
        "saikou": 5,
        "heikin": 2.43,
        "boshuAvg30d": 115.2,
        "heikinAvg30d": 2.706
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 81,
        "ouatsu": 292.341,
        "saikou": 5,
        "heikin": 2.44,
        "boshuAvg30d": 115.2,
        "heikinAvg30d": 2.685
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 81,
        "ouatsu": 276.851,
        "saikou": 6,
        "heikin": 2.47,
        "boshuAvg30d": 115.6,
        "heikinAvg30d": 2.949
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 81,
        "ouatsu": 278.84,
        "saikou": 6,
        "heikin": 2.45,
        "boshuAvg30d": 115.2,
        "heikinAvg30d": 3.028
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 80,
        "ouatsu": 284.756,
        "saikou": 5,
        "heikin": 2.4,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 2.894
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 79,
        "ouatsu": 384.867,
        "saikou": 8.86,
        "heikin": 4.25,
        "boshuAvg30d": 113.2,
        "heikinAvg30d": 2.881
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 75,
        "ouatsu": 359.272,
        "saikou": 6.31,
        "heikin": 3.05,
        "boshuAvg30d": 109.6,
        "heikinAvg30d": 2.849
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 75,
        "ouatsu": 371.042,
        "saikou": 6.52,
        "heikin": 3.13,
        "boshuAvg30d": 109.6,
        "heikinAvg30d": 2.834
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 75,
        "ouatsu": 351.646,
        "saikou": 9.06,
        "heikin": 4.07,
        "boshuAvg30d": 109.6,
        "heikinAvg30d": 2.774
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 74,
        "ouatsu": 341.63,
        "saikou": 2.98,
        "heikin": 2.64,
        "boshuAvg30d": 109.0,
        "heikinAvg30d": 2.761
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 74,
        "ouatsu": 340.73,
        "saikou": 3.8,
        "heikin": 3.12,
        "boshuAvg30d": 108.6,
        "heikinAvg30d": 2.907
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 74,
        "ouatsu": 338.746,
        "saikou": 3.17,
        "heikin": 2.73,
        "boshuAvg30d": 108.6,
        "heikinAvg30d": 2.957
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 72,
        "ouatsu": 376.134,
        "saikou": 3.36,
        "heikin": 2.86,
        "boshuAvg30d": 107.0,
        "heikinAvg30d": 2.718
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 72,
        "ouatsu": 376.134,
        "saikou": 3.98,
        "heikin": 3.23,
        "boshuAvg30d": 107.0,
        "heikinAvg30d": 2.713
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 72,
        "ouatsu": 372.55,
        "saikou": 3.96,
        "heikin": 3.21,
        "boshuAvg30d": 107.0,
        "heikinAvg30d": 2.634
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 72,
        "ouatsu": 376.034,
        "saikou": 3.97,
        "heikin": 3.18,
        "boshuAvg30d": 107.0,
        "heikinAvg30d": 2.773
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 72,
        "ouatsu": 377.634,
        "saikou": 8,
        "heikin": 3.15,
        "boshuAvg30d": 107.0,
        "heikinAvg30d": 2.608
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 71,
        "ouatsu": 372.151,
        "saikou": 8,
        "heikin": 2.84,
        "boshuAvg30d": 106.4,
        "heikinAvg30d": 2.65
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 69,
        "ouatsu": 375.825,
        "saikou": 2.78,
        "heikin": 2.39,
        "boshuAvg30d": 104.4,
        "heikinAvg30d": 2.359
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 69,
        "ouatsu": 375.825,
        "saikou": 2.57,
        "heikin": 2.22,
        "boshuAvg30d": 104.4,
        "heikinAvg30d": 2.177
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 69,
        "ouatsu": 363.841,
        "saikou": 1.76,
        "heikin": 1.62,
        "boshuAvg30d": 104.4,
        "heikinAvg30d": 2.029
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 69,
        "ouatsu": 383.427,
        "saikou": 2.5,
        "heikin": 1.01,
        "boshuAvg30d": 104.4,
        "heikinAvg30d": 1.985
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 69,
        "ouatsu": 375.512,
        "saikou": 2.67,
        "heikin": 1.05,
        "boshuAvg30d": 104.4,
        "heikinAvg30d": 1.906
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 69,
        "ouatsu": 373.528,
        "saikou": 2.48,
        "heikin": 1.02,
        "boshuAvg30d": 104.4,
        "heikinAvg30d": 1.943
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 70,
        "ouatsu": 400.532,
        "saikou": 1.65,
        "heikin": 0.96,
        "boshuAvg30d": 105.0,
        "heikinAvg30d": 1.745
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 71,
        "ouatsu": 378.723,
        "saikou": 1.56,
        "heikin": 0.98,
        "boshuAvg30d": 106.0,
        "heikinAvg30d": 1.991
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 71,
        "ouatsu": 327.623,
        "saikou": 3.53,
        "heikin": 1.2,
        "boshuAvg30d": 106.0,
        "heikinAvg30d": 2.036
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 361.549,
        "saikou": 3,
        "heikin": 1.69,
        "boshuAvg30d": 105.0,
        "heikinAvg30d": 2.01
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 334.355,
        "saikou": 2.38,
        "heikin": 1.29,
        "boshuAvg30d": 104.0,
        "heikinAvg30d": 1.912
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 342.95,
        "saikou": 3,
        "heikin": 1.56,
        "boshuAvg30d": 101.0,
        "heikinAvg30d": 1.985
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.75,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 0.957
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 0.968
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.7,
        "heikin": 1.68,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 1.048
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.85,
        "heikin": 1.85,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 1.022
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 0.963
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 0.962
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 1.113
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 1.324
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 1.108
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 1.213
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 1.432
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 1.441
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.9,
        "heikin": 1.9,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.73
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.47,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.429
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.5,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.463
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.363
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 5.3,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.446
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 3.12,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.325
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.05,
        "heikin": 2.69,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.764
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 4.3,
        "heikin": 3.99,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.756
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 3.91
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.71,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 3.899
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 1.998,
        "saikou": 3.85,
        "heikin": 3.85,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 3.221
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 1.998,
        "saikou": 3.9,
        "heikin": 3.9,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 3.012
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.568
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.297
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 3.397
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.821
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.922
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.868
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 3.332
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 3.936
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.7,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 2.9
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 2.669
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.3,
        "heikin": 3.3,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 2.403
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.95,
        "heikin": 3.93,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 3.442
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.456
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.615
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 2.454
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 1.809
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.25,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.959
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.8,
        "heikin": 2.65,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.617
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.668
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.749
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.5,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 2.087
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.5,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.533
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.266
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.064
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 81.086,
        "saikou": 1.68,
        "heikin": 1.32,
        "boshuAvg30d": 129.5,
        "heikinAvg30d": 1.661
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 104.375,
        "saikou": 1.54,
        "heikin": 1.18,
        "boshuAvg30d": 129.5,
        "heikinAvg30d": 1.405
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 93.629,
        "saikou": 1.56,
        "heikin": 1.25,
        "boshuAvg30d": 129.5,
        "heikinAvg30d": 1.277
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 89.503,
        "saikou": 1.55,
        "heikin": 1.23,
        "boshuAvg30d": 129.5,
        "heikinAvg30d": 1.201
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 91.501,
        "saikou": 1.51,
        "heikin": 1.22,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 1.137
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 136.613,
        "saikou": 1.99,
        "heikin": 1.03,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 1.287
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 138.616,
        "saikou": 1.99,
        "heikin": 1.1,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 1.481
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 107.314,
        "saikou": 1.49,
        "heikin": 1.38,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 1.664
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 142.604,
        "saikou": 1.9,
        "heikin": 1.18,
        "boshuAvg30d": 129.5,
        "heikinAvg30d": 1.587
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 107.314,
        "saikou": 1.99,
        "heikin": 1.36,
        "boshuAvg30d": 129.5,
        "heikinAvg30d": 1.663
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 107.314,
        "saikou": 1.94,
        "heikin": 1.27,
        "boshuAvg30d": 129.5,
        "heikinAvg30d": 1.608
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 107.314,
        "saikou": 1.9,
        "heikin": 1.18,
        "boshuAvg30d": 129.5,
        "heikinAvg30d": 1.47
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 107.314,
        "saikou": 1.94,
        "heikin": 1.4,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 1.68
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 107.314,
        "saikou": 2.24,
        "heikin": 1.49,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 1.652
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 101.328,
        "saikou": 2.24,
        "heikin": 1.73,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 1.682
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 101.328,
        "saikou": 2.24,
        "heikin": 1.72,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 1.679
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 101.328,
        "saikou": 2.24,
        "heikin": 1.62,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 1.776
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 107.314,
        "saikou": 3.95,
        "heikin": 2.2,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 2.058
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 88.348,
        "saikou": 3,
        "heikin": 2.08,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 2.331
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 103.902,
        "saikou": 3.95,
        "heikin": 2.51,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 2.249
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 101.917,
        "saikou": 5.95,
        "heikin": 2.94,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 2.5
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 103.36,
        "saikou": 5.95,
        "heikin": 3.14,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 2.557
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 107.324,
        "saikou": 5.95,
        "heikin": 3.12,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.615
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 107.324,
        "saikou": 3,
        "heikin": 2.67,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.411
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 105.345,
        "saikou": 2.78,
        "heikin": 2.49,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 2.293
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 105.345,
        "saikou": 2.78,
        "heikin": 2.46,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 2.325
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 105.345,
        "saikou": 2.51,
        "heikin": 2.31,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 2.642
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 105.345,
        "saikou": 2.5,
        "heikin": 2.46,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 2.434
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 105.881,
        "saikou": 1.92,
        "heikin": 1.92,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 2.313
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 56.606,
        "saikou": 3,
        "heikin": 2.57,
        "boshuAvg30d": 150.7,
        "heikinAvg30d": 2.162
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 105.327,
        "saikou": 2.78,
        "heikin": 2.5,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.26
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 107.324,
        "saikou": 3.95,
        "heikin": 2.5,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.583
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 107.324,
        "saikou": 3.95,
        "heikin": 2.53,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.444
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 101.338,
        "saikou": 2.44,
        "heikin": 2.1,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.436
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 105.195,
        "saikou": 2.5,
        "heikin": 2.17,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.456
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 105.195,
        "saikou": 3.7,
        "heikin": 2.73,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 2.586
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 101.256,
        "saikou": 2.24,
        "heikin": 1.86,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 2.222
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 103.235,
        "saikou": 2.42,
        "heikin": 1.93,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 2.248
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 111.181,
        "saikou": 1.94,
        "heikin": 1.64,
        "boshuAvg30d": 145.9,
        "heikinAvg30d": 2.251
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 111.181,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 2.199
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 109.196,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.116
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 109.196,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 2.106
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 111.181,
        "saikou": 1.94,
        "heikin": 1.6,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 2.065
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 111.181,
        "saikou": 2,
        "heikin": 1.71,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 2.166
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 107.314,
        "saikou": 2,
        "heikin": 1.72,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 2.188
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 105.316,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 2.164
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 92.314,
        "saikou": 1.99,
        "heikin": 1.5,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 1.654
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 105.871,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 138.9,
        "heikinAvg30d": 1.799
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 75.33,
        "saikou": 6.38,
        "heikin": 2.76,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 1.87
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 75.33,
        "saikou": 8.67,
        "heikin": 3.19,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 1.896
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 61.527,
        "saikou": 2.29,
        "heikin": 1.92,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 1.888
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 63.517,
        "saikou": 9.97,
        "heikin": 2.13,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 1.758
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 63.517,
        "saikou": 2.29,
        "heikin": 1.89,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 1.68
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 65.317,
        "saikou": 2.29,
        "heikin": 1.88,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 1.984
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 82.176,
        "saikou": 2.29,
        "heikin": 1.76,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 2.151
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 82.176,
        "saikou": 2.29,
        "heikin": 1.76,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 2.501
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 82.176,
        "saikou": 2.29,
        "heikin": 1.75,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 2.683
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 82.176,
        "saikou": 2.29,
        "heikin": 1.76,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.086
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 82.176,
        "saikou": 2.29,
        "heikin": 1.76,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 3.018
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 82.176,
        "saikou": 2.29,
        "heikin": 1.78,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 2.984
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 82.176,
        "saikou": 2.29,
        "heikin": 1.77,
        "boshuAvg30d": 142.2,
        "heikinAvg30d": 3.238
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 82.176,
        "saikou": 2.29,
        "heikin": 1.82,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 2.527
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 82.176,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 1.62
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 82.176,
        "saikou": 2.29,
        "heikin": 1.82,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 1.305
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 80.178,
        "saikou": 2.29,
        "heikin": 1.83,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 1.381
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 80.178,
        "saikou": 9.97,
        "heikin": 2.03,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 1.473
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 68.971,
        "saikou": 9.66,
        "heikin": 3.43,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 1.614
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 46.398,
        "saikou": 9.97,
        "heikin": 4.27,
        "boshuAvg30d": 150.2,
        "heikinAvg30d": 1.541
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 32.595,
        "saikou": 9.97,
        "heikin": 1.99,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 1.568
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 32.595,
        "saikou": 9.97,
        "heikin": 1.99,
        "boshuAvg30d": 151.6,
        "heikinAvg30d": 1.468
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 66.29,
        "saikou": 2.29,
        "heikin": 1.89,
        "boshuAvg30d": 151.6,
        "heikinAvg30d": 1.556
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 66.29,
        "saikou": 2.7,
        "heikin": 1.9,
        "boshuAvg30d": 151.6,
        "heikinAvg30d": 1.613
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 66.29,
        "saikou": 2.29,
        "heikin": 2.29,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.468
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 66.29,
        "saikou": 2.29,
        "heikin": 2.29,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.52
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 80.093,
        "saikou": 6.38,
        "heikin": 3.05,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.813
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 80.093,
        "saikou": 6.38,
        "heikin": 3.05,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 1.704
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 56.006,
        "saikou": 6.38,
        "heikin": 2.72,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 1.689
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 32.595,
        "saikou": 2.7,
        "heikin": 1.47,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.662
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 32.595,
        "saikou": 1.45,
        "heikin": 1.42,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 1.992
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 32.595,
        "saikou": 1.45,
        "heikin": 1.45,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 2.276
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 32.595,
        "saikou": 2.7,
        "heikin": 1.71,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 2.574
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 32.595,
        "saikou": 2.7,
        "heikin": 1.95,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 3.448
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 32.595,
        "saikou": 3.98,
        "heikin": 3.2,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 3.992
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 32.595,
        "saikou": 3.98,
        "heikin": 3.36,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 4.22
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 30.605,
        "saikou": 2.5,
        "heikin": 2.5,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 4.366
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 30.605,
        "saikou": 2.5,
        "heikin": 1.82,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 4.323
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 48.489,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 4.01
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 50.479,
        "saikou": 1.5,
        "heikin": 1.45,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 3.528
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 50.479,
        "saikou": 1.45,
        "heikin": 1.45,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.696
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 50.479,
        "saikou": 1.5,
        "heikin": 1.47,
        "boshuAvg30d": 146.6,
        "heikinAvg30d": 3.49
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 84.174,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 3.771
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 84.174,
        "saikou": 2.29,
        "heikin": 1.83,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 3.44
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 84.174,
        "saikou": 2.29,
        "heikin": 1.81,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 3.393
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 82.374,
        "saikou": 2.29,
        "heikin": 1.91,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 2.857
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 82.374,
        "saikou": 2.29,
        "heikin": 1.82,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 2.796
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 82.374,
        "saikou": 2.29,
        "heikin": 1.82,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 1.888
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.984
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.937
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.925
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.923
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.925
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.911
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.9
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 208,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.926
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.978
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 219.543,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.012
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 196.543,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.982
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 196.543,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.912
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 215.543,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.961
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.911
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.844
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.6,
        "heikinAvg30d": 0.855
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 199.543,
        "saikou": 1.6,
        "heikin": 0.49,
        "boshuAvg30d": 45.6,
        "heikinAvg30d": 0.806
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 199.543,
        "saikou": 9.28,
        "heikin": 1.41,
        "boshuAvg30d": 45.6,
        "heikinAvg30d": 0.837
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 165.543,
        "saikou": 9.28,
        "heikin": 1.19,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 1.129
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 165.543,
        "saikou": 9.28,
        "heikin": 1.35,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 1.074
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 165.543,
        "saikou": 9.28,
        "heikin": 1.35,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.088
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 165.543,
        "saikou": 4.95,
        "heikin": 1.05,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.006
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 165.543,
        "saikou": 2.99,
        "heikin": 0.79,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.088
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 165.543,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.105
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 165.543,
        "saikou": 1.6,
        "heikin": 0.86,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.04
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 165.543,
        "saikou": 1.6,
        "heikin": 0.86,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.104
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 113.043,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.097
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 113.043,
        "saikou": 1.6,
        "heikin": 0.95,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 1.107
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 113.043,
        "saikou": 1.6,
        "heikin": 0.96,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.139
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 152.543,
        "saikou": 2.99,
        "heikin": 0.85,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 1.081
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 152.543,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.1
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 152.543,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.116
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 152.543,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.212
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 152.543,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 1.339
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 152.543,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.466
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 152.543,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.503
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 152.543,
        "saikou": 1.6,
        "heikin": 1.13,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.48
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 152.543,
        "saikou": 1.6,
        "heikin": 1.13,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.517
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 152.543,
        "saikou": 1.6,
        "heikin": 1.13,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.389
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 165.543,
        "saikou": 1.6,
        "heikin": 1.27,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.383
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 165.543,
        "saikou": 1.6,
        "heikin": 1.29,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.367
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 165.543,
        "saikou": 1.6,
        "heikin": 1.32,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.349
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 199.543,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.018
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 199.543,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.987
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 199.543,
        "saikou": 1.6,
        "heikin": 1.05,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.991
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.7,
        "heikin": 1.09,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.968
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.7,
        "heikin": 0.99,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.016
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.7,
        "heikin": 0.96,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.004
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 233.976,
        "saikou": 9.03,
        "heikin": 7.28,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 4.346
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 209.752,
        "saikou": 8.31,
        "heikin": 6.11,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 3.832
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 213.812,
        "saikou": 7.89,
        "heikin": 5.88,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 3.661
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 213.809,
        "saikou": 8.29,
        "heikin": 6.21,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 3.41
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 214.731,
        "saikou": 8.29,
        "heikin": 6.2,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 3.313
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 216.729,
        "saikou": 8.19,
        "heikin": 6.12,
        "boshuAvg30d": 166.7,
        "heikinAvg30d": 3.688
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 232.468,
        "saikou": 8.36,
        "heikin": 5.68,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 3.998
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 225.64,
        "saikou": 8.55,
        "heikin": 5.78,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 4.499
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 229.468,
        "saikou": 8.56,
        "heikin": 5.78,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 4.757
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 269.468,
        "saikou": 8.9,
        "heikin": 6.45,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 5.156
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 269.468,
        "saikou": 9.07,
        "heikin": 6.58,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 5.326
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 266.168,
        "saikou": 9.22,
        "heikin": 6.69,
        "boshuAvg30d": 167.5,
        "heikinAvg30d": 5.157
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 269.144,
        "saikou": 9.13,
        "heikin": 6.6,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 4.723
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 269.144,
        "saikou": 9.15,
        "heikin": 6.58,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 3.939
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 221.144,
        "saikou": 9.27,
        "heikin": 6.11,
        "boshuAvg30d": 173.1,
        "heikinAvg30d": 2.86
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 149.144,
        "saikou": 10,
        "heikin": 4.98,
        "boshuAvg30d": 174.1,
        "heikinAvg30d": 2.764
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 159.144,
        "saikou": 10,
        "heikin": 5.09,
        "boshuAvg30d": 174.1,
        "heikinAvg30d": 2.891
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 149.144,
        "saikou": 10,
        "heikin": 4.9,
        "boshuAvg30d": 174.1,
        "heikinAvg30d": 3.057
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 236.732,
        "saikou": 10,
        "heikin": 8.04,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 2.993
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 265.746,
        "saikou": 10,
        "heikin": 8.32,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 2.806
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 276.9,
        "saikou": 10,
        "heikin": 8.31,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 2.77
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 274.937,
        "saikou": 10,
        "heikin": 8.43,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 2.824
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 240.084,
        "saikou": 10,
        "heikin": 7.94,
        "boshuAvg30d": 180.1,
        "heikinAvg30d": 2.733
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 274.086,
        "saikou": 10,
        "heikin": 8.42,
        "boshuAvg30d": 180.1,
        "heikinAvg30d": 2.697
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 256.562,
        "saikou": 10,
        "heikin": 9.32,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 2.134
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 254.564,
        "saikou": 10,
        "heikin": 9.32,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 2.332
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 272.297,
        "saikou": 10,
        "heikin": 8.63,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 2.821
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 279.082,
        "saikou": 10,
        "heikin": 8.76,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 3.37
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 279.082,
        "saikou": 10,
        "heikin": 8.49,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 3.526
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 144.082,
        "saikou": 10,
        "heikin": 5.52,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 4.146
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 202.754,
        "saikou": 10,
        "heikin": 7.2,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 4.358
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 239.902,
        "saikou": 10,
        "heikin": 8.26,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 4.913
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 335.252,
        "saikou": 10,
        "heikin": 8.38,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 5.965
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 405.991,
        "saikou": 10,
        "heikin": 8.35,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 6.259
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 365.969,
        "saikou": 10,
        "heikin": 8.54,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 6.414
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 349.894,
        "saikou": 10,
        "heikin": 8.44,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.48
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 257.461,
        "saikou": 10,
        "heikin": 7.92,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 6.507
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 253.871,
        "saikou": 10,
        "heikin": 7.93,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 6.466
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 277.313,
        "saikou": 10,
        "heikin": 7.81,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 6.29
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 266.302,
        "saikou": 10,
        "heikin": 7.5,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 5.852
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 261.67,
        "saikou": 10,
        "heikin": 7.46,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 5.786
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 263.646,
        "saikou": 10,
        "heikin": 6.44,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 5.569
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 261.942,
        "saikou": 9.4,
        "heikin": 5.98,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 5.448
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 262.942,
        "saikou": 10,
        "heikin": 7.4,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 5.372
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 268.518,
        "saikou": 9.93,
        "heikin": 7.94,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 5.548
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 247.967,
        "saikou": 9.55,
        "heikin": 7.33,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 5.138
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 247.967,
        "saikou": 9.13,
        "heikin": 7.33,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 5.005
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 259.967,
        "saikou": 8.76,
        "heikin": 6.51,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 4.233
      }
    ]
  }
};
