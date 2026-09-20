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
  "targetDate": "2026-09-20",
  "fetchedAt": "2026-09-20T09:05:11+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 16.0,
        "priceAvg30d": 17.59
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 14.21,
        "priceAvg30d": 16.67
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 12.61,
        "priceAvg30d": 15.98
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 12.02,
        "priceAvg30d": 16.05
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 11.26,
        "priceAvg30d": 15.96
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 11.99,
        "priceAvg30d": 16.03
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 12.49,
        "priceAvg30d": 16.27
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 14.63,
        "priceAvg30d": 16.38
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 16.05,
        "priceAvg30d": 16.65
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 17.0,
        "priceAvg30d": 17.34
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 17.02,
        "priceAvg30d": 18.1
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 15.0,
        "priceAvg30d": 17.81
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 12.53,
        "priceAvg30d": 17.1
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 11.08,
        "priceAvg30d": 16.37
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 10.28,
        "priceAvg30d": 15.73
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 9.63,
        "priceAvg30d": 16.0
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 10.28,
        "priceAvg30d": 16.79
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 10.28,
        "priceAvg30d": 18.44
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 10.86,
        "priceAvg30d": 19.1
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 10.86,
        "priceAvg30d": 18.99
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 10.86,
        "priceAvg30d": 18.06
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 10.41,
        "priceAvg30d": 18.09
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 10.28,
        "priceAvg30d": 18.1
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 10.04,
        "priceAvg30d": 17.94
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 10.46,
        "priceAvg30d": 16.52
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 11.03,
        "priceAvg30d": 16.91
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 11.65,
        "priceAvg30d": 18.27
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 13.36,
        "priceAvg30d": 20.09
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 15.5,
        "priceAvg30d": 21.69
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 16.29,
        "priceAvg30d": 23.47
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 16.58,
        "priceAvg30d": 22.71
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 16.62,
        "priceAvg30d": 25.45
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 17.1,
        "priceAvg30d": 26.81
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 20.0,
        "priceAvg30d": 29.4
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 21.69,
        "priceAvg30d": 29.3
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 23.1,
        "priceAvg30d": 29.87
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 24.9,
        "priceAvg30d": 29.81
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 25.01,
        "priceAvg30d": 29.1
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 24.87,
        "priceAvg30d": 27.62
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 23.1,
        "priceAvg30d": 25.62
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 22.51,
        "priceAvg30d": 23.84
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 22.8,
        "priceAvg30d": 22.24
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 22.65,
        "priceAvg30d": 21.07
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 21.87,
        "priceAvg30d": 22.44
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 20.35,
        "priceAvg30d": 21.65
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 17.1,
        "priceAvg30d": 19.69
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 18.0,
        "priceAvg30d": 19.43
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 14.27,
        "priceAvg30d": 17.6
      }
    ],
    "avg": 15.59,
    "max": 25.01,
    "maxBlock": 38,
    "min": 9.63,
    "minBlock": 16,
    "spread3h": 12.48,
    "spreadLowAvg": 10.88,
    "spreadHighAvg": 23.36,
    "avg30d": 20.25,
    "spread30dAvg": 13.95,
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
          "price": 9.55,
          "priceAvg30d": 14.44
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.55,
          "priceAvg30d": 13.63
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.55,
          "priceAvg30d": 13.1
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.46,
          "priceAvg30d": 12.88
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.63,
          "priceAvg30d": 13.86
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.46,
          "priceAvg30d": 14.35
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.46,
          "priceAvg30d": 15.42
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.46,
          "priceAvg30d": 15.63
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.45,
          "priceAvg30d": 16.0
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.79,
          "priceAvg30d": 16.1
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.67,
          "priceAvg30d": 15.96
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.41,
          "priceAvg30d": 15.01
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.6,
          "priceAvg30d": 13.79
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.46,
          "priceAvg30d": 12.0
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.54,
          "priceAvg30d": 11.2
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.29,
          "priceAvg30d": 10.87
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.62,
          "priceAvg30d": 10.53
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.83,
          "priceAvg30d": 10.98
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.46,
          "priceAvg30d": 10.36
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.64,
          "priceAvg30d": 9.49
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.64,
          "priceAvg30d": 8.8
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.64,
          "priceAvg30d": 8.88
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.64,
          "priceAvg30d": 9.33
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.52,
          "priceAvg30d": 8.61
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.52,
          "priceAvg30d": 8.26
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.52,
          "priceAvg30d": 8.02
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.64,
          "priceAvg30d": 9.24
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.46,
          "priceAvg30d": 11.2
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.46,
          "priceAvg30d": 11.33
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.92,
          "priceAvg30d": 12.77
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.59,
          "priceAvg30d": 14.24
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.41,
          "priceAvg30d": 16.22
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.59,
          "priceAvg30d": 18.98
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.95,
          "priceAvg30d": 21.52
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 25.85,
          "priceAvg30d": 21.92
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 26.0,
          "priceAvg30d": 22.39
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 26.32,
          "priceAvg30d": 22.09
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.72,
          "priceAvg30d": 22.68
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.0,
          "priceAvg30d": 21.64
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.29,
          "priceAvg30d": 20.4
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.98,
          "priceAvg30d": 19.72
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.85,
          "priceAvg30d": 18.93
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.85,
          "priceAvg30d": 17.8
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.85,
          "priceAvg30d": 17.71
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 10.46,
          "priceAvg30d": 18.11
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.46,
          "priceAvg30d": 16.58
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.46,
          "priceAvg30d": 15.84
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.46,
          "priceAvg30d": 14.78
        }
      ],
      "avg": 14.58,
      "max": 27.0,
      "maxBlock": 39,
      "min": 9.52,
      "minBlock": 24,
      "spread3h": 16.59,
      "spreadLowAvg": 9.6,
      "spreadHighAvg": 26.19,
      "avg30d": 14.66,
      "spread30dAvg": 12.28,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.55,
          "priceAvg30d": 18.94
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.55,
          "priceAvg30d": 17.66
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.55,
          "priceAvg30d": 16.45
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.63,
          "priceAvg30d": 16.28
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.63,
          "priceAvg30d": 16.51
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.64,
          "priceAvg30d": 16.61
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.46,
          "priceAvg30d": 17.75
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.46,
          "priceAvg30d": 17.95
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.45,
          "priceAvg30d": 18.29
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.79,
          "priceAvg30d": 18.66
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 9.78,
          "priceAvg30d": 19.23
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.0,
          "priceAvg30d": 18.5
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 9.67,
          "priceAvg30d": 17.01
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.67,
          "priceAvg30d": 14.56
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.54,
          "priceAvg30d": 13.8
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.55,
          "priceAvg30d": 13.51
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.62,
          "priceAvg30d": 11.46
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.83,
          "priceAvg30d": 12.33
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.46,
          "priceAvg30d": 13.01
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.64,
          "priceAvg30d": 12.57
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.64,
          "priceAvg30d": 11.8
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.64,
          "priceAvg30d": 12.1
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.64,
          "priceAvg30d": 11.71
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.52,
          "priceAvg30d": 10.73
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.52,
          "priceAvg30d": 9.47
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.52,
          "priceAvg30d": 9.96
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.64,
          "priceAvg30d": 11.55
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.46,
          "priceAvg30d": 12.97
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.46,
          "priceAvg30d": 13.24
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.92,
          "priceAvg30d": 15.05
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.59,
          "priceAvg30d": 16.56
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.41,
          "priceAvg30d": 19.7
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.59,
          "priceAvg30d": 22.68
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.95,
          "priceAvg30d": 25.79
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 25.85,
          "priceAvg30d": 25.52
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 26.0,
          "priceAvg30d": 26.04
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 26.32,
          "priceAvg30d": 26.02
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.72,
          "priceAvg30d": 25.85
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.0,
          "priceAvg30d": 24.02
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.29,
          "priceAvg30d": 22.55
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.98,
          "priceAvg30d": 21.0
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.85,
          "priceAvg30d": 20.05
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.85,
          "priceAvg30d": 19.1
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.85,
          "priceAvg30d": 19.37
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 9.67,
          "priceAvg30d": 20.9
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 9.67,
          "priceAvg30d": 19.2
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.46,
          "priceAvg30d": 19.57
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.46,
          "priceAvg30d": 18.75
        }
      ],
      "avg": 14.44,
      "max": 27.0,
      "maxBlock": 39,
      "min": 9.52,
      "minBlock": 24,
      "spread3h": 16.59,
      "spreadLowAvg": 9.6,
      "spreadHighAvg": 26.19,
      "avg30d": 17.34,
      "spread30dAvg": 13.59,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 17.96,
          "priceAvg30d": 19.17
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 17.96,
          "priceAvg30d": 18.63
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 17.96,
          "priceAvg30d": 17.87
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.99,
          "priceAvg30d": 18.39
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.6,
          "priceAvg30d": 18.22
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 17.0,
          "priceAvg30d": 18.19
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 17.02,
          "priceAvg30d": 18.57
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 17.96,
          "priceAvg30d": 18.57
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.96,
          "priceAvg30d": 18.98
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 17.96,
          "priceAvg30d": 19.28
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 17.96,
          "priceAvg30d": 19.82
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 17.96,
          "priceAvg30d": 19.41
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.96,
          "priceAvg30d": 18.51
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.0,
          "priceAvg30d": 18.65
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 17.06,
          "priceAvg30d": 18.78
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 17.96,
          "priceAvg30d": 19.42
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 17.96,
          "priceAvg30d": 20.6
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 17.96,
          "priceAvg30d": 23.2
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 19.79,
          "priceAvg30d": 22.89
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 21.9,
          "priceAvg30d": 23.27
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 23.74,
          "priceAvg30d": 22.73
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.79,
          "priceAvg30d": 23.2
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.29,
          "priceAvg30d": 23.49
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.29,
          "priceAvg30d": 23.62
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 25.6,
          "priceAvg30d": 21.98
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 25.87,
          "priceAvg30d": 22.64
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 25.87,
          "priceAvg30d": 23.69
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 25.81,
          "priceAvg30d": 24.95
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.55,
          "priceAvg30d": 25.63
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 25.78,
          "priceAvg30d": 27.07
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.85,
          "priceAvg30d": 24.42
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.85,
          "priceAvg30d": 26.87
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.85,
          "priceAvg30d": 28.22
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 26.03,
          "priceAvg30d": 29.4
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 25.85,
          "priceAvg30d": 28.86
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 26.0,
          "priceAvg30d": 28.68
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 26.32,
          "priceAvg30d": 28.0
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.72,
          "priceAvg30d": 27.96
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.0,
          "priceAvg30d": 26.26
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.29,
          "priceAvg30d": 24.92
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.98,
          "priceAvg30d": 22.83
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.85,
          "priceAvg30d": 22.35
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.85,
          "priceAvg30d": 21.51
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.85,
          "priceAvg30d": 24.01
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.85,
          "priceAvg30d": 22.92
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.21,
          "priceAvg30d": 21.56
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.27,
          "priceAvg30d": 21.55
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.09,
          "priceAvg30d": 19.74
        }
      ],
      "avg": 22.44,
      "max": 27.0,
      "maxBlock": 39,
      "min": 16.0,
      "minBlock": 14,
      "spread3h": 8.38,
      "spreadLowAvg": 17.81,
      "spreadHighAvg": 26.19,
      "avg30d": 22.49,
      "spread30dAvg": 10.68,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 17.96,
          "priceAvg30d": 19.32
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 17.62,
          "priceAvg30d": 18.74
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 17.29,
          "priceAvg30d": 18.0
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.99,
          "priceAvg30d": 18.36
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.6,
          "priceAvg30d": 18.19
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 17.0,
          "priceAvg30d": 18.22
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 17.02,
          "priceAvg30d": 18.41
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 17.31,
          "priceAvg30d": 18.65
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.29,
          "priceAvg30d": 19.07
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 17.28,
          "priceAvg30d": 19.4
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 17.6,
          "priceAvg30d": 19.82
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 17.29,
          "priceAvg30d": 19.8
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.31,
          "priceAvg30d": 19.17
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.0,
          "priceAvg30d": 18.86
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.98,
          "priceAvg30d": 18.32
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 15.0,
          "priceAvg30d": 18.67
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 16.0,
          "priceAvg30d": 20.29
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.03,
          "priceAvg30d": 22.29
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 16.31,
          "priceAvg30d": 22.96
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 16.3,
          "priceAvg30d": 23.33
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 16.3,
          "priceAvg30d": 22.66
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 16.31,
          "priceAvg30d": 22.86
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 16.31,
          "priceAvg30d": 23.0
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 16.3,
          "priceAvg30d": 23.05
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 16.32,
          "priceAvg30d": 21.36
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 16.3,
          "priceAvg30d": 21.84
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 16.59,
          "priceAvg30d": 24.08
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.34,
          "priceAvg30d": 25.55
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.43,
          "priceAvg30d": 26.26
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.89,
          "priceAvg30d": 27.3
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.85,
          "priceAvg30d": 26.58
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.85,
          "priceAvg30d": 28.8
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.85,
          "priceAvg30d": 30.16
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 26.03,
          "priceAvg30d": 32.27
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 25.85,
          "priceAvg30d": 32.53
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 26.0,
          "priceAvg30d": 32.8
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 26.32,
          "priceAvg30d": 32.94
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.62,
          "priceAvg30d": 31.93
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 26.6,
          "priceAvg30d": 30.57
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.29,
          "priceAvg30d": 28.37
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.98,
          "priceAvg30d": 26.73
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.85,
          "priceAvg30d": 25.52
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.85,
          "priceAvg30d": 24.26
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.85,
          "priceAvg30d": 24.38
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.8,
          "priceAvg30d": 23.57
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.21,
          "priceAvg30d": 21.97
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.21,
          "priceAvg30d": 21.62
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.09,
          "priceAvg30d": 19.97
        }
      ],
      "avg": 20.55,
      "max": 26.62,
      "maxBlock": 38,
      "min": 15.0,
      "minBlock": 16,
      "spread3h": 9.9,
      "spreadLowAvg": 16.27,
      "spreadHighAvg": 26.17,
      "avg30d": 23.39,
      "spread30dAvg": 14.96,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.58,
          "priceAvg30d": 15.12
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.5,
          "priceAvg30d": 15.09
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.25,
          "priceAvg30d": 14.7
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.25,
          "priceAvg30d": 14.51
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.41,
          "priceAvg30d": 14.63
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.58,
          "priceAvg30d": 14.86
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.05,
          "priceAvg30d": 15.02
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.38,
          "priceAvg30d": 15.06
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.38,
          "priceAvg30d": 15.02
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.09,
          "priceAvg30d": 15.73
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.95,
          "priceAvg30d": 16.4
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.38,
          "priceAvg30d": 16.5
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.31,
          "priceAvg30d": 16.67
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.7,
          "priceAvg30d": 15.22
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 15.21
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 5.01,
          "priceAvg30d": 15.04
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 6.2,
          "priceAvg30d": 16.12
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 5.89,
          "priceAvg30d": 19.59
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 6.2,
          "priceAvg30d": 20.94
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 6.2,
          "priceAvg30d": 21.85
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.1,
          "priceAvg30d": 20.99
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.77,
          "priceAvg30d": 21.01
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.77,
          "priceAvg30d": 20.89
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.2,
          "priceAvg30d": 21.02
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.8,
          "priceAvg30d": 18.77
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 6.0,
          "priceAvg30d": 19.38
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 6.05,
          "priceAvg30d": 21.98
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.87,
          "priceAvg30d": 23.3
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.9,
          "priceAvg30d": 23.98
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.94,
          "priceAvg30d": 24.64
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.63,
          "priceAvg30d": 23.98
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.63,
          "priceAvg30d": 26.01
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.1,
          "priceAvg30d": 26.43
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 8.37,
          "priceAvg30d": 29.26
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.83,
          "priceAvg30d": 29.06
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 14.96,
          "priceAvg30d": 29.81
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.81,
          "priceAvg30d": 30.06
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.02,
          "priceAvg30d": 29.07
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 14.84,
          "priceAvg30d": 27.75
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.99,
          "priceAvg30d": 25.78
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.3,
          "priceAvg30d": 24.28
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.02,
          "priceAvg30d": 22.86
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.02,
          "priceAvg30d": 21.8
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.61,
          "priceAvg30d": 21.01
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 14.61,
          "priceAvg30d": 19.92
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 11.25,
          "priceAvg30d": 18.25
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.5,
          "priceAvg30d": 17.97
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.37,
          "priceAvg30d": 15.35
        }
      ],
      "avg": 10.48,
      "max": 17.31,
      "maxBlock": 13,
      "min": 5.01,
      "minBlock": 16,
      "spread3h": 0.47,
      "spreadLowAvg": 9.49,
      "spreadHighAvg": 9.96,
      "avg30d": 20.37,
      "spread30dAvg": 15.19,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.58,
          "priceAvg30d": 14.57
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.5,
          "priceAvg30d": 14.83
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.25,
          "priceAvg30d": 14.52
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.25,
          "priceAvg30d": 14.34
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.41,
          "priceAvg30d": 14.45
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.58,
          "priceAvg30d": 14.69
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.05,
          "priceAvg30d": 14.82
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.38,
          "priceAvg30d": 14.87
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.38,
          "priceAvg30d": 14.83
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.09,
          "priceAvg30d": 15.53
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.95,
          "priceAvg30d": 16.2
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.38,
          "priceAvg30d": 16.32
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.31,
          "priceAvg30d": 16.48
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.7,
          "priceAvg30d": 15.02
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 15.0
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 5.01,
          "priceAvg30d": 14.72
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 6.2,
          "priceAvg30d": 15.6
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 5.89,
          "priceAvg30d": 18.59
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 6.2,
          "priceAvg30d": 20.07
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 6.2,
          "priceAvg30d": 20.62
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.1,
          "priceAvg30d": 19.81
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.77,
          "priceAvg30d": 19.94
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.77,
          "priceAvg30d": 20.31
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.2,
          "priceAvg30d": 19.93
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.8,
          "priceAvg30d": 18.1
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 6.0,
          "priceAvg30d": 18.44
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 6.05,
          "priceAvg30d": 21.26
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.87,
          "priceAvg30d": 22.76
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.9,
          "priceAvg30d": 23.27
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.94,
          "priceAvg30d": 23.61
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.63,
          "priceAvg30d": 22.99
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.63,
          "priceAvg30d": 24.76
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.1,
          "priceAvg30d": 25.91
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 8.37,
          "priceAvg30d": 28.9
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.83,
          "priceAvg30d": 28.92
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 14.96,
          "priceAvg30d": 29.68
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.81,
          "priceAvg30d": 29.94
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.02,
          "priceAvg30d": 28.93
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 14.84,
          "priceAvg30d": 27.62
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.99,
          "priceAvg30d": 25.64
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.3,
          "priceAvg30d": 24.28
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.02,
          "priceAvg30d": 22.77
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.02,
          "priceAvg30d": 21.67
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.61,
          "priceAvg30d": 20.53
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 14.61,
          "priceAvg30d": 19.28
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 11.25,
          "priceAvg30d": 17.61
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.5,
          "priceAvg30d": 17.3
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.37,
          "priceAvg30d": 14.82
        }
      ],
      "avg": 10.48,
      "max": 17.31,
      "maxBlock": 13,
      "min": 5.01,
      "minBlock": 16,
      "spread3h": 0.47,
      "spreadLowAvg": 9.49,
      "spreadHighAvg": 9.96,
      "avg30d": 19.9,
      "spread30dAvg": 14.73,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.58,
          "priceAvg30d": 14.57
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.5,
          "priceAvg30d": 14.83
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.25,
          "priceAvg30d": 14.52
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.25,
          "priceAvg30d": 14.34
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.41,
          "priceAvg30d": 14.45
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.58,
          "priceAvg30d": 14.69
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.05,
          "priceAvg30d": 14.72
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.38,
          "priceAvg30d": 14.87
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.38,
          "priceAvg30d": 14.79
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.09,
          "priceAvg30d": 15.47
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.95,
          "priceAvg30d": 16.18
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.38,
          "priceAvg30d": 16.32
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.31,
          "priceAvg30d": 16.4
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.7,
          "priceAvg30d": 14.87
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 14.59
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 5.01,
          "priceAvg30d": 13.77
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 6.2,
          "priceAvg30d": 14.25
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 5.89,
          "priceAvg30d": 15.33
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 6.2,
          "priceAvg30d": 15.56
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 6.2,
          "priceAvg30d": 14.78
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.1,
          "priceAvg30d": 14.4
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.77,
          "priceAvg30d": 14.35
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.77,
          "priceAvg30d": 14.12
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.2,
          "priceAvg30d": 13.85
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.8,
          "priceAvg30d": 12.14
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 6.0,
          "priceAvg30d": 12.38
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 6.05,
          "priceAvg30d": 14.85
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.87,
          "priceAvg30d": 16.37
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.9,
          "priceAvg30d": 15.94
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.94,
          "priceAvg30d": 16.85
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.63,
          "priceAvg30d": 19.29
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.63,
          "priceAvg30d": 23.06
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.1,
          "priceAvg30d": 25.38
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 8.37,
          "priceAvg30d": 28.69
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.83,
          "priceAvg30d": 28.92
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 14.96,
          "priceAvg30d": 29.68
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.81,
          "priceAvg30d": 29.94
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.02,
          "priceAvg30d": 28.93
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 14.84,
          "priceAvg30d": 27.62
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.99,
          "priceAvg30d": 25.64
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.3,
          "priceAvg30d": 24.28
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.02,
          "priceAvg30d": 22.77
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.02,
          "priceAvg30d": 21.67
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.61,
          "priceAvg30d": 20.53
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 14.61,
          "priceAvg30d": 19.25
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 11.25,
          "priceAvg30d": 17.6
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.5,
          "priceAvg30d": 17.3
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.37,
          "priceAvg30d": 14.82
        }
      ],
      "avg": 10.48,
      "max": 17.31,
      "maxBlock": 13,
      "min": 5.01,
      "minBlock": 16,
      "spread3h": 0.47,
      "spreadLowAvg": 9.49,
      "spreadHighAvg": 9.96,
      "avg30d": 18.12,
      "spread30dAvg": 15.99,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.58,
          "priceAvg30d": 14.14
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.5,
          "priceAvg30d": 14.1
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.25,
          "priceAvg30d": 13.64
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.25,
          "priceAvg30d": 13.52
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.41,
          "priceAvg30d": 13.52
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.58,
          "priceAvg30d": 13.8
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.05,
          "priceAvg30d": 13.74
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.38,
          "priceAvg30d": 14.05
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.38,
          "priceAvg30d": 13.79
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.09,
          "priceAvg30d": 14.52
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.95,
          "priceAvg30d": 15.43
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.38,
          "priceAvg30d": 15.65
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.31,
          "priceAvg30d": 15.58
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.7,
          "priceAvg30d": 13.68
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 13.15
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 5.01,
          "priceAvg30d": 12.62
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 6.2,
          "priceAvg30d": 13.32
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 5.89,
          "priceAvg30d": 14.15
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 6.2,
          "priceAvg30d": 13.62
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 6.2,
          "priceAvg30d": 12.37
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.1,
          "priceAvg30d": 11.39
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.77,
          "priceAvg30d": 10.99
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.77,
          "priceAvg30d": 10.93
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.2,
          "priceAvg30d": 10.96
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.8,
          "priceAvg30d": 9.79
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 6.0,
          "priceAvg30d": 10.34
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 6.05,
          "priceAvg30d": 12.48
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.87,
          "priceAvg30d": 14.4
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.9,
          "priceAvg30d": 14.33
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.94,
          "priceAvg30d": 15.25
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.63,
          "priceAvg30d": 17.4
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.63,
          "priceAvg30d": 21.14
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.1,
          "priceAvg30d": 23.29
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 8.37,
          "priceAvg30d": 26.82
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.83,
          "priceAvg30d": 27.14
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 14.96,
          "priceAvg30d": 28.77
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.81,
          "priceAvg30d": 29.25
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.02,
          "priceAvg30d": 28.24
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 14.84,
          "priceAvg30d": 26.37
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.99,
          "priceAvg30d": 23.55
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.3,
          "priceAvg30d": 22.56
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.02,
          "priceAvg30d": 20.93
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.02,
          "priceAvg30d": 19.61
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.61,
          "priceAvg30d": 18.63
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 14.61,
          "priceAvg30d": 17.4
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 11.25,
          "priceAvg30d": 16.08
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.5,
          "priceAvg30d": 15.96
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.37,
          "priceAvg30d": 14.05
        }
      ],
      "avg": 10.48,
      "max": 17.31,
      "maxBlock": 13,
      "min": 5.01,
      "minBlock": 16,
      "spread3h": 0.47,
      "spreadLowAvg": 9.49,
      "spreadHighAvg": 9.96,
      "avg30d": 16.59,
      "spread30dAvg": 17.1,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.58,
          "priceAvg30d": 13.53
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.5,
          "priceAvg30d": 13.81
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.25,
          "priceAvg30d": 12.37
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.25,
          "priceAvg30d": 11.87
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.41,
          "priceAvg30d": 11.57
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.58,
          "priceAvg30d": 11.66
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.05,
          "priceAvg30d": 11.72
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.38,
          "priceAvg30d": 12.04
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.38,
          "priceAvg30d": 12.02
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.09,
          "priceAvg30d": 13.36
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.95,
          "priceAvg30d": 14.53
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.38,
          "priceAvg30d": 15.11
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.31,
          "priceAvg30d": 15.43
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.7,
          "priceAvg30d": 12.58
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 11.76
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 5.01,
          "priceAvg30d": 11.18
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 6.2,
          "priceAvg30d": 12.43
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 5.89,
          "priceAvg30d": 13.15
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 6.2,
          "priceAvg30d": 13.56
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 3.5,
          "priceAvg30d": 12.9
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 12.15
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 12.01
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 11.81
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 11.69
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 10.91
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 11.14
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.04,
          "priceAvg30d": 12.57
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 1.5,
          "priceAvg30d": 14.05
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.53,
          "priceAvg30d": 14.65
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.63,
          "priceAvg30d": 15.85
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.63,
          "priceAvg30d": 18.8
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.63,
          "priceAvg30d": 22.53
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.1,
          "priceAvg30d": 25.18
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 8.37,
          "priceAvg30d": 28.69
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.83,
          "priceAvg30d": 28.92
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 14.96,
          "priceAvg30d": 29.68
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.81,
          "priceAvg30d": 29.94
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.02,
          "priceAvg30d": 28.93
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 14.84,
          "priceAvg30d": 27.62
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.99,
          "priceAvg30d": 25.64
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.3,
          "priceAvg30d": 24.28
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.02,
          "priceAvg30d": 22.77
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.02,
          "priceAvg30d": 21.67
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.61,
          "priceAvg30d": 20.53
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 14.61,
          "priceAvg30d": 19.1
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 11.25,
          "priceAvg30d": 17.26
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.5,
          "priceAvg30d": 16.62
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.37,
          "priceAvg30d": 13.04
        }
      ],
      "avg": 9.21,
      "max": 17.31,
      "maxBlock": 13,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 7.36,
      "spreadLowAvg": 2.6,
      "spreadHighAvg": 9.96,
      "avg30d": 16.76,
      "spread30dAvg": 17.63,
      "historyDays": 30
    }
  }
};
