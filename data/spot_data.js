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
  "targetDate": "2026-10-13",
  "fetchedAt": "2026-10-13T13:33:06+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 25.39,
        "priceAvg30d": 19.19
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 25.27,
        "priceAvg30d": 17.54
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 25.03,
        "priceAvg30d": 16.47
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 25.12,
        "priceAvg30d": 15.93
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 25.16,
        "priceAvg30d": 15.69
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 25.27,
        "priceAvg30d": 16.47
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 25.27,
        "priceAvg30d": 17.25
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 25.27,
        "priceAvg30d": 18.21
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 25.27,
        "priceAvg30d": 18.95
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 25.27,
        "priceAvg30d": 20.04
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 25.27,
        "priceAvg30d": 20.87
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 25.79,
        "priceAvg30d": 20.65
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 25.94,
        "priceAvg30d": 19.72
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 25.27,
        "priceAvg30d": 16.87
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 24.62,
        "priceAvg30d": 14.08
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 22.33,
        "priceAvg30d": 12.68
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 21.55,
        "priceAvg30d": 12.87
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 21.02,
        "priceAvg30d": 12.98
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 19.67,
        "priceAvg30d": 13.04
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 17.08,
        "priceAvg30d": 12.46
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 13.79,
        "priceAvg30d": 11.52
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 12.87,
        "priceAvg30d": 10.99
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 12.29,
        "priceAvg30d": 10.81
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 12.29,
        "priceAvg30d": 10.53
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 10.86,
        "priceAvg30d": 8.67
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 12.43,
        "priceAvg30d": 9.41
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 13.88,
        "priceAvg30d": 11.41
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 19.82,
        "priceAvg30d": 13.67
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 21.63,
        "priceAvg30d": 14.57
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 24.31,
        "priceAvg30d": 17.64
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 26.16,
        "priceAvg30d": 18.64
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 32.5,
        "priceAvg30d": 22.42
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 37.89,
        "priceAvg30d": 24.71
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 39.0,
        "priceAvg30d": 27.46
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 37.64,
        "priceAvg30d": 27.42
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 37.42,
        "priceAvg30d": 28.1
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 36.01,
        "priceAvg30d": 27.71
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 34.58,
        "priceAvg30d": 27.26
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 33.0,
        "priceAvg30d": 26.07
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 28.96,
        "priceAvg30d": 24.71
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 28.28,
        "priceAvg30d": 23.88
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 25.94,
        "priceAvg30d": 23.23
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 24.78,
        "priceAvg30d": 22.51
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 26.33,
        "priceAvg30d": 22.67
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 26.39,
        "priceAvg30d": 22.63
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 24.99,
        "priceAvg30d": 21.31
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 24.99,
        "priceAvg30d": 21.11
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 23.82,
        "priceAvg30d": 19.16
      }
    ],
    "avg": 24.66,
    "max": 39.0,
    "maxBlock": 34,
    "min": 10.86,
    "minBlock": 25,
    "spread3h": 20.67,
    "spreadLowAvg": 13.93,
    "spreadHighAvg": 34.6,
    "avg30d": 18.38,
    "spread30dAvg": 17.34,
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
          "price": 26.16,
          "priceAvg30d": 16.49
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.16,
          "priceAvg30d": 14.6
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.01,
          "priceAvg30d": 14.87
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.01,
          "priceAvg30d": 14.77
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.21,
          "priceAvg30d": 15.77
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.65,
          "priceAvg30d": 17.45
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 26.6,
          "priceAvg30d": 18.23
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.98,
          "priceAvg30d": 18.77
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.6,
          "priceAvg30d": 18.42
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.58,
          "priceAvg30d": 18.69
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.63,
          "priceAvg30d": 19.5
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.14,
          "priceAvg30d": 18.65
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.58,
          "priceAvg30d": 16.13
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 26.6,
          "priceAvg30d": 14.18
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 26.0,
          "priceAvg30d": 11.68
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.23,
          "priceAvg30d": 9.79
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.33,
          "priceAvg30d": 8.66
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.26,
          "priceAvg30d": 8.91
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.52,
          "priceAvg30d": 7.55
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.26,
          "priceAvg30d": 6.91
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.36,
          "priceAvg30d": 6.4
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.51,
          "priceAvg30d": 6.28
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.26,
          "priceAvg30d": 6.36
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.78,
          "priceAvg30d": 6.1
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.32,
          "priceAvg30d": 5.99
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.32,
          "priceAvg30d": 5.87
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.0,
          "priceAvg30d": 6.79
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.62,
          "priceAvg30d": 8.54
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.05,
          "priceAvg30d": 9.32
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 28.96,
          "priceAvg30d": 11.41
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.01,
          "priceAvg30d": 14.46
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 34.22,
          "priceAvg30d": 18.65
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 47.02,
          "priceAvg30d": 24.06
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.07,
          "priceAvg30d": 28.08
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 39.42,
          "priceAvg30d": 27.01
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 39.29,
          "priceAvg30d": 28.0
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.02,
          "priceAvg30d": 26.56
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.92,
          "priceAvg30d": 27.08
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.29,
          "priceAvg30d": 26.73
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.01,
          "priceAvg30d": 25.48
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.32,
          "priceAvg30d": 24.17
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.33,
          "priceAvg30d": 23.2
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.83,
          "priceAvg30d": 22.16
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.96,
          "priceAvg30d": 22.51
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.72,
          "priceAvg30d": 21.45
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.7,
          "priceAvg30d": 20.58
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.4,
          "priceAvg30d": 19.89
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.26,
          "priceAvg30d": 18.21
        }
      ],
      "avg": 24.89,
      "max": 47.02,
      "maxBlock": 33,
      "min": 9.32,
      "minBlock": 25,
      "spread3h": 26.08,
      "spreadLowAvg": 10.08,
      "spreadHighAvg": 36.16,
      "avg30d": 16.28,
      "spread30dAvg": 19.09,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.16,
          "priceAvg30d": 21.2
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.16,
          "priceAvg30d": 19.97
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.01,
          "priceAvg30d": 19.52
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.01,
          "priceAvg30d": 19.24
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.21,
          "priceAvg30d": 19.31
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.65,
          "priceAvg30d": 19.25
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 26.6,
          "priceAvg30d": 20.17
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.98,
          "priceAvg30d": 20.52
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.6,
          "priceAvg30d": 20.67
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.58,
          "priceAvg30d": 20.68
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.63,
          "priceAvg30d": 20.79
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.14,
          "priceAvg30d": 20.9
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.58,
          "priceAvg30d": 19.79
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 26.6,
          "priceAvg30d": 18.07
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 26.0,
          "priceAvg30d": 14.88
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.23,
          "priceAvg30d": 12.47
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 24.01,
          "priceAvg30d": 10.33
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.51,
          "priceAvg30d": 8.87
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 23.0,
          "priceAvg30d": 8.4
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 22.46,
          "priceAvg30d": 7.18
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 14.46,
          "priceAvg30d": 6.61
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.79,
          "priceAvg30d": 6.17
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.26,
          "priceAvg30d": 6.09
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.78,
          "priceAvg30d": 6.0
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.32,
          "priceAvg30d": 5.66
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.32,
          "priceAvg30d": 6.18
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 21.09,
          "priceAvg30d": 7.33
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.14,
          "priceAvg30d": 9.05
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.05,
          "priceAvg30d": 10.65
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 28.96,
          "priceAvg30d": 13.24
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.01,
          "priceAvg30d": 16.89
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 34.22,
          "priceAvg30d": 22.12
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 47.02,
          "priceAvg30d": 25.99
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.07,
          "priceAvg30d": 30.05
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 39.42,
          "priceAvg30d": 29.9
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 39.29,
          "priceAvg30d": 30.67
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.02,
          "priceAvg30d": 29.79
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.92,
          "priceAvg30d": 29.51
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.29,
          "priceAvg30d": 28.4
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.01,
          "priceAvg30d": 26.48
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.32,
          "priceAvg30d": 25.26
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.33,
          "priceAvg30d": 24.4
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.83,
          "priceAvg30d": 23.84
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.96,
          "priceAvg30d": 24.75
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.72,
          "priceAvg30d": 23.94
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.7,
          "priceAvg30d": 23.15
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.4,
          "priceAvg30d": 22.65
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.26,
          "priceAvg30d": 21.26
        }
      ],
      "avg": 26.56,
      "max": 47.02,
      "maxBlock": 33,
      "min": 9.32,
      "minBlock": 25,
      "spread3h": 21.6,
      "spreadLowAvg": 14.56,
      "spreadHighAvg": 36.16,
      "avg30d": 18.3,
      "spread30dAvg": 20.57,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.16,
          "priceAvg30d": 23.2
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.16,
          "priceAvg30d": 22.42
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.01,
          "priceAvg30d": 21.98
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.01,
          "priceAvg30d": 22.12
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.21,
          "priceAvg30d": 21.89
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.65,
          "priceAvg30d": 22.01
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 26.6,
          "priceAvg30d": 22.49
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.98,
          "priceAvg30d": 22.91
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.6,
          "priceAvg30d": 23.23
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.58,
          "priceAvg30d": 23.31
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.63,
          "priceAvg30d": 23.34
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.14,
          "priceAvg30d": 23.48
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.58,
          "priceAvg30d": 22.9
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 26.6,
          "priceAvg30d": 21.89
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 26.0,
          "priceAvg30d": 20.87
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.23,
          "priceAvg30d": 20.79
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 24.01,
          "priceAvg30d": 20.23
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.51,
          "priceAvg30d": 20.98
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 23.0,
          "priceAvg30d": 21.14
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 22.46,
          "priceAvg30d": 20.94
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.46,
          "priceAvg30d": 19.37
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.46,
          "priceAvg30d": 19.27
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.82,
          "priceAvg30d": 19.27
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 22.27,
          "priceAvg30d": 19.18
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.27,
          "priceAvg30d": 17.72
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.45,
          "priceAvg30d": 18.84
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 21.09,
          "priceAvg30d": 19.76
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.14,
          "priceAvg30d": 22.16
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.05,
          "priceAvg30d": 23.48
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 28.96,
          "priceAvg30d": 25.33
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.01,
          "priceAvg30d": 24.49
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 34.22,
          "priceAvg30d": 27.74
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 47.02,
          "priceAvg30d": 30.63
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.07,
          "priceAvg30d": 32.9
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 39.42,
          "priceAvg30d": 32.29
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 39.29,
          "priceAvg30d": 33.04
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.02,
          "priceAvg30d": 32.28
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.92,
          "priceAvg30d": 32.05
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.29,
          "priceAvg30d": 30.59
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.01,
          "priceAvg30d": 28.61
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.32,
          "priceAvg30d": 27.1
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.33,
          "priceAvg30d": 26.38
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.83,
          "priceAvg30d": 25.62
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.96,
          "priceAvg30d": 26.65
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.72,
          "priceAvg30d": 26.87
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.7,
          "priceAvg30d": 26.05
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.4,
          "priceAvg30d": 25.81
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.26,
          "priceAvg30d": 24.12
        }
      ],
      "avg": 27.96,
      "max": 47.02,
      "maxBlock": 33,
      "min": 21.09,
      "minBlock": 27,
      "spread3h": 12.14,
      "spreadLowAvg": 24.02,
      "spreadHighAvg": 36.16,
      "avg30d": 24.16,
      "spread30dAvg": 13.76,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.16,
          "priceAvg30d": 23.04
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.16,
          "priceAvg30d": 22.3
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.01,
          "priceAvg30d": 21.76
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.01,
          "priceAvg30d": 21.51
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.21,
          "priceAvg30d": 21.36
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.65,
          "priceAvg30d": 21.51
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 26.6,
          "priceAvg30d": 22.06
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.98,
          "priceAvg30d": 22.51
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.6,
          "priceAvg30d": 22.84
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.58,
          "priceAvg30d": 23.01
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.63,
          "priceAvg30d": 23.16
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.14,
          "priceAvg30d": 23.31
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.58,
          "priceAvg30d": 22.94
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 26.6,
          "priceAvg30d": 21.66
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 26.0,
          "priceAvg30d": 20.17
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.23,
          "priceAvg30d": 19.19
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 24.01,
          "priceAvg30d": 18.83
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.51,
          "priceAvg30d": 19.42
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 23.0,
          "priceAvg30d": 19.42
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 21.01,
          "priceAvg30d": 19.1
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 15.0,
          "priceAvg30d": 17.92
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 15.0,
          "priceAvg30d": 17.67
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 15.0,
          "priceAvg30d": 17.56
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 15.11,
          "priceAvg30d": 17.35
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.33,
          "priceAvg30d": 15.3
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.0,
          "priceAvg30d": 15.87
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 21.09,
          "priceAvg30d": 18.3
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.14,
          "priceAvg30d": 21.3
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.05,
          "priceAvg30d": 22.44
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 28.96,
          "priceAvg30d": 23.73
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.01,
          "priceAvg30d": 24.57
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 34.22,
          "priceAvg30d": 27.17
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.0,
          "priceAvg30d": 29.53
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.07,
          "priceAvg30d": 31.62
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 39.42,
          "priceAvg30d": 31.4
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 39.29,
          "priceAvg30d": 31.69
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.02,
          "priceAvg30d": 31.05
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.92,
          "priceAvg30d": 30.35
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.29,
          "priceAvg30d": 29.48
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.01,
          "priceAvg30d": 28.25
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.32,
          "priceAvg30d": 27.1
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.99,
          "priceAvg30d": 26.32
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.9,
          "priceAvg30d": 25.73
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.96,
          "priceAvg30d": 26.22
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.72,
          "priceAvg30d": 26.59
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.7,
          "priceAvg30d": 25.74
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.4,
          "priceAvg30d": 25.73
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.26,
          "priceAvg30d": 24.23
        }
      ],
      "avg": 26.87,
      "max": 44.07,
      "maxBlock": 34,
      "min": 12.33,
      "minBlock": 25,
      "spread3h": 19.27,
      "spreadLowAvg": 17.39,
      "spreadHighAvg": 36.66,
      "avg30d": 23.32,
      "spread30dAvg": 14.93,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.76,
          "priceAvg30d": 10.47
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.82,
          "priceAvg30d": 10.62
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.76,
          "priceAvg30d": 10.85
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.69,
          "priceAvg30d": 10.69
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.69,
          "priceAvg30d": 10.72
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.82,
          "priceAvg30d": 11.3
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.69,
          "priceAvg30d": 12.14
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.76,
          "priceAvg30d": 13.01
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.76,
          "priceAvg30d": 12.84
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.82,
          "priceAvg30d": 14.16
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.89,
          "priceAvg30d": 14.64
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.18,
          "priceAvg30d": 14.55
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 18.11,
          "priceAvg30d": 15.56
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.88,
          "priceAvg30d": 12.66
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.43,
          "priceAvg30d": 11.58
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.66,
          "priceAvg30d": 9.79
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.55,
          "priceAvg30d": 11.38
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.69,
          "priceAvg30d": 12.78
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 19.76,
          "priceAvg30d": 14.84
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 19.76,
          "priceAvg30d": 14.64
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 15.0,
          "priceAvg30d": 13.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 15.0,
          "priceAvg30d": 13.39
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 15.0,
          "priceAvg30d": 13.65
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 15.11,
          "priceAvg30d": 13.18
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.66,
          "priceAvg30d": 10.61
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.0,
          "priceAvg30d": 10.86
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 21.09,
          "priceAvg30d": 13.08
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 19.82,
          "priceAvg30d": 16.18
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.55,
          "priceAvg30d": 16.66
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 13.31,
          "priceAvg30d": 17.85
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 19.76,
          "priceAvg30d": 17.81
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.63,
          "priceAvg30d": 19.73
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.79,
          "priceAvg30d": 19.57
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 23.19,
          "priceAvg30d": 20.55
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.19,
          "priceAvg30d": 19.96
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 24.17,
          "priceAvg30d": 21.16
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.02,
          "priceAvg30d": 20.58
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.9,
          "priceAvg30d": 20.62
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.52,
          "priceAvg30d": 19.37
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.1,
          "priceAvg30d": 18.12
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.5,
          "priceAvg30d": 18.38
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.63,
          "priceAvg30d": 17.71
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.63,
          "priceAvg30d": 17.66
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.87,
          "priceAvg30d": 16.5
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.82,
          "priceAvg30d": 16.51
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.81,
          "priceAvg30d": 14.54
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.81,
          "priceAvg30d": 14.19
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.3,
          "priceAvg30d": 10.84
        }
      ],
      "avg": 18.74,
      "max": 24.9,
      "maxBlock": 38,
      "min": 10.55,
      "minBlock": 29,
      "spread3h": 4.82,
      "spreadLowAvg": 18.43,
      "spreadHighAvg": 23.25,
      "avg30d": 14.84,
      "spread30dAvg": 10.48,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.76,
          "priceAvg30d": 10.39
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.82,
          "priceAvg30d": 10.51
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.76,
          "priceAvg30d": 10.76
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.69,
          "priceAvg30d": 10.59
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.69,
          "priceAvg30d": 10.57
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.82,
          "priceAvg30d": 11.21
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.69,
          "priceAvg30d": 12.05
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.76,
          "priceAvg30d": 12.94
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.76,
          "priceAvg30d": 12.76
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.82,
          "priceAvg30d": 14.16
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.89,
          "priceAvg30d": 14.63
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.18,
          "priceAvg30d": 14.46
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 18.11,
          "priceAvg30d": 15.49
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.88,
          "priceAvg30d": 12.55
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.43,
          "priceAvg30d": 11.14
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.66,
          "priceAvg30d": 9.09
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.55,
          "priceAvg30d": 10.72
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.69,
          "priceAvg30d": 12.05
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 19.76,
          "priceAvg30d": 14.3
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 19.76,
          "priceAvg30d": 14.21
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 15.0,
          "priceAvg30d": 13.38
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 15.0,
          "priceAvg30d": 13.01
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 15.0,
          "priceAvg30d": 13.31
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 15.11,
          "priceAvg30d": 12.78
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.66,
          "priceAvg30d": 10.18
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.0,
          "priceAvg30d": 10.46
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 21.09,
          "priceAvg30d": 12.75
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 19.82,
          "priceAvg30d": 16.08
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.55,
          "priceAvg30d": 15.99
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 13.31,
          "priceAvg30d": 17.56
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 19.76,
          "priceAvg30d": 17.12
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.63,
          "priceAvg30d": 19.24
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.79,
          "priceAvg30d": 19.57
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 23.19,
          "priceAvg30d": 20.55
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.19,
          "priceAvg30d": 19.96
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 24.17,
          "priceAvg30d": 21.16
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.02,
          "priceAvg30d": 20.58
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.9,
          "priceAvg30d": 20.62
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.52,
          "priceAvg30d": 19.37
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.1,
          "priceAvg30d": 18.12
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.5,
          "priceAvg30d": 18.38
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.63,
          "priceAvg30d": 17.71
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.63,
          "priceAvg30d": 17.66
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.87,
          "priceAvg30d": 16.5
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.82,
          "priceAvg30d": 16.51
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.81,
          "priceAvg30d": 14.54
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.81,
          "priceAvg30d": 14.19
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.3,
          "priceAvg30d": 10.84
        }
      ],
      "avg": 18.74,
      "max": 24.9,
      "maxBlock": 38,
      "min": 10.55,
      "minBlock": 29,
      "spread3h": 4.82,
      "spreadLowAvg": 18.43,
      "spreadHighAvg": 23.25,
      "avg30d": 14.64,
      "spread30dAvg": 10.5,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.76,
          "priceAvg30d": 10.39
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.82,
          "priceAvg30d": 10.51
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.76,
          "priceAvg30d": 10.67
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.69,
          "priceAvg30d": 10.42
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.69,
          "priceAvg30d": 10.19
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.82,
          "priceAvg30d": 10.75
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.89,
          "priceAvg30d": 11.45
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.76,
          "priceAvg30d": 12.42
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.76,
          "priceAvg30d": 12.53
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
          "price": 13.89,
          "priceAvg30d": 14.61
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.18,
          "priceAvg30d": 14.42
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 18.11,
          "priceAvg30d": 15.41
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.88,
          "priceAvg30d": 12.29
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.43,
          "priceAvg30d": 10.5
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.66,
          "priceAvg30d": 8.62
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.55,
          "priceAvg30d": 8.89
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.66,
          "priceAvg30d": 8.94
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.94,
          "priceAvg30d": 8.7
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.13,
          "priceAvg30d": 8.15
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.66,
          "priceAvg30d": 8.49
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.95,
          "priceAvg30d": 8.1
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.4,
          "priceAvg30d": 7.94
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.95,
          "priceAvg30d": 7.55
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.13,
          "priceAvg30d": 6.86
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.94,
          "priceAvg30d": 6.86
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.66,
          "priceAvg30d": 8.65
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.4,
          "priceAvg30d": 9.77
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.4,
          "priceAvg30d": 9.51
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.19,
          "priceAvg30d": 10.53
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 15.9,
          "priceAvg30d": 11.62
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.63,
          "priceAvg30d": 13.7
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.79,
          "priceAvg30d": 14.47
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 23.19,
          "priceAvg30d": 17.77
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.19,
          "priceAvg30d": 19.48
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 24.17,
          "priceAvg30d": 20.74
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.02,
          "priceAvg30d": 20.12
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.9,
          "priceAvg30d": 20.14
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.52,
          "priceAvg30d": 19.25
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.1,
          "priceAvg30d": 18.12
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.5,
          "priceAvg30d": 18.24
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.63,
          "priceAvg30d": 17.63
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.63,
          "priceAvg30d": 17.62
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.87,
          "priceAvg30d": 16.42
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.82,
          "priceAvg30d": 16.4
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.81,
          "priceAvg30d": 14.53
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.81,
          "priceAvg30d": 14.19
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.3,
          "priceAvg30d": 10.84
        }
      ],
      "avg": 16.93,
      "max": 24.9,
      "maxBlock": 38,
      "min": 9.13,
      "minBlock": 20,
      "spread3h": 12.72,
      "spreadLowAvg": 10.53,
      "spreadHighAvg": 23.25,
      "avg30d": 12.69,
      "spread30dAvg": 11.71,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.76,
          "priceAvg30d": 10.2
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.82,
          "priceAvg30d": 9.95
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.76,
          "priceAvg30d": 10.03
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.69,
          "priceAvg30d": 9.81
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.69,
          "priceAvg30d": 9.46
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.82,
          "priceAvg30d": 10.07
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.89,
          "priceAvg30d": 10.58
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.76,
          "priceAvg30d": 11.56
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.76,
          "priceAvg30d": 11.18
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.82,
          "priceAvg30d": 12.74
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.89,
          "priceAvg30d": 13.46
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.18,
          "priceAvg30d": 13.24
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 18.11,
          "priceAvg30d": 13.79
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.88,
          "priceAvg30d": 10.82
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.43,
          "priceAvg30d": 8.88
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.66,
          "priceAvg30d": 7.77
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.55,
          "priceAvg30d": 8.02
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.66,
          "priceAvg30d": 8.12
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.31,
          "priceAvg30d": 7.27
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.13,
          "priceAvg30d": 6.44
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.66,
          "priceAvg30d": 6.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.95,
          "priceAvg30d": 6.56
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.4,
          "priceAvg30d": 6.21
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.95,
          "priceAvg30d": 6.24
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.5,
          "priceAvg30d": 6.18
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.94,
          "priceAvg30d": 6.2
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.66,
          "priceAvg30d": 7.66
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.51,
          "priceAvg30d": 8.78
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.16,
          "priceAvg30d": 8.63
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.21,
          "priceAvg30d": 8.92
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.26,
          "priceAvg30d": 9.37
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.0,
          "priceAvg30d": 11.32
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.79,
          "priceAvg30d": 11.77
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 23.19,
          "priceAvg30d": 14.65
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.19,
          "priceAvg30d": 15.58
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 24.17,
          "priceAvg30d": 17.62
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.02,
          "priceAvg30d": 17.71
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.9,
          "priceAvg30d": 17.54
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.52,
          "priceAvg30d": 16.2
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.1,
          "priceAvg30d": 14.22
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.5,
          "priceAvg30d": 14.9
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.63,
          "priceAvg30d": 14.16
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.63,
          "priceAvg30d": 14.31
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.87,
          "priceAvg30d": 13.34
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.82,
          "priceAvg30d": 13.45
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.81,
          "priceAvg30d": 12.29
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.81,
          "priceAvg30d": 12.53
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.3,
          "priceAvg30d": 9.71
        }
      ],
      "avg": 16.56,
      "max": 24.9,
      "maxBlock": 38,
      "min": 8.16,
      "minBlock": 29,
      "spread3h": 12.15,
      "spreadLowAvg": 11.1,
      "spreadHighAvg": 23.25,
      "avg30d": 10.96,
      "spread30dAvg": 10.53,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.76,
          "priceAvg30d": 10.39
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.82,
          "priceAvg30d": 10.51
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.76,
          "priceAvg30d": 10.67
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.69,
          "priceAvg30d": 10.42
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.69,
          "priceAvg30d": 10.19
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.82,
          "priceAvg30d": 10.75
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.89,
          "priceAvg30d": 11.45
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.76,
          "priceAvg30d": 12.42
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.76,
          "priceAvg30d": 12.53
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
          "price": 13.89,
          "priceAvg30d": 14.57
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.18,
          "priceAvg30d": 14.42
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 18.11,
          "priceAvg30d": 15.41
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.88,
          "priceAvg30d": 12.29
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.43,
          "priceAvg30d": 10.5
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.66,
          "priceAvg30d": 8.62
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.55,
          "priceAvg30d": 8.61
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.66,
          "priceAvg30d": 8.3
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.94,
          "priceAvg30d": 7.75
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.13,
          "priceAvg30d": 7.03
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.66,
          "priceAvg30d": 6.72
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.95,
          "priceAvg30d": 6.34
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.4,
          "priceAvg30d": 6.07
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.95,
          "priceAvg30d": 5.99
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.13,
          "priceAvg30d": 5.6
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.94,
          "priceAvg30d": 5.72
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.66,
          "priceAvg30d": 6.66
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.4,
          "priceAvg30d": 7.61
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.4,
          "priceAvg30d": 8.49
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.19,
          "priceAvg30d": 9.74
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 15.9,
          "priceAvg30d": 11.18
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.63,
          "priceAvg30d": 13.2
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.79,
          "priceAvg30d": 14.47
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 23.19,
          "priceAvg30d": 17.77
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.19,
          "priceAvg30d": 19.48
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 24.17,
          "priceAvg30d": 20.74
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.02,
          "priceAvg30d": 20.12
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.9,
          "priceAvg30d": 20.14
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.52,
          "priceAvg30d": 19.25
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.1,
          "priceAvg30d": 18.12
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.5,
          "priceAvg30d": 18.24
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.63,
          "priceAvg30d": 17.63
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.63,
          "priceAvg30d": 17.62
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.87,
          "priceAvg30d": 16.42
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.82,
          "priceAvg30d": 16.4
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.81,
          "priceAvg30d": 14.53
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.81,
          "priceAvg30d": 14.19
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.3,
          "priceAvg30d": 10.84
        }
      ],
      "avg": 16.93,
      "max": 24.9,
      "maxBlock": 38,
      "min": 9.13,
      "minBlock": 20,
      "spread3h": 12.72,
      "spreadLowAvg": 10.53,
      "spreadHighAvg": 23.25,
      "avg30d": 12.29,
      "spread30dAvg": 12.12,
      "historyDays": 30
    }
  }
};
