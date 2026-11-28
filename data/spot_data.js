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
  "targetDate": "2026-11-28",
  "fetchedAt": "2026-11-28T14:30:47+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 26.96,
        "priceAvg30d": 27.41
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 27.19,
        "priceAvg30d": 26.55
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 27.3,
        "priceAvg30d": 25.91
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 27.3,
        "priceAvg30d": 25.85
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 27.63,
        "priceAvg30d": 26.05
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 29.32,
        "priceAvg30d": 27.04
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 29.19,
        "priceAvg30d": 28.1
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 29.32,
        "priceAvg30d": 28.93
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 29.32,
        "priceAvg30d": 29.33
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 29.3,
        "priceAvg30d": 29.7
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 29.18,
        "priceAvg30d": 30.21
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 27.8,
        "priceAvg30d": 30.58
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 28.32,
        "priceAvg30d": 32.03
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 29.18,
        "priceAvg30d": 32.71
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 29.84,
        "priceAvg30d": 31.54
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 29.84,
        "priceAvg30d": 29.26
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 29.84,
        "priceAvg30d": 28.28
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 29.84,
        "priceAvg30d": 26.58
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 27.5,
        "priceAvg30d": 24.19
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 25.91,
        "priceAvg30d": 20.76
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 24.01,
        "priceAvg30d": 19.38
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 23.11,
        "priceAvg30d": 18.14
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 21.74,
        "priceAvg30d": 17.61
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 13.21,
        "priceAvg30d": 17.02
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 13.95,
        "priceAvg30d": 14.89
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 12.89,
        "priceAvg30d": 15.41
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 16.29,
        "priceAvg30d": 20.42
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 15.19,
        "priceAvg30d": 22.62
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 12.77,
        "priceAvg30d": 24.9
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 23.34,
        "priceAvg30d": 27.74
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 24.8,
        "priceAvg30d": 30.87
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 26.08,
        "priceAvg30d": 34.23
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 27.65,
        "priceAvg30d": 37.46
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 29.61,
        "priceAvg30d": 38.48
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 35.99,
        "priceAvg30d": 38.25
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 29.29,
        "priceAvg30d": 37.99
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 29.18,
        "priceAvg30d": 37.4
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 28.82,
        "priceAvg30d": 37.19
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 28.27,
        "priceAvg30d": 36.63
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 27.89,
        "priceAvg30d": 35.72
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 29.18,
        "priceAvg30d": 35.28
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 28.29,
        "priceAvg30d": 34.85
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 29.0,
        "priceAvg30d": 34.34
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 27.44,
        "priceAvg30d": 32.83
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 27.24,
        "priceAvg30d": 33.01
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 26.92,
        "priceAvg30d": 31.21
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 26.46,
        "priceAvg30d": 30.68
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 24.67,
        "priceAvg30d": 27.78
      }
    ],
    "avg": 26.11,
    "max": 35.99,
    "maxBlock": 35,
    "min": 12.77,
    "minBlock": 29,
    "spread3h": 8.67,
    "spreadLowAvg": 19.77,
    "spreadHighAvg": 28.44,
    "avg30d": 28.82,
    "spread30dAvg": 20.85,
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
          "price": 24.64,
          "priceAvg30d": 27.02
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 25.31
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.48,
          "priceAvg30d": 24.82
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.75,
          "priceAvg30d": 24.85
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.57,
          "priceAvg30d": 25.49
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.35,
          "priceAvg30d": 25.89
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.84,
          "priceAvg30d": 26.6
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.3,
          "priceAvg30d": 26.95
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.67,
          "priceAvg30d": 27.05
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.2,
          "priceAvg30d": 27.56
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.61,
          "priceAvg30d": 27.99
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.32,
          "priceAvg30d": 28.76
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.18,
          "priceAvg30d": 29.29
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 29.84,
          "priceAvg30d": 30.34
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.84,
          "priceAvg30d": 27.52
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.5,
          "priceAvg30d": 24.94
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 30.99,
          "priceAvg30d": 23.79
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.33,
          "priceAvg30d": 20.98
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 29.84,
          "priceAvg30d": 19.41
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.18,
          "priceAvg30d": 16.75
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 25.86,
          "priceAvg30d": 16.0
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.64,
          "priceAvg30d": 14.42
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.8,
          "priceAvg30d": 14.93
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.18,
          "priceAvg30d": 14.17
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 23.23,
          "priceAvg30d": 12.93
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.47,
          "priceAvg30d": 13.25
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.24,
          "priceAvg30d": 17.22
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.67,
          "priceAvg30d": 21.64
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.5,
          "priceAvg30d": 24.03
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.55,
          "priceAvg30d": 27.35
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.82,
          "priceAvg30d": 29.47
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 26.98,
          "priceAvg30d": 33.0
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 29.74,
          "priceAvg30d": 36.53
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 33.33,
          "priceAvg30d": 37.25
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.0,
          "priceAvg30d": 36.82
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.29,
          "priceAvg30d": 35.84
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.18,
          "priceAvg30d": 35.79
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.82,
          "priceAvg30d": 35.01
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.43,
          "priceAvg30d": 34.19
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.88,
          "priceAvg30d": 32.76
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.25,
          "priceAvg30d": 32.59
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.18,
          "priceAvg30d": 31.91
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.94,
          "priceAvg30d": 31.55
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.49,
          "priceAvg30d": 29.86
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.58,
          "priceAvg30d": 29.31
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.29,
          "priceAvg30d": 27.91
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 23.83,
          "priceAvg30d": 27.65
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.84,
          "priceAvg30d": 24.36
        }
      ],
      "avg": 26.82,
      "max": 36.0,
      "maxBlock": 35,
      "min": 12.84,
      "minBlock": 48,
      "spread3h": 6.45,
      "spreadLowAvg": 23.11,
      "spreadHighAvg": 29.56,
      "avg30d": 26.44,
      "spread30dAvg": 19.04,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.3,
          "priceAvg30d": 26.75
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 24.95
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.84,
          "priceAvg30d": 24.05
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.81,
          "priceAvg30d": 23.86
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.16,
          "priceAvg30d": 25.01
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.08,
          "priceAvg30d": 25.84
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.3,
          "priceAvg30d": 26.83
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.49,
          "priceAvg30d": 27.52
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.7,
          "priceAvg30d": 27.64
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.2,
          "priceAvg30d": 27.95
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.61,
          "priceAvg30d": 28.61
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.32,
          "priceAvg30d": 29.06
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.18,
          "priceAvg30d": 29.93
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 29.84,
          "priceAvg30d": 30.52
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.84,
          "priceAvg30d": 27.4
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.5,
          "priceAvg30d": 24.02
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 30.99,
          "priceAvg30d": 23.84
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.33,
          "priceAvg30d": 21.54
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 29.84,
          "priceAvg30d": 19.27
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.18,
          "priceAvg30d": 17.28
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 25.86,
          "priceAvg30d": 15.82
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.64,
          "priceAvg30d": 14.57
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.8,
          "priceAvg30d": 13.77
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.18,
          "priceAvg30d": 13.7
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 23.23,
          "priceAvg30d": 13.17
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.47,
          "priceAvg30d": 13.56
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.24,
          "priceAvg30d": 17.13
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.98,
          "priceAvg30d": 19.89
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 22.52,
          "priceAvg30d": 22.7
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.55,
          "priceAvg30d": 26.8
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.82,
          "priceAvg30d": 29.56
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 26.98,
          "priceAvg30d": 33.33
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 29.74,
          "priceAvg30d": 36.62
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 33.33,
          "priceAvg30d": 37.8
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.0,
          "priceAvg30d": 37.77
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.29,
          "priceAvg30d": 37.27
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.18,
          "priceAvg30d": 36.63
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.82,
          "priceAvg30d": 36.15
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.43,
          "priceAvg30d": 35.85
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.88,
          "priceAvg30d": 34.32
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.25,
          "priceAvg30d": 34.12
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.18,
          "priceAvg30d": 33.22
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.94,
          "priceAvg30d": 32.87
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.49,
          "priceAvg30d": 31.71
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.58,
          "priceAvg30d": 30.16
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.29,
          "priceAvg30d": 28.41
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 23.83,
          "priceAvg30d": 27.56
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.84,
          "priceAvg30d": 25.07
        }
      ],
      "avg": 27.04,
      "max": 36.0,
      "maxBlock": 35,
      "min": 12.84,
      "minBlock": 48,
      "spread3h": 11.91,
      "spreadLowAvg": 17.65,
      "spreadHighAvg": 29.56,
      "avg30d": 26.7,
      "spread30dAvg": 21.99,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.3,
          "priceAvg30d": 30.3
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.16,
          "priceAvg30d": 30.05
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.84,
          "priceAvg30d": 29.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.81,
          "priceAvg30d": 29.46
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.16,
          "priceAvg30d": 29.52
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.08,
          "priceAvg30d": 29.65
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.3,
          "priceAvg30d": 29.73
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.49,
          "priceAvg30d": 29.89
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.7,
          "priceAvg30d": 30.08
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.2,
          "priceAvg30d": 30.37
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.61,
          "priceAvg30d": 30.67
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.32,
          "priceAvg30d": 31.6
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.18,
          "priceAvg30d": 33.42
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 29.84,
          "priceAvg30d": 34.28
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.84,
          "priceAvg30d": 33.9
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.5,
          "priceAvg30d": 32.87
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 30.99,
          "priceAvg30d": 30.47
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.33,
          "priceAvg30d": 29.89
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 29.84,
          "priceAvg30d": 29.28
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.18,
          "priceAvg30d": 26.9
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 25.86,
          "priceAvg30d": 26.43
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.64,
          "priceAvg30d": 25.7
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.8,
          "priceAvg30d": 25.05
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.18,
          "priceAvg30d": 24.86
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 23.23,
          "priceAvg30d": 23.76
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.52,
          "priceAvg30d": 25.03
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.24,
          "priceAvg30d": 27.78
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.98,
          "priceAvg30d": 29.31
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 22.52,
          "priceAvg30d": 31.1
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.55,
          "priceAvg30d": 32.68
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.82,
          "priceAvg30d": 34.61
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 26.98,
          "priceAvg30d": 38.13
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 29.74,
          "priceAvg30d": 39.6
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 33.33,
          "priceAvg30d": 40.23
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.62,
          "priceAvg30d": 40.16
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.29,
          "priceAvg30d": 39.54
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.18,
          "priceAvg30d": 38.37
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.82,
          "priceAvg30d": 38.64
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.43,
          "priceAvg30d": 38.35
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.88,
          "priceAvg30d": 37.99
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.25,
          "priceAvg30d": 37.37
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.18,
          "priceAvg30d": 36.67
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.94,
          "priceAvg30d": 35.98
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.49,
          "priceAvg30d": 35.1
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.58,
          "priceAvg30d": 36.46
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.39,
          "priceAvg30d": 34.34
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.91,
          "priceAvg30d": 32.92
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.59,
          "priceAvg30d": 30.98
        }
      ],
      "avg": 27.6,
      "max": 36.62,
      "maxBlock": 35,
      "min": 22.52,
      "minBlock": 26,
      "spread3h": 6.4,
      "spreadLowAvg": 23.16,
      "spreadHighAvg": 29.56,
      "avg30d": 32.27,
      "spread30dAvg": 14.69,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.3,
          "priceAvg30d": 30.46
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.0,
          "priceAvg30d": 30.48
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.0,
          "priceAvg30d": 30.2
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 31.04,
          "priceAvg30d": 30.12
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.02,
          "priceAvg30d": 30.54
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 32.03,
          "priceAvg30d": 30.8
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 34.6,
          "priceAvg30d": 31.15
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.63,
          "priceAvg30d": 31.57
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.61,
          "priceAvg30d": 31.81
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.01,
          "priceAvg30d": 31.91
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.32,
          "priceAvg30d": 32.26
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.32,
          "priceAvg30d": 32.63
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.18,
          "priceAvg30d": 33.66
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 29.84,
          "priceAvg30d": 34.61
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.84,
          "priceAvg30d": 33.94
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.5,
          "priceAvg30d": 32.29
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 30.99,
          "priceAvg30d": 31.21
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.33,
          "priceAvg30d": 30.16
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 29.84,
          "priceAvg30d": 28.58
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.18,
          "priceAvg30d": 25.68
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 25.86,
          "priceAvg30d": 24.82
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.64,
          "priceAvg30d": 24.12
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.8,
          "priceAvg30d": 23.78
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.18,
          "priceAvg30d": 23.58
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 23.23,
          "priceAvg30d": 21.29
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.52,
          "priceAvg30d": 22.18
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.24,
          "priceAvg30d": 25.24
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.98,
          "priceAvg30d": 27.47
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 22.52,
          "priceAvg30d": 29.61
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.55,
          "priceAvg30d": 31.69
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.82,
          "priceAvg30d": 34.12
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 26.98,
          "priceAvg30d": 37.42
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 29.74,
          "priceAvg30d": 38.7
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 33.33,
          "priceAvg30d": 38.86
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.62,
          "priceAvg30d": 39.47
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.29,
          "priceAvg30d": 39.56
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.18,
          "priceAvg30d": 38.97
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.82,
          "priceAvg30d": 38.87
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.43,
          "priceAvg30d": 38.66
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.88,
          "priceAvg30d": 38.38
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.25,
          "priceAvg30d": 37.37
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.18,
          "priceAvg30d": 37.23
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.94,
          "priceAvg30d": 36.73
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.49,
          "priceAvg30d": 35.94
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.58,
          "priceAvg30d": 35.91
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.39,
          "priceAvg30d": 34.22
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.91,
          "priceAvg30d": 33.7
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.59,
          "priceAvg30d": 32.03
        }
      ],
      "avg": 28.68,
      "max": 36.62,
      "maxBlock": 35,
      "min": 22.52,
      "minBlock": 26,
      "spread3h": 6.4,
      "spreadLowAvg": 23.16,
      "spreadHighAvg": 29.56,
      "avg30d": 32.17,
      "spread30dAvg": 16.54,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.3,
          "priceAvg30d": 20.56
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.0,
          "priceAvg30d": 19.99
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.82,
          "priceAvg30d": 19.67
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.34,
          "priceAvg30d": 19.52
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.02,
          "priceAvg30d": 21.06
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 32.03,
          "priceAvg30d": 23.54
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 34.6,
          "priceAvg30d": 25.57
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.63,
          "priceAvg30d": 26.58
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.61,
          "priceAvg30d": 26.77
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.01,
          "priceAvg30d": 27.67
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.32,
          "priceAvg30d": 28.49
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.5,
          "priceAvg30d": 28.14
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.5,
          "priceAvg30d": 28.08
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 27.5,
          "priceAvg30d": 29.31
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.0,
          "priceAvg30d": 29.83
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.5,
          "priceAvg30d": 27.96
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.87,
          "priceAvg30d": 27.26
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.47,
          "priceAvg30d": 26.39
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.78,
          "priceAvg30d": 25.39
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 27.47,
          "priceAvg30d": 23.6
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.49,
          "priceAvg30d": 22.32
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.4,
          "priceAvg30d": 21.24
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.8,
          "priceAvg30d": 21.41
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 21.31,
          "priceAvg30d": 20.68
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.59,
          "priceAvg30d": 16.44
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 13.04,
          "priceAvg30d": 17.16
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.24,
          "priceAvg30d": 22.89
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.98,
          "priceAvg30d": 25.16
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 21.35,
          "priceAvg30d": 26.74
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.4,
          "priceAvg30d": 29.08
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.04,
          "priceAvg30d": 30.53
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.4,
          "priceAvg30d": 33.51
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.04,
          "priceAvg30d": 34.64
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 28.0,
          "priceAvg30d": 36.24
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.15,
          "priceAvg30d": 35.98
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.29,
          "priceAvg30d": 36.57
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.18,
          "priceAvg30d": 34.86
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.82,
          "priceAvg30d": 34.52
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.84,
          "priceAvg30d": 34.2
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.47,
          "priceAvg30d": 32.98
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.82,
          "priceAvg30d": 33.15
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.84,
          "priceAvg30d": 31.97
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.94,
          "priceAvg30d": 31.44
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.49,
          "priceAvg30d": 29.67
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.58,
          "priceAvg30d": 30.85
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.39,
          "priceAvg30d": 27.79
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.91,
          "priceAvg30d": 26.79
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 18.98,
          "priceAvg30d": 21.13
        }
      ],
      "avg": 26.92,
      "max": 34.63,
      "maxBlock": 8,
      "min": 10.59,
      "minBlock": 25,
      "spread3h": 11.14,
      "spreadLowAvg": 21.46,
      "spreadHighAvg": 32.6,
      "avg30d": 27.19,
      "spread30dAvg": 17.08,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.3,
          "priceAvg30d": 20.56
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.0,
          "priceAvg30d": 19.99
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.82,
          "priceAvg30d": 19.67
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.34,
          "priceAvg30d": 19.52
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.02,
          "priceAvg30d": 20.38
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 32.03,
          "priceAvg30d": 22.98
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 34.6,
          "priceAvg30d": 24.47
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.63,
          "priceAvg30d": 25.8
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.61,
          "priceAvg30d": 25.77
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.01,
          "priceAvg30d": 26.22
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.32,
          "priceAvg30d": 26.18
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.5,
          "priceAvg30d": 25.69
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.5,
          "priceAvg30d": 26.67
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 27.5,
          "priceAvg30d": 28.49
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.0,
          "priceAvg30d": 29.26
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.5,
          "priceAvg30d": 27.46
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.87,
          "priceAvg30d": 27.07
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.47,
          "priceAvg30d": 26.39
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.78,
          "priceAvg30d": 25.39
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 27.47,
          "priceAvg30d": 23.6
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.49,
          "priceAvg30d": 22.24
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.4,
          "priceAvg30d": 21.13
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.8,
          "priceAvg30d": 21.41
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 21.31,
          "priceAvg30d": 20.73
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.59,
          "priceAvg30d": 16.35
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 13.04,
          "priceAvg30d": 17.08
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.24,
          "priceAvg30d": 22.89
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.98,
          "priceAvg30d": 25.06
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 21.35,
          "priceAvg30d": 26.41
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.4,
          "priceAvg30d": 28.31
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.04,
          "priceAvg30d": 30.47
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.4,
          "priceAvg30d": 33.51
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.04,
          "priceAvg30d": 34.64
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 28.0,
          "priceAvg30d": 36.24
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.15,
          "priceAvg30d": 35.48
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.29,
          "priceAvg30d": 36.01
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.18,
          "priceAvg30d": 34.85
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.82,
          "priceAvg30d": 34.5
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.84,
          "priceAvg30d": 34.19
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.47,
          "priceAvg30d": 32.98
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.82,
          "priceAvg30d": 33.07
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.84,
          "priceAvg30d": 31.64
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.94,
          "priceAvg30d": 31.18
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.49,
          "priceAvg30d": 29.67
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.58,
          "priceAvg30d": 29.85
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.39,
          "priceAvg30d": 27.17
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.91,
          "priceAvg30d": 26.46
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 18.98,
          "priceAvg30d": 21.13
        }
      ],
      "avg": 26.92,
      "max": 34.63,
      "maxBlock": 8,
      "min": 10.59,
      "minBlock": 25,
      "spread3h": 11.14,
      "spreadLowAvg": 21.46,
      "spreadHighAvg": 32.6,
      "avg30d": 26.8,
      "spread30dAvg": 16.67,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.3,
          "priceAvg30d": 20.56
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.0,
          "priceAvg30d": 19.91
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.82,
          "priceAvg30d": 19.35
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.34,
          "priceAvg30d": 19.17
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.02,
          "priceAvg30d": 20.38
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 32.03,
          "priceAvg30d": 22.5
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 34.6,
          "priceAvg30d": 24.0
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.63,
          "priceAvg30d": 25.33
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.61,
          "priceAvg30d": 25.68
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.01,
          "priceAvg30d": 26.18
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.32,
          "priceAvg30d": 26.1
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.5,
          "priceAvg30d": 25.68
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.5,
          "priceAvg30d": 26.56
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 27.5,
          "priceAvg30d": 28.4
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.0,
          "priceAvg30d": 27.72
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.5,
          "priceAvg30d": 25.38
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.87,
          "priceAvg30d": 23.83
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.47,
          "priceAvg30d": 20.34
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 20.01,
          "priceAvg30d": 17.33
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 18.73,
          "priceAvg30d": 14.24
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.46,
          "priceAvg30d": 12.83
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.46,
          "priceAvg30d": 11.99
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.37,
          "priceAvg30d": 11.74
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.59,
          "priceAvg30d": 11.77
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.37,
          "priceAvg30d": 9.91
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.37,
          "priceAvg30d": 10.61
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.57,
          "priceAvg30d": 12.81
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.98,
          "priceAvg30d": 13.72
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.38,
          "priceAvg30d": 15.76
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.75,
          "priceAvg30d": 17.29
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.29,
          "priceAvg30d": 21.68
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.4,
          "priceAvg30d": 25.54
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.04,
          "priceAvg30d": 29.08
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 28.0,
          "priceAvg30d": 32.92
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.15,
          "priceAvg30d": 33.29
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.29,
          "priceAvg30d": 33.6
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.18,
          "priceAvg30d": 32.96
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.82,
          "priceAvg30d": 32.52
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.84,
          "priceAvg30d": 31.66
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.47,
          "priceAvg30d": 31.05
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.82,
          "priceAvg30d": 31.41
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.84,
          "priceAvg30d": 30.52
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.94,
          "priceAvg30d": 30.29
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.49,
          "priceAvg30d": 28.83
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.58,
          "priceAvg30d": 28.22
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.39,
          "priceAvg30d": 25.65
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.91,
          "priceAvg30d": 25.23
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 18.98,
          "priceAvg30d": 21.05
        }
      ],
      "avg": 24.41,
      "max": 34.63,
      "maxBlock": 8,
      "min": 9.59,
      "minBlock": 24,
      "spread3h": 22.17,
      "spreadLowAvg": 10.43,
      "spreadHighAvg": 32.6,
      "avg30d": 23.18,
      "spread30dAvg": 18.67,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.3,
          "priceAvg30d": 19.96
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.0,
          "priceAvg30d": 18.71
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.82,
          "priceAvg30d": 18.38
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.34,
          "priceAvg30d": 18.52
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.02,
          "priceAvg30d": 19.28
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 32.03,
          "priceAvg30d": 21.2
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 34.6,
          "priceAvg30d": 22.84
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.63,
          "priceAvg30d": 25.2
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.61,
          "priceAvg30d": 25.68
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.01,
          "priceAvg30d": 26.18
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.32,
          "priceAvg30d": 26.1
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.5,
          "priceAvg30d": 25.62
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.5,
          "priceAvg30d": 25.92
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 27.5,
          "priceAvg30d": 26.83
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.0,
          "priceAvg30d": 26.02
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.5,
          "priceAvg30d": 24.68
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.87,
          "priceAvg30d": 23.43
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.47,
          "priceAvg30d": 20.33
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 20.01,
          "priceAvg30d": 17.04
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.76,
          "priceAvg30d": 13.07
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.9,
          "priceAvg30d": 11.89
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.5,
          "priceAvg30d": 10.39
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 2.5,
          "priceAvg30d": 10.97
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.04,
          "priceAvg30d": 10.59
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.0,
          "priceAvg30d": 8.43
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 9.07
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 11.68
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 12.63
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 1.01,
          "priceAvg30d": 14.15
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.75,
          "priceAvg30d": 16.17
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.29,
          "priceAvg30d": 19.61
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.4,
          "priceAvg30d": 24.62
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.04,
          "priceAvg30d": 28.54
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 28.0,
          "priceAvg30d": 32.54
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.15,
          "priceAvg30d": 32.91
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.29,
          "priceAvg30d": 33.48
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.18,
          "priceAvg30d": 32.52
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.82,
          "priceAvg30d": 32.22
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.84,
          "priceAvg30d": 31.09
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.47,
          "priceAvg30d": 30.26
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.82,
          "priceAvg30d": 30.59
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.84,
          "priceAvg30d": 28.36
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.94,
          "priceAvg30d": 29.52
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.49,
          "priceAvg30d": 27.68
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.58,
          "priceAvg30d": 26.5
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.39,
          "priceAvg30d": 23.85
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.91,
          "priceAvg30d": 23.88
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 18.98,
          "priceAvg30d": 20.29
        }
      ],
      "avg": 22.27,
      "max": 34.63,
      "maxBlock": 8,
      "min": 0.01,
      "minBlock": 26,
      "spread3h": 31.84,
      "spreadLowAvg": 0.76,
      "spreadHighAvg": 32.6,
      "avg30d": 22.28,
      "spread30dAvg": 20.27,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.3,
          "priceAvg30d": 19.76
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.0,
          "priceAvg30d": 18.87
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.82,
          "priceAvg30d": 18.33
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.34,
          "priceAvg30d": 18.12
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.02,
          "priceAvg30d": 19.32
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 32.03,
          "priceAvg30d": 21.42
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 34.6,
          "priceAvg30d": 23.05
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.63,
          "priceAvg30d": 24.68
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.61,
          "priceAvg30d": 25.25
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.01,
          "priceAvg30d": 25.66
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.32,
          "priceAvg30d": 25.7
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.5,
          "priceAvg30d": 25.35
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.5,
          "priceAvg30d": 26.32
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 27.5,
          "priceAvg30d": 27.83
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.0,
          "priceAvg30d": 27.08
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.5,
          "priceAvg30d": 25.01
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 23.11,
          "priceAvg30d": 23.21
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 15.19,
          "priceAvg30d": 19.8
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.27,
          "priceAvg30d": 16.0
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.92,
          "priceAvg30d": 12.88
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.46,
          "priceAvg30d": 11.68
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.46,
          "priceAvg30d": 10.43
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.37,
          "priceAvg30d": 10.1
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.59,
          "priceAvg30d": 10.34
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.37,
          "priceAvg30d": 8.38
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.34,
          "priceAvg30d": 8.79
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.57,
          "priceAvg30d": 11.44
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.75,
          "priceAvg30d": 12.92
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.38,
          "priceAvg30d": 14.51
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.75,
          "priceAvg30d": 16.82
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.29,
          "priceAvg30d": 21.45
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.09,
          "priceAvg30d": 24.99
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.04,
          "priceAvg30d": 29.08
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 28.0,
          "priceAvg30d": 32.92
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.15,
          "priceAvg30d": 33.13
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.29,
          "priceAvg30d": 33.6
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.18,
          "priceAvg30d": 32.96
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.82,
          "priceAvg30d": 32.52
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.84,
          "priceAvg30d": 31.66
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.47,
          "priceAvg30d": 31.05
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.82,
          "priceAvg30d": 31.41
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.84,
          "priceAvg30d": 30.52
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.94,
          "priceAvg30d": 30.19
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.49,
          "priceAvg30d": 28.5
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.58,
          "priceAvg30d": 27.91
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.39,
          "priceAvg30d": 25.28
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.91,
          "priceAvg30d": 24.2
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 18.98,
          "priceAvg30d": 20.38
        }
      ],
      "avg": 23.44,
      "max": 34.63,
      "maxBlock": 8,
      "min": 9.59,
      "minBlock": 24,
      "spread3h": 22.17,
      "spreadLowAvg": 10.43,
      "spreadHighAvg": 32.6,
      "avg30d": 22.52,
      "spread30dAvg": 19.66,
      "historyDays": 30
    }
  }
};
