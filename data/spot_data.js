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
  "targetDate": "2026-11-15",
  "fetchedAt": "2026-11-15T12:49:56+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 24.79,
        "priceAvg30d": 25.95
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 22.14,
        "priceAvg30d": 24.94
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 21.26,
        "priceAvg30d": 24.18
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 22.59,
        "priceAvg30d": 24.09
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 22.91,
        "priceAvg30d": 24.31
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 25.42,
        "priceAvg30d": 25.09
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 26.84,
        "priceAvg30d": 26.1
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 25.01,
        "priceAvg30d": 26.95
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 26.2,
        "priceAvg30d": 27.35
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 26.2,
        "priceAvg30d": 27.69
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 26.2,
        "priceAvg30d": 27.98
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 25.89,
        "priceAvg30d": 28.23
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 24.34,
        "priceAvg30d": 28.51
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 23.44,
        "priceAvg30d": 28.29
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 25.36,
        "priceAvg30d": 26.39
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 25.89,
        "priceAvg30d": 24.0
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 26.66,
        "priceAvg30d": 22.95
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 27.12,
        "priceAvg30d": 22.15
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 27.47,
        "priceAvg30d": 20.22
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 27.59,
        "priceAvg30d": 17.93
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 27.6,
        "priceAvg30d": 16.69
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 27.59,
        "priceAvg30d": 15.79
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 27.91,
        "priceAvg30d": 15.37
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 28.02,
        "priceAvg30d": 15.31
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 28.08,
        "priceAvg30d": 13.59
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 27.71,
        "priceAvg30d": 14.09
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 27.5,
        "priceAvg30d": 17.86
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 27.91,
        "priceAvg30d": 20.58
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 27.71,
        "priceAvg30d": 22.45
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 27.71,
        "priceAvg30d": 25.63
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 28.24,
        "priceAvg30d": 27.89
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 29.77,
        "priceAvg30d": 31.2
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 31.36,
        "priceAvg30d": 34.67
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 34.75,
        "priceAvg30d": 35.88
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 33.62,
        "priceAvg30d": 35.46
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 34.94,
        "priceAvg30d": 35.04
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 33.59,
        "priceAvg30d": 33.75
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 33.3,
        "priceAvg30d": 33.31
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 32.99,
        "priceAvg30d": 32.53
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 31.88,
        "priceAvg30d": 31.17
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 32.97,
        "priceAvg30d": 30.57
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 31.28,
        "priceAvg30d": 29.99
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 30.38,
        "priceAvg30d": 29.54
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 28.43,
        "priceAvg30d": 28.84
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 28.24,
        "priceAvg30d": 29.09
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 27.69,
        "priceAvg30d": 28.17
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 27.37,
        "priceAvg30d": 27.78
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 23.44,
        "priceAvg30d": 25.69
      }
    ],
    "avg": 27.82,
    "max": 34.94,
    "maxBlock": 36,
    "min": 21.26,
    "minBlock": 3,
    "spread3h": 9.39,
    "spreadLowAvg": 23.88,
    "spreadHighAvg": 33.27,
    "avg30d": 25.86,
    "spread30dAvg": 19.9,
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
          "price": 28.27,
          "priceAvg30d": 23.43
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.85,
          "priceAvg30d": 21.41
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.55,
          "priceAvg30d": 21.37
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.76,
          "priceAvg30d": 22.07
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.59,
          "priceAvg30d": 22.82
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.61,
          "priceAvg30d": 23.57
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.1,
          "priceAvg30d": 24.2
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.72,
          "priceAvg30d": 25.53
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.79,
          "priceAvg30d": 26.52
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.91,
          "priceAvg30d": 26.28
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.71,
          "priceAvg30d": 27.98
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.71,
          "priceAvg30d": 28.84
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.91,
          "priceAvg30d": 26.87
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 26.4,
          "priceAvg30d": 25.34
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 25.53,
          "priceAvg30d": 22.73
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 24.67,
          "priceAvg30d": 20.5
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.97,
          "priceAvg30d": 18.72
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.81,
          "priceAvg30d": 16.12
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.56,
          "priceAvg30d": 15.48
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.52,
          "priceAvg30d": 13.55
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.96,
          "priceAvg30d": 12.66
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.47,
          "priceAvg30d": 11.28
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.3,
          "priceAvg30d": 11.85
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.31,
          "priceAvg30d": 11.91
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 27.73,
          "priceAvg30d": 9.95
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 27.6,
          "priceAvg30d": 9.95
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 29.25,
          "priceAvg30d": 12.85
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 17.01
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 32.57,
          "priceAvg30d": 19.96
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 34.35,
          "priceAvg30d": 23.71
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 34.35,
          "priceAvg30d": 25.84
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 34.75,
          "priceAvg30d": 30.25
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.23,
          "priceAvg30d": 35.41
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.23,
          "priceAvg30d": 35.57
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 34.15
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.23,
          "priceAvg30d": 32.91
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.0,
          "priceAvg30d": 32.9
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 30.23,
          "priceAvg30d": 33.04
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.23,
          "priceAvg30d": 33.33
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.23,
          "priceAvg30d": 31.95
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.23,
          "priceAvg30d": 31.99
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.23,
          "priceAvg30d": 30.17
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.23,
          "priceAvg30d": 29.08
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.23,
          "priceAvg30d": 27.97
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.23,
          "priceAvg30d": 28.02
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.63,
          "priceAvg30d": 26.45
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.36,
          "priceAvg30d": 25.82
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.0,
          "priceAvg30d": 24.04
        }
      ],
      "avg": 28.31,
      "max": 34.75,
      "maxBlock": 32,
      "min": 22.47,
      "minBlock": 22,
      "spread3h": 5.89,
      "spreadLowAvg": 26.06,
      "spreadHighAvg": 31.96,
      "avg30d": 23.82,
      "spread30dAvg": 21.59,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.94,
          "priceAvg30d": 26.45
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 21.11,
          "priceAvg30d": 26.15
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.59,
          "priceAvg30d": 25.61
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 18.14,
          "priceAvg30d": 25.44
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 18.82,
          "priceAvg30d": 25.92
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.61,
          "priceAvg30d": 26.3
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.1,
          "priceAvg30d": 26.97
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.48,
          "priceAvg30d": 26.97
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.79,
          "priceAvg30d": 27.45
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.91,
          "priceAvg30d": 27.55
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.71,
          "priceAvg30d": 28.02
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.71,
          "priceAvg30d": 28.37
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.91,
          "priceAvg30d": 28.71
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 26.4,
          "priceAvg30d": 27.83
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 20.22,
          "priceAvg30d": 25.12
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 17.5,
          "priceAvg30d": 22.61
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.97,
          "priceAvg30d": 21.35
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.81,
          "priceAvg30d": 19.87
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.89,
          "priceAvg30d": 18.95
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.52,
          "priceAvg30d": 18.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.96,
          "priceAvg30d": 16.72
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.47,
          "priceAvg30d": 16.11
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.3,
          "priceAvg30d": 15.53
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.31,
          "priceAvg30d": 15.56
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 27.73,
          "priceAvg30d": 14.22
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 27.6,
          "priceAvg30d": 14.56
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 29.25,
          "priceAvg30d": 18.17
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 20.36
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 32.57,
          "priceAvg30d": 22.89
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 34.35,
          "priceAvg30d": 26.07
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 34.35,
          "priceAvg30d": 28.41
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 34.75,
          "priceAvg30d": 32.62
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 34.75,
          "priceAvg30d": 36.12
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.38,
          "priceAvg30d": 37.62
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 39.0,
          "priceAvg30d": 37.06
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.0,
          "priceAvg30d": 36.56
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.35,
          "priceAvg30d": 35.47
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.15,
          "priceAvg30d": 35.27
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.2,
          "priceAvg30d": 34.84
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 34.75,
          "priceAvg30d": 33.38
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 34.75,
          "priceAvg30d": 33.06
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 34.62,
          "priceAvg30d": 31.73
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.59,
          "priceAvg30d": 31.4
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 31.67,
          "priceAvg30d": 30.6
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.23,
          "priceAvg30d": 30.76
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.63,
          "priceAvg30d": 28.7
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.36,
          "priceAvg30d": 27.83
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.0,
          "priceAvg30d": 25.61
        }
      ],
      "avg": 28.5,
      "max": 39.0,
      "maxBlock": 35,
      "min": 13.59,
      "minBlock": 3,
      "spread3h": 12.46,
      "spreadLowAvg": 23.1,
      "spreadHighAvg": 35.56,
      "avg30d": 26.48,
      "spread30dAvg": 21.19,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.94,
          "priceAvg30d": 29.35
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.48,
          "priceAvg30d": 29.17
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.91,
          "priceAvg30d": 29.13
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.71,
          "priceAvg30d": 28.68
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.47,
          "priceAvg30d": 28.89
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.48,
          "priceAvg30d": 28.92
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.1,
          "priceAvg30d": 29.03
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.48,
          "priceAvg30d": 29.02
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.79,
          "priceAvg30d": 29.36
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.91,
          "priceAvg30d": 29.41
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.71,
          "priceAvg30d": 29.66
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.71,
          "priceAvg30d": 30.24
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.91,
          "priceAvg30d": 30.84
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 28.13,
          "priceAvg30d": 30.61
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.66,
          "priceAvg30d": 30.35
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.27,
          "priceAvg30d": 29.77
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 29.91,
          "priceAvg30d": 28.43
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.65,
          "priceAvg30d": 28.92
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 32.61,
          "priceAvg30d": 28.11
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 33.0,
          "priceAvg30d": 26.57
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 33.31,
          "priceAvg30d": 25.33
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 33.56,
          "priceAvg30d": 24.44
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 33.9,
          "priceAvg30d": 24.09
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 35.1,
          "priceAvg30d": 24.3
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 40.0,
          "priceAvg30d": 23.61
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 42.65,
          "priceAvg30d": 24.44
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 41.15,
          "priceAvg30d": 26.96
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 42.92,
          "priceAvg30d": 29.06
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 42.92,
          "priceAvg30d": 30.7
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 34.35,
          "priceAvg30d": 32.94
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 42.65,
          "priceAvg30d": 33.47
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 42.96,
          "priceAvg30d": 36.33
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 42.96,
          "priceAvg30d": 38.01
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.96,
          "priceAvg30d": 39.01
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 41.15,
          "priceAvg30d": 38.66
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.0,
          "priceAvg30d": 38.17
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.35,
          "priceAvg30d": 36.7
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.15,
          "priceAvg30d": 36.82
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.2,
          "priceAvg30d": 36.17
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.24,
          "priceAvg30d": 34.92
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 42.65,
          "priceAvg30d": 33.96
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 34.62,
          "priceAvg30d": 32.85
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.59,
          "priceAvg30d": 32.49
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 31.67,
          "priceAvg30d": 32.13
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 31.8,
          "priceAvg30d": 33.73
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.37,
          "priceAvg30d": 31.89
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.58,
          "priceAvg30d": 30.57
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.79,
          "priceAvg30d": 29.26
        }
      ],
      "avg": 33.7,
      "max": 42.96,
      "maxBlock": 32,
      "min": 27.47,
      "minBlock": 5,
      "spread3h": 13.47,
      "spreadLowAvg": 27.69,
      "spreadHighAvg": 41.16,
      "avg30d": 30.74,
      "spread30dAvg": 14.16,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.94,
          "priceAvg30d": 28.67
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.26,
          "priceAvg30d": 28.47
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.91,
          "priceAvg30d": 27.93
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.24,
          "priceAvg30d": 27.83
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.45,
          "priceAvg30d": 28.34
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.88,
          "priceAvg30d": 28.72
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.83,
          "priceAvg30d": 29.01
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.45,
          "priceAvg30d": 29.31
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.63,
          "priceAvg30d": 29.51
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.63,
          "priceAvg30d": 29.6
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.63,
          "priceAvg30d": 29.85
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.17,
          "priceAvg30d": 30.1
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.62,
          "priceAvg30d": 30.27
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 29.15,
          "priceAvg30d": 30.09
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.66,
          "priceAvg30d": 28.55
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.27,
          "priceAvg30d": 26.73
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 29.91,
          "priceAvg30d": 26.0
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.65,
          "priceAvg30d": 26.39
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 32.61,
          "priceAvg30d": 25.31
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 33.0,
          "priceAvg30d": 23.64
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 33.31,
          "priceAvg30d": 22.21
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 33.56,
          "priceAvg30d": 21.83
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 33.9,
          "priceAvg30d": 21.54
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 35.1,
          "priceAvg30d": 21.4
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 35.1,
          "priceAvg30d": 18.98
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 35.0,
          "priceAvg30d": 19.7
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 35.27,
          "priceAvg30d": 23.46
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 35.27,
          "priceAvg30d": 26.3
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 36.0,
          "priceAvg30d": 28.0
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 34.35,
          "priceAvg30d": 29.63
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 36.05,
          "priceAvg30d": 31.19
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 36.14,
          "priceAvg30d": 35.44
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 36.15,
          "priceAvg30d": 36.13
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.36,
          "priceAvg30d": 36.21
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.78,
          "priceAvg30d": 36.68
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.24,
          "priceAvg30d": 36.43
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.35,
          "priceAvg30d": 35.51
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.15,
          "priceAvg30d": 35.22
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.2,
          "priceAvg30d": 34.91
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.24,
          "priceAvg30d": 33.52
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.02,
          "priceAvg30d": 32.35
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 34.62,
          "priceAvg30d": 31.8
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.59,
          "priceAvg30d": 31.25
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 31.67,
          "priceAvg30d": 30.82
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 31.8,
          "priceAvg30d": 31.5
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.37,
          "priceAvg30d": 30.96
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.58,
          "priceAvg30d": 30.64
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.79,
          "priceAvg30d": 29.75
        }
      ],
      "avg": 32.5,
      "max": 38.35,
      "maxBlock": 37,
      "min": 27.91,
      "minBlock": 3,
      "spread3h": 8.16,
      "spreadLowAvg": 28.34,
      "spreadHighAvg": 36.49,
      "avg30d": 29.12,
      "spread30dAvg": 16.66,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 17.39,
          "priceAvg30d": 16.11
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.71,
          "priceAvg30d": 16.13
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 14.56,
          "priceAvg30d": 15.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.71,
          "priceAvg30d": 15.07
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.04,
          "priceAvg30d": 16.67
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.89,
          "priceAvg30d": 18.79
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.42,
          "priceAvg30d": 20.45
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.79,
          "priceAvg30d": 21.7
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.42,
          "priceAvg30d": 21.74
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.42,
          "priceAvg30d": 23.38
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.42,
          "priceAvg30d": 24.04
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.59,
          "priceAvg30d": 23.17
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.62,
          "priceAvg30d": 22.05
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.32,
          "priceAvg30d": 22.52
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.09,
          "priceAvg30d": 22.31
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.62,
          "priceAvg30d": 21.02
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.98,
          "priceAvg30d": 20.97
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 18.54,
          "priceAvg30d": 21.85
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 22.91,
          "priceAvg30d": 21.63
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 24.79,
          "priceAvg30d": 21.26
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.79,
          "priceAvg30d": 20.06
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.79,
          "priceAvg30d": 19.26
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.0,
          "priceAvg30d": 19.88
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.0,
          "priceAvg30d": 19.49
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.91,
          "priceAvg30d": 15.34
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.59,
          "priceAvg30d": 16.18
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.59,
          "priceAvg30d": 21.53
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.66,
          "priceAvg30d": 24.2
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.55,
          "priceAvg30d": 25.51
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.59,
          "priceAvg30d": 27.24
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.22,
          "priceAvg30d": 27.96
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.32,
          "priceAvg30d": 31.07
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 14.35,
          "priceAvg30d": 31.46
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.42,
          "priceAvg30d": 33.04
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.18,
          "priceAvg30d": 32.4
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.5,
          "priceAvg30d": 32.61
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 26.67,
          "priceAvg30d": 30.81
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.53,
          "priceAvg30d": 30.63
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.42,
          "priceAvg30d": 30.35
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.42,
          "priceAvg30d": 27.82
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.01,
          "priceAvg30d": 27.67
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.79,
          "priceAvg30d": 25.99
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.42,
          "priceAvg30d": 25.4
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.79,
          "priceAvg30d": 24.12
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.0,
          "priceAvg30d": 24.41
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.59,
          "priceAvg30d": 22.18
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.0,
          "priceAvg30d": 21.76
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.0,
          "priceAvg30d": 16.51
        }
      ],
      "avg": 20.61,
      "max": 29.5,
      "maxBlock": 36,
      "min": 10.55,
      "minBlock": 29,
      "spread3h": 9.1,
      "spreadLowAvg": 14.99,
      "spreadHighAvg": 24.09,
      "avg30d": 23.15,
      "spread30dAvg": 17.18,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 17.39,
          "priceAvg30d": 15.86
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.71,
          "priceAvg30d": 16.13
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 14.56,
          "priceAvg30d": 15.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.71,
          "priceAvg30d": 15.07
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.04,
          "priceAvg30d": 15.57
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.89,
          "priceAvg30d": 17.97
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.42,
          "priceAvg30d": 19.19
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.79,
          "priceAvg30d": 20.57
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.42,
          "priceAvg30d": 20.55
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.42,
          "priceAvg30d": 21.49
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.42,
          "priceAvg30d": 21.52
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.59,
          "priceAvg30d": 20.71
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.62,
          "priceAvg30d": 20.98
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.32,
          "priceAvg30d": 21.77
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.09,
          "priceAvg30d": 21.79
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.62,
          "priceAvg30d": 20.53
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.98,
          "priceAvg30d": 20.78
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 18.54,
          "priceAvg30d": 21.85
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 22.91,
          "priceAvg30d": 21.63
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 24.79,
          "priceAvg30d": 21.26
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.79,
          "priceAvg30d": 20.06
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.79,
          "priceAvg30d": 19.26
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.0,
          "priceAvg30d": 19.88
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.0,
          "priceAvg30d": 19.49
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.91,
          "priceAvg30d": 15.25
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.59,
          "priceAvg30d": 16.09
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.59,
          "priceAvg30d": 21.53
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.66,
          "priceAvg30d": 24.2
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.55,
          "priceAvg30d": 25.23
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.59,
          "priceAvg30d": 26.48
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.22,
          "priceAvg30d": 27.89
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.32,
          "priceAvg30d": 31.04
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 14.35,
          "priceAvg30d": 31.46
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.42,
          "priceAvg30d": 33.04
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.18,
          "priceAvg30d": 31.9
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.5,
          "priceAvg30d": 32.05
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 26.67,
          "priceAvg30d": 30.79
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.53,
          "priceAvg30d": 30.17
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.42,
          "priceAvg30d": 30.01
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.42,
          "priceAvg30d": 27.64
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.01,
          "priceAvg30d": 27.4
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.79,
          "priceAvg30d": 25.49
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.42,
          "priceAvg30d": 24.98
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.79,
          "priceAvg30d": 23.87
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.0,
          "priceAvg30d": 23.48
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.59,
          "priceAvg30d": 21.57
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.0,
          "priceAvg30d": 21.26
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.0,
          "priceAvg30d": 16.39
        }
      ],
      "avg": 20.61,
      "max": 29.5,
      "maxBlock": 36,
      "min": 10.55,
      "minBlock": 29,
      "spread3h": 9.1,
      "spreadLowAvg": 14.99,
      "spreadHighAvg": 24.09,
      "avg30d": 22.68,
      "spread30dAvg": 16.81,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 17.39,
          "priceAvg30d": 15.29
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.71,
          "priceAvg30d": 16.05
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 14.56,
          "priceAvg30d": 15.12
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.71,
          "priceAvg30d": 14.47
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.04,
          "priceAvg30d": 15.15
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.89,
          "priceAvg30d": 16.81
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.42,
          "priceAvg30d": 18.18
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.79,
          "priceAvg30d": 19.77
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.42,
          "priceAvg30d": 20.46
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.42,
          "priceAvg30d": 21.45
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.42,
          "priceAvg30d": 21.44
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.59,
          "priceAvg30d": 20.71
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.62,
          "priceAvg30d": 20.87
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.32,
          "priceAvg30d": 21.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.09,
          "priceAvg30d": 18.2
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.62,
          "priceAvg30d": 15.77
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.98,
          "priceAvg30d": 15.13
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 18.54,
          "priceAvg30d": 13.41
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 22.91,
          "priceAvg30d": 11.61
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 24.79,
          "priceAvg30d": 10.45
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.79,
          "priceAvg30d": 9.03
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.79,
          "priceAvg30d": 8.73
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.0,
          "priceAvg30d": 8.71
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.0,
          "priceAvg30d": 8.84
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.91,
          "priceAvg30d": 7.54
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.59,
          "priceAvg30d": 7.7
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.59,
          "priceAvg30d": 9.06
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.66,
          "priceAvg30d": 10.11
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.55,
          "priceAvg30d": 11.85
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.59,
          "priceAvg30d": 13.18
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.22,
          "priceAvg30d": 15.49
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.32,
          "priceAvg30d": 18.63
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 14.35,
          "priceAvg30d": 23.38
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.42,
          "priceAvg30d": 27.57
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.18,
          "priceAvg30d": 27.31
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.5,
          "priceAvg30d": 27.98
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 26.67,
          "priceAvg30d": 26.94
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.53,
          "priceAvg30d": 26.02
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.42,
          "priceAvg30d": 25.53
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.42,
          "priceAvg30d": 24.44
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.01,
          "priceAvg30d": 24.54
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.79,
          "priceAvg30d": 23.44
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.42,
          "priceAvg30d": 22.97
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.79,
          "priceAvg30d": 21.9
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.0,
          "priceAvg30d": 21.12
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.59,
          "priceAvg30d": 19.21
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.0,
          "priceAvg30d": 19.11
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.0,
          "priceAvg30d": 15.35
        }
      ],
      "avg": 20.61,
      "max": 29.5,
      "maxBlock": 36,
      "min": 10.55,
      "minBlock": 29,
      "spread3h": 9.1,
      "spreadLowAvg": 14.99,
      "spreadHighAvg": 24.09,
      "avg30d": 17.66,
      "spread30dAvg": 15.98,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 17.39,
          "priceAvg30d": 12.19
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.71,
          "priceAvg30d": 11.68
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 14.56,
          "priceAvg30d": 11.33
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.71,
          "priceAvg30d": 11.21
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.04,
          "priceAvg30d": 11.44
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.89,
          "priceAvg30d": 12.0
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.42,
          "priceAvg30d": 12.57
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.79,
          "priceAvg30d": 14.97
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.42,
          "priceAvg30d": 15.74
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.42,
          "priceAvg30d": 16.65
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.42,
          "priceAvg30d": 17.2
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.59,
          "priceAvg30d": 16.62
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.62,
          "priceAvg30d": 15.87
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.32,
          "priceAvg30d": 15.18
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.09,
          "priceAvg30d": 13.61
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.62,
          "priceAvg30d": 13.3
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.98,
          "priceAvg30d": 13.18
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 18.54,
          "priceAvg30d": 11.52
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 22.91,
          "priceAvg30d": 9.75
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 24.79,
          "priceAvg30d": 8.52
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.79,
          "priceAvg30d": 7.04
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.79,
          "priceAvg30d": 6.06
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.0,
          "priceAvg30d": 6.32
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.0,
          "priceAvg30d": 6.2
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.91,
          "priceAvg30d": 5.33
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.59,
          "priceAvg30d": 5.75
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.59,
          "priceAvg30d": 7.28
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.66,
          "priceAvg30d": 8.22
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.55,
          "priceAvg30d": 9.54
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.59,
          "priceAvg30d": 10.66
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.22,
          "priceAvg30d": 11.77
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.32,
          "priceAvg30d": 12.89
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 14.35,
          "priceAvg30d": 15.55
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.42,
          "priceAvg30d": 19.92
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.18,
          "priceAvg30d": 21.08
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.5,
          "priceAvg30d": 21.83
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 26.67,
          "priceAvg30d": 20.92
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.53,
          "priceAvg30d": 20.18
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.42,
          "priceAvg30d": 18.62
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.42,
          "priceAvg30d": 17.66
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.01,
          "priceAvg30d": 18.06
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.79,
          "priceAvg30d": 15.98
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.42,
          "priceAvg30d": 17.27
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.79,
          "priceAvg30d": 15.6
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.0,
          "priceAvg30d": 14.15
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.59,
          "priceAvg30d": 12.93
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.0,
          "priceAvg30d": 13.46
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.0,
          "priceAvg30d": 11.59
        }
      ],
      "avg": 20.61,
      "max": 29.5,
      "maxBlock": 36,
      "min": 10.55,
      "minBlock": 29,
      "spread3h": 9.1,
      "spreadLowAvg": 14.99,
      "spreadHighAvg": 24.09,
      "avg30d": 13.26,
      "spread30dAvg": 14.66,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.71,
          "priceAvg30d": 14.87
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.71,
          "priceAvg30d": 15.09
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 14.56,
          "priceAvg30d": 14.05
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.71,
          "priceAvg30d": 13.58
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.04,
          "priceAvg30d": 14.23
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.89,
          "priceAvg30d": 16.05
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.42,
          "priceAvg30d": 17.8
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.79,
          "priceAvg30d": 19.73
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.42,
          "priceAvg30d": 20.29
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.42,
          "priceAvg30d": 21.15
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.42,
          "priceAvg30d": 21.13
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.59,
          "priceAvg30d": 20.4
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.62,
          "priceAvg30d": 20.64
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.32,
          "priceAvg30d": 21.14
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.09,
          "priceAvg30d": 17.74
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.62,
          "priceAvg30d": 15.4
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.98,
          "priceAvg30d": 14.17
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 18.54,
          "priceAvg30d": 11.84
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 14.75,
          "priceAvg30d": 9.46
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.32,
          "priceAvg30d": 8.1
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.42,
          "priceAvg30d": 7.29
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.42,
          "priceAvg30d": 7.07
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.42,
          "priceAvg30d": 6.87
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.42,
          "priceAvg30d": 6.74
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.42,
          "priceAvg30d": 5.99
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.22,
          "priceAvg30d": 6.08
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.22,
          "priceAvg30d": 7.03
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.66,
          "priceAvg30d": 8.36
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.55,
          "priceAvg30d": 9.69
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.59,
          "priceAvg30d": 12.19
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.22,
          "priceAvg30d": 15.25
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.32,
          "priceAvg30d": 17.99
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 14.35,
          "priceAvg30d": 23.38
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.42,
          "priceAvg30d": 27.57
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.18,
          "priceAvg30d": 27.15
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.5,
          "priceAvg30d": 27.98
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 26.67,
          "priceAvg30d": 26.94
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.53,
          "priceAvg30d": 26.02
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.42,
          "priceAvg30d": 25.53
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.42,
          "priceAvg30d": 24.44
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.01,
          "priceAvg30d": 24.54
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.79,
          "priceAvg30d": 23.44
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.42,
          "priceAvg30d": 22.89
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.79,
          "priceAvg30d": 21.65
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.0,
          "priceAvg30d": 20.81
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.59,
          "priceAvg30d": 18.96
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.0,
          "priceAvg30d": 18.82
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.0,
          "priceAvg30d": 15.11
        }
      ],
      "avg": 18.31,
      "max": 29.5,
      "maxBlock": 36,
      "min": 10.55,
      "minBlock": 29,
      "spread3h": 12.89,
      "spreadLowAvg": 11.21,
      "spreadHighAvg": 24.09,
      "avg30d": 16.93,
      "spread30dAvg": 16.91,
      "historyDays": 30
    }
  }
};
