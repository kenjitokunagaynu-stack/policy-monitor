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
  "targetDate": "2026-11-17",
  "fetchedAt": "2026-11-17T14:43:21+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 28.34,
        "priceAvg30d": 25.93
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 27.69,
        "priceAvg30d": 24.87
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 27.69,
        "priceAvg30d": 24.16
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 28.02,
        "priceAvg30d": 24.1
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 27.58,
        "priceAvg30d": 24.31
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 28.26,
        "priceAvg30d": 25.1
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 29.2,
        "priceAvg30d": 26.17
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 30.99,
        "priceAvg30d": 27.0
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 30.6,
        "priceAvg30d": 27.44
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 30.79,
        "priceAvg30d": 27.79
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 31.64,
        "priceAvg30d": 28.09
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 31.78,
        "priceAvg30d": 28.32
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 32.47,
        "priceAvg30d": 28.61
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 35.5,
        "priceAvg30d": 28.49
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 35.2,
        "priceAvg30d": 27.0
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 35.43,
        "priceAvg30d": 24.8
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 39.2,
        "priceAvg30d": 23.87
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 39.81,
        "priceAvg30d": 23.13
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 39.53,
        "priceAvg30d": 21.42
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 33.82,
        "priceAvg30d": 18.91
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 31.78,
        "priceAvg30d": 17.65
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 31.39,
        "priceAvg30d": 16.8
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 31.35,
        "priceAvg30d": 16.36
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 31.31,
        "priceAvg30d": 16.28
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 30.24,
        "priceAvg30d": 14.57
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 31.01,
        "priceAvg30d": 15.05
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 39.51,
        "priceAvg30d": 18.87
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 40.09,
        "priceAvg30d": 21.7
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 42.92,
        "priceAvg30d": 23.51
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 43.0,
        "priceAvg30d": 26.44
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 43.01,
        "priceAvg30d": 28.7
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 43.0,
        "priceAvg30d": 31.89
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 42.97,
        "priceAvg30d": 35.28
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 43.31,
        "priceAvg30d": 36.43
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 42.97,
        "priceAvg30d": 36.04
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 43.01,
        "priceAvg30d": 35.59
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 42.9,
        "priceAvg30d": 34.43
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 42.9,
        "priceAvg30d": 34.1
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 42.0,
        "priceAvg30d": 33.33
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 40.1,
        "priceAvg30d": 31.94
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 37.3,
        "priceAvg30d": 31.27
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 37.0,
        "priceAvg30d": 30.61
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 37.01,
        "priceAvg30d": 30.12
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 35.32,
        "priceAvg30d": 29.28
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 36.1,
        "priceAvg30d": 29.48
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 32.94,
        "priceAvg30d": 28.49
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 31.1,
        "priceAvg30d": 28.09
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 28.91,
        "priceAvg30d": 25.84
      }
    ],
    "avg": 35.37,
    "max": 43.31,
    "maxBlock": 34,
    "min": 27.58,
    "minBlock": 5,
    "spread3h": 14.34,
    "spreadLowAvg": 28.64,
    "spreadHighAvg": 42.98,
    "avg30d": 26.41,
    "spread30dAvg": 19.71,
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
          "price": 29.36,
          "priceAvg30d": 24.14
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.81,
          "priceAvg30d": 22.36
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.2,
          "priceAvg30d": 22.28
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.2,
          "priceAvg30d": 23.01
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.5,
          "priceAvg30d": 23.5
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 29.44,
          "priceAvg30d": 24.21
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.63,
          "priceAvg30d": 24.9
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.99,
          "priceAvg30d": 25.95
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.37,
          "priceAvg30d": 26.64
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.62,
          "priceAvg30d": 26.87
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.31,
          "priceAvg30d": 28.55
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.78,
          "priceAvg30d": 29.03
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.47,
          "priceAvg30d": 27.52
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 35.49,
          "priceAvg30d": 26.02
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.77,
          "priceAvg30d": 23.5
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 35.83,
          "priceAvg30d": 21.36
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 39.78,
          "priceAvg30d": 19.97
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 36.26,
          "priceAvg30d": 17.51
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.25,
          "priceAvg30d": 16.99
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 28.75,
          "priceAvg30d": 14.5
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.78,
          "priceAvg30d": 13.54
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.45,
          "priceAvg30d": 12.22
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.0,
          "priceAvg30d": 12.73
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.97,
          "priceAvg30d": 12.89
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 20.9,
          "priceAvg30d": 11.25
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.0,
          "priceAvg30d": 11.16
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 29.63,
          "priceAvg30d": 14.35
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 44.0,
          "priceAvg30d": 18.61
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 45.05,
          "priceAvg30d": 21.24
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 45.05,
          "priceAvg30d": 25.12
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 45.05,
          "priceAvg30d": 27.6
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 45.05,
          "priceAvg30d": 31.06
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.81,
          "priceAvg30d": 35.34
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.0,
          "priceAvg30d": 35.28
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 44.0,
          "priceAvg30d": 34.06
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 44.0,
          "priceAvg30d": 32.79
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.0,
          "priceAvg30d": 32.75
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 40.1,
          "priceAvg30d": 33.02
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 33.35
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 41.9,
          "priceAvg30d": 32.18
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.5,
          "priceAvg30d": 32.27
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 36.09,
          "priceAvg30d": 30.46
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 35.8,
          "priceAvg30d": 29.55
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 34.9,
          "priceAvg30d": 28.33
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 37.0,
          "priceAvg30d": 28.16
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 34.46,
          "priceAvg30d": 26.57
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.57,
          "priceAvg30d": 26.34
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.1,
          "priceAvg30d": 24.52
        }
      ],
      "avg": 34.1,
      "max": 45.05,
      "maxBlock": 29,
      "min": 20.9,
      "minBlock": 25,
      "spread3h": 11.79,
      "spreadLowAvg": 26.84,
      "spreadHighAvg": 38.63,
      "avg30d": 24.49,
      "spread30dAvg": 20.71,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.36,
          "priceAvg30d": 26.61
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.81,
          "priceAvg30d": 25.61
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.2,
          "priceAvg30d": 24.81
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.2,
          "priceAvg30d": 24.79
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.5,
          "priceAvg30d": 25.29
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.89,
          "priceAvg30d": 25.89
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.56,
          "priceAvg30d": 26.61
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.99,
          "priceAvg30d": 27.05
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.37,
          "priceAvg30d": 27.53
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.62,
          "priceAvg30d": 27.64
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.31,
          "priceAvg30d": 28.11
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.78,
          "priceAvg30d": 28.46
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.47,
          "priceAvg30d": 28.97
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 35.49,
          "priceAvg30d": 28.48
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.77,
          "priceAvg30d": 25.72
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 35.83,
          "priceAvg30d": 22.94
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 39.78,
          "priceAvg30d": 22.4
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 40.1,
          "priceAvg30d": 21.2
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 32.0,
          "priceAvg30d": 20.31
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 28.75,
          "priceAvg30d": 19.07
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.78,
          "priceAvg30d": 17.81
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.45,
          "priceAvg30d": 17.03
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.0,
          "priceAvg30d": 16.61
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.97,
          "priceAvg30d": 16.63
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 20.9,
          "priceAvg30d": 15.39
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.0,
          "priceAvg30d": 15.72
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 35.0,
          "priceAvg30d": 19.23
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 44.0,
          "priceAvg30d": 21.49
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 45.05,
          "priceAvg30d": 24.24
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 45.05,
          "priceAvg30d": 27.51
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 45.05,
          "priceAvg30d": 29.77
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 45.05,
          "priceAvg30d": 33.43
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.81,
          "priceAvg30d": 36.53
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.0,
          "priceAvg30d": 37.77
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 44.0,
          "priceAvg30d": 37.59
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 44.0,
          "priceAvg30d": 37.1
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.0,
          "priceAvg30d": 36.04
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 40.1,
          "priceAvg30d": 35.79
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 35.34
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 41.9,
          "priceAvg30d": 33.93
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.5,
          "priceAvg30d": 33.51
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 36.09,
          "priceAvg30d": 32.16
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 35.8,
          "priceAvg30d": 31.98
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 34.9,
          "priceAvg30d": 31.08
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 37.0,
          "priceAvg30d": 30.8
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 34.46,
          "priceAvg30d": 28.82
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.57,
          "priceAvg30d": 28.16
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.1,
          "priceAvg30d": 26.06
        }
      ],
      "avg": 34.32,
      "max": 45.05,
      "maxBlock": 29,
      "min": 20.9,
      "minBlock": 25,
      "spread3h": 11.79,
      "spreadLowAvg": 27.74,
      "spreadHighAvg": 39.52,
      "avg30d": 26.98,
      "spread30dAvg": 20.91,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.36,
          "priceAvg30d": 29.51
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.81,
          "priceAvg30d": 29.32
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.2,
          "priceAvg30d": 29.31
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.2,
          "priceAvg30d": 28.86
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.5,
          "priceAvg30d": 29.05
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.89,
          "priceAvg30d": 28.98
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.56,
          "priceAvg30d": 29.12
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.99,
          "priceAvg30d": 29.09
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.37,
          "priceAvg30d": 29.44
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.62,
          "priceAvg30d": 29.5
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.31,
          "priceAvg30d": 29.75
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.78,
          "priceAvg30d": 30.33
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.47,
          "priceAvg30d": 31.09
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 35.49,
          "priceAvg30d": 31.0
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.77,
          "priceAvg30d": 30.82
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 35.83,
          "priceAvg30d": 30.24
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 39.78,
          "priceAvg30d": 28.88
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 40.1,
          "priceAvg30d": 29.47
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 42.65,
          "priceAvg30d": 29.0
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 40.11,
          "priceAvg30d": 27.4
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 40.0,
          "priceAvg30d": 26.65
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 39.79,
          "priceAvg30d": 25.91
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 39.78,
          "priceAvg30d": 25.54
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 39.82,
          "priceAvg30d": 25.79
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 35.32,
          "priceAvg30d": 25.29
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 35.79,
          "priceAvg30d": 26.14
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 41.15,
          "priceAvg30d": 28.42
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 44.0,
          "priceAvg30d": 30.31
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 45.05,
          "priceAvg30d": 31.68
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 45.05,
          "priceAvg30d": 33.53
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 45.05,
          "priceAvg30d": 34.46
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 45.05,
          "priceAvg30d": 37.18
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.81,
          "priceAvg30d": 38.86
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.0,
          "priceAvg30d": 39.67
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 44.0,
          "priceAvg30d": 39.45
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 44.0,
          "priceAvg30d": 38.71
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.0,
          "priceAvg30d": 37.27
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 40.1,
          "priceAvg30d": 37.34
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 36.72
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 41.9,
          "priceAvg30d": 35.67
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.5,
          "priceAvg30d": 34.84
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 36.09,
          "priceAvg30d": 33.51
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 35.8,
          "priceAvg30d": 33.12
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 34.9,
          "priceAvg30d": 32.62
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 37.0,
          "priceAvg30d": 34.11
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 34.46,
          "priceAvg30d": 32.24
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.57,
          "priceAvg30d": 30.86
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.1,
          "priceAvg30d": 29.54
        }
      ],
      "avg": 36.93,
      "max": 45.05,
      "maxBlock": 29,
      "min": 28.5,
      "minBlock": 5,
      "spread3h": 13.24,
      "spreadLowAvg": 29.44,
      "spreadHighAvg": 42.68,
      "avg30d": 31.37,
      "spread30dAvg": 13.89,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.36,
          "priceAvg30d": 28.83
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.81,
          "priceAvg30d": 28.65
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.2,
          "priceAvg30d": 28.12
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.2,
          "priceAvg30d": 28.02
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.5,
          "priceAvg30d": 28.53
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.89,
          "priceAvg30d": 28.9
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.56,
          "priceAvg30d": 29.21
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.99,
          "priceAvg30d": 29.48
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.37,
          "priceAvg30d": 29.67
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.62,
          "priceAvg30d": 29.78
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.31,
          "priceAvg30d": 30.08
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.78,
          "priceAvg30d": 30.43
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.47,
          "priceAvg30d": 30.63
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 35.49,
          "priceAvg30d": 30.53
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.77,
          "priceAvg30d": 29.19
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 35.83,
          "priceAvg30d": 27.75
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 39.78,
          "priceAvg30d": 27.02
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 40.1,
          "priceAvg30d": 27.53
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 42.65,
          "priceAvg30d": 26.6
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 40.11,
          "priceAvg30d": 24.98
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 40.0,
          "priceAvg30d": 23.64
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 39.79,
          "priceAvg30d": 23.32
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 39.78,
          "priceAvg30d": 23.04
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 39.82,
          "priceAvg30d": 22.9
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 35.32,
          "priceAvg30d": 20.41
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 35.79,
          "priceAvg30d": 21.24
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 40.12,
          "priceAvg30d": 24.74
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 42.9,
          "priceAvg30d": 27.55
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 43.02,
          "priceAvg30d": 29.38
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 43.0,
          "priceAvg30d": 30.86
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 43.01,
          "priceAvg30d": 32.31
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.2,
          "priceAvg30d": 35.96
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 42.97,
          "priceAvg30d": 36.78
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.97,
          "priceAvg30d": 36.69
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 42.9,
          "priceAvg30d": 37.3
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.09,
          "priceAvg30d": 37.0
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.0,
          "priceAvg30d": 36.16
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 40.1,
          "priceAvg30d": 35.83
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 35.58
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.79,
          "priceAvg30d": 34.39
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.11,
          "priceAvg30d": 33.11
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 36.09,
          "priceAvg30d": 32.52
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 35.8,
          "priceAvg30d": 31.94
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 34.9,
          "priceAvg30d": 31.38
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 36.1,
          "priceAvg30d": 31.96
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 34.46,
          "priceAvg30d": 31.41
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.57,
          "priceAvg30d": 31.09
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.1,
          "priceAvg30d": 30.21
        }
      ],
      "avg": 36.43,
      "max": 43.02,
      "maxBlock": 29,
      "min": 28.5,
      "minBlock": 5,
      "spread3h": 11.56,
      "spreadLowAvg": 29.44,
      "spreadHighAvg": 41.0,
      "avg30d": 29.85,
      "spread30dAvg": 16.01,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 22.8,
          "priceAvg30d": 15.69
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 15.84
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.01,
          "priceAvg30d": 15.51
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.59,
          "priceAvg30d": 14.96
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.45,
          "priceAvg30d": 16.35
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.53,
          "priceAvg30d": 18.75
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.56,
          "priceAvg30d": 20.41
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.99,
          "priceAvg30d": 21.65
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.37,
          "priceAvg30d": 21.67
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.62,
          "priceAvg30d": 23.28
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.31,
          "priceAvg30d": 24.09
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.78,
          "priceAvg30d": 23.1
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.47,
          "priceAvg30d": 21.89
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 35.49,
          "priceAvg30d": 22.25
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.77,
          "priceAvg30d": 22.27
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 35.83,
          "priceAvg30d": 21.25
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 39.78,
          "priceAvg30d": 21.35
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 40.1,
          "priceAvg30d": 22.47
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 42.65,
          "priceAvg30d": 22.54
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 40.11,
          "priceAvg30d": 22.33
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 26.67,
          "priceAvg30d": 21.2
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 25.0,
          "priceAvg30d": 20.46
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.0,
          "priceAvg30d": 21.08
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.0,
          "priceAvg30d": 20.64
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 23.45,
          "priceAvg30d": 16.37
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 24.79,
          "priceAvg30d": 16.95
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 38.0,
          "priceAvg30d": 22.39
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 42.9,
          "priceAvg30d": 24.63
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 42.9,
          "priceAvg30d": 26.06
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 43.0,
          "priceAvg30d": 28.01
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 43.01,
          "priceAvg30d": 28.68
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.2,
          "priceAvg30d": 31.82
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 41.2,
          "priceAvg30d": 32.19
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.9,
          "priceAvg30d": 33.56
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 42.9,
          "priceAvg30d": 33.33
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.09,
          "priceAvg30d": 33.59
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.0,
          "priceAvg30d": 31.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 40.1,
          "priceAvg30d": 31.08
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 30.75
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.79,
          "priceAvg30d": 28.1
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.11,
          "priceAvg30d": 28.05
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 36.09,
          "priceAvg30d": 26.16
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 34.4,
          "priceAvg30d": 25.66
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.67,
          "priceAvg30d": 24.23
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 36.1,
          "priceAvg30d": 24.54
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 34.46,
          "priceAvg30d": 22.28
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.67,
          "priceAvg30d": 21.72
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.91,
          "priceAvg30d": 16.18
        }
      ],
      "avg": 33.39,
      "max": 43.01,
      "maxBlock": 31,
      "min": 20.0,
      "minBlock": 2,
      "spread3h": 20.22,
      "spreadLowAvg": 22.13,
      "spreadHighAvg": 42.35,
      "avg30d": 23.52,
      "spread30dAvg": 17.07,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 22.8,
          "priceAvg30d": 15.69
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 15.84
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.01,
          "priceAvg30d": 15.51
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.59,
          "priceAvg30d": 14.96
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.45,
          "priceAvg30d": 15.68
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.53,
          "priceAvg30d": 18.2
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.56,
          "priceAvg30d": 19.41
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.99,
          "priceAvg30d": 20.71
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.37,
          "priceAvg30d": 20.67
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.62,
          "priceAvg30d": 21.63
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 26.67,
          "priceAvg30d": 21.79
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.0,
          "priceAvg30d": 20.83
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.53,
          "priceAvg30d": 20.82
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 34.0,
          "priceAvg30d": 21.5
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 34.2,
          "priceAvg30d": 21.75
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 34.0,
          "priceAvg30d": 20.81
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 39.78,
          "priceAvg30d": 21.15
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 40.1,
          "priceAvg30d": 22.47
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 42.65,
          "priceAvg30d": 22.54
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 40.11,
          "priceAvg30d": 22.33
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 26.67,
          "priceAvg30d": 21.2
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 25.0,
          "priceAvg30d": 20.46
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.0,
          "priceAvg30d": 21.08
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.0,
          "priceAvg30d": 20.64
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 23.45,
          "priceAvg30d": 16.29
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 24.79,
          "priceAvg30d": 16.87
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 38.0,
          "priceAvg30d": 22.39
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 42.9,
          "priceAvg30d": 24.63
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 42.9,
          "priceAvg30d": 25.78
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 42.9,
          "priceAvg30d": 27.25
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 42.9,
          "priceAvg30d": 28.62
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.2,
          "priceAvg30d": 31.82
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 41.2,
          "priceAvg30d": 32.19
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.9,
          "priceAvg30d": 33.56
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 42.9,
          "priceAvg30d": 32.83
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.09,
          "priceAvg30d": 33.03
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.0,
          "priceAvg30d": 31.72
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 40.1,
          "priceAvg30d": 31.06
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 30.74
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.79,
          "priceAvg30d": 28.1
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.11,
          "priceAvg30d": 27.98
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 36.09,
          "priceAvg30d": 25.82
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 34.4,
          "priceAvg30d": 25.39
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.67,
          "priceAvg30d": 24.23
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.18,
          "priceAvg30d": 23.84
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.67,
          "priceAvg30d": 21.93
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.67,
          "priceAvg30d": 21.39
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.91,
          "priceAvg30d": 16.18
        }
      ],
      "avg": 32.55,
      "max": 42.9,
      "maxBlock": 28,
      "min": 20.0,
      "minBlock": 2,
      "spread3h": 13.69,
      "spreadLowAvg": 22.13,
      "spreadHighAvg": 35.82,
      "avg30d": 23.15,
      "spread30dAvg": 16.85,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 22.8,
          "priceAvg30d": 15.11
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 15.75
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.01,
          "priceAvg30d": 14.94
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.59,
          "priceAvg30d": 14.36
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.45,
          "priceAvg30d": 15.25
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.53,
          "priceAvg30d": 17.04
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.56,
          "priceAvg30d": 18.4
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.99,
          "priceAvg30d": 19.92
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.37,
          "priceAvg30d": 20.59
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.62,
          "priceAvg30d": 21.58
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 26.67,
          "priceAvg30d": 21.71
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.0,
          "priceAvg30d": 20.82
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.53,
          "priceAvg30d": 20.71
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 34.0,
          "priceAvg30d": 21.36
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 34.2,
          "priceAvg30d": 18.53
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 34.0,
          "priceAvg30d": 16.29
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.33,
          "priceAvg30d": 15.53
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.0,
          "priceAvg30d": 13.88
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 15.71,
          "priceAvg30d": 12.33
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 14.9,
          "priceAvg30d": 11.29
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 20.0,
          "priceAvg30d": 9.89
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.9,
          "priceAvg30d": 9.59
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 15.71,
          "priceAvg30d": 9.55
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 15.57,
          "priceAvg30d": 9.68
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.57,
          "priceAvg30d": 8.09
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.57,
          "priceAvg30d": 8.46
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 30.27,
          "priceAvg30d": 9.82
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 31.32,
          "priceAvg30d": 10.5
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 33.77,
          "priceAvg30d": 12.21
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 40.0,
          "priceAvg30d": 13.46
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 42.9,
          "priceAvg30d": 15.64
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.2,
          "priceAvg30d": 19.14
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 41.2,
          "priceAvg30d": 23.72
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.9,
          "priceAvg30d": 27.84
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 42.9,
          "priceAvg30d": 28.24
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.09,
          "priceAvg30d": 28.85
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.0,
          "priceAvg30d": 27.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 40.1,
          "priceAvg30d": 26.77
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 26.17
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.79,
          "priceAvg30d": 24.9
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.11,
          "priceAvg30d": 25.11
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.34,
          "priceAvg30d": 23.77
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 34.4,
          "priceAvg30d": 23.39
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.67,
          "priceAvg30d": 22.25
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.18,
          "priceAvg30d": 21.43
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.67,
          "priceAvg30d": 19.49
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.67,
          "priceAvg30d": 19.24
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.91,
          "priceAvg30d": 15.15
        }
      ],
      "avg": 29.25,
      "max": 42.9,
      "maxBlock": 31,
      "min": 14.9,
      "minBlock": 20,
      "spread3h": 17.12,
      "spreadLowAvg": 21.28,
      "spreadHighAvg": 38.4,
      "avg30d": 18.03,
      "spread30dAvg": 16.17,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 22.8,
          "priceAvg30d": 12.36
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 11.9
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.01,
          "priceAvg30d": 11.53
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.59,
          "priceAvg30d": 11.46
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.45,
          "priceAvg30d": 11.96
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.53,
          "priceAvg30d": 12.97
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.56,
          "priceAvg30d": 13.74
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.99,
          "priceAvg30d": 16.06
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.37,
          "priceAvg30d": 16.82
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.62,
          "priceAvg30d": 17.77
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 26.67,
          "priceAvg30d": 18.3
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.0,
          "priceAvg30d": 17.6
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.53,
          "priceAvg30d": 16.55
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 34.0,
          "priceAvg30d": 16.0
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 34.2,
          "priceAvg30d": 14.53
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 34.0,
          "priceAvg30d": 14.25
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.33,
          "priceAvg30d": 13.97
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.0,
          "priceAvg30d": 12.33
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 15.71,
          "priceAvg30d": 10.72
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 14.9,
          "priceAvg30d": 9.65
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 20.0,
          "priceAvg30d": 8.23
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.9,
          "priceAvg30d": 7.23
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 15.71,
          "priceAvg30d": 7.47
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 15.57,
          "priceAvg30d": 7.08
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.57,
          "priceAvg30d": 5.91
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.57,
          "priceAvg30d": 6.52
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 30.27,
          "priceAvg30d": 8.12
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 31.32,
          "priceAvg30d": 8.95
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 33.77,
          "priceAvg30d": 10.22
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 40.0,
          "priceAvg30d": 11.29
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 42.9,
          "priceAvg30d": 12.33
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.2,
          "priceAvg30d": 13.79
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 41.2,
          "priceAvg30d": 16.74
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.9,
          "priceAvg30d": 21.51
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 42.9,
          "priceAvg30d": 22.73
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.09,
          "priceAvg30d": 23.19
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.0,
          "priceAvg30d": 22.41
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 40.1,
          "priceAvg30d": 21.64
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 20.03
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.79,
          "priceAvg30d": 18.95
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.11,
          "priceAvg30d": 19.38
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.34,
          "priceAvg30d": 17.15
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 34.4,
          "priceAvg30d": 18.55
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.67,
          "priceAvg30d": 16.73
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.18,
          "priceAvg30d": 15.3
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.67,
          "priceAvg30d": 14.01
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.67,
          "priceAvg30d": 14.46
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.91,
          "priceAvg30d": 12.13
        }
      ],
      "avg": 29.25,
      "max": 42.9,
      "maxBlock": 31,
      "min": 14.9,
      "minBlock": 20,
      "spread3h": 17.12,
      "spreadLowAvg": 21.28,
      "spreadHighAvg": 38.4,
      "avg30d": 14.22,
      "spread30dAvg": 15.38,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.23,
          "priceAvg30d": 14.63
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.32,
          "priceAvg30d": 14.79
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.32,
          "priceAvg30d": 13.88
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.32,
          "priceAvg30d": 13.47
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.32,
          "priceAvg30d": 14.33
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.0,
          "priceAvg30d": 16.2
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.83,
          "priceAvg30d": 18.02
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.51,
          "priceAvg30d": 19.88
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.74,
          "priceAvg30d": 20.41
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.02,
          "priceAvg30d": 21.28
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.02,
          "priceAvg30d": 21.4
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.02,
          "priceAvg30d": 20.51
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.18,
          "priceAvg30d": 20.49
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 31.26,
          "priceAvg30d": 20.88
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.87,
          "priceAvg30d": 18.07
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 34.0,
          "priceAvg30d": 15.93
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 30.0,
          "priceAvg30d": 14.56
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.92,
          "priceAvg30d": 12.3
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 15.71,
          "priceAvg30d": 9.91
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 14.9,
          "priceAvg30d": 8.53
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 20.0,
          "priceAvg30d": 7.7
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.9,
          "priceAvg30d": 7.49
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 15.71,
          "priceAvg30d": 7.21
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 15.57,
          "priceAvg30d": 7.02
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.57,
          "priceAvg30d": 6.09
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.57,
          "priceAvg30d": 6.2
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 30.27,
          "priceAvg30d": 7.42
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 31.32,
          "priceAvg30d": 8.75
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 33.77,
          "priceAvg30d": 10.05
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 40.0,
          "priceAvg30d": 12.48
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 42.9,
          "priceAvg30d": 15.4
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.2,
          "priceAvg30d": 18.5
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 41.2,
          "priceAvg30d": 23.72
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.9,
          "priceAvg30d": 27.84
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 42.9,
          "priceAvg30d": 28.08
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.09,
          "priceAvg30d": 28.85
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.0,
          "priceAvg30d": 27.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 40.1,
          "priceAvg30d": 26.77
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 26.17
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.79,
          "priceAvg30d": 24.9
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.11,
          "priceAvg30d": 25.11
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.34,
          "priceAvg30d": 23.77
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 34.0,
          "priceAvg30d": 23.31
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.02,
          "priceAvg30d": 22.01
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.18,
          "priceAvg30d": 21.12
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.0,
          "priceAvg30d": 19.24
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.27,
          "priceAvg30d": 18.63
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.27,
          "priceAvg30d": 14.76
        }
      ],
      "avg": 25.99,
      "max": 42.9,
      "maxBlock": 31,
      "min": 11.32,
      "minBlock": 2,
      "spread3h": 25.54,
      "spreadLowAvg": 12.86,
      "spreadHighAvg": 38.4,
      "avg30d": 17.2,
      "spread30dAvg": 17.34,
      "historyDays": 30
    }
  }
};
