// 需給調整市場 一次調整力（複合市場）約定結果データ
// 出典: 一般社団法人 電力需給調整力取引所（EPRX）「取引結果・連系線確保量結果ダウンロード（速報値）」
//   https://www.eprx.or.jp/information/results.php （年度別 一次調整力 複合取引 速報値CSV, zip一括ダウンロード）
// 取得方法: 上記ページのCSV一括ダウンロードリンクから1日1回だけ取得（GitHub Actions、scripts/eprx_fetch_and_process.sh）。
// boshuAvg30d / heikinAvg30d は対象日を含まない直近30日間（本データでは2026/09/28〜2026/10/27）の
// 同一コマの単純平均値。EPRXサイトの利用規約上、自動的な大量取得には事前承諾が必要なため、
// このファイルは毎日1回のGitHub Actionsワークフロー（.github/workflows/eprx-daily.yml）でのみ更新されます。
window.EPRX_DATA = {
  "product": "一次調整力（複合市場）",
  "targetDate": "2026-10-28",
  "fetchedAt": "2026-10-28",
  "avgWindowLabel": "過去30日平均（2026/09/28〜2026/10/27）",
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
      "boshu": 934,
      "ouatsu": 1569.847,
      "saikou": 10,
      "heikin": 2.64,
      "boshuAvg30d": 1060.2,
      "heikinAvg30d": 3.05
    },
    {
      "block": 2,
      "label": "00:30~01:00",
      "boshu": 934,
      "ouatsu": 1581.622,
      "saikou": 10,
      "heikin": 2.6,
      "boshuAvg30d": 1060.2,
      "heikinAvg30d": 2.946
    },
    {
      "block": 3,
      "label": "01:00~01:30",
      "boshu": 934,
      "ouatsu": 1802.44,
      "saikou": 10,
      "heikin": 2.49,
      "boshuAvg30d": 1060.2,
      "heikinAvg30d": 2.863
    },
    {
      "block": 4,
      "label": "01:30~02:00",
      "boshu": 934,
      "ouatsu": 1687.219,
      "saikou": 10,
      "heikin": 2.75,
      "boshuAvg30d": 1060.2,
      "heikinAvg30d": 2.836
    },
    {
      "block": 5,
      "label": "02:00~02:30",
      "boshu": 931,
      "ouatsu": 1818.41,
      "saikou": 10,
      "heikin": 2.59,
      "boshuAvg30d": 1057.0,
      "heikinAvg30d": 2.876
    },
    {
      "block": 6,
      "label": "02:30~03:00",
      "boshu": 930,
      "ouatsu": 1746.273,
      "saikou": 10,
      "heikin": 2.62,
      "boshuAvg30d": 1056.0,
      "heikinAvg30d": 2.878
    },
    {
      "block": 7,
      "label": "03:00~03:30",
      "boshu": 927,
      "ouatsu": 1719.699,
      "saikou": 9.98,
      "heikin": 3.49,
      "boshuAvg30d": 1067.6,
      "heikinAvg30d": 3.057
    },
    {
      "block": 8,
      "label": "03:30~04:00",
      "boshu": 929,
      "ouatsu": 1743.711,
      "saikou": 9.87,
      "heikin": 3.16,
      "boshuAvg30d": 1069.5,
      "heikinAvg30d": 3.276
    },
    {
      "block": 9,
      "label": "04:00~04:30",
      "boshu": 931,
      "ouatsu": 1705.124,
      "saikou": 8.98,
      "heikin": 3.48,
      "boshuAvg30d": 1071.6,
      "heikinAvg30d": 3.354
    },
    {
      "block": 10,
      "label": "04:30~05:00",
      "boshu": 932,
      "ouatsu": 1720.336,
      "saikou": 9.61,
      "heikin": 3.91,
      "boshuAvg30d": 1072.5,
      "heikinAvg30d": 3.549
    },
    {
      "block": 11,
      "label": "05:00~05:30",
      "boshu": 932,
      "ouatsu": 1522.973,
      "saikou": 9.8,
      "heikin": 3.8,
      "boshuAvg30d": 1072.5,
      "heikinAvg30d": 3.607
    },
    {
      "block": 12,
      "label": "05:30~06:00",
      "boshu": 932,
      "ouatsu": 1564.683,
      "saikou": 9.92,
      "heikin": 3.75,
      "boshuAvg30d": 1072.5,
      "heikinAvg30d": 3.609
    },
    {
      "block": 13,
      "label": "06:00~06:30",
      "boshu": 992,
      "ouatsu": 1645.762,
      "saikou": 9.35,
      "heikin": 3.82,
      "boshuAvg30d": 1133.1,
      "heikinAvg30d": 3.617
    },
    {
      "block": 14,
      "label": "06:30~07:00",
      "boshu": 1015,
      "ouatsu": 1654.511,
      "saikou": 9.95,
      "heikin": 4.22,
      "boshuAvg30d": 1155.9,
      "heikinAvg30d": 3.465
    },
    {
      "block": 15,
      "label": "07:00~07:30",
      "boshu": 1036,
      "ouatsu": 1530.227,
      "saikou": 10,
      "heikin": 3.07,
      "boshuAvg30d": 1177.1,
      "heikinAvg30d": 3.054
    },
    {
      "block": 16,
      "label": "07:30~08:00",
      "boshu": 1053,
      "ouatsu": 1656.905,
      "saikou": 9.36,
      "heikin": 2.5,
      "boshuAvg30d": 1194.2,
      "heikinAvg30d": 2.861
    },
    {
      "block": 17,
      "label": "08:00~08:30",
      "boshu": 1063,
      "ouatsu": 1889.891,
      "saikou": 7.5,
      "heikin": 1.62,
      "boshuAvg30d": 1194.3,
      "heikinAvg30d": 2.979
    },
    {
      "block": 18,
      "label": "08:30~09:00",
      "boshu": 1063,
      "ouatsu": 1826.64,
      "saikou": 7.69,
      "heikin": 1.8,
      "boshuAvg30d": 1194.3,
      "heikinAvg30d": 2.937
    },
    {
      "block": 19,
      "label": "09:00~09:30",
      "boshu": 995,
      "ouatsu": 1911.192,
      "saikou": 8.51,
      "heikin": 1.83,
      "boshuAvg30d": 1158.5,
      "heikinAvg30d": 3.16
    },
    {
      "block": 20,
      "label": "09:30~10:00",
      "boshu": 998,
      "ouatsu": 1840.977,
      "saikou": 9.44,
      "heikin": 1.86,
      "boshuAvg30d": 1161.6,
      "heikinAvg30d": 3.203
    },
    {
      "block": 21,
      "label": "10:00~10:30",
      "boshu": 1003,
      "ouatsu": 1809.266,
      "saikou": 10,
      "heikin": 1.5,
      "boshuAvg30d": 1164.4,
      "heikinAvg30d": 3.246
    },
    {
      "block": 22,
      "label": "10:30~11:00",
      "boshu": 1003,
      "ouatsu": 1756.845,
      "saikou": 10,
      "heikin": 1.65,
      "boshuAvg30d": 1164.4,
      "heikinAvg30d": 3.184
    },
    {
      "block": 23,
      "label": "11:00~11:30",
      "boshu": 1000,
      "ouatsu": 1755.47,
      "saikou": 10,
      "heikin": 1.88,
      "boshuAvg30d": 1161.4,
      "heikinAvg30d": 3.177
    },
    {
      "block": 24,
      "label": "11:30~12:00",
      "boshu": 999,
      "ouatsu": 1663.17,
      "saikou": 10,
      "heikin": 1.77,
      "boshuAvg30d": 1160.4,
      "heikinAvg30d": 3.109
    },
    {
      "block": 25,
      "label": "12:00~12:30",
      "boshu": 979,
      "ouatsu": 1746.389,
      "saikou": 10,
      "heikin": 1.33,
      "boshuAvg30d": 1141.3,
      "heikinAvg30d": 2.973
    },
    {
      "block": 26,
      "label": "12:30~13:00",
      "boshu": 979,
      "ouatsu": 1751.802,
      "saikou": 10,
      "heikin": 1.38,
      "boshuAvg30d": 1141.3,
      "heikinAvg30d": 2.97
    },
    {
      "block": 27,
      "label": "13:00~13:30",
      "boshu": 979,
      "ouatsu": 1827.219,
      "saikou": 10,
      "heikin": 1.89,
      "boshuAvg30d": 1141.3,
      "heikinAvg30d": 3.097
    },
    {
      "block": 28,
      "label": "13:30~14:00",
      "boshu": 977,
      "ouatsu": 1749.352,
      "saikou": 9.45,
      "heikin": 2.09,
      "boshuAvg30d": 1138.9,
      "heikinAvg30d": 3.221
    },
    {
      "block": 29,
      "label": "14:00~14:30",
      "boshu": 974,
      "ouatsu": 1837.533,
      "saikou": 8.1,
      "heikin": 2,
      "boshuAvg30d": 1135.7,
      "heikinAvg30d": 3.21
    },
    {
      "block": 30,
      "label": "14:30~15:00",
      "boshu": 968,
      "ouatsu": 1882.32,
      "saikou": 9.06,
      "heikin": 3.31,
      "boshuAvg30d": 1129.6,
      "heikinAvg30d": 3.256
    },
    {
      "block": 31,
      "label": "15:00~15:30",
      "boshu": 1034,
      "ouatsu": 1930.746,
      "saikou": 10,
      "heikin": 2.61,
      "boshuAvg30d": 1168.9,
      "heikinAvg30d": 3.245
    },
    {
      "block": 32,
      "label": "15:30~16:00",
      "boshu": 1024,
      "ouatsu": 1511.291,
      "saikou": 10,
      "heikin": 2.88,
      "boshuAvg30d": 1168.9,
      "heikinAvg30d": 3.428
    },
    {
      "block": 33,
      "label": "16:00~16:30",
      "boshu": 1025,
      "ouatsu": 1428.383,
      "saikou": 10,
      "heikin": 2.73,
      "boshuAvg30d": 1169.8,
      "heikinAvg30d": 3.888
    },
    {
      "block": 34,
      "label": "16:30~17:00",
      "boshu": 1024,
      "ouatsu": 1348.56,
      "saikou": 10,
      "heikin": 3.42,
      "boshuAvg30d": 1168.7,
      "heikinAvg30d": 4.192
    },
    {
      "block": 35,
      "label": "17:00~17:30",
      "boshu": 1022,
      "ouatsu": 1277.182,
      "saikou": 10,
      "heikin": 3.39,
      "boshuAvg30d": 1164.5,
      "heikinAvg30d": 4.119
    },
    {
      "block": 36,
      "label": "17:30~18:00",
      "boshu": 1017,
      "ouatsu": 1338.08,
      "saikou": 10,
      "heikin": 3.53,
      "boshuAvg30d": 1159.3,
      "heikinAvg30d": 4.196
    },
    {
      "block": 37,
      "label": "18:00~18:30",
      "boshu": 1012,
      "ouatsu": 1427.632,
      "saikou": 10,
      "heikin": 3.69,
      "boshuAvg30d": 1153.0,
      "heikinAvg30d": 4.003
    },
    {
      "block": 38,
      "label": "18:30~19:00",
      "boshu": 1012,
      "ouatsu": 1493.804,
      "saikou": 10,
      "heikin": 4.16,
      "boshuAvg30d": 1153.0,
      "heikinAvg30d": 3.946
    },
    {
      "block": 39,
      "label": "19:00~19:30",
      "boshu": 1012,
      "ouatsu": 1551.637,
      "saikou": 10,
      "heikin": 3.43,
      "boshuAvg30d": 1153.1,
      "heikinAvg30d": 3.757
    },
    {
      "block": 40,
      "label": "19:30~20:00",
      "boshu": 1011,
      "ouatsu": 1525.479,
      "saikou": 10,
      "heikin": 3.26,
      "boshuAvg30d": 1152.1,
      "heikinAvg30d": 3.559
    },
    {
      "block": 41,
      "label": "20:00~20:30",
      "boshu": 1003,
      "ouatsu": 1572.904,
      "saikou": 9.93,
      "heikin": 3.33,
      "boshuAvg30d": 1144.4,
      "heikinAvg30d": 3.483
    },
    {
      "block": 42,
      "label": "20:30~21:00",
      "boshu": 1003,
      "ouatsu": 1424.491,
      "saikou": 9.88,
      "heikin": 2.64,
      "boshuAvg30d": 1144.0,
      "heikinAvg30d": 3.425
    },
    {
      "block": 43,
      "label": "21:00~21:30",
      "boshu": 913,
      "ouatsu": 1447.911,
      "saikou": 9.76,
      "heikin": 2.67,
      "boshuAvg30d": 1065.1,
      "heikinAvg30d": 3.318
    },
    {
      "block": 44,
      "label": "21:30~22:00",
      "boshu": 916,
      "ouatsu": 1635.409,
      "saikou": 9.46,
      "heikin": 3.25,
      "boshuAvg30d": 1068.1,
      "heikinAvg30d": 3.35
    },
    {
      "block": 45,
      "label": "22:00~22:30",
      "boshu": 917,
      "ouatsu": 1359.443,
      "saikou": 9.79,
      "heikin": 2.39,
      "boshuAvg30d": 1072.5,
      "heikinAvg30d": 3.35
    },
    {
      "block": 46,
      "label": "22:30~23:00",
      "boshu": 912,
      "ouatsu": 1616.348,
      "saikou": 10,
      "heikin": 3.09,
      "boshuAvg30d": 1064.3,
      "heikinAvg30d": 3.177
    },
    {
      "block": 47,
      "label": "23:00~23:30",
      "boshu": 913,
      "ouatsu": 1589.574,
      "saikou": 9.65,
      "heikin": 2.89,
      "boshuAvg30d": 1055.5,
      "heikinAvg30d": 3.266
    },
    {
      "block": 48,
      "label": "23:30~24:00",
      "boshu": 896,
      "ouatsu": 1488.68,
      "saikou": 9.25,
      "heikin": 2.74,
      "boshuAvg30d": 1048.4,
      "heikinAvg30d": 3.008
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
        "ouatsu": 161.958,
        "saikou": 2.46,
        "heikin": 1.77,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 3.984
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 48,
        "ouatsu": 154.958,
        "saikou": 7.69,
        "heikin": 1.99,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 3.874
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 48,
        "ouatsu": 180.708,
        "saikou": 1.63,
        "heikin": 1.48,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 3.848
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 48,
        "ouatsu": 154.958,
        "saikou": 7.69,
        "heikin": 2.09,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 3.684
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 48,
        "ouatsu": 198.908,
        "saikou": 7.2,
        "heikin": 1.86,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 4.092
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 48,
        "ouatsu": 206.218,
        "saikou": 2.3,
        "heikin": 1.7,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 3.724
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 48,
        "ouatsu": 127.908,
        "saikou": 7.69,
        "heikin": 1.91,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 3.97
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 48,
        "ouatsu": 166.208,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 3.921
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 48,
        "ouatsu": 117.908,
        "saikou": 8.67,
        "heikin": 1.54,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.03
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 48,
        "ouatsu": 166.208,
        "saikou": 1.28,
        "heikin": 1.02,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 3.759
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 48,
        "ouatsu": 117.908,
        "saikou": 9.44,
        "heikin": 1.99,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.085
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 48,
        "ouatsu": 168.418,
        "saikou": 2.9,
        "heikin": 1.69,
        "boshuAvg30d": 49.5,
        "heikinAvg30d": 4.222
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 49,
        "ouatsu": 114.908,
        "saikou": 8.67,
        "heikin": 2.81,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 3.976
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 49,
        "ouatsu": 114.908,
        "saikou": 7.69,
        "heikin": 2.92,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 4.091
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 49,
        "ouatsu": 202.208,
        "saikou": 1.63,
        "heikin": 1.29,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 3.486
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 50,
        "ouatsu": 151.958,
        "saikou": 9.36,
        "heikin": 2.93,
        "boshuAvg30d": 51.6,
        "heikinAvg30d": 3.58
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 50,
        "ouatsu": 198.208,
        "saikou": 7.5,
        "heikin": 2.07,
        "boshuAvg30d": 51.6,
        "heikinAvg30d": 3.59
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 50,
        "ouatsu": 143.968,
        "saikou": 7.69,
        "heikin": 2.26,
        "boshuAvg30d": 51.6,
        "heikinAvg30d": 2.951
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 51,
        "ouatsu": 195.218,
        "saikou": 3.8,
        "heikin": 1.74,
        "boshuAvg30d": 52.6,
        "heikinAvg30d": 3.048
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 51,
        "ouatsu": 144.99,
        "saikou": 9.44,
        "heikin": 2.35,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 2.961
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 51,
        "ouatsu": 162.59,
        "saikou": 1.64,
        "heikin": 1.56,
        "boshuAvg30d": 52.7,
        "heikinAvg30d": 3.505
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 52,
        "ouatsu": 144.99,
        "saikou": 7.69,
        "heikin": 1.99,
        "boshuAvg30d": 53.6,
        "heikinAvg30d": 2.719
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 52,
        "ouatsu": 176.94,
        "saikou": 7.58,
        "heikin": 3.75,
        "boshuAvg30d": 53.6,
        "heikinAvg30d": 3.501
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 52,
        "ouatsu": 193.268,
        "saikou": 7.58,
        "heikin": 2.29,
        "boshuAvg30d": 53.6,
        "heikinAvg30d": 3.331
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 50,
        "ouatsu": 144.95,
        "saikou": 9.44,
        "heikin": 3.11,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.213
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 50,
        "ouatsu": 143,
        "saikou": 9.44,
        "heikin": 3,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.273
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 50,
        "ouatsu": 193.29,
        "saikou": 7.69,
        "heikin": 2.75,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 2.932
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 50,
        "ouatsu": 144.968,
        "saikou": 1.64,
        "heikin": 1.63,
        "boshuAvg30d": 51.7,
        "heikinAvg30d": 3.381
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 49,
        "ouatsu": 192,
        "saikou": 1.64,
        "heikin": 1.33,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 3.513
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 49,
        "ouatsu": 164.99,
        "saikou": 8.67,
        "heikin": 1.92,
        "boshuAvg30d": 50.7,
        "heikinAvg30d": 4.234
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 47,
        "ouatsu": 165.55,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 3.396
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 47,
        "ouatsu": 208.958,
        "saikou": 3.73,
        "heikin": 2.53,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 4.432
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 47,
        "ouatsu": 257.24,
        "saikou": 3.32,
        "heikin": 3.24,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 5.556
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 47,
        "ouatsu": 181.99,
        "saikou": 6.22,
        "heikin": 6.2,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 5.772
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 47,
        "ouatsu": 132.508,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 5.061
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 47,
        "ouatsu": 130.558,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.7,
        "heikinAvg30d": 5.311
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 47,
        "ouatsu": 193.918,
        "saikou": 3.83,
        "heikin": 3.79,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 4.836
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 47,
        "ouatsu": 242.258,
        "saikou": 8,
        "heikin": 7.68,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 4.988
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 47,
        "ouatsu": 210.908,
        "saikou": 3.61,
        "heikin": 3.57,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 4.735
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 47,
        "ouatsu": 170.558,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 4.724
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 46,
        "ouatsu": 207.908,
        "saikou": 3.74,
        "heikin": 3.67,
        "boshuAvg30d": 47.7,
        "heikinAvg30d": 4.383
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 47,
        "ouatsu": 150.568,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 3.982
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 47,
        "ouatsu": 117.908,
        "saikou": 1.28,
        "heikin": 1.03,
        "boshuAvg30d": 48.6,
        "heikinAvg30d": 4.099
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 48,
        "ouatsu": 244.508,
        "saikou": 4.16,
        "heikin": 3.1,
        "boshuAvg30d": 49.6,
        "heikinAvg30d": 4.139
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 49,
        "ouatsu": 115.958,
        "saikou": 7.69,
        "heikin": 1.33,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 4.297
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 49,
        "ouatsu": 193.958,
        "saikou": 3.73,
        "heikin": 2.22,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 4.027
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 49,
        "ouatsu": 162.268,
        "saikou": 1.01,
        "heikin": 1.01,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 4.29
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 49,
        "ouatsu": 162.268,
        "saikou": 1.07,
        "heikin": 1.04,
        "boshuAvg30d": 50.6,
        "heikinAvg30d": 3.868
      }
    ],
    "東北": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 118,
        "ouatsu": 71.348,
        "saikou": 10,
        "heikin": 6.52,
        "boshuAvg30d": 109.4,
        "heikinAvg30d": 5.445
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 118,
        "ouatsu": 71.348,
        "saikou": 10,
        "heikin": 6.47,
        "boshuAvg30d": 109.4,
        "heikinAvg30d": 5.585
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 118,
        "ouatsu": 91.226,
        "saikou": 10,
        "heikin": 6.06,
        "boshuAvg30d": 109.4,
        "heikinAvg30d": 5.498
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 118,
        "ouatsu": 93.186,
        "saikou": 10,
        "heikin": 6.09,
        "boshuAvg30d": 109.4,
        "heikinAvg30d": 5.491
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 118,
        "ouatsu": 89.24,
        "saikou": 10,
        "heikin": 5.95,
        "boshuAvg30d": 109.4,
        "heikinAvg30d": 5.534
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 118,
        "ouatsu": 89.24,
        "saikou": 10,
        "heikin": 6.01,
        "boshuAvg30d": 109.4,
        "heikinAvg30d": 5.639
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 117,
        "ouatsu": 79.116,
        "saikou": 9.98,
        "heikin": 5.86,
        "boshuAvg30d": 122.7,
        "heikinAvg30d": 5.703
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 117,
        "ouatsu": 80.616,
        "saikou": 9.87,
        "heikin": 5.89,
        "boshuAvg30d": 122.7,
        "heikinAvg30d": 5.605
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 117,
        "ouatsu": 84.614,
        "saikou": 7.96,
        "heikin": 4.88,
        "boshuAvg30d": 122.7,
        "heikinAvg30d": 5.441
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 117,
        "ouatsu": 82.684,
        "saikou": 7.35,
        "heikin": 4.67,
        "boshuAvg30d": 122.7,
        "heikinAvg30d": 5.467
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 117,
        "ouatsu": 97.184,
        "saikou": 7,
        "heikin": 4.75,
        "boshuAvg30d": 122.7,
        "heikinAvg30d": 5.756
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 117,
        "ouatsu": 97.184,
        "saikou": 6.49,
        "heikin": 4.89,
        "boshuAvg30d": 122.7,
        "heikinAvg30d": 5.837
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 124,
        "ouatsu": 97.184,
        "saikou": 6.27,
        "heikin": 4.86,
        "boshuAvg30d": 129.9,
        "heikinAvg30d": 6.112
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 129,
        "ouatsu": 95.684,
        "saikou": 9.95,
        "heikin": 6.15,
        "boshuAvg30d": 134.9,
        "heikinAvg30d": 6.242
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 132,
        "ouatsu": 73.184,
        "saikou": 10,
        "heikin": 5.87,
        "boshuAvg30d": 138.2,
        "heikinAvg30d": 6.595
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 134,
        "ouatsu": 71.684,
        "saikou": 6.49,
        "heikin": 4.81,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 6.75
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 134,
        "ouatsu": 85.184,
        "saikou": 4.22,
        "heikin": 3.79,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 7.057
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 134,
        "ouatsu": 83.684,
        "saikou": 4.7,
        "heikin": 3.8,
        "boshuAvg30d": 140.4,
        "heikinAvg30d": 7.066
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 58,
        "ouatsu": 111.18,
        "saikou": 8.51,
        "heikin": 5.79,
        "boshuAvg30d": 93.8,
        "heikinAvg30d": 6.961
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 58,
        "ouatsu": 108.394,
        "saikou": 8.1,
        "heikin": 5.09,
        "boshuAvg30d": 94.0,
        "heikinAvg30d": 7.211
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 60,
        "ouatsu": 119.325,
        "saikou": 10,
        "heikin": 7.58,
        "boshuAvg30d": 93.2,
        "heikinAvg30d": 7.056
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 60,
        "ouatsu": 104.798,
        "saikou": 10,
        "heikin": 8.29,
        "boshuAvg30d": 93.3,
        "heikinAvg30d": 7.18
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 61,
        "ouatsu": 116.952,
        "saikou": 10,
        "heikin": 6.42,
        "boshuAvg30d": 94.2,
        "heikinAvg30d": 7.307
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 61,
        "ouatsu": 106.444,
        "saikou": 10,
        "heikin": 6.84,
        "boshuAvg30d": 94.2,
        "heikinAvg30d": 7.27
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 57,
        "ouatsu": 116.952,
        "saikou": 10,
        "heikin": 7.51,
        "boshuAvg30d": 90.7,
        "heikinAvg30d": 7.239
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 57,
        "ouatsu": 106.378,
        "saikou": 10,
        "heikin": 7.45,
        "boshuAvg30d": 90.7,
        "heikinAvg30d": 7.099
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 57,
        "ouatsu": 120.298,
        "saikou": 10,
        "heikin": 6.27,
        "boshuAvg30d": 90.7,
        "heikinAvg30d": 6.675
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 56,
        "ouatsu": 104.688,
        "saikou": 9.45,
        "heikin": 8.06,
        "boshuAvg30d": 89.5,
        "heikinAvg30d": 6.428
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 56,
        "ouatsu": 96.68,
        "saikou": 8.1,
        "heikin": 6.99,
        "boshuAvg30d": 89.3,
        "heikinAvg30d": 6.664
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 54,
        "ouatsu": 88.51,
        "saikou": 7.82,
        "heikin": 6.9,
        "boshuAvg30d": 87.0,
        "heikinAvg30d": 5.682
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 133,
        "ouatsu": 75.18,
        "saikou": 3.21,
        "heikin": 3.21,
        "boshuAvg30d": 139.1,
        "heikinAvg30d": 5.785
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 133,
        "ouatsu": 75.144,
        "saikou": 4.04,
        "heikin": 3.48,
        "boshuAvg30d": 139.1,
        "heikinAvg30d": 4.717
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 133,
        "ouatsu": 75.144,
        "saikou": 2.99,
        "heikin": 2.93,
        "boshuAvg30d": 139.1,
        "heikinAvg30d": 4.732
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 133,
        "ouatsu": 71.648,
        "saikou": 2.99,
        "heikin": 2.84,
        "boshuAvg30d": 139.0,
        "heikinAvg30d": 4.77
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 132,
        "ouatsu": 71.152,
        "saikou": 5.58,
        "heikin": 4.02,
        "boshuAvg30d": 137.9,
        "heikinAvg30d": 4.617
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 131,
        "ouatsu": 69.652,
        "saikou": 8.79,
        "heikin": 4.68,
        "boshuAvg30d": 136.8,
        "heikinAvg30d": 4.329
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 130,
        "ouatsu": 71.188,
        "saikou": 4.88,
        "heikin": 3.53,
        "boshuAvg30d": 135.8,
        "heikinAvg30d": 4.311
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 130,
        "ouatsu": 71.684,
        "saikou": 4,
        "heikin": 3.2,
        "boshuAvg30d": 135.8,
        "heikinAvg30d": 3.904
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 130,
        "ouatsu": 73.184,
        "saikou": 4,
        "heikin": 3.31,
        "boshuAvg30d": 135.8,
        "heikinAvg30d": 3.944
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 130,
        "ouatsu": 73.184,
        "saikou": 4.34,
        "heikin": 3.4,
        "boshuAvg30d": 135.7,
        "heikinAvg30d": 4.211
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 129,
        "ouatsu": 69.329,
        "saikou": 2.94,
        "heikin": 2.68,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 4.215
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 129,
        "ouatsu": 81.329,
        "saikou": 4,
        "heikin": 2.91,
        "boshuAvg30d": 134.8,
        "heikinAvg30d": 4.435
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 40,
        "ouatsu": 97.184,
        "saikou": 5.59,
        "heikin": 4.1,
        "boshuAvg30d": 57.2,
        "heikinAvg30d": 4.675
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 40,
        "ouatsu": 82.684,
        "saikou": 5.94,
        "heikin": 3.76,
        "boshuAvg30d": 57.2,
        "heikinAvg30d": 4.467
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 40,
        "ouatsu": 84.614,
        "saikou": 4.99,
        "heikin": 2.92,
        "boshuAvg30d": 57.2,
        "heikinAvg30d": 4.571
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 39,
        "ouatsu": 82.684,
        "saikou": 7.65,
        "heikin": 5.05,
        "boshuAvg30d": 56.2,
        "heikinAvg30d": 4.636
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 37,
        "ouatsu": 82.684,
        "saikou": 7.73,
        "heikin": 6.14,
        "boshuAvg30d": 54.3,
        "heikinAvg30d": 4.76
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 37,
        "ouatsu": 81.184,
        "saikou": 8.93,
        "heikin": 5.89,
        "boshuAvg30d": 54.2,
        "heikinAvg30d": 5.133
      }
    ],
    "東京": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 174,
        "ouatsu": 342.317,
        "saikou": 2.77,
        "heikin": 2.04,
        "boshuAvg30d": 267.1,
        "heikinAvg30d": 3.851
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 174,
        "ouatsu": 354.39,
        "saikou": 6.18,
        "heikin": 2.35,
        "boshuAvg30d": 267.1,
        "heikinAvg30d": 3.829
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 174,
        "ouatsu": 495.004,
        "saikou": 6.11,
        "heikin": 2.26,
        "boshuAvg30d": 267.1,
        "heikinAvg30d": 3.626
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 174,
        "ouatsu": 461.309,
        "saikou": 6.37,
        "heikin": 2.88,
        "boshuAvg30d": 267.1,
        "heikinAvg30d": 3.686
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 173,
        "ouatsu": 520.288,
        "saikou": 6.09,
        "heikin": 2.43,
        "boshuAvg30d": 266.0,
        "heikinAvg30d": 3.695
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 172,
        "ouatsu": 529.618,
        "saikou": 5.98,
        "heikin": 2.12,
        "boshuAvg30d": 265.1,
        "heikinAvg30d": 3.493
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 170,
        "ouatsu": 485.18,
        "saikou": 7.03,
        "heikin": 4.04,
        "boshuAvg30d": 263.2,
        "heikinAvg30d": 3.658
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 172,
        "ouatsu": 517.167,
        "saikou": 6.31,
        "heikin": 2.55,
        "boshuAvg30d": 265.1,
        "heikinAvg30d": 3.8
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 172,
        "ouatsu": 484.547,
        "saikou": 6.8,
        "heikin": 3.83,
        "boshuAvg30d": 265.2,
        "heikinAvg30d": 3.841
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 173,
        "ouatsu": 504.81,
        "saikou": 6.87,
        "heikin": 4.1,
        "boshuAvg30d": 266.1,
        "heikinAvg30d": 4.063
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 173,
        "ouatsu": 344.153,
        "saikou": 6.37,
        "heikin": 2.99,
        "boshuAvg30d": 266.1,
        "heikinAvg30d": 4.011
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 173,
        "ouatsu": 362.562,
        "saikou": 6.26,
        "heikin": 2.89,
        "boshuAvg30d": 266.1,
        "heikinAvg30d": 4.166
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 192,
        "ouatsu": 420.311,
        "saikou": 6.37,
        "heikin": 2.49,
        "boshuAvg30d": 285.3,
        "heikinAvg30d": 4.084
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 200,
        "ouatsu": 340.999,
        "saikou": 6.01,
        "heikin": 2.91,
        "boshuAvg30d": 293.3,
        "heikinAvg30d": 4.413
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 205,
        "ouatsu": 277.842,
        "saikou": 5.94,
        "heikin": 3.16,
        "boshuAvg30d": 298.3,
        "heikinAvg30d": 3.857
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 210,
        "ouatsu": 435.989,
        "saikou": 6.11,
        "heikin": 2.43,
        "boshuAvg30d": 303.3,
        "heikinAvg30d": 3.572
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 220,
        "ouatsu": 624.373,
        "saikou": 3.29,
        "heikin": 1.12,
        "boshuAvg30d": 303.3,
        "heikinAvg30d": 3.673
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 220,
        "ouatsu": 627.87,
        "saikou": 3.29,
        "heikin": 1.3,
        "boshuAvg30d": 303.3,
        "heikinAvg30d": 3.555
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 212,
        "ouatsu": 587.197,
        "saikou": 3.34,
        "heikin": 1.19,
        "boshuAvg30d": 298.2,
        "heikinAvg30d": 3.813
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 212,
        "ouatsu": 564.809,
        "saikou": 6.33,
        "heikin": 1.85,
        "boshuAvg30d": 298.2,
        "heikinAvg30d": 3.876
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 212,
        "ouatsu": 550.688,
        "saikou": 2,
        "heikin": 0.85,
        "boshuAvg30d": 298.5,
        "heikinAvg30d": 3.887
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 211,
        "ouatsu": 556.582,
        "saikou": 1.27,
        "heikin": 0.86,
        "boshuAvg30d": 297.5,
        "heikinAvg30d": 3.766
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 209,
        "ouatsu": 458.206,
        "saikou": 3.55,
        "heikin": 1.18,
        "boshuAvg30d": 295.4,
        "heikinAvg30d": 3.736
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 209,
        "ouatsu": 453.042,
        "saikou": 3.65,
        "heikin": 1.27,
        "boshuAvg30d": 295.4,
        "heikinAvg30d": 3.658
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 206,
        "ouatsu": 479.015,
        "saikou": 6.7,
        "heikin": 0.63,
        "boshuAvg30d": 292.3,
        "heikinAvg30d": 3.527
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 206,
        "ouatsu": 469.556,
        "saikou": 6.7,
        "heikin": 0.8,
        "boshuAvg30d": 292.3,
        "heikinAvg30d": 3.461
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 206,
        "ouatsu": 568.414,
        "saikou": 6.7,
        "heikin": 1.48,
        "boshuAvg30d": 292.3,
        "heikinAvg30d": 3.613
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 206,
        "ouatsu": 556.428,
        "saikou": 6.29,
        "heikin": 2.27,
        "boshuAvg30d": 292.2,
        "heikinAvg30d": 3.71
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 205,
        "ouatsu": 592.805,
        "saikou": 3.18,
        "heikin": 1.6,
        "boshuAvg30d": 291.2,
        "heikinAvg30d": 3.589
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 204,
        "ouatsu": 613.535,
        "saikou": 5.32,
        "heikin": 2.56,
        "boshuAvg30d": 290.3,
        "heikinAvg30d": 3.301
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 202,
        "ouatsu": 651.121,
        "saikou": 3.35,
        "heikin": 1.85,
        "boshuAvg30d": 288.4,
        "heikinAvg30d": 3.179
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 192,
        "ouatsu": 430.104,
        "saikou": 2.35,
        "heikin": 1.37,
        "boshuAvg30d": 288.4,
        "heikinAvg30d": 3.198
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 192,
        "ouatsu": 487.758,
        "saikou": 2.27,
        "heikin": 1.45,
        "boshuAvg30d": 288.4,
        "heikinAvg30d": 3.278
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 192,
        "ouatsu": 458.695,
        "saikou": 2.19,
        "heikin": 1.55,
        "boshuAvg30d": 288.4,
        "heikinAvg30d": 3.405
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 192,
        "ouatsu": 430.029,
        "saikou": 5.74,
        "heikin": 1.51,
        "boshuAvg30d": 286.4,
        "heikinAvg30d": 3.263
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 192,
        "ouatsu": 424.385,
        "saikou": 5.71,
        "heikin": 1.94,
        "boshuAvg30d": 286.0,
        "heikinAvg30d": 3.229
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 195,
        "ouatsu": 446.081,
        "saikou": 5.98,
        "heikin": 2.12,
        "boshuAvg30d": 287.9,
        "heikinAvg30d": 3.401
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 195,
        "ouatsu": 461.025,
        "saikou": 5.86,
        "heikin": 1.92,
        "boshuAvg30d": 287.9,
        "heikinAvg30d": 3.178
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 195,
        "ouatsu": 456.079,
        "saikou": 4.71,
        "heikin": 1.34,
        "boshuAvg30d": 288.0,
        "heikinAvg30d": 3.242
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 195,
        "ouatsu": 479.912,
        "saikou": 4.87,
        "heikin": 1.29,
        "boshuAvg30d": 288.0,
        "heikinAvg30d": 3.035
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 193,
        "ouatsu": 477.47,
        "saikou": 2.83,
        "heikin": 1.41,
        "boshuAvg30d": 286.0,
        "heikinAvg30d": 2.965
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 193,
        "ouatsu": 459.033,
        "saikou": 1.88,
        "heikin": 1.11,
        "boshuAvg30d": 286.0,
        "heikinAvg30d": 3.199
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 193,
        "ouatsu": 448.132,
        "saikou": 1.8,
        "heikin": 1.21,
        "boshuAvg30d": 285.9,
        "heikinAvg30d": 2.867
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 193,
        "ouatsu": 424.014,
        "saikou": 1.91,
        "heikin": 1.38,
        "boshuAvg30d": 285.9,
        "heikinAvg30d": 2.937
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 193,
        "ouatsu": 415.711,
        "saikou": 1.9,
        "heikin": 1.14,
        "boshuAvg30d": 289.3,
        "heikinAvg30d": 2.794
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 191,
        "ouatsu": 445.69,
        "saikou": 2.72,
        "heikin": 1.2,
        "boshuAvg30d": 284.3,
        "heikinAvg30d": 2.915
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 199,
        "ouatsu": 406.081,
        "saikou": 2.2,
        "heikin": 1.69,
        "boshuAvg30d": 282.3,
        "heikinAvg30d": 3.415
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 188,
        "ouatsu": 376.574,
        "saikou": 2.09,
        "heikin": 1.66,
        "boshuAvg30d": 281.3,
        "heikinAvg30d": 3.527
      }
    ],
    "中部": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 59,
        "ouatsu": 346.374,
        "saikou": 2.75,
        "heikin": 1.29,
        "boshuAvg30d": 99.7,
        "heikinAvg30d": 1.704
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 59,
        "ouatsu": 320.28,
        "saikou": 1.78,
        "heikin": 1.11,
        "boshuAvg30d": 99.7,
        "heikinAvg30d": 1.522
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 59,
        "ouatsu": 338.122,
        "saikou": 1.67,
        "heikin": 1.15,
        "boshuAvg30d": 99.7,
        "heikinAvg30d": 1.553
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 59,
        "ouatsu": 283.788,
        "saikou": 1.7,
        "heikin": 1.16,
        "boshuAvg30d": 99.7,
        "heikinAvg30d": 1.62
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 58,
        "ouatsu": 330.121,
        "saikou": 1.67,
        "heikin": 1.16,
        "boshuAvg30d": 98.7,
        "heikinAvg30d": 1.548
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 58,
        "ouatsu": 270.056,
        "saikou": 1.67,
        "heikin": 1.17,
        "boshuAvg30d": 98.7,
        "heikinAvg30d": 1.538
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 293.893,
        "saikou": 1.67,
        "heikin": 1.08,
        "boshuAvg30d": 97.8,
        "heikinAvg30d": 1.444
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 270.593,
        "saikou": 2.2,
        "heikin": 1.19,
        "boshuAvg30d": 97.8,
        "heikinAvg30d": 1.535
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 58,
        "ouatsu": 272.409,
        "saikou": 2.2,
        "heikin": 1.18,
        "boshuAvg30d": 98.7,
        "heikinAvg30d": 1.529
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 58,
        "ouatsu": 258.479,
        "saikou": 2.2,
        "heikin": 1.15,
        "boshuAvg30d": 98.7,
        "heikinAvg30d": 1.528
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 58,
        "ouatsu": 260.469,
        "saikou": 1.95,
        "heikin": 1.05,
        "boshuAvg30d": 98.7,
        "heikinAvg30d": 1.53
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 58,
        "ouatsu": 256.985,
        "saikou": 1.9,
        "heikin": 0.98,
        "boshuAvg30d": 98.7,
        "heikinAvg30d": 1.489
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 67,
        "ouatsu": 361.616,
        "saikou": 3.31,
        "heikin": 1.76,
        "boshuAvg30d": 107.8,
        "heikinAvg30d": 1.738
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 71,
        "ouatsu": 361.616,
        "saikou": 3.91,
        "heikin": 1.66,
        "boshuAvg30d": 111.7,
        "heikinAvg30d": 1.803
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 74,
        "ouatsu": 357.634,
        "saikou": 3.83,
        "heikin": 2.16,
        "boshuAvg30d": 114.7,
        "heikinAvg30d": 1.981
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 76,
        "ouatsu": 339.897,
        "saikou": 2.85,
        "heikin": 1.89,
        "boshuAvg30d": 116.7,
        "heikinAvg30d": 2.001
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 76,
        "ouatsu": 320.802,
        "saikou": 2.63,
        "heikin": 1.76,
        "boshuAvg30d": 116.7,
        "heikinAvg30d": 2.104
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 76,
        "ouatsu": 317.818,
        "saikou": 2.58,
        "heikin": 1.75,
        "boshuAvg30d": 116.7,
        "heikinAvg30d": 2.256
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 81,
        "ouatsu": 300.567,
        "saikou": 2.56,
        "heikin": 1.58,
        "boshuAvg30d": 121.6,
        "heikinAvg30d": 2.705
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 81,
        "ouatsu": 257.167,
        "saikou": 2.91,
        "heikin": 1.47,
        "boshuAvg30d": 121.6,
        "heikinAvg30d": 2.749
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 81,
        "ouatsu": 196.535,
        "saikou": 2.58,
        "heikin": 1.39,
        "boshuAvg30d": 121.7,
        "heikinAvg30d": 2.958
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 81,
        "ouatsu": 208.534,
        "saikou": 2.59,
        "heikin": 1.45,
        "boshuAvg30d": 121.6,
        "heikinAvg30d": 2.954
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 80,
        "ouatsu": 210.524,
        "saikou": 2.41,
        "heikin": 1.37,
        "boshuAvg30d": 120.6,
        "heikinAvg30d": 2.801
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 79,
        "ouatsu": 196.698,
        "saikou": 2.48,
        "heikin": 1.36,
        "boshuAvg30d": 119.6,
        "heikinAvg30d": 2.84
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 75,
        "ouatsu": 192.66,
        "saikou": 2.14,
        "heikin": 0.52,
        "boshuAvg30d": 115.7,
        "heikinAvg30d": 2.756
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 75,
        "ouatsu": 214.253,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 115.7,
        "heikinAvg30d": 2.74
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 75,
        "ouatsu": 226.377,
        "saikou": 2.33,
        "heikin": 1.2,
        "boshuAvg30d": 115.7,
        "heikinAvg30d": 2.706
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 74,
        "ouatsu": 228.287,
        "saikou": 2.33,
        "heikin": 1.18,
        "boshuAvg30d": 114.8,
        "heikinAvg30d": 2.761
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 74,
        "ouatsu": 210.066,
        "saikou": 3.11,
        "heikin": 2.04,
        "boshuAvg30d": 114.7,
        "heikinAvg30d": 2.963
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 74,
        "ouatsu": 226.303,
        "saikou": 3.62,
        "heikin": 2.33,
        "boshuAvg30d": 114.7,
        "heikinAvg30d": 2.849
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 72,
        "ouatsu": 299.913,
        "saikou": 3.95,
        "heikin": 2.96,
        "boshuAvg30d": 112.8,
        "heikinAvg30d": 2.613
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 72,
        "ouatsu": 213.843,
        "saikou": 3.57,
        "heikin": 2.45,
        "boshuAvg30d": 112.8,
        "heikinAvg30d": 2.779
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 72,
        "ouatsu": 191.963,
        "saikou": 9,
        "heikin": 2.86,
        "boshuAvg30d": 112.8,
        "heikinAvg30d": 2.711
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 72,
        "ouatsu": 187.988,
        "saikou": 3.46,
        "heikin": 2.44,
        "boshuAvg30d": 112.8,
        "heikinAvg30d": 2.757
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 72,
        "ouatsu": 187.988,
        "saikou": 2.52,
        "heikin": 2.26,
        "boshuAvg30d": 112.8,
        "heikinAvg30d": 2.59
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 71,
        "ouatsu": 185.905,
        "saikou": 3.3,
        "heikin": 2.21,
        "boshuAvg30d": 111.9,
        "heikinAvg30d": 2.615
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 69,
        "ouatsu": 188.971,
        "saikou": 2.26,
        "heikin": 1.85,
        "boshuAvg30d": 109.9,
        "heikinAvg30d": 2.232
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 69,
        "ouatsu": 177.773,
        "saikou": 2,
        "heikin": 1.83,
        "boshuAvg30d": 109.9,
        "heikinAvg30d": 2.132
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 69,
        "ouatsu": 232.186,
        "saikou": 1.95,
        "heikin": 1.56,
        "boshuAvg30d": 109.9,
        "heikinAvg30d": 1.853
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 69,
        "ouatsu": 239.935,
        "saikou": 1.95,
        "heikin": 1.55,
        "boshuAvg30d": 109.9,
        "heikinAvg30d": 1.703
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 69,
        "ouatsu": 230.03,
        "saikou": 2.3,
        "heikin": 1.57,
        "boshuAvg30d": 109.9,
        "heikinAvg30d": 1.612
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 69,
        "ouatsu": 244.961,
        "saikou": 3.33,
        "heikin": 1.98,
        "boshuAvg30d": 109.9,
        "heikinAvg30d": 1.665
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 70,
        "ouatsu": 252.17,
        "saikou": 3.44,
        "heikin": 1.76,
        "boshuAvg30d": 110.8,
        "heikinAvg30d": 1.534
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 71,
        "ouatsu": 294.036,
        "saikou": 3.06,
        "heikin": 1.98,
        "boshuAvg30d": 111.8,
        "heikinAvg30d": 1.787
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 71,
        "ouatsu": 225.886,
        "saikou": 3.84,
        "heikin": 1.69,
        "boshuAvg30d": 111.8,
        "heikinAvg30d": 1.781
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 70,
        "ouatsu": 276.07,
        "saikou": 3.24,
        "heikin": 1.98,
        "boshuAvg30d": 110.8,
        "heikinAvg30d": 1.814
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 69,
        "ouatsu": 314.038,
        "saikou": 3.33,
        "heikin": 1.85,
        "boshuAvg30d": 109.8,
        "heikinAvg30d": 1.702
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 66,
        "ouatsu": 310.154,
        "saikou": 3.13,
        "heikin": 1.94,
        "boshuAvg30d": 106.8,
        "heikinAvg30d": 1.87
      }
    ],
    "北陸": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.45,
        "heikin": 0.71,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 1.075
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 57,
        "ouatsu": 12.005,
        "saikou": 1.95,
        "heikin": 0.62,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 1.047
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 57,
        "ouatsu": 9.372,
        "saikou": 1.65,
        "heikin": 0.73,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 1.184
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 57,
        "ouatsu": 7.976,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 1.042
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 57,
        "ouatsu": 13.838,
        "saikou": 1.65,
        "heikin": 0.65,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 1.1
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.5,
        "heikin": 0.58,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 1.13
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.47,
        "heikin": 1.43,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 1.309
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 1.95,
        "heikin": 1.93,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 1.66
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.47,
        "heikin": 2.42,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 1.453
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.76,
        "heikin": 2.76,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 1.431
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 57,
        "ouatsu": 22.928,
        "saikou": 2.76,
        "heikin": 2.62,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 1.714
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 57,
        "ouatsu": 17.586,
        "saikou": 3.02,
        "heikin": 2.88,
        "boshuAvg30d": 56.6,
        "heikinAvg30d": 1.782
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 61,
        "ouatsu": 22.928,
        "saikou": 3.68,
        "heikin": 3.37,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 1.892
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 61,
        "ouatsu": 22.928,
        "saikou": 4.46,
        "heikin": 4.1,
        "boshuAvg30d": 60.6,
        "heikinAvg30d": 1.778
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 4.46,
        "heikin": 4.12,
        "boshuAvg30d": 62.5,
        "heikinAvg30d": 1.727
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 64,
        "ouatsu": 22.928,
        "saikou": 3.68,
        "heikin": 3.56,
        "boshuAvg30d": 63.5,
        "heikinAvg30d": 1.685
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 64,
        "ouatsu": 22.928,
        "saikou": 4.95,
        "heikin": 4.95,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.866
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 64,
        "ouatsu": 22.928,
        "saikou": 4.95,
        "heikin": 4.64,
        "boshuAvg30d": 63.6,
        "heikinAvg30d": 2.609
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 3.68,
        "heikin": 3.68,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 3.227
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 2.72,
        "heikin": 2.72,
        "boshuAvg30d": 64.6,
        "heikinAvg30d": 3.627
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 66,
        "ouatsu": 21.114,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 4.536
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 66,
        "ouatsu": 15.472,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 4.689
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 66,
        "ouatsu": 16.75,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 3.696
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 66,
        "ouatsu": 21.392,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 65.6,
        "heikinAvg30d": 3.506
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 65,
        "ouatsu": 47.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 2.535
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 65,
        "ouatsu": 47.928,
        "saikou": 0.77,
        "heikin": 0.61,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 2.183
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 0.39,
        "heikin": 0.39,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 3.634
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 2.72,
        "heikin": 2.72,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 3.044
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 5.19,
        "heikin": 5.03,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 3.355
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 65,
        "ouatsu": 22.928,
        "saikou": 5.88,
        "heikin": 5.88,
        "boshuAvg30d": 64.7,
        "heikinAvg30d": 3.176
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 7.5,
        "heikin": 7.5,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 4.116
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.45,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 4.989
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 67,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 8.97,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 3.96
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 67,
        "ouatsu": 6.838,
        "saikou": 10,
        "heikin": 6.35,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 3.67
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 67,
        "ouatsu": 9.994,
        "saikou": 10,
        "heikin": 7.52,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 3.223
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 67,
        "ouatsu": 3.928,
        "saikou": 4,
        "heikin": 3.97,
        "boshuAvg30d": 66.6,
        "heikinAvg30d": 4.032
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 66,
        "ouatsu": 11.314,
        "saikou": 10,
        "heikin": 7.32,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 3.176
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.54,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 3.455
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 9.24,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 2.86
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 66,
        "ouatsu": 22.928,
        "saikou": 10,
        "heikin": 10,
        "boshuAvg30d": 65.7,
        "heikinAvg30d": 2.649
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 64,
        "ouatsu": 22.928,
        "saikou": 8.7,
        "heikin": 7.65,
        "boshuAvg30d": 63.7,
        "heikinAvg30d": 2.358
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 8.4,
        "heikin": 7.42,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.819
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 8.17,
        "heikin": 7.25,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.93
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 63,
        "ouatsu": 22.928,
        "saikou": 7.81,
        "heikin": 7.3,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 1.985
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 63,
        "ouatsu": 18.146,
        "saikou": 4.81,
        "heikin": 4.32,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.454
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 63,
        "ouatsu": 11.818,
        "saikou": 4.32,
        "heikin": 3.71,
        "boshuAvg30d": 62.6,
        "heikinAvg30d": 2.009
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 62,
        "ouatsu": 16.658,
        "saikou": 4.56,
        "heikin": 4.02,
        "boshuAvg30d": 61.6,
        "heikinAvg30d": 1.684
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 62,
        "ouatsu": 5.37,
        "saikou": 2.89,
        "heikin": 2.55,
        "boshuAvg30d": 61.5,
        "heikinAvg30d": 1.357
      }
    ],
    "関西": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 128,
        "ouatsu": 85.893,
        "saikou": 1.74,
        "heikin": 1.37,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 1.344
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 128,
        "ouatsu": 147.713,
        "saikou": 1.74,
        "heikin": 0.88,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 1.088
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 128,
        "ouatsu": 165.274,
        "saikou": 1.46,
        "heikin": 0.76,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 1.064
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 128,
        "ouatsu": 163.256,
        "saikou": 1.46,
        "heikin": 0.76,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 1.026
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 127,
        "ouatsu": 143.269,
        "saikou": 1.46,
        "heikin": 0.84,
        "boshuAvg30d": 127.4,
        "heikinAvg30d": 0.982
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 127,
        "ouatsu": 105.467,
        "saikou": 1.79,
        "heikin": 1.32,
        "boshuAvg30d": 127.3,
        "heikinAvg30d": 1.197
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 127,
        "ouatsu": 113.354,
        "saikou": 1.94,
        "heikin": 1.37,
        "boshuAvg30d": 127.4,
        "heikinAvg30d": 1.34
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 127,
        "ouatsu": 142.991,
        "saikou": 1.99,
        "heikin": 1.27,
        "boshuAvg30d": 127.4,
        "heikinAvg30d": 1.55
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 128,
        "ouatsu": 142.991,
        "saikou": 1.99,
        "heikin": 1.22,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 1.454
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 128,
        "ouatsu": 97.728,
        "saikou": 1.99,
        "heikin": 1.68,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 1.568
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 128,
        "ouatsu": 97.728,
        "saikou": 1.99,
        "heikin": 1.66,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 1.527
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 128,
        "ouatsu": 82.728,
        "saikou": 1.99,
        "heikin": 1.56,
        "boshuAvg30d": 128.4,
        "heikinAvg30d": 1.361
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 139,
        "ouatsu": 97.728,
        "saikou": 2.04,
        "heikin": 1.55,
        "boshuAvg30d": 139.6,
        "heikinAvg30d": 1.531
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 143,
        "ouatsu": 142.991,
        "saikou": 2.04,
        "heikin": 1.25,
        "boshuAvg30d": 143.5,
        "heikinAvg30d": 1.488
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 148,
        "ouatsu": 119.22,
        "saikou": 2.04,
        "heikin": 1.53,
        "boshuAvg30d": 148.4,
        "heikinAvg30d": 1.59
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 151,
        "ouatsu": 119.22,
        "saikou": 2.09,
        "heikin": 1.6,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 1.677
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 151,
        "ouatsu": 95.609,
        "saikou": 2.12,
        "heikin": 1.83,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 1.715
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 151,
        "ouatsu": 101.595,
        "saikou": 3,
        "heikin": 2.48,
        "boshuAvg30d": 151.5,
        "heikinAvg30d": 2.087
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 151,
        "ouatsu": 101.595,
        "saikou": 2.65,
        "heikin": 2.4,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 2.285
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 125.206,
        "saikou": 3,
        "heikin": 2.07,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 2.251
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 151,
        "ouatsu": 177.296,
        "saikou": 2.6,
        "heikin": 0.75,
        "boshuAvg30d": 151.4,
        "heikinAvg30d": 2.491
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 150,
        "ouatsu": 189.282,
        "saikou": 2.6,
        "heikin": 0.69,
        "boshuAvg30d": 150.5,
        "heikinAvg30d": 2.611
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 149,
        "ouatsu": 190.84,
        "saikou": 2.04,
        "heikin": 0.44,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.697
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 149,
        "ouatsu": 190.84,
        "saikou": 2.04,
        "heikin": 0.44,
        "boshuAvg30d": 149.6,
        "heikinAvg30d": 2.48
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 148,
        "ouatsu": 173.842,
        "saikou": 2.04,
        "heikin": 1.01,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 2.264
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 148,
        "ouatsu": 175.84,
        "saikou": 2.07,
        "heikin": 1.05,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 2.356
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 148,
        "ouatsu": 101.595,
        "saikou": 2.43,
        "heikin": 2.13,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 2.571
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 148,
        "ouatsu": 170.469,
        "saikou": 2.3,
        "heikin": 1.23,
        "boshuAvg30d": 148.6,
        "heikinAvg30d": 2.396
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 148,
        "ouatsu": 101.595,
        "saikou": 2.4,
        "heikin": 2.19,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 2.294
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 101.595,
        "saikou": 2.3,
        "heikin": 2.13,
        "boshuAvg30d": 148.7,
        "heikinAvg30d": 2.151
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 147,
        "ouatsu": 101.595,
        "saikou": 3,
        "heikin": 2.61,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.34
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 147,
        "ouatsu": 99.725,
        "saikou": 3.95,
        "heikin": 2.79,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.577
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 147,
        "ouatsu": 98.282,
        "saikou": 3.95,
        "heikin": 2.84,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.462
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 147,
        "ouatsu": 77.296,
        "saikou": 2.38,
        "heikin": 2.03,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.226
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 147,
        "ouatsu": 78.739,
        "saikou": 2.5,
        "heikin": 2.19,
        "boshuAvg30d": 147.7,
        "heikinAvg30d": 2.26
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 146,
        "ouatsu": 95.609,
        "saikou": 3.39,
        "heikin": 2.67,
        "boshuAvg30d": 146.7,
        "heikinAvg30d": 2.525
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 144,
        "ouatsu": 93.649,
        "saikou": 2,
        "heikin": 1.87,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.02
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 144,
        "ouatsu": 93.649,
        "saikou": 2.02,
        "heikin": 1.83,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 2.055
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 144,
        "ouatsu": 97.728,
        "saikou": 1.94,
        "heikin": 1.66,
        "boshuAvg30d": 144.5,
        "heikinAvg30d": 1.944
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 143,
        "ouatsu": 97.728,
        "saikou": 1.99,
        "heikin": 1.71,
        "boshuAvg30d": 143.6,
        "heikinAvg30d": 1.893
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 142,
        "ouatsu": 99.701,
        "saikou": 1.99,
        "heikin": 1.67,
        "boshuAvg30d": 142.6,
        "heikinAvg30d": 1.816
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 142,
        "ouatsu": 99.701,
        "saikou": 1.99,
        "heikin": 1.7,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 1.849
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 142,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.68,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 1.8
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 142,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.76,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 1.871
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 142,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.75,
        "boshuAvg30d": 142.5,
        "heikinAvg30d": 1.875
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 141,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.61,
        "boshuAvg30d": 141.4,
        "heikinAvg30d": 1.811
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 139,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.62,
        "boshuAvg30d": 139.5,
        "heikinAvg30d": 1.481
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 137,
        "ouatsu": 101.686,
        "saikou": 1.99,
        "heikin": 1.7,
        "boshuAvg30d": 137.5,
        "heikinAvg30d": 1.605
      }
    ],
    "中国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 141,
        "ouatsu": 225.882,
        "saikou": 3.14,
        "heikin": 2.25,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.21
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 141,
        "ouatsu": 225.882,
        "saikou": 2.29,
        "heikin": 1.91,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.354
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 141,
        "ouatsu": 227.682,
        "saikou": 2.29,
        "heikin": 1.74,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.134
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 141,
        "ouatsu": 229.672,
        "saikou": 2.29,
        "heikin": 1.74,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 1.973
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 141,
        "ouatsu": 229.672,
        "saikou": 2.29,
        "heikin": 1.74,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 1.961
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 141,
        "ouatsu": 229.672,
        "saikou": 2.69,
        "heikin": 1.96,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.166
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 141,
        "ouatsu": 246.531,
        "saikou": 5.05,
        "heikin": 3.76,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.37
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 141,
        "ouatsu": 217.71,
        "saikou": 5.5,
        "heikin": 3.9,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.699
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 141,
        "ouatsu": 217.71,
        "saikou": 6.06,
        "heikin": 4.28,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 2.961
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 141,
        "ouatsu": 217.71,
        "saikou": 6.35,
        "heikin": 4.5,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 3.345
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 141,
        "ouatsu": 217.71,
        "saikou": 6.35,
        "heikin": 4.48,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 3.268
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 141,
        "ouatsu": 217.71,
        "saikou": 6.61,
        "heikin": 4.66,
        "boshuAvg30d": 140.9,
        "heikinAvg30d": 3.221
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 143,
        "ouatsu": 215.248,
        "saikou": 7.28,
        "heikin": 5.26,
        "boshuAvg30d": 142.8,
        "heikinAvg30d": 3.329
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 144,
        "ouatsu": 215.248,
        "saikou": 8.07,
        "heikin": 5.26,
        "boshuAvg30d": 143.8,
        "heikinAvg30d": 2.82
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 145,
        "ouatsu": 215.248,
        "saikou": 3.31,
        "heikin": 2.66,
        "boshuAvg30d": 144.8,
        "heikinAvg30d": 1.836
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 146,
        "ouatsu": 200.616,
        "saikou": 2.29,
        "heikin": 1.54,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 1.564
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 146,
        "ouatsu": 229.664,
        "saikou": 1.56,
        "heikin": 1.44,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 1.689
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 146,
        "ouatsu": 229.664,
        "saikou": 2.29,
        "heikin": 1.55,
        "boshuAvg30d": 145.8,
        "heikinAvg30d": 1.787
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 149,
        "ouatsu": 209.782,
        "saikou": 2.29,
        "heikin": 1.51,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 2.001
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 151,
        "ouatsu": 209.782,
        "saikou": 1.56,
        "heikin": 0.85,
        "boshuAvg30d": 150.8,
        "heikinAvg30d": 2.033
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 152,
        "ouatsu": 193.811,
        "saikou": 1.56,
        "heikin": 0.79,
        "boshuAvg30d": 151.8,
        "heikinAvg30d": 1.813
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 152,
        "ouatsu": 135.503,
        "saikou": 2.29,
        "heikin": 1.53,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 1.74
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 152,
        "ouatsu": 191.169,
        "saikou": 1.56,
        "heikin": 0.83,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 1.744
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 152,
        "ouatsu": 118.94,
        "saikou": 2.29,
        "heikin": 1.74,
        "boshuAvg30d": 151.9,
        "heikinAvg30d": 1.774
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 149,
        "ouatsu": 212.215,
        "saikou": 1.56,
        "heikin": 0.77,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.606
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 149,
        "ouatsu": 212.215,
        "saikou": 1.56,
        "heikin": 0.77,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.691
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 149,
        "ouatsu": 209.782,
        "saikou": 2.29,
        "heikin": 1.06,
        "boshuAvg30d": 149.0,
        "heikinAvg30d": 1.895
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 149,
        "ouatsu": 113.891,
        "saikou": 2.29,
        "heikin": 1.82,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 1.869
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 149,
        "ouatsu": 209.782,
        "saikou": 2.29,
        "heikin": 1.11,
        "boshuAvg30d": 148.9,
        "heikinAvg30d": 1.9
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 148,
        "ouatsu": 209.782,
        "saikou": 2.29,
        "heikin": 1.52,
        "boshuAvg30d": 148.0,
        "heikinAvg30d": 1.998
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 148,
        "ouatsu": 209.782,
        "saikou": 2.29,
        "heikin": 1.6,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 2.262
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 148,
        "ouatsu": 148.912,
        "saikou": 1.9,
        "heikin": 1.83,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 2.447
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 148,
        "ouatsu": 113.891,
        "saikou": 2.7,
        "heikin": 2.44,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 2.934
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 148,
        "ouatsu": 113.891,
        "saikou": 6.31,
        "heikin": 3.98,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 3.95
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 148,
        "ouatsu": 113.891,
        "saikou": 9.81,
        "heikin": 5.54,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 4.251
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 148,
        "ouatsu": 129.758,
        "saikou": 8.76,
        "heikin": 5.54,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 4.264
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 148,
        "ouatsu": 128.768,
        "saikou": 8.76,
        "heikin": 5.6,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 4.356
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 148,
        "ouatsu": 128.768,
        "saikou": 8.66,
        "heikin": 5.4,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 4.411
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 148,
        "ouatsu": 148.65,
        "saikou": 7.31,
        "heikin": 4.59,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 4.109
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 148,
        "ouatsu": 150.64,
        "saikou": 9.51,
        "heikin": 5.66,
        "boshuAvg30d": 147.9,
        "heikinAvg30d": 3.641
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 147,
        "ouatsu": 150.64,
        "saikou": 7.07,
        "heikin": 4.49,
        "boshuAvg30d": 147.0,
        "heikinAvg30d": 3.905
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 147,
        "ouatsu": 150.64,
        "saikou": 7.07,
        "heikin": 4.04,
        "boshuAvg30d": 146.9,
        "heikinAvg30d": 3.728
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 145,
        "ouatsu": 150.64,
        "saikou": 7.07,
        "heikin": 4.04,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 4.021
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 145,
        "ouatsu": 150.64,
        "saikou": 6.16,
        "heikin": 4.25,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 3.713
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 145,
        "ouatsu": 150.64,
        "saikou": 5.94,
        "heikin": 3.54,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 3.594
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 145,
        "ouatsu": 150.64,
        "saikou": 5.64,
        "heikin": 3.79,
        "boshuAvg30d": 144.9,
        "heikinAvg30d": 3.022
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 144,
        "ouatsu": 148.355,
        "saikou": 5.58,
        "heikin": 3.93,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 3.121
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 144,
        "ouatsu": 150.64,
        "saikou": 5.33,
        "heikin": 3.28,
        "boshuAvg30d": 143.9,
        "heikinAvg30d": 2.165
      }
    ],
    "四国": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 40,
        "ouatsu": 118.343,
        "saikou": 1.6,
        "heikin": 0.69,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.864
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 1.01,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.821
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.794
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.61,
        "boshuAvg30d": 40.1,
        "heikinAvg30d": 0.792
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.792
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 40,
        "ouatsu": 96.343,
        "saikou": 1.6,
        "heikin": 0.48,
        "boshuAvg30d": 40.0,
        "heikinAvg30d": 0.798
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.807
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 41,
        "ouatsu": 68.8,
        "saikou": 1.7,
        "heikin": 0.76,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.849
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.6,
        "heikin": 0.59,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.876
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.6,
        "heikin": 0.74,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.909
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.886
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 41,
        "ouatsu": 80.343,
        "saikou": 1.6,
        "heikin": 0.75,
        "boshuAvg30d": 41.0,
        "heikinAvg30d": 0.848
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 44,
        "ouatsu": 49.343,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.924
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 44,
        "ouatsu": 62.343,
        "saikou": 3.94,
        "heikin": 1.8,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 0.874
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 45,
        "ouatsu": 62.343,
        "saikou": 1.6,
        "heikin": 1.26,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 0.816
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 46,
        "ouatsu": 107.343,
        "saikou": 1.6,
        "heikin": 1.45,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 0.842
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 46,
        "ouatsu": 114.843,
        "saikou": 1.7,
        "heikin": 1.29,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 0.769
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 46,
        "ouatsu": 114.843,
        "saikou": 1.7,
        "heikin": 1.31,
        "boshuAvg30d": 45.9,
        "heikinAvg30d": 0.822
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 48,
        "ouatsu": 148.843,
        "saikou": 1.7,
        "heikin": 1.1,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.058
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 49,
        "ouatsu": 171.843,
        "saikou": 1.7,
        "heikin": 1.01,
        "boshuAvg30d": 48.8,
        "heikinAvg30d": 1.035
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 49,
        "ouatsu": 171.843,
        "saikou": 1.6,
        "heikin": 0.88,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.046
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 49,
        "ouatsu": 171.843,
        "saikou": 1.6,
        "heikin": 0.92,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 0.981
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 49,
        "ouatsu": 171.843,
        "saikou": 1.6,
        "heikin": 0.9,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.037
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 49,
        "ouatsu": 160.3,
        "saikou": 1.7,
        "heikin": 1.02,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.053
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 49,
        "ouatsu": 160.3,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.044
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 49,
        "ouatsu": 160.3,
        "saikou": 1.6,
        "heikin": 0.84,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.065
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 49,
        "ouatsu": 160.3,
        "saikou": 1.7,
        "heikin": 1.17,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.088
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 49,
        "ouatsu": 171.843,
        "saikou": 1.7,
        "heikin": 1.17,
        "boshuAvg30d": 48.9,
        "heikinAvg30d": 1.081
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 48,
        "ouatsu": 171.843,
        "saikou": 1.7,
        "heikin": 1.19,
        "boshuAvg30d": 48.0,
        "heikinAvg30d": 1.102
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 48,
        "ouatsu": 148.843,
        "saikou": 1.7,
        "heikin": 1.02,
        "boshuAvg30d": 47.9,
        "heikinAvg30d": 1.034
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 45,
        "ouatsu": 114.843,
        "saikou": 1.7,
        "heikin": 1.3,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.081
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 45,
        "ouatsu": 114.843,
        "saikou": 1.7,
        "heikin": 0.93,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.13
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 45,
        "ouatsu": 50.343,
        "saikou": 2.49,
        "heikin": 1.69,
        "boshuAvg30d": 45.0,
        "heikinAvg30d": 1.271
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 44,
        "ouatsu": 49.343,
        "saikou": 2.49,
        "heikin": 1.8,
        "boshuAvg30d": 44.1,
        "heikinAvg30d": 1.368
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 44,
        "ouatsu": 37.8,
        "saikou": 2.3,
        "heikin": 1.67,
        "boshuAvg30d": 44.0,
        "heikinAvg30d": 1.502
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 43,
        "ouatsu": 49.343,
        "saikou": 10,
        "heikin": 2.74,
        "boshuAvg30d": 43.0,
        "heikinAvg30d": 1.468
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 2.5,
        "heikin": 1.69,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.452
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 2.05,
        "heikin": 1.65,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.492
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.372
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 42,
        "ouatsu": 37.8,
        "saikou": 1.6,
        "heikin": 1.59,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.399
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 5,
        "heikin": 1.85,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.38
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 42,
        "ouatsu": 49.343,
        "saikou": 5,
        "heikin": 2.18,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 1.369
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 42,
        "ouatsu": 83.343,
        "saikou": 1.7,
        "heikin": 1.63,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.97
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 42,
        "ouatsu": 83.343,
        "saikou": 1.7,
        "heikin": 1.61,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.926
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 42,
        "ouatsu": 83.343,
        "saikou": 1.7,
        "heikin": 1.43,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.919
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 42,
        "ouatsu": 83.343,
        "saikou": 1.6,
        "heikin": 0.68,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.906
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 42,
        "ouatsu": 83.343,
        "saikou": 1.6,
        "heikin": 1.02,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.957
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 42,
        "ouatsu": 83.343,
        "saikou": 1.6,
        "heikin": 1.02,
        "boshuAvg30d": 42.0,
        "heikinAvg30d": 0.936
      }
    ],
    "九州": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "boshu": 169,
        "ouatsu": 194.804,
        "saikou": 8.8,
        "heikin": 5.88,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.888
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "boshu": 169,
        "ouatsu": 198.703,
        "saikou": 8.72,
        "heikin": 5.81,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.535
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "boshu": 169,
        "ouatsu": 198.709,
        "saikou": 8.34,
        "heikin": 5.55,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.437
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "boshu": 169,
        "ouatsu": 196.731,
        "saikou": 8.24,
        "heikin": 5.5,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.303
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "boshu": 169,
        "ouatsu": 196.731,
        "saikou": 8.31,
        "heikin": 5.55,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.277
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "boshu": 169,
        "ouatsu": 196.731,
        "saikou": 8.72,
        "heikin": 5.82,
        "boshuAvg30d": 168.4,
        "heikinAvg30d": 4.484
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "boshu": 169,
        "ouatsu": 270.446,
        "saikou": 8.83,
        "heikin": 6.04,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 4.681
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "boshu": 169,
        "ouatsu": 256.698,
        "saikou": 9.13,
        "heikin": 6.51,
        "boshuAvg30d": 168.5,
        "heikinAvg30d": 5.209
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "boshu": 169,
        "ouatsu": 281.674,
        "saikou": 8.98,
        "heikin": 6.44,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.466
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "boshu": 169,
        "ouatsu": 289.446,
        "saikou": 9.61,
        "heikin": 7.12,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.793
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "boshu": 169,
        "ouatsu": 284.55,
        "saikou": 9.8,
        "heikin": 7.29,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 6.023
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "boshu": 169,
        "ouatsu": 281.167,
        "saikou": 9.92,
        "heikin": 7.34,
        "boshuAvg30d": 168.6,
        "heikinAvg30d": 5.957
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "boshu": 173,
        "ouatsu": 266.496,
        "saikou": 9.35,
        "heikin": 7.15,
        "boshuAvg30d": 172.5,
        "heikinAvg30d": 5.589
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "boshu": 174,
        "ouatsu": 297.794,
        "saikou": 9.92,
        "heikin": 7.49,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 4.844
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "boshu": 175,
        "ouatsu": 199.62,
        "saikou": 9.13,
        "heikin": 5.96,
        "boshuAvg30d": 174.5,
        "heikinAvg30d": 3.763
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "boshu": 176,
        "ouatsu": 207.27,
        "saikou": 6.4,
        "heikin": 4.15,
        "boshuAvg30d": 175.5,
        "heikinAvg30d": 3.515
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "boshu": 176,
        "ouatsu": 198.28,
        "saikou": 2.61,
        "heikin": 1.81,
        "boshuAvg30d": 175.5,
        "heikinAvg30d": 3.497
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "boshu": 176,
        "ouatsu": 184.27,
        "saikou": 3.99,
        "heikin": 2.15,
        "boshuAvg30d": 175.5,
        "heikinAvg30d": 3.628
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "boshu": 180,
        "ouatsu": 233.882,
        "saikou": 2.96,
        "heikin": 2.29,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 3.652
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "boshu": 180,
        "ouatsu": 235.858,
        "saikou": 2.55,
        "heikin": 2.12,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 3.559
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "boshu": 181,
        "ouatsu": 216.064,
        "saikou": 2.76,
        "heikin": 2.37,
        "boshuAvg30d": 180.5,
        "heikinAvg30d": 3.477
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "boshu": 182,
        "ouatsu": 229.841,
        "saikou": 2.46,
        "heikin": 2.14,
        "boshuAvg30d": 181.4,
        "heikinAvg30d": 3.415
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "boshu": 182,
        "ouatsu": 222.246,
        "saikou": 2.36,
        "heikin": 2,
        "boshuAvg30d": 181.5,
        "heikinAvg30d": 3.225
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "boshu": 182,
        "ouatsu": 222.246,
        "saikou": 2.16,
        "heikin": 1.84,
        "boshuAvg30d": 181.5,
        "heikinAvg30d": 3.171
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "boshu": 180,
        "ouatsu": 218.527,
        "saikou": 0.84,
        "heikin": 0.44,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 2.89
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "boshu": 180,
        "ouatsu": 222.332,
        "saikou": 0.85,
        "heikin": 0.58,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 3.022
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "boshu": 180,
        "ouatsu": 224.235,
        "saikou": 2.63,
        "heikin": 2.45,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 3.528
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "boshu": 180,
        "ouatsu": 235.85,
        "saikou": 3.99,
        "heikin": 3.09,
        "boshuAvg30d": 179.6,
        "heikinAvg30d": 4.164
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "boshu": 180,
        "ouatsu": 239.834,
        "saikou": 3.93,
        "heikin": 3.26,
        "boshuAvg30d": 179.5,
        "heikinAvg30d": 4.047
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "boshu": 178,
        "ouatsu": 305.834,
        "saikou": 9.06,
        "heikin": 6.76,
        "boshuAvg30d": 177.6,
        "heikinAvg30d": 4.704
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "boshu": 174,
        "ouatsu": 289.834,
        "saikou": 10,
        "heikin": 6.58,
        "boshuAvg30d": 173.6,
        "heikinAvg30d": 5.069
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "boshu": 174,
        "ouatsu": 196.834,
        "saikou": 10,
        "heikin": 6.72,
        "boshuAvg30d": 173.6,
        "heikinAvg30d": 5.37
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "boshu": 174,
        "ouatsu": 130.834,
        "saikou": 10,
        "heikin": 4.9,
        "boshuAvg30d": 173.6,
        "heikinAvg30d": 6.464
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "boshu": 174,
        "ouatsu": 200.871,
        "saikou": 10,
        "heikin": 6.99,
        "boshuAvg30d": 173.5,
        "heikinAvg30d": 7.022
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "boshu": 173,
        "ouatsu": 215.081,
        "saikou": 10,
        "heikin": 7.45,
        "boshuAvg30d": 172.6,
        "heikinAvg30d": 7.153
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "boshu": 172,
        "ouatsu": 248.942,
        "saikou": 10,
        "heikin": 7.34,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 7.2
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "boshu": 171,
        "ouatsu": 244.4,
        "saikou": 10,
        "heikin": 7.37,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 7.185
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "boshu": 171,
        "ouatsu": 246.376,
        "saikou": 10,
        "heikin": 7.34,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 7.114
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "boshu": 171,
        "ouatsu": 260.631,
        "saikou": 10,
        "heikin": 7.42,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.732
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "boshu": 171,
        "ouatsu": 252.794,
        "saikou": 9.95,
        "heikin": 7.4,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.252
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "boshu": 171,
        "ouatsu": 265.555,
        "saikou": 9.93,
        "heikin": 7.37,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.477
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "boshu": 171,
        "ouatsu": 165.988,
        "saikou": 9.88,
        "heikin": 6.13,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.105
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "boshu": 171,
        "ouatsu": 173.92,
        "saikou": 9.76,
        "heikin": 5.98,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 6.087
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "boshu": 172,
        "ouatsu": 231.57,
        "saikou": 9.46,
        "heikin": 6.76,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 6.034
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "boshu": 172,
        "ouatsu": 163.459,
        "saikou": 9.79,
        "heikin": 5.33,
        "boshuAvg30d": 171.6,
        "heikinAvg30d": 6.253
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "boshu": 172,
        "ouatsu": 270.459,
        "saikou": 10,
        "heikin": 6.97,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 5.97
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "boshu": 172,
        "ouatsu": 274.461,
        "saikou": 9.65,
        "heikin": 6.63,
        "boshuAvg30d": 171.5,
        "heikinAvg30d": 5.808
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "boshu": 171,
        "ouatsu": 217.461,
        "saikou": 9.25,
        "heikin": 6.13,
        "boshuAvg30d": 170.6,
        "heikinAvg30d": 4.993
      }
    ]
  }
};
