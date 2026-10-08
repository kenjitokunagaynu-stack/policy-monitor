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
  "targetDate": "2026-10-08",
  "fetchedAt": "2026-10-08T12:34:45+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 22.72,
        "priceAvg30d": 18.1
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 22.12,
        "priceAvg30d": 16.44
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 22.01,
        "priceAvg30d": 15.28
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 21.76,
        "priceAvg30d": 14.67
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 21.56,
        "priceAvg30d": 14.33
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 22.06,
        "priceAvg30d": 15.04
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 22.13,
        "priceAvg30d": 15.89
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 22.66,
        "priceAvg30d": 16.8
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 22.72,
        "priceAvg30d": 17.64
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 23.23,
        "priceAvg30d": 18.72
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 22.88,
        "priceAvg30d": 19.68
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 23.35,
        "priceAvg30d": 19.36
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 22.99,
        "priceAvg30d": 18.52
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 21.49,
        "priceAvg30d": 16.08
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 13.92,
        "priceAvg30d": 13.97
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 10.23,
        "priceAvg30d": 13.26
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 10.46,
        "priceAvg30d": 13.71
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 10.23,
        "priceAvg30d": 14.47
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 9.19,
        "priceAvg30d": 14.97
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 7.83,
        "priceAvg30d": 14.5
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 3.0,
        "priceAvg30d": 13.69
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 2.5,
        "priceAvg30d": 13.18
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 2.5,
        "priceAvg30d": 13.05
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 1.95,
        "priceAvg30d": 12.62
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 0.01,
        "priceAvg30d": 10.67
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 0.02,
        "priceAvg30d": 11.3
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 2.5,
        "priceAvg30d": 13.44
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 9.33,
        "priceAvg30d": 15.56
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 10.27,
        "priceAvg30d": 16.5
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 16.0,
        "priceAvg30d": 18.73
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 17.49,
        "priceAvg30d": 19.29
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 21.05,
        "priceAvg30d": 22.6
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 25.01,
        "priceAvg30d": 24.36
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 29.13,
        "priceAvg30d": 27.03
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 29.79,
        "priceAvg30d": 26.9
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 29.9,
        "priceAvg30d": 27.53
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 28.85,
        "priceAvg30d": 27.33
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 26.53,
        "priceAvg30d": 26.92
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 25.51,
        "priceAvg30d": 25.68
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 25.0,
        "priceAvg30d": 24.23
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 24.68,
        "priceAvg30d": 23.29
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 23.34,
        "priceAvg30d": 22.68
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 22.78,
        "priceAvg30d": 21.84
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 23.52,
        "priceAvg30d": 21.82
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 24.12,
        "priceAvg30d": 21.65
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 23.65,
        "priceAvg30d": 20.21
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 23.92,
        "priceAvg30d": 20.05
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 23.0,
        "priceAvg30d": 17.95
      }
    ],
    "avg": 18.14,
    "max": 29.9,
    "maxBlock": 36,
    "min": 0.01,
    "minBlock": 25,
    "spread3h": 24.34,
    "spreadLowAvg": 3.13,
    "spreadHighAvg": 27.47,
    "avg30d": 18.36,
    "spread30dAvg": 15.45,
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
          "price": 13.0,
          "priceAvg30d": 14.88
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.34,
          "priceAvg30d": 13.61
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.36,
          "priceAvg30d": 13.58
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.49,
          "priceAvg30d": 13.35
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.0,
          "priceAvg30d": 14.21
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 16.14,
          "priceAvg30d": 15.12
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 24.74,
          "priceAvg30d": 16.29
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.96,
          "priceAvg30d": 16.93
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.0,
          "priceAvg30d": 16.95
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.13,
          "priceAvg30d": 17.02
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.29,
          "priceAvg30d": 17.39
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.51,
          "priceAvg30d": 16.57
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.62,
          "priceAvg30d": 15.11
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.36,
          "priceAvg30d": 12.83
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.37,
          "priceAvg30d": 11.27
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.19,
          "priceAvg30d": 9.88
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 5.12,
          "priceAvg30d": 8.79
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.0,
          "priceAvg30d": 9.2
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 8.28
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 7.38
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.1
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.96
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 6.97
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.39
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.18
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.21
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 7.12
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 9.32
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 7.0,
          "priceAvg30d": 9.73
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.27,
          "priceAvg30d": 11.45
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.33,
          "priceAvg30d": 13.67
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.0,
          "priceAvg30d": 17.65
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.12,
          "priceAvg30d": 21.36
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.41,
          "priceAvg30d": 24.38
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.5,
          "priceAvg30d": 24.0
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.49,
          "priceAvg30d": 24.14
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.16,
          "priceAvg30d": 22.97
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.7,
          "priceAvg30d": 24.22
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 32.7,
          "priceAvg30d": 23.05
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.11,
          "priceAvg30d": 21.46
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.79,
          "priceAvg30d": 20.25
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 13.07,
          "priceAvg30d": 20.06
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 13.0,
          "priceAvg30d": 19.3
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.58,
          "priceAvg30d": 19.26
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.5,
          "priceAvg30d": 18.19
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.0,
          "priceAvg30d": 17.34
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.78,
          "priceAvg30d": 16.5
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.51,
          "priceAvg30d": 15.49
        }
      ],
      "avg": 16.28,
      "max": 37.5,
      "maxBlock": 35,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 28.59,
      "spreadLowAvg": 2.72,
      "spreadHighAvg": 31.31,
      "avg30d": 14.78,
      "spread30dAvg": 15.0,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.92,
          "priceAvg30d": 20.08
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.48,
          "priceAvg30d": 18.68
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.78,
          "priceAvg30d": 18.14
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.49,
          "priceAvg30d": 17.66
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.36,
          "priceAvg30d": 17.63
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 24.73,
          "priceAvg30d": 17.75
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 24.74,
          "priceAvg30d": 18.87
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.96,
          "priceAvg30d": 19.16
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.0,
          "priceAvg30d": 19.31
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.13,
          "priceAvg30d": 19.32
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.29,
          "priceAvg30d": 19.62
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.51,
          "priceAvg30d": 19.5
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.12,
          "priceAvg30d": 18.43
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.75,
          "priceAvg30d": 16.45
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 14.0,
          "priceAvg30d": 14.27
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.19,
          "priceAvg30d": 12.6
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 5.12,
          "priceAvg30d": 10.49
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.0,
          "priceAvg30d": 10.32
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 10.23
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 9.16
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 8.59
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 8.08
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 7.9
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 7.43
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.75
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 7.33
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 8.81
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 10.6
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 7.0,
          "priceAvg30d": 11.64
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 13.79,
          "priceAvg30d": 13.86
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 21.85,
          "priceAvg30d": 16.48
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.59,
          "priceAvg30d": 21.56
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.12,
          "priceAvg30d": 24.97
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.41,
          "priceAvg30d": 29.12
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.5,
          "priceAvg30d": 28.58
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.49,
          "priceAvg30d": 29.13
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.16,
          "priceAvg30d": 28.87
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.7,
          "priceAvg30d": 28.39
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 32.7,
          "priceAvg30d": 27.46
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.11,
          "priceAvg30d": 25.53
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.79,
          "priceAvg30d": 24.33
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.97,
          "priceAvg30d": 23.61
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.77,
          "priceAvg30d": 23.01
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.78,
          "priceAvg30d": 23.07
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.5,
          "priceAvg30d": 22.8
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.0,
          "priceAvg30d": 21.9
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.78,
          "priceAvg30d": 21.46
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.51,
          "priceAvg30d": 20.08
        }
      ],
      "avg": 19.68,
      "max": 37.5,
      "maxBlock": 35,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 30.69,
      "spreadLowAvg": 2.72,
      "spreadHighAvg": 33.41,
      "avg30d": 17.9,
      "spread30dAvg": 18.25,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.92,
          "priceAvg30d": 22.08
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.48,
          "priceAvg30d": 21.25
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.78,
          "priceAvg30d": 20.72
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.49,
          "priceAvg30d": 20.69
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.36,
          "priceAvg30d": 20.42
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 24.73,
          "priceAvg30d": 20.63
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 24.74,
          "priceAvg30d": 21.19
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.96,
          "priceAvg30d": 21.54
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.0,
          "priceAvg30d": 21.91
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.13,
          "priceAvg30d": 21.99
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.29,
          "priceAvg30d": 22.17
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.51,
          "priceAvg30d": 22.11
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.12,
          "priceAvg30d": 21.64
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.75,
          "priceAvg30d": 20.88
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 21.8,
          "priceAvg30d": 20.6
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.79,
          "priceAvg30d": 20.62
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 18.0,
          "priceAvg30d": 20.58
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.0,
          "priceAvg30d": 22.14
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 16.15,
          "priceAvg30d": 22.51
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.54,
          "priceAvg30d": 22.65
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.05,
          "priceAvg30d": 21.55
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.04,
          "priceAvg30d": 21.43
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.05,
          "priceAvg30d": 21.49
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.0,
          "priceAvg30d": 21.24
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.0,
          "priceAvg30d": 19.63
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.03,
          "priceAvg30d": 20.32
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.58,
          "priceAvg30d": 21.48
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.03,
          "priceAvg30d": 23.1
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 20.79,
          "priceAvg30d": 24.23
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 22.88,
          "priceAvg30d": 25.93
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.05,
          "priceAvg30d": 24.73
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.59,
          "priceAvg30d": 27.64
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.12,
          "priceAvg30d": 30.09
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.41,
          "priceAvg30d": 32.16
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.5,
          "priceAvg30d": 31.18
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.49,
          "priceAvg30d": 31.5
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.16,
          "priceAvg30d": 31.36
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.7,
          "priceAvg30d": 30.94
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 32.7,
          "priceAvg30d": 29.65
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.11,
          "priceAvg30d": 27.65
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.79,
          "priceAvg30d": 26.25
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.97,
          "priceAvg30d": 25.59
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.77,
          "priceAvg30d": 24.83
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.78,
          "priceAvg30d": 25.51
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.5,
          "priceAvg30d": 25.82
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.0,
          "priceAvg30d": 24.97
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.78,
          "priceAvg30d": 24.72
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.51,
          "priceAvg30d": 22.94
        }
      ],
      "avg": 23.52,
      "max": 37.5,
      "maxBlock": 35,
      "min": 5.0,
      "minBlock": 25,
      "spread3h": 21.62,
      "spreadLowAvg": 11.79,
      "spreadHighAvg": 33.41,
      "avg30d": 23.88,
      "spread30dAvg": 12.36,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.92,
          "priceAvg30d": 22.03
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.48,
          "priceAvg30d": 21.2
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.78,
          "priceAvg30d": 20.61
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.49,
          "priceAvg30d": 20.3
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.36,
          "priceAvg30d": 20.04
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 24.73,
          "priceAvg30d": 20.21
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 24.74,
          "priceAvg30d": 20.81
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.96,
          "priceAvg30d": 21.26
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.0,
          "priceAvg30d": 21.56
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.13,
          "priceAvg30d": 21.72
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.29,
          "priceAvg30d": 22.01
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.51,
          "priceAvg30d": 21.97
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.12,
          "priceAvg30d": 21.75
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.94,
          "priceAvg30d": 20.89
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 21.8,
          "priceAvg30d": 20.12
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.79,
          "priceAvg30d": 19.76
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 18.0,
          "priceAvg30d": 20.36
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.0,
          "priceAvg30d": 21.54
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 16.15,
          "priceAvg30d": 21.77
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.54,
          "priceAvg30d": 21.49
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.05,
          "priceAvg30d": 20.58
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.04,
          "priceAvg30d": 20.25
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.05,
          "priceAvg30d": 20.28
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.0,
          "priceAvg30d": 20.0
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.0,
          "priceAvg30d": 18.17
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 7.99,
          "priceAvg30d": 18.77
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.58,
          "priceAvg30d": 21.06
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.03,
          "priceAvg30d": 23.15
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 20.79,
          "priceAvg30d": 24.16
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 22.88,
          "priceAvg30d": 25.36
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.05,
          "priceAvg30d": 25.66
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.59,
          "priceAvg30d": 27.74
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.12,
          "priceAvg30d": 29.03
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.41,
          "priceAvg30d": 31.1
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.5,
          "priceAvg30d": 30.89
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.49,
          "priceAvg30d": 31.15
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.16,
          "priceAvg30d": 30.64
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.7,
          "priceAvg30d": 30.02
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 32.7,
          "priceAvg30d": 28.99
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.11,
          "priceAvg30d": 27.61
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.79,
          "priceAvg30d": 26.37
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.97,
          "priceAvg30d": 25.71
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.3,
          "priceAvg30d": 25.01
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.78,
          "priceAvg30d": 25.45
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.5,
          "priceAvg30d": 25.7
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.0,
          "priceAvg30d": 24.8
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.78,
          "priceAvg30d": 24.8
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.51,
          "priceAvg30d": 23.15
        }
      ],
      "avg": 23.53,
      "max": 37.5,
      "maxBlock": 35,
      "min": 5.0,
      "minBlock": 25,
      "spread3h": 21.8,
      "spreadLowAvg": 11.62,
      "spreadHighAvg": 33.41,
      "avg30d": 23.48,
      "spread30dAvg": 13.51,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.84,
          "priceAvg30d": 11.0
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.81,
          "priceAvg30d": 11.15
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.14,
          "priceAvg30d": 11.5
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.1,
          "priceAvg30d": 11.29
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.19,
          "priceAvg30d": 11.25
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.81,
          "priceAvg30d": 11.69
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.61,
          "priceAvg30d": 12.42
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.82,
          "priceAvg30d": 12.88
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.4,
          "priceAvg30d": 12.84
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.82,
          "priceAvg30d": 13.89
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 17.49,
          "priceAvg30d": 14.36
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.42,
          "priceAvg30d": 14.57
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.94,
          "priceAvg30d": 15.39
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.4,
          "priceAvg30d": 12.88
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 17.49,
          "priceAvg30d": 11.64
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.78,
          "priceAvg30d": 10.35
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 17.49,
          "priceAvg30d": 11.39
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.0,
          "priceAvg30d": 13.67
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 16.15,
          "priceAvg30d": 15.99
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.54,
          "priceAvg30d": 16.21
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.05,
          "priceAvg30d": 15.65
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.04,
          "priceAvg30d": 15.16
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.05,
          "priceAvg30d": 15.56
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.0,
          "priceAvg30d": 15.04
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 4.62,
          "priceAvg30d": 12.6
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.02,
          "priceAvg30d": 13.25
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 15.37
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.46,
          "priceAvg30d": 17.57
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 17.49,
          "priceAvg30d": 17.66
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 17.49,
          "priceAvg30d": 19.25
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.49,
          "priceAvg30d": 18.71
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 17.49,
          "priceAvg30d": 20.09
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.49,
          "priceAvg30d": 19.65
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.49,
          "priceAvg30d": 20.62
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.95,
          "priceAvg30d": 20.16
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.88,
          "priceAvg30d": 21.35
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.88,
          "priceAvg30d": 20.76
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.51,
          "priceAvg30d": 20.86
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.49,
          "priceAvg30d": 19.8
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.49,
          "priceAvg30d": 18.34
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.51,
          "priceAvg30d": 18.03
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.42,
          "priceAvg30d": 17.43
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.0,
          "priceAvg30d": 17.41
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.4,
          "priceAvg30d": 16.17
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.43,
          "priceAvg30d": 16.22
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.73,
          "priceAvg30d": 14.43
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.87,
          "priceAvg30d": 14.32
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.81,
          "priceAvg30d": 11.23
        }
      ],
      "avg": 14.66,
      "max": 19.95,
      "maxBlock": 35,
      "min": 0.02,
      "minBlock": 26,
      "spread3h": 9.69,
      "spreadLowAvg": 8.94,
      "spreadHighAvg": 18.62,
      "avg30d": 15.4,
      "spread30dAvg": 10.21,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.84,
          "priceAvg30d": 10.92
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.81,
          "priceAvg30d": 11.03
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.14,
          "priceAvg30d": 11.41
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.1,
          "priceAvg30d": 11.19
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.19,
          "priceAvg30d": 11.1
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.81,
          "priceAvg30d": 11.59
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.61,
          "priceAvg30d": 12.33
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.82,
          "priceAvg30d": 12.81
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.4,
          "priceAvg30d": 12.77
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.82,
          "priceAvg30d": 13.89
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 17.49,
          "priceAvg30d": 14.34
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.42,
          "priceAvg30d": 14.49
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.94,
          "priceAvg30d": 15.32
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.4,
          "priceAvg30d": 12.77
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 17.49,
          "priceAvg30d": 11.61
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.78,
          "priceAvg30d": 9.92
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 17.49,
          "priceAvg30d": 10.82
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.0,
          "priceAvg30d": 12.55
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 16.15,
          "priceAvg30d": 15.11
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.54,
          "priceAvg30d": 15.11
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.05,
          "priceAvg30d": 14.6
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.04,
          "priceAvg30d": 14.31
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.05,
          "priceAvg30d": 14.73
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.0,
          "priceAvg30d": 14.04
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 4.62,
          "priceAvg30d": 11.66
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.02,
          "priceAvg30d": 12.09
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 14.31
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.46,
          "priceAvg30d": 16.94
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 17.49,
          "priceAvg30d": 16.73
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 17.49,
          "priceAvg30d": 18.16
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.49,
          "priceAvg30d": 17.39
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 17.49,
          "priceAvg30d": 18.89
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.49,
          "priceAvg30d": 19.14
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.49,
          "priceAvg30d": 20.26
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.95,
          "priceAvg30d": 20.02
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.88,
          "priceAvg30d": 21.22
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.88,
          "priceAvg30d": 20.65
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.51,
          "priceAvg30d": 20.73
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.49,
          "priceAvg30d": 19.67
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.49,
          "priceAvg30d": 18.21
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.51,
          "priceAvg30d": 18.03
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.42,
          "priceAvg30d": 17.43
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.0,
          "priceAvg30d": 17.41
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.4,
          "priceAvg30d": 16.17
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.43,
          "priceAvg30d": 16.22
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.73,
          "priceAvg30d": 14.43
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.87,
          "priceAvg30d": 14.32
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.81,
          "priceAvg30d": 11.23
        }
      ],
      "avg": 14.66,
      "max": 19.95,
      "maxBlock": 35,
      "min": 0.02,
      "minBlock": 26,
      "spread3h": 9.69,
      "spreadLowAvg": 8.94,
      "spreadHighAvg": 18.62,
      "avg30d": 15.0,
      "spread30dAvg": 9.86,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.84,
          "priceAvg30d": 10.92
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.81,
          "priceAvg30d": 11.03
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.14,
          "priceAvg30d": 11.32
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.1,
          "priceAvg30d": 11.02
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.19,
          "priceAvg30d": 10.78
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.81,
          "priceAvg30d": 11.16
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 11.8
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.29,
          "priceAvg30d": 12.54
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.4,
          "priceAvg30d": 12.54
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 18.42,
          "priceAvg30d": 13.66
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 17.49,
          "priceAvg30d": 14.32
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.42,
          "priceAvg30d": 14.44
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.94,
          "priceAvg30d": 15.25
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.4,
          "priceAvg30d": 12.51
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.23,
          "priceAvg30d": 11.21
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.0,
          "priceAvg30d": 9.55
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.71,
          "priceAvg30d": 9.67
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.2,
          "priceAvg30d": 9.78
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 9.97
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.04,
          "priceAvg30d": 9.51
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 9.97
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 9.77
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 9.62
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 9.07
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 8.17
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 8.24
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 9.79
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 11.11
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.38,
          "priceAvg30d": 10.69
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.36,
          "priceAvg30d": 11.58
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.9,
          "priceAvg30d": 12.3
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.46,
          "priceAvg30d": 14.63
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.81,
          "priceAvg30d": 15.17
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.49,
          "priceAvg30d": 18.08
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.95,
          "priceAvg30d": 19.54
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.88,
          "priceAvg30d": 20.81
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.88,
          "priceAvg30d": 20.24
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.51,
          "priceAvg30d": 20.25
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.49,
          "priceAvg30d": 19.55
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.49,
          "priceAvg30d": 18.21
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.51,
          "priceAvg30d": 18.03
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.42,
          "priceAvg30d": 17.41
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.0,
          "priceAvg30d": 17.38
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.4,
          "priceAvg30d": 16.08
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.43,
          "priceAvg30d": 16.11
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.73,
          "priceAvg30d": 14.42
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.87,
          "priceAvg30d": 14.32
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.81,
          "priceAvg30d": 11.23
        }
      ],
      "avg": 11.37,
      "max": 19.95,
      "maxBlock": 35,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 14.38,
      "spreadLowAvg": 1.96,
      "spreadHighAvg": 16.34,
      "avg30d": 13.22,
      "spread30dAvg": 10.73,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.84,
          "priceAvg30d": 10.37
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.81,
          "priceAvg30d": 10.12
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.14,
          "priceAvg30d": 10.3
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.1,
          "priceAvg30d": 10.06
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.19,
          "priceAvg30d": 9.74
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.81,
          "priceAvg30d": 10.15
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 10.54
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.29,
          "priceAvg30d": 11.29
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.4,
          "priceAvg30d": 10.78
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 18.42,
          "priceAvg30d": 12.14
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 17.49,
          "priceAvg30d": 12.9
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.42,
          "priceAvg30d": 12.99
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.94,
          "priceAvg30d": 13.33
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.4,
          "priceAvg30d": 10.69
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.23,
          "priceAvg30d": 9.17
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.0,
          "priceAvg30d": 8.04
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.71,
          "priceAvg30d": 8.19
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.2,
          "priceAvg30d": 8.57
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 7.99
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.04,
          "priceAvg30d": 7.19
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.58
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 7.53
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 7.27
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 7.2
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 7.04
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.99
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 8.12
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 9.59
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.38,
          "priceAvg30d": 9.19
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.36,
          "priceAvg30d": 9.37
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 2.5,
          "priceAvg30d": 9.81
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.46,
          "priceAvg30d": 11.68
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.81,
          "priceAvg30d": 11.82
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.49,
          "priceAvg30d": 14.03
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.95,
          "priceAvg30d": 14.73
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.88,
          "priceAvg30d": 17.05
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.88,
          "priceAvg30d": 17.42
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.51,
          "priceAvg30d": 17.22
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.49,
          "priceAvg30d": 15.76
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.49,
          "priceAvg30d": 13.25
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.51,
          "priceAvg30d": 13.75
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.42,
          "priceAvg30d": 12.96
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.0,
          "priceAvg30d": 12.96
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.4,
          "priceAvg30d": 12.02
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.43,
          "priceAvg30d": 12.3
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.73,
          "priceAvg30d": 11.4
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.87,
          "priceAvg30d": 11.8
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.81,
          "priceAvg30d": 9.73
        }
      ],
      "avg": 11.22,
      "max": 19.95,
      "maxBlock": 35,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 14.38,
      "spreadLowAvg": 1.96,
      "spreadHighAvg": 16.34,
      "avg30d": 10.92,
      "spread30dAvg": 9.51,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.84,
          "priceAvg30d": 10.57
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.81,
          "priceAvg30d": 10.77
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.14,
          "priceAvg30d": 10.74
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.1,
          "priceAvg30d": 10.51
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.19,
          "priceAvg30d": 10.28
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.81,
          "priceAvg30d": 10.66
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 11.2
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.29,
          "priceAvg30d": 12.06
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.4,
          "priceAvg30d": 12.04
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 18.42,
          "priceAvg30d": 13.27
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 17.49,
          "priceAvg30d": 14.11
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.42,
          "priceAvg30d": 14.18
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.94,
          "priceAvg30d": 15.25
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.4,
          "priceAvg30d": 12.17
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.23,
          "priceAvg30d": 10.6
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.0,
          "priceAvg30d": 8.9
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.71,
          "priceAvg30d": 9.04
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.2,
          "priceAvg30d": 8.69
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 8.55
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.04,
          "priceAvg30d": 7.79
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.56
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 7.22
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 6.91
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.82
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.61
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.84
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 7.45
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 8.4
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.38,
          "priceAvg30d": 9.16
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.36,
          "priceAvg30d": 10.42
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.9,
          "priceAvg30d": 11.85
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.46,
          "priceAvg30d": 14.12
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.81,
          "priceAvg30d": 15.17
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.49,
          "priceAvg30d": 18.08
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.95,
          "priceAvg30d": 19.54
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.88,
          "priceAvg30d": 20.81
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.88,
          "priceAvg30d": 20.24
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.51,
          "priceAvg30d": 20.25
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.49,
          "priceAvg30d": 19.55
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.49,
          "priceAvg30d": 18.21
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.51,
          "priceAvg30d": 18.03
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.42,
          "priceAvg30d": 17.41
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.0,
          "priceAvg30d": 17.38
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.4,
          "priceAvg30d": 16.08
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.43,
          "priceAvg30d": 16.11
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.73,
          "priceAvg30d": 14.42
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.87,
          "priceAvg30d": 14.32
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.81,
          "priceAvg30d": 11.02
        }
      ],
      "avg": 11.37,
      "max": 19.95,
      "maxBlock": 35,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 14.38,
      "spreadLowAvg": 1.96,
      "spreadHighAvg": 16.34,
      "avg30d": 12.53,
      "spread30dAvg": 11.56,
      "historyDays": 30
    }
  }
};
