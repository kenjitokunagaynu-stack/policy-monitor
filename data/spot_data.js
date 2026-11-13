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
  "targetDate": "2026-11-13",
  "fetchedAt": "2026-11-13T13:06:43+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 29.21,
        "priceAvg30d": 25.61
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 28.88,
        "priceAvg30d": 24.59
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 28.64,
        "priceAvg30d": 23.85
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 28.5,
        "priceAvg30d": 23.76
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 28.88,
        "priceAvg30d": 23.99
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 29.45,
        "priceAvg30d": 24.75
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 29.9,
        "priceAvg30d": 25.74
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 30.0,
        "priceAvg30d": 26.58
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 31.69,
        "priceAvg30d": 26.93
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 32.14,
        "priceAvg30d": 27.27
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 32.66,
        "priceAvg30d": 27.53
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 33.25,
        "priceAvg30d": 27.78
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 34.59,
        "priceAvg30d": 28.01
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 35.88,
        "priceAvg30d": 27.74
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 34.32,
        "priceAvg30d": 25.8
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 32.0,
        "priceAvg30d": 23.44
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 29.48,
        "priceAvg30d": 22.34
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 29.17,
        "priceAvg30d": 21.64
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 25.25,
        "priceAvg30d": 19.82
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 15.0,
        "priceAvg30d": 18.01
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 12.34,
        "priceAvg30d": 16.89
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 10.43,
        "priceAvg30d": 16.06
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 9.25,
        "priceAvg30d": 15.61
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 10.0,
        "priceAvg30d": 15.43
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 9.31,
        "priceAvg30d": 13.28
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 9.9,
        "priceAvg30d": 13.8
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 11.14,
        "priceAvg30d": 17.8
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 11.42,
        "priceAvg30d": 20.55
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 19.9,
        "priceAvg30d": 22.06
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 26.5,
        "priceAvg30d": 25.3
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 29.8,
        "priceAvg30d": 27.49
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 31.78,
        "priceAvg30d": 30.91
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 37.07,
        "priceAvg30d": 34.7
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 38.39,
        "priceAvg30d": 36.11
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 37.39,
        "priceAvg30d": 35.56
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 35.31,
        "priceAvg30d": 35.18
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 35.45,
        "priceAvg30d": 33.79
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 34.5,
        "priceAvg30d": 33.11
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 34.73,
        "priceAvg30d": 32.28
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 34.66,
        "priceAvg30d": 30.74
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 33.77,
        "priceAvg30d": 30.11
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 34.67,
        "priceAvg30d": 29.44
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 34.52,
        "priceAvg30d": 29.02
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 32.52,
        "priceAvg30d": 28.45
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 33.26,
        "priceAvg30d": 28.67
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 31.82,
        "priceAvg30d": 27.79
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 31.6,
        "priceAvg30d": 27.42
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 30.1,
        "priceAvg30d": 25.38
      }
    ],
    "avg": 27.93,
    "max": 38.39,
    "maxBlock": 34,
    "min": 9.25,
    "minBlock": 23,
    "spread3h": 23.3,
    "spreadLowAvg": 11.16,
    "spreadHighAvg": 34.47,
    "avg30d": 25.59,
    "spread30dAvg": 19.73,
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
          "price": 30.4,
          "priceAvg30d": 22.33
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.7,
          "priceAvg30d": 20.26
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.69,
          "priceAvg30d": 20.22
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.48,
          "priceAvg30d": 21.0
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.45,
          "priceAvg30d": 21.75
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 29.48,
          "priceAvg30d": 22.51
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.5,
          "priceAvg30d": 23.27
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.5,
          "priceAvg30d": 24.38
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.26,
          "priceAvg30d": 25.27
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.78,
          "priceAvg30d": 25.01
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.59,
          "priceAvg30d": 26.66
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 33.25,
          "priceAvg30d": 27.65
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 34.79,
          "priceAvg30d": 25.88
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 35.13,
          "priceAvg30d": 24.33
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.01,
          "priceAvg30d": 22.03
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.83,
          "priceAvg30d": 19.92
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.08,
          "priceAvg30d": 18.96
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.66,
          "priceAvg30d": 16.26
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.15,
          "priceAvg30d": 15.36
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.88,
          "priceAvg30d": 13.35
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
          "price": 10.5,
          "priceAvg30d": 10.93
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.5,
          "priceAvg30d": 11.52
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.5,
          "priceAvg30d": 11.55
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.88,
          "priceAvg30d": 9.61
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.88,
          "priceAvg30d": 9.61
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.91,
          "priceAvg30d": 12.53
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.15,
          "priceAvg30d": 16.88
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 13.59,
          "priceAvg30d": 19.8
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.64,
          "priceAvg30d": 22.82
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.78,
          "priceAvg30d": 24.53
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.35,
          "priceAvg30d": 28.91
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.39,
          "priceAvg30d": 34.0
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.39,
          "priceAvg30d": 34.64
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.96,
          "priceAvg30d": 33.58
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.96,
          "priceAvg30d": 32.1
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.96,
          "priceAvg30d": 31.87
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.9,
          "priceAvg30d": 31.78
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.61,
          "priceAvg30d": 31.88
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.76,
          "priceAvg30d": 30.5
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 34.64,
          "priceAvg30d": 30.64
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 34.67,
          "priceAvg30d": 28.8
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 34.63,
          "priceAvg30d": 27.67
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.72,
          "priceAvg30d": 26.85
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 34.56,
          "priceAvg30d": 26.66
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.0,
          "priceAvg30d": 25.31
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.56,
          "priceAvg30d": 24.78
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.91,
          "priceAvg30d": 22.97
        }
      ],
      "avg": 25.99,
      "max": 38.39,
      "maxBlock": 33,
      "min": 9.88,
      "minBlock": 20,
      "spread3h": 20.13,
      "spreadLowAvg": 11.55,
      "spreadHighAvg": 31.68,
      "avg30d": 22.95,
      "spread30dAvg": 20.9,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.4,
          "priceAvg30d": 26.17
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.7,
          "priceAvg30d": 25.88
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.69,
          "priceAvg30d": 25.34
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.48,
          "priceAvg30d": 25.19
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.45,
          "priceAvg30d": 25.68
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 29.48,
          "priceAvg30d": 26.06
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.5,
          "priceAvg30d": 26.75
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.5,
          "priceAvg30d": 26.74
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.26,
          "priceAvg30d": 27.11
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.78,
          "priceAvg30d": 27.22
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.59,
          "priceAvg30d": 27.68
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 33.25,
          "priceAvg30d": 28.01
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 34.79,
          "priceAvg30d": 28.28
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 35.13,
          "priceAvg30d": 27.32
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 33.0,
          "priceAvg30d": 24.6
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.83,
          "priceAvg30d": 22.49
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.08,
          "priceAvg30d": 21.59
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.66,
          "priceAvg30d": 20.21
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.02,
          "priceAvg30d": 19.34
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 7.0,
          "priceAvg30d": 18.64
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.0,
          "priceAvg30d": 17.28
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.18,
          "priceAvg30d": 16.64
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.0,
          "priceAvg30d": 16.1
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.35,
          "priceAvg30d": 16.1
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.16,
          "priceAvg30d": 14.71
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.31,
          "priceAvg30d": 15.03
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.91,
          "priceAvg30d": 18.37
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.15,
          "priceAvg30d": 20.8
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 13.59,
          "priceAvg30d": 23.5
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.64,
          "priceAvg30d": 26.34
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.78,
          "priceAvg30d": 28.2
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.35,
          "priceAvg30d": 32.76
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.39,
          "priceAvg30d": 36.33
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.39,
          "priceAvg30d": 38.12
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.39,
          "priceAvg30d": 37.34
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.0,
          "priceAvg30d": 36.95
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.23,
          "priceAvg30d": 35.6
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.9,
          "priceAvg30d": 35.38
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.61,
          "priceAvg30d": 34.83
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.76,
          "priceAvg30d": 33.09
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 34.64,
          "priceAvg30d": 32.68
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 34.67,
          "priceAvg30d": 31.28
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 34.63,
          "priceAvg30d": 30.97
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.69,
          "priceAvg30d": 30.38
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 34.56,
          "priceAvg30d": 30.53
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.0,
          "priceAvg30d": 28.61
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.56,
          "priceAvg30d": 27.74
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.91,
          "priceAvg30d": 25.51
        }
      ],
      "avg": 26.28,
      "max": 38.39,
      "maxBlock": 33,
      "min": 7.0,
      "minBlock": 20,
      "spread3h": 23.6,
      "spreadLowAvg": 10.32,
      "spreadHighAvg": 33.93,
      "avg30d": 26.49,
      "spread30dAvg": 21.01,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.4,
          "priceAvg30d": 29.08
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.7,
          "priceAvg30d": 28.88
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.69,
          "priceAvg30d": 28.86
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.48,
          "priceAvg30d": 28.43
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.45,
          "priceAvg30d": 28.65
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 29.48,
          "priceAvg30d": 28.68
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.5,
          "priceAvg30d": 28.8
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.5,
          "priceAvg30d": 28.79
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.26,
          "priceAvg30d": 29.02
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.78,
          "priceAvg30d": 29.08
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.59,
          "priceAvg30d": 29.32
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 33.25,
          "priceAvg30d": 29.89
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 34.79,
          "priceAvg30d": 30.4
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 35.13,
          "priceAvg30d": 30.11
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 34.59,
          "priceAvg30d": 29.87
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 33.64,
          "priceAvg30d": 29.37
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.78,
          "priceAvg30d": 28.11
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.33,
          "priceAvg30d": 28.68
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 29.45,
          "priceAvg30d": 27.96
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.5,
          "priceAvg30d": 26.56
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.66,
          "priceAvg30d": 25.5
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.11,
          "priceAvg30d": 24.94
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.0,
          "priceAvg30d": 24.69
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.25,
          "priceAvg30d": 24.91
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 13.4,
          "priceAvg30d": 23.92
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.0,
          "priceAvg30d": 24.7
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 18.27,
          "priceAvg30d": 27.15
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 19.66,
          "priceAvg30d": 29.19
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 26.98,
          "priceAvg30d": 30.78
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.07,
          "priceAvg30d": 33.02
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.78,
          "priceAvg30d": 33.24
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.35,
          "priceAvg30d": 36.46
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.39,
          "priceAvg30d": 38.23
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.39,
          "priceAvg30d": 39.5
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.39,
          "priceAvg30d": 38.94
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.0,
          "priceAvg30d": 38.56
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.23,
          "priceAvg30d": 36.83
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.9,
          "priceAvg30d": 36.93
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.61,
          "priceAvg30d": 36.16
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.76,
          "priceAvg30d": 34.63
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 34.64,
          "priceAvg30d": 33.58
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 34.67,
          "priceAvg30d": 32.39
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 34.63,
          "priceAvg30d": 32.06
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.69,
          "priceAvg30d": 31.86
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 34.56,
          "priceAvg30d": 33.41
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.95,
          "priceAvg30d": 31.57
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.44,
          "priceAvg30d": 30.28
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.03,
          "priceAvg30d": 28.9
        }
      ],
      "avg": 29.73,
      "max": 38.39,
      "maxBlock": 33,
      "min": 8.0,
      "minBlock": 23,
      "spread3h": 18.18,
      "spreadLowAvg": 16.49,
      "spreadHighAvg": 34.66,
      "avg30d": 30.64,
      "spread30dAvg": 14.07,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.4,
          "priceAvg30d": 28.31
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.24,
          "priceAvg30d": 28.08
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 30.24,
          "priceAvg30d": 27.54
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.37,
          "priceAvg30d": 27.42
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.27,
          "priceAvg30d": 27.91
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 32.14,
          "priceAvg30d": 28.27
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.66,
          "priceAvg30d": 28.56
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 33.41,
          "priceAvg30d": 28.84
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.23,
          "priceAvg30d": 29.02
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.48,
          "priceAvg30d": 29.13
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 35.41,
          "priceAvg30d": 29.37
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.41,
          "priceAvg30d": 29.65
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 37.31,
          "priceAvg30d": 29.76
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 37.6,
          "priceAvg30d": 29.5
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.48,
          "priceAvg30d": 28.02
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 33.64,
          "priceAvg30d": 26.26
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.78,
          "priceAvg30d": 25.53
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.45,
          "priceAvg30d": 26.15
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.37,
          "priceAvg30d": 25.25
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 24.72,
          "priceAvg30d": 23.7
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.66,
          "priceAvg30d": 22.15
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 21.59,
          "priceAvg30d": 21.7
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.3,
          "priceAvg30d": 21.34
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.98,
          "priceAvg30d": 21.25
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 13.4,
          "priceAvg30d": 18.72
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.0,
          "priceAvg30d": 19.54
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 21.31,
          "priceAvg30d": 23.19
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.74,
          "priceAvg30d": 26.19
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 29.86,
          "priceAvg30d": 27.76
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 31.38,
          "priceAvg30d": 29.37
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 33.75,
          "priceAvg30d": 30.9
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.35,
          "priceAvg30d": 35.45
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.39,
          "priceAvg30d": 36.35
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.0,
          "priceAvg30d": 36.47
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.39,
          "priceAvg30d": 36.97
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.0,
          "priceAvg30d": 36.81
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.23,
          "priceAvg30d": 35.64
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.9,
          "priceAvg30d": 35.28
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.61,
          "priceAvg30d": 34.9
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.76,
          "priceAvg30d": 33.22
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 34.64,
          "priceAvg30d": 31.97
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 37.51,
          "priceAvg30d": 31.18
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 37.04,
          "priceAvg30d": 30.69
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 37.01,
          "priceAvg30d": 30.39
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 37.03,
          "priceAvg30d": 31.1
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 36.99,
          "priceAvg30d": 30.5
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 36.98,
          "priceAvg30d": 30.2
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 37.0,
          "priceAvg30d": 29.23
        }
      ],
      "avg": 31.93,
      "max": 40.0,
      "maxBlock": 34,
      "min": 13.4,
      "minBlock": 25,
      "spread3h": 15.7,
      "spreadLowAvg": 20.65,
      "spreadHighAvg": 36.35,
      "avg30d": 28.85,
      "spread30dAvg": 16.93,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 23.19,
          "priceAvg30d": 15.83
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.34,
          "priceAvg30d": 15.9
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.34,
          "priceAvg30d": 15.29
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.34,
          "priceAvg30d": 14.57
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.51,
          "priceAvg30d": 16.19
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.38,
          "priceAvg30d": 18.29
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.66,
          "priceAvg30d": 19.77
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 33.41,
          "priceAvg30d": 20.92
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.23,
          "priceAvg30d": 20.91
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.48,
          "priceAvg30d": 22.66
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 35.41,
          "priceAvg30d": 23.23
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.41,
          "priceAvg30d": 22.46
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 37.31,
          "priceAvg30d": 21.39
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 37.6,
          "priceAvg30d": 21.66
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.48,
          "priceAvg30d": 21.23
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.6,
          "priceAvg30d": 20.11
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.6,
          "priceAvg30d": 20.67
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.6,
          "priceAvg30d": 21.73
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.38,
          "priceAvg30d": 21.71
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 24.72,
          "priceAvg30d": 21.34
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.66,
          "priceAvg30d": 20.06
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 21.59,
          "priceAvg30d": 19.34
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.3,
          "priceAvg30d": 19.88
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.98,
          "priceAvg30d": 19.47
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.59,
          "priceAvg30d": 14.94
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 13.9,
          "priceAvg30d": 15.62
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 21.31,
          "priceAvg30d": 21.26
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.34,
          "priceAvg30d": 24.14
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.51,
          "priceAvg30d": 25.19
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.72,
          "priceAvg30d": 26.85
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 24.51,
          "priceAvg30d": 27.59
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 26.38,
          "priceAvg30d": 30.85
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.0,
          "priceAvg30d": 30.92
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.0,
          "priceAvg30d": 32.9
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.39,
          "priceAvg30d": 31.84
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.0,
          "priceAvg30d": 32.2
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.0,
          "priceAvg30d": 29.97
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.0,
          "priceAvg30d": 29.87
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 29.92
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.38,
          "priceAvg30d": 27.47
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 34.0,
          "priceAvg30d": 26.97
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.0,
          "priceAvg30d": 25.42
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.0,
          "priceAvg30d": 24.9
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.6,
          "priceAvg30d": 23.84
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.5,
          "priceAvg30d": 24.13
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.72,
          "priceAvg30d": 21.91
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.14,
          "priceAvg30d": 21.44
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.66,
          "priceAvg30d": 16.4
        }
      ],
      "avg": 28.09,
      "max": 40.0,
      "maxBlock": 34,
      "min": 10.59,
      "minBlock": 25,
      "spread3h": 13.14,
      "spreadLowAvg": 20.24,
      "spreadHighAvg": 33.38,
      "avg30d": 22.73,
      "spread30dAvg": 17.2,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 23.19,
          "priceAvg30d": 15.58
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.34,
          "priceAvg30d": 15.9
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.34,
          "priceAvg30d": 15.29
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.34,
          "priceAvg30d": 14.57
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.51,
          "priceAvg30d": 15.1
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.38,
          "priceAvg30d": 17.47
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.5,
          "priceAvg30d": 18.65
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.38,
          "priceAvg30d": 20.01
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.6,
          "priceAvg30d": 19.95
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.3,
          "priceAvg30d": 20.95
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.6,
          "priceAvg30d": 20.97
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 26.38,
          "priceAvg30d": 20.31
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.6,
          "priceAvg30d": 20.64
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.0,
          "priceAvg30d": 21.17
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.0,
          "priceAvg30d": 20.89
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.6,
          "priceAvg30d": 19.61
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.6,
          "priceAvg30d": 20.48
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.6,
          "priceAvg30d": 21.73
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.38,
          "priceAvg30d": 21.71
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 24.72,
          "priceAvg30d": 21.34
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.66,
          "priceAvg30d": 20.06
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 21.59,
          "priceAvg30d": 19.34
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.3,
          "priceAvg30d": 19.88
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.98,
          "priceAvg30d": 19.47
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.59,
          "priceAvg30d": 14.86
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 13.9,
          "priceAvg30d": 15.54
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 21.31,
          "priceAvg30d": 21.26
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.34,
          "priceAvg30d": 24.14
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.51,
          "priceAvg30d": 24.91
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.72,
          "priceAvg30d": 26.09
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 24.51,
          "priceAvg30d": 27.52
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 26.38,
          "priceAvg30d": 30.82
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.0,
          "priceAvg30d": 30.92
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.0,
          "priceAvg30d": 32.9
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.39,
          "priceAvg30d": 31.35
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.0,
          "priceAvg30d": 31.3
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.0,
          "priceAvg30d": 29.96
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.0,
          "priceAvg30d": 29.41
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 29.58
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.38,
          "priceAvg30d": 27.29
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 34.0,
          "priceAvg30d": 26.71
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.0,
          "priceAvg30d": 24.92
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.0,
          "priceAvg30d": 24.48
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.6,
          "priceAvg30d": 23.59
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.5,
          "priceAvg30d": 23.2
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.72,
          "priceAvg30d": 21.3
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.14,
          "priceAvg30d": 20.94
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.66,
          "priceAvg30d": 16.28
        }
      ],
      "avg": 26.78,
      "max": 40.0,
      "maxBlock": 34,
      "min": 10.59,
      "minBlock": 25,
      "spread3h": 13.14,
      "spreadLowAvg": 20.24,
      "spreadHighAvg": 33.38,
      "avg30d": 22.3,
      "spread30dAvg": 16.77,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 23.19,
          "priceAvg30d": 15.0
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.34,
          "priceAvg30d": 15.81
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.34,
          "priceAvg30d": 14.65
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.34,
          "priceAvg30d": 13.97
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.51,
          "priceAvg30d": 14.56
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.38,
          "priceAvg30d": 16.23
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.5,
          "priceAvg30d": 17.6
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.38,
          "priceAvg30d": 19.22
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.6,
          "priceAvg30d": 19.86
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.3,
          "priceAvg30d": 20.9
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.6,
          "priceAvg30d": 20.89
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 26.38,
          "priceAvg30d": 20.3
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.6,
          "priceAvg30d": 20.53
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.0,
          "priceAvg30d": 21.03
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.0,
          "priceAvg30d": 17.09
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.6,
          "priceAvg30d": 14.63
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 14.59,
          "priceAvg30d": 14.43
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 12.43,
          "priceAvg30d": 12.75
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.09,
          "priceAvg30d": 11.01
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 7.22,
          "priceAvg30d": 9.97
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 7.22,
          "priceAvg30d": 8.44
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.57,
          "priceAvg30d": 8.04
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.35,
          "priceAvg30d": 7.98
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
          "price": 2.5,
          "priceAvg30d": 6.93
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.66,
          "priceAvg30d": 7.01
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.86,
          "priceAvg30d": 8.31
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.25,
          "priceAvg30d": 9.23
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.09,
          "priceAvg30d": 11.1
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.09,
          "priceAvg30d": 12.49
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.0,
          "priceAvg30d": 14.91
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 14.53,
          "priceAvg30d": 18.26
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.97,
          "priceAvg30d": 22.53
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.0,
          "priceAvg30d": 27.2
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.39,
          "priceAvg30d": 26.75
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.0,
          "priceAvg30d": 27.23
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.0,
          "priceAvg30d": 26.11
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.0,
          "priceAvg30d": 25.25
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 25.1
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.38,
          "priceAvg30d": 24.09
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 34.0,
          "priceAvg30d": 23.84
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.0,
          "priceAvg30d": 22.87
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.0,
          "priceAvg30d": 22.48
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.6,
          "priceAvg30d": 21.62
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.5,
          "priceAvg30d": 20.84
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.72,
          "priceAvg30d": 18.94
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.14,
          "priceAvg30d": 18.79
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.66,
          "priceAvg30d": 15.24
        }
      ],
      "avg": 22.24,
      "max": 40.0,
      "maxBlock": 34,
      "min": 2.5,
      "minBlock": 25,
      "spread3h": 19.72,
      "spreadLowAvg": 8.59,
      "spreadHighAvg": 28.31,
      "avg30d": 17.09,
      "spread30dAvg": 16.2,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 23.19,
          "priceAvg30d": 11.9
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.34,
          "priceAvg30d": 11.44
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.34,
          "priceAvg30d": 10.86
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.34,
          "priceAvg30d": 10.7
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.51,
          "priceAvg30d": 10.85
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.38,
          "priceAvg30d": 11.42
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.5,
          "priceAvg30d": 11.99
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.38,
          "priceAvg30d": 14.42
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.6,
          "priceAvg30d": 15.14
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.3,
          "priceAvg30d": 16.1
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.6,
          "priceAvg30d": 16.65
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 26.38,
          "priceAvg30d": 16.21
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.6,
          "priceAvg30d": 15.54
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.0,
          "priceAvg30d": 14.58
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.0,
          "priceAvg30d": 12.51
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.6,
          "priceAvg30d": 12.15
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 14.59,
          "priceAvg30d": 12.48
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 12.43,
          "priceAvg30d": 10.85
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.09,
          "priceAvg30d": 9.14
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 7.22,
          "priceAvg30d": 8.04
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 6.61
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 5.69
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 5.89
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 5.79
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.01,
          "priceAvg30d": 4.85
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.5,
          "priceAvg30d": 5.07
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.5,
          "priceAvg30d": 6.77
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.9,
          "priceAvg30d": 7.5
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.87,
          "priceAvg30d": 8.75
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.09,
          "priceAvg30d": 9.97
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.0,
          "priceAvg30d": 11.16
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 14.53,
          "priceAvg30d": 12.52
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.97,
          "priceAvg30d": 14.71
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.0,
          "priceAvg30d": 19.55
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.39,
          "priceAvg30d": 20.52
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.0,
          "priceAvg30d": 21.08
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.0,
          "priceAvg30d": 20.08
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.0,
          "priceAvg30d": 19.42
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 18.2
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.38,
          "priceAvg30d": 17.32
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 34.0,
          "priceAvg30d": 17.36
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.0,
          "priceAvg30d": 15.41
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.0,
          "priceAvg30d": 16.77
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.6,
          "priceAvg30d": 15.32
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.5,
          "priceAvg30d": 13.87
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.72,
          "priceAvg30d": 12.66
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.14,
          "priceAvg30d": 13.14
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.66,
          "priceAvg30d": 11.48
        }
      ],
      "avg": 21.2,
      "max": 40.0,
      "maxBlock": 34,
      "min": 0.01,
      "minBlock": 22,
      "spread3h": 25.01,
      "spreadLowAvg": 3.31,
      "spreadHighAvg": 28.31,
      "avg30d": 12.72,
      "spread30dAvg": 14.64,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 20.0,
          "priceAvg30d": 14.69
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.71,
          "priceAvg30d": 15.15
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.71,
          "priceAvg30d": 14.03
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.71,
          "priceAvg30d": 13.53
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.71,
          "priceAvg30d": 14.18
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.96,
          "priceAvg30d": 15.73
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.5,
          "priceAvg30d": 17.23
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.38,
          "priceAvg30d": 19.18
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.6,
          "priceAvg30d": 19.68
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.3,
          "priceAvg30d": 20.6
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.6,
          "priceAvg30d": 20.58
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 26.38,
          "priceAvg30d": 19.99
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.6,
          "priceAvg30d": 20.34
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.0,
          "priceAvg30d": 20.87
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.0,
          "priceAvg30d": 17.02
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.6,
          "priceAvg30d": 14.63
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 14.59,
          "priceAvg30d": 13.67
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 12.43,
          "priceAvg30d": 11.25
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.09,
          "priceAvg30d": 9.15
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 7.22,
          "priceAvg30d": 7.69
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 7.22,
          "priceAvg30d": 6.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.57,
          "priceAvg30d": 6.31
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.35,
          "priceAvg30d": 6.07
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.87,
          "priceAvg30d": 5.88
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.5,
          "priceAvg30d": 5.38
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.66,
          "priceAvg30d": 5.46
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.86,
          "priceAvg30d": 6.17
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.25,
          "priceAvg30d": 7.57
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.09,
          "priceAvg30d": 9.15
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.09,
          "priceAvg30d": 11.59
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.0,
          "priceAvg30d": 14.88
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 14.53,
          "priceAvg30d": 17.63
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.97,
          "priceAvg30d": 22.53
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.0,
          "priceAvg30d": 27.2
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.39,
          "priceAvg30d": 26.75
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.0,
          "priceAvg30d": 27.23
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.0,
          "priceAvg30d": 26.11
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.0,
          "priceAvg30d": 25.25
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 25.1
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.38,
          "priceAvg30d": 24.09
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 34.0,
          "priceAvg30d": 23.84
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.0,
          "priceAvg30d": 22.87
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.0,
          "priceAvg30d": 22.48
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.6,
          "priceAvg30d": 21.62
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.5,
          "priceAvg30d": 20.84
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.72,
          "priceAvg30d": 18.92
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.14,
          "priceAvg30d": 18.74
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.07,
          "priceAvg30d": 15.02
        }
      ],
      "avg": 21.46,
      "max": 40.0,
      "maxBlock": 34,
      "min": 2.5,
      "minBlock": 25,
      "spread3h": 19.72,
      "spreadLowAvg": 8.59,
      "spreadHighAvg": 28.31,
      "avg30d": 16.47,
      "spread30dAvg": 17.01,
      "historyDays": 30
    }
  }
};
