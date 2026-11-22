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
  "targetDate": "2026-11-22",
  "fetchedAt": "2026-11-22T13:03:20+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 29.23,
        "priceAvg30d": 26.59
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 29.7,
        "priceAvg30d": 25.66
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 29.93,
        "priceAvg30d": 24.96
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 29.66,
        "priceAvg30d": 24.92
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 29.93,
        "priceAvg30d": 25.08
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 32.0,
        "priceAvg30d": 25.94
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 32.07,
        "priceAvg30d": 27.03
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 30.77,
        "priceAvg30d": 27.92
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 30.31,
        "priceAvg30d": 28.33
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 30.77,
        "priceAvg30d": 28.67
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 31.98,
        "priceAvg30d": 28.98
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 32.3,
        "priceAvg30d": 29.28
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 32.56,
        "priceAvg30d": 29.87
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 33.19,
        "priceAvg30d": 30.2
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 32.01,
        "priceAvg30d": 28.96
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 27.84,
        "priceAvg30d": 26.8
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 26.91,
        "priceAvg30d": 25.79
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 20.94,
        "priceAvg30d": 25.05
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 12.52,
        "priceAvg30d": 23.15
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 10.0,
        "priceAvg30d": 20.08
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 10.0,
        "priceAvg30d": 18.77
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 9.18,
        "priceAvg30d": 17.7
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 9.4,
        "priceAvg30d": 17.28
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 10.1,
        "priceAvg30d": 17.0
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 9.18,
        "priceAvg30d": 15.12
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 10.0,
        "priceAvg30d": 15.62
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 10.0,
        "priceAvg30d": 20.07
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 11.15,
        "priceAvg30d": 22.31
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 15.19,
        "priceAvg30d": 24.4
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 24.32,
        "priceAvg30d": 27.24
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 26.69,
        "priceAvg30d": 29.79
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 28.72,
        "priceAvg30d": 32.72
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 34.3,
        "priceAvg30d": 35.73
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 39.07,
        "priceAvg30d": 36.66
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 40.0,
        "priceAvg30d": 36.38
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 41.9,
        "priceAvg30d": 36.05
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 39.07,
        "priceAvg30d": 35.49
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 39.0,
        "priceAvg30d": 35.26
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 39.07,
        "priceAvg30d": 34.55
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 39.07,
        "priceAvg30d": 33.37
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 39.07,
        "priceAvg30d": 32.77
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 39.07,
        "priceAvg30d": 32.34
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 40.2,
        "priceAvg30d": 31.82
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 39.07,
        "priceAvg30d": 30.58
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 37.99,
        "priceAvg30d": 31.0
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 33.3,
        "priceAvg30d": 29.69
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 33.04,
        "priceAvg30d": 29.18
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 30.51,
        "priceAvg30d": 26.78
      }
    ],
    "avg": 27.96,
    "max": 41.9,
    "maxBlock": 36,
    "min": 9.18,
    "minBlock": 22,
    "spread3h": 28.22,
    "spreadLowAvg": 10.2,
    "spreadHighAvg": 38.42,
    "avg30d": 27.48,
    "spread30dAvg": 19.43,
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
          "price": 29.46,
          "priceAvg30d": 25.47
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.93,
          "priceAvg30d": 23.34
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.69,
          "priceAvg30d": 22.78
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.46,
          "priceAvg30d": 23.63
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.32,
          "priceAvg30d": 24.4
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 29.46,
          "priceAvg30d": 24.86
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.32,
          "priceAvg30d": 25.62
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.46,
          "priceAvg30d": 26.53
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.46,
          "priceAvg30d": 26.94
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.46,
          "priceAvg30d": 27.46
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.94,
          "priceAvg30d": 27.81
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.81,
          "priceAvg30d": 28.12
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.0,
          "priceAvg30d": 28.12
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.28,
          "priceAvg30d": 27.96
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.95,
          "priceAvg30d": 25.49
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.61,
          "priceAvg30d": 23.08
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.02,
          "priceAvg30d": 21.94
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 17.22,
          "priceAvg30d": 19.56
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.66,
          "priceAvg30d": 17.87
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.15,
          "priceAvg30d": 15.72
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.48,
          "priceAvg30d": 14.67
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.53,
          "priceAvg30d": 13.2
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.53,
          "priceAvg30d": 13.57
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.53,
          "priceAvg30d": 13.35
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.53,
          "priceAvg30d": 11.93
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.53,
          "priceAvg30d": 12.32
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.48,
          "priceAvg30d": 15.75
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.9,
          "priceAvg30d": 20.24
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.54,
          "priceAvg30d": 22.36
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 25.58,
          "priceAvg30d": 25.54
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.48,
          "priceAvg30d": 28.36
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.07,
          "priceAvg30d": 31.46
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.99,
          "priceAvg30d": 35.07
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.3,
          "priceAvg30d": 35.02
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 39.07,
          "priceAvg30d": 34.05
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.21,
          "priceAvg30d": 33.69
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.07,
          "priceAvg30d": 33.75
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.61,
          "priceAvg30d": 34.07
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 39.0,
          "priceAvg30d": 33.27
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.07,
          "priceAvg30d": 32.48
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 39.07,
          "priceAvg30d": 32.42
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 39.07,
          "priceAvg30d": 30.77
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.86,
          "priceAvg30d": 30.39
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 36.0,
          "priceAvg30d": 28.8
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.46,
          "priceAvg30d": 28.55
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.58,
          "priceAvg30d": 27.38
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.22,
          "priceAvg30d": 26.78
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.87,
          "priceAvg30d": 24.99
        }
      ],
      "avg": 27.21,
      "max": 40.3,
      "maxBlock": 34,
      "min": 9.53,
      "minBlock": 22,
      "spread3h": 25.0,
      "spreadLowAvg": 10.31,
      "spreadHighAvg": 35.32,
      "avg30d": 25.23,
      "spread30dAvg": 18.94,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.46,
          "priceAvg30d": 26.41
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.93,
          "priceAvg30d": 25.29
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.69,
          "priceAvg30d": 24.51
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.46,
          "priceAvg30d": 23.89
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.32,
          "priceAvg30d": 24.7
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 29.46,
          "priceAvg30d": 25.43
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.32,
          "priceAvg30d": 26.59
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.46,
          "priceAvg30d": 27.22
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.46,
          "priceAvg30d": 27.69
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.46,
          "priceAvg30d": 27.95
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.94,
          "priceAvg30d": 28.5
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.81,
          "priceAvg30d": 28.91
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.0,
          "priceAvg30d": 29.49
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.28,
          "priceAvg30d": 29.35
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.95,
          "priceAvg30d": 27.12
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.61,
          "priceAvg30d": 24.14
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.02,
          "priceAvg30d": 23.97
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 17.22,
          "priceAvg30d": 22.71
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.66,
          "priceAvg30d": 20.79
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.15,
          "priceAvg30d": 19.33
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.48,
          "priceAvg30d": 17.82
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.53,
          "priceAvg30d": 16.66
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.18,
          "priceAvg30d": 15.97
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.9,
          "priceAvg30d": 15.99
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.18,
          "priceAvg30d": 14.9
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 6.1,
          "priceAvg30d": 15.38
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 5.0,
          "priceAvg30d": 19.18
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 7.0,
          "priceAvg30d": 21.75
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.18,
          "priceAvg30d": 24.19
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 18.18,
          "priceAvg30d": 27.54
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.48,
          "priceAvg30d": 30.36
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.07,
          "priceAvg30d": 33.62
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.99,
          "priceAvg30d": 36.08
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.3,
          "priceAvg30d": 37.23
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 39.07,
          "priceAvg30d": 37.29
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.21,
          "priceAvg30d": 36.88
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.07,
          "priceAvg30d": 35.95
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.61,
          "priceAvg30d": 35.88
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 39.0,
          "priceAvg30d": 35.54
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.07,
          "priceAvg30d": 34.44
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 39.07,
          "priceAvg30d": 33.9
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 39.07,
          "priceAvg30d": 32.73
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.86,
          "priceAvg30d": 32.65
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 36.0,
          "priceAvg30d": 31.41
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.46,
          "priceAvg30d": 30.8
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.58,
          "priceAvg30d": 28.81
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.22,
          "priceAvg30d": 27.89
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.87,
          "priceAvg30d": 25.23
        }
      ],
      "avg": 26.36,
      "max": 40.3,
      "maxBlock": 34,
      "min": 5.0,
      "minBlock": 27,
      "spread3h": 25.89,
      "spreadLowAvg": 9.42,
      "spreadHighAvg": 35.32,
      "avg30d": 27.08,
      "spread30dAvg": 20.26,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.46,
          "priceAvg30d": 30.04
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.93,
          "priceAvg30d": 29.84
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.69,
          "priceAvg30d": 29.79
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.46,
          "priceAvg30d": 29.35
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.32,
          "priceAvg30d": 29.37
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 29.46,
          "priceAvg30d": 29.43
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.32,
          "priceAvg30d": 29.54
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.46,
          "priceAvg30d": 29.6
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.46,
          "priceAvg30d": 29.89
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.46,
          "priceAvg30d": 30.02
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.94,
          "priceAvg30d": 30.33
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.81,
          "priceAvg30d": 31.05
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.0,
          "priceAvg30d": 32.16
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.28,
          "priceAvg30d": 32.48
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 32.01,
          "priceAvg30d": 32.31
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.94,
          "priceAvg30d": 31.64
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.04,
          "priceAvg30d": 30.02
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 20.94,
          "priceAvg30d": 30.48
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 19.9,
          "priceAvg30d": 29.95
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.15,
          "priceAvg30d": 27.91
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.15,
          "priceAvg30d": 27.38
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.9,
          "priceAvg30d": 26.48
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.4,
          "priceAvg30d": 26.04
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.36,
          "priceAvg30d": 26.27
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.0,
          "priceAvg30d": 25.56
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.52,
          "priceAvg30d": 26.41
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.6,
          "priceAvg30d": 28.78
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 18.34,
          "priceAvg30d": 30.15
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.21,
          "priceAvg30d": 31.66
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.98,
          "priceAvg30d": 32.96
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.48,
          "priceAvg30d": 34.68
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.07,
          "priceAvg30d": 37.49
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.99,
          "priceAvg30d": 38.71
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.3,
          "priceAvg30d": 39.36
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 39.07,
          "priceAvg30d": 39.37
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.21,
          "priceAvg30d": 38.82
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.07,
          "priceAvg30d": 37.47
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.61,
          "priceAvg30d": 37.73
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 39.0,
          "priceAvg30d": 37.27
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.07,
          "priceAvg30d": 36.65
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 39.07,
          "priceAvg30d": 35.64
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 39.07,
          "priceAvg30d": 34.64
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 40.2,
          "priceAvg30d": 34.43
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 40.0,
          "priceAvg30d": 33.53
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 39.07,
          "priceAvg30d": 35.54
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 34.05,
          "priceAvg30d": 33.42
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 33.6,
          "priceAvg30d": 32.06
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.0,
          "priceAvg30d": 30.51
        }
      ],
      "avg": 28.61,
      "max": 40.3,
      "maxBlock": 34,
      "min": 9.4,
      "minBlock": 23,
      "spread3h": 24.47,
      "spreadLowAvg": 10.85,
      "spreadHighAvg": 35.32,
      "avg30d": 31.96,
      "spread30dAvg": 13.34,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.46,
          "priceAvg30d": 29.63
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 32.99,
          "priceAvg30d": 29.66
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 33.28,
          "priceAvg30d": 29.19
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 33.62,
          "priceAvg30d": 29.18
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 33.31,
          "priceAvg30d": 29.58
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.59,
          "priceAvg30d": 29.93
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 35.0,
          "priceAvg30d": 30.24
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 33.59,
          "priceAvg30d": 30.64
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.57,
          "priceAvg30d": 30.85
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.59,
          "priceAvg30d": 30.92
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.32,
          "priceAvg30d": 31.23
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 33.29,
          "priceAvg30d": 31.57
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.0,
          "priceAvg30d": 31.93
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.28,
          "priceAvg30d": 32.35
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 32.01,
          "priceAvg30d": 31.4
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.94,
          "priceAvg30d": 29.93
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.04,
          "priceAvg30d": 28.98
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 20.94,
          "priceAvg30d": 29.14
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 19.9,
          "priceAvg30d": 27.85
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.15,
          "priceAvg30d": 25.64
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.15,
          "priceAvg30d": 24.6
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.9,
          "priceAvg30d": 24.01
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.4,
          "priceAvg30d": 23.67
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.36,
          "priceAvg30d": 23.49
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.0,
          "priceAvg30d": 21.08
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.52,
          "priceAvg30d": 22.13
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.6,
          "priceAvg30d": 25.17
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 13.31,
          "priceAvg30d": 27.86
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.32,
          "priceAvg30d": 29.88
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.69,
          "priceAvg30d": 31.42
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.48,
          "priceAvg30d": 33.17
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.07,
          "priceAvg30d": 36.49
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.99,
          "priceAvg30d": 37.3
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.0,
          "priceAvg30d": 37.26
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 39.07,
          "priceAvg30d": 37.89
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.21,
          "priceAvg30d": 37.84
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.07,
          "priceAvg30d": 37.26
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.61,
          "priceAvg30d": 37.12
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 39.0,
          "priceAvg30d": 37.02
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.07,
          "priceAvg30d": 36.3
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 39.07,
          "priceAvg30d": 34.89
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 39.07,
          "priceAvg30d": 34.55
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 40.2,
          "priceAvg30d": 33.93
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 40.0,
          "priceAvg30d": 33.24
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 39.07,
          "priceAvg30d": 33.63
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 34.05,
          "priceAvg30d": 32.95
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 33.6,
          "priceAvg30d": 32.33
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.0,
          "priceAvg30d": 31.27
        }
      ],
      "avg": 29.31,
      "max": 40.21,
      "maxBlock": 36,
      "min": 9.4,
      "minBlock": 23,
      "spread3h": 27.28,
      "spreadLowAvg": 10.85,
      "spreadHighAvg": 38.12,
      "avg30d": 30.99,
      "spread30dAvg": 15.34,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.46,
          "priceAvg30d": 16.99
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.69,
          "priceAvg30d": 16.97
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.38,
          "priceAvg30d": 16.78
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.72,
          "priceAvg30d": 16.59
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.5,
          "priceAvg30d": 18.14
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 32.08,
          "priceAvg30d": 20.22
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 35.0,
          "priceAvg30d": 22.27
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.9,
          "priceAvg30d": 23.46
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.57,
          "priceAvg30d": 23.55
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.59,
          "priceAvg30d": 24.77
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.32,
          "priceAvg30d": 25.51
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 33.29,
          "priceAvg30d": 24.83
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.0,
          "priceAvg30d": 24.03
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.28,
          "priceAvg30d": 24.82
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 32.01,
          "priceAvg30d": 24.98
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.94,
          "priceAvg30d": 23.59
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.4,
          "priceAvg30d": 23.3
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 20.94,
          "priceAvg30d": 23.97
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 19.9,
          "priceAvg30d": 23.69
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.62,
          "priceAvg30d": 22.88
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.15,
          "priceAvg30d": 21.71
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.9,
          "priceAvg30d": 20.65
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.4,
          "priceAvg30d": 21.08
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.36,
          "priceAvg30d": 20.64
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.0,
          "priceAvg30d": 16.26
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.52,
          "priceAvg30d": 16.98
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.6,
          "priceAvg30d": 22.66
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 13.31,
          "priceAvg30d": 24.94
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.32,
          "priceAvg30d": 26.55
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.69,
          "priceAvg30d": 28.58
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.38,
          "priceAvg30d": 29.54
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.67,
          "priceAvg30d": 32.54
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 32.71
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.0,
          "priceAvg30d": 34.13
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 39.07,
          "priceAvg30d": 33.92
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.21,
          "priceAvg30d": 34.42
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.07,
          "priceAvg30d": 32.84
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.61,
          "priceAvg30d": 32.37
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 39.0,
          "priceAvg30d": 32.19
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.07,
          "priceAvg30d": 30.01
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 39.07,
          "priceAvg30d": 29.85
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 39.07,
          "priceAvg30d": 28.27
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 40.2,
          "priceAvg30d": 27.69
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 40.0,
          "priceAvg30d": 25.84
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 39.07,
          "priceAvg30d": 26.91
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 34.05,
          "priceAvg30d": 24.61
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 33.6,
          "priceAvg30d": 23.63
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.05,
          "priceAvg30d": 17.89
        }
      ],
      "avg": 28.35,
      "max": 40.21,
      "maxBlock": 36,
      "min": 9.4,
      "minBlock": 23,
      "spread3h": 26.37,
      "spreadLowAvg": 10.76,
      "spreadHighAvg": 37.12,
      "avg30d": 24.81,
      "spread30dAvg": 16.54,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.46,
          "priceAvg30d": 16.99
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.69,
          "priceAvg30d": 16.97
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.38,
          "priceAvg30d": 16.78
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.72,
          "priceAvg30d": 16.59
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.5,
          "priceAvg30d": 17.46
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 32.08,
          "priceAvg30d": 19.66
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 35.0,
          "priceAvg30d": 21.17
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.9,
          "priceAvg30d": 22.68
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.38,
          "priceAvg30d": 22.76
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.38,
          "priceAvg30d": 23.53
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.49,
          "priceAvg30d": 23.39
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.72,
          "priceAvg30d": 22.54
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.05,
          "priceAvg30d": 22.71
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 32.5,
          "priceAvg30d": 24.03
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 32.01,
          "priceAvg30d": 24.41
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.94,
          "priceAvg30d": 23.1
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.4,
          "priceAvg30d": 23.1
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 20.94,
          "priceAvg30d": 23.97
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 19.9,
          "priceAvg30d": 23.69
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.62,
          "priceAvg30d": 22.88
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.15,
          "priceAvg30d": 21.64
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.9,
          "priceAvg30d": 20.55
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.4,
          "priceAvg30d": 21.08
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.36,
          "priceAvg30d": 20.69
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.0,
          "priceAvg30d": 16.17
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.52,
          "priceAvg30d": 16.9
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.6,
          "priceAvg30d": 22.66
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 13.31,
          "priceAvg30d": 24.83
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.32,
          "priceAvg30d": 26.22
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.69,
          "priceAvg30d": 27.81
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.38,
          "priceAvg30d": 29.48
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.67,
          "priceAvg30d": 32.54
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 32.71
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.0,
          "priceAvg30d": 34.13
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 39.07,
          "priceAvg30d": 33.42
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.21,
          "priceAvg30d": 33.87
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.07,
          "priceAvg30d": 32.83
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.61,
          "priceAvg30d": 32.35
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 39.0,
          "priceAvg30d": 32.18
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.07,
          "priceAvg30d": 30.01
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 39.07,
          "priceAvg30d": 29.78
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 39.07,
          "priceAvg30d": 27.93
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 40.2,
          "priceAvg30d": 27.42
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 40.0,
          "priceAvg30d": 25.84
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 39.07,
          "priceAvg30d": 25.91
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 34.05,
          "priceAvg30d": 23.99
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 33.6,
          "priceAvg30d": 23.3
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.05,
          "priceAvg30d": 17.89
        }
      ],
      "avg": 27.8,
      "max": 40.21,
      "maxBlock": 36,
      "min": 9.4,
      "minBlock": 23,
      "spread3h": 26.37,
      "spreadLowAvg": 10.76,
      "spreadHighAvg": 37.12,
      "avg30d": 24.43,
      "spread30dAvg": 16.13,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.46,
          "priceAvg30d": 16.75
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.69,
          "priceAvg30d": 16.89
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.38,
          "priceAvg30d": 16.21
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.72,
          "priceAvg30d": 15.99
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.5,
          "priceAvg30d": 17.04
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 32.08,
          "priceAvg30d": 18.65
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 35.0,
          "priceAvg30d": 20.26
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.9,
          "priceAvg30d": 22.04
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.38,
          "priceAvg30d": 22.68
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.38,
          "priceAvg30d": 23.49
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.49,
          "priceAvg30d": 23.31
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.72,
          "priceAvg30d": 22.53
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.05,
          "priceAvg30d": 22.6
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 32.5,
          "priceAvg30d": 23.94
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 32.01,
          "priceAvg30d": 22.18
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.94,
          "priceAvg30d": 19.95
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.4,
          "priceAvg30d": 18.7
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 20.94,
          "priceAvg30d": 16.31
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.0,
          "priceAvg30d": 14.24
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.16,
          "priceAvg30d": 12.48
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.54,
          "priceAvg30d": 11.25
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.87,
          "priceAvg30d": 10.86
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.17,
          "priceAvg30d": 10.67
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.19,
          "priceAvg30d": 10.67
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.87,
          "priceAvg30d": 9.06
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.0,
          "priceAvg30d": 9.55
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.86,
          "priceAvg30d": 11.25
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.6,
          "priceAvg30d": 11.95
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 7.9,
          "priceAvg30d": 13.88
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.6,
          "priceAvg30d": 15.64
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 19.0,
          "priceAvg30d": 18.6
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.67,
          "priceAvg30d": 22.34
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 25.42
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.0,
          "priceAvg30d": 29.42
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 39.07,
          "priceAvg30d": 29.82
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.21,
          "priceAvg30d": 30.07
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.07,
          "priceAvg30d": 29.59
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.61,
          "priceAvg30d": 28.86
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 39.0,
          "priceAvg30d": 28.13
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.07,
          "priceAvg30d": 27.16
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 39.07,
          "priceAvg30d": 27.33
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 39.07,
          "priceAvg30d": 26.28
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 40.2,
          "priceAvg30d": 26.0
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 40.0,
          "priceAvg30d": 24.4
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 39.07,
          "priceAvg30d": 23.95
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 34.05,
          "priceAvg30d": 22.01
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 33.6,
          "priceAvg30d": 21.58
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.05,
          "priceAvg30d": 17.49
        }
      ],
      "avg": 26.5,
      "max": 40.21,
      "maxBlock": 36,
      "min": 7.9,
      "minBlock": 29,
      "spread3h": 23.0,
      "spreadLowAvg": 14.12,
      "spreadHighAvg": 37.12,
      "avg30d": 19.99,
      "spread30dAvg": 16.63,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.46,
          "priceAvg30d": 15.43
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.69,
          "priceAvg30d": 14.56
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.38,
          "priceAvg30d": 14.16
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.72,
          "priceAvg30d": 14.25
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.5,
          "priceAvg30d": 14.97
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 32.08,
          "priceAvg30d": 16.37
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 35.0,
          "priceAvg30d": 17.54
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.9,
          "priceAvg30d": 20.19
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.38,
          "priceAvg30d": 20.91
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.38,
          "priceAvg30d": 21.86
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.49,
          "priceAvg30d": 22.25
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.72,
          "priceAvg30d": 21.56
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.05,
          "priceAvg30d": 20.73
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 32.5,
          "priceAvg30d": 20.98
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 32.01,
          "priceAvg30d": 19.33
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.94,
          "priceAvg30d": 18.37
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.4,
          "priceAvg30d": 17.54
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 20.94,
          "priceAvg30d": 15.36
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.9,
          "priceAvg30d": 13.34
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 11.12
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 9.87
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.02,
          "priceAvg30d": 8.48
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.17,
          "priceAvg30d": 8.64
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.19,
          "priceAvg30d": 8.4
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.87,
          "priceAvg30d": 6.76
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.0,
          "priceAvg30d": 7.45
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.86,
          "priceAvg30d": 9.7
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 10.74
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 12.27
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 14.14
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 2.9,
          "priceAvg30d": 16.13
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.67,
          "priceAvg30d": 18.79
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 22.33
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.0,
          "priceAvg30d": 26.51
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 39.07,
          "priceAvg30d": 27.38
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.21,
          "priceAvg30d": 27.78
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.07,
          "priceAvg30d": 26.95
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.61,
          "priceAvg30d": 26.56
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 39.0,
          "priceAvg30d": 25.26
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.07,
          "priceAvg30d": 24.38
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 39.07,
          "priceAvg30d": 24.64
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 39.07,
          "priceAvg30d": 22.34
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 40.2,
          "priceAvg30d": 23.53
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 40.0,
          "priceAvg30d": 21.41
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 39.07,
          "priceAvg30d": 20.13
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 34.05,
          "priceAvg30d": 18.56
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 33.6,
          "priceAvg30d": 18.78
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.05,
          "priceAvg30d": 15.92
        }
      ],
      "avg": 24.82,
      "max": 40.21,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 27.22,
      "spreadLowAvg": 9.91,
      "spreadHighAvg": 37.12,
      "avg30d": 17.81,
      "spread30dAvg": 17.27,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.46,
          "priceAvg30d": 15.96
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.69,
          "priceAvg30d": 15.64
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.38,
          "priceAvg30d": 15.06
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.72,
          "priceAvg30d": 14.9
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.5,
          "priceAvg30d": 15.85
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 32.08,
          "priceAvg30d": 17.57
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 35.0,
          "priceAvg30d": 19.31
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.9,
          "priceAvg30d": 21.38
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.38,
          "priceAvg30d": 22.24
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.38,
          "priceAvg30d": 22.97
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.49,
          "priceAvg30d": 22.91
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.72,
          "priceAvg30d": 22.19
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.05,
          "priceAvg30d": 22.36
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 32.5,
          "priceAvg30d": 23.36
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 32.01,
          "priceAvg30d": 21.55
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.94,
          "priceAvg30d": 19.59
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.4,
          "priceAvg30d": 17.85
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 20.94,
          "priceAvg30d": 15.77
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.0,
          "priceAvg30d": 12.74
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.16,
          "priceAvg30d": 10.74
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.54,
          "priceAvg30d": 9.85
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.87,
          "priceAvg30d": 9.14
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.17,
          "priceAvg30d": 8.83
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.19,
          "priceAvg30d": 9.05
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.87,
          "priceAvg30d": 7.37
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.0,
          "priceAvg30d": 7.57
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.86,
          "priceAvg30d": 9.72
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.6,
          "priceAvg30d": 11.09
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 7.9,
          "priceAvg30d": 12.91
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.6,
          "priceAvg30d": 14.99
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 19.0,
          "priceAvg30d": 18.36
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.67,
          "priceAvg30d": 21.71
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 25.42
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.0,
          "priceAvg30d": 29.42
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 39.07,
          "priceAvg30d": 29.66
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.21,
          "priceAvg30d": 30.07
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.07,
          "priceAvg30d": 29.59
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.61,
          "priceAvg30d": 28.86
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 39.0,
          "priceAvg30d": 28.13
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 39.07,
          "priceAvg30d": 27.16
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 39.07,
          "priceAvg30d": 27.33
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 39.07,
          "priceAvg30d": 26.28
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 40.2,
          "priceAvg30d": 25.91
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 40.0,
          "priceAvg30d": 24.06
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 39.07,
          "priceAvg30d": 23.64
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 34.05,
          "priceAvg30d": 21.64
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 33.6,
          "priceAvg30d": 20.56
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.05,
          "priceAvg30d": 16.82
        }
      ],
      "avg": 26.5,
      "max": 40.21,
      "maxBlock": 36,
      "min": 7.9,
      "minBlock": 29,
      "spread3h": 23.0,
      "spreadLowAvg": 14.12,
      "spreadHighAvg": 37.12,
      "avg30d": 19.27,
      "spread30dAvg": 17.53,
      "historyDays": 30
    }
  }
};
