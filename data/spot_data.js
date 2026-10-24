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
  "targetDate": "2026-10-24",
  "fetchedAt": "2026-10-24T11:31:43+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 26.38,
        "priceAvg30d": 21.85
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 26.31,
        "priceAvg30d": 20.48
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 26.72,
        "priceAvg30d": 19.77
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 26.31,
        "priceAvg30d": 19.45
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 26.18,
        "priceAvg30d": 19.47
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 26.47,
        "priceAvg30d": 20.16
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 26.72,
        "priceAvg30d": 20.7
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 26.47,
        "priceAvg30d": 21.5
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 26.75,
        "priceAvg30d": 22.13
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 27.16,
        "priceAvg30d": 22.74
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 26.82,
        "priceAvg30d": 23.35
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 27.49,
        "priceAvg30d": 23.32
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 27.05,
        "priceAvg30d": 22.84
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 26.14,
        "priceAvg30d": 20.63
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 26.11,
        "priceAvg30d": 17.45
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 26.02,
        "priceAvg30d": 15.5
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 25.99,
        "priceAvg30d": 14.91
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 26.1,
        "priceAvg30d": 14.56
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 26.51,
        "priceAvg30d": 13.78
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 26.5,
        "priceAvg30d": 12.92
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 26.31,
        "priceAvg30d": 12.08
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 26.18,
        "priceAvg30d": 11.56
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 26.06,
        "priceAvg30d": 11.37
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 26.15,
        "priceAvg30d": 11.2
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 25.99,
        "priceAvg30d": 8.89
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 25.77,
        "priceAvg30d": 9.6
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 26.18,
        "priceAvg30d": 12.6
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 26.81,
        "priceAvg30d": 15.31
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 27.11,
        "priceAvg30d": 16.23
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 28.89,
        "priceAvg30d": 19.78
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 29.33,
        "priceAvg30d": 21.32
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 30.14,
        "priceAvg30d": 25.91
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 30.0,
        "priceAvg30d": 29.34
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 30.18,
        "priceAvg30d": 31.88
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 30.18,
        "priceAvg30d": 31.41
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 30.2,
        "priceAvg30d": 31.71
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 30.0,
        "priceAvg30d": 30.3
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 29.65,
        "priceAvg30d": 29.4
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 29.7,
        "priceAvg30d": 28.21
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 29.4,
        "priceAvg30d": 26.33
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 28.66,
        "priceAvg30d": 25.44
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 27.97,
        "priceAvg30d": 24.55
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 27.54,
        "priceAvg30d": 23.92
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 26.06,
        "priceAvg30d": 24.2
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 25.99,
        "priceAvg30d": 24.54
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 25.38,
        "priceAvg30d": 23.73
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 25.38,
        "priceAvg30d": 23.58
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 25.23,
        "priceAvg30d": 21.99
      }
    ],
    "avg": 27.22,
    "max": 30.2,
    "maxBlock": 36,
    "min": 25.23,
    "minBlock": 48,
    "spread3h": 4.45,
    "spreadLowAvg": 25.5,
    "spreadHighAvg": 29.95,
    "avg30d": 20.71,
    "spread30dAvg": 19.2,
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
          "price": 29.84,
          "priceAvg30d": 18.12
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.23,
          "priceAvg30d": 15.71
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.89,
          "priceAvg30d": 16.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.29,
          "priceAvg30d": 16.66
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.33,
          "priceAvg30d": 17.31
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.19,
          "priceAvg30d": 18.93
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.96,
          "priceAvg30d": 20.25
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.37,
          "priceAvg30d": 20.8
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.53,
          "priceAvg30d": 20.68
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.49,
          "priceAvg30d": 20.47
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.49,
          "priceAvg30d": 22.84
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.0,
          "priceAvg30d": 23.38
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.01,
          "priceAvg30d": 19.72
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.19,
          "priceAvg30d": 17.03
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.19,
          "priceAvg30d": 14.02
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 22.19,
          "priceAvg30d": 11.92
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 22.19,
          "priceAvg30d": 10.81
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.0,
          "priceAvg30d": 9.48
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 13.0,
          "priceAvg30d": 8.46
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.75,
          "priceAvg30d": 7.29
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.4,
          "priceAvg30d": 6.62
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.54,
          "priceAvg30d": 6.1
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.58,
          "priceAvg30d": 6.28
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.5,
          "priceAvg30d": 6.49
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.4,
          "priceAvg30d": 5.7
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.71,
          "priceAvg30d": 5.37
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.71,
          "priceAvg30d": 6.83
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.5,
          "priceAvg30d": 8.73
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.71,
          "priceAvg30d": 11.25
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 13.0,
          "priceAvg30d": 14.46
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 22.19,
          "priceAvg30d": 16.65
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 22.19,
          "priceAvg30d": 22.84
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 36.16,
          "priceAvg30d": 30.1
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 29.7,
          "priceAvg30d": 33.64
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.7,
          "priceAvg30d": 31.48
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 22.19,
          "priceAvg30d": 31.33
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 22.19,
          "priceAvg30d": 29.76
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.19,
          "priceAvg30d": 30.53
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.7,
          "priceAvg30d": 29.95
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.7,
          "priceAvg30d": 28.59
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.7,
          "priceAvg30d": 27.28
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.7,
          "priceAvg30d": 25.46
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 29.7,
          "priceAvg30d": 23.82
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.14,
          "priceAvg30d": 23.81
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.21,
          "priceAvg30d": 24.08
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.08,
          "priceAvg30d": 22.46
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.02,
          "priceAvg30d": 22.48
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 27.08,
          "priceAvg30d": 20.09
        }
      ],
      "avg": 21.7,
      "max": 36.16,
      "maxBlock": 33,
      "min": 9.71,
      "minBlock": 26,
      "spread3h": 12.76,
      "spreadLowAvg": 10.4,
      "spreadHighAvg": 23.16,
      "avg30d": 18.39,
      "spread30dAvg": 23.3,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.84,
          "priceAvg30d": 24.6
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.07,
          "priceAvg30d": 23.93
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 40.0,
          "priceAvg30d": 23.88
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 33.35,
          "priceAvg30d": 23.83
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 33.35,
          "priceAvg30d": 23.81
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.49,
          "priceAvg30d": 23.75
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.18,
          "priceAvg30d": 24.27
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.57,
          "priceAvg30d": 24.46
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.9,
          "priceAvg30d": 24.35
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.49,
          "priceAvg30d": 24.48
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.49,
          "priceAvg30d": 24.72
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.14,
          "priceAvg30d": 24.82
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.14,
          "priceAvg30d": 24.18
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.0,
          "priceAvg30d": 22.32
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.81,
          "priceAvg30d": 18.47
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.02,
          "priceAvg30d": 15.0
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 30.14,
          "priceAvg30d": 12.97
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.3,
          "priceAvg30d": 10.83
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.85,
          "priceAvg30d": 10.05
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 31.99,
          "priceAvg30d": 8.84
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 30.3,
          "priceAvg30d": 7.91
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 30.3,
          "priceAvg30d": 7.34
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 30.3,
          "priceAvg30d": 7.21
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 30.3,
          "priceAvg30d": 7.19
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 33.35,
          "priceAvg30d": 6.77
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 33.35,
          "priceAvg30d": 7.21
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 35.69,
          "priceAvg30d": 9.31
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 38.3,
          "priceAvg30d": 11.31
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 38.3,
          "priceAvg30d": 14.03
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 40.01,
          "priceAvg30d": 17.89
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.01,
          "priceAvg30d": 20.93
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 40.01,
          "priceAvg30d": 27.03
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 36.16,
          "priceAvg30d": 32.55
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.16,
          "priceAvg30d": 35.9
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.16,
          "priceAvg30d": 35.25
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.01,
          "priceAvg30d": 35.53
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.16,
          "priceAvg30d": 33.84
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.16,
          "priceAvg30d": 33.42
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 38.38,
          "priceAvg30d": 31.83
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 38.35,
          "priceAvg30d": 29.41
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.16,
          "priceAvg30d": 28.19
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.19,
          "priceAvg30d": 27.18
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.19,
          "priceAvg30d": 26.29
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.14,
          "priceAvg30d": 27.35
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 30.18,
          "priceAvg30d": 27.55
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.53,
          "priceAvg30d": 26.57
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.79,
          "priceAvg30d": 25.8
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.11,
          "priceAvg30d": 24.05
        }
      ],
      "avg": 33.05,
      "max": 40.01,
      "maxBlock": 30,
      "min": 28.11,
      "minBlock": 48,
      "spread3h": 6.99,
      "spreadLowAvg": 31.09,
      "spreadHighAvg": 38.08,
      "avg30d": 21.63,
      "spread30dAvg": 23.54,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.84,
          "priceAvg30d": 25.08
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.07,
          "priceAvg30d": 24.36
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 40.0,
          "priceAvg30d": 24.27
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 33.35,
          "priceAvg30d": 24.26
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 33.35,
          "priceAvg30d": 24.23
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.49,
          "priceAvg30d": 24.42
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.18,
          "priceAvg30d": 24.81
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.57,
          "priceAvg30d": 25.05
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.9,
          "priceAvg30d": 25.18
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.49,
          "priceAvg30d": 25.39
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.49,
          "priceAvg30d": 25.54
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.14,
          "priceAvg30d": 25.64
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.14,
          "priceAvg30d": 25.24
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.0,
          "priceAvg30d": 24.08
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.81,
          "priceAvg30d": 23.21
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.02,
          "priceAvg30d": 22.6
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 30.14,
          "priceAvg30d": 21.4
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.3,
          "priceAvg30d": 21.52
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.85,
          "priceAvg30d": 21.09
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 32.48,
          "priceAvg30d": 20.48
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 32.49,
          "priceAvg30d": 18.86
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 32.5,
          "priceAvg30d": 18.44
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 35.0,
          "priceAvg30d": 18.63
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 36.62,
          "priceAvg30d": 18.64
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 40.01,
          "priceAvg30d": 17.14
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 36.0,
          "priceAvg30d": 18.42
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 36.16,
          "priceAvg30d": 19.57
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 38.3,
          "priceAvg30d": 22.73
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 38.3,
          "priceAvg30d": 24.62
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 40.01,
          "priceAvg30d": 27.26
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.01,
          "priceAvg30d": 26.35
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 40.01,
          "priceAvg30d": 30.37
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 36.16,
          "priceAvg30d": 34.15
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.16,
          "priceAvg30d": 36.43
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.16,
          "priceAvg30d": 35.25
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.01,
          "priceAvg30d": 35.53
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.16,
          "priceAvg30d": 33.84
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.16,
          "priceAvg30d": 33.42
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 38.38,
          "priceAvg30d": 31.83
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 38.35,
          "priceAvg30d": 29.41
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.16,
          "priceAvg30d": 28.19
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.19,
          "priceAvg30d": 27.18
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.19,
          "priceAvg30d": 26.29
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.14,
          "priceAvg30d": 27.35
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 30.18,
          "priceAvg30d": 28.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.53,
          "priceAvg30d": 27.16
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.79,
          "priceAvg30d": 26.68
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.11,
          "priceAvg30d": 25.11
        }
      ],
      "avg": 33.58,
      "max": 40.01,
      "maxBlock": 25,
      "min": 28.11,
      "minBlock": 48,
      "spread3h": 3.92,
      "spreadLowAvg": 31.84,
      "spreadHighAvg": 35.76,
      "avg30d": 25.52,
      "spread30dAvg": 15.27,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.96,
          "priceAvg30d": 24.47
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.0,
          "priceAvg30d": 23.66
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 30.16,
          "priceAvg30d": 23.59
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.81,
          "priceAvg30d": 23.38
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.23,
          "priceAvg30d": 23.41
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 29.23,
          "priceAvg30d": 23.66
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.17,
          "priceAvg30d": 24.11
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.57,
          "priceAvg30d": 24.4
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.9,
          "priceAvg30d": 24.58
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.49,
          "priceAvg30d": 24.91
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.49,
          "priceAvg30d": 25.11
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.53,
          "priceAvg30d": 25.21
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.11,
          "priceAvg30d": 24.84
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 29.12,
          "priceAvg30d": 23.52
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.1,
          "priceAvg30d": 22.1
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.02,
          "priceAvg30d": 20.47
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 30.14,
          "priceAvg30d": 19.1
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.3,
          "priceAvg30d": 19.72
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.85,
          "priceAvg30d": 19.72
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 32.48,
          "priceAvg30d": 18.85
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 32.49,
          "priceAvg30d": 17.28
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 32.5,
          "priceAvg30d": 16.97
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 32.51,
          "priceAvg30d": 16.89
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 32.52,
          "priceAvg30d": 16.74
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 32.47,
          "priceAvg30d": 14.14
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 32.51,
          "priceAvg30d": 14.89
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 32.52,
          "priceAvg30d": 18.15
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 32.49,
          "priceAvg30d": 21.69
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 32.51,
          "priceAvg30d": 23.04
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.49,
          "priceAvg30d": 24.79
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 32.5,
          "priceAvg30d": 25.81
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.02,
          "priceAvg30d": 29.86
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.01,
          "priceAvg30d": 32.69
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.0,
          "priceAvg30d": 34.71
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 31.02,
          "priceAvg30d": 34.14
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 31.22,
          "priceAvg30d": 34.27
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.97,
          "priceAvg30d": 32.95
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.4,
          "priceAvg30d": 31.85
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 30.73
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.66,
          "priceAvg30d": 29.06
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.61,
          "priceAvg30d": 27.87
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.6,
          "priceAvg30d": 26.82
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.3,
          "priceAvg30d": 26.1
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.97,
          "priceAvg30d": 26.52
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.29,
          "priceAvg30d": 27.37
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.28,
          "priceAvg30d": 26.65
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.46,
          "priceAvg30d": 26.75
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.11,
          "priceAvg30d": 25.19
        }
      ],
      "avg": 30.34,
      "max": 32.52,
      "maxBlock": 24,
      "min": 27.97,
      "minBlock": 44,
      "spread3h": 4.08,
      "spreadLowAvg": 28.42,
      "spreadHighAvg": 32.5,
      "avg30d": 24.43,
      "spread30dAvg": 17.38,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.76,
          "priceAvg30d": 13.89
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.68,
          "priceAvg30d": 13.65
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.43,
          "priceAvg30d": 13.32
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.86,
          "priceAvg30d": 12.74
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.43,
          "priceAvg30d": 13.4
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.68,
          "priceAvg30d": 14.68
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.75,
          "priceAvg30d": 15.46
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.67,
          "priceAvg30d": 16.79
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.86,
          "priceAvg30d": 16.79
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.61,
          "priceAvg30d": 18.19
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.09,
          "priceAvg30d": 17.88
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.86,
          "priceAvg30d": 17.8
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.75,
          "priceAvg30d": 17.64
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.43,
          "priceAvg30d": 15.71
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.73,
          "priceAvg30d": 14.08
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.68,
          "priceAvg30d": 12.75
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.43,
          "priceAvg30d": 14.54
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.86,
          "priceAvg30d": 15.68
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 20.09,
          "priceAvg30d": 17.4
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.01,
          "priceAvg30d": 16.8
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 26.79,
          "priceAvg30d": 15.42
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 23.9,
          "priceAvg30d": 15.21
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 26.79,
          "priceAvg30d": 15.31
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 30.0,
          "priceAvg30d": 15.3
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 20.09,
          "priceAvg30d": 11.59
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 19.98,
          "priceAvg30d": 12.09
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.61,
          "priceAvg30d": 15.54
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.61,
          "priceAvg30d": 19.05
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 21.8,
          "priceAvg30d": 18.82
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.8,
          "priceAvg30d": 20.29
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 22.2,
          "priceAvg30d": 21.24
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.0,
          "priceAvg30d": 24.29
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.27,
          "priceAvg30d": 25.24
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.0,
          "priceAvg30d": 26.85
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 31.02,
          "priceAvg30d": 25.17
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 31.22,
          "priceAvg30d": 25.68
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.99,
          "priceAvg30d": 24.15
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.89,
          "priceAvg30d": 24.52
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 23.46
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.52,
          "priceAvg30d": 21.92
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.01,
          "priceAvg30d": 22.22
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.5,
          "priceAvg30d": 21.21
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.27,
          "priceAvg30d": 20.75
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.42,
          "priceAvg30d": 19.96
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.09,
          "priceAvg30d": 19.39
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.0,
          "priceAvg30d": 17.51
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.51,
          "priceAvg30d": 17.17
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.49,
          "priceAvg30d": 14.0
        }
      ],
      "avg": 20.2,
      "max": 31.22,
      "maxBlock": 36,
      "min": 11.86,
      "minBlock": 4,
      "spread3h": 16.07,
      "spreadLowAvg": 12.62,
      "spreadHighAvg": 28.69,
      "avg30d": 17.97,
      "spread30dAvg": 13.65,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.76,
          "priceAvg30d": 13.6
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.68,
          "priceAvg30d": 13.54
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.43,
          "priceAvg30d": 13.23
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.86,
          "priceAvg30d": 12.64
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.43,
          "priceAvg30d": 12.83
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.68,
          "priceAvg30d": 14.31
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.75,
          "priceAvg30d": 15.12
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.67,
          "priceAvg30d": 16.36
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.86,
          "priceAvg30d": 16.33
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.61,
          "priceAvg30d": 17.55
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.09,
          "priceAvg30d": 17.32
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.86,
          "priceAvg30d": 17.33
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.75,
          "priceAvg30d": 17.56
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.43,
          "priceAvg30d": 15.6
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.73,
          "priceAvg30d": 13.64
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.68,
          "priceAvg30d": 12.15
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.43,
          "priceAvg30d": 14.35
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.86,
          "priceAvg30d": 15.46
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 20.09,
          "priceAvg30d": 17.07
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.01,
          "priceAvg30d": 16.46
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 26.79,
          "priceAvg30d": 15.07
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 23.9,
          "priceAvg30d": 14.84
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 26.79,
          "priceAvg30d": 14.99
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 30.0,
          "priceAvg30d": 14.99
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 20.09,
          "priceAvg30d": 11.24
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 19.98,
          "priceAvg30d": 11.77
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.61,
          "priceAvg30d": 15.29
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.61,
          "priceAvg30d": 19.05
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 21.8,
          "priceAvg30d": 18.4
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.8,
          "priceAvg30d": 20.13
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 22.2,
          "priceAvg30d": 21.06
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.0,
          "priceAvg30d": 24.24
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.27,
          "priceAvg30d": 25.24
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.0,
          "priceAvg30d": 26.85
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 31.02,
          "priceAvg30d": 25.17
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 31.22,
          "priceAvg30d": 25.34
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.99,
          "priceAvg30d": 24.15
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.89,
          "priceAvg30d": 24.08
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 23.12
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.52,
          "priceAvg30d": 21.74
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.01,
          "priceAvg30d": 22.03
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.5,
          "priceAvg30d": 21.05
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.27,
          "priceAvg30d": 20.6
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.42,
          "priceAvg30d": 19.71
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.09,
          "priceAvg30d": 19.16
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.0,
          "priceAvg30d": 17.26
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.51,
          "priceAvg30d": 17.0
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.49,
          "priceAvg30d": 13.88
        }
      ],
      "avg": 20.2,
      "max": 31.22,
      "maxBlock": 36,
      "min": 11.86,
      "minBlock": 4,
      "spread3h": 16.07,
      "spreadLowAvg": 12.62,
      "spreadHighAvg": 28.69,
      "avg30d": 17.71,
      "spread30dAvg": 13.56,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.76,
          "priceAvg30d": 13.03
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.68,
          "priceAvg30d": 13.54
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.43,
          "priceAvg30d": 13.07
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.86,
          "priceAvg30d": 12.47
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.43,
          "priceAvg30d": 12.34
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.68,
          "priceAvg30d": 13.39
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.75,
          "priceAvg30d": 14.08
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.67,
          "priceAvg30d": 15.52
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.86,
          "priceAvg30d": 16.14
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.61,
          "priceAvg30d": 17.33
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.09,
          "priceAvg30d": 17.32
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.86,
          "priceAvg30d": 17.29
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.75,
          "priceAvg30d": 17.56
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.43,
          "priceAvg30d": 15.44
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.73,
          "priceAvg30d": 11.62
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.68,
          "priceAvg30d": 10.05
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.43,
          "priceAvg30d": 10.01
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.86,
          "priceAvg30d": 10.47
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 20.0,
          "priceAvg30d": 9.37
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.01,
          "priceAvg30d": 8.44
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 18.14,
          "priceAvg30d": 8.49
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 15.69,
          "priceAvg30d": 7.79
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 15.67,
          "priceAvg30d": 7.92
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 15.67,
          "priceAvg30d": 8.13
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.66,
          "priceAvg30d": 6.55
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.67,
          "priceAvg30d": 6.46
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 15.68,
          "priceAvg30d": 8.63
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 15.69,
          "priceAvg30d": 9.61
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 20.93,
          "priceAvg30d": 10.93
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.8,
          "priceAvg30d": 11.91
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 22.2,
          "priceAvg30d": 12.96
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 26.79,
          "priceAvg30d": 15.5
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.27,
          "priceAvg30d": 19.02
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.0,
          "priceAvg30d": 22.99
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 31.02,
          "priceAvg30d": 23.31
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 31.22,
          "priceAvg30d": 24.25
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.99,
          "priceAvg30d": 22.64
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.89,
          "priceAvg30d": 22.4
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 22.22
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.52,
          "priceAvg30d": 21.03
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.01,
          "priceAvg30d": 21.13
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.5,
          "priceAvg30d": 20.16
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.27,
          "priceAvg30d": 19.75
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.42,
          "priceAvg30d": 18.85
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.09,
          "priceAvg30d": 18.39
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.0,
          "priceAvg30d": 16.46
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.51,
          "priceAvg30d": 16.23
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.49,
          "priceAvg30d": 12.92
        }
      ],
      "avg": 18.84,
      "max": 31.22,
      "maxBlock": 36,
      "min": 11.86,
      "minBlock": 4,
      "spread3h": 16.07,
      "spreadLowAvg": 12.62,
      "spreadHighAvg": 28.69,
      "avg30d": 14.69,
      "spread30dAvg": 14.65,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 5.01,
          "priceAvg30d": 11.14
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 4.0,
          "priceAvg30d": 11.32
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 3.0,
          "priceAvg30d": 11.2
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 2.9,
          "priceAvg30d": 10.8
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 2.9,
          "priceAvg30d": 10.58
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 4.0,
          "priceAvg30d": 10.6
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 5.0,
          "priceAvg30d": 10.73
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 7.0,
          "priceAvg30d": 11.9
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.17,
          "priceAvg30d": 12.14
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.22,
          "priceAvg30d": 13.32
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 8.22,
          "priceAvg30d": 13.46
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 8.22,
          "priceAvg30d": 13.39
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 8.14,
          "priceAvg30d": 13.34
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 5.0,
          "priceAvg30d": 11.09
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.14,
          "priceAvg30d": 8.99
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.14,
          "priceAvg30d": 8.51
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.14,
          "priceAvg30d": 8.47
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 12.21,
          "priceAvg30d": 8.96
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 20.0,
          "priceAvg30d": 7.8
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.01,
          "priceAvg30d": 6.99
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 18.14,
          "priceAvg30d": 7.06
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 15.69,
          "priceAvg30d": 6.26
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 15.67,
          "priceAvg30d": 6.01
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 15.67,
          "priceAvg30d": 6.41
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.66,
          "priceAvg30d": 5.64
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.67,
          "priceAvg30d": 5.83
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 15.68,
          "priceAvg30d": 7.62
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 15.69,
          "priceAvg30d": 8.25
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 20.93,
          "priceAvg30d": 9.12
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.8,
          "priceAvg30d": 9.83
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 22.2,
          "priceAvg30d": 9.98
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.17,
          "priceAvg30d": 11.42
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.19,
          "priceAvg30d": 11.83
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 8.26,
          "priceAvg30d": 15.22
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 8.31,
          "priceAvg30d": 16.02
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 8.33,
          "priceAvg30d": 17.04
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 8.33,
          "priceAvg30d": 16.57
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 8.26,
          "priceAvg30d": 16.09
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 8.22,
          "priceAvg30d": 15.05
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 8.21,
          "priceAvg30d": 13.72
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 8.19,
          "priceAvg30d": 14.28
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 8.14,
          "priceAvg30d": 13.54
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 8.18,
          "priceAvg30d": 13.65
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 8.14,
          "priceAvg30d": 12.86
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 5.01,
          "priceAvg30d": 12.58
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 4.5,
          "priceAvg30d": 11.73
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 5.0,
          "priceAvg30d": 12.1
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 4.5,
          "priceAvg30d": 9.84
        }
      ],
      "avg": 10.11,
      "max": 26.8,
      "maxBlock": 30,
      "min": 2.9,
      "minBlock": 4,
      "spread3h": 11.16,
      "spreadLowAvg": 3.98,
      "spreadHighAvg": 15.14,
      "avg30d": 11.05,
      "spread30dAvg": 11.72,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.76,
          "priceAvg30d": 13.03
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.68,
          "priceAvg30d": 13.33
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.43,
          "priceAvg30d": 12.74
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.86,
          "priceAvg30d": 12.25
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.43,
          "priceAvg30d": 12.08
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.68,
          "priceAvg30d": 13.18
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.75,
          "priceAvg30d": 14.08
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.67,
          "priceAvg30d": 15.52
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.86,
          "priceAvg30d": 16.14
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.61,
          "priceAvg30d": 17.33
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.09,
          "priceAvg30d": 17.32
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.86,
          "priceAvg30d": 17.29
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.75,
          "priceAvg30d": 17.56
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.43,
          "priceAvg30d": 15.44
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.73,
          "priceAvg30d": 11.62
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.68,
          "priceAvg30d": 10.05
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.43,
          "priceAvg30d": 9.68
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.86,
          "priceAvg30d": 8.95
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 13.86,
          "priceAvg30d": 7.93
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.86,
          "priceAvg30d": 6.93
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.81,
          "priceAvg30d": 6.91
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.81,
          "priceAvg30d": 6.39
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.81,
          "priceAvg30d": 6.28
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.81,
          "priceAvg30d": 6.05
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.81,
          "priceAvg30d": 5.74
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.81,
          "priceAvg30d": 5.78
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.81,
          "priceAvg30d": 6.76
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 13.86,
          "priceAvg30d": 7.86
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 18.18,
          "priceAvg30d": 8.89
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 21.42,
          "priceAvg30d": 10.8
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 22.2,
          "priceAvg30d": 12.52
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.29,
          "priceAvg30d": 14.99
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.27,
          "priceAvg30d": 19.02
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.0,
          "priceAvg30d": 22.99
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 31.02,
          "priceAvg30d": 23.31
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 31.22,
          "priceAvg30d": 24.25
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.99,
          "priceAvg30d": 22.64
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.89,
          "priceAvg30d": 22.4
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 22.22
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.52,
          "priceAvg30d": 21.03
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.01,
          "priceAvg30d": 21.13
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.5,
          "priceAvg30d": 20.16
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.27,
          "priceAvg30d": 19.75
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.42,
          "priceAvg30d": 18.85
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.09,
          "priceAvg30d": 18.39
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.0,
          "priceAvg30d": 16.46
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.51,
          "priceAvg30d": 16.23
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.49,
          "priceAvg30d": 12.92
        }
      ],
      "avg": 17.46,
      "max": 31.22,
      "maxBlock": 36,
      "min": 10.81,
      "minBlock": 21,
      "spread3h": 16.36,
      "spreadLowAvg": 12.34,
      "spreadHighAvg": 28.69,
      "avg30d": 14.23,
      "spread30dAvg": 15.34,
      "historyDays": 30
    }
  }
};
