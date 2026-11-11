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
  "targetDate": "2026-11-11",
  "fetchedAt": "2026-11-11T12:46:04+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 31.94,
        "priceAvg30d": 25.1
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 32.13,
        "priceAvg30d": 24.04
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 32.13,
        "priceAvg30d": 23.27
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 32.1,
        "priceAvg30d": 23.17
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 32.31,
        "priceAvg30d": 23.39
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 33.09,
        "priceAvg30d": 24.14
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 33.25,
        "priceAvg30d": 25.12
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 33.81,
        "priceAvg30d": 25.95
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 33.66,
        "priceAvg30d": 26.31
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 33.77,
        "priceAvg30d": 26.66
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 34.57,
        "priceAvg30d": 26.88
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 35.0,
        "priceAvg30d": 27.11
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 36.07,
        "priceAvg30d": 27.23
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 36.13,
        "priceAvg30d": 26.88
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 35.6,
        "priceAvg30d": 24.94
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 34.31,
        "priceAvg30d": 22.53
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 30.48,
        "priceAvg30d": 21.43
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 29.21,
        "priceAvg30d": 20.78
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 22.66,
        "priceAvg30d": 19.26
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 13.55,
        "priceAvg30d": 17.88
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 11.42,
        "priceAvg30d": 16.87
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 10.0,
        "priceAvg30d": 16.11
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 9.25,
        "priceAvg30d": 15.66
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 9.25,
        "priceAvg30d": 15.5
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 5.0,
        "priceAvg30d": 13.47
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 8.25,
        "priceAvg30d": 13.92
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 11.66,
        "priceAvg30d": 17.75
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 14.53,
        "priceAvg30d": 20.52
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 19.08,
        "priceAvg30d": 21.75
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 25.14,
        "priceAvg30d": 24.95
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 31.38,
        "priceAvg30d": 27.02
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 35.22,
        "priceAvg30d": 30.55
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 40.01,
        "priceAvg30d": 34.22
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 43.13,
        "priceAvg30d": 35.58
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 43.09,
        "priceAvg30d": 34.95
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 43.05,
        "priceAvg30d": 34.64
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 42.75,
        "priceAvg30d": 33.23
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 42.75,
        "priceAvg30d": 32.55
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 42.75,
        "priceAvg30d": 31.71
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 42.75,
        "priceAvg30d": 30.0
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 40.0,
        "priceAvg30d": 29.41
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 38.07,
        "priceAvg30d": 28.71
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 38.13,
        "priceAvg30d": 28.2
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 37.4,
        "priceAvg30d": 27.76
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 38.11,
        "priceAvg30d": 28.02
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 34.9,
        "priceAvg30d": 27.22
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 34.29,
        "priceAvg30d": 26.89
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 33.29,
        "priceAvg30d": 24.85
      }
    ],
    "avg": 30.43,
    "max": 43.13,
    "maxBlock": 34,
    "min": 5.0,
    "minBlock": 25,
    "spread3h": 28.76,
    "spreadLowAvg": 10.49,
    "spreadHighAvg": 39.25,
    "avg30d": 25.08,
    "spread30dAvg": 19.21,
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
          "price": 33.7,
          "priceAvg30d": 21.74
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 34.36,
          "priceAvg30d": 19.62
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 34.24,
          "priceAvg30d": 19.57
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 34.1,
          "priceAvg30d": 20.35
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 34.11,
          "priceAvg30d": 21.12
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 34.59,
          "priceAvg30d": 21.88
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 34.1,
          "priceAvg30d": 22.65
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.64,
          "priceAvg30d": 23.78
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.59,
          "priceAvg30d": 24.68
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.59,
          "priceAvg30d": 24.41
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 35.71,
          "priceAvg30d": 26.03
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.05,
          "priceAvg30d": 27.03
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 40.08,
          "priceAvg30d": 25.02
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 40.08,
          "priceAvg30d": 23.39
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.16,
          "priceAvg30d": 21.22
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 35.02,
          "priceAvg30d": 18.78
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.94,
          "priceAvg30d": 17.75
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 29.31,
          "priceAvg30d": 15.12
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 29.3,
          "priceAvg30d": 14.63
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 27.09,
          "priceAvg30d": 12.73
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 20.24,
          "priceAvg30d": 12.02
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.59,
          "priceAvg30d": 10.7
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 20.88,
          "priceAvg30d": 10.98
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.59,
          "priceAvg30d": 11.33
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.99,
          "priceAvg30d": 9.45
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 14.25,
          "priceAvg30d": 9.36
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.53,
          "priceAvg30d": 12.04
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.87,
          "priceAvg30d": 15.86
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 32.13,
          "priceAvg30d": 19.02
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 33.89,
          "priceAvg30d": 22.08
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 36.6,
          "priceAvg30d": 24.06
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 50.0,
          "priceAvg30d": 28.02
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 53.07,
          "priceAvg30d": 33.75
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 53.07,
          "priceAvg30d": 34.33
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 54.56,
          "priceAvg30d": 32.69
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 46.52,
          "priceAvg30d": 31.58
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 50.0,
          "priceAvg30d": 31.25
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 45.27,
          "priceAvg30d": 31.52
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 45.27,
          "priceAvg30d": 31.55
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 45.27,
          "priceAvg30d": 30.09
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 45.27,
          "priceAvg30d": 30.18
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 41.77,
          "priceAvg30d": 28.3
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 45.27,
          "priceAvg30d": 26.98
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 38.05,
          "priceAvg30d": 26.58
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 45.66,
          "priceAvg30d": 26.15
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 40.0,
          "priceAvg30d": 24.95
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 36.22,
          "priceAvg30d": 24.53
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 34.6,
          "priceAvg30d": 22.7
        }
      ],
      "avg": 35.46,
      "max": 54.56,
      "maxBlock": 35,
      "min": 11.99,
      "minBlock": 25,
      "spread3h": 30.7,
      "spreadLowAvg": 18.95,
      "spreadHighAvg": 49.66,
      "avg30d": 22.36,
      "spread30dAvg": 20.77,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 33.7,
          "priceAvg30d": 25.59
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 34.36,
          "priceAvg30d": 25.25
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 34.24,
          "priceAvg30d": 24.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 34.1,
          "priceAvg30d": 24.54
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 34.11,
          "priceAvg30d": 25.04
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 34.59,
          "priceAvg30d": 25.43
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 34.1,
          "priceAvg30d": 26.13
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.64,
          "priceAvg30d": 26.14
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.59,
          "priceAvg30d": 26.52
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.59,
          "priceAvg30d": 26.61
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 35.71,
          "priceAvg30d": 27.05
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.05,
          "priceAvg30d": 27.39
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 40.08,
          "priceAvg30d": 27.42
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 40.08,
          "priceAvg30d": 26.38
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.16,
          "priceAvg30d": 23.79
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 35.02,
          "priceAvg30d": 21.65
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.94,
          "priceAvg30d": 20.99
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.92,
          "priceAvg30d": 19.43
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 29.3,
          "priceAvg30d": 19.03
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 27.09,
          "priceAvg30d": 18.41
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 20.24,
          "priceAvg30d": 17.0
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.59,
          "priceAvg30d": 16.57
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.84,
          "priceAvg30d": 15.93
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.59,
          "priceAvg30d": 15.98
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.99,
          "priceAvg30d": 14.68
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 13.59,
          "priceAvg30d": 14.83
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.53,
          "priceAvg30d": 18.26
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.87,
          "priceAvg30d": 20.28
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 32.13,
          "priceAvg30d": 23.1
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 33.89,
          "priceAvg30d": 25.9
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 36.6,
          "priceAvg30d": 27.73
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 43.03,
          "priceAvg30d": 32.1
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 45.94,
          "priceAvg30d": 35.94
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.52,
          "priceAvg30d": 37.64
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 47.09,
          "priceAvg30d": 36.69
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 46.52,
          "priceAvg30d": 36.42
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 45.94,
          "priceAvg30d": 34.97
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 45.27,
          "priceAvg30d": 34.7
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 45.27,
          "priceAvg30d": 34.1
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 45.27,
          "priceAvg30d": 32.42
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 45.27,
          "priceAvg30d": 31.98
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 41.77,
          "priceAvg30d": 30.56
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 45.27,
          "priceAvg30d": 29.91
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 38.05,
          "priceAvg30d": 29.76
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 45.66,
          "priceAvg30d": 29.62
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 40.0,
          "priceAvg30d": 27.9
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 36.22,
          "priceAvg30d": 27.26
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 34.6,
          "priceAvg30d": 24.97
        }
      ],
      "avg": 34.66,
      "max": 47.09,
      "maxBlock": 35,
      "min": 11.99,
      "minBlock": 25,
      "spread3h": 28.04,
      "spreadLowAvg": 17.5,
      "spreadHighAvg": 45.54,
      "avg30d": 25.93,
      "spread30dAvg": 20.58,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 33.7,
          "priceAvg30d": 28.49
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 34.36,
          "priceAvg30d": 28.24
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 34.24,
          "priceAvg30d": 28.2
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 34.1,
          "priceAvg30d": 27.78
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 34.11,
          "priceAvg30d": 28.01
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 34.59,
          "priceAvg30d": 28.05
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 34.1,
          "priceAvg30d": 28.18
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.64,
          "priceAvg30d": 28.19
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.59,
          "priceAvg30d": 28.43
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.59,
          "priceAvg30d": 28.47
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 35.71,
          "priceAvg30d": 28.68
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.05,
          "priceAvg30d": 29.26
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 40.08,
          "priceAvg30d": 29.54
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 40.08,
          "priceAvg30d": 29.16
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.16,
          "priceAvg30d": 29.06
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 35.02,
          "priceAvg30d": 28.59
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.94,
          "priceAvg30d": 27.47
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.92,
          "priceAvg30d": 28.02
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.8,
          "priceAvg30d": 27.32
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.45,
          "priceAvg30d": 26.01
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 26.6,
          "priceAvg30d": 25.05
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 23.94,
          "priceAvg30d": 24.6
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.9,
          "priceAvg30d": 24.4
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.98,
          "priceAvg30d": 24.91
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.82,
          "priceAvg30d": 24.43
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.0,
          "priceAvg30d": 25.05
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.53,
          "priceAvg30d": 26.72
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.87,
          "priceAvg30d": 28.69
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 32.13,
          "priceAvg30d": 30.21
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 33.89,
          "priceAvg30d": 32.57
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 36.6,
          "priceAvg30d": 32.77
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 43.03,
          "priceAvg30d": 35.8
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 45.94,
          "priceAvg30d": 37.84
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.52,
          "priceAvg30d": 39.02
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 47.09,
          "priceAvg30d": 38.29
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 46.52,
          "priceAvg30d": 38.03
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 45.94,
          "priceAvg30d": 36.2
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 45.27,
          "priceAvg30d": 36.25
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 45.27,
          "priceAvg30d": 35.44
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 45.27,
          "priceAvg30d": 33.96
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 45.27,
          "priceAvg30d": 32.88
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 41.77,
          "priceAvg30d": 31.67
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 45.27,
          "priceAvg30d": 31.0
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 38.05,
          "priceAvg30d": 31.23
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 45.66,
          "priceAvg30d": 32.5
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 40.0,
          "priceAvg30d": 30.86
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 36.22,
          "priceAvg30d": 29.8
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 34.6,
          "priceAvg30d": 28.36
        }
      ],
      "avg": 35.48,
      "max": 47.09,
      "maxBlock": 35,
      "min": 12.82,
      "minBlock": 25,
      "spread3h": 23.33,
      "spreadLowAvg": 22.2,
      "spreadHighAvg": 45.54,
      "avg30d": 30.08,
      "spread30dAvg": 13.51,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 33.7,
          "priceAvg30d": 27.67
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 34.36,
          "priceAvg30d": 27.41
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 34.24,
          "priceAvg30d": 26.87
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 34.1,
          "priceAvg30d": 26.75
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 34.11,
          "priceAvg30d": 27.25
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 34.59,
          "priceAvg30d": 27.62
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 34.1,
          "priceAvg30d": 27.93
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.64,
          "priceAvg30d": 28.21
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.59,
          "priceAvg30d": 28.39
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.59,
          "priceAvg30d": 28.51
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 35.71,
          "priceAvg30d": 28.74
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.05,
          "priceAvg30d": 29.02
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.07,
          "priceAvg30d": 29.03
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.13,
          "priceAvg30d": 28.69
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.16,
          "priceAvg30d": 27.22
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 35.02,
          "priceAvg30d": 25.47
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.94,
          "priceAvg30d": 24.63
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.92,
          "priceAvg30d": 25.22
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.8,
          "priceAvg30d": 24.36
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.5,
          "priceAvg30d": 23.2
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.3,
          "priceAvg30d": 21.55
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.18,
          "priceAvg30d": 21.11
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.9,
          "priceAvg30d": 20.76
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.98,
          "priceAvg30d": 20.71
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.82,
          "priceAvg30d": 18.52
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.0,
          "priceAvg30d": 19.25
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.3,
          "priceAvg30d": 22.79
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.14,
          "priceAvg30d": 25.7
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 32.13,
          "priceAvg30d": 27.19
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 33.89,
          "priceAvg30d": 28.93
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 36.6,
          "priceAvg30d": 30.37
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 43.03,
          "priceAvg30d": 34.79
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 42.75,
          "priceAvg30d": 36.01
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 43.13,
          "priceAvg30d": 36.26
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.09,
          "priceAvg30d": 36.6
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.05,
          "priceAvg30d": 36.44
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.13,
          "priceAvg30d": 35.2
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.15,
          "priceAvg30d": 34.7
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.19,
          "priceAvg30d": 34.3
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.1,
          "priceAvg30d": 32.72
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 43.0,
          "priceAvg30d": 31.17
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 38.19,
          "priceAvg30d": 30.54
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 38.18,
          "priceAvg30d": 29.98
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 38.05,
          "priceAvg30d": 29.77
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 38.11,
          "priceAvg30d": 30.44
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 38.0,
          "priceAvg30d": 29.86
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 36.22,
          "priceAvg30d": 29.61
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 34.6,
          "priceAvg30d": 28.63
        }
      ],
      "avg": 34.14,
      "max": 43.19,
      "maxBlock": 39,
      "min": 12.82,
      "minBlock": 25,
      "spread3h": 20.52,
      "spreadLowAvg": 21.75,
      "spreadHighAvg": 42.27,
      "avg30d": 28.25,
      "spread30dAvg": 17.0,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 14.27,
          "priceAvg30d": 15.7
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.32,
          "priceAvg30d": 15.79
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.32,
          "priceAvg30d": 15.21
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.32,
          "priceAvg30d": 14.4
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 34.11,
          "priceAvg30d": 15.29
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 34.59,
          "priceAvg30d": 17.18
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 34.1,
          "priceAvg30d": 18.52
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.64,
          "priceAvg30d": 19.69
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.59,
          "priceAvg30d": 19.68
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.59,
          "priceAvg30d": 21.46
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 35.71,
          "priceAvg30d": 21.85
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.05,
          "priceAvg30d": 21.15
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.07,
          "priceAvg30d": 19.98
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.13,
          "priceAvg30d": 20.08
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.16,
          "priceAvg30d": 19.97
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 35.02,
          "priceAvg30d": 18.71
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.94,
          "priceAvg30d": 19.59
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.92,
          "priceAvg30d": 20.94
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.8,
          "priceAvg30d": 20.86
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.5,
          "priceAvg30d": 20.73
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.3,
          "priceAvg30d": 19.41
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.18,
          "priceAvg30d": 18.7
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.9,
          "priceAvg30d": 19.25
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.98,
          "priceAvg30d": 18.89
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.0,
          "priceAvg30d": 14.92
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.24,
          "priceAvg30d": 15.71
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.3,
          "priceAvg30d": 20.9
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.14,
          "priceAvg30d": 24.1
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 32.13,
          "priceAvg30d": 24.66
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.0,
          "priceAvg30d": 25.87
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 35.01,
          "priceAvg30d": 26.74
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.67,
          "priceAvg30d": 30.04
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 42.75,
          "priceAvg30d": 30.55
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.75,
          "priceAvg30d": 31.98
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 42.75,
          "priceAvg30d": 30.59
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.05,
          "priceAvg30d": 30.94
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.13,
          "priceAvg30d": 28.69
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.15,
          "priceAvg30d": 28.76
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 42.75,
          "priceAvg30d": 29.05
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.99,
          "priceAvg30d": 26.69
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.08,
          "priceAvg30d": 26.31
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.6,
          "priceAvg30d": 25.0
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.0,
          "priceAvg30d": 24.38
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.18,
          "priceAvg30d": 23.49
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.72,
          "priceAvg30d": 23.75
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.66,
          "priceAvg30d": 21.68
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 22.66,
          "priceAvg30d": 21.15
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.34,
          "priceAvg30d": 15.95
        }
      ],
      "avg": 29.97,
      "max": 43.15,
      "maxBlock": 38,
      "min": 10.0,
      "minBlock": 25,
      "spread3h": 20.33,
      "spreadLowAvg": 20.96,
      "spreadHighAvg": 41.29,
      "avg30d": 21.98,
      "spread30dAvg": 16.39,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 14.27,
          "priceAvg30d": 15.46
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.32,
          "priceAvg30d": 15.79
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.32,
          "priceAvg30d": 15.21
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.32,
          "priceAvg30d": 14.4
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.85,
          "priceAvg30d": 14.87
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.66,
          "priceAvg30d": 16.92
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.19,
          "priceAvg30d": 17.99
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.0,
          "priceAvg30d": 19.27
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.0,
          "priceAvg30d": 19.22
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.3,
          "priceAvg30d": 20.24
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.0,
          "priceAvg30d": 20.15
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.0,
          "priceAvg30d": 19.57
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.1,
          "priceAvg30d": 19.64
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.13,
          "priceAvg30d": 19.59
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.16,
          "priceAvg30d": 19.41
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 35.02,
          "priceAvg30d": 18.12
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.94,
          "priceAvg30d": 19.29
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.92,
          "priceAvg30d": 20.94
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.8,
          "priceAvg30d": 20.86
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.5,
          "priceAvg30d": 20.73
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.3,
          "priceAvg30d": 19.36
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.18,
          "priceAvg30d": 18.64
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.9,
          "priceAvg30d": 19.2
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.98,
          "priceAvg30d": 18.84
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.0,
          "priceAvg30d": 14.84
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.24,
          "priceAvg30d": 15.62
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.3,
          "priceAvg30d": 20.9
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.14,
          "priceAvg30d": 24.1
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 32.13,
          "priceAvg30d": 24.06
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.0,
          "priceAvg30d": 25.11
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 35.01,
          "priceAvg30d": 26.67
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.67,
          "priceAvg30d": 30.01
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 42.75,
          "priceAvg30d": 30.55
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.75,
          "priceAvg30d": 31.98
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 42.75,
          "priceAvg30d": 30.09
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 42.75,
          "priceAvg30d": 30.06
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 42.75,
          "priceAvg30d": 28.69
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 42.75,
          "priceAvg30d": 28.32
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 42.75,
          "priceAvg30d": 28.71
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.99,
          "priceAvg30d": 26.51
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.08,
          "priceAvg30d": 26.05
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.6,
          "priceAvg30d": 24.51
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.0,
          "priceAvg30d": 23.96
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.18,
          "priceAvg30d": 23.24
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.72,
          "priceAvg30d": 22.82
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.66,
          "priceAvg30d": 21.07
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 22.66,
          "priceAvg30d": 20.65
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.34,
          "priceAvg30d": 15.83
        }
      ],
      "avg": 28.34,
      "max": 42.75,
      "maxBlock": 33,
      "min": 10.0,
      "minBlock": 25,
      "spread3h": 18.2,
      "spreadLowAvg": 20.96,
      "spreadHighAvg": 39.16,
      "avg30d": 21.63,
      "spread30dAvg": 16.06,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 14.27,
          "priceAvg30d": 14.88
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.32,
          "priceAvg30d": 15.71
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.32,
          "priceAvg30d": 14.56
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.32,
          "priceAvg30d": 13.8
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.85,
          "priceAvg30d": 14.34
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.66,
          "priceAvg30d": 15.68
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.19,
          "priceAvg30d": 16.75
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.0,
          "priceAvg30d": 18.48
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.0,
          "priceAvg30d": 19.13
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.3,
          "priceAvg30d": 20.19
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.0,
          "priceAvg30d": 20.07
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.0,
          "priceAvg30d": 19.56
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.1,
          "priceAvg30d": 19.53
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.13,
          "priceAvg30d": 19.45
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.16,
          "priceAvg30d": 15.61
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 14.53,
          "priceAvg30d": 13.82
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.42,
          "priceAvg30d": 13.93
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.66,
          "priceAvg30d": 12.74
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 11.21
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.04,
          "priceAvg30d": 10.37
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 8.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 8.41
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.04,
          "priceAvg30d": 8.27
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.04,
          "priceAvg30d": 8.34
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 7.2
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 7.28
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.21,
          "priceAvg30d": 8.55
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 4.0,
          "priceAvg30d": 9.31
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.9,
          "priceAvg30d": 11.32
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.01,
          "priceAvg30d": 12.52
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.43,
          "priceAvg30d": 15.01
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 28.0,
          "priceAvg30d": 17.97
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 29.0,
          "priceAvg30d": 22.25
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.75,
          "priceAvg30d": 25.99
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 42.75,
          "priceAvg30d": 25.5
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 42.75,
          "priceAvg30d": 25.98
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 42.75,
          "priceAvg30d": 24.84
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 42.75,
          "priceAvg30d": 24.16
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 42.75,
          "priceAvg30d": 24.23
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.99,
          "priceAvg30d": 23.31
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.08,
          "priceAvg30d": 23.18
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.6,
          "priceAvg30d": 22.46
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.0,
          "priceAvg30d": 21.96
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.18,
          "priceAvg30d": 21.27
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.72,
          "priceAvg30d": 20.46
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.66,
          "priceAvg30d": 18.71
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 22.66,
          "priceAvg30d": 18.5
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.34,
          "priceAvg30d": 14.79
        }
      ],
      "avg": 20.59,
      "max": 42.75,
      "maxBlock": 34,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 30.73,
      "spreadLowAvg": 1.88,
      "spreadHighAvg": 32.61,
      "avg30d": 16.68,
      "spread30dAvg": 15.2,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 14.27,
          "priceAvg30d": 11.78
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.32,
          "priceAvg30d": 11.34
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.32,
          "priceAvg30d": 10.78
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.32,
          "priceAvg30d": 10.54
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.85,
          "priceAvg30d": 10.63
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.66,
          "priceAvg30d": 10.87
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.19,
          "priceAvg30d": 11.14
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.0,
          "priceAvg30d": 13.68
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.0,
          "priceAvg30d": 14.41
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.3,
          "priceAvg30d": 15.39
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.0,
          "priceAvg30d": 15.82
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.0,
          "priceAvg30d": 15.47
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.1,
          "priceAvg30d": 14.53
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.13,
          "priceAvg30d": 13.0
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.16,
          "priceAvg30d": 11.03
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 14.53,
          "priceAvg30d": 11.35
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.42,
          "priceAvg30d": 11.98
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.66,
          "priceAvg30d": 10.85
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 9.29
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.04,
          "priceAvg30d": 8.44
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 6.96
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.06
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 6.19
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.07
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.1
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.34
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 7.09
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 7.57
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.9,
          "priceAvg30d": 8.89
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.01,
          "priceAvg30d": 9.9
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.43,
          "priceAvg30d": 11.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 28.0,
          "priceAvg30d": 12.21
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 29.0,
          "priceAvg30d": 14.43
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.75,
          "priceAvg30d": 18.33
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 42.75,
          "priceAvg30d": 19.27
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 42.75,
          "priceAvg30d": 19.84
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 42.75,
          "priceAvg30d": 18.81
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 42.75,
          "priceAvg30d": 18.33
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 42.75,
          "priceAvg30d": 17.33
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.99,
          "priceAvg30d": 16.54
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.08,
          "priceAvg30d": 16.7
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.6,
          "priceAvg30d": 15.0
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.0,
          "priceAvg30d": 16.25
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.18,
          "priceAvg30d": 14.97
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.72,
          "priceAvg30d": 13.49
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.66,
          "priceAvg30d": 12.43
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 22.66,
          "priceAvg30d": 12.85
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.34,
          "priceAvg30d": 11.03
        }
      ],
      "avg": 20.51,
      "max": 42.75,
      "maxBlock": 34,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 30.74,
      "spreadLowAvg": 1.87,
      "spreadHighAvg": 32.61,
      "avg30d": 12.3,
      "spread30dAvg": 13.61,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 14.27,
          "priceAvg30d": 14.88
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.32,
          "priceAvg30d": 15.27
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.32,
          "priceAvg30d": 14.09
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.32,
          "priceAvg30d": 13.58
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.85,
          "priceAvg30d": 14.04
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 14.53,
          "priceAvg30d": 15.45
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.71,
          "priceAvg30d": 16.63
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.0,
          "priceAvg30d": 18.44
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.0,
          "priceAvg30d": 18.95
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.3,
          "priceAvg30d": 19.89
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.0,
          "priceAvg30d": 19.76
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.0,
          "priceAvg30d": 19.25
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.1,
          "priceAvg30d": 19.33
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.13,
          "priceAvg30d": 19.29
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.16,
          "priceAvg30d": 15.54
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 14.53,
          "priceAvg30d": 13.82
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.42,
          "priceAvg30d": 13.24
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.66,
          "priceAvg30d": 11.25
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 9.43
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 8.1
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.14
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.84
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 6.7
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.49
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.78
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.88
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 6.63
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 7.84
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 9.46
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 11.93
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.43,
          "priceAvg30d": 15.01
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.42,
          "priceAvg30d": 17.89
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 29.0,
          "priceAvg30d": 22.25
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.75,
          "priceAvg30d": 25.99
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 42.75,
          "priceAvg30d": 25.5
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 42.75,
          "priceAvg30d": 25.98
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 42.75,
          "priceAvg30d": 24.84
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 42.75,
          "priceAvg30d": 24.16
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 42.75,
          "priceAvg30d": 24.23
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.99,
          "priceAvg30d": 23.31
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.08,
          "priceAvg30d": 23.18
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.6,
          "priceAvg30d": 22.46
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.0,
          "priceAvg30d": 21.96
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.18,
          "priceAvg30d": 21.27
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.72,
          "priceAvg30d": 20.46
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.07,
          "priceAvg30d": 18.71
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.96,
          "priceAvg30d": 18.5
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.71,
          "priceAvg30d": 14.79
        }
      ],
      "avg": 19.3,
      "max": 42.75,
      "maxBlock": 34,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 24.08,
      "spreadLowAvg": 5.77,
      "spreadHighAvg": 29.85,
      "avg30d": 16.15,
      "spread30dAvg": 16.02,
      "historyDays": 30
    }
  }
};
