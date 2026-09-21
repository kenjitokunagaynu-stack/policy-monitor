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
  "targetDate": "2026-09-21",
  "fetchedAt": "2026-09-21T09:04:44+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 16.81,
        "priceAvg30d": 17.45
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 13.39,
        "priceAvg30d": 16.47
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 12.02,
        "priceAvg30d": 15.73
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 11.7,
        "priceAvg30d": 15.8
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 11.81,
        "priceAvg30d": 15.68
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 12.16,
        "priceAvg30d": 15.78
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 14.08,
        "priceAvg30d": 16.03
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 14.08,
        "priceAvg30d": 16.21
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 14.08,
        "priceAvg30d": 16.52
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 17.1,
        "priceAvg30d": 17.23
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 19.0,
        "priceAvg30d": 17.98
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 18.0,
        "priceAvg30d": 17.63
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 16.81,
        "priceAvg30d": 16.86
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 14.1,
        "priceAvg30d": 16.09
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 14.08,
        "priceAvg30d": 15.42
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 14.08,
        "priceAvg30d": 15.65
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 14.1,
        "priceAvg30d": 16.48
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 14.12,
        "priceAvg30d": 18.08
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 14.3,
        "priceAvg30d": 18.75
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 14.08,
        "priceAvg30d": 18.64
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 14.1,
        "priceAvg30d": 17.74
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 14.08,
        "priceAvg30d": 17.76
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 13.39,
        "priceAvg30d": 17.75
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 13.39,
        "priceAvg30d": 17.58
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 12.94,
        "priceAvg30d": 16.22
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 13.5,
        "priceAvg30d": 16.62
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 14.08,
        "priceAvg30d": 17.92
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 16.61,
        "priceAvg30d": 19.66
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 21.58,
        "priceAvg30d": 21.32
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 22.66,
        "priceAvg30d": 23.05
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 22.13,
        "priceAvg30d": 22.33
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 22.5,
        "priceAvg30d": 25.05
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 22.5,
        "priceAvg30d": 26.38
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 24.12,
        "priceAvg30d": 29.02
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 24.37,
        "priceAvg30d": 28.93
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 25.42,
        "priceAvg30d": 29.58
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 26.32,
        "priceAvg30d": 29.56
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 26.93,
        "priceAvg30d": 28.84
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 26.55,
        "priceAvg30d": 27.44
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 25.0,
        "priceAvg30d": 25.43
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 24.35,
        "priceAvg30d": 23.65
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 24.09,
        "priceAvg30d": 22.23
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 24.22,
        "priceAvg30d": 21.09
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 22.73,
        "priceAvg30d": 22.23
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 20.96,
        "priceAvg30d": 21.49
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 19.0,
        "priceAvg30d": 19.55
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 18.42,
        "priceAvg30d": 19.26
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 14.3,
        "priceAvg30d": 17.38
      }
    ],
    "avg": 17.92,
    "max": 26.93,
    "maxBlock": 38,
    "min": 11.7,
    "minBlock": 4,
    "spread3h": 11.96,
    "spreadLowAvg": 13.38,
    "spreadHighAvg": 25.33,
    "avg30d": 19.99,
    "spread30dAvg": 13.99,
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
          "price": 10.37,
          "priceAvg30d": 14.08
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.41,
          "priceAvg30d": 13.25
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.67,
          "priceAvg30d": 12.73
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.67,
          "priceAvg30d": 12.57
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.67,
          "priceAvg30d": 13.51
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.67,
          "priceAvg30d": 14.03
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 9.67,
          "priceAvg30d": 15.09
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 9.67,
          "priceAvg30d": 15.3
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.46,
          "priceAvg30d": 15.67
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 9.55,
          "priceAvg30d": 15.77
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 9.67,
          "priceAvg30d": 15.62
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.46,
          "priceAvg30d": 14.67
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 9.67,
          "priceAvg30d": 13.47
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.46,
          "priceAvg30d": 11.69
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.55,
          "priceAvg30d": 10.9
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.54,
          "priceAvg30d": 10.6
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.38,
          "priceAvg30d": 10.29
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.67,
          "priceAvg30d": 10.75
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.5,
          "priceAvg30d": 10.17
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 7.0,
          "priceAvg30d": 9.41
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 7.0,
          "priceAvg30d": 8.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 7.0,
          "priceAvg30d": 8.88
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.5,
          "priceAvg30d": 9.32
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.5,
          "priceAvg30d": 8.6
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.5,
          "priceAvg30d": 8.25
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.5,
          "priceAvg30d": 8.01
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.5,
          "priceAvg30d": 9.23
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.5,
          "priceAvg30d": 11.15
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.5,
          "priceAvg30d": 11.26
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.5,
          "priceAvg30d": 12.54
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.81,
          "priceAvg30d": 14.2
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.35,
          "priceAvg30d": 16.37
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.0,
          "priceAvg30d": 18.97
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.52,
          "priceAvg30d": 21.52
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 15.99,
          "priceAvg30d": 21.82
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.0,
          "priceAvg30d": 22.28
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 10.54,
          "priceAvg30d": 22.04
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 10.58,
          "priceAvg30d": 22.64
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.1,
          "priceAvg30d": 21.61
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.5,
          "priceAvg30d": 20.54
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 10.69,
          "priceAvg30d": 19.87
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 10.46,
          "priceAvg30d": 19.11
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 10.46,
          "priceAvg30d": 17.99
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.68,
          "priceAvg30d": 17.71
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 10.68,
          "priceAvg30d": 17.65
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.46,
          "priceAvg30d": 16.2
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.55,
          "priceAvg30d": 15.34
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.5,
          "priceAvg30d": 14.4
        }
      ],
      "avg": 10.89,
      "max": 20.35,
      "maxBlock": 32,
      "min": 7.0,
      "minBlock": 20,
      "spread3h": 4.54,
      "spreadLowAvg": 8.84,
      "spreadHighAvg": 13.39,
      "avg30d": 14.5,
      "spread30dAvg": 12.26,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.67,
          "priceAvg30d": 18.58
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.67,
          "priceAvg30d": 17.28
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.67,
          "priceAvg30d": 16.07
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.67,
          "priceAvg30d": 15.95
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.67,
          "priceAvg30d": 16.17
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.67,
          "priceAvg30d": 16.27
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 9.67,
          "priceAvg30d": 17.42
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 9.67,
          "priceAvg30d": 17.62
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 9.67,
          "priceAvg30d": 17.96
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 9.55,
          "priceAvg30d": 18.33
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 9.67,
          "priceAvg30d": 18.86
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 9.67,
          "priceAvg30d": 18.15
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 9.67,
          "priceAvg30d": 16.66
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.54,
          "priceAvg30d": 14.22
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.55,
          "priceAvg30d": 13.5
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.54,
          "priceAvg30d": 13.21
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.38,
          "priceAvg30d": 11.21
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.67,
          "priceAvg30d": 12.1
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.67,
          "priceAvg30d": 12.82
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.67,
          "priceAvg30d": 12.49
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.54,
          "priceAvg30d": 11.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.67,
          "priceAvg30d": 12.1
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.67,
          "priceAvg30d": 11.71
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.67,
          "priceAvg30d": 10.72
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.67,
          "priceAvg30d": 9.46
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.67,
          "priceAvg30d": 9.96
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.78,
          "priceAvg30d": 11.54
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 13.7,
          "priceAvg30d": 12.93
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 15.93,
          "priceAvg30d": 13.18
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 14.31,
          "priceAvg30d": 14.82
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 15.9,
          "priceAvg30d": 16.52
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.35,
          "priceAvg30d": 19.85
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.0,
          "priceAvg30d": 22.67
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.52,
          "priceAvg30d": 25.79
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 15.99,
          "priceAvg30d": 25.43
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.0,
          "priceAvg30d": 25.93
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 10.54,
          "priceAvg30d": 25.96
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 10.58,
          "priceAvg30d": 25.8
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.1,
          "priceAvg30d": 23.99
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.5,
          "priceAvg30d": 22.69
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 10.69,
          "priceAvg30d": 21.16
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 9.78,
          "priceAvg30d": 20.23
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 9.78,
          "priceAvg30d": 19.29
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.68,
          "priceAvg30d": 19.36
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 9.25,
          "priceAvg30d": 20.41
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 9.25,
          "priceAvg30d": 18.8
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.55,
          "priceAvg30d": 19.07
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 6.6,
          "priceAvg30d": 18.37
        }
      ],
      "avg": 11.28,
      "max": 20.35,
      "maxBlock": 32,
      "min": 6.6,
      "minBlock": 48,
      "spread3h": 6.76,
      "spreadLowAvg": 9.35,
      "spreadHighAvg": 16.11,
      "avg30d": 17.17,
      "spread30dAvg": 13.57,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 23.11,
          "priceAvg30d": 19.09
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 21.69,
          "priceAvg30d": 18.53
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 21.69,
          "priceAvg30d": 17.78
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 21.69,
          "priceAvg30d": 18.31
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 21.69,
          "priceAvg30d": 18.11
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 21.69,
          "priceAvg30d": 18.09
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 21.69,
          "priceAvg30d": 18.46
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.69,
          "priceAvg30d": 18.49
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.69,
          "priceAvg30d": 18.9
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 21.69,
          "priceAvg30d": 19.19
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.74,
          "priceAvg30d": 19.72
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.13,
          "priceAvg30d": 19.32
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.04,
          "priceAvg30d": 18.43
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.13,
          "priceAvg30d": 18.52
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.31,
          "priceAvg30d": 18.69
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 24.32,
          "priceAvg30d": 19.33
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 24.87,
          "priceAvg30d": 20.53
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.02,
          "priceAvg30d": 23.08
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 27.14,
          "priceAvg30d": 22.81
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 28.58,
          "priceAvg30d": 23.26
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 27.69,
          "priceAvg30d": 22.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.64,
          "priceAvg30d": 23.3
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.8,
          "priceAvg30d": 23.57
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.64,
          "priceAvg30d": 23.63
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 27.33,
          "priceAvg30d": 22.1
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 27.56,
          "priceAvg30d": 22.6
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.8,
          "priceAvg30d": 23.61
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.44,
          "priceAvg30d": 24.85
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 29.01,
          "priceAvg30d": 25.52
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.29,
          "priceAvg30d": 26.9
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.79,
          "priceAvg30d": 24.35
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.04,
          "priceAvg30d": 26.75
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.04,
          "priceAvg30d": 28.09
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.04,
          "priceAvg30d": 29.28
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 31.04,
          "priceAvg30d": 28.77
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 31.04,
          "priceAvg30d": 28.57
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 33.99,
          "priceAvg30d": 27.95
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.32,
          "priceAvg30d": 27.92
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 34.5,
          "priceAvg30d": 26.23
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 33.15,
          "priceAvg30d": 25.07
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.09,
          "priceAvg30d": 22.99
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.04,
          "priceAvg30d": 22.53
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 31.04,
          "priceAvg30d": 21.7
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 29.82,
          "priceAvg30d": 24.0
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 31.04,
          "priceAvg30d": 22.98
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.0,
          "priceAvg30d": 21.68
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.33,
          "priceAvg30d": 21.54
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 27.32,
          "priceAvg30d": 19.81
        }
      ],
      "avg": 27.15,
      "max": 34.5,
      "maxBlock": 39,
      "min": 21.69,
      "minBlock": 2,
      "spread3h": 9.85,
      "spreadLowAvg": 22.92,
      "spreadHighAvg": 32.77,
      "avg30d": 22.45,
      "spread30dAvg": 10.68,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 23.11,
          "priceAvg30d": 19.24
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 21.69,
          "priceAvg30d": 18.63
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 21.69,
          "priceAvg30d": 17.89
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.58,
          "priceAvg30d": 18.27
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.6,
          "priceAvg30d": 18.08
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.62,
          "priceAvg30d": 18.12
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 21.69,
          "priceAvg30d": 18.31
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.69,
          "priceAvg30d": 18.55
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.69,
          "priceAvg30d": 18.97
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 21.69,
          "priceAvg30d": 19.29
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.74,
          "priceAvg30d": 19.71
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.13,
          "priceAvg30d": 19.69
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.04,
          "priceAvg30d": 19.07
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.13,
          "priceAvg30d": 18.73
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.31,
          "priceAvg30d": 18.18
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 24.32,
          "priceAvg30d": 18.48
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 24.87,
          "priceAvg30d": 20.16
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.02,
          "priceAvg30d": 22.11
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 27.14,
          "priceAvg30d": 22.77
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 28.58,
          "priceAvg30d": 23.13
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 27.69,
          "priceAvg30d": 22.47
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.64,
          "priceAvg30d": 22.67
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.8,
          "priceAvg30d": 22.78
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.64,
          "priceAvg30d": 22.76
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 27.33,
          "priceAvg30d": 21.17
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 27.56,
          "priceAvg30d": 21.65
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.8,
          "priceAvg30d": 23.75
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.44,
          "priceAvg30d": 25.34
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 29.01,
          "priceAvg30d": 26.12
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.29,
          "priceAvg30d": 27.11
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.79,
          "priceAvg30d": 26.49
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.04,
          "priceAvg30d": 28.66
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.04,
          "priceAvg30d": 29.99
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.04,
          "priceAvg30d": 32.09
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 31.04,
          "priceAvg30d": 32.27
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 31.04,
          "priceAvg30d": 32.6
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 33.99,
          "priceAvg30d": 32.7
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.32,
          "priceAvg30d": 31.7
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 34.5,
          "priceAvg30d": 30.34
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 33.15,
          "priceAvg30d": 28.24
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.09,
          "priceAvg30d": 26.64
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.04,
          "priceAvg30d": 25.62
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 31.04,
          "priceAvg30d": 24.39
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 29.82,
          "priceAvg30d": 24.38
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 31.04,
          "priceAvg30d": 23.6
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.0,
          "priceAvg30d": 22.09
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.33,
          "priceAvg30d": 21.61
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 27.32,
          "priceAvg30d": 20.04
        }
      ],
      "avg": 27.02,
      "max": 34.5,
      "maxBlock": 39,
      "min": 19.58,
      "minBlock": 4,
      "spread3h": 11.54,
      "spreadLowAvg": 21.23,
      "spreadHighAvg": 32.77,
      "avg30d": 23.26,
      "spread30dAvg": 14.91,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.49,
          "priceAvg30d": 14.76
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.45,
          "priceAvg30d": 14.74
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.3,
          "priceAvg30d": 14.38
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.28,
          "priceAvg30d": 14.23
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.78,
          "priceAvg30d": 14.25
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.28,
          "priceAvg30d": 14.52
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 14.68
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.39,
          "priceAvg30d": 14.73
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.38,
          "priceAvg30d": 14.69
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.5,
          "priceAvg30d": 15.45
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 11.7,
          "priceAvg30d": 16.06
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.28,
          "priceAvg30d": 16.16
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.38,
          "priceAvg30d": 16.57
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.28,
          "priceAvg30d": 14.94
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 14.87
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.63,
          "priceAvg30d": 14.53
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.29,
          "priceAvg30d": 15.66
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.27,
          "priceAvg30d": 19.07
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.38,
          "priceAvg30d": 20.41
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.0,
          "priceAvg30d": 21.31
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.61,
          "priceAvg30d": 20.53
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.52,
          "priceAvg30d": 20.57
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.7,
          "priceAvg30d": 20.42
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.0,
          "priceAvg30d": 20.4
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.52,
          "priceAvg30d": 18.24
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.52,
          "priceAvg30d": 18.85
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.09,
          "priceAvg30d": 21.3
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 12.61,
          "priceAvg30d": 22.67
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 14.41,
          "priceAvg30d": 23.35
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 16.5,
          "priceAvg30d": 23.95
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.28,
          "priceAvg30d": 23.34
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.53,
          "priceAvg30d": 25.32
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.0,
          "priceAvg30d": 25.67
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.37,
          "priceAvg30d": 28.49
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.86,
          "priceAvg30d": 28.34
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.69,
          "priceAvg30d": 29.25
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.81,
          "priceAvg30d": 29.5
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.81,
          "priceAvg30d": 28.49
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 16.02,
          "priceAvg30d": 27.13
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 14.96,
          "priceAvg30d": 25.21
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 12.5,
          "priceAvg30d": 23.76
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 11.34,
          "priceAvg30d": 22.63
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 12.35,
          "priceAvg30d": 21.61
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.95,
          "priceAvg30d": 20.63
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 12.09,
          "priceAvg30d": 19.61
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.38,
          "priceAvg30d": 17.9
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.37,
          "priceAvg30d": 17.57
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.0,
          "priceAvg30d": 14.9
        }
      ],
      "avg": 11.33,
      "max": 16.81,
      "maxBlock": 37,
      "min": 8.0,
      "minBlock": 20,
      "spread3h": 3.82,
      "spreadLowAvg": 10.63,
      "spreadHighAvg": 14.45,
      "avg30d": 19.91,
      "spread30dAvg": 14.82,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.17,
          "priceAvg30d": 14.35
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.38,
          "priceAvg30d": 14.62
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.3,
          "priceAvg30d": 14.38
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.28,
          "priceAvg30d": 14.23
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.78,
          "priceAvg30d": 14.24
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.28,
          "priceAvg30d": 14.52
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 14.68
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.39,
          "priceAvg30d": 14.73
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.38,
          "priceAvg30d": 14.69
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.5,
          "priceAvg30d": 15.45
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 11.7,
          "priceAvg30d": 16.03
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.28,
          "priceAvg30d": 16.14
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.38,
          "priceAvg30d": 16.57
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.28,
          "priceAvg30d": 14.94
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 14.86
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.63,
          "priceAvg30d": 14.39
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.29,
          "priceAvg30d": 15.32
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.27,
          "priceAvg30d": 18.16
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.38,
          "priceAvg30d": 19.55
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.0,
          "priceAvg30d": 20.1
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.61,
          "priceAvg30d": 19.34
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.52,
          "priceAvg30d": 19.5
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.7,
          "priceAvg30d": 19.83
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.0,
          "priceAvg30d": 19.31
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.52,
          "priceAvg30d": 17.72
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.52,
          "priceAvg30d": 18.09
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.09,
          "priceAvg30d": 20.58
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 12.61,
          "priceAvg30d": 22.13
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 14.41,
          "priceAvg30d": 22.64
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 16.5,
          "priceAvg30d": 22.99
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.28,
          "priceAvg30d": 22.35
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.53,
          "priceAvg30d": 24.12
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.0,
          "priceAvg30d": 25.15
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.37,
          "priceAvg30d": 28.13
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.86,
          "priceAvg30d": 28.19
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.69,
          "priceAvg30d": 29.12
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.81,
          "priceAvg30d": 29.38
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.81,
          "priceAvg30d": 28.35
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 16.02,
          "priceAvg30d": 27.0
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 14.96,
          "priceAvg30d": 25.08
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 12.5,
          "priceAvg30d": 23.76
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 11.34,
          "priceAvg30d": 22.54
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 12.35,
          "priceAvg30d": 21.48
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.95,
          "priceAvg30d": 20.3
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 12.09,
          "priceAvg30d": 19.04
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.38,
          "priceAvg30d": 17.38
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.37,
          "priceAvg30d": 17.16
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.0,
          "priceAvg30d": 14.61
        }
      ],
      "avg": 11.3,
      "max": 16.81,
      "maxBlock": 37,
      "min": 8.0,
      "minBlock": 20,
      "spread3h": 3.82,
      "spreadLowAvg": 10.63,
      "spreadHighAvg": 14.45,
      "avg30d": 19.53,
      "spread30dAvg": 14.2,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.17,
          "priceAvg30d": 14.35
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.38,
          "priceAvg30d": 14.62
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.3,
          "priceAvg30d": 14.38
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.28,
          "priceAvg30d": 14.23
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.78,
          "priceAvg30d": 14.24
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.28,
          "priceAvg30d": 14.52
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 14.58
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.39,
          "priceAvg30d": 14.73
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.38,
          "priceAvg30d": 14.65
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.5,
          "priceAvg30d": 15.38
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 11.7,
          "priceAvg30d": 16.02
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.28,
          "priceAvg30d": 16.13
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.38,
          "priceAvg30d": 16.49
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.28,
          "priceAvg30d": 14.79
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 14.45
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.63,
          "priceAvg30d": 13.44
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.29,
          "priceAvg30d": 13.97
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.27,
          "priceAvg30d": 14.9
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.38,
          "priceAvg30d": 15.13
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.0,
          "priceAvg30d": 14.36
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.61,
          "priceAvg30d": 14.2
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.38,
          "priceAvg30d": 13.97
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.35,
          "priceAvg30d": 13.88
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.38,
          "priceAvg30d": 13.61
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.37,
          "priceAvg30d": 11.99
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.35,
          "priceAvg30d": 12.23
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.76,
          "priceAvg30d": 14.58
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.86,
          "priceAvg30d": 16.03
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.35,
          "priceAvg30d": 15.6
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.63,
          "priceAvg30d": 16.49
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.28,
          "priceAvg30d": 18.91
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.53,
          "priceAvg30d": 22.42
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.0,
          "priceAvg30d": 24.62
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.37,
          "priceAvg30d": 27.92
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.86,
          "priceAvg30d": 28.19
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.69,
          "priceAvg30d": 29.12
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.81,
          "priceAvg30d": 29.38
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.81,
          "priceAvg30d": 28.35
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 16.02,
          "priceAvg30d": 27.0
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 14.96,
          "priceAvg30d": 25.08
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 12.5,
          "priceAvg30d": 23.76
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 11.34,
          "priceAvg30d": 22.54
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 12.35,
          "priceAvg30d": 21.48
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.95,
          "priceAvg30d": 20.3
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 12.09,
          "priceAvg30d": 19.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.38,
          "priceAvg30d": 17.37
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.37,
          "priceAvg30d": 17.16
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.0,
          "priceAvg30d": 14.61
        }
      ],
      "avg": 10.79,
      "max": 16.81,
      "maxBlock": 37,
      "min": 8.0,
      "minBlock": 20,
      "spread3h": 4.4,
      "spreadLowAvg": 10.05,
      "spreadHighAvg": 14.45,
      "avg30d": 17.82,
      "spread30dAvg": 15.48,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.17,
          "priceAvg30d": 13.91
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.38,
          "priceAvg30d": 13.89
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.3,
          "priceAvg30d": 13.5
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.28,
          "priceAvg30d": 13.41
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.78,
          "priceAvg30d": 13.31
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.28,
          "priceAvg30d": 13.64
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 13.6
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.39,
          "priceAvg30d": 13.91
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.38,
          "priceAvg30d": 13.65
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.5,
          "priceAvg30d": 14.44
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 11.7,
          "priceAvg30d": 15.26
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.28,
          "priceAvg30d": 15.46
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.38,
          "priceAvg30d": 15.68
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.28,
          "priceAvg30d": 13.6
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 13.01
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.63,
          "priceAvg30d": 12.33
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.29,
          "priceAvg30d": 13.05
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.27,
          "priceAvg30d": 13.87
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.38,
          "priceAvg30d": 13.38
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.0,
          "priceAvg30d": 12.13
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.61,
          "priceAvg30d": 11.24
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.38,
          "priceAvg30d": 10.99
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.35,
          "priceAvg30d": 10.93
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.38,
          "priceAvg30d": 10.88
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.37,
          "priceAvg30d": 9.63
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.35,
          "priceAvg30d": 10.19
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.76,
          "priceAvg30d": 12.36
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.86,
          "priceAvg30d": 14.28
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.35,
          "priceAvg30d": 14.21
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.63,
          "priceAvg30d": 14.89
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.28,
          "priceAvg30d": 17.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.53,
          "priceAvg30d": 20.5
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.0,
          "priceAvg30d": 22.52
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.37,
          "priceAvg30d": 26.05
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.86,
          "priceAvg30d": 26.42
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.69,
          "priceAvg30d": 28.21
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.81,
          "priceAvg30d": 28.7
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.81,
          "priceAvg30d": 27.66
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 16.02,
          "priceAvg30d": 25.75
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 14.96,
          "priceAvg30d": 22.98
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 12.5,
          "priceAvg30d": 22.05
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 11.34,
          "priceAvg30d": 20.7
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 12.35,
          "priceAvg30d": 19.41
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.95,
          "priceAvg30d": 18.4
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 12.09,
          "priceAvg30d": 17.16
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.38,
          "priceAvg30d": 15.84
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.37,
          "priceAvg30d": 15.82
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.0,
          "priceAvg30d": 13.85
        }
      ],
      "avg": 10.79,
      "max": 16.81,
      "maxBlock": 37,
      "min": 8.0,
      "minBlock": 20,
      "spread3h": 4.4,
      "spreadLowAvg": 10.05,
      "spreadHighAvg": 14.45,
      "avg30d": 16.33,
      "spread30dAvg": 16.39,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.17,
          "priceAvg30d": 13.3
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.38,
          "priceAvg30d": 13.6
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.3,
          "priceAvg30d": 12.23
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.28,
          "priceAvg30d": 11.83
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.78,
          "priceAvg30d": 11.46
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.28,
          "priceAvg30d": 11.57
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 11.64
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.39,
          "priceAvg30d": 11.99
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.38,
          "priceAvg30d": 11.95
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.5,
          "priceAvg30d": 13.27
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.41,
          "priceAvg30d": 14.36
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.28,
          "priceAvg30d": 14.92
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.38,
          "priceAvg30d": 15.52
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.28,
          "priceAvg30d": 12.51
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 11.61
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.63,
          "priceAvg30d": 10.86
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.29,
          "priceAvg30d": 12.15
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 5.0,
          "priceAvg30d": 12.72
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 13.13
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 12.39
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 11.67
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 11.34
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 11.28
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 11.24
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 10.57
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 10.79
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 12.09
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 13.44
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 3.5,
          "priceAvg30d": 14.3
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.63,
          "priceAvg30d": 15.48
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.28,
          "priceAvg30d": 18.42
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.53,
          "priceAvg30d": 21.89
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.0,
          "priceAvg30d": 24.42
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.37,
          "priceAvg30d": 27.92
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.86,
          "priceAvg30d": 28.19
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.69,
          "priceAvg30d": 29.12
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.81,
          "priceAvg30d": 29.38
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.81,
          "priceAvg30d": 28.35
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 16.02,
          "priceAvg30d": 27.0
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 14.96,
          "priceAvg30d": 25.08
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 12.5,
          "priceAvg30d": 23.76
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 11.34,
          "priceAvg30d": 22.54
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 12.35,
          "priceAvg30d": 21.47
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.95,
          "priceAvg30d": 20.3
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 12.09,
          "priceAvg30d": 18.86
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.38,
          "priceAvg30d": 17.02
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.37,
          "priceAvg30d": 16.48
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.0,
          "priceAvg30d": 12.84
        }
      ],
      "avg": 8.48,
      "max": 16.81,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 10.63,
      "spreadLowAvg": 3.82,
      "spreadHighAvg": 14.45,
      "avg30d": 16.42,
      "spread30dAvg": 17.35,
      "historyDays": 30
    }
  }
};
