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
  "targetDate": "2026-11-25",
  "fetchedAt": "2026-11-25T15:05:24+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 30.0,
        "priceAvg30d": 27.03
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 30.48,
        "priceAvg30d": 26.14
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 30.68,
        "priceAvg30d": 25.45
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 30.68,
        "priceAvg30d": 25.41
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 31.2,
        "priceAvg30d": 25.57
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 31.66,
        "priceAvg30d": 26.48
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 30.68,
        "priceAvg30d": 27.62
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 31.25,
        "priceAvg30d": 28.44
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 30.68,
        "priceAvg30d": 28.79
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 31.01,
        "priceAvg30d": 29.17
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 32.99,
        "priceAvg30d": 29.6
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 33.69,
        "priceAvg30d": 29.91
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 37.95,
        "priceAvg30d": 30.65
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 43.53,
        "priceAvg30d": 31.01
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 43.53,
        "priceAvg30d": 29.85
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 43.18,
        "priceAvg30d": 27.62
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 40.98,
        "priceAvg30d": 26.84
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 33.81,
        "priceAvg30d": 25.89
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 30.57,
        "priceAvg30d": 23.76
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 28.02,
        "priceAvg30d": 20.47
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 26.89,
        "priceAvg30d": 19.12
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 25.64,
        "priceAvg30d": 17.9
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 25.24,
        "priceAvg30d": 17.32
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 24.32,
        "priceAvg30d": 16.91
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 20.0,
        "priceAvg30d": 14.81
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 20.33,
        "priceAvg30d": 15.3
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 27.51,
        "priceAvg30d": 19.85
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 29.22,
        "priceAvg30d": 22.19
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 30.0,
        "priceAvg30d": 24.57
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 30.68,
        "priceAvg30d": 27.68
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 42.87,
        "priceAvg30d": 30.26
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 45.0,
        "priceAvg30d": 33.25
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 45.59,
        "priceAvg30d": 36.61
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 46.9,
        "priceAvg30d": 37.65
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 46.21,
        "priceAvg30d": 37.4
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 46.21,
        "priceAvg30d": 37.17
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 46.21,
        "priceAvg30d": 36.49
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 46.0,
        "priceAvg30d": 36.26
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 45.6,
        "priceAvg30d": 35.57
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 45.32,
        "priceAvg30d": 34.45
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 46.02,
        "priceAvg30d": 33.9
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 46.15,
        "priceAvg30d": 33.4
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 46.02,
        "priceAvg30d": 32.94
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 43.71,
        "priceAvg30d": 31.76
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 43.81,
        "priceAvg30d": 32.04
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 43.18,
        "priceAvg30d": 30.54
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 42.0,
        "priceAvg30d": 30.02
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 34.89,
        "priceAvg30d": 27.34
      }
    ],
    "avg": 36.21,
    "max": 46.9,
    "maxBlock": 34,
    "min": 20.0,
    "minBlock": 25,
    "spread3h": 19.97,
    "spreadLowAvg": 25.38,
    "spreadHighAvg": 45.35,
    "avg30d": 28.09,
    "spread30dAvg": 20.79,
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
          "price": 24.43,
          "priceAvg30d": 26.36
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.6,
          "priceAvg30d": 24.88
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.82,
          "priceAvg30d": 24.42
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.82,
          "priceAvg30d": 24.48
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.82,
          "priceAvg30d": 24.76
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.66,
          "priceAvg30d": 25.15
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.21,
          "priceAvg30d": 25.84
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.4,
          "priceAvg30d": 26.81
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.48,
          "priceAvg30d": 27.16
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.0,
          "priceAvg30d": 27.58
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.58,
          "priceAvg30d": 27.93
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.46,
          "priceAvg30d": 28.25
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.89,
          "priceAvg30d": 28.71
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.82,
          "priceAvg30d": 28.91
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.4,
          "priceAvg30d": 26.57
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.67,
          "priceAvg30d": 24.27
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.61,
          "priceAvg30d": 23.23
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 22.54,
          "priceAvg30d": 20.46
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 22.27,
          "priceAvg30d": 18.6
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 20.45,
          "priceAvg30d": 16.44
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.2,
          "priceAvg30d": 15.53
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.66,
          "priceAvg30d": 14.18
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.38,
          "priceAvg30d": 14.51
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.36,
          "priceAvg30d": 14.35
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.53,
          "priceAvg30d": 13.02
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.02,
          "priceAvg30d": 13.38
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 17.11,
          "priceAvg30d": 16.95
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 21.1,
          "priceAvg30d": 21.4
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 22.54,
          "priceAvg30d": 24.24
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.58,
          "priceAvg30d": 27.36
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.36,
          "priceAvg30d": 29.94
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 37.82,
          "priceAvg30d": 33.11
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.53,
          "priceAvg30d": 36.01
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.24,
          "priceAvg30d": 36.87
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.53,
          "priceAvg30d": 36.29
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.53,
          "priceAvg30d": 35.28
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.53,
          "priceAvg30d": 35.28
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.53,
          "priceAvg30d": 34.81
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.53,
          "priceAvg30d": 33.76
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 33.82,
          "priceAvg30d": 32.87
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.82,
          "priceAvg30d": 32.73
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 35.0,
          "priceAvg30d": 31.78
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.98,
          "priceAvg30d": 31.78
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 29.23,
          "priceAvg30d": 30.25
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.2,
          "priceAvg30d": 29.69
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.75,
          "priceAvg30d": 28.52
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 29.2,
          "priceAvg30d": 27.8
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 21.58,
          "priceAvg30d": 24.67
        }
      ],
      "avg": 26.74,
      "max": 44.24,
      "maxBlock": 34,
      "min": 9.53,
      "minBlock": 25,
      "spread3h": 26.61,
      "spreadLowAvg": 13.6,
      "spreadHighAvg": 40.22,
      "avg30d": 26.19,
      "spread30dAvg": 19.02,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.43,
          "priceAvg30d": 26.24
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.6,
          "priceAvg30d": 24.93
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.82,
          "priceAvg30d": 23.91
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.82,
          "priceAvg30d": 23.58
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.82,
          "priceAvg30d": 24.55
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.66,
          "priceAvg30d": 25.31
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.2,
          "priceAvg30d": 26.48
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.2,
          "priceAvg30d": 27.19
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.25,
          "priceAvg30d": 27.59
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.25,
          "priceAvg30d": 27.93
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.31,
          "priceAvg30d": 28.62
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.46,
          "priceAvg30d": 28.99
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.47,
          "priceAvg30d": 29.73
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.82,
          "priceAvg30d": 29.74
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.4,
          "priceAvg30d": 27.13
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.67,
          "priceAvg30d": 24.31
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.61,
          "priceAvg30d": 24.29
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.61,
          "priceAvg30d": 22.3
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 22.45,
          "priceAvg30d": 20.13
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 21.24,
          "priceAvg30d": 18.56
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.66,
          "priceAvg30d": 17.22
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.66,
          "priceAvg30d": 15.9
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.38,
          "priceAvg30d": 15.02
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.36,
          "priceAvg30d": 14.99
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.53,
          "priceAvg30d": 14.1
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.02,
          "priceAvg30d": 14.46
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 17.11,
          "priceAvg30d": 18.21
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 21.1,
          "priceAvg30d": 20.73
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 22.82,
          "priceAvg30d": 23.3
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.58,
          "priceAvg30d": 26.97
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.36,
          "priceAvg30d": 29.93
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 37.82,
          "priceAvg30d": 33.44
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.53,
          "priceAvg30d": 36.26
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.24,
          "priceAvg30d": 37.42
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.53,
          "priceAvg30d": 37.76
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.53,
          "priceAvg30d": 37.24
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.53,
          "priceAvg30d": 36.41
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.53,
          "priceAvg30d": 35.95
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.53,
          "priceAvg30d": 35.59
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 33.82,
          "priceAvg30d": 34.35
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.82,
          "priceAvg30d": 33.84
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 35.0,
          "priceAvg30d": 32.98
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.98,
          "priceAvg30d": 32.76
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 29.23,
          "priceAvg30d": 31.5
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.2,
          "priceAvg30d": 30.42
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.2,
          "priceAvg30d": 28.4
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 29.2,
          "priceAvg30d": 27.55
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.53,
          "priceAvg30d": 24.9
        }
      ],
      "avg": 28.02,
      "max": 44.24,
      "maxBlock": 34,
      "min": 9.53,
      "minBlock": 25,
      "spread3h": 26.61,
      "spreadLowAvg": 13.6,
      "spreadHighAvg": 40.22,
      "avg30d": 26.86,
      "spread30dAvg": 21.3,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.71,
          "priceAvg30d": 30.09
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.99,
          "priceAvg30d": 29.9
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.22,
          "priceAvg30d": 29.56
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.9,
          "priceAvg30d": 29.39
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 32.64,
          "priceAvg30d": 29.37
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.66,
          "priceAvg30d": 29.45
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.32,
          "priceAvg30d": 29.59
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.25,
          "priceAvg30d": 29.74
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.31,
          "priceAvg30d": 29.91
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.68,
          "priceAvg30d": 30.17
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.07,
          "priceAvg30d": 30.54
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 33.69,
          "priceAvg30d": 31.35
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 38.3,
          "priceAvg30d": 32.59
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 43.53,
          "priceAvg30d": 33.04
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 43.53,
          "priceAvg30d": 32.95
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 43.53,
          "priceAvg30d": 32.03
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.0,
          "priceAvg30d": 30.19
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.13,
          "priceAvg30d": 30.33
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 29.54,
          "priceAvg30d": 29.64
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 28.0,
          "priceAvg30d": 27.33
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 27.61,
          "priceAvg30d": 26.88
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.61,
          "priceAvg30d": 26.13
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.97,
          "priceAvg30d": 25.44
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.17,
          "priceAvg30d": 25.33
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 26.52,
          "priceAvg30d": 24.57
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 27.01,
          "priceAvg30d": 25.63
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.48,
          "priceAvg30d": 28.13
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 29.72,
          "priceAvg30d": 29.63
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.68,
          "priceAvg30d": 31.38
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.68,
          "priceAvg30d": 32.94
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 33.82,
          "priceAvg30d": 34.67
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 43.53,
          "priceAvg30d": 37.71
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.53,
          "priceAvg30d": 39.27
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.24,
          "priceAvg30d": 39.88
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.53,
          "priceAvg30d": 39.84
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.53,
          "priceAvg30d": 39.19
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.53,
          "priceAvg30d": 37.93
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.53,
          "priceAvg30d": 38.18
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.53,
          "priceAvg30d": 37.78
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.53,
          "priceAvg30d": 37.25
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 43.57,
          "priceAvg30d": 36.32
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 43.53,
          "priceAvg30d": 35.48
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.53,
          "priceAvg30d": 35.21
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.53,
          "priceAvg30d": 34.3
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 44.12,
          "priceAvg30d": 35.93
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 43.53,
          "priceAvg30d": 33.87
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 42.66,
          "priceAvg30d": 32.52
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.53,
          "priceAvg30d": 30.93
        }
      ],
      "avg": 35.66,
      "max": 44.24,
      "maxBlock": 34,
      "min": 26.52,
      "minBlock": 25,
      "spread3h": 13.92,
      "spreadLowAvg": 27.99,
      "spreadHighAvg": 41.91,
      "avg30d": 32.07,
      "spread30dAvg": 14.42,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.19,
          "priceAvg30d": 29.97
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.99,
          "priceAvg30d": 30.12
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.22,
          "priceAvg30d": 29.63
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.9,
          "priceAvg30d": 29.64
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 32.64,
          "priceAvg30d": 30.05
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.3,
          "priceAvg30d": 30.41
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.61,
          "priceAvg30d": 30.77
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 33.05,
          "priceAvg30d": 31.14
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.3,
          "priceAvg30d": 31.29
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.05,
          "priceAvg30d": 31.37
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.05,
          "priceAvg30d": 31.76
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 34.89,
          "priceAvg30d": 32.1
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 38.3,
          "priceAvg30d": 32.49
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 43.53,
          "priceAvg30d": 33.08
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.21,
          "priceAvg30d": 32.27
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 46.2,
          "priceAvg30d": 30.59
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 46.0,
          "priceAvg30d": 29.81
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 41.3,
          "priceAvg30d": 29.65
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 38.0,
          "priceAvg30d": 28.22
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.32,
          "priceAvg30d": 25.68
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 28.26,
          "priceAvg30d": 24.67
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.84,
          "priceAvg30d": 24.03
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 28.02,
          "priceAvg30d": 23.63
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.53,
          "priceAvg30d": 23.46
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 26.52,
          "priceAvg30d": 20.88
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 27.01,
          "priceAvg30d": 21.84
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.72,
          "priceAvg30d": 24.97
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.42,
          "priceAvg30d": 27.39
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.82,
          "priceAvg30d": 29.77
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 39.9,
          "priceAvg30d": 31.49
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.99,
          "priceAvg30d": 33.28
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 45.3,
          "priceAvg30d": 36.83
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 46.21,
          "priceAvg30d": 38.08
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 49.0,
          "priceAvg30d": 38.07
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 49.01,
          "priceAvg30d": 38.7
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 49.0,
          "priceAvg30d": 38.78
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 49.1,
          "priceAvg30d": 38.12
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 49.02,
          "priceAvg30d": 38.03
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.21,
          "priceAvg30d": 37.89
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.09,
          "priceAvg30d": 37.38
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.62,
          "priceAvg30d": 35.94
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.58,
          "priceAvg30d": 35.68
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 46.72,
          "priceAvg30d": 35.19
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 46.11,
          "priceAvg30d": 34.51
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 44.12,
          "priceAvg30d": 34.73
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 43.53,
          "priceAvg30d": 33.71
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 42.87,
          "priceAvg30d": 33.18
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.66,
          "priceAvg30d": 31.82
        }
      ],
      "avg": 38.38,
      "max": 49.1,
      "maxBlock": 37,
      "min": 26.52,
      "minBlock": 25,
      "spread3h": 19.8,
      "spreadLowAvg": 28.26,
      "spreadHighAvg": 48.05,
      "avg30d": 31.5,
      "spread30dAvg": 16.53,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.19,
          "priceAvg30d": 18.63
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.99,
          "priceAvg30d": 18.36
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.22,
          "priceAvg30d": 18.23
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.9,
          "priceAvg30d": 17.91
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 32.64,
          "priceAvg30d": 19.48
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.3,
          "priceAvg30d": 21.64
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.61,
          "priceAvg30d": 23.88
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 33.05,
          "priceAvg30d": 24.85
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.3,
          "priceAvg30d": 25.02
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.05,
          "priceAvg30d": 25.99
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.05,
          "priceAvg30d": 26.75
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 34.89,
          "priceAvg30d": 26.35
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 38.3,
          "priceAvg30d": 25.65
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 43.53,
          "priceAvg30d": 26.58
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.21,
          "priceAvg30d": 27.07
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 46.2,
          "priceAvg30d": 25.23
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 46.0,
          "priceAvg30d": 25.01
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 41.3,
          "priceAvg30d": 25.53
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 38.0,
          "priceAvg30d": 24.94
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.32,
          "priceAvg30d": 23.59
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 28.26,
          "priceAvg30d": 22.14
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.84,
          "priceAvg30d": 21.17
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 28.02,
          "priceAvg30d": 21.27
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.53,
          "priceAvg30d": 20.56
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 26.52,
          "priceAvg30d": 16.28
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 27.01,
          "priceAvg30d": 17.05
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.72,
          "priceAvg30d": 22.63
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.42,
          "priceAvg30d": 25.08
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.82,
          "priceAvg30d": 27.03
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 39.9,
          "priceAvg30d": 29.02
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.99,
          "priceAvg30d": 30.17
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 45.3,
          "priceAvg30d": 32.81
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 46.21,
          "priceAvg30d": 33.9
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 49.0,
          "priceAvg30d": 35.32
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 49.01,
          "priceAvg30d": 35.07
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 49.0,
          "priceAvg30d": 35.66
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 49.1,
          "priceAvg30d": 34.01
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 49.02,
          "priceAvg30d": 33.68
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.21,
          "priceAvg30d": 33.43
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.21,
          "priceAvg30d": 31.59
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.62,
          "priceAvg30d": 31.36
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.58,
          "priceAvg30d": 29.95
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 46.72,
          "priceAvg30d": 29.48
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 46.11,
          "priceAvg30d": 27.8
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 44.12,
          "priceAvg30d": 28.73
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 43.53,
          "priceAvg30d": 26.3
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 42.87,
          "priceAvg30d": 25.37
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.66,
          "priceAvg30d": 19.57
        }
      ],
      "avg": 38.38,
      "max": 49.1,
      "maxBlock": 37,
      "min": 26.52,
      "minBlock": 25,
      "spread3h": 19.82,
      "spreadLowAvg": 28.26,
      "spreadHighAvg": 48.07,
      "avg30d": 25.98,
      "spread30dAvg": 17.32,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.19,
          "priceAvg30d": 18.63
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.99,
          "priceAvg30d": 18.36
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.22,
          "priceAvg30d": 18.23
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.9,
          "priceAvg30d": 17.91
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 32.64,
          "priceAvg30d": 18.81
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.3,
          "priceAvg30d": 21.08
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.61,
          "priceAvg30d": 22.78
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 33.05,
          "priceAvg30d": 24.08
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.3,
          "priceAvg30d": 24.02
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.05,
          "priceAvg30d": 24.54
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.05,
          "priceAvg30d": 24.44
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 34.89,
          "priceAvg30d": 23.91
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 38.3,
          "priceAvg30d": 24.24
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 43.53,
          "priceAvg30d": 25.75
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.21,
          "priceAvg30d": 26.5
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 46.2,
          "priceAvg30d": 24.74
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 46.0,
          "priceAvg30d": 24.82
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 41.3,
          "priceAvg30d": 25.53
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 38.0,
          "priceAvg30d": 24.94
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.32,
          "priceAvg30d": 23.59
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 28.26,
          "priceAvg30d": 22.06
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.84,
          "priceAvg30d": 21.06
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 28.02,
          "priceAvg30d": 21.27
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.53,
          "priceAvg30d": 20.61
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 26.52,
          "priceAvg30d": 16.19
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 27.01,
          "priceAvg30d": 16.97
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.72,
          "priceAvg30d": 22.63
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.42,
          "priceAvg30d": 24.98
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.82,
          "priceAvg30d": 26.7
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 39.9,
          "priceAvg30d": 28.25
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.99,
          "priceAvg30d": 30.12
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 45.3,
          "priceAvg30d": 32.81
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 46.21,
          "priceAvg30d": 33.9
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 49.0,
          "priceAvg30d": 35.32
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 49.01,
          "priceAvg30d": 34.57
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 49.0,
          "priceAvg30d": 35.11
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 49.1,
          "priceAvg30d": 34.0
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 49.02,
          "priceAvg30d": 33.66
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.21,
          "priceAvg30d": 33.42
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.21,
          "priceAvg30d": 31.59
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.62,
          "priceAvg30d": 31.29
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.58,
          "priceAvg30d": 29.61
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 46.72,
          "priceAvg30d": 29.21
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 46.11,
          "priceAvg30d": 27.8
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 44.12,
          "priceAvg30d": 27.73
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 43.53,
          "priceAvg30d": 25.68
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 42.87,
          "priceAvg30d": 25.04
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.66,
          "priceAvg30d": 19.57
        }
      ],
      "avg": 38.38,
      "max": 49.1,
      "maxBlock": 37,
      "min": 26.52,
      "minBlock": 25,
      "spread3h": 19.82,
      "spreadLowAvg": 28.26,
      "spreadHighAvg": 48.07,
      "avg30d": 25.58,
      "spread30dAvg": 16.91,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.19,
          "priceAvg30d": 18.63
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.99,
          "priceAvg30d": 18.27
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.22,
          "priceAvg30d": 17.71
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.9,
          "priceAvg30d": 17.53
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 32.64,
          "priceAvg30d": 18.6
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.3,
          "priceAvg30d": 20.6
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.61,
          "priceAvg30d": 22.3
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 33.05,
          "priceAvg30d": 23.6
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.3,
          "priceAvg30d": 23.93
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.05,
          "priceAvg30d": 24.5
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.05,
          "priceAvg30d": 24.36
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 34.89,
          "priceAvg30d": 23.9
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 38.3,
          "priceAvg30d": 24.13
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 43.53,
          "priceAvg30d": 25.67
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.21,
          "priceAvg30d": 24.41
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 46.2,
          "priceAvg30d": 21.96
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 46.0,
          "priceAvg30d": 20.71
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 41.3,
          "priceAvg30d": 18.22
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 38.0,
          "priceAvg30d": 15.53
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.32,
          "priceAvg30d": 13.35
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 21.29,
          "priceAvg30d": 12.09
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.87,
          "priceAvg30d": 11.77
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 7.5,
          "priceAvg30d": 11.53
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 5.0,
          "priceAvg30d": 11.6
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.5,
          "priceAvg30d": 9.8
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 5.0,
          "priceAvg30d": 10.15
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.86,
          "priceAvg30d": 12.0
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.51,
          "priceAvg30d": 12.72
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 14.44
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 39.9,
          "priceAvg30d": 15.64
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.99,
          "priceAvg30d": 19.26
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 45.3,
          "priceAvg30d": 23.17
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 46.21,
          "priceAvg30d": 26.6
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 49.0,
          "priceAvg30d": 30.61
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 49.01,
          "priceAvg30d": 31.36
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 49.0,
          "priceAvg30d": 31.6
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 49.1,
          "priceAvg30d": 31.05
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 49.02,
          "priceAvg30d": 30.56
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.21,
          "priceAvg30d": 29.63
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.21,
          "priceAvg30d": 29.09
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.62,
          "priceAvg30d": 29.18
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.58,
          "priceAvg30d": 28.25
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 46.72,
          "priceAvg30d": 28.02
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 46.11,
          "priceAvg30d": 26.59
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 44.12,
          "priceAvg30d": 26.0
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 43.53,
          "priceAvg30d": 24.04
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 42.87,
          "priceAvg30d": 23.66
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.66,
          "priceAvg30d": 19.49
        }
      ],
      "avg": 35.43,
      "max": 49.1,
      "maxBlock": 37,
      "min": 2.5,
      "minBlock": 25,
      "spread3h": 38.12,
      "spreadLowAvg": 9.96,
      "spreadHighAvg": 48.07,
      "avg30d": 21.41,
      "spread30dAvg": 17.53,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.19,
          "priceAvg30d": 17.71
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.99,
          "priceAvg30d": 16.41
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.22,
          "priceAvg30d": 16.16
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.9,
          "priceAvg30d": 16.27
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 32.64,
          "priceAvg30d": 17.03
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.3,
          "priceAvg30d": 18.92
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.61,
          "priceAvg30d": 20.3
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 33.05,
          "priceAvg30d": 22.83
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.3,
          "priceAvg30d": 23.2
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.05,
          "priceAvg30d": 24.12
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.05,
          "priceAvg30d": 24.29
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 34.89,
          "priceAvg30d": 23.77
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 38.3,
          "priceAvg30d": 23.05
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 43.53,
          "priceAvg30d": 23.88
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.21,
          "priceAvg30d": 22.22
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 46.2,
          "priceAvg30d": 20.79
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 46.0,
          "priceAvg30d": 19.85
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 41.3,
          "priceAvg30d": 17.47
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 38.0,
          "priceAvg30d": 14.48
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.32,
          "priceAvg30d": 11.12
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 21.29,
          "priceAvg30d": 10.2
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.87,
          "priceAvg30d": 9.12
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 7.3,
          "priceAvg30d": 9.87
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 2.5,
          "priceAvg30d": 9.66
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.5,
          "priceAvg30d": 7.78
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.0,
          "priceAvg30d": 8.14
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.86,
          "priceAvg30d": 10.54
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.51,
          "priceAvg30d": 10.97
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 12.2
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 39.9,
          "priceAvg30d": 13.78
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.99,
          "priceAvg30d": 16.64
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 45.3,
          "priceAvg30d": 21.28
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 46.21,
          "priceAvg30d": 25.44
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 49.0,
          "priceAvg30d": 29.73
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 49.01,
          "priceAvg30d": 30.6
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 49.0,
          "priceAvg30d": 31.1
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 49.1,
          "priceAvg30d": 30.23
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 49.02,
          "priceAvg30d": 29.84
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.21,
          "priceAvg30d": 28.54
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.21,
          "priceAvg30d": 27.76
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.62,
          "priceAvg30d": 27.82
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.58,
          "priceAvg30d": 25.55
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 46.72,
          "priceAvg30d": 26.75
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 46.11,
          "priceAvg30d": 24.68
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 44.12,
          "priceAvg30d": 23.59
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 43.53,
          "priceAvg30d": 21.68
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 42.87,
          "priceAvg30d": 21.82
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.66,
          "priceAvg30d": 18.66
        }
      ],
      "avg": 35.31,
      "max": 49.1,
      "maxBlock": 37,
      "min": 2.0,
      "minBlock": 26,
      "spread3h": 35.63,
      "spreadLowAvg": 12.45,
      "spreadHighAvg": 48.07,
      "avg30d": 19.96,
      "spread30dAvg": 19.12,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.19,
          "priceAvg30d": 17.83
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.99,
          "priceAvg30d": 17.23
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.22,
          "priceAvg30d": 16.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.9,
          "priceAvg30d": 16.48
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 32.64,
          "priceAvg30d": 17.54
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.3,
          "priceAvg30d": 19.52
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.61,
          "priceAvg30d": 21.36
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 33.05,
          "priceAvg30d": 22.95
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.3,
          "priceAvg30d": 23.5
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.05,
          "priceAvg30d": 23.98
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.05,
          "priceAvg30d": 23.96
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 34.89,
          "priceAvg30d": 23.56
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 38.3,
          "priceAvg30d": 23.89
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 43.53,
          "priceAvg30d": 25.09
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.21,
          "priceAvg30d": 23.78
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 46.2,
          "priceAvg30d": 21.6
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 46.0,
          "priceAvg30d": 20.09
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 41.3,
          "priceAvg30d": 17.68
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 38.0,
          "priceAvg30d": 14.21
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.32,
          "priceAvg30d": 11.99
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 21.29,
          "priceAvg30d": 10.94
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.87,
          "priceAvg30d": 10.21
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 7.5,
          "priceAvg30d": 9.85
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 5.0,
          "priceAvg30d": 10.14
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.5,
          "priceAvg30d": 8.27
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 5.0,
          "priceAvg30d": 8.34
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.86,
          "priceAvg30d": 10.63
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.51,
          "priceAvg30d": 11.92
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 13.19
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 39.9,
          "priceAvg30d": 15.17
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.99,
          "priceAvg30d": 19.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 45.3,
          "priceAvg30d": 22.62
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 46.21,
          "priceAvg30d": 26.6
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 49.0,
          "priceAvg30d": 30.61
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 49.01,
          "priceAvg30d": 31.2
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 49.0,
          "priceAvg30d": 31.6
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 49.1,
          "priceAvg30d": 31.05
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 49.02,
          "priceAvg30d": 30.56
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.21,
          "priceAvg30d": 29.63
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.21,
          "priceAvg30d": 29.09
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.62,
          "priceAvg30d": 29.18
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.58,
          "priceAvg30d": 28.25
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 46.72,
          "priceAvg30d": 27.93
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 46.11,
          "priceAvg30d": 26.26
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 44.12,
          "priceAvg30d": 25.7
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 43.53,
          "priceAvg30d": 23.67
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 42.87,
          "priceAvg30d": 22.64
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.66,
          "priceAvg30d": 18.82
        }
      ],
      "avg": 35.43,
      "max": 49.1,
      "maxBlock": 37,
      "min": 2.5,
      "minBlock": 25,
      "spread3h": 38.12,
      "spreadLowAvg": 9.96,
      "spreadHighAvg": 48.07,
      "avg30d": 20.75,
      "spread30dAvg": 18.49,
      "historyDays": 30
    }
  }
};
