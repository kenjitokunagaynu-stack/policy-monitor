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
  "targetDate": "2026-11-05",
  "fetchedAt": "2026-11-05T13:14:55+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 25.0,
        "priceAvg30d": 24.82
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 22.61,
        "priceAvg30d": 23.85
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 20.9,
        "priceAvg30d": 23.39
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 20.76,
        "priceAvg30d": 23.16
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 20.76,
        "priceAvg30d": 23.31
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 22.61,
        "priceAvg30d": 23.9
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 26.33,
        "priceAvg30d": 24.47
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 26.98,
        "priceAvg30d": 25.18
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 27.35,
        "priceAvg30d": 25.48
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 27.57,
        "priceAvg30d": 25.86
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 27.96,
        "priceAvg30d": 26.12
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 28.09,
        "priceAvg30d": 26.22
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 28.6,
        "priceAvg30d": 26.13
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 30.0,
        "priceAvg30d": 25.28
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 30.5,
        "priceAvg30d": 22.74
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 31.5,
        "priceAvg30d": 20.01
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 35.01,
        "priceAvg30d": 18.88
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 35.19,
        "priceAvg30d": 18.11
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 36.3,
        "priceAvg30d": 16.23
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 35.97,
        "priceAvg30d": 15.21
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 32.75,
        "priceAvg30d": 14.2
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 32.47,
        "priceAvg30d": 13.7
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 32.2,
        "priceAvg30d": 13.32
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 32.2,
        "priceAvg30d": 13.25
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 30.4,
        "priceAvg30d": 11.19
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 30.29,
        "priceAvg30d": 11.8
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 35.0,
        "priceAvg30d": 15.56
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 35.63,
        "priceAvg30d": 18.3
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 36.04,
        "priceAvg30d": 19.53
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 35.63,
        "priceAvg30d": 23.02
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 36.99,
        "priceAvg30d": 25.05
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 37.59,
        "priceAvg30d": 28.85
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 37.6,
        "priceAvg30d": 32.7
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 36.04,
        "priceAvg30d": 34.7
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 35.9,
        "priceAvg30d": 33.95
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 34.66,
        "priceAvg30d": 33.86
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 34.88,
        "priceAvg30d": 32.19
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 33.52,
        "priceAvg30d": 31.44
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 33.13,
        "priceAvg30d": 30.42
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 32.39,
        "priceAvg30d": 28.57
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 32.59,
        "priceAvg30d": 27.9
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 32.01,
        "priceAvg30d": 27.12
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 30.95,
        "priceAvg30d": 26.64
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 29.11,
        "priceAvg30d": 26.53
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 28.36,
        "priceAvg30d": 26.81
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 27.74,
        "priceAvg30d": 26.05
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 27.42,
        "priceAvg30d": 25.8
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 25.39,
        "priceAvg30d": 24.24
      }
    ],
    "avg": 30.81,
    "max": 37.6,
    "maxBlock": 33,
    "min": 20.76,
    "minBlock": 4,
    "spread3h": 13.1,
    "spreadLowAvg": 23.04,
    "spreadHighAvg": 36.13,
    "avg30d": 23.65,
    "spread30dAvg": 19.15,
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
          "price": 28.6,
          "priceAvg30d": 21.4
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.76,
          "priceAvg30d": 18.73
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.6,
          "priceAvg30d": 19.14
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.08,
          "priceAvg30d": 19.88
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.35,
          "priceAvg30d": 20.7
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.57,
          "priceAvg30d": 22.42
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.76,
          "priceAvg30d": 23.67
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.86,
          "priceAvg30d": 24.64
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.41,
          "priceAvg30d": 25.16
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.47,
          "priceAvg30d": 25.08
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.6,
          "priceAvg30d": 27.09
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.11,
          "priceAvg30d": 28.05
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.0,
          "priceAvg30d": 24.69
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.5,
          "priceAvg30d": 22.23
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 31.92,
          "priceAvg30d": 18.99
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.89,
          "priceAvg30d": 15.74
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 36.69,
          "priceAvg30d": 14.55
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.17,
          "priceAvg30d": 12.23
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 27.44,
          "priceAvg30d": 11.56
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.96,
          "priceAvg30d": 10.53
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 26.73,
          "priceAvg30d": 9.82
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 26.52,
          "priceAvg30d": 8.73
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 26.67,
          "priceAvg30d": 9.23
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 26.49,
          "priceAvg30d": 9.45
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 25.66,
          "priceAvg30d": 7.68
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 25.73,
          "priceAvg30d": 7.41
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.41,
          "priceAvg30d": 9.46
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 40.64,
          "priceAvg30d": 11.92
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 40.64,
          "priceAvg30d": 15.4
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 37.3,
          "priceAvg30d": 18.95
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 39.59,
          "priceAvg30d": 21.73
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 40.64,
          "priceAvg30d": 26.94
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 39.84,
          "priceAvg30d": 34.11
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.04,
          "priceAvg30d": 36.34
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.04,
          "priceAvg30d": 34.29
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 31.13,
          "priceAvg30d": 34.2
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.0,
          "priceAvg30d": 32.46
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 33.45,
          "priceAvg30d": 32.69
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.41,
          "priceAvg30d": 33.45
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 33.41,
          "priceAvg30d": 32.36
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 38.5,
          "priceAvg30d": 31.64
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 35.63,
          "priceAvg30d": 29.46
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.51,
          "priceAvg30d": 28.1
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 31.56,
          "priceAvg30d": 27.98
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 30.86,
          "priceAvg30d": 27.84
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.78,
          "priceAvg30d": 26.22
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 29.14,
          "priceAvg30d": 25.96
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.0,
          "priceAvg30d": 23.56
        }
      ],
      "avg": 31.44,
      "max": 40.64,
      "maxBlock": 28,
      "min": 25.6,
      "minBlock": 3,
      "spread3h": 6.64,
      "spreadLowAvg": 27.75,
      "spreadHighAvg": 34.39,
      "avg30d": 21.96,
      "spread30dAvg": 24.34,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.6,
          "priceAvg30d": 26.03
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.76,
          "priceAvg30d": 25.66
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.6,
          "priceAvg30d": 25.17
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.08,
          "priceAvg30d": 25.0
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.35,
          "priceAvg30d": 25.47
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.57,
          "priceAvg30d": 25.82
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.76,
          "priceAvg30d": 26.56
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.86,
          "priceAvg30d": 26.58
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.41,
          "priceAvg30d": 26.91
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.47,
          "priceAvg30d": 27.0
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.6,
          "priceAvg30d": 27.36
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.11,
          "priceAvg30d": 27.81
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.0,
          "priceAvg30d": 27.57
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.5,
          "priceAvg30d": 26.09
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 31.92,
          "priceAvg30d": 22.45
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.89,
          "priceAvg30d": 19.53
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 36.99,
          "priceAvg30d": 18.16
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.19,
          "priceAvg30d": 16.33
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 40.0,
          "priceAvg30d": 15.56
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 40.64,
          "priceAvg30d": 14.68
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 37.3,
          "priceAvg30d": 13.35
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 37.3,
          "priceAvg30d": 12.96
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 37.02,
          "priceAvg30d": 12.54
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 37.03,
          "priceAvg30d": 12.58
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 36.3,
          "priceAvg30d": 11.43
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 35.63,
          "priceAvg30d": 11.5
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.41,
          "priceAvg30d": 14.67
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 40.64,
          "priceAvg30d": 16.96
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 40.64,
          "priceAvg30d": 20.33
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 37.3,
          "priceAvg30d": 23.53
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 39.59,
          "priceAvg30d": 26.2
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 40.64,
          "priceAvg30d": 31.13
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 39.84,
          "priceAvg30d": 35.24
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.04,
          "priceAvg30d": 37.66
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.04,
          "priceAvg30d": 36.87
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.63,
          "priceAvg30d": 36.78
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.0,
          "priceAvg30d": 34.75
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 33.45,
          "priceAvg30d": 34.45
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.41,
          "priceAvg30d": 33.45
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 33.41,
          "priceAvg30d": 31.84
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 38.5,
          "priceAvg30d": 30.52
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 35.63,
          "priceAvg30d": 29.33
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.51,
          "priceAvg30d": 28.84
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 31.56,
          "priceAvg30d": 29.52
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 30.86,
          "priceAvg30d": 29.76
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.78,
          "priceAvg30d": 28.22
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 29.14,
          "priceAvg30d": 27.58
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.47,
          "priceAvg30d": 25.52
        }
      ],
      "avg": 33.53,
      "max": 40.64,
      "maxBlock": 20,
      "min": 25.6,
      "minBlock": 3,
      "spread3h": 9.55,
      "spreadLowAvg": 27.75,
      "spreadHighAvg": 37.3,
      "avg30d": 24.86,
      "spread30dAvg": 22.08,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.6,
          "priceAvg30d": 27.64
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.76,
          "priceAvg30d": 27.39
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.49,
          "priceAvg30d": 27.43
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.35,
          "priceAvg30d": 27.17
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.35,
          "priceAvg30d": 27.23
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.57,
          "priceAvg30d": 27.24
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.76,
          "priceAvg30d": 27.44
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.86,
          "priceAvg30d": 27.44
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.41,
          "priceAvg30d": 27.65
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.47,
          "priceAvg30d": 27.69
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.6,
          "priceAvg30d": 27.97
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.11,
          "priceAvg30d": 28.43
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.0,
          "priceAvg30d": 28.44
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.5,
          "priceAvg30d": 27.61
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 31.92,
          "priceAvg30d": 27.08
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.89,
          "priceAvg30d": 26.66
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 36.99,
          "priceAvg30d": 25.7
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.19,
          "priceAvg30d": 25.44
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 40.0,
          "priceAvg30d": 24.52
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 40.64,
          "priceAvg30d": 23.65
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 37.3,
          "priceAvg30d": 22.19
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 37.3,
          "priceAvg30d": 21.82
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 37.02,
          "priceAvg30d": 21.89
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 37.03,
          "priceAvg30d": 22.39
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 36.3,
          "priceAvg30d": 21.73
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 35.63,
          "priceAvg30d": 22.78
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.41,
          "priceAvg30d": 24.38
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 40.64,
          "priceAvg30d": 26.67
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 40.64,
          "priceAvg30d": 28.52
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 37.3,
          "priceAvg30d": 30.5
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 39.59,
          "priceAvg30d": 30.63
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 40.64,
          "priceAvg30d": 33.73
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 39.84,
          "priceAvg30d": 36.58
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.04,
          "priceAvg30d": 38.42
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.04,
          "priceAvg30d": 37.55
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.63,
          "priceAvg30d": 37.55
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.0,
          "priceAvg30d": 35.46
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 33.45,
          "priceAvg30d": 35.25
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.41,
          "priceAvg30d": 34.02
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 33.41,
          "priceAvg30d": 32.5
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 38.5,
          "priceAvg30d": 31.09
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 35.63,
          "priceAvg30d": 29.76
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.51,
          "priceAvg30d": 29.24
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 31.56,
          "priceAvg30d": 30.02
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 30.86,
          "priceAvg30d": 31.08
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.78,
          "priceAvg30d": 29.63
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 29.14,
          "priceAvg30d": 28.62
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.47,
          "priceAvg30d": 27.17
        }
      ],
      "avg": 33.59,
      "max": 40.64,
      "maxBlock": 20,
      "min": 27.35,
      "minBlock": 4,
      "spread3h": 9.55,
      "spreadLowAvg": 27.75,
      "spreadHighAvg": 37.3,
      "avg30d": 28.56,
      "spread30dAvg": 14.09,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.6,
          "priceAvg30d": 26.72
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.63,
          "priceAvg30d": 26.29
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.16,
          "priceAvg30d": 25.73
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.7,
          "priceAvg30d": 25.66
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.7,
          "priceAvg30d": 26.13
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.7,
          "priceAvg30d": 26.52
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.26,
          "priceAvg30d": 26.84
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.44,
          "priceAvg30d": 27.04
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.53,
          "priceAvg30d": 27.21
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.5,
          "priceAvg30d": 27.39
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.83,
          "priceAvg30d": 27.63
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.81,
          "priceAvg30d": 27.93
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.54,
          "priceAvg30d": 27.75
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 31.82,
          "priceAvg30d": 26.91
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 31.98,
          "priceAvg30d": 25.06
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.89,
          "priceAvg30d": 22.96
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 36.99,
          "priceAvg30d": 22.07
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 37.32,
          "priceAvg30d": 22.51
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 37.3,
          "priceAvg30d": 21.96
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 37.6,
          "priceAvg30d": 21.12
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 37.3,
          "priceAvg30d": 19.27
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 37.3,
          "priceAvg30d": 18.93
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 37.02,
          "priceAvg30d": 18.57
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 37.03,
          "priceAvg30d": 18.55
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 36.3,
          "priceAvg30d": 16.14
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 35.98,
          "priceAvg30d": 16.86
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.28,
          "priceAvg30d": 20.17
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 36.98,
          "priceAvg30d": 23.41
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 37.32,
          "priceAvg30d": 25.22
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 37.3,
          "priceAvg30d": 27.08
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 39.59,
          "priceAvg30d": 28.54
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.1,
          "priceAvg30d": 32.64
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 41.12,
          "priceAvg30d": 35.07
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.29,
          "priceAvg30d": 36.16
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.62,
          "priceAvg30d": 36.01
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.59,
          "priceAvg30d": 36.03
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.31,
          "priceAvg30d": 34.57
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 37.28,
          "priceAvg30d": 33.83
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.02,
          "priceAvg30d": 33.27
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 37.05,
          "priceAvg30d": 31.57
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.11,
          "priceAvg30d": 29.78
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 35.63,
          "priceAvg30d": 28.83
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.99,
          "priceAvg30d": 28.35
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.98,
          "priceAvg30d": 28.26
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.7,
          "priceAvg30d": 29.12
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.5,
          "priceAvg30d": 28.48
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.52,
          "priceAvg30d": 28.31
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.09,
          "priceAvg30d": 27.27
        }
      ],
      "avg": 34.47,
      "max": 41.12,
      "maxBlock": 33,
      "min": 28.6,
      "minBlock": 1,
      "spread3h": 8.15,
      "spreadLowAvg": 30.26,
      "spreadHighAvg": 38.41,
      "avg30d": 26.7,
      "spread30dAvg": 17.81,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.49,
          "priceAvg30d": 15.38
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.86,
          "priceAvg30d": 15.17
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.86,
          "priceAvg30d": 14.54
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.86,
          "priceAvg30d": 13.76
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.86,
          "priceAvg30d": 14.94
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.71,
          "priceAvg30d": 16.19
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 17.35
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.86,
          "priceAvg30d": 18.77
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.28,
          "priceAvg30d": 18.58
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.12,
          "priceAvg30d": 20.06
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.29,
          "priceAvg30d": 20.27
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.96,
          "priceAvg30d": 19.36
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.12,
          "priceAvg30d": 18.61
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.0,
          "priceAvg30d": 17.68
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 17.77,
          "priceAvg30d": 17.51
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.76,
          "priceAvg30d": 15.73
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.0,
          "priceAvg30d": 17.85
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 20.76,
          "priceAvg30d": 18.93
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 22.13,
          "priceAvg30d": 18.89
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 22.13,
          "priceAvg30d": 19.16
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 21.95,
          "priceAvg30d": 17.64
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 20.76,
          "priceAvg30d": 17.3
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.95,
          "priceAvg30d": 17.63
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.76,
          "priceAvg30d": 17.75
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.07,
          "priceAvg30d": 14.03
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.34,
          "priceAvg30d": 14.44
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.51,
          "priceAvg30d": 18.43
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 35.0,
          "priceAvg30d": 21.19
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 37.32,
          "priceAvg30d": 22.28
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 37.3,
          "priceAvg30d": 23.58
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 38.67,
          "priceAvg30d": 24.75
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.67,
          "priceAvg30d": 27.76
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.67,
          "priceAvg30d": 28.66
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.0,
          "priceAvg30d": 30.54
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.08,
          "priceAvg30d": 28.61
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.08,
          "priceAvg30d": 29.06
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.62,
          "priceAvg30d": 27.59
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.46,
          "priceAvg30d": 27.65
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.0,
          "priceAvg30d": 27.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.71,
          "priceAvg30d": 25.06
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.15,
          "priceAvg30d": 25.13
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.76,
          "priceAvg30d": 23.69
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.58,
          "priceAvg30d": 22.94
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.0,
          "priceAvg30d": 22.58
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.76,
          "priceAvg30d": 21.93
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.29,
          "priceAvg30d": 19.66
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.76,
          "priceAvg30d": 19.44
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.13,
          "priceAvg30d": 15.14
        }
      ],
      "avg": 21.5,
      "max": 38.67,
      "maxBlock": 31,
      "min": 11.13,
      "minBlock": 48,
      "spread3h": 16.27,
      "spreadLowAvg": 19.06,
      "spreadHighAvg": 35.33,
      "avg30d": 20.42,
      "spread30dAvg": 15.04,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.49,
          "priceAvg30d": 15.14
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.86,
          "priceAvg30d": 15.17
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.86,
          "priceAvg30d": 14.54
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.86,
          "priceAvg30d": 13.76
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.86,
          "priceAvg30d": 14.51
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.71,
          "priceAvg30d": 15.92
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 17.09
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.86,
          "priceAvg30d": 18.41
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.28,
          "priceAvg30d": 18.19
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.12,
          "priceAvg30d": 19.42
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.29,
          "priceAvg30d": 19.14
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.96,
          "priceAvg30d": 18.53
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.12,
          "priceAvg30d": 18.61
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.0,
          "priceAvg30d": 17.68
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 17.77,
          "priceAvg30d": 17.09
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.76,
          "priceAvg30d": 15.4
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.0,
          "priceAvg30d": 17.75
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 20.76,
          "priceAvg30d": 18.93
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 22.13,
          "priceAvg30d": 18.89
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 22.13,
          "priceAvg30d": 19.16
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 21.95,
          "priceAvg30d": 17.6
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 20.76,
          "priceAvg30d": 17.25
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.95,
          "priceAvg30d": 17.57
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.76,
          "priceAvg30d": 17.7
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.07,
          "priceAvg30d": 14.03
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.34,
          "priceAvg30d": 14.44
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.51,
          "priceAvg30d": 18.43
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 35.0,
          "priceAvg30d": 21.19
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 37.32,
          "priceAvg30d": 21.96
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 37.3,
          "priceAvg30d": 23.58
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 38.67,
          "priceAvg30d": 24.73
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.67,
          "priceAvg30d": 27.73
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.67,
          "priceAvg30d": 28.66
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.0,
          "priceAvg30d": 30.54
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.08,
          "priceAvg30d": 28.61
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.08,
          "priceAvg30d": 28.72
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.62,
          "priceAvg30d": 27.59
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.46,
          "priceAvg30d": 27.21
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.0,
          "priceAvg30d": 26.74
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.71,
          "priceAvg30d": 24.88
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.15,
          "priceAvg30d": 24.94
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.76,
          "priceAvg30d": 23.54
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.58,
          "priceAvg30d": 22.78
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.0,
          "priceAvg30d": 22.33
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.76,
          "priceAvg30d": 21.69
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.29,
          "priceAvg30d": 19.41
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.76,
          "priceAvg30d": 19.27
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.13,
          "priceAvg30d": 15.01
        }
      ],
      "avg": 21.5,
      "max": 38.67,
      "maxBlock": 31,
      "min": 11.13,
      "minBlock": 48,
      "spread3h": 16.27,
      "spreadLowAvg": 19.06,
      "spreadHighAvg": 35.33,
      "avg30d": 20.24,
      "spread30dAvg": 14.87,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.49,
          "priceAvg30d": 14.56
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.86,
          "priceAvg30d": 15.17
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.86,
          "priceAvg30d": 14.12
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.86,
          "priceAvg30d": 13.3
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.86,
          "priceAvg30d": 13.62
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.71,
          "priceAvg30d": 14.85
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 15.65
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.86,
          "priceAvg30d": 17.32
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.28,
          "priceAvg30d": 18.06
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.12,
          "priceAvg30d": 19.2
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.29,
          "priceAvg30d": 19.12
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.96,
          "priceAvg30d": 18.52
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.12,
          "priceAvg30d": 18.54
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.0,
          "priceAvg30d": 17.58
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 17.77,
          "priceAvg30d": 13.59
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 17.74,
          "priceAvg30d": 11.91
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 19.17,
          "priceAvg30d": 12.04
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.28,
          "priceAvg30d": 11.67
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 16.27,
          "priceAvg30d": 10.39
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 16.26,
          "priceAvg30d": 9.57
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 13.67,
          "priceAvg30d": 8.32
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.86,
          "priceAvg30d": 7.86
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.47,
          "priceAvg30d": 7.65
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.47,
          "priceAvg30d": 7.92
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.07,
          "priceAvg30d": 6.63
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.34,
          "priceAvg30d": 6.63
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 15.71,
          "priceAvg30d": 8.02
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 19.77,
          "priceAvg30d": 8.67
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 20.93,
          "priceAvg30d": 10.59
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 27.9,
          "priceAvg30d": 11.82
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.5,
          "priceAvg30d": 13.61
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.0,
          "priceAvg30d": 16.45
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.67,
          "priceAvg30d": 20.61
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.0,
          "priceAvg30d": 24.69
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.08,
          "priceAvg30d": 24.56
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.08,
          "priceAvg30d": 25.1
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.62,
          "priceAvg30d": 23.9
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.46,
          "priceAvg30d": 23.28
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.0,
          "priceAvg30d": 23.19
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.71,
          "priceAvg30d": 22.12
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.15,
          "priceAvg30d": 22.38
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.76,
          "priceAvg30d": 21.73
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.58,
          "priceAvg30d": 21.16
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.73,
          "priceAvg30d": 20.44
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.12,
          "priceAvg30d": 19.92
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.76,
          "priceAvg30d": 17.99
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.75,
          "priceAvg30d": 17.93
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.13,
          "priceAvg30d": 13.98
        }
      ],
      "avg": 18.93,
      "max": 38.67,
      "maxBlock": 33,
      "min": 11.13,
      "minBlock": 48,
      "spread3h": 8.9,
      "spreadLowAvg": 17.86,
      "spreadHighAvg": 26.76,
      "avg30d": 15.75,
      "spread30dAvg": 14.6,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.49,
          "priceAvg30d": 11.63
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.86,
          "priceAvg30d": 11.19
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.86,
          "priceAvg30d": 10.7
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.86,
          "priceAvg30d": 10.38
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.86,
          "priceAvg30d": 10.43
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.71,
          "priceAvg30d": 10.53
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 10.79
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.86,
          "priceAvg30d": 12.65
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.28,
          "priceAvg30d": 13.34
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.12,
          "priceAvg30d": 14.4
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.29,
          "priceAvg30d": 14.88
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.96,
          "priceAvg30d": 14.5
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.12,
          "priceAvg30d": 14.18
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.0,
          "priceAvg30d": 12.45
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 17.77,
          "priceAvg30d": 9.88
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 17.74,
          "priceAvg30d": 9.76
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 19.17,
          "priceAvg30d": 10.18
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.28,
          "priceAvg30d": 9.79
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 16.27,
          "priceAvg30d": 8.48
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 16.26,
          "priceAvg30d": 7.55
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 13.67,
          "priceAvg30d": 6.29
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.86,
          "priceAvg30d": 5.32
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.47,
          "priceAvg30d": 5.12
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.47,
          "priceAvg30d": 5.35
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.07,
          "priceAvg30d": 4.39
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.34,
          "priceAvg30d": 4.68
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 15.71,
          "priceAvg30d": 6.56
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 19.77,
          "priceAvg30d": 6.85
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 20.93,
          "priceAvg30d": 8.56
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 27.9,
          "priceAvg30d": 9.54
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.5,
          "priceAvg30d": 9.94
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.0,
          "priceAvg30d": 11.06
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.67,
          "priceAvg30d": 12.88
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.0,
          "priceAvg30d": 17.2
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.08,
          "priceAvg30d": 18.58
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.08,
          "priceAvg30d": 18.96
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.62,
          "priceAvg30d": 18.2
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.46,
          "priceAvg30d": 17.74
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.0,
          "priceAvg30d": 16.74
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.71,
          "priceAvg30d": 15.74
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.15,
          "priceAvg30d": 16.07
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.76,
          "priceAvg30d": 15.14
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.58,
          "priceAvg30d": 15.65
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.73,
          "priceAvg30d": 14.31
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.47,
          "priceAvg30d": 13.41
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.07,
          "priceAvg30d": 12.33
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 12.07,
          "priceAvg30d": 12.86
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.42,
          "priceAvg30d": 10.56
        }
      ],
      "avg": 18.52,
      "max": 38.67,
      "maxBlock": 33,
      "min": 8.42,
      "minBlock": 48,
      "spread3h": 15.12,
      "spreadLowAvg": 11.65,
      "spreadHighAvg": 26.76,
      "avg30d": 11.62,
      "spread30dAvg": 12.85,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.49,
          "priceAvg30d": 14.56
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.86,
          "priceAvg30d": 14.73
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.86,
          "priceAvg30d": 13.65
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.86,
          "priceAvg30d": 13.07
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.86,
          "priceAvg30d": 13.32
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.71,
          "priceAvg30d": 14.62
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 15.58
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.86,
          "priceAvg30d": 17.28
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.28,
          "priceAvg30d": 18.02
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.12,
          "priceAvg30d": 19.06
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.29,
          "priceAvg30d": 18.96
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.96,
          "priceAvg30d": 18.42
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.12,
          "priceAvg30d": 18.52
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.0,
          "priceAvg30d": 17.57
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 17.77,
          "priceAvg30d": 13.51
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 17.74,
          "priceAvg30d": 11.91
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 19.17,
          "priceAvg30d": 11.65
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.28,
          "priceAvg30d": 10.56
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 16.27,
          "priceAvg30d": 8.79
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 16.26,
          "priceAvg30d": 7.74
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 13.67,
          "priceAvg30d": 6.9
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.86,
          "priceAvg30d": 6.49
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.47,
          "priceAvg30d": 6.26
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.47,
          "priceAvg30d": 6.08
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.07,
          "priceAvg30d": 5.37
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.34,
          "priceAvg30d": 5.49
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 15.71,
          "priceAvg30d": 6.33
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 19.77,
          "priceAvg30d": 7.63
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 20.93,
          "priceAvg30d": 9.22
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 27.9,
          "priceAvg30d": 11.23
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.5,
          "priceAvg30d": 13.61
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.0,
          "priceAvg30d": 16.36
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.67,
          "priceAvg30d": 20.61
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.0,
          "priceAvg30d": 24.69
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.08,
          "priceAvg30d": 24.56
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.08,
          "priceAvg30d": 25.1
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.62,
          "priceAvg30d": 23.9
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.46,
          "priceAvg30d": 23.28
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.0,
          "priceAvg30d": 23.19
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.71,
          "priceAvg30d": 22.12
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.15,
          "priceAvg30d": 22.38
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.76,
          "priceAvg30d": 21.73
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.58,
          "priceAvg30d": 21.16
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.73,
          "priceAvg30d": 20.44
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.12,
          "priceAvg30d": 19.92
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.76,
          "priceAvg30d": 17.99
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.75,
          "priceAvg30d": 17.93
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.13,
          "priceAvg30d": 13.98
        }
      ],
      "avg": 18.93,
      "max": 38.67,
      "maxBlock": 33,
      "min": 11.13,
      "minBlock": 48,
      "spread3h": 8.9,
      "spreadLowAvg": 17.86,
      "spreadHighAvg": 26.76,
      "avg30d": 15.32,
      "spread30dAvg": 15.72,
      "historyDays": 30
    }
  }
};
