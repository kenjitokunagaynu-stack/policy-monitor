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
  "targetDate": "2026-11-24",
  "fetchedAt": "2026-11-24T16:36:53+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 31.02,
        "priceAvg30d": 26.88
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 30.35,
        "priceAvg30d": 25.96
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 29.88,
        "priceAvg30d": 25.27
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 29.75,
        "priceAvg30d": 25.23
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 29.95,
        "priceAvg30d": 25.4
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 30.1,
        "priceAvg30d": 26.31
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 30.87,
        "priceAvg30d": 27.43
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 30.64,
        "priceAvg30d": 28.28
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 30.5,
        "priceAvg30d": 28.65
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 31.56,
        "priceAvg30d": 29.0
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 32.98,
        "priceAvg30d": 29.39
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 33.82,
        "priceAvg30d": 29.67
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 35.0,
        "priceAvg30d": 30.35
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 33.82,
        "priceAvg30d": 30.76
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 35.0,
        "priceAvg30d": 29.53
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 37.67,
        "priceAvg30d": 27.2
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 43.52,
        "priceAvg30d": 26.17
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 44.98,
        "priceAvg30d": 25.22
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 45.0,
        "priceAvg30d": 23.07
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 43.81,
        "priceAvg30d": 19.83
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 43.71,
        "priceAvg30d": 18.48
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 43.71,
        "priceAvg30d": 17.24
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 43.47,
        "priceAvg30d": 16.71
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 42.0,
        "priceAvg30d": 16.38
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 34.12,
        "priceAvg30d": 14.52
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 33.04,
        "priceAvg30d": 15.05
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 41.78,
        "priceAvg30d": 19.3
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 42.41,
        "priceAvg30d": 21.65
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 42.66,
        "priceAvg30d": 24.02
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 43.18,
        "priceAvg30d": 27.13
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 43.19,
        "priceAvg30d": 29.75
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 44.24,
        "priceAvg30d": 32.7
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 45.0,
        "priceAvg30d": 36.06
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 45.02,
        "priceAvg30d": 37.15
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 44.99,
        "priceAvg30d": 36.91
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 45.04,
        "priceAvg30d": 36.67
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 44.08,
        "priceAvg30d": 36.06
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 43.0,
        "priceAvg30d": 35.85
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 42.49,
        "priceAvg30d": 35.15
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 39.22,
        "priceAvg30d": 34.14
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 37.99,
        "priceAvg30d": 33.61
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 34.1,
        "priceAvg30d": 33.22
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 32.63,
        "priceAvg30d": 32.77
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 31.93,
        "priceAvg30d": 31.56
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 31.93,
        "priceAvg30d": 31.86
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 31.76,
        "priceAvg30d": 30.35
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 32.5,
        "priceAvg30d": 29.82
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 30.79,
        "priceAvg30d": 27.18
      }
    ],
    "avg": 37.5,
    "max": 45.04,
    "maxBlock": 36,
    "min": 29.75,
    "minBlock": 4,
    "spread3h": 13.73,
    "spreadLowAvg": 30.36,
    "spreadHighAvg": 44.1,
    "avg30d": 27.73,
    "spread30dAvg": 20.5,
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
          "price": 26.63,
          "priceAvg30d": 25.83
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.57,
          "priceAvg30d": 24.42
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.73,
          "priceAvg30d": 23.96
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.43,
          "priceAvg30d": 24.19
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.5,
          "priceAvg30d": 24.87
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.46,
          "priceAvg30d": 25.4
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.4,
          "priceAvg30d": 26.1
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.39,
          "priceAvg30d": 27.01
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.77,
          "priceAvg30d": 27.41
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.64,
          "priceAvg30d": 27.77
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.84,
          "priceAvg30d": 28.14
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.15,
          "priceAvg30d": 28.45
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.26,
          "priceAvg30d": 28.84
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.82,
          "priceAvg30d": 28.78
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.46,
          "priceAvg30d": 26.18
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.0,
          "priceAvg30d": 23.63
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 33.82,
          "priceAvg30d": 22.45
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.96,
          "priceAvg30d": 19.74
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 32.62,
          "priceAvg30d": 17.86
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.46,
          "priceAvg30d": 15.78
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 33.82,
          "priceAvg30d": 14.73
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 31.72,
          "priceAvg30d": 13.22
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 30.0,
          "priceAvg30d": 13.58
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 29.45,
          "priceAvg30d": 13.37
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 29.2,
          "priceAvg30d": 12.05
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 29.2,
          "priceAvg30d": 12.44
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 33.82,
          "priceAvg30d": 15.83
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 33.89,
          "priceAvg30d": 20.36
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 37.27,
          "priceAvg30d": 23.32
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 38.32,
          "priceAvg30d": 26.43
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 33.82,
          "priceAvg30d": 29.16
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.88,
          "priceAvg30d": 32.38
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 33.85,
          "priceAvg30d": 35.85
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 35.3,
          "priceAvg30d": 36.16
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 45.0,
          "priceAvg30d": 35.15
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.71,
          "priceAvg30d": 34.53
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.18,
          "priceAvg30d": 34.58
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.26,
          "priceAvg30d": 34.84
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.22,
          "priceAvg30d": 33.82
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.24,
          "priceAvg30d": 32.92
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.28,
          "priceAvg30d": 32.86
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.41,
          "priceAvg30d": 31.6
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.6,
          "priceAvg30d": 31.29
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.12,
          "priceAvg30d": 29.77
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.6,
          "priceAvg30d": 29.25
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.03,
          "priceAvg30d": 28.05
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.0,
          "priceAvg30d": 27.36
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.75,
          "priceAvg30d": 24.92
        }
      ],
      "avg": 29.56,
      "max": 45.0,
      "maxBlock": 35,
      "min": 10.75,
      "minBlock": 48,
      "spread3h": 12.12,
      "spreadLowAvg": 23.91,
      "spreadHighAvg": 36.03,
      "avg30d": 25.76,
      "spread30dAvg": 19.6,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.63,
          "priceAvg30d": 26.46
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.57,
          "priceAvg30d": 25.21
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.73,
          "priceAvg30d": 24.15
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.43,
          "priceAvg30d": 23.74
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.2,
          "priceAvg30d": 24.62
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 29.2,
          "priceAvg30d": 25.44
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.23,
          "priceAvg30d": 26.61
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.25,
          "priceAvg30d": 27.26
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.45,
          "priceAvg30d": 27.72
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.45,
          "priceAvg30d": 27.99
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.82,
          "priceAvg30d": 28.55
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.3,
          "priceAvg30d": 28.92
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.82,
          "priceAvg30d": 29.64
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.82,
          "priceAvg30d": 29.65
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.46,
          "priceAvg30d": 27.22
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.0,
          "priceAvg30d": 24.42
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 33.82,
          "priceAvg30d": 24.22
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.96,
          "priceAvg30d": 22.31
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 32.62,
          "priceAvg30d": 20.15
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.46,
          "priceAvg30d": 18.68
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 33.82,
          "priceAvg30d": 17.2
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 31.72,
          "priceAvg30d": 15.95
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 30.0,
          "priceAvg30d": 15.13
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 29.45,
          "priceAvg30d": 15.11
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 29.2,
          "priceAvg30d": 14.23
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 29.2,
          "priceAvg30d": 14.59
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 33.82,
          "priceAvg30d": 18.19
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 33.89,
          "priceAvg30d": 20.7
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 37.27,
          "priceAvg30d": 23.16
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 38.32,
          "priceAvg30d": 26.8
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 33.82,
          "priceAvg30d": 29.98
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.88,
          "priceAvg30d": 33.54
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 33.85,
          "priceAvg30d": 36.32
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 35.3,
          "priceAvg30d": 37.58
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 45.0,
          "priceAvg30d": 37.6
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.71,
          "priceAvg30d": 37.12
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.18,
          "priceAvg30d": 36.31
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 31.0,
          "priceAvg30d": 36.19
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 34.27,
          "priceAvg30d": 35.65
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.46,
          "priceAvg30d": 34.56
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.46,
          "priceAvg30d": 34.04
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.22,
          "priceAvg30d": 33.08
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 29.2,
          "priceAvg30d": 32.89
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.0,
          "priceAvg30d": 31.79
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.12,
          "priceAvg30d": 30.56
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.03,
          "priceAvg30d": 28.67
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.0,
          "priceAvg30d": 27.84
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.82,
          "priceAvg30d": 25.12
        }
      ],
      "avg": 31.4,
      "max": 45.0,
      "maxBlock": 35,
      "min": 23.82,
      "minBlock": 48,
      "spread3h": 12.15,
      "spreadLowAvg": 24.5,
      "spreadHighAvg": 36.65,
      "avg30d": 26.93,
      "spread30dAvg": 21.09,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.98,
          "priceAvg30d": 30.18
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 33.42,
          "priceAvg30d": 29.94
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 32.25,
          "priceAvg30d": 29.55
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 32.41,
          "priceAvg30d": 29.32
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 32.02,
          "priceAvg30d": 29.35
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.8,
          "priceAvg30d": 29.5
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.51,
          "priceAvg30d": 29.61
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.64,
          "priceAvg30d": 29.69
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.57,
          "priceAvg30d": 29.97
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 32.89,
          "priceAvg30d": 30.12
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.82,
          "priceAvg30d": 30.48
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.3,
          "priceAvg30d": 31.29
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 35.34,
          "priceAvg30d": 32.45
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 35.69,
          "priceAvg30d": 32.9
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 40.29,
          "priceAvg30d": 32.68
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 40.6,
          "priceAvg30d": 31.78
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 33.82,
          "priceAvg30d": 30.12
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.96,
          "priceAvg30d": 30.34
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 32.62,
          "priceAvg30d": 29.66
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 34.17,
          "priceAvg30d": 27.3
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.97,
          "priceAvg30d": 26.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 42.0,
          "priceAvg30d": 25.85
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 41.0,
          "priceAvg30d": 25.27
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 36.05,
          "priceAvg30d": 25.46
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 34.12,
          "priceAvg30d": 24.63
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 34.09,
          "priceAvg30d": 25.68
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 42.13,
          "priceAvg30d": 28.07
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 43.51,
          "priceAvg30d": 29.53
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 43.5,
          "priceAvg30d": 31.28
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 44.1,
          "priceAvg30d": 32.66
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.1,
          "priceAvg30d": 34.39
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 45.0,
          "priceAvg30d": 37.4
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 45.29,
          "priceAvg30d": 38.95
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.31,
          "priceAvg30d": 39.71
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 45.0,
          "priceAvg30d": 39.68
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.71,
          "priceAvg30d": 39.06
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.18,
          "priceAvg30d": 37.83
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 42.66,
          "priceAvg30d": 38.04
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 42.66,
          "priceAvg30d": 37.55
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 42.13,
          "priceAvg30d": 37.04
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 42.13,
          "priceAvg30d": 36.1
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 37.0,
          "priceAvg30d": 35.32
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.0,
          "priceAvg30d": 35.22
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 34.02,
          "priceAvg30d": 34.36
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 34.42,
          "priceAvg30d": 36.11
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 35.34,
          "priceAvg30d": 33.88
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 35.34,
          "priceAvg30d": 32.53
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.96,
          "priceAvg30d": 30.84
        }
      ],
      "avg": 37.45,
      "max": 45.31,
      "maxBlock": 34,
      "min": 31.57,
      "minBlock": 9,
      "spread3h": 11.22,
      "spreadLowAvg": 33.16,
      "spreadHighAvg": 44.38,
      "avg30d": 31.99,
      "spread30dAvg": 14.18,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.98,
          "priceAvg30d": 29.81
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 33.05,
          "priceAvg30d": 29.9
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 32.25,
          "priceAvg30d": 29.44
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 32.41,
          "priceAvg30d": 29.45
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 32.02,
          "priceAvg30d": 29.87
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.8,
          "priceAvg30d": 30.25
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.51,
          "priceAvg30d": 30.6
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.64,
          "priceAvg30d": 31.0
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.57,
          "priceAvg30d": 31.2
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 32.89,
          "priceAvg30d": 31.25
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.82,
          "priceAvg30d": 31.62
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.3,
          "priceAvg30d": 31.9
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 35.34,
          "priceAvg30d": 32.26
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 35.69,
          "priceAvg30d": 32.79
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 40.29,
          "priceAvg30d": 31.8
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 40.6,
          "priceAvg30d": 30.11
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 45.29,
          "priceAvg30d": 29.18
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 45.61,
          "priceAvg30d": 29.01
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 45.99,
          "priceAvg30d": 27.57
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 46.05,
          "priceAvg30d": 25.03
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 46.21,
          "priceAvg30d": 24.01
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 46.21,
          "priceAvg30d": 23.37
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 46.06,
          "priceAvg30d": 22.98
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 46.17,
          "priceAvg30d": 22.82
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 41.78,
          "priceAvg30d": 20.4
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 37.6,
          "priceAvg30d": 21.52
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 43.54,
          "priceAvg30d": 24.46
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 43.51,
          "priceAvg30d": 26.9
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 43.5,
          "priceAvg30d": 29.31
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 44.1,
          "priceAvg30d": 31.0
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.1,
          "priceAvg30d": 32.81
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 45.0,
          "priceAvg30d": 36.4
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 45.29,
          "priceAvg30d": 37.62
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.31,
          "priceAvg30d": 37.63
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 45.29,
          "priceAvg30d": 38.26
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 45.31,
          "priceAvg30d": 38.35
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 45.01,
          "priceAvg30d": 37.72
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 44.99,
          "priceAvg30d": 37.63
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 44.1,
          "priceAvg30d": 37.52
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.47,
          "priceAvg30d": 37.02
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 42.51,
          "priceAvg30d": 35.6
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 42.05,
          "priceAvg30d": 35.34
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 41.78,
          "priceAvg30d": 34.85
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 39.59,
          "priceAvg30d": 34.17
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 39.32,
          "priceAvg30d": 34.38
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 35.34,
          "priceAvg30d": 33.48
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 39.0,
          "priceAvg30d": 32.81
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.96,
          "priceAvg30d": 31.64
        }
      ],
      "avg": 40.15,
      "max": 46.21,
      "maxBlock": 21,
      "min": 31.57,
      "minBlock": 9,
      "spread3h": 12.86,
      "spreadLowAvg": 33.16,
      "spreadHighAvg": 46.02,
      "avg30d": 31.13,
      "spread30dAvg": 16.3,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.98,
          "priceAvg30d": 17.95
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.72,
          "priceAvg30d": 17.85
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.38,
          "priceAvg30d": 17.82
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.91,
          "priceAvg30d": 17.68
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.72,
          "priceAvg30d": 19.19
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.8,
          "priceAvg30d": 21.31
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.51,
          "priceAvg30d": 23.47
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.64,
          "priceAvg30d": 24.48
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.57,
          "priceAvg30d": 24.7
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 32.89,
          "priceAvg30d": 25.63
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.82,
          "priceAvg30d": 26.45
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.3,
          "priceAvg30d": 25.99
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 35.34,
          "priceAvg30d": 25.21
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 35.69,
          "priceAvg30d": 26.07
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 40.29,
          "priceAvg30d": 26.15
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 40.6,
          "priceAvg30d": 24.55
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 45.29,
          "priceAvg30d": 24.17
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 45.61,
          "priceAvg30d": 24.46
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 45.99,
          "priceAvg30d": 23.82
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 46.05,
          "priceAvg30d": 22.48
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 46.21,
          "priceAvg30d": 21.33
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 46.21,
          "priceAvg30d": 20.36
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 46.06,
          "priceAvg30d": 20.52
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 46.17,
          "priceAvg30d": 19.84
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 41.78,
          "priceAvg30d": 15.7
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 37.6,
          "priceAvg30d": 16.59
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 43.54,
          "priceAvg30d": 21.87
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 43.51,
          "priceAvg30d": 24.32
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 43.5,
          "priceAvg30d": 26.25
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 44.1,
          "priceAvg30d": 28.22
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.1,
          "priceAvg30d": 29.37
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 45.0,
          "priceAvg30d": 31.98
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 45.29,
          "priceAvg30d": 33.07
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.31,
          "priceAvg30d": 34.5
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 45.29,
          "priceAvg30d": 34.29
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 45.31,
          "priceAvg30d": 34.94
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 45.01,
          "priceAvg30d": 33.33
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 44.99,
          "priceAvg30d": 32.96
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 44.1,
          "priceAvg30d": 32.7
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.47,
          "priceAvg30d": 30.86
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 42.51,
          "priceAvg30d": 30.68
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 42.05,
          "priceAvg30d": 29.23
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 41.78,
          "priceAvg30d": 28.77
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 39.59,
          "priceAvg30d": 26.98
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 39.32,
          "priceAvg30d": 28.06
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 35.34,
          "priceAvg30d": 25.77
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 39.0,
          "priceAvg30d": 24.58
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.96,
          "priceAvg30d": 18.89
        }
      ],
      "avg": 39.77,
      "max": 46.21,
      "maxBlock": 21,
      "min": 26.91,
      "minBlock": 4,
      "spread3h": 15.66,
      "spreadLowAvg": 30.35,
      "spreadHighAvg": 46.02,
      "avg30d": 25.32,
      "spread30dAvg": 16.92,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.98,
          "priceAvg30d": 17.95
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.72,
          "priceAvg30d": 17.85
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.38,
          "priceAvg30d": 17.82
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.91,
          "priceAvg30d": 17.68
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.72,
          "priceAvg30d": 18.52
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.8,
          "priceAvg30d": 20.75
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.51,
          "priceAvg30d": 22.37
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.64,
          "priceAvg30d": 23.71
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.57,
          "priceAvg30d": 23.69
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 32.89,
          "priceAvg30d": 24.19
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.82,
          "priceAvg30d": 24.14
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.3,
          "priceAvg30d": 23.55
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 35.34,
          "priceAvg30d": 23.79
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 35.69,
          "priceAvg30d": 25.25
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 40.29,
          "priceAvg30d": 25.58
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 40.6,
          "priceAvg30d": 24.05
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 45.29,
          "priceAvg30d": 23.98
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 45.61,
          "priceAvg30d": 24.46
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 45.99,
          "priceAvg30d": 23.82
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 46.05,
          "priceAvg30d": 22.48
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 46.21,
          "priceAvg30d": 21.25
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 46.21,
          "priceAvg30d": 20.25
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 46.06,
          "priceAvg30d": 20.52
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 46.17,
          "priceAvg30d": 19.89
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 41.78,
          "priceAvg30d": 15.62
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 37.6,
          "priceAvg30d": 16.5
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 43.54,
          "priceAvg30d": 21.87
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 43.51,
          "priceAvg30d": 24.22
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 43.5,
          "priceAvg30d": 25.92
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 44.1,
          "priceAvg30d": 27.45
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.1,
          "priceAvg30d": 29.31
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 45.0,
          "priceAvg30d": 31.98
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 45.29,
          "priceAvg30d": 33.07
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.31,
          "priceAvg30d": 34.5
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 45.29,
          "priceAvg30d": 33.8
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 45.31,
          "priceAvg30d": 34.38
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 45.01,
          "priceAvg30d": 33.32
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 44.99,
          "priceAvg30d": 32.95
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 44.1,
          "priceAvg30d": 32.68
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.47,
          "priceAvg30d": 30.86
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 42.51,
          "priceAvg30d": 30.6
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 42.05,
          "priceAvg30d": 28.9
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 41.78,
          "priceAvg30d": 28.5
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 39.59,
          "priceAvg30d": 26.98
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 39.32,
          "priceAvg30d": 27.07
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 35.34,
          "priceAvg30d": 25.15
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 39.0,
          "priceAvg30d": 24.25
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.96,
          "priceAvg30d": 18.89
        }
      ],
      "avg": 39.77,
      "max": 46.21,
      "maxBlock": 21,
      "min": 26.91,
      "minBlock": 4,
      "spread3h": 15.66,
      "spreadLowAvg": 30.35,
      "spreadHighAvg": 46.02,
      "avg30d": 24.92,
      "spread30dAvg": 16.52,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.98,
          "priceAvg30d": 17.95
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.72,
          "priceAvg30d": 17.77
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.38,
          "priceAvg30d": 17.25
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.91,
          "priceAvg30d": 17.08
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.72,
          "priceAvg30d": 18.09
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.8,
          "priceAvg30d": 19.99
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.51,
          "priceAvg30d": 21.67
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.64,
          "priceAvg30d": 23.23
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.57,
          "priceAvg30d": 23.61
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 32.89,
          "priceAvg30d": 24.14
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.82,
          "priceAvg30d": 24.06
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.3,
          "priceAvg30d": 23.54
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 35.34,
          "priceAvg30d": 23.68
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 35.69,
          "priceAvg30d": 25.16
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 40.29,
          "priceAvg30d": 23.49
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 40.6,
          "priceAvg30d": 21.06
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 45.29,
          "priceAvg30d": 19.87
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 45.61,
          "priceAvg30d": 17.15
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 45.99,
          "priceAvg30d": 14.41
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 46.05,
          "priceAvg30d": 12.24
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 46.21,
          "priceAvg30d": 10.97
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 46.21,
          "priceAvg30d": 10.64
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 46.06,
          "priceAvg30d": 10.41
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 46.17,
          "priceAvg30d": 10.49
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 41.78,
          "priceAvg30d": 8.82
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 37.6,
          "priceAvg30d": 9.33
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 42.87,
          "priceAvg30d": 11.01
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 43.51,
          "priceAvg30d": 11.72
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 43.5,
          "priceAvg30d": 13.62
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 44.1,
          "priceAvg30d": 14.84
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.1,
          "priceAvg30d": 18.45
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 45.0,
          "priceAvg30d": 22.34
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 45.29,
          "priceAvg30d": 25.78
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.31,
          "priceAvg30d": 29.79
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 45.29,
          "priceAvg30d": 30.58
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 45.31,
          "priceAvg30d": 30.88
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 45.01,
          "priceAvg30d": 30.36
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 44.99,
          "priceAvg30d": 29.85
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 44.1,
          "priceAvg30d": 28.9
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.47,
          "priceAvg30d": 28.36
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 42.51,
          "priceAvg30d": 28.5
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 42.05,
          "priceAvg30d": 27.54
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 41.78,
          "priceAvg30d": 27.32
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 39.59,
          "priceAvg30d": 25.78
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 39.32,
          "priceAvg30d": 25.34
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 35.34,
          "priceAvg30d": 23.51
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 39.0,
          "priceAvg30d": 22.87
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.96,
          "priceAvg30d": 18.81
        }
      ],
      "avg": 39.76,
      "max": 46.21,
      "maxBlock": 21,
      "min": 26.91,
      "minBlock": 4,
      "spread3h": 15.66,
      "spreadLowAvg": 30.35,
      "spreadHighAvg": 46.02,
      "avg30d": 20.67,
      "spread30dAvg": 17.33,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.98,
          "priceAvg30d": 16.89
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.72,
          "priceAvg30d": 15.73
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.38,
          "priceAvg30d": 15.51
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.91,
          "priceAvg30d": 15.65
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.72,
          "priceAvg30d": 16.34
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.8,
          "priceAvg30d": 18.13
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.51,
          "priceAvg30d": 19.39
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.64,
          "priceAvg30d": 21.84
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.57,
          "priceAvg30d": 22.31
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 32.89,
          "priceAvg30d": 23.19
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.82,
          "priceAvg30d": 23.4
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.3,
          "priceAvg30d": 22.76
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 35.34,
          "priceAvg30d": 21.97
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 35.69,
          "priceAvg30d": 22.69
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 40.29,
          "priceAvg30d": 21.05
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 40.6,
          "priceAvg30d": 19.87
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 45.29,
          "priceAvg30d": 19.01
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 45.61,
          "priceAvg30d": 16.39
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 45.99,
          "priceAvg30d": 13.36
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 46.05,
          "priceAvg30d": 10.01
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 46.21,
          "priceAvg30d": 9.08
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 46.21,
          "priceAvg30d": 7.99
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 46.06,
          "priceAvg30d": 8.75
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 46.17,
          "priceAvg30d": 8.55
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 41.78,
          "priceAvg30d": 6.8
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 37.6,
          "priceAvg30d": 7.31
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 42.87,
          "priceAvg30d": 9.56
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 43.51,
          "priceAvg30d": 9.97
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 43.5,
          "priceAvg30d": 11.38
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 44.1,
          "priceAvg30d": 12.98
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.1,
          "priceAvg30d": 15.84
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 45.0,
          "priceAvg30d": 20.06
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 45.29,
          "priceAvg30d": 24.1
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.31,
          "priceAvg30d": 28.49
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 45.29,
          "priceAvg30d": 29.36
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 45.31,
          "priceAvg30d": 29.86
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 45.01,
          "priceAvg30d": 29.0
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 44.99,
          "priceAvg30d": 28.61
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 44.1,
          "priceAvg30d": 27.35
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.47,
          "priceAvg30d": 26.58
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 42.51,
          "priceAvg30d": 26.67
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 42.05,
          "priceAvg30d": 24.39
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 41.78,
          "priceAvg30d": 25.62
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 39.59,
          "priceAvg30d": 23.53
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 39.32,
          "priceAvg30d": 22.45
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 35.34,
          "priceAvg30d": 20.6
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 39.0,
          "priceAvg30d": 20.65
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.96,
          "priceAvg30d": 17.66
        }
      ],
      "avg": 39.76,
      "max": 46.21,
      "maxBlock": 21,
      "min": 26.91,
      "minBlock": 4,
      "spread3h": 15.66,
      "spreadLowAvg": 30.35,
      "spreadHighAvg": 46.02,
      "avg30d": 18.93,
      "spread30dAvg": 18.62,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.98,
          "priceAvg30d": 17.16
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.72,
          "priceAvg30d": 16.73
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.38,
          "priceAvg30d": 16.23
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.91,
          "priceAvg30d": 16.03
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.72,
          "priceAvg30d": 17.03
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.8,
          "priceAvg30d": 18.9
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.51,
          "priceAvg30d": 20.73
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.64,
          "priceAvg30d": 22.58
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.57,
          "priceAvg30d": 23.18
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 32.89,
          "priceAvg30d": 23.62
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.82,
          "priceAvg30d": 23.66
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.3,
          "priceAvg30d": 23.2
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 35.34,
          "priceAvg30d": 23.45
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 35.69,
          "priceAvg30d": 24.59
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 40.29,
          "priceAvg30d": 22.86
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 40.6,
          "priceAvg30d": 20.69
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 45.29,
          "priceAvg30d": 19.03
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 45.61,
          "priceAvg30d": 16.61
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 45.99,
          "priceAvg30d": 13.09
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 46.05,
          "priceAvg30d": 10.88
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 46.21,
          "priceAvg30d": 9.82
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 46.21,
          "priceAvg30d": 9.08
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 46.06,
          "priceAvg30d": 8.73
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 46.17,
          "priceAvg30d": 9.03
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 41.78,
          "priceAvg30d": 7.29
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 37.6,
          "priceAvg30d": 7.51
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 42.87,
          "priceAvg30d": 9.65
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 43.51,
          "priceAvg30d": 10.92
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 43.5,
          "priceAvg30d": 12.37
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 44.1,
          "priceAvg30d": 14.37
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.1,
          "priceAvg30d": 18.21
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 45.0,
          "priceAvg30d": 21.79
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 45.29,
          "priceAvg30d": 25.78
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.31,
          "priceAvg30d": 29.79
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 45.29,
          "priceAvg30d": 30.42
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 45.31,
          "priceAvg30d": 30.88
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 45.01,
          "priceAvg30d": 30.36
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 44.99,
          "priceAvg30d": 29.85
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 44.1,
          "priceAvg30d": 28.9
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.47,
          "priceAvg30d": 28.36
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 42.51,
          "priceAvg30d": 28.5
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 42.05,
          "priceAvg30d": 27.54
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 41.78,
          "priceAvg30d": 27.22
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 39.59,
          "priceAvg30d": 25.45
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 39.32,
          "priceAvg30d": 25.04
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 35.34,
          "priceAvg30d": 23.14
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 39.0,
          "priceAvg30d": 21.85
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.96,
          "priceAvg30d": 18.14
        }
      ],
      "avg": 39.76,
      "max": 46.21,
      "maxBlock": 21,
      "min": 26.91,
      "minBlock": 4,
      "spread3h": 15.66,
      "spreadLowAvg": 30.35,
      "spreadHighAvg": 46.02,
      "avg30d": 20.0,
      "spread30dAvg": 18.28,
      "historyDays": 30
    }
  }
};
