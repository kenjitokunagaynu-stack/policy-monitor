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
  "targetDate": "2026-09-04",
  "fetchedAt": "2026-09-04T09:05:47+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 16.34,
        "priceAvg30d": 17.98
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 14.63,
        "priceAvg30d": 17.1
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 15.75,
        "priceAvg30d": 16.27
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 16.33,
        "priceAvg30d": 16.78
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 15.74,
        "priceAvg30d": 16.7
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 14.63,
        "priceAvg30d": 16.61
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 14.63,
        "priceAvg30d": 16.58
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 14.63,
        "priceAvg30d": 16.78
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 14.63,
        "priceAvg30d": 16.85
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 15.74,
        "priceAvg30d": 17.35
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 17.11,
        "priceAvg30d": 17.86
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 15.74,
        "priceAvg30d": 17.32
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 15.13,
        "priceAvg30d": 16.29
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 16.43,
        "priceAvg30d": 15.46
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 17.5,
        "priceAvg30d": 14.96
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 19.97,
        "priceAvg30d": 15.21
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 21.13,
        "priceAvg30d": 15.99
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 22.48,
        "priceAvg30d": 17.31
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 24.49,
        "priceAvg30d": 17.17
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 25.75,
        "priceAvg30d": 17.08
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 24.49,
        "priceAvg30d": 16.22
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 25.0,
        "priceAvg30d": 16.2
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 25.05,
        "priceAvg30d": 16.47
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 25.2,
        "priceAvg30d": 16.5
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 22.5,
        "priceAvg30d": 15.55
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 22.5,
        "priceAvg30d": 16.05
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 24.4,
        "priceAvg30d": 16.94
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 28.04,
        "priceAvg30d": 18.25
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 30.0,
        "priceAvg30d": 19.63
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 30.01,
        "priceAvg30d": 21.68
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 30.46,
        "priceAvg30d": 20.56
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 30.57,
        "priceAvg30d": 23.93
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 30.57,
        "priceAvg30d": 25.87
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 30.78,
        "priceAvg30d": 28.48
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 28.5,
        "priceAvg30d": 28.79
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 25.1,
        "priceAvg30d": 29.86
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 24.05,
        "priceAvg30d": 30.05
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 24.05,
        "priceAvg30d": 29.78
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 22.92,
        "priceAvg30d": 28.05
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 22.09,
        "priceAvg30d": 26.37
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 21.35,
        "priceAvg30d": 24.4
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 21.09,
        "priceAvg30d": 22.05
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 21.0,
        "priceAvg30d": 20.88
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 18.5,
        "priceAvg30d": 23.42
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 19.07,
        "priceAvg30d": 22.1
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 18.63,
        "priceAvg30d": 20.12
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 15.99,
        "priceAvg30d": 20.05
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 14.63,
        "priceAvg30d": 18.41
      }
    ],
    "avg": 21.36,
    "max": 30.78,
    "maxBlock": 34,
    "min": 14.63,
    "minBlock": 2,
    "spread3h": 10.39,
    "spreadLowAvg": 17.81,
    "spreadHighAvg": 28.21,
    "avg30d": 19.8,
    "spread30dAvg": 13.59,
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
          "price": 9.68,
          "priceAvg30d": 15.93
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.92,
          "priceAvg30d": 14.66
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.83,
          "priceAvg30d": 13.81
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.74,
          "priceAvg30d": 14.24
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.88,
          "priceAvg30d": 14.92
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.75,
          "priceAvg30d": 14.79
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 9.75,
          "priceAvg30d": 15.53
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 9.75,
          "priceAvg30d": 15.68
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 9.75,
          "priceAvg30d": 15.84
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 9.98,
          "priceAvg30d": 16.0
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 9.75,
          "priceAvg30d": 15.67
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 9.95,
          "priceAvg30d": 14.43
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 9.98,
          "priceAvg30d": 12.6
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.75,
          "priceAvg30d": 11.58
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.96,
          "priceAvg30d": 10.73
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.98,
          "priceAvg30d": 10.22
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.44,
          "priceAvg30d": 10.57
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.01,
          "priceAvg30d": 10.07
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.44,
          "priceAvg30d": 9.71
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 7.0,
          "priceAvg30d": 9.03
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 5.0,
          "priceAvg30d": 8.77
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 3.0,
          "priceAvg30d": 8.62
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 5.0,
          "priceAvg30d": 8.81
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 3.0,
          "priceAvg30d": 8.48
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.0,
          "priceAvg30d": 8.83
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.5,
          "priceAvg30d": 8.7
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 5.0,
          "priceAvg30d": 9.28
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.61,
          "priceAvg30d": 10.26
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.79,
          "priceAvg30d": 10.5
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.98,
          "priceAvg30d": 11.81
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.75,
          "priceAvg30d": 12.79
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.75,
          "priceAvg30d": 15.08
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 14.61,
          "priceAvg30d": 18.05
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 26.83,
          "priceAvg30d": 21.4
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.5,
          "priceAvg30d": 21.97
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 26.46,
          "priceAvg30d": 22.73
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.68,
          "priceAvg30d": 22.85
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.05,
          "priceAvg30d": 23.63
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.84,
          "priceAvg30d": 22.18
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.58,
          "priceAvg30d": 21.62
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.74,
          "priceAvg30d": 20.0
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.35,
          "priceAvg30d": 19.12
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.35,
          "priceAvg30d": 18.65
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.13,
          "priceAvg30d": 20.25
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.13,
          "priceAvg30d": 20.17
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.13,
          "priceAvg30d": 18.35
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.37,
          "priceAvg30d": 17.87
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 19.43,
          "priceAvg30d": 15.87
        }
      ],
      "avg": 12.98,
      "max": 27.5,
      "maxBlock": 35,
      "min": 2.0,
      "minBlock": 25,
      "spread3h": 16.21,
      "spreadLowAvg": 4.68,
      "spreadHighAvg": 20.9,
      "avg30d": 14.85,
      "spread30dAvg": 13.11,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.99,
          "priceAvg30d": 18.91
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 18.74,
          "priceAvg30d": 17.76
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.43,
          "priceAvg30d": 16.57
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.43,
          "priceAvg30d": 17.03
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.5,
          "priceAvg30d": 17.48
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.68,
          "priceAvg30d": 17.19
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.74,
          "priceAvg30d": 17.87
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 17.5,
          "priceAvg30d": 18.21
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 18.0,
          "priceAvg30d": 18.35
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.81,
          "priceAvg30d": 18.95
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.04,
          "priceAvg30d": 19.02
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.72,
          "priceAvg30d": 17.75
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.63,
          "priceAvg30d": 15.2
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 18.55,
          "priceAvg30d": 13.36
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 18.91,
          "priceAvg30d": 12.78
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.0,
          "priceAvg30d": 11.83
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.44,
          "priceAvg30d": 10.77
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.44,
          "priceAvg30d": 10.9
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.44,
          "priceAvg30d": 10.89
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.45,
          "priceAvg30d": 10.19
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.44,
          "priceAvg30d": 10.03
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.24,
          "priceAvg30d": 10.11
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.43,
          "priceAvg30d": 9.95
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 7.0,
          "priceAvg30d": 9.63
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.0,
          "priceAvg30d": 9.5
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.38,
          "priceAvg30d": 9.64
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.44,
          "priceAvg30d": 10.46
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.0,
          "priceAvg30d": 11.26
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.5,
          "priceAvg30d": 11.28
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 14.94,
          "priceAvg30d": 12.76
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.45,
          "priceAvg30d": 13.97
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.75,
          "priceAvg30d": 16.28
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.8,
          "priceAvg30d": 20.0
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 26.83,
          "priceAvg30d": 23.57
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.5,
          "priceAvg30d": 24.12
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 26.46,
          "priceAvg30d": 25.16
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.68,
          "priceAvg30d": 25.09
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.05,
          "priceAvg30d": 25.47
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.84,
          "priceAvg30d": 23.72
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.58,
          "priceAvg30d": 22.39
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.74,
          "priceAvg30d": 20.45
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.35,
          "priceAvg30d": 19.52
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.35,
          "priceAvg30d": 19.13
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.13,
          "priceAvg30d": 21.16
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.13,
          "priceAvg30d": 21.29
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.13,
          "priceAvg30d": 19.67
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.37,
          "priceAvg30d": 20.03
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 19.43,
          "priceAvg30d": 18.51
        }
      ],
      "avg": 17.15,
      "max": 27.5,
      "maxBlock": 35,
      "min": 7.0,
      "minBlock": 24,
      "spread3h": 15.94,
      "spreadLowAvg": 8.99,
      "spreadHighAvg": 24.93,
      "avg30d": 16.57,
      "spread30dAvg": 13.65,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.99,
          "priceAvg30d": 18.91
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 18.74,
          "priceAvg30d": 18.11
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.43,
          "priceAvg30d": 17.37
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.43,
          "priceAvg30d": 18.87
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.5,
          "priceAvg30d": 18.68
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.68,
          "priceAvg30d": 18.3
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.74,
          "priceAvg30d": 18.29
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 17.5,
          "priceAvg30d": 18.53
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 18.0,
          "priceAvg30d": 18.66
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.81,
          "priceAvg30d": 19.04
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.04,
          "priceAvg30d": 19.37
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.72,
          "priceAvg30d": 18.86
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.63,
          "priceAvg30d": 17.66
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 19.79,
          "priceAvg30d": 17.4
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 21.13,
          "priceAvg30d": 17.78
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.13,
          "priceAvg30d": 18.23
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.81,
          "priceAvg30d": 18.87
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 22.95,
          "priceAvg30d": 20.72
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.49,
          "priceAvg30d": 19.88
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.05,
          "priceAvg30d": 20.52
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 25.05,
          "priceAvg30d": 19.59
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.8,
          "priceAvg30d": 19.82
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 30.0,
          "priceAvg30d": 20.26
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 30.0,
          "priceAvg30d": 20.79
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 24.01,
          "priceAvg30d": 19.82
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 24.44,
          "priceAvg30d": 20.5
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 25.05,
          "priceAvg30d": 21.4
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.57,
          "priceAvg30d": 22.89
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.57,
          "priceAvg30d": 24.06
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.57,
          "priceAvg30d": 25.97
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.01,
          "priceAvg30d": 21.94
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.57,
          "priceAvg30d": 24.98
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 26.5
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.57,
          "priceAvg30d": 28.05
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.5,
          "priceAvg30d": 27.82
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 26.46,
          "priceAvg30d": 28.29
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.68,
          "priceAvg30d": 27.74
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.05,
          "priceAvg30d": 27.84
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.84,
          "priceAvg30d": 25.95
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.58,
          "priceAvg30d": 24.7
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.74,
          "priceAvg30d": 22.11
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.35,
          "priceAvg30d": 21.16
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.35,
          "priceAvg30d": 20.41
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.13,
          "priceAvg30d": 24.62
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.13,
          "priceAvg30d": 23.04
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.13,
          "priceAvg30d": 21.31
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.37,
          "priceAvg30d": 21.86
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 19.43,
          "priceAvg30d": 19.52
        }
      ],
      "avg": 22.91,
      "max": 30.57,
      "maxBlock": 28,
      "min": 13.5,
      "minBlock": 5,
      "spread3h": 11.02,
      "spreadLowAvg": 16.42,
      "spreadHighAvg": 27.44,
      "avg30d": 21.4,
      "spread30dAvg": 9.03,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.99,
          "priceAvg30d": 18.78
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 18.74,
          "priceAvg30d": 17.86
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.43,
          "priceAvg30d": 17.22
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.43,
          "priceAvg30d": 18.62
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.34,
          "priceAvg30d": 18.46
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 16.05,
          "priceAvg30d": 18.1
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.74,
          "priceAvg30d": 18.05
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 17.5,
          "priceAvg30d": 18.26
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 18.0,
          "priceAvg30d": 18.42
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.81,
          "priceAvg30d": 18.84
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.48,
          "priceAvg30d": 19.16
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.72,
          "priceAvg30d": 18.86
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.63,
          "priceAvg30d": 17.4
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.48,
          "priceAvg30d": 16.88
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 21.13,
          "priceAvg30d": 16.53
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 22.26,
          "priceAvg30d": 16.95
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 23.94,
          "priceAvg30d": 17.93
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 29.0,
          "priceAvg30d": 19.22
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.8,
          "priceAvg30d": 19.36
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 32.0,
          "priceAvg30d": 19.7
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 32.0,
          "priceAvg30d": 19.21
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 32.1,
          "priceAvg30d": 19.06
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 32.13,
          "priceAvg30d": 19.33
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 32.1,
          "priceAvg30d": 19.71
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 27.16,
          "priceAvg30d": 18.56
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 29.0,
          "priceAvg30d": 18.94
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 31.0,
          "priceAvg30d": 20.64
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 31.31,
          "priceAvg30d": 22.49
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 34.01,
          "priceAvg30d": 23.59
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 34.0,
          "priceAvg30d": 25.09
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 34.0,
          "priceAvg30d": 24.32
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 36.97,
          "priceAvg30d": 27.27
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 36.99,
          "priceAvg30d": 29.06
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.1,
          "priceAvg30d": 31.38
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 31.79,
          "priceAvg30d": 31.82
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 31.52,
          "priceAvg30d": 32.6
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.5,
          "priceAvg30d": 33.11
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.5,
          "priceAvg30d": 31.96
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 26.48,
          "priceAvg30d": 30.22
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.53,
          "priceAvg30d": 28.89
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.86,
          "priceAvg30d": 27.35
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.11,
          "priceAvg30d": 25.6
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.83,
          "priceAvg30d": 24.16
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.85,
          "priceAvg30d": 25.37
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.47,
          "priceAvg30d": 24.98
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.41,
          "priceAvg30d": 23.05
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.0,
          "priceAvg30d": 22.36
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 19.43,
          "priceAvg30d": 19.7
        }
      ],
      "avg": 25.45,
      "max": 36.99,
      "maxBlock": 33,
      "min": 15.74,
      "minBlock": 7,
      "spread3h": 16.04,
      "spreadLowAvg": 17.36,
      "spreadHighAvg": 33.4,
      "avg30d": 22.18,
      "spread30dAvg": 14.28,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 14.82,
          "priceAvg30d": 16.88
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 16.05,
          "priceAvg30d": 16.52
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.43,
          "priceAvg30d": 15.81
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.43,
          "priceAvg30d": 15.84
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.34,
          "priceAvg30d": 15.74
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 16.05,
          "priceAvg30d": 16.18
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.74,
          "priceAvg30d": 16.05
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.05,
          "priceAvg30d": 16.03
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.05,
          "priceAvg30d": 15.61
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.34,
          "priceAvg30d": 16.68
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.43,
          "priceAvg30d": 17.09
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.43,
          "priceAvg30d": 16.56
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.9,
          "priceAvg30d": 15.44
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.9,
          "priceAvg30d": 14.6
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.99,
          "priceAvg30d": 14.93
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 15.99,
          "priceAvg30d": 15.72
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.0,
          "priceAvg30d": 17.42
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.5,
          "priceAvg30d": 18.87
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.8,
          "priceAvg30d": 19.14
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 32.0,
          "priceAvg30d": 19.38
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 32.0,
          "priceAvg30d": 18.94
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 31.16,
          "priceAvg30d": 18.89
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 31.16,
          "priceAvg30d": 19.16
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 30.0,
          "priceAvg30d": 19.54
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.59,
          "priceAvg30d": 18.37
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.0,
          "priceAvg30d": 18.73
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 29.0,
          "priceAvg30d": 20.37
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 22.06
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 23.0
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.0,
          "priceAvg30d": 24.18
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.16,
          "priceAvg30d": 23.33
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.16,
          "priceAvg30d": 26.09
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 27.89
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.16,
          "priceAvg30d": 30.22
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 24.02,
          "priceAvg30d": 30.46
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.18,
          "priceAvg30d": 31.69
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.18,
          "priceAvg30d": 32.08
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.59,
          "priceAvg30d": 31.12
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.4,
          "priceAvg30d": 29.35
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.34,
          "priceAvg30d": 27.85
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 15.0,
          "priceAvg30d": 26.42
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 14.63,
          "priceAvg30d": 24.32
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 14.82,
          "priceAvg30d": 22.74
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.37,
          "priceAvg30d": 22.71
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 14.37,
          "priceAvg30d": 22.6
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.37,
          "priceAvg30d": 20.96
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.61,
          "priceAvg30d": 20.58
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.1,
          "priceAvg30d": 17.83
        }
      ],
      "avg": 21.41,
      "max": 32.0,
      "maxBlock": 20,
      "min": 14.1,
      "minBlock": 48,
      "spread3h": 14.32,
      "spreadLowAvg": 14.45,
      "spreadHighAvg": 28.77,
      "avg30d": 20.87,
      "spread30dAvg": 14.62,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 14.82,
          "priceAvg30d": 15.43
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 16.05,
          "priceAvg30d": 15.87
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.43,
          "priceAvg30d": 15.11
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.43,
          "priceAvg30d": 14.8
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.34,
          "priceAvg30d": 14.66
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 16.05,
          "priceAvg30d": 14.79
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.74,
          "priceAvg30d": 14.59
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.05,
          "priceAvg30d": 14.62
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.05,
          "priceAvg30d": 14.65
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.34,
          "priceAvg30d": 15.14
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.43,
          "priceAvg30d": 15.6
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.43,
          "priceAvg30d": 15.53
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.9,
          "priceAvg30d": 15.04
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.9,
          "priceAvg30d": 14.08
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.99,
          "priceAvg30d": 13.82
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 15.99,
          "priceAvg30d": 14.27
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.0,
          "priceAvg30d": 15.53
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.5,
          "priceAvg30d": 17.41
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.0,
          "priceAvg30d": 17.82
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 31.16,
          "priceAvg30d": 18.28
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 31.0,
          "priceAvg30d": 18.03
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 31.16,
          "priceAvg30d": 18.04
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 31.16,
          "priceAvg30d": 18.73
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 30.0,
          "priceAvg30d": 19.11
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.59,
          "priceAvg30d": 17.27
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.0,
          "priceAvg30d": 17.9
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 29.0,
          "priceAvg30d": 19.82
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 21.9
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 22.79
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.0,
          "priceAvg30d": 23.68
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.16,
          "priceAvg30d": 23.12
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.16,
          "priceAvg30d": 25.0
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 26.47
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.16,
          "priceAvg30d": 29.89
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 24.02,
          "priceAvg30d": 30.26
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.18,
          "priceAvg30d": 31.3
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.18,
          "priceAvg30d": 31.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.59,
          "priceAvg30d": 30.91
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.4,
          "priceAvg30d": 29.24
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.34,
          "priceAvg30d": 27.56
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 15.0,
          "priceAvg30d": 26.24
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 14.63,
          "priceAvg30d": 24.1
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 14.82,
          "priceAvg30d": 22.3
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.37,
          "priceAvg30d": 21.1
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 14.37,
          "priceAvg30d": 19.32
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.37,
          "priceAvg30d": 17.12
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.61,
          "priceAvg30d": 16.88
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.1,
          "priceAvg30d": 15.42
        }
      ],
      "avg": 21.35,
      "max": 31.16,
      "maxBlock": 20,
      "min": 14.1,
      "minBlock": 48,
      "spread3h": 14.02,
      "spreadLowAvg": 14.45,
      "spreadHighAvg": 28.47,
      "avg30d": 19.84,
      "spread30dAvg": 15.5,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 14.82,
          "priceAvg30d": 15.43
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 16.05,
          "priceAvg30d": 15.87
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.43,
          "priceAvg30d": 15.11
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.43,
          "priceAvg30d": 14.8
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.34,
          "priceAvg30d": 14.66
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 16.05,
          "priceAvg30d": 14.79
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.74,
          "priceAvg30d": 14.59
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.05,
          "priceAvg30d": 14.62
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.05,
          "priceAvg30d": 14.65
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.34,
          "priceAvg30d": 15.14
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.43,
          "priceAvg30d": 15.6
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.43,
          "priceAvg30d": 15.53
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.9,
          "priceAvg30d": 15.04
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.9,
          "priceAvg30d": 14.08
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.99,
          "priceAvg30d": 13.73
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 15.99,
          "priceAvg30d": 13.68
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.0,
          "priceAvg30d": 14.56
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.5,
          "priceAvg30d": 15.65
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.0,
          "priceAvg30d": 14.96
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 31.16,
          "priceAvg30d": 13.91
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 31.0,
          "priceAvg30d": 13.91
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 31.16,
          "priceAvg30d": 13.55
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 31.16,
          "priceAvg30d": 13.35
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 30.0,
          "priceAvg30d": 13.61
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.59,
          "priceAvg30d": 12.27
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.0,
          "priceAvg30d": 12.84
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 29.0,
          "priceAvg30d": 13.86
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 15.46
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 15.77
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.0,
          "priceAvg30d": 16.96
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.7,
          "priceAvg30d": 19.15
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.0,
          "priceAvg30d": 23.35
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 26.3
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.0,
          "priceAvg30d": 29.89
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 24.02,
          "priceAvg30d": 30.26
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.18,
          "priceAvg30d": 31.3
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.18,
          "priceAvg30d": 31.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.59,
          "priceAvg30d": 30.91
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.4,
          "priceAvg30d": 29.24
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.34,
          "priceAvg30d": 27.56
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 15.0,
          "priceAvg30d": 26.24
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 14.63,
          "priceAvg30d": 24.1
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 14.82,
          "priceAvg30d": 22.3
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.37,
          "priceAvg30d": 21.1
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 14.37,
          "priceAvg30d": 19.32
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.37,
          "priceAvg30d": 17.12
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.61,
          "priceAvg30d": 16.88
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.1,
          "priceAvg30d": 15.42
        }
      ],
      "avg": 21.3,
      "max": 31.16,
      "maxBlock": 20,
      "min": 14.1,
      "minBlock": 48,
      "spread3h": 14.02,
      "spreadLowAvg": 14.45,
      "spreadHighAvg": 28.47,
      "avg30d": 18.34,
      "spread30dAvg": 16.52,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 14.82,
          "priceAvg30d": 15.43
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 16.05,
          "priceAvg30d": 15.79
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.43,
          "priceAvg30d": 14.95
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.43,
          "priceAvg30d": 14.63
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.34,
          "priceAvg30d": 14.51
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 16.05,
          "priceAvg30d": 14.64
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.74,
          "priceAvg30d": 14.41
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.05,
          "priceAvg30d": 14.43
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.05,
          "priceAvg30d": 14.48
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.34,
          "priceAvg30d": 15.06
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.43,
          "priceAvg30d": 15.6
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.43,
          "priceAvg30d": 15.53
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.9,
          "priceAvg30d": 15.0
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.9,
          "priceAvg30d": 14.0
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.99,
          "priceAvg30d": 13.29
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 15.99,
          "priceAvg30d": 12.95
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.0,
          "priceAvg30d": 13.77
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.5,
          "priceAvg30d": 14.56
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.0,
          "priceAvg30d": 13.94
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 31.16,
          "priceAvg30d": 12.47
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 31.0,
          "priceAvg30d": 11.98
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 31.16,
          "priceAvg30d": 11.3
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 31.16,
          "priceAvg30d": 10.62
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 30.0,
          "priceAvg30d": 10.89
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.59,
          "priceAvg30d": 9.68
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.0,
          "priceAvg30d": 10.24
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 29.0,
          "priceAvg30d": 11.84
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 13.49
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 13.82
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.0,
          "priceAvg30d": 15.47
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.7,
          "priceAvg30d": 17.72
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.0,
          "priceAvg30d": 22.02
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 25.01
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.0,
          "priceAvg30d": 29.64
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 24.02,
          "priceAvg30d": 30.1
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.18,
          "priceAvg30d": 31.3
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.18,
          "priceAvg30d": 31.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.59,
          "priceAvg30d": 30.91
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.4,
          "priceAvg30d": 29.24
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.34,
          "priceAvg30d": 27.56
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 15.0,
          "priceAvg30d": 26.24
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 14.63,
          "priceAvg30d": 24.1
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 14.82,
          "priceAvg30d": 22.3
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.37,
          "priceAvg30d": 21.1
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 14.37,
          "priceAvg30d": 19.32
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.37,
          "priceAvg30d": 17.12
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.61,
          "priceAvg30d": 16.88
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.1,
          "priceAvg30d": 15.42
        }
      ],
      "avg": 21.3,
      "max": 31.16,
      "maxBlock": 20,
      "min": 14.1,
      "minBlock": 48,
      "spread3h": 14.02,
      "spreadLowAvg": 14.45,
      "spreadHighAvg": 28.47,
      "avg30d": 17.63,
      "spread30dAvg": 18.71,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 14.63,
          "priceAvg30d": 14.62
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.95,
          "priceAvg30d": 15.11
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 13.59
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.03,
          "priceAvg30d": 12.76
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.03,
          "priceAvg30d": 12.33
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.01,
          "priceAvg30d": 12.5
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 9.01,
          "priceAvg30d": 12.44
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 9.01,
          "priceAvg30d": 12.54
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 9.01,
          "priceAvg30d": 12.48
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 9.01,
          "priceAvg30d": 13.71
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 9.01,
          "priceAvg30d": 14.58
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.03,
          "priceAvg30d": 14.73
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.95,
          "priceAvg30d": 14.41
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.95,
          "priceAvg30d": 12.28
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 14.63,
          "priceAvg30d": 11.59
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 14.63,
          "priceAvg30d": 11.65
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.0,
          "priceAvg30d": 12.98
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.5,
          "priceAvg30d": 13.49
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.0,
          "priceAvg30d": 13.12
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 31.16,
          "priceAvg30d": 12.75
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 31.0,
          "priceAvg30d": 12.14
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 31.16,
          "priceAvg30d": 11.9
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 31.16,
          "priceAvg30d": 11.85
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 30.0,
          "priceAvg30d": 11.72
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.59,
          "priceAvg30d": 11.23
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.0,
          "priceAvg30d": 11.3
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 29.0,
          "priceAvg30d": 12.6
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 14.32
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 15.09
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.0,
          "priceAvg30d": 16.44
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.7,
          "priceAvg30d": 18.78
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.0,
          "priceAvg30d": 23.02
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 26.09
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.0,
          "priceAvg30d": 29.89
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 24.02,
          "priceAvg30d": 30.26
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.18,
          "priceAvg30d": 31.3
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.18,
          "priceAvg30d": 31.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.59,
          "priceAvg30d": 30.91
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.4,
          "priceAvg30d": 29.24
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.34,
          "priceAvg30d": 27.56
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 15.0,
          "priceAvg30d": 26.24
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 14.63,
          "priceAvg30d": 24.1
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 14.63,
          "priceAvg30d": 22.3
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.37,
          "priceAvg30d": 21.1
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 10.95,
          "priceAvg30d": 19.28
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.95,
          "priceAvg30d": 16.88
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.95,
          "priceAvg30d": 16.32
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.03,
          "priceAvg30d": 13.97
        }
      ],
      "avg": 19.13,
      "max": 31.16,
      "maxBlock": 20,
      "min": 9.01,
      "minBlock": 6,
      "spread3h": 18.8,
      "spreadLowAvg": 9.67,
      "spreadHighAvg": 28.47,
      "avg30d": 17.32,
      "spread30dAvg": 18.32,
      "historyDays": 30
    }
  }
};
