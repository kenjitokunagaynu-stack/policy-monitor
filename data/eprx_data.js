// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/16〜2026/10/15）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-16",
  "fetchedAt": "2026-10-16",
  "avgWindowLabel": "過去30日平均（2026/09/16〜2026/10/15）",
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
      "boshu": 1207,
      "ouatsu": 1559.381,
      "saikou": 9.8,
      "heikin": 3.59,
      "boshuAvg30d": 1145.1,
      "heikinAvg30d": 2.806
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1207,
      "ouatsu": 1522.724,
      "saikou": 9.91,
      "heikin": 3.96,
      "boshuAvg30d": 1145.1,
      "heikinAvg30d": 2.714
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1207,
      "ouatsu": 1552.707,
      "saikou": 9.8,
      "heikin": 3.14,
      "boshuAvg30d": 1145.1,
      "heikinAvg30d": 2.72
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1207,
      "ouatsu": 1534.519,
      "saikou": 9.91,
      "heikin": 3.76,
      "boshuAvg30d": 1145.1,
      "heikinAvg30d": 2.604
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1204,
      "ouatsu": 1506.639,
      "saikou": 9.8,
      "heikin": 3.02,
      "boshuAvg30d": 1141.1,
      "heikinAvg30d": 2.624
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1203,
      "ouatsu": 1494.762,
      "saikou": 9.8,
      "heikin": 3.18,
      "boshuAvg30d": 1140.1,
      "heikinAvg30d": 2.717
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1200,
      "ouatsu": 1565.692,
      "saikou": 9.91,
      "heikin": 4.01,
      "boshuAvg30d": 1152.9,
      "heikinAvg30d": 2.85
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1202,
      "ouatsu": 1586.369,
      "saikou": 9.8,
      "heikin": 4.2,
      "boshuAvg30d": 1154.4,
      "heikinAvg30d": 3.038
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1204,
      "ouatsu": 1707.374,
      "saikou": 9.91,
      "heikin": 4.45,
      "boshuAvg30d": 1156.9,
      "heikinAvg30d": 3.118
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1205,
      "ouatsu": 1654.443,
      "saikou": 9.8,
      "heikin": 4.29,
      "boshuAvg30d": 1157.4,
      "heikinAvg30d": 3.295
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1205,
      "ouatsu": 1641.714,
      "saikou": 9.91,
      "heikin": 4.26,
      "boshuAvg30d": 1157.4,
      "heikinAvg30d": 3.357
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1205,
      "ouatsu": 1424.502,
      "saikou": 10,
      "heikin": 4.67,
      "boshuAvg30d": 1157.4,
      "heikinAvg30d": 3.378
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1265,
      "ouatsu": 1475.89,
      "saikou": 10,
      "heikin": 4.62,
      "boshuAvg30d": 1220.4,
      "heikinAvg30d": 3.418
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1288,
      "ouatsu": 1640.812,
      "saikou": 9.8,
      "heikin": 4.92,
      "boshuAvg30d": 1242.4,
      "heikinAvg30d": 3.198
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1309,
      "ouatsu": 1536.763,
      "saikou": 10,
      "heikin": 4.31,
      "boshuAvg30d": 1264.4,
      "heikinAvg30d": 2.892
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1326,
      "ouatsu": 1456.68,
      "saikou": 10,
      "heikin": 3.85,
      "boshuAvg30d": 1281.9,
      "heikinAvg30d": 2.734
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1326,
      "ouatsu": 1606.146,
      "saikou": 10,
      "heikin": 3.78,
      "boshuAvg30d": 1282.4,
      "heikinAvg30d": 2.901
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1326,
      "ouatsu": 1617.327,
      "saikou": 10,
      "heikin": 3.37,
      "boshuAvg30d": 1282.4,
      "heikinAvg30d": 2.936
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1258,
      "ouatsu": 1624.642,
      "saikou": 10,
      "heikin": 3.49,
      "boshuAvg30d": 1248.6,
      "heikinAvg30d": 3.137
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1261,
      "ouatsu": 1621.933,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1252.1,
      "heikinAvg30d": 3.125
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1266,
      "ouatsu": 1609.236,
      "saikou": 10,
      "heikin": 3.38,
      "boshuAvg30d": 1255.7,
      "heikinAvg30d": 3.182
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1266,
      "ouatsu": 1666.297,
      "saikou": 10,
      "heikin": 3.22,
      "boshuAvg30d": 1255.7,
      "heikinAvg30d": 3.097
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1263,
      "ouatsu": 1643.896,
      "saikou": 10,
      "heikin": 3.3,
      "boshuAvg30d": 1252.7,
      "heikinAvg30d": 3.089
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1262,
      "ouatsu": 1624.689,
      "saikou": 10,
      "heikin": 3.94,
      "boshuAvg30d": 1251.7,
      "heikinAvg30d": 3.001
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1242,
      "ouatsu": 1515.8,
      "saikou": 10,
      "heikin": 3.76,
      "boshuAvg30d": 1238.2,
      "heikinAvg30d": 2.908
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1242,
      "ouatsu": 1542.341,
      "saikou": 10,
      "heikin": 3.72,
      "boshuAvg30d": 1238.2,
      "heikinAvg30d": 2.916
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1242,
      "ouatsu": 1592.781,
      "saikou": 10,
      "heikin": 3.98,
      "boshuAvg30d": 1238.2,
      "heikinAvg30d": 3.014
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1240,
      "ouatsu": 1600.858,
      "saikou": 10,
      "heikin": 4.38,
      "boshuAvg30d": 1234.5,
      "heikinAvg30d": 3.094
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1237,
      "ouatsu": 1332.163,
      "saikou": 10,
      "heikin": 4.65,
      "boshuAvg30d": 1230.5,
      "heikinAvg30d": 3.06
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1231,
      "ouatsu": 1482.441,
      "saikou": 9.91,
      "heikin": 4.05,
      "boshuAvg30d": 1224.0,
      "heikinAvg30d": 3.196
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1297,
      "ouatsu": 1494.422,
      "saikou": 9.82,
      "heikin": 3.42,
      "boshuAvg30d": 1259.7,
      "heikinAvg30d": 3.098
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1297,
      "ouatsu": 1367.368,
      "saikou": 10,
      "heikin": 4.02,
      "boshuAvg30d": 1259.7,
      "heikinAvg30d": 3.306
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1298,
      "ouatsu": 1481.726,
      "saikou": 10,
      "heikin": 4.77,
      "boshuAvg30d": 1260.2,
      "heikinAvg30d": 3.672
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1297,
      "ouatsu": 1402.1,
      "saikou": 10,
      "heikin": 4.95,
      "boshuAvg30d": 1258.7,
      "heikinAvg30d": 3.995
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1295,
      "ouatsu": 1445.683,
      "saikou": 10,
      "heikin": 4.49,
      "boshuAvg30d": 1255.4,
      "heikinAvg30d": 4.058
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1290,
      "ouatsu": 1457.563,
      "saikou": 10,
      "heikin": 4.27,
      "boshuAvg30d": 1250.5,
      "heikinAvg30d": 4.141
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1285,
      "ouatsu": 1397.516,
      "saikou": 10,
      "heikin": 4.11,
      "boshuAvg30d": 1244.0,
      "heikinAvg30d": 4.092
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1285,
      "ouatsu": 1362.33,
      "saikou": 9.17,
      "heikin": 3.93,
      "boshuAvg30d": 1244.0,
      "heikinAvg30d": 4.007
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1285,
      "ouatsu": 1699.529,
      "saikou": 9.91,
      "heikin": 3.98,
      "boshuAvg30d": 1244.2,
      "heikinAvg30d": 3.893
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1284,
      "ouatsu": 1695.941,
      "saikou": 10,
      "heikin": 3.54,
      "boshuAvg30d": 1243.2,
      "heikinAvg30d": 3.675
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1276,
      "ouatsu": 1772.632,
      "saikou": 9.8,
      "heikin": 3.71,
      "boshuAvg30d": 1236.7,
      "heikinAvg30d": 3.632
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1276,
      "ouatsu": 1941.485,
      "saikou": 9.8,
      "heikin": 3.43,
      "boshuAvg30d": 1234.7,
      "heikinAvg30d": 3.552
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1186,
      "ouatsu": 1935.111,
      "saikou": 9.8,
      "heikin": 3.13,
      "boshuAvg30d": 1154.6,
      "heikinAvg30d": 3.401
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1189,
      "ouatsu": 1840.966,
      "saikou": 9.8,
      "heikin": 3.17,
      "boshuAvg30d": 1157.6,
      "heikinAvg30d": 3.478
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1190,
      "ouatsu": 1774.28,
      "saikou": 9.8,
      "heikin": 3.45,
      "boshuAvg30d": 1159.0,
      "heikinAvg30d": 3.382
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1185,
      "ouatsu": 1844.847,
      "saikou": 9.8,
      "heikin": 3.42,
      "boshuAvg30d": 1153.0,
      "heikinAvg30d": 3.225
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1176,
      "ouatsu": 1810.168,
      "saikou": 9.97,
      "heikin": 3.4,
      "boshuAvg30d": 1145.0,
      "heikinAvg30d": 3.239
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1169,
      "ouatsu": 1789.841,
      "saikou": 10,
      "heikin": 3.31,
      "boshuAvg30d": 1137.5,
      "heikinAvg30d": 2.922
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
        "ouatsu": 84.908,
        "saikou": 9.8,
        "heikin": 6.88,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 2.508
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 113.993,
        "saikou": 9.91,
        "heikin": 6.45,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 2.2
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 82.958,
        "saikou": 9.8,
        "heikin": 4.57,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 2.337
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 75.033,
        "saikou": 9.91,
        "heikin": 8.5,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 1.911
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 45.908,
        "saikou": 9.8,
        "heikin": 8.23,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 2.43
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 45.908,
        "saikou": 9.8,
        "heikin": 7.35,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 2.458
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 94.208,
        "saikou": 9.91,
        "heikin": 9.41,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.641
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 45.908,
        "saikou": 9.8,
        "heikin": 8.22,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.605
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 94.208,
        "saikou": 9.91,
        "heikin": 9.43,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.714
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 45.908,
        "saikou": 9.8,
        "heikin": 6.83,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.565
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 92.218,
        "saikou": 9.91,
        "heikin": 9.4,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.659
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 94.208,
        "saikou": 9.91,
        "heikin": 9.43,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.919
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 45.908,
        "saikou": 9.8,
        "heikin": 8.22,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.668
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 45.908,
        "saikou": 9.8,
        "heikin": 8.17,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.532
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 133.208,
        "saikou": 9.91,
        "heikin": 8.05,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 2.34
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 43.918,
        "saikou": 9.8,
        "heikin": 8.09,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 2.172
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 94.208,
        "saikou": 9.8,
        "heikin": 9.03,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.96
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 43.918,
        "saikou": 9.8,
        "heikin": 8.09,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.694
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 77.968,
        "saikou": 9.8,
        "heikin": 9.05,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.798
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 43.94,
        "saikou": 9.8,
        "heikin": 8.15,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.477
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 77.968,
        "saikou": 9.8,
        "heikin": 9.06,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 2.086
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 116.968,
        "saikou": 9.8,
        "heikin": 6.01,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.415
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 45.908,
        "saikou": 9.8,
        "heikin": 8.17,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.986
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 77.968,
        "saikou": 9.8,
        "heikin": 8.95,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.797
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 43.918,
        "saikou": 9.8,
        "heikin": 8.14,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.873
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 45.908,
        "saikou": 9.8,
        "heikin": 8.23,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 2.112
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 77.968,
        "saikou": 9.8,
        "heikin": 7.29,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.621
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 94.208,
        "saikou": 9.91,
        "heikin": 9.34,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 1.995
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 45.908,
        "saikou": 9.8,
        "heikin": 8.17,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 2.266
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 94.208,
        "saikou": 9.91,
        "heikin": 9.4,
        "boshuAvg30d": 57.5,
        "heikinAvg30d": 2.596
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 45.908,
        "saikou": 9.8,
        "heikin": 5.66,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 1.718
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 124.908,
        "saikou": 9.8,
        "heikin": 6.21,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.788
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 158.208,
        "saikou": 9.91,
        "heikin": 8.08,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 3.926
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 158.208,
        "saikou": 9.91,
        "heikin": 9.32,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 4.372
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 122.918,
        "saikou": 9.77,
        "heikin": 6.74,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 4.488
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 173.208,
        "saikou": 6.77,
        "heikin": 6.57,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 4.326
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 124.908,
        "saikou": 6.89,
        "heikin": 6.7,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 4.297
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 124.908,
        "saikou": 6.49,
        "heikin": 6.34,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 4.147
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 126.608,
        "saikou": 9.91,
        "heikin": 7.61,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 3.599
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 84.908,
        "saikou": 9.8,
        "heikin": 8.45,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 3.288
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 120.618,
        "saikou": 9.8,
        "heikin": 8.92,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 3.346
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 84.908,
        "saikou": 9.8,
        "heikin": 8.42,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 2.912
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 45.908,
        "saikou": 9.8,
        "heikin": 7.97,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 3.073
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 45.908,
        "saikou": 9.8,
        "heikin": 7.57,
        "boshuAvg30d": 56.0,
        "heikinAvg30d": 3.422
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 84.908,
        "saikou": 9.8,
        "heikin": 8.16,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 3.14
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 84.908,
        "saikou": 9.8,
        "heikin": 7.06,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.908
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 82.918,
        "saikou": 9.8,
        "heikin": 5.8,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 3.252
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 45.908,
        "saikou": 9.8,
        "heikin": 6.99,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 2.664
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 81.548,
        "saikou": 7,
        "heikin": 5.92,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 6.488
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 81.548,
        "saikou": 6.8,
        "heikin": 5.79,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 6.773
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 99.45,
        "saikou": 7.1,
        "heikin": 5.73,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 6.823
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 101.41,
        "saikou": 6.8,
        "heikin": 5.9,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 6.89
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 97.464,
        "saikou": 7.06,
        "heikin": 5.67,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 6.946
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 97.464,
        "saikou": 7.06,
        "heikin": 5.67,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 7.022
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 99.91,
        "saikou": 6.7,
        "heikin": 5.5,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 7.027
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 101.41,
        "saikou": 6.7,
        "heikin": 5.58,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 6.932
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 105.408,
        "saikou": 6.7,
        "heikin": 5.43,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 6.912
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 105.408,
        "saikou": 6.7,
        "heikin": 5.54,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 6.887
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 105.372,
        "saikou": 6.57,
        "heikin": 5.46,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 7.026
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 105.372,
        "saikou": 10,
        "heikin": 5.8,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 7.084
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 105.372,
        "saikou": 10,
        "heikin": 6.14,
        "boshuAvg30d": 153.5,
        "heikinAvg30d": 7.25
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 115.908,
        "saikou": 7,
        "heikin": 6.06,
        "boshuAvg30d": 158.5,
        "heikinAvg30d": 7.446
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 117.408,
        "saikou": 7.45,
        "heikin": 6.32,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 7.685
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 79.908,
        "saikou": 9.88,
        "heikin": 6.71,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 7.885
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 81.408,
        "saikou": 10,
        "heikin": 6.82,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 8.196
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 79.908,
        "saikou": 10,
        "heikin": 6.84,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 8.195
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 119.404,
        "saikou": 10,
        "heikin": 6.65,
        "boshuAvg30d": 122.2,
        "heikinAvg30d": 8.111
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 108.637,
        "saikou": 7.97,
        "heikin": 6.74,
        "boshuAvg30d": 123.2,
        "heikinAvg30d": 8.238
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 102.783,
        "saikou": 10,
        "heikin": 7.74,
        "boshuAvg30d": 122.8,
        "heikinAvg30d": 8.131
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 102.783,
        "saikou": 10,
        "heikin": 7.6,
        "boshuAvg30d": 123.3,
        "heikinAvg30d": 8.235
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 106.738,
        "saikou": 10,
        "heikin": 7.77,
        "boshuAvg30d": 123.8,
        "heikinAvg30d": 8.254
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 104.838,
        "saikou": 10,
        "heikin": 7.72,
        "boshuAvg30d": 123.8,
        "heikinAvg30d": 8.178
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 101.487,
        "saikou": 10,
        "heikin": 8.66,
        "boshuAvg30d": 122.3,
        "heikinAvg30d": 8.192
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 104.838,
        "saikou": 10,
        "heikin": 7.92,
        "boshuAvg30d": 122.3,
        "heikinAvg30d": 8.101
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 119.404,
        "saikou": 10,
        "heikin": 7.23,
        "boshuAvg30d": 122.3,
        "heikinAvg30d": 7.772
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 107.404,
        "saikou": 10,
        "heikin": 6.04,
        "boshuAvg30d": 120.3,
        "heikinAvg30d": 7.425
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 85.38,
        "saikou": 10,
        "heikin": 6.75,
        "boshuAvg30d": 119.3,
        "heikinAvg30d": 7.559
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 109.38,
        "saikou": 9.46,
        "heikin": 6.18,
        "boshuAvg30d": 115.8,
        "heikinAvg30d": 6.745
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 105.344,
        "saikou": 8.07,
        "heikin": 5.98,
        "boshuAvg30d": 163.5,
        "heikinAvg30d": 6.89
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 105.344,
        "saikou": 10,
        "heikin": 3.79,
        "boshuAvg30d": 163.5,
        "heikinAvg30d": 6.311
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 115.348,
        "saikou": 10,
        "heikin": 3.21,
        "boshuAvg30d": 163.5,
        "heikinAvg30d": 6.218
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 111.883,
        "saikou": 6.44,
        "heikin": 3.35,
        "boshuAvg30d": 163.0,
        "heikinAvg30d": 6.261
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 115.348,
        "saikou": 10,
        "heikin": 3.23,
        "boshuAvg30d": 161.5,
        "heikinAvg30d": 6.195
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 113.848,
        "saikou": 6.44,
        "heikin": 3.06,
        "boshuAvg30d": 160.0,
        "heikinAvg30d": 5.849
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 115.348,
        "saikou": 10,
        "heikin": 3.06,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.988
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 113.848,
        "saikou": 4.05,
        "heikin": 2.94,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.673
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 104.678,
        "saikou": 4.32,
        "heikin": 3.13,
        "boshuAvg30d": 159.0,
        "heikinAvg30d": 5.717
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 90.778,
        "saikou": 10,
        "heikin": 4.64,
        "boshuAvg30d": 158.5,
        "heikinAvg30d": 5.833
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 97.473,
        "saikou": 7.22,
        "heikin": 4.66,
        "boshuAvg30d": 158.0,
        "heikinAvg30d": 5.828
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 97.473,
        "saikou": 8.02,
        "heikin": 5.24,
        "boshuAvg30d": 158.0,
        "heikinAvg30d": 5.931
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 90.778,
        "saikou": 8.05,
        "heikin": 5.26,
        "boshuAvg30d": 80.0,
        "heikinAvg30d": 6.088
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 89.428,
        "saikou": 7.21,
        "heikin": 4.63,
        "boshuAvg30d": 80.0,
        "heikinAvg30d": 5.922
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 103.348,
        "saikou": 6.96,
        "heikin": 4.72,
        "boshuAvg30d": 80.0,
        "heikinAvg30d": 6.234
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 89.464,
        "saikou": 9.4,
        "heikin": 6.1,
        "boshuAvg30d": 79.0,
        "heikinAvg30d": 6.141
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 89.464,
        "saikou": 9.97,
        "heikin": 6.47,
        "boshuAvg30d": 77.5,
        "heikinAvg30d": 6.25
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 69.314,
        "saikou": 10,
        "heikin": 5.18,
        "boshuAvg30d": 77.0,
        "heikinAvg30d": 6.631
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 466.574,
        "saikou": 5.41,
        "heikin": 2.85,
        "boshuAvg30d": 341.1,
        "heikinAvg30d": 3.726
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 427.091,
        "saikou": 8.64,
        "heikin": 4.59,
        "boshuAvg30d": 341.1,
        "heikinAvg30d": 3.809
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 473.143,
        "saikou": 4.09,
        "heikin": 2.55,
        "boshuAvg30d": 341.1,
        "heikinAvg30d": 3.587
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 445.414,
        "saikou": 8.63,
        "heikin": 4.36,
        "boshuAvg30d": 341.1,
        "heikinAvg30d": 3.434
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 469.112,
        "saikou": 4.03,
        "heikin": 2.4,
        "boshuAvg30d": 339.6,
        "heikinAvg30d": 3.421
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 472.461,
        "saikou": 4.01,
        "heikin": 2.43,
        "boshuAvg30d": 339.1,
        "heikinAvg30d": 3.48
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 430.978,
        "saikou": 8.39,
        "heikin": 4.59,
        "boshuAvg30d": 337.6,
        "heikinAvg30d": 3.537
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 427.538,
        "saikou": 8.39,
        "heikin": 4.53,
        "boshuAvg30d": 339.1,
        "heikinAvg30d": 3.679
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 429.058,
        "saikou": 8.39,
        "heikin": 4.54,
        "boshuAvg30d": 339.6,
        "heikinAvg30d": 3.776
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 432.704,
        "saikou": 8.39,
        "heikin": 4.45,
        "boshuAvg30d": 340.1,
        "heikinAvg30d": 3.965
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 432.722,
        "saikou": 8.04,
        "heikin": 4.55,
        "boshuAvg30d": 340.1,
        "heikinAvg30d": 3.848
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 237.525,
        "saikou": 7.74,
        "heikin": 6.09,
        "boshuAvg30d": 340.1,
        "heikinAvg30d": 3.981
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 245.329,
        "saikou": 7.8,
        "heikin": 6.01,
        "boshuAvg30d": 360.1,
        "heikinAvg30d": 4.002
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 326.065,
        "saikou": 8.38,
        "heikin": 6.33,
        "boshuAvg30d": 368.1,
        "heikinAvg30d": 4.225
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 366.711,
        "saikou": 10,
        "heikin": 5.64,
        "boshuAvg30d": 373.1,
        "heikinAvg30d": 3.865
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 359.821,
        "saikou": 10,
        "heikin": 5.85,
        "boshuAvg30d": 378.1,
        "heikinAvg30d": 3.599
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 413.333,
        "saikou": 10,
        "heikin": 4.92,
        "boshuAvg30d": 378.1,
        "heikinAvg30d": 3.797
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 433.821,
        "saikou": 10,
        "heikin": 4.19,
        "boshuAvg30d": 378.1,
        "heikinAvg30d": 3.837
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 433.82,
        "saikou": 10,
        "heikin": 4.11,
        "boshuAvg30d": 372.6,
        "heikinAvg30d": 4.137
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 468.539,
        "saikou": 10,
        "heikin": 4.08,
        "boshuAvg30d": 372.6,
        "heikinAvg30d": 4.219
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 449.474,
        "saikou": 10,
        "heikin": 3.6,
        "boshuAvg30d": 372.6,
        "heikinAvg30d": 4.143
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 468.978,
        "saikou": 10,
        "heikin": 3.47,
        "boshuAvg30d": 371.6,
        "heikinAvg30d": 3.966
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 458.405,
        "saikou": 10,
        "heikin": 3.64,
        "boshuAvg30d": 369.1,
        "heikinAvg30d": 3.929
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 471.498,
        "saikou": 10,
        "heikin": 3.52,
        "boshuAvg30d": 369.1,
        "heikinAvg30d": 3.855
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 457.807,
        "saikou": 10,
        "heikin": 3.54,
        "boshuAvg30d": 367.1,
        "heikinAvg30d": 3.796
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 450.135,
        "saikou": 10,
        "heikin": 3.61,
        "boshuAvg30d": 367.1,
        "heikinAvg30d": 3.732
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 461.829,
        "saikou": 10,
        "heikin": 3.7,
        "boshuAvg30d": 367.1,
        "heikinAvg30d": 3.855
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 480.618,
        "saikou": 10,
        "heikin": 4.03,
        "boshuAvg30d": 367.0,
        "heikinAvg30d": 3.966
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 260.562,
        "saikou": 5.52,
        "heikin": 3.77,
        "boshuAvg30d": 366.0,
        "heikinAvg30d": 3.812
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 243.318,
        "saikou": 5.4,
        "heikin": 3.68,
        "boshuAvg30d": 365.5,
        "heikinAvg30d": 3.669
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 360.245,
        "saikou": 5.63,
        "heikin": 2.63,
        "boshuAvg30d": 364.0,
        "heikinAvg30d": 3.686
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 242.986,
        "saikou": 6.09,
        "heikin": 3.98,
        "boshuAvg30d": 364.0,
        "heikinAvg30d": 3.623
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 203.418,
        "saikou": 3.78,
        "heikin": 2.03,
        "boshuAvg30d": 364.0,
        "heikinAvg30d": 3.947
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 211.418,
        "saikou": 3.78,
        "heikin": 2.87,
        "boshuAvg30d": 363.9,
        "heikinAvg30d": 4.168
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 203.418,
        "saikou": 3.78,
        "heikin": 2.06,
        "boshuAvg30d": 363.6,
        "heikinAvg30d": 4.058
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 199.668,
        "saikou": 3.78,
        "heikin": 2.03,
        "boshuAvg30d": 363.3,
        "heikinAvg30d": 4.057
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 211.345,
        "saikou": 3.78,
        "heikin": 2.08,
        "boshuAvg30d": 365.8,
        "heikinAvg30d": 4.156
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 167.36,
        "saikou": 3.24,
        "heikin": 2.34,
        "boshuAvg30d": 365.8,
        "heikinAvg30d": 4.003
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 434.789,
        "saikou": 6.29,
        "heikin": 2.97,
        "boshuAvg30d": 365.9,
        "heikinAvg30d": 4.009
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 439.374,
        "saikou": 5.39,
        "heikin": 2.36,
        "boshuAvg30d": 365.9,
        "heikinAvg30d": 3.796
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 464.581,
        "saikou": 5.22,
        "heikin": 2.26,
        "boshuAvg30d": 363.9,
        "heikinAvg30d": 3.822
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 629.241,
        "saikou": 5.1,
        "heikin": 2.26,
        "boshuAvg30d": 363.9,
        "heikinAvg30d": 3.851
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 658.919,
        "saikou": 5.09,
        "heikin": 2.1,
        "boshuAvg30d": 363.4,
        "heikinAvg30d": 3.593
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 606.774,
        "saikou": 5.2,
        "heikin": 2.01,
        "boshuAvg30d": 363.4,
        "heikinAvg30d": 3.725
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 458.941,
        "saikou": 5.2,
        "heikin": 2.33,
        "boshuAvg30d": 363.8,
        "heikinAvg30d": 3.449
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 555.017,
        "saikou": 5.27,
        "heikin": 2.28,
        "boshuAvg30d": 361.8,
        "heikinAvg30d": 3.645
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 533.354,
        "saikou": 5.24,
        "heikin": 2.42,
        "boshuAvg30d": 359.8,
        "heikinAvg30d": 3.869
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 576.974,
        "saikou": 5.39,
        "heikin": 2.54,
        "boshuAvg30d": 358.8,
        "heikinAvg30d": 3.849
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 242,
        "ouatsu": 257.891,
        "saikou": 8.83,
        "heikin": 2.29,
        "boshuAvg30d": 83.8,
        "heikinAvg30d": 1.987
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 242,
        "ouatsu": 221.161,
        "saikou": 8.83,
        "heikin": 1.73,
        "boshuAvg30d": 83.8,
        "heikinAvg30d": 1.764
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 242,
        "ouatsu": 256.986,
        "saikou": 8.83,
        "heikin": 1.75,
        "boshuAvg30d": 83.8,
        "heikinAvg30d": 1.772
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 242,
        "ouatsu": 262.772,
        "saikou": 8.83,
        "heikin": 1.43,
        "boshuAvg30d": 83.8,
        "heikinAvg30d": 1.846
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 241,
        "ouatsu": 246.867,
        "saikou": 8.83,
        "heikin": 1.86,
        "boshuAvg30d": 82.8,
        "heikinAvg30d": 1.716
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 241,
        "ouatsu": 248.733,
        "saikou": 8.83,
        "heikin": 1.85,
        "boshuAvg30d": 82.8,
        "heikinAvg30d": 1.696
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 240,
        "ouatsu": 272.472,
        "saikou": 8.83,
        "heikin": 1.45,
        "boshuAvg30d": 82.3,
        "heikinAvg30d": 1.625
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 240,
        "ouatsu": 266.772,
        "saikou": 9.27,
        "heikin": 1.45,
        "boshuAvg30d": 82.3,
        "heikinAvg30d": 1.826
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 241,
        "ouatsu": 270.488,
        "saikou": 9.27,
        "heikin": 1.43,
        "boshuAvg30d": 82.8,
        "heikinAvg30d": 1.844
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 241,
        "ouatsu": 272.472,
        "saikou": 9.27,
        "heikin": 1.73,
        "boshuAvg30d": 82.8,
        "heikinAvg30d": 1.77
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 241,
        "ouatsu": 274.462,
        "saikou": 9.27,
        "heikin": 1.74,
        "boshuAvg30d": 82.8,
        "heikinAvg30d": 1.862
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 241,
        "ouatsu": 252.757,
        "saikou": 9.27,
        "heikin": 1.65,
        "boshuAvg30d": 82.8,
        "heikinAvg30d": 1.871
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 250,
        "ouatsu": 292.741,
        "saikou": 9.27,
        "heikin": 2.75,
        "boshuAvg30d": 92.3,
        "heikinAvg30d": 2.016
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 254,
        "ouatsu": 292.741,
        "saikou": 9.27,
        "heikin": 2.97,
        "boshuAvg30d": 95.8,
        "heikinAvg30d": 2.027
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 257,
        "ouatsu": 253.618,
        "saikou": 9.27,
        "heikin": 2.06,
        "boshuAvg30d": 98.8,
        "heikinAvg30d": 2.046
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 259,
        "ouatsu": 218.6,
        "saikou": 8.47,
        "heikin": 2.94,
        "boshuAvg30d": 100.8,
        "heikinAvg30d": 2.065
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 259,
        "ouatsu": 236.821,
        "saikou": 8.47,
        "heikin": 2.88,
        "boshuAvg30d": 100.8,
        "heikinAvg30d": 2.21
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 259,
        "ouatsu": 236.827,
        "saikou": 8.47,
        "heikin": 3.02,
        "boshuAvg30d": 100.8,
        "heikinAvg30d": 2.287
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 264,
        "ouatsu": 213.122,
        "saikou": 8.47,
        "heikin": 3.07,
        "boshuAvg30d": 105.3,
        "heikinAvg30d": 2.678
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 264,
        "ouatsu": 186.489,
        "saikou": 8.47,
        "heikin": 2.99,
        "boshuAvg30d": 105.3,
        "heikinAvg30d": 2.66
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 264,
        "ouatsu": 174.6,
        "saikou": 8.47,
        "heikin": 3.36,
        "boshuAvg30d": 105.8,
        "heikinAvg30d": 2.902
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 264,
        "ouatsu": 178.579,
        "saikou": 8.47,
        "heikin": 3.39,
        "boshuAvg30d": 105.3,
        "heikinAvg30d": 2.972
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 263,
        "ouatsu": 182.567,
        "saikou": 8.47,
        "heikin": 3.27,
        "boshuAvg30d": 104.3,
        "heikinAvg30d": 2.874
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 262,
        "ouatsu": 180.583,
        "saikou": 8.47,
        "heikin": 3.19,
        "boshuAvg30d": 103.3,
        "heikinAvg30d": 2.835
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 258,
        "ouatsu": 132.414,
        "saikou": 9.49,
        "heikin": 3.94,
        "boshuAvg30d": 99.8,
        "heikinAvg30d": 2.773
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 258,
        "ouatsu": 161.806,
        "saikou": 9.49,
        "heikin": 3.14,
        "boshuAvg30d": 99.8,
        "heikinAvg30d": 2.769
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 258,
        "ouatsu": 139.021,
        "saikou": 9.49,
        "heikin": 3.71,
        "boshuAvg30d": 99.8,
        "heikinAvg30d": 2.668
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 257,
        "ouatsu": 141.005,
        "saikou": 9.49,
        "heikin": 3.74,
        "boshuAvg30d": 99.3,
        "heikinAvg30d": 2.641
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 257,
        "ouatsu": 162.69,
        "saikou": 9.49,
        "heikin": 3.31,
        "boshuAvg30d": 98.8,
        "heikinAvg30d": 2.808
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 257,
        "ouatsu": 257.922,
        "saikou": 9.49,
        "heikin": 3.09,
        "boshuAvg30d": 98.8,
        "heikinAvg30d": 2.892
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 255,
        "ouatsu": 277.089,
        "saikou": 9.49,
        "heikin": 2.93,
        "boshuAvg30d": 97.3,
        "heikinAvg30d": 2.618
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 255,
        "ouatsu": 259.775,
        "saikou": 9.49,
        "heikin": 3.37,
        "boshuAvg30d": 97.3,
        "heikinAvg30d": 2.625
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 255,
        "ouatsu": 355.143,
        "saikou": 9.49,
        "heikin": 4.46,
        "boshuAvg30d": 97.3,
        "heikinAvg30d": 2.496
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 255,
        "ouatsu": 297.237,
        "saikou": 9.49,
        "heikin": 3.7,
        "boshuAvg30d": 97.3,
        "heikinAvg30d": 2.677
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 255,
        "ouatsu": 353.821,
        "saikou": 9.49,
        "heikin": 3.88,
        "boshuAvg30d": 97.3,
        "heikinAvg30d": 2.529
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 254,
        "ouatsu": 346.348,
        "saikou": 9.49,
        "heikin": 3.64,
        "boshuAvg30d": 96.8,
        "heikinAvg30d": 2.558
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 252,
        "ouatsu": 356.808,
        "saikou": 9.49,
        "heikin": 3.59,
        "boshuAvg30d": 94.8,
        "heikinAvg30d": 2.267
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 252,
        "ouatsu": 367.998,
        "saikou": 7.97,
        "heikin": 3.14,
        "boshuAvg30d": 94.8,
        "heikinAvg30d": 2.143
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 252,
        "ouatsu": 356.203,
        "saikou": 7.27,
        "heikin": 2.75,
        "boshuAvg30d": 94.8,
        "heikinAvg30d": 1.967
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 252,
        "ouatsu": 373.799,
        "saikou": 4.55,
        "heikin": 1.88,
        "boshuAvg30d": 94.8,
        "heikinAvg30d": 2.015
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 252,
        "ouatsu": 363.894,
        "saikou": 4.6,
        "heikin": 1.87,
        "boshuAvg30d": 94.8,
        "heikinAvg30d": 1.957
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 252,
        "ouatsu": 361.91,
        "saikou": 3.68,
        "heikin": 1.82,
        "boshuAvg30d": 94.8,
        "heikinAvg30d": 1.979
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 253,
        "ouatsu": 351.598,
        "saikou": 3.95,
        "heikin": 1.67,
        "boshuAvg30d": 95.3,
        "heikinAvg30d": 1.781
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 254,
        "ouatsu": 351.598,
        "saikou": 9.11,
        "heikin": 1.97,
        "boshuAvg30d": 96.3,
        "heikinAvg30d": 2.033
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 254,
        "ouatsu": 367.835,
        "saikou": 9.11,
        "heikin": 2.24,
        "boshuAvg30d": 96.3,
        "heikinAvg30d": 2.049
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 253,
        "ouatsu": 369.819,
        "saikou": 9.11,
        "heikin": 2.11,
        "boshuAvg30d": 95.3,
        "heikinAvg30d": 2.063
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 252,
        "ouatsu": 369.819,
        "saikou": 9.11,
        "heikin": 2.08,
        "boshuAvg30d": 94.3,
        "heikinAvg30d": 1.971
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 249,
        "ouatsu": 364.475,
        "saikou": 9.11,
        "heikin": 2.17,
        "boshuAvg30d": 91.3,
        "heikinAvg30d": 2.043
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
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 0.858
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 0.932
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.7,
        "heikin": 1.68,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 1.015
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.85,
        "heikin": 1.85,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 1.07
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 1.053
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 0.911
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 1.096
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 1.312
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 1.084
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 1.236
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 1.443
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 1.451
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.9,
        "heikin": 1.9,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.736
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.42
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.5,
        "boshuAvg30d": 60.5,
        "heikinAvg30d": 1.384
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.438
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 5.5,
        "heikin": 5.3,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.28
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 3.12,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.246
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.05,
        "heikin": 2.69,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.674
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 4.3,
        "heikin": 3.99,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.565
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 3.759
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.71,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 3.202
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.85,
        "heikin": 3.85,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 3.151
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.9,
        "heikin": 3.9,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 2.787
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 4.5,
        "heikin": 4.14,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.402
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.45,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.365
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 5.55,
        "heikin": 5.55,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 3.09
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.826
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.6,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.771
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.5,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 3.112
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 5.45,
        "heikin": 5.27,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 3.039
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.15,
        "heikin": 5.87,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 3.632
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 4.1,
        "heikin": 3.9,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 2.827
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.45,
        "heikin": 3.3,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 2.555
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.3,
        "heikin": 3.3,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 2.271
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.97,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 3.119
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.331
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.6,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.489
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 1.98,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 2.374
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.7,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 1.699
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.1,
        "heikin": 2.1,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.955
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.5,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.615
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.669
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.2,
        "heikin": 2.2,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.773
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.992
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 1.544
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.3,
        "boshuAvg30d": 60.0,
        "heikinAvg30d": 1.289
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 59.5,
        "heikinAvg30d": 1.034
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 135.252,
        "saikou": 1.68,
        "heikin": 0.97,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 1.818
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 137.239,
        "saikou": 1.94,
        "heikin": 0.96,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 1.527
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 132.707,
        "saikou": 1.56,
        "heikin": 0.93,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 1.396
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 135.091,
        "saikou": 1.55,
        "heikin": 1.03,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 1.327
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 155.15,
        "saikou": 1.51,
        "heikin": 0.87,
        "boshuAvg30d": 129.0,
        "heikinAvg30d": 1.26
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 137.058,
        "saikou": 1.99,
        "heikin": 1.05,
        "boshuAvg30d": 128.5,
        "heikinAvg30d": 1.398
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 122.94,
        "saikou": 1.99,
        "heikin": 1.25,
        "boshuAvg30d": 129.0,
        "heikinAvg30d": 1.562
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 126.928,
        "saikou": 1.99,
        "heikin": 1.33,
        "boshuAvg30d": 129.0,
        "heikinAvg30d": 1.73
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 126.928,
        "saikou": 1.99,
        "heikin": 1.37,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 1.65
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 150.873,
        "saikou": 1.99,
        "heikin": 1.37,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 1.739
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 107.314,
        "saikou": 1.99,
        "heikin": 1.43,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 1.668
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 107.314,
        "saikou": 1.99,
        "heikin": 1.4,
        "boshuAvg30d": 130.0,
        "heikinAvg30d": 1.529
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 107.314,
        "saikou": 2.44,
        "heikin": 1.45,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 1.712
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 107.314,
        "saikou": 2.44,
        "heikin": 1.47,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 1.684
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 120.942,
        "saikou": 2.44,
        "heikin": 1.49,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 1.705
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 120.942,
        "saikou": 2.44,
        "heikin": 1.48,
        "boshuAvg30d": 153.5,
        "heikinAvg30d": 1.715
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 144.887,
        "saikou": 2.44,
        "heikin": 1.34,
        "boshuAvg30d": 153.5,
        "heikinAvg30d": 1.922
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 134.941,
        "saikou": 3.95,
        "heikin": 2.18,
        "boshuAvg30d": 153.5,
        "heikinAvg30d": 2.155
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 152.753,
        "saikou": 3.4,
        "heikin": 1.9,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 2.38
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 152.753,
        "saikou": 3.95,
        "heikin": 1.91,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 2.292
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 150.768,
        "saikou": 5.95,
        "heikin": 2.18,
        "boshuAvg30d": 153.0,
        "heikinAvg30d": 2.563
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 149.325,
        "saikou": 5.95,
        "heikin": 2.27,
        "boshuAvg30d": 152.5,
        "heikinAvg30d": 2.594
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 151.31,
        "saikou": 5.95,
        "heikin": 2.27,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 2.596
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 128.808,
        "saikou": 3.4,
        "heikin": 2.31,
        "boshuAvg30d": 152.0,
        "heikinAvg30d": 2.354
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 128.808,
        "saikou": 3,
        "heikin": 2.15,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 2.206
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 130.434,
        "saikou": 3,
        "heikin": 1.84,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 2.256
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 126.108,
        "saikou": 5.95,
        "heikin": 2.42,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 2.594
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 107.196,
        "saikou": 3,
        "heikin": 2.45,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.37
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 107.196,
        "saikou": 4.45,
        "heikin": 2.52,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 2.29
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 107.196,
        "saikou": 3,
        "heikin": 1.77,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 2.236
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 130.807,
        "saikou": 3.95,
        "heikin": 2.26,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 2.269
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 105.326,
        "saikou": 3.95,
        "heikin": 2.67,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 2.531
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 107.324,
        "saikou": 3.95,
        "heikin": 2.53,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 2.446
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 84.895,
        "saikou": 2.38,
        "heikin": 2.08,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 2.46
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 101.882,
        "saikou": 2.5,
        "heikin": 2.17,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 2.455
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 105.195,
        "saikou": 3.7,
        "heikin": 2.42,
        "boshuAvg30d": 149.5,
        "heikinAvg30d": 2.565
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 103.235,
        "saikou": 2.24,
        "heikin": 1.85,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 2.275
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 99.368,
        "saikou": 2.42,
        "heikin": 1.92,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 2.293
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 107.314,
        "saikou": 2,
        "heikin": 1.68,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 2.304
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 107.314,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 146.0,
        "heikinAvg30d": 2.267
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 111.029,
        "saikou": 1.99,
        "heikin": 1.6,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 2.184
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 128.94,
        "saikou": 1.99,
        "heikin": 1.43,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.176
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 130.925,
        "saikou": 2,
        "heikin": 1.42,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.118
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 130.925,
        "saikou": 2,
        "heikin": 1.46,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.21
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 130.925,
        "saikou": 2,
        "heikin": 1.48,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.241
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 105.316,
        "saikou": 1.99,
        "heikin": 1.63,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 2.187
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 107.314,
        "saikou": 1.99,
        "heikin": 1.55,
        "boshuAvg30d": 141.5,
        "heikinAvg30d": 1.71
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 105.871,
        "saikou": 1.99,
        "heikin": 1.65,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 1.865
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 170.271,
        "saikou": 6.26,
        "heikin": 4.97,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.617
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 170.271,
        "saikou": 6.26,
        "heikin": 4.97,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.647
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 193.236,
        "saikou": 6.2,
        "heikin": 5.06,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.708
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 198.685,
        "saikou": 5.85,
        "heikin": 4.58,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.616
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 174.061,
        "saikou": 4.59,
        "heikin": 3.53,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.545
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 174.061,
        "saikou": 6.26,
        "heikin": 4.58,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.74
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 188.952,
        "saikou": 7.3,
        "heikin": 4.89,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 1.903
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 188.952,
        "saikou": 7.7,
        "heikin": 6.28,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.172
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 188.952,
        "saikou": 7.7,
        "heikin": 6.28,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.338
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 188.952,
        "saikou": 8.85,
        "heikin": 7.16,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.779
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 190.92,
        "saikou": 6.27,
        "heikin": 4.27,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.899
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 190.92,
        "saikou": 6.6,
        "heikin": 4.46,
        "boshuAvg30d": 140.5,
        "heikinAvg30d": 2.881
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 190.92,
        "saikou": 6.6,
        "heikin": 4.47,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 3.153
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 190.92,
        "saikou": 8.24,
        "heikin": 5.42,
        "boshuAvg30d": 143.0,
        "heikinAvg30d": 2.247
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 190.92,
        "saikou": 5.1,
        "heikin": 3.63,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 1.547
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 241.535,
        "saikou": 2.71,
        "heikin": 2.16,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 1.262
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 243.533,
        "saikou": 2.29,
        "heikin": 1.77,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 1.415
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 245.956,
        "saikou": 1.56,
        "heikin": 1.55,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 1.461
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 228.082,
        "saikou": 2.7,
        "heikin": 1.75,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 1.586
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 228.082,
        "saikou": 2.7,
        "heikin": 1.75,
        "boshuAvg30d": 150.0,
        "heikinAvg30d": 1.546
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 228.082,
        "saikou": 2.7,
        "heikin": 1.75,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 1.619
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 228.082,
        "saikou": 2.7,
        "heikin": 1.75,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 1.521
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 226.084,
        "saikou": 8.42,
        "heikin": 2.6,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 1.576
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 226.084,
        "saikou": 9.64,
        "heikin": 6.22,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 1.508
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 226.084,
        "saikou": 9.76,
        "heikin": 6.14,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.324
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 226.084,
        "saikou": 9.98,
        "heikin": 6.34,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.368
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 226.084,
        "saikou": 9.47,
        "heikin": 5.98,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.702
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 226.084,
        "saikou": 9.47,
        "heikin": 5.81,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 1.576
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 226.084,
        "saikou": 9.69,
        "heikin": 6.29,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 1.536
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 226.074,
        "saikou": 4.38,
        "heikin": 1.8,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.685
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 173.036,
        "saikou": 6,
        "heikin": 2.38,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 1.935
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 173.036,
        "saikou": 5.66,
        "heikin": 4.18,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 2.228
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 64.292,
        "saikou": 2.7,
        "heikin": 2.01,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 2.548
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 64.292,
        "saikou": 6,
        "heikin": 2.05,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.237
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 64.292,
        "saikou": 6,
        "heikin": 2.13,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.79
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 64.292,
        "saikou": 6,
        "heikin": 2.2,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.999
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 62.302,
        "saikou": 6,
        "heikin": 2.2,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 4.133
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 62.302,
        "saikou": 3.22,
        "heikin": 2.11,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 4.168
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 80.186,
        "saikou": 3.05,
        "heikin": 1.98,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.892
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 82.176,
        "saikou": 2.7,
        "heikin": 1.96,
        "boshuAvg30d": 147.5,
        "heikinAvg30d": 3.406
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 178.067,
        "saikou": 7.17,
        "heikin": 5.03,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.481
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 178.067,
        "saikou": 6.77,
        "heikin": 4.79,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 3.27
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 178.067,
        "saikou": 6.97,
        "heikin": 4.79,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.563
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 178.067,
        "saikou": 6.27,
        "heikin": 4.53,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.411
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 178.067,
        "saikou": 6.77,
        "heikin": 4.82,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 3.27
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 178.067,
        "saikou": 6.27,
        "heikin": 4.54,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.741
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 178.067,
        "saikou": 6.78,
        "heikin": 4.8,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 2.654
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 178.067,
        "saikou": 6.78,
        "heikin": 4.79,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 1.716
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 148.043,
        "saikou": 1.7,
        "heikin": 0.92,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.976
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 148.043,
        "saikou": 1.6,
        "heikin": 0.89,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.932
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 148.043,
        "saikou": 1.6,
        "heikin": 0.89,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.918
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 148.043,
        "saikou": 1.6,
        "heikin": 1.51,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.897
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 148.043,
        "saikou": 1.6,
        "heikin": 1.51,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.9
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 149.043,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.912
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 167.043,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.911
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 155.5,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.93
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 167.043,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.987
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 166.043,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.023
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 147.043,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.988
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 148.043,
        "saikou": 1.6,
        "heikin": 0.64,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.918
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 147.043,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.968
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.916
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.876
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 45.5,
        "heikinAvg30d": 0.871
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.5,
        "heikinAvg30d": 0.799
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.5,
        "heikinAvg30d": 0.845
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 136.043,
        "saikou": 1.6,
        "heikin": 1.44,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 1.117
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.83,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.073
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.85,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.086
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 170.043,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.03
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.105
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.51,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.11
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.51,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.166
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.51,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.174
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.51,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.108
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.52,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.137
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.45,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.15
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.45,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 1.08
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.072
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.47,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.084
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.47,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.199
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 166.543,
        "saikou": 1.6,
        "heikin": 1.09,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 1.317
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 168.543,
        "saikou": 1.6,
        "heikin": 1.16,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.44
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 167.543,
        "saikou": 1.6,
        "heikin": 1.15,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.474
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 165.543,
        "saikou": 1.6,
        "heikin": 1.36,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.423
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 166.543,
        "saikou": 1.6,
        "heikin": 1.36,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.459
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 166.543,
        "saikou": 1.6,
        "heikin": 1.36,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.351
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.338
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 166.543,
        "saikou": 1.6,
        "heikin": 1.2,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.315
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 188.543,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.294
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 202.543,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.009
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 200.543,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.973
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 218.543,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.001
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.53,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.988
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.53,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.016
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 222.543,
        "saikou": 1.6,
        "heikin": 0.53,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.01
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 210.966,
        "saikou": 8.09,
        "heikin": 5.92,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 4.199
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 219.45,
        "saikou": 7.68,
        "heikin": 5.62,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 3.675
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 162.256,
        "saikou": 7.4,
        "heikin": 5.98,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 3.398
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 164.143,
        "saikou": 7.53,
        "heikin": 4.7,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 3.208
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 166.106,
        "saikou": 7.53,
        "heikin": 4.65,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 3.076
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 166.106,
        "saikou": 7.51,
        "heikin": 4.63,
        "boshuAvg30d": 166.0,
        "heikinAvg30d": 3.448
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 185.261,
        "saikou": 7.75,
        "heikin": 4.69,
        "boshuAvg30d": 166.5,
        "heikinAvg30d": 3.753
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 269.433,
        "saikou": 7.71,
        "heikin": 6.39,
        "boshuAvg30d": 166.5,
        "heikinAvg30d": 4.194
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 321.361,
        "saikou": 7.8,
        "heikin": 6.52,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 4.454
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 288.155,
        "saikou": 8.05,
        "heikin": 6.75,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 4.912
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 287.735,
        "saikou": 7.95,
        "heikin": 6.03,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 5.138
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 284.435,
        "saikou": 8.1,
        "heikin": 6.26,
        "boshuAvg30d": 167.0,
        "heikinAvg30d": 4.988
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 337.335,
        "saikou": 8.18,
        "heikin": 6.29,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 4.502
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 387.985,
        "saikou": 7.75,
        "heikin": 5.99,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 3.687
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 179.985,
        "saikou": 6.95,
        "heikin": 4.16,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 2.774
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 217.985,
        "saikou": 5.96,
        "heikin": 3.58,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 2.726
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 217.985,
        "saikou": 6.07,
        "heikin": 3.4,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 2.866
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 267.985,
        "saikou": 4.66,
        "heikin": 3.08,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 3.049
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 259.522,
        "saikou": 4.12,
        "heikin": 2.55,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 3.049
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 259.522,
        "saikou": 3.14,
        "heikin": 1.87,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 2.878
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 251.59,
        "saikou": 3.17,
        "heikin": 1.88,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 2.769
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 247.611,
        "saikou": 2.83,
        "heikin": 1.65,
        "boshuAvg30d": 179.0,
        "heikinAvg30d": 2.811
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 246.413,
        "saikou": 3.17,
        "heikin": 1.88,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 2.712
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 242.439,
        "saikou": 3.26,
        "heikin": 1.95,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 2.661
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 232.811,
        "saikou": 2.08,
        "heikin": 1.31,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 2.139
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 230.665,
        "saikou": 2.57,
        "heikin": 1.53,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 2.338
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 249.896,
        "saikou": 3.81,
        "heikin": 2.39,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 2.795
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 251.872,
        "saikou": 5.17,
        "heikin": 3.43,
        "boshuAvg30d": 178.0,
        "heikinAvg30d": 3.361
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 251.872,
        "saikou": 8.17,
        "heikin": 5.45,
        "boshuAvg30d": 177.5,
        "heikinAvg30d": 3.554
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 251.872,
        "saikou": 9.36,
        "heikin": 6.35,
        "boshuAvg30d": 176.0,
        "heikinAvg30d": 4.116
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 209.522,
        "saikou": 9.82,
        "heikin": 5.94,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 4.316
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 163.522,
        "saikou": 9.09,
        "heikin": 5.42,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 4.96
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 285.522,
        "saikou": 10,
        "heikin": 7.96,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 5.865
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 303.696,
        "saikou": 10,
        "heikin": 8.16,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 6.181
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 311.533,
        "saikou": 10,
        "heikin": 8.2,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 6.213
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 283.533,
        "saikou": 10,
        "heikin": 8.02,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 6.333
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 254.099,
        "saikou": 10,
        "heikin": 7.82,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 6.378
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 256.075,
        "saikou": 9.17,
        "heikin": 7.2,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 6.338
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 319.28,
        "saikou": 8.95,
        "heikin": 7.42,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 6.082
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 325.121,
        "saikou": 8,
        "heikin": 6.6,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.627
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 266.499,
        "saikou": 8.02,
        "heikin": 6.06,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.603
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 268.475,
        "saikou": 7.7,
        "heikin": 5.81,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.409
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 272.445,
        "saikou": 7.68,
        "heikin": 5.36,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 5.294
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 233.795,
        "saikou": 7.86,
        "heikin": 5.62,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 5.211
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 227.785,
        "saikou": 7.94,
        "heikin": 5.7,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 5.356
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 235.785,
        "saikou": 7.8,
        "heikin": 5.59,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 4.953
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 222.761,
        "saikou": 7.79,
        "heikin": 5.61,
        "boshuAvg30d": 169.5,
        "heikinAvg30d": 4.809
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 222.761,
        "saikou": 7.36,
        "heikin": 5.36,
        "boshuAvg30d": 169.0,
        "heikinAvg30d": 4.015
      }
    ]
  }
};
