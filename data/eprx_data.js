// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/23〜2026/10/22）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-23",
  "fetchedAt": "2026-10-23",
  "avgWindowLabel": "過去30日平均（2026/09/23〜2026/10/22）",
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
      "ouatsu": 1717.017,
      "saikou": 8.33,
      "heikin": 2.76,
      "boshuAvg30d": 1107.1,
      "heikinAvg30d": 3.025
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1024,
      "ouatsu": 1748.953,
      "saikou": 8.89,
      "heikin": 3.04,
      "boshuAvg30d": 1107.1,
      "heikinAvg30d": 2.914
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1024,
      "ouatsu": 1765.981,
      "saikou": 9.91,
      "heikin": 2.79,
      "boshuAvg30d": 1107.1,
      "heikinAvg30d": 2.842
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1024,
      "ouatsu": 1855.091,
      "saikou": 9.91,
      "heikin": 2.44,
      "boshuAvg30d": 1107.1,
      "heikinAvg30d": 2.816
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1021,
      "ouatsu": 1797.189,
      "saikou": 8.89,
      "heikin": 2.61,
      "boshuAvg30d": 1103.5,
      "heikinAvg30d": 2.84
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1020,
      "ouatsu": 1944.687,
      "saikou": 8.24,
      "heikin": 2.6,
      "boshuAvg30d": 1102.5,
      "heikinAvg30d": 2.873
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1017,
      "ouatsu": 1925.616,
      "saikou": 8.21,
      "heikin": 2.74,
      "boshuAvg30d": 1114.7,
      "heikinAvg30d": 3.054
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1019,
      "ouatsu": 1888.263,
      "saikou": 8.7,
      "heikin": 2.87,
      "boshuAvg30d": 1116.4,
      "heikinAvg30d": 3.252
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1021,
      "ouatsu": 1847.686,
      "saikou": 8.89,
      "heikin": 3.25,
      "boshuAvg30d": 1118.7,
      "heikinAvg30d": 3.309
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1022,
      "ouatsu": 1938.325,
      "saikou": 8.87,
      "heikin": 3.15,
      "boshuAvg30d": 1119.4,
      "heikinAvg30d": 3.516
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1022,
      "ouatsu": 1872.604,
      "saikou": 9.66,
      "heikin": 3.19,
      "boshuAvg30d": 1119.4,
      "heikinAvg30d": 3.553
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1022,
      "ouatsu": 1803.933,
      "saikou": 9.25,
      "heikin": 3.58,
      "boshuAvg30d": 1119.4,
      "heikinAvg30d": 3.564
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1082,
      "ouatsu": 1752.03,
      "saikou": 9.36,
      "heikin": 3.3,
      "boshuAvg30d": 1181.0,
      "heikinAvg30d": 3.601
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1105,
      "ouatsu": 1789.963,
      "saikou": 8.98,
      "heikin": 3.19,
      "boshuAvg30d": 1203.5,
      "heikinAvg30d": 3.442
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1126,
      "ouatsu": 1832.303,
      "saikou": 8.89,
      "heikin": 3.29,
      "boshuAvg30d": 1225.0,
      "heikinAvg30d": 3.001
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1143,
      "ouatsu": 1877.021,
      "saikou": 10,
      "heikin": 3.38,
      "boshuAvg30d": 1242.3,
      "heikinAvg30d": 2.788
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1143,
      "ouatsu": 1897.25,
      "saikou": 10,
      "heikin": 2.36,
      "boshuAvg30d": 1242.5,
      "heikinAvg30d": 2.996
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1143,
      "ouatsu": 1827.862,
      "saikou": 10,
      "heikin": 2.69,
      "boshuAvg30d": 1242.5,
      "heikinAvg30d": 2.981
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1075,
      "ouatsu": 1771.01,
      "saikou": 8.01,
      "heikin": 2.46,
      "boshuAvg30d": 1207.5,
      "heikinAvg30d": 3.218
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1078,
      "ouatsu": 1815.916,
      "saikou": 8.16,
      "heikin": 2.42,
      "boshuAvg30d": 1210.8,
      "heikinAvg30d": 3.241
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1083,
      "ouatsu": 1767.271,
      "saikou": 10,
      "heikin": 2.51,
      "boshuAvg30d": 1214.1,
      "heikinAvg30d": 3.296
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1083,
      "ouatsu": 1750.483,
      "saikou": 10,
      "heikin": 2.97,
      "boshuAvg30d": 1214.1,
      "heikinAvg30d": 3.225
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1080,
      "ouatsu": 1749.983,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1211.1,
      "heikinAvg30d": 3.211
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1079,
      "ouatsu": 1728.595,
      "saikou": 10,
      "heikin": 3.21,
      "boshuAvg30d": 1210.1,
      "heikinAvg30d": 3.163
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1059,
      "ouatsu": 1672.817,
      "saikou": 10,
      "heikin": 2.81,
      "boshuAvg30d": 1193.2,
      "heikinAvg30d": 3.018
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1059,
      "ouatsu": 1701.211,
      "saikou": 10,
      "heikin": 2.37,
      "boshuAvg30d": 1193.2,
      "heikinAvg30d": 3.032
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1059,
      "ouatsu": 1688.417,
      "saikou": 10,
      "heikin": 2.79,
      "boshuAvg30d": 1193.2,
      "heikinAvg30d": 3.141
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1057,
      "ouatsu": 1703.536,
      "saikou": 10,
      "heikin": 3.2,
      "boshuAvg30d": 1190.5,
      "heikinAvg30d": 3.253
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1054,
      "ouatsu": 1668.065,
      "saikou": 10,
      "heikin": 3.4,
      "boshuAvg30d": 1186.9,
      "heikinAvg30d": 3.286
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1048,
      "ouatsu": 1656.032,
      "saikou": 10,
      "heikin": 3.39,
      "boshuAvg30d": 1180.7,
      "heikinAvg30d": 3.306
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1114,
      "ouatsu": 1628.182,
      "saikou": 10,
      "heikin": 3.6,
      "boshuAvg30d": 1218.5,
      "heikinAvg30d": 3.257
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1114,
      "ouatsu": 1655.873,
      "saikou": 10,
      "heikin": 3.4,
      "boshuAvg30d": 1218.5,
      "heikinAvg30d": 3.487
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1115,
      "ouatsu": 1712.103,
      "saikou": 10,
      "heikin": 3.85,
      "boshuAvg30d": 1219.2,
      "heikinAvg30d": 3.917
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1114,
      "ouatsu": 1553.773,
      "saikou": 10,
      "heikin": 3.82,
      "boshuAvg30d": 1217.9,
      "heikinAvg30d": 4.264
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1112,
      "ouatsu": 1640.979,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1215.1,
      "heikinAvg30d": 4.266
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1107,
      "ouatsu": 1666.26,
      "saikou": 10,
      "heikin": 3.17,
      "boshuAvg30d": 1210.0,
      "heikinAvg30d": 4.349
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1102,
      "ouatsu": 1793.304,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1204.2,
      "heikinAvg30d": 4.211
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1102,
      "ouatsu": 1773.016,
      "saikou": 10,
      "heikin": 3.19,
      "boshuAvg30d": 1204.2,
      "heikinAvg30d": 4.131
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1102,
      "ouatsu": 1703.301,
      "saikou": 10,
      "heikin": 3.34,
      "boshuAvg30d": 1204.4,
      "heikinAvg30d": 3.985
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1101,
      "ouatsu": 1755.083,
      "saikou": 9.69,
      "heikin": 2.68,
      "boshuAvg30d": 1203.4,
      "heikinAvg30d": 3.755
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1093,
      "ouatsu": 1980.839,
      "saikou": 9.76,
      "heikin": 2.93,
      "boshuAvg30d": 1196.2,
      "heikinAvg30d": 3.682
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1093,
      "ouatsu": 1909.605,
      "saikou": 9.69,
      "heikin": 2.88,
      "boshuAvg30d": 1195.2,
      "heikinAvg30d": 3.615
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 1003,
      "ouatsu": 1892.278,
      "saikou": 8.99,
      "heikin": 2.89,
      "boshuAvg30d": 1115.8,
      "heikinAvg30d": 3.478
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 1006,
      "ouatsu": 1889.546,
      "saikou": 8.61,
      "heikin": 2.69,
      "boshuAvg30d": 1118.8,
      "heikinAvg30d": 3.537
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1007,
      "ouatsu": 1696.064,
      "saikou": 9.88,
      "heikin": 3.03,
      "boshuAvg30d": 1120.2,
      "heikinAvg30d": 3.45
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 1002,
      "ouatsu": 1854.971,
      "saikou": 9.47,
      "heikin": 2.44,
      "boshuAvg30d": 1114.7,
      "heikinAvg30d": 3.348
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 993,
      "ouatsu": 1703.338,
      "saikou": 9.66,
      "heikin": 2.59,
      "boshuAvg30d": 1106.2,
      "heikinAvg30d": 3.4
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 986,
      "ouatsu": 1706.638,
      "saikou": 8.94,
      "heikin": 2.75,
      "boshuAvg30d": 1098.9,
      "heikinAvg30d": 3.098
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
        "ouatsu": 129.418,
        "saikou": 7.86,
        "heikin": 1.99,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 3.725
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 132.418,
        "saikou": 8.89,
        "heikin": 2.79,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 3.578
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 150.418,
        "saikou": 9.91,
        "heikin": 3.43,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 3.581
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 190.418,
        "saikou": 9.91,
        "heikin": 2.43,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 3.384
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 164.418,
        "saikou": 8.89,
        "heikin": 2.55,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 3.823
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 229.718,
        "saikou": 1.38,
        "heikin": 1.24,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 3.549
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 142.418,
        "saikou": 5.45,
        "heikin": 1.8,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 3.864
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 188.75,
        "saikou": 1.38,
        "heikin": 1.24,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 3.786
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 140.45,
        "saikou": 8.89,
        "heikin": 1.72,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 3.921
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 190.718,
        "saikou": 1.38,
        "heikin": 1.24,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 3.656
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 132.418,
        "saikou": 9.66,
        "heikin": 1.74,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 3.852
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 142.418,
        "saikou": 8.89,
        "heikin": 1.7,
        "boshuAvg30d": 52.0,
        "heikinAvg30d": 3.987
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 195.528,
        "saikou": 4.99,
        "heikin": 1.57,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 3.72
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 172.178,
        "saikou": 4.99,
        "heikin": 1.68,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 3.756
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 129.418,
        "saikou": 8.89,
        "heikin": 2.28,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 3.042
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 181.968,
        "saikou": 9.58,
        "heikin": 2.61,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 3.008
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 174.938,
        "saikou": 1.38,
        "heikin": 1.24,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 3.13
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 129.418,
        "saikou": 7.86,
        "heikin": 2.42,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 2.649
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 129.418,
        "saikou": 7.86,
        "heikin": 1.72,
        "boshuAvg30d": 55.3,
        "heikinAvg30d": 2.879
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 177.718,
        "saikou": 1.5,
        "heikin": 1.24,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 2.755
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 127.918,
        "saikou": 9.56,
        "heikin": 1.98,
        "boshuAvg30d": 55.5,
        "heikinAvg30d": 3.192
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 176.218,
        "saikou": 1.5,
        "heikin": 1.24,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 2.413
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 127.918,
        "saikou": 9.66,
        "heikin": 3.21,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 3.206
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 127.918,
        "saikou": 9.55,
        "heikin": 3.18,
        "boshuAvg30d": 56.3,
        "heikinAvg30d": 3.064
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 176.218,
        "saikou": 9.66,
        "heikin": 2.64,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 2.938
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 176.218,
        "saikou": 9.66,
        "heikin": 2.64,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 3.024
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 114.418,
        "saikou": 8.89,
        "heikin": 1.94,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 2.62
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 162.718,
        "saikou": 1.38,
        "heikin": 1.24,
        "boshuAvg30d": 54.5,
        "heikinAvg30d": 3.106
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 114.418,
        "saikou": 8.89,
        "heikin": 1.78,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 3.216
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 167.168,
        "saikou": 1.38,
        "heikin": 1.08,
        "boshuAvg30d": 53.5,
        "heikinAvg30d": 3.853
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 124.418,
        "saikou": 1.39,
        "heikin": 1.37,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 2.894
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 175.348,
        "saikou": 1.38,
        "heikin": 1.24,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 4.108
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 198.418,
        "saikou": 4.05,
        "heikin": 1.67,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 5.051
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 151.418,
        "saikou": 4.05,
        "heikin": 1.97,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 5.334
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 196.418,
        "saikou": 1.38,
        "heikin": 1.22,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 5.051
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 186.418,
        "saikou": 1.38,
        "heikin": 1.37,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 5.153
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 256.418,
        "saikou": 1.38,
        "heikin": 1.24,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 4.766
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 256.418,
        "saikou": 1.38,
        "heikin": 1.24,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 4.898
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 209.45,
        "saikou": 1.38,
        "heikin": 1.38,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 4.595
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 254.45,
        "saikou": 1.38,
        "heikin": 1.25,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 4.561
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 218.418,
        "saikou": 1.38,
        "heikin": 1.37,
        "boshuAvg30d": 50.5,
        "heikinAvg30d": 4.305
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 184.418,
        "saikou": 1.38,
        "heikin": 1.24,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 4.072
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 142.418,
        "saikou": 1.39,
        "heikin": 1.37,
        "boshuAvg30d": 51.3,
        "heikinAvg30d": 4.177
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 177.418,
        "saikou": 1.38,
        "heikin": 1.24,
        "boshuAvg30d": 52.3,
        "heikinAvg30d": 4.382
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 132.418,
        "saikou": 8.89,
        "heikin": 1.7,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 4.376
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 177.418,
        "saikou": 1.38,
        "heikin": 1.24,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 4.134
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 155.418,
        "saikou": 9.66,
        "heikin": 1.63,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 4.423
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 132.418,
        "saikou": 8.89,
        "heikin": 2.36,
        "boshuAvg30d": 53.3,
        "heikinAvg30d": 3.86
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 68.392,
        "saikou": 7.54,
        "heikin": 5.8,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 5.773
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 68.392,
        "saikou": 7.24,
        "heikin": 5.38,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 6.028
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 86.92,
        "saikou": 7.27,
        "heikin": 5.16,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 6.051
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 90.23,
        "saikou": 7.25,
        "heikin": 5.46,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 6.069
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 84.934,
        "saikou": 7.24,
        "heikin": 5.55,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 6.142
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 88.184,
        "saikou": 7.14,
        "heikin": 5.5,
        "boshuAvg30d": 118.9,
        "heikinAvg30d": 6.175
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 92.002,
        "saikou": 7.27,
        "heikin": 5.47,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 6.246
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 92.13,
        "saikou": 7.14,
        "heikin": 5.42,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 6.158
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 96.128,
        "saikou": 7.08,
        "heikin": 5.34,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 6.046
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 106.798,
        "saikou": 7.08,
        "heikin": 5.14,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 6.02
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 106.798,
        "saikou": 7.02,
        "heikin": 5.24,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 6.284
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 106.798,
        "saikou": 6.2,
        "heikin": 4.85,
        "boshuAvg30d": 132.2,
        "heikinAvg30d": 6.38
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 94.798,
        "saikou": 6.01,
        "heikin": 5.61,
        "boshuAvg30d": 139.7,
        "heikinAvg30d": 6.642
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 82.798,
        "saikou": 7.14,
        "heikin": 6.04,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 6.813
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 94.798,
        "saikou": 8.88,
        "heikin": 7.73,
        "boshuAvg30d": 148.5,
        "heikinAvg30d": 7.125
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 130.798,
        "saikou": 10,
        "heikin": 8.02,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 7.314
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 130.798,
        "saikou": 10,
        "heikin": 7.72,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 7.719
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 130.798,
        "saikou": 10,
        "heikin": 7.83,
        "boshuAvg30d": 151.1,
        "heikinAvg30d": 7.756
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 120.794,
        "saikou": 8.01,
        "heikin": 5.96,
        "boshuAvg30d": 105.6,
        "heikinAvg30d": 7.583
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 120.794,
        "saikou": 8.16,
        "heikin": 6.32,
        "boshuAvg30d": 106.1,
        "heikinAvg30d": 7.778
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 117.825,
        "saikou": 10,
        "heikin": 7.13,
        "boshuAvg30d": 105.5,
        "heikinAvg30d": 7.81
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 117.825,
        "saikou": 10,
        "heikin": 7.16,
        "boshuAvg30d": 105.8,
        "heikinAvg30d": 7.923
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 120.444,
        "saikou": 10,
        "heikin": 7.02,
        "boshuAvg30d": 106.5,
        "heikinAvg30d": 7.996
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 119.444,
        "saikou": 10,
        "heikin": 7.13,
        "boshuAvg30d": 106.5,
        "heikinAvg30d": 7.945
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 118.477,
        "saikou": 10,
        "heikin": 7.5,
        "boshuAvg30d": 103.9,
        "heikinAvg30d": 7.818
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 118.798,
        "saikou": 10,
        "heikin": 7.46,
        "boshuAvg30d": 103.9,
        "heikinAvg30d": 7.712
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 120.794,
        "saikou": 10,
        "heikin": 6.92,
        "boshuAvg30d": 103.9,
        "heikinAvg30d": 7.416
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 108.794,
        "saikou": 10,
        "heikin": 8.21,
        "boshuAvg30d": 102.3,
        "heikinAvg30d": 7.029
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 108.794,
        "saikou": 10,
        "heikin": 7.75,
        "boshuAvg30d": 101.8,
        "heikinAvg30d": 7.297
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 108.794,
        "saikou": 8.87,
        "heikin": 5.6,
        "boshuAvg30d": 99.0,
        "heikinAvg30d": 6.338
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 84.794,
        "saikou": 6.98,
        "heikin": 6.98,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 6.349
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 84.794,
        "saikou": 5.31,
        "heikin": 3.72,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 5.55
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 84.794,
        "saikou": 6.08,
        "heikin": 3.62,
        "boshuAvg30d": 149.3,
        "heikinAvg30d": 5.467
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 84.794,
        "saikou": 9.97,
        "heikin": 3.82,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 5.409
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 84.794,
        "saikou": 9.69,
        "heikin": 4.08,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 5.271
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 84.794,
        "saikou": 9.9,
        "heikin": 4.08,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 4.942
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 82.798,
        "saikou": 5.54,
        "heikin": 3.61,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 5.044
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 82.798,
        "saikou": 9.9,
        "heikin": 3.61,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 4.664
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 70.798,
        "saikou": 9.69,
        "heikin": 3.56,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 4.723
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 70.798,
        "saikou": 9.69,
        "heikin": 4.76,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 4.936
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 79.829,
        "saikou": 4.49,
        "heikin": 3.44,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 4.908
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 78.909,
        "saikou": 9.69,
        "heikin": 4.32,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 5.016
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 82.228,
        "saikou": 7.03,
        "heikin": 5.18,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 5.246
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 93.878,
        "saikou": 7.08,
        "heikin": 4.35,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 5.053
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 58.228,
        "saikou": 2.99,
        "heikin": 2.87,
        "boshuAvg30d": 66.7,
        "heikinAvg30d": 5.246
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 69.878,
        "saikou": 4.71,
        "heikin": 3.44,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 5.185
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 92.878,
        "saikou": 6.01,
        "heikin": 3.87,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 5.363
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 94.228,
        "saikou": 7.14,
        "heikin": 4.55,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 5.686
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 502.202,
        "saikou": 3.19,
        "heikin": 2.68,
        "boshuAvg30d": 303.5,
        "heikinAvg30d": 3.988
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 510.008,
        "saikou": 5.79,
        "heikin": 2.85,
        "boshuAvg30d": 303.5,
        "heikinAvg30d": 4.01
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 529.198,
        "saikou": 5.96,
        "heikin": 2.97,
        "boshuAvg30d": 303.5,
        "heikinAvg30d": 3.722
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 541.602,
        "saikou": 5.81,
        "heikin": 2.14,
        "boshuAvg30d": 303.5,
        "heikinAvg30d": 3.838
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 513.911,
        "saikou": 5.82,
        "heikin": 2.31,
        "boshuAvg30d": 302.2,
        "heikinAvg30d": 3.792
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 513.911,
        "saikou": 5.85,
        "heikin": 2.38,
        "boshuAvg30d": 301.5,
        "heikinAvg30d": 3.686
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 543.021,
        "saikou": 5.78,
        "heikin": 2.22,
        "boshuAvg30d": 299.7,
        "heikinAvg30d": 3.859
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 539.983,
        "saikou": 5.79,
        "heikin": 2.33,
        "boshuAvg30d": 301.5,
        "heikinAvg30d": 3.941
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 545.621,
        "saikou": 5.79,
        "heikin": 2.39,
        "boshuAvg30d": 301.7,
        "heikinAvg30d": 3.978
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 568.855,
        "saikou": 5.78,
        "heikin": 2.29,
        "boshuAvg30d": 302.5,
        "heikinAvg30d": 4.224
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 583.094,
        "saikou": 5.78,
        "heikin": 2.3,
        "boshuAvg30d": 302.5,
        "heikinAvg30d": 4.075
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 496.481,
        "saikou": 7.09,
        "heikin": 3.75,
        "boshuAvg30d": 302.5,
        "heikinAvg30d": 4.296
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 507.367,
        "saikou": 6.56,
        "heikin": 3.64,
        "boshuAvg30d": 322.0,
        "heikinAvg30d": 4.262
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 576.9,
        "saikou": 5.8,
        "heikin": 3.39,
        "boshuAvg30d": 330.0,
        "heikinAvg30d": 4.554
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 554.97,
        "saikou": 5.73,
        "heikin": 3.29,
        "boshuAvg30d": 335.0,
        "heikinAvg30d": 4.021
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 523.842,
        "saikou": 5.76,
        "heikin": 3.61,
        "boshuAvg30d": 340.0,
        "heikinAvg30d": 3.678
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 589.256,
        "saikou": 4.39,
        "heikin": 1.89,
        "boshuAvg30d": 340.0,
        "heikinAvg30d": 3.931
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 538.834,
        "saikou": 4.6,
        "heikin": 2.41,
        "boshuAvg30d": 340.0,
        "heikinAvg30d": 3.866
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 537.314,
        "saikou": 4.79,
        "heikin": 2.57,
        "boshuAvg30d": 334.7,
        "heikinAvg30d": 4.209
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 537.314,
        "saikou": 4.79,
        "heikin": 2.63,
        "boshuAvg30d": 334.7,
        "heikinAvg30d": 4.311
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 518.881,
        "saikou": 6.05,
        "heikin": 2.46,
        "boshuAvg30d": 335.1,
        "heikinAvg30d": 4.255
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 515.913,
        "saikou": 10,
        "heikin": 3.91,
        "boshuAvg30d": 334.1,
        "heikinAvg30d": 4.099
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 535.978,
        "saikou": 10,
        "heikin": 4.13,
        "boshuAvg30d": 331.8,
        "heikinAvg30d": 4.055
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 533.078,
        "saikou": 10,
        "heikin": 3.86,
        "boshuAvg30d": 331.8,
        "heikinAvg30d": 3.963
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 474.181,
        "saikou": 10,
        "heikin": 3.27,
        "boshuAvg30d": 329.0,
        "heikinAvg30d": 3.793
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 521.348,
        "saikou": 4.79,
        "heikin": 1.75,
        "boshuAvg30d": 329.0,
        "heikinAvg30d": 3.745
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 601.802,
        "saikou": 6.12,
        "heikin": 2.46,
        "boshuAvg30d": 329.0,
        "heikinAvg30d": 3.906
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 550.84,
        "saikou": 5.63,
        "heikin": 2.7,
        "boshuAvg30d": 329.1,
        "heikinAvg30d": 4.039
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 614.974,
        "saikou": 3.08,
        "heikin": 2.04,
        "boshuAvg30d": 328.1,
        "heikinAvg30d": 4.027
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 534.632,
        "saikou": 2.46,
        "heikin": 1.96,
        "boshuAvg30d": 327.3,
        "heikinAvg30d": 3.755
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 521.304,
        "saikou": 2.89,
        "heikin": 2.31,
        "boshuAvg30d": 325.6,
        "heikinAvg30d": 3.611
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 489.176,
        "saikou": 3.92,
        "heikin": 2.16,
        "boshuAvg30d": 325.6,
        "heikinAvg30d": 3.576
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 481.197,
        "saikou": 5.71,
        "heikin": 1.95,
        "boshuAvg30d": 325.6,
        "heikinAvg30d": 3.83
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 396.231,
        "saikou": 5.23,
        "heikin": 2.29,
        "boshuAvg30d": 325.5,
        "heikinAvg30d": 3.966
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 282,
        "ouatsu": 413.07,
        "saikou": 2.96,
        "heikin": 2.04,
        "boshuAvg30d": 325.3,
        "heikinAvg30d": 3.805
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 282,
        "ouatsu": 409.263,
        "saikou": 2.79,
        "heikin": 1.94,
        "boshuAvg30d": 324.9,
        "heikinAvg30d": 3.795
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 285,
        "ouatsu": 470.266,
        "saikou": 6.61,
        "heikin": 2.99,
        "boshuAvg30d": 327.6,
        "heikinAvg30d": 3.966
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 285,
        "ouatsu": 414.223,
        "saikou": 2.79,
        "heikin": 1.91,
        "boshuAvg30d": 327.6,
        "heikinAvg30d": 3.836
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 285,
        "ouatsu": 417.586,
        "saikou": 6.33,
        "heikin": 2.71,
        "boshuAvg30d": 327.9,
        "heikinAvg30d": 3.86
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 285,
        "ouatsu": 399.885,
        "saikou": 5.63,
        "heikin": 2.51,
        "boshuAvg30d": 327.9,
        "heikinAvg30d": 3.618
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 283,
        "ouatsu": 609.164,
        "saikou": 3.45,
        "heikin": 1.96,
        "boshuAvg30d": 325.9,
        "heikinAvg30d": 3.66
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 283,
        "ouatsu": 573.834,
        "saikou": 5.66,
        "heikin": 2.18,
        "boshuAvg30d": 325.9,
        "heikinAvg30d": 3.848
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 283,
        "ouatsu": 601.24,
        "saikou": 5.54,
        "heikin": 2.16,
        "boshuAvg30d": 325.6,
        "heikinAvg30d": 3.51
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 283,
        "ouatsu": 540.658,
        "saikou": 2.79,
        "heikin": 1.58,
        "boshuAvg30d": 325.6,
        "heikinAvg30d": 3.612
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 406.934,
        "saikou": 2.79,
        "heikin": 2.06,
        "boshuAvg30d": 326.0,
        "heikinAvg30d": 3.152
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 281,
        "ouatsu": 507.259,
        "saikou": 2.79,
        "heikin": 1.51,
        "boshuAvg30d": 324.0,
        "heikinAvg30d": 3.51
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 279,
        "ouatsu": 394.526,
        "saikou": 2.79,
        "heikin": 1.45,
        "boshuAvg30d": 322.0,
        "heikinAvg30d": 3.953
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 278,
        "ouatsu": 398.995,
        "saikou": 2.79,
        "heikin": 2.01,
        "boshuAvg30d": 321.0,
        "heikinAvg30d": 4.006
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 59,
        "ouatsu": 258.071,
        "saikou": 1.94,
        "heikin": 1.21,
        "boshuAvg30d": 99.1,
        "heikinAvg30d": 1.835
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 59,
        "ouatsu": 281.339,
        "saikou": 1.5,
        "heikin": 1.13,
        "boshuAvg30d": 99.1,
        "heikinAvg30d": 1.619
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 59,
        "ouatsu": 261.134,
        "saikou": 1.4,
        "heikin": 1.14,
        "boshuAvg30d": 99.1,
        "heikinAvg30d": 1.625
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 306.732,
        "saikou": 1.5,
        "heikin": 1.34,
        "boshuAvg30d": 99.1,
        "heikinAvg30d": 1.663
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 58,
        "ouatsu": 292.817,
        "saikou": 1.4,
        "heikin": 1.33,
        "boshuAvg30d": 98.1,
        "heikinAvg30d": 1.577
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 290.833,
        "saikou": 1.75,
        "heikin": 1.2,
        "boshuAvg30d": 98.1,
        "heikinAvg30d": 1.566
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 305.73,
        "saikou": 1.94,
        "heikin": 1.21,
        "boshuAvg30d": 97.3,
        "heikinAvg30d": 1.491
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 291.242,
        "saikou": 2.05,
        "heikin": 1.11,
        "boshuAvg30d": 97.3,
        "heikinAvg30d": 1.617
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 58,
        "ouatsu": 294.958,
        "saikou": 2.15,
        "heikin": 1.16,
        "boshuAvg30d": 98.1,
        "heikinAvg30d": 1.638
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 58,
        "ouatsu": 302.225,
        "saikou": 3.22,
        "heikin": 1.16,
        "boshuAvg30d": 98.1,
        "heikinAvg30d": 1.62
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 58,
        "ouatsu": 304.215,
        "saikou": 3.5,
        "heikin": 1.25,
        "boshuAvg30d": 98.1,
        "heikinAvg30d": 1.675
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 58,
        "ouatsu": 300.731,
        "saikou": 1.51,
        "heikin": 1.28,
        "boshuAvg30d": 98.1,
        "heikinAvg30d": 1.63
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 304.215,
        "saikou": 1.9,
        "heikin": 1.38,
        "boshuAvg30d": 107.3,
        "heikinAvg30d": 1.877
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 71,
        "ouatsu": 304.215,
        "saikou": 1.9,
        "heikin": 1.39,
        "boshuAvg30d": 111.1,
        "heikinAvg30d": 1.937
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 74,
        "ouatsu": 302.231,
        "saikou": 4.51,
        "heikin": 2.13,
        "boshuAvg30d": 114.1,
        "heikinAvg30d": 2.042
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 76,
        "ouatsu": 302.715,
        "saikou": 4.62,
        "heikin": 2.07,
        "boshuAvg30d": 116.1,
        "heikinAvg30d": 2.029
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 76,
        "ouatsu": 304.705,
        "saikou": 3.67,
        "heikin": 1.84,
        "boshuAvg30d": 116.1,
        "heikinAvg30d": 2.166
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 76,
        "ouatsu": 302.721,
        "saikou": 3.64,
        "heikin": 2.24,
        "boshuAvg30d": 116.1,
        "heikinAvg30d": 2.3
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 81,
        "ouatsu": 308.677,
        "saikou": 4.98,
        "heikin": 2.64,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 2.742
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 81,
        "ouatsu": 302.361,
        "saikou": 7.35,
        "heikin": 3.21,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 2.746
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 81,
        "ouatsu": 267.474,
        "saikou": 5.55,
        "heikin": 3.23,
        "boshuAvg30d": 121.1,
        "heikinAvg30d": 2.992
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 81,
        "ouatsu": 269.454,
        "saikou": 6.58,
        "heikin": 3.08,
        "boshuAvg30d": 120.8,
        "heikinAvg30d": 3.022
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 80,
        "ouatsu": 275.37,
        "saikou": 9.78,
        "heikin": 3.46,
        "boshuAvg30d": 119.8,
        "heikinAvg30d": 2.881
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 79,
        "ouatsu": 274.385,
        "saikou": 9.53,
        "heikin": 3.41,
        "boshuAvg30d": 118.8,
        "heikinAvg30d": 2.932
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 75,
        "ouatsu": 225.17,
        "saikou": 9.39,
        "heikin": 3.54,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 2.867
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 75,
        "ouatsu": 235.824,
        "saikou": 4.28,
        "heikin": 2.93,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 2.89
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 75,
        "ouatsu": 275.741,
        "saikou": 3.77,
        "heikin": 2.07,
        "boshuAvg30d": 115.1,
        "heikinAvg30d": 2.797
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 74,
        "ouatsu": 277.725,
        "saikou": 5.52,
        "heikin": 3.67,
        "boshuAvg30d": 114.3,
        "heikinAvg30d": 2.755
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 74,
        "ouatsu": 237.082,
        "saikou": 8.3,
        "heikin": 3.39,
        "boshuAvg30d": 114.1,
        "heikinAvg30d": 2.977
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 74,
        "ouatsu": 235.098,
        "saikou": 5.77,
        "heikin": 3.09,
        "boshuAvg30d": 114.1,
        "heikinAvg30d": 2.95
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 72,
        "ouatsu": 270.196,
        "saikou": 6.11,
        "heikin": 3.14,
        "boshuAvg30d": 112.3,
        "heikinAvg30d": 2.685
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 72,
        "ouatsu": 289.795,
        "saikou": 8.3,
        "heikin": 3.84,
        "boshuAvg30d": 112.3,
        "heikinAvg30d": 2.764
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 72,
        "ouatsu": 348.991,
        "saikou": 5.61,
        "heikin": 3.61,
        "boshuAvg30d": 112.3,
        "heikinAvg30d": 2.686
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 72,
        "ouatsu": 348.577,
        "saikou": 5.15,
        "heikin": 3.41,
        "boshuAvg30d": 112.3,
        "heikinAvg30d": 2.826
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 72,
        "ouatsu": 374.107,
        "saikou": 5.66,
        "heikin": 3.1,
        "boshuAvg30d": 112.3,
        "heikinAvg30d": 2.631
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 71,
        "ouatsu": 370.622,
        "saikou": 2.94,
        "heikin": 2.54,
        "boshuAvg30d": 111.6,
        "heikinAvg30d": 2.669
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 69,
        "ouatsu": 374.198,
        "saikou": 2.85,
        "heikin": 2.37,
        "boshuAvg30d": 109.6,
        "heikinAvg30d": 2.328
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 69,
        "ouatsu": 376.098,
        "saikou": 3.6,
        "heikin": 2.31,
        "boshuAvg30d": 109.6,
        "heikinAvg30d": 2.175
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 69,
        "ouatsu": 366.206,
        "saikou": 2.7,
        "heikin": 1.93,
        "boshuAvg30d": 109.6,
        "heikinAvg30d": 1.951
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 69,
        "ouatsu": 387.697,
        "saikou": 5.1,
        "heikin": 1.55,
        "boshuAvg30d": 109.6,
        "heikinAvg30d": 1.847
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 69,
        "ouatsu": 377.792,
        "saikou": 1.68,
        "heikin": 1.46,
        "boshuAvg30d": 109.6,
        "heikinAvg30d": 1.759
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 69,
        "ouatsu": 375.808,
        "saikou": 1.59,
        "heikin": 1.15,
        "boshuAvg30d": 109.6,
        "heikinAvg30d": 1.787
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 70,
        "ouatsu": 327.825,
        "saikou": 1.61,
        "heikin": 1.09,
        "boshuAvg30d": 110.3,
        "heikinAvg30d": 1.629
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 71,
        "ouatsu": 340.825,
        "saikou": 3.25,
        "heikin": 1.23,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 1.884
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 71,
        "ouatsu": 338.841,
        "saikou": 1.7,
        "heikin": 1.41,
        "boshuAvg30d": 111.3,
        "heikinAvg30d": 1.933
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 340.825,
        "saikou": 5.1,
        "heikin": 1.41,
        "boshuAvg30d": 110.3,
        "heikinAvg30d": 1.941
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 338.925,
        "saikou": 2.3,
        "heikin": 1.31,
        "boshuAvg30d": 109.3,
        "heikinAvg30d": 1.833
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 338.303,
        "saikou": 3.47,
        "heikin": 1.82,
        "boshuAvg30d": 106.3,
        "heikinAvg30d": 1.907
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 55.9,
        "heikinAvg30d": 1.021
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 55.9,
        "heikinAvg30d": 0.993
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 1.93,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 55.9,
        "heikinAvg30d": 1.107
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 1.93,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 55.9,
        "heikinAvg30d": 1.074
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.45,
        "heikin": 1.45,
        "boshuAvg30d": 55.9,
        "heikinAvg30d": 0.977
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 55.9,
        "heikinAvg30d": 1.02
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 55.9,
        "heikinAvg30d": 1.169
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.15,
        "boshuAvg30d": 55.9,
        "heikinAvg30d": 1.462
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.3,
        "boshuAvg30d": 55.9,
        "heikinAvg30d": 1.318
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 55.9,
        "heikinAvg30d": 1.429
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 55.9,
        "heikinAvg30d": 1.606
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.95,
        "boshuAvg30d": 55.9,
        "heikinAvg30d": 1.623
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.9,
        "heikin": 1.88,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 1.759
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 59.9,
        "heikinAvg30d": 1.587
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.5,
        "boshuAvg30d": 61.7,
        "heikinAvg30d": 1.487
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 3,
        "heikin": 2.69,
        "boshuAvg30d": 62.7,
        "heikinAvg30d": 1.445
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.816
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 3.15,
        "heikin": 3.15,
        "boshuAvg30d": 62.9,
        "heikinAvg30d": 2.424
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.95,
        "heikin": 3.49,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 2.785
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 4.5,
        "heikin": 4.09,
        "boshuAvg30d": 63.9,
        "heikinAvg30d": 3.012
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.35,
        "heikin": 5.94,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 4.098
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.96,
        "heikin": 6.71,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 4.285
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 4.45,
        "heikin": 4.14,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 3.33
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 4.2,
        "heikin": 4.05,
        "boshuAvg30d": 64.9,
        "heikinAvg30d": 3.131
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 4.7,
        "heikin": 4.6,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.536
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 4.35,
        "heikin": 3.94,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.258
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 5.75,
        "heikin": 5.65,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 3.547
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 8.95,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.869
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 8.97,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.813
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 64.2,
        "heikinAvg30d": 2.608
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.26,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 3.491
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.37,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 4.108
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 8.92,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 3.1
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 2.859
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.08,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 2.698
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 65.9,
        "heikinAvg30d": 3.604
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.27,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 2.494
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.39,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 2.636
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 8.62,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 2.433
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 9.21,
        "heikin": 8.1,
        "boshuAvg30d": 65.2,
        "heikinAvg30d": 1.947
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.2,
        "heikinAvg30d": 2.131
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.793
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.783
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.6,
        "heikin": 2.36,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.823
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 2.297
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 3,
        "heikin": 2.69,
        "boshuAvg30d": 61.9,
        "heikinAvg30d": 1.769
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.28,
        "boshuAvg30d": 60.9,
        "heikinAvg30d": 1.455
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.43,
        "boshuAvg30d": 60.7,
        "heikinAvg30d": 1.248
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 171.008,
        "saikou": 1.68,
        "heikin": 0.93,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 1.502
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 148.971,
        "saikou": 1.49,
        "heikin": 0.72,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 1.256
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 186.598,
        "saikou": 1.35,
        "heikin": 0.62,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 1.172
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 171.41,
        "saikou": 1.44,
        "heikin": 0.69,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 1.117
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 184.412,
        "saikou": 1.46,
        "heikin": 0.7,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 1.056
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 180.424,
        "saikou": 1.99,
        "heikin": 0.97,
        "boshuAvg30d": 127.8,
        "heikinAvg30d": 1.216
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 158.23,
        "saikou": 1.99,
        "heikin": 1.15,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 1.406
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 107.314,
        "saikou": 1.99,
        "heikin": 1.72,
        "boshuAvg30d": 128.1,
        "heikinAvg30d": 1.602
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 107.314,
        "saikou": 1.99,
        "heikin": 1.64,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 1.52
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 107.314,
        "saikou": 1.99,
        "heikin": 1.72,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 1.622
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 107.314,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 1.573
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 107.314,
        "saikou": 1.95,
        "heikin": 1.64,
        "boshuAvg30d": 129.1,
        "heikinAvg30d": 1.414
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 59.889,
        "saikou": 1.95,
        "heikin": 1.68,
        "boshuAvg30d": 140.6,
        "heikinAvg30d": 1.599
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 59.889,
        "saikou": 1.95,
        "heikin": 1.76,
        "boshuAvg30d": 144.3,
        "heikinAvg30d": 1.572
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 53.903,
        "saikou": 2.14,
        "heikin": 1.96,
        "boshuAvg30d": 149.1,
        "heikinAvg30d": 1.633
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 55.9,
        "saikou": 2.2,
        "heikin": 2,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 1.645
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 57.77,
        "saikou": 2.22,
        "heikin": 2.01,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 1.721
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 63.756,
        "saikou": 3,
        "heikin": 2.6,
        "boshuAvg30d": 152.3,
        "heikinAvg30d": 2.08
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 63.756,
        "saikou": 3,
        "heikin": 2.63,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 2.277
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 63.756,
        "saikou": 3.95,
        "heikin": 3.11,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 2.219
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 108.994,
        "saikou": 5.95,
        "heikin": 2.21,
        "boshuAvg30d": 152.1,
        "heikinAvg30d": 2.507
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 63.731,
        "saikou": 5.95,
        "heikin": 3.6,
        "boshuAvg30d": 151.3,
        "heikinAvg30d": 2.558
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 65.716,
        "saikou": 5.95,
        "heikin": 3.57,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 2.632
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 64.273,
        "saikou": 3,
        "heikin": 2.87,
        "boshuAvg30d": 150.6,
        "heikinAvg30d": 2.408
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 99.375,
        "saikou": 3,
        "heikin": 1.81,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 2.248
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 61.72,
        "saikou": 4.93,
        "heikin": 3.03,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 2.303
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 65.716,
        "saikou": 5.95,
        "heikin": 3.48,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 2.572
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 65.716,
        "saikou": 3,
        "heikin": 2.71,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.428
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 65.716,
        "saikou": 4.45,
        "heikin": 3.04,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 2.322
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 65.716,
        "saikou": 2.98,
        "heikin": 2.58,
        "boshuAvg30d": 149.9,
        "heikinAvg30d": 2.214
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 65.716,
        "saikou": 3.95,
        "heikin": 2.97,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 2.339
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 65.716,
        "saikou": 3.95,
        "heikin": 2.99,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 2.582
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 62.403,
        "saikou": 3.95,
        "heikin": 3.06,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 2.43
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 41.417,
        "saikou": 2.38,
        "heikin": 2.11,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 2.351
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 57.86,
        "saikou": 2.5,
        "heikin": 2.31,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 2.391
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 105.285,
        "saikou": 3.3,
        "heikin": 2.54,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 2.603
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 105.195,
        "saikou": 2.2,
        "heikin": 1.92,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 2.134
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 105.195,
        "saikou": 2.42,
        "heikin": 2,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 2.17
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 113.141,
        "saikou": 2.1,
        "heikin": 1.75,
        "boshuAvg30d": 145.3,
        "heikinAvg30d": 2.118
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.75,
        "boshuAvg30d": 144.6,
        "heikinAvg30d": 2.054
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 107.289,
        "saikou": 1.99,
        "heikin": 1.73,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 1.981
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 107.289,
        "saikou": 1.94,
        "heikin": 1.68,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 1.986
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 109.274,
        "saikou": 1.95,
        "heikin": 1.69,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 1.956
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 109.274,
        "saikou": 2,
        "heikin": 1.78,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.042
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 109.274,
        "saikou": 2,
        "heikin": 1.78,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 2.057
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.72,
        "boshuAvg30d": 142.1,
        "heikinAvg30d": 2.008
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 94.274,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 140.3,
        "heikinAvg30d": 1.602
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 107.424,
        "saikou": 1.99,
        "heikin": 1.73,
        "boshuAvg30d": 138.3,
        "heikinAvg30d": 1.708
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 172.875,
        "saikou": 2.67,
        "heikin": 2,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.025
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 172.875,
        "saikou": 6.18,
        "heikin": 4.63,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.077
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 174.675,
        "saikou": 4.17,
        "heikin": 3.09,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.0
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 176.665,
        "saikou": 2.84,
        "heikin": 2.15,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 1.877
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 176.665,
        "saikou": 4.21,
        "heikin": 3.11,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 1.824
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 176.665,
        "saikou": 2.67,
        "heikin": 1.98,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.063
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 193.524,
        "saikou": 3.02,
        "heikin": 2.04,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.241
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 193.524,
        "saikou": 3.93,
        "heikin": 2.54,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.569
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 193.524,
        "saikou": 6.5,
        "heikin": 4.05,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 2.776
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 191.724,
        "saikou": 6.72,
        "heikin": 4.24,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.152
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 191.724,
        "saikou": 6.73,
        "heikin": 4.2,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.09
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 191.724,
        "saikou": 6.73,
        "heikin": 4.29,
        "boshuAvg30d": 140.7,
        "heikinAvg30d": 3.094
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 201.316,
        "saikou": 6.74,
        "heikin": 4.28,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 3.185
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 201.316,
        "saikou": 6.5,
        "heikin": 4.13,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 2.603
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 201.316,
        "saikou": 4.35,
        "heikin": 3.05,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.689
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 186.131,
        "saikou": 4.16,
        "heikin": 2.99,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 1.415
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 203.116,
        "saikou": 2.67,
        "heikin": 2,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 1.516
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 225.668,
        "saikou": 2.48,
        "heikin": 2.07,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 1.582
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 207.786,
        "saikou": 2.7,
        "heikin": 2,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.746
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 207.786,
        "saikou": 2.29,
        "heikin": 1.88,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 1.738
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 207.786,
        "saikou": 2.7,
        "heikin": 1.72,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 1.647
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 191.919,
        "saikou": 2.7,
        "heikin": 1.78,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 1.573
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 205.267,
        "saikou": 9,
        "heikin": 1.92,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 1.636
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 199.832,
        "saikou": 9,
        "heikin": 1.91,
        "boshuAvg30d": 151.7,
        "heikinAvg30d": 1.676
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 207.786,
        "saikou": 2.29,
        "heikin": 1.85,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.535
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 207.786,
        "saikou": 2.29,
        "heikin": 1.75,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.63
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 178.965,
        "saikou": 2.29,
        "heikin": 1.83,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.906
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 207.786,
        "saikou": 2.68,
        "heikin": 2.22,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.77
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 188.124,
        "saikou": 6.38,
        "heikin": 3.92,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 1.757
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 208.667,
        "saikou": 7.11,
        "heikin": 5.07,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.688
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 208.667,
        "saikou": 9,
        "heikin": 6.01,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.007
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 211.587,
        "saikou": 9,
        "heikin": 5.1,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.299
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 188.109,
        "saikou": 9.62,
        "heikin": 7.14,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.654
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 188.109,
        "saikou": 9.42,
        "heikin": 6.68,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 3.624
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 181.587,
        "saikou": 9.32,
        "heikin": 5.19,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 4.151
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 181.587,
        "saikou": 9.77,
        "heikin": 5.44,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 4.24
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 179.597,
        "saikou": 9.77,
        "heikin": 5.51,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 4.39
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 187.487,
        "saikou": 9.35,
        "heikin": 6.07,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 4.237
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 159.455,
        "saikou": 9.77,
        "heikin": 5.46,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 3.986
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 209.325,
        "saikou": 7.4,
        "heikin": 4.53,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 3.443
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 209.325,
        "saikou": 7.35,
        "heikin": 4.76,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.717
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 209.325,
        "saikou": 6.93,
        "heikin": 4.51,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 3.478
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 209.325,
        "saikou": 6.93,
        "heikin": 4.53,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 3.759
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 207.525,
        "saikou": 6.74,
        "heikin": 4.41,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 3.467
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 210.401,
        "saikou": 6.74,
        "heikin": 4.97,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 3.372
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 209.325,
        "saikou": 3.3,
        "heikin": 2.18,
        "boshuAvg30d": 144.7,
        "heikinAvg30d": 2.954
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 209.325,
        "saikou": 3.8,
        "heikin": 2.56,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 2.874
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 195.302,
        "saikou": 2.67,
        "heikin": 1.87,
        "boshuAvg30d": 143.7,
        "heikinAvg30d": 2.035
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.903
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.858
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 189.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.833
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.3,
        "heikinAvg30d": 0.828
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 188.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.828
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 211.343,
        "saikou": 1.6,
        "heikin": 1.11,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.817
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 221.343,
        "saikou": 1.6,
        "heikin": 0.72,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.827
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 209.8,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.866
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 200.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.907
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.942
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 200.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.913
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 200.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.863
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 205.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.902
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 203.343,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.85
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.79
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 0.794
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 0.746
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.7,
        "heikinAvg30d": 0.793
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 206.343,
        "saikou": 1.6,
        "heikin": 0.7,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.054
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 202.343,
        "saikou": 1.7,
        "heikin": 0.97,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.028
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.047
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 0.967
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.027
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.78,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.051
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.52,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 0.982
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.36,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.035
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 137.843,
        "saikou": 1.6,
        "heikin": 1.43,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.023
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 114.843,
        "saikou": 1.6,
        "heikin": 0.93,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 1.061
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 131.843,
        "saikou": 1.7,
        "heikin": 1.44,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.087
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 117.843,
        "saikou": 1.7,
        "heikin": 1.24,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 1.031
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 171.343,
        "saikou": 1.7,
        "heikin": 1.32,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.067
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 180.343,
        "saikou": 1.7,
        "heikin": 1.51,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.065
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 171.343,
        "saikou": 1.7,
        "heikin": 1.24,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.187
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 170.343,
        "saikou": 1.7,
        "heikin": 1.28,
        "boshuAvg30d": 44.3,
        "heikinAvg30d": 1.296
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 170.343,
        "saikou": 1.7,
        "heikin": 1.3,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.408
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 169.343,
        "saikou": 1.7,
        "heikin": 1.3,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.406
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 169.343,
        "saikou": 1.6,
        "heikin": 1.25,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.402
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 169.343,
        "saikou": 1.6,
        "heikin": 1.36,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.441
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 169.343,
        "saikou": 1.6,
        "heikin": 1.36,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.311
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.33
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 169.343,
        "saikou": 1.7,
        "heikin": 1.25,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.307
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 170.343,
        "saikou": 1.7,
        "heikin": 1.28,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.295
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 204.343,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.963
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 204.343,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.945
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.945
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.926
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 201.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.967
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 221.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.945
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 209.78,
        "saikou": 8.33,
        "heikin": 6.52,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 4.594
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 242.679,
        "saikou": 8.13,
        "heikin": 7.88,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 4.126
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 185.765,
        "saikou": 8.17,
        "heikin": 6.58,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 3.999
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 187.761,
        "saikou": 8.2,
        "heikin": 6.46,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 3.782
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 187.761,
        "saikou": 8.33,
        "heikin": 6.59,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 3.729
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 249.681,
        "saikou": 8.24,
        "heikin": 6.62,
        "boshuAvg30d": 167.4,
        "heikinAvg30d": 4.05
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 265.42,
        "saikou": 8.21,
        "heikin": 5.96,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 4.288
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 261.592,
        "saikou": 8.7,
        "heikin": 6.31,
        "boshuAvg30d": 167.7,
        "heikinAvg30d": 4.792
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 265.42,
        "saikou": 8.88,
        "heikin": 6.44,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 5.032
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 265.42,
        "saikou": 8.87,
        "heikin": 6.41,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 5.47
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 242.77,
        "saikou": 9.13,
        "heikin": 6.56,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 5.653
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 254.196,
        "saikou": 9.25,
        "heikin": 6.63,
        "boshuAvg30d": 167.9,
        "heikinAvg30d": 5.53
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 179.646,
        "saikou": 9.36,
        "heikin": 5.98,
        "boshuAvg30d": 171.7,
        "heikinAvg30d": 5.149
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 185.396,
        "saikou": 8.98,
        "heikin": 5.69,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 4.362
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 267.396,
        "saikou": 8.12,
        "heikin": 5.76,
        "boshuAvg30d": 173.7,
        "heikinAvg30d": 3.167
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 267.396,
        "saikou": 6.79,
        "heikin": 4.82,
        "boshuAvg30d": 174.7,
        "heikinAvg30d": 2.993
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 208.396,
        "saikou": 6.01,
        "heikin": 3.94,
        "boshuAvg30d": 174.7,
        "heikinAvg30d": 3.043
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 208.396,
        "saikou": 5.35,
        "heikin": 3.5,
        "boshuAvg30d": 174.7,
        "heikinAvg30d": 3.174
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 192.994,
        "saikou": 3.31,
        "heikin": 2.19,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 3.217
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 199.916,
        "saikou": 2.13,
        "heikin": 1.56,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 3.054
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 190.122,
        "saikou": 1.8,
        "heikin": 1.31,
        "boshuAvg30d": 179.7,
        "heikinAvg30d": 2.975
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 187.152,
        "saikou": 2.54,
        "heikin": 1.42,
        "boshuAvg30d": 180.4,
        "heikinAvg30d": 2.967
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 191.019,
        "saikou": 1.99,
        "heikin": 1.36,
        "boshuAvg30d": 180.7,
        "heikinAvg30d": 2.872
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 181.394,
        "saikou": 2.83,
        "heikin": 1.88,
        "boshuAvg30d": 180.7,
        "heikinAvg30d": 2.887
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 177.339,
        "saikou": 8.99,
        "heikin": 1.38,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 2.372
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 185.246,
        "saikou": 2.18,
        "heikin": 1.51,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 2.571
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 189.21,
        "saikou": 6.66,
        "heikin": 4.4,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 3.006
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 192.186,
        "saikou": 8.99,
        "heikin": 5.17,
        "boshuAvg30d": 178.9,
        "heikinAvg30d": 3.594
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 184.186,
        "saikou": 8.37,
        "heikin": 5.37,
        "boshuAvg30d": 178.7,
        "heikinAvg30d": 3.675
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 195.186,
        "saikou": 9.19,
        "heikin": 6.05,
        "boshuAvg30d": 176.9,
        "heikinAvg30d": 4.162
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 158.816,
        "saikou": 10,
        "heikin": 5.91,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 4.626
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 136.186,
        "saikou": 10,
        "heikin": 5.61,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 5.187
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 153.92,
        "saikou": 10,
        "heikin": 6.45,
        "boshuAvg30d": 172.9,
        "heikinAvg30d": 6.199
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 149.956,
        "saikou": 10,
        "heikin": 6.82,
        "boshuAvg30d": 172.7,
        "heikinAvg30d": 6.808
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 139.872,
        "saikou": 10,
        "heikin": 5.66,
        "boshuAvg30d": 171.9,
        "heikinAvg30d": 6.918
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 136.02,
        "saikou": 10,
        "heikin": 5.69,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 6.986
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 132.561,
        "saikou": 10,
        "heikin": 6.09,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 6.964
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 158.526,
        "saikou": 10,
        "heikin": 6.37,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 6.892
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 174.394,
        "saikou": 10,
        "heikin": 6.3,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 6.639
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 110.383,
        "saikou": 9.15,
        "heikin": 2.78,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 6.23
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 205.751,
        "saikou": 9.76,
        "heikin": 6.59,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 6.146
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 205.751,
        "saikou": 9.13,
        "heikin": 6.17,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 5.809
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 211.697,
        "saikou": 8.99,
        "heikin": 6.04,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 5.716
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 211.697,
        "saikou": 8.61,
        "heikin": 5.75,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 5.687
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 211.697,
        "saikou": 9.88,
        "heikin": 6.62,
        "boshuAvg30d": 170.9,
        "heikinAvg30d": 5.906
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 212.721,
        "saikou": 9.47,
        "heikin": 6.35,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 5.531
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 212.721,
        "saikou": 9.46,
        "heikin": 6.34,
        "boshuAvg30d": 170.7,
        "heikinAvg30d": 5.405
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 214.697,
        "saikou": 8.94,
        "heikin": 6.21,
        "boshuAvg30d": 169.9,
        "heikinAvg30d": 4.589
      }
    ]
  }
};
