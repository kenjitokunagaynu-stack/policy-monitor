// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/19〜2026/11/17）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-18",
  "fetchedAt": "2026-11-17",
  "avgWindowLabel": "過去30日平均（2026/10/19〜2026/11/17）",
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
      "boshu": 1047,
      "ouatsu": 1638.777,
      "saikou": 9.08,
      "heikin": 1.52,
      "boshuAvg30d": 1142.1,
      "heikinAvg30d": 2.712
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1047,
      "ouatsu": 1662.136,
      "saikou": 9.91,
      "heikin": 2.37,
      "boshuAvg30d": 1142.1,
      "heikinAvg30d": 2.64
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1047,
      "ouatsu": 1566.957,
      "saikou": 9.6,
      "heikin": 2.18,
      "boshuAvg30d": 1142.1,
      "heikinAvg30d": 2.587
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1046,
      "ouatsu": 1630.036,
      "saikou": 9.66,
      "heikin": 2.18,
      "boshuAvg30d": 1141.6,
      "heikinAvg30d": 2.528
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1040,
      "ouatsu": 1587.292,
      "saikou": 9.91,
      "heikin": 2.34,
      "boshuAvg30d": 1136.9,
      "heikinAvg30d": 2.592
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1040,
      "ouatsu": 1611.198,
      "saikou": 9.8,
      "heikin": 2.71,
      "boshuAvg30d": 1136.4,
      "heikinAvg30d": 2.624
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1123,
      "ouatsu": 1708.055,
      "saikou": 9.98,
      "heikin": 2.94,
      "boshuAvg30d": 1136.3,
      "heikinAvg30d": 2.736
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1127,
      "ouatsu": 1588.194,
      "saikou": 9.98,
      "heikin": 2.84,
      "boshuAvg30d": 1139.4,
      "heikinAvg30d": 2.984
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1127,
      "ouatsu": 1703.698,
      "saikou": 9.91,
      "heikin": 2.99,
      "boshuAvg30d": 1140.3,
      "heikinAvg30d": 3.041
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1129,
      "ouatsu": 1664.07,
      "saikou": 9.8,
      "heikin": 2.5,
      "boshuAvg30d": 1141.9,
      "heikinAvg30d": 3.093
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1129,
      "ouatsu": 1717.402,
      "saikou": 9.91,
      "heikin": 3,
      "boshuAvg30d": 1141.9,
      "heikinAvg30d": 3.145
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1129,
      "ouatsu": 1593.547,
      "saikou": 9.91,
      "heikin": 2.52,
      "boshuAvg30d": 1141.9,
      "heikinAvg30d": 3.151
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1188,
      "ouatsu": 1471.002,
      "saikou": 9.99,
      "heikin": 2.88,
      "boshuAvg30d": 1201.3,
      "heikinAvg30d": 3.266
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1213,
      "ouatsu": 1366.371,
      "saikou": 9.64,
      "heikin": 3.25,
      "boshuAvg30d": 1225.4,
      "heikinAvg30d": 3.286
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1232,
      "ouatsu": 1288.5,
      "saikou": 10,
      "heikin": 3.86,
      "boshuAvg30d": 1245.3,
      "heikinAvg30d": 3.233
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1247,
      "ouatsu": 1255.243,
      "saikou": 9.8,
      "heikin": 3.34,
      "boshuAvg30d": 1261.5,
      "heikinAvg30d": 3.011
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1247,
      "ouatsu": 1322.791,
      "saikou": 10,
      "heikin": 3.39,
      "boshuAvg30d": 1261.8,
      "heikinAvg30d": 2.892
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1247,
      "ouatsu": 1273.15,
      "saikou": 9.8,
      "heikin": 3.3,
      "boshuAvg30d": 1265.7,
      "heikinAvg30d": 2.891
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1262,
      "ouatsu": 1269.032,
      "saikou": 10,
      "heikin": 4.27,
      "boshuAvg30d": 1210.3,
      "heikinAvg30d": 2.833
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1267,
      "ouatsu": 1439.661,
      "saikou": 9.99,
      "heikin": 3.3,
      "boshuAvg30d": 1214.5,
      "heikinAvg30d": 2.826
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1271,
      "ouatsu": 1434.747,
      "saikou": 9.99,
      "heikin": 3.77,
      "boshuAvg30d": 1219.5,
      "heikinAvg30d": 2.775
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1275,
      "ouatsu": 1395.266,
      "saikou": 9.99,
      "heikin": 3.59,
      "boshuAvg30d": 1221.8,
      "heikinAvg30d": 2.815
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1258,
      "ouatsu": 1411.918,
      "saikou": 9.99,
      "heikin": 4.21,
      "boshuAvg30d": 1217.1,
      "heikinAvg30d": 2.783
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1258,
      "ouatsu": 1500.004,
      "saikou": 9.99,
      "heikin": 4.28,
      "boshuAvg30d": 1216.7,
      "heikinAvg30d": 2.849
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1239,
      "ouatsu": 1419.993,
      "saikou": 9.98,
      "heikin": 3.48,
      "boshuAvg30d": 1196.9,
      "heikinAvg30d": 2.712
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1239,
      "ouatsu": 1411.882,
      "saikou": 9.99,
      "heikin": 3.55,
      "boshuAvg30d": 1196.9,
      "heikinAvg30d": 2.754
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1239,
      "ouatsu": 1413.508,
      "saikou": 9.99,
      "heikin": 4.18,
      "boshuAvg30d": 1196.9,
      "heikinAvg30d": 2.841
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1235,
      "ouatsu": 1238.325,
      "saikou": 10,
      "heikin": 4.04,
      "boshuAvg30d": 1193.4,
      "heikinAvg30d": 2.97
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1234,
      "ouatsu": 1370.531,
      "saikou": 10,
      "heikin": 3.48,
      "boshuAvg30d": 1191.6,
      "heikinAvg30d": 3.056
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1228,
      "ouatsu": 1525.172,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1185.6,
      "heikinAvg30d": 3.128
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1224,
      "ouatsu": 1582.249,
      "saikou": 10,
      "heikin": 3.44,
      "boshuAvg30d": 1248.7,
      "heikinAvg30d": 3.337
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1224,
      "ouatsu": 1619.959,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1248.3,
      "heikinAvg30d": 3.417
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1224,
      "ouatsu": 1615.019,
      "saikou": 10,
      "heikin": 3.42,
      "boshuAvg30d": 1248.5,
      "heikinAvg30d": 3.677
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1222,
      "ouatsu": 1489.972,
      "saikou": 10,
      "heikin": 3.24,
      "boshuAvg30d": 1246.9,
      "heikinAvg30d": 3.797
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1220,
      "ouatsu": 1515.522,
      "saikou": 10,
      "heikin": 3.67,
      "boshuAvg30d": 1238.6,
      "heikinAvg30d": 3.735
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1099,
      "ouatsu": 1485.157,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1233.6,
      "heikinAvg30d": 3.734
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1095,
      "ouatsu": 1491.634,
      "saikou": 10,
      "heikin": 2.89,
      "boshuAvg30d": 1228.2,
      "heikinAvg30d": 3.557
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1095,
      "ouatsu": 1542.02,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1228.2,
      "heikinAvg30d": 3.551
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1095,
      "ouatsu": 1507.982,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1228.2,
      "heikinAvg30d": 3.382
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1093,
      "ouatsu": 1561.683,
      "saikou": 9.8,
      "heikin": 2.73,
      "boshuAvg30d": 1226.9,
      "heikinAvg30d": 3.309
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1086,
      "ouatsu": 1514.05,
      "saikou": 9.5,
      "heikin": 2.03,
      "boshuAvg30d": 1219.5,
      "heikinAvg30d": 3.211
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1086,
      "ouatsu": 1426.001,
      "saikou": 9.83,
      "heikin": 2.6,
      "boshuAvg30d": 1219.5,
      "heikinAvg30d": 3.197
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1083,
      "ouatsu": 1470.639,
      "saikou": 9.8,
      "heikin": 2.03,
      "boshuAvg30d": 1130.1,
      "heikinAvg30d": 3.137
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1086,
      "ouatsu": 1466.369,
      "saikou": 9.8,
      "heikin": 2.04,
      "boshuAvg30d": 1133.1,
      "heikinAvg30d": 3.048
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1085,
      "ouatsu": 1379.825,
      "saikou": 9.8,
      "heikin": 2.39,
      "boshuAvg30d": 1135.9,
      "heikinAvg30d": 3.059
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1078,
      "ouatsu": 1474.522,
      "saikou": 9.8,
      "heikin": 2.38,
      "boshuAvg30d": 1126.8,
      "heikinAvg30d": 3.012
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1070,
      "ouatsu": 1359.246,
      "saikou": 9.8,
      "heikin": 2.64,
      "boshuAvg30d": 1118.7,
      "heikinAvg30d": 3.026
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1062,
      "ouatsu": 1376.067,
      "saikou": 9.8,
      "heikin": 2.01,
      "boshuAvg30d": 1110.5,
      "heikinAvg30d": 2.829
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
        "ouatsu": 30.908,
        "saikou": 9.08,
        "heikin": 8.05,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 2.843
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 42.708,
        "saikou": 9.91,
        "heikin": 8.76,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 3.085
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 30.908,
        "saikou": 9.6,
        "heikin": 8.5,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 2.929
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 30.908,
        "saikou": 9.37,
        "heikin": 8.8,
        "boshuAvg30d": 49.1,
        "heikinAvg30d": 3.1
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 82.208,
        "saikou": 9.91,
        "heikin": 9.56,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.157
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 33.908,
        "saikou": 9.8,
        "heikin": 8.85,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 2.806
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 83.408,
        "saikou": 9.91,
        "heikin": 9.38,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.094
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 35.108,
        "saikou": 9.8,
        "heikin": 8.73,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.904
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 83.408,
        "saikou": 9.91,
        "heikin": 9.42,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.7
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 35.108,
        "saikou": 9.8,
        "heikin": 8.67,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.715
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 83.408,
        "saikou": 9.91,
        "heikin": 9.27,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.621
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 83.408,
        "saikou": 9.91,
        "heikin": 9.26,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.522
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 32.108,
        "saikou": 9.8,
        "heikin": 8.21,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 3.866
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 32.108,
        "saikou": 9.17,
        "heikin": 8.28,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.891
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 80.408,
        "saikou": 9.91,
        "heikin": 9.01,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 4.259
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 32.108,
        "saikou": 9.8,
        "heikin": 6.77,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 4.125
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 79.208,
        "saikou": 9.91,
        "heikin": 9.25,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 4.467
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 30.908,
        "saikou": 9.8,
        "heikin": 6.89,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 3.894
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 79.208,
        "saikou": 9.91,
        "heikin": 8.98,
        "boshuAvg30d": 51.6,
        "heikinAvg30d": 3.71
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 112.918,
        "saikou": 9,
        "heikin": 2.64,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 3.518
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 107.908,
        "saikou": 9.3,
        "heikin": 3.22,
        "boshuAvg30d": 52.1,
        "heikinAvg30d": 3.392
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 135.508,
        "saikou": 9.91,
        "heikin": 4.25,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 3.424
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 74.838,
        "saikou": 9.91,
        "heikin": 8.88,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 3.571
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 153.998,
        "saikou": 9.91,
        "heikin": 4.39,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 3.629
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 114.908,
        "saikou": 8.9,
        "heikin": 2.92,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.522
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 112.918,
        "saikou": 8.64,
        "heikin": 2.81,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.189
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 119.268,
        "saikou": 9.91,
        "heikin": 6.09,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.671
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 63.718,
        "saikou": 9.91,
        "heikin": 9.05,
        "boshuAvg30d": 51.1,
        "heikinAvg30d": 4.267
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 48.958,
        "saikou": 9.8,
        "heikin": 4.89,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.416
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 28.958,
        "saikou": 9.8,
        "heikin": 7.23,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 4.623
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 73.433,
        "saikou": 9.91,
        "heikin": 8.97,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.795
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 33.908,
        "saikou": 9.8,
        "heikin": 8.44,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 5.279
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 74.443,
        "saikou": 9.91,
        "heikin": 9.58,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 5.876
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 6.918,
        "saikou": 9.8,
        "heikin": 7.27,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 5.818
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 49.443,
        "saikou": 9.91,
        "heikin": 9.44,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 5.046
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 49.443,
        "saikou": 9.91,
        "heikin": 9.44,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 5.12
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 31.918,
        "saikou": 9.8,
        "heikin": 8.71,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.52
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 74.418,
        "saikou": 9.91,
        "heikin": 9.49,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.797
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 31.918,
        "saikou": 9.8,
        "heikin": 8.71,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.511
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 31.918,
        "saikou": 9.8,
        "heikin": 8.71,
        "boshuAvg30d": 49.3,
        "heikinAvg30d": 4.663
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 28.918,
        "saikou": 9.3,
        "heikin": 8.59,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 4.324
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 28.918,
        "saikou": 9.17,
        "heikin": 8.48,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 4.03
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 31.918,
        "saikou": 9.8,
        "heikin": 8.94,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.983
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 31.918,
        "saikou": 9.8,
        "heikin": 8.79,
        "boshuAvg30d": 50.3,
        "heikinAvg30d": 4.055
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 31.918,
        "saikou": 9.8,
        "heikin": 8.71,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.832
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 31.918,
        "saikou": 9.8,
        "heikin": 8.82,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 3.856
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 31.918,
        "saikou": 9.8,
        "heikin": 8.94,
        "boshuAvg30d": 50.1,
        "heikinAvg30d": 3.464
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 31.918,
        "saikou": 9.8,
        "heikin": 9.03,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 3.39
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 38,
        "ouatsu": 71.179,
        "saikou": 5.92,
        "heikin": 3.89,
        "boshuAvg30d": 118.5,
        "heikinAvg30d": 5.23
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 38,
        "ouatsu": 75.044,
        "saikou": 5.32,
        "heikin": 3.35,
        "boshuAvg30d": 118.5,
        "heikinAvg30d": 5.434
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 38,
        "ouatsu": 92.957,
        "saikou": 5.85,
        "heikin": 3.82,
        "boshuAvg30d": 118.5,
        "heikinAvg30d": 5.587
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 38,
        "ouatsu": 96.882,
        "saikou": 5.62,
        "heikin": 3.61,
        "boshuAvg30d": 118.5,
        "heikinAvg30d": 5.542
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 38,
        "ouatsu": 87.039,
        "saikou": 5.8,
        "heikin": 3.78,
        "boshuAvg30d": 118.5,
        "heikinAvg30d": 5.483
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 38,
        "ouatsu": 89.004,
        "saikou": 5.25,
        "heikin": 3.28,
        "boshuAvg30d": 118.5,
        "heikinAvg30d": 5.238
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 96.732,
        "saikou": 5.32,
        "heikin": 3.14,
        "boshuAvg30d": 120.4,
        "heikinAvg30d": 5.359
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 98.232,
        "saikou": 5.25,
        "heikin": 3.09,
        "boshuAvg30d": 121.0,
        "heikinAvg30d": 5.015
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 102.23,
        "saikou": 5.31,
        "heikin": 3.15,
        "boshuAvg30d": 120.4,
        "heikinAvg30d": 4.824
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 102.23,
        "saikou": 6.8,
        "heikin": 3.61,
        "boshuAvg30d": 121.0,
        "heikinAvg30d": 4.913
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 102.23,
        "saikou": 4.97,
        "heikin": 3.33,
        "boshuAvg30d": 121.0,
        "heikinAvg30d": 5.029
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 100.58,
        "saikou": 4.78,
        "heikin": 3.29,
        "boshuAvg30d": 121.0,
        "heikinAvg30d": 4.949
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 102.23,
        "saikou": 9.7,
        "heikin": 3.44,
        "boshuAvg30d": 128.0,
        "heikinAvg30d": 5.009
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 100.73,
        "saikou": 5.49,
        "heikin": 3.17,
        "boshuAvg30d": 131.8,
        "heikinAvg30d": 4.869
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 102.23,
        "saikou": 10,
        "heikin": 5.48,
        "boshuAvg30d": 135.4,
        "heikinAvg30d": 5.316
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 100.73,
        "saikou": 9.7,
        "heikin": 5.36,
        "boshuAvg30d": 137.4,
        "heikinAvg30d": 5.29
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 102.23,
        "saikou": 10,
        "heikin": 5.8,
        "boshuAvg30d": 137.4,
        "heikinAvg30d": 5.241
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 124.73,
        "saikou": 9.7,
        "heikin": 5.21,
        "boshuAvg30d": 137.4,
        "heikinAvg30d": 5.319
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 128.226,
        "saikou": 10,
        "heikin": 5.39,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 4.816
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 128.226,
        "saikou": 9,
        "heikin": 4.42,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 4.949
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 124.271,
        "saikou": 7,
        "heikin": 4.47,
        "boshuAvg30d": 68.6,
        "heikinAvg30d": 4.975
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 124.271,
        "saikou": 9.7,
        "heikin": 5.92,
        "boshuAvg30d": 69.1,
        "heikinAvg30d": 5.191
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 138.326,
        "saikou": 7.9,
        "heikin": 5.15,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 5.202
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 136.676,
        "saikou": 9.7,
        "heikin": 5.81,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 5.284
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 147,
        "ouatsu": 134.68,
        "saikou": 9.11,
        "heikin": 5.69,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 5.437
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 147,
        "ouatsu": 134.68,
        "saikou": 9.12,
        "heikin": 5.61,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 5.376
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 147,
        "ouatsu": 128.226,
        "saikou": 6.62,
        "heikin": 4.19,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 4.688
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 146,
        "ouatsu": 128.226,
        "saikou": 10,
        "heikin": 5.75,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 5.061
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 146,
        "ouatsu": 114.426,
        "saikou": 10,
        "heikin": 5.34,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 5.004
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 145,
        "ouatsu": 90.426,
        "saikou": 5.99,
        "heikin": 3.17,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 4.607
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 66.426,
        "saikou": 9.7,
        "heikin": 6.41,
        "boshuAvg30d": 136.4,
        "heikinAvg30d": 4.828
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 78.462,
        "saikou": 9.7,
        "heikin": 5.08,
        "boshuAvg30d": 136.4,
        "heikinAvg30d": 4.629
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 70.515,
        "saikou": 9.7,
        "heikin": 5.08,
        "boshuAvg30d": 136.4,
        "heikinAvg30d": 4.474
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 69.015,
        "saikou": 9.7,
        "heikin": 4.18,
        "boshuAvg30d": 136.4,
        "heikinAvg30d": 4.336
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 70.515,
        "saikou": 9.7,
        "heikin": 5.11,
        "boshuAvg30d": 135.4,
        "heikinAvg30d": 4.609
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 67.365,
        "saikou": 4.51,
        "heikin": 2.96,
        "boshuAvg30d": 133.8,
        "heikinAvg30d": 4.014
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 70.479,
        "saikou": 9.7,
        "heikin": 4.03,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 3.537
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 68.979,
        "saikou": 4.01,
        "heikin": 2.67,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 3.246
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 58.479,
        "saikou": 5.15,
        "heikin": 3.59,
        "boshuAvg30d": 133.4,
        "heikinAvg30d": 3.183
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 58.479,
        "saikou": 6.19,
        "heikin": 3.6,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 3.468
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 70.479,
        "saikou": 4.53,
        "heikin": 3.77,
        "boshuAvg30d": 132.4,
        "heikinAvg30d": 3.446
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 70.479,
        "saikou": 6.46,
        "heikin": 3.56,
        "boshuAvg30d": 132.4,
        "heikinAvg30d": 3.524
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 132,
        "ouatsu": 67.229,
        "saikou": 5.87,
        "heikin": 3.31,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 3.384
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 132,
        "ouatsu": 67.229,
        "saikou": 4.3,
        "heikin": 3.41,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 3.794
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 132,
        "ouatsu": 67.229,
        "saikou": 9.7,
        "heikin": 4.78,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 3.749
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 131,
        "ouatsu": 92.579,
        "saikou": 4.58,
        "heikin": 2.81,
        "boshuAvg30d": 42.4,
        "heikinAvg30d": 4.443
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 130,
        "ouatsu": 92.579,
        "saikou": 4.98,
        "heikin": 3.01,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 4.297
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 129,
        "ouatsu": 89.429,
        "saikou": 5.67,
        "heikin": 3.47,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 4.918
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 273,
        "ouatsu": 605.921,
        "saikou": 2.57,
        "heikin": 1.25,
        "boshuAvg30d": 242.0,
        "heikinAvg30d": 2.424
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 273,
        "ouatsu": 596.868,
        "saikou": 6.15,
        "heikin": 1.34,
        "boshuAvg30d": 242.0,
        "heikinAvg30d": 2.267
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 273,
        "ouatsu": 554.277,
        "saikou": 1.79,
        "heikin": 0.91,
        "boshuAvg30d": 242.0,
        "heikinAvg30d": 2.417
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 273,
        "ouatsu": 609.561,
        "saikou": 1.38,
        "heikin": 0.78,
        "boshuAvg30d": 242.0,
        "heikinAvg30d": 2.133
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 271,
        "ouatsu": 556.851,
        "saikou": 1.56,
        "heikin": 0.84,
        "boshuAvg30d": 240.4,
        "heikinAvg30d": 2.219
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 271,
        "ouatsu": 631.096,
        "saikou": 6.62,
        "heikin": 3.12,
        "boshuAvg30d": 240.0,
        "heikinAvg30d": 2.081
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 269,
        "ouatsu": 645.814,
        "saikou": 6.62,
        "heikin": 2.27,
        "boshuAvg30d": 238.0,
        "heikinAvg30d": 2.108
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 271,
        "ouatsu": 576.857,
        "saikou": 6.67,
        "heikin": 2.84,
        "boshuAvg30d": 240.0,
        "heikinAvg30d": 2.299
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 271,
        "ouatsu": 606.576,
        "saikou": 6.68,
        "heikin": 2.28,
        "boshuAvg30d": 240.0,
        "heikinAvg30d": 2.512
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 272,
        "ouatsu": 536.967,
        "saikou": 6.63,
        "heikin": 2.18,
        "boshuAvg30d": 241.0,
        "heikinAvg30d": 2.305
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 272,
        "ouatsu": 537.089,
        "saikou": 6.59,
        "heikin": 2.78,
        "boshuAvg30d": 241.0,
        "heikinAvg30d": 2.326
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 272,
        "ouatsu": 504.394,
        "saikou": 7.05,
        "heikin": 1.71,
        "boshuAvg30d": 241.0,
        "heikinAvg30d": 2.511
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 292,
        "ouatsu": 506.889,
        "saikou": 6.66,
        "heikin": 2.54,
        "boshuAvg30d": 260.5,
        "heikinAvg30d": 2.765
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 300,
        "ouatsu": 391.588,
        "saikou": 6.09,
        "heikin": 3.67,
        "boshuAvg30d": 268.5,
        "heikinAvg30d": 2.854
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 304,
        "ouatsu": 283.595,
        "saikou": 6.1,
        "heikin": 3.74,
        "boshuAvg30d": 273.0,
        "heikinAvg30d": 2.828
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 309,
        "ouatsu": 267.118,
        "saikou": 6.64,
        "heikin": 3.59,
        "boshuAvg30d": 278.3,
        "heikinAvg30d": 2.711
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 309,
        "ouatsu": 263.593,
        "saikou": 6.63,
        "heikin": 3.82,
        "boshuAvg30d": 278.6,
        "heikinAvg30d": 2.378
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 309,
        "ouatsu": 247.362,
        "saikou": 6.61,
        "heikin": 4.68,
        "boshuAvg30d": 282.5,
        "heikinAvg30d": 2.679
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 299,
        "ouatsu": 248.858,
        "saikou": 6.7,
        "heikin": 4.69,
        "boshuAvg30d": 273.4,
        "heikinAvg30d": 2.269
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 299,
        "ouatsu": 369.899,
        "saikou": 8.02,
        "heikin": 2.48,
        "boshuAvg30d": 273.4,
        "heikinAvg30d": 2.361
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 299,
        "ouatsu": 510.585,
        "saikou": 7.46,
        "heikin": 3.21,
        "boshuAvg30d": 274.0,
        "heikinAvg30d": 2.308
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 299,
        "ouatsu": 504.917,
        "saikou": 5.49,
        "heikin": 2.16,
        "boshuAvg30d": 273.6,
        "heikinAvg30d": 2.289
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 285,
        "ouatsu": 527.576,
        "saikou": 8.43,
        "heikin": 3.93,
        "boshuAvg30d": 271.0,
        "heikinAvg30d": 2.333
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 285,
        "ouatsu": 489,
        "saikou": 9.95,
        "heikin": 4.34,
        "boshuAvg30d": 271.0,
        "heikinAvg30d": 2.531
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 283,
        "ouatsu": 453.709,
        "saikou": 9.95,
        "heikin": 3.28,
        "boshuAvg30d": 268.2,
        "heikinAvg30d": 2.037
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 283,
        "ouatsu": 446.242,
        "saikou": 9.95,
        "heikin": 3.29,
        "boshuAvg30d": 268.2,
        "heikinAvg30d": 2.087
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 283,
        "ouatsu": 472.948,
        "saikou": 6.87,
        "heikin": 5.26,
        "boshuAvg30d": 268.2,
        "heikinAvg30d": 2.209
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 283,
        "ouatsu": 402.603,
        "saikou": 6.71,
        "heikin": 3.81,
        "boshuAvg30d": 267.9,
        "heikinAvg30d": 2.173
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 282,
        "ouatsu": 425.556,
        "saikou": 7.07,
        "heikin": 2.55,
        "boshuAvg30d": 266.9,
        "heikinAvg30d": 2.405
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 282,
        "ouatsu": 509.164,
        "saikou": 6.68,
        "heikin": 3.32,
        "boshuAvg30d": 266.5,
        "heikinAvg30d": 2.267
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 291,
        "ouatsu": 583.012,
        "saikou": 6.52,
        "heikin": 3.11,
        "boshuAvg30d": 264.5,
        "heikinAvg30d": 2.4
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 291,
        "ouatsu": 581.993,
        "saikou": 6.53,
        "heikin": 2.44,
        "boshuAvg30d": 264.1,
        "heikinAvg30d": 2.281
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 291,
        "ouatsu": 552.177,
        "saikou": 6.14,
        "heikin": 2.74,
        "boshuAvg30d": 263.8,
        "heikinAvg30d": 2.264
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 291,
        "ouatsu": 528.225,
        "saikou": 6.26,
        "heikin": 2.8,
        "boshuAvg30d": 263.8,
        "heikinAvg30d": 2.24
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 291,
        "ouatsu": 511.674,
        "saikou": 6.29,
        "heikin": 2.63,
        "boshuAvg30d": 261.8,
        "heikinAvg30d": 2.164
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 175,
        "ouatsu": 494.632,
        "saikou": 6.27,
        "heikin": 1.86,
        "boshuAvg30d": 261.8,
        "heikinAvg30d": 2.337
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 177,
        "ouatsu": 527.104,
        "saikou": 5.95,
        "heikin": 1.45,
        "boshuAvg30d": 263.3,
        "heikinAvg30d": 2.394
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 177,
        "ouatsu": 532.568,
        "saikou": 6.1,
        "heikin": 1.97,
        "boshuAvg30d": 263.3,
        "heikinAvg30d": 2.272
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 177,
        "ouatsu": 512.176,
        "saikou": 6.72,
        "heikin": 2.41,
        "boshuAvg30d": 263.3,
        "heikinAvg30d": 2.37
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 177,
        "ouatsu": 539.442,
        "saikou": 6.77,
        "heikin": 1.95,
        "boshuAvg30d": 263.6,
        "heikinAvg30d": 2.173
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 176,
        "ouatsu": 560.925,
        "saikou": 2.43,
        "heikin": 1.4,
        "boshuAvg30d": 262.2,
        "heikinAvg30d": 2.178
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 176,
        "ouatsu": 455.35,
        "saikou": 6.83,
        "heikin": 3.03,
        "boshuAvg30d": 262.2,
        "heikinAvg30d": 2.443
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 175,
        "ouatsu": 465.3,
        "saikou": 6.1,
        "heikin": 1.84,
        "boshuAvg30d": 261.6,
        "heikinAvg30d": 2.302
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 175,
        "ouatsu": 499.045,
        "saikou": 2.43,
        "heikin": 1.42,
        "boshuAvg30d": 261.6,
        "heikinAvg30d": 2.192
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 175,
        "ouatsu": 387.778,
        "saikou": 6.73,
        "heikin": 2.55,
        "boshuAvg30d": 264.6,
        "heikinAvg30d": 2.317
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 173,
        "ouatsu": 423.756,
        "saikou": 6.62,
        "heikin": 2.2,
        "boshuAvg30d": 259.6,
        "heikinAvg30d": 2.361
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 171,
        "ouatsu": 358.358,
        "saikou": 6.63,
        "heikin": 2.77,
        "boshuAvg30d": 257.9,
        "heikinAvg30d": 2.778
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 341.102,
        "saikou": 6.96,
        "heikin": 1.12,
        "boshuAvg30d": 256.3,
        "heikinAvg30d": 2.816
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 60,
        "ouatsu": 430.536,
        "saikou": 2.46,
        "heikin": 1.36,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 1.82
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 60,
        "ouatsu": 387.444,
        "saikou": 4.2,
        "heikin": 1.79,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 1.919
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 60,
        "ouatsu": 403.685,
        "saikou": 2.37,
        "heikin": 1.62,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 1.959
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 407.671,
        "saikou": 2.72,
        "heikin": 1.6,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 2.027
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 59,
        "ouatsu": 395.56,
        "saikou": 2.03,
        "heikin": 1.58,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 2.043
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 389.558,
        "saikou": 2.26,
        "heikin": 1.52,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 2.001
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 421.391,
        "saikou": 2.34,
        "heikin": 1.5,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.9
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 394.203,
        "saikou": 5.67,
        "heikin": 1.46,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.853
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 401.803,
        "saikou": 6.67,
        "heikin": 1.41,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.756
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 383.891,
        "saikou": 2.64,
        "heikin": 1.37,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.812
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 385.881,
        "saikou": 3.12,
        "heikin": 1.52,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.705
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 400.571,
        "saikou": 7.67,
        "heikin": 1.61,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 1.634
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 395.951,
        "saikou": 3.67,
        "heikin": 1.79,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 1.851
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 72,
        "ouatsu": 373.68,
        "saikou": 5.67,
        "heikin": 1.96,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 1.78
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 75,
        "ouatsu": 353.569,
        "saikou": 4.8,
        "heikin": 2.06,
        "boshuAvg30d": 161.8,
        "heikinAvg30d": 2.122
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 77,
        "ouatsu": 386.589,
        "saikou": 4.57,
        "heikin": 2.21,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 2.132
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 77,
        "ouatsu": 379.062,
        "saikou": 4.67,
        "heikin": 1.32,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 2.206
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 77,
        "ouatsu": 384.452,
        "saikou": 5.67,
        "heikin": 1.32,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 2.276
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 82,
        "ouatsu": 340.907,
        "saikou": 6.67,
        "heikin": 1.52,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 2.479
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 82,
        "ouatsu": 331.891,
        "saikou": 7.67,
        "heikin": 2.57,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 2.438
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 82,
        "ouatsu": 283.848,
        "saikou": 8.67,
        "heikin": 2.7,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 2.468
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 82,
        "ouatsu": 303.273,
        "saikou": 8,
        "heikin": 2.71,
        "boshuAvg30d": 168.8,
        "heikinAvg30d": 2.506
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 81,
        "ouatsu": 294.103,
        "saikou": 6.67,
        "heikin": 3.21,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 2.572
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 80,
        "ouatsu": 311.877,
        "saikou": 8.15,
        "heikin": 3.94,
        "boshuAvg30d": 166.8,
        "heikinAvg30d": 2.791
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 76,
        "ouatsu": 276.715,
        "saikou": 7.7,
        "heikin": 4.44,
        "boshuAvg30d": 162.8,
        "heikinAvg30d": 2.906
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 76,
        "ouatsu": 258.263,
        "saikou": 7.78,
        "heikin": 4.52,
        "boshuAvg30d": 162.8,
        "heikinAvg30d": 2.881
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 76,
        "ouatsu": 286.777,
        "saikou": 8.27,
        "heikin": 2.64,
        "boshuAvg30d": 162.8,
        "heikinAvg30d": 2.512
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 76,
        "ouatsu": 255.976,
        "saikou": 7.27,
        "heikin": 2.15,
        "boshuAvg30d": 162.4,
        "heikinAvg30d": 2.616
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 76,
        "ouatsu": 301.809,
        "saikou": 6.27,
        "heikin": 2.05,
        "boshuAvg30d": 162.4,
        "heikinAvg30d": 2.685
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 76,
        "ouatsu": 394.94,
        "saikou": 5.5,
        "heikin": 1.94,
        "boshuAvg30d": 162.4,
        "heikinAvg30d": 2.589
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 74,
        "ouatsu": 405.048,
        "saikou": 5.5,
        "heikin": 1.87,
        "boshuAvg30d": 160.4,
        "heikinAvg30d": 2.812
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 74,
        "ouatsu": 438.559,
        "saikou": 5.57,
        "heikin": 1.68,
        "boshuAvg30d": 160.4,
        "heikinAvg30d": 2.833
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 74,
        "ouatsu": 383.366,
        "saikou": 4.27,
        "heikin": 1.85,
        "boshuAvg30d": 160.4,
        "heikinAvg30d": 2.814
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 73,
        "ouatsu": 381.044,
        "saikou": 5.51,
        "heikin": 2.17,
        "boshuAvg30d": 159.8,
        "heikinAvg30d": 3.086
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 73,
        "ouatsu": 381.044,
        "saikou": 6.27,
        "heikin": 2.3,
        "boshuAvg30d": 159.8,
        "heikinAvg30d": 2.928
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 72,
        "ouatsu": 393.432,
        "saikou": 7.27,
        "heikin": 1.92,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 2.671
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 398.812,
        "saikou": 8.27,
        "heikin": 1.89,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 2.469
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 398.812,
        "saikou": 5.5,
        "heikin": 1.71,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 2.483
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 436.312,
        "saikou": 8.27,
        "heikin": 1.5,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 2.109
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 436.312,
        "saikou": 3.1,
        "heikin": 1.24,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 2.108
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 70,
        "ouatsu": 430.061,
        "saikou": 6.27,
        "heikin": 1.23,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 1.888
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 70,
        "ouatsu": 430.061,
        "saikou": 5.5,
        "heikin": 1.21,
        "boshuAvg30d": 156.8,
        "heikinAvg30d": 1.801
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 72,
        "ouatsu": 426.081,
        "saikou": 5.5,
        "heikin": 1.19,
        "boshuAvg30d": 158.4,
        "heikinAvg30d": 1.735
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 72,
        "ouatsu": 404.53,
        "saikou": 5.5,
        "heikin": 1.77,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 1.874
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 72,
        "ouatsu": 419.942,
        "saikou": 5.5,
        "heikin": 1.65,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 1.919
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 446.052,
        "saikou": 5.5,
        "heikin": 2.07,
        "boshuAvg30d": 157.3,
        "heikinAvg30d": 2.005
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 409.689,
        "saikou": 5.5,
        "heikin": 1.85,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 1.913
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 399.005,
        "saikou": 2.89,
        "heikin": 1.93,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 1.989
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 3.1
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 1.9,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 2.884
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 1.9,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 2.261
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 2.693
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 58.7,
        "heikinAvg30d": 2.539
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 2.438
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 3.434
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 3.047
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 2.991
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 3.718
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 3.801
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.3,
        "heikinAvg30d": 3.435
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 3.781
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 3.791
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 4.194
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 3.9
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 4.29
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 4.242
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 4.713
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 5.003
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 5.489
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 5.806
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 4.498,
        "saikou": 9.99,
        "heikin": 9.94,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 5.163
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 4.918
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 1.9,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 3.26
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 3.53
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 4.498,
        "saikou": 9.99,
        "heikin": 9.94,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 5.104
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 4.221
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 5.256
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.3,
        "heikinAvg30d": 5.092
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 4.498,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.3,
        "heikinAvg30d": 6.146
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.3,
        "heikinAvg30d": 6.798
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 6.114
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 5.863
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 5.938
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.7,
        "heikinAvg30d": 5.938
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.3,
        "heikinAvg30d": 5.26
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.3,
        "heikinAvg30d": 5.937
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.3,
        "heikinAvg30d": 4.742
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 68.3,
        "heikinAvg30d": 5.176
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 66.3,
        "heikinAvg30d": 4.58
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 4.616
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 4.356
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 4.03
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 4.248
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 8.95,
        "heikin": 8.95,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 3.735
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 8.77,
        "heikin": 8.77,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 3.731
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.979
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 131.698,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 186.5,
        "heikinAvg30d": 2.602
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 103.431,
        "saikou": 4.81,
        "heikin": 0.58,
        "boshuAvg30d": 186.5,
        "heikinAvg30d": 2.01
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 30.668,
        "saikou": 4.75,
        "heikin": 4.75,
        "boshuAvg30d": 186.5,
        "heikinAvg30d": 1.718
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 36.633,
        "saikou": 4.94,
        "heikin": 4.94,
        "boshuAvg30d": 186.5,
        "heikinAvg30d": 1.804
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 56.441,
        "saikou": 9,
        "heikin": 8.47,
        "boshuAvg30d": 185.5,
        "heikinAvg30d": 1.966
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 56.441,
        "saikou": 9.4,
        "heikin": 8.77,
        "boshuAvg30d": 185.5,
        "heikinAvg30d": 2.353
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 68.316,
        "saikou": 9.98,
        "heikin": 9.31,
        "boshuAvg30d": 185.5,
        "heikinAvg30d": 2.488
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 91.927,
        "saikou": 9.98,
        "heikin": 6.32,
        "boshuAvg30d": 185.5,
        "heikinAvg30d": 2.821
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 68.316,
        "saikou": 9.88,
        "heikin": 8.96,
        "boshuAvg30d": 186.5,
        "heikinAvg30d": 2.649
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 66.466,
        "saikou": 5.5,
        "heikin": 5.5,
        "boshuAvg30d": 186.5,
        "heikinAvg30d": 2.578
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 66.466,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 186.5,
        "heikinAvg30d": 2.701
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 66.466,
        "saikou": 5.39,
        "heikin": 5.39,
        "boshuAvg30d": 186.5,
        "heikinAvg30d": 2.48
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 51.466,
        "saikou": 9.99,
        "heikin": 9.22,
        "boshuAvg30d": 196.9,
        "heikinAvg30d": 2.365
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 68.316,
        "saikou": 9.64,
        "heikin": 8.53,
        "boshuAvg30d": 200.9,
        "heikinAvg30d": 2.483
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 68.316,
        "saikou": 9.98,
        "heikin": 9.35,
        "boshuAvg30d": 205.9,
        "heikinAvg30d": 3.002
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 68.316,
        "saikou": 9.4,
        "heikin": 8.94,
        "boshuAvg30d": 208.4,
        "heikinAvg30d": 3.112
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 68.316,
        "saikou": 9.4,
        "heikin": 8.92,
        "boshuAvg30d": 208.4,
        "heikinAvg30d": 3.046
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 68.316,
        "saikou": 9.4,
        "heikin": 8.94,
        "boshuAvg30d": 208.4,
        "heikinAvg30d": 3.574
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 68.316,
        "saikou": 10,
        "heikin": 9.52,
        "boshuAvg30d": 218.1,
        "heikinAvg30d": 3.622
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 62.382,
        "saikou": 9.99,
        "heikin": 9.46,
        "boshuAvg30d": 218.1,
        "heikinAvg30d": 3.58
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 60.397,
        "saikou": 9.99,
        "heikin": 9.56,
        "boshuAvg30d": 218.1,
        "heikinAvg30d": 3.391
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 60.397,
        "saikou": 9.99,
        "heikin": 9.56,
        "boshuAvg30d": 217.1,
        "heikinAvg30d": 3.436
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 62.382,
        "saikou": 9.99,
        "heikin": 9.46,
        "boshuAvg30d": 215.5,
        "heikinAvg30d": 3.402
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 62.382,
        "saikou": 9.99,
        "heikin": 9.46,
        "boshuAvg30d": 216.1,
        "heikinAvg30d": 3.112
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 139.46,
        "saikou": 9.98,
        "heikin": 3.19,
        "boshuAvg30d": 214.5,
        "heikinAvg30d": 2.952
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 151.268,
        "saikou": 9.99,
        "heikin": 3.9,
        "boshuAvg30d": 214.5,
        "heikinAvg30d": 3.038
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 62.382,
        "saikou": 9.99,
        "heikin": 9.43,
        "boshuAvg30d": 214.5,
        "heikinAvg30d": 3.406
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 68.316,
        "saikou": 10,
        "heikin": 9.49,
        "boshuAvg30d": 214.5,
        "heikinAvg30d": 3.382
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 68.316,
        "saikou": 10,
        "heikin": 9.5,
        "boshuAvg30d": 214.5,
        "heikinAvg30d": 3.679
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 68.316,
        "saikou": 9.99,
        "heikin": 9.34,
        "boshuAvg30d": 214.5,
        "heikinAvg30d": 3.5
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 68.316,
        "saikou": 9.88,
        "heikin": 9.13,
        "boshuAvg30d": 214.1,
        "heikinAvg30d": 3.802
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 68.316,
        "saikou": 9.4,
        "heikin": 8.87,
        "boshuAvg30d": 214.1,
        "heikinAvg30d": 3.9
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 66.331,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 214.1,
        "heikinAvg30d": 3.997
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 66.331,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 214.1,
        "heikinAvg30d": 3.57
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 66.331,
        "saikou": 9,
        "heikin": 8.17,
        "boshuAvg30d": 209.8,
        "heikinAvg30d": 3.492
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 66.331,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 208.8,
        "heikinAvg30d": 3.746
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 64.371,
        "saikou": 9,
        "heikin": 9,
        "boshuAvg30d": 206.8,
        "heikinAvg30d": 3.306
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 64.371,
        "saikou": 9,
        "heikin": 9,
        "boshuAvg30d": 206.8,
        "heikinAvg30d": 3.277
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 66.331,
        "saikou": 9,
        "heikin": 9,
        "boshuAvg30d": 206.8,
        "heikinAvg30d": 3.16
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 66.331,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 205.8,
        "heikinAvg30d": 3.014
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 66.331,
        "saikou": 9.4,
        "heikin": 9.11,
        "boshuAvg30d": 204.8,
        "heikinAvg30d": 3.16
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 66.331,
        "saikou": 9.4,
        "heikin": 9.11,
        "boshuAvg30d": 205.4,
        "heikinAvg30d": 3.215
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 66.331,
        "saikou": 9,
        "heikin": 9,
        "boshuAvg30d": 205.4,
        "heikinAvg30d": 2.98
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 66.331,
        "saikou": 9.4,
        "heikin": 9.04,
        "boshuAvg30d": 205.4,
        "heikinAvg30d": 2.926
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 66.331,
        "saikou": 9,
        "heikin": 9,
        "boshuAvg30d": 205.4,
        "heikinAvg30d": 2.876
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 66.331,
        "saikou": 9,
        "heikin": 9,
        "boshuAvg30d": 203.8,
        "heikinAvg30d": 2.832
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 62.464,
        "saikou": 9.4,
        "heikin": 9.13,
        "boshuAvg30d": 202.4,
        "heikinAvg30d": 2.699
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 82.227,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 200.4,
        "heikinAvg30d": 2.49
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 103,
        "ouatsu": 74.375,
        "saikou": 2.29,
        "heikin": 2.29,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 2.085
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 103,
        "ouatsu": 74.375,
        "saikou": 6,
        "heikin": 3.07,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 2.269
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 103,
        "ouatsu": 74.375,
        "saikou": 8,
        "heikin": 3.8,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 2.024
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 103,
        "ouatsu": 76.365,
        "saikou": 8.15,
        "heikin": 3.91,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 1.927
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 103,
        "ouatsu": 52.499,
        "saikou": 8.15,
        "heikin": 3.98,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 1.94
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 103,
        "ouatsu": 52.499,
        "saikou": 8.15,
        "heikin": 3.97,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 2.001
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 103,
        "ouatsu": 44.187,
        "saikou": 9.45,
        "heikin": 6.78,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 2.138
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 104,
        "ouatsu": 82.031,
        "saikou": 9.97,
        "heikin": 6.86,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 2.454
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 104,
        "ouatsu": 93.221,
        "saikou": 9.5,
        "heikin": 6.23,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 2.587
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 104,
        "ouatsu": 93.221,
        "saikou": 2.29,
        "heikin": 2.28,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 2.778
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 104,
        "ouatsu": 93.221,
        "saikou": 2.29,
        "heikin": 2.28,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 2.862
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 104,
        "ouatsu": 93.221,
        "saikou": 8.15,
        "heikin": 4.98,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 2.589
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 106,
        "ouatsu": 90.351,
        "saikou": 9.97,
        "heikin": 6.27,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 2.634
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 107,
        "ouatsu": 89.918,
        "saikou": 9.5,
        "heikin": 6.2,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 2.89
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 107,
        "ouatsu": 90.351,
        "saikou": 9.97,
        "heikin": 6.27,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 2.392
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 108,
        "ouatsu": 90.351,
        "saikou": 9.5,
        "heikin": 5.99,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 2.097
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 108,
        "ouatsu": 90.351,
        "saikou": 8.15,
        "heikin": 4.87,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 2.074
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 108,
        "ouatsu": 90.351,
        "saikou": 9.5,
        "heikin": 5.4,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 2.02
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 111,
        "ouatsu": 63.49,
        "saikou": 9.97,
        "heikin": 7.79,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 2.25
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 112,
        "ouatsu": 88.369,
        "saikou": 9.5,
        "heikin": 5.57,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.227
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 113,
        "ouatsu": 80.415,
        "saikou": 9.5,
        "heikin": 5.41,
        "boshuAvg30d": 141.9,
        "heikinAvg30d": 1.927
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 114,
        "ouatsu": 88.369,
        "saikou": 9.5,
        "heikin": 5.52,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 1.995
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 114,
        "ouatsu": 88.369,
        "saikou": 9.5,
        "heikin": 5.49,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 1.863
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 114,
        "ouatsu": 88.369,
        "saikou": 9.5,
        "heikin": 5.14,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 1.816
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 111,
        "ouatsu": 76.419,
        "saikou": 9.5,
        "heikin": 4.91,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 1.781
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 111,
        "ouatsu": 80.415,
        "saikou": 9.5,
        "heikin": 5.17,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 1.984
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 111,
        "ouatsu": 138.468,
        "saikou": 9.5,
        "heikin": 3.85,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 1.954
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 111,
        "ouatsu": 59.215,
        "saikou": 9.5,
        "heikin": 5.92,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 2.071
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 111,
        "ouatsu": 90.351,
        "saikou": 9.5,
        "heikin": 4.59,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 2.188
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 110,
        "ouatsu": 90.351,
        "saikou": 5.5,
        "heikin": 3.53,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 2.406
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 110,
        "ouatsu": 82.397,
        "saikou": 9.5,
        "heikin": 4.9,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 2.493
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 110,
        "ouatsu": 48.702,
        "saikou": 3.65,
        "heikin": 3.6,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 2.546
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 110,
        "ouatsu": 82.397,
        "saikou": 2.7,
        "heikin": 2.3,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 2.947
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 110,
        "ouatsu": 82.397,
        "saikou": 6.2,
        "heikin": 3.36,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 3.588
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 110,
        "ouatsu": 82.397,
        "saikou": 6.47,
        "heikin": 3.91,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 3.978
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 110,
        "ouatsu": 82.397,
        "saikou": 3.15,
        "heikin": 2.63,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 3.811
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 110,
        "ouatsu": 83.277,
        "saikou": 8,
        "heikin": 2.95,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 3.658
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 110,
        "ouatsu": 83.277,
        "saikou": 2.7,
        "heikin": 2.02,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 3.441
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 110,
        "ouatsu": 83.277,
        "saikou": 6.65,
        "heikin": 2.38,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 3.223
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 110,
        "ouatsu": 85.267,
        "saikou": 2.7,
        "heikin": 2.15,
        "boshuAvg30d": 138.5,
        "heikinAvg30d": 3.004
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 109,
        "ouatsu": 85.267,
        "saikou": 9.5,
        "heikin": 2.81,
        "boshuAvg30d": 137.5,
        "heikinAvg30d": 3.256
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 109,
        "ouatsu": 85.267,
        "saikou": 9.5,
        "heikin": 3.76,
        "boshuAvg30d": 137.5,
        "heikinAvg30d": 3.039
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 107,
        "ouatsu": 85.267,
        "saikou": 7.59,
        "heikin": 2.66,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 3.049
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 107,
        "ouatsu": 85.267,
        "saikou": 7.59,
        "heikin": 2.66,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 2.859
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 107,
        "ouatsu": 71.658,
        "saikou": 2.29,
        "heikin": 1.8,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 2.734
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 107,
        "ouatsu": 85.267,
        "saikou": 2.29,
        "heikin": 1.95,
        "boshuAvg30d": 135.5,
        "heikinAvg30d": 2.338
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 106,
        "ouatsu": 85.267,
        "saikou": 9.5,
        "heikin": 3.35,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.332
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 106,
        "ouatsu": 85.267,
        "saikou": 2.29,
        "heikin": 1.92,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 1.885
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 2.49,
        "heikin": 0.94,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.665
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 2.49,
        "heikin": 0.83,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.644
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 3.35,
        "heikin": 0.83,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.587
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 3.35,
        "heikin": 0.83,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.551
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 2.49,
        "heikin": 0.91,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.556
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 2.49,
        "heikin": 0.96,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.611
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 4.95,
        "heikin": 0.87,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.68
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 186.8,
        "saikou": 4.95,
        "heikin": 0.77,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.709
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 4.7,
        "heikin": 0.86,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.703
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 4.95,
        "heikin": 0.87,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.725
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 2.49,
        "heikin": 0.79,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.739
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 196.443,
        "saikou": 4.95,
        "heikin": 0.83,
        "boshuAvg30d": 40.4,
        "heikinAvg30d": 0.714
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 165.443,
        "saikou": 4.95,
        "heikin": 0.89,
        "boshuAvg30d": 42.9,
        "heikinAvg30d": 0.843
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 165.443,
        "saikou": 4.95,
        "heikin": 0.89,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 0.791
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 165.443,
        "saikou": 4.95,
        "heikin": 0.89,
        "boshuAvg30d": 44.4,
        "heikinAvg30d": 0.791
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 165.443,
        "saikou": 4.95,
        "heikin": 0.89,
        "boshuAvg30d": 45.4,
        "heikinAvg30d": 0.818
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 165.443,
        "saikou": 3.35,
        "heikin": 0.87,
        "boshuAvg30d": 45.4,
        "heikinAvg30d": 0.819
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 152.443,
        "saikou": 2.49,
        "heikin": 0.79,
        "boshuAvg30d": 45.4,
        "heikinAvg30d": 0.765
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 165.443,
        "saikou": 4.95,
        "heikin": 0.89,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 0.91
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 165.443,
        "saikou": 4.95,
        "heikin": 0.89,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 0.91
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 99.943,
        "saikou": 3.35,
        "heikin": 1.14,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 0.952
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 99.943,
        "saikou": 4.99,
        "heikin": 1.4,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.92
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 152.443,
        "saikou": 4.99,
        "heikin": 1.02,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.942
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 152.443,
        "saikou": 4.99,
        "heikin": 1.02,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.94
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 152.443,
        "saikou": 4.99,
        "heikin": 1.02,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 0.958
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 152.443,
        "saikou": 4.99,
        "heikin": 0.97,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 0.956
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 152.443,
        "saikou": 4.99,
        "heikin": 1.02,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 0.952
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 152.443,
        "saikou": 4.99,
        "heikin": 1.02,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 0.904
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 152.443,
        "saikou": 4.85,
        "heikin": 0.94,
        "boshuAvg30d": 47.4,
        "heikinAvg30d": 0.929
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 166.443,
        "saikou": 3.99,
        "heikin": 0.93,
        "boshuAvg30d": 46.9,
        "heikinAvg30d": 0.88
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 152.443,
        "saikou": 6.87,
        "heikin": 1.16,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 0.978
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 152.443,
        "saikou": 2.7,
        "heikin": 0.66,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 0.958
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 152.443,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 1.094
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 152.443,
        "saikou": 4.95,
        "heikin": 0.69,
        "boshuAvg30d": 43.4,
        "heikinAvg30d": 1.12
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 152.443,
        "saikou": 6.87,
        "heikin": 1.16,
        "boshuAvg30d": 42.9,
        "heikinAvg30d": 1.146
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 152.443,
        "saikou": 6.87,
        "heikin": 1.16,
        "boshuAvg30d": 42.4,
        "heikinAvg30d": 1.159
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 152.443,
        "saikou": 4.99,
        "heikin": 1.02,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 1.179
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 152.443,
        "saikou": 4.99,
        "heikin": 1.02,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 1.157
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 152.443,
        "saikou": 3.99,
        "heikin": 0.92,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 1.171
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 152.443,
        "saikou": 4.95,
        "heikin": 0.93,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 1.201
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 152.443,
        "saikou": 4.95,
        "heikin": 0.81,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 1.194
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 4.95,
        "heikin": 0.92,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 1.178
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 2.29,
        "heikin": 0.99,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.853
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 215.343,
        "saikou": 4.5,
        "heikin": 1.05,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.789
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 215.343,
        "saikou": 2.29,
        "heikin": 1.01,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.748
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 2.29,
        "heikin": 0.99,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.682
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 4.3,
        "heikin": 1.04,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 0.745
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.99,
        "heikin": 0.91,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.726
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 88.919,
        "saikou": 3.62,
        "heikin": 1.82,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.758
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 179.023,
        "saikou": 9.86,
        "heikin": 5.53,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.244
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 176.844,
        "saikou": 9.41,
        "heikin": 5.16,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.942
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 166.775,
        "saikou": 9.66,
        "heikin": 5.39,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.878
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 151.453,
        "saikou": 6.26,
        "heikin": 3.33,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 4.908
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 153.451,
        "saikou": 6.55,
        "heikin": 3.48,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 5.087
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 145.966,
        "saikou": 6.69,
        "heikin": 3.18,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.359
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 119.138,
        "saikou": 6.93,
        "heikin": 2.32,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.839
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 145.903,
        "saikou": 7,
        "heikin": 3.4,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 5.935
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 243.946,
        "saikou": 7.13,
        "heikin": 4.79,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 6.239
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 246.866,
        "saikou": 7.35,
        "heikin": 4.97,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 6.427
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 144.566,
        "saikou": 7.54,
        "heikin": 3.61,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 6.341
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 122.666,
        "saikou": 7.93,
        "heikin": 2.74,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 6.228
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 140.69,
        "saikou": 8.52,
        "heikin": 4.06,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 6.277
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 140.69,
        "saikou": 8.5,
        "heikin": 3.96,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 5.501
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 140.69,
        "saikou": 8.18,
        "heikin": 3.82,
        "boshuAvg30d": 174.9,
        "heikinAvg30d": 4.868
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 170.69,
        "saikou": 7.93,
        "heikin": 4.08,
        "boshuAvg30d": 174.9,
        "heikinAvg30d": 4.548
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 170.69,
        "saikou": 7.68,
        "heikin": 3.96,
        "boshuAvg30d": 174.9,
        "heikinAvg30d": 4.274
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 170.686,
        "saikou": 10,
        "heikin": 5.96,
        "boshuAvg30d": 178.3,
        "heikinAvg30d": 4.064
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 176.635,
        "saikou": 9.5,
        "heikin": 5.49,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 3.793
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 163.482,
        "saikou": 9.06,
        "heikin": 5.49,
        "boshuAvg30d": 179.9,
        "heikinAvg30d": 3.658
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 74.69,
        "saikou": 7,
        "heikin": 4.02,
        "boshuAvg30d": 180.9,
        "heikinAvg30d": 3.73
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 69.383,
        "saikou": 7,
        "heikin": 4.24,
        "boshuAvg30d": 180.9,
        "heikinAvg30d": 3.44
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 101.361,
        "saikou": 7,
        "heikin": 3.7,
        "boshuAvg30d": 180.9,
        "heikinAvg30d": 3.364
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 69.759,
        "saikou": 6.79,
        "heikin": 2.73,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 3.583
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 71.755,
        "saikou": 6.58,
        "heikin": 2.71,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 3.646
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 48.498,
        "saikou": 5.2,
        "heikin": 3.38,
        "boshuAvg30d": 179.4,
        "heikinAvg30d": 3.914
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 103.93,
        "saikou": 5,
        "heikin": 3.35,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 4.512
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 164.774,
        "saikou": 10,
        "heikin": 6.04,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 4.585
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 172.676,
        "saikou": 10,
        "heikin": 6.38,
        "boshuAvg30d": 176.9,
        "heikinAvg30d": 5.165
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 146.676,
        "saikou": 10,
        "heikin": 5.46,
        "boshuAvg30d": 173.4,
        "heikinAvg30d": 5.652
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 213.678,
        "saikou": 10,
        "heikin": 7.33,
        "boshuAvg30d": 173.4,
        "heikinAvg30d": 5.908
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 229.449,
        "saikou": 10,
        "heikin": 7.46,
        "boshuAvg30d": 173.4,
        "heikinAvg30d": 6.517
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 199.701,
        "saikou": 10,
        "heikin": 7.72,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 6.925
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 197.777,
        "saikou": 10,
        "heikin": 8.07,
        "boshuAvg30d": 172.4,
        "heikinAvg30d": 7.019
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 175.216,
        "saikou": 10,
        "heikin": 7.67,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 7.171
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 159.332,
        "saikou": 10,
        "heikin": 7.71,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 7.213
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 163.254,
        "saikou": 10,
        "heikin": 7.66,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 7.046
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 163.148,
        "saikou": 10,
        "heikin": 8.03,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 6.683
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 187.593,
        "saikou": 9.43,
        "heikin": 7.21,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 6.52
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 115.728,
        "saikou": 8.71,
        "heikin": 4.19,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 6.623
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 118.354,
        "saikou": 9.83,
        "heikin": 4.59,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 6.528
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 123.272,
        "saikou": 9.56,
        "heikin": 4.47,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 6.55
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 92.808,
        "saikou": 8.21,
        "heikin": 2.84,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 6.18
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 115.728,
        "saikou": 8.46,
        "heikin": 4.05,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 6.251
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 123.378,
        "saikou": 7.74,
        "heikin": 3.69,
        "boshuAvg30d": 171.4,
        "heikinAvg30d": 6.159
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 113.73,
        "saikou": 7.33,
        "heikin": 3.65,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.179
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 141.878,
        "saikou": 6.45,
        "heikin": 3.41,
        "boshuAvg30d": 170.4,
        "heikinAvg30d": 5.399
      }
    ]
  }
};
