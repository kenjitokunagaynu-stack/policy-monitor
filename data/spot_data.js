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
  "targetDate": "2026-11-18",
  "fetchedAt": "2026-11-18T14:08:31+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 28.37,
        "priceAvg30d": 26.14
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 29.05,
        "priceAvg30d": 25.05
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 28.15,
        "priceAvg30d": 24.35
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 28.66,
        "priceAvg30d": 24.3
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 28.66,
        "priceAvg30d": 24.5
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 29.25,
        "priceAvg30d": 25.27
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 29.53,
        "priceAvg30d": 26.35
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 30.0,
        "priceAvg30d": 27.24
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 30.14,
        "priceAvg30d": 27.65
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 30.41,
        "priceAvg30d": 27.99
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 30.84,
        "priceAvg30d": 28.28
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 31.22,
        "priceAvg30d": 28.53
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 32.0,
        "priceAvg30d": 28.88
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 33.18,
        "priceAvg30d": 28.91
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 33.15,
        "priceAvg30d": 27.78
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 32.51,
        "priceAvg30d": 25.81
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 32.0,
        "priceAvg30d": 24.89
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 31.5,
        "priceAvg30d": 24.38
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 30.36,
        "priceAvg30d": 22.71
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 28.34,
        "priceAvg30d": 20.04
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 27.45,
        "priceAvg30d": 18.71
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 27.12,
        "priceAvg30d": 17.84
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 27.18,
        "priceAvg30d": 17.41
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 26.73,
        "priceAvg30d": 17.33
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 23.88,
        "priceAvg30d": 15.58
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 23.88,
        "priceAvg30d": 16.05
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 27.83,
        "priceAvg30d": 20.15
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 28.77,
        "priceAvg30d": 22.93
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 30.35,
        "priceAvg30d": 24.82
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 32.82,
        "priceAvg30d": 27.53
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 37.0,
        "priceAvg30d": 29.76
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 38.61,
        "priceAvg30d": 32.66
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 38.3,
        "priceAvg30d": 35.92
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 38.31,
        "priceAvg30d": 37.01
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 38.3,
        "priceAvg30d": 36.56
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 38.6,
        "priceAvg30d": 36.09
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 38.03,
        "priceAvg30d": 34.97
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 38.3,
        "priceAvg30d": 34.65
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 37.95,
        "priceAvg30d": 33.87
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 35.0,
        "priceAvg30d": 32.42
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 33.57,
        "priceAvg30d": 31.64
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 35.8,
        "priceAvg30d": 30.99
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 35.27,
        "priceAvg30d": 30.51
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 32.57,
        "priceAvg30d": 29.63
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 33.06,
        "priceAvg30d": 29.82
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 31.62,
        "priceAvg30d": 28.76
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 30.81,
        "priceAvg30d": 28.29
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 29.05,
        "priceAvg30d": 26.01
      }
    ],
    "avg": 31.74,
    "max": 38.61,
    "maxBlock": 32,
    "min": 23.88,
    "minBlock": 25,
    "spread3h": 8.93,
    "spreadLowAvg": 26.92,
    "spreadHighAvg": 35.85,
    "avg30d": 27.02,
    "spread30dAvg": 19.34,
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
          "price": 28.91,
          "priceAvg30d": 24.2
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.12,
          "priceAvg30d": 22.38
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.05,
          "priceAvg30d": 22.31
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.53,
          "priceAvg30d": 23.04
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.15,
          "priceAvg30d": 23.51
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.27,
          "priceAvg30d": 24.22
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.12,
          "priceAvg30d": 24.91
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.27,
          "priceAvg30d": 26.01
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.14,
          "priceAvg30d": 26.68
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.28,
          "priceAvg30d": 26.92
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.84,
          "priceAvg30d": 28.61
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.22,
          "priceAvg30d": 29.04
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.3,
          "priceAvg30d": 27.66
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.18,
          "priceAvg30d": 26.57
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 33.15,
          "priceAvg30d": 24.37
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.22,
          "priceAvg30d": 22.23
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.54,
          "priceAvg30d": 20.98
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.27,
          "priceAvg30d": 18.61
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 29.24,
          "priceAvg30d": 18.0
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 27.99,
          "priceAvg30d": 15.46
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 27.06,
          "priceAvg30d": 14.37
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 26.57,
          "priceAvg30d": 12.97
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.95,
          "priceAvg30d": 13.43
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 28.0,
          "priceAvg30d": 13.59
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 27.88,
          "priceAvg30d": 11.95
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 28.06,
          "priceAvg30d": 11.92
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.01,
          "priceAvg30d": 15.33
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.01,
          "priceAvg30d": 19.88
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.23,
          "priceAvg30d": 22.42
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 31.0,
          "priceAvg30d": 26.29
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 32.02,
          "priceAvg30d": 28.77
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.61,
          "priceAvg30d": 31.73
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.3,
          "priceAvg30d": 35.89
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.31,
          "priceAvg30d": 35.81
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.3,
          "priceAvg30d": 34.52
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.6,
          "priceAvg30d": 33.25
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 34.73,
          "priceAvg30d": 33.12
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.3,
          "priceAvg30d": 33.38
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.0,
          "priceAvg30d": 33.74
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.26,
          "priceAvg30d": 32.63
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.25,
          "priceAvg30d": 32.54
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.33,
          "priceAvg30d": 30.73
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.3,
          "priceAvg30d": 29.8
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.05,
          "priceAvg30d": 28.59
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 30.0,
          "priceAvg30d": 28.82
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.3,
          "priceAvg30d": 27.36
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.0,
          "priceAvg30d": 27.03
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.29,
          "priceAvg30d": 25.17
        }
      ],
      "avg": 31.01,
      "max": 38.61,
      "maxBlock": 32,
      "min": 26.57,
      "minBlock": 22,
      "spread3h": 6.67,
      "spreadLowAvg": 28.02,
      "spreadHighAvg": 34.69,
      "avg30d": 25.02,
      "spread30dAvg": 20.42,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.91,
          "priceAvg30d": 26.67
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.12,
          "priceAvg30d": 25.63
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.05,
          "priceAvg30d": 24.84
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.53,
          "priceAvg30d": 24.82
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.15,
          "priceAvg30d": 25.29
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.27,
          "priceAvg30d": 25.91
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.12,
          "priceAvg30d": 26.63
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.27,
          "priceAvg30d": 27.14
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.14,
          "priceAvg30d": 27.59
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.28,
          "priceAvg30d": 27.71
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.84,
          "priceAvg30d": 28.17
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.22,
          "priceAvg30d": 28.53
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.3,
          "priceAvg30d": 29.11
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.18,
          "priceAvg30d": 28.8
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 33.15,
          "priceAvg30d": 26.54
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.22,
          "priceAvg30d": 23.81
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.54,
          "priceAvg30d": 23.4
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.27,
          "priceAvg30d": 22.44
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 29.24,
          "priceAvg30d": 21.38
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 27.49,
          "priceAvg30d": 20.03
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 27.06,
          "priceAvg30d": 18.63
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 26.57,
          "priceAvg30d": 17.78
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.88,
          "priceAvg30d": 17.31
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.88,
          "priceAvg30d": 17.33
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.47,
          "priceAvg30d": 16.08
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.45,
          "priceAvg30d": 16.48
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.49,
          "priceAvg30d": 20.39
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.61,
          "priceAvg30d": 22.87
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 29.23,
          "priceAvg30d": 25.64
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 31.0,
          "priceAvg30d": 28.69
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 32.02,
          "priceAvg30d": 30.94
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.61,
          "priceAvg30d": 34.1
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.3,
          "priceAvg30d": 37.08
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.31,
          "priceAvg30d": 38.3
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.3,
          "priceAvg30d": 38.05
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.6,
          "priceAvg30d": 37.56
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 34.73,
          "priceAvg30d": 36.41
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.3,
          "priceAvg30d": 36.16
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.8,
          "priceAvg30d": 35.73
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.48,
          "priceAvg30d": 34.38
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 31.72,
          "priceAvg30d": 33.78
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 33.1,
          "priceAvg30d": 32.43
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.82,
          "priceAvg30d": 32.23
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.18,
          "priceAvg30d": 31.34
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.9,
          "priceAvg30d": 31.11
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.62,
          "priceAvg30d": 29.08
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.81,
          "priceAvg30d": 28.32
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.42,
          "priceAvg30d": 26.22
        }
      ],
      "avg": 31.19,
      "max": 38.61,
      "maxBlock": 32,
      "min": 22.45,
      "minBlock": 26,
      "spread3h": 8.1,
      "spreadLowAvg": 26.43,
      "spreadHighAvg": 34.53,
      "avg30d": 27.48,
      "spread30dAvg": 20.48,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.91,
          "priceAvg30d": 29.57
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.12,
          "priceAvg30d": 29.34
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.05,
          "priceAvg30d": 29.34
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.53,
          "priceAvg30d": 28.89
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.15,
          "priceAvg30d": 29.06
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.27,
          "priceAvg30d": 29.0
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.12,
          "priceAvg30d": 29.14
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.27,
          "priceAvg30d": 29.18
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.14,
          "priceAvg30d": 29.5
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.28,
          "priceAvg30d": 29.57
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.84,
          "priceAvg30d": 29.81
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.22,
          "priceAvg30d": 30.41
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.3,
          "priceAvg30d": 31.23
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.18,
          "priceAvg30d": 31.32
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 33.15,
          "priceAvg30d": 31.21
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.22,
          "priceAvg30d": 30.77
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.54,
          "priceAvg30d": 29.62
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.27,
          "priceAvg30d": 30.43
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 29.24,
          "priceAvg30d": 30.33
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 27.49,
          "priceAvg30d": 28.7
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 27.06,
          "priceAvg30d": 27.98
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 26.57,
          "priceAvg30d": 27.23
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 26.89,
          "priceAvg30d": 26.86
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.2,
          "priceAvg30d": 27.09
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 25.89,
          "priceAvg30d": 26.25
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 26.39,
          "priceAvg30d": 26.96
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.49,
          "priceAvg30d": 29.75
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.61,
          "priceAvg30d": 31.39
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 29.23,
          "priceAvg30d": 33.01
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 31.0,
          "priceAvg30d": 34.31
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 32.02,
          "priceAvg30d": 35.38
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.61,
          "priceAvg30d": 37.84
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.3,
          "priceAvg30d": 39.41
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.31,
          "priceAvg30d": 40.2
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.3,
          "priceAvg30d": 39.91
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.6,
          "priceAvg30d": 39.17
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 34.73,
          "priceAvg30d": 37.64
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.3,
          "priceAvg30d": 37.71
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.8,
          "priceAvg30d": 37.11
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.48,
          "priceAvg30d": 36.13
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 31.72,
          "priceAvg30d": 35.11
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 33.1,
          "priceAvg30d": 33.78
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.82,
          "priceAvg30d": 33.37
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.18,
          "priceAvg30d": 32.88
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.9,
          "priceAvg30d": 34.42
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.62,
          "priceAvg30d": 32.49
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.81,
          "priceAvg30d": 31.02
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.42,
          "priceAvg30d": 29.7
        }
      ],
      "avg": 31.39,
      "max": 38.61,
      "maxBlock": 32,
      "min": 25.89,
      "minBlock": 25,
      "spread3h": 7.5,
      "spreadLowAvg": 27.03,
      "spreadHighAvg": 34.53,
      "avg30d": 31.89,
      "spread30dAvg": 13.44,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.91,
          "priceAvg30d": 29.07
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.12,
          "priceAvg30d": 28.87
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.05,
          "priceAvg30d": 28.36
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.53,
          "priceAvg30d": 28.24
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.15,
          "priceAvg30d": 28.69
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.27,
          "priceAvg30d": 29.06
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.41,
          "priceAvg30d": 29.39
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.0,
          "priceAvg30d": 29.7
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.0,
          "priceAvg30d": 29.87
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.5,
          "priceAvg30d": 29.99
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.22,
          "priceAvg30d": 30.31
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.22,
          "priceAvg30d": 30.68
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.3,
          "priceAvg30d": 30.91
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.18,
          "priceAvg30d": 30.98
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 33.15,
          "priceAvg30d": 29.99
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.97,
          "priceAvg30d": 28.75
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 35.38,
          "priceAvg30d": 28.26
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.32,
          "priceAvg30d": 28.84
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 32.39,
          "priceAvg30d": 27.99
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.81,
          "priceAvg30d": 26.32
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 28.45,
          "priceAvg30d": 24.98
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 28.45,
          "priceAvg30d": 24.65
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 28.16,
          "priceAvg30d": 24.36
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.94,
          "priceAvg30d": 24.22
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 25.89,
          "priceAvg30d": 21.59
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 26.83,
          "priceAvg30d": 22.43
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.91,
          "priceAvg30d": 26.04
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 31.5,
          "priceAvg30d": 28.9
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 37.99,
          "priceAvg30d": 30.71
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 38.31,
          "priceAvg30d": 32.0
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 38.28,
          "priceAvg30d": 33.39
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.61,
          "priceAvg30d": 36.7
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.3,
          "priceAvg30d": 37.56
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.31,
          "priceAvg30d": 37.46
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.3,
          "priceAvg30d": 38.07
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.6,
          "priceAvg30d": 37.63
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.03,
          "priceAvg30d": 36.78
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.3,
          "priceAvg30d": 36.51
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.95,
          "priceAvg30d": 36.25
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.68,
          "priceAvg30d": 34.98
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 35.8,
          "priceAvg30d": 33.48
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 36.09,
          "priceAvg30d": 32.89
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 35.5,
          "priceAvg30d": 32.32
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.03,
          "priceAvg30d": 31.79
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 35.0,
          "priceAvg30d": 32.27
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.62,
          "priceAvg30d": 31.67
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.91,
          "priceAvg30d": 31.25
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.42,
          "priceAvg30d": 30.37
        }
      ],
      "avg": 32.9,
      "max": 38.61,
      "maxBlock": 32,
      "min": 25.89,
      "minBlock": 25,
      "spread3h": 9.62,
      "spreadLowAvg": 28.63,
      "spreadHighAvg": 38.25,
      "avg30d": 30.53,
      "spread30dAvg": 15.58,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.42,
          "priceAvg30d": 16.05
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.45,
          "priceAvg30d": 16.08
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.11,
          "priceAvg30d": 15.79
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.11,
          "priceAvg30d": 15.34
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.42,
          "priceAvg30d": 16.74
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.0,
          "priceAvg30d": 19.16
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 26.67,
          "priceAvg30d": 20.85
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.0,
          "priceAvg30d": 21.88
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.0,
          "priceAvg30d": 21.87
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.5,
          "priceAvg30d": 23.49
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.22,
          "priceAvg30d": 24.32
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.22,
          "priceAvg30d": 23.35
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.3,
          "priceAvg30d": 22.45
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.18,
          "priceAvg30d": 22.79
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 33.15,
          "priceAvg30d": 23.1
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.97,
          "priceAvg30d": 22.24
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 35.38,
          "priceAvg30d": 22.59
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.32,
          "priceAvg30d": 23.78
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 32.39,
          "priceAvg30d": 23.93
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.81,
          "priceAvg30d": 23.67
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 28.45,
          "priceAvg30d": 22.09
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 28.45,
          "priceAvg30d": 21.29
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 28.16,
          "priceAvg30d": 21.91
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.94,
          "priceAvg30d": 21.48
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 24.79,
          "priceAvg30d": 17.15
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 25.0,
          "priceAvg30d": 17.78
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.91,
          "priceAvg30d": 23.62
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 31.5,
          "priceAvg30d": 25.97
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 37.99,
          "priceAvg30d": 27.39
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 38.31,
          "priceAvg30d": 29.16
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 38.28,
          "priceAvg30d": 29.76
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.61,
          "priceAvg30d": 32.76
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.3,
          "priceAvg30d": 32.97
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.31,
          "priceAvg30d": 34.33
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.3,
          "priceAvg30d": 34.1
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.6,
          "priceAvg30d": 34.21
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.03,
          "priceAvg30d": 32.36
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.3,
          "priceAvg30d": 31.75
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.95,
          "priceAvg30d": 31.43
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.68,
          "priceAvg30d": 28.69
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 35.8,
          "priceAvg30d": 28.44
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 36.09,
          "priceAvg30d": 26.61
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 35.5,
          "priceAvg30d": 26.08
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.03,
          "priceAvg30d": 24.39
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 35.0,
          "priceAvg30d": 25.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.62,
          "priceAvg30d": 22.73
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.91,
          "priceAvg30d": 21.92
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.0,
          "priceAvg30d": 16.3
        }
      ],
      "avg": 31.99,
      "max": 38.61,
      "maxBlock": 32,
      "min": 23.11,
      "minBlock": 3,
      "spread3h": 14.2,
      "spreadLowAvg": 24.05,
      "spreadHighAvg": 38.25,
      "avg30d": 24.19,
      "spread30dAvg": 17.05,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.42,
          "priceAvg30d": 16.05
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.45,
          "priceAvg30d": 16.08
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.11,
          "priceAvg30d": 15.79
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.11,
          "priceAvg30d": 15.34
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.42,
          "priceAvg30d": 16.06
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.0,
          "priceAvg30d": 18.6
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 26.67,
          "priceAvg30d": 19.84
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.0,
          "priceAvg30d": 21.11
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.0,
          "priceAvg30d": 21.08
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.5,
          "priceAvg30d": 22.1
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.22,
          "priceAvg30d": 22.04
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.22,
          "priceAvg30d": 21.06
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.83,
          "priceAvg30d": 21.15
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.18,
          "priceAvg30d": 21.99
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 33.15,
          "priceAvg30d": 22.53
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.97,
          "priceAvg30d": 21.75
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 35.38,
          "priceAvg30d": 22.39
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.32,
          "priceAvg30d": 23.78
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 32.39,
          "priceAvg30d": 23.93
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.81,
          "priceAvg30d": 23.67
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 28.45,
          "priceAvg30d": 22.09
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 28.45,
          "priceAvg30d": 21.29
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 28.16,
          "priceAvg30d": 21.91
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.94,
          "priceAvg30d": 21.48
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 24.79,
          "priceAvg30d": 17.07
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 25.0,
          "priceAvg30d": 17.7
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.91,
          "priceAvg30d": 23.62
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 31.5,
          "priceAvg30d": 25.97
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 37.99,
          "priceAvg30d": 27.11
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 38.31,
          "priceAvg30d": 28.39
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 38.28,
          "priceAvg30d": 29.7
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.61,
          "priceAvg30d": 32.76
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.3,
          "priceAvg30d": 32.97
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.31,
          "priceAvg30d": 34.33
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.3,
          "priceAvg30d": 33.6
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.6,
          "priceAvg30d": 33.66
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.03,
          "priceAvg30d": 32.34
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.3,
          "priceAvg30d": 31.74
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.95,
          "priceAvg30d": 31.41
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.68,
          "priceAvg30d": 28.69
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 35.8,
          "priceAvg30d": 28.36
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 36.09,
          "priceAvg30d": 26.27
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 35.5,
          "priceAvg30d": 25.81
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.03,
          "priceAvg30d": 24.39
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 35.0,
          "priceAvg30d": 24.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.62,
          "priceAvg30d": 22.11
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.91,
          "priceAvg30d": 21.59
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.0,
          "priceAvg30d": 16.3
        }
      ],
      "avg": 31.98,
      "max": 38.61,
      "maxBlock": 32,
      "min": 23.11,
      "minBlock": 3,
      "spread3h": 14.2,
      "spreadLowAvg": 24.05,
      "spreadHighAvg": 38.25,
      "avg30d": 23.81,
      "spread30dAvg": 16.61,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.42,
          "priceAvg30d": 15.47
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.45,
          "priceAvg30d": 16.0
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.11,
          "priceAvg30d": 15.22
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.11,
          "priceAvg30d": 14.74
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.42,
          "priceAvg30d": 15.64
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.0,
          "priceAvg30d": 17.44
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 26.67,
          "priceAvg30d": 18.83
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.0,
          "priceAvg30d": 20.31
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.0,
          "priceAvg30d": 21.0
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.5,
          "priceAvg30d": 22.05
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.22,
          "priceAvg30d": 21.96
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.22,
          "priceAvg30d": 21.05
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.83,
          "priceAvg30d": 21.04
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.18,
          "priceAvg30d": 21.86
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 33.15,
          "priceAvg30d": 19.31
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.97,
          "priceAvg30d": 17.22
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 35.38,
          "priceAvg30d": 16.48
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.32,
          "priceAvg30d": 14.85
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 32.39,
          "priceAvg30d": 12.82
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.81,
          "priceAvg30d": 11.79
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 16.8,
          "priceAvg30d": 10.56
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 28.45,
          "priceAvg30d": 10.09
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 28.16,
          "priceAvg30d": 10.08
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.94,
          "priceAvg30d": 10.2
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.0,
          "priceAvg30d": 8.61
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.19,
          "priceAvg30d": 8.98
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 15.19,
          "priceAvg30d": 10.8
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.0,
          "priceAvg30d": 11.46
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 26.0,
          "priceAvg30d": 13.24
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.01,
          "priceAvg30d": 14.5
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 37.0,
          "priceAvg30d": 16.71
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.61,
          "priceAvg30d": 20.08
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.3,
          "priceAvg30d": 24.5
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.31,
          "priceAvg30d": 28.61
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.3,
          "priceAvg30d": 29.0
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.6,
          "priceAvg30d": 29.48
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.03,
          "priceAvg30d": 28.35
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.3,
          "priceAvg30d": 27.44
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.95,
          "priceAvg30d": 26.85
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.68,
          "priceAvg30d": 25.49
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 35.8,
          "priceAvg30d": 25.5
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 36.09,
          "priceAvg30d": 24.1
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 35.5,
          "priceAvg30d": 23.81
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.03,
          "priceAvg30d": 22.42
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 35.0,
          "priceAvg30d": 21.6
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.62,
          "priceAvg30d": 19.67
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.91,
          "priceAvg30d": 19.44
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.0,
          "priceAvg30d": 15.27
        }
      ],
      "avg": 30.44,
      "max": 38.61,
      "maxBlock": 32,
      "min": 15.0,
      "minBlock": 25,
      "spread3h": 12.16,
      "spreadLowAvg": 22.82,
      "spreadHighAvg": 34.99,
      "avg30d": 18.58,
      "spread30dAvg": 16.04,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.42,
          "priceAvg30d": 12.84
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.45,
          "priceAvg30d": 12.3
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.11,
          "priceAvg30d": 11.92
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.11,
          "priceAvg30d": 11.94
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.42,
          "priceAvg30d": 12.47
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.0,
          "priceAvg30d": 13.55
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 26.67,
          "priceAvg30d": 14.46
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.0,
          "priceAvg30d": 16.82
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.0,
          "priceAvg30d": 17.56
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.5,
          "priceAvg30d": 18.51
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.22,
          "priceAvg30d": 18.91
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.22,
          "priceAvg30d": 18.16
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.83,
          "priceAvg30d": 17.13
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.18,
          "priceAvg30d": 16.95
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 33.15,
          "priceAvg30d": 15.47
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.97,
          "priceAvg30d": 15.18
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 35.38,
          "priceAvg30d": 14.93
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.32,
          "priceAvg30d": 13.3
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 32.39,
          "priceAvg30d": 11.21
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.81,
          "priceAvg30d": 10.15
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 16.8,
          "priceAvg30d": 8.89
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 28.45,
          "priceAvg30d": 7.72
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 28.16,
          "priceAvg30d": 7.99
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.94,
          "priceAvg30d": 7.6
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.0,
          "priceAvg30d": 6.43
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.19,
          "priceAvg30d": 7.03
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 15.19,
          "priceAvg30d": 9.1
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.0,
          "priceAvg30d": 9.91
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 26.0,
          "priceAvg30d": 11.24
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.01,
          "priceAvg30d": 12.34
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 37.0,
          "priceAvg30d": 13.49
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.61,
          "priceAvg30d": 15.16
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.3,
          "priceAvg30d": 18.11
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.31,
          "priceAvg30d": 22.83
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.3,
          "priceAvg30d": 23.89
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.6,
          "priceAvg30d": 24.25
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.03,
          "priceAvg30d": 23.46
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.3,
          "priceAvg30d": 22.7
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.95,
          "priceAvg30d": 21.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.68,
          "priceAvg30d": 20.0
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 35.8,
          "priceAvg30d": 20.31
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 36.09,
          "priceAvg30d": 17.95
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 35.5,
          "priceAvg30d": 19.42
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.03,
          "priceAvg30d": 17.34
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 35.0,
          "priceAvg30d": 15.97
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.62,
          "priceAvg30d": 14.62
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.91,
          "priceAvg30d": 15.08
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.0,
          "priceAvg30d": 12.62
        }
      ],
      "avg": 30.44,
      "max": 38.61,
      "maxBlock": 32,
      "min": 15.0,
      "minBlock": 25,
      "spread3h": 12.16,
      "spreadLowAvg": 22.82,
      "spreadHighAvg": 34.99,
      "avg30d": 15.01,
      "spread30dAvg": 15.71,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.42,
          "priceAvg30d": 14.68
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.45,
          "priceAvg30d": 14.75
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.11,
          "priceAvg30d": 13.86
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.11,
          "priceAvg30d": 13.47
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.42,
          "priceAvg30d": 14.32
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.0,
          "priceAvg30d": 16.15
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 26.67,
          "priceAvg30d": 17.89
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.0,
          "priceAvg30d": 19.66
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.0,
          "priceAvg30d": 20.56
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.5,
          "priceAvg30d": 21.53
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.22,
          "priceAvg30d": 21.56
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.22,
          "priceAvg30d": 20.71
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.83,
          "priceAvg30d": 20.8
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.18,
          "priceAvg30d": 21.28
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 33.15,
          "priceAvg30d": 18.68
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.97,
          "priceAvg30d": 16.86
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 35.38,
          "priceAvg30d": 15.48
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.32,
          "priceAvg30d": 13.2
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 32.39,
          "priceAvg30d": 10.4
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.81,
          "priceAvg30d": 9.02
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 16.8,
          "priceAvg30d": 8.36
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 23.32,
          "priceAvg30d": 7.98
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 28.16,
          "priceAvg30d": 7.74
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 26.74,
          "priceAvg30d": 7.54
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.0,
          "priceAvg30d": 6.61
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.19,
          "priceAvg30d": 6.72
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 15.19,
          "priceAvg30d": 8.39
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.0,
          "priceAvg30d": 9.71
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 26.0,
          "priceAvg30d": 11.07
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.01,
          "priceAvg30d": 13.52
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 37.0,
          "priceAvg30d": 16.47
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.61,
          "priceAvg30d": 19.44
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.3,
          "priceAvg30d": 24.5
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.31,
          "priceAvg30d": 28.61
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.3,
          "priceAvg30d": 28.84
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.6,
          "priceAvg30d": 29.48
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.03,
          "priceAvg30d": 28.35
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.3,
          "priceAvg30d": 27.44
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.95,
          "priceAvg30d": 26.85
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.68,
          "priceAvg30d": 25.49
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 35.8,
          "priceAvg30d": 25.5
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 36.09,
          "priceAvg30d": 24.1
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 35.5,
          "priceAvg30d": 23.72
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.03,
          "priceAvg30d": 22.09
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 35.0,
          "priceAvg30d": 21.29
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.62,
          "priceAvg30d": 19.3
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.91,
          "priceAvg30d": 18.42
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.0,
          "priceAvg30d": 14.6
        }
      ],
      "avg": 30.3,
      "max": 38.61,
      "maxBlock": 32,
      "min": 15.0,
      "minBlock": 25,
      "spread3h": 13.22,
      "spreadLowAvg": 21.77,
      "spreadHighAvg": 34.99,
      "avg30d": 17.65,
      "spread30dAvg": 17.49,
      "historyDays": 30
    }
  }
};
