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
  "targetDate": "2026-11-14",
  "fetchedAt": "2026-11-14T13:03:35+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 28.23,
        "priceAvg30d": 25.78
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 27.87,
        "priceAvg30d": 24.75
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 27.84,
        "priceAvg30d": 24.0
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 27.76,
        "priceAvg30d": 23.92
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 27.91,
        "priceAvg30d": 24.15
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 28.95,
        "priceAvg30d": 24.92
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 29.86,
        "priceAvg30d": 25.92
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 30.0,
        "priceAvg30d": 26.77
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 30.29,
        "priceAvg30d": 27.17
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 30.24,
        "priceAvg30d": 27.52
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 30.23,
        "priceAvg30d": 27.81
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 29.86,
        "priceAvg30d": 28.08
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 30.0,
        "priceAvg30d": 28.35
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 29.87,
        "priceAvg30d": 28.13
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 29.5,
        "priceAvg30d": 26.15
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 27.71,
        "priceAvg30d": 23.74
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 25.0,
        "priceAvg30d": 22.52
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 22.45,
        "priceAvg30d": 21.8
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 21.73,
        "priceAvg30d": 19.85
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 15.71,
        "priceAvg30d": 17.73
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 13.62,
        "priceAvg30d": 16.57
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 13.01,
        "priceAvg30d": 15.69
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 12.32,
        "priceAvg30d": 15.24
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 12.82,
        "priceAvg30d": 15.16
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 13.32,
        "priceAvg30d": 13.25
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 13.98,
        "priceAvg30d": 13.78
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 20.0,
        "priceAvg30d": 17.55
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 23.44,
        "priceAvg30d": 20.24
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 25.14,
        "priceAvg30d": 22.0
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 27.17,
        "priceAvg30d": 25.39
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 28.29,
        "priceAvg30d": 27.7
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 28.71,
        "priceAvg30d": 31.07
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 30.0,
        "priceAvg30d": 34.78
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 30.27,
        "priceAvg30d": 36.13
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 30.0,
        "priceAvg30d": 35.65
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 30.0,
        "priceAvg30d": 35.21
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 28.6,
        "priceAvg30d": 33.91
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 28.6,
        "priceAvg30d": 33.32
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 28.29,
        "priceAvg30d": 32.49
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 28.29,
        "priceAvg30d": 31.06
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 29.5,
        "priceAvg30d": 30.41
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 30.13,
        "priceAvg30d": 29.8
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 29.74,
        "priceAvg30d": 29.38
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 28.41,
        "priceAvg30d": 28.72
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 28.41,
        "priceAvg30d": 28.98
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 27.71,
        "priceAvg30d": 28.07
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 27.47,
        "priceAvg30d": 27.7
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 25.42,
        "priceAvg30d": 25.66
      }
    ],
    "avg": 25.91,
    "max": 30.29,
    "maxBlock": 9,
    "min": 12.32,
    "minBlock": 23,
    "spread3h": 16.11,
    "spreadLowAvg": 13.74,
    "spreadHighAvg": 29.86,
    "avg30d": 25.71,
    "spread30dAvg": 20.08,
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
          "price": 28.84,
          "priceAvg30d": 22.82
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.16,
          "priceAvg30d": 20.82
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.97,
          "priceAvg30d": 20.78
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.69,
          "priceAvg30d": 21.49
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.9,
          "priceAvg30d": 22.23
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.99,
          "priceAvg30d": 22.98
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.02,
          "priceAvg30d": 23.61
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.31,
          "priceAvg30d": 24.93
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.48,
          "priceAvg30d": 25.88
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.64,
          "priceAvg30d": 25.64
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.23,
          "priceAvg30d": 27.31
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.24,
          "priceAvg30d": 28.18
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.05,
          "priceAvg30d": 26.17
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 31.05,
          "priceAvg30d": 24.65
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 27.32,
          "priceAvg30d": 22.15
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.1,
          "priceAvg30d": 19.94
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.38,
          "priceAvg30d": 18.61
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.38,
          "priceAvg30d": 15.98
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.5,
          "priceAvg30d": 15.29
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.82,
          "priceAvg30d": 13.31
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.4,
          "priceAvg30d": 12.35
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.4,
          "priceAvg30d": 10.94
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.82,
          "priceAvg30d": 11.53
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.4,
          "priceAvg30d": 11.56
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.4,
          "priceAvg30d": 9.61
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.34,
          "priceAvg30d": 9.63
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.82,
          "priceAvg30d": 12.56
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.4,
          "priceAvg30d": 16.91
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.73,
          "priceAvg30d": 19.91
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 22.45,
          "priceAvg30d": 23.3
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.28,
          "priceAvg30d": 25.26
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.2,
          "priceAvg30d": 29.59
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.03,
          "priceAvg30d": 34.75
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.21,
          "priceAvg30d": 34.96
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.03,
          "priceAvg30d": 33.69
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 32.7
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 28.6,
          "priceAvg30d": 32.46
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.6,
          "priceAvg30d": 32.6
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.6,
          "priceAvg30d": 32.72
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.6,
          "priceAvg30d": 31.34
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.53,
          "priceAvg30d": 31.45
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.03,
          "priceAvg30d": 29.61
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.13,
          "priceAvg30d": 28.49
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.63,
          "priceAvg30d": 27.39
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.89,
          "priceAvg30d": 27.47
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.9,
          "priceAvg30d": 25.87
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.71,
          "priceAvg30d": 25.37
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.0,
          "priceAvg30d": 23.53
        }
      ],
      "avg": 23.69,
      "max": 31.21,
      "maxBlock": 34,
      "min": 9.82,
      "minBlock": 20,
      "spread3h": 18.54,
      "spreadLowAvg": 10.81,
      "spreadHighAvg": 29.36,
      "avg30d": 23.34,
      "spread30dAvg": 21.4,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.84,
          "priceAvg30d": 26.32
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.16,
          "priceAvg30d": 26.03
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.97,
          "priceAvg30d": 25.5
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.69,
          "priceAvg30d": 25.34
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.76,
          "priceAvg30d": 25.83
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.91,
          "priceAvg30d": 26.21
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.91,
          "priceAvg30d": 26.89
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.31,
          "priceAvg30d": 26.88
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.48,
          "priceAvg30d": 27.31
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.64,
          "priceAvg30d": 27.41
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.23,
          "priceAvg30d": 27.89
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.24,
          "priceAvg30d": 28.25
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.05,
          "priceAvg30d": 28.56
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 31.05,
          "priceAvg30d": 27.64
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 26.89,
          "priceAvg30d": 24.85
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.38,
          "priceAvg30d": 22.51
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.38,
          "priceAvg30d": 21.25
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.38,
          "priceAvg30d": 19.73
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.18,
          "priceAvg30d": 18.8
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 18.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 16.67
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 1.0,
          "priceAvg30d": 16.08
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 1.0,
          "priceAvg30d": 15.5
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 1.0,
          "priceAvg30d": 15.53
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.01,
          "priceAvg30d": 14.19
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.0,
          "priceAvg30d": 14.52
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.18,
          "priceAvg30d": 17.89
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.36,
          "priceAvg30d": 20.26
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.73,
          "priceAvg30d": 22.84
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 22.45,
          "priceAvg30d": 26.02
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.28,
          "priceAvg30d": 28.34
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 29.17,
          "priceAvg30d": 32.72
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.16,
          "priceAvg30d": 36.3
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.21,
          "priceAvg30d": 37.9
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 31.13,
          "priceAvg30d": 37.31
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.08,
          "priceAvg30d": 36.85
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 28.6,
          "priceAvg30d": 35.69
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.6,
          "priceAvg30d": 35.43
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.6,
          "priceAvg30d": 34.95
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.6,
          "priceAvg30d": 33.35
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.53,
          "priceAvg30d": 32.99
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.03,
          "priceAvg30d": 31.61
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.13,
          "priceAvg30d": 31.31
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.63,
          "priceAvg30d": 30.64
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.89,
          "priceAvg30d": 30.82
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.9,
          "priceAvg30d": 28.68
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.71,
          "priceAvg30d": 27.84
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.0,
          "priceAvg30d": 25.58
        }
      ],
      "avg": 22.09,
      "max": 31.21,
      "maxBlock": 34,
      "min": 1.0,
      "minBlock": 22,
      "spread3h": 26.54,
      "spreadLowAvg": 2.87,
      "spreadHighAvg": 29.4,
      "avg30d": 26.44,
      "spread30dAvg": 21.43,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.84,
          "priceAvg30d": 29.22
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.74,
          "priceAvg30d": 29.02
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.97,
          "priceAvg30d": 29.02
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.69,
          "priceAvg30d": 28.58
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.76,
          "priceAvg30d": 28.8
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.91,
          "priceAvg30d": 28.83
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.91,
          "priceAvg30d": 28.95
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.31,
          "priceAvg30d": 28.93
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.48,
          "priceAvg30d": 29.21
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.64,
          "priceAvg30d": 29.27
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.23,
          "priceAvg30d": 29.53
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.24,
          "priceAvg30d": 30.12
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.05,
          "priceAvg30d": 30.69
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 31.05,
          "priceAvg30d": 30.42
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.0,
          "priceAvg30d": 30.18
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.69,
          "priceAvg30d": 29.66
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.69,
          "priceAvg30d": 28.32
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.52,
          "priceAvg30d": 28.85
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.58,
          "priceAvg30d": 28.07
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.44,
          "priceAvg30d": 26.57
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 21.73,
          "priceAvg30d": 25.38
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 21.73,
          "priceAvg30d": 24.47
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.73,
          "priceAvg30d": 24.09
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 19.9,
          "priceAvg30d": 24.37
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 21.73,
          "priceAvg30d": 23.57
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 21.73,
          "priceAvg30d": 24.41
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.44,
          "priceAvg30d": 26.92
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 26.69,
          "priceAvg30d": 28.94
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 26.69,
          "priceAvg30d": 30.57
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 27.28,
          "priceAvg30d": 32.84
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 28.02,
          "priceAvg30d": 33.38
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 29.17,
          "priceAvg30d": 36.42
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.16,
          "priceAvg30d": 38.2
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.21,
          "priceAvg30d": 39.28
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 31.13,
          "priceAvg30d": 38.91
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.08,
          "priceAvg30d": 38.47
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 28.6,
          "priceAvg30d": 36.92
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.6,
          "priceAvg30d": 36.98
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.6,
          "priceAvg30d": 36.28
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.6,
          "priceAvg30d": 34.89
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.53,
          "priceAvg30d": 33.89
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.13,
          "priceAvg30d": 32.73
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.13,
          "priceAvg30d": 32.4
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 29.5,
          "priceAvg30d": 32.11
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.5,
          "priceAvg30d": 33.7
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.56,
          "priceAvg30d": 31.85
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.04,
          "priceAvg30d": 30.54
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 27.5,
          "priceAvg30d": 29.18
        }
      ],
      "avg": 27.59,
      "max": 31.21,
      "maxBlock": 34,
      "min": 19.9,
      "minBlock": 24,
      "spread3h": 7.51,
      "spreadLowAvg": 22.02,
      "spreadHighAvg": 29.53,
      "avg30d": 30.71,
      "spread30dAvg": 14.31,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 31.46,
          "priceAvg30d": 28.45
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.09,
          "priceAvg30d": 28.25
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.11,
          "priceAvg30d": 27.72
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 31.48,
          "priceAvg30d": 27.6
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.52,
          "priceAvg30d": 28.12
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.6,
          "priceAvg30d": 28.5
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 31.8,
          "priceAvg30d": 28.8
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.8,
          "priceAvg30d": 29.11
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.79,
          "priceAvg30d": 29.31
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.6,
          "priceAvg30d": 29.41
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.47,
          "priceAvg30d": 29.68
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.1,
          "priceAvg30d": 29.96
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.1,
          "priceAvg30d": 30.12
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 31.05,
          "priceAvg30d": 29.9
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.46,
          "priceAvg30d": 28.36
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 29.86,
          "priceAvg30d": 26.54
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.69,
          "priceAvg30d": 25.72
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.52,
          "priceAvg30d": 26.16
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.58,
          "priceAvg30d": 25.1
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.44,
          "priceAvg30d": 23.35
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 21.73,
          "priceAvg30d": 21.88
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 21.73,
          "priceAvg30d": 21.49
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.73,
          "priceAvg30d": 21.19
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 19.9,
          "priceAvg30d": 21.11
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 21.73,
          "priceAvg30d": 18.37
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 21.73,
          "priceAvg30d": 19.26
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.44,
          "priceAvg30d": 23.06
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 26.69,
          "priceAvg30d": 26.07
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 26.69,
          "priceAvg30d": 27.85
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 28.28,
          "priceAvg30d": 29.5
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 28.02,
          "priceAvg30d": 31.1
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 29.17,
          "priceAvg30d": 35.53
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.16,
          "priceAvg30d": 36.32
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.21,
          "priceAvg30d": 36.49
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 31.13,
          "priceAvg30d": 36.94
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.08,
          "priceAvg30d": 36.73
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 28.6,
          "priceAvg30d": 35.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.6,
          "priceAvg30d": 35.37
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.6,
          "priceAvg30d": 35.02
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.6,
          "priceAvg30d": 33.48
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.53,
          "priceAvg30d": 32.27
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.98,
          "priceAvg30d": 31.61
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 31.66,
          "priceAvg30d": 31.11
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 29.9,
          "priceAvg30d": 30.79
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.5,
          "priceAvg30d": 31.47
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.56,
          "priceAvg30d": 30.91
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.48,
          "priceAvg30d": 30.59
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.26,
          "priceAvg30d": 29.65
        }
      ],
      "avg": 28.46,
      "max": 31.98,
      "maxBlock": 42,
      "min": 19.9,
      "minBlock": 24,
      "spread3h": 7.62,
      "spreadLowAvg": 22.02,
      "spreadHighAvg": 29.63,
      "avg30d": 28.98,
      "spread30dAvg": 17.14,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.71,
          "priceAvg30d": 16.02
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 17.89,
          "priceAvg30d": 15.98
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.59,
          "priceAvg30d": 15.38
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.59,
          "priceAvg30d": 14.77
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.91,
          "priceAvg30d": 16.35
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.42,
          "priceAvg30d": 18.51
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.53,
          "priceAvg30d": 20.2
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.53,
          "priceAvg30d": 21.37
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.0,
          "priceAvg30d": 21.39
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.0,
          "priceAvg30d": 23.14
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.13,
          "priceAvg30d": 23.8
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.18,
          "priceAvg30d": 23.03
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.79,
          "priceAvg30d": 21.98
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.42,
          "priceAvg30d": 22.47
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 27.27,
          "priceAvg30d": 22.05
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.63,
          "priceAvg30d": 20.67
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.74,
          "priceAvg30d": 20.72
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.52,
          "priceAvg30d": 21.62
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.58,
          "priceAvg30d": 21.42
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 22.91,
          "priceAvg30d": 21.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 20.0,
          "priceAvg30d": 19.78
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 15.57,
          "priceAvg30d": 19.12
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 15.71,
          "priceAvg30d": 19.72
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 15.71,
          "priceAvg30d": 19.33
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.71,
          "priceAvg30d": 14.94
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 21.73,
          "priceAvg30d": 15.73
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.44,
          "priceAvg30d": 21.14
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 26.69,
          "priceAvg30d": 23.98
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 26.69,
          "priceAvg30d": 25.27
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 28.28,
          "priceAvg30d": 26.96
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 28.02,
          "priceAvg30d": 27.68
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 29.17,
          "priceAvg30d": 30.88
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 26.68,
          "priceAvg30d": 31.34
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.4,
          "priceAvg30d": 33.39
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 32.47
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 32.77
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 28.6,
          "priceAvg30d": 30.63
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.9,
          "priceAvg30d": 30.42
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.42,
          "priceAvg30d": 30.2
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.53,
          "priceAvg30d": 27.68
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.53,
          "priceAvg30d": 27.38
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.5,
          "priceAvg30d": 25.73
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.42,
          "priceAvg30d": 25.25
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 23.0,
          "priceAvg30d": 24.04
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.0,
          "priceAvg30d": 24.3
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.59,
          "priceAvg30d": 22.13
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 22.59,
          "priceAvg30d": 21.72
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.0,
          "priceAvg30d": 16.77
        }
      ],
      "avg": 24.48,
      "max": 30.0,
      "maxBlock": 9,
      "min": 14.0,
      "minBlock": 48,
      "spread3h": 7.32,
      "spreadLowAvg": 19.64,
      "spreadHighAvg": 26.96,
      "avg30d": 22.97,
      "spread30dAvg": 17.4,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.71,
          "priceAvg30d": 15.77
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 17.89,
          "priceAvg30d": 15.98
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.59,
          "priceAvg30d": 15.38
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.59,
          "priceAvg30d": 14.77
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.91,
          "priceAvg30d": 15.26
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.42,
          "priceAvg30d": 17.69
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.53,
          "priceAvg30d": 18.94
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.53,
          "priceAvg30d": 20.24
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.0,
          "priceAvg30d": 20.21
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.0,
          "priceAvg30d": 21.26
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.13,
          "priceAvg30d": 21.28
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.18,
          "priceAvg30d": 20.57
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.79,
          "priceAvg30d": 20.91
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.42,
          "priceAvg30d": 21.72
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 27.27,
          "priceAvg30d": 21.53
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.63,
          "priceAvg30d": 20.17
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.74,
          "priceAvg30d": 20.53
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.52,
          "priceAvg30d": 21.62
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.58,
          "priceAvg30d": 21.42
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 22.91,
          "priceAvg30d": 21.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 20.0,
          "priceAvg30d": 19.78
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 15.57,
          "priceAvg30d": 19.12
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 15.71,
          "priceAvg30d": 19.72
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 15.71,
          "priceAvg30d": 19.33
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.71,
          "priceAvg30d": 14.85
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 21.73,
          "priceAvg30d": 15.64
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.44,
          "priceAvg30d": 21.14
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 26.69,
          "priceAvg30d": 23.98
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 26.69,
          "priceAvg30d": 25.0
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 28.28,
          "priceAvg30d": 26.19
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 28.02,
          "priceAvg30d": 27.61
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 29.17,
          "priceAvg30d": 30.84
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 26.68,
          "priceAvg30d": 31.34
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.4,
          "priceAvg30d": 33.39
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 31.97
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 31.88
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 28.6,
          "priceAvg30d": 30.61
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.9,
          "priceAvg30d": 29.97
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.42,
          "priceAvg30d": 29.86
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.53,
          "priceAvg30d": 27.5
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.53,
          "priceAvg30d": 27.12
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.5,
          "priceAvg30d": 25.23
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.42,
          "priceAvg30d": 24.82
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 23.0,
          "priceAvg30d": 23.79
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.0,
          "priceAvg30d": 23.36
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.59,
          "priceAvg30d": 21.52
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 22.59,
          "priceAvg30d": 21.22
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.0,
          "priceAvg30d": 16.64
        }
      ],
      "avg": 24.48,
      "max": 30.0,
      "maxBlock": 9,
      "min": 14.0,
      "minBlock": 48,
      "spread3h": 7.32,
      "spreadLowAvg": 19.64,
      "spreadHighAvg": 26.96,
      "avg30d": 22.49,
      "spread30dAvg": 16.97,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.71,
          "priceAvg30d": 15.2
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 17.89,
          "priceAvg30d": 15.9
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.59,
          "priceAvg30d": 14.81
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.59,
          "priceAvg30d": 14.17
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.91,
          "priceAvg30d": 14.83
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.42,
          "priceAvg30d": 16.53
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.53,
          "priceAvg30d": 17.93
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.53,
          "priceAvg30d": 19.44
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.0,
          "priceAvg30d": 20.12
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.0,
          "priceAvg30d": 21.21
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.13,
          "priceAvg30d": 21.2
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.18,
          "priceAvg30d": 20.56
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.79,
          "priceAvg30d": 20.8
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.42,
          "priceAvg30d": 21.58
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 27.27,
          "priceAvg30d": 17.73
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.63,
          "priceAvg30d": 15.21
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.74,
          "priceAvg30d": 14.59
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.52,
          "priceAvg30d": 12.84
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.58,
          "priceAvg30d": 11.02
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 18.0,
          "priceAvg30d": 9.94
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 19.9,
          "priceAvg30d": 8.45
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 15.57,
          "priceAvg30d": 8.28
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 15.71,
          "priceAvg30d": 8.22
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 15.71,
          "priceAvg30d": 8.35
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.71,
          "priceAvg30d": 7.01
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.0,
          "priceAvg30d": 7.1
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 16.09,
          "priceAvg30d": 8.6
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.65,
          "priceAvg30d": 9.49
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.74,
          "priceAvg30d": 11.27
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.5,
          "priceAvg30d": 12.63
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 26.3,
          "priceAvg30d": 14.95
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 18.5,
          "priceAvg30d": 18.41
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 26.68,
          "priceAvg30d": 23.18
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.4,
          "priceAvg30d": 27.69
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 27.37
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 27.8
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 28.6,
          "priceAvg30d": 26.76
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.9,
          "priceAvg30d": 25.81
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.42,
          "priceAvg30d": 25.38
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.53,
          "priceAvg30d": 24.3
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.53,
          "priceAvg30d": 24.26
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.5,
          "priceAvg30d": 23.19
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.42,
          "priceAvg30d": 22.82
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 23.0,
          "priceAvg30d": 21.82
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.0,
          "priceAvg30d": 21.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.59,
          "priceAvg30d": 19.16
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 22.59,
          "priceAvg30d": 19.08
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.0,
          "priceAvg30d": 15.6
        }
      ],
      "avg": 23.75,
      "max": 30.0,
      "maxBlock": 9,
      "min": 14.0,
      "minBlock": 48,
      "spread3h": 7.32,
      "spreadLowAvg": 19.64,
      "spreadHighAvg": 26.96,
      "avg30d": 17.37,
      "spread30dAvg": 16.41,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.71,
          "priceAvg30d": 12.1
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 17.89,
          "priceAvg30d": 11.53
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.59,
          "priceAvg30d": 11.03
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.59,
          "priceAvg30d": 10.9
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.91,
          "priceAvg30d": 11.12
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.42,
          "priceAvg30d": 11.72
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.53,
          "priceAvg30d": 12.32
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.53,
          "priceAvg30d": 14.64
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.0,
          "priceAvg30d": 15.4
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.0,
          "priceAvg30d": 16.41
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.13,
          "priceAvg30d": 16.96
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.18,
          "priceAvg30d": 16.47
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.79,
          "priceAvg30d": 15.8
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.42,
          "priceAvg30d": 15.14
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 27.27,
          "priceAvg30d": 13.15
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.63,
          "priceAvg30d": 12.74
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.74,
          "priceAvg30d": 12.64
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.52,
          "priceAvg30d": 10.94
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.58,
          "priceAvg30d": 9.16
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 18.0,
          "priceAvg30d": 8.01
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 19.9,
          "priceAvg30d": 6.46
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 15.57,
          "priceAvg30d": 5.61
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 15.71,
          "priceAvg30d": 5.83
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 14.27,
          "priceAvg30d": 5.75
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 13.47,
          "priceAvg30d": 4.88
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.0,
          "priceAvg30d": 5.15
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 16.09,
          "priceAvg30d": 6.82
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.65,
          "priceAvg30d": 7.59
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.74,
          "priceAvg30d": 8.96
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.5,
          "priceAvg30d": 10.11
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 26.3,
          "priceAvg30d": 11.22
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 18.5,
          "priceAvg30d": 12.67
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 26.68,
          "priceAvg30d": 15.36
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.4,
          "priceAvg30d": 20.04
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 21.14
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 21.66
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 28.6,
          "priceAvg30d": 20.74
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.9,
          "priceAvg30d": 19.97
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.42,
          "priceAvg30d": 18.48
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.53,
          "priceAvg30d": 17.53
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.53,
          "priceAvg30d": 17.77
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.5,
          "priceAvg30d": 15.72
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.42,
          "priceAvg30d": 17.11
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 23.0,
          "priceAvg30d": 15.52
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.0,
          "priceAvg30d": 14.04
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.59,
          "priceAvg30d": 12.87
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 22.59,
          "priceAvg30d": 13.42
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.0,
          "priceAvg30d": 11.84
        }
      ],
      "avg": 23.67,
      "max": 30.0,
      "maxBlock": 9,
      "min": 13.47,
      "minBlock": 25,
      "spread3h": 9.92,
      "spreadLowAvg": 17.05,
      "spreadHighAvg": 26.96,
      "avg30d": 12.97,
      "spread30dAvg": 15.01,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.71,
          "priceAvg30d": 14.78
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.71,
          "priceAvg30d": 15.01
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.71,
          "priceAvg30d": 13.97
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.71,
          "priceAvg30d": 13.5
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.71,
          "priceAvg30d": 14.15
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.08,
          "priceAvg30d": 15.85
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.18,
          "priceAvg30d": 17.56
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.53,
          "priceAvg30d": 19.4
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.0,
          "priceAvg30d": 19.94
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.0,
          "priceAvg30d": 20.91
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.13,
          "priceAvg30d": 20.89
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.18,
          "priceAvg30d": 20.26
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.02,
          "priceAvg30d": 20.6
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 15.71,
          "priceAvg30d": 21.42
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.71,
          "priceAvg30d": 17.66
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 15.71,
          "priceAvg30d": 15.21
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 19.9,
          "priceAvg30d": 13.82
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.08,
          "priceAvg30d": 11.34
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 15.71,
          "priceAvg30d": 9.16
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 15.71,
          "priceAvg30d": 7.66
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 15.71,
          "priceAvg30d": 6.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 15.57,
          "priceAvg30d": 6.55
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 15.71,
          "priceAvg30d": 6.35
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 15.71,
          "priceAvg30d": 6.21
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.71,
          "priceAvg30d": 5.46
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.71,
          "priceAvg30d": 5.55
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 15.71,
          "priceAvg30d": 6.5
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 19.9,
          "priceAvg30d": 7.83
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 19.5,
          "priceAvg30d": 9.31
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.86,
          "priceAvg30d": 11.73
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 20.0,
          "priceAvg30d": 14.92
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 18.5,
          "priceAvg30d": 17.77
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 26.68,
          "priceAvg30d": 23.18
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.4,
          "priceAvg30d": 27.69
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 25.18,
          "priceAvg30d": 27.37
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 27.8
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 28.6,
          "priceAvg30d": 26.76
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.9,
          "priceAvg30d": 25.81
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.42,
          "priceAvg30d": 25.38
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.53,
          "priceAvg30d": 24.3
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.53,
          "priceAvg30d": 24.26
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.5,
          "priceAvg30d": 23.19
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.0,
          "priceAvg30d": 22.82
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.71,
          "priceAvg30d": 21.82
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 15.71,
          "priceAvg30d": 21.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.71,
          "priceAvg30d": 19.14
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.71,
          "priceAvg30d": 19.02
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.0,
          "priceAvg30d": 15.36
        }
      ],
      "avg": 20.82,
      "max": 30.0,
      "maxBlock": 9,
      "min": 14.0,
      "minBlock": 48,
      "spread3h": 11.0,
      "spreadLowAvg": 15.52,
      "spreadHighAvg": 26.52,
      "avg30d": 16.73,
      "spread30dAvg": 17.23,
      "historyDays": 30
    }
  }
};
