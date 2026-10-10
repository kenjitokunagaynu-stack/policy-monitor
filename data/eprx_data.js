// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/10〜2026/10/09）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-10",
  "fetchedAt": "2026-10-10",
  "avgWindowLabel": "過去30日平均（2026/09/10〜2026/10/09）",
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
      "boshu": 1086,
      "ouatsu": 1518.158,
      "saikou": 9.03,
      "heikin": 2.42,
      "boshuAvg30d": 1197.4,
      "heikinAvg30d": 2.683
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1086,
      "ouatsu": 1558.24,
      "saikou": 9.8,
      "heikin": 2.71,
      "boshuAvg30d": 1197.4,
      "heikinAvg30d": 2.55
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1086,
      "ouatsu": 1532.413,
      "saikou": 8.47,
      "heikin": 2.69,
      "boshuAvg30d": 1197.4,
      "heikinAvg30d": 2.586
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1086,
      "ouatsu": 1597.533,
      "saikou": 8.43,
      "heikin": 2.7,
      "boshuAvg30d": 1197.4,
      "heikinAvg30d": 2.559
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1083,
      "ouatsu": 1526.326,
      "saikou": 8.35,
      "heikin": 2.77,
      "boshuAvg30d": 1193.0,
      "heikinAvg30d": 2.541
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1082,
      "ouatsu": 1512.228,
      "saikou": 10,
      "heikin": 3.5,
      "boshuAvg30d": 1192.0,
      "heikinAvg30d": 2.631
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1079,
      "ouatsu": 1647.087,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1208.3,
      "heikinAvg30d": 2.742
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1081,
      "ouatsu": 1623.247,
      "saikou": 9.9,
      "heikin": 3.26,
      "boshuAvg30d": 1209.6,
      "heikinAvg30d": 2.906
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1083,
      "ouatsu": 1622.867,
      "saikou": 8.16,
      "heikin": 2.85,
      "boshuAvg30d": 1212.3,
      "heikinAvg30d": 2.993
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1084,
      "ouatsu": 1612.652,
      "saikou": 8.31,
      "heikin": 3.27,
      "boshuAvg30d": 1212.6,
      "heikinAvg30d": 3.089
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1084,
      "ouatsu": 1706.785,
      "saikou": 10,
      "heikin": 4.22,
      "boshuAvg30d": 1212.6,
      "heikinAvg30d": 3.165
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1084,
      "ouatsu": 1647.498,
      "saikou": 10,
      "heikin": 3.88,
      "boshuAvg30d": 1212.6,
      "heikinAvg30d": 3.213
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1144,
      "ouatsu": 1660.137,
      "saikou": 9.91,
      "heikin": 3.82,
      "boshuAvg30d": 1276.8,
      "heikinAvg30d": 3.312
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1167,
      "ouatsu": 1724.666,
      "saikou": 10,
      "heikin": 3.5,
      "boshuAvg30d": 1298.4,
      "heikinAvg30d": 3.128
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1188,
      "ouatsu": 1596.993,
      "saikou": 10,
      "heikin": 2.84,
      "boshuAvg30d": 1320.8,
      "heikinAvg30d": 2.891
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1205,
      "ouatsu": 1570.528,
      "saikou": 10,
      "heikin": 3.07,
      "boshuAvg30d": 1338.5,
      "heikinAvg30d": 2.77
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1205,
      "ouatsu": 1625.827,
      "saikou": 10,
      "heikin": 2.75,
      "boshuAvg30d": 1339.2,
      "heikinAvg30d": 2.989
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1205,
      "ouatsu": 1576.848,
      "saikou": 10,
      "heikin": 2.74,
      "boshuAvg30d": 1339.2,
      "heikinAvg30d": 3.06
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1137,
      "ouatsu": 1624.512,
      "saikou": 10,
      "heikin": 2.65,
      "boshuAvg30d": 1315.1,
      "heikinAvg30d": 3.237
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1140,
      "ouatsu": 1569.211,
      "saikou": 10,
      "heikin": 2.79,
      "boshuAvg30d": 1318.8,
      "heikinAvg30d": 3.255
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1145,
      "ouatsu": 1592.973,
      "saikou": 10,
      "heikin": 2.96,
      "boshuAvg30d": 1325.9,
      "heikinAvg30d": 3.3
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1145,
      "ouatsu": 1637.09,
      "saikou": 10,
      "heikin": 2.7,
      "boshuAvg30d": 1325.9,
      "heikinAvg30d": 3.247
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1142,
      "ouatsu": 1604.331,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1322.9,
      "heikinAvg30d": 3.185
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1141,
      "ouatsu": 1678.992,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1321.9,
      "heikinAvg30d": 3.093
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1121,
      "ouatsu": 1755.147,
      "saikou": 10,
      "heikin": 2.42,
      "boshuAvg30d": 1308.1,
      "heikinAvg30d": 3.017
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1121,
      "ouatsu": 1719.335,
      "saikou": 10,
      "heikin": 2.47,
      "boshuAvg30d": 1308.1,
      "heikinAvg30d": 3.028
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1121,
      "ouatsu": 1831.992,
      "saikou": 10,
      "heikin": 2.57,
      "boshuAvg30d": 1305.1,
      "heikinAvg30d": 3.158
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1119,
      "ouatsu": 1800.269,
      "saikou": 10,
      "heikin": 2.51,
      "boshuAvg30d": 1300.7,
      "heikinAvg30d": 3.192
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1116,
      "ouatsu": 1705.453,
      "saikou": 10,
      "heikin": 2.57,
      "boshuAvg30d": 1296.3,
      "heikinAvg30d": 3.195
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1110,
      "ouatsu": 1573.629,
      "saikou": 10,
      "heikin": 2.69,
      "boshuAvg30d": 1289.6,
      "heikinAvg30d": 3.27
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1176,
      "ouatsu": 1557.784,
      "saikou": 10,
      "heikin": 1.79,
      "boshuAvg30d": 1317.7,
      "heikinAvg30d": 3.253
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1176,
      "ouatsu": 1462.698,
      "saikou": 10,
      "heikin": 2.31,
      "boshuAvg30d": 1317.7,
      "heikinAvg30d": 3.437
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1177,
      "ouatsu": 1646.664,
      "saikou": 10,
      "heikin": 3.65,
      "boshuAvg30d": 1318.0,
      "heikinAvg30d": 3.67
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1176,
      "ouatsu": 1557.342,
      "saikou": 10,
      "heikin": 3.95,
      "boshuAvg30d": 1316.3,
      "heikinAvg30d": 3.945
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1174,
      "ouatsu": 1567.896,
      "saikou": 10,
      "heikin": 4.09,
      "boshuAvg30d": 1308.7,
      "heikinAvg30d": 4.03
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1169,
      "ouatsu": 1546.066,
      "saikou": 10,
      "heikin": 4.28,
      "boshuAvg30d": 1304.1,
      "heikinAvg30d": 4.076
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1164,
      "ouatsu": 1527.524,
      "saikou": 10,
      "heikin": 3.91,
      "boshuAvg30d": 1297.0,
      "heikinAvg30d": 4.095
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1164,
      "ouatsu": 1511.183,
      "saikou": 10,
      "heikin": 3.88,
      "boshuAvg30d": 1297.0,
      "heikinAvg30d": 4.01
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1164,
      "ouatsu": 1837.425,
      "saikou": 10,
      "heikin": 3.95,
      "boshuAvg30d": 1297.3,
      "heikinAvg30d": 3.902
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1163,
      "ouatsu": 1868.934,
      "saikou": 10,
      "heikin": 3.81,
      "boshuAvg30d": 1296.3,
      "heikinAvg30d": 3.743
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1155,
      "ouatsu": 1896.692,
      "saikou": 10,
      "heikin": 3.75,
      "boshuAvg30d": 1290.4,
      "heikinAvg30d": 3.646
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1155,
      "ouatsu": 1888.054,
      "saikou": 10,
      "heikin": 3.83,
      "boshuAvg30d": 1287.6,
      "heikinAvg30d": 3.554
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1065,
      "ouatsu": 1909.038,
      "saikou": 10,
      "heikin": 3.93,
      "boshuAvg30d": 1209.8,
      "heikinAvg30d": 3.396
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1068,
      "ouatsu": 1980.746,
      "saikou": 10,
      "heikin": 3.65,
      "boshuAvg30d": 1212.8,
      "heikinAvg30d": 3.532
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1069,
      "ouatsu": 1834.924,
      "saikou": 10,
      "heikin": 3.46,
      "boshuAvg30d": 1214.2,
      "heikinAvg30d": 3.387
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1064,
      "ouatsu": 1872.542,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1207.8,
      "heikinAvg30d": 3.259
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1055,
      "ouatsu": 1707.938,
      "saikou": 10,
      "heikin": 2.44,
      "boshuAvg30d": 1200.2,
      "heikinAvg30d": 3.244
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1048,
      "ouatsu": 1609.967,
      "saikou": 8.51,
      "heikin": 2.72,
      "boshuAvg30d": 1192.5,
      "heikinAvg30d": 2.973
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
        "ouatsu": 202.908,
        "saikou": 9.03,
        "heikin": 4.37,
        "boshuAvg30d": 59.2,
        "heikinAvg30d": 1.291
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 206.678,
        "saikou": 9.8,
        "heikin": 3.64,
        "boshuAvg30d": 59.2,
        "heikinAvg30d": 1.064
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 166.958,
        "saikou": 8.47,
        "heikin": 3.66,
        "boshuAvg30d": 59.2,
        "heikinAvg30d": 1.145
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 198.058,
        "saikou": 8.43,
        "heikin": 3.97,
        "boshuAvg30d": 59.2,
        "heikinAvg30d": 1.04
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 168.908,
        "saikou": 8.35,
        "heikin": 4.12,
        "boshuAvg30d": 59.2,
        "heikinAvg30d": 1.302
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 150.518,
        "saikou": 10,
        "heikin": 8.38,
        "boshuAvg30d": 59.2,
        "heikinAvg30d": 1.405
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 175.858,
        "saikou": 10,
        "heikin": 7.65,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.305
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 127.958,
        "saikou": 9.9,
        "heikin": 7.5,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.138
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 127.918,
        "saikou": 4.89,
        "heikin": 3.91,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.297
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 127.958,
        "saikou": 7.89,
        "heikin": 6.18,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.212
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 172.468,
        "saikou": 10,
        "heikin": 9.04,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.243
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 127.958,
        "saikou": 10,
        "heikin": 7.7,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.455
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 217.208,
        "saikou": 9.91,
        "heikin": 4.82,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.781
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 217.208,
        "saikou": 9.91,
        "heikin": 4.34,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.688
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 139.908,
        "saikou": 7.2,
        "heikin": 2.4,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.426
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 174.268,
        "saikou": 9.91,
        "heikin": 2.59,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 1.202
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 161.958,
        "saikou": 9.69,
        "heikin": 1.96,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 0.905
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 196.768,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 0.971
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 163.908,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 0.908
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 164.758,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 0.909
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 163.908,
        "saikou": 9.8,
        "heikin": 2.43,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 1.069
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 198.758,
        "saikou": 1.01,
        "heikin": 0.95,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 0.993
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 163.908,
        "saikou": 9.8,
        "heikin": 2.39,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 0.974
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 159.968,
        "saikou": 9.8,
        "heikin": 2.44,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 1.012
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 204.54,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 0.998
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 127.958,
        "saikou": 6.34,
        "heikin": 2.3,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.051
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 206.508,
        "saikou": 7.89,
        "heikin": 1.92,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.183
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 161.958,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.052
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 148.958,
        "saikou": 9.91,
        "heikin": 3.57,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.216
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 159.958,
        "saikou": 9.91,
        "heikin": 2.69,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.412
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 168.908,
        "saikou": 5.94,
        "heikin": 2.31,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 1.077
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 144.108,
        "saikou": 4.09,
        "heikin": 1.7,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 1.877
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 174.268,
        "saikou": 10,
        "heikin": 8.16,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 2.765
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 125.968,
        "saikou": 10,
        "heikin": 8.73,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 3.094
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 134.268,
        "saikou": 10,
        "heikin": 7.44,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 3.213
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 87.958,
        "saikou": 10,
        "heikin": 9.77,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 3.184
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 138.208,
        "saikou": 10,
        "heikin": 7.59,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 2.94
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 143.508,
        "saikou": 10,
        "heikin": 7.97,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 3.008
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 127.94,
        "saikou": 10,
        "heikin": 8.56,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 2.404
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 169.14,
        "saikou": 10,
        "heikin": 7.36,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 2.334
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 127.94,
        "saikou": 10,
        "heikin": 8.16,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 2.015
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 145.95,
        "saikou": 10,
        "heikin": 8.37,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 1.721
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 127.94,
        "saikou": 10,
        "heikin": 9.42,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 1.586
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 127.94,
        "saikou": 10,
        "heikin": 7.95,
        "boshuAvg30d": 59.2,
        "heikinAvg30d": 2.074
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 176.24,
        "saikou": 10,
        "heikin": 6.97,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.721
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 157.94,
        "saikou": 10,
        "heikin": 7.48,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.735
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 82.94,
        "saikou": 10,
        "heikin": 8.67,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.661
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 53.94,
        "saikou": 8.51,
        "heikin": 6.96,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.612
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 27.066,
        "saikou": 4.99,
        "heikin": 4.84,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 7.148
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 27.066,
        "saikou": 5,
        "heikin": 4.94,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 7.428
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 46.944,
        "saikou": 5.24,
        "heikin": 5.09,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 7.512
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 48.904,
        "saikou": 5,
        "heikin": 4.99,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 7.587
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 48.904,
        "saikou": 5,
        "heikin": 4.99,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 7.639
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 48.904,
        "saikou": 5.5,
        "heikin": 5.38,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 7.688
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 73.904,
        "saikou": 4.99,
        "heikin": 4.67,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 7.692
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 75.404,
        "saikou": 5,
        "heikin": 4.72,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 7.629
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 77.403,
        "saikou": 4.99,
        "heikin": 4.68,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 7.608
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 77.403,
        "saikou": 5.5,
        "heikin": 4.93,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 7.574
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 77.403,
        "saikou": 9,
        "heikin": 5.08,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 7.655
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 77.403,
        "saikou": 7,
        "heikin": 5.78,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 7.687
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 101.403,
        "saikou": 9,
        "heikin": 5.93,
        "boshuAvg30d": 165.3,
        "heikinAvg30d": 7.786
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 75.939,
        "saikou": 7.12,
        "heikin": 6.7,
        "boshuAvg30d": 170.3,
        "heikinAvg30d": 7.914
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 101.439,
        "saikou": 10,
        "heikin": 8.1,
        "boshuAvg30d": 175.4,
        "heikinAvg30d": 8.056
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 99.939,
        "saikou": 10,
        "heikin": 7.95,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 8.208
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 101.439,
        "saikou": 10,
        "heikin": 8.24,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 8.484
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 87.939,
        "saikou": 10,
        "heikin": 7.99,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 8.391
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 113.989,
        "saikou": 10,
        "heikin": 8.38,
        "boshuAvg30d": 142.1,
        "heikinAvg30d": 8.214
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 104.669,
        "saikou": 10,
        "heikin": 8.57,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 8.329
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 100.714,
        "saikou": 10,
        "heikin": 8.82,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 8.317
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 100.714,
        "saikou": 10,
        "heikin": 8.84,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 8.381
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 104.669,
        "saikou": 10,
        "heikin": 8.76,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 8.388
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 102.769,
        "saikou": 10,
        "heikin": 8.72,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 8.353
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 109.44,
        "saikou": 10,
        "heikin": 8.66,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 8.415
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 111.441,
        "saikou": 10,
        "heikin": 8.65,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 8.332
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 111.441,
        "saikou": 10,
        "heikin": 8.04,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 8.071
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 113.341,
        "saikou": 10,
        "heikin": 7.85,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 7.817
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 103.339,
        "saikou": 10,
        "heikin": 7.19,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 7.85
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 103.339,
        "saikou": 10,
        "heikin": 6.37,
        "boshuAvg30d": 135.9,
        "heikinAvg30d": 7.197
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 79.339,
        "saikou": 10,
        "heikin": 5.77,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 7.512
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 79.339,
        "saikou": 10,
        "heikin": 5.22,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 7.01
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 79.339,
        "saikou": 6.41,
        "heikin": 4.53,
        "boshuAvg30d": 175.7,
        "heikinAvg30d": 7.028
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 65.803,
        "saikou": 4.49,
        "heikin": 4.23,
        "boshuAvg30d": 175.0,
        "heikinAvg30d": 6.95
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 65.403,
        "saikou": 5,
        "heikin": 4.19,
        "boshuAvg30d": 173.3,
        "heikinAvg30d": 6.858
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 61.938,
        "saikou": 4.9,
        "heikin": 4.2,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 6.563
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 65.403,
        "saikou": 4,
        "heikin": 3.91,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.714
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 51.883,
        "saikou": 4.49,
        "heikin": 4.14,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.457
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 89.383,
        "saikou": 6.03,
        "heikin": 4.39,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.608
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 90.733,
        "saikou": 5.84,
        "heikin": 4.28,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 6.724
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 84.884,
        "saikou": 6.45,
        "heikin": 4.73,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 6.711
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 83.534,
        "saikou": 6.45,
        "heikin": 4.68,
        "boshuAvg30d": 169.6,
        "heikinAvg30d": 6.781
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 89.419,
        "saikou": 6.68,
        "heikin": 5.2,
        "boshuAvg30d": 94.2,
        "heikinAvg30d": 6.949
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 101.403,
        "saikou": 5.84,
        "heikin": 4.3,
        "boshuAvg30d": 94.2,
        "heikinAvg30d": 7.053
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 89.403,
        "saikou": 5.58,
        "heikin": 4.19,
        "boshuAvg30d": 94.2,
        "heikinAvg30d": 7.121
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 73.553,
        "saikou": 5.58,
        "heikin": 4.12,
        "boshuAvg30d": 93.2,
        "heikinAvg30d": 7.081
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 76.833,
        "saikou": 5.79,
        "heikin": 4.31,
        "boshuAvg30d": 91.9,
        "heikinAvg30d": 7.237
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 75.333,
        "saikou": 6.1,
        "heikin": 4.36,
        "boshuAvg30d": 91.2,
        "heikinAvg30d": 7.458
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 523.282,
        "saikou": 5.75,
        "heikin": 2.89,
        "boshuAvg30d": 396.1,
        "heikinAvg30d": 3.492
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 476.043,
        "saikou": 6.02,
        "heikin": 3.49,
        "boshuAvg30d": 396.1,
        "heikinAvg30d": 3.443
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 477.993,
        "saikou": 6.1,
        "heikin": 3.48,
        "boshuAvg30d": 396.1,
        "heikinAvg30d": 3.289
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 491.243,
        "saikou": 6.18,
        "heikin": 3.42,
        "boshuAvg30d": 396.1,
        "heikinAvg30d": 3.3
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 512.449,
        "saikou": 6.39,
        "heikin": 3.53,
        "boshuAvg30d": 394.4,
        "heikinAvg30d": 3.247
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 479.271,
        "saikou": 6.17,
        "heikin": 3.94,
        "boshuAvg30d": 394.1,
        "heikinAvg30d": 3.237
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 491.243,
        "saikou": 5.48,
        "heikin": 3.01,
        "boshuAvg30d": 392.8,
        "heikinAvg30d": 3.262
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 532.876,
        "saikou": 5.48,
        "heikin": 3.3,
        "boshuAvg30d": 394.1,
        "heikinAvg30d": 3.455
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 532.267,
        "saikou": 5.48,
        "heikin": 3.35,
        "boshuAvg30d": 394.8,
        "heikinAvg30d": 3.545
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 522.004,
        "saikou": 5.48,
        "heikin": 3.74,
        "boshuAvg30d": 395.1,
        "heikinAvg30d": 3.645
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 483.078,
        "saikou": 5.48,
        "heikin": 4.12,
        "boshuAvg30d": 395.1,
        "heikinAvg30d": 3.557
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 475.029,
        "saikou": 5.48,
        "heikin": 4.39,
        "boshuAvg30d": 395.1,
        "heikinAvg30d": 3.676
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 365.918,
        "saikou": 6.38,
        "heikin": 4.77,
        "boshuAvg30d": 415.5,
        "heikinAvg30d": 3.884
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 417.795,
        "saikou": 10,
        "heikin": 5.22,
        "boshuAvg30d": 423.5,
        "heikinAvg30d": 4.049
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 400.631,
        "saikou": 10,
        "heikin": 5.03,
        "boshuAvg30d": 428.5,
        "heikinAvg30d": 3.74
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 382.985,
        "saikou": 10,
        "heikin": 4.82,
        "boshuAvg30d": 433.5,
        "heikinAvg30d": 3.599
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 384.951,
        "saikou": 10,
        "heikin": 4.65,
        "boshuAvg30d": 433.5,
        "heikinAvg30d": 3.889
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 384.951,
        "saikou": 10,
        "heikin": 4.8,
        "boshuAvg30d": 433.5,
        "heikinAvg30d": 3.922
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 366.513,
        "saikou": 10,
        "heikin": 5,
        "boshuAvg30d": 430.8,
        "heikinAvg30d": 4.234
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 366.513,
        "saikou": 10,
        "heikin": 5.09,
        "boshuAvg30d": 430.8,
        "heikinAvg30d": 4.314
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 349.434,
        "saikou": 10,
        "heikin": 5.37,
        "boshuAvg30d": 430.8,
        "heikinAvg30d": 4.217
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 349.434,
        "saikou": 10,
        "heikin": 5.36,
        "boshuAvg30d": 429.8,
        "heikinAvg30d": 4.067
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 331.794,
        "saikou": 10,
        "heikin": 5.85,
        "boshuAvg30d": 427.1,
        "heikinAvg30d": 4.029
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 414.38,
        "saikou": 10,
        "heikin": 4.78,
        "boshuAvg30d": 427.1,
        "heikinAvg30d": 3.972
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 427.975,
        "saikou": 10,
        "heikin": 4.45,
        "boshuAvg30d": 425.5,
        "heikinAvg30d": 3.938
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 429.991,
        "saikou": 10,
        "heikin": 4.13,
        "boshuAvg30d": 425.5,
        "heikinAvg30d": 3.874
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 429.991,
        "saikou": 10,
        "heikin": 3.9,
        "boshuAvg30d": 422.5,
        "heikinAvg30d": 4.006
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 429.991,
        "saikou": 10,
        "heikin": 3.95,
        "boshuAvg30d": 422.2,
        "heikinAvg30d": 4.105
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 426.177,
        "saikou": 10,
        "heikin": 3.62,
        "boshuAvg30d": 421.2,
        "heikinAvg30d": 3.993
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 429.971,
        "saikou": 10,
        "heikin": 3.89,
        "boshuAvg30d": 420.9,
        "heikinAvg30d": 3.86
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 299.731,
        "saikou": 4.84,
        "heikin": 1.74,
        "boshuAvg30d": 419.6,
        "heikinAvg30d": 3.894
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 318.169,
        "saikou": 4.84,
        "heikin": 2.45,
        "boshuAvg30d": 419.6,
        "heikinAvg30d": 3.811
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 412.301,
        "saikou": 4.46,
        "heikin": 2.56,
        "boshuAvg30d": 419.6,
        "heikinAvg30d": 4.134
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 448.415,
        "saikou": 4.9,
        "heikin": 2.6,
        "boshuAvg30d": 419.5,
        "heikinAvg30d": 4.35
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 448.395,
        "saikou": 5.47,
        "heikin": 2.93,
        "boshuAvg30d": 415.4,
        "heikinAvg30d": 4.268
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 405.512,
        "saikou": 4.84,
        "heikin": 2.3,
        "boshuAvg30d": 415.0,
        "heikinAvg30d": 4.199
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 450.846,
        "saikou": 3.99,
        "heikin": 2.47,
        "boshuAvg30d": 417.3,
        "heikinAvg30d": 4.381
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 406.862,
        "saikou": 4.42,
        "heikin": 2.17,
        "boshuAvg30d": 417.3,
        "heikinAvg30d": 4.208
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 587.155,
        "saikou": 5.68,
        "heikin": 2.73,
        "boshuAvg30d": 417.6,
        "heikinAvg30d": 4.195
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 578.276,
        "saikou": 5.36,
        "heikin": 2.59,
        "boshuAvg30d": 417.6,
        "heikinAvg30d": 4.071
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 627.92,
        "saikou": 6.12,
        "heikin": 2.57,
        "boshuAvg30d": 415.6,
        "heikinAvg30d": 4.041
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 607.733,
        "saikou": 6.12,
        "heikin": 2.64,
        "boshuAvg30d": 415.6,
        "heikinAvg30d": 3.983
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 623.719,
        "saikou": 6.08,
        "heikin": 2.87,
        "boshuAvg30d": 414.9,
        "heikinAvg30d": 3.877
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 612.965,
        "saikou": 4.88,
        "heikin": 2.51,
        "boshuAvg30d": 414.9,
        "heikinAvg30d": 4.062
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 455.75,
        "saikou": 4.88,
        "heikin": 2.45,
        "boshuAvg30d": 415.3,
        "heikinAvg30d": 3.757
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 555.996,
        "saikou": 4.89,
        "heikin": 2.53,
        "boshuAvg30d": 413.3,
        "heikinAvg30d": 3.899
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 558.005,
        "saikou": 4.96,
        "heikin": 2.61,
        "boshuAvg30d": 411.3,
        "heikinAvg30d": 3.986
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 497.51,
        "saikou": 5.36,
        "heikin": 3.78,
        "boshuAvg30d": 410.3,
        "heikinAvg30d": 3.941
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 121,
        "ouatsu": 184.811,
        "saikou": 3.54,
        "heikin": 1.84,
        "boshuAvg30d": 70.6,
        "heikinAvg30d": 1.952
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 121,
        "ouatsu": 246.852,
        "saikou": 1.89,
        "heikin": 1.14,
        "boshuAvg30d": 70.6,
        "heikinAvg30d": 1.715
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 121,
        "ouatsu": 249.095,
        "saikou": 1.93,
        "heikin": 1.32,
        "boshuAvg30d": 70.6,
        "heikinAvg30d": 1.764
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 121,
        "ouatsu": 252.897,
        "saikou": 1.92,
        "heikin": 1.39,
        "boshuAvg30d": 70.6,
        "heikinAvg30d": 1.834
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 120,
        "ouatsu": 237.059,
        "saikou": 1.93,
        "heikin": 1.28,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 1.74
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 120,
        "ouatsu": 244.868,
        "saikou": 1.92,
        "heikin": 1.33,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 1.765
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 119,
        "ouatsu": 276.563,
        "saikou": 2.2,
        "heikin": 1.37,
        "boshuAvg30d": 69.3,
        "heikinAvg30d": 1.685
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 119,
        "ouatsu": 270.863,
        "saikou": 2.2,
        "heikin": 1.5,
        "boshuAvg30d": 69.3,
        "heikinAvg30d": 1.898
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 120,
        "ouatsu": 255.746,
        "saikou": 2.2,
        "heikin": 1.58,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 1.939
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 120,
        "ouatsu": 255.746,
        "saikou": 2,
        "heikin": 1.56,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 1.826
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 120,
        "ouatsu": 257.736,
        "saikou": 1.95,
        "heikin": 1.55,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 1.937
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 120,
        "ouatsu": 254.308,
        "saikou": 1.95,
        "heikin": 1.54,
        "boshuAvg30d": 69.6,
        "heikinAvg30d": 1.929
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 129,
        "ouatsu": 255.808,
        "saikou": 2.07,
        "heikin": 1.48,
        "boshuAvg30d": 79.3,
        "heikinAvg30d": 2.074
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 133,
        "ouatsu": 255.808,
        "saikou": 2.7,
        "heikin": 1.88,
        "boshuAvg30d": 82.6,
        "heikinAvg30d": 2.133
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 136,
        "ouatsu": 246.608,
        "saikou": 2.34,
        "heikin": 2.03,
        "boshuAvg30d": 85.6,
        "heikinAvg30d": 2.185
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 138,
        "ouatsu": 174.137,
        "saikou": 9.29,
        "heikin": 3.06,
        "boshuAvg30d": 87.6,
        "heikinAvg30d": 2.094
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 138,
        "ouatsu": 174.189,
        "saikou": 7.59,
        "heikin": 2.23,
        "boshuAvg30d": 87.6,
        "heikinAvg30d": 2.329
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 138,
        "ouatsu": 160.584,
        "saikou": 6.48,
        "heikin": 2.08,
        "boshuAvg30d": 87.6,
        "heikinAvg30d": 2.375
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 143,
        "ouatsu": 158.684,
        "saikou": 6.48,
        "heikin": 2.58,
        "boshuAvg30d": 91.9,
        "heikinAvg30d": 2.659
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 143,
        "ouatsu": 155.284,
        "saikou": 6.48,
        "heikin": 2.51,
        "boshuAvg30d": 91.9,
        "heikinAvg30d": 2.678
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 143,
        "ouatsu": 147.378,
        "saikou": 7.48,
        "heikin": 2.79,
        "boshuAvg30d": 92.6,
        "heikinAvg30d": 2.958
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 143,
        "ouatsu": 149.368,
        "saikou": 7.48,
        "heikin": 2.94,
        "boshuAvg30d": 91.9,
        "heikinAvg30d": 3.002
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 142,
        "ouatsu": 155.284,
        "saikou": 7.48,
        "heikin": 2.63,
        "boshuAvg30d": 90.9,
        "heikinAvg30d": 2.915
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 141,
        "ouatsu": 155.284,
        "saikou": 7.48,
        "heikin": 2.62,
        "boshuAvg30d": 89.9,
        "heikinAvg30d": 2.786
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 137,
        "ouatsu": 149.416,
        "saikou": 8.48,
        "heikin": 2.63,
        "boshuAvg30d": 86.6,
        "heikinAvg30d": 2.726
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 137,
        "ouatsu": 160.595,
        "saikou": 8.48,
        "heikin": 2.96,
        "boshuAvg30d": 86.6,
        "heikinAvg30d": 2.754
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 137,
        "ouatsu": 164.484,
        "saikou": 8.48,
        "heikin": 2.96,
        "boshuAvg30d": 86.6,
        "heikinAvg30d": 2.599
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 136,
        "ouatsu": 164.484,
        "saikou": 8.48,
        "heikin": 2.89,
        "boshuAvg30d": 86.3,
        "heikinAvg30d": 2.623
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 136,
        "ouatsu": 164.484,
        "saikou": 9.38,
        "heikin": 2.99,
        "boshuAvg30d": 85.6,
        "heikinAvg30d": 2.822
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 136,
        "ouatsu": 164.484,
        "saikou": 9.38,
        "heikin": 2.99,
        "boshuAvg30d": 85.6,
        "heikinAvg30d": 2.848
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 134,
        "ouatsu": 211.857,
        "saikou": 7.59,
        "heikin": 2.25,
        "boshuAvg30d": 84.3,
        "heikinAvg30d": 2.596
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 134,
        "ouatsu": 232.674,
        "saikou": 7.59,
        "heikin": 2.73,
        "boshuAvg30d": 84.3,
        "heikinAvg30d": 2.566
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 134,
        "ouatsu": 310.63,
        "saikou": 2.73,
        "heikin": 2.56,
        "boshuAvg30d": 84.3,
        "heikinAvg30d": 2.397
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 134,
        "ouatsu": 315.66,
        "saikou": 3,
        "heikin": 2.33,
        "boshuAvg30d": 84.3,
        "heikinAvg30d": 2.649
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 134,
        "ouatsu": 315.66,
        "saikou": 2.73,
        "heikin": 2.16,
        "boshuAvg30d": 84.3,
        "heikinAvg30d": 2.531
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 133,
        "ouatsu": 302.314,
        "saikou": 3.39,
        "heikin": 2.26,
        "boshuAvg30d": 84.0,
        "heikinAvg30d": 2.488
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 131,
        "ouatsu": 294.312,
        "saikou": 2.9,
        "heikin": 2.02,
        "boshuAvg30d": 82.0,
        "heikinAvg30d": 2.266
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 131,
        "ouatsu": 298.759,
        "saikou": 2.54,
        "heikin": 2.21,
        "boshuAvg30d": 82.0,
        "heikinAvg30d": 2.179
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 131,
        "ouatsu": 384.057,
        "saikou": 5.1,
        "heikin": 1.96,
        "boshuAvg30d": 82.0,
        "heikinAvg30d": 2.004
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 131,
        "ouatsu": 405.18,
        "saikou": 2.38,
        "heikin": 1.63,
        "boshuAvg30d": 82.0,
        "heikinAvg30d": 2.112
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 131,
        "ouatsu": 397.274,
        "saikou": 2.32,
        "heikin": 1.73,
        "boshuAvg30d": 82.0,
        "heikinAvg30d": 2.106
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 131,
        "ouatsu": 406.474,
        "saikou": 2.28,
        "heikin": 1.76,
        "boshuAvg30d": 82.0,
        "heikinAvg30d": 2.126
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 132,
        "ouatsu": 410.4,
        "saikou": 2.2,
        "heikin": 1.36,
        "boshuAvg30d": 82.3,
        "heikinAvg30d": 1.966
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 133,
        "ouatsu": 410.4,
        "saikou": 2.16,
        "heikin": 1.71,
        "boshuAvg30d": 83.3,
        "heikinAvg30d": 2.162
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 133,
        "ouatsu": 371.493,
        "saikou": 2.73,
        "heikin": 1.71,
        "boshuAvg30d": 83.3,
        "heikinAvg30d": 2.204
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 132,
        "ouatsu": 337.363,
        "saikou": 3.1,
        "heikin": 1.58,
        "boshuAvg30d": 82.3,
        "heikinAvg30d": 2.139
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 131,
        "ouatsu": 315.472,
        "saikou": 3.02,
        "heikin": 1.36,
        "boshuAvg30d": 81.3,
        "heikinAvg30d": 2.112
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 128,
        "ouatsu": 318.798,
        "saikou": 1.93,
        "heikin": 1.35,
        "boshuAvg30d": 78.3,
        "heikinAvg30d": 2.089
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 20.93,
        "saikou": 1.55,
        "heikin": 0.5,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 0.912
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 1.002
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.7,
        "heikin": 0.61,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 1.0
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.85,
        "heikin": 0.64,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 1.109
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.5,
        "heikin": 0.58,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 1.126
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.5,
        "heikin": 0.58,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 0.944
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.2,
        "heikin": 0.7,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 1.146
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.95,
        "heikin": 0.65,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 1.399
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 1.299
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 1.359
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 1.566
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 1.55
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.9,
        "heikin": 1.9,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 1.71
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 57.928,
        "saikou": 0.89,
        "heikin": 0.71,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 1.621
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 57.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.524
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.484
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 57.928,
        "saikou": 5.5,
        "heikin": 1.29,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 2.025
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 57.928,
        "saikou": 3.15,
        "heikin": 0.56,
        "boshuAvg30d": 61.2,
        "heikinAvg30d": 2.118
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 57.928,
        "saikou": 3.05,
        "heikin": 0.55,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.562
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 57.928,
        "saikou": 4.3,
        "heikin": 0.59,
        "boshuAvg30d": 62.2,
        "heikinAvg30d": 2.467
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 57.928,
        "saikou": 5.55,
        "heikin": 0.74,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 3.417
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 57.928,
        "saikou": 6.96,
        "heikin": 0.82,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.626
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 57.928,
        "saikou": 3.85,
        "heikin": 0.62,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 3.14
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 57.928,
        "saikou": 3.9,
        "heikin": 0.63,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.774
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 82.928,
        "saikou": 4.5,
        "heikin": 0.55,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.25
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.313
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 82.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.449
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 82.928,
        "saikou": 2.75,
        "heikin": 0.76,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.314
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 82.928,
        "saikou": 1.03,
        "heikin": 0.78,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.218
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 82.928,
        "saikou": 1.23,
        "heikin": 0.93,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.94
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.553
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.75,
        "heikin": 5.67,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.966
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.384
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.426
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.292
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 47.928,
        "saikou": 5.53,
        "heikin": 4.72,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 3.025
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.579
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.451
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.645
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.794
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.1,
        "heikin": 2.1,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.077
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.871
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.847
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.986
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.48,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.985
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.35,
        "boshuAvg30d": 60.2,
        "heikinAvg30d": 1.675
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 59.2,
        "heikinAvg30d": 1.546
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 47.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.135
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 95.452,
        "saikou": 1.97,
        "heikin": 1.6,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 1.956
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 108.042,
        "saikou": 1.54,
        "heikin": 1.32,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 1.626
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 94.258,
        "saikou": 1.72,
        "heikin": 1.27,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 1.551
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 107.278,
        "saikou": 1.73,
        "heikin": 1.19,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 1.504
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 59.853,
        "saikou": 1.51,
        "heikin": 1.11,
        "boshuAvg30d": 129.8,
        "heikinAvg30d": 1.474
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 89.514,
        "saikou": 1.73,
        "heikin": 1.38,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 1.6
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 99.341,
        "saikou": 1.97,
        "heikin": 1.6,
        "boshuAvg30d": 129.8,
        "heikinAvg30d": 1.737
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 101.339,
        "saikou": 1.99,
        "heikin": 1.63,
        "boshuAvg30d": 129.8,
        "heikinAvg30d": 1.89
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 101.339,
        "saikou": 1.85,
        "heikin": 1.52,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 1.81
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 101.339,
        "saikou": 1.94,
        "heikin": 1.53,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 1.904
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 144.898,
        "saikou": 1.98,
        "heikin": 1.22,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 1.844
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 144.898,
        "saikou": 1.98,
        "heikin": 1.23,
        "boshuAvg30d": 130.8,
        "heikinAvg30d": 1.699
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 144.898,
        "saikou": 1.94,
        "heikin": 1.06,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 1.837
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 144.898,
        "saikou": 1.94,
        "heikin": 1.03,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 1.762
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 142.9,
        "saikou": 1.97,
        "heikin": 1.19,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 1.883
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 136.963,
        "saikou": 2.2,
        "heikin": 1.38,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 1.915
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 135.054,
        "saikou": 2.2,
        "heikin": 1.38,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 2.138
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 144.898,
        "saikou": 3.95,
        "heikin": 1.82,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 2.388
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 131.138,
        "saikou": 3.5,
        "heikin": 2.39,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.59
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 131.138,
        "saikou": 3.95,
        "heikin": 2.4,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.531
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 127.71,
        "saikou": 5.95,
        "heikin": 2.64,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.824
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 127.71,
        "saikou": 5.95,
        "heikin": 2.64,
        "boshuAvg30d": 153.5,
        "heikinAvg30d": 2.785
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 131.138,
        "saikou": 5.95,
        "heikin": 2.69,
        "boshuAvg30d": 153.2,
        "heikinAvg30d": 2.713
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 131.138,
        "saikou": 3.5,
        "heikin": 2.39,
        "boshuAvg30d": 153.2,
        "heikinAvg30d": 2.449
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 125.271,
        "saikou": 3,
        "heikin": 2.18,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 2.367
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 148.882,
        "saikou": 2.5,
        "heikin": 0.76,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 2.458
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 148.882,
        "saikou": 2.5,
        "heikin": 1.11,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 2.756
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 148.882,
        "saikou": 3,
        "heikin": 1.93,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 2.536
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 148.882,
        "saikou": 3,
        "heikin": 1.86,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 2.514
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 148.882,
        "saikou": 3,
        "heikin": 1.77,
        "boshuAvg30d": 152.9,
        "heikinAvg30d": 2.512
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 195.32,
        "saikou": 3.95,
        "heikin": 1.43,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 2.464
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 154.407,
        "saikou": 3.95,
        "heikin": 1.91,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 2.63
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 172.825,
        "saikou": 2.5,
        "heikin": 1.84,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 2.546
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 105.195,
        "saikou": 2.67,
        "heikin": 2.18,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 2.574
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 103.208,
        "saikou": 2.5,
        "heikin": 2.1,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 2.638
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 103.208,
        "saikou": 3.7,
        "heikin": 2.37,
        "boshuAvg30d": 150.9,
        "heikinAvg30d": 2.652
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 101.248,
        "saikou": 2.24,
        "heikin": 1.94,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 2.4
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 120.862,
        "saikou": 3.7,
        "heikin": 1.66,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 2.449
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 120.953,
        "saikou": 2.28,
        "heikin": 1.61,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 2.512
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 101.339,
        "saikou": 2.14,
        "heikin": 1.71,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 2.459
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 142.913,
        "saikou": 1.99,
        "heikin": 1.3,
        "boshuAvg30d": 146.2,
        "heikinAvg30d": 2.402
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 118.968,
        "saikou": 1.99,
        "heikin": 1.48,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 2.375
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 101.339,
        "saikou": 2,
        "heikin": 1.67,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 2.277
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 168.841,
        "saikou": 2.05,
        "heikin": 1.22,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 2.347
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 168.841,
        "saikou": 2.03,
        "heikin": 1.22,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 2.367
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 166.843,
        "saikou": 1.99,
        "heikin": 1.16,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 2.305
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 168.841,
        "saikou": 1.99,
        "heikin": 1.13,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 1.829
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 101.339,
        "saikou": 1.94,
        "heikin": 1.5,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.974
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 189.152,
        "saikou": 2.29,
        "heikin": 2.03,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.5
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 189.152,
        "saikou": 2.29,
        "heikin": 1.85,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.532
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 190.952,
        "saikou": 2.29,
        "heikin": 1.79,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.614
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 192.942,
        "saikou": 2.29,
        "heikin": 1.79,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.537
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 192.942,
        "saikou": 2.29,
        "heikin": 1.67,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.448
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 192.942,
        "saikou": 2.29,
        "heikin": 2.06,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.606
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 207.812,
        "saikou": 2.38,
        "heikin": 2.2,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.867
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 207.812,
        "saikou": 2.57,
        "heikin": 2.31,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.106
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 207.812,
        "saikou": 2.29,
        "heikin": 1.96,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.223
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 207.812,
        "saikou": 2.36,
        "heikin": 2.07,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.498
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 207.812,
        "saikou": 4.66,
        "heikin": 3.87,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.726
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 207.812,
        "saikou": 2.86,
        "heikin": 2.49,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.805
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 207.812,
        "saikou": 3.8,
        "heikin": 2.93,
        "boshuAvg30d": 141.6,
        "heikinAvg30d": 3.053
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 189.928,
        "saikou": 2.29,
        "heikin": 2.04,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 2.208
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 191.917,
        "saikou": 2.29,
        "heikin": 1.63,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 1.699
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 289.646,
        "saikou": 1.56,
        "heikin": 1.22,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.394
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 289.646,
        "saikou": 1.5,
        "heikin": 0.75,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.549
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 207.118,
        "saikou": 1.6,
        "heikin": 1,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 1.637
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 281.576,
        "saikou": 1.98,
        "heikin": 0.86,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 1.793
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 233.151,
        "saikou": 1.56,
        "heikin": 0.95,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 1.758
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 292.079,
        "saikou": 1.56,
        "heikin": 0.55,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 2.022
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 260.345,
        "saikou": 2.29,
        "heikin": 0.8,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 1.925
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 260.345,
        "saikou": 2.29,
        "heikin": 0.78,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 1.893
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 260.345,
        "saikou": 2.29,
        "heikin": 0.78,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 1.719
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 260.345,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.592
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 260.345,
        "saikou": 1.56,
        "heikin": 0.44,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.637
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 283.128,
        "saikou": 2.29,
        "heikin": 1.17,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.888
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 292.079,
        "saikou": 2.29,
        "heikin": 1.13,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 1.742
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 292.079,
        "saikou": 1.56,
        "heikin": 0.79,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 1.73
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 153.461,
        "saikou": 2.29,
        "heikin": 1.41,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.835
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 292.079,
        "saikou": 1.56,
        "heikin": 0.7,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.184
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 239.967,
        "saikou": 2.29,
        "heikin": 1.57,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.532
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 191.917,
        "saikou": 2.38,
        "heikin": 2.2,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.784
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 191.917,
        "saikou": 5.19,
        "heikin": 4.28,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.361
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 191.917,
        "saikou": 6.52,
        "heikin": 4.81,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.792
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 191.917,
        "saikou": 7.12,
        "heikin": 5.81,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.929
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 189.927,
        "saikou": 6.67,
        "heikin": 5.38,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 4.232
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 189.927,
        "saikou": 6.35,
        "heikin": 5.16,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 4.253
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 207.811,
        "saikou": 6.4,
        "heikin": 5.17,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.942
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 209.801,
        "saikou": 6.26,
        "heikin": 4.49,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 3.479
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 209.801,
        "saikou": 6.35,
        "heikin": 5.16,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.44
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 209.801,
        "saikou": 6.35,
        "heikin": 5.18,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 3.123
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 209.801,
        "saikou": 6.26,
        "heikin": 5.13,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.321
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 209.801,
        "saikou": 5.66,
        "heikin": 4.66,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.246
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 209.801,
        "saikou": 4.66,
        "heikin": 3.87,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 3.16
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 209.801,
        "saikou": 2.69,
        "heikin": 2.37,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.718
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 209.801,
        "saikou": 2.69,
        "heikin": 2.24,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.708
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 208.001,
        "saikou": 2.29,
        "heikin": 1.17,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 1.781
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.11,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.796
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.11,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.781
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 1.5,
        "heikin": 0.76,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.767
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 1.08,
        "heikin": 0.58,
        "boshuAvg30d": 40.7,
        "heikinAvg30d": 0.759
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 1.08,
        "heikin": 0.58,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.754
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 95.543,
        "saikou": 1.08,
        "heikin": 0.58,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.765
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 92.543,
        "saikou": 1.08,
        "heikin": 0.6,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.8
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 81,
        "saikou": 1.08,
        "heikin": 0.6,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.84
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 92.543,
        "saikou": 1.7,
        "heikin": 1.13,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.859
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 92.543,
        "saikou": 1.7,
        "heikin": 1.13,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.861
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 92.543,
        "saikou": 1.7,
        "heikin": 1.09,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.833
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 92.543,
        "saikou": 1.08,
        "heikin": 0.6,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.804
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.14,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.874
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 96.543,
        "saikou": 1.7,
        "heikin": 1.04,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.898
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 148.043,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.936
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 148.043,
        "saikou": 1.55,
        "heikin": 0.79,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 0.879
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 160.043,
        "saikou": 1.5,
        "heikin": 0.76,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 0.871
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 159.043,
        "saikou": 1.59,
        "heikin": 1.01,
        "boshuAvg30d": 45.3,
        "heikinAvg30d": 0.931
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 137.043,
        "saikou": 1.7,
        "heikin": 1.47,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 1.06
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 137.043,
        "saikou": 1.7,
        "heikin": 1.16,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 1.03
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 137.043,
        "saikou": 1.7,
        "heikin": 1.47,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.05
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 137.043,
        "saikou": 1.7,
        "heikin": 1.47,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.005
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 137.043,
        "saikou": 1.7,
        "heikin": 1.47,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.064
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 137.043,
        "saikou": 1.7,
        "heikin": 1.47,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.083
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 137.043,
        "saikou": 1.7,
        "heikin": 1.47,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.188
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 137.043,
        "saikou": 1.7,
        "heikin": 1.47,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.164
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 137.043,
        "saikou": 1.7,
        "heikin": 1.19,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.099
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 137.043,
        "saikou": 1.7,
        "heikin": 1.16,
        "boshuAvg30d": 48.3,
        "heikinAvg30d": 1.107
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 119.043,
        "saikou": 1.7,
        "heikin": 1.31,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.095
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 117.043,
        "saikou": 1.7,
        "heikin": 1.47,
        "boshuAvg30d": 47.3,
        "heikinAvg30d": 1.023
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 137.043,
        "saikou": 1.7,
        "heikin": 1.33,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.074
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 99.543,
        "saikou": 1.6,
        "heikin": 1.41,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.103
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 48.543,
        "saikou": 1.6,
        "heikin": 1.42,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.119
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 47.543,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 44.7,
        "heikinAvg30d": 1.116
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 47.543,
        "saikou": 2.4,
        "heikin": 1.64,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.256
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 47.543,
        "saikou": 7.99,
        "heikin": 3.22,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.133
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.95,
        "heikin": 1.62,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.179
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 7.99,
        "heikin": 3.36,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.225
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.183
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.206
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 2.2,
        "heikin": 1.63,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.182
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 47.543,
        "saikou": 1.6,
        "heikin": 1.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.166
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 81.543,
        "saikou": 1.6,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.797
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 81.543,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.763
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.6,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.793
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 95.543,
        "saikou": 1.08,
        "heikin": 0.93,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.795
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 95.543,
        "saikou": 1.7,
        "heikin": 1.22,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.812
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 100.543,
        "saikou": 1.7,
        "heikin": 1.1,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.854
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 179.014,
        "saikou": 7.66,
        "heikin": 2.38,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 3.994
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 185.936,
        "saikou": 7.57,
        "heikin": 4.26,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 3.344
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 187.742,
        "saikou": 7.47,
        "heikin": 4.3,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 3.029
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 187.74,
        "saikou": 7.51,
        "heikin": 4.92,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 2.822
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 187.74,
        "saikou": 7.51,
        "heikin": 4.73,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 2.751
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 187.74,
        "saikou": 7.78,
        "heikin": 4.92,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 3.08
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 206.895,
        "saikou": 8.16,
        "heikin": 4.97,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 3.388
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 203.067,
        "saikou": 8.18,
        "heikin": 5.03,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 3.78
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 204.911,
        "saikou": 8.16,
        "heikin": 4.58,
        "boshuAvg30d": 166.2,
        "heikinAvg30d": 4.043
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 204.919,
        "saikou": 8.31,
        "heikin": 4.68,
        "boshuAvg30d": 166.2,
        "heikinAvg30d": 4.454
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 266.919,
        "saikou": 8.81,
        "heikin": 6.79,
        "boshuAvg30d": 166.2,
        "heikinAvg30d": 4.605
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 263.619,
        "saikou": 8.31,
        "heikin": 6.66,
        "boshuAvg30d": 166.2,
        "heikinAvg30d": 4.484
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 267.619,
        "saikou": 7.51,
        "heikin": 5.62,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 4.089
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 268.619,
        "saikou": 5.55,
        "heikin": 4.28,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 3.41
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 167.619,
        "saikou": 2.11,
        "heikin": 1.32,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 2.64
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 160.619,
        "saikou": 1.55,
        "heikin": 0.9,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 2.651
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 160.619,
        "saikou": 1.52,
        "heikin": 0.94,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 2.889
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 177.619,
        "saikou": 2.4,
        "heikin": 1.5,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 3.193
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 213.733,
        "saikou": 1.99,
        "heikin": 1.16,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 3.21
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 218.727,
        "saikou": 1.7,
        "heikin": 0.66,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 3.089
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 216.779,
        "saikou": 1.49,
        "heikin": 0.56,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 2.969
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 255.79,
        "saikou": 2,
        "heikin": 0.72,
        "boshuAvg30d": 177.8,
        "heikinAvg30d": 3.044
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 262.222,
        "saikou": 1.95,
        "heikin": 0.62,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 2.954
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 260.137,
        "saikou": 1.92,
        "heikin": 0.6,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 2.9
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 258.189,
        "saikou": 1.49,
        "heikin": 0.53,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 2.412
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 260.152,
        "saikou": 1.49,
        "heikin": 0.58,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 2.602
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 267.587,
        "saikou": 2.43,
        "heikin": 1.9,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 2.996
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 269.563,
        "saikou": 2.51,
        "heikin": 1.99,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 3.576
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 219.563,
        "saikou": 2.38,
        "heikin": 1.84,
        "boshuAvg30d": 176.5,
        "heikinAvg30d": 3.822
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 213.563,
        "saikou": 3.45,
        "heikin": 2.01,
        "boshuAvg30d": 175.2,
        "heikinAvg30d": 4.204
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 150.579,
        "saikou": 1.9,
        "heikin": 1.04,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 4.475
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 190.563,
        "saikou": 3.64,
        "heikin": 2.24,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 5.153
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 252.913,
        "saikou": 7.31,
        "heikin": 6.28,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 5.605
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 252.913,
        "saikou": 8.18,
        "heikin": 7.1,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 5.982
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 257.574,
        "saikou": 8.5,
        "heikin": 6.42,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 6.014
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 297.748,
        "saikou": 8.7,
        "heikin": 7.76,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 6.18
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 236.109,
        "saikou": 8.31,
        "heikin": 7.2,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 6.204
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 247.911,
        "saikou": 8.36,
        "heikin": 7.2,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 6.06
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 268.655,
        "saikou": 8.06,
        "heikin": 6.98,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.817
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 262.994,
        "saikou": 8.06,
        "heikin": 6.03,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.393
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 254.489,
        "saikou": 7.51,
        "heikin": 6.49,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.355
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 264.123,
        "saikou": 7.46,
        "heikin": 6.41,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.181
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 260.949,
        "saikou": 6.93,
        "heikin": 6.01,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.055
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 263.925,
        "saikou": 7.19,
        "heikin": 6.26,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 4.989
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 263.925,
        "saikou": 7.51,
        "heikin": 5.69,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 5.071
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 271.575,
        "saikou": 7.31,
        "heikin": 5.63,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 4.6
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 196.575,
        "saikou": 7.12,
        "heikin": 1.96,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 4.611
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 206.575,
        "saikou": 6.84,
        "heikin": 3.81,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 3.747
      }
    ]
  }
};
