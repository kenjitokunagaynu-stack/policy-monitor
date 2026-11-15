// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/10/16〜2026/11/14）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-11-15",
  "fetchedAt": "2026-11-15",
  "avgWindowLabel": "過去30日平均（2026/10/16〜2026/11/14）",
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
      "ouatsu": 1533.625,
      "saikou": 9.99,
      "heikin": 2.43,
      "boshuAvg30d": 1132.2,
      "heikinAvg30d": 2.816
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1254,
      "ouatsu": 1509.951,
      "saikou": 10,
      "heikin": 2.72,
      "boshuAvg30d": 1132.2,
      "heikinAvg30d": 2.744
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1254,
      "ouatsu": 1494.299,
      "saikou": 10,
      "heikin": 2.63,
      "boshuAvg30d": 1132.2,
      "heikinAvg30d": 2.665
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1253,
      "ouatsu": 1503.012,
      "saikou": 10,
      "heikin": 2.64,
      "boshuAvg30d": 1131.8,
      "heikinAvg30d": 2.622
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1247,
      "ouatsu": 1610.055,
      "saikou": 10,
      "heikin": 2.18,
      "boshuAvg30d": 1127.4,
      "heikinAvg30d": 2.675
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1247,
      "ouatsu": 1538.513,
      "saikou": 9.99,
      "heikin": 2.25,
      "boshuAvg30d": 1126.8,
      "heikinAvg30d": 2.737
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1244,
      "ouatsu": 1641.783,
      "saikou": 9.99,
      "heikin": 2.24,
      "boshuAvg30d": 1123.8,
      "heikinAvg30d": 2.866
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1248,
      "ouatsu": 1601.687,
      "saikou": 9.99,
      "heikin": 2.66,
      "boshuAvg30d": 1126.8,
      "heikinAvg30d": 3.104
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1248,
      "ouatsu": 1636.694,
      "saikou": 9.99,
      "heikin": 2.82,
      "boshuAvg30d": 1127.8,
      "heikinAvg30d": 3.168
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1250,
      "ouatsu": 1534.796,
      "saikou": 9.99,
      "heikin": 2.59,
      "boshuAvg30d": 1129.3,
      "heikinAvg30d": 3.194
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1250,
      "ouatsu": 1524.287,
      "saikou": 9.99,
      "heikin": 2.52,
      "boshuAvg30d": 1129.3,
      "heikinAvg30d": 3.255
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1250,
      "ouatsu": 1665.15,
      "saikou": 9.99,
      "heikin": 2.33,
      "boshuAvg30d": 1129.3,
      "heikinAvg30d": 3.29
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1309,
      "ouatsu": 1568.912,
      "saikou": 9.99,
      "heikin": 2.49,
      "boshuAvg30d": 1188.8,
      "heikinAvg30d": 3.401
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1334,
      "ouatsu": 1740.065,
      "saikou": 9.99,
      "heikin": 2.9,
      "boshuAvg30d": 1212.8,
      "heikinAvg30d": 3.388
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1353,
      "ouatsu": 1511.479,
      "saikou": 10,
      "heikin": 3.36,
      "boshuAvg30d": 1232.8,
      "heikinAvg30d": 3.205
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1368,
      "ouatsu": 1607.229,
      "saikou": 10,
      "heikin": 3.35,
      "boshuAvg30d": 1249.2,
      "heikinAvg30d": 2.958
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1368,
      "ouatsu": 1580.139,
      "saikou": 9.99,
      "heikin": 2.97,
      "boshuAvg30d": 1249.6,
      "heikinAvg30d": 2.848
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1368,
      "ouatsu": 1590.798,
      "saikou": 9.99,
      "heikin": 3.14,
      "boshuAvg30d": 1253.4,
      "heikinAvg30d": 2.831
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1297,
      "ouatsu": 1659.878,
      "saikou": 10,
      "heikin": 3.05,
      "boshuAvg30d": 1195.5,
      "heikinAvg30d": 2.79
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1302,
      "ouatsu": 1684.215,
      "saikou": 9.99,
      "heikin": 3.09,
      "boshuAvg30d": 1199.4,
      "heikinAvg30d": 2.832
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1306,
      "ouatsu": 1606.706,
      "saikou": 9.99,
      "heikin": 3.47,
      "boshuAvg30d": 1204.6,
      "heikinAvg30d": 2.786
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1310,
      "ouatsu": 1593.057,
      "saikou": 9.99,
      "heikin": 3.45,
      "boshuAvg30d": 1206.5,
      "heikinAvg30d": 2.812
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1304,
      "ouatsu": 1616.629,
      "saikou": 10,
      "heikin": 3.72,
      "boshuAvg30d": 1202.1,
      "heikinAvg30d": 2.751
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1304,
      "ouatsu": 1623.734,
      "saikou": 9.99,
      "heikin": 3.61,
      "boshuAvg30d": 1201.5,
      "heikinAvg30d": 2.84
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1285,
      "ouatsu": 1533.278,
      "saikou": 9.99,
      "heikin": 3.32,
      "boshuAvg30d": 1181.7,
      "heikinAvg30d": 2.678
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1285,
      "ouatsu": 1545.029,
      "saikou": 9.99,
      "heikin": 3.61,
      "boshuAvg30d": 1181.7,
      "heikinAvg30d": 2.701
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1285,
      "ouatsu": 1622.887,
      "saikou": 9.99,
      "heikin": 3.6,
      "boshuAvg30d": 1181.7,
      "heikinAvg30d": 2.805
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1281,
      "ouatsu": 1784.118,
      "saikou": 10,
      "heikin": 3.17,
      "boshuAvg30d": 1178.4,
      "heikinAvg30d": 2.942
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1280,
      "ouatsu": 1730.955,
      "saikou": 10,
      "heikin": 3.31,
      "boshuAvg30d": 1176.3,
      "heikinAvg30d": 3.07
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1274,
      "ouatsu": 1674.638,
      "saikou": 10,
      "heikin": 3.35,
      "boshuAvg30d": 1170.3,
      "heikinAvg30d": 3.099
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1345,
      "ouatsu": 1585.896,
      "saikou": 10,
      "heikin": 3.14,
      "boshuAvg30d": 1235.8,
      "heikinAvg30d": 3.278
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1345,
      "ouatsu": 1654.387,
      "saikou": 10,
      "heikin": 3.07,
      "boshuAvg30d": 1235.5,
      "heikinAvg30d": 3.42
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1345,
      "ouatsu": 1695.721,
      "saikou": 10,
      "heikin": 3.59,
      "boshuAvg30d": 1235.7,
      "heikinAvg30d": 3.698
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1343,
      "ouatsu": 1679.849,
      "saikou": 10,
      "heikin": 3.48,
      "boshuAvg30d": 1234.2,
      "heikinAvg30d": 3.822
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1341,
      "ouatsu": 1657.664,
      "saikou": 10,
      "heikin": 3.78,
      "boshuAvg30d": 1225.9,
      "heikinAvg30d": 3.742
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1336,
      "ouatsu": 1682.96,
      "saikou": 10,
      "heikin": 4.1,
      "boshuAvg30d": 1220.9,
      "heikinAvg30d": 3.731
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1332,
      "ouatsu": 1779.854,
      "saikou": 10,
      "heikin": 3.85,
      "boshuAvg30d": 1215.4,
      "heikinAvg30d": 3.564
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1332,
      "ouatsu": 1728.007,
      "saikou": 10,
      "heikin": 3.59,
      "boshuAvg30d": 1215.4,
      "heikinAvg30d": 3.564
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1332,
      "ouatsu": 1773.911,
      "saikou": 9.99,
      "heikin": 3.66,
      "boshuAvg30d": 1215.4,
      "heikinAvg30d": 3.375
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1330,
      "ouatsu": 1798.031,
      "saikou": 9.99,
      "heikin": 3.47,
      "boshuAvg30d": 1214.3,
      "heikinAvg30d": 3.321
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1323,
      "ouatsu": 1707.293,
      "saikou": 9.99,
      "heikin": 3.33,
      "boshuAvg30d": 1206.7,
      "heikinAvg30d": 3.258
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1323,
      "ouatsu": 1751.522,
      "saikou": 10,
      "heikin": 3.56,
      "boshuAvg30d": 1206.7,
      "heikinAvg30d": 3.216
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1234,
      "ouatsu": 1942.086,
      "saikou": 9.91,
      "heikin": 3.21,
      "boshuAvg30d": 1117.2,
      "heikinAvg30d": 3.132
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1237,
      "ouatsu": 1855.045,
      "saikou": 9.6,
      "heikin": 3.03,
      "boshuAvg30d": 1120.2,
      "heikinAvg30d": 3.077
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1236,
      "ouatsu": 1721.291,
      "saikou": 9.5,
      "heikin": 3.19,
      "boshuAvg30d": 1123.3,
      "heikinAvg30d": 3.118
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1229,
      "ouatsu": 1843.79,
      "saikou": 9.99,
      "heikin": 3.43,
      "boshuAvg30d": 1114.3,
      "heikinAvg30d": 3.068
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 1221,
      "ouatsu": 1720.381,
      "saikou": 9.91,
      "heikin": 3.02,
      "boshuAvg30d": 1106.1,
      "heikinAvg30d": 3.089
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 1213,
      "ouatsu": 1561.758,
      "saikou": 10,
      "heikin": 2.87,
      "boshuAvg30d": 1098.0,
      "heikinAvg30d": 2.879
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
        "heikin": 2.03,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.344
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 50,
        "ouatsu": 114.908,
        "saikou": 9.8,
        "heikin": 3.16,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.588
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 50,
        "ouatsu": 123.418,
        "saikou": 9.91,
        "heikin": 2.62,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.403
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 50,
        "ouatsu": 125.408,
        "saikou": 9.91,
        "heikin": 2.46,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 3.648
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 49,
        "ouatsu": 150.942,
        "saikou": 5.7,
        "heikin": 1.4,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.682
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 49,
        "ouatsu": 117.908,
        "saikou": 9.8,
        "heikin": 1.79,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.236
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 49,
        "ouatsu": 119.108,
        "saikou": 9.48,
        "heikin": 2.29,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.508
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 49,
        "ouatsu": 149.308,
        "saikou": 9.8,
        "heikin": 3.97,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 4.122
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 49,
        "ouatsu": 167.408,
        "saikou": 9.91,
        "heikin": 4.77,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.92
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 49,
        "ouatsu": 119.108,
        "saikou": 9.8,
        "heikin": 2.49,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.868
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 49,
        "ouatsu": 165.438,
        "saikou": 9.1,
        "heikin": 2.61,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.952
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 49,
        "ouatsu": 149.652,
        "saikou": 5.7,
        "heikin": 1.46,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 3.935
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 50,
        "ouatsu": 116.108,
        "saikou": 9.8,
        "heikin": 2.99,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.222
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 51,
        "ouatsu": 158.608,
        "saikou": 9.37,
        "heikin": 2.62,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 4.33
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 51,
        "ouatsu": 126.108,
        "saikou": 9.8,
        "heikin": 3.28,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 4.228
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 51,
        "ouatsu": 207.358,
        "saikou": 7.35,
        "heikin": 3.2,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 4.189
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 51,
        "ouatsu": 114.908,
        "saikou": 9,
        "heikin": 2.43,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 4.582
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 51,
        "ouatsu": 112.918,
        "saikou": 7.3,
        "heikin": 2.3,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 3.984
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 52,
        "ouatsu": 157.008,
        "saikou": 9.91,
        "heikin": 2.33,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 3.859
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 53,
        "ouatsu": 162.958,
        "saikou": 9.8,
        "heikin": 3.07,
        "boshuAvg30d": 51.9,
        "heikinAvg30d": 3.865
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 53,
        "ouatsu": 122.958,
        "saikou": 9.8,
        "heikin": 2.87,
        "boshuAvg30d": 51.9,
        "heikinAvg30d": 3.677
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 54,
        "ouatsu": 124.908,
        "saikou": 9.8,
        "heikin": 2.79,
        "boshuAvg30d": 52.9,
        "heikinAvg30d": 3.636
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 54,
        "ouatsu": 162.908,
        "saikou": 9.8,
        "heikin": 3.91,
        "boshuAvg30d": 52.9,
        "heikinAvg30d": 3.78
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 54,
        "ouatsu": 161.218,
        "saikou": 9.85,
        "heikin": 4.57,
        "boshuAvg30d": 52.9,
        "heikinAvg30d": 3.842
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 53,
        "ouatsu": 112.918,
        "saikou": 8.84,
        "heikin": 2.23,
        "boshuAvg30d": 51.4,
        "heikinAvg30d": 3.708
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 53,
        "ouatsu": 114.908,
        "saikou": 9.8,
        "heikin": 2.38,
        "boshuAvg30d": 51.4,
        "heikinAvg30d": 3.398
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 53,
        "ouatsu": 163.208,
        "saikou": 9.91,
        "heikin": 4.73,
        "boshuAvg30d": 51.4,
        "heikinAvg30d": 3.649
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 52,
        "ouatsu": 207.708,
        "saikou": 3.62,
        "heikin": 2.58,
        "boshuAvg30d": 50.9,
        "heikinAvg30d": 4.274
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 52,
        "ouatsu": 192.908,
        "saikou": 4.91,
        "heikin": 3.78,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 4.477
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 51,
        "ouatsu": 190.918,
        "saikou": 5.8,
        "heikin": 4.61,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 4.94
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 51,
        "ouatsu": 171.918,
        "saikou": 5.8,
        "heikin": 3.62,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.789
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 51,
        "ouatsu": 183.908,
        "saikou": 6,
        "heikin": 4.69,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 5.483
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 51,
        "ouatsu": 129.208,
        "saikou": 9.6,
        "heikin": 6.89,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 6.013
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 51,
        "ouatsu": 85.908,
        "saikou": 9.8,
        "heikin": 4.14,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 5.704
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 51,
        "ouatsu": 155.208,
        "saikou": 3.62,
        "heikin": 3.08,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 5.09
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 51,
        "ouatsu": 155.208,
        "saikou": 3.73,
        "heikin": 3.16,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 5.197
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 51,
        "ouatsu": 165.908,
        "saikou": 3.62,
        "heikin": 2.55,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.627
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 51,
        "ouatsu": 171.918,
        "saikou": 3.73,
        "heikin": 2.53,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.863
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 51,
        "ouatsu": 187.908,
        "saikou": 3.73,
        "heikin": 2.82,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 4.728
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 51,
        "ouatsu": 202.208,
        "saikou": 3.73,
        "heikin": 2.77,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 5.009
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 50,
        "ouatsu": 146.908,
        "saikou": 3.73,
        "heikin": 2.86,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 4.727
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 50,
        "ouatsu": 126.918,
        "saikou": 3.73,
        "heikin": 3.19,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.385
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 50,
        "ouatsu": 200.208,
        "saikou": 9.91,
        "heikin": 4.91,
        "boshuAvg30d": 48.4,
        "heikinAvg30d": 4.154
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 52,
        "ouatsu": 145.908,
        "saikou": 9.6,
        "heikin": 3.71,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 4.268
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 51,
        "ouatsu": 117.908,
        "saikou": 9.5,
        "heikin": 2.51,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 4.211
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 52,
        "ouatsu": 166.208,
        "saikou": 9.65,
        "heikin": 3.52,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 4.113
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 51,
        "ouatsu": 166.208,
        "saikou": 9.91,
        "heikin": 3.72,
        "boshuAvg30d": 49.9,
        "heikinAvg30d": 3.63
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 52,
        "ouatsu": 136.708,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 50.4,
        "heikinAvg30d": 3.735
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 124,
        "ouatsu": 58.034,
        "saikou": 8.11,
        "heikin": 5.79,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 5.301
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 124,
        "ouatsu": 61.864,
        "saikou": 10,
        "heikin": 7.04,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 5.41
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 124,
        "ouatsu": 94.374,
        "saikou": 10,
        "heikin": 8.54,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 5.496
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 124,
        "ouatsu": 83.702,
        "saikou": 10,
        "heikin": 7.75,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 5.495
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 124,
        "ouatsu": 86.494,
        "saikou": 10,
        "heikin": 8.63,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 5.372
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 124,
        "ouatsu": 85.144,
        "saikou": 8.77,
        "heikin": 6.3,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 5.187
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 123,
        "ouatsu": 106.022,
        "saikou": 8.03,
        "heikin": 5.65,
        "boshuAvg30d": 119.8,
        "heikinAvg30d": 5.368
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 124,
        "ouatsu": 108.872,
        "saikou": 8.34,
        "heikin": 4.93,
        "boshuAvg30d": 120.3,
        "heikinAvg30d": 5.143
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 123,
        "ouatsu": 112.87,
        "saikou": 8.18,
        "heikin": 5.07,
        "boshuAvg30d": 119.8,
        "heikinAvg30d": 4.871
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 124,
        "ouatsu": 100.27,
        "saikou": 8.12,
        "heikin": 4.86,
        "boshuAvg30d": 120.3,
        "heikinAvg30d": 5.002
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 124,
        "ouatsu": 114.866,
        "saikou": 8.22,
        "heikin": 5.13,
        "boshuAvg30d": 120.3,
        "heikinAvg30d": 5.177
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 124,
        "ouatsu": 113.216,
        "saikou": 8.22,
        "heikin": 5.12,
        "boshuAvg30d": 120.3,
        "heikinAvg30d": 5.102
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 131,
        "ouatsu": 114.866,
        "saikou": 8.12,
        "heikin": 4.79,
        "boshuAvg30d": 127.3,
        "heikinAvg30d": 5.271
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 134,
        "ouatsu": 113.366,
        "saikou": 8.87,
        "heikin": 4.79,
        "boshuAvg30d": 131.3,
        "heikinAvg30d": 5.067
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 138,
        "ouatsu": 114.866,
        "saikou": 10,
        "heikin": 6.89,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 5.417
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 140,
        "ouatsu": 114.33,
        "saikou": 10,
        "heikin": 7.16,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 5.423
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 140,
        "ouatsu": 112.87,
        "saikou": 9.7,
        "heikin": 6.06,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 5.381
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 140,
        "ouatsu": 111.37,
        "saikou": 9.7,
        "heikin": 5.7,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 5.48
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 62,
        "ouatsu": 138.866,
        "saikou": 5.46,
        "heikin": 3.67,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 5.073
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 63,
        "ouatsu": 138.866,
        "saikou": 5.62,
        "heikin": 3.88,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 5.236
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 65,
        "ouatsu": 134.911,
        "saikou": 6.33,
        "heikin": 4.44,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 5.262
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 133.011,
        "saikou": 7.24,
        "heikin": 4.37,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 5.412
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 128.292,
        "saikou": 10,
        "heikin": 5.26,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 5.39
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 124.712,
        "saikou": 6.17,
        "heikin": 4.72,
        "boshuAvg30d": 66.2,
        "heikinAvg30d": 5.478
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 61,
        "ouatsu": 124.366,
        "saikou": 6.8,
        "heikin": 4.37,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 5.709
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 61,
        "ouatsu": 124.366,
        "saikou": 5.5,
        "heikin": 4.36,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 5.624
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 61,
        "ouatsu": 135.586,
        "saikou": 9.7,
        "heikin": 4.19,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 4.934
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 60,
        "ouatsu": 140.862,
        "saikou": 4.06,
        "heikin": 3.04,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 5.284
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 60,
        "ouatsu": 130.192,
        "saikou": 2.91,
        "heikin": 2.45,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 5.28
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 59,
        "ouatsu": 128.862,
        "saikou": 3.68,
        "heikin": 2.85,
        "boshuAvg30d": 59.2,
        "heikinAvg30d": 4.893
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 139,
        "ouatsu": 104.862,
        "saikou": 5.9,
        "heikin": 3.47,
        "boshuAvg30d": 135.8,
        "heikinAvg30d": 5.041
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 139,
        "ouatsu": 102.866,
        "saikou": 9.45,
        "heikin": 3.89,
        "boshuAvg30d": 135.8,
        "heikinAvg30d": 4.669
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 139,
        "ouatsu": 104.862,
        "saikou": 8.35,
        "heikin": 3.27,
        "boshuAvg30d": 135.8,
        "heikinAvg30d": 4.488
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 139,
        "ouatsu": 103.362,
        "saikou": 7,
        "heikin": 3.31,
        "boshuAvg30d": 135.8,
        "heikinAvg30d": 4.277
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 138,
        "ouatsu": 80.862,
        "saikou": 7,
        "heikin": 4.67,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 4.437
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 136,
        "ouatsu": 77.712,
        "saikou": 6.99,
        "heikin": 3.05,
        "boshuAvg30d": 133.3,
        "heikinAvg30d": 3.974
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 136,
        "ouatsu": 76.87,
        "saikou": 6.8,
        "heikin": 2.66,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 3.511
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 136,
        "ouatsu": 89.366,
        "saikou": 3.5,
        "heikin": 2.14,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 3.219
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 136,
        "ouatsu": 78.866,
        "saikou": 6.8,
        "heikin": 2.66,
        "boshuAvg30d": 132.8,
        "heikinAvg30d": 3.203
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 135,
        "ouatsu": 90.866,
        "saikou": 9.7,
        "heikin": 2.91,
        "boshuAvg30d": 132.3,
        "heikinAvg30d": 3.56
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 135,
        "ouatsu": 84.91,
        "saikou": 9.7,
        "heikin": 4.15,
        "boshuAvg30d": 131.8,
        "heikinAvg30d": 3.526
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 135,
        "ouatsu": 94.914,
        "saikou": 9.7,
        "heikin": 2.67,
        "boshuAvg30d": 131.8,
        "heikinAvg30d": 3.661
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 46,
        "ouatsu": 100.366,
        "saikou": 5.31,
        "heikin": 3.2,
        "boshuAvg30d": 42.8,
        "heikinAvg30d": 3.614
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 46,
        "ouatsu": 100.366,
        "saikou": 6.26,
        "heikin": 3.96,
        "boshuAvg30d": 42.8,
        "heikinAvg30d": 4.015
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 46,
        "ouatsu": 100.366,
        "saikou": 8.46,
        "heikin": 4.62,
        "boshuAvg30d": 42.8,
        "heikinAvg30d": 3.898
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 45,
        "ouatsu": 100.366,
        "saikou": 8.76,
        "heikin": 4.84,
        "boshuAvg30d": 41.8,
        "heikinAvg30d": 4.596
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 44,
        "ouatsu": 100.366,
        "saikou": 8.4,
        "heikin": 4.75,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 4.462
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 43,
        "ouatsu": 97.216,
        "saikou": 10,
        "heikin": 5.86,
        "boshuAvg30d": 39.8,
        "heikinAvg30d": 4.99
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 273,
        "ouatsu": 480.052,
        "saikou": 6.23,
        "heikin": 2.08,
        "boshuAvg30d": 241.1,
        "heikinAvg30d": 2.585
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 273,
        "ouatsu": 474.586,
        "saikou": 6.88,
        "heikin": 2.17,
        "boshuAvg30d": 241.1,
        "heikinAvg30d": 2.511
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 273,
        "ouatsu": 474.574,
        "saikou": 6.27,
        "heikin": 2.02,
        "boshuAvg30d": 241.1,
        "heikinAvg30d": 2.577
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 273,
        "ouatsu": 480.044,
        "saikou": 6.56,
        "heikin": 2.1,
        "boshuAvg30d": 241.1,
        "heikinAvg30d": 2.377
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 271,
        "ouatsu": 493.418,
        "saikou": 6.89,
        "heikin": 2.09,
        "boshuAvg30d": 239.6,
        "heikinAvg30d": 2.418
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 271,
        "ouatsu": 495.488,
        "saikou": 6.88,
        "heikin": 2.07,
        "boshuAvg30d": 239.1,
        "heikinAvg30d": 2.325
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 269,
        "ouatsu": 503.501,
        "saikou": 6,
        "heikin": 1.83,
        "boshuAvg30d": 237.1,
        "heikinAvg30d": 2.369
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 271,
        "ouatsu": 471.081,
        "saikou": 6.87,
        "heikin": 2.03,
        "boshuAvg30d": 239.1,
        "heikinAvg30d": 2.526
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 271,
        "ouatsu": 454.696,
        "saikou": 6.43,
        "heikin": 1.89,
        "boshuAvg30d": 239.1,
        "heikinAvg30d": 2.766
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 272,
        "ouatsu": 454.864,
        "saikou": 6.26,
        "heikin": 1.83,
        "boshuAvg30d": 240.1,
        "heikinAvg30d": 2.552
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 272,
        "ouatsu": 452.934,
        "saikou": 6.54,
        "heikin": 1.91,
        "boshuAvg30d": 240.1,
        "heikinAvg30d": 2.554
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 272,
        "ouatsu": 441.534,
        "saikou": 6.54,
        "heikin": 1.91,
        "boshuAvg30d": 240.1,
        "heikinAvg30d": 2.818
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 292,
        "ouatsu": 441.755,
        "saikou": 6.26,
        "heikin": 1.82,
        "boshuAvg30d": 259.5,
        "heikinAvg30d": 3.112
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 300,
        "ouatsu": 460.748,
        "saikou": 5.95,
        "heikin": 2.25,
        "boshuAvg30d": 267.5,
        "heikinAvg30d": 3.152
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 304,
        "ouatsu": 308.678,
        "saikou": 6.73,
        "heikin": 3.33,
        "boshuAvg30d": 272.1,
        "heikinAvg30d": 3.003
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 309,
        "ouatsu": 329.163,
        "saikou": 6.66,
        "heikin": 3.17,
        "boshuAvg30d": 277.4,
        "heikinAvg30d": 2.837
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 309,
        "ouatsu": 398.388,
        "saikou": 7.18,
        "heikin": 1.91,
        "boshuAvg30d": 277.7,
        "heikinAvg30d": 2.521
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 309,
        "ouatsu": 415.537,
        "saikou": 9.79,
        "heikin": 3.09,
        "boshuAvg30d": 281.6,
        "heikinAvg30d": 2.706
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 299,
        "ouatsu": 444.015,
        "saikou": 6.68,
        "heikin": 3.25,
        "boshuAvg30d": 272.7,
        "heikinAvg30d": 2.324
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 299,
        "ouatsu": 481.699,
        "saikou": 6.65,
        "heikin": 2.9,
        "boshuAvg30d": 272.7,
        "heikinAvg30d": 2.498
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 299,
        "ouatsu": 487.438,
        "saikou": 6.89,
        "heikin": 3.68,
        "boshuAvg30d": 273.3,
        "heikinAvg30d": 2.466
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 299,
        "ouatsu": 493.163,
        "saikou": 7.06,
        "heikin": 3.66,
        "boshuAvg30d": 272.8,
        "heikinAvg30d": 2.431
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 296,
        "ouatsu": 480.64,
        "saikou": 7.54,
        "heikin": 3.74,
        "boshuAvg30d": 270.3,
        "heikinAvg30d": 2.469
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 296,
        "ouatsu": 477.175,
        "saikou": 6.67,
        "heikin": 3.25,
        "boshuAvg30d": 270.3,
        "heikinAvg30d": 2.67
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 294,
        "ouatsu": 458.089,
        "saikou": 5.9,
        "heikin": 2.82,
        "boshuAvg30d": 267.4,
        "heikinAvg30d": 2.17
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 294,
        "ouatsu": 470.185,
        "saikou": 7.81,
        "heikin": 4.1,
        "boshuAvg30d": 267.4,
        "heikinAvg30d": 2.182
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 294,
        "ouatsu": 468.858,
        "saikou": 9.5,
        "heikin": 3.64,
        "boshuAvg30d": 267.4,
        "heikinAvg30d": 2.302
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 294,
        "ouatsu": 477.964,
        "saikou": 6.99,
        "heikin": 2.86,
        "boshuAvg30d": 267.1,
        "heikinAvg30d": 2.322
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 293,
        "ouatsu": 500.206,
        "saikou": 5.1,
        "heikin": 3.11,
        "boshuAvg30d": 266.1,
        "heikinAvg30d": 2.646
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 293,
        "ouatsu": 503.719,
        "saikou": 6.67,
        "heikin": 3.42,
        "boshuAvg30d": 265.6,
        "heikinAvg30d": 2.44
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 291,
        "ouatsu": 492.619,
        "saikou": 8.11,
        "heikin": 3.14,
        "boshuAvg30d": 263.6,
        "heikinAvg30d": 2.44
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 291,
        "ouatsu": 502.577,
        "saikou": 7.55,
        "heikin": 2.43,
        "boshuAvg30d": 263.2,
        "heikinAvg30d": 2.401
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 291,
        "ouatsu": 529.594,
        "saikou": 7.07,
        "heikin": 2.31,
        "boshuAvg30d": 262.9,
        "heikinAvg30d": 2.375
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 291,
        "ouatsu": 595.752,
        "saikou": 7.41,
        "heikin": 2.1,
        "boshuAvg30d": 262.9,
        "heikinAvg30d": 2.344
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 291,
        "ouatsu": 559.591,
        "saikou": 8.9,
        "heikin": 3.02,
        "boshuAvg30d": 260.9,
        "heikinAvg30d": 2.153
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 291,
        "ouatsu": 566.527,
        "saikou": 7.01,
        "heikin": 3.1,
        "boshuAvg30d": 260.9,
        "heikinAvg30d": 2.305
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 293,
        "ouatsu": 609.237,
        "saikou": 6.95,
        "heikin": 2.68,
        "boshuAvg30d": 262.5,
        "heikinAvg30d": 2.435
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 293,
        "ouatsu": 563.434,
        "saikou": 6.64,
        "heikin": 2.33,
        "boshuAvg30d": 262.5,
        "heikinAvg30d": 2.326
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 293,
        "ouatsu": 566.344,
        "saikou": 7.1,
        "heikin": 2.36,
        "boshuAvg30d": 262.5,
        "heikinAvg30d": 2.378
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 293,
        "ouatsu": 526.49,
        "saikou": 6.6,
        "heikin": 2.37,
        "boshuAvg30d": 262.8,
        "heikinAvg30d": 2.24
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 292,
        "ouatsu": 510.958,
        "saikou": 3.62,
        "heikin": 1.62,
        "boshuAvg30d": 261.3,
        "heikinAvg30d": 2.242
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 292,
        "ouatsu": 528.891,
        "saikou": 6.64,
        "heikin": 3.12,
        "boshuAvg30d": 261.3,
        "heikinAvg30d": 2.452
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 291,
        "ouatsu": 527.545,
        "saikou": 6.53,
        "heikin": 2.75,
        "boshuAvg30d": 260.8,
        "heikinAvg30d": 2.296
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 291,
        "ouatsu": 491.363,
        "saikou": 7.9,
        "heikin": 3.45,
        "boshuAvg30d": 260.8,
        "heikinAvg30d": 2.234
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 291,
        "ouatsu": 431.328,
        "saikou": 8.22,
        "heikin": 3.4,
        "boshuAvg30d": 263.8,
        "heikinAvg30d": 2.355
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 289,
        "ouatsu": 440.176,
        "saikou": 8.8,
        "heikin": 3.57,
        "boshuAvg30d": 258.8,
        "heikinAvg30d": 2.398
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 287,
        "ouatsu": 339.267,
        "saikou": 7.54,
        "heikin": 3.42,
        "boshuAvg30d": 257.1,
        "heikinAvg30d": 2.816
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 286,
        "ouatsu": 365.809,
        "saikou": 7.81,
        "heikin": 2.59,
        "boshuAvg30d": 255.5,
        "heikinAvg30d": 2.828
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 181,
        "ouatsu": 286.763,
        "saikou": 8.29,
        "heikin": 2.58,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 1.801
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 181,
        "ouatsu": 284.656,
        "saikou": 8.29,
        "heikin": 2.86,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 1.859
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 181,
        "ouatsu": 290.63,
        "saikou": 8.29,
        "heikin": 2.79,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 1.899
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 180,
        "ouatsu": 298.587,
        "saikou": 8.29,
        "heikin": 2.84,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 1.958
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 180,
        "ouatsu": 286.476,
        "saikou": 8.29,
        "heikin": 2.74,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 1.987
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 179,
        "ouatsu": 286.476,
        "saikou": 8.29,
        "heikin": 2.56,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 1.93
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 178,
        "ouatsu": 312.325,
        "saikou": 8.29,
        "heikin": 2.48,
        "boshuAvg30d": 142.4,
        "heikinAvg30d": 1.82
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 178,
        "ouatsu": 287.135,
        "saikou": 8.29,
        "heikin": 2.83,
        "boshuAvg30d": 142.4,
        "heikinAvg30d": 1.774
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 178,
        "ouatsu": 316.326,
        "saikou": 8.29,
        "heikin": 2.86,
        "boshuAvg30d": 142.9,
        "heikinAvg30d": 1.683
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 178,
        "ouatsu": 298.414,
        "saikou": 8.37,
        "heikin": 2.93,
        "boshuAvg30d": 142.9,
        "heikinAvg30d": 1.74
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 178,
        "ouatsu": 298.414,
        "saikou": 8.37,
        "heikin": 2.82,
        "boshuAvg30d": 142.9,
        "heikinAvg30d": 1.636
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 178,
        "ouatsu": 337.028,
        "saikou": 8.37,
        "heikin": 2.57,
        "boshuAvg30d": 142.9,
        "heikinAvg30d": 1.574
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 188,
        "ouatsu": 338.538,
        "saikou": 8.37,
        "heikin": 3.02,
        "boshuAvg30d": 152.4,
        "heikinAvg30d": 1.813
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 193,
        "ouatsu": 370.048,
        "saikou": 8.37,
        "heikin": 2.68,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 1.814
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 196,
        "ouatsu": 369.958,
        "saikou": 8.41,
        "heikin": 3.07,
        "boshuAvg30d": 159.9,
        "heikinAvg30d": 2.097
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 198,
        "ouatsu": 368.458,
        "saikou": 8.92,
        "heikin": 3.02,
        "boshuAvg30d": 161.9,
        "heikinAvg30d": 2.142
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 198,
        "ouatsu": 368.558,
        "saikou": 9.73,
        "heikin": 3.27,
        "boshuAvg30d": 161.9,
        "heikinAvg30d": 2.164
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 198,
        "ouatsu": 368.558,
        "saikou": 9.52,
        "heikin": 3.04,
        "boshuAvg30d": 161.9,
        "heikinAvg30d": 2.27
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 203,
        "ouatsu": 372.446,
        "saikou": 9.49,
        "heikin": 2.57,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 2.546
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 203,
        "ouatsu": 351.249,
        "saikou": 9.49,
        "heikin": 2.23,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 2.529
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 203,
        "ouatsu": 356.707,
        "saikou": 9.63,
        "heikin": 2.81,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 2.57
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 203,
        "ouatsu": 358.706,
        "saikou": 9.49,
        "heikin": 2.63,
        "boshuAvg30d": 166.9,
        "heikinAvg30d": 2.598
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 202,
        "ouatsu": 366.476,
        "saikou": 9.49,
        "heikin": 3.14,
        "boshuAvg30d": 165.9,
        "heikinAvg30d": 2.592
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 201,
        "ouatsu": 366.566,
        "saikou": 9.49,
        "heikin": 3.18,
        "boshuAvg30d": 164.9,
        "heikinAvg30d": 2.735
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 197,
        "ouatsu": 352.701,
        "saikou": 9.49,
        "heikin": 3.58,
        "boshuAvg30d": 160.9,
        "heikinAvg30d": 2.839
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 197,
        "ouatsu": 354.672,
        "saikou": 9.49,
        "heikin": 3.5,
        "boshuAvg30d": 160.9,
        "heikinAvg30d": 2.769
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 197,
        "ouatsu": 362.523,
        "saikou": 9.49,
        "heikin": 2.87,
        "boshuAvg30d": 160.9,
        "heikinAvg30d": 2.502
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 197,
        "ouatsu": 370.447,
        "saikou": 9.49,
        "heikin": 2.82,
        "boshuAvg30d": 160.3,
        "heikinAvg30d": 2.587
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 197,
        "ouatsu": 310.522,
        "saikou": 9.49,
        "heikin": 2.25,
        "boshuAvg30d": 160.3,
        "heikinAvg30d": 2.667
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 197,
        "ouatsu": 347.459,
        "saikou": 8.69,
        "heikin": 2.48,
        "boshuAvg30d": 160.3,
        "heikinAvg30d": 2.57
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 195,
        "ouatsu": 305.854,
        "saikou": 8.69,
        "heikin": 2.54,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 2.743
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 195,
        "ouatsu": 331.561,
        "saikou": 8.69,
        "heikin": 2.6,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 2.791
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 195,
        "ouatsu": 355.082,
        "saikou": 8.69,
        "heikin": 3.15,
        "boshuAvg30d": 158.3,
        "heikinAvg30d": 2.753
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 194,
        "ouatsu": 352.586,
        "saikou": 8.69,
        "heikin": 3.43,
        "boshuAvg30d": 157.9,
        "heikinAvg30d": 2.986
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 194,
        "ouatsu": 352.586,
        "saikou": 8.69,
        "heikin": 3.46,
        "boshuAvg30d": 157.9,
        "heikinAvg30d": 2.814
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 193,
        "ouatsu": 331.408,
        "saikou": 8.69,
        "heikin": 3.22,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 2.593
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 191,
        "ouatsu": 356.568,
        "saikou": 8.69,
        "heikin": 3.07,
        "boshuAvg30d": 154.9,
        "heikinAvg30d": 2.396
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 191,
        "ouatsu": 356.568,
        "saikou": 8.69,
        "heikin": 3.1,
        "boshuAvg30d": 154.9,
        "heikinAvg30d": 2.385
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 191,
        "ouatsu": 392.112,
        "saikou": 8.69,
        "heikin": 2.89,
        "boshuAvg30d": 154.9,
        "heikinAvg30d": 2.012
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 191,
        "ouatsu": 392.112,
        "saikou": 8.69,
        "heikin": 2.68,
        "boshuAvg30d": 154.9,
        "heikinAvg30d": 1.999
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 191,
        "ouatsu": 380.308,
        "saikou": 8.69,
        "heikin": 2.2,
        "boshuAvg30d": 154.9,
        "heikinAvg30d": 1.849
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 191,
        "ouatsu": 372.326,
        "saikou": 8.27,
        "heikin": 1.98,
        "boshuAvg30d": 154.9,
        "heikinAvg30d": 1.779
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 193,
        "ouatsu": 380.141,
        "saikou": 8.27,
        "heikin": 1.91,
        "boshuAvg30d": 156.3,
        "heikinAvg30d": 1.699
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 193,
        "ouatsu": 390.122,
        "saikou": 5,
        "heikin": 1.93,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 1.839
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 193,
        "ouatsu": 363.857,
        "saikou": 8.27,
        "heikin": 2.22,
        "boshuAvg30d": 156.9,
        "heikinAvg30d": 1.891
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 191,
        "ouatsu": 361.967,
        "saikou": 8.27,
        "heikin": 2.77,
        "boshuAvg30d": 155.4,
        "heikinAvg30d": 1.977
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 190,
        "ouatsu": 343.002,
        "saikou": 8.27,
        "heikin": 2.15,
        "boshuAvg30d": 154.4,
        "heikinAvg30d": 1.908
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 187,
        "ouatsu": 318.517,
        "saikou": 8.27,
        "heikin": 2.96,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 1.962
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
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 2.383
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 61,
        "ouatsu": 1.9,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 2.139
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 61,
        "ouatsu": 1.9,
        "saikou": 9.9,
        "heikin": 9.9,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 1.887
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 8.98,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 2.046
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 60,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 5.72,
        "boshuAvg30d": 58.4,
        "heikinAvg30d": 2.04
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 5.59,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 1.922
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.41,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 2.701
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 5.83,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 2.624
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 61,
        "ouatsu": 18.48,
        "saikou": 7.36,
        "heikin": 6.27,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 2.692
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 61,
        "ouatsu": 28.898,
        "saikou": 9.9,
        "heikin": 7.2,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 3.241
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 61,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 5.83,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 3.357
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 61,
        "ouatsu": 13.938,
        "saikou": 9.9,
        "heikin": 6.02,
        "boshuAvg30d": 58.9,
        "heikinAvg30d": 2.973
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 65,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 9.37,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.979
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 66,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 6.24,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 3.281
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.9,
        "heikin": 6.34,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 3.624
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 68,
        "ouatsu": 12.676,
        "saikou": 9.9,
        "heikin": 3.06,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 3.426
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 68,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 3.18,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 3.885
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 68,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 3.63,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 3.678
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 69,
        "ouatsu": 20.998,
        "saikou": 9.99,
        "heikin": 5.01,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 4.074
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 69,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 6.19,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 4.42
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 69,
        "ouatsu": 8.952,
        "saikou": 9.99,
        "heikin": 7.48,
        "boshuAvg30d": 67.4,
        "heikinAvg30d": 5.132
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 69,
        "ouatsu": 5.706,
        "saikou": 9.99,
        "heikin": 8.56,
        "boshuAvg30d": 67.4,
        "heikinAvg30d": 5.528
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 69,
        "ouatsu": 4.098,
        "saikou": 9.99,
        "heikin": 9.94,
        "boshuAvg30d": 67.4,
        "heikinAvg30d": 4.554
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 69,
        "ouatsu": 18.366,
        "saikou": 9.99,
        "heikin": 6.58,
        "boshuAvg30d": 67.4,
        "heikinAvg30d": 4.425
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 69,
        "ouatsu": 21.15,
        "saikou": 9.99,
        "heikin": 5.62,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 2.848
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 69,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 5.41,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 3.032
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 69,
        "ouatsu": 20.096,
        "saikou": 9.99,
        "heikin": 5.59,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 4.81
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 69,
        "ouatsu": 47.898,
        "saikou": 9.99,
        "heikin": 1.17,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 3.72
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 69,
        "ouatsu": 47.898,
        "saikou": 9.99,
        "heikin": 1.17,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 4.714
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 69,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 2.02,
        "boshuAvg30d": 66.9,
        "heikinAvg30d": 4.518
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 70,
        "ouatsu": 23.098,
        "saikou": 9.99,
        "heikin": 2.09,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 5.643
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 70,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 2.02,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 6.339
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.4,
        "heikinAvg30d": 5.354
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.4,
        "heikinAvg30d": 5.176
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.4,
        "heikinAvg30d": 5.266
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 68.4,
        "heikinAvg30d": 5.329
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 70,
        "ouatsu": 22.898,
        "saikou": 9.99,
        "heikin": 7.09,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 4.626
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 5.284
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 3.97
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 70,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 67.9,
        "heikinAvg30d": 4.489
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 68,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 3.899
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 67,
        "ouatsu": 3.898,
        "saikou": 9.99,
        "heikin": 9.95,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 3.931
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 67,
        "ouatsu": 22.898,
        "saikou": 5.73,
        "heikin": 5.55,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 3.892
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 67,
        "ouatsu": 22.898,
        "saikou": 6.14,
        "heikin": 5.91,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 3.589
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 67,
        "ouatsu": 28.898,
        "saikou": 7.16,
        "heikin": 7.16,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 3.64
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 66,
        "ouatsu": 28.898,
        "saikou": 9.9,
        "heikin": 6,
        "boshuAvg30d": 64.4,
        "heikinAvg30d": 3.237
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 66,
        "ouatsu": 28.898,
        "saikou": 3.69,
        "heikin": 3.69,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 3.169
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 65,
        "ouatsu": 28.898,
        "saikou": 9.9,
        "heikin": 1.06,
        "boshuAvg30d": 63.4,
        "heikinAvg30d": 2.489
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 254,
        "ouatsu": 175.873,
        "saikou": 9.99,
        "heikin": 4.04,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 2.232
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 254,
        "ouatsu": 156.906,
        "saikou": 9.99,
        "heikin": 4.5,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 1.522
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 254,
        "ouatsu": 105.28,
        "saikou": 9.99,
        "heikin": 6.07,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 1.233
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 254,
        "ouatsu": 105.262,
        "saikou": 9.99,
        "heikin": 6.04,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 1.321
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 253,
        "ouatsu": 144.49,
        "saikou": 9.98,
        "heikin": 4.09,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 1.49
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 253,
        "ouatsu": 105.262,
        "saikou": 9.99,
        "heikin": 6.17,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 1.818
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 253,
        "ouatsu": 117.137,
        "saikou": 9.99,
        "heikin": 6.52,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 1.978
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 253,
        "ouatsu": 142.735,
        "saikou": 9.99,
        "heikin": 5.56,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 2.279
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 254,
        "ouatsu": 117.274,
        "saikou": 9.99,
        "heikin": 6.48,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 2.035
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 254,
        "ouatsu": 115.334,
        "saikou": 9.99,
        "heikin": 6.46,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 1.959
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 254,
        "ouatsu": 67.909,
        "saikou": 9.99,
        "heikin": 9.31,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 1.912
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 254,
        "ouatsu": 158.559,
        "saikou": 9.99,
        "heikin": 4.73,
        "boshuAvg30d": 173.9,
        "heikinAvg30d": 1.935
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 264,
        "ouatsu": 163.173,
        "saikou": 9.99,
        "heikin": 3.69,
        "boshuAvg30d": 184.4,
        "heikinAvg30d": 1.886
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 268,
        "ouatsu": 156.412,
        "saikou": 9.99,
        "heikin": 4.65,
        "boshuAvg30d": 188.4,
        "heikinAvg30d": 1.92
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.58,
        "boshuAvg30d": 193.4,
        "heikinAvg30d": 2.38
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 275,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.6,
        "boshuAvg30d": 196.0,
        "heikinAvg30d": 2.501
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 275,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.6,
        "boshuAvg30d": 196.0,
        "heikinAvg30d": 2.373
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 275,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.6,
        "boshuAvg30d": 196.0,
        "heikinAvg30d": 2.953
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 277,
        "ouatsu": 119.124,
        "saikou": 10,
        "heikin": 6.6,
        "boshuAvg30d": 205.5,
        "heikinAvg30d": 3.022
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 277,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.59,
        "boshuAvg30d": 205.5,
        "heikinAvg30d": 3.048
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 277,
        "ouatsu": 115.696,
        "saikou": 9.99,
        "heikin": 6.66,
        "boshuAvg30d": 205.5,
        "heikinAvg30d": 2.896
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 276,
        "ouatsu": 115.696,
        "saikou": 9.99,
        "heikin": 6.66,
        "boshuAvg30d": 204.5,
        "heikinAvg30d": 2.972
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 274,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.6,
        "boshuAvg30d": 203.0,
        "heikinAvg30d": 2.948
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 275,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.6,
        "boshuAvg30d": 203.5,
        "heikinAvg30d": 2.648
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 273,
        "ouatsu": 109.304,
        "saikou": 9.98,
        "heikin": 6.3,
        "boshuAvg30d": 202.0,
        "heikinAvg30d": 2.443
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 273,
        "ouatsu": 109.304,
        "saikou": 9.98,
        "heikin": 6.3,
        "boshuAvg30d": 202.0,
        "heikinAvg30d": 2.507
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.6,
        "boshuAvg30d": 202.0,
        "heikinAvg30d": 2.922
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 273,
        "ouatsu": 109.134,
        "saikou": 10,
        "heikin": 6.38,
        "boshuAvg30d": 202.0,
        "heikinAvg30d": 2.9
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 10,
        "heikin": 6.61,
        "boshuAvg30d": 202.0,
        "heikinAvg30d": 3.188
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 10,
        "heikin": 6.65,
        "boshuAvg30d": 202.0,
        "heikinAvg30d": 2.921
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 273,
        "ouatsu": 117.681,
        "saikou": 10,
        "heikin": 6.65,
        "boshuAvg30d": 201.5,
        "heikinAvg30d": 3.227
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 10,
        "heikin": 6.6,
        "boshuAvg30d": 201.5,
        "heikinAvg30d": 3.386
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 10,
        "heikin": 6.61,
        "boshuAvg30d": 201.5,
        "heikinAvg30d": 3.47
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.6,
        "boshuAvg30d": 201.5,
        "heikinAvg30d": 3.031
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 273,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.47,
        "boshuAvg30d": 197.2,
        "heikinAvg30d": 2.991
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 272,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.48,
        "boshuAvg30d": 196.2,
        "heikinAvg30d": 3.244
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 270,
        "ouatsu": 117.164,
        "saikou": 9.99,
        "heikin": 6.55,
        "boshuAvg30d": 194.2,
        "heikinAvg30d": 2.731
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 270,
        "ouatsu": 117.164,
        "saikou": 10,
        "heikin": 6.55,
        "boshuAvg30d": 194.2,
        "heikinAvg30d": 2.709
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 270,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.6,
        "boshuAvg30d": 194.2,
        "heikinAvg30d": 2.551
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 9.99,
        "heikin": 6.51,
        "boshuAvg30d": 193.2,
        "heikinAvg30d": 2.422
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 268,
        "ouatsu": 117.139,
        "saikou": 9.99,
        "heikin": 6.6,
        "boshuAvg30d": 192.2,
        "heikinAvg30d": 2.557
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 269,
        "ouatsu": 117.139,
        "saikou": 9.99,
        "heikin": 6.61,
        "boshuAvg30d": 192.7,
        "heikinAvg30d": 2.606
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 5.75,
        "heikin": 2.49,
        "boshuAvg30d": 192.7,
        "heikinAvg30d": 2.515
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 5.65,
        "heikin": 2.48,
        "boshuAvg30d": 192.7,
        "heikinAvg30d": 2.461
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 269,
        "ouatsu": 119.124,
        "saikou": 5.22,
        "heikin": 2.47,
        "boshuAvg30d": 192.7,
        "heikinAvg30d": 2.42
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 267,
        "ouatsu": 170.828,
        "saikou": 9.99,
        "heikin": 4.71,
        "boshuAvg30d": 191.2,
        "heikinAvg30d": 2.297
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 266,
        "ouatsu": 157.653,
        "saikou": 9.4,
        "heikin": 2.77,
        "boshuAvg30d": 189.7,
        "heikinAvg30d": 2.209
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 264,
        "ouatsu": 101.647,
        "saikou": 9.98,
        "heikin": 5.83,
        "boshuAvg30d": 187.7,
        "heikinAvg30d": 1.929
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 103,
        "ouatsu": 142.302,
        "saikou": 6.78,
        "heikin": 2.34,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 2.22
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 103,
        "ouatsu": 142.302,
        "saikou": 9.97,
        "heikin": 2.71,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 2.401
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 103,
        "ouatsu": 133.278,
        "saikou": 9.97,
        "heikin": 2.37,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 2.125
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 103,
        "ouatsu": 135.268,
        "saikou": 9.97,
        "heikin": 2.35,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 1.995
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 103,
        "ouatsu": 121.344,
        "saikou": 9.97,
        "heikin": 1.47,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 2.032
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 103,
        "ouatsu": 121.344,
        "saikou": 9.97,
        "heikin": 1.47,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 2.182
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 103,
        "ouatsu": 138.214,
        "saikou": 9.97,
        "heikin": 1.42,
        "boshuAvg30d": 135.3,
        "heikinAvg30d": 2.306
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 104,
        "ouatsu": 89.683,
        "saikou": 9.97,
        "heikin": 3.13,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.642
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 104,
        "ouatsu": 90.177,
        "saikou": 9.97,
        "heikin": 3.3,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.769
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 104,
        "ouatsu": 56.482,
        "saikou": 9.97,
        "heikin": 3.78,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.868
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 104,
        "ouatsu": 56.482,
        "saikou": 9.97,
        "heikin": 3.7,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.869
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 104,
        "ouatsu": 90.177,
        "saikou": 9.97,
        "heikin": 3.29,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 2.624
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 106,
        "ouatsu": 96.528,
        "saikou": 9.97,
        "heikin": 3.13,
        "boshuAvg30d": 137.7,
        "heikinAvg30d": 2.665
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 107,
        "ouatsu": 115.939,
        "saikou": 9.97,
        "heikin": 3.72,
        "boshuAvg30d": 138.7,
        "heikinAvg30d": 2.893
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 107,
        "ouatsu": 174.801,
        "saikou": 9.97,
        "heikin": 2.95,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 2.26
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 108,
        "ouatsu": 162.074,
        "saikou": 9.97,
        "heikin": 3.14,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.971
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 108,
        "ouatsu": 149.347,
        "saikou": 9.97,
        "heikin": 3.38,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 2.018
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 108,
        "ouatsu": 149.347,
        "saikou": 9.97,
        "heikin": 3.38,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.95
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 111,
        "ouatsu": 149.347,
        "saikou": 9.97,
        "heikin": 3.38,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.1
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 112,
        "ouatsu": 149.347,
        "saikou": 9.97,
        "heikin": 3.38,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 2.149
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 113,
        "ouatsu": 136.62,
        "saikou": 9.97,
        "heikin": 3.65,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 1.764
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 114,
        "ouatsu": 123.893,
        "saikou": 9.97,
        "heikin": 3.99,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.845
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 114,
        "ouatsu": 123.893,
        "saikou": 9.97,
        "heikin": 3.99,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.738
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 114,
        "ouatsu": 123.893,
        "saikou": 9.97,
        "heikin": 3.99,
        "boshuAvg30d": 146.3,
        "heikinAvg30d": 1.843
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 111,
        "ouatsu": 123.893,
        "saikou": 9.97,
        "heikin": 3.99,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 1.722
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 111,
        "ouatsu": 123.893,
        "saikou": 9.97,
        "heikin": 4.01,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 1.966
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 111,
        "ouatsu": 123.893,
        "saikou": 9.97,
        "heikin": 3.99,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 1.956
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 111,
        "ouatsu": 123.893,
        "saikou": 9.97,
        "heikin": 4.01,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.084
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 111,
        "ouatsu": 123.893,
        "saikou": 9.97,
        "heikin": 4.02,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.182
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 110,
        "ouatsu": 123.893,
        "saikou": 9.97,
        "heikin": 4.01,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.212
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 110,
        "ouatsu": 128.666,
        "saikou": 9.97,
        "heikin": 3.46,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.277
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 110,
        "ouatsu": 141.393,
        "saikou": 9.97,
        "heikin": 3.21,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.484
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 110,
        "ouatsu": 123.893,
        "saikou": 9.97,
        "heikin": 3.8,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 2.795
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 110,
        "ouatsu": 92.159,
        "saikou": 9.97,
        "heikin": 4.57,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 3.505
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 110,
        "ouatsu": 81.037,
        "saikou": 9.97,
        "heikin": 5.06,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 3.816
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 110,
        "ouatsu": 58.464,
        "saikou": 9.97,
        "heikin": 6.16,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 3.748
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 110,
        "ouatsu": 51.39,
        "saikou": 9.97,
        "heikin": 5.71,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 3.626
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 110,
        "ouatsu": 51.39,
        "saikou": 9.97,
        "heikin": 3.93,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 3.421
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 110,
        "ouatsu": 51.39,
        "saikou": 9.97,
        "heikin": 4.27,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 3.173
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 110,
        "ouatsu": 87.075,
        "saikou": 9.97,
        "heikin": 3.41,
        "boshuAvg30d": 142.3,
        "heikinAvg30d": 3.022
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 109,
        "ouatsu": 87.075,
        "saikou": 9.97,
        "heikin": 3.33,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 3.367
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 109,
        "ouatsu": 118.809,
        "saikou": 9.97,
        "heikin": 2.86,
        "boshuAvg30d": 141.3,
        "heikinAvg30d": 3.223
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 107,
        "ouatsu": 169.717,
        "saikou": 6.78,
        "heikin": 2,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 3.235
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 107,
        "ouatsu": 169.717,
        "saikou": 6.78,
        "heikin": 1.95,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 3.106
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 107,
        "ouatsu": 144.263,
        "saikou": 6.78,
        "heikin": 2.23,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 2.985
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 107,
        "ouatsu": 156.99,
        "saikou": 2.29,
        "heikin": 1.16,
        "boshuAvg30d": 139.3,
        "heikinAvg30d": 2.551
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 106,
        "ouatsu": 156.99,
        "saikou": 6.2,
        "heikin": 2.08,
        "boshuAvg30d": 138.3,
        "heikinAvg30d": 2.548
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 106,
        "ouatsu": 156.99,
        "saikou": 9.97,
        "heikin": 2.96,
        "boshuAvg30d": 138.3,
        "heikinAvg30d": 2.01
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.652
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.634
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.67,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.573
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.67,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.56
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.65,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.568
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.73,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.587
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 1.99,
        "heikin": 0.71,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.671
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 40,
        "ouatsu": 173.8,
        "saikou": 1.7,
        "heikin": 0.62,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.705
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 1.99,
        "heikin": 0.71,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.693
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 1.99,
        "heikin": 0.71,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.716
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 1.99,
        "heikin": 0.71,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.73
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 40,
        "ouatsu": 185.343,
        "saikou": 1.99,
        "heikin": 0.71,
        "boshuAvg30d": 40.5,
        "heikinAvg30d": 0.705
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 42,
        "ouatsu": 188.343,
        "saikou": 2.49,
        "heikin": 0.73,
        "boshuAvg30d": 43.1,
        "heikinAvg30d": 0.826
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 43,
        "ouatsu": 188.343,
        "saikou": 2.49,
        "heikin": 0.75,
        "boshuAvg30d": 43.5,
        "heikinAvg30d": 0.769
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 44,
        "ouatsu": 188.343,
        "saikou": 2.49,
        "heikin": 0.73,
        "boshuAvg30d": 44.5,
        "heikinAvg30d": 0.771
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 45,
        "ouatsu": 188.343,
        "saikou": 2.49,
        "heikin": 0.73,
        "boshuAvg30d": 45.5,
        "heikinAvg30d": 0.805
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 45,
        "ouatsu": 188.343,
        "saikou": 2.49,
        "heikin": 0.73,
        "boshuAvg30d": 45.5,
        "heikinAvg30d": 0.815
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 45,
        "ouatsu": 188.343,
        "saikou": 2.49,
        "heikin": 0.73,
        "boshuAvg30d": 45.5,
        "heikinAvg30d": 0.767
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 2.49,
        "heikin": 0.79,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.944
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 2.49,
        "heikin": 0.79,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 0.926
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 2.49,
        "heikin": 0.79,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 0.964
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 2.49,
        "heikin": 0.79,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.91
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 2.99,
        "heikin": 0.83,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.931
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 154.343,
        "saikou": 2.99,
        "heikin": 0.83,
        "boshuAvg30d": 49.0,
        "heikinAvg30d": 0.959
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 2.99,
        "heikin": 0.83,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 0.98
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 2.49,
        "heikin": 0.79,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 0.983
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 48,
        "ouatsu": 154.343,
        "saikou": 2.49,
        "heikin": 0.79,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 0.97
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 1.99,
        "heikin": 0.76,
        "boshuAvg30d": 48.1,
        "heikinAvg30d": 0.952
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 47,
        "ouatsu": 154.343,
        "saikou": 1.99,
        "heikin": 0.76,
        "boshuAvg30d": 47.5,
        "heikinAvg30d": 0.976
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 46,
        "ouatsu": 154.343,
        "saikou": 1.99,
        "heikin": 0.76,
        "boshuAvg30d": 47.1,
        "heikinAvg30d": 0.917
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 1.99,
        "heikin": 0.76,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 0.985
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 1.99,
        "heikin": 0.76,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 0.997
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 1.99,
        "heikin": 0.76,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 1.113
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 43,
        "ouatsu": 154.343,
        "saikou": 2.99,
        "heikin": 0.83,
        "boshuAvg30d": 43.5,
        "heikinAvg30d": 1.128
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 3.99,
        "heikin": 0.97,
        "boshuAvg30d": 43.1,
        "heikinAvg30d": 1.15
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 42,
        "ouatsu": 154.343,
        "saikou": 6.39,
        "heikin": 1.12,
        "boshuAvg30d": 42.5,
        "heikinAvg30d": 1.175
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 4.99,
        "heikin": 1.02,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 1.214
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 3.99,
        "heikin": 0.91,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 1.187
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 3.99,
        "heikin": 0.97,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 1.198
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 2.99,
        "heikin": 0.83,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 1.238
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 3.7,
        "heikin": 0.88,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 1.222
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 41,
        "ouatsu": 154.343,
        "saikou": 3.7,
        "heikin": 0.88,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 1.218
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.88,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.821
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.83,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.769
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.84,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.728
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.6,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.661
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 41,
        "ouatsu": 188.343,
        "saikou": 1.7,
        "heikin": 0.67,
        "boshuAvg30d": 41.5,
        "heikinAvg30d": 0.714
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 41.1,
        "heikinAvg30d": 0.716
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 168,
        "ouatsu": 83.452,
        "saikou": 6.24,
        "heikin": 3.28,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.796
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 168,
        "ouatsu": 84.486,
        "saikou": 6.99,
        "heikin": 2.85,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.305
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 168,
        "ouatsu": 82.502,
        "saikou": 6.99,
        "heikin": 1.99,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.081
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 168,
        "ouatsu": 82.5,
        "saikou": 6.99,
        "heikin": 2.05,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 4.939
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 167,
        "ouatsu": 134.65,
        "saikou": 6.25,
        "heikin": 0.99,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 5.072
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 167,
        "ouatsu": 134.65,
        "saikou": 7.5,
        "heikin": 1.08,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 5.326
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 168,
        "ouatsu": 156.235,
        "saikou": 8.21,
        "heikin": 1.02,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.651
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 168,
        "ouatsu": 175.175,
        "saikou": 7.3,
        "heikin": 1.03,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 6.187
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 168,
        "ouatsu": 174.12,
        "saikou": 7.89,
        "heikin": 1.06,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 6.301
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 168,
        "ouatsu": 176.083,
        "saikou": 7.89,
        "heikin": 1.02,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 6.433
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 168,
        "ouatsu": 179.003,
        "saikou": 7.89,
        "heikin": 1.07,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 6.598
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 168,
        "ouatsu": 175.703,
        "saikou": 7.74,
        "heikin": 1.04,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 6.507
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 171,
        "ouatsu": 105.703,
        "saikou": 6.96,
        "heikin": 1.65,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 6.377
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 172,
        "ouatsu": 172.703,
        "saikou": 7.05,
        "heikin": 4.26,
        "boshuAvg30d": 173.1,
        "heikinAvg30d": 6.279
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 173,
        "ouatsu": 105.703,
        "saikou": 7.47,
        "heikin": 1.8,
        "boshuAvg30d": 174.1,
        "heikinAvg30d": 5.276
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 174,
        "ouatsu": 105.703,
        "saikou": 7.74,
        "heikin": 1.84,
        "boshuAvg30d": 175.1,
        "heikinAvg30d": 4.547
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 174,
        "ouatsu": 105.703,
        "saikou": 8.12,
        "heikin": 1.88,
        "boshuAvg30d": 175.1,
        "heikinAvg30d": 4.295
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 174,
        "ouatsu": 102.703,
        "saikou": 6.77,
        "heikin": 1.62,
        "boshuAvg30d": 175.1,
        "heikinAvg30d": 4.035
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 177,
        "ouatsu": 103.731,
        "saikou": 8.53,
        "heikin": 2.28,
        "boshuAvg30d": 178.6,
        "heikinAvg30d": 3.809
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 178,
        "ouatsu": 103.731,
        "saikou": 8.59,
        "heikin": 4.15,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 3.485
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 179,
        "ouatsu": 89.081,
        "saikou": 8.59,
        "heikin": 4.73,
        "boshuAvg30d": 180.1,
        "heikinAvg30d": 3.401
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 180,
        "ouatsu": 83.631,
        "saikou": 8.59,
        "heikin": 5.13,
        "boshuAvg30d": 181.1,
        "heikinAvg30d": 3.343
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 180,
        "ouatsu": 76.855,
        "saikou": 8.75,
        "heikin": 4.18,
        "boshuAvg30d": 181.1,
        "heikinAvg30d": 3.065
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 180,
        "ouatsu": 78.337,
        "saikou": 8.8,
        "heikin": 4.02,
        "boshuAvg30d": 181.1,
        "heikinAvg30d": 3.074
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 179,
        "ouatsu": 76.514,
        "saikou": 8.83,
        "heikin": 4.38,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 3.222
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 179,
        "ouatsu": 70.46,
        "saikou": 9.8,
        "heikin": 3.07,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 3.25
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 179,
        "ouatsu": 75.256,
        "saikou": 9.8,
        "heikin": 3.05,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 3.629
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 178,
        "ouatsu": 151.869,
        "saikou": 9.8,
        "heikin": 5.68,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 4.186
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 178,
        "ouatsu": 151.869,
        "saikou": 9.8,
        "heikin": 5.59,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 4.263
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 176,
        "ouatsu": 84.865,
        "saikou": 8.65,
        "heikin": 3.29,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 4.928
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 173,
        "ouatsu": 86.855,
        "saikou": 8.91,
        "heikin": 3.32,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 5.412
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 173,
        "ouatsu": 95.717,
        "saikou": 5.95,
        "heikin": 3.5,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 5.782
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 173,
        "ouatsu": 175.717,
        "saikou": 10,
        "heikin": 5.96,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 6.42
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 172,
        "ouatsu": 172.717,
        "saikou": 10,
        "heikin": 6.61,
        "boshuAvg30d": 173.1,
        "heikinAvg30d": 6.912
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 172,
        "ouatsu": 151.015,
        "saikou": 10,
        "heikin": 7.25,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 7.006
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 171,
        "ouatsu": 216.276,
        "saikou": 10,
        "heikin": 8.06,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 7.086
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 170,
        "ouatsu": 225.476,
        "saikou": 10,
        "heikin": 7.95,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 7.093
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 170,
        "ouatsu": 219.926,
        "saikou": 9.86,
        "heikin": 7.79,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.96
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 170,
        "ouatsu": 219.926,
        "saikou": 9.8,
        "heikin": 7.86,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.575
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 170,
        "ouatsu": 221.915,
        "saikou": 9.8,
        "heikin": 7.13,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.338
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 169,
        "ouatsu": 221.754,
        "saikou": 9.69,
        "heikin": 7.53,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.445
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 169,
        "ouatsu": 234.284,
        "saikou": 10,
        "heikin": 7.07,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.272
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 170,
        "ouatsu": 233.744,
        "saikou": 8.19,
        "heikin": 7.06,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 6.293
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 171,
        "ouatsu": 227.204,
        "saikou": 7.21,
        "heikin": 5.76,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 5.979
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 171,
        "ouatsu": 227.204,
        "saikou": 8,
        "heikin": 6.31,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 6.15
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 171,
        "ouatsu": 230.014,
        "saikou": 6.84,
        "heikin": 6.47,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 6.15
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 170,
        "ouatsu": 239.654,
        "saikou": 6.68,
        "heikin": 5.5,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 6.233
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 170,
        "ouatsu": 167.63,
        "saikou": 7.05,
        "heikin": 4.21,
        "boshuAvg30d": 170.5,
        "heikinAvg30d": 5.509
      }
    ]
  }
};
