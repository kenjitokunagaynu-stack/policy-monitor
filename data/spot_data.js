// 電力卸売市場（スポット市場）価格ウォッチ
// 出典: 一般社団法人 日本卸電力取引所（JEPX）スポット市場ページ
//   https://www.jepx.jp/electricpower/market-data/spot/ （年度別 約定価格・入札量CSV）
// 取得方法: 上記CSVを毎日1回取得（GitHub Actions、scripts/spot_fetch_and_process.sh）。
// 対象日は取得実行日当日（受渡日）。JEPXスポットは前日取引市場のため、朝の取得時点で
// 当日分の約定結果は前日夕方までに確定・公開済み。48コマ（30分単位）のシステムプライス（全国）と
// エリアプライス（9エリア）を収録。priceAvg30d は対象日を含まない直近30日間の同一コマの単純平均値。
// spread3h（3時間値差）は当日の最高値コマ・最低値コマそれぞれの前後3コマ（計6コマ=3時間、
// 当該コマ自身は含まない）の平均値の差分。日境界をまたぐ場合は前日・翌日のコマを参照する。
window.SPOT_DATA = {
  "targetDate": "2026-10-16",
  "fetchedAt": "2026-10-16T11:15:29+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 24.56,
        "priceAvg30d": 20.17
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 23.73,
        "priceAvg30d": 18.55
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 23.18,
        "priceAvg30d": 17.6
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 23.44,
        "priceAvg30d": 17.01
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 23.44,
        "priceAvg30d": 16.77
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 23.4,
        "priceAvg30d": 17.56
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 23.87,
        "priceAvg30d": 18.3
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 23.79,
        "priceAvg30d": 19.19
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 24.0,
        "priceAvg30d": 19.91
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 24.5,
        "priceAvg30d": 20.94
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 24.3,
        "priceAvg30d": 21.66
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 24.61,
        "priceAvg30d": 21.45
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 24.76,
        "priceAvg30d": 20.54
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 23.91,
        "priceAvg30d": 17.78
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 22.28,
        "priceAvg30d": 14.96
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 20.29,
        "priceAvg30d": 13.44
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 15.81,
        "priceAvg30d": 13.22
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 12.98,
        "priceAvg30d": 13.24
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 11.9,
        "priceAvg30d": 12.99
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 9.95,
        "priceAvg30d": 12.33
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 10.0,
        "priceAvg30d": 11.41
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 9.32,
        "priceAvg30d": 10.8
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 10.0,
        "priceAvg30d": 10.6
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 10.18,
        "priceAvg30d": 10.24
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 7.83,
        "priceAvg30d": 8.03
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 8.81,
        "priceAvg30d": 8.81
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 11.29,
        "priceAvg30d": 11.15
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 14.0,
        "priceAvg30d": 13.51
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 20.0,
        "priceAvg30d": 14.35
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 22.39,
        "priceAvg30d": 17.68
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 23.31,
        "priceAvg30d": 18.83
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 26.56,
        "priceAvg30d": 22.76
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 33.67,
        "priceAvg30d": 25.65
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 35.99,
        "priceAvg30d": 28.45
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 33.39,
        "priceAvg30d": 28.17
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 33.0,
        "priceAvg30d": 28.81
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 30.0,
        "priceAvg30d": 28.21
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 26.74,
        "priceAvg30d": 27.5
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 26.31,
        "priceAvg30d": 26.33
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 24.41,
        "priceAvg30d": 24.9
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 24.41,
        "priceAvg30d": 24.13
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 23.77,
        "priceAvg30d": 23.42
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 23.77,
        "priceAvg30d": 22.79
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 24.1,
        "priceAvg30d": 22.94
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 24.25,
        "priceAvg30d": 22.98
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 23.97,
        "priceAvg30d": 21.81
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 23.95,
        "priceAvg30d": 21.68
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 23.09,
        "priceAvg30d": 19.87
      }
    ],
    "avg": 21.61,
    "max": 35.99,
    "maxBlock": 34,
    "min": 7.83,
    "minBlock": 25,
    "spread3h": 19.39,
    "spreadLowAvg": 10.6,
    "spreadHighAvg": 29.99,
    "avg30d": 18.82,
    "spread30dAvg": 17.7,
    "historyDays": 30
  },
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
    "北海道": {
      "label": "エリアプライス（北海道）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.04,
          "priceAvg30d": 17.09
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.0,
          "priceAvg30d": 15.14
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.0,
          "priceAvg30d": 15.53
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.0,
          "priceAvg30d": 15.45
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.0,
          "priceAvg30d": 16.12
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.01,
          "priceAvg30d": 17.57
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.45,
          "priceAvg30d": 18.7
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.76,
          "priceAvg30d": 18.83
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.76,
          "priceAvg30d": 18.38
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.76,
          "priceAvg30d": 18.79
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.0,
          "priceAvg30d": 19.5
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.21,
          "priceAvg30d": 19.08
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.17,
          "priceAvg30d": 16.69
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.76,
          "priceAvg30d": 14.94
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.47,
          "priceAvg30d": 12.23
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 19.3,
          "priceAvg30d": 10.24
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.01,
          "priceAvg30d": 9.02
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.0,
          "priceAvg30d": 8.68
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.26,
          "priceAvg30d": 7.11
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.32,
          "priceAvg30d": 6.35
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.32,
          "priceAvg30d": 5.83
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.32,
          "priceAvg30d": 5.56
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.9,
          "priceAvg30d": 5.83
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.32,
          "priceAvg30d": 5.71
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.01,
          "priceAvg30d": 5.64
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.5,
          "priceAvg30d": 5.51
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 7.86,
          "priceAvg30d": 6.28
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.07,
          "priceAvg30d": 7.98
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.0,
          "priceAvg30d": 9.32
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.27,
          "priceAvg30d": 11.46
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.0,
          "priceAvg30d": 14.48
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.76,
          "priceAvg30d": 18.78
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.3,
          "priceAvg30d": 24.72
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 39.54,
          "priceAvg30d": 28.77
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 35.3,
          "priceAvg30d": 27.58
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.06,
          "priceAvg30d": 28.35
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.3,
          "priceAvg30d": 26.72
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.51,
          "priceAvg30d": 27.35
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.39,
          "priceAvg30d": 26.54
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.04,
          "priceAvg30d": 25.33
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.28,
          "priceAvg30d": 23.97
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.6,
          "priceAvg30d": 23.12
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.53,
          "priceAvg30d": 22.16
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.3,
          "priceAvg30d": 22.7
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.0,
          "priceAvg30d": 21.67
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.7,
          "priceAvg30d": 20.43
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.94,
          "priceAvg30d": 20.12
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 13.0,
          "priceAvg30d": 18.27
        }
      ],
      "avg": 20.3,
      "max": 39.54,
      "maxBlock": 34,
      "min": 1.01,
      "minBlock": 25,
      "spread3h": 23.29,
      "spreadLowAvg": 8.0,
      "spreadHighAvg": 31.29,
      "avg30d": 16.37,
      "spread30dAvg": 19.79,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.84,
          "priceAvg30d": 22.09
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.6,
          "priceAvg30d": 20.92
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.08,
          "priceAvg30d": 20.64
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.6,
          "priceAvg30d": 20.37
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.14,
          "priceAvg30d": 20.2
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 24.14,
          "priceAvg30d": 20.17
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 24.76,
          "priceAvg30d": 20.98
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.76,
          "priceAvg30d": 21.24
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.76,
          "priceAvg30d": 21.21
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.76,
          "priceAvg30d": 21.38
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.0,
          "priceAvg30d": 21.52
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.21,
          "priceAvg30d": 21.56
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.17,
          "priceAvg30d": 20.58
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.76,
          "priceAvg30d": 19.02
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.47,
          "priceAvg30d": 15.72
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 19.3,
          "priceAvg30d": 12.88
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.01,
          "priceAvg30d": 10.95
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.13,
          "priceAvg30d": 9.19
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 7.6,
          "priceAvg30d": 8.54
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 5.53,
          "priceAvg30d": 7.31
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 6.53
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 3.77,
          "priceAvg30d": 6.01
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 2.0,
          "priceAvg30d": 5.85
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 2.39,
          "priceAvg30d": 5.79
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.01,
          "priceAvg30d": 5.69
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.5,
          "priceAvg30d": 6.05
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 7.86,
          "priceAvg30d": 7.44
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.07,
          "priceAvg30d": 9.36
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.0,
          "priceAvg30d": 11.29
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.02,
          "priceAvg30d": 14.25
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.49,
          "priceAvg30d": 17.76
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.76,
          "priceAvg30d": 23.42
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.3,
          "priceAvg30d": 27.8
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 39.54,
          "priceAvg30d": 31.67
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 35.3,
          "priceAvg30d": 31.16
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.06,
          "priceAvg30d": 31.83
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.3,
          "priceAvg30d": 30.31
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.51,
          "priceAvg30d": 29.96
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.39,
          "priceAvg30d": 28.99
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.04,
          "priceAvg30d": 27.01
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.28,
          "priceAvg30d": 25.6
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.6,
          "priceAvg30d": 24.74
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.53,
          "priceAvg30d": 24.32
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.3,
          "priceAvg30d": 25.6
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.84,
          "priceAvg30d": 24.35
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.7,
          "priceAvg30d": 23.45
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.5,
          "priceAvg30d": 23.02
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 13.79,
          "priceAvg30d": 21.67
        }
      ],
      "avg": 21.08,
      "max": 39.54,
      "maxBlock": 34,
      "min": 1.01,
      "minBlock": 25,
      "spread3h": 28.77,
      "spreadLowAvg": 4.6,
      "spreadHighAvg": 33.37,
      "avg30d": 18.9,
      "spread30dAvg": 21.6,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.84,
          "priceAvg30d": 24.09
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.6,
          "priceAvg30d": 23.15
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.08,
          "priceAvg30d": 22.92
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.6,
          "priceAvg30d": 22.71
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.14,
          "priceAvg30d": 22.51
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 24.14,
          "priceAvg30d": 22.68
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 24.76,
          "priceAvg30d": 23.16
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.76,
          "priceAvg30d": 23.56
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.76,
          "priceAvg30d": 23.73
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.76,
          "priceAvg30d": 23.95
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.0,
          "priceAvg30d": 24.02
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.21,
          "priceAvg30d": 24.06
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.17,
          "priceAvg30d": 23.63
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.76,
          "priceAvg30d": 22.57
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.47,
          "priceAvg30d": 21.62
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 22.75,
          "priceAvg30d": 21.46
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 22.27,
          "priceAvg30d": 20.51
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 21.07,
          "priceAvg30d": 21.24
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 20.95,
          "priceAvg30d": 21.33
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 20.3,
          "priceAvg30d": 21.1
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 16.24,
          "priceAvg30d": 19.66
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.66,
          "priceAvg30d": 19.39
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 14.78,
          "priceAvg30d": 19.48
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 14.34,
          "priceAvg30d": 19.42
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.3,
          "priceAvg30d": 17.9
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 14.0,
          "priceAvg30d": 18.96
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.72,
          "priceAvg30d": 19.86
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.5,
          "priceAvg30d": 22.24
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.49,
          "priceAvg30d": 23.76
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.32,
          "priceAvg30d": 25.61
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.49,
          "priceAvg30d": 24.89
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 34.0,
          "priceAvg30d": 28.34
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.3,
          "priceAvg30d": 31.64
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 39.54,
          "priceAvg30d": 34.1
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 35.3,
          "priceAvg30d": 33.13
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.06,
          "priceAvg30d": 33.89
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.3,
          "priceAvg30d": 32.69
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.51,
          "priceAvg30d": 32.35
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.39,
          "priceAvg30d": 30.89
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.04,
          "priceAvg30d": 28.9
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.28,
          "priceAvg30d": 27.32
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.6,
          "priceAvg30d": 26.52
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.53,
          "priceAvg30d": 25.83
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.3,
          "priceAvg30d": 26.77
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.95,
          "priceAvg30d": 27.09
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.3,
          "priceAvg30d": 26.24
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.98,
          "priceAvg30d": 26.07
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.63,
          "priceAvg30d": 24.53
        }
      ],
      "avg": 25.03,
      "max": 39.54,
      "maxBlock": 34,
      "min": 11.3,
      "minBlock": 25,
      "spread3h": 16.74,
      "spreadLowAvg": 16.67,
      "spreadHighAvg": 33.41,
      "avg30d": 24.61,
      "spread30dAvg": 13.47,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.84,
          "priceAvg30d": 23.93
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.6,
          "priceAvg30d": 23.03
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.08,
          "priceAvg30d": 22.7
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.6,
          "priceAvg30d": 22.38
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.14,
          "priceAvg30d": 22.22
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 24.14,
          "priceAvg30d": 22.37
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 24.76,
          "priceAvg30d": 22.89
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.76,
          "priceAvg30d": 23.26
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.76,
          "priceAvg30d": 23.45
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.0,
          "priceAvg30d": 23.76
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.0,
          "priceAvg30d": 23.96
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.66,
          "priceAvg30d": 24.02
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.17,
          "priceAvg30d": 23.66
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.76,
          "priceAvg30d": 22.33
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.47,
          "priceAvg30d": 21.0
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 19.76,
          "priceAvg30d": 19.96
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 19.76,
          "priceAvg30d": 19.04
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.76,
          "priceAvg30d": 19.73
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 19.76,
          "priceAvg30d": 19.74
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 15.0,
          "priceAvg30d": 19.24
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 13.04,
          "priceAvg30d": 17.73
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.04,
          "priceAvg30d": 17.32
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.42,
          "priceAvg30d": 17.19
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 14.34,
          "priceAvg30d": 16.97
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.3,
          "priceAvg30d": 14.58
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.59,
          "priceAvg30d": 15.32
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.72,
          "priceAvg30d": 17.96
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.5,
          "priceAvg30d": 21.17
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.49,
          "priceAvg30d": 22.42
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.32,
          "priceAvg30d": 23.87
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 26.6,
          "priceAvg30d": 24.84
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.5,
          "priceAvg30d": 27.79
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.3,
          "priceAvg30d": 30.69
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 39.54,
          "priceAvg30d": 32.82
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 35.3,
          "priceAvg30d": 32.39
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.06,
          "priceAvg30d": 32.68
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.3,
          "priceAvg30d": 31.64
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.51,
          "priceAvg30d": 30.79
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.39,
          "priceAvg30d": 29.88
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.04,
          "priceAvg30d": 28.68
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.28,
          "priceAvg30d": 27.45
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.6,
          "priceAvg30d": 26.6
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.94,
          "priceAvg30d": 26.08
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.3,
          "priceAvg30d": 26.51
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.95,
          "priceAvg30d": 26.89
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.3,
          "priceAvg30d": 26.18
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.98,
          "priceAvg30d": 26.3
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.63,
          "priceAvg30d": 24.74
        }
      ],
      "avg": 24.73,
      "max": 39.54,
      "maxBlock": 34,
      "min": 11.3,
      "minBlock": 25,
      "spread3h": 18.41,
      "spreadLowAvg": 15.94,
      "spreadHighAvg": 34.34,
      "avg30d": 23.75,
      "spread30dAvg": 15.31,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.81,
          "priceAvg30d": 11.14
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.81,
          "priceAvg30d": 11.32
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.69,
          "priceAvg30d": 11.59
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.0,
          "priceAvg30d": 11.34
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.47,
          "priceAvg30d": 11.48
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.81,
          "priceAvg30d": 12.12
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 21.9,
          "priceAvg30d": 12.92
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.7,
          "priceAvg30d": 13.73
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.7,
          "priceAvg30d": 13.61
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.0,
          "priceAvg30d": 14.87
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.83,
          "priceAvg30d": 14.94
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.5,
          "priceAvg30d": 15.03
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.5,
          "priceAvg30d": 16.0
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.78,
          "priceAvg30d": 13.0
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 21.63,
          "priceAvg30d": 11.67
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 19.76,
          "priceAvg30d": 9.99
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 19.76,
          "priceAvg30d": 11.9
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.76,
          "priceAvg30d": 13.52
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 19.76,
          "priceAvg30d": 15.17
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 15.0,
          "priceAvg30d": 14.84
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 13.04,
          "priceAvg30d": 13.92
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.04,
          "priceAvg30d": 13.56
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.42,
          "priceAvg30d": 13.77
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 14.34,
          "priceAvg30d": 13.31
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.3,
          "priceAvg30d": 9.83
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.59,
          "priceAvg30d": 10.32
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.72,
          "priceAvg30d": 12.89
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.5,
          "priceAvg30d": 16.0
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 19.76,
          "priceAvg30d": 15.91
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 19.76,
          "priceAvg30d": 17.16
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.0,
          "priceAvg30d": 17.37
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.63,
          "priceAvg30d": 19.46
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.17,
          "priceAvg30d": 19.75
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 34.8,
          "priceAvg30d": 20.95
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.63,
          "priceAvg30d": 20.07
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.63,
          "priceAvg30d": 21.39
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.3,
          "priceAvg30d": 20.26
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.51,
          "priceAvg30d": 20.26
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.39,
          "priceAvg30d": 19.2
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.04,
          "priceAvg30d": 18.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.28,
          "priceAvg30d": 18.55
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.6,
          "priceAvg30d": 17.83
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.94,
          "priceAvg30d": 17.87
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.3,
          "priceAvg30d": 16.76
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.95,
          "priceAvg30d": 16.71
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.3,
          "priceAvg30d": 14.85
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.98,
          "priceAvg30d": 14.53
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.63,
          "priceAvg30d": 11.19
        }
      ],
      "avg": 21.58,
      "max": 34.8,
      "maxBlock": 34,
      "min": 11.3,
      "minBlock": 25,
      "spread3h": 5.29,
      "spreadLowAvg": 15.94,
      "spreadHighAvg": 21.23,
      "avg30d": 15.04,
      "spread30dAvg": 9.75,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.81,
          "priceAvg30d": 11.06
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.81,
          "priceAvg30d": 11.21
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.69,
          "priceAvg30d": 11.49
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.0,
          "priceAvg30d": 11.24
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.47,
          "priceAvg30d": 11.33
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.81,
          "priceAvg30d": 12.02
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 21.9,
          "priceAvg30d": 12.84
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.7,
          "priceAvg30d": 13.66
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.7,
          "priceAvg30d": 13.54
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.0,
          "priceAvg30d": 14.87
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.83,
          "priceAvg30d": 14.92
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.5,
          "priceAvg30d": 14.94
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.5,
          "priceAvg30d": 15.92
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.78,
          "priceAvg30d": 12.89
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 21.63,
          "priceAvg30d": 11.23
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 19.76,
          "priceAvg30d": 9.29
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 19.76,
          "priceAvg30d": 11.24
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.76,
          "priceAvg30d": 12.8
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 19.76,
          "priceAvg30d": 14.62
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 15.0,
          "priceAvg30d": 14.41
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 13.04,
          "priceAvg30d": 13.5
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.04,
          "priceAvg30d": 13.19
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.42,
          "priceAvg30d": 13.43
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 14.34,
          "priceAvg30d": 12.92
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.3,
          "priceAvg30d": 9.4
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.59,
          "priceAvg30d": 9.92
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.72,
          "priceAvg30d": 12.55
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.5,
          "priceAvg30d": 15.9
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 19.76,
          "priceAvg30d": 15.33
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 19.76,
          "priceAvg30d": 16.97
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.0,
          "priceAvg30d": 17.05
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.63,
          "priceAvg30d": 19.39
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.17,
          "priceAvg30d": 19.75
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 34.8,
          "priceAvg30d": 20.95
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.63,
          "priceAvg30d": 20.07
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.63,
          "priceAvg30d": 21.05
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.3,
          "priceAvg30d": 20.26
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.24,
          "priceAvg30d": 20.26
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.19,
          "priceAvg30d": 19.2
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.63,
          "priceAvg30d": 18.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.63,
          "priceAvg30d": 18.55
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.84,
          "priceAvg30d": 17.83
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.24,
          "priceAvg30d": 17.87
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.83,
          "priceAvg30d": 16.76
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.84,
          "priceAvg30d": 16.71
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.83,
          "priceAvg30d": 14.85
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.85,
          "priceAvg30d": 14.53
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 20.85,
          "priceAvg30d": 11.19
        }
      ],
      "avg": 20.02,
      "max": 34.8,
      "maxBlock": 34,
      "min": 11.3,
      "minBlock": 25,
      "spread3h": 5.29,
      "spreadLowAvg": 15.94,
      "spreadHighAvg": 21.23,
      "avg30d": 14.86,
      "spread30dAvg": 10.02,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.81,
          "priceAvg30d": 11.06
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.81,
          "priceAvg30d": 11.21
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.69,
          "priceAvg30d": 11.33
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.0,
          "priceAvg30d": 11.07
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.47,
          "priceAvg30d": 10.84
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.81,
          "priceAvg30d": 11.49
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 21.9,
          "priceAvg30d": 12.0
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.7,
          "priceAvg30d": 13.14
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.7,
          "priceAvg30d": 13.31
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.0,
          "priceAvg30d": 14.59
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.83,
          "priceAvg30d": 14.9
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.5,
          "priceAvg30d": 14.9
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.5,
          "priceAvg30d": 15.85
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.78,
          "priceAvg30d": 12.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 17.5,
          "priceAvg30d": 10.38
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.72,
          "priceAvg30d": 8.59
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.99,
          "priceAvg30d": 8.7
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.4,
          "priceAvg30d": 8.59
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.95,
          "priceAvg30d": 7.86
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.79,
          "priceAvg30d": 7.23
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.95,
          "priceAvg30d": 7.76
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.0,
          "priceAvg30d": 7.24
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.73,
          "priceAvg30d": 7.22
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.73,
          "priceAvg30d": 6.87
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.24,
          "priceAvg30d": 5.97
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.39,
          "priceAvg30d": 5.95
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.4,
          "priceAvg30d": 7.55
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.4,
          "priceAvg30d": 8.65
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.52,
          "priceAvg30d": 9.19
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.4,
          "priceAvg30d": 9.97
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.72,
          "priceAvg30d": 11.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 18.62,
          "priceAvg30d": 13.05
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.77,
          "priceAvg30d": 14.22
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 34.8,
          "priceAvg30d": 17.93
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.63,
          "priceAvg30d": 19.59
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.63,
          "priceAvg30d": 20.63
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.3,
          "priceAvg30d": 19.8
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.24,
          "priceAvg30d": 19.78
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.19,
          "priceAvg30d": 19.09
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.63,
          "priceAvg30d": 18.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.63,
          "priceAvg30d": 18.41
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.84,
          "priceAvg30d": 17.75
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.24,
          "priceAvg30d": 17.83
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.83,
          "priceAvg30d": 16.67
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.84,
          "priceAvg30d": 16.6
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.83,
          "priceAvg30d": 14.84
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.85,
          "priceAvg30d": 14.53
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 20.85,
          "priceAvg30d": 11.19
        }
      ],
      "avg": 17.63,
      "max": 34.8,
      "maxBlock": 34,
      "min": 8.39,
      "minBlock": 26,
      "spread3h": 10.11,
      "spreadLowAvg": 9.84,
      "spreadHighAvg": 19.95,
      "avg30d": 12.65,
      "spread30dAvg": 12.12,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.81,
          "priceAvg30d": 10.96
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.81,
          "priceAvg30d": 10.92
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.69,
          "priceAvg30d": 10.91
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.0,
          "priceAvg30d": 10.67
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.0,
          "priceAvg30d": 10.35
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.21,
          "priceAvg30d": 11.09
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 8.22,
          "priceAvg30d": 11.47
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 8.14,
          "priceAvg30d": 12.7
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.22,
          "priceAvg30d": 12.36
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.31,
          "priceAvg30d": 14.01
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 8.31,
          "priceAvg30d": 14.23
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 8.31,
          "priceAvg30d": 14.12
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 8.37,
          "priceAvg30d": 14.75
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 8.22,
          "priceAvg30d": 11.73
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 3.0,
          "priceAvg30d": 9.3
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 0.01,
          "priceAvg30d": 7.88
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 0.01,
          "priceAvg30d": 8.1
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.01,
          "priceAvg30d": 8.17
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 7.37
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 6.56
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.05
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.64
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.25,
          "priceAvg30d": 6.2
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.35,
          "priceAvg30d": 6.19
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.34,
          "priceAvg30d": 5.79
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.39,
          "priceAvg30d": 5.83
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.15,
          "priceAvg30d": 7.15
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 8.11
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 8.53
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 9.06
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 0.01,
          "priceAvg30d": 9.6
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.17,
          "priceAvg30d": 11.82
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.26,
          "priceAvg30d": 12.66
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 11.82,
          "priceAvg30d": 15.73
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 12.87,
          "priceAvg30d": 16.39
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.5,
          "priceAvg30d": 17.79
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 13.07,
          "priceAvg30d": 17.66
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 12.87,
          "priceAvg30d": 17.45
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 11.82,
          "priceAvg30d": 16.54
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 8.33,
          "priceAvg30d": 15.12
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 11.82,
          "priceAvg30d": 15.66
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 8.35,
          "priceAvg30d": 14.92
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 8.33,
          "priceAvg30d": 15.25
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 8.31,
          "priceAvg30d": 14.28
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 8.31,
          "priceAvg30d": 14.36
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 8.22,
          "priceAvg30d": 13.13
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 8.26,
          "priceAvg30d": 13.36
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.22,
          "priceAvg30d": 10.46
        }
      ],
      "avg": 8.09,
      "max": 20.5,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 16,
      "spread3h": 8.1,
      "spreadLowAvg": 3.69,
      "spreadHighAvg": 11.78,
      "avg30d": 11.47,
      "spread30dAvg": 10.87,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.81,
          "priceAvg30d": 11.06
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.81,
          "priceAvg30d": 11.21
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.69,
          "priceAvg30d": 11.33
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.0,
          "priceAvg30d": 11.07
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.47,
          "priceAvg30d": 10.84
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.81,
          "priceAvg30d": 11.49
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 21.9,
          "priceAvg30d": 12.0
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.7,
          "priceAvg30d": 13.14
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.7,
          "priceAvg30d": 13.31
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.0,
          "priceAvg30d": 14.59
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.83,
          "priceAvg30d": 14.86
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.5,
          "priceAvg30d": 14.9
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.5,
          "priceAvg30d": 15.85
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.78,
          "priceAvg30d": 12.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 17.5,
          "priceAvg30d": 10.38
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.72,
          "priceAvg30d": 8.59
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.99,
          "priceAvg30d": 8.41
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.4,
          "priceAvg30d": 7.94
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.95,
          "priceAvg30d": 6.91
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.79,
          "priceAvg30d": 6.33
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.95,
          "priceAvg30d": 6.2
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.0,
          "priceAvg30d": 5.67
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.73,
          "priceAvg30d": 5.45
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.73,
          "priceAvg30d": 5.32
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.24,
          "priceAvg30d": 4.94
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.39,
          "priceAvg30d": 5.07
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.4,
          "priceAvg30d": 5.99
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.4,
          "priceAvg30d": 7.12
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.52,
          "priceAvg30d": 8.17
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.4,
          "priceAvg30d": 9.19
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.72,
          "priceAvg30d": 10.58
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 18.62,
          "priceAvg30d": 12.55
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.77,
          "priceAvg30d": 14.22
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 34.8,
          "priceAvg30d": 17.93
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.63,
          "priceAvg30d": 19.59
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.63,
          "priceAvg30d": 20.63
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.3,
          "priceAvg30d": 19.8
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.24,
          "priceAvg30d": 19.78
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.19,
          "priceAvg30d": 19.09
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.63,
          "priceAvg30d": 18.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.63,
          "priceAvg30d": 18.41
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.84,
          "priceAvg30d": 17.75
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.24,
          "priceAvg30d": 17.83
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.83,
          "priceAvg30d": 16.67
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.84,
          "priceAvg30d": 16.6
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.83,
          "priceAvg30d": 14.84
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.85,
          "priceAvg30d": 14.53
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 20.85,
          "priceAvg30d": 11.19
        }
      ],
      "avg": 17.63,
      "max": 34.8,
      "maxBlock": 34,
      "min": 8.39,
      "minBlock": 26,
      "spread3h": 10.11,
      "spreadLowAvg": 9.84,
      "spreadHighAvg": 19.95,
      "avg30d": 12.29,
      "spread30dAvg": 12.65,
      "historyDays": 30
    }
  }
};
