// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/14〜2026/11/12）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-13",
  "fetchedAt": "2026-11-13",
  "avgWindowLabel": "過去30日平均（2026/10/14〜2026/11/12）",
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
      "boshu": 1316,
      "ouatsu": 1789.794,
      "saikou": 9.94,
      "heikin": 2.69,
      "boshuAvg30d": 1116.9,
      "heikinAvg30d": 2.84
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1316,
      "ouatsu": 1888.537,
      "saikou": 9.99,
      "heikin": 2.68,
      "boshuAvg30d": 1116.9,
      "heikinAvg30d": 2.801
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1316,
      "ouatsu": 1948.484,
      "saikou": 9.99,
      "heikin": 2.6,
      "boshuAvg30d": 1116.9,
      "heikinAvg30d": 2.715
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1315,
      "ouatsu": 1878.019,
      "saikou": 9.99,
      "heikin": 2.49,
      "boshuAvg30d": 1116.5,
      "heikinAvg30d": 2.662
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1309,
      "ouatsu": 1861.4,
      "saikou": 9.99,
      "heikin": 2.73,
      "boshuAvg30d": 1112.3,
      "heikinAvg30d": 2.718
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1309,
      "ouatsu": 1807.762,
      "saikou": 9.99,
      "heikin": 2.92,
      "boshuAvg30d": 1111.7,
      "heikinAvg30d": 2.766
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1306,
      "ouatsu": 1789.24,
      "saikou": 10,
      "heikin": 2.88,
      "boshuAvg30d": 1108.7,
      "heikinAvg30d": 2.908
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1310,
      "ouatsu": 1728.269,
      "saikou": 9.99,
      "heikin": 2.61,
      "boshuAvg30d": 1111.5,
      "heikinAvg30d": 3.151
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1310,
      "ouatsu": 1760.035,
      "saikou": 10,
      "heikin": 2.32,
      "boshuAvg30d": 1112.7,
      "heikinAvg30d": 3.228
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1312,
      "ouatsu": 1695.342,
      "saikou": 10,
      "heikin": 2.75,
      "boshuAvg30d": 1114.1,
      "heikinAvg30d": 3.267
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1312,
      "ouatsu": 1589.682,
      "saikou": 10,
      "heikin": 2.9,
      "boshuAvg30d": 1114.1,
      "heikinAvg30d": 3.306
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1312,
      "ouatsu": 1509.875,
      "saikou": 10,
      "heikin": 2.62,
      "boshuAvg30d": 1114.1,
      "heikinAvg30d": 3.354
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1371,
      "ouatsu": 1530.525,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1173.7,
      "heikinAvg30d": 3.445
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1396,
      "ouatsu": 1632.795,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1197.5,
      "heikinAvg30d": 3.412
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1415,
      "ouatsu": 1638.017,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1217.7,
      "heikinAvg30d": 3.209
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1430,
      "ouatsu": 1658.13,
      "saikou": 10,
      "heikin": 3.38,
      "boshuAvg30d": 1234.2,
      "heikinAvg30d": 2.94
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1430,
      "ouatsu": 1902.352,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1234.6,
      "heikinAvg30d": 2.83
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1430,
      "ouatsu": 1805.913,
      "saikou": 10,
      "heikin": 3.6,
      "boshuAvg30d": 1238.4,
      "heikinAvg30d": 2.817
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1359,
      "ouatsu": 1758.095,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1183.6,
      "heikinAvg30d": 2.821
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1364,
      "ouatsu": 1744.999,
      "saikou": 10,
      "heikin": 3.18,
      "boshuAvg30d": 1187.4,
      "heikinAvg30d": 2.83
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1368,
      "ouatsu": 1753.69,
      "saikou": 10,
      "heikin": 3.13,
      "boshuAvg30d": 1189.7,
      "heikinAvg30d": 2.795
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1372,
      "ouatsu": 1751.65,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1191.3,
      "heikinAvg30d": 2.822
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1366,
      "ouatsu": 1774.18,
      "saikou": 10,
      "heikin": 3.15,
      "boshuAvg30d": 1187.1,
      "heikinAvg30d": 2.741
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1366,
      "ouatsu": 1718.08,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1186.5,
      "heikinAvg30d": 2.803
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1347,
      "ouatsu": 1506.219,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1166.6,
      "heikinAvg30d": 2.617
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1347,
      "ouatsu": 1619.965,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1166.6,
      "heikinAvg30d": 2.652
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1347,
      "ouatsu": 1782.074,
      "saikou": 10,
      "heikin": 2.35,
      "boshuAvg30d": 1166.6,
      "heikinAvg30d": 2.819
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1343,
      "ouatsu": 1727.67,
      "saikou": 10,
      "heikin": 2.31,
      "boshuAvg30d": 1163.5,
      "heikinAvg30d": 3.01
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1342,
      "ouatsu": 1636.391,
      "saikou": 10,
      "heikin": 2.47,
      "boshuAvg30d": 1161.3,
      "heikinAvg30d": 3.104
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1336,
      "ouatsu": 1434.715,
      "saikou": 9.99,
      "heikin": 2.68,
      "boshuAvg30d": 1155.3,
      "heikinAvg30d": 3.149
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1407,
      "ouatsu": 1443.744,
      "saikou": 10,
      "heikin": 3.44,
      "boshuAvg30d": 1220.4,
      "heikinAvg30d": 3.267
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1407,
      "ouatsu": 1531.096,
      "saikou": 10,
      "heikin": 3.62,
      "boshuAvg30d": 1220.1,
      "heikinAvg30d": 3.411
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1407,
      "ouatsu": 1641.511,
      "saikou": 10,
      "heikin": 3.67,
      "boshuAvg30d": 1220.4,
      "heikinAvg30d": 3.697
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1405,
      "ouatsu": 1524.521,
      "saikou": 10,
      "heikin": 3.62,
      "boshuAvg30d": 1219.0,
      "heikinAvg30d": 3.838
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1403,
      "ouatsu": 1569.251,
      "saikou": 10,
      "heikin": 3.97,
      "boshuAvg30d": 1210.7,
      "heikinAvg30d": 3.748
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1398,
      "ouatsu": 1545.293,
      "saikou": 10,
      "heikin": 4,
      "boshuAvg30d": 1205.7,
      "heikinAvg30d": 3.742
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1394,
      "ouatsu": 1579.02,
      "saikou": 10,
      "heikin": 3.98,
      "boshuAvg30d": 1200.1,
      "heikinAvg30d": 3.566
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1394,
      "ouatsu": 1663.625,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1200.1,
      "heikinAvg30d": 3.618
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1394,
      "ouatsu": 1819.685,
      "saikou": 10,
      "heikin": 3.49,
      "boshuAvg30d": 1200.1,
      "heikinAvg30d": 3.417
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1392,
      "ouatsu": 1825.66,
      "saikou": 10,
      "heikin": 3.52,
      "boshuAvg30d": 1199.0,
      "heikinAvg30d": 3.321
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1385,
      "ouatsu": 1782.58,
      "saikou": 10,
      "heikin": 3.62,
      "boshuAvg30d": 1191.4,
      "heikinAvg30d": 3.262
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1385,
      "ouatsu": 1746.38,
      "saikou": 10,
      "heikin": 3.55,
      "boshuAvg30d": 1191.4,
      "heikinAvg30d": 3.215
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1296,
      "ouatsu": 1815.397,
      "saikou": 10,
      "heikin": 4.12,
      "boshuAvg30d": 1101.8,
      "heikinAvg30d": 3.106
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1299,
      "ouatsu": 1688.398,
      "saikou": 10,
      "heikin": 3.33,
      "boshuAvg30d": 1104.8,
      "heikinAvg30d": 3.062
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1298,
      "ouatsu": 1529.064,
      "saikou": 10,
      "heikin": 3.46,
      "boshuAvg30d": 1108.0,
      "heikinAvg30d": 3.121
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1291,
      "ouatsu": 1603.263,
      "saikou": 10,
      "heikin": 3.77,
      "boshuAvg30d": 1099.2,
      "heikinAvg30d": 3.048
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1283,
      "ouatsu": 1646.637,
      "saikou": 10,
      "heikin": 3.74,
      "boshuAvg30d": 1090.9,
      "heikinAvg30d": 3.086
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1275,
      "ouatsu": 1665.263,
      "saikou": 9.99,
      "heikin": 3.65,
      "boshuAvg30d": 1082.9,
      "heikinAvg30d": 2.855
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
        "ouatsu": 91.918,
        "saikou": 9.57,
        "heikin": 4.37,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 3.628
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 127.918,
        "saikou": 9.57,
        "heikin": 2.09,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 4.013
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 147.758,
        "saikou": 9.91,
        "heikin": 3.92,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 3.647
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 121.908,
        "saikou": 9.57,
        "heikin": 3.43,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 3.873
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 144.768,
        "saikou": 9.91,
        "heikin": 4.02,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.003
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 95.908,
        "saikou": 9.57,
        "heikin": 4.1,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 3.564
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 75.118,
        "saikou": 9.57,
        "heikin": 4.99,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 3.838
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 48.118,
        "saikou": 9.8,
        "heikin": 8.05,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.39
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 100.118,
        "saikou": 9.6,
        "heikin": 4.56,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.209
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 120.118,
        "saikou": 9.57,
        "heikin": 4.17,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.165
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 96.118,
        "saikou": 9.6,
        "heikin": 5.06,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.236
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 125.118,
        "saikou": 9.6,
        "heikin": 4.7,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.297
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 129.118,
        "saikou": 9.57,
        "heikin": 4.92,
        "boshuAvg30d": 49.4,
        "heikinAvg30d": 4.281
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 129.118,
        "saikou": 9.57,
        "heikin": 5.35,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 4.368
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 172.163,
        "saikou": 9.91,
        "heikin": 4.84,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 4.306
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 180.108,
        "saikou": 7.6,
        "heikin": 2.9,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 4.33
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 209.963,
        "saikou": 9.4,
        "heikin": 4.38,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 4.891
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 168.908,
        "saikou": 9.57,
        "heikin": 3.11,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 4.362
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 151.918,
        "saikou": 8,
        "heikin": 2.6,
        "boshuAvg30d": 51.4,
        "heikinAvg30d": 4.288
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 192.973,
        "saikou": 8.15,
        "heikin": 4.04,
        "boshuAvg30d": 51.8,
        "heikinAvg30d": 3.972
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 194.963,
        "saikou": 9.91,
        "heikin": 4.44,
        "boshuAvg30d": 51.8,
        "heikinAvg30d": 3.906
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 151.918,
        "saikou": 8,
        "heikin": 2.79,
        "boshuAvg30d": 52.8,
        "heikinAvg30d": 3.832
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 192.973,
        "saikou": 9.91,
        "heikin": 4.36,
        "boshuAvg30d": 52.8,
        "heikinAvg30d": 4.047
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 151.918,
        "saikou": 8,
        "heikin": 2.83,
        "boshuAvg30d": 52.8,
        "heikinAvg30d": 4.114
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 112.918,
        "saikou": 9.24,
        "heikin": 3.58,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 3.87
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 140.95,
        "saikou": 9.24,
        "heikin": 3.25,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 3.716
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 148,
        "saikou": 7.8,
        "heikin": 2.51,
        "boshuAvg30d": 51.2,
        "heikinAvg30d": 3.799
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 158,
        "saikou": 8.3,
        "heikin": 2.78,
        "boshuAvg30d": 50.8,
        "heikinAvg30d": 4.703
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 161.918,
        "saikou": 8,
        "heikin": 2.84,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 4.704
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 125.95,
        "saikou": 8,
        "heikin": 2.21,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 5.288
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 91.95,
        "saikou": 8,
        "heikin": 4.39,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 4.914
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 44.95,
        "saikou": 9.8,
        "heikin": 7.85,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 5.617
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 86.958,
        "saikou": 9.91,
        "heikin": 9.22,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 6.06
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 23.908,
        "saikou": 9.8,
        "heikin": 7.22,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 5.758
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 46.458,
        "saikou": 9.91,
        "heikin": 9.79,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 5.134
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 46.458,
        "saikou": 9.91,
        "heikin": 9.79,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 5.23
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 33.908,
        "saikou": 9.8,
        "heikin": 8.37,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 4.745
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 33.908,
        "saikou": 9.8,
        "heikin": 5.56,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 5.081
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 163.468,
        "saikou": 6.07,
        "heikin": 5.95,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 4.933
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 127.908,
        "saikou": 6.14,
        "heikin": 5.88,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 5.117
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 83.458,
        "saikou": 9.91,
        "heikin": 9.19,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 4.799
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 45.908,
        "saikou": 9.57,
        "heikin": 7.94,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.418
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 86.458,
        "saikou": 9.91,
        "heikin": 9.23,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 4.184
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 86.458,
        "saikou": 9.91,
        "heikin": 9.18,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 4.266
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 48.908,
        "saikou": 9.8,
        "heikin": 8.22,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 4.501
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 69.468,
        "saikou": 9.91,
        "heikin": 9.58,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 4.167
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 56.908,
        "saikou": 9.8,
        "heikin": 5.84,
        "boshuAvg30d": 49.8,
        "heikinAvg30d": 3.87
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 94.958,
        "saikou": 9.91,
        "heikin": 7.5,
        "boshuAvg30d": 50.2,
        "heikinAvg30d": 3.716
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 73.03,
        "saikou": 6.99,
        "heikin": 4.03,
        "boshuAvg30d": 120.4,
        "heikinAvg30d": 5.358
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 73.03,
        "saikou": 7.33,
        "heikin": 4.63,
        "boshuAvg30d": 120.4,
        "heikinAvg30d": 5.485
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 107.298,
        "saikou": 7.34,
        "heikin": 4.29,
        "boshuAvg30d": 120.4,
        "heikinAvg30d": 5.493
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 94.868,
        "saikou": 7.44,
        "heikin": 4.74,
        "boshuAvg30d": 120.4,
        "heikinAvg30d": 5.539
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 101.49,
        "saikou": 7.46,
        "heikin": 4.4,
        "boshuAvg30d": 120.4,
        "heikinAvg30d": 5.361
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 101.49,
        "saikou": 7.44,
        "heikin": 3.92,
        "boshuAvg30d": 120.4,
        "heikinAvg30d": 5.199
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 94.868,
        "saikou": 7.43,
        "heikin": 4.33,
        "boshuAvg30d": 119.4,
        "heikinAvg30d": 5.376
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 109.368,
        "saikou": 7.43,
        "heikin": 3.93,
        "boshuAvg30d": 119.8,
        "heikinAvg30d": 5.152
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 113.366,
        "saikou": 6.56,
        "heikin": 3.48,
        "boshuAvg30d": 119.4,
        "heikinAvg30d": 4.958
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 98.866,
        "saikou": 6.3,
        "heikin": 3.82,
        "boshuAvg30d": 119.8,
        "heikinAvg30d": 5.118
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 113.366,
        "saikou": 7,
        "heikin": 3.94,
        "boshuAvg30d": 119.8,
        "heikinAvg30d": 5.264
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 109.715,
        "saikou": 7,
        "heikin": 3.97,
        "boshuAvg30d": 119.8,
        "heikinAvg30d": 5.169
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 111.365,
        "saikou": 7,
        "heikin": 3.69,
        "boshuAvg30d": 126.8,
        "heikinAvg30d": 5.378
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 99.365,
        "saikou": 7,
        "heikin": 3.8,
        "boshuAvg30d": 131.0,
        "heikinAvg30d": 5.2
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 113.366,
        "saikou": 7,
        "heikin": 3.97,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 5.527
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 101.366,
        "saikou": 7,
        "heikin": 4.66,
        "boshuAvg30d": 136.4,
        "heikinAvg30d": 5.488
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 100.925,
        "saikou": 10,
        "heikin": 5.59,
        "boshuAvg30d": 136.4,
        "heikinAvg30d": 5.431
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 112.925,
        "saikou": 10,
        "heikin": 6.84,
        "boshuAvg30d": 136.4,
        "heikinAvg30d": 5.521
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 127.362,
        "saikou": 10,
        "heikin": 3.92,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 5.294
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 125.366,
        "saikou": 10,
        "heikin": 4.49,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 5.403
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 121.411,
        "saikou": 10,
        "heikin": 4.36,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 5.255
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 123.407,
        "saikou": 10,
        "heikin": 4.12,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 5.43
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 112.796,
        "saikou": 10,
        "heikin": 4.42,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 5.389
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 115.042,
        "saikou": 10,
        "heikin": 4.5,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 5.456
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 112.796,
        "saikou": 10,
        "heikin": 4.56,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 5.701
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 126.696,
        "saikou": 10,
        "heikin": 5.21,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 5.59
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 139.362,
        "saikou": 10,
        "heikin": 3.77,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 5.021
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 139.362,
        "saikou": 10,
        "heikin": 5.15,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 5.261
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 115.362,
        "saikou": 10,
        "heikin": 7.12,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 5.269
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 103.362,
        "saikou": 6.55,
        "heikin": 4.03,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 4.885
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 103.362,
        "saikou": 6,
        "heikin": 4.18,
        "boshuAvg30d": 135.4,
        "heikinAvg30d": 5.026
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 103.362,
        "saikou": 9.5,
        "heikin": 4.59,
        "boshuAvg30d": 135.4,
        "heikinAvg30d": 4.563
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 87.365,
        "saikou": 4.19,
        "heikin": 2.98,
        "boshuAvg30d": 135.4,
        "heikinAvg30d": 4.449
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 87.365,
        "saikou": 2.39,
        "heikin": 2.13,
        "boshuAvg30d": 135.4,
        "heikinAvg30d": 4.309
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 99.365,
        "saikou": 5.56,
        "heikin": 3.46,
        "boshuAvg30d": 134.4,
        "heikinAvg30d": 4.385
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 101.712,
        "saikou": 4,
        "heikin": 2.37,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 3.989
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 100.016,
        "saikou": 2.5,
        "heikin": 1.98,
        "boshuAvg30d": 132.4,
        "heikinAvg30d": 3.555
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 101.366,
        "saikou": 2.5,
        "heikin": 1.96,
        "boshuAvg30d": 132.4,
        "heikinAvg30d": 3.255
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 113.086,
        "saikou": 4.41,
        "heikin": 2.13,
        "boshuAvg30d": 132.4,
        "heikinAvg30d": 3.212
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 113.366,
        "saikou": 4.33,
        "heikin": 1.92,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 3.614
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 109.411,
        "saikou": 4.89,
        "heikin": 2.41,
        "boshuAvg30d": 131.4,
        "heikinAvg30d": 3.548
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 109.411,
        "saikou": 4.87,
        "heikin": 2.39,
        "boshuAvg30d": 131.4,
        "heikinAvg30d": 3.752
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 86.866,
        "saikou": 4.89,
        "heikin": 3.27,
        "boshuAvg30d": 42.4,
        "heikinAvg30d": 3.688
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 85.516,
        "saikou": 5.85,
        "heikin": 4.13,
        "boshuAvg30d": 42.4,
        "heikinAvg30d": 4.017
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 85.516,
        "saikou": 4.93,
        "heikin": 3.3,
        "boshuAvg30d": 42.4,
        "heikinAvg30d": 3.922
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 86.866,
        "saikou": 8.67,
        "heikin": 5.8,
        "boshuAvg30d": 41.4,
        "heikinAvg30d": 4.56
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 86.866,
        "saikou": 8.39,
        "heikin": 5.67,
        "boshuAvg30d": 39.8,
        "heikinAvg30d": 4.432
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 85.11,
        "saikou": 9.21,
        "heikin": 4.62,
        "boshuAvg30d": 39.4,
        "heikinAvg30d": 5.002
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 273,
        "ouatsu": 559.326,
        "saikou": 2.42,
        "heikin": 1.31,
        "boshuAvg30d": 240.5,
        "heikinAvg30d": 2.681
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 273,
        "ouatsu": 546.258,
        "saikou": 3.04,
        "heikin": 1,
        "boshuAvg30d": 240.5,
        "heikinAvg30d": 2.667
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 273,
        "ouatsu": 542.992,
        "saikou": 3.15,
        "heikin": 0.9,
        "boshuAvg30d": 240.5,
        "heikinAvg30d": 2.739
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 273,
        "ouatsu": 528.894,
        "saikou": 1.54,
        "heikin": 0.5,
        "boshuAvg30d": 240.5,
        "heikinAvg30d": 2.538
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 271,
        "ouatsu": 496.295,
        "saikou": 1.27,
        "heikin": 0.64,
        "boshuAvg30d": 239.1,
        "heikinAvg30d": 2.567
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 271,
        "ouatsu": 532.474,
        "saikou": 1.58,
        "heikin": 0.53,
        "boshuAvg30d": 238.5,
        "heikinAvg30d": 2.484
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 269,
        "ouatsu": 538.583,
        "saikou": 7.57,
        "heikin": 0.81,
        "boshuAvg30d": 236.5,
        "heikinAvg30d": 2.519
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 271,
        "ouatsu": 533.343,
        "saikou": 3.1,
        "heikin": 0.74,
        "boshuAvg30d": 238.5,
        "heikinAvg30d": 2.631
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 271,
        "ouatsu": 491.629,
        "saikou": 7.28,
        "heikin": 1.54,
        "boshuAvg30d": 238.5,
        "heikinAvg30d": 2.858
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 272,
        "ouatsu": 417.339,
        "saikou": 7.42,
        "heikin": 3.34,
        "boshuAvg30d": 239.5,
        "heikinAvg30d": 2.66
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 272,
        "ouatsu": 271.271,
        "saikou": 6.97,
        "heikin": 2.77,
        "boshuAvg30d": 239.5,
        "heikinAvg30d": 2.637
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 272,
        "ouatsu": 243.937,
        "saikou": 7.13,
        "heikin": 2.79,
        "boshuAvg30d": 239.5,
        "heikinAvg30d": 2.879
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 292,
        "ouatsu": 257.407,
        "saikou": 7.01,
        "heikin": 2.98,
        "boshuAvg30d": 258.9,
        "heikinAvg30d": 3.106
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 300,
        "ouatsu": 313.071,
        "saikou": 7.05,
        "heikin": 2.64,
        "boshuAvg30d": 266.9,
        "heikinAvg30d": 3.173
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 304,
        "ouatsu": 296.886,
        "saikou": 7.09,
        "heikin": 3.34,
        "boshuAvg30d": 271.5,
        "heikinAvg30d": 3.016
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 309,
        "ouatsu": 296.886,
        "saikou": 7.04,
        "heikin": 3.12,
        "boshuAvg30d": 276.8,
        "heikinAvg30d": 2.886
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 309,
        "ouatsu": 512.951,
        "saikou": 7.02,
        "heikin": 2.25,
        "boshuAvg30d": 277.1,
        "heikinAvg30d": 2.562
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 309,
        "ouatsu": 461.849,
        "saikou": 8.05,
        "heikin": 3.71,
        "boshuAvg30d": 281.0,
        "heikinAvg30d": 2.707
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 299,
        "ouatsu": 502.227,
        "saikou": 10,
        "heikin": 3.77,
        "boshuAvg30d": 272.2,
        "heikinAvg30d": 2.35
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 299,
        "ouatsu": 441.309,
        "saikou": 10,
        "heikin": 3.12,
        "boshuAvg30d": 272.2,
        "heikinAvg30d": 2.501
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 299,
        "ouatsu": 495.155,
        "saikou": 10,
        "heikin": 3.28,
        "boshuAvg30d": 272.8,
        "heikinAvg30d": 2.49
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 299,
        "ouatsu": 498.079,
        "saikou": 10,
        "heikin": 3.4,
        "boshuAvg30d": 272.2,
        "heikinAvg30d": 2.473
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 296,
        "ouatsu": 482.005,
        "saikou": 10,
        "heikin": 3.24,
        "boshuAvg30d": 269.8,
        "heikinAvg30d": 2.498
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 296,
        "ouatsu": 465.156,
        "saikou": 10,
        "heikin": 3.8,
        "boshuAvg30d": 269.8,
        "heikinAvg30d": 2.668
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 294,
        "ouatsu": 471.074,
        "saikou": 9.9,
        "heikin": 1.55,
        "boshuAvg30d": 266.9,
        "heikinAvg30d": 2.224
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 294,
        "ouatsu": 472.594,
        "saikou": 9.9,
        "heikin": 1.19,
        "boshuAvg30d": 266.9,
        "heikinAvg30d": 2.259
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 294,
        "ouatsu": 491.758,
        "saikou": 4.89,
        "heikin": 0.64,
        "boshuAvg30d": 266.9,
        "heikinAvg30d": 2.436
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 294,
        "ouatsu": 497.517,
        "saikou": 3,
        "heikin": 0.55,
        "boshuAvg30d": 266.6,
        "heikinAvg30d": 2.513
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 293,
        "ouatsu": 505.49,
        "saikou": 3,
        "heikin": 0.56,
        "boshuAvg30d": 265.6,
        "heikinAvg30d": 2.809
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 293,
        "ouatsu": 346.571,
        "saikou": 7.54,
        "heikin": 1.53,
        "boshuAvg30d": 265.0,
        "heikinAvg30d": 2.551
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 291,
        "ouatsu": 432.24,
        "saikou": 7.23,
        "heikin": 3.17,
        "boshuAvg30d": 263.0,
        "heikinAvg30d": 2.394
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 291,
        "ouatsu": 532.652,
        "saikou": 7.15,
        "heikin": 2.94,
        "boshuAvg30d": 262.6,
        "heikinAvg30d": 2.375
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 291,
        "ouatsu": 566.494,
        "saikou": 3.94,
        "heikin": 1.61,
        "boshuAvg30d": 262.3,
        "heikinAvg30d": 2.369
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 291,
        "ouatsu": 617.131,
        "saikou": 4.04,
        "heikin": 1.41,
        "boshuAvg30d": 262.3,
        "heikinAvg30d": 2.376
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 291,
        "ouatsu": 608.28,
        "saikou": 6.32,
        "heikin": 2,
        "boshuAvg30d": 260.3,
        "heikinAvg30d": 2.148
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 291,
        "ouatsu": 567.164,
        "saikou": 7.13,
        "heikin": 2.83,
        "boshuAvg30d": 260.3,
        "heikinAvg30d": 2.33
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 293,
        "ouatsu": 606.147,
        "saikou": 7.13,
        "heikin": 2.58,
        "boshuAvg30d": 261.9,
        "heikinAvg30d": 2.524
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 293,
        "ouatsu": 673.717,
        "saikou": 6.89,
        "heikin": 2.29,
        "boshuAvg30d": 261.9,
        "heikinAvg30d": 2.453
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 293,
        "ouatsu": 586.284,
        "saikou": 7.12,
        "heikin": 2.52,
        "boshuAvg30d": 261.9,
        "heikinAvg30d": 2.48
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 293,
        "ouatsu": 616.473,
        "saikou": 7.03,
        "heikin": 2.91,
        "boshuAvg30d": 262.3,
        "heikinAvg30d": 2.288
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 292,
        "ouatsu": 652.443,
        "saikou": 7.19,
        "heikin": 2.57,
        "boshuAvg30d": 260.7,
        "heikinAvg30d": 2.287
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 292,
        "ouatsu": 653.043,
        "saikou": 7.04,
        "heikin": 2.98,
        "boshuAvg30d": 260.7,
        "heikinAvg30d": 2.497
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 291,
        "ouatsu": 604.011,
        "saikou": 7.14,
        "heikin": 3.12,
        "boshuAvg30d": 260.3,
        "heikinAvg30d": 2.276
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 291,
        "ouatsu": 558.403,
        "saikou": 7.02,
        "heikin": 2.13,
        "boshuAvg30d": 260.3,
        "heikinAvg30d": 2.236
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 291,
        "ouatsu": 461.07,
        "saikou": 7.1,
        "heikin": 2.78,
        "boshuAvg30d": 263.3,
        "heikinAvg30d": 2.329
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 289,
        "ouatsu": 505.184,
        "saikou": 7.01,
        "heikin": 2.72,
        "boshuAvg30d": 258.3,
        "heikinAvg30d": 2.396
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 287,
        "ouatsu": 543.387,
        "saikou": 7.05,
        "heikin": 2.94,
        "boshuAvg30d": 256.6,
        "heikinAvg30d": 2.892
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 286,
        "ouatsu": 501.233,
        "saikou": 7.01,
        "heikin": 3.03,
        "boshuAvg30d": 254.9,
        "heikinAvg30d": 2.83
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 243,
        "ouatsu": 357.28,
        "saikou": 9.29,
        "heikin": 2.83,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 1.725
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 243,
        "ouatsu": 360.918,
        "saikou": 9.29,
        "heikin": 3.77,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 1.754
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 243,
        "ouatsu": 383.975,
        "saikou": 9.29,
        "heikin": 3.77,
        "boshuAvg30d": 136.7,
        "heikinAvg30d": 1.796
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 242,
        "ouatsu": 387.863,
        "saikou": 9.29,
        "heikin": 3.68,
        "boshuAvg30d": 136.3,
        "heikinAvg30d": 1.852
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 242,
        "ouatsu": 395.971,
        "saikou": 9.29,
        "heikin": 3.31,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 1.879
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 241,
        "ouatsu": 413.036,
        "saikou": 9.29,
        "heikin": 3.39,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 1.815
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 240,
        "ouatsu": 432.891,
        "saikou": 9.29,
        "heikin": 3.16,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 1.699
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 240,
        "ouatsu": 407.701,
        "saikou": 8.94,
        "heikin": 2.95,
        "boshuAvg30d": 134.3,
        "heikinAvg30d": 1.671
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 240,
        "ouatsu": 415.301,
        "saikou": 8.94,
        "heikin": 2.45,
        "boshuAvg30d": 134.9,
        "heikinAvg30d": 1.599
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 240,
        "ouatsu": 399.387,
        "saikou": 8.94,
        "heikin": 2.05,
        "boshuAvg30d": 134.9,
        "heikinAvg30d": 1.652
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 240,
        "ouatsu": 401.377,
        "saikou": 5.12,
        "heikin": 1.94,
        "boshuAvg30d": 134.9,
        "heikinAvg30d": 1.568
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 240,
        "ouatsu": 393.981,
        "saikou": 8.94,
        "heikin": 2.13,
        "boshuAvg30d": 134.9,
        "heikinAvg30d": 1.502
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 250,
        "ouatsu": 397.381,
        "saikou": 8.94,
        "heikin": 2.33,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.74
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 255,
        "ouatsu": 397.381,
        "saikou": 5.54,
        "heikin": 2.12,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.737
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 258,
        "ouatsu": 397.403,
        "saikou": 8.94,
        "heikin": 2.42,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 2.047
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 260,
        "ouatsu": 395.903,
        "saikou": 8.94,
        "heikin": 3.09,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 2.06
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 260,
        "ouatsu": 379.672,
        "saikou": 9.37,
        "heikin": 3.42,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 2.117
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 260,
        "ouatsu": 397.762,
        "saikou": 9.87,
        "heikin": 3.49,
        "boshuAvg30d": 153.7,
        "heikinAvg30d": 2.245
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 265,
        "ouatsu": 365.63,
        "saikou": 9.49,
        "heikin": 3.54,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 2.555
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 265,
        "ouatsu": 299.649,
        "saikou": 9.93,
        "heikin": 3.9,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 2.519
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 265,
        "ouatsu": 223.619,
        "saikou": 9.49,
        "heikin": 2.42,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 2.574
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 265,
        "ouatsu": 221.637,
        "saikou": 9.49,
        "heikin": 2.5,
        "boshuAvg30d": 158.7,
        "heikinAvg30d": 2.57
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 264,
        "ouatsu": 231.459,
        "saikou": 9.49,
        "heikin": 3.36,
        "boshuAvg30d": 157.7,
        "heikinAvg30d": 2.501
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 263,
        "ouatsu": 231.557,
        "saikou": 9.49,
        "heikin": 4.1,
        "boshuAvg30d": 156.7,
        "heikinAvg30d": 2.596
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 259,
        "ouatsu": 179.252,
        "saikou": 9.49,
        "heikin": 4.49,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 2.652
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 259,
        "ouatsu": 173.322,
        "saikou": 10,
        "heikin": 4.63,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 2.59
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 259,
        "ouatsu": 227.445,
        "saikou": 9.49,
        "heikin": 3.46,
        "boshuAvg30d": 152.7,
        "heikinAvg30d": 2.432
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 259,
        "ouatsu": 233.333,
        "saikou": 9.49,
        "heikin": 2.78,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 2.556
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 259,
        "ouatsu": 255.543,
        "saikou": 9.49,
        "heikin": 2.96,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 2.621
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 259,
        "ouatsu": 237.453,
        "saikou": 9.69,
        "heikin": 3.09,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 2.536
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 257,
        "ouatsu": 205.588,
        "saikou": 9.69,
        "heikin": 3.03,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 2.713
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 257,
        "ouatsu": 270.097,
        "saikou": 9.69,
        "heikin": 2.96,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 2.798
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 257,
        "ouatsu": 193.382,
        "saikou": 9.69,
        "heikin": 2.74,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 2.768
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 256,
        "ouatsu": 169.205,
        "saikou": 9.99,
        "heikin": 3.57,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.896
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 256,
        "ouatsu": 173.201,
        "saikou": 9.99,
        "heikin": 3.41,
        "boshuAvg30d": 149.7,
        "heikinAvg30d": 2.79
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 255,
        "ouatsu": 196.58,
        "saikou": 9.69,
        "heikin": 3.2,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 2.582
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 253,
        "ouatsu": 206.686,
        "saikou": 9.69,
        "heikin": 3.17,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 2.319
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 253,
        "ouatsu": 229.92,
        "saikou": 9.69,
        "heikin": 3.32,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 2.282
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 253,
        "ouatsu": 267.413,
        "saikou": 9.69,
        "heikin": 2.71,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 1.94
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 253,
        "ouatsu": 267.413,
        "saikou": 9.69,
        "heikin": 2.81,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 1.863
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 253,
        "ouatsu": 259.498,
        "saikou": 9.69,
        "heikin": 2.7,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 1.735
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 253,
        "ouatsu": 236.415,
        "saikou": 9.27,
        "heikin": 1.76,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 1.703
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 255,
        "ouatsu": 244.346,
        "saikou": 9.27,
        "heikin": 1.75,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 1.637
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 255,
        "ouatsu": 246.344,
        "saikou": 9.27,
        "heikin": 1.71,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.805
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 255,
        "ouatsu": 267.429,
        "saikou": 9.27,
        "heikin": 2.68,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.815
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 253,
        "ouatsu": 267.429,
        "saikou": 9.27,
        "heikin": 2.62,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 1.928
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 252,
        "ouatsu": 265.539,
        "saikou": 9.27,
        "heikin": 2.76,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.829
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 249,
        "ouatsu": 262.139,
        "saikou": 9.27,
        "heikin": 3.14,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 1.886
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 24.59,
        "saikou": 9.9,
        "heikin": 6.5,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 1.969
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 9.9,
        "heikin": 5.8,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 1.749
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 9.9,
        "heikin": 5.79,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 1.506
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 9.9,
        "heikin": 6.22,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 1.646
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 28.898,
        "saikou": 9.9,
        "heikin": 6.72,
        "boshuAvg30d": 58.2,
        "heikinAvg30d": 1.752
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 20.742,
        "saikou": 8.79,
        "heikin": 7.28,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 1.629
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 10.05,
        "saikou": 10,
        "heikin": 9.56,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.166
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 5.83,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.391
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 2.2,
        "heikin": 2.18,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.64
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 10,
        "heikin": 9.44,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.913
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 10,
        "heikin": 9.4,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.986
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8.87,
        "heikin": 5.66,
        "boshuAvg30d": 58.6,
        "heikinAvg30d": 2.719
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 8.87,
        "heikin": 8.87,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.525
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 22.426,
        "saikou": 10,
        "heikin": 9.29,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.776
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 28.898,
        "saikou": 10,
        "heikin": 9.44,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 3.211
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 8.87,
        "heikin": 6.04,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 3.1
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 3.655
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 5.676,
        "saikou": 9.99,
        "heikin": 9.01,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 3.483
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 1.9,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 3.816
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 1.9,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 4.206
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 1.9,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 4.988
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 1.9,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 5.38
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 1.9,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 4.279
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 1.9,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 67.2,
        "heikinAvg30d": 4.138
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 20.9,
        "saikou": 9.9,
        "heikin": 1.25,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 2.513
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 1.9,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 2.408
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 1.9,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 4.576
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 1.9,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 3.413
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 1.9,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 4.363
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 1.9,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 4.145
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 5.34
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 6.147
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.2,
        "heikinAvg30d": 5.107
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.2,
        "heikinAvg30d": 4.931
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.2,
        "heikinAvg30d": 4.971
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.2,
        "heikinAvg30d": 5.034
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 4.109
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 4.819
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 3.491
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 18.528,
        "saikou": 9.99,
        "heikin": 7,
        "boshuAvg30d": 67.6,
        "heikinAvg30d": 4.129
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 3.366
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 8.74,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 3.466
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 22.898,
        "saikou": 9.9,
        "heikin": 8.62,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 3.452
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 22.898,
        "saikou": 9.9,
        "heikin": 7.39,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 3.265
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 28.898,
        "saikou": 9.99,
        "heikin": 7.71,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 3.261
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 28.898,
        "saikou": 9.9,
        "heikin": 6.87,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.879
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 28.898,
        "saikou": 9.99,
        "heikin": 7.55,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.663
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 28.898,
        "saikou": 9.99,
        "heikin": 6.49,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.162
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 182.228,
        "saikou": 9.94,
        "heikin": 2.73,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 2.02
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 237.231,
        "saikou": 9.99,
        "heikin": 2.43,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 1.31
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 233.273,
        "saikou": 9.99,
        "heikin": 2.38,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 1.026
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 209.31,
        "saikou": 9.99,
        "heikin": 2.65,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 1.103
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 189.696,
        "saikou": 9.99,
        "heikin": 3,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 1.252
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 130.86,
        "saikou": 9.99,
        "heikin": 4.2,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 1.546
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 115.257,
        "saikou": 9.99,
        "heikin": 5.19,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 1.673
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 115.257,
        "saikou": 9.99,
        "heikin": 5.41,
        "boshuAvg30d": 164.5,
        "heikinAvg30d": 1.992
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 115.257,
        "saikou": 6.2,
        "heikin": 2.68,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 1.845
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 113.407,
        "saikou": 4.46,
        "heikin": 1.88,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 1.795
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 113.407,
        "saikou": 1.88,
        "heikin": 1.73,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 1.76
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 115.257,
        "saikou": 9,
        "heikin": 2.29,
        "boshuAvg30d": 165.5,
        "heikinAvg30d": 1.757
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 115.257,
        "saikou": 9,
        "heikin": 3,
        "boshuAvg30d": 176.1,
        "heikinAvg30d": 1.732
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 115.257,
        "saikou": 3.07,
        "heikin": 2.32,
        "boshuAvg30d": 180.1,
        "heikinAvg30d": 1.812
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 9,
        "heikin": 3.23,
        "boshuAvg30d": 185.1,
        "heikinAvg30d": 2.156
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 5.56,
        "boshuAvg30d": 187.7,
        "heikinAvg30d": 2.207
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 5.59,
        "boshuAvg30d": 187.7,
        "heikinAvg30d": 2.08
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 117.164,
        "saikou": 9.99,
        "heikin": 5.71,
        "boshuAvg30d": 187.7,
        "heikinAvg30d": 2.685
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 117.164,
        "saikou": 9.99,
        "heikin": 5.65,
        "boshuAvg30d": 197.1,
        "heikinAvg30d": 2.774
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 205.778,
        "saikou": 9.99,
        "heikin": 5.12,
        "boshuAvg30d": 197.1,
        "heikinAvg30d": 2.825
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 268.011,
        "saikou": 9.99,
        "heikin": 4.74,
        "boshuAvg30d": 197.1,
        "heikinAvg30d": 2.684
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 268.011,
        "saikou": 9.99,
        "heikin": 4.87,
        "boshuAvg30d": 196.1,
        "heikinAvg30d": 2.761
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 271.439,
        "saikou": 9.99,
        "heikin": 4.57,
        "boshuAvg30d": 194.7,
        "heikinAvg30d": 2.746
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 271.439,
        "saikou": 9.99,
        "heikin": 4.46,
        "boshuAvg30d": 195.1,
        "heikinAvg30d": 2.441
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 244.621,
        "saikou": 9.98,
        "heikin": 5.51,
        "boshuAvg30d": 193.7,
        "heikinAvg30d": 2.208
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 246.619,
        "saikou": 9.98,
        "heikin": 5.15,
        "boshuAvg30d": 193.7,
        "heikinAvg30d": 2.271
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 271.439,
        "saikou": 9.99,
        "heikin": 4.89,
        "boshuAvg30d": 193.7,
        "heikinAvg30d": 2.704
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 185.778,
        "saikou": 9.99,
        "heikin": 5.54,
        "boshuAvg30d": 193.7,
        "heikinAvg30d": 2.666
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 117.164,
        "saikou": 9.99,
        "heikin": 5.78,
        "boshuAvg30d": 193.7,
        "heikinAvg30d": 2.954
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 115.721,
        "saikou": 9.99,
        "heikin": 5.68,
        "boshuAvg30d": 193.7,
        "heikinAvg30d": 2.688
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 115.721,
        "saikou": 9.99,
        "heikin": 5.69,
        "boshuAvg30d": 193.1,
        "heikinAvg30d": 2.971
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 102.164,
        "saikou": 9.99,
        "heikin": 6.05,
        "boshuAvg30d": 193.1,
        "heikinAvg30d": 3.155
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 117.164,
        "saikou": 9.99,
        "heikin": 5.65,
        "boshuAvg30d": 193.1,
        "heikinAvg30d": 3.212
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 102.164,
        "saikou": 9.99,
        "heikin": 6.05,
        "boshuAvg30d": 193.1,
        "heikinAvg30d": 2.761
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 117.164,
        "saikou": 9.99,
        "heikin": 5.44,
        "boshuAvg30d": 188.8,
        "heikinAvg30d": 2.746
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 117.164,
        "saikou": 9.99,
        "heikin": 5.59,
        "boshuAvg30d": 187.8,
        "heikinAvg30d": 2.998
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 117.164,
        "saikou": 9.99,
        "heikin": 5.52,
        "boshuAvg30d": 185.8,
        "heikinAvg30d": 2.459
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 117.164,
        "saikou": 9.99,
        "heikin": 5.46,
        "boshuAvg30d": 185.8,
        "heikinAvg30d": 2.438
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 119.124,
        "saikou": 9.98,
        "heikin": 5.04,
        "boshuAvg30d": 185.8,
        "heikinAvg30d": 2.286
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 9,
        "heikin": 3.39,
        "boshuAvg30d": 184.8,
        "heikinAvg30d": 2.177
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 117.139,
        "saikou": 9.99,
        "heikin": 5.58,
        "boshuAvg30d": 183.8,
        "heikinAvg30d": 2.238
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 117.139,
        "saikou": 9.99,
        "heikin": 5.58,
        "boshuAvg30d": 184.2,
        "heikinAvg30d": 2.286
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 5.54,
        "boshuAvg30d": 184.2,
        "heikinAvg30d": 2.215
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 5.51,
        "boshuAvg30d": 184.2,
        "heikinAvg30d": 2.172
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 115.257,
        "saikou": 9.99,
        "heikin": 5.26,
        "boshuAvg30d": 184.2,
        "heikinAvg30d": 2.139
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 115.257,
        "saikou": 9.99,
        "heikin": 5.41,
        "boshuAvg30d": 182.8,
        "heikinAvg30d": 1.995
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 115.257,
        "saikou": 9.99,
        "heikin": 5.44,
        "boshuAvg30d": 181.2,
        "heikinAvg30d": 1.912
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 138.868,
        "saikou": 9.99,
        "heikin": 3.92,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 1.728
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 103,
        "ouatsu": 142.608,
        "saikou": 1.56,
        "heikin": 1.18,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 2.244
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 103,
        "ouatsu": 139.439,
        "saikou": 1.56,
        "heikin": 1.41,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 2.471
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 103,
        "ouatsu": 139.439,
        "saikou": 1.56,
        "heikin": 1.45,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 2.184
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 103,
        "ouatsu": 141.429,
        "saikou": 1.56,
        "heikin": 1.46,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 2.047
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 103,
        "ouatsu": 139.433,
        "saikou": 1.56,
        "heikin": 1.45,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 2.086
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 103,
        "ouatsu": 139.433,
        "saikou": 1.56,
        "heikin": 1.32,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 2.28
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 103,
        "ouatsu": 152.339,
        "saikou": 1.56,
        "heikin": 1.47,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 2.439
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 104,
        "ouatsu": 181.823,
        "saikou": 1.56,
        "heikin": 1.26,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 2.758
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 104,
        "ouatsu": 176.297,
        "saikou": 7.99,
        "heikin": 1.68,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 2.87
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 104,
        "ouatsu": 176.113,
        "saikou": 7.99,
        "heikin": 1.56,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 3.068
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 104,
        "ouatsu": 176.113,
        "saikou": 2.29,
        "heikin": 1.48,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 2.944
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 104,
        "ouatsu": 176.113,
        "saikou": 7.99,
        "heikin": 1.67,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 2.803
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 106,
        "ouatsu": 173.243,
        "saikou": 7.99,
        "heikin": 1.55,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 2.815
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 107,
        "ouatsu": 173.243,
        "saikou": 2.29,
        "heikin": 1.6,
        "boshuAvg30d": 141.2,
        "heikinAvg30d": 2.932
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 107,
        "ouatsu": 173.243,
        "saikou": 8.6,
        "heikin": 1.68,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 2.233
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 108,
        "ouatsu": 167.987,
        "saikou": 1.56,
        "heikin": 0.92,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 1.98
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 108,
        "ouatsu": 182.961,
        "saikou": 3.39,
        "heikin": 2.48,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 1.965
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 108,
        "ouatsu": 167.14,
        "saikou": 2.29,
        "heikin": 1.71,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 1.895
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 111,
        "ouatsu": 161.953,
        "saikou": 2.29,
        "heikin": 1.21,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 2.08
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 112,
        "ouatsu": 155.997,
        "saikou": 2.7,
        "heikin": 1.11,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 2.128
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 113,
        "ouatsu": 155.997,
        "saikou": 2.7,
        "heikin": 1.1,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 1.728
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 114,
        "ouatsu": 192.772,
        "saikou": 2.97,
        "heikin": 1.41,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 1.813
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 114,
        "ouatsu": 192.772,
        "saikou": 2.7,
        "heikin": 1.2,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 1.696
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 114,
        "ouatsu": 192.772,
        "saikou": 2.7,
        "heikin": 1.32,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 1.798
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 111,
        "ouatsu": 105.863,
        "saikou": 2.7,
        "heikin": 1.4,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 1.673
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 111,
        "ouatsu": 187.251,
        "saikou": 4.5,
        "heikin": 1.24,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 1.907
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 111,
        "ouatsu": 194.766,
        "saikou": 2.7,
        "heikin": 1.37,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 1.907
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 111,
        "ouatsu": 194.766,
        "saikou": 3.05,
        "heikin": 1.6,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 2.03
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 111,
        "ouatsu": 157.991,
        "saikou": 4,
        "heikin": 1.56,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 2.106
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 110,
        "ouatsu": 165.945,
        "saikou": 2.7,
        "heikin": 1.32,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 2.18
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 110,
        "ouatsu": 153.172,
        "saikou": 2.29,
        "heikin": 1.6,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 2.265
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 110,
        "ouatsu": 121.16,
        "saikou": 3.35,
        "heikin": 1.75,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 2.472
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 110,
        "ouatsu": 157.339,
        "saikou": 2.29,
        "heikin": 1.57,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 2.795
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 110,
        "ouatsu": 149.188,
        "saikou": 4.68,
        "heikin": 3.44,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 3.462
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 110,
        "ouatsu": 149.188,
        "saikou": 8.6,
        "heikin": 3.04,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 3.691
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 110,
        "ouatsu": 149.188,
        "saikou": 8.6,
        "heikin": 2.7,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 3.639
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 110,
        "ouatsu": 150.068,
        "saikou": 3.18,
        "heikin": 2.81,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 3.592
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 110,
        "ouatsu": 150.068,
        "saikou": 2.29,
        "heikin": 1.63,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 3.513
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 110,
        "ouatsu": 171.946,
        "saikou": 8.6,
        "heikin": 1.7,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 3.307
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 110,
        "ouatsu": 173.936,
        "saikou": 8.6,
        "heikin": 1.65,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 3.144
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 109,
        "ouatsu": 174.133,
        "saikou": 2.29,
        "heikin": 1.7,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 3.473
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 109,
        "ouatsu": 171.423,
        "saikou": 2.29,
        "heikin": 1.55,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 3.333
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 107,
        "ouatsu": 198.091,
        "saikou": 2.29,
        "heikin": 1.2,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 3.371
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 107,
        "ouatsu": 185.584,
        "saikou": 2.29,
        "heikin": 1.29,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 3.256
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 107,
        "ouatsu": 166.265,
        "saikou": 2.29,
        "heikin": 1.29,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 3.118
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 107,
        "ouatsu": 150.49,
        "saikou": 2.29,
        "heikin": 1.06,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 2.682
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 106,
        "ouatsu": 169.575,
        "saikou": 8.66,
        "heikin": 2.49,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.563
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 106,
        "ouatsu": 163.408,
        "saikou": 2.29,
        "heikin": 0.96,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.037
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.712
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.698
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.65,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.63
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.621
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.62
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.647
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.741
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 186.8,
        "saikou": 1.7,
        "heikin": 0.89,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.759
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.7,
        "heikin": 0.93,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.754
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.99,
        "heikin": 0.96,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.776
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.7,
        "heikin": 0.93,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.782
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 198.343,
        "saikou": 1.7,
        "heikin": 0.93,
        "boshuAvg30d": 40.6,
        "heikinAvg30d": 0.761
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.94,
        "boshuAvg30d": 43.2,
        "heikinAvg30d": 0.884
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 201.343,
        "saikou": 2.49,
        "heikin": 1,
        "boshuAvg30d": 43.6,
        "heikinAvg30d": 0.805
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 201.343,
        "saikou": 2.49,
        "heikin": 1,
        "boshuAvg30d": 44.6,
        "heikinAvg30d": 0.78
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.9,
        "boshuAvg30d": 45.6,
        "heikinAvg30d": 0.821
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 45.6,
        "heikinAvg30d": 0.808
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 45.6,
        "heikinAvg30d": 0.767
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 0.973
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 0.968
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 155.8,
        "saikou": 1.6,
        "heikin": 0.91,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 0.997
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 155.8,
        "saikou": 1.6,
        "heikin": 0.9,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.943
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 155.8,
        "saikou": 1.6,
        "heikin": 0.9,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.963
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 155.8,
        "saikou": 1.6,
        "heikin": 0.9,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.978
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 155.8,
        "saikou": 1.6,
        "heikin": 0.98,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 0.985
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 155.8,
        "saikou": 1.6,
        "heikin": 1.01,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 0.995
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.91,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 0.986
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.97,
        "boshuAvg30d": 48.2,
        "heikinAvg30d": 0.99
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.96,
        "boshuAvg30d": 47.6,
        "heikinAvg30d": 1.014
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 167.343,
        "saikou": 1.7,
        "heikin": 0.75,
        "boshuAvg30d": 47.2,
        "heikinAvg30d": 0.941
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 44.2,
        "heikinAvg30d": 1.024
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 44.2,
        "heikinAvg30d": 1.025
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 1.7,
        "heikin": 0.72,
        "boshuAvg30d": 44.2,
        "heikinAvg30d": 1.172
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 43.6,
        "heikinAvg30d": 1.234
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 142.8,
        "saikou": 3.95,
        "heikin": 0.72,
        "boshuAvg30d": 43.2,
        "heikinAvg30d": 1.253
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 142.8,
        "saikou": 2.85,
        "heikin": 0.69,
        "boshuAvg30d": 42.6,
        "heikinAvg30d": 1.285
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 1.32
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 1.273
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 4.99,
        "heikin": 1.03,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 1.263
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 3.99,
        "heikin": 0.96,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 1.305
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 3.99,
        "heikin": 0.8,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 1.28
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 167.343,
        "saikou": 3.99,
        "heikin": 0.8,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 1.277
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.99,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.869
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.9,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.828
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.86,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.78
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.9,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.716
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.91,
        "boshuAvg30d": 41.6,
        "heikinAvg30d": 0.771
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.7,
        "heikin": 0.88,
        "boshuAvg30d": 41.2,
        "heikinAvg30d": 0.76
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 157.471,
        "saikou": 9.4,
        "heikin": 7.11,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.757
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 173.502,
        "saikou": 9.24,
        "heikin": 7.21,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.285
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 163.508,
        "saikou": 9.65,
        "heikin": 5.69,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.119
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 163.506,
        "saikou": 9.48,
        "heikin": 4.25,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.03
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 163.506,
        "saikou": 9.77,
        "heikin": 6.35,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.033
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 172.476,
        "saikou": 9.52,
        "heikin": 6.58,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 5.309
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 171.791,
        "saikou": 9.75,
        "heikin": 5.83,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.683
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 141.961,
        "saikou": 9.8,
        "heikin": 4.86,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.258
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 145.826,
        "saikou": 10,
        "heikin": 5.03,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.373
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 142.871,
        "saikou": 10,
        "heikin": 4.93,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.512
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 190.789,
        "saikou": 10,
        "heikin": 6.39,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.642
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 143.513,
        "saikou": 10,
        "heikin": 5.01,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.603
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 141.513,
        "saikou": 10,
        "heikin": 4.94,
        "boshuAvg30d": 172.2,
        "heikinAvg30d": 6.475
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 181.591,
        "saikou": 10,
        "heikin": 6.46,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 6.305
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 135.591,
        "saikou": 10,
        "heikin": 4.85,
        "boshuAvg30d": 174.2,
        "heikinAvg30d": 5.312
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 191.515,
        "saikou": 10,
        "heikin": 6.43,
        "boshuAvg30d": 175.2,
        "heikinAvg30d": 4.541
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 191.515,
        "saikou": 10,
        "heikin": 5.71,
        "boshuAvg30d": 175.2,
        "heikinAvg30d": 4.274
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 173.146,
        "saikou": 9.92,
        "heikin": 5.85,
        "boshuAvg30d": 175.2,
        "heikinAvg30d": 4.045
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 162.598,
        "saikou": 7.96,
        "heikin": 4.79,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 3.895
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 154.684,
        "saikou": 2.83,
        "heikin": 1.82,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 3.685
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 136.834,
        "saikou": 5.42,
        "heikin": 1.17,
        "boshuAvg30d": 180.2,
        "heikinAvg30d": 3.609
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 138.126,
        "saikou": 8,
        "heikin": 1.16,
        "boshuAvg30d": 181.2,
        "heikinAvg30d": 3.527
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 133.036,
        "saikou": 1.83,
        "heikin": 0.57,
        "boshuAvg30d": 181.2,
        "heikinAvg30d": 3.279
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 132.496,
        "saikou": 1.81,
        "heikin": 0.59,
        "boshuAvg30d": 181.2,
        "heikinAvg30d": 3.258
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 102.995,
        "saikou": 1.1,
        "heikin": 0.48,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 3.258
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 114.833,
        "saikou": 2.99,
        "heikin": 0.54,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 3.293
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 140.061,
        "saikou": 3,
        "heikin": 0.85,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 3.836
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 149.671,
        "saikou": 1.99,
        "heikin": 1.07,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 4.405
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 153.68,
        "saikou": 5.28,
        "heikin": 3.22,
        "boshuAvg30d": 179.2,
        "heikinAvg30d": 4.405
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 170.47,
        "saikou": 8.58,
        "heikin": 5.39,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 5.065
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 170.47,
        "saikou": 10,
        "heikin": 6.82,
        "boshuAvg30d": 173.6,
        "heikinAvg30d": 5.521
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 185.47,
        "saikou": 10,
        "heikin": 7.41,
        "boshuAvg30d": 173.6,
        "heikinAvg30d": 5.799
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 261.568,
        "saikou": 10,
        "heikin": 9.01,
        "boshuAvg30d": 173.6,
        "heikinAvg30d": 6.455
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 228.862,
        "saikou": 10,
        "heikin": 8.29,
        "boshuAvg30d": 173.2,
        "heikinAvg30d": 6.947
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 228.897,
        "saikou": 10,
        "heikin": 8.28,
        "boshuAvg30d": 172.6,
        "heikinAvg30d": 7.065
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 220.329,
        "saikou": 10,
        "heikin": 8.26,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 7.063
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 218.333,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.98
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 199.241,
        "saikou": 10,
        "heikin": 7.63,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 7.04
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 227.123,
        "saikou": 10,
        "heikin": 8.04,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.609
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 221.569,
        "saikou": 10,
        "heikin": 7.95,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.347
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 215.257,
        "saikou": 10,
        "heikin": 7.49,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 6.426
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 222.8,
        "saikou": 10,
        "heikin": 7.65,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 6.214
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 252.26,
        "saikou": 10,
        "heikin": 9.87,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.174
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 182.728,
        "saikou": 10,
        "heikin": 8.31,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 5.895
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 154.378,
        "saikou": 10,
        "heikin": 9.95,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 6.016
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 178.328,
        "saikou": 10,
        "heikin": 9.47,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 6.033
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 178.864,
        "saikou": 10,
        "heikin": 9.44,
        "boshuAvg30d": 171.2,
        "heikinAvg30d": 6.115
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 189.306,
        "saikou": 9.85,
        "heikin": 8.11,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 5.482
      }
    ]
  }
};
