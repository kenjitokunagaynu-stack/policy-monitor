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
  "targetDate": "2026-11-12",
  "fetchedAt": "2026-11-12T13:54:43+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 32.19,
        "priceAvg30d": 25.39
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 32.13,
        "priceAvg30d": 24.37
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 31.8,
        "priceAvg30d": 23.62
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 31.8,
        "priceAvg30d": 23.54
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 31.78,
        "priceAvg30d": 23.77
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 32.13,
        "priceAvg30d": 24.52
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 32.22,
        "priceAvg30d": 25.5
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 32.52,
        "priceAvg30d": 26.34
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 32.45,
        "priceAvg30d": 26.69
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 32.52,
        "priceAvg30d": 27.02
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 34.01,
        "priceAvg30d": 27.24
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 34.68,
        "priceAvg30d": 27.48
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 36.5,
        "priceAvg30d": 27.66
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 37.1,
        "priceAvg30d": 27.35
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 35.0,
        "priceAvg30d": 25.45
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 33.3,
        "priceAvg30d": 23.08
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 31.3,
        "priceAvg30d": 22.01
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 29.21,
        "priceAvg30d": 21.37
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 24.18,
        "priceAvg30d": 19.67
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 16.8,
        "priceAvg30d": 18.02
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 12.46,
        "priceAvg30d": 16.93
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 11.0,
        "priceAvg30d": 16.13
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 10.02,
        "priceAvg30d": 15.69
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 9.88,
        "priceAvg30d": 15.51
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 8.17,
        "priceAvg30d": 13.37
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 9.18,
        "priceAvg30d": 13.91
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 12.43,
        "priceAvg30d": 17.85
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 17.93,
        "priceAvg30d": 20.62
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 24.39,
        "priceAvg30d": 21.97
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 29.9,
        "priceAvg30d": 25.11
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 31.78,
        "priceAvg30d": 27.3
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 33.22,
        "priceAvg30d": 30.89
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 40.5,
        "priceAvg30d": 34.61
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 41.0,
        "priceAvg30d": 36.04
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 41.99,
        "priceAvg30d": 35.42
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 41.0,
        "priceAvg30d": 35.07
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 40.0,
        "priceAvg30d": 33.66
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 37.57,
        "priceAvg30d": 33.01
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 36.36,
        "priceAvg30d": 32.16
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 34.9,
        "priceAvg30d": 30.54
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 34.9,
        "priceAvg30d": 29.88
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 34.9,
        "priceAvg30d": 29.14
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 36.09,
        "priceAvg30d": 28.64
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 35.7,
        "priceAvg30d": 28.13
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 35.16,
        "priceAvg30d": 28.38
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 33.26,
        "priceAvg30d": 27.51
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 32.52,
        "priceAvg30d": 27.17
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 31.38,
        "priceAvg30d": 25.13
      }
    ],
    "avg": 29.82,
    "max": 41.99,
    "maxBlock": 35,
    "min": 8.17,
    "minBlock": 25,
    "spread3h": 27.14,
    "spreadLowAvg": 11.74,
    "spreadHighAvg": 38.88,
    "avg30d": 25.41,
    "spread30dAvg": 19.51,
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
          "price": 34.8,
          "priceAvg30d": 22.04
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 35.09,
          "priceAvg30d": 19.96
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 34.9,
          "priceAvg30d": 19.93
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 34.9,
          "priceAvg30d": 20.71
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 34.59,
          "priceAvg30d": 21.47
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 34.66,
          "priceAvg30d": 22.24
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 34.5,
          "priceAvg30d": 23.01
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.01,
          "priceAvg30d": 24.14
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.01,
          "priceAvg30d": 25.02
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.68,
          "priceAvg30d": 24.74
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 36.06,
          "priceAvg30d": 26.38
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.51,
          "priceAvg30d": 27.37
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 38.06,
          "priceAvg30d": 25.53
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 38.23,
          "priceAvg30d": 23.94
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.47,
          "priceAvg30d": 21.68
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 35.42,
          "priceAvg30d": 19.58
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.0,
          "priceAvg30d": 18.47
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.0,
          "priceAvg30d": 15.77
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.38,
          "priceAvg30d": 15.3
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.13,
          "priceAvg30d": 13.32
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.4,
          "priceAvg30d": 12.45
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.4,
          "priceAvg30d": 10.94
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.5,
          "priceAvg30d": 11.51
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.4,
          "priceAvg30d": 11.53
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.88,
          "priceAvg30d": 9.59
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.88,
          "priceAvg30d": 9.59
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.38,
          "priceAvg30d": 12.48
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.45,
          "priceAvg30d": 16.49
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 26.54,
          "priceAvg30d": 19.75
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.52,
          "priceAvg30d": 22.7
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 34.42,
          "priceAvg30d": 24.42
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 40.08,
          "priceAvg30d": 28.72
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.68,
          "priceAvg30d": 34.55
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.68,
          "priceAvg30d": 35.09
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 41.99,
          "priceAvg30d": 33.5
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 41.77,
          "priceAvg30d": 32.02
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.9,
          "priceAvg30d": 31.87
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.84,
          "priceAvg30d": 32.02
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.27,
          "priceAvg30d": 32.05
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.3,
          "priceAvg30d": 30.63
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.81,
          "priceAvg30d": 30.72
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.22,
          "priceAvg30d": 28.73
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.96,
          "priceAvg30d": 27.6
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.89,
          "priceAvg30d": 26.88
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.64,
          "priceAvg30d": 26.7
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.63,
          "priceAvg30d": 25.31
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.61,
          "priceAvg30d": 24.78
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.17,
          "priceAvg30d": 22.98
        }
      ],
      "avg": 28.26,
      "max": 41.99,
      "maxBlock": 35,
      "min": 9.88,
      "minBlock": 25,
      "spread3h": 21.99,
      "spreadLowAvg": 12.5,
      "spreadHighAvg": 34.49,
      "avg30d": 22.84,
      "spread30dAvg": 21.04,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 34.8,
          "priceAvg30d": 25.89
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 35.09,
          "priceAvg30d": 25.59
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 34.9,
          "priceAvg30d": 25.04
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 34.9,
          "priceAvg30d": 24.89
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 34.59,
          "priceAvg30d": 25.4
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 34.66,
          "priceAvg30d": 25.79
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 34.5,
          "priceAvg30d": 26.49
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.01,
          "priceAvg30d": 26.51
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.01,
          "priceAvg30d": 26.87
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.68,
          "priceAvg30d": 26.95
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 36.06,
          "priceAvg30d": 27.4
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.51,
          "priceAvg30d": 27.73
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 38.06,
          "priceAvg30d": 27.93
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 38.23,
          "priceAvg30d": 26.94
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.47,
          "priceAvg30d": 24.25
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 35.42,
          "priceAvg30d": 22.15
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.0,
          "priceAvg30d": 21.49
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.0,
          "priceAvg30d": 20.16
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.38,
          "priceAvg30d": 19.7
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.51,
          "priceAvg30d": 19.01
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.02,
          "priceAvg30d": 17.43
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.6,
          "priceAvg30d": 16.82
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 7.0,
          "priceAvg30d": 16.2
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 7.0,
          "priceAvg30d": 16.19
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 6.06,
          "priceAvg30d": 14.82
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.18,
          "priceAvg30d": 15.04
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.38,
          "priceAvg30d": 18.69
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.45,
          "priceAvg30d": 20.82
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 26.54,
          "priceAvg30d": 23.45
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.52,
          "priceAvg30d": 26.22
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 34.42,
          "priceAvg30d": 28.09
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 40.08,
          "priceAvg30d": 32.56
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 41.99,
          "priceAvg30d": 36.5
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.02,
          "priceAvg30d": 38.19
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 41.99,
          "priceAvg30d": 37.26
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 41.77,
          "priceAvg30d": 36.86
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.5,
          "priceAvg30d": 35.45
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 40.3,
          "priceAvg30d": 35.2
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 34.6
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.89,
          "priceAvg30d": 32.96
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 35.18,
          "priceAvg30d": 32.52
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 35.21,
          "priceAvg30d": 30.98
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 38.99,
          "priceAvg30d": 30.53
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 39.3,
          "priceAvg30d": 30.04
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 39.63,
          "priceAvg30d": 30.17
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 37.99,
          "priceAvg30d": 28.26
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 34.53,
          "priceAvg30d": 27.51
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.92,
          "priceAvg30d": 25.25
        }
      ],
      "avg": 30.75,
      "max": 42.02,
      "maxBlock": 34,
      "min": 6.06,
      "minBlock": 25,
      "spread3h": 29.19,
      "spreadLowAvg": 10.94,
      "spreadHighAvg": 40.12,
      "avg30d": 26.35,
      "spread30dAvg": 20.76,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 34.8,
          "priceAvg30d": 28.79
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 35.09,
          "priceAvg30d": 28.58
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 34.9,
          "priceAvg30d": 28.56
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 34.9,
          "priceAvg30d": 28.13
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 34.59,
          "priceAvg30d": 28.37
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 34.66,
          "priceAvg30d": 28.41
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 34.5,
          "priceAvg30d": 28.54
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.01,
          "priceAvg30d": 28.55
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.01,
          "priceAvg30d": 28.77
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.68,
          "priceAvg30d": 28.81
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 36.06,
          "priceAvg30d": 29.04
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.51,
          "priceAvg30d": 29.61
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 38.06,
          "priceAvg30d": 30.05
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 38.23,
          "priceAvg30d": 29.72
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.47,
          "priceAvg30d": 29.52
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 35.42,
          "priceAvg30d": 29.03
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 32.14,
          "priceAvg30d": 27.84
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.8,
          "priceAvg30d": 28.4
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.78,
          "priceAvg30d": 27.67
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.96,
          "priceAvg30d": 26.31
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 29.45,
          "priceAvg30d": 25.26
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 28.9,
          "priceAvg30d": 24.72
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.85,
          "priceAvg30d": 24.49
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 21.59,
          "priceAvg30d": 24.93
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 13.4,
          "priceAvg30d": 24.21
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 17.17,
          "priceAvg30d": 24.87
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 26.5,
          "priceAvg30d": 26.97
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 29.83,
          "priceAvg30d": 28.97
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 31.78,
          "priceAvg30d": 30.56
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.52,
          "priceAvg30d": 32.9
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 34.42,
          "priceAvg30d": 33.13
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 40.08,
          "priceAvg30d": 36.27
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 41.99,
          "priceAvg30d": 38.4
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.02,
          "priceAvg30d": 39.57
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 41.99,
          "priceAvg30d": 38.86
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 41.77,
          "priceAvg30d": 38.48
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.5,
          "priceAvg30d": 36.68
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 40.3,
          "priceAvg30d": 36.76
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 35.94
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.89,
          "priceAvg30d": 34.5
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 35.18,
          "priceAvg30d": 33.42
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 35.21,
          "priceAvg30d": 32.1
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 38.99,
          "priceAvg30d": 31.62
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 39.3,
          "priceAvg30d": 31.51
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 39.63,
          "priceAvg30d": 33.05
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 37.99,
          "priceAvg30d": 31.23
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 34.53,
          "priceAvg30d": 30.04
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.92,
          "priceAvg30d": 28.65
        }
      ],
      "avg": 34.26,
      "max": 42.02,
      "maxBlock": 34,
      "min": 13.4,
      "minBlock": 25,
      "spread3h": 14.82,
      "spreadLowAvg": 25.31,
      "spreadHighAvg": 40.12,
      "avg30d": 30.43,
      "spread30dAvg": 13.99,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 34.8,
          "priceAvg30d": 28.02
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 35.09,
          "priceAvg30d": 27.79
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 34.9,
          "priceAvg30d": 27.24
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 34.9,
          "priceAvg30d": 27.12
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 34.59,
          "priceAvg30d": 27.63
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 34.66,
          "priceAvg30d": 28.0
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 34.5,
          "priceAvg30d": 28.29
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.8,
          "priceAvg30d": 28.58
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 35.1,
          "priceAvg30d": 28.74
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 35.0,
          "priceAvg30d": 28.85
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 36.06,
          "priceAvg30d": 29.09
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.51,
          "priceAvg30d": 29.37
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 38.06,
          "priceAvg30d": 29.41
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 38.23,
          "priceAvg30d": 29.11
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.47,
          "priceAvg30d": 27.68
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 35.42,
          "priceAvg30d": 25.92
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 32.14,
          "priceAvg30d": 25.26
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.8,
          "priceAvg30d": 25.87
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.55,
          "priceAvg30d": 24.97
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 22.45,
          "priceAvg30d": 23.65
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.29,
          "priceAvg30d": 21.91
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.02,
          "priceAvg30d": 21.47
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.98,
          "priceAvg30d": 21.11
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 21.59,
          "priceAvg30d": 21.04
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 13.4,
          "priceAvg30d": 18.68
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 17.17,
          "priceAvg30d": 19.46
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.03,
          "priceAvg30d": 23.16
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 29.83,
          "priceAvg30d": 25.96
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 31.78,
          "priceAvg30d": 27.54
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.52,
          "priceAvg30d": 29.25
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 36.02,
          "priceAvg30d": 30.73
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 40.08,
          "priceAvg30d": 35.26
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 41.99,
          "priceAvg30d": 36.28
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.02,
          "priceAvg30d": 36.54
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 41.99,
          "priceAvg30d": 36.88
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 41.77,
          "priceAvg30d": 36.73
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.5,
          "priceAvg30d": 35.49
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 40.99,
          "priceAvg30d": 35.08
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 34.68
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.89,
          "priceAvg30d": 33.09
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 41.0,
          "priceAvg30d": 31.61
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 38.3,
          "priceAvg30d": 30.84
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 38.99,
          "priceAvg30d": 30.29
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 39.3,
          "priceAvg30d": 30.05
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 39.63,
          "priceAvg30d": 30.73
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 37.99,
          "priceAvg30d": 30.16
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 37.63,
          "priceAvg30d": 29.85
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.0,
          "priceAvg30d": 28.91
        }
      ],
      "avg": 33.97,
      "max": 42.02,
      "maxBlock": 34,
      "min": 13.4,
      "minBlock": 25,
      "spread3h": 17.96,
      "spreadLowAvg": 22.44,
      "spreadHighAvg": 40.39,
      "avg30d": 28.61,
      "spread30dAvg": 16.98,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.14,
          "priceAvg30d": 15.65
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.66,
          "priceAvg30d": 15.8
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.0,
          "priceAvg30d": 15.28
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.34,
          "priceAvg30d": 14.48
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.66,
          "priceAvg30d": 16.09
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.0,
          "priceAvg30d": 17.95
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 34.5,
          "priceAvg30d": 19.28
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.8,
          "priceAvg30d": 20.41
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 35.1,
          "priceAvg30d": 20.4
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 35.0,
          "priceAvg30d": 22.15
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 36.06,
          "priceAvg30d": 22.49
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.51,
          "priceAvg30d": 21.89
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 38.06,
          "priceAvg30d": 20.72
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 38.23,
          "priceAvg30d": 20.85
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.47,
          "priceAvg30d": 20.43
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 35.42,
          "priceAvg30d": 19.28
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.14,
          "priceAvg30d": 20.22
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.19,
          "priceAvg30d": 21.61
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.51,
          "priceAvg30d": 21.55
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 22.45,
          "priceAvg30d": 21.25
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.29,
          "priceAvg30d": 19.81
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.02,
          "priceAvg30d": 19.1
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.98,
          "priceAvg30d": 19.65
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 21.59,
          "priceAvg30d": 19.26
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.31,
          "priceAvg30d": 14.98
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.7,
          "priceAvg30d": 15.76
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 19.62,
          "priceAvg30d": 21.31
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 12.34,
          "priceAvg30d": 24.39
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 15.91,
          "priceAvg30d": 25.01
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 22.66,
          "priceAvg30d": 26.54
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 22.66,
          "priceAvg30d": 27.49
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.25,
          "priceAvg30d": 30.73
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 27.6,
          "priceAvg30d": 30.82
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.0,
          "priceAvg30d": 32.4
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.0,
          "priceAvg30d": 31.28
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 41.77,
          "priceAvg30d": 31.61
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.0,
          "priceAvg30d": 29.41
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 37.0,
          "priceAvg30d": 29.46
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.9,
          "priceAvg30d": 29.81
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.25,
          "priceAvg30d": 27.37
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.38,
          "priceAvg30d": 26.84
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.38,
          "priceAvg30d": 25.26
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.0,
          "priceAvg30d": 24.62
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.0,
          "priceAvg30d": 23.67
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.38,
          "priceAvg30d": 23.92
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.19,
          "priceAvg30d": 21.8
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.02,
          "priceAvg30d": 21.3
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 18.5,
          "priceAvg30d": 16.3
        }
      ],
      "avg": 27.14,
      "max": 41.77,
      "maxBlock": 36,
      "min": 9.31,
      "minBlock": 25,
      "spread3h": 17.04,
      "spreadLowAvg": 18.04,
      "spreadHighAvg": 35.08,
      "avg30d": 22.45,
      "spread30dAvg": 16.79,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.14,
          "priceAvg30d": 15.4
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.66,
          "priceAvg30d": 15.8
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.0,
          "priceAvg30d": 15.28
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.34,
          "priceAvg30d": 14.48
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.66,
          "priceAvg30d": 15.0
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.14,
          "priceAvg30d": 17.29
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.6,
          "priceAvg30d": 18.38
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.0,
          "priceAvg30d": 19.67
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.72,
          "priceAvg30d": 19.78
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.72,
          "priceAvg30d": 20.78
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.14,
          "priceAvg30d": 20.6
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.25,
          "priceAvg30d": 20.1
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.08,
          "priceAvg30d": 20.24
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 38.23,
          "priceAvg30d": 20.36
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 32.21,
          "priceAvg30d": 20.23
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.3,
          "priceAvg30d": 18.96
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.14,
          "priceAvg30d": 20.02
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.19,
          "priceAvg30d": 21.61
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.51,
          "priceAvg30d": 21.55
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 22.45,
          "priceAvg30d": 21.25
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.29,
          "priceAvg30d": 19.81
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.02,
          "priceAvg30d": 19.1
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.98,
          "priceAvg30d": 19.65
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 21.59,
          "priceAvg30d": 19.26
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.31,
          "priceAvg30d": 14.9
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.7,
          "priceAvg30d": 15.68
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 19.62,
          "priceAvg30d": 21.31
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 12.34,
          "priceAvg30d": 24.39
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 15.91,
          "priceAvg30d": 24.73
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 22.66,
          "priceAvg30d": 25.78
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 22.66,
          "priceAvg30d": 27.42
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.25,
          "priceAvg30d": 30.69
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 27.6,
          "priceAvg30d": 30.82
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.0,
          "priceAvg30d": 32.4
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.0,
          "priceAvg30d": 30.79
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 41.77,
          "priceAvg30d": 30.71
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.0,
          "priceAvg30d": 29.39
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 37.0,
          "priceAvg30d": 29.01
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.9,
          "priceAvg30d": 29.47
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.25,
          "priceAvg30d": 27.19
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.38,
          "priceAvg30d": 26.58
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.38,
          "priceAvg30d": 24.76
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.0,
          "priceAvg30d": 24.2
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.0,
          "priceAvg30d": 23.42
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.38,
          "priceAvg30d": 22.98
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.19,
          "priceAvg30d": 21.19
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.02,
          "priceAvg30d": 20.8
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 18.5,
          "priceAvg30d": 16.17
        }
      ],
      "avg": 25.55,
      "max": 41.77,
      "maxBlock": 36,
      "min": 9.31,
      "minBlock": 25,
      "spread3h": 17.04,
      "spreadLowAvg": 18.04,
      "spreadHighAvg": 35.08,
      "avg30d": 22.07,
      "spread30dAvg": 16.36,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.14,
          "priceAvg30d": 14.82
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.66,
          "priceAvg30d": 15.72
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.0,
          "priceAvg30d": 14.64
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.34,
          "priceAvg30d": 13.88
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.66,
          "priceAvg30d": 14.46
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.14,
          "priceAvg30d": 16.05
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.6,
          "priceAvg30d": 17.14
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.0,
          "priceAvg30d": 18.88
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.72,
          "priceAvg30d": 19.7
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.72,
          "priceAvg30d": 20.74
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.14,
          "priceAvg30d": 20.52
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.25,
          "priceAvg30d": 20.1
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.08,
          "priceAvg30d": 20.13
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 38.23,
          "priceAvg30d": 20.22
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 32.21,
          "priceAvg30d": 16.43
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.3,
          "priceAvg30d": 13.97
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.14,
          "priceAvg30d": 13.98
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.85,
          "priceAvg30d": 12.64
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.42,
          "priceAvg30d": 10.96
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 6.93,
          "priceAvg30d": 10.04
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.95,
          "priceAvg30d": 8.5
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 7.21,
          "priceAvg30d": 8.13
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.86,
          "priceAvg30d": 8.0
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.87,
          "priceAvg30d": 8.06
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 3.93,
          "priceAvg30d": 7.1
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 4.29,
          "priceAvg30d": 7.2
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.32,
          "priceAvg30d": 8.35
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 12.34,
          "priceAvg30d": 9.17
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.86,
          "priceAvg30d": 11.12
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.14,
          "priceAvg30d": 12.49
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.72,
          "priceAvg30d": 14.95
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 15.71,
          "priceAvg30d": 18.46
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.1,
          "priceAvg30d": 22.55
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.0,
          "priceAvg30d": 26.71
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.0,
          "priceAvg30d": 26.19
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 41.77,
          "priceAvg30d": 26.64
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.0,
          "priceAvg30d": 25.54
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 37.0,
          "priceAvg30d": 24.85
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.9,
          "priceAvg30d": 24.99
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.25,
          "priceAvg30d": 23.98
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.38,
          "priceAvg30d": 23.71
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.38,
          "priceAvg30d": 22.72
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.0,
          "priceAvg30d": 22.2
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.0,
          "priceAvg30d": 21.45
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.38,
          "priceAvg30d": 20.63
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.19,
          "priceAvg30d": 18.83
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.02,
          "priceAvg30d": 18.65
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 18.5,
          "priceAvg30d": 15.14
        }
      ],
      "avg": 22.41,
      "max": 41.77,
      "maxBlock": 36,
      "min": 3.93,
      "minBlock": 25,
      "spread3h": 25.69,
      "spreadLowAvg": 8.81,
      "spreadHighAvg": 34.5,
      "avg30d": 16.9,
      "spread30dAvg": 15.77,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.14,
          "priceAvg30d": 11.72
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.66,
          "priceAvg30d": 11.35
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.0,
          "priceAvg30d": 10.86
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.34,
          "priceAvg30d": 10.62
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.66,
          "priceAvg30d": 10.76
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.14,
          "priceAvg30d": 11.24
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.6,
          "priceAvg30d": 11.53
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.0,
          "priceAvg30d": 14.08
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.72,
          "priceAvg30d": 14.97
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.72,
          "priceAvg30d": 15.94
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.14,
          "priceAvg30d": 16.27
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.25,
          "priceAvg30d": 16.01
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.08,
          "priceAvg30d": 15.14
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 38.23,
          "priceAvg30d": 13.77
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 32.21,
          "priceAvg30d": 11.85
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.3,
          "priceAvg30d": 11.5
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.14,
          "priceAvg30d": 12.03
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.85,
          "priceAvg30d": 10.75
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.42,
          "priceAvg30d": 9.04
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 6.93,
          "priceAvg30d": 8.11
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.95,
          "priceAvg30d": 6.67
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 7.21,
          "priceAvg30d": 5.78
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.86,
          "priceAvg30d": 5.91
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.87,
          "priceAvg30d": 5.79
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 3.93,
          "priceAvg30d": 5.0
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 4.29,
          "priceAvg30d": 5.26
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.32,
          "priceAvg30d": 6.82
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 12.34,
          "priceAvg30d": 7.37
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.86,
          "priceAvg30d": 8.69
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.14,
          "priceAvg30d": 9.87
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.72,
          "priceAvg30d": 10.95
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 15.71,
          "priceAvg30d": 12.7
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.1,
          "priceAvg30d": 14.73
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.0,
          "priceAvg30d": 19.05
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.0,
          "priceAvg30d": 19.96
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 41.77,
          "priceAvg30d": 20.5
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.0,
          "priceAvg30d": 19.52
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 37.0,
          "priceAvg30d": 19.02
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.9,
          "priceAvg30d": 18.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.25,
          "priceAvg30d": 17.21
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.38,
          "priceAvg30d": 17.23
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.38,
          "priceAvg30d": 15.25
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.0,
          "priceAvg30d": 16.49
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.0,
          "priceAvg30d": 15.15
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.38,
          "priceAvg30d": 13.66
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.19,
          "priceAvg30d": 12.54
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.02,
          "priceAvg30d": 13.0
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 18.5,
          "priceAvg30d": 11.37
        }
      ],
      "avg": 22.41,
      "max": 41.77,
      "maxBlock": 36,
      "min": 3.93,
      "minBlock": 25,
      "spread3h": 25.69,
      "spreadLowAvg": 8.81,
      "spreadHighAvg": 34.5,
      "avg30d": 12.52,
      "spread30dAvg": 14.19,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.71,
          "priceAvg30d": 14.82
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.71,
          "priceAvg30d": 15.29
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.71,
          "priceAvg30d": 14.17
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.71,
          "priceAvg30d": 13.66
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.0,
          "priceAvg30d": 14.16
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.14,
          "priceAvg30d": 15.55
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.6,
          "priceAvg30d": 16.77
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.0,
          "priceAvg30d": 18.84
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.72,
          "priceAvg30d": 19.52
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.72,
          "priceAvg30d": 20.44
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.14,
          "priceAvg30d": 20.21
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.25,
          "priceAvg30d": 19.79
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.08,
          "priceAvg30d": 19.94
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 38.23,
          "priceAvg30d": 20.06
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 32.21,
          "priceAvg30d": 16.36
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.3,
          "priceAvg30d": 13.97
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 23.0,
          "priceAvg30d": 13.29
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.85,
          "priceAvg30d": 11.15
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.42,
          "priceAvg30d": 9.1
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 6.93,
          "priceAvg30d": 7.77
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.95,
          "priceAvg30d": 6.85
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.5,
          "priceAvg30d": 6.56
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.04,
          "priceAvg30d": 6.42
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.22
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.69
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.8
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 5.01,
          "priceAvg30d": 6.36
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.85,
          "priceAvg30d": 7.56
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.86,
          "priceAvg30d": 9.17
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.14,
          "priceAvg30d": 11.6
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.85,
          "priceAvg30d": 14.95
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 15.71,
          "priceAvg30d": 17.82
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.1,
          "priceAvg30d": 22.55
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.0,
          "priceAvg30d": 26.71
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.0,
          "priceAvg30d": 26.19
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 41.77,
          "priceAvg30d": 26.64
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.0,
          "priceAvg30d": 25.54
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 37.0,
          "priceAvg30d": 24.85
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.9,
          "priceAvg30d": 24.99
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.25,
          "priceAvg30d": 23.98
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.38,
          "priceAvg30d": 23.71
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.38,
          "priceAvg30d": 22.72
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.0,
          "priceAvg30d": 22.2
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.0,
          "priceAvg30d": 21.45
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.38,
          "priceAvg30d": 20.63
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.19,
          "priceAvg30d": 18.81
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.02,
          "priceAvg30d": 18.6
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 18.5,
          "priceAvg30d": 14.92
        }
      ],
      "avg": 20.92,
      "max": 41.77,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 24,
      "spread3h": 31.75,
      "spreadLowAvg": 2.75,
      "spreadHighAvg": 34.5,
      "avg30d": 16.34,
      "spread30dAvg": 16.37,
      "historyDays": 30
    }
  }
};
