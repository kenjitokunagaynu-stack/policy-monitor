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
  "targetDate": "2026-10-27",
  "fetchedAt": "2026-10-27T11:54:54+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 28.54,
        "priceAvg30d": 22.38
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 27.14,
        "priceAvg30d": 21.12
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 26.96,
        "priceAvg30d": 20.6
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 26.96,
        "priceAvg30d": 20.45
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 26.96,
        "priceAvg30d": 20.5
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 27.12,
        "priceAvg30d": 21.07
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 27.84,
        "priceAvg30d": 21.67
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 27.93,
        "priceAvg30d": 22.33
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 28.72,
        "priceAvg30d": 22.88
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 29.14,
        "priceAvg30d": 23.45
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 29.35,
        "priceAvg30d": 23.91
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 29.83,
        "priceAvg30d": 23.92
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 30.1,
        "priceAvg30d": 23.56
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 30.09,
        "priceAvg30d": 21.54
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 29.88,
        "priceAvg30d": 18.61
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 29.49,
        "priceAvg30d": 16.72
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 28.72,
        "priceAvg30d": 16.23
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 28.81,
        "priceAvg30d": 16.0
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 26.74,
        "priceAvg30d": 15.1
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 25.99,
        "priceAvg30d": 14.29
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 23.0,
        "priceAvg30d": 13.55
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 20.09,
        "priceAvg30d": 13.09
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 13.25,
        "priceAvg30d": 13.05
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 12.87,
        "priceAvg30d": 12.97
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 10.5,
        "priceAvg30d": 10.72
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 10.81,
        "priceAvg30d": 11.35
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 14.8,
        "priceAvg30d": 14.25
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 22.05,
        "priceAvg30d": 16.77
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 26.19,
        "priceAvg30d": 17.61
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 28.0,
        "priceAvg30d": 20.94
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 29.49,
        "priceAvg30d": 22.46
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 33.35,
        "priceAvg30d": 26.68
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 38.37,
        "priceAvg30d": 29.94
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 38.37,
        "priceAvg30d": 32.41
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 39.0,
        "priceAvg30d": 31.92
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 38.37,
        "priceAvg30d": 32.07
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 37.04,
        "priceAvg30d": 30.7
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 36.71,
        "priceAvg30d": 29.87
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 33.35,
        "priceAvg30d": 28.73
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 31.04,
        "priceAvg30d": 26.83
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 30.29,
        "priceAvg30d": 26.1
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 29.24,
        "priceAvg30d": 25.21
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 29.06,
        "priceAvg30d": 24.66
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 27.92,
        "priceAvg30d": 24.78
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 28.75,
        "priceAvg30d": 25.11
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 28.13,
        "priceAvg30d": 24.32
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 27.74,
        "priceAvg30d": 24.24
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 26.65,
        "priceAvg30d": 22.78
      }
    ],
    "avg": 27.72,
    "max": 39.0,
    "maxBlock": 35,
    "min": 10.5,
    "minBlock": 25,
    "spread3h": 21.39,
    "spreadLowAvg": 15.65,
    "spreadHighAvg": 37.03,
    "avg30d": 21.65,
    "spread30dAvg": 18.4,
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
          "price": 30.6,
          "priceAvg30d": 18.5
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.0,
          "priceAvg30d": 15.45
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 30.6,
          "priceAvg30d": 16.26
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.68,
          "priceAvg30d": 17.24
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 30.12,
          "priceAvg30d": 17.71
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.64,
          "priceAvg30d": 19.42
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.42,
          "priceAvg30d": 20.63
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.5,
          "priceAvg30d": 21.71
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.79,
          "priceAvg30d": 21.95
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.79,
          "priceAvg30d": 21.93
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.76,
          "priceAvg30d": 24.43
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.12,
          "priceAvg30d": 25.05
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.43,
          "priceAvg30d": 21.41
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 31.41,
          "priceAvg30d": 18.5
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.0,
          "priceAvg30d": 15.1
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 38.3,
          "priceAvg30d": 12.42
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 35.48,
          "priceAvg30d": 11.25
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 28.67,
          "priceAvg30d": 9.7
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.51,
          "priceAvg30d": 8.81
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.96,
          "priceAvg30d": 7.55
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 23.62,
          "priceAvg30d": 6.94
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 23.52,
          "priceAvg30d": 6.29
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.68,
          "priceAvg30d": 6.48
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.34,
          "priceAvg30d": 6.69
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.0,
          "priceAvg30d": 5.99
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 14.76,
          "priceAvg30d": 5.68
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.85,
          "priceAvg30d": 7.02
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.18,
          "priceAvg30d": 9.28
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 29.78,
          "priceAvg30d": 12.15
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.73,
          "priceAvg30d": 15.46
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 37.01,
          "priceAvg30d": 18.11
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 40.01,
          "priceAvg30d": 23.71
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.52,
          "priceAvg30d": 30.93
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 41.0,
          "priceAvg30d": 33.55
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.84,
          "priceAvg30d": 31.22
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.31,
          "priceAvg30d": 31.43
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.35,
          "priceAvg30d": 29.05
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.0,
          "priceAvg30d": 30.02
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.0,
          "priceAvg30d": 29.73
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.0,
          "priceAvg30d": 28.72
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.1,
          "priceAvg30d": 27.52
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.29,
          "priceAvg30d": 25.63
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.3,
          "priceAvg30d": 24.65
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.01,
          "priceAvg30d": 23.78
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 30.79,
          "priceAvg30d": 24.33
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 30.79,
          "priceAvg30d": 22.53
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.05,
          "priceAvg30d": 22.48
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.96,
          "priceAvg30d": 20.42
        }
      ],
      "avg": 30.7,
      "max": 41.0,
      "maxBlock": 34,
      "min": 14.76,
      "minBlock": 26,
      "spread3h": 16.2,
      "spreadLowAvg": 23.31,
      "spreadHighAvg": 39.51,
      "avg30d": 18.85,
      "spread30dAvg": 23.21,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 31.49,
          "priceAvg30d": 25.15
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.7,
          "priceAvg30d": 24.56
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 30.79,
          "priceAvg30d": 24.79
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.79,
          "priceAvg30d": 24.53
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 30.79,
          "priceAvg30d": 24.56
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.64,
          "priceAvg30d": 24.55
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.79,
          "priceAvg30d": 24.97
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.5,
          "priceAvg30d": 25.08
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.79,
          "priceAvg30d": 25.31
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.79,
          "priceAvg30d": 25.42
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.79,
          "priceAvg30d": 25.69
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.48,
          "priceAvg30d": 25.88
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 38.3,
          "priceAvg30d": 25.25
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.0,
          "priceAvg30d": 23.46
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 38.3,
          "priceAvg30d": 20.26
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 38.3,
          "priceAvg30d": 17.12
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 35.48,
          "priceAvg30d": 15.27
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 40.0,
          "priceAvg30d": 13.56
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 33.35,
          "priceAvg30d": 12.78
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.79,
          "priceAvg30d": 11.6
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 29.29,
          "priceAvg30d": 10.44
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 28.84,
          "priceAvg30d": 9.95
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 26.96,
          "priceAvg30d": 9.87
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.14,
          "priceAvg30d": 9.91
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.0,
          "priceAvg30d": 9.64
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 14.76,
          "priceAvg30d": 10.08
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.85,
          "priceAvg30d": 12.43
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.69,
          "priceAvg30d": 14.45
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 29.78,
          "priceAvg30d": 17.14
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.73,
          "priceAvg30d": 20.84
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 37.01,
          "priceAvg30d": 23.69
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 40.01,
          "priceAvg30d": 29.4
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.52,
          "priceAvg30d": 33.61
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 41.0,
          "priceAvg30d": 36.17
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.84,
          "priceAvg30d": 35.61
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.31,
          "priceAvg30d": 35.98
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.35,
          "priceAvg30d": 34.19
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.0,
          "priceAvg30d": 33.72
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.0,
          "priceAvg30d": 32.12
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.0,
          "priceAvg30d": 30.06
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.1,
          "priceAvg30d": 28.86
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.29,
          "priceAvg30d": 27.65
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.3,
          "priceAvg30d": 26.98
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.01,
          "priceAvg30d": 27.91
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 30.79,
          "priceAvg30d": 28.6
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 30.79,
          "priceAvg30d": 27.46
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.05,
          "priceAvg30d": 26.59
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.96,
          "priceAvg30d": 24.83
        }
      ],
      "avg": 32.32,
      "max": 41.0,
      "maxBlock": 34,
      "min": 14.76,
      "minBlock": 26,
      "spread3h": 14.6,
      "spreadLowAvg": 24.9,
      "spreadHighAvg": 39.51,
      "avg30d": 23.08,
      "spread30dAvg": 22.18,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 31.49,
          "priceAvg30d": 25.73
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.7,
          "priceAvg30d": 25.04
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 30.79,
          "priceAvg30d": 25.17
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.79,
          "priceAvg30d": 24.95
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 30.79,
          "priceAvg30d": 24.98
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.64,
          "priceAvg30d": 25.02
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.79,
          "priceAvg30d": 25.45
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.5,
          "priceAvg30d": 25.62
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.79,
          "priceAvg30d": 25.84
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.79,
          "priceAvg30d": 25.96
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.79,
          "priceAvg30d": 26.13
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.48,
          "priceAvg30d": 26.31
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 38.3,
          "priceAvg30d": 25.89
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.0,
          "priceAvg30d": 24.8
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 38.3,
          "priceAvg30d": 24.14
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 38.3,
          "priceAvg30d": 23.58
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 35.48,
          "priceAvg30d": 22.28
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 40.0,
          "priceAvg30d": 22.38
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 33.35,
          "priceAvg30d": 22.04
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.79,
          "priceAvg30d": 21.46
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 29.29,
          "priceAvg30d": 19.91
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 28.84,
          "priceAvg30d": 19.53
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.04,
          "priceAvg30d": 19.88
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 26.72,
          "priceAvg30d": 20.1
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 26.73,
          "priceAvg30d": 18.65
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 27.05,
          "priceAvg30d": 19.74
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.48,
          "priceAvg30d": 20.98
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.69,
          "priceAvg30d": 24.12
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 29.78,
          "priceAvg30d": 25.76
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.73,
          "priceAvg30d": 28.1
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 37.01,
          "priceAvg30d": 27.49
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 40.01,
          "priceAvg30d": 31.23
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.52,
          "priceAvg30d": 34.25
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 41.0,
          "priceAvg30d": 36.3
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.84,
          "priceAvg30d": 35.61
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.31,
          "priceAvg30d": 35.98
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.35,
          "priceAvg30d": 34.19
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.0,
          "priceAvg30d": 33.72
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.0,
          "priceAvg30d": 32.12
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.0,
          "priceAvg30d": 30.06
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.1,
          "priceAvg30d": 28.86
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.29,
          "priceAvg30d": 27.65
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.3,
          "priceAvg30d": 26.98
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.01,
          "priceAvg30d": 27.91
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 30.79,
          "priceAvg30d": 28.82
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 30.79,
          "priceAvg30d": 27.71
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.05,
          "priceAvg30d": 27.18
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.24,
          "priceAvg30d": 25.68
        }
      ],
      "avg": 32.98,
      "max": 41.0,
      "maxBlock": 34,
      "min": 26.72,
      "minBlock": 24,
      "spread3h": 11.77,
      "spreadLowAvg": 27.74,
      "spreadHighAvg": 39.51,
      "avg30d": 26.28,
      "spread30dAvg": 15.13,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.43,
          "priceAvg30d": 24.72
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.5,
          "priceAvg30d": 23.91
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.93,
          "priceAvg30d": 23.66
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.93,
          "priceAvg30d": 23.51
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.93,
          "priceAvg30d": 23.62
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 29.3,
          "priceAvg30d": 23.98
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.35,
          "priceAvg30d": 24.49
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.51,
          "priceAvg30d": 24.8
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.71,
          "priceAvg30d": 24.99
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.8,
          "priceAvg30d": 25.31
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.79,
          "priceAvg30d": 25.56
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.04,
          "priceAvg30d": 25.67
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.1,
          "priceAvg30d": 25.3
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.51,
          "priceAvg30d": 23.95
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.04,
          "priceAvg30d": 22.5
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.0,
          "priceAvg30d": 20.92
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 32.51,
          "priceAvg30d": 19.67
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 32.51,
          "priceAvg30d": 20.35
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.51,
          "priceAvg30d": 20.44
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.11,
          "priceAvg30d": 19.65
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 26.37,
          "priceAvg30d": 18.14
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 26.37,
          "priceAvg30d": 17.87
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.0,
          "priceAvg30d": 17.78
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.52,
          "priceAvg30d": 17.66
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 13.22,
          "priceAvg30d": 15.16
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.0,
          "priceAvg30d": 15.88
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 24.51,
          "priceAvg30d": 19.11
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.75,
          "priceAvg30d": 22.5
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 29.78,
          "priceAvg30d": 23.78
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.73,
          "priceAvg30d": 25.44
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 37.01,
          "priceAvg30d": 26.52
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 40.01,
          "priceAvg30d": 30.42
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.52,
          "priceAvg30d": 33.04
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.59,
          "priceAvg30d": 34.71
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.6,
          "priceAvg30d": 34.23
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.31,
          "priceAvg30d": 34.34
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.35,
          "priceAvg30d": 33.07
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.0,
          "priceAvg30d": 32.31
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.0,
          "priceAvg30d": 31.22
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.0,
          "priceAvg30d": 29.28
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.82,
          "priceAvg30d": 28.18
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.29,
          "priceAvg30d": 27.15
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.3,
          "priceAvg30d": 26.59
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.01,
          "priceAvg30d": 26.73
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 30.79,
          "priceAvg30d": 27.66
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 30.79,
          "priceAvg30d": 27.0
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.05,
          "priceAvg30d": 26.94
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.24,
          "priceAvg30d": 25.66
        }
      ],
      "avg": 30.74,
      "max": 40.6,
      "maxBlock": 35,
      "min": 13.22,
      "minBlock": 25,
      "spread3h": 15.94,
      "spreadLowAvg": 23.69,
      "spreadHighAvg": 39.63,
      "avg30d": 24.9,
      "spread30dAvg": 17.42,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.67,
          "priceAvg30d": 14.16
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.75,
          "priceAvg30d": 13.94
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.98,
          "priceAvg30d": 13.57
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.0,
          "priceAvg30d": 13.13
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.98,
          "priceAvg30d": 13.83
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.67,
          "priceAvg30d": 15.15
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.4,
          "priceAvg30d": 15.88
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.4,
          "priceAvg30d": 17.33
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.48,
          "priceAvg30d": 17.27
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.51,
          "priceAvg30d": 18.73
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.45,
          "priceAvg30d": 18.37
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.09,
          "priceAvg30d": 18.13
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.09,
          "priceAvg30d": 17.89
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.88,
          "priceAvg30d": 16.07
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 20.61,
          "priceAvg30d": 14.33
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.61,
          "priceAvg30d": 13.28
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.94,
          "priceAvg30d": 15.33
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 24.51,
          "priceAvg30d": 16.76
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.51,
          "priceAvg30d": 18.26
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.11,
          "priceAvg30d": 17.69
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.51,
          "priceAvg30d": 16.68
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.51,
          "priceAvg30d": 16.38
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.52,
          "priceAvg30d": 16.59
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.52,
          "priceAvg30d": 16.73
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 13.22,
          "priceAvg30d": 12.98
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.0,
          "priceAvg30d": 13.16
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 24.51,
          "priceAvg30d": 16.37
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.75,
          "priceAvg30d": 19.73
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 29.78,
          "priceAvg30d": 19.64
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.73,
          "priceAvg30d": 21.18
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 37.01,
          "priceAvg30d": 21.94
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.37,
          "priceAvg30d": 25.13
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.37,
          "priceAvg30d": 25.88
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.37,
          "priceAvg30d": 27.76
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.37,
          "priceAvg30d": 26.26
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.37,
          "priceAvg30d": 26.62
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.35,
          "priceAvg30d": 25.35
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.0,
          "priceAvg30d": 25.6
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.0,
          "priceAvg30d": 24.63
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.51,
          "priceAvg30d": 22.92
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.52,
          "priceAvg30d": 23.01
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.94,
          "priceAvg30d": 21.86
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.52,
          "priceAvg30d": 21.44
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 23.52,
          "priceAvg30d": 20.43
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.0,
          "priceAvg30d": 19.89
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.61,
          "priceAvg30d": 17.89
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.8,
          "priceAvg30d": 17.82
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 13.67,
          "priceAvg30d": 14.3
        }
      ],
      "avg": 24.4,
      "max": 38.37,
      "maxBlock": 32,
      "min": 13.22,
      "minBlock": 25,
      "spread3h": 12.64,
      "spreadLowAvg": 23.14,
      "spreadHighAvg": 35.77,
      "avg30d": 18.69,
      "spread30dAvg": 14.32,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.67,
          "priceAvg30d": 13.91
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.75,
          "priceAvg30d": 13.83
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.98,
          "priceAvg30d": 13.48
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.0,
          "priceAvg30d": 13.03
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.98,
          "priceAvg30d": 13.26
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.67,
          "priceAvg30d": 14.79
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.4,
          "priceAvg30d": 15.54
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.4,
          "priceAvg30d": 16.89
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.48,
          "priceAvg30d": 16.81
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.51,
          "priceAvg30d": 18.09
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.45,
          "priceAvg30d": 17.81
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.09,
          "priceAvg30d": 17.66
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.09,
          "priceAvg30d": 17.82
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.88,
          "priceAvg30d": 15.99
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 20.61,
          "priceAvg30d": 13.88
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.61,
          "priceAvg30d": 12.69
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.94,
          "priceAvg30d": 15.14
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 24.51,
          "priceAvg30d": 16.54
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.51,
          "priceAvg30d": 17.93
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.11,
          "priceAvg30d": 17.35
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.51,
          "priceAvg30d": 16.32
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.51,
          "priceAvg30d": 16.01
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.52,
          "priceAvg30d": 16.27
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.52,
          "priceAvg30d": 16.41
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 13.22,
          "priceAvg30d": 12.63
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.0,
          "priceAvg30d": 12.84
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 24.51,
          "priceAvg30d": 16.11
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.75,
          "priceAvg30d": 19.73
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 29.78,
          "priceAvg30d": 19.22
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.73,
          "priceAvg30d": 21.02
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 37.01,
          "priceAvg30d": 21.76
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.37,
          "priceAvg30d": 25.09
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.37,
          "priceAvg30d": 25.88
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.37,
          "priceAvg30d": 27.76
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.37,
          "priceAvg30d": 26.26
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.37,
          "priceAvg30d": 26.28
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.35,
          "priceAvg30d": 25.35
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.0,
          "priceAvg30d": 25.15
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.0,
          "priceAvg30d": 24.3
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.51,
          "priceAvg30d": 22.74
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.52,
          "priceAvg30d": 22.82
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.94,
          "priceAvg30d": 21.7
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.52,
          "priceAvg30d": 21.28
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 23.52,
          "priceAvg30d": 20.19
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.0,
          "priceAvg30d": 19.65
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.61,
          "priceAvg30d": 17.64
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.8,
          "priceAvg30d": 17.65
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 13.67,
          "priceAvg30d": 14.18
        }
      ],
      "avg": 24.4,
      "max": 38.37,
      "maxBlock": 32,
      "min": 13.22,
      "minBlock": 25,
      "spread3h": 12.64,
      "spreadLowAvg": 23.14,
      "spreadHighAvg": 35.77,
      "avg30d": 18.43,
      "spread30dAvg": 14.22,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.67,
          "priceAvg30d": 13.33
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.75,
          "priceAvg30d": 13.83
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.86,
          "priceAvg30d": 13.26
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.86,
          "priceAvg30d": 12.64
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.86,
          "priceAvg30d": 12.54
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.67,
          "priceAvg30d": 13.58
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.4,
          "priceAvg30d": 14.28
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.4,
          "priceAvg30d": 16.05
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.48,
          "priceAvg30d": 16.62
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.51,
          "priceAvg30d": 17.87
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.45,
          "priceAvg30d": 17.81
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.09,
          "priceAvg30d": 17.63
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.09,
          "priceAvg30d": 17.82
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.88,
          "priceAvg30d": 15.83
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.86,
          "priceAvg30d": 11.86
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.5,
          "priceAvg30d": 10.36
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.15,
          "priceAvg30d": 10.81
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.95,
          "priceAvg30d": 11.26
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.81,
          "priceAvg30d": 10.21
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.95,
          "priceAvg30d": 9.46
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.81,
          "priceAvg30d": 9.18
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.81,
          "priceAvg30d": 8.48
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.81,
          "priceAvg30d": 8.45
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.81,
          "priceAvg30d": 8.65
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.8,
          "priceAvg30d": 6.84
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.81,
          "priceAvg30d": 6.75
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.81,
          "priceAvg30d": 8.78
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.81,
          "priceAvg30d": 10.08
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.81,
          "priceAvg30d": 11.73
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.94,
          "priceAvg30d": 13.07
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.98,
          "priceAvg30d": 13.7
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.47,
          "priceAvg30d": 16.71
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.69,
          "priceAvg30d": 20.02
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 22.48,
          "priceAvg30d": 23.89
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 23.94
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 24.73
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.8,
          "priceAvg30d": 23.39
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.89,
          "priceAvg30d": 23.02
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.52,
          "priceAvg30d": 22.96
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.0,
          "priceAvg30d": 21.69
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.52,
          "priceAvg30d": 21.73
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.94,
          "priceAvg30d": 20.8
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.48,
          "priceAvg30d": 20.4
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.42,
          "priceAvg30d": 19.3
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.45,
          "priceAvg30d": 18.88
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.8,
          "priceAvg30d": 16.84
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.8,
          "priceAvg30d": 16.89
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 13.67,
          "priceAvg30d": 13.22
        }
      ],
      "avg": 16.44,
      "max": 30.8,
      "maxBlock": 37,
      "min": 8.8,
      "minBlock": 25,
      "spread3h": 16.84,
      "spreadLowAvg": 9.81,
      "spreadHighAvg": 26.65,
      "avg30d": 15.23,
      "spread30dAvg": 15.13,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.07,
          "priceAvg30d": 10.81
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.55,
          "priceAvg30d": 10.89
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.27,
          "priceAvg30d": 10.58
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.13,
          "priceAvg30d": 10.16
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.86,
          "priceAvg30d": 9.93
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.67,
          "priceAvg30d": 9.98
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 9.55,
          "priceAvg30d": 10.15
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.07,
          "priceAvg30d": 11.36
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 9.55,
          "priceAvg30d": 11.85
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.87,
          "priceAvg30d": 12.93
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.45,
          "priceAvg30d": 12.94
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.09,
          "priceAvg30d": 12.87
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 11.75,
          "priceAvg30d": 12.71
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.88,
          "priceAvg30d": 10.36
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.55,
          "priceAvg30d": 8.5
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.51,
          "priceAvg30d": 8.35
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.15,
          "priceAvg30d": 8.66
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.14,
          "priceAvg30d": 8.98
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.43,
          "priceAvg30d": 7.91
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 7.28
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.2
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.33
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 6.17
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.42
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.68
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.02,
          "priceAvg30d": 5.87
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 7.53,
          "priceAvg30d": 7.53
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.38,
          "priceAvg30d": 8.1
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.94,
          "priceAvg30d": 9.59
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.4,
          "priceAvg30d": 10.54
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.98,
          "priceAvg30d": 10.52
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.47,
          "priceAvg30d": 11.02
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.69,
          "priceAvg30d": 11.45
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 22.48,
          "priceAvg30d": 14.95
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 15.77
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 16.59
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.8,
          "priceAvg30d": 16.11
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.89,
          "priceAvg30d": 15.71
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.52,
          "priceAvg30d": 14.69
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.0,
          "priceAvg30d": 13.54
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.52,
          "priceAvg30d": 14.04
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.94,
          "priceAvg30d": 13.33
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.48,
          "priceAvg30d": 13.5
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 13.07,
          "priceAvg30d": 12.73
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.5,
          "priceAvg30d": 12.21
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.0,
          "priceAvg30d": 11.45
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.07,
          "priceAvg30d": 11.97
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 13.0,
          "priceAvg30d": 9.76
        }
      ],
      "avg": 13.13,
      "max": 30.8,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 22.02,
      "spreadLowAvg": 4.62,
      "spreadHighAvg": 26.65,
      "avg30d": 10.83,
      "spread30dAvg": 11.75,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.67,
          "priceAvg30d": 13.33
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.75,
          "priceAvg30d": 13.62
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.86,
          "priceAvg30d": 12.93
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.86,
          "priceAvg30d": 12.42
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.86,
          "priceAvg30d": 12.28
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.67,
          "priceAvg30d": 13.37
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.4,
          "priceAvg30d": 14.28
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.4,
          "priceAvg30d": 16.05
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.48,
          "priceAvg30d": 16.62
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.51,
          "priceAvg30d": 17.87
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.45,
          "priceAvg30d": 17.81
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.09,
          "priceAvg30d": 17.63
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.09,
          "priceAvg30d": 17.82
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.88,
          "priceAvg30d": 15.83
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.86,
          "priceAvg30d": 11.86
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.5,
          "priceAvg30d": 10.36
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.15,
          "priceAvg30d": 10.25
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.95,
          "priceAvg30d": 9.75
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.81,
          "priceAvg30d": 8.63
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.95,
          "priceAvg30d": 7.57
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.81,
          "priceAvg30d": 7.35
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.81,
          "priceAvg30d": 6.93
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.81,
          "priceAvg30d": 6.67
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.81,
          "priceAvg30d": 6.43
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.8,
          "priceAvg30d": 5.87
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.81,
          "priceAvg30d": 5.9
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.81,
          "priceAvg30d": 6.88
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.81,
          "priceAvg30d": 8.46
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.81,
          "priceAvg30d": 9.8
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.94,
          "priceAvg30d": 11.89
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.98,
          "priceAvg30d": 13.27
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.47,
          "priceAvg30d": 16.12
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.69,
          "priceAvg30d": 20.02
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 22.48,
          "priceAvg30d": 23.89
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 23.94
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 24.73
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.8,
          "priceAvg30d": 23.39
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.89,
          "priceAvg30d": 23.02
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.52,
          "priceAvg30d": 22.96
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.0,
          "priceAvg30d": 21.69
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.52,
          "priceAvg30d": 21.73
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.94,
          "priceAvg30d": 20.8
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.48,
          "priceAvg30d": 20.4
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.42,
          "priceAvg30d": 19.3
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.45,
          "priceAvg30d": 18.88
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.8,
          "priceAvg30d": 16.84
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.8,
          "priceAvg30d": 16.89
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 13.67,
          "priceAvg30d": 13.22
        }
      ],
      "avg": 16.44,
      "max": 30.8,
      "maxBlock": 37,
      "min": 8.8,
      "minBlock": 25,
      "spread3h": 16.84,
      "spreadLowAvg": 9.81,
      "spreadHighAvg": 26.65,
      "avg30d": 14.74,
      "spread30dAvg": 15.87,
      "historyDays": 30
    }
  }
};
