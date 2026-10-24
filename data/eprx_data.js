// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/24〜2026/10/23）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-24",
  "fetchedAt": "2026-10-24",
  "avgWindowLabel": "過去30日平均（2026/09/24〜2026/10/23）",
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
      "ouatsu": 1616.324,
      "saikou": 9,
      "heikin": 3.03,
      "boshuAvg30d": 1099.6,
      "heikinAvg30d": 3.01
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 1024,
      "ouatsu": 1597.749,
      "saikou": 8.97,
      "heikin": 3.07,
      "boshuAvg30d": 1099.6,
      "heikinAvg30d": 2.901
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 1024,
      "ouatsu": 1521.416,
      "saikou": 10,
      "heikin": 3,
      "boshuAvg30d": 1099.6,
      "heikinAvg30d": 2.815
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 1024,
      "ouatsu": 1630.781,
      "saikou": 9.57,
      "heikin": 2.6,
      "boshuAvg30d": 1099.6,
      "heikinAvg30d": 2.792
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 1021,
      "ouatsu": 1686.231,
      "saikou": 8.9,
      "heikin": 2.62,
      "boshuAvg30d": 1096.1,
      "heikinAvg30d": 2.823
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 1020,
      "ouatsu": 1553.329,
      "saikou": 9.58,
      "heikin": 3.35,
      "boshuAvg30d": 1095.1,
      "heikinAvg30d": 2.858
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 1017,
      "ouatsu": 1584.449,
      "saikou": 9.17,
      "heikin": 3.42,
      "boshuAvg30d": 1107.1,
      "heikinAvg30d": 3.044
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 1019,
      "ouatsu": 1720.874,
      "saikou": 9.05,
      "heikin": 3.43,
      "boshuAvg30d": 1108.9,
      "heikinAvg30d": 3.236
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 1021,
      "ouatsu": 1727.232,
      "saikou": 9.19,
      "heikin": 3.64,
      "boshuAvg30d": 1111.1,
      "heikinAvg30d": 3.302
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 1022,
      "ouatsu": 1790.375,
      "saikou": 9.39,
      "heikin": 4.11,
      "boshuAvg30d": 1111.9,
      "heikinAvg30d": 3.496
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 1022,
      "ouatsu": 1744.896,
      "saikou": 9.22,
      "heikin": 4.19,
      "boshuAvg30d": 1111.9,
      "heikinAvg30d": 3.555
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 1022,
      "ouatsu": 1685.902,
      "saikou": 10,
      "heikin": 3.66,
      "boshuAvg30d": 1111.9,
      "heikinAvg30d": 3.586
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 1082,
      "ouatsu": 1528.039,
      "saikou": 10,
      "heikin": 3.64,
      "boshuAvg30d": 1173.3,
      "heikinAvg30d": 3.603
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1105,
      "ouatsu": 1610.224,
      "saikou": 8.89,
      "heikin": 3.76,
      "boshuAvg30d": 1195.8,
      "heikinAvg30d": 3.443
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1126,
      "ouatsu": 1528.868,
      "saikou": 10,
      "heikin": 3.49,
      "boshuAvg30d": 1217.3,
      "heikinAvg30d": 3.0
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1143,
      "ouatsu": 1505.236,
      "saikou": 9.58,
      "heikin": 3.62,
      "boshuAvg30d": 1234.5,
      "heikinAvg30d": 2.795
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1143,
      "ouatsu": 1709.388,
      "saikou": 9.66,
      "heikin": 3.52,
      "boshuAvg30d": 1234.8,
      "heikinAvg30d": 2.972
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1143,
      "ouatsu": 1747.073,
      "saikou": 8.86,
      "heikin": 3.55,
      "boshuAvg30d": 1234.8,
      "heikinAvg30d": 2.962
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 1075,
      "ouatsu": 1749.931,
      "saikou": 9.07,
      "heikin": 3.14,
      "boshuAvg30d": 1199.6,
      "heikinAvg30d": 3.193
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 1078,
      "ouatsu": 1696.731,
      "saikou": 9.66,
      "heikin": 3.18,
      "boshuAvg30d": 1202.8,
      "heikinAvg30d": 3.202
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1083,
      "ouatsu": 1723.629,
      "saikou": 9.56,
      "heikin": 2.99,
      "boshuAvg30d": 1206.0,
      "heikinAvg30d": 3.277
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1083,
      "ouatsu": 1703.821,
      "saikou": 9.66,
      "heikin": 2.92,
      "boshuAvg30d": 1206.0,
      "heikinAvg30d": 3.216
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1080,
      "ouatsu": 1766.312,
      "saikou": 8.84,
      "heikin": 3.06,
      "boshuAvg30d": 1203.0,
      "heikinAvg30d": 3.223
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 1079,
      "ouatsu": 1752.656,
      "saikou": 8.89,
      "heikin": 2.79,
      "boshuAvg30d": 1202.0,
      "heikinAvg30d": 3.17
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 1059,
      "ouatsu": 1600.452,
      "saikou": 9.66,
      "heikin": 2.94,
      "boshuAvg30d": 1184.7,
      "heikinAvg30d": 3.011
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 1059,
      "ouatsu": 1734.03,
      "saikou": 9.66,
      "heikin": 2.99,
      "boshuAvg30d": 1184.7,
      "heikinAvg30d": 3.004
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 1059,
      "ouatsu": 1665.425,
      "saikou": 8.9,
      "heikin": 2.92,
      "boshuAvg30d": 1184.7,
      "heikinAvg30d": 3.131
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 1057,
      "ouatsu": 1664.9,
      "saikou": 9.66,
      "heikin": 2.9,
      "boshuAvg30d": 1182.1,
      "heikinAvg30d": 3.262
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 1054,
      "ouatsu": 1672.62,
      "saikou": 9.37,
      "heikin": 3.14,
      "boshuAvg30d": 1178.6,
      "heikinAvg30d": 3.294
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 1048,
      "ouatsu": 1510.651,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1172.4,
      "heikinAvg30d": 3.324
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1114,
      "ouatsu": 1533.833,
      "saikou": 10,
      "heikin": 3.23,
      "boshuAvg30d": 1210.5,
      "heikinAvg30d": 3.28
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1114,
      "ouatsu": 1432.141,
      "saikou": 9.7,
      "heikin": 3.12,
      "boshuAvg30d": 1210.5,
      "heikinAvg30d": 3.512
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1115,
      "ouatsu": 1568.287,
      "saikou": 9.2,
      "heikin": 3.27,
      "boshuAvg30d": 1211.3,
      "heikinAvg30d": 3.958
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1114,
      "ouatsu": 1413.341,
      "saikou": 9.5,
      "heikin": 2.75,
      "boshuAvg30d": 1210.0,
      "heikinAvg30d": 4.277
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1052,
      "ouatsu": 1590.322,
      "saikou": 10,
      "heikin": 2.99,
      "boshuAvg30d": 1207.2,
      "heikinAvg30d": 4.247
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1047,
      "ouatsu": 1489.065,
      "saikou": 10,
      "heikin": 2.92,
      "boshuAvg30d": 1202.1,
      "heikinAvg30d": 4.321
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1012,
      "ouatsu": 1566.576,
      "saikou": 10,
      "heikin": 2.65,
      "boshuAvg30d": 1196.4,
      "heikinAvg30d": 4.163
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1012,
      "ouatsu": 1578.647,
      "saikou": 10,
      "heikin": 3.04,
      "boshuAvg30d": 1196.4,
      "heikinAvg30d": 4.092
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1012,
      "ouatsu": 1643.795,
      "saikou": 9.05,
      "heikin": 2.42,
      "boshuAvg30d": 1196.6,
      "heikinAvg30d": 3.951
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1011,
      "ouatsu": 1634.54,
      "saikou": 8.9,
      "heikin": 2.72,
      "boshuAvg30d": 1195.6,
      "heikinAvg30d": 3.719
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1003,
      "ouatsu": 1872.925,
      "saikou": 10,
      "heikin": 3.29,
      "boshuAvg30d": 1188.3,
      "heikinAvg30d": 3.633
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1003,
      "ouatsu": 1811.352,
      "saikou": 9.8,
      "heikin": 3.38,
      "boshuAvg30d": 1187.4,
      "heikinAvg30d": 3.568
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 913,
      "ouatsu": 1718.817,
      "saikou": 9.58,
      "heikin": 3.2,
      "boshuAvg30d": 1108.2,
      "heikinAvg30d": 3.432
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 916,
      "ouatsu": 1759.404,
      "saikou": 8.84,
      "heikin": 3.33,
      "boshuAvg30d": 1111.2,
      "heikinAvg30d": 3.489
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 1007,
      "ouatsu": 1616.194,
      "saikou": 8.89,
      "heikin": 3.15,
      "boshuAvg30d": 1112.5,
      "heikinAvg30d": 3.434
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 912,
      "ouatsu": 1761.158,
      "saikou": 8.5,
      "heikin": 2.7,
      "boshuAvg30d": 1107.1,
      "heikinAvg30d": 3.307
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 903,
      "ouatsu": 1690.951,
      "saikou": 8.5,
      "heikin": 2.9,
      "boshuAvg30d": 1098.5,
      "heikinAvg30d": 3.374
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 896,
      "ouatsu": 1595.915,
      "saikou": 8.43,
      "heikin": 2.92,
      "boshuAvg30d": 1091.3,
      "heikinAvg30d": 3.072
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
        "ouatsu": 193.418,
        "saikou": 3.81,
        "heikin": 1.75,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.762
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 139.408,
        "saikou": 7.8,
        "heikin": 2.42,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.638
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 147.408,
        "saikou": 7.8,
        "heikin": 1.85,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.648
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 129.408,
        "saikou": 9.57,
        "heikin": 2.15,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.436
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 174.408,
        "saikou": 7.8,
        "heikin": 2.31,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.878
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 117.418,
        "saikou": 9.58,
        "heikin": 2.35,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.552
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 119.408,
        "saikou": 8.89,
        "heikin": 1.36,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 3.885
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 162.008,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 3.793
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 119.408,
        "saikou": 8.89,
        "heikin": 1.36,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 3.899
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 155.658,
        "saikou": 3.75,
        "heikin": 2.86,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 3.605
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 155.68,
        "saikou": 3.75,
        "heikin": 2.89,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 3.876
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 232.68,
        "saikou": 1.3,
        "heikin": 1.2,
        "boshuAvg30d": 51.5,
        "heikinAvg30d": 4.008
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 116.408,
        "saikou": 8.89,
        "heikin": 2.91,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.72
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 157.598,
        "saikou": 8.89,
        "heikin": 2.88,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.787
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 126.408,
        "saikou": 8.89,
        "heikin": 3.11,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.085
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 146.128,
        "saikou": 9.58,
        "heikin": 3.94,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 3.062
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 116.408,
        "saikou": 9.66,
        "heikin": 3.35,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 3.138
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 155.958,
        "saikou": 7.86,
        "heikin": 3.6,
        "boshuAvg30d": 53.7,
        "heikinAvg30d": 2.706
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 167.858,
        "saikou": 7.8,
        "heikin": 1.99,
        "boshuAvg30d": 54.7,
        "heikinAvg30d": 2.909
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 153.418,
        "saikou": 9.66,
        "heikin": 2.12,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 2.763
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 145.588,
        "saikou": 9.56,
        "heikin": 3.3,
        "boshuAvg30d": 55.0,
        "heikinAvg30d": 3.224
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 122.918,
        "saikou": 9.66,
        "heikin": 3.09,
        "boshuAvg30d": 55.7,
        "heikinAvg30d": 2.421
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 150.558,
        "saikou": 7.8,
        "heikin": 2.55,
        "boshuAvg30d": 55.7,
        "heikinAvg30d": 3.279
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 152.558,
        "saikou": 7.8,
        "heikin": 2.11,
        "boshuAvg30d": 55.7,
        "heikinAvg30d": 3.137
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 124.908,
        "saikou": 9.66,
        "heikin": 2.87,
        "boshuAvg30d": 54.0,
        "heikinAvg30d": 2.992
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 163.908,
        "saikou": 9.66,
        "heikin": 2.02,
        "boshuAvg30d": 54.0,
        "heikinAvg30d": 3.086
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 145.308,
        "saikou": 8.89,
        "heikin": 3.03,
        "boshuAvg30d": 54.0,
        "heikinAvg30d": 2.659
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 126.408,
        "saikou": 9.66,
        "heikin": 2.05,
        "boshuAvg30d": 54.0,
        "heikinAvg30d": 3.121
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 155.308,
        "saikou": 7.8,
        "heikin": 2.42,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.242
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 153.418,
        "saikou": 8.89,
        "heikin": 2.85,
        "boshuAvg30d": 53.0,
        "heikinAvg30d": 3.863
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 172.718,
        "saikou": 1.3,
        "heikin": 1.19,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 2.917
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 163.768,
        "saikou": 1.3,
        "heikin": 1.19,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 4.127
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 189.49,
        "saikou": 6.97,
        "heikin": 6.87,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 5.079
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 169.408,
        "saikou": 3.73,
        "heikin": 3.6,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 5.37
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 212.708,
        "saikou": 3.73,
        "heikin": 2.65,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.959
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 140.758,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 51.0,
        "heikinAvg30d": 5.109
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 115.468,
        "saikou": 1.3,
        "heikin": 1.29,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.774
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 119.408,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.906
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 245.708,
        "saikou": 3.73,
        "heikin": 2.65,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.607
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 195.458,
        "saikou": 3.73,
        "heikin": 3.66,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.569
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 238.758,
        "saikou": 3.73,
        "heikin": 2.67,
        "boshuAvg30d": 50.0,
        "heikinAvg30d": 4.317
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 203.418,
        "saikou": 1.3,
        "heikin": 1.29,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.048
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 165.718,
        "saikou": 1.3,
        "heikin": 1.19,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.189
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 204.49,
        "saikou": 3.96,
        "heikin": 1.58,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 4.34
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 127.458,
        "saikou": 8.89,
        "heikin": 2.3,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 4.399
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 177.708,
        "saikou": 1.3,
        "heikin": 1.19,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 4.146
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 177.708,
        "saikou": 1.3,
        "heikin": 1.19,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 4.449
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 138.108,
        "saikou": 7.8,
        "heikin": 2.15,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.895
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 53.462,
        "saikou": 6.3,
        "heikin": 5.2,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 5.734
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 53.462,
        "saikou": 5.69,
        "heikin": 4.52,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 5.934
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 61.304,
        "saikou": 10,
        "heikin": 3.73,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 5.927
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 65.23,
        "saikou": 4.57,
        "heikin": 3.16,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 5.942
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 61.284,
        "saikou": 4.57,
        "heikin": 3.17,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 6.016
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 63.184,
        "saikou": 5.98,
        "heikin": 4.27,
        "boshuAvg30d": 117.0,
        "heikinAvg30d": 6.052
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 68.13,
        "saikou": 7,
        "heikin": 5.22,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 6.147
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 104.3,
        "saikou": 6.44,
        "heikin": 4.68,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 6.053
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 108.298,
        "saikou": 6.27,
        "heikin": 4.54,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 5.958
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 94.368,
        "saikou": 6.48,
        "heikin": 4.54,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 5.93
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 96.298,
        "saikou": 6.49,
        "heikin": 4.85,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 6.195
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 84.298,
        "saikou": 10,
        "heikin": 5.7,
        "boshuAvg30d": 130.3,
        "heikinAvg30d": 6.275
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 84.298,
        "saikou": 10,
        "heikin": 6.06,
        "boshuAvg30d": 137.8,
        "heikinAvg30d": 6.522
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 106.798,
        "saikou": 7,
        "heikin": 5.77,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 6.708
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 108.298,
        "saikou": 10,
        "heikin": 5.83,
        "boshuAvg30d": 146.5,
        "heikinAvg30d": 7.072
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 106.798,
        "saikou": 7,
        "heikin": 5.74,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 7.27
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 108.298,
        "saikou": 6.15,
        "heikin": 4.85,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 7.666
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 82.798,
        "saikou": 6.08,
        "heikin": 5.23,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 7.707
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 85.967,
        "saikou": 5.31,
        "heikin": 4.76,
        "boshuAvg30d": 103.2,
        "heikinAvg30d": 7.517
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 86.294,
        "saikou": 5.24,
        "heikin": 4.87,
        "boshuAvg30d": 103.7,
        "heikinAvg30d": 7.697
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 95.324,
        "saikou": 2.77,
        "heikin": 2.77,
        "boshuAvg30d": 103.1,
        "heikinAvg30d": 7.77
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 95.325,
        "saikou": 2.77,
        "heikin": 2.77,
        "boshuAvg30d": 103.3,
        "heikinAvg30d": 7.884
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 98.294,
        "saikou": 5.69,
        "heikin": 4.03,
        "boshuAvg30d": 104.1,
        "heikinAvg30d": 7.928
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 98.294,
        "saikou": 2.77,
        "heikin": 2.77,
        "boshuAvg30d": 104.1,
        "heikinAvg30d": 7.913
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 94.948,
        "saikou": 6.49,
        "heikin": 4.26,
        "boshuAvg30d": 101.2,
        "heikinAvg30d": 7.782
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 96.298,
        "saikou": 3.32,
        "heikin": 3.32,
        "boshuAvg30d": 101.2,
        "heikinAvg30d": 7.68
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 74.294,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 101.2,
        "heikinAvg30d": 7.375
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 86.294,
        "saikou": 5.69,
        "heikin": 3.84,
        "boshuAvg30d": 99.8,
        "heikinAvg30d": 7.049
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 84.944,
        "saikou": 6.34,
        "heikin": 4.1,
        "boshuAvg30d": 99.3,
        "heikinAvg30d": 7.314
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 84.908,
        "saikou": 10,
        "heikin": 4.97,
        "boshuAvg30d": 96.6,
        "heikinAvg30d": 6.29
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 84.908,
        "saikou": 10,
        "heikin": 4.98,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 6.275
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 86.258,
        "saikou": 6.34,
        "heikin": 3.66,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 5.406
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 86.294,
        "saikou": 6.05,
        "heikin": 3.84,
        "boshuAvg30d": 147.2,
        "heikinAvg30d": 5.326
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 72.794,
        "saikou": 9.5,
        "heikin": 3.92,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 5.307
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 74.294,
        "saikou": 5.51,
        "heikin": 3.65,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 5.174
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 72.758,
        "saikou": 9.5,
        "heikin": 4.26,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 4.836
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 72.298,
        "saikou": 4,
        "heikin": 3.3,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 4.934
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 70.798,
        "saikou": 2.99,
        "heikin": 2.83,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 4.554
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 70.368,
        "saikou": 4.39,
        "heikin": 3.13,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 4.609
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 72.298,
        "saikou": 4,
        "heikin": 3.3,
        "boshuAvg30d": 143.3,
        "heikinAvg30d": 4.878
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 69.329,
        "saikou": 4,
        "heikin": 3.33,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 4.791
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 56.759,
        "saikou": 9.5,
        "heikin": 3.44,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 4.931
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 59.628,
        "saikou": 2.99,
        "heikin": 2.67,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 5.165
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 71.728,
        "saikou": 6.15,
        "heikin": 3.73,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 4.945
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 69.798,
        "saikou": 6.13,
        "heikin": 4.13,
        "boshuAvg30d": 64.8,
        "heikinAvg30d": 5.094
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 93.798,
        "saikou": 6.46,
        "heikin": 5.23,
        "boshuAvg30d": 63.8,
        "heikinAvg30d": 5.05
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 93.798,
        "saikou": 6.82,
        "heikin": 5.14,
        "boshuAvg30d": 62.0,
        "heikinAvg30d": 5.245
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 92.298,
        "saikou": 7.16,
        "heikin": 4.74,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 5.586
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 264,
        "ouatsu": 443.218,
        "saikou": 7.08,
        "heikin": 3.47,
        "boshuAvg30d": 298.1,
        "heikinAvg30d": 3.912
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 264,
        "ouatsu": 442.961,
        "saikou": 6.47,
        "heikin": 3.51,
        "boshuAvg30d": 298.1,
        "heikinAvg30d": 3.92
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 264,
        "ouatsu": 331.393,
        "saikou": 6.16,
        "heikin": 3.6,
        "boshuAvg30d": 298.1,
        "heikinAvg30d": 3.652
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 264,
        "ouatsu": 455.568,
        "saikou": 6.23,
        "heikin": 2.4,
        "boshuAvg30d": 298.1,
        "heikinAvg30d": 3.772
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 263,
        "ouatsu": 478.623,
        "saikou": 5.88,
        "heikin": 2.3,
        "boshuAvg30d": 296.8,
        "heikinAvg30d": 3.734
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 262,
        "ouatsu": 408.496,
        "saikou": 6.13,
        "heikin": 3.99,
        "boshuAvg30d": 296.1,
        "heikinAvg30d": 3.637
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 260,
        "ouatsu": 387.286,
        "saikou": 6.58,
        "heikin": 4.31,
        "boshuAvg30d": 294.3,
        "heikinAvg30d": 3.805
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 262,
        "ouatsu": 465.812,
        "saikou": 7.46,
        "heikin": 4.61,
        "boshuAvg30d": 296.1,
        "heikinAvg30d": 3.879
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 262,
        "ouatsu": 453.906,
        "saikou": 6.98,
        "heikin": 4.34,
        "boshuAvg30d": 296.3,
        "heikinAvg30d": 3.92
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 263,
        "ouatsu": 490.438,
        "saikou": 7.57,
        "heikin": 4.45,
        "boshuAvg30d": 297.1,
        "heikinAvg30d": 4.133
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 263,
        "ouatsu": 453.945,
        "saikou": 7.57,
        "heikin": 4.75,
        "boshuAvg30d": 297.1,
        "heikinAvg30d": 4.023
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 263,
        "ouatsu": 332.459,
        "saikou": 6.63,
        "heikin": 4.73,
        "boshuAvg30d": 297.1,
        "heikinAvg30d": 4.292
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 282,
        "ouatsu": 325.623,
        "saikou": 6.63,
        "heikin": 4.92,
        "boshuAvg30d": 316.5,
        "heikinAvg30d": 4.245
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 290,
        "ouatsu": 344.118,
        "saikou": 6.83,
        "heikin": 5.45,
        "boshuAvg30d": 324.5,
        "heikinAvg30d": 4.522
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 295,
        "ouatsu": 298.494,
        "saikou": 6.48,
        "heikin": 3.98,
        "boshuAvg30d": 329.5,
        "heikinAvg30d": 3.982
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 300,
        "ouatsu": 276.948,
        "saikou": 6.27,
        "heikin": 4.41,
        "boshuAvg30d": 334.5,
        "heikinAvg30d": 3.653
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 300,
        "ouatsu": 496.24,
        "saikou": 6.63,
        "heikin": 4.42,
        "boshuAvg30d": 334.5,
        "heikinAvg30d": 3.857
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 300,
        "ouatsu": 523.076,
        "saikou": 6.48,
        "heikin": 4.22,
        "boshuAvg30d": 334.5,
        "heikinAvg30d": 3.785
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 292,
        "ouatsu": 561.579,
        "saikou": 4.29,
        "heikin": 3.3,
        "boshuAvg30d": 329.3,
        "heikinAvg30d": 4.14
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 292,
        "ouatsu": 525.492,
        "saikou": 6.07,
        "heikin": 2.9,
        "boshuAvg30d": 329.3,
        "heikinAvg30d": 4.21
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 292,
        "ouatsu": 582.221,
        "saikou": 4.29,
        "heikin": 2.53,
        "boshuAvg30d": 329.6,
        "heikinAvg30d": 4.211
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 291,
        "ouatsu": 581.103,
        "saikou": 4.29,
        "heikin": 2.65,
        "boshuAvg30d": 328.6,
        "heikinAvg30d": 4.078
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 289,
        "ouatsu": 601.118,
        "saikou": 5.97,
        "heikin": 2.94,
        "boshuAvg30d": 326.4,
        "heikinAvg30d": 4.063
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 289,
        "ouatsu": 587.52,
        "saikou": 4.49,
        "heikin": 2.48,
        "boshuAvg30d": 326.4,
        "heikinAvg30d": 3.966
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 286,
        "ouatsu": 546.433,
        "saikou": 4.29,
        "heikin": 2.49,
        "boshuAvg30d": 323.5,
        "heikinAvg30d": 3.783
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 286,
        "ouatsu": 601.286,
        "saikou": 6.45,
        "heikin": 3.23,
        "boshuAvg30d": 323.5,
        "heikinAvg30d": 3.677
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 286,
        "ouatsu": 565.078,
        "saikou": 4.81,
        "heikin": 2.78,
        "boshuAvg30d": 323.5,
        "heikinAvg30d": 3.859
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 286,
        "ouatsu": 565.062,
        "saikou": 5.8,
        "heikin": 2.76,
        "boshuAvg30d": 323.6,
        "heikinAvg30d": 3.987
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 285,
        "ouatsu": 572.096,
        "saikou": 6.74,
        "heikin": 2.67,
        "boshuAvg30d": 322.6,
        "heikinAvg30d": 3.915
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 284,
        "ouatsu": 410.816,
        "saikou": 3.43,
        "heikin": 2.18,
        "boshuAvg30d": 321.9,
        "heikinAvg30d": 3.695
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 282,
        "ouatsu": 399.212,
        "saikou": 2.86,
        "heikin": 2.18,
        "boshuAvg30d": 320.1,
        "heikinAvg30d": 3.566
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 282,
        "ouatsu": 409.32,
        "saikou": 7.17,
        "heikin": 2.76,
        "boshuAvg30d": 320.1,
        "heikinAvg30d": 3.529
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 282,
        "ouatsu": 478.182,
        "saikou": 4.76,
        "heikin": 1.75,
        "boshuAvg30d": 320.1,
        "heikinAvg30d": 3.785
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 282,
        "ouatsu": 398.087,
        "saikou": 4.93,
        "heikin": 1.95,
        "boshuAvg30d": 320.0,
        "heikinAvg30d": 3.922
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 222,
        "ouatsu": 428.631,
        "saikou": 4.94,
        "heikin": 1.9,
        "boshuAvg30d": 319.8,
        "heikinAvg30d": 3.752
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 222,
        "ouatsu": 423.477,
        "saikou": 2.49,
        "heikin": 1.84,
        "boshuAvg30d": 319.4,
        "heikinAvg30d": 3.74
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 195,
        "ouatsu": 513.708,
        "saikou": 4.81,
        "heikin": 1.41,
        "boshuAvg30d": 322.2,
        "heikinAvg30d": 3.88
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 195,
        "ouatsu": 518.342,
        "saikou": 4.72,
        "heikin": 1.34,
        "boshuAvg30d": 322.2,
        "heikinAvg30d": 3.73
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 195,
        "ouatsu": 441.74,
        "saikou": 6.03,
        "heikin": 1.79,
        "boshuAvg30d": 322.4,
        "heikinAvg30d": 3.783
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 195,
        "ouatsu": 439.923,
        "saikou": 2.78,
        "heikin": 1.48,
        "boshuAvg30d": 322.4,
        "heikinAvg30d": 3.559
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 193,
        "ouatsu": 603.291,
        "saikou": 2.49,
        "heikin": 1.36,
        "boshuAvg30d": 320.4,
        "heikinAvg30d": 3.541
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 193,
        "ouatsu": 623.712,
        "saikou": 2.49,
        "heikin": 1.75,
        "boshuAvg30d": 320.4,
        "heikinAvg30d": 3.732
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 193,
        "ouatsu": 508.652,
        "saikou": 2.5,
        "heikin": 1.48,
        "boshuAvg30d": 320.2,
        "heikinAvg30d": 3.384
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 193,
        "ouatsu": 498.223,
        "saikou": 2.49,
        "heikin": 1.74,
        "boshuAvg30d": 320.2,
        "heikinAvg30d": 3.466
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 283,
        "ouatsu": 377.787,
        "saikou": 6.29,
        "heikin": 2.5,
        "boshuAvg30d": 320.5,
        "heikinAvg30d": 3.098
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 191,
        "ouatsu": 467.556,
        "saikou": 2.9,
        "heikin": 2.02,
        "boshuAvg30d": 318.5,
        "heikinAvg30d": 3.392
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 189,
        "ouatsu": 414.318,
        "saikou": 2.69,
        "heikin": 2.16,
        "boshuAvg30d": 316.5,
        "heikinAvg30d": 3.852
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 188,
        "ouatsu": 362.716,
        "saikou": 6.2,
        "heikin": 3.02,
        "boshuAvg30d": 315.5,
        "heikinAvg30d": 3.901
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 59,
        "ouatsu": 267.955,
        "saikou": 2.78,
        "heikin": 1.17,
        "boshuAvg30d": 99.2,
        "heikinAvg30d": 1.793
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 59,
        "ouatsu": 290.008,
        "saikou": 1.84,
        "heikin": 1.14,
        "boshuAvg30d": 99.2,
        "heikinAvg30d": 1.564
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 59,
        "ouatsu": 271.801,
        "saikou": 1.78,
        "heikin": 1.35,
        "boshuAvg30d": 99.2,
        "heikinAvg30d": 1.573
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 299.696,
        "saikou": 3.19,
        "heikin": 1.37,
        "boshuAvg30d": 99.2,
        "heikinAvg30d": 1.618
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 58,
        "ouatsu": 285.781,
        "saikou": 2.97,
        "heikin": 1.59,
        "boshuAvg30d": 98.2,
        "heikinAvg30d": 1.535
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 283.797,
        "saikou": 3.08,
        "heikin": 1.89,
        "boshuAvg30d": 98.2,
        "heikinAvg30d": 1.525
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 291.706,
        "saikou": 3.19,
        "heikin": 1.61,
        "boshuAvg30d": 97.4,
        "heikinAvg30d": 1.453
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 282.218,
        "saikou": 3.3,
        "heikin": 1.93,
        "boshuAvg30d": 97.4,
        "heikinAvg30d": 1.565
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 58,
        "ouatsu": 267.713,
        "saikou": 3.31,
        "heikin": 1.62,
        "boshuAvg30d": 98.2,
        "heikinAvg30d": 1.587
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 58,
        "ouatsu": 272.004,
        "saikou": 3.04,
        "heikin": 1.89,
        "boshuAvg30d": 98.2,
        "heikinAvg30d": 1.573
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 58,
        "ouatsu": 272.066,
        "saikou": 3.38,
        "heikin": 1.57,
        "boshuAvg30d": 98.2,
        "heikinAvg30d": 1.628
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 58,
        "ouatsu": 268.582,
        "saikou": 1.36,
        "heikin": 1.12,
        "boshuAvg30d": 98.2,
        "heikinAvg30d": 1.585
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 274.827,
        "saikou": 1.95,
        "heikin": 1.24,
        "boshuAvg30d": 107.4,
        "heikinAvg30d": 1.837
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 71,
        "ouatsu": 274.827,
        "saikou": 3,
        "heikin": 1.45,
        "boshuAvg30d": 111.2,
        "heikinAvg30d": 1.897
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 74,
        "ouatsu": 274.771,
        "saikou": 3.11,
        "heikin": 2.11,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 2.015
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 76,
        "ouatsu": 258.465,
        "saikou": 3.27,
        "heikin": 2.06,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 2.015
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 76,
        "ouatsu": 271.545,
        "saikou": 2.93,
        "heikin": 2.07,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 2.146
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 76,
        "ouatsu": 260.361,
        "saikou": 2.66,
        "heikin": 1.89,
        "boshuAvg30d": 116.2,
        "heikinAvg30d": 2.294
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 81,
        "ouatsu": 273.543,
        "saikou": 3.1,
        "heikin": 1.75,
        "boshuAvg30d": 121.0,
        "heikinAvg30d": 2.737
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 81,
        "ouatsu": 273.543,
        "saikou": 4.54,
        "heikin": 2.2,
        "boshuAvg30d": 121.0,
        "heikinAvg30d": 2.773
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 81,
        "ouatsu": 269.342,
        "saikou": 2.84,
        "heikin": 1.99,
        "boshuAvg30d": 121.2,
        "heikinAvg30d": 3.002
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 81,
        "ouatsu": 273.321,
        "saikou": 2.89,
        "heikin": 1.84,
        "boshuAvg30d": 121.0,
        "heikinAvg30d": 3.02
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 80,
        "ouatsu": 279.237,
        "saikou": 4.47,
        "heikin": 2.09,
        "boshuAvg30d": 120.0,
        "heikinAvg30d": 2.893
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 79,
        "ouatsu": 275.255,
        "saikou": 3.2,
        "heikin": 1.82,
        "boshuAvg30d": 119.0,
        "heikinAvg30d": 2.953
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 75,
        "ouatsu": 244.684,
        "saikou": 4.47,
        "heikin": 1.97,
        "boshuAvg30d": 115.2,
        "heikinAvg30d": 2.896
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 75,
        "ouatsu": 256.454,
        "saikou": 3.4,
        "heikin": 1.89,
        "boshuAvg30d": 115.2,
        "heikinAvg30d": 2.868
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 75,
        "ouatsu": 259.82,
        "saikou": 2.75,
        "heikin": 1.69,
        "boshuAvg30d": 115.2,
        "heikinAvg30d": 2.761
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 74,
        "ouatsu": 261.804,
        "saikou": 2.75,
        "heikin": 1.7,
        "boshuAvg30d": 114.4,
        "heikinAvg30d": 2.761
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 74,
        "ouatsu": 220.94,
        "saikou": 2.77,
        "heikin": 1.63,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 2.989
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 74,
        "ouatsu": 219.177,
        "saikou": 2.76,
        "heikin": 1.6,
        "boshuAvg30d": 114.2,
        "heikinAvg30d": 2.951
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 72,
        "ouatsu": 256.663,
        "saikou": 4.51,
        "heikin": 2.44,
        "boshuAvg30d": 112.4,
        "heikinAvg30d": 2.697
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 72,
        "ouatsu": 214.333,
        "saikou": 3.68,
        "heikin": 2.36,
        "boshuAvg30d": 112.4,
        "heikinAvg30d": 2.838
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 72,
        "ouatsu": 248.309,
        "saikou": 6.13,
        "heikin": 3.12,
        "boshuAvg30d": 112.4,
        "heikinAvg30d": 2.753
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 72,
        "ouatsu": 266.018,
        "saikou": 4.95,
        "heikin": 2.84,
        "boshuAvg30d": 112.4,
        "heikinAvg30d": 2.859
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 72,
        "ouatsu": 264.118,
        "saikou": 3.38,
        "heikin": 2.52,
        "boshuAvg30d": 112.4,
        "heikinAvg30d": 2.657
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 71,
        "ouatsu": 262.631,
        "saikou": 4.32,
        "heikin": 2.67,
        "boshuAvg30d": 111.7,
        "heikinAvg30d": 2.682
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 69,
        "ouatsu": 266.207,
        "saikou": 3.86,
        "heikin": 2.27,
        "boshuAvg30d": 109.7,
        "heikinAvg30d": 2.321
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 69,
        "ouatsu": 267.976,
        "saikou": 3.46,
        "heikin": 2.17,
        "boshuAvg30d": 109.7,
        "heikinAvg30d": 2.182
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 69,
        "ouatsu": 293.619,
        "saikou": 5.1,
        "heikin": 2.28,
        "boshuAvg30d": 109.7,
        "heikinAvg30d": 1.934
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 69,
        "ouatsu": 327.989,
        "saikou": 5.81,
        "heikin": 2.35,
        "boshuAvg30d": 109.7,
        "heikinAvg30d": 1.809
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 69,
        "ouatsu": 276.942,
        "saikou": 5.18,
        "heikin": 2.15,
        "boshuAvg30d": 109.7,
        "heikinAvg30d": 1.717
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 69,
        "ouatsu": 243.873,
        "saikou": 5.79,
        "heikin": 2.94,
        "boshuAvg30d": 109.7,
        "heikinAvg30d": 1.746
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 70,
        "ouatsu": 251.782,
        "saikou": 5.82,
        "heikin": 3.01,
        "boshuAvg30d": 110.4,
        "heikinAvg30d": 1.62
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 71,
        "ouatsu": 251.782,
        "saikou": 5.94,
        "heikin": 3.03,
        "boshuAvg30d": 111.4,
        "heikinAvg30d": 1.856
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 71,
        "ouatsu": 307.97,
        "saikou": 2.53,
        "heikin": 1.81,
        "boshuAvg30d": 111.4,
        "heikinAvg30d": 1.892
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 292.889,
        "saikou": 2.74,
        "heikin": 1.92,
        "boshuAvg30d": 110.4,
        "heikinAvg30d": 1.9
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 273.922,
        "saikou": 2.7,
        "heikin": 1.88,
        "boshuAvg30d": 109.4,
        "heikinAvg30d": 1.79
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 270.438,
        "saikou": 2.69,
        "heikin": 1.89,
        "boshuAvg30d": 106.4,
        "heikinAvg30d": 1.893
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.25,
        "heikin": 2.1,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 0.954
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2,
        "heikin": 2,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 0.925
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 44.682,
        "saikou": 1.65,
        "heikin": 0.96,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 1.051
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 30.674,
        "saikou": 2.05,
        "heikin": 0.76,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 0.992
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.55,
        "heikin": 0.58,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 0.942
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.5,
        "heikin": 1.48,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 1.055
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.3,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 1.153
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.65,
        "heikin": 2.29,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 1.509
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 2.5,
        "heikin": 2.35,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 1.31
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 1.412
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.95,
        "heikin": 1.93,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 1.643
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 3.928,
        "saikou": 1.9,
        "heikin": 1.9,
        "boshuAvg30d": 56.1,
        "heikinAvg30d": 1.672
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 1.9,
        "heikin": 1.88,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.79
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 60.1,
        "heikinAvg30d": 1.571
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.55,
        "heikin": 2.5,
        "boshuAvg30d": 61.8,
        "heikinAvg30d": 1.482
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 3.2,
        "heikin": 2.79,
        "boshuAvg30d": 62.8,
        "heikinAvg30d": 1.444
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.696
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 63.1,
        "heikinAvg30d": 2.414
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.05,
        "heikin": 3.05,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 2.769
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 3.7,
        "heikin": 3.7,
        "boshuAvg30d": 64.1,
        "heikinAvg30d": 3.064
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 4.103
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 4.328
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 4.55,
        "heikin": 4.19,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 3.335
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.1,
        "heikinAvg30d": 3.131
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.497
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.245
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 3.605
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 2.75,
        "heikin": 2.75,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 3.067
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 3.019
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 64.3,
        "heikinAvg30d": 2.818
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 3.747
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 6.85,
        "heikin": 6.6,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 4.407
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.75,
        "heikin": 3.72,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 3.384
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.65,
        "heikin": 3.55,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 3.193
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.8,
        "heikin": 3.54,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 2.88
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 3.95,
        "heikin": 3.92,
        "boshuAvg30d": 66.1,
        "heikinAvg30d": 3.809
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.28,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 2.696
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 3.55,
        "heikin": 3.55,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 2.829
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.05,
        "heikin": 2,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 2.654
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 3.928,
        "saikou": 2.9,
        "heikin": 2.78,
        "boshuAvg30d": 65.3,
        "heikinAvg30d": 2.197
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 3.928,
        "saikou": 2.1,
        "heikin": 2.08,
        "boshuAvg30d": 63.3,
        "heikinAvg30d": 2.108
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.769
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.757
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 0,
        "heikin": 0,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.885
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.45,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 2.272
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 3.928,
        "saikou": 2.4,
        "heikin": 2.4,
        "boshuAvg30d": 62.1,
        "heikinAvg30d": 1.835
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.3,
        "heikin": 2.28,
        "boshuAvg30d": 61.1,
        "heikinAvg30d": 1.507
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 3.928,
        "saikou": 2.45,
        "heikin": 2.43,
        "boshuAvg30d": 60.8,
        "heikinAvg30d": 1.311
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 93.602,
        "saikou": 1.68,
        "heikin": 1.38,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 1.454
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 95.589,
        "saikou": 1.84,
        "heikin": 1.25,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 1.2
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 93.629,
        "saikou": 1.84,
        "heikin": 1.24,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 1.125
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 77.018,
        "saikou": 1.84,
        "heikin": 1.2,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 1.087
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 90.02,
        "saikou": 1.84,
        "heikin": 1.24,
        "boshuAvg30d": 127.9,
        "heikinAvg30d": 1.017
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 97.399,
        "saikou": 1.99,
        "heikin": 1.6,
        "boshuAvg30d": 127.7,
        "heikinAvg30d": 1.191
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 105.286,
        "saikou": 1.99,
        "heikin": 1.69,
        "boshuAvg30d": 127.9,
        "heikinAvg30d": 1.384
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.7,
        "boshuAvg30d": 127.9,
        "heikinAvg30d": 1.6
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.63,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 1.507
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.7,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 1.617
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 1.572
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 94.274,
        "saikou": 1.9,
        "heikin": 1.57,
        "boshuAvg30d": 128.9,
        "heikinAvg30d": 1.411
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 109.274,
        "saikou": 2.14,
        "heikin": 1.63,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 1.593
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 109.274,
        "saikou": 2.14,
        "heikin": 1.7,
        "boshuAvg30d": 144.2,
        "heikinAvg30d": 1.57
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 103.288,
        "saikou": 2.14,
        "heikin": 1.9,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 1.629
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 103.288,
        "saikou": 2.2,
        "heikin": 1.92,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 1.659
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 103.288,
        "saikou": 2.14,
        "heikin": 1.89,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 1.735
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 111.271,
        "saikou": 3,
        "heikin": 2.47,
        "boshuAvg30d": 152.2,
        "heikinAvg30d": 2.111
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 113.141,
        "saikou": 2.98,
        "heikin": 2.53,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 2.293
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 113.141,
        "saikou": 2.44,
        "heikin": 2.35,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 2.26
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 111.156,
        "saikou": 3,
        "heikin": 2.55,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 2.495
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 111.156,
        "saikou": 3,
        "heikin": 2.64,
        "boshuAvg30d": 151.2,
        "heikinAvg30d": 2.591
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 113.141,
        "saikou": 5.95,
        "heikin": 3.09,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 2.671
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 113.141,
        "saikou": 3,
        "heikin": 2.62,
        "boshuAvg30d": 150.4,
        "heikinAvg30d": 2.422
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 113.141,
        "saikou": 2.45,
        "heikin": 2.39,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.224
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 111.698,
        "saikou": 2.44,
        "heikin": 2.41,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.322
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 111.698,
        "saikou": 2.53,
        "heikin": 2.44,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.6
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 113.141,
        "saikou": 2.44,
        "heikin": 2.38,
        "boshuAvg30d": 149.4,
        "heikinAvg30d": 2.442
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 113.141,
        "saikou": 2.6,
        "heikin": 2.43,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.348
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 113.141,
        "saikou": 2.44,
        "heikin": 2.38,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.233
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 113.141,
        "saikou": 3.95,
        "heikin": 2.74,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 2.354
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 111.271,
        "saikou": 3.95,
        "heikin": 2.75,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 2.601
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 111.271,
        "saikou": 3.95,
        "heikin": 2.77,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 2.453
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 90.285,
        "saikou": 2.38,
        "heikin": 2.04,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 2.297
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 105.285,
        "saikou": 2.5,
        "heikin": 2.2,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 2.343
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 107.155,
        "saikou": 3.39,
        "heikin": 2.71,
        "boshuAvg30d": 147.6,
        "heikinAvg30d": 2.574
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 103.752,
        "saikou": 2.2,
        "heikin": 1.93,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 2.091
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 103.752,
        "saikou": 2.42,
        "heikin": 1.99,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 2.13
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 113.141,
        "saikou": 1.99,
        "heikin": 1.74,
        "boshuAvg30d": 145.2,
        "heikinAvg30d": 2.063
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 113.141,
        "saikou": 1.99,
        "heikin": 1.75,
        "boshuAvg30d": 144.4,
        "heikinAvg30d": 1.999
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 111.156,
        "saikou": 1.99,
        "heikin": 1.75,
        "boshuAvg30d": 143.4,
        "heikinAvg30d": 1.926
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 107.289,
        "saikou": 1.99,
        "heikin": 1.73,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 1.927
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.71,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 1.901
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 109.274,
        "saikou": 2,
        "heikin": 1.77,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 1.971
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 109.274,
        "saikou": 2,
        "heikin": 1.78,
        "boshuAvg30d": 143.2,
        "heikinAvg30d": 1.99
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 107.276,
        "saikou": 1.99,
        "heikin": 1.72,
        "boshuAvg30d": 141.9,
        "heikinAvg30d": 1.943
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 109.274,
        "saikou": 1.99,
        "heikin": 1.72,
        "boshuAvg30d": 140.2,
        "heikinAvg30d": 1.582
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 107.424,
        "saikou": 1.99,
        "heikin": 1.72,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 1.689
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 159.416,
        "saikou": 2.69,
        "heikin": 2.37,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.065
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 159.416,
        "saikou": 2.65,
        "heikin": 2.35,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.2
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 161.216,
        "saikou": 2.52,
        "heikin": 2.27,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.06
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 163.206,
        "saikou": 2.29,
        "heikin": 2.09,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 1.904
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 163.206,
        "saikou": 2.52,
        "heikin": 2.26,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 1.884
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 163.206,
        "saikou": 2.65,
        "heikin": 2.47,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.087
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 180.065,
        "saikou": 2.68,
        "heikin": 2.5,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.261
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 180.065,
        "saikou": 3.14,
        "heikin": 2.81,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.59
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 180.065,
        "saikou": 3.24,
        "heikin": 2.99,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 2.874
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 180.065,
        "saikou": 6.61,
        "heikin": 5.43,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 3.236
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 180.065,
        "saikou": 6.35,
        "heikin": 5.29,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 3.165
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 180.065,
        "saikou": 3.24,
        "heikin": 2.57,
        "boshuAvg30d": 140.8,
        "heikinAvg30d": 3.189
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 180.065,
        "saikou": 2.68,
        "heikin": 2.26,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 3.262
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 180.065,
        "saikou": 2.52,
        "heikin": 2.18,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 2.698
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 180.065,
        "saikou": 2.67,
        "heikin": 2.26,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.755
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 180.065,
        "saikou": 2.65,
        "heikin": 2.34,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 1.481
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 180.065,
        "saikou": 2.52,
        "heikin": 2.33,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 1.553
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 180.065,
        "saikou": 3.24,
        "heikin": 2.61,
        "boshuAvg30d": 145.5,
        "heikinAvg30d": 1.634
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 162.181,
        "saikou": 6.31,
        "heikin": 5.21,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 1.782
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 162.181,
        "saikou": 8.81,
        "heikin": 6.09,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 1.761
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 162.181,
        "saikou": 5.38,
        "heikin": 4.58,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 1.663
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 162.181,
        "saikou": 4.15,
        "heikin": 3.67,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 1.593
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 162.181,
        "saikou": 4.14,
        "heikin": 3.66,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 1.661
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 162.181,
        "saikou": 4.14,
        "heikin": 3.66,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 1.7
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 133.133,
        "saikou": 4.14,
        "heikin": 4.05,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.557
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 162.181,
        "saikou": 4.14,
        "heikin": 3.66,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.65
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 162.181,
        "saikou": 4.15,
        "heikin": 3.67,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.928
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 162.181,
        "saikou": 4.15,
        "heikin": 3.64,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 1.824
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 162.181,
        "saikou": 6.77,
        "heikin": 5.61,
        "boshuAvg30d": 148.8,
        "heikinAvg30d": 1.839
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 162.181,
        "saikou": 9.71,
        "heikin": 7.69,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.826
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 162.181,
        "saikou": 7.41,
        "heikin": 6.08,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 2.174
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 162.181,
        "saikou": 9.7,
        "heikin": 6.6,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 2.44
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 162.181,
        "saikou": 7.94,
        "heikin": 5.6,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 2.866
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 165.551,
        "saikou": 8,
        "heikin": 4.22,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 3.798
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 165.551,
        "saikou": 5.45,
        "heikin": 4.19,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 4.261
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 165.551,
        "saikou": 5.55,
        "heikin": 4.25,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 4.316
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 164.561,
        "saikou": 4.93,
        "heikin": 3.88,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 4.467
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 161.191,
        "saikou": 9.75,
        "heikin": 6.68,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 4.333
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 182.445,
        "saikou": 8,
        "heikin": 3.64,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 4.079
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 181.065,
        "saikou": 8.57,
        "heikin": 5.45,
        "boshuAvg30d": 147.8,
        "heikinAvg30d": 3.532
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 181.065,
        "saikou": 8.81,
        "heikin": 5.77,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.8
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 180.065,
        "saikou": 8.06,
        "heikin": 5.93,
        "boshuAvg30d": 146.8,
        "heikinAvg30d": 3.584
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 180.065,
        "saikou": 7.94,
        "heikin": 6.04,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 3.847
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 180.065,
        "saikou": 7.02,
        "heikin": 5.42,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 3.576
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 180.065,
        "saikou": 6.35,
        "heikin": 4.96,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 3.48
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 180.065,
        "saikou": 3.81,
        "heikin": 3.05,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 2.976
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 180.065,
        "saikou": 6.06,
        "heikin": 4.23,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 2.913
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 180.065,
        "saikou": 2.55,
        "heikin": 2.25,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 2.058
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.88
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.836
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.809
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.2,
        "heikinAvg30d": 0.805
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.805
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.52,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.812
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 221.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.809
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 209.8,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.852
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 221.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.884
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 221.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.921
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 221.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.892
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 221.343,
        "saikou": 1.6,
        "heikin": 0.65,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.849
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.63,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.887
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.827
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.66,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.774
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.8,
        "heikinAvg30d": 0.785
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.8,
        "heikinAvg30d": 0.734
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 45.8,
        "heikinAvg30d": 0.783
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 0.76,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.044
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 190.343,
        "saikou": 1.7,
        "heikin": 0.88,
        "boshuAvg30d": 48.5,
        "heikinAvg30d": 1.026
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 177.343,
        "saikou": 1.7,
        "heikin": 0.9,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.025
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 177.343,
        "saikou": 1.7,
        "heikin": 0.92,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 0.957
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 177.343,
        "saikou": 1.7,
        "heikin": 1.02,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.017
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 177.343,
        "saikou": 1.7,
        "heikin": 1.04,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.024
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 168.343,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 0.996
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.018
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 166.343,
        "saikou": 1.6,
        "heikin": 0.8,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.035
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 163.343,
        "saikou": 1.6,
        "heikin": 0.62,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.053
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 177.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.096
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 177.343,
        "saikou": 1.7,
        "heikin": 0.81,
        "boshuAvg30d": 47.8,
        "heikinAvg30d": 1.032
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 158.343,
        "saikou": 1.6,
        "heikin": 0.56,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.071
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 190.343,
        "saikou": 1.7,
        "heikin": 1.49,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.079
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.195
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 168.343,
        "saikou": 1.6,
        "heikin": 1.08,
        "boshuAvg30d": 44.2,
        "heikinAvg30d": 1.302
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.47,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.411
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 167.343,
        "saikou": 1.6,
        "heikin": 1.08,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.392
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 175.343,
        "saikou": 1.6,
        "heikin": 1.37,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.387
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.43
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.46,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.3
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.327
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.48,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.294
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 190.343,
        "saikou": 1.6,
        "heikin": 1.45,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.285
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.54,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.937
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.921
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.57,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.923
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.903
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 224.343,
        "saikou": 1.6,
        "heikin": 0.89,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.943
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 224.343,
        "saikou": 1.7,
        "heikin": 0.96,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.921
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 176.982,
        "saikou": 9,
        "heikin": 6.08,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 4.646
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 188.634,
        "saikou": 8.97,
        "heikin": 6.04,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 4.232
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 185.64,
        "saikou": 9.17,
        "heikin": 6.12,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 4.072
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 185.638,
        "saikou": 8.97,
        "heikin": 6,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 3.876
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 185.638,
        "saikou": 8.9,
        "heikin": 5.95,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 3.839
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 191.558,
        "saikou": 9.05,
        "heikin": 6.09,
        "boshuAvg30d": 167.6,
        "heikinAvg30d": 4.15
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 207.297,
        "saikou": 9.17,
        "heikin": 6.16,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 4.333
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 203.469,
        "saikou": 9.05,
        "heikin": 6.11,
        "boshuAvg30d": 167.8,
        "heikinAvg30d": 4.847
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 263.297,
        "saikou": 9.19,
        "heikin": 6.93,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 5.081
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 263.297,
        "saikou": 9.39,
        "heikin": 6.87,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 5.483
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 252.297,
        "saikou": 9.22,
        "heikin": 7.13,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 5.725
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 268.273,
        "saikou": 9.36,
        "heikin": 6.76,
        "boshuAvg30d": 168.1,
        "heikinAvg30d": 5.651
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 209.273,
        "saikou": 9.34,
        "heikin": 6.18,
        "boshuAvg30d": 171.8,
        "heikinAvg30d": 5.251
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 209.273,
        "saikou": 8.88,
        "heikin": 5.85,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 4.462
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 209.273,
        "saikou": 8.87,
        "heikin": 5.77,
        "boshuAvg30d": 173.8,
        "heikinAvg30d": 3.288
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 205.273,
        "saikou": 8.82,
        "heikin": 5.71,
        "boshuAvg30d": 174.8,
        "heikinAvg30d": 3.069
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 205.273,
        "saikou": 8.81,
        "heikin": 5.66,
        "boshuAvg30d": 174.8,
        "heikinAvg30d": 3.09
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 205.273,
        "saikou": 8.86,
        "heikin": 5.69,
        "boshuAvg30d": 174.8,
        "heikinAvg30d": 3.206
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 191.391,
        "saikou": 9.07,
        "heikin": 5.74,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 3.203
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 188.391,
        "saikou": 9.06,
        "heikin": 5.7,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 3.018
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 176.546,
        "saikou": 8.97,
        "heikin": 5.75,
        "boshuAvg30d": 179.8,
        "heikinAvg30d": 2.927
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 176.546,
        "saikou": 8.9,
        "heikin": 5.76,
        "boshuAvg30d": 180.6,
        "heikinAvg30d": 2.906
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 180.512,
        "saikou": 8.84,
        "heikin": 5.51,
        "boshuAvg30d": 180.8,
        "heikinAvg30d": 2.806
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 182.436,
        "saikou": 8.89,
        "heikin": 5.54,
        "boshuAvg30d": 180.8,
        "heikinAvg30d": 2.839
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 170.934,
        "saikou": 8.81,
        "heikin": 7.98,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 2.31
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 170.934,
        "saikou": 8.7,
        "heikin": 7.81,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 2.512
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 176.775,
        "saikou": 8.9,
        "heikin": 6.39,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 3.044
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 182.739,
        "saikou": 9.22,
        "heikin": 7.55,
        "boshuAvg30d": 179.1,
        "heikinAvg30d": 3.671
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 182.739,
        "saikou": 9.37,
        "heikin": 7.01,
        "boshuAvg30d": 178.8,
        "heikinAvg30d": 3.745
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 185.739,
        "saikou": 10,
        "heikin": 7.13,
        "boshuAvg30d": 177.1,
        "heikinAvg30d": 4.27
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 182.739,
        "saikou": 10,
        "heikin": 6.71,
        "boshuAvg30d": 173.1,
        "heikinAvg30d": 4.731
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 90.739,
        "saikou": 9.27,
        "heikin": 2.89,
        "boshuAvg30d": 173.1,
        "heikinAvg30d": 5.257
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 98.289,
        "saikou": 9.2,
        "heikin": 2.95,
        "boshuAvg30d": 173.1,
        "heikinAvg30d": 6.26
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 78.927,
        "saikou": 9.29,
        "heikin": 2.93,
        "boshuAvg30d": 172.8,
        "heikinAvg30d": 6.806
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 145.464,
        "saikou": 10,
        "heikin": 6.02,
        "boshuAvg30d": 172.1,
        "heikinAvg30d": 6.882
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 145.464,
        "saikou": 10,
        "heikin": 6.05,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 6.931
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 151.311,
        "saikou": 10,
        "heikin": 6.09,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.922
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 142.909,
        "saikou": 10,
        "heikin": 6.15,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.861
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 102.503,
        "saikou": 9.05,
        "heikin": 2.78,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.616
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 110.395,
        "saikou": 8.9,
        "heikin": 2.74,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.11
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 198.113,
        "saikou": 10,
        "heikin": 6.85,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 6.154
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 201.965,
        "saikou": 9.8,
        "heikin": 6.74,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 5.807
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 215.427,
        "saikou": 9.58,
        "heikin": 6.41,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 5.699
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 215.571,
        "saikou": 8.84,
        "heikin": 5.91,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 5.703
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 215.571,
        "saikou": 8.81,
        "heikin": 5.88,
        "boshuAvg30d": 171.1,
        "heikinAvg30d": 5.938
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 213.595,
        "saikou": 8.5,
        "heikin": 5.68,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 5.591
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 213.595,
        "saikou": 8.5,
        "heikin": 5.68,
        "boshuAvg30d": 170.8,
        "heikinAvg30d": 5.468
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 216.595,
        "saikou": 8.43,
        "heikin": 5.69,
        "boshuAvg30d": 170.1,
        "heikinAvg30d": 4.641
      }
    ]
  }
};
