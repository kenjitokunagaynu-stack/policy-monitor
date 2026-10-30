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
  "targetDate": "2026-10-30",
  "fetchedAt": "2026-10-30T12:32:40+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 26.64,
        "priceAvg30d": 23.55
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 25.75,
        "priceAvg30d": 22.41
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 24.55,
        "priceAvg30d": 21.97
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 24.55,
        "priceAvg30d": 21.85
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 24.9,
        "priceAvg30d": 21.93
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 25.97,
        "priceAvg30d": 22.45
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 26.96,
        "priceAvg30d": 23.06
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 28.13,
        "priceAvg30d": 23.63
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 28.43,
        "priceAvg30d": 24.22
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 28.43,
        "priceAvg30d": 24.76
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 28.91,
        "priceAvg30d": 24.96
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 29.06,
        "priceAvg30d": 24.99
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 29.79,
        "priceAvg30d": 24.73
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 30.0,
        "priceAvg30d": 22.88
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 30.0,
        "priceAvg30d": 20.02
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 30.49,
        "priceAvg30d": 17.6
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 33.09,
        "priceAvg30d": 16.55
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 35.8,
        "priceAvg30d": 16.05
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 35.49,
        "priceAvg30d": 14.58
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 35.0,
        "priceAvg30d": 13.65
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 31.62,
        "priceAvg30d": 12.83
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 31.75,
        "priceAvg30d": 12.28
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 30.94,
        "priceAvg30d": 12.03
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 30.12,
        "priceAvg30d": 11.99
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 28.13,
        "priceAvg30d": 9.65
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 28.11,
        "priceAvg30d": 10.38
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 31.35,
        "priceAvg30d": 13.77
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 33.35,
        "priceAvg30d": 16.54
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 34.8,
        "priceAvg30d": 17.5
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 35.8,
        "priceAvg30d": 21.17
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 38.37,
        "priceAvg30d": 22.96
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 40.7,
        "priceAvg30d": 27.43
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 40.7,
        "priceAvg30d": 30.76
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 40.7,
        "priceAvg30d": 33.21
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 40.7,
        "priceAvg30d": 32.76
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 38.37,
        "priceAvg30d": 32.87
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 36.6,
        "priceAvg30d": 31.32
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 36.59,
        "priceAvg30d": 30.41
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 35.3,
        "priceAvg30d": 29.34
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 32.01,
        "priceAvg30d": 27.41
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 32.48,
        "priceAvg30d": 26.71
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 32.46,
        "priceAvg30d": 25.79
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 30.99,
        "priceAvg30d": 25.28
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 31.81,
        "priceAvg30d": 25.31
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 31.52,
        "priceAvg30d": 25.71
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 29.5,
        "priceAvg30d": 25.03
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 28.43,
        "priceAvg30d": 24.98
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 27.66,
        "priceAvg30d": 23.68
      }
    ],
    "avg": 31.72,
    "max": 40.7,
    "maxBlock": 32,
    "min": 24.55,
    "minBlock": 3,
    "spread3h": 12.49,
    "spreadLowAvg": 26.03,
    "spreadHighAvg": 38.51,
    "avg30d": 22.19,
    "spread30dAvg": 18.82,
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
          "price": 28.43,
          "priceAvg30d": 19.54
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.28,
          "priceAvg30d": 16.48
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.33,
          "priceAvg30d": 17.32
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.75,
          "priceAvg30d": 18.28
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.31,
          "priceAvg30d": 18.83
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.5,
          "priceAvg30d": 20.69
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.01,
          "priceAvg30d": 21.98
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.43,
          "priceAvg30d": 23.29
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.52,
          "priceAvg30d": 23.47
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.62,
          "priceAvg30d": 23.59
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.31,
          "priceAvg30d": 25.73
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.32,
          "priceAvg30d": 26.6
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.59,
          "priceAvg30d": 22.94
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 29.75,
          "priceAvg30d": 20.01
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.46,
          "priceAvg30d": 16.45
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 24.06,
          "priceAvg30d": 13.33
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 23.79,
          "priceAvg30d": 12.07
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.8,
          "priceAvg30d": 10.25
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 22.62,
          "priceAvg30d": 9.29
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 21.45,
          "priceAvg30d": 8.22
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 20.0,
          "priceAvg30d": 7.64
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 21.33,
          "priceAvg30d": 7.04
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.52,
          "priceAvg30d": 7.26
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 21.35,
          "priceAvg30d": 7.51
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.11,
          "priceAvg30d": 6.36
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 13.82,
          "priceAvg30d": 6.03
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.06,
          "priceAvg30d": 7.58
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.15,
          "priceAvg30d": 9.88
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.45,
          "priceAvg30d": 13.19
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 40.69,
          "priceAvg30d": 16.51
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.7,
          "priceAvg30d": 19.44
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.03,
          "priceAvg30d": 25.48
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 41.07,
          "priceAvg30d": 32.22
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 41.07,
          "priceAvg30d": 35.12
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.7,
          "priceAvg30d": 32.67
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 39.76,
          "priceAvg30d": 33.17
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 31.13
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.37,
          "priceAvg30d": 31.84
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.98,
          "priceAvg30d": 31.55
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.3,
          "priceAvg30d": 30.7
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 37.0,
          "priceAvg30d": 29.52
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 35.48,
          "priceAvg30d": 27.35
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 37.0,
          "priceAvg30d": 26.02
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 40.27,
          "priceAvg30d": 25.81
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 35.0,
          "priceAvg30d": 25.92
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.21,
          "priceAvg30d": 24.4
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.0,
          "priceAvg30d": 24.29
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.1,
          "priceAvg30d": 22.1
        }
      ],
      "avg": 29.4,
      "max": 41.07,
      "maxBlock": 33,
      "min": 11.11,
      "minBlock": 25,
      "spread3h": 19.79,
      "spreadLowAvg": 20.87,
      "spreadHighAvg": 40.66,
      "avg30d": 20.13,
      "spread30dAvg": 23.95,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.43,
          "priceAvg30d": 25.76
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.13,
          "priceAvg30d": 25.07
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.25,
          "priceAvg30d": 25.38
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.86,
          "priceAvg30d": 25.16
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.31,
          "priceAvg30d": 25.22
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.5,
          "priceAvg30d": 25.36
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.01,
          "priceAvg30d": 25.95
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.43,
          "priceAvg30d": 25.98
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.52,
          "priceAvg30d": 26.34
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.62,
          "priceAvg30d": 26.5
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.31,
          "priceAvg30d": 26.85
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.32,
          "priceAvg30d": 27.2
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.79,
          "priceAvg30d": 26.68
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.0,
          "priceAvg30d": 24.51
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.11,
          "priceAvg30d": 20.82
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.28,
          "priceAvg30d": 17.6
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 33.35,
          "priceAvg30d": 16.04
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 37.5,
          "priceAvg30d": 14.46
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 38.37,
          "priceAvg30d": 13.43
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 38.37,
          "priceAvg30d": 12.44
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.79,
          "priceAvg30d": 11.27
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 36.11,
          "priceAvg30d": 10.83
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 33.35,
          "priceAvg30d": 10.56
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 32.97,
          "priceAvg30d": 10.6
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 29.46,
          "priceAvg30d": 9.83
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 30.12,
          "priceAvg30d": 10.24
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 35.77,
          "priceAvg30d": 12.88
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 36.12,
          "priceAvg30d": 15.0
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 38.37,
          "priceAvg30d": 18.16
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 40.69,
          "priceAvg30d": 21.87
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.7,
          "priceAvg30d": 24.82
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.03,
          "priceAvg30d": 30.93
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.97,
          "priceAvg30d": 34.87
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 41.02,
          "priceAvg30d": 36.99
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.7,
          "priceAvg30d": 36.36
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 39.76,
          "priceAvg30d": 36.54
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 34.66
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.37,
          "priceAvg30d": 34.07
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.98,
          "priceAvg30d": 32.69
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.3,
          "priceAvg30d": 30.89
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 37.0,
          "priceAvg30d": 29.45
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 35.48,
          "priceAvg30d": 28.16
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 37.0,
          "priceAvg30d": 27.56
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 40.27,
          "priceAvg30d": 28.34
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 35.0,
          "priceAvg30d": 29.13
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.21,
          "priceAvg30d": 27.83
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.0,
          "priceAvg30d": 26.92
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.1,
          "priceAvg30d": 25.07
        }
      ],
      "avg": 33.7,
      "max": 41.03,
      "maxBlock": 32,
      "min": 26.86,
      "minBlock": 4,
      "spread3h": 12.64,
      "spreadLowAvg": 27.77,
      "spreadHighAvg": 40.41,
      "avg30d": 23.82,
      "spread30dAvg": 22.35,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.43,
          "priceAvg30d": 26.47
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.13,
          "priceAvg30d": 25.9
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.25,
          "priceAvg30d": 26.16
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.86,
          "priceAvg30d": 25.89
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.31,
          "priceAvg30d": 25.94
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.5,
          "priceAvg30d": 25.94
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.01,
          "priceAvg30d": 26.2
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.43,
          "priceAvg30d": 26.22
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.52,
          "priceAvg30d": 26.46
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.62,
          "priceAvg30d": 26.57
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.31,
          "priceAvg30d": 26.85
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.32,
          "priceAvg30d": 27.2
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.79,
          "priceAvg30d": 26.88
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.0,
          "priceAvg30d": 25.67
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.11,
          "priceAvg30d": 24.98
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.28,
          "priceAvg30d": 24.32
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 33.35,
          "priceAvg30d": 22.92
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 37.5,
          "priceAvg30d": 22.87
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 38.37,
          "priceAvg30d": 21.95
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 38.37,
          "priceAvg30d": 21.11
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.79,
          "priceAvg30d": 19.66
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 36.11,
          "priceAvg30d": 19.28
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 35.81,
          "priceAvg30d": 19.55
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 35.49,
          "priceAvg30d": 19.81
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 32.23,
          "priceAvg30d": 18.64
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 31.83,
          "priceAvg30d": 19.65
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 35.77,
          "priceAvg30d": 21.32
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 36.12,
          "priceAvg30d": 24.23
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 38.37,
          "priceAvg30d": 25.85
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 40.69,
          "priceAvg30d": 27.97
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.7,
          "priceAvg30d": 28.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.03,
          "priceAvg30d": 32.11
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.97,
          "priceAvg30d": 35.06
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 41.02,
          "priceAvg30d": 37.09
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.7,
          "priceAvg30d": 36.36
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 39.76,
          "priceAvg30d": 36.55
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 34.66
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.37,
          "priceAvg30d": 34.07
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.98,
          "priceAvg30d": 32.69
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.3,
          "priceAvg30d": 30.91
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 37.0,
          "priceAvg30d": 29.45
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 35.48,
          "priceAvg30d": 28.16
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 37.0,
          "priceAvg30d": 27.56
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 40.27,
          "priceAvg30d": 28.34
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 39.76,
          "priceAvg30d": 29.35
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 30.66,
          "priceAvg30d": 28.23
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.0,
          "priceAvg30d": 27.62
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.1,
          "priceAvg30d": 26.19
        }
      ],
      "avg": 34.07,
      "max": 41.03,
      "maxBlock": 32,
      "min": 26.86,
      "minBlock": 4,
      "spread3h": 12.64,
      "spreadLowAvg": 27.77,
      "spreadHighAvg": 40.41,
      "avg30d": 26.77,
      "spread30dAvg": 14.71,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.43,
          "priceAvg30d": 25.62
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.13,
          "priceAvg30d": 24.93
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.25,
          "priceAvg30d": 24.8
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.86,
          "priceAvg30d": 24.67
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.31,
          "priceAvg30d": 24.76
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.5,
          "priceAvg30d": 25.17
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.01,
          "priceAvg30d": 25.5
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.43,
          "priceAvg30d": 25.73
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.52,
          "priceAvg30d": 25.93
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.62,
          "priceAvg30d": 26.16
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.31,
          "priceAvg30d": 26.38
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.32,
          "priceAvg30d": 26.61
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.79,
          "priceAvg30d": 26.25
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.0,
          "priceAvg30d": 24.92
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.11,
          "priceAvg30d": 23.39
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.28,
          "priceAvg30d": 21.62
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 33.35,
          "priceAvg30d": 20.15
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 37.5,
          "priceAvg30d": 20.63
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 38.37,
          "priceAvg30d": 20.29
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 38.37,
          "priceAvg30d": 19.24
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.79,
          "priceAvg30d": 17.38
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 36.11,
          "priceAvg30d": 17.05
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 35.81,
          "priceAvg30d": 16.89
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 35.49,
          "priceAvg30d": 16.74
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 32.23,
          "priceAvg30d": 13.98
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 32.23,
          "priceAvg30d": 14.82
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 35.77,
          "priceAvg30d": 18.6
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 36.12,
          "priceAvg30d": 22.15
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 38.37,
          "priceAvg30d": 23.73
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 38.37,
          "priceAvg30d": 25.55
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.7,
          "priceAvg30d": 26.99
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.03,
          "priceAvg30d": 31.43
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.97,
          "priceAvg30d": 34.16
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 41.02,
          "priceAvg30d": 35.52
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.7,
          "priceAvg30d": 35.02
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 39.76,
          "priceAvg30d": 35.11
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 33.75
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.37,
          "priceAvg30d": 32.88
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.98,
          "priceAvg30d": 32.01
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.3,
          "priceAvg30d": 30.18
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.12,
          "priceAvg30d": 28.77
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.8,
          "priceAvg30d": 27.67
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.5,
          "priceAvg30d": 27.17
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.63,
          "priceAvg30d": 27.17
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.06,
          "priceAvg30d": 28.18
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.06,
          "priceAvg30d": 27.52
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 29.28,
          "priceAvg30d": 27.38
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.45,
          "priceAvg30d": 26.17
        }
      ],
      "avg": 33.12,
      "max": 41.03,
      "maxBlock": 32,
      "min": 26.86,
      "minBlock": 4,
      "spread3h": 12.25,
      "spreadLowAvg": 27.77,
      "spreadHighAvg": 40.02,
      "avg30d": 25.35,
      "spread30dAvg": 17.76,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.94,
          "priceAvg30d": 14.92
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.49,
          "priceAvg30d": 14.63
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 18.0,
          "priceAvg30d": 14.18
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.76,
          "priceAvg30d": 13.51
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.72,
          "priceAvg30d": 14.55
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.49,
          "priceAvg30d": 15.74
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 21.94,
          "priceAvg30d": 16.69
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.94,
          "priceAvg30d": 18.18
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.5,
          "priceAvg30d": 18.2
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.7,
          "priceAvg30d": 19.65
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.51,
          "priceAvg30d": 19.13
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.52,
          "priceAvg30d": 18.8
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.51,
          "priceAvg30d": 18.64
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.51,
          "priceAvg30d": 17.21
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.11,
          "priceAvg30d": 15.82
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.28,
          "priceAvg30d": 14.32
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 33.35,
          "priceAvg30d": 16.1
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 37.5,
          "priceAvg30d": 17.36
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 38.37,
          "priceAvg30d": 18.17
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 38.37,
          "priceAvg30d": 17.37
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.79,
          "priceAvg30d": 15.91
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 36.11,
          "priceAvg30d": 15.52
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 35.81,
          "priceAvg30d": 15.67
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 35.49,
          "priceAvg30d": 15.93
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 32.23,
          "priceAvg30d": 12.19
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 32.23,
          "priceAvg30d": 12.51
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 35.77,
          "priceAvg30d": 16.28
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 36.12,
          "priceAvg30d": 19.57
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 38.37,
          "priceAvg30d": 20.14
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 38.37,
          "priceAvg30d": 21.9
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.7,
          "priceAvg30d": 22.92
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.03,
          "priceAvg30d": 26.28
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.97,
          "priceAvg30d": 26.94
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 41.02,
          "priceAvg30d": 28.89
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.7,
          "priceAvg30d": 27.35
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.37,
          "priceAvg30d": 27.68
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 26.6
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.37,
          "priceAvg30d": 26.81
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.98,
          "priceAvg30d": 26.11
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.3,
          "priceAvg30d": 24.05
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.12,
          "priceAvg30d": 24.09
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.0,
          "priceAvg30d": 22.91
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.9,
          "priceAvg30d": 22.57
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.51,
          "priceAvg30d": 21.69
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.51,
          "priceAvg30d": 20.85
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.52,
          "priceAvg30d": 19.03
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.94,
          "priceAvg30d": 19.19
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.1,
          "priceAvg30d": 15.29
        }
      ],
      "avg": 30.15,
      "max": 41.03,
      "maxBlock": 32,
      "min": 12.76,
      "minBlock": 4,
      "spread3h": 20.43,
      "spreadLowAvg": 19.6,
      "spreadHighAvg": 40.02,
      "avg30d": 19.33,
      "spread30dAvg": 14.8,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.94,
          "priceAvg30d": 14.67
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.49,
          "priceAvg30d": 14.52
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 18.0,
          "priceAvg30d": 14.09
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.76,
          "priceAvg30d": 13.42
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.72,
          "priceAvg30d": 13.98
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.49,
          "priceAvg30d": 15.37
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 21.94,
          "priceAvg30d": 16.35
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.94,
          "priceAvg30d": 17.74
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.5,
          "priceAvg30d": 17.73
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.7,
          "priceAvg30d": 19.0
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.51,
          "priceAvg30d": 18.56
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.52,
          "priceAvg30d": 18.33
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.51,
          "priceAvg30d": 18.57
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.51,
          "priceAvg30d": 17.14
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.11,
          "priceAvg30d": 15.38
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.28,
          "priceAvg30d": 13.72
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 33.35,
          "priceAvg30d": 15.91
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 37.5,
          "priceAvg30d": 17.14
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 38.37,
          "priceAvg30d": 17.85
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 38.37,
          "priceAvg30d": 17.08
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.79,
          "priceAvg30d": 15.55
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 36.11,
          "priceAvg30d": 15.15
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 35.81,
          "priceAvg30d": 15.35
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 35.49,
          "priceAvg30d": 15.61
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 32.23,
          "priceAvg30d": 11.85
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 32.23,
          "priceAvg30d": 12.19
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 35.77,
          "priceAvg30d": 16.02
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 36.12,
          "priceAvg30d": 19.57
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 38.37,
          "priceAvg30d": 19.72
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 38.37,
          "priceAvg30d": 21.73
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.7,
          "priceAvg30d": 22.74
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.03,
          "priceAvg30d": 26.24
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.97,
          "priceAvg30d": 26.94
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 41.02,
          "priceAvg30d": 28.89
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.7,
          "priceAvg30d": 27.35
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.37,
          "priceAvg30d": 27.34
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 26.6
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.37,
          "priceAvg30d": 26.37
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.98,
          "priceAvg30d": 25.77
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.3,
          "priceAvg30d": 23.87
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.12,
          "priceAvg30d": 23.9
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.0,
          "priceAvg30d": 22.75
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.9,
          "priceAvg30d": 22.41
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.51,
          "priceAvg30d": 21.44
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.51,
          "priceAvg30d": 20.62
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.52,
          "priceAvg30d": 18.78
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.94,
          "priceAvg30d": 19.02
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.1,
          "priceAvg30d": 15.17
        }
      ],
      "avg": 30.15,
      "max": 41.03,
      "maxBlock": 32,
      "min": 12.76,
      "minBlock": 4,
      "spread3h": 20.43,
      "spreadLowAvg": 19.6,
      "spreadHighAvg": 40.02,
      "avg30d": 19.07,
      "spread30dAvg": 14.82,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.94,
          "priceAvg30d": 14.09
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.49,
          "priceAvg30d": 14.52
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 18.0,
          "priceAvg30d": 13.67
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.76,
          "priceAvg30d": 12.96
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.72,
          "priceAvg30d": 13.06
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.49,
          "priceAvg30d": 14.17
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.82,
          "priceAvg30d": 15.09
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.4,
          "priceAvg30d": 16.9
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.3,
          "priceAvg30d": 17.54
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.7,
          "priceAvg30d": 18.79
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 23.71,
          "priceAvg30d": 18.56
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.27,
          "priceAvg30d": 18.3
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.42,
          "priceAvg30d": 18.57
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.7,
          "priceAvg30d": 16.97
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.73,
          "priceAvg30d": 12.81
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.28,
          "priceAvg30d": 10.34
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 29.99,
          "priceAvg30d": 10.54
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.0,
          "priceAvg30d": 10.76
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 23.72,
          "priceAvg30d": 9.68
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.7,
          "priceAvg30d": 8.9
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.75,
          "priceAvg30d": 8.28
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 19.31,
          "priceAvg30d": 7.5
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.76,
          "priceAvg30d": 7.5
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.75,
          "priceAvg30d": 7.73
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 30.53,
          "priceAvg30d": 5.74
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 29.06,
          "priceAvg30d": 5.72
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 18.2,
          "priceAvg30d": 7.88
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 12.76,
          "priceAvg30d": 9.1
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.73,
          "priceAvg30d": 10.99
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.75,
          "priceAvg30d": 12.29
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.81,
          "priceAvg30d": 13.18
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 15.0,
          "priceAvg30d": 16.5
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.68,
          "priceAvg30d": 19.98
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 23.72,
          "priceAvg30d": 24.08
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.73,
          "priceAvg30d": 24.35
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.73,
          "priceAvg30d": 25.16
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.71,
          "priceAvg30d": 24.14
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.27,
          "priceAvg30d": 23.58
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.42,
          "priceAvg30d": 23.33
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.5,
          "priceAvg30d": 22.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.2,
          "priceAvg30d": 22.37
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.0,
          "priceAvg30d": 21.3
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.9,
          "priceAvg30d": 20.98
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 23.73,
          "priceAvg30d": 19.89
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.48,
          "priceAvg30d": 19.75
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.47,
          "priceAvg30d": 17.86
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.47,
          "priceAvg30d": 18.09
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.76,
          "priceAvg30d": 14.21
        }
      ],
      "avg": 20.38,
      "max": 30.53,
      "maxBlock": 25,
      "min": 10.81,
      "minBlock": 31,
      "spread3h": 0.7,
      "spreadLowAvg": 16.77,
      "spreadHighAvg": 17.47,
      "avg30d": 15.41,
      "spread30dAvg": 15.49,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.07,
          "priceAvg30d": 11.5
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.53,
          "priceAvg30d": 10.99
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.53,
          "priceAvg30d": 10.46
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.14,
          "priceAvg30d": 10.11
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.53,
          "priceAvg30d": 10.11
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.07,
          "priceAvg30d": 10.24
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.53,
          "priceAvg30d": 10.08
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.4,
          "priceAvg30d": 11.88
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.3,
          "priceAvg30d": 12.29
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.7,
          "priceAvg30d": 13.62
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 23.71,
          "priceAvg30d": 13.95
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.27,
          "priceAvg30d": 13.88
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.42,
          "priceAvg30d": 13.63
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.7,
          "priceAvg30d": 11.76
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.73,
          "priceAvg30d": 8.73
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.0,
          "priceAvg30d": 8.06
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 29.99,
          "priceAvg30d": 8.77
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.0,
          "priceAvg30d": 8.78
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 23.72,
          "priceAvg30d": 7.76
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.7,
          "priceAvg30d": 6.82
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.75,
          "priceAvg30d": 5.92
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.87,
          "priceAvg30d": 5.02
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.76,
          "priceAvg30d": 4.83
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.75,
          "priceAvg30d": 5.08
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.33,
          "priceAvg30d": 4.22
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.32,
          "priceAvg30d": 4.46
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.55,
          "priceAvg30d": 6.49
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 12.76,
          "priceAvg30d": 7.05
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.73,
          "priceAvg30d": 8.76
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.75,
          "priceAvg30d": 9.69
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.81,
          "priceAvg30d": 9.9
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 15.0,
          "priceAvg30d": 11.19
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.68,
          "priceAvg30d": 12.26
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 23.72,
          "priceAvg30d": 16.04
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.73,
          "priceAvg30d": 17.58
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.73,
          "priceAvg30d": 18.18
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.71,
          "priceAvg30d": 17.8
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.27,
          "priceAvg30d": 17.18
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.42,
          "priceAvg30d": 16.05
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.5,
          "priceAvg30d": 15.12
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.2,
          "priceAvg30d": 15.57
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 13.07,
          "priceAvg30d": 14.81
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.9,
          "priceAvg30d": 15.02
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 13.07,
          "priceAvg30d": 13.79
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.07,
          "priceAvg30d": 13.03
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.14,
          "priceAvg30d": 12.1
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 12.53,
          "priceAvg30d": 12.62
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.14,
          "priceAvg30d": 10.43
        }
      ],
      "avg": 17.74,
      "max": 30.0,
      "maxBlock": 16,
      "min": 8.32,
      "minBlock": 26,
      "spread3h": 13.28,
      "spreadLowAvg": 11.48,
      "spreadHighAvg": 24.76,
      "avg30d": 11.12,
      "spread30dAvg": 12.9,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.94,
          "priceAvg30d": 14.09
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.82,
          "priceAvg30d": 14.3
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.82,
          "priceAvg30d": 13.34
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.76,
          "priceAvg30d": 12.74
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.82,
          "priceAvg30d": 12.8
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.49,
          "priceAvg30d": 13.95
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.82,
          "priceAvg30d": 15.09
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.4,
          "priceAvg30d": 16.9
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.3,
          "priceAvg30d": 17.54
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.7,
          "priceAvg30d": 18.79
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 23.71,
          "priceAvg30d": 18.56
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.27,
          "priceAvg30d": 18.3
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.42,
          "priceAvg30d": 18.57
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.7,
          "priceAvg30d": 16.97
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.73,
          "priceAvg30d": 12.81
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.28,
          "priceAvg30d": 10.34
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 29.99,
          "priceAvg30d": 9.98
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.0,
          "priceAvg30d": 9.25
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.81,
          "priceAvg30d": 8.11
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.81,
          "priceAvg30d": 7.02
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.15,
          "priceAvg30d": 6.45
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.15,
          "priceAvg30d": 5.95
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.15,
          "priceAvg30d": 5.69
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.98,
          "priceAvg30d": 5.49
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.98,
          "priceAvg30d": 4.78
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.15,
          "priceAvg30d": 4.87
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.15,
          "priceAvg30d": 5.98
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.15,
          "priceAvg30d": 7.48
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.4,
          "priceAvg30d": 9.05
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.4,
          "priceAvg30d": 11.12
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.81,
          "priceAvg30d": 12.74
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 15.0,
          "priceAvg30d": 15.92
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.68,
          "priceAvg30d": 19.98
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 23.72,
          "priceAvg30d": 24.08
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.73,
          "priceAvg30d": 24.35
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.73,
          "priceAvg30d": 25.16
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.71,
          "priceAvg30d": 24.14
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.27,
          "priceAvg30d": 23.58
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.42,
          "priceAvg30d": 23.33
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.5,
          "priceAvg30d": 22.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.2,
          "priceAvg30d": 22.37
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.0,
          "priceAvg30d": 21.3
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.9,
          "priceAvg30d": 20.98
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 23.73,
          "priceAvg30d": 19.89
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.48,
          "priceAvg30d": 19.75
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.47,
          "priceAvg30d": 17.86
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.47,
          "priceAvg30d": 18.09
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.76,
          "priceAvg30d": 14.21
        }
      ],
      "avg": 18.1,
      "max": 30.28,
      "maxBlock": 16,
      "min": 9.98,
      "minBlock": 24,
      "spread3h": 12.49,
      "spreadLowAvg": 10.12,
      "spreadHighAvg": 22.61,
      "avg30d": 14.92,
      "spread30dAvg": 16.2,
      "historyDays": 30
    }
  }
};
