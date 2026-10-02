// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/02〜2026/10/01）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-02",
  "fetchedAt": "2026-10-02",
  "avgWindowLabel": "過去30日平均（2026/09/02〜2026/10/01）",
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
      "ouatsu": 1437.857,
      "saikou": 8.61,
      "heikin": 3.43,
      "boshuAvg30d": 1295.6,
      "heikinAvg30d": 2.696
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1024,
      "ouatsu": 1414.248,
      "saikou": 9.17,
      "heikin": 3.11,
      "boshuAvg30d": 1295.6,
      "heikinAvg30d": 2.631
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1024,
      "ouatsu": 1534.723,
      "saikou": 10,
      "heikin": 2.88,
      "boshuAvg30d": 1295.6,
      "heikinAvg30d": 2.711
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1024,
      "ouatsu": 1573.852,
      "saikou": 10,
      "heikin": 2.54,
      "boshuAvg30d": 1295.6,
      "heikinAvg30d": 2.682
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1021,
      "ouatsu": 1516.985,
      "saikou": 10,
      "heikin": 2.57,
      "boshuAvg30d": 1290.7,
      "heikinAvg30d": 2.676
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1020,
      "ouatsu": 1548.849,
      "saikou": 10,
      "heikin": 2.59,
      "boshuAvg30d": 1289.7,
      "heikinAvg30d": 2.745
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1017,
      "ouatsu": 1612.977,
      "saikou": 10,
      "heikin": 2.77,
      "boshuAvg30d": 1306.8,
      "heikinAvg30d": 2.845
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1019,
      "ouatsu": 1787.62,
      "saikou": 10,
      "heikin": 3.03,
      "boshuAvg30d": 1307.8,
      "heikinAvg30d": 2.921
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1021,
      "ouatsu": 1785.77,
      "saikou": 9.91,
      "heikin": 3.53,
      "boshuAvg30d": 1310.8,
      "heikinAvg30d": 2.973
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1022,
      "ouatsu": 1673.887,
      "saikou": 9.31,
      "heikin": 3.68,
      "boshuAvg30d": 1310.8,
      "heikinAvg30d": 3.015
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1022,
      "ouatsu": 1737.731,
      "saikou": 9,
      "heikin": 3.77,
      "boshuAvg30d": 1310.8,
      "heikinAvg30d": 3.131
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1022,
      "ouatsu": 1838.035,
      "saikou": 9.73,
      "heikin": 3.81,
      "boshuAvg30d": 1310.8,
      "heikinAvg30d": 3.131
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1082,
      "ouatsu": 1736.327,
      "saikou": 10,
      "heikin": 3.65,
      "boshuAvg30d": 1376.6,
      "heikinAvg30d": 3.282
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1105,
      "ouatsu": 1794.756,
      "saikou": 10,
      "heikin": 3.11,
      "boshuAvg30d": 1397.7,
      "heikinAvg30d": 3.104
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1126,
      "ouatsu": 1517.872,
      "saikou": 10,
      "heikin": 2.6,
      "boshuAvg30d": 1420.6,
      "heikinAvg30d": 3.034
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1143,
      "ouatsu": 1451.882,
      "saikou": 10,
      "heikin": 2.25,
      "boshuAvg30d": 1438.6,
      "heikinAvg30d": 2.969
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1143,
      "ouatsu": 1681.853,
      "saikou": 10,
      "heikin": 2.59,
      "boshuAvg30d": 1439.5,
      "heikinAvg30d": 3.204
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1143,
      "ouatsu": 1792.296,
      "saikou": 10,
      "heikin": 2.49,
      "boshuAvg30d": 1439.5,
      "heikinAvg30d": 3.37
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1075,
      "ouatsu": 1695.515,
      "saikou": 10,
      "heikin": 2.55,
      "boshuAvg30d": 1405.3,
      "heikinAvg30d": 3.47
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1078,
      "ouatsu": 1693.872,
      "saikou": 10,
      "heikin": 2.64,
      "boshuAvg30d": 1409.3,
      "heikinAvg30d": 3.497
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1083,
      "ouatsu": 1652.206,
      "saikou": 10,
      "heikin": 2.93,
      "boshuAvg30d": 1417.2,
      "heikinAvg30d": 3.507
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1083,
      "ouatsu": 1629.581,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1417.2,
      "heikinAvg30d": 3.507
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1080,
      "ouatsu": 1592.127,
      "saikou": 10,
      "heikin": 2.88,
      "boshuAvg30d": 1414.2,
      "heikinAvg30d": 3.421
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1079,
      "ouatsu": 1621.78,
      "saikou": 10,
      "heikin": 2.93,
      "boshuAvg30d": 1413.2,
      "heikinAvg30d": 3.358
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1059,
      "ouatsu": 1532.084,
      "saikou": 10,
      "heikin": 2.5,
      "boshuAvg30d": 1402.9,
      "heikinAvg30d": 3.294
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1059,
      "ouatsu": 1548.16,
      "saikou": 10,
      "heikin": 2.47,
      "boshuAvg30d": 1402.9,
      "heikinAvg30d": 3.275
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1059,
      "ouatsu": 1614.953,
      "saikou": 10,
      "heikin": 2.43,
      "boshuAvg30d": 1399.9,
      "heikinAvg30d": 3.449
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1057,
      "ouatsu": 1706.498,
      "saikou": 10,
      "heikin": 2.45,
      "boshuAvg30d": 1394.3,
      "heikinAvg30d": 3.544
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1054,
      "ouatsu": 1626.098,
      "saikou": 9.31,
      "heikin": 2.33,
      "boshuAvg30d": 1389.4,
      "heikinAvg30d": 3.613
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1048,
      "ouatsu": 1671.143,
      "saikou": 8.57,
      "heikin": 2.19,
      "boshuAvg30d": 1382.4,
      "heikinAvg30d": 3.633
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1114,
      "ouatsu": 1614.35,
      "saikou": 5.89,
      "heikin": 2.64,
      "boshuAvg30d": 1419.7,
      "heikinAvg30d": 3.541
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1114,
      "ouatsu": 1639.148,
      "saikou": 7.31,
      "heikin": 2.68,
      "boshuAvg30d": 1419.7,
      "heikinAvg30d": 3.756
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1115,
      "ouatsu": 1407.176,
      "saikou": 10,
      "heikin": 3.81,
      "boshuAvg30d": 1419.7,
      "heikinAvg30d": 3.809
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1114,
      "ouatsu": 1548.461,
      "saikou": 10,
      "heikin": 3.86,
      "boshuAvg30d": 1417.7,
      "heikinAvg30d": 4.012
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1112,
      "ouatsu": 1630.454,
      "saikou": 8.85,
      "heikin": 3.74,
      "boshuAvg30d": 1409.6,
      "heikinAvg30d": 4.051
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1096,
      "ouatsu": 1606.94,
      "saikou": 9.2,
      "heikin": 3.68,
      "boshuAvg30d": 1405.6,
      "heikinAvg30d": 4.063
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1091,
      "ouatsu": 1696.85,
      "saikou": 10,
      "heikin": 3.84,
      "boshuAvg30d": 1397.7,
      "heikinAvg30d": 4.124
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1091,
      "ouatsu": 2066.528,
      "saikou": 8.09,
      "heikin": 3.3,
      "boshuAvg30d": 1397.7,
      "heikinAvg30d": 4.078
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1091,
      "ouatsu": 2098.988,
      "saikou": 7.92,
      "heikin": 3.41,
      "boshuAvg30d": 1398.3,
      "heikinAvg30d": 3.936
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1090,
      "ouatsu": 2179.153,
      "saikou": 7.51,
      "heikin": 3.14,
      "boshuAvg30d": 1397.3,
      "heikinAvg30d": 3.785
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1082,
      "ouatsu": 2125.017,
      "saikou": 7.73,
      "heikin": 3.33,
      "boshuAvg30d": 1392.2,
      "heikinAvg30d": 3.727
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1082,
      "ouatsu": 2164.849,
      "saikou": 7.34,
      "heikin": 3.28,
      "boshuAvg30d": 1388.3,
      "heikinAvg30d": 3.659
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 992,
      "ouatsu": 2099.927,
      "saikou": 7.02,
      "heikin": 2.87,
      "boshuAvg30d": 1301.1,
      "heikinAvg30d": 3.431
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 995,
      "ouatsu": 2070.687,
      "saikou": 7.45,
      "heikin": 3.1,
      "boshuAvg30d": 1304.1,
      "heikinAvg30d": 3.499
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1007,
      "ouatsu": 1818.674,
      "saikou": 8.1,
      "heikin": 2.95,
      "boshuAvg30d": 1305.1,
      "heikinAvg30d": 3.308
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1002,
      "ouatsu": 1937.574,
      "saikou": 6.54,
      "heikin": 2.49,
      "boshuAvg30d": 1298.2,
      "heikinAvg30d": 3.254
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 993,
      "ouatsu": 1827.682,
      "saikou": 10,
      "heikin": 2.96,
      "boshuAvg30d": 1291.1,
      "heikinAvg30d": 3.229
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 986,
      "ouatsu": 1690.102,
      "saikou": 10,
      "heikin": 2.38,
      "boshuAvg30d": 1283.2,
      "heikinAvg30d": 3.093
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
        "saikou": 7.23,
        "heikin": 1.86,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.025
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 183.065,
        "saikou": 1.01,
        "heikin": 0.9,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 0.956
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 148.908,
        "saikou": 1.01,
        "heikin": 0.7,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.06
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 195.258,
        "saikou": 1,
        "heikin": 0.7,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 0.966
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 188.908,
        "saikou": 1.01,
        "heikin": 0.94,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.245
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 208.708,
        "saikou": 1.01,
        "heikin": 0.88,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.414
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 193.908,
        "saikou": 3.95,
        "heikin": 0.94,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.262
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 234.262,
        "saikou": 1.01,
        "heikin": 0.88,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.088
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 193.908,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.344
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 191.958,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.127
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 203.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.255
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 214.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.41
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 188.908,
        "saikou": 1.01,
        "heikin": 0.79,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.839
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 188.908,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.481
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 201.258,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 1.32
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 1.386
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 235.258,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 0.897
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 235.258,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 65.5,
        "heikinAvg30d": 0.973
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 188.908,
        "saikou": 1.01,
        "heikin": 0.82,
        "boshuAvg30d": 66.5,
        "heikinAvg30d": 0.919
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 67.4,
        "heikinAvg30d": 0.946
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 237.208,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 67.4,
        "heikinAvg30d": 0.997
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 188.858,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 1.018
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 150.808,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 0.919
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 195.258,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 0.95
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 146.918,
        "saikou": 1.01,
        "heikin": 0.81,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 1.031
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 146.958,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 0.967
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 213.908,
        "saikou": 1.01,
        "heikin": 0.8,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 1.284
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 232.278,
        "saikou": 1.01,
        "heikin": 0.79,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 1.248
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 188.908,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 1.238
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 232.278,
        "saikou": 1.01,
        "heikin": 0.88,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 1.392
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.093
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 237.278,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 1.825
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 152.958,
        "saikou": 8,
        "heikin": 1.43,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.209
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 193.32,
        "saikou": 1.15,
        "heikin": 1.1,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.293
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 166.958,
        "saikou": 2.73,
        "heikin": 1.2,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.316
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 170.31,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.195
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 124.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.124
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 195.31,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 2.338
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.788
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 198.278,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.717
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 152.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.4,
        "heikinAvg30d": 1.792
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 198.278,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.627
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 191.918,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.261
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 151.958,
        "saikou": 4.16,
        "heikin": 1.14,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.714
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 154.908,
        "saikou": 4.77,
        "heikin": 1.12,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.264
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 191.958,
        "saikou": 4.02,
        "heikin": 1.18,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.305
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 193.908,
        "saikou": 1.67,
        "heikin": 1.07,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.209
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 240.258,
        "saikou": 1.01,
        "heikin": 0.87,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.3
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 73.611,
        "saikou": 7.49,
        "heikin": 6.68,
        "boshuAvg30d": 155.9,
        "heikinAvg30d": 7.738
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 73.611,
        "saikou": 9,
        "heikin": 7.23,
        "boshuAvg30d": 155.9,
        "heikinAvg30d": 7.998
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 93.489,
        "saikou": 7.61,
        "heikin": 6.83,
        "boshuAvg30d": 155.9,
        "heikinAvg30d": 8.235
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 93.489,
        "saikou": 7.86,
        "heikin": 6.84,
        "boshuAvg30d": 155.9,
        "heikinAvg30d": 8.272
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 93.489,
        "saikou": 7.94,
        "heikin": 6.87,
        "boshuAvg30d": 155.9,
        "heikinAvg30d": 8.291
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 93.489,
        "saikou": 7.85,
        "heikin": 6.87,
        "boshuAvg30d": 155.9,
        "heikinAvg30d": 8.284
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 91.989,
        "saikou": 7.75,
        "heikin": 6.82,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 8.275
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 93.489,
        "saikou": 7.65,
        "heikin": 6.8,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 8.244
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 95.488,
        "saikou": 7.51,
        "heikin": 6.72,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 8.244
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 95.488,
        "saikou": 8.49,
        "heikin": 7.13,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 8.22
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 95.488,
        "saikou": 9,
        "heikin": 7.42,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 8.179
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 95.488,
        "saikou": 9,
        "heikin": 7.45,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 8.189
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 117.488,
        "saikou": 8.1,
        "heikin": 6.16,
        "boshuAvg30d": 181.0,
        "heikinAvg30d": 8.337
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 115.988,
        "saikou": 10,
        "heikin": 6.78,
        "boshuAvg30d": 186.0,
        "heikinAvg30d": 8.391
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 105.488,
        "saikou": 10,
        "heikin": 8.36,
        "boshuAvg30d": 191.9,
        "heikinAvg30d": 8.435
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 103.988,
        "saikou": 10,
        "heikin": 8.39,
        "boshuAvg30d": 195.9,
        "heikinAvg30d": 8.408
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 81.488,
        "saikou": 10,
        "heikin": 7.95,
        "boshuAvg30d": 195.9,
        "heikinAvg30d": 8.646
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 79.988,
        "saikou": 9,
        "heikin": 8.17,
        "boshuAvg30d": 195.9,
        "heikinAvg30d": 8.564
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 86.089,
        "saikou": 9.01,
        "heikin": 8.06,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 8.246
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 86.089,
        "saikou": 9.28,
        "heikin": 8.16,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 8.253
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 86.089,
        "saikou": 9.28,
        "heikin": 8.15,
        "boshuAvg30d": 154.5,
        "heikinAvg30d": 8.243
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 84.124,
        "saikou": 9.28,
        "heikin": 8.15,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 8.254
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 86.089,
        "saikou": 9.28,
        "heikin": 8.16,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 8.267
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 86.089,
        "saikou": 9.28,
        "heikin": 8.15,
        "boshuAvg30d": 155.5,
        "heikinAvg30d": 8.289
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 85.443,
        "saikou": 9.28,
        "heikin": 8.23,
        "boshuAvg30d": 153.4,
        "heikinAvg30d": 8.44
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 85.443,
        "saikou": 9.28,
        "heikin": 8.25,
        "boshuAvg30d": 153.4,
        "heikinAvg30d": 8.398
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 87.439,
        "saikou": 9.28,
        "heikin": 8.21,
        "boshuAvg30d": 153.4,
        "heikinAvg30d": 8.118
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 85.443,
        "saikou": 9.28,
        "heikin": 8.28,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 8.119
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 85.443,
        "saikou": 9.28,
        "heikin": 8.09,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 8.147
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 87.439,
        "saikou": 8.48,
        "heikin": 7.48,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 7.754
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 65.439,
        "saikou": 3.99,
        "heikin": 3.47,
        "boshuAvg30d": 192.0,
        "heikinAvg30d": 8.312
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 65.439,
        "saikou": 3,
        "heikin": 3,
        "boshuAvg30d": 192.0,
        "heikinAvg30d": 7.786
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 63.443,
        "saikou": 10,
        "heikin": 7.95,
        "boshuAvg30d": 192.0,
        "heikinAvg30d": 7.665
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 61.943,
        "saikou": 10,
        "heikin": 7.92,
        "boshuAvg30d": 191.0,
        "heikinAvg30d": 7.444
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 63.443,
        "saikou": 3,
        "heikin": 3,
        "boshuAvg30d": 189.0,
        "heikinAvg30d": 7.521
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 59.978,
        "saikou": 3,
        "heikin": 3,
        "boshuAvg30d": 187.1,
        "heikinAvg30d": 7.44
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 107.488,
        "saikou": 10,
        "heikin": 6.38,
        "boshuAvg30d": 186.1,
        "heikinAvg30d": 7.457
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 105.988,
        "saikou": 7.27,
        "heikin": 4.38,
        "boshuAvg30d": 186.1,
        "heikinAvg30d": 7.513
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 107.488,
        "saikou": 6.88,
        "heikin": 4.65,
        "boshuAvg30d": 186.1,
        "heikinAvg30d": 7.616
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 107.488,
        "saikou": 6.61,
        "heikin": 4.84,
        "boshuAvg30d": 185.1,
        "heikinAvg30d": 7.779
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 109.486,
        "saikou": 6.85,
        "heikin": 4.73,
        "boshuAvg30d": 185.1,
        "heikinAvg30d": 7.806
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 109.486,
        "saikou": 6.37,
        "heikin": 5.11,
        "boshuAvg30d": 185.1,
        "heikinAvg30d": 7.785
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 83.586,
        "saikou": 6.95,
        "heikin": 6.21,
        "boshuAvg30d": 100.8,
        "heikinAvg30d": 7.884
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 97.486,
        "saikou": 7.45,
        "heikin": 6.39,
        "boshuAvg30d": 100.8,
        "heikinAvg30d": 7.971
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 97.486,
        "saikou": 8.1,
        "heikin": 6.37,
        "boshuAvg30d": 100.8,
        "heikinAvg30d": 8.003
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 97.486,
        "saikou": 6.49,
        "heikin": 6.08,
        "boshuAvg30d": 99.8,
        "heikinAvg30d": 7.999
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 97.486,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 98.8,
        "heikinAvg30d": 8.036
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 95.986,
        "saikou": 10,
        "heikin": 9.21,
        "boshuAvg30d": 97.8,
        "heikinAvg30d": 8.197
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 372.623,
        "saikou": 8.61,
        "heikin": 4.3,
        "boshuAvg30d": 469.5,
        "heikinAvg30d": 3.432
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 354.654,
        "saikou": 9.17,
        "heikin": 5.03,
        "boshuAvg30d": 469.5,
        "heikinAvg30d": 3.338
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 391.323,
        "saikou": 10,
        "heikin": 4.7,
        "boshuAvg30d": 469.5,
        "heikinAvg30d": 3.231
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 400.764,
        "saikou": 10,
        "heikin": 4.26,
        "boshuAvg30d": 469.5,
        "heikinAvg30d": 3.245
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 388.792,
        "saikou": 10,
        "heikin": 4.25,
        "boshuAvg30d": 467.5,
        "heikinAvg30d": 3.204
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 388.792,
        "saikou": 10,
        "heikin": 4.28,
        "boshuAvg30d": 467.5,
        "heikinAvg30d": 3.221
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 400.764,
        "saikou": 10,
        "heikin": 4.24,
        "boshuAvg30d": 466.4,
        "heikinAvg30d": 3.204
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 431.924,
        "saikou": 10,
        "heikin": 4.37,
        "boshuAvg30d": 467.5,
        "heikinAvg30d": 3.37
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 433.444,
        "saikou": 9.91,
        "heikin": 4.95,
        "boshuAvg30d": 468.4,
        "heikinAvg30d": 3.386
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 402.495,
        "saikou": 9.31,
        "heikin": 4.59,
        "boshuAvg30d": 468.5,
        "heikinAvg30d": 3.421
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 416.729,
        "saikou": 8.98,
        "heikin": 4.9,
        "boshuAvg30d": 468.5,
        "heikinAvg30d": 3.432
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 396.393,
        "saikou": 9.73,
        "heikin": 5.53,
        "boshuAvg30d": 468.5,
        "heikinAvg30d": 3.453
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 408.399,
        "saikou": 10,
        "heikin": 5.05,
        "boshuAvg30d": 489.4,
        "heikinAvg30d": 3.795
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 425.431,
        "saikou": 10,
        "heikin": 5.3,
        "boshuAvg30d": 497.4,
        "heikinAvg30d": 3.759
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 267.085,
        "saikou": 8.49,
        "heikin": 3.47,
        "boshuAvg30d": 502.4,
        "heikinAvg30d": 3.812
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 267.085,
        "saikou": 8.66,
        "heikin": 3.4,
        "boshuAvg30d": 507.4,
        "heikinAvg30d": 3.795
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 439.758,
        "saikou": 10,
        "heikin": 4.93,
        "boshuAvg30d": 507.4,
        "heikinAvg30d": 4.153
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 458.865,
        "saikou": 10,
        "heikin": 4.56,
        "boshuAvg30d": 507.4,
        "heikinAvg30d": 4.287
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 456.875,
        "saikou": 10,
        "heikin": 4.94,
        "boshuAvg30d": 504.4,
        "heikinAvg30d": 4.379
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 456.875,
        "saikou": 10,
        "heikin": 5.51,
        "boshuAvg30d": 504.4,
        "heikinAvg30d": 4.374
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 421.331,
        "saikou": 10,
        "heikin": 5.87,
        "boshuAvg30d": 504.4,
        "heikinAvg30d": 4.215
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 460.252,
        "saikou": 10,
        "heikin": 5.18,
        "boshuAvg30d": 503.4,
        "heikinAvg30d": 4.159
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 479.317,
        "saikou": 10,
        "heikin": 5.01,
        "boshuAvg30d": 500.5,
        "heikinAvg30d": 4.191
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 459.73,
        "saikou": 10,
        "heikin": 5.22,
        "boshuAvg30d": 500.5,
        "heikinAvg30d": 4.162
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 449.806,
        "saikou": 10,
        "heikin": 4.48,
        "boshuAvg30d": 499.4,
        "heikinAvg30d": 3.994
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 451.73,
        "saikou": 10,
        "heikin": 4.47,
        "boshuAvg30d": 499.4,
        "heikinAvg30d": 4.045
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 470.168,
        "saikou": 10,
        "heikin": 4.26,
        "boshuAvg30d": 496.4,
        "heikinAvg30d": 4.174
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 483.79,
        "saikou": 10,
        "heikin": 4.15,
        "boshuAvg30d": 495.8,
        "heikinAvg30d": 4.322
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 444.987,
        "saikou": 9.31,
        "heikin": 4.21,
        "boshuAvg30d": 494.8,
        "heikinAvg30d": 4.44
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 478.325,
        "saikou": 8.57,
        "heikin": 3.42,
        "boshuAvg30d": 494.7,
        "heikinAvg30d": 4.265
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 550.945,
        "saikou": 5.89,
        "heikin": 4.04,
        "boshuAvg30d": 493.7,
        "heikinAvg30d": 4.18
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 551.694,
        "saikou": 5.57,
        "heikin": 3.25,
        "boshuAvg30d": 493.7,
        "heikinAvg30d": 4.125
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 359.964,
        "saikou": 6.73,
        "heikin": 4.39,
        "boshuAvg30d": 493.7,
        "heikinAvg30d": 4.291
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 411.139,
        "saikou": 9.9,
        "heikin": 3.6,
        "boshuAvg30d": 493.6,
        "heikinAvg30d": 4.441
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 538.185,
        "saikou": 5.48,
        "heikin": 3.2,
        "boshuAvg30d": 489.5,
        "heikinAvg30d": 4.37
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 271,
        "ouatsu": 527.152,
        "saikou": 5.43,
        "heikin": 2.97,
        "boshuAvg30d": 489.5,
        "heikinAvg30d": 4.315
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 274,
        "ouatsu": 318.919,
        "saikou": 6.5,
        "heikin": 3.74,
        "boshuAvg30d": 491.5,
        "heikinAvg30d": 4.434
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 274,
        "ouatsu": 549.602,
        "saikou": 5.48,
        "heikin": 3.11,
        "boshuAvg30d": 491.5,
        "heikinAvg30d": 4.359
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 274,
        "ouatsu": 594.672,
        "saikou": 5.31,
        "heikin": 3.15,
        "boshuAvg30d": 492.1,
        "heikinAvg30d": 4.385
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 274,
        "ouatsu": 614.236,
        "saikou": 5.25,
        "heikin": 2.74,
        "boshuAvg30d": 492.1,
        "heikinAvg30d": 4.337
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 272,
        "ouatsu": 619.541,
        "saikou": 5.49,
        "heikin": 3.24,
        "boshuAvg30d": 490.1,
        "heikinAvg30d": 4.24
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 272,
        "ouatsu": 641.769,
        "saikou": 5.62,
        "heikin": 3.42,
        "boshuAvg30d": 490.1,
        "heikinAvg30d": 4.258
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 272,
        "ouatsu": 593.964,
        "saikou": 6.5,
        "heikin": 2.21,
        "boshuAvg30d": 489.2,
        "heikinAvg30d": 4.059
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 272,
        "ouatsu": 620.593,
        "saikou": 6.5,
        "heikin": 2.41,
        "boshuAvg30d": 489.2,
        "heikinAvg30d": 4.226
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 442.325,
        "saikou": 6.98,
        "heikin": 2.62,
        "boshuAvg30d": 489.2,
        "heikinAvg30d": 3.86
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 545.052,
        "saikou": 6.5,
        "heikin": 2.21,
        "boshuAvg30d": 487.2,
        "heikinAvg30d": 4.053
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 566.863,
        "saikou": 6.5,
        "heikin": 2.5,
        "boshuAvg30d": 485.2,
        "heikinAvg30d": 4.129
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 494.547,
        "saikou": 6.67,
        "heikin": 2.52,
        "boshuAvg30d": 484.2,
        "heikinAvg30d": 4.101
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 59,
        "ouatsu": 137.159,
        "saikou": 3.18,
        "heikin": 2.23,
        "boshuAvg30d": 77.6,
        "heikinAvg30d": 1.877
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 59,
        "ouatsu": 155.438,
        "saikou": 2.67,
        "heikin": 1.83,
        "boshuAvg30d": 77.6,
        "heikinAvg30d": 1.809
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 59,
        "ouatsu": 193.418,
        "saikou": 1.88,
        "heikin": 1.38,
        "boshuAvg30d": 77.6,
        "heikinAvg30d": 1.834
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 211.639,
        "saikou": 1.99,
        "heikin": 1.65,
        "boshuAvg30d": 77.6,
        "heikinAvg30d": 1.923
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 58,
        "ouatsu": 187.898,
        "saikou": 2,
        "heikin": 1.26,
        "boshuAvg30d": 76.6,
        "heikinAvg30d": 1.867
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 197.724,
        "saikou": 2.2,
        "heikin": 1.47,
        "boshuAvg30d": 76.6,
        "heikinAvg30d": 1.919
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 223.379,
        "saikou": 2,
        "heikin": 1.5,
        "boshuAvg30d": 76.5,
        "heikinAvg30d": 1.88
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 223.379,
        "saikou": 2,
        "heikin": 1.68,
        "boshuAvg30d": 76.5,
        "heikinAvg30d": 2.041
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 58,
        "ouatsu": 223.379,
        "saikou": 2,
        "heikin": 1.77,
        "boshuAvg30d": 76.6,
        "heikinAvg30d": 2.09
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 58,
        "ouatsu": 223.379,
        "saikou": 2.15,
        "heikin": 1.78,
        "boshuAvg30d": 76.6,
        "heikinAvg30d": 1.978
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 58,
        "ouatsu": 225.369,
        "saikou": 2.19,
        "heikin": 1.77,
        "boshuAvg30d": 76.6,
        "heikinAvg30d": 2.13
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 58,
        "ouatsu": 223.869,
        "saikou": 2,
        "heikin": 1.84,
        "boshuAvg30d": 76.6,
        "heikinAvg30d": 2.116
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 225.369,
        "saikou": 2.2,
        "heikin": 1.79,
        "boshuAvg30d": 86.5,
        "heikinAvg30d": 2.116
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 71,
        "ouatsu": 225.18,
        "saikou": 2.38,
        "heikin": 2.04,
        "boshuAvg30d": 89.6,
        "heikinAvg30d": 2.068
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 74,
        "ouatsu": 207.038,
        "saikou": 2.6,
        "heikin": 2.29,
        "boshuAvg30d": 92.6,
        "heikinAvg30d": 2.099
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 76,
        "ouatsu": 163.402,
        "saikou": 2.27,
        "heikin": 2.06,
        "boshuAvg30d": 94.6,
        "heikinAvg30d": 2.027
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 76,
        "ouatsu": 161.902,
        "saikou": 2.45,
        "heikin": 2.22,
        "boshuAvg30d": 94.6,
        "heikinAvg30d": 2.3
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 76,
        "ouatsu": 167.886,
        "saikou": 2.47,
        "heikin": 2.23,
        "boshuAvg30d": 94.6,
        "heikinAvg30d": 2.453
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 81,
        "ouatsu": 164.936,
        "saikou": 3.48,
        "heikin": 1.49,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 2.819
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 81,
        "ouatsu": 166.926,
        "saikou": 3.27,
        "heikin": 1.35,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 2.903
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 81,
        "ouatsu": 120.058,
        "saikou": 6.7,
        "heikin": 3.46,
        "boshuAvg30d": 99.6,
        "heikinAvg30d": 3.076
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 81,
        "ouatsu": 120.058,
        "saikou": 7.31,
        "heikin": 3.61,
        "boshuAvg30d": 98.6,
        "heikinAvg30d": 3.183
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 80,
        "ouatsu": 87.723,
        "saikou": 4.1,
        "heikin": 3.43,
        "boshuAvg30d": 97.6,
        "heikinAvg30d": 2.953
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 79,
        "ouatsu": 87.723,
        "saikou": 4.8,
        "heikin": 3.39,
        "boshuAvg30d": 96.6,
        "heikinAvg30d": 2.711
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 75,
        "ouatsu": 83.834,
        "saikou": 3.5,
        "heikin": 3.25,
        "boshuAvg30d": 93.6,
        "heikinAvg30d": 2.764
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 75,
        "ouatsu": 85.724,
        "saikou": 3.49,
        "heikin": 3.25,
        "boshuAvg30d": 93.6,
        "heikinAvg30d": 2.685
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 75,
        "ouatsu": 107.934,
        "saikou": 4.24,
        "heikin": 2.79,
        "boshuAvg30d": 93.6,
        "heikinAvg30d": 2.649
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 74,
        "ouatsu": 107.934,
        "saikou": 4.24,
        "heikin": 2.79,
        "boshuAvg30d": 93.5,
        "heikinAvg30d": 2.643
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 74,
        "ouatsu": 109.897,
        "saikou": 4.1,
        "heikin": 3.07,
        "boshuAvg30d": 92.6,
        "heikinAvg30d": 2.83
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 74,
        "ouatsu": 109.897,
        "saikou": 4.29,
        "heikin": 3.2,
        "boshuAvg30d": 92.6,
        "heikinAvg30d": 2.834
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 72,
        "ouatsu": 145.649,
        "saikou": 3.75,
        "heikin": 3.2,
        "boshuAvg30d": 91.5,
        "heikinAvg30d": 2.644
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 72,
        "ouatsu": 162.691,
        "saikou": 5.1,
        "heikin": 3.43,
        "boshuAvg30d": 91.5,
        "heikinAvg30d": 2.608
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 72,
        "ouatsu": 128.228,
        "saikou": 5.1,
        "heikin": 2.64,
        "boshuAvg30d": 91.5,
        "heikinAvg30d": 2.668
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 72,
        "ouatsu": 123.428,
        "saikou": 3.15,
        "heikin": 2.62,
        "boshuAvg30d": 91.5,
        "heikinAvg30d": 2.855
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 72,
        "ouatsu": 128.228,
        "saikou": 5.1,
        "heikin": 2.52,
        "boshuAvg30d": 91.5,
        "heikinAvg30d": 2.721
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 71,
        "ouatsu": 116.782,
        "saikou": 4,
        "heikin": 2.85,
        "boshuAvg30d": 91.5,
        "heikinAvg30d": 2.556
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 69,
        "ouatsu": 435.263,
        "saikou": 2.65,
        "heikin": 2.1,
        "boshuAvg30d": 89.5,
        "heikinAvg30d": 2.5
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 69,
        "ouatsu": 445.11,
        "saikou": 2.85,
        "heikin": 2.19,
        "boshuAvg30d": 89.5,
        "heikinAvg30d": 2.405
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 69,
        "ouatsu": 447.109,
        "saikou": 2.79,
        "heikin": 2.24,
        "boshuAvg30d": 89.5,
        "heikinAvg30d": 2.081
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 69,
        "ouatsu": 447.109,
        "saikou": 2.79,
        "heikin": 2.3,
        "boshuAvg30d": 89.5,
        "heikinAvg30d": 2.079
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 69,
        "ouatsu": 439.283,
        "saikou": 2.6,
        "heikin": 1.94,
        "boshuAvg30d": 89.5,
        "heikinAvg30d": 2.227
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 69,
        "ouatsu": 421.193,
        "saikou": 2.55,
        "heikin": 2.17,
        "boshuAvg30d": 89.5,
        "heikinAvg30d": 2.194
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 70,
        "ouatsu": 386.889,
        "saikou": 2.33,
        "heikin": 2.07,
        "boshuAvg30d": 89.5,
        "heikinAvg30d": 2.035
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 71,
        "ouatsu": 382.08,
        "saikou": 2.43,
        "heikin": 1.95,
        "boshuAvg30d": 90.5,
        "heikinAvg30d": 2.151
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 71,
        "ouatsu": 307.383,
        "saikou": 2.79,
        "heikin": 2.27,
        "boshuAvg30d": 90.5,
        "heikinAvg30d": 2.206
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 286.492,
        "saikou": 2.43,
        "heikin": 1.96,
        "boshuAvg30d": 89.5,
        "heikinAvg30d": 2.189
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 145.241,
        "saikou": 2.79,
        "heikin": 2.29,
        "boshuAvg30d": 88.5,
        "heikinAvg30d": 2.15
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 172.741,
        "saikou": 4,
        "heikin": 2.31,
        "boshuAvg30d": 85.5,
        "heikinAvg30d": 2.194
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.55,
        "heikin": 1.55,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 0.964
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.1,
        "heikin": 1.98,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 0.998
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.7,
        "heikin": 1.68,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 1.007
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.85,
        "heikin": 1.85,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 1.105
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.45,
        "heikin": 1.45,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 1.319
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 0.981
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 1.204
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 1.373
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 1.294
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 1.406
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 1.562
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 53.1,
        "heikinAvg30d": 1.509
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 1.75
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 57.1,
        "heikinAvg30d": 1.514
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 28.928,
        "saikou": 2.55,
        "heikin": 0.62,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 1.498
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 59.2,
        "heikinAvg30d": 1.58
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.785
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 2.33
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 63.928,
        "saikou": 2.45,
        "heikin": 0.46,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 2.758
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 61.998,
        "saikou": 2.6,
        "heikin": 0.46,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 2.664
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 61.998,
        "saikou": 6,
        "heikin": 0.57,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 3.497
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 61.998,
        "saikou": 6.96,
        "heikin": 0.6,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.797
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 61.998,
        "saikou": 3.85,
        "heikin": 0.5,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 3.685
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 61.998,
        "saikou": 3.9,
        "heikin": 0.5,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 3.462
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 61.998,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.369
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 61.998,
        "saikou": 3.5,
        "heikin": 0.47,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.452
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 61.998,
        "saikou": 6,
        "heikin": 0.57,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.327
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 61.998,
        "saikou": 2.85,
        "heikin": 0.47,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.465
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 61.998,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.329
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 8.274,
        "saikou": 3.6,
        "heikin": 1.17,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 3.001
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 1.998,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.222
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 1.998,
        "saikou": 5.8,
        "heikin": 5.8,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.662
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 1.998,
        "saikou": 3.7,
        "heikin": 3.7,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.364
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 1.998,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.859
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 1.998,
        "saikou": 3.3,
        "heikin": 3.3,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 3.036
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.85,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 3.766
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 3.112
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.68,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.761
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.34,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 3.039
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.22,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.177
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 2.253
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.5,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 2.289
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 1.863
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 1.857
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.6,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 1.789
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.35,
        "boshuAvg30d": 59.1,
        "heikinAvg30d": 1.579
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 58.1,
        "heikinAvg30d": 1.499
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.48,
        "boshuAvg30d": 57.2,
        "heikinAvg30d": 1.222
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 97.296,
        "saikou": 2.2,
        "heikin": 2.01,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 2.127
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 97.296,
        "saikou": 2.2,
        "heikin": 2.05,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 1.793
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 138.895,
        "saikou": 1.92,
        "heikin": 0.65,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 1.842
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 110.972,
        "saikou": 1.99,
        "heikin": 0.87,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 1.808
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 99.082,
        "saikou": 1.52,
        "heikin": 0.47,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 1.808
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 89.458,
        "saikou": 2.2,
        "heikin": 1.66,
        "boshuAvg30d": 129.9,
        "heikinAvg30d": 1.872
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 99.245,
        "saikou": 2,
        "heikin": 1.8,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 2.032
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 99.245,
        "saikou": 2,
        "heikin": 1.97,
        "boshuAvg30d": 130.9,
        "heikinAvg30d": 2.097
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 118.859,
        "saikou": 2,
        "heikin": 1.23,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 2.055
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 118.859,
        "saikou": 2,
        "heikin": 1.33,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 2.129
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 99.245,
        "saikou": 2.2,
        "heikin": 2.08,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 2.096
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 190.685,
        "saikou": 2,
        "heikin": 0.66,
        "boshuAvg30d": 131.9,
        "heikinAvg30d": 1.892
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 166.747,
        "saikou": 2.2,
        "heikin": 1.22,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 2.081
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 166.747,
        "saikou": 2.2,
        "heikin": 1.24,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 2.005
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 135.047,
        "saikou": 2.44,
        "heikin": 1.72,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 2.148
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 97.345,
        "saikou": 2.2,
        "heikin": 2,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 2.165
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 97.345,
        "saikou": 2.2,
        "heikin": 2.13,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 2.453
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 97.345,
        "saikou": 2.25,
        "heikin": 2.13,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 2.549
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 101.212,
        "saikou": 2.46,
        "heikin": 2.32,
        "boshuAvg30d": 154.9,
        "heikinAvg30d": 2.703
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 99.769,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 154.9,
        "heikinAvg30d": 2.837
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 97.784,
        "saikou": 2.46,
        "heikin": 2.46,
        "boshuAvg30d": 154.9,
        "heikinAvg30d": 3.143
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 99.227,
        "saikou": 2.46,
        "heikin": 2.39,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 3.155
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 101.212,
        "saikou": 3,
        "heikin": 2.49,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 2.966
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 101.212,
        "saikou": 3,
        "heikin": 2.49,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 2.68
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 99.769,
        "saikou": 2.79,
        "heikin": 2.54,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 2.766
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 101.212,
        "saikou": 2.79,
        "heikin": 2.52,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 2.484
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 101.212,
        "saikou": 2.46,
        "heikin": 2.43,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 2.838
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 101.212,
        "saikou": 1.52,
        "heikin": 1.52,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.723
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 101.212,
        "saikou": 1.52,
        "heikin": 1.52,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 2.804
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 119.377,
        "saikou": 2.46,
        "heikin": 0.51,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 2.758
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 111.808,
        "saikou": 2.79,
        "heikin": 2.05,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.586
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 101.121,
        "saikou": 4,
        "heikin": 2.79,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.722
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 103.112,
        "saikou": 4,
        "heikin": 2.72,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.688
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 101.242,
        "saikou": 4.94,
        "heikin": 2.75,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.77
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 101.242,
        "saikou": 4.94,
        "heikin": 2.85,
        "boshuAvg30d": 153.8,
        "heikinAvg30d": 2.85
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 101.242,
        "saikou": 4.94,
        "heikin": 2.89,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 2.805
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 99.282,
        "saikou": 2.59,
        "heikin": 2.33,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 2.636
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 120.76,
        "saikou": 4,
        "heikin": 2.02,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 2.612
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 99.245,
        "saikou": 2.56,
        "heikin": 2.32,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 2.648
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 99.245,
        "saikou": 2.5,
        "heikin": 2.3,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 2.532
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 97.26,
        "saikou": 2.5,
        "heikin": 2.32,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 2.5
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 97.26,
        "saikou": 2.52,
        "heikin": 2.27,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 2.478
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 99.245,
        "saikou": 2.28,
        "heikin": 2.14,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 2.438
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 99.245,
        "saikou": 2.34,
        "heikin": 2.22,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 2.342
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 97.247,
        "saikou": 2.8,
        "heikin": 2.33,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 2.415
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 99.245,
        "saikou": 2.44,
        "heikin": 2.1,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 2.366
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 118.859,
        "saikou": 2.8,
        "heikin": 1.88,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 2.056
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 84.245,
        "saikou": 2.8,
        "heikin": 2.11,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 2.139
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 179.897,
        "saikou": 4.56,
        "heikin": 3.92,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 1.707
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 179.897,
        "saikou": 2.39,
        "heikin": 2.19,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 1.923
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 181.697,
        "saikou": 2.39,
        "heikin": 2.21,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.041
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 183.687,
        "saikou": 1.98,
        "heikin": 1.66,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 1.934
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 179.729,
        "saikou": 2.39,
        "heikin": 2.22,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 1.859
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 183.687,
        "saikou": 2.25,
        "heikin": 2.07,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 1.991
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 200.546,
        "saikou": 2.61,
        "heikin": 2.36,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.142
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 200.546,
        "saikou": 4.41,
        "heikin": 3.66,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.32
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 200.546,
        "saikou": 5.05,
        "heikin": 4.13,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.24
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 200.546,
        "saikou": 5.11,
        "heikin": 4.19,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.531
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 200.546,
        "saikou": 4.84,
        "heikin": 3.99,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.827
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 200.546,
        "saikou": 5.05,
        "heikin": 4.36,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.792
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 200.546,
        "saikou": 5.05,
        "heikin": 4.19,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 3.093
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 184.632,
        "saikou": 2.2,
        "heikin": 1.7,
        "boshuAvg30d": 142.1,
        "heikinAvg30d": 2.372
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 210.086,
        "saikou": 2.4,
        "heikin": 1.35,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 2.07
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 210.086,
        "saikou": 1.98,
        "heikin": 0.65,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 1.84
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 212.084,
        "saikou": 2.4,
        "heikin": 0.68,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 1.836
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 212.084,
        "saikou": 2.2,
        "heikin": 0.64,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.415
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 212.084,
        "saikou": 2.2,
        "heikin": 0.5,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.453
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 213.774,
        "saikou": 2.2,
        "heikin": 0.5,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 2.403
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 213.774,
        "saikou": 2.2,
        "heikin": 0.5,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 2.573
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 206.986,
        "saikou": 2.2,
        "heikin": 0.5,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.519
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 206.986,
        "saikou": 2.79,
        "heikin": 0.71,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.453
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 213.774,
        "saikou": 2.79,
        "heikin": 0.7,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.418
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 188.32,
        "saikou": 2.79,
        "heikin": 0.74,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.05
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 201.047,
        "saikou": 2.7,
        "heikin": 0.77,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.015
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 150.325,
        "saikou": 2.2,
        "heikin": 0.55,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 2.341
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 213.774,
        "saikou": 2.22,
        "heikin": 0.5,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.356
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 212.084,
        "saikou": 1.58,
        "heikin": 0.48,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.47
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 212.084,
        "saikou": 2.44,
        "heikin": 0.5,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.692
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 212.084,
        "saikou": 2.73,
        "heikin": 0.74,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 2.894
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 212.084,
        "saikou": 4,
        "heikin": 1.49,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.391
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 186.63,
        "saikou": 4,
        "heikin": 1.64,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.166
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 186.63,
        "saikou": 4,
        "heikin": 2.68,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.653
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 186.63,
        "saikou": 5.1,
        "heikin": 4.32,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 4.057
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 186.63,
        "saikou": 5.11,
        "heikin": 4.35,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 4.336
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 175.518,
        "saikou": 5.1,
        "heikin": 4.56,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 4.606
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 175.518,
        "saikou": 5.01,
        "heikin": 4.46,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 4.54
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 220.137,
        "saikou": 5.08,
        "heikin": 4.04,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 4.139
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 222.127,
        "saikou": 4.84,
        "heikin": 3.86,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.838
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 222.127,
        "saikou": 4.84,
        "heikin": 3.85,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.595
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 222.127,
        "saikou": 4.84,
        "heikin": 3.84,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 3.187
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 222.127,
        "saikou": 5.05,
        "heikin": 3.97,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.263
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 222.127,
        "saikou": 4.84,
        "heikin": 3.83,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 3.141
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 222.127,
        "saikou": 2.87,
        "heikin": 2.55,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.947
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 222.127,
        "saikou": 2.29,
        "heikin": 1.84,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.619
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 222.127,
        "saikou": 4.41,
        "heikin": 3.55,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 2.555
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 222.127,
        "saikou": 2.9,
        "heikin": 1.84,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 1.841
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.851
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.863
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.881
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.869
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.859
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.865
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.976
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 195.93,
        "saikou": 1.6,
        "heikin": 1.14,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.926
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 207.473,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.964
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 207.473,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.002
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.984
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 207.473,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.931
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.017
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.994
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.027
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 210.473,
        "saikou": 1.7,
        "heikin": 0.8,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.911
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 210.473,
        "saikou": 1.7,
        "heikin": 0.8,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.896
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 224.473,
        "saikou": 1.7,
        "heikin": 0.82,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.91
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 176.473,
        "saikou": 2.4,
        "heikin": 0.93,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.951
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.7,
        "heikin": 0.8,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.952
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 2.4,
        "heikin": 0.92,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.965
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.7,
        "heikin": 0.86,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.943
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.16,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.942
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.32,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.939
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.12
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.08,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.08
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.7,
        "heikin": 0.86,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.019
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 176.473,
        "saikou": 1.7,
        "heikin": 0.81,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.036
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 176.473,
        "saikou": 1.7,
        "heikin": 0.81,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.998
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 176.473,
        "saikou": 2.4,
        "heikin": 0.92,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.927
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 176.473,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.967
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.978
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.982
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.941
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.97
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.999
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.005
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.018
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.058
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.046
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.016
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 176.473,
        "saikou": 1.6,
        "heikin": 1.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.014
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 224.473,
        "saikou": 1.6,
        "heikin": 0.76,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.731
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 224.473,
        "saikou": 1.07,
        "heikin": 0.49,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.753
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 224.473,
        "saikou": 1.07,
        "heikin": 0.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.769
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 224.473,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.77
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 1.1,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.774
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 1.09,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.851
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 270.962,
        "saikou": 6.88,
        "heikin": 5.01,
        "boshuAvg30d": 163.2,
        "heikinAvg30d": 3.875
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 178.886,
        "saikou": 5.53,
        "heikin": 4.15,
        "boshuAvg30d": 163.2,
        "heikinAvg30d": 3.307
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 195.592,
        "saikou": 4.56,
        "heikin": 3.66,
        "boshuAvg30d": 163.2,
        "heikinAvg30d": 2.964
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 186.642,
        "saikou": 2.93,
        "heikin": 2.44,
        "boshuAvg30d": 163.2,
        "heikinAvg30d": 2.832
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 187.686,
        "saikou": 2.93,
        "heikin": 2.36,
        "boshuAvg30d": 163.2,
        "heikinAvg30d": 2.762
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 195.59,
        "saikou": 3.81,
        "heikin": 2.91,
        "boshuAvg30d": 163.2,
        "heikinAvg30d": 2.95
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 214.745,
        "saikou": 4.53,
        "heikin": 3.35,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 3.18
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 304.917,
        "saikou": 4.53,
        "heikin": 3.22,
        "boshuAvg30d": 164.2,
        "heikinAvg30d": 3.358
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 308.745,
        "saikou": 5.81,
        "heikin": 4.17,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 3.546
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 229.761,
        "saikou": 7.07,
        "heikin": 5.16,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 3.829
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 308.745,
        "saikou": 6.5,
        "heikin": 4.61,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 4.045
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 305.445,
        "saikou": 6.32,
        "heikin": 4.82,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 3.854
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 214.469,
        "saikou": 6.31,
        "heikin": 4.78,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 3.563
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 273.469,
        "saikou": 3.79,
        "heikin": 2.86,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 3.25
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 175.469,
        "saikou": 2.4,
        "heikin": 1.75,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 2.928
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 148.617,
        "saikou": 2.45,
        "heikin": 2.23,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 3.071
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 179.617,
        "saikou": 2.52,
        "heikin": 2.32,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 3.467
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 252.469,
        "saikou": 2.57,
        "heikin": 2.4,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 4.007
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 245.01,
        "saikou": 2.45,
        "heikin": 2.29,
        "boshuAvg30d": 175.2,
        "heikinAvg30d": 4.023
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 245.01,
        "saikou": 2.4,
        "heikin": 1.52,
        "boshuAvg30d": 175.2,
        "heikinAvg30d": 4.008
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 237.491,
        "saikou": 2.34,
        "heikin": 1.87,
        "boshuAvg30d": 176.2,
        "heikinAvg30d": 3.842
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 231.605,
        "saikou": 2.34,
        "heikin": 1.33,
        "boshuAvg30d": 176.2,
        "heikinAvg30d": 3.982
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 241.521,
        "saikou": 2.99,
        "heikin": 1.67,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 3.931
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 239.523,
        "saikou": 2.9,
        "heikin": 1.58,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 3.919
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 239.523,
        "saikou": 2.9,
        "heikin": 0.78,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 3.474
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 237.575,
        "saikou": 2.79,
        "heikin": 0.74,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 3.602
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 245.496,
        "saikou": 3.29,
        "heikin": 0.85,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 4.009
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 243.596,
        "saikou": 3.1,
        "heikin": 1.82,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 4.549
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 245.096,
        "saikou": 3.23,
        "heikin": 1.82,
        "boshuAvg30d": 175.2,
        "heikinAvg30d": 4.848
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 246.996,
        "saikou": 2.74,
        "heikin": 2.61,
        "boshuAvg30d": 174.1,
        "heikinAvg30d": 5.074
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 196.996,
        "saikou": 5.09,
        "heikin": 4.01,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 5.163
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 153.37,
        "saikou": 7.31,
        "heikin": 4.94,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 5.809
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 257.37,
        "saikou": 8.23,
        "heikin": 6.21,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 5.866
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 292.288,
        "saikou": 8.82,
        "heikin": 6.73,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 6.178
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 267.297,
        "saikou": 8.85,
        "heikin": 6.66,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 5.899
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 264.445,
        "saikou": 9.2,
        "heikin": 6.94,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 5.995
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 255.011,
        "saikou": 8.15,
        "heikin": 6,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 6.017
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 293.839,
        "saikou": 8.09,
        "heikin": 5.77,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 5.836
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 296.978,
        "saikou": 7.92,
        "heikin": 5.66,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 5.478
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 310.269,
        "saikou": 7.51,
        "heikin": 5.34,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 5.046
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 303.961,
        "saikou": 7.73,
        "heikin": 5.5,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 4.89
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 294.335,
        "saikou": 7.34,
        "heikin": 5.24,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 4.768
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 293.797,
        "saikou": 7.02,
        "heikin": 5.08,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 4.583
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 268.797,
        "saikou": 7.09,
        "heikin": 5.07,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.515
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 268.797,
        "saikou": 6.93,
        "heikin": 4.89,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.508
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 266.813,
        "saikou": 6.54,
        "heikin": 4.74,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 4.083
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 268.797,
        "saikou": 6.52,
        "heikin": 4.61,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 4.083
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 165.797,
        "saikou": 5.53,
        "heikin": 3.87,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 3.587
      }
    ]
  }
};
