// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/17〜2026/11/15）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-16",
  "fetchedAt": "2026-11-16",
  "avgWindowLabel": "過去30日平均（2026/10/17〜2026/11/15）",
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
      "boshu": 1254,
      "ouatsu": 1542.9,
      "saikou": 9.98,
      "heikin": 2.71,
      "boshuAvg30d": 1133.8,
      "heikinAvg30d": 2.777
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1254,
      "ouatsu": 1562.062,
      "saikou": 10,
      "heikin": 2.75,
      "boshuAvg30d": 1133.8,
      "heikinAvg30d": 2.702
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1254,
      "ouatsu": 1644.315,
      "saikou": 10,
      "heikin": 2.59,
      "boshuAvg30d": 1133.8,
      "heikinAvg30d": 2.648
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1253,
      "ouatsu": 1616.837,
      "saikou": 10,
      "heikin": 2.69,
      "boshuAvg30d": 1133.3,
      "heikinAvg30d": 2.585
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1247,
      "ouatsu": 1602.488,
      "saikou": 10,
      "heikin": 2.7,
      "boshuAvg30d": 1128.8,
      "heikinAvg30d": 2.647
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1247,
      "ouatsu": 1582.405,
      "saikou": 10,
      "heikin": 2.14,
      "boshuAvg30d": 1128.3,
      "heikinAvg30d": 2.706
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1244,
      "ouatsu": 1619.791,
      "saikou": 10,
      "heikin": 2.54,
      "boshuAvg30d": 1125.3,
      "heikinAvg30d": 2.807
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1248,
      "ouatsu": 1578.136,
      "saikou": 9.99,
      "heikin": 3.08,
      "boshuAvg30d": 1128.3,
      "heikinAvg30d": 3.052
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1248,
      "ouatsu": 1580.774,
      "saikou": 9.99,
      "heikin": 3.12,
      "boshuAvg30d": 1129.3,
      "heikinAvg30d": 3.114
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1250,
      "ouatsu": 1591.611,
      "saikou": 9.99,
      "heikin": 3.3,
      "boshuAvg30d": 1130.8,
      "heikinAvg30d": 3.137
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1250,
      "ouatsu": 1579.632,
      "saikou": 9.99,
      "heikin": 3.57,
      "boshuAvg30d": 1130.8,
      "heikinAvg30d": 3.197
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1250,
      "ouatsu": 1624.282,
      "saikou": 9.98,
      "heikin": 3.4,
      "boshuAvg30d": 1130.8,
      "heikinAvg30d": 3.212
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1309,
      "ouatsu": 1572.868,
      "saikou": 9.99,
      "heikin": 3.49,
      "boshuAvg30d": 1190.3,
      "heikinAvg30d": 3.33
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1334,
      "ouatsu": 1622.995,
      "saikou": 10,
      "heikin": 3.97,
      "boshuAvg30d": 1214.3,
      "heikinAvg30d": 3.321
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1353,
      "ouatsu": 1558.892,
      "saikou": 10,
      "heikin": 3.78,
      "boshuAvg30d": 1234.3,
      "heikinAvg30d": 3.174
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1368,
      "ouatsu": 1625.116,
      "saikou": 9.98,
      "heikin": 3.8,
      "boshuAvg30d": 1250.6,
      "heikinAvg30d": 2.942
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1368,
      "ouatsu": 1618.114,
      "saikou": 9.99,
      "heikin": 3.45,
      "boshuAvg30d": 1251.0,
      "heikinAvg30d": 2.821
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1368,
      "ouatsu": 1467.294,
      "saikou": 9.99,
      "heikin": 3.4,
      "boshuAvg30d": 1254.8,
      "heikinAvg30d": 2.824
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1297,
      "ouatsu": 1513.258,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1196.8,
      "heikinAvg30d": 2.775
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1302,
      "ouatsu": 1490.018,
      "saikou": 10,
      "heikin": 2.58,
      "boshuAvg30d": 1200.8,
      "heikinAvg30d": 2.831
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1306,
      "ouatsu": 1526.242,
      "saikou": 10,
      "heikin": 2.49,
      "boshuAvg30d": 1205.9,
      "heikinAvg30d": 2.789
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1310,
      "ouatsu": 1484.309,
      "saikou": 10,
      "heikin": 2.84,
      "boshuAvg30d": 1207.9,
      "heikinAvg30d": 2.82
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1304,
      "ouatsu": 1497.196,
      "saikou": 10,
      "heikin": 3.2,
      "boshuAvg30d": 1203.4,
      "heikinAvg30d": 2.765
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1304,
      "ouatsu": 1536.202,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1202.9,
      "heikinAvg30d": 2.829
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1285,
      "ouatsu": 1339.46,
      "saikou": 10,
      "heikin": 3.8,
      "boshuAvg30d": 1183.1,
      "heikinAvg30d": 2.663
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1285,
      "ouatsu": 1364.59,
      "saikou": 10,
      "heikin": 3.94,
      "boshuAvg30d": 1183.1,
      "heikinAvg30d": 2.697
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1285,
      "ouatsu": 1550.777,
      "saikou": 10,
      "heikin": 3.25,
      "boshuAvg30d": 1183.1,
      "heikinAvg30d": 2.792
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1281,
      "ouatsu": 1583.966,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1179.8,
      "heikinAvg30d": 2.902
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1280,
      "ouatsu": 1501.17,
      "saikou": 10,
      "heikin": 3.01,
      "boshuAvg30d": 1177.8,
      "heikinAvg30d": 3.025
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1274,
      "ouatsu": 1565.645,
      "saikou": 10,
      "heikin": 3.15,
      "boshuAvg30d": 1171.8,
      "heikinAvg30d": 3.076
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1345,
      "ouatsu": 1617.019,
      "saikou": 10,
      "heikin": 3.12,
      "boshuAvg30d": 1237.4,
      "heikinAvg30d": 3.269
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1345,
      "ouatsu": 1613.16,
      "saikou": 10,
      "heikin": 3.53,
      "boshuAvg30d": 1237.1,
      "heikinAvg30d": 3.389
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1345,
      "ouatsu": 1808.798,
      "saikou": 10,
      "heikin": 3.48,
      "boshuAvg30d": 1237.3,
      "heikinAvg30d": 3.659
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1343,
      "ouatsu": 1507.681,
      "saikou": 10,
      "heikin": 4.04,
      "boshuAvg30d": 1235.8,
      "heikinAvg30d": 3.773
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1341,
      "ouatsu": 1444.746,
      "saikou": 10,
      "heikin": 3.57,
      "boshuAvg30d": 1227.5,
      "heikinAvg30d": 3.718
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1336,
      "ouatsu": 1523.705,
      "saikou": 10,
      "heikin": 3.81,
      "boshuAvg30d": 1222.5,
      "heikinAvg30d": 3.725
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1332,
      "ouatsu": 1702.396,
      "saikou": 10,
      "heikin": 3.71,
      "boshuAvg30d": 1217.0,
      "heikinAvg30d": 3.556
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1332,
      "ouatsu": 1699.276,
      "saikou": 10,
      "heikin": 3.69,
      "boshuAvg30d": 1217.0,
      "heikinAvg30d": 3.552
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1332,
      "ouatsu": 1742.125,
      "saikou": 10,
      "heikin": 3.55,
      "boshuAvg30d": 1217.0,
      "heikinAvg30d": 3.364
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1330,
      "ouatsu": 1826.703,
      "saikou": 10,
      "heikin": 2.94,
      "boshuAvg30d": 1215.8,
      "heikinAvg30d": 3.319
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1323,
      "ouatsu": 1761.257,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1208.3,
      "heikinAvg30d": 3.245
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1323,
      "ouatsu": 1772.085,
      "saikou": 10,
      "heikin": 2.71,
      "boshuAvg30d": 1208.3,
      "heikinAvg30d": 3.22
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1234,
      "ouatsu": 1923.198,
      "saikou": 10,
      "heikin": 3.41,
      "boshuAvg30d": 1118.8,
      "heikinAvg30d": 3.135
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1237,
      "ouatsu": 1874.613,
      "saikou": 9.99,
      "heikin": 2.97,
      "boshuAvg30d": 1121.8,
      "heikinAvg30d": 3.072
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1236,
      "ouatsu": 1851.427,
      "saikou": 10,
      "heikin": 2.78,
      "boshuAvg30d": 1124.8,
      "heikinAvg30d": 3.11
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1229,
      "ouatsu": 1830.522,
      "saikou": 9.99,
      "heikin": 2.56,
      "boshuAvg30d": 1115.8,
      "heikinAvg30d": 3.068
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1221,
      "ouatsu": 1886.056,
      "saikou": 10,
      "heikin": 2.77,
      "boshuAvg30d": 1107.6,
      "heikinAvg30d": 3.076
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1213,
      "ouatsu": 1768.32,
      "saikou": 9.99,
      "heikin": 2.92,
      "boshuAvg30d": 1099.5,
      "heikinAvg30d": 2.865
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
        "ouatsu": 114.908,
        "saikou": 9.28,
        "heikin": 2.02,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 3.182
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 114.908,
        "saikou": 9.79,
        "heikin": 3.13,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 3.478
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 132.758,
        "saikou": 9.91,
        "heikin": 1.95,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 3.338
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 132.758,
        "saikou": 9.91,
        "heikin": 1.86,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 3.447
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 133.768,
        "saikou": 9.91,
        "heikin": 2.62,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.454
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 117.908,
        "saikou": 9.8,
        "heikin": 1.79,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.051
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 119.108,
        "saikou": 9.8,
        "heikin": 2.3,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.271
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 155.568,
        "saikou": 9.91,
        "heikin": 4.33,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.981
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 167.408,
        "saikou": 9.91,
        "heikin": 4.77,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.764
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 119.108,
        "saikou": 9.8,
        "heikin": 2.49,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.723
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 155.568,
        "saikou": 9.91,
        "heikin": 4.42,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.726
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 153.578,
        "saikou": 9.91,
        "heikin": 4.25,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.669
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 179.108,
        "saikou": 4.65,
        "heikin": 3.34,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.048
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 236.358,
        "saikou": 5.6,
        "heikin": 4.18,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 4.145
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 194.108,
        "saikou": 4.66,
        "heikin": 3.33,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 4.069
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 158.358,
        "saikou": 9.91,
        "heikin": 4.71,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 4.026
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 114.908,
        "saikou": 9,
        "heikin": 2.99,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 4.362
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 112.918,
        "saikou": 7.3,
        "heikin": 2.5,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 3.791
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 157.158,
        "saikou": 9.91,
        "heikin": 4.61,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 3.635
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 164.533,
        "saikou": 9.91,
        "heikin": 4.79,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 3.695
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 161.94,
        "saikou": 9.8,
        "heikin": 2.77,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 3.47
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 114.908,
        "saikou": 9.8,
        "heikin": 3.3,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.529
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 152.543,
        "saikou": 9.91,
        "heikin": 4.87,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.638
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 161.218,
        "saikou": 9.91,
        "heikin": 5.11,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.696
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 110.95,
        "saikou": 8.84,
        "heikin": 3.42,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 3.511
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 149.95,
        "saikou": 8.84,
        "heikin": 2.98,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 3.203
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 208.25,
        "saikou": 9.91,
        "heikin": 5.29,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 3.563
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 172.45,
        "saikou": 8.95,
        "heikin": 5.1,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 4.049
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 110.95,
        "saikou": 7.6,
        "heikin": 1.95,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 4.331
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 114.908,
        "saikou": 7.99,
        "heikin": 1.36,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 4.78
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 112.958,
        "saikou": 7.99,
        "heikin": 3.36,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.721
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 115.958,
        "saikou": 8.59,
        "heikin": 4.01,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 5.433
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 227.208,
        "saikou": 3.73,
        "heikin": 2.45,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 5.974
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 74.208,
        "saikou": 9.91,
        "heikin": 7.6,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 5.531
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 92.908,
        "saikou": 9.8,
        "heikin": 2.46,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.968
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 141.208,
        "saikou": 1.2,
        "heikin": 1.15,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 5.084
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 115.918,
        "saikou": 1.21,
        "heikin": 1.21,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.488
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 115.918,
        "saikou": 2.77,
        "heikin": 2.73,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.736
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 152.068,
        "saikou": 2.86,
        "heikin": 2.82,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.568
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 164.218,
        "saikou": 2.97,
        "heikin": 2.93,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 4.82
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 112.918,
        "saikou": 9.5,
        "heikin": 3.84,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 4.525
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 112.918,
        "saikou": 9.37,
        "heikin": 3.05,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.21
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 242.24,
        "saikou": 7.46,
        "heikin": 6.08,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.052
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 178.908,
        "saikou": 6.21,
        "heikin": 4.89,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 4.139
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 176.918,
        "saikou": 4.32,
        "heikin": 3.03,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 4.023
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 232.218,
        "saikou": 3.62,
        "heikin": 2.56,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 3.995
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 228.208,
        "saikou": 4.76,
        "heikin": 3.45,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 3.56
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 196.718,
        "saikou": 4.26,
        "heikin": 2.93,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 3.536
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 60.534,
        "saikou": 6.53,
        "heikin": 4.38,
        "boshuAvg30d": 121.0,
        "heikinAvg30d": 5.297
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 75.034,
        "saikou": 10,
        "heikin": 5.18,
        "boshuAvg30d": 121.0,
        "heikinAvg30d": 5.452
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 94.912,
        "saikou": 10,
        "heikin": 5.45,
        "boshuAvg30d": 121.0,
        "heikinAvg30d": 5.59
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 96.872,
        "saikou": 10,
        "heikin": 4.93,
        "boshuAvg30d": 121.0,
        "heikinAvg30d": 5.556
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 88.994,
        "saikou": 10,
        "heikin": 5.31,
        "boshuAvg30d": 121.0,
        "heikinAvg30d": 5.471
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 88.994,
        "saikou": 10,
        "heikin": 5.85,
        "boshuAvg30d": 121.0,
        "heikinAvg30d": 5.208
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 95.372,
        "saikou": 10,
        "heikin": 5.67,
        "boshuAvg30d": 120.0,
        "heikinAvg30d": 5.373
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 96.872,
        "saikou": 6.87,
        "heikin": 3.76,
        "boshuAvg30d": 120.5,
        "heikinAvg30d": 5.122
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 100.87,
        "saikou": 6.63,
        "heikin": 4.9,
        "boshuAvg30d": 120.0,
        "heikinAvg30d": 4.859
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 98.94,
        "saikou": 6.53,
        "heikin": 3.84,
        "boshuAvg30d": 120.5,
        "heikinAvg30d": 4.979
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 102.866,
        "saikou": 6.33,
        "heikin": 3.88,
        "boshuAvg30d": 120.5,
        "heikinAvg30d": 5.166
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 101.216,
        "saikou": 6.33,
        "heikin": 4.95,
        "boshuAvg30d": 120.5,
        "heikinAvg30d": 5.079
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 126.866,
        "saikou": 9.61,
        "heikin": 3.77,
        "boshuAvg30d": 127.5,
        "heikinAvg30d": 5.226
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 125.366,
        "saikou": 10,
        "heikin": 4.82,
        "boshuAvg30d": 131.5,
        "heikinAvg30d": 5.025
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 126.866,
        "saikou": 10,
        "heikin": 5.37,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 5.436
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 113.366,
        "saikou": 9.7,
        "heikin": 5.52,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 5.438
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 112.87,
        "saikou": 9.7,
        "heikin": 5.58,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 5.355
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 111.37,
        "saikou": 9.7,
        "heikin": 5.42,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 5.442
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 137.516,
        "saikou": 8,
        "heikin": 4.44,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 4.973
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 137.516,
        "saikou": 10,
        "heikin": 3.78,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 5.141
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 122.891,
        "saikou": 10,
        "heikin": 4.47,
        "boshuAvg30d": 65.4,
        "heikinAvg30d": 5.152
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 122.891,
        "saikou": 10,
        "heikin": 5.7,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 5.304
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 124.946,
        "saikou": 10,
        "heikin": 6.01,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 5.306
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 123.266,
        "saikou": 10,
        "heikin": 6.06,
        "boshuAvg30d": 66.4,
        "heikinAvg30d": 5.378
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 124.916,
        "saikou": 10,
        "heikin": 6.23,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 5.566
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 124.916,
        "saikou": 10,
        "heikin": 5.86,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 5.506
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 133.72,
        "saikou": 10,
        "heikin": 5.11,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 4.833
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 137.712,
        "saikou": 10,
        "heikin": 3.63,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 5.184
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 115.512,
        "saikou": 7.66,
        "heikin": 4.45,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 5.137
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 103.512,
        "saikou": 5.99,
        "heikin": 2.52,
        "boshuAvg30d": 59.4,
        "heikinAvg30d": 4.782
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 103.512,
        "saikou": 5.31,
        "heikin": 3.08,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 4.957
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 101.516,
        "saikou": 6.52,
        "heikin": 3.62,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 4.672
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 91.476,
        "saikou": 6.99,
        "heikin": 3.56,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 4.49
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 87.98,
        "saikou": 9.7,
        "heikin": 4.46,
        "boshuAvg30d": 136.0,
        "heikinAvg30d": 4.276
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 89.48,
        "saikou": 9.7,
        "heikin": 5.82,
        "boshuAvg30d": 135.0,
        "heikinAvg30d": 4.485
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 96.365,
        "saikou": 6.16,
        "heikin": 3.71,
        "boshuAvg30d": 133.5,
        "heikinAvg30d": 3.973
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 97.519,
        "saikou": 6.38,
        "heikin": 4.11,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 3.497
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 98.015,
        "saikou": 6.37,
        "heikin": 4.07,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 3.193
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 101.48,
        "saikou": 5.51,
        "heikin": 3.41,
        "boshuAvg30d": 133.0,
        "heikinAvg30d": 3.188
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 89.516,
        "saikou": 4.06,
        "heikin": 2.25,
        "boshuAvg30d": 132.5,
        "heikinAvg30d": 3.502
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 62.891,
        "saikou": 1.74,
        "heikin": 1.24,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 3.509
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 83.565,
        "saikou": 2.93,
        "heikin": 2.01,
        "boshuAvg30d": 132.0,
        "heikinAvg30d": 3.575
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 87.016,
        "saikou": 3.31,
        "heikin": 1.94,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 3.545
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 87.016,
        "saikou": 3.21,
        "heikin": 2.03,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 3.992
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 87.016,
        "saikou": 2.15,
        "heikin": 1.95,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 3.895
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 87.016,
        "saikou": 5.85,
        "heikin": 3.87,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 4.554
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 87.016,
        "saikou": 4.34,
        "heikin": 2.68,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 4.405
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 83.866,
        "saikou": 4.84,
        "heikin": 3.05,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 5.013
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 273,
        "ouatsu": 484.048,
        "saikou": 6.54,
        "heikin": 2.21,
        "boshuAvg30d": 241.4,
        "heikinAvg30d": 2.559
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 273,
        "ouatsu": 486.288,
        "saikou": 7.82,
        "heikin": 1.97,
        "boshuAvg30d": 241.4,
        "heikinAvg30d": 2.43
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 273,
        "ouatsu": 490.71,
        "saikou": 7.85,
        "heikin": 2.42,
        "boshuAvg30d": 241.4,
        "heikinAvg30d": 2.56
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 273,
        "ouatsu": 456.316,
        "saikou": 6.81,
        "heikin": 2.84,
        "boshuAvg30d": 241.4,
        "heikinAvg30d": 2.302
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 271,
        "ouatsu": 507.67,
        "saikou": 7.83,
        "heikin": 2.3,
        "boshuAvg30d": 239.9,
        "heikinAvg30d": 2.407
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 271,
        "ouatsu": 498.41,
        "saikou": 0.62,
        "heikin": 0.44,
        "boshuAvg30d": 239.4,
        "heikinAvg30d": 2.313
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 269,
        "ouatsu": 468.436,
        "saikou": 6.99,
        "heikin": 2.29,
        "boshuAvg30d": 237.4,
        "heikinAvg30d": 2.277
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 271,
        "ouatsu": 444.574,
        "saikou": 7.52,
        "heikin": 2.51,
        "boshuAvg30d": 239.4,
        "heikinAvg30d": 2.442
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 271,
        "ouatsu": 451.813,
        "saikou": 6.86,
        "heikin": 2.35,
        "boshuAvg30d": 239.4,
        "heikinAvg30d": 2.678
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 272,
        "ouatsu": 453.593,
        "saikou": 6.55,
        "heikin": 2.21,
        "boshuAvg30d": 240.4,
        "heikinAvg30d": 2.465
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 272,
        "ouatsu": 435.364,
        "saikou": 6,
        "heikin": 2.01,
        "boshuAvg30d": 240.4,
        "heikinAvg30d": 2.466
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 272,
        "ouatsu": 450.16,
        "saikou": 6,
        "heikin": 1.98,
        "boshuAvg30d": 240.4,
        "heikinAvg30d": 2.678
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 292,
        "ouatsu": 385.37,
        "saikou": 3.45,
        "heikin": 2.21,
        "boshuAvg30d": 259.9,
        "heikinAvg30d": 2.972
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 300,
        "ouatsu": 350.412,
        "saikou": 5.89,
        "heikin": 2.82,
        "boshuAvg30d": 267.9,
        "heikinAvg30d": 3.016
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 304,
        "ouatsu": 315.744,
        "saikou": 6.71,
        "heikin": 2.4,
        "boshuAvg30d": 272.4,
        "heikinAvg30d": 2.926
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 309,
        "ouatsu": 380.759,
        "saikou": 7.66,
        "heikin": 2.82,
        "boshuAvg30d": 277.7,
        "heikinAvg30d": 2.748
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 309,
        "ouatsu": 409.229,
        "saikou": 7.66,
        "heikin": 2.69,
        "boshuAvg30d": 278.0,
        "heikinAvg30d": 2.42
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 309,
        "ouatsu": 391.177,
        "saikou": 7.42,
        "heikin": 3.42,
        "boshuAvg30d": 281.9,
        "heikinAvg30d": 2.669
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 299,
        "ouatsu": 389.328,
        "saikou": 8.04,
        "heikin": 2.33,
        "boshuAvg30d": 272.9,
        "heikinAvg30d": 2.296
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 299,
        "ouatsu": 392.403,
        "saikou": 5.89,
        "heikin": 1.12,
        "boshuAvg30d": 272.9,
        "heikinAvg30d": 2.458
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 299,
        "ouatsu": 380.107,
        "saikou": 4.96,
        "heikin": 0.79,
        "boshuAvg30d": 273.5,
        "heikinAvg30d": 2.469
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 299,
        "ouatsu": 385.509,
        "saikou": 5.89,
        "heikin": 1.33,
        "boshuAvg30d": 273.0,
        "heikinAvg30d": 2.437
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 296,
        "ouatsu": 367.431,
        "saikou": 5.89,
        "heikin": 1.34,
        "boshuAvg30d": 270.5,
        "heikinAvg30d": 2.472
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 296,
        "ouatsu": 355.776,
        "saikou": 6,
        "heikin": 1.45,
        "boshuAvg30d": 270.5,
        "heikinAvg30d": 2.661
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 294,
        "ouatsu": 285.028,
        "saikou": 6,
        "heikin": 1.62,
        "boshuAvg30d": 267.7,
        "heikinAvg30d": 2.146
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 294,
        "ouatsu": 300.226,
        "saikou": 6,
        "heikin": 1.58,
        "boshuAvg30d": 267.7,
        "heikinAvg30d": 2.198
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 294,
        "ouatsu": 336.003,
        "saikou": 6,
        "heikin": 1.41,
        "boshuAvg30d": 267.7,
        "heikinAvg30d": 2.3
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 294,
        "ouatsu": 336.559,
        "saikou": 5.59,
        "heikin": 0.86,
        "boshuAvg30d": 267.4,
        "heikinAvg30d": 2.283
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 293,
        "ouatsu": 379.836,
        "saikou": 5.67,
        "heikin": 1.37,
        "boshuAvg30d": 266.4,
        "heikinAvg30d": 2.624
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 293,
        "ouatsu": 452.523,
        "saikou": 4.78,
        "heikin": 2.73,
        "boshuAvg30d": 265.9,
        "heikinAvg30d": 2.431
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 291,
        "ouatsu": 504.647,
        "saikou": 9.78,
        "heikin": 2.16,
        "boshuAvg30d": 263.9,
        "heikinAvg30d": 2.457
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 291,
        "ouatsu": 510.132,
        "saikou": 7.14,
        "heikin": 2.74,
        "boshuAvg30d": 263.5,
        "heikinAvg30d": 2.349
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 291,
        "ouatsu": 476.985,
        "saikou": 3.62,
        "heikin": 1.76,
        "boshuAvg30d": 263.2,
        "heikinAvg30d": 2.384
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 291,
        "ouatsu": 405.941,
        "saikou": 5.89,
        "heikin": 2.08,
        "boshuAvg30d": 263.2,
        "heikinAvg30d": 2.318
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 291,
        "ouatsu": 436.134,
        "saikou": 5.89,
        "heikin": 1.98,
        "boshuAvg30d": 261.2,
        "heikinAvg30d": 2.185
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 291,
        "ouatsu": 484.652,
        "saikou": 8.45,
        "heikin": 3.89,
        "boshuAvg30d": 261.2,
        "heikinAvg30d": 2.341
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 293,
        "ouatsu": 657.524,
        "saikou": 8.64,
        "heikin": 3.62,
        "boshuAvg30d": 262.7,
        "heikinAvg30d": 2.455
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 293,
        "ouatsu": 649.92,
        "saikou": 8.34,
        "heikin": 3.25,
        "boshuAvg30d": 262.7,
        "heikinAvg30d": 2.325
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 293,
        "ouatsu": 600.214,
        "saikou": 8.22,
        "heikin": 3.25,
        "boshuAvg30d": 262.7,
        "heikinAvg30d": 2.358
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 293,
        "ouatsu": 641.053,
        "saikou": 2.34,
        "heikin": 1.24,
        "boshuAvg30d": 263.1,
        "heikinAvg30d": 2.241
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 292,
        "ouatsu": 662.628,
        "saikou": 5.83,
        "heikin": 1.4,
        "boshuAvg30d": 261.6,
        "heikinAvg30d": 2.22
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 292,
        "ouatsu": 660.828,
        "saikou": 5.63,
        "heikin": 1.34,
        "boshuAvg30d": 261.6,
        "heikinAvg30d": 2.481
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 291,
        "ouatsu": 634.62,
        "saikou": 6.42,
        "heikin": 2.2,
        "boshuAvg30d": 261.1,
        "heikinAvg30d": 2.317
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 291,
        "ouatsu": 625.5,
        "saikou": 6.95,
        "heikin": 2.2,
        "boshuAvg30d": 261.1,
        "heikinAvg30d": 2.282
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 291,
        "ouatsu": 590.246,
        "saikou": 6.23,
        "heikin": 1.7,
        "boshuAvg30d": 264.1,
        "heikinAvg30d": 2.39
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 289,
        "ouatsu": 580.048,
        "saikou": 6.57,
        "heikin": 2.31,
        "boshuAvg30d": 259.1,
        "heikinAvg30d": 2.441
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 287,
        "ouatsu": 601.504,
        "saikou": 6.59,
        "heikin": 2.67,
        "boshuAvg30d": 257.4,
        "heikinAvg30d": 2.849
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 286,
        "ouatsu": 505.771,
        "saikou": 6.65,
        "heikin": 3.39,
        "boshuAvg30d": 255.7,
        "heikinAvg30d": 2.829
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 181,
        "ouatsu": 192.475,
        "saikou": 9.29,
        "heikin": 2.3,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 1.811
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 181,
        "ouatsu": 228.844,
        "saikou": 9.29,
        "heikin": 1.97,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 1.897
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 181,
        "ouatsu": 228.844,
        "saikou": 9.29,
        "heikin": 2.08,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 1.934
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 180,
        "ouatsu": 230.832,
        "saikou": 9.29,
        "heikin": 2.3,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.005
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 180,
        "ouatsu": 218.721,
        "saikou": 9.29,
        "heikin": 2.17,
        "boshuAvg30d": 141.8,
        "heikinAvg30d": 2.016
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 179,
        "ouatsu": 239.806,
        "saikou": 9.29,
        "heikin": 2.4,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 1.953
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 178,
        "ouatsu": 263.657,
        "saikou": 9.29,
        "heikin": 2.39,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.854
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 178,
        "ouatsu": 238.467,
        "saikou": 9.29,
        "heikin": 2.34,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.82
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 178,
        "ouatsu": 246.067,
        "saikou": 9.29,
        "heikin": 2,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 1.73
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 178,
        "ouatsu": 228.155,
        "saikou": 9.37,
        "heikin": 1.99,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 1.78
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 178,
        "ouatsu": 241.218,
        "saikou": 9.37,
        "heikin": 2.71,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 1.672
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 178,
        "ouatsu": 237.818,
        "saikou": 9.37,
        "heikin": 2.52,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 1.605
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 188,
        "ouatsu": 241.218,
        "saikou": 9.37,
        "heikin": 2.7,
        "boshuAvg30d": 150.3,
        "heikinAvg30d": 1.822
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 193,
        "ouatsu": 255.555,
        "saikou": 9.37,
        "heikin": 2.57,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 1.804
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 196,
        "ouatsu": 253.575,
        "saikou": 9.37,
        "heikin": 2.65,
        "boshuAvg30d": 157.8,
        "heikinAvg30d": 2.13
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 253.965,
        "saikou": 9.37,
        "heikin": 2.52,
        "boshuAvg30d": 159.8,
        "heikinAvg30d": 2.145
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 263.975,
        "saikou": 9.75,
        "heikin": 3.47,
        "boshuAvg30d": 159.8,
        "heikinAvg30d": 2.177
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 246.392,
        "saikou": 9.49,
        "heikin": 2.86,
        "boshuAvg30d": 159.8,
        "heikinAvg30d": 2.271
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 203,
        "ouatsu": 217.395,
        "saikou": 9.49,
        "heikin": 2.3,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 2.53
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 203,
        "ouatsu": 203.213,
        "saikou": 9.49,
        "heikin": 2.41,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 2.504
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 203,
        "ouatsu": 189.256,
        "saikou": 9.49,
        "heikin": 2.69,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 2.552
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 203,
        "ouatsu": 185.283,
        "saikou": 9.49,
        "heikin": 2.69,
        "boshuAvg30d": 164.8,
        "heikinAvg30d": 2.573
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 202,
        "ouatsu": 201.116,
        "saikou": 9.49,
        "heikin": 3.62,
        "boshuAvg30d": 163.8,
        "heikinAvg30d": 2.588
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 201,
        "ouatsu": 222.297,
        "saikou": 9.49,
        "heikin": 4.51,
        "boshuAvg30d": 162.8,
        "heikinAvg30d": 2.735
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 197,
        "ouatsu": 169.338,
        "saikou": 9.49,
        "heikin": 5.46,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 2.827
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 197,
        "ouatsu": 173.258,
        "saikou": 9.49,
        "heikin": 5.37,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 2.781
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 197,
        "ouatsu": 160.794,
        "saikou": 9.49,
        "heikin": 3.08,
        "boshuAvg30d": 158.8,
        "heikinAvg30d": 2.474
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 197,
        "ouatsu": 185.783,
        "saikou": 9.49,
        "heikin": 3.47,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 2.557
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 197,
        "ouatsu": 234.462,
        "saikou": 9.49,
        "heikin": 3.03,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 2.632
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 197,
        "ouatsu": 271.825,
        "saikou": 9.69,
        "heikin": 2.32,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 2.55
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 195,
        "ouatsu": 268.065,
        "saikou": 9.69,
        "heikin": 2.23,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 2.73
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 195,
        "ouatsu": 291.77,
        "saikou": 9.69,
        "heikin": 2.69,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 2.765
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 195,
        "ouatsu": 303.345,
        "saikou": 9.69,
        "heikin": 3.22,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 2.71
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 194,
        "ouatsu": 285.782,
        "saikou": 9.69,
        "heikin": 3.39,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 2.977
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 194,
        "ouatsu": 281.786,
        "saikou": 9.69,
        "heikin": 3.24,
        "boshuAvg30d": 155.8,
        "heikinAvg30d": 2.8
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 193,
        "ouatsu": 262.606,
        "saikou": 9.69,
        "heikin": 3.11,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 2.579
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 191,
        "ouatsu": 291.762,
        "saikou": 9.69,
        "heikin": 3.05,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 2.379
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 191,
        "ouatsu": 291.762,
        "saikou": 9.69,
        "heikin": 3.05,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 2.384
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 191,
        "ouatsu": 327.354,
        "saikou": 9.69,
        "heikin": 2.47,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 2.017
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 191,
        "ouatsu": 348.437,
        "saikou": 9.69,
        "heikin": 2.44,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 2.026
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 191,
        "ouatsu": 332.38,
        "saikou": 9.69,
        "heikin": 1.89,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 1.86
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 191,
        "ouatsu": 324.398,
        "saikou": 9.27,
        "heikin": 1.68,
        "boshuAvg30d": 152.8,
        "heikinAvg30d": 1.784
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 193,
        "ouatsu": 332.213,
        "saikou": 9.27,
        "heikin": 1.81,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 1.707
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 193,
        "ouatsu": 336.129,
        "saikou": 9.27,
        "heikin": 2,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 1.837
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 193,
        "ouatsu": 331.064,
        "saikou": 9.27,
        "heikin": 1.73,
        "boshuAvg30d": 154.8,
        "heikinAvg30d": 1.891
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 191,
        "ouatsu": 352.147,
        "saikou": 9.27,
        "heikin": 1.85,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 1.999
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 190,
        "ouatsu": 350.257,
        "saikou": 9.27,
        "heikin": 1.72,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 1.911
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 187,
        "ouatsu": 337.657,
        "saikou": 9.27,
        "heikin": 1.63,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 1.988
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.33,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.643
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 1.9,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.469
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 1.9,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.161
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 8.1,
        "heikin": 8.1,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.284
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 5.72,
        "boshuAvg30d": 58.5,
        "heikinAvg30d": 2.182
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 5.59,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.059
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.41,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.941
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 5.83,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.753
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 2.2,
        "heikin": 2.18,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.828
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 6.21,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.405
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 5.83,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.486
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 6.16,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 3.108
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.37,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.228
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 6.24,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 3.409
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 6.34,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 3.752
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 6.54,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 3.448
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 3.815
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 3.695
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 4.151
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 4.493
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 5.196
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 5.59
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 4.098,
        "saikou": 9.99,
        "heikin": 9.94,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 4.757
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.5,
        "heikinAvg30d": 4.515
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 2.897
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 3.097
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 4.098,
        "saikou": 9.99,
        "heikin": 9.94,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 4.812
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 3.668
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 4.633
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.0,
        "heikinAvg30d": 4.468
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 4.098,
        "saikou": 9.99,
        "heikin": 9.94,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 5.537
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 6.21
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 5.556
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 5.398
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 5.488
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.5,
        "heikinAvg30d": 5.529
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 4.786
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 5.496
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 4.236
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.0,
        "heikinAvg30d": 4.731
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 66.0,
        "heikinAvg30d": 4.161
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 4.18
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 6.8,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 4.004
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 6.72,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 3.713
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 65.0,
        "heikinAvg30d": 3.797
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 6.24,
        "boshuAvg30d": 64.5,
        "heikinAvg30d": 3.357
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 64.0,
        "heikinAvg30d": 3.216
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 2.442
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 212.177,
        "saikou": 9.98,
        "heikin": 3.35,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 2.335
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 166.195,
        "saikou": 9.98,
        "heikin": 3.44,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 1.64
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 209.662,
        "saikou": 9.4,
        "heikin": 2.23,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 1.404
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 209.644,
        "saikou": 9.44,
        "heikin": 2.38,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 1.488
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 209.644,
        "saikou": 9.99,
        "heikin": 3.54,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 1.598
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 209.644,
        "saikou": 9.99,
        "heikin": 3.55,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 1.989
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 221.519,
        "saikou": 9.98,
        "heikin": 3.06,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 2.153
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 158.34,
        "saikou": 9.99,
        "heikin": 5.28,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 2.42
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.8,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 2.205
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.64,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 2.128
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 69.849,
        "saikou": 9.99,
        "heikin": 9.1,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 2.174
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 119.124,
        "saikou": 9.98,
        "heikin": 6.05,
        "boshuAvg30d": 178.1,
        "heikinAvg30d": 2.046
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 104.124,
        "saikou": 9.99,
        "heikin": 5.61,
        "boshuAvg30d": 188.6,
        "heikinAvg30d": 1.961
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.69,
        "boshuAvg30d": 192.6,
        "heikinAvg30d": 2.026
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.66,
        "boshuAvg30d": 197.6,
        "heikinAvg30d": 2.549
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 119.124,
        "saikou": 9.98,
        "heikin": 6.2,
        "boshuAvg30d": 200.1,
        "heikinAvg30d": 2.672
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.9,
        "boshuAvg30d": 200.1,
        "heikinAvg30d": 2.548
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.9,
        "boshuAvg30d": 200.1,
        "heikinAvg30d": 3.1
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 119.124,
        "saikou": 10,
        "heikin": 6.9,
        "boshuAvg30d": 209.7,
        "heikinAvg30d": 3.179
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 138.732,
        "saikou": 9.99,
        "heikin": 5.97,
        "boshuAvg30d": 209.7,
        "heikinAvg30d": 3.204
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 204.31,
        "saikou": 9.99,
        "heikin": 6.06,
        "boshuAvg30d": 209.7,
        "heikinAvg30d": 3.046
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 246.36,
        "saikou": 9.99,
        "heikin": 5.14,
        "boshuAvg30d": 208.7,
        "heikinAvg30d": 3.118
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 249.788,
        "saikou": 9.99,
        "heikin": 5.13,
        "boshuAvg30d": 207.2,
        "heikinAvg30d": 3.092
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 249.788,
        "saikou": 9.99,
        "heikin": 5.16,
        "boshuAvg30d": 207.7,
        "heikinAvg30d": 2.791
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 239.968,
        "saikou": 9.98,
        "heikin": 5.52,
        "boshuAvg30d": 206.2,
        "heikinAvg30d": 2.581
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 239.968,
        "saikou": 9.98,
        "heikin": 6.35,
        "boshuAvg30d": 206.2,
        "heikinAvg30d": 2.656
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 249.788,
        "saikou": 9.99,
        "heikin": 5.13,
        "boshuAvg30d": 206.2,
        "heikinAvg30d": 3.061
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 247.79,
        "saikou": 10,
        "heikin": 4.96,
        "boshuAvg30d": 206.2,
        "heikinAvg30d": 3.031
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 187.738,
        "saikou": 10,
        "heikin": 5.9,
        "boshuAvg30d": 206.2,
        "heikinAvg30d": 3.325
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 10,
        "heikin": 6.95,
        "boshuAvg30d": 206.2,
        "heikinAvg30d": 3.083
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 10,
        "heikin": 6.95,
        "boshuAvg30d": 205.7,
        "heikinAvg30d": 3.374
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 10,
        "heikin": 6.91,
        "boshuAvg30d": 205.7,
        "heikinAvg30d": 3.517
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 10,
        "heikin": 6.91,
        "boshuAvg30d": 205.7,
        "heikinAvg30d": 3.606
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.9,
        "boshuAvg30d": 205.7,
        "heikinAvg30d": 3.181
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.77,
        "boshuAvg30d": 201.4,
        "heikinAvg30d": 3.134
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.9,
        "boshuAvg30d": 200.4,
        "heikinAvg30d": 3.379
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 117.164,
        "saikou": 9.99,
        "heikin": 6.85,
        "boshuAvg30d": 198.4,
        "heikinAvg30d": 2.888
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 117.164,
        "saikou": 10,
        "heikin": 6.85,
        "boshuAvg30d": 198.4,
        "heikinAvg30d": 2.864
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.9,
        "boshuAvg30d": 198.4,
        "heikinAvg30d": 2.715
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.89,
        "boshuAvg30d": 197.4,
        "heikinAvg30d": 2.583
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 117.139,
        "saikou": 9.99,
        "heikin": 6.92,
        "boshuAvg30d": 196.4,
        "heikinAvg30d": 2.724
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 117.139,
        "saikou": 9.99,
        "heikin": 6.92,
        "boshuAvg30d": 196.9,
        "heikinAvg30d": 2.779
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 115.257,
        "saikou": 9.99,
        "heikin": 6.78,
        "boshuAvg30d": 196.9,
        "heikinAvg30d": 2.551
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 115.257,
        "saikou": 9.99,
        "heikin": 6.77,
        "boshuAvg30d": 196.9,
        "heikinAvg30d": 2.495
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 115.257,
        "saikou": 9.99,
        "heikin": 6.76,
        "boshuAvg30d": 196.9,
        "heikinAvg30d": 2.453
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.89,
        "boshuAvg30d": 195.4,
        "heikinAvg30d": 2.4
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 119.124,
        "saikou": 10,
        "heikin": 6.87,
        "boshuAvg30d": 193.9,
        "heikinAvg30d": 2.25
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 109.304,
        "saikou": 9.98,
        "heikin": 6.29,
        "boshuAvg30d": 191.9,
        "heikinAvg30d": 2.068
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 103,
        "ouatsu": 145.566,
        "saikou": 9.95,
        "heikin": 3.51,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 2.132
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 103,
        "ouatsu": 145.566,
        "saikou": 9.95,
        "heikin": 3.39,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 2.325
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 103,
        "ouatsu": 143.696,
        "saikou": 9.5,
        "heikin": 2.8,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 2.035
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 103,
        "ouatsu": 144.686,
        "saikou": 9.5,
        "heikin": 2.5,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 1.92
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 103,
        "ouatsu": 122.808,
        "saikou": 9.95,
        "heikin": 2.57,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 1.963
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 103,
        "ouatsu": 122.808,
        "saikou": 9.95,
        "heikin": 3.2,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 2.078
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 103,
        "ouatsu": 143.46,
        "saikou": 9.95,
        "heikin": 4.04,
        "boshuAvg30d": 134.0,
        "heikinAvg30d": 2.19
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 104,
        "ouatsu": 168.492,
        "saikou": 9.95,
        "heikin": 4.29,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.537
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 104,
        "ouatsu": 166.262,
        "saikou": 9.95,
        "heikin": 4.33,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.669
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 104,
        "ouatsu": 165.498,
        "saikou": 9.95,
        "heikin": 6.76,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.756
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 104,
        "ouatsu": 165.498,
        "saikou": 9.95,
        "heikin": 6.6,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.85
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 104,
        "ouatsu": 165.498,
        "saikou": 9.95,
        "heikin": 6.5,
        "boshuAvg30d": 134.5,
        "heikinAvg30d": 2.585
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 106,
        "ouatsu": 170.296,
        "saikou": 9.95,
        "heikin": 6.54,
        "boshuAvg30d": 136.5,
        "heikinAvg30d": 2.62
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 107,
        "ouatsu": 170.296,
        "saikou": 9.95,
        "heikin": 6.54,
        "boshuAvg30d": 137.5,
        "heikinAvg30d": 2.836
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 107,
        "ouatsu": 195.417,
        "saikou": 9.95,
        "heikin": 5.96,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 2.237
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 108,
        "ouatsu": 171.661,
        "saikou": 9.95,
        "heikin": 3.79,
        "boshuAvg30d": 139.0,
        "heikinAvg30d": 2.004
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 108,
        "ouatsu": 170.127,
        "saikou": 4.24,
        "heikin": 1.6,
        "boshuAvg30d": 139.0,
        "heikinAvg30d": 2.071
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 108,
        "ouatsu": 170.296,
        "saikou": 2.29,
        "heikin": 1.9,
        "boshuAvg30d": 139.0,
        "heikinAvg30d": 2.011
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 111,
        "ouatsu": 169.804,
        "saikou": 8,
        "heikin": 2.17,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 2.154
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 112,
        "ouatsu": 185.828,
        "saikou": 9.5,
        "heikin": 1.44,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 2.203
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 113,
        "ouatsu": 174.597,
        "saikou": 2.7,
        "heikin": 1.5,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.827
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 114,
        "ouatsu": 174.597,
        "saikou": 2.7,
        "heikin": 1.39,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 1.92
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 114,
        "ouatsu": 166.643,
        "saikou": 2.7,
        "heikin": 1.33,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 1.784
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 114,
        "ouatsu": 172.599,
        "saikou": 2.7,
        "heikin": 1.33,
        "boshuAvg30d": 145.0,
        "heikinAvg30d": 1.769
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 111,
        "ouatsu": 161.85,
        "saikou": 9.95,
        "heikin": 3.51,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 1.65
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 111,
        "ouatsu": 161.85,
        "saikou": 9.95,
        "heikin": 3.53,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 1.888
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 111,
        "ouatsu": 171.772,
        "saikou": 8,
        "heikin": 2.06,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 1.89
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 111,
        "ouatsu": 171.772,
        "saikou": 2.71,
        "heikin": 1.62,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 2.024
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 111,
        "ouatsu": 171.772,
        "saikou": 9.5,
        "heikin": 2.91,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 2.106
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 110,
        "ouatsu": 170.296,
        "saikou": 8,
        "heikin": 2.17,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.286
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 110,
        "ouatsu": 178.056,
        "saikou": 8,
        "heikin": 2.51,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.313
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 110,
        "ouatsu": 139.76,
        "saikou": 4.25,
        "heikin": 2,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.452
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 110,
        "ouatsu": 139.76,
        "saikou": 1.79,
        "heikin": 1.78,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 2.855
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 110,
        "ouatsu": 139.76,
        "saikou": 2.7,
        "heikin": 2.26,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.589
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 110,
        "ouatsu": 131.806,
        "saikou": 7.34,
        "heikin": 4.66,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.914
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 110,
        "ouatsu": 131.806,
        "saikou": 5.54,
        "heikin": 4.17,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.88
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 110,
        "ouatsu": 132.686,
        "saikou": 5.29,
        "heikin": 3.93,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.743
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 110,
        "ouatsu": 132.686,
        "saikou": 5.29,
        "heikin": 3.88,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.482
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 110,
        "ouatsu": 132.686,
        "saikou": 4.04,
        "heikin": 3.27,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.249
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 110,
        "ouatsu": 134.676,
        "saikou": 2.29,
        "heikin": 1.87,
        "boshuAvg30d": 141.0,
        "heikinAvg30d": 3.071
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 109,
        "ouatsu": 142.148,
        "saikou": 3.04,
        "heikin": 2.62,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.31
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 109,
        "ouatsu": 134.676,
        "saikou": 2.29,
        "heikin": 1.84,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 3.158
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 107,
        "ouatsu": 134.676,
        "saikou": 1.56,
        "heikin": 1.56,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 3.142
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 107,
        "ouatsu": 198.311,
        "saikou": 1.56,
        "heikin": 0.79,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 3.02
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 107,
        "ouatsu": 182.444,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 2.899
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 107,
        "ouatsu": 158.607,
        "saikou": 2,
        "heikin": 1.08,
        "boshuAvg30d": 138.0,
        "heikinAvg30d": 2.439
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 106,
        "ouatsu": 166.689,
        "saikou": 2,
        "heikin": 1.53,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 2.458
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 106,
        "ouatsu": 166.689,
        "saikou": 1.56,
        "heikin": 1.55,
        "boshuAvg30d": 137.0,
        "heikinAvg30d": 1.949
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.99,
        "heikin": 0.69,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.644
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.99,
        "heikin": 0.69,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.626
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 3.35,
        "heikin": 0.74,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.566
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 3.35,
        "heikin": 0.74,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.532
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.99,
        "heikin": 0.7,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.54
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.99,
        "heikin": 0.7,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.588
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 4.95,
        "heikin": 0.78,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.673
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 173.8,
        "saikou": 4.95,
        "heikin": 0.7,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.704
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 3.35,
        "heikin": 0.74,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.695
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 4.95,
        "heikin": 0.78,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.719
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 4.95,
        "heikin": 0.78,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.732
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 4.95,
        "heikin": 0.78,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.707
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 4.95,
        "heikin": 0.88,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 0.83
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 2.49,
        "heikin": 0.81,
        "boshuAvg30d": 43.5,
        "heikinAvg30d": 0.774
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 154.343,
        "saikou": 2.49,
        "heikin": 0.81,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 0.773
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 154.343,
        "saikou": 2.3,
        "heikin": 0.74,
        "boshuAvg30d": 45.5,
        "heikinAvg30d": 0.807
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.5,
        "heikinAvg30d": 0.816
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.5,
        "heikinAvg30d": 0.769
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.923
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 4.95,
        "heikin": 0.77,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 0.925
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 3.35,
        "heikin": 0.71,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 0.962
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 4.95,
        "heikin": 0.75,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.907
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 142.8,
        "saikou": 4.95,
        "heikin": 0.75,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.93
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 142.8,
        "saikou": 4.95,
        "heikin": 0.7,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.937
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.71,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 0.957
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 0.959
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 4.95,
        "heikin": 0.75,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 0.946
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 4.85,
        "heikin": 0.76,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 0.927
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 4.85,
        "heikin": 0.76,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.953
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 154.343,
        "saikou": 3.35,
        "heikin": 0.73,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.894
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 4.95,
        "heikin": 0.77,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.961
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.973
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 181.343,
        "saikou": 1.7,
        "heikin": 0.78,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.089
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 43.5,
        "heikinAvg30d": 1.12
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 142.8,
        "saikou": 3.95,
        "heikin": 0.72,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.143
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 142.8,
        "saikou": 2.85,
        "heikin": 0.69,
        "boshuAvg30d": 42.5,
        "heikinAvg30d": 1.174
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 1.203
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 142.8,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 1.172
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 3.95,
        "heikin": 0.66,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 1.185
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 1.216
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 1.211
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 1.198
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.81,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.833
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.778
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.737
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.67,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.663
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 215.343,
        "saikou": 1.7,
        "heikin": 0.94,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.718
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 189.8,
        "saikou": 1.7,
        "heikin": 0.62,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.721
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 140.951,
        "saikou": 7.44,
        "heikin": 5.61,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.708
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 154.984,
        "saikou": 7.05,
        "heikin": 5.26,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.212
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 153.49,
        "saikou": 7.73,
        "heikin": 5.48,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 4.948
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 153.488,
        "saikou": 7.73,
        "heikin": 5.46,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 4.851
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 128.642,
        "saikou": 7.34,
        "heikin": 4.62,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 4.95
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 112.594,
        "saikou": 6.8,
        "heikin": 2.85,
        "boshuAvg30d": 168.0,
        "heikinAvg30d": 5.208
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 118.998,
        "saikou": 4.67,
        "heikin": 2.3,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.529
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 138.125,
        "saikou": 5.42,
        "heikin": 2.79,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 6.008
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 139.989,
        "saikou": 5.99,
        "heikin": 3,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 6.119
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 217.952,
        "saikou": 6.39,
        "heikin": 4.55,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 6.242
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 220.028,
        "saikou": 6.5,
        "heikin": 4.7,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 6.433
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 207.647,
        "saikou": 6.68,
        "heikin": 4.78,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 6.333
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 207.645,
        "saikou": 7.04,
        "heikin": 4.87,
        "boshuAvg30d": 172.0,
        "heikinAvg30d": 6.222
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 207.643,
        "saikou": 7.7,
        "heikin": 5.35,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 6.221
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 195.817,
        "saikou": 7.12,
        "heikin": 5,
        "boshuAvg30d": 174.0,
        "heikinAvg30d": 5.197
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 269.642,
        "saikou": 9.38,
        "heikin": 6,
        "boshuAvg30d": 175.0,
        "heikinAvg30d": 4.489
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 269.64,
        "saikou": 8.73,
        "heikin": 4.95,
        "boshuAvg30d": 175.0,
        "heikinAvg30d": 4.244
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 157.776,
        "saikou": 7.83,
        "heikin": 4.71,
        "boshuAvg30d": 175.0,
        "heikinAvg30d": 3.986
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 164.692,
        "saikou": 6.99,
        "heikin": 4.55,
        "boshuAvg30d": 178.5,
        "heikinAvg30d": 3.8
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 109.552,
        "saikou": 5.95,
        "heikin": 3.3,
        "boshuAvg30d": 179.0,
        "heikinAvg30d": 3.561
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 134.9,
        "saikou": 5.4,
        "heikin": 1.68,
        "boshuAvg30d": 180.0,
        "heikinAvg30d": 3.496
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 96.52,
        "saikou": 6.99,
        "heikin": 4.26,
        "boshuAvg30d": 181.0,
        "heikinAvg30d": 3.459
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 87.831,
        "saikou": 6.99,
        "heikin": 4.58,
        "boshuAvg30d": 181.0,
        "heikinAvg30d": 3.141
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 104.56,
        "saikou": 5.94,
        "heikin": 2.53,
        "boshuAvg30d": 181.0,
        "heikinAvg30d": 3.143
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 100.712,
        "saikou": 6.99,
        "heikin": 3.35,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 3.324
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 67.724,
        "saikou": 9.8,
        "heikin": 5.84,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 3.302
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 132.009,
        "saikou": 8,
        "heikin": 3.74,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 3.651
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 173.659,
        "saikou": 5.95,
        "heikin": 4.11,
        "boshuAvg30d": 179.0,
        "heikinAvg30d": 4.261
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 142.659,
        "saikou": 9.07,
        "heikin": 5.86,
        "boshuAvg30d": 179.0,
        "heikinAvg30d": 4.267
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 176.659,
        "saikou": 9.67,
        "heikin": 7.12,
        "boshuAvg30d": 177.0,
        "heikinAvg30d": 4.826
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 173.659,
        "saikou": 10,
        "heikin": 7.21,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 5.324
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 176.659,
        "saikou": 10,
        "heikin": 7.45,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 5.718
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 265.659,
        "saikou": 10,
        "heikin": 9.8,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 6.354
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 236.645,
        "saikou": 10,
        "heikin": 8.56,
        "boshuAvg30d": 173.0,
        "heikinAvg30d": 6.86
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 146.81,
        "saikou": 10,
        "heikin": 7.93,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 6.975
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 141.246,
        "saikou": 10,
        "heikin": 8.03,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 7.087
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 143.125,
        "saikou": 10,
        "heikin": 8.09,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 7.097
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 147.113,
        "saikou": 10,
        "heikin": 8.06,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.979
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 150.958,
        "saikou": 10,
        "heikin": 8.24,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.589
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 171.438,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.356
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 172.912,
        "saikou": 10,
        "heikin": 9.57,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 6.494
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 180.32,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 170.0,
        "heikinAvg30d": 6.314
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 184.935,
        "saikou": 10,
        "heikin": 9.74,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.35
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 141.251,
        "saikou": 9.16,
        "heikin": 7.98,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 5.984
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 176.241,
        "saikou": 10,
        "heikin": 8.57,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 6.17
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 109.121,
        "saikou": 9.09,
        "heikin": 4.93,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 6.179
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 114.017,
        "saikou": 9.01,
        "heikin": 4.99,
        "boshuAvg30d": 171.0,
        "heikinAvg30d": 6.229
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 174.617,
        "saikou": 9.36,
        "heikin": 4.83,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 5.471
      }
    ]
  }
};
