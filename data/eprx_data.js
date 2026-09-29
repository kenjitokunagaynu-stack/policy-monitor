// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/08/30〜2026/09/28）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-09-29",
  "fetchedAt": "2026-09-29",
  "avgWindowLabel": "過去30日平均（2026/08/30〜2026/09/28）",
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
      "boshu": 1163,
      "ouatsu": 1544.379,
      "saikou": 10,
      "heikin": 3.35,
      "boshuAvg30d": 1342.8,
      "heikinAvg30d": 2.752
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1163,
      "ouatsu": 1470.11,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1342.8,
      "heikinAvg30d": 2.688
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1163,
      "ouatsu": 1616.552,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1342.8,
      "heikinAvg30d": 2.794
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1163,
      "ouatsu": 1730.546,
      "saikou": 10,
      "heikin": 2.96,
      "boshuAvg30d": 1342.7,
      "heikinAvg30d": 2.784
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1158,
      "ouatsu": 1697.128,
      "saikou": 10,
      "heikin": 2.54,
      "boshuAvg30d": 1337.7,
      "heikinAvg30d": 2.808
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1157,
      "ouatsu": 1698.34,
      "saikou": 10,
      "heikin": 2.55,
      "boshuAvg30d": 1336.6,
      "heikinAvg30d": 2.843
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1243,
      "ouatsu": 1760.002,
      "saikou": 10,
      "heikin": 2.84,
      "boshuAvg30d": 1345.1,
      "heikinAvg30d": 2.886
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1244,
      "ouatsu": 1748.381,
      "saikou": 10,
      "heikin": 2.89,
      "boshuAvg30d": 1346.1,
      "heikinAvg30d": 2.969
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1247,
      "ouatsu": 1775.114,
      "saikou": 10,
      "heikin": 2.98,
      "boshuAvg30d": 1349.1,
      "heikinAvg30d": 3.02
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1247,
      "ouatsu": 1848.87,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1349.2,
      "heikinAvg30d": 3.036
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1247,
      "ouatsu": 1783.168,
      "saikou": 10,
      "heikin": 3.47,
      "boshuAvg30d": 1349.2,
      "heikinAvg30d": 3.143
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1247,
      "ouatsu": 1856.92,
      "saikou": 10,
      "heikin": 3.42,
      "boshuAvg30d": 1349.2,
      "heikinAvg30d": 3.136
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1313,
      "ouatsu": 1918.224,
      "saikou": 10,
      "heikin": 3.53,
      "boshuAvg30d": 1415.0,
      "heikinAvg30d": 3.337
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1334,
      "ouatsu": 1861.45,
      "saikou": 10,
      "heikin": 3.59,
      "boshuAvg30d": 1436.1,
      "heikinAvg30d": 3.197
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1357,
      "ouatsu": 1746.08,
      "saikou": 10,
      "heikin": 3.34,
      "boshuAvg30d": 1459.1,
      "heikinAvg30d": 3.181
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1375,
      "ouatsu": 1730.635,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1476.9,
      "heikinAvg30d": 3.136
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1376,
      "ouatsu": 1763.66,
      "saikou": 10,
      "heikin": 4.15,
      "boshuAvg30d": 1477.8,
      "heikinAvg30d": 3.358
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1376,
      "ouatsu": 1832.889,
      "saikou": 10,
      "heikin": 4.28,
      "boshuAvg30d": 1477.8,
      "heikinAvg30d": 3.495
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1399,
      "ouatsu": 1734.403,
      "saikou": 10,
      "heikin": 4.54,
      "boshuAvg30d": 1432.0,
      "heikinAvg30d": 3.559
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1403,
      "ouatsu": 1752.842,
      "saikou": 10,
      "heikin": 4.59,
      "boshuAvg30d": 1436.1,
      "heikinAvg30d": 3.539
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1411,
      "ouatsu": 1826.85,
      "saikou": 10,
      "heikin": 4.68,
      "boshuAvg30d": 1444.0,
      "heikinAvg30d": 3.547
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1411,
      "ouatsu": 1740.159,
      "saikou": 10,
      "heikin": 4.38,
      "boshuAvg30d": 1444.0,
      "heikinAvg30d": 3.565
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1408,
      "ouatsu": 1834.825,
      "saikou": 10,
      "heikin": 4.33,
      "boshuAvg30d": 1440.9,
      "heikinAvg30d": 3.489
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1407,
      "ouatsu": 1819.05,
      "saikou": 10,
      "heikin": 4.1,
      "boshuAvg30d": 1439.9,
      "heikinAvg30d": 3.458
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1400,
      "ouatsu": 1997.456,
      "saikou": 10,
      "heikin": 4.14,
      "boshuAvg30d": 1430.3,
      "heikinAvg30d": 3.374
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1400,
      "ouatsu": 2019.466,
      "saikou": 10,
      "heikin": 4.05,
      "boshuAvg30d": 1430.3,
      "heikinAvg30d": 3.354
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1400,
      "ouatsu": 1883.539,
      "saikou": 10,
      "heikin": 4.09,
      "boshuAvg30d": 1427.3,
      "heikinAvg30d": 3.495
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1394,
      "ouatsu": 1870.574,
      "saikou": 10,
      "heikin": 4.38,
      "boshuAvg30d": 1421.6,
      "heikinAvg30d": 3.654
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1389,
      "ouatsu": 1636.926,
      "saikou": 10,
      "heikin": 4.27,
      "boshuAvg30d": 1416.8,
      "heikinAvg30d": 3.717
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1382,
      "ouatsu": 1681.612,
      "saikou": 10,
      "heikin": 4.2,
      "boshuAvg30d": 1410.0,
      "heikinAvg30d": 3.734
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1353,
      "ouatsu": 1725.581,
      "saikou": 10,
      "heikin": 3.96,
      "boshuAvg30d": 1455.7,
      "heikinAvg30d": 3.675
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1353,
      "ouatsu": 1705.548,
      "saikou": 10,
      "heikin": 4.2,
      "boshuAvg30d": 1455.7,
      "heikinAvg30d": 3.837
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1353,
      "ouatsu": 1817.166,
      "saikou": 10,
      "heikin": 5.09,
      "boshuAvg30d": 1455.7,
      "heikinAvg30d": 3.889
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1351,
      "ouatsu": 1813.865,
      "saikou": 10,
      "heikin": 5.05,
      "boshuAvg30d": 1453.5,
      "heikinAvg30d": 4.058
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1347,
      "ouatsu": 1799.443,
      "saikou": 10,
      "heikin": 4.82,
      "boshuAvg30d": 1445.5,
      "heikinAvg30d": 4.176
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1343,
      "ouatsu": 1725.618,
      "saikou": 10,
      "heikin": 4.84,
      "boshuAvg30d": 1441.5,
      "heikinAvg30d": 4.15
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1335,
      "ouatsu": 1804.428,
      "saikou": 10,
      "heikin": 4.91,
      "boshuAvg30d": 1433.4,
      "heikinAvg30d": 4.209
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1335,
      "ouatsu": 1829.145,
      "saikou": 10,
      "heikin": 4.79,
      "boshuAvg30d": 1433.3,
      "heikinAvg30d": 4.145
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1336,
      "ouatsu": 1740.955,
      "saikou": 10,
      "heikin": 4.57,
      "boshuAvg30d": 1433.9,
      "heikinAvg30d": 4.044
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1335,
      "ouatsu": 1930.17,
      "saikou": 10,
      "heikin": 4.44,
      "boshuAvg30d": 1433.0,
      "heikinAvg30d": 3.915
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1330,
      "ouatsu": 2066.356,
      "saikou": 9.5,
      "heikin": 4.37,
      "boshuAvg30d": 1428.0,
      "heikinAvg30d": 3.836
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1326,
      "ouatsu": 1988.549,
      "saikou": 9.5,
      "heikin": 4.23,
      "boshuAvg30d": 1424.2,
      "heikinAvg30d": 3.766
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1233,
      "ouatsu": 1888.191,
      "saikou": 9.4,
      "heikin": 4.25,
      "boshuAvg30d": 1336.8,
      "heikinAvg30d": 3.502
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1236,
      "ouatsu": 1895.281,
      "saikou": 9.49,
      "heikin": 4.13,
      "boshuAvg30d": 1339.8,
      "heikinAvg30d": 3.664
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1237,
      "ouatsu": 1705.53,
      "saikou": 10,
      "heikin": 3.58,
      "boshuAvg30d": 1340.8,
      "heikinAvg30d": 3.459
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1230,
      "ouatsu": 1875.913,
      "saikou": 10,
      "heikin": 3.75,
      "boshuAvg30d": 1333.9,
      "heikinAvg30d": 3.37
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1223,
      "ouatsu": 1849.056,
      "saikou": 9.49,
      "heikin": 3.37,
      "boshuAvg30d": 1326.8,
      "heikinAvg30d": 3.379
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1215,
      "ouatsu": 1782.881,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1318.7,
      "heikinAvg30d": 3.182
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
        "boshu": 64,
        "ouatsu": 197.208,
        "saikou": 1,
        "heikin": 0.93,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.016
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 64,
        "ouatsu": 144.968,
        "saikou": 1.01,
        "heikin": 0.68,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 0.973
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 64,
        "ouatsu": 185.708,
        "saikou": 1.01,
        "heikin": 0.68,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 1.065
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 64,
        "ouatsu": 195.258,
        "saikou": 1,
        "heikin": 0.93,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 0.99
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 64,
        "ouatsu": 188.908,
        "saikou": 1.01,
        "heikin": 0.68,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 1.284
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 64,
        "ouatsu": 190.698,
        "saikou": 1.45,
        "heikin": 1.03,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 1.427
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 63,
        "ouatsu": 154.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.308
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 63,
        "ouatsu": 201.258,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.242
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 63,
        "ouatsu": 150.968,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.532
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 63,
        "ouatsu": 199.268,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.322
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 63,
        "ouatsu": 152.918,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.378
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 63,
        "ouatsu": 154.908,
        "saikou": 3.5,
        "heikin": 1.07,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.528
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 203.208,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 1.978
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 65,
        "ouatsu": 184.408,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 1.555
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 66,
        "ouatsu": 146.958,
        "saikou": 1.01,
        "heikin": 0.91,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 1.376
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 66,
        "ouatsu": 174.458,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 1.449
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 66,
        "ouatsu": 146.958,
        "saikou": 1.01,
        "heikin": 0.85,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 0.984
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 66,
        "ouatsu": 195.258,
        "saikou": 1.01,
        "heikin": 0.97,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 0.983
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 67,
        "ouatsu": 184.968,
        "saikou": 1.01,
        "heikin": 0.8,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 0.938
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 68,
        "ouatsu": 184.968,
        "saikou": 1.01,
        "heikin": 0.81,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 0.968
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 68,
        "ouatsu": 231.828,
        "saikou": 1,
        "heikin": 0.8,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 1.014
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 68,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.81,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 1.023
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 68,
        "ouatsu": 231.828,
        "saikou": 1.01,
        "heikin": 0.8,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 0.926
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 68,
        "ouatsu": 188.956,
        "saikou": 1.01,
        "heikin": 0.81,
        "boshuAvg30d": 67.7,
        "heikinAvg30d": 0.962
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 67,
        "ouatsu": 233.826,
        "saikou": 1.01,
        "heikin": 0.78,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 1.048
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 67,
        "ouatsu": 185.968,
        "saikou": 1.01,
        "heikin": 0.78,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 0.974
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 67,
        "ouatsu": 233.778,
        "saikou": 1.01,
        "heikin": 0.83,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 1.249
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 67,
        "ouatsu": 233.778,
        "saikou": 1.01,
        "heikin": 0.84,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 1.304
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 66,
        "ouatsu": 154.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 1.233
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 66,
        "ouatsu": 197.828,
        "saikou": 9.8,
        "heikin": 1.69,
        "boshuAvg30d": 65.8,
        "heikinAvg30d": 1.414
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 64,
        "ouatsu": 186.958,
        "saikou": 1.01,
        "heikin": 0.86,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 1.173
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 64,
        "ouatsu": 197.828,
        "saikou": 8.15,
        "heikin": 2.28,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 1.722
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 64,
        "ouatsu": 151.958,
        "saikou": 8,
        "heikin": 2.88,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.119
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 64,
        "ouatsu": 151.958,
        "saikou": 6.89,
        "heikin": 2.45,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.051
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 130.86,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.305
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 64,
        "ouatsu": 87.958,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 2.087
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 132.828,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.166
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 155.86,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 2.21
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 110.99,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.807
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 197.828,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.677
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 63,
        "ouatsu": 154.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.844
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 197.828,
        "saikou": 1.01,
        "heikin": 1,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.695
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 164.908,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.403
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 64,
        "ouatsu": 207.828,
        "saikou": 1.01,
        "heikin": 0.97,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 1.702
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 65,
        "ouatsu": 154.908,
        "saikou": 4.77,
        "heikin": 1.13,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 1.339
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 65,
        "ouatsu": 152.958,
        "saikou": 4.02,
        "heikin": 1.19,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 1.392
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 65,
        "ouatsu": 207.488,
        "saikou": 1.01,
        "heikin": 0.96,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 1.225
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 205.538,
        "saikou": 1.01,
        "heikin": 0.96,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 1.345
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 89,
        "ouatsu": 79.181,
        "saikou": 10,
        "heikin": 5.42,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 8.217
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 89,
        "ouatsu": 79.181,
        "saikou": 10,
        "heikin": 5.55,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 8.459
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 89,
        "ouatsu": 100.989,
        "saikou": 10,
        "heikin": 6.39,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 8.769
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 89,
        "ouatsu": 100.989,
        "saikou": 10,
        "heikin": 6.41,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 8.752
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 89,
        "ouatsu": 100.989,
        "saikou": 10,
        "heikin": 6.63,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 8.738
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 89,
        "ouatsu": 100.989,
        "saikou": 10,
        "heikin": 6.63,
        "boshuAvg30d": 166.1,
        "heikinAvg30d": 8.744
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 174,
        "ouatsu": 113.989,
        "saikou": 10,
        "heikin": 6.71,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 8.64
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 174,
        "ouatsu": 115.489,
        "saikou": 10,
        "heikin": 6.74,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 8.624
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 174,
        "ouatsu": 117.488,
        "saikou": 10,
        "heikin": 6.72,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 8.614
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 174,
        "ouatsu": 117.488,
        "saikou": 10,
        "heikin": 6.74,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 8.571
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 174,
        "ouatsu": 117.488,
        "saikou": 10,
        "heikin": 6.72,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 8.536
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 174,
        "ouatsu": 117.488,
        "saikou": 10,
        "heikin": 6.73,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 8.569
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 183,
        "ouatsu": 117.488,
        "saikou": 10,
        "heikin": 6.75,
        "boshuAvg30d": 182.6,
        "heikinAvg30d": 8.692
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 188,
        "ouatsu": 115.988,
        "saikou": 10,
        "heikin": 6.69,
        "boshuAvg30d": 187.7,
        "heikinAvg30d": 8.818
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 194,
        "ouatsu": 117.488,
        "saikou": 10,
        "heikin": 6.59,
        "boshuAvg30d": 193.6,
        "heikinAvg30d": 8.854
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 115.988,
        "saikou": 10,
        "heikin": 6.96,
        "boshuAvg30d": 197.5,
        "heikinAvg30d": 8.787
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 117.488,
        "saikou": 10,
        "heikin": 8.48,
        "boshuAvg30d": 197.5,
        "heikinAvg30d": 8.884
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 115.988,
        "saikou": 10,
        "heikin": 8.32,
        "boshuAvg30d": 197.5,
        "heikinAvg30d": 8.793
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 215,
        "ouatsu": 118.134,
        "saikou": 10,
        "heikin": 8.34,
        "boshuAvg30d": 142.7,
        "heikinAvg30d": 8.44
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 217,
        "ouatsu": 118.134,
        "saikou": 10,
        "heikin": 8.62,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 8.424
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 220,
        "ouatsu": 118.134,
        "saikou": 10,
        "heikin": 8.68,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 8.391
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 221,
        "ouatsu": 116.169,
        "saikou": 10,
        "heikin": 8.87,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 8.412
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 221,
        "ouatsu": 118.134,
        "saikou": 10,
        "heikin": 8.77,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 8.441
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 221,
        "ouatsu": 118.134,
        "saikou": 10,
        "heikin": 8.55,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 8.492
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 222,
        "ouatsu": 115.688,
        "saikou": 10,
        "heikin": 8.67,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 8.587
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 222,
        "ouatsu": 115.688,
        "saikou": 10,
        "heikin": 8.42,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 8.569
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 222,
        "ouatsu": 119.484,
        "saikou": 10,
        "heikin": 8.39,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 8.287
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 219,
        "ouatsu": 119.484,
        "saikou": 10,
        "heikin": 8.42,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 8.309
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 217,
        "ouatsu": 97.484,
        "saikou": 10,
        "heikin": 8.72,
        "boshuAvg30d": 142.0,
        "heikinAvg30d": 8.41
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 212,
        "ouatsu": 85.484,
        "saikou": 10,
        "heikin": 9.25,
        "boshuAvg30d": 137.1,
        "heikinAvg30d": 8.276
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 194,
        "ouatsu": 61.484,
        "saikou": 10,
        "heikin": 9,
        "boshuAvg30d": 193.7,
        "heikinAvg30d": 8.625
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 194,
        "ouatsu": 61.484,
        "saikou": 10,
        "heikin": 9,
        "boshuAvg30d": 193.7,
        "heikinAvg30d": 8.258
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 194,
        "ouatsu": 61.484,
        "saikou": 10,
        "heikin": 9,
        "boshuAvg30d": 193.7,
        "heikinAvg30d": 8.099
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 193,
        "ouatsu": 59.984,
        "saikou": 10,
        "heikin": 8.97,
        "boshuAvg30d": 192.7,
        "heikinAvg30d": 7.772
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 191,
        "ouatsu": 61.484,
        "saikou": 10,
        "heikin": 9,
        "boshuAvg30d": 190.7,
        "heikinAvg30d": 7.877
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 189,
        "ouatsu": 58.019,
        "saikou": 10,
        "heikin": 8.96,
        "boshuAvg30d": 188.7,
        "heikinAvg30d": 7.776
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 188,
        "ouatsu": 59.488,
        "saikou": 10,
        "heikin": 8.97,
        "boshuAvg30d": 187.6,
        "heikinAvg30d": 7.756
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 188,
        "ouatsu": 57.988,
        "saikou": 10,
        "heikin": 8.94,
        "boshuAvg30d": 187.6,
        "heikinAvg30d": 7.82
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 188,
        "ouatsu": 59.488,
        "saikou": 10,
        "heikin": 8.97,
        "boshuAvg30d": 187.6,
        "heikinAvg30d": 7.995
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 187,
        "ouatsu": 59.488,
        "saikou": 10,
        "heikin": 8.96,
        "boshuAvg30d": 186.7,
        "heikinAvg30d": 8.278
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 187,
        "ouatsu": 83.488,
        "saikou": 9.5,
        "heikin": 7.34,
        "boshuAvg30d": 186.6,
        "heikinAvg30d": 8.223
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 187,
        "ouatsu": 83.488,
        "saikou": 9.5,
        "heikin": 7.43,
        "boshuAvg30d": 186.7,
        "heikinAvg30d": 8.239
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 97,
        "ouatsu": 83.488,
        "saikou": 9.4,
        "heikin": 7.19,
        "boshuAvg30d": 102.4,
        "heikinAvg30d": 8.322
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 97,
        "ouatsu": 83.488,
        "saikou": 9.49,
        "heikin": 7.4,
        "boshuAvg30d": 102.4,
        "heikinAvg30d": 8.482
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 97,
        "ouatsu": 83.488,
        "saikou": 10,
        "heikin": 7.52,
        "boshuAvg30d": 102.4,
        "heikinAvg30d": 8.391
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 96,
        "ouatsu": 83.488,
        "saikou": 10,
        "heikin": 7.58,
        "boshuAvg30d": 101.4,
        "heikinAvg30d": 8.511
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 95,
        "ouatsu": 81.588,
        "saikou": 9.49,
        "heikin": 7.43,
        "boshuAvg30d": 100.4,
        "heikinAvg30d": 8.564
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 94,
        "ouatsu": 80.088,
        "saikou": 10,
        "heikin": 7.73,
        "boshuAvg30d": 99.4,
        "heikinAvg30d": 8.588
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 426,
        "ouatsu": 382.241,
        "saikou": 9.8,
        "heikin": 5.88,
        "boshuAvg30d": 490.1,
        "heikinAvg30d": 3.382
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 426,
        "ouatsu": 390.839,
        "saikou": 9.8,
        "heikin": 4.95,
        "boshuAvg30d": 490.1,
        "heikinAvg30d": 3.279
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 426,
        "ouatsu": 396.683,
        "saikou": 9.8,
        "heikin": 4.9,
        "boshuAvg30d": 490.1,
        "heikinAvg30d": 3.195
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 426,
        "ouatsu": 440.869,
        "saikou": 9.8,
        "heikin": 5.18,
        "boshuAvg30d": 490.1,
        "heikinAvg30d": 3.205
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 424,
        "ouatsu": 461.501,
        "saikou": 9.8,
        "heikin": 4.18,
        "boshuAvg30d": 488.1,
        "heikinAvg30d": 3.192
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 424,
        "ouatsu": 463.497,
        "saikou": 9.8,
        "heikin": 4.31,
        "boshuAvg30d": 488.1,
        "heikinAvg30d": 3.184
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 423,
        "ouatsu": 493.93,
        "saikou": 9.8,
        "heikin": 4.55,
        "boshuAvg30d": 487.0,
        "heikinAvg30d": 3.106
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 424,
        "ouatsu": 492.39,
        "saikou": 9.8,
        "heikin": 4.48,
        "boshuAvg30d": 488.0,
        "heikinAvg30d": 3.283
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 425,
        "ouatsu": 493.91,
        "saikou": 9.8,
        "heikin": 4.72,
        "boshuAvg30d": 489.0,
        "heikinAvg30d": 3.231
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 425,
        "ouatsu": 497.68,
        "saikou": 9.8,
        "heikin": 4.84,
        "boshuAvg30d": 489.1,
        "heikinAvg30d": 3.264
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 425,
        "ouatsu": 462.961,
        "saikou": 9.8,
        "heikin": 5.13,
        "boshuAvg30d": 489.1,
        "heikinAvg30d": 3.273
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 425,
        "ouatsu": 461.061,
        "saikou": 9.8,
        "heikin": 5.36,
        "boshuAvg30d": 489.1,
        "heikinAvg30d": 3.315
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 446,
        "ouatsu": 467.065,
        "saikou": 9.1,
        "heikin": 5.45,
        "boshuAvg30d": 510.1,
        "heikinAvg30d": 3.69
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 454,
        "ouatsu": 467.065,
        "saikou": 9.1,
        "heikin": 5.31,
        "boshuAvg30d": 518.1,
        "heikinAvg30d": 3.719
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 459,
        "ouatsu": 424.55,
        "saikou": 9.1,
        "heikin": 5.79,
        "boshuAvg30d": 523.2,
        "heikinAvg30d": 3.818
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 464,
        "ouatsu": 451.352,
        "saikou": 9.1,
        "heikin": 5.79,
        "boshuAvg30d": 528.1,
        "heikinAvg30d": 3.816
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 464,
        "ouatsu": 541.381,
        "saikou": 10,
        "heikin": 5.76,
        "boshuAvg30d": 528.1,
        "heikinAvg30d": 4.203
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 464,
        "ouatsu": 535.429,
        "saikou": 10,
        "heikin": 5.82,
        "boshuAvg30d": 528.1,
        "heikinAvg30d": 4.319
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 455,
        "ouatsu": 478.123,
        "saikou": 10,
        "heikin": 6.42,
        "boshuAvg30d": 522.1,
        "heikinAvg30d": 4.265
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 455,
        "ouatsu": 496.562,
        "saikou": 10,
        "heikin": 6.28,
        "boshuAvg30d": 522.1,
        "heikinAvg30d": 4.256
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 455,
        "ouatsu": 528.184,
        "saikou": 10,
        "heikin": 6.71,
        "boshuAvg30d": 522.1,
        "heikinAvg30d": 4.062
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 454,
        "ouatsu": 489.328,
        "saikou": 10,
        "heikin": 5.94,
        "boshuAvg30d": 521.1,
        "heikinAvg30d": 4.055
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 451,
        "ouatsu": 521.131,
        "saikou": 10,
        "heikin": 5.81,
        "boshuAvg30d": 518.1,
        "heikinAvg30d": 4.133
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 451,
        "ouatsu": 523.116,
        "saikou": 10,
        "heikin": 5.6,
        "boshuAvg30d": 518.1,
        "heikinAvg30d": 4.129
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 450,
        "ouatsu": 585.456,
        "saikou": 10,
        "heikin": 5.41,
        "boshuAvg30d": 517.1,
        "heikinAvg30d": 3.958
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 450,
        "ouatsu": 587.42,
        "saikou": 10,
        "heikin": 5.32,
        "boshuAvg30d": 517.1,
        "heikinAvg30d": 4.006
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 450,
        "ouatsu": 552.159,
        "saikou": 10,
        "heikin": 5.38,
        "boshuAvg30d": 514.1,
        "heikinAvg30d": 4.042
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 449,
        "ouatsu": 552.159,
        "saikou": 10,
        "heikin": 5.49,
        "boshuAvg30d": 513.4,
        "heikinAvg30d": 4.253
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 448,
        "ouatsu": 513.325,
        "saikou": 10,
        "heikin": 5.92,
        "boshuAvg30d": 512.5,
        "heikinAvg30d": 4.339
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 448,
        "ouatsu": 528.752,
        "saikou": 10,
        "heikin": 5.83,
        "boshuAvg30d": 512.5,
        "heikinAvg30d": 4.139
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 447,
        "ouatsu": 528.612,
        "saikou": 10,
        "heikin": 6.06,
        "boshuAvg30d": 511.5,
        "heikinAvg30d": 4.116
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 447,
        "ouatsu": 554.201,
        "saikou": 10,
        "heikin": 5.24,
        "boshuAvg30d": 511.5,
        "heikinAvg30d": 4.062
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 447,
        "ouatsu": 517.326,
        "saikou": 10,
        "heikin": 5.89,
        "boshuAvg30d": 511.5,
        "heikinAvg30d": 4.222
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 447,
        "ouatsu": 517.326,
        "saikou": 10,
        "heikin": 5.99,
        "boshuAvg30d": 511.4,
        "heikinAvg30d": 4.416
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 447,
        "ouatsu": 517.326,
        "saikou": 10,
        "heikin": 5.61,
        "boshuAvg30d": 507.3,
        "heikinAvg30d": 4.501
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 447,
        "ouatsu": 513.576,
        "saikou": 10,
        "heikin": 5.61,
        "boshuAvg30d": 507.3,
        "heikinAvg30d": 4.424
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 449,
        "ouatsu": 558.255,
        "saikou": 10,
        "heikin": 5.56,
        "boshuAvg30d": 509.3,
        "heikinAvg30d": 4.523
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 449,
        "ouatsu": 539.819,
        "saikou": 10,
        "heikin": 5.43,
        "boshuAvg30d": 509.3,
        "heikinAvg30d": 4.453
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 450,
        "ouatsu": 556.359,
        "saikou": 10,
        "heikin": 5.52,
        "boshuAvg30d": 509.8,
        "heikinAvg30d": 4.494
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 450,
        "ouatsu": 597.332,
        "saikou": 9.1,
        "heikin": 5.19,
        "boshuAvg30d": 509.8,
        "heikinAvg30d": 4.402
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 448,
        "ouatsu": 672.821,
        "saikou": 9.1,
        "heikin": 5.36,
        "boshuAvg30d": 507.9,
        "heikinAvg30d": 4.245
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 448,
        "ouatsu": 636.059,
        "saikou": 9.1,
        "heikin": 5.32,
        "boshuAvg30d": 507.9,
        "heikinAvg30d": 4.284
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 447,
        "ouatsu": 588.335,
        "saikou": 9.1,
        "heikin": 5.35,
        "boshuAvg30d": 507.0,
        "heikinAvg30d": 4.072
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 447,
        "ouatsu": 580.754,
        "saikou": 9.1,
        "heikin": 5.34,
        "boshuAvg30d": 507.0,
        "heikinAvg30d": 4.444
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 447,
        "ouatsu": 421.551,
        "saikou": 9.1,
        "heikin": 3.59,
        "boshuAvg30d": 507.0,
        "heikinAvg30d": 4.027
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 445,
        "ouatsu": 554.18,
        "saikou": 9.1,
        "heikin": 4.63,
        "boshuAvg30d": 505.0,
        "heikinAvg30d": 4.117
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 443,
        "ouatsu": 556.801,
        "saikou": 9.1,
        "heikin": 4.68,
        "boshuAvg30d": 502.9,
        "heikinAvg30d": 4.264
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 442,
        "ouatsu": 554.059,
        "saikou": 9.1,
        "heikin": 4.5,
        "boshuAvg30d": 501.8,
        "heikinAvg30d": 4.145
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 55,
        "ouatsu": 195.768,
        "saikou": 2,
        "heikin": 1.85,
        "boshuAvg30d": 93.2,
        "heikinAvg30d": 2.154
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 55,
        "ouatsu": 197.766,
        "saikou": 1.93,
        "heikin": 1.42,
        "boshuAvg30d": 93.2,
        "heikinAvg30d": 2.016
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 55,
        "ouatsu": 215.184,
        "saikou": 1.77,
        "heikin": 1.57,
        "boshuAvg30d": 93.2,
        "heikinAvg30d": 2.028
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 55,
        "ouatsu": 213.294,
        "saikou": 1.73,
        "heikin": 1.51,
        "boshuAvg30d": 93.2,
        "heikinAvg30d": 2.145
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 54,
        "ouatsu": 191.439,
        "saikou": 1.5,
        "heikin": 0.93,
        "boshuAvg30d": 92.2,
        "heikinAvg30d": 2.185
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 54,
        "ouatsu": 199.27,
        "saikou": 1.5,
        "heikin": 0.93,
        "boshuAvg30d": 92.2,
        "heikinAvg30d": 2.251
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 54,
        "ouatsu": 222.926,
        "saikou": 1.6,
        "heikin": 1,
        "boshuAvg30d": 92.2,
        "heikinAvg30d": 2.141
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 54,
        "ouatsu": 215.366,
        "saikou": 1.9,
        "heikin": 1.21,
        "boshuAvg30d": 92.2,
        "heikinAvg30d": 2.327
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 54,
        "ouatsu": 238.499,
        "saikou": 1.57,
        "heikin": 1.39,
        "boshuAvg30d": 92.2,
        "heikinAvg30d": 2.424
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 54,
        "ouatsu": 260.185,
        "saikou": 2.39,
        "heikin": 1.6,
        "boshuAvg30d": 92.2,
        "heikinAvg30d": 2.315
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 54,
        "ouatsu": 264.173,
        "saikou": 2.39,
        "heikin": 1.73,
        "boshuAvg30d": 92.2,
        "heikinAvg30d": 2.425
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 54,
        "ouatsu": 264.173,
        "saikou": 2.39,
        "heikin": 1.72,
        "boshuAvg30d": 92.2,
        "heikinAvg30d": 2.376
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 64,
        "ouatsu": 264.173,
        "saikou": 2.39,
        "heikin": 1.84,
        "boshuAvg30d": 102.1,
        "heikinAvg30d": 2.426
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 67,
        "ouatsu": 262.183,
        "saikou": 2.4,
        "heikin": 2.02,
        "boshuAvg30d": 105.1,
        "heikinAvg30d": 2.347
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 70,
        "ouatsu": 324.107,
        "saikou": 2.39,
        "heikin": 1.04,
        "boshuAvg30d": 108.1,
        "heikinAvg30d": 2.399
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 72,
        "ouatsu": 262.614,
        "saikou": 2.74,
        "heikin": 1.33,
        "boshuAvg30d": 110.0,
        "heikinAvg30d": 2.38
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 72,
        "ouatsu": 244.524,
        "saikou": 2.89,
        "heikin": 1.87,
        "boshuAvg30d": 110.0,
        "heikinAvg30d": 2.68
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 72,
        "ouatsu": 270.993,
        "saikou": 2.9,
        "heikin": 1.96,
        "boshuAvg30d": 110.0,
        "heikinAvg30d": 2.755
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 76,
        "ouatsu": 302.99,
        "saikou": 4.15,
        "heikin": 2.52,
        "boshuAvg30d": 114.0,
        "heikinAvg30d": 3.186
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 76,
        "ouatsu": 302.99,
        "saikou": 3.27,
        "heikin": 2.44,
        "boshuAvg30d": 114.0,
        "heikinAvg30d": 3.172
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 77,
        "ouatsu": 300.014,
        "saikou": 4.42,
        "heikin": 2.69,
        "boshuAvg30d": 115.0,
        "heikinAvg30d": 3.333
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 76,
        "ouatsu": 299.014,
        "saikou": 4.99,
        "heikin": 2.52,
        "boshuAvg30d": 114.0,
        "heikinAvg30d": 3.396
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 75,
        "ouatsu": 302.99,
        "saikou": 3.88,
        "heikin": 2.35,
        "boshuAvg30d": 113.0,
        "heikinAvg30d": 3.179
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 74,
        "ouatsu": 301.1,
        "saikou": 3.88,
        "heikin": 2.28,
        "boshuAvg30d": 112.0,
        "heikinAvg30d": 2.979
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 71,
        "ouatsu": 300.991,
        "saikou": 3.84,
        "heikin": 2.14,
        "boshuAvg30d": 108.9,
        "heikinAvg30d": 3.026
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 71,
        "ouatsu": 306.937,
        "saikou": 3.8,
        "heikin": 2.02,
        "boshuAvg30d": 108.9,
        "heikinAvg30d": 2.991
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 71,
        "ouatsu": 308.936,
        "saikou": 3.49,
        "heikin": 1.93,
        "boshuAvg30d": 108.9,
        "heikinAvg30d": 2.934
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 71,
        "ouatsu": 297.936,
        "saikou": 3.7,
        "heikin": 2.47,
        "boshuAvg30d": 108.9,
        "heikinAvg30d": 2.969
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 70,
        "ouatsu": 222.488,
        "saikou": 3.49,
        "heikin": 2.24,
        "boshuAvg30d": 108.0,
        "heikinAvg30d": 3.115
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 70,
        "ouatsu": 222.488,
        "saikou": 3.5,
        "heikin": 2.4,
        "boshuAvg30d": 108.0,
        "heikinAvg30d": 3.102
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 69,
        "ouatsu": 278.503,
        "saikou": 4,
        "heikin": 2.27,
        "boshuAvg30d": 107.1,
        "heikinAvg30d": 2.923
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 69,
        "ouatsu": 222.011,
        "saikou": 3.84,
        "heikin": 2.26,
        "boshuAvg30d": 107.1,
        "heikinAvg30d": 2.909
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 69,
        "ouatsu": 365.872,
        "saikou": 2.79,
        "heikin": 2.07,
        "boshuAvg30d": 107.1,
        "heikinAvg30d": 2.945
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 69,
        "ouatsu": 364.872,
        "saikou": 2.79,
        "heikin": 1.98,
        "boshuAvg30d": 107.1,
        "heikinAvg30d": 3.213
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 69,
        "ouatsu": 366.843,
        "saikou": 3.79,
        "heikin": 1.94,
        "boshuAvg30d": 107.1,
        "heikinAvg30d": 3.104
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 69,
        "ouatsu": 354.096,
        "saikou": 3.99,
        "heikin": 2.18,
        "boshuAvg30d": 107.1,
        "heikinAvg30d": 2.876
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 67,
        "ouatsu": 354.096,
        "saikou": 2.78,
        "heikin": 2.05,
        "boshuAvg30d": 105.1,
        "heikinAvg30d": 2.77
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 67,
        "ouatsu": 371.98,
        "saikou": 2.8,
        "heikin": 2.16,
        "boshuAvg30d": 105.1,
        "heikinAvg30d": 2.595
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 67,
        "ouatsu": 374.069,
        "saikou": 3.99,
        "heikin": 2.1,
        "boshuAvg30d": 105.1,
        "heikinAvg30d": 2.311
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 67,
        "ouatsu": 384.069,
        "saikou": 2.79,
        "heikin": 1.83,
        "boshuAvg30d": 105.1,
        "heikinAvg30d": 2.391
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 67,
        "ouatsu": 381.993,
        "saikou": 2.69,
        "heikin": 2.14,
        "boshuAvg30d": 105.1,
        "heikinAvg30d": 2.487
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 352.003,
        "saikou": 2.8,
        "heikin": 2.26,
        "boshuAvg30d": 105.1,
        "heikinAvg30d": 2.417
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 320.199,
        "saikou": 2.45,
        "heikin": 1.63,
        "boshuAvg30d": 105.1,
        "heikinAvg30d": 2.269
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 68,
        "ouatsu": 286.382,
        "saikou": 2.8,
        "heikin": 2.25,
        "boshuAvg30d": 106.1,
        "heikinAvg30d": 2.423
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 68,
        "ouatsu": 298.017,
        "saikou": 2.75,
        "heikin": 2.17,
        "boshuAvg30d": 106.1,
        "heikinAvg30d": 2.512
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 67,
        "ouatsu": 316.017,
        "saikou": 2.68,
        "heikin": 2.24,
        "boshuAvg30d": 105.1,
        "heikinAvg30d": 2.536
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 280.103,
        "saikou": 2.48,
        "heikin": 1.77,
        "boshuAvg30d": 104.1,
        "heikinAvg30d": 2.547
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 63,
        "ouatsu": 200.21,
        "saikou": 3.79,
        "heikin": 2.62,
        "boshuAvg30d": 101.2,
        "heikinAvg30d": 2.516
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 53,
        "ouatsu": 38.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.005
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.047
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 53,
        "ouatsu": 3.928,
        "saikou": 1.7,
        "heikin": 1.7,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 0.996
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 53,
        "ouatsu": 38.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.189
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 53,
        "ouatsu": 38.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.4
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 53,
        "ouatsu": 38.928,
        "saikou": 1.5,
        "heikin": 0.5,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.006
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.173
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.357
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.279
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 53,
        "ouatsu": 63.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.404
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2,
        "heikin": 0.6,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.511
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 53,
        "ouatsu": 28.928,
        "saikou": 2,
        "heikin": 0.6,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 1.419
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 57,
        "ouatsu": 28.928,
        "saikou": 2,
        "heikin": 1.93,
        "boshuAvg30d": 56.9,
        "heikinAvg30d": 1.674
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 57,
        "ouatsu": 28.928,
        "saikou": 2.4,
        "heikin": 1.33,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.469
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 58,
        "ouatsu": 28.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 58.0,
        "heikinAvg30d": 1.573
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 59,
        "ouatsu": 28.928,
        "saikou": 2.5,
        "heikin": 0.72,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.635
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 60,
        "ouatsu": 28.928,
        "saikou": 3.36,
        "heikin": 3.36,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 1.776
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 60,
        "ouatsu": 28.928,
        "saikou": 4.43,
        "heikin": 4.3,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 2.397
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 61,
        "ouatsu": 28.928,
        "saikou": 10,
        "heikin": 9.07,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.735
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 61,
        "ouatsu": 28.928,
        "saikou": 10,
        "heikin": 9.44,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.719
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 62,
        "ouatsu": 28.928,
        "saikou": 10,
        "heikin": 9.51,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.45
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 62,
        "ouatsu": 28.928,
        "saikou": 10,
        "heikin": 9.53,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.697
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 62,
        "ouatsu": 28.928,
        "saikou": 10,
        "heikin": 9.56,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.616
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 62,
        "ouatsu": 28.928,
        "saikou": 9.65,
        "heikin": 9.24,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.395
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 62,
        "ouatsu": 28.928,
        "saikou": 4.02,
        "heikin": 3.95,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.493
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 62,
        "ouatsu": 28.928,
        "saikou": 3.85,
        "heikin": 3.79,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.611
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 62,
        "ouatsu": 28.928,
        "saikou": 4.43,
        "heikin": 4.43,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.387
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 62,
        "ouatsu": 28.928,
        "saikou": 9.65,
        "heikin": 9.15,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.49
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.53,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 2.596
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 3.429
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 63,
        "ouatsu": 28.928,
        "saikou": 5.5,
        "heikin": 4.51,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.367
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 63,
        "ouatsu": 28.928,
        "saikou": 7.4,
        "heikin": 7.15,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.587
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 63,
        "ouatsu": 28.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.16
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 63,
        "ouatsu": 10.856,
        "saikou": 10,
        "heikin": 8.42,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.859
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.6,
        "heikin": 3.45,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.397
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.41,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 4.127
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.34,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 3.217
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.23,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.88
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.34,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.936
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.7,
        "heikin": 2.22,
        "boshuAvg30d": 63.0,
        "heikinAvg30d": 2.415
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.25,
        "heikin": 2.22,
        "boshuAvg30d": 61.0,
        "heikinAvg30d": 2.597
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.45,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.762
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.27,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 2.03
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 59,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.27,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.983
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 59,
        "ouatsu": 8.222,
        "saikou": 2.5,
        "heikin": 2.47,
        "boshuAvg30d": 59.0,
        "heikinAvg30d": 1.813
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 59,
        "ouatsu": 10.472,
        "saikou": 2.3,
        "heikin": 2.15,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 1.604
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 58,
        "ouatsu": 28.928,
        "saikou": 2.3,
        "heikin": 0.53,
        "boshuAvg30d": 57.9,
        "heikinAvg30d": 1.581
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 57,
        "ouatsu": 63.928,
        "saikou": 2.5,
        "heikin": 0.51,
        "boshuAvg30d": 57.0,
        "heikinAvg30d": 1.224
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 132,
        "ouatsu": 95.367,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 2.051
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 132,
        "ouatsu": 95.864,
        "saikou": 1.5,
        "heikin": 1.47,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 1.827
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 132,
        "ouatsu": 141.792,
        "saikou": 1.5,
        "heikin": 0.61,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 2.003
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 132,
        "ouatsu": 163.202,
        "saikou": 1.5,
        "heikin": 0.5,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 1.933
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 131,
        "ouatsu": 137.357,
        "saikou": 1.5,
        "heikin": 0.61,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 1.996
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 130,
        "ouatsu": 126.952,
        "saikou": 1.5,
        "heikin": 0.65,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 2.02
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 131,
        "ouatsu": 99.256,
        "saikou": 1.6,
        "heikin": 1.52,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 2.086
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 131,
        "ouatsu": 99.256,
        "saikou": 2,
        "heikin": 1.96,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 2.104
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 132,
        "ouatsu": 99.256,
        "saikou": 1.6,
        "heikin": 1.58,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 2.082
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 132,
        "ouatsu": 99.256,
        "saikou": 2.4,
        "heikin": 2.26,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 2.12
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 132,
        "ouatsu": 171.089,
        "saikou": 2.4,
        "heikin": 1.17,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 2.092
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 132,
        "ouatsu": 195.027,
        "saikou": 2.36,
        "heikin": 0.58,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 1.955
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 145,
        "ouatsu": 195.027,
        "saikou": 2.4,
        "heikin": 1.18,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 2.314
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 148,
        "ouatsu": 171.089,
        "saikou": 2.44,
        "heikin": 1.39,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 2.38
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 152,
        "ouatsu": 97.258,
        "saikou": 2.32,
        "heikin": 2.02,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 2.453
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 156,
        "ouatsu": 97.356,
        "saikou": 2.44,
        "heikin": 2.39,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 2.515
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 156,
        "ouatsu": 97.356,
        "saikou": 2.97,
        "heikin": 2.52,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 2.832
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 156,
        "ouatsu": 97.356,
        "saikou": 2.9,
        "heikin": 2.55,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 2.909
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 155,
        "ouatsu": 91.233,
        "saikou": 4,
        "heikin": 3.15,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 3.097
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 155,
        "ouatsu": 91.233,
        "saikou": 3,
        "heikin": 2.82,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 3.146
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 155,
        "ouatsu": 93.218,
        "saikou": 4.5,
        "heikin": 2.89,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 3.482
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 155,
        "ouatsu": 93.218,
        "saikou": 4.5,
        "heikin": 2.95,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 3.429
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 155,
        "ouatsu": 93.218,
        "saikou": 3.98,
        "heikin": 2.92,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 3.242
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 155,
        "ouatsu": 93.218,
        "saikou": 3.95,
        "heikin": 3.07,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 3.011
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 155,
        "ouatsu": 137.038,
        "saikou": 4.94,
        "heikin": 2.13,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 3.129
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 155,
        "ouatsu": 163.134,
        "saikou": 3.5,
        "heikin": 1.84,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 2.852
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 155,
        "ouatsu": 101.765,
        "saikou": 3,
        "heikin": 2.83,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 3.131
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 154,
        "ouatsu": 101.765,
        "saikou": 3.41,
        "heikin": 2.84,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 3.068
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 155,
        "ouatsu": 104.869,
        "saikou": 3.74,
        "heikin": 2.75,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 3.102
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 155,
        "ouatsu": 103.208,
        "saikou": 3.5,
        "heikin": 2.91,
        "boshuAvg30d": 155.3,
        "heikinAvg30d": 2.994
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 154,
        "ouatsu": 105.108,
        "saikou": 4,
        "heikin": 3.09,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 2.804
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 154,
        "ouatsu": 105.108,
        "saikou": 4,
        "heikin": 2.98,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 2.919
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 154,
        "ouatsu": 105.108,
        "saikou": 2.83,
        "heikin": 2.7,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 2.937
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 154,
        "ouatsu": 103.238,
        "saikou": 2.97,
        "heikin": 2.46,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 3.136
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 154,
        "ouatsu": 103.238,
        "saikou": 4,
        "heikin": 2.66,
        "boshuAvg30d": 154.3,
        "heikinAvg30d": 3.164
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 153,
        "ouatsu": 103.238,
        "saikou": 4,
        "heikin": 2.58,
        "boshuAvg30d": 153.3,
        "heikinAvg30d": 3.051
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 149,
        "ouatsu": 101.278,
        "saikou": 4,
        "heikin": 2.58,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.893
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 149,
        "ouatsu": 101.163,
        "saikou": 4,
        "heikin": 2.55,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.846
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 149,
        "ouatsu": 50.388,
        "saikou": 3.92,
        "heikin": 2.73,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.971
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 149,
        "ouatsu": 97.813,
        "saikou": 2.8,
        "heikin": 2.47,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 2.718
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 148,
        "ouatsu": 97.406,
        "saikou": 2.5,
        "heikin": 2.41,
        "boshuAvg30d": 148.3,
        "heikinAvg30d": 2.67
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 97.406,
        "saikou": 2.8,
        "heikin": 2.44,
        "boshuAvg30d": 147.4,
        "heikinAvg30d": 2.695
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 147,
        "ouatsu": 97.406,
        "saikou": 2.45,
        "heikin": 2.38,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.734
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 147,
        "ouatsu": 95.963,
        "saikou": 2.8,
        "heikin": 2.47,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.631
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 147,
        "ouatsu": 97.406,
        "saikou": 2.78,
        "heikin": 2.44,
        "boshuAvg30d": 147.3,
        "heikinAvg30d": 2.683
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 97.406,
        "saikou": 2.44,
        "heikin": 2.38,
        "boshuAvg30d": 145.4,
        "heikinAvg30d": 2.602
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 97.406,
        "saikou": 2.48,
        "heikin": 2.4,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 2.411
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 142,
        "ouatsu": 82.316,
        "saikou": 2.8,
        "heikin": 2.42,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.384
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 140,
        "ouatsu": 197.694,
        "saikou": 1.58,
        "heikin": 0.81,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 1.956
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 140,
        "ouatsu": 195.7,
        "saikou": 1.63,
        "heikin": 1.41,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.16
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 140,
        "ouatsu": 197.694,
        "saikou": 1.84,
        "heikin": 1.57,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.28
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 140,
        "ouatsu": 201.484,
        "saikou": 1.63,
        "heikin": 1.39,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.214
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 140,
        "ouatsu": 201.484,
        "saikou": 1.65,
        "heikin": 1.41,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.153
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 140,
        "ouatsu": 201.484,
        "saikou": 1.58,
        "heikin": 1.35,
        "boshuAvg30d": 140.1,
        "heikinAvg30d": 2.141
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 140,
        "ouatsu": 218.343,
        "saikou": 1.56,
        "heikin": 1.33,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.262
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 140,
        "ouatsu": 218.343,
        "saikou": 1.99,
        "heikin": 1.68,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.425
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 140,
        "ouatsu": 218.343,
        "saikou": 1.66,
        "heikin": 1.43,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.327
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 140,
        "ouatsu": 218.343,
        "saikou": 2,
        "heikin": 1.34,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.577
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 140,
        "ouatsu": 192.889,
        "saikou": 2,
        "heikin": 1.78,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.903
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 140,
        "ouatsu": 192.889,
        "saikou": 2,
        "heikin": 1.81,
        "boshuAvg30d": 140.0,
        "heikinAvg30d": 2.889
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 141,
        "ouatsu": 192.889,
        "saikou": 3.57,
        "heikin": 3.3,
        "boshuAvg30d": 141.1,
        "heikinAvg30d": 3.164
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 142,
        "ouatsu": 218.343,
        "saikou": 2.88,
        "heikin": 2.37,
        "boshuAvg30d": 142.1,
        "heikinAvg30d": 2.496
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 143,
        "ouatsu": 216.345,
        "saikou": 1.58,
        "heikin": 1.32,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 2.304
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 144,
        "ouatsu": 216.345,
        "saikou": 2.21,
        "heikin": 1.88,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.106
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 144,
        "ouatsu": 200.431,
        "saikou": 2.52,
        "heikin": 1.37,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.073
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 144,
        "ouatsu": 200.431,
        "saikou": 2.22,
        "heikin": 1.58,
        "boshuAvg30d": 144.0,
        "heikinAvg30d": 2.73
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 148,
        "ouatsu": 190.888,
        "saikou": 4,
        "heikin": 1.76,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 2.674
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 149,
        "ouatsu": 190.888,
        "saikou": 2.89,
        "heikin": 1.61,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 2.578
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 150,
        "ouatsu": 190.888,
        "saikou": 1.58,
        "heikin": 1.49,
        "boshuAvg30d": 150.1,
        "heikinAvg30d": 2.699
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 151,
        "ouatsu": 190.888,
        "saikou": 1.58,
        "heikin": 1.49,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.693
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 151,
        "ouatsu": 190.888,
        "saikou": 1.58,
        "heikin": 1.48,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.623
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 151,
        "ouatsu": 190.888,
        "saikou": 1.58,
        "heikin": 1.45,
        "boshuAvg30d": 151.0,
        "heikinAvg30d": 2.587
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 190.888,
        "saikou": 1.58,
        "heikin": 1.49,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 2.201
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 194.846,
        "saikou": 1.58,
        "heikin": 1.45,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 2.075
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 194.846,
        "saikou": 1.58,
        "heikin": 1.5,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 2.475
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 190.891,
        "saikou": 2.51,
        "heikin": 2.35,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.49
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 190.891,
        "saikou": 1.58,
        "heikin": 1.51,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.678
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 190.891,
        "saikou": 1.84,
        "heikin": 1.77,
        "boshuAvg30d": 148.1,
        "heikinAvg30d": 2.806
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 190.891,
        "saikou": 2.73,
        "heikin": 1.83,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.214
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 190.891,
        "saikou": 4,
        "heikin": 2.21,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.718
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 190.418,
        "saikou": 6.88,
        "heikin": 4.84,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.512
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 194.655,
        "saikou": 7.2,
        "heikin": 5.71,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.749
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 198.788,
        "saikou": 8.66,
        "heikin": 6.85,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.111
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 147,
        "ouatsu": 194.655,
        "saikou": 7.2,
        "heikin": 5.35,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.472
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 147,
        "ouatsu": 188.901,
        "saikou": 8.87,
        "heikin": 7.16,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.588
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 147,
        "ouatsu": 188.901,
        "saikou": 8.17,
        "heikin": 6.58,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.7
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 147,
        "ouatsu": 187.101,
        "saikou": 6.12,
        "heikin": 5.26,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.457
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 147,
        "ouatsu": 189.091,
        "saikou": 7.87,
        "heikin": 6.65,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 4.2
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 190.891,
        "saikou": 6.09,
        "heikin": 5.49,
        "boshuAvg30d": 147.1,
        "heikinAvg30d": 3.922
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 146,
        "ouatsu": 190.891,
        "saikou": 5.69,
        "heikin": 4.84,
        "boshuAvg30d": 146.1,
        "heikinAvg30d": 3.539
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 144,
        "ouatsu": 190.891,
        "saikou": 5.68,
        "heikin": 4.85,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 3.449
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 144,
        "ouatsu": 190.891,
        "saikou": 5.01,
        "heikin": 4.27,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 3.438
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 144,
        "ouatsu": 190.891,
        "saikou": 4.13,
        "heikin": 3.78,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 3.252
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 144,
        "ouatsu": 216.345,
        "saikou": 3.72,
        "heikin": 2.75,
        "boshuAvg30d": 144.1,
        "heikinAvg30d": 2.969
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 143,
        "ouatsu": 216.345,
        "saikou": 2.3,
        "heikin": 1.73,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 2.913
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 143,
        "ouatsu": 216.345,
        "saikou": 2.9,
        "heikin": 1.54,
        "boshuAvg30d": 143.1,
        "heikinAvg30d": 1.972
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.68,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.865
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.881
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.7,
        "heikin": 0.69,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.895
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 41,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.41,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.867
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.5,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.854
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 39.9,
        "heikinAvg30d": 0.859
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 1.002
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 172.93,
        "saikou": 1.7,
        "heikin": 0.64,
        "boshuAvg30d": 40.9,
        "heikinAvg30d": 0.936
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.7,
        "heikin": 0.62,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.982
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.018
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 1.002
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 184.473,
        "saikou": 1.6,
        "heikin": 0.67,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.949
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 1.017
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 210.473,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 43.9,
        "heikinAvg30d": 0.997
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.51,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 1.038
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.5,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 0.904
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 0.887
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 0.911
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 46.9,
        "heikinAvg30d": 0.963
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 47,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 46.9,
        "heikinAvg30d": 0.948
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 0.956
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 0.952
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 48,
        "ouatsu": 167.473,
        "saikou": 1.6,
        "heikin": 0.76,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 0.945
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.73,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 0.943
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.132
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.085
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.87,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.007
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.032
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.031
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 47,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 47.0,
        "heikinAvg30d": 0.916
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.961
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.005
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.76,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.002
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 45,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.71,
        "boshuAvg30d": 44.9,
        "heikinAvg30d": 0.94
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.77,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.981
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.011
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.014
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.026
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.071
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.062
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.016
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 153.473,
        "saikou": 1.6,
        "heikin": 0.79,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 1.011
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.737
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.769
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 201.473,
        "saikou": 1.07,
        "heikin": 0.48,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.779
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.783
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.796
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 187.473,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 41.9,
        "heikinAvg30d": 0.855
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 163,
        "ouatsu": 170.519,
        "saikou": 5.71,
        "heikin": 5.07,
        "boshuAvg30d": 163.2,
        "heikinAvg30d": 3.782
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 163,
        "ouatsu": 174.391,
        "saikou": 4.1,
        "heikin": 3.57,
        "boshuAvg30d": 163.2,
        "heikinAvg30d": 3.353
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 163,
        "ouatsu": 187.101,
        "saikou": 3.37,
        "heikin": 2.89,
        "boshuAvg30d": 163.2,
        "heikinAvg30d": 3.049
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 163,
        "ouatsu": 189.049,
        "saikou": 2.2,
        "heikin": 1.87,
        "boshuAvg30d": 163.2,
        "heikinAvg30d": 3.032
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 163,
        "ouatsu": 189.049,
        "saikou": 1.9,
        "heikin": 1.6,
        "boshuAvg30d": 163.1,
        "heikinAvg30d": 2.956
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 163,
        "ouatsu": 189.049,
        "saikou": 1.9,
        "heikin": 1.61,
        "boshuAvg30d": 163.1,
        "heikinAvg30d": 3.097
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 164,
        "ouatsu": 208.249,
        "saikou": 1.89,
        "heikin": 1.62,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 3.283
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 164,
        "ouatsu": 204.421,
        "saikou": 2.43,
        "heikin": 2.09,
        "boshuAvg30d": 164.1,
        "heikinAvg30d": 3.406
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 165,
        "ouatsu": 208.249,
        "saikou": 2.43,
        "heikin": 2.11,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 3.519
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 165,
        "ouatsu": 208.249,
        "saikou": 3.25,
        "heikin": 2.73,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 3.75
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 165,
        "ouatsu": 208.249,
        "saikou": 5.17,
        "heikin": 4.24,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 3.875
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 165,
        "ouatsu": 257.973,
        "saikou": 4.48,
        "heikin": 3.14,
        "boshuAvg30d": 165.1,
        "heikinAvg30d": 3.705
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 168,
        "ouatsu": 261.973,
        "saikou": 4.73,
        "heikin": 3.06,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 3.449
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 169,
        "ouatsu": 202.973,
        "saikou": 5.18,
        "heikin": 4.33,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 3.19
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 170,
        "ouatsu": 202.973,
        "saikou": 4.82,
        "heikin": 4.14,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 3.049
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 171,
        "ouatsu": 196.121,
        "saikou": 6.3,
        "heikin": 5.98,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 3.156
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 171,
        "ouatsu": 199.121,
        "saikou": 7.74,
        "heikin": 6.17,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 3.545
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 171,
        "ouatsu": 201.033,
        "saikou": 8.82,
        "heikin": 7.24,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 4.08
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 175,
        "ouatsu": 185.666,
        "saikou": 9.81,
        "heikin": 6.91,
        "boshuAvg30d": 175.2,
        "heikinAvg30d": 4.114
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 175,
        "ouatsu": 185.666,
        "saikou": 9.55,
        "heikin": 6.75,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 4.103
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 176,
        "ouatsu": 182.183,
        "saikou": 9.05,
        "heikin": 6.47,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 3.963
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 176,
        "ouatsu": 182.183,
        "saikou": 8.81,
        "heikin": 6.44,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 4.11
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 177,
        "ouatsu": 180.235,
        "saikou": 8.55,
        "heikin": 6.33,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 4.061
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 177,
        "ouatsu": 221.237,
        "saikou": 8.09,
        "heikin": 6.05,
        "boshuAvg30d": 177.2,
        "heikinAvg30d": 4.075
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 176,
        "ouatsu": 251.168,
        "saikou": 6.81,
        "heikin": 5.63,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 3.59
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 176,
        "ouatsu": 283.072,
        "saikou": 6.72,
        "heikin": 5.69,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 3.713
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 176,
        "ouatsu": 190.17,
        "saikou": 8.08,
        "heikin": 6.03,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 4.127
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 176,
        "ouatsu": 192.16,
        "saikou": 8.98,
        "heikin": 6.9,
        "boshuAvg30d": 176.3,
        "heikinAvg30d": 4.661
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 175,
        "ouatsu": 195.56,
        "saikou": 9.05,
        "heikin": 6.56,
        "boshuAvg30d": 175.3,
        "heikinAvg30d": 5.054
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 174,
        "ouatsu": 195.56,
        "saikou": 9.05,
        "heikin": 6.47,
        "boshuAvg30d": 174.3,
        "heikinAvg30d": 5.411
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 170,
        "ouatsu": 191.624,
        "saikou": 9.13,
        "heikin": 7.24,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 5.416
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 170,
        "ouatsu": 191.624,
        "saikou": 10,
        "heikin": 7.27,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 6.007
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 170,
        "ouatsu": 242.599,
        "saikou": 10,
        "heikin": 7.57,
        "boshuAvg30d": 170.2,
        "heikinAvg30d": 5.967
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 169,
        "ouatsu": 257.503,
        "saikou": 9.87,
        "heikin": 7.74,
        "boshuAvg30d": 169.2,
        "heikinAvg30d": 6.201
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 169,
        "ouatsu": 263.503,
        "saikou": 8.86,
        "heikin": 7,
        "boshuAvg30d": 169.1,
        "heikinAvg30d": 5.995
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 168,
        "ouatsu": 256.675,
        "saikou": 8.73,
        "heikin": 6.91,
        "boshuAvg30d": 168.2,
        "heikinAvg30d": 6.126
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 167,
        "ouatsu": 252.181,
        "saikou": 7.76,
        "heikin": 6.23,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 6.197
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 167,
        "ouatsu": 256.033,
        "saikou": 7.75,
        "heikin": 6.22,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 5.955
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 167,
        "ouatsu": 245.159,
        "saikou": 6.38,
        "heikin": 5.24,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 5.591
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 167,
        "ouatsu": 247.148,
        "saikou": 6.18,
        "heikin": 5.06,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 5.138
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 167,
        "ouatsu": 327.448,
        "saikou": 5.54,
        "heikin": 4.78,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 4.919
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 167,
        "ouatsu": 273.473,
        "saikou": 5.32,
        "heikin": 4.49,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 4.713
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 167,
        "ouatsu": 251.563,
        "saikou": 7.57,
        "heikin": 5.66,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 4.437
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 168,
        "ouatsu": 258.574,
        "saikou": 7.36,
        "heikin": 4.99,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.583
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 168,
        "ouatsu": 249.574,
        "saikou": 7.55,
        "heikin": 5.41,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 4.485
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 167,
        "ouatsu": 257.574,
        "saikou": 7.09,
        "heikin": 5.08,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 3.991
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 167,
        "ouatsu": 192.924,
        "saikou": 6.3,
        "heikin": 5.31,
        "boshuAvg30d": 167.2,
        "heikinAvg30d": 3.948
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 167,
        "ouatsu": 192.924,
        "saikou": 4.7,
        "heikin": 3.72,
        "boshuAvg30d": 167.1,
        "heikinAvg30d": 3.481
      }
    ]
  }
};
