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
  "targetDate": "2026-10-14",
  "fetchedAt": "2026-10-14T11:42:51+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 24.31,
        "priceAvg30d": 19.64
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 24.29,
        "priceAvg30d": 18.01
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 23.84,
        "priceAvg30d": 17.0
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 23.87,
        "priceAvg30d": 16.33
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 24.02,
        "priceAvg30d": 16.09
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 24.29,
        "priceAvg30d": 16.84
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 24.29,
        "priceAvg30d": 17.62
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 24.29,
        "priceAvg30d": 18.54
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 24.29,
        "priceAvg30d": 19.28
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 24.63,
        "priceAvg30d": 20.32
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 24.29,
        "priceAvg30d": 21.12
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 24.29,
        "priceAvg30d": 20.95
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 24.42,
        "priceAvg30d": 20.08
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 24.29,
        "priceAvg30d": 17.28
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 23.69,
        "priceAvg30d": 14.51
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 23.2,
        "priceAvg30d": 13.08
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 23.89,
        "priceAvg30d": 13.24
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 24.29,
        "priceAvg30d": 13.34
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 24.21,
        "priceAvg30d": 13.38
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 23.46,
        "priceAvg30d": 12.73
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 21.86,
        "priceAvg30d": 11.68
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 21.68,
        "priceAvg30d": 11.07
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 20.3,
        "priceAvg30d": 10.95
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 18.0,
        "priceAvg30d": 10.67
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 10.4,
        "priceAvg30d": 8.76
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 10.4,
        "priceAvg30d": 9.53
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 18.8,
        "priceAvg30d": 11.57
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 21.0,
        "priceAvg30d": 14.0
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 21.69,
        "priceAvg30d": 14.97
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 23.67,
        "priceAvg30d": 18.12
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 23.43,
        "priceAvg30d": 19.18
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 27.0,
        "priceAvg30d": 23.09
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 34.65,
        "priceAvg30d": 25.53
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 37.66,
        "priceAvg30d": 28.09
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 34.64,
        "priceAvg30d": 27.93
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 34.65,
        "priceAvg30d": 28.6
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 32.0,
        "priceAvg30d": 28.13
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 27.99,
        "priceAvg30d": 27.64
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 28.29,
        "priceAvg30d": 26.4
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 24.9,
        "priceAvg30d": 24.93
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 24.52,
        "priceAvg30d": 24.09
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 23.71,
        "priceAvg30d": 23.39
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 23.71,
        "priceAvg30d": 22.66
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 24.21,
        "priceAvg30d": 22.86
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 24.17,
        "priceAvg30d": 22.86
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 23.3,
        "priceAvg30d": 21.64
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 23.19,
        "priceAvg30d": 21.47
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 21.63,
        "priceAvg30d": 19.55
      }
    ],
    "avg": 24.24,
    "max": 37.66,
    "maxBlock": 34,
    "min": 10.4,
    "minBlock": 25,
    "spread3h": 12.7,
    "spreadLowAvg": 18.36,
    "spreadHighAvg": 31.06,
    "avg30d": 18.72,
    "spread30dAvg": 17.58,
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
          "price": 15.74,
          "priceAvg30d": 16.93
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.0,
          "priceAvg30d": 15.05
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.0,
          "priceAvg30d": 15.4
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 14.87,
          "priceAvg30d": 15.31
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.95,
          "priceAvg30d": 16.11
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.5,
          "priceAvg30d": 17.82
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.44,
          "priceAvg30d": 18.52
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.0,
          "priceAvg30d": 18.99
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.0,
          "priceAvg30d": 18.61
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.0,
          "priceAvg30d": 18.88
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.0,
          "priceAvg30d": 19.73
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 17.44,
          "priceAvg30d": 18.92
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 26.27,
          "priceAvg30d": 16.49
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.7,
          "priceAvg30d": 14.67
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 25.39,
          "priceAvg30d": 12.23
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.21,
          "priceAvg30d": 10.31
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.56,
          "priceAvg30d": 8.76
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 20.0,
          "priceAvg30d": 8.94
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 13.29,
          "priceAvg30d": 7.59
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.99,
          "priceAvg30d": 6.96
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 13.41,
          "priceAvg30d": 6.44
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.35,
          "priceAvg30d": 6.31
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.35,
          "priceAvg30d": 6.41
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.26,
          "priceAvg30d": 6.14
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.0,
          "priceAvg30d": 6.0
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.32,
          "priceAvg30d": 5.86
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.0,
          "priceAvg30d": 6.8
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.26,
          "priceAvg30d": 8.55
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.26,
          "priceAvg30d": 9.83
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.0,
          "priceAvg30d": 12.04
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.0,
          "priceAvg30d": 15.16
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.0,
          "priceAvg30d": 19.43
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.99,
          "priceAvg30d": 25.27
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 28.86,
          "priceAvg30d": 28.87
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.9,
          "priceAvg30d": 27.61
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 13.0,
          "priceAvg30d": 28.56
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 13.0,
          "priceAvg30d": 27.02
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 10.5,
          "priceAvg30d": 27.57
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 10.5,
          "priceAvg30d": 27.27
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 10.61,
          "priceAvg30d": 26.04
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 10.37,
          "priceAvg30d": 24.68
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 10.37,
          "priceAvg30d": 23.5
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 10.26,
          "priceAvg30d": 22.52
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.26,
          "priceAvg30d": 23.08
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 10.26,
          "priceAvg30d": 22.05
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.0,
          "priceAvg30d": 20.77
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.0,
          "priceAvg30d": 20.45
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.32,
          "priceAvg30d": 18.7
        }
      ],
      "avg": 14.31,
      "max": 28.86,
      "maxBlock": 34,
      "min": 9.32,
      "minBlock": 26,
      "spread3h": 5.29,
      "spreadLowAvg": 10.19,
      "spreadHighAvg": 15.48,
      "avg30d": 16.65,
      "spread30dAvg": 19.65,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.03,
          "priceAvg30d": 21.64
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 25.39,
          "priceAvg30d": 20.43
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.82,
          "priceAvg30d": 20.07
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.98,
          "priceAvg30d": 19.77
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.87,
          "priceAvg30d": 19.65
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.04,
          "priceAvg30d": 19.61
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.29,
          "priceAvg30d": 20.45
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.4,
          "priceAvg30d": 20.74
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.4,
          "priceAvg30d": 20.86
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.0,
          "priceAvg30d": 20.88
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 26.19,
          "priceAvg30d": 21.01
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 26.19,
          "priceAvg30d": 21.18
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 26.27,
          "priceAvg30d": 20.14
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.7,
          "priceAvg30d": 18.56
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 25.39,
          "priceAvg30d": 15.43
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.21,
          "priceAvg30d": 12.99
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.56,
          "priceAvg30d": 10.81
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.21,
          "priceAvg30d": 9.34
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.31,
          "priceAvg30d": 8.86
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.21,
          "priceAvg30d": 7.64
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 26.16,
          "priceAvg30d": 6.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 26.16,
          "priceAvg30d": 6.31
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.94,
          "priceAvg30d": 6.13
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.28,
          "priceAvg30d": 6.04
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 23.74,
          "priceAvg30d": 5.68
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.71,
          "priceAvg30d": 6.18
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 25.11,
          "priceAvg30d": 7.71
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.18,
          "priceAvg30d": 9.48
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 33.18,
          "priceAvg30d": 11.17
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 34.22,
          "priceAvg30d": 13.87
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.62,
          "priceAvg30d": 17.58
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 34.64,
          "priceAvg30d": 22.9
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 39.3,
          "priceAvg30d": 27.2
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.0,
          "priceAvg30d": 30.84
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 39.3,
          "priceAvg30d": 30.49
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 39.78,
          "priceAvg30d": 31.24
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 34.65,
          "priceAvg30d": 30.26
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 33.5,
          "priceAvg30d": 29.99
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.99,
          "priceAvg30d": 28.79
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.0,
          "priceAvg30d": 26.87
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.49,
          "priceAvg30d": 25.59
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.62,
          "priceAvg30d": 24.61
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.4,
          "priceAvg30d": 24.11
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.0,
          "priceAvg30d": 25.22
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.94,
          "priceAvg30d": 24.22
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.64,
          "priceAvg30d": 23.34
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.64,
          "priceAvg30d": 22.83
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.64,
          "priceAvg30d": 21.63
        }
      ],
      "avg": 27.82,
      "max": 45.0,
      "maxBlock": 34,
      "min": 23.64,
      "minBlock": 48,
      "spread3h": 10.99,
      "spreadLowAvg": 24.89,
      "spreadHighAvg": 35.88,
      "avg30d": 18.69,
      "spread30dAvg": 20.95,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.03,
          "priceAvg30d": 23.64
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 25.39,
          "priceAvg30d": 22.88
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.82,
          "priceAvg30d": 22.52
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.98,
          "priceAvg30d": 22.24
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.87,
          "priceAvg30d": 22.02
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.04,
          "priceAvg30d": 22.16
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.29,
          "priceAvg30d": 22.63
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.4,
          "priceAvg30d": 23.06
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.4,
          "priceAvg30d": 23.38
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.0,
          "priceAvg30d": 23.45
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 26.19,
          "priceAvg30d": 23.51
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 26.19,
          "priceAvg30d": 23.68
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 26.27,
          "priceAvg30d": 23.25
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.7,
          "priceAvg30d": 22.26
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 25.39,
          "priceAvg30d": 21.23
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.21,
          "priceAvg30d": 21.12
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.56,
          "priceAvg30d": 20.56
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.21,
          "priceAvg30d": 21.32
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.31,
          "priceAvg30d": 21.51
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.21,
          "priceAvg30d": 21.29
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 26.16,
          "priceAvg30d": 19.81
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 26.16,
          "priceAvg30d": 19.55
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.94,
          "priceAvg30d": 19.7
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.28,
          "priceAvg30d": 19.63
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 23.74,
          "priceAvg30d": 18.16
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.71,
          "priceAvg30d": 19.27
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 25.11,
          "priceAvg30d": 20.14
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.18,
          "priceAvg30d": 22.59
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 33.18,
          "priceAvg30d": 23.99
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 34.22,
          "priceAvg30d": 25.92
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.62,
          "priceAvg30d": 25.15
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 34.64,
          "priceAvg30d": 28.41
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 39.3,
          "priceAvg30d": 31.46
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.0,
          "priceAvg30d": 33.62
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 39.3,
          "priceAvg30d": 32.84
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 39.78,
          "priceAvg30d": 33.54
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 34.65,
          "priceAvg30d": 32.64
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 33.5,
          "priceAvg30d": 32.38
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.99,
          "priceAvg30d": 30.9
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.0,
          "priceAvg30d": 28.9
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.49,
          "priceAvg30d": 27.35
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.62,
          "priceAvg30d": 26.51
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.4,
          "priceAvg30d": 25.73
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.0,
          "priceAvg30d": 26.85
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.94,
          "priceAvg30d": 27.08
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.64,
          "priceAvg30d": 26.23
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.64,
          "priceAvg30d": 25.98
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.64,
          "priceAvg30d": 24.49
        }
      ],
      "avg": 27.82,
      "max": 45.0,
      "maxBlock": 34,
      "min": 23.64,
      "minBlock": 48,
      "spread3h": 10.99,
      "spreadLowAvg": 24.89,
      "spreadHighAvg": 35.88,
      "avg30d": 24.51,
      "spread30dAvg": 13.71,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.03,
          "priceAvg30d": 23.48
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 25.39,
          "priceAvg30d": 22.76
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.82,
          "priceAvg30d": 22.31
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.98,
          "priceAvg30d": 21.93
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.87,
          "priceAvg30d": 21.8
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.04,
          "priceAvg30d": 21.95
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.29,
          "priceAvg30d": 22.45
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.4,
          "priceAvg30d": 22.81
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.4,
          "priceAvg30d": 23.13
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.0,
          "priceAvg30d": 23.28
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 26.19,
          "priceAvg30d": 23.47
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 26.19,
          "priceAvg30d": 23.65
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 26.27,
          "priceAvg30d": 23.29
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.7,
          "priceAvg30d": 22.03
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 25.39,
          "priceAvg30d": 20.61
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.21,
          "priceAvg30d": 19.63
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.0,
          "priceAvg30d": 19.24
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.98,
          "priceAvg30d": 19.81
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 35.01,
          "priceAvg30d": 19.8
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 35.0,
          "priceAvg30d": 19.42
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 30.98,
          "priceAvg30d": 18.11
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 28.0,
          "priceAvg30d": 17.79
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 26.08,
          "priceAvg30d": 17.76
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.28,
          "priceAvg30d": 17.56
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 23.74,
          "priceAvg30d": 15.41
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.42,
          "priceAvg30d": 16.05
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 25.11,
          "priceAvg30d": 18.68
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.18,
          "priceAvg30d": 21.73
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 27.32,
          "priceAvg30d": 22.96
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 27.6,
          "priceAvg30d": 24.31
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.62,
          "priceAvg30d": 25.22
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.98,
          "priceAvg30d": 27.9
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 39.3,
          "priceAvg30d": 30.45
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 39.6,
          "priceAvg30d": 32.47
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 39.3,
          "priceAvg30d": 32.04
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 39.31,
          "priceAvg30d": 32.31
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 34.65,
          "priceAvg30d": 31.53
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.0,
          "priceAvg30d": 30.81
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.99,
          "priceAvg30d": 29.89
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.0,
          "priceAvg30d": 28.61
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.49,
          "priceAvg30d": 27.41
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.62,
          "priceAvg30d": 26.56
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.4,
          "priceAvg30d": 25.96
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.0,
          "priceAvg30d": 26.52
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.94,
          "priceAvg30d": 26.88
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.64,
          "priceAvg30d": 26.17
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.0,
          "priceAvg30d": 26.2
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.61,
          "priceAvg30d": 24.66
        }
      ],
      "avg": 27.96,
      "max": 39.6,
      "maxBlock": 34,
      "min": 23.42,
      "minBlock": 26,
      "spread3h": 9.41,
      "spreadLowAvg": 25.79,
      "spreadHighAvg": 35.19,
      "avg30d": 23.73,
      "spread30dAvg": 15.21,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 17.39,
          "priceAvg30d": 10.8
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.76,
          "priceAvg30d": 10.93
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.69,
          "priceAvg30d": 11.19
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.4,
          "priceAvg30d": 11.04
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.69,
          "priceAvg30d": 11.07
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.76,
          "priceAvg30d": 11.62
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.81,
          "priceAvg30d": 12.44
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.76,
          "priceAvg30d": 13.3
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.81,
          "priceAvg30d": 13.15
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.0,
          "priceAvg30d": 14.39
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.31,
          "priceAvg30d": 14.67
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.5,
          "priceAvg30d": 14.79
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.69,
          "priceAvg30d": 15.72
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.42,
          "priceAvg30d": 12.72
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.66,
          "priceAvg30d": 11.64
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.73,
          "priceAvg30d": 9.85
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.0,
          "priceAvg30d": 11.46
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.98,
          "priceAvg30d": 13.15
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 35.01,
          "priceAvg30d": 15.16
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 35.0,
          "priceAvg30d": 14.96
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 30.98,
          "priceAvg30d": 13.99
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 28.0,
          "priceAvg30d": 13.55
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 26.08,
          "priceAvg30d": 13.85
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.28,
          "priceAvg30d": 13.39
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.73,
          "priceAvg30d": 10.67
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.69,
          "priceAvg30d": 11.04
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 25.11,
          "priceAvg30d": 13.47
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.18,
          "priceAvg30d": 16.5
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 22.0,
          "priceAvg30d": 16.7
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 21.63,
          "priceAvg30d": 17.96
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 21.63,
          "priceAvg30d": 18.14
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.64,
          "priceAvg30d": 20.05
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.17,
          "priceAvg30d": 19.98
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.3,
          "priceAvg30d": 20.71
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.76,
          "priceAvg30d": 20.07
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.69,
          "priceAvg30d": 21.27
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.39,
          "priceAvg30d": 20.63
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.39,
          "priceAvg30d": 20.75
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.63,
          "priceAvg30d": 19.48
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.0,
          "priceAvg30d": 18.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.63,
          "priceAvg30d": 18.45
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.54,
          "priceAvg30d": 17.74
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.63,
          "priceAvg30d": 17.73
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.63,
          "priceAvg30d": 16.56
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.64,
          "priceAvg30d": 16.55
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.2,
          "priceAvg30d": 14.71
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.65,
          "priceAvg30d": 14.41
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.84,
          "priceAvg30d": 11.0
        }
      ],
      "avg": 20.93,
      "max": 35.01,
      "maxBlock": 19,
      "min": 10.66,
      "minBlock": 15,
      "spread3h": 7.06,
      "spreadLowAvg": 19.89,
      "spreadHighAvg": 26.95,
      "avg30d": 15.03,
      "spread30dAvg": 10.29,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 17.39,
          "priceAvg30d": 10.71
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.76,
          "priceAvg30d": 10.82
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.69,
          "priceAvg30d": 11.1
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.4,
          "priceAvg30d": 10.95
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.69,
          "priceAvg30d": 10.93
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.76,
          "priceAvg30d": 11.53
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.81,
          "priceAvg30d": 12.36
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.76,
          "priceAvg30d": 13.23
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.81,
          "priceAvg30d": 13.08
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.0,
          "priceAvg30d": 14.39
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.31,
          "priceAvg30d": 14.65
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.5,
          "priceAvg30d": 14.71
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.69,
          "priceAvg30d": 15.65
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.42,
          "priceAvg30d": 12.61
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.66,
          "priceAvg30d": 11.2
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.73,
          "priceAvg30d": 9.15
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.0,
          "priceAvg30d": 10.8
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.98,
          "priceAvg30d": 12.42
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 35.01,
          "priceAvg30d": 14.61
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 35.0,
          "priceAvg30d": 14.53
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 30.98,
          "priceAvg30d": 13.57
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 28.0,
          "priceAvg30d": 13.18
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 26.08,
          "priceAvg30d": 13.51
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.28,
          "priceAvg30d": 12.99
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.73,
          "priceAvg30d": 10.24
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.69,
          "priceAvg30d": 10.64
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 25.11,
          "priceAvg30d": 13.13
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.18,
          "priceAvg30d": 16.4
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 22.0,
          "priceAvg30d": 16.02
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 21.63,
          "priceAvg30d": 17.67
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 21.63,
          "priceAvg30d": 17.44
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.64,
          "priceAvg30d": 19.56
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.17,
          "priceAvg30d": 19.98
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.3,
          "priceAvg30d": 20.71
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.76,
          "priceAvg30d": 20.07
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.69,
          "priceAvg30d": 21.27
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.39,
          "priceAvg30d": 20.63
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.39,
          "priceAvg30d": 20.75
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.63,
          "priceAvg30d": 19.48
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.0,
          "priceAvg30d": 18.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.63,
          "priceAvg30d": 18.45
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.54,
          "priceAvg30d": 17.74
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.63,
          "priceAvg30d": 17.73
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.63,
          "priceAvg30d": 16.56
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.64,
          "priceAvg30d": 16.55
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.2,
          "priceAvg30d": 14.71
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.65,
          "priceAvg30d": 14.41
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.84,
          "priceAvg30d": 11.0
        }
      ],
      "avg": 20.93,
      "max": 35.01,
      "maxBlock": 19,
      "min": 10.66,
      "minBlock": 15,
      "spread3h": 7.06,
      "spreadLowAvg": 19.89,
      "spreadHighAvg": 26.95,
      "avg30d": 14.83,
      "spread30dAvg": 10.3,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 17.39,
          "priceAvg30d": 10.71
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.76,
          "priceAvg30d": 10.82
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 17.39,
          "priceAvg30d": 11.01
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.4,
          "priceAvg30d": 10.77
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.4,
          "priceAvg30d": 10.54
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 17.39,
          "priceAvg30d": 11.07
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 18.62,
          "priceAvg30d": 11.57
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.76,
          "priceAvg30d": 12.71
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.81,
          "priceAvg30d": 12.85
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.0,
          "priceAvg30d": 14.11
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.31,
          "priceAvg30d": 14.63
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.5,
          "priceAvg30d": 14.66
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.69,
          "priceAvg30d": 15.57
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.42,
          "priceAvg30d": 12.35
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.66,
          "priceAvg30d": 10.56
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.97,
          "priceAvg30d": 8.67
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.94,
          "priceAvg30d": 8.98
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.73,
          "priceAvg30d": 9.01
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.71,
          "priceAvg30d": 8.69
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.2,
          "priceAvg30d": 8.11
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 7.07,
          "priceAvg30d": 8.54
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.5,
          "priceAvg30d": 8.09
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 2.0,
          "priceAvg30d": 8.0
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 1.0,
          "priceAvg30d": 7.59
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.87
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.87
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 8.69
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 9.78
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 4.1,
          "priceAvg30d": 9.54
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 5.01,
          "priceAvg30d": 10.57
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.71,
          "priceAvg30d": 11.81
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.15,
          "priceAvg30d": 14.02
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 13.5,
          "priceAvg30d": 14.89
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.3,
          "priceAvg30d": 17.92
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.76,
          "priceAvg30d": 19.59
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.69,
          "priceAvg30d": 20.86
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.39,
          "priceAvg30d": 20.17
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.39,
          "priceAvg30d": 20.27
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.63,
          "priceAvg30d": 19.37
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.0,
          "priceAvg30d": 18.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.63,
          "priceAvg30d": 18.3
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.54,
          "priceAvg30d": 17.66
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.63,
          "priceAvg30d": 17.69
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.63,
          "priceAvg30d": 16.47
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.64,
          "priceAvg30d": 16.44
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.2,
          "priceAvg30d": 14.7
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.65,
          "priceAvg30d": 14.41
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.84,
          "priceAvg30d": 11.0
        }
      ],
      "avg": 13.8,
      "max": 25.3,
      "maxBlock": 34,
      "min": 0.01,
      "minBlock": 25,
      "spread3h": 13.37,
      "spreadLowAvg": 1.5,
      "spreadHighAvg": 14.87,
      "avg30d": 12.83,
      "spread30dAvg": 11.78,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 17.39,
          "priceAvg30d": 10.58
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.76,
          "priceAvg30d": 10.35
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 17.39,
          "priceAvg30d": 10.42
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.4,
          "priceAvg30d": 10.2
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.4,
          "priceAvg30d": 9.85
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 17.39,
          "priceAvg30d": 10.47
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 18.62,
          "priceAvg30d": 10.78
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.76,
          "priceAvg30d": 11.95
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.81,
          "priceAvg30d": 11.57
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.0,
          "priceAvg30d": 13.12
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.31,
          "priceAvg30d": 13.63
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.5,
          "priceAvg30d": 13.59
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.69,
          "priceAvg30d": 14.12
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.42,
          "priceAvg30d": 11.02
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.66,
          "priceAvg30d": 9.03
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.97,
          "priceAvg30d": 7.86
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.94,
          "priceAvg30d": 8.24
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.73,
          "priceAvg30d": 8.38
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.71,
          "priceAvg30d": 7.55
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.2,
          "priceAvg30d": 6.74
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 7.07,
          "priceAvg30d": 7.14
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.5,
          "priceAvg30d": 6.9
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 2.0,
          "priceAvg30d": 6.56
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 1.0,
          "priceAvg30d": 6.57
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.46
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.53
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 8.01
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 9.06
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.5,
          "priceAvg30d": 8.83
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 5.01,
          "priceAvg30d": 9.1
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.22,
          "priceAvg30d": 9.52
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.15,
          "priceAvg30d": 11.76
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 13.5,
          "priceAvg30d": 12.33
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.3,
          "priceAvg30d": 15.14
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.76,
          "priceAvg30d": 16.08
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.69,
          "priceAvg30d": 18.01
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.39,
          "priceAvg30d": 18.03
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.39,
          "priceAvg30d": 17.93
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.63,
          "priceAvg30d": 16.57
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.0,
          "priceAvg30d": 14.62
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.63,
          "priceAvg30d": 15.29
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.54,
          "priceAvg30d": 14.59
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.63,
          "priceAvg30d": 14.74
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.63,
          "priceAvg30d": 13.77
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.64,
          "priceAvg30d": 13.85
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.2,
          "priceAvg30d": 12.68
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.65,
          "priceAvg30d": 12.91
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.84,
          "priceAvg30d": 9.96
        }
      ],
      "avg": 13.71,
      "max": 25.3,
      "maxBlock": 34,
      "min": 0.01,
      "minBlock": 25,
      "spread3h": 13.7,
      "spreadLowAvg": 1.09,
      "spreadHighAvg": 14.79,
      "avg30d": 11.3,
      "spread30dAvg": 10.66,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 17.39,
          "priceAvg30d": 10.71
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.76,
          "priceAvg30d": 10.82
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 17.39,
          "priceAvg30d": 11.01
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.4,
          "priceAvg30d": 10.77
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.4,
          "priceAvg30d": 10.54
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 17.39,
          "priceAvg30d": 11.07
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 18.62,
          "priceAvg30d": 11.57
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.76,
          "priceAvg30d": 12.71
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.81,
          "priceAvg30d": 12.85
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.0,
          "priceAvg30d": 14.11
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.31,
          "priceAvg30d": 14.59
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.5,
          "priceAvg30d": 14.66
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.69,
          "priceAvg30d": 15.57
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.42,
          "priceAvg30d": 12.35
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.66,
          "priceAvg30d": 10.56
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.97,
          "priceAvg30d": 8.67
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.94,
          "priceAvg30d": 8.7
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.73,
          "priceAvg30d": 8.37
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.71,
          "priceAvg30d": 7.74
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.2,
          "priceAvg30d": 6.99
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 7.07,
          "priceAvg30d": 6.76
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.5,
          "priceAvg30d": 6.33
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 1.0,
          "priceAvg30d": 6.12
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.03
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.6
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.74
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 6.69
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 7.61
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 4.1,
          "priceAvg30d": 8.52
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 5.01,
          "priceAvg30d": 9.78
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.71,
          "priceAvg30d": 11.37
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.15,
          "priceAvg30d": 13.52
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 13.5,
          "priceAvg30d": 14.89
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.3,
          "priceAvg30d": 17.92
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.76,
          "priceAvg30d": 19.59
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.69,
          "priceAvg30d": 20.86
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.39,
          "priceAvg30d": 20.17
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.39,
          "priceAvg30d": 20.27
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.63,
          "priceAvg30d": 19.37
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.0,
          "priceAvg30d": 18.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.63,
          "priceAvg30d": 18.3
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.54,
          "priceAvg30d": 17.66
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.63,
          "priceAvg30d": 17.69
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.63,
          "priceAvg30d": 16.47
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.64,
          "priceAvg30d": 16.44
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.2,
          "priceAvg30d": 14.7
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.65,
          "priceAvg30d": 14.41
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.84,
          "priceAvg30d": 11.0
        }
      ],
      "avg": 13.74,
      "max": 25.3,
      "maxBlock": 34,
      "min": 0.01,
      "minBlock": 24,
      "spread3h": 13.1,
      "spreadLowAvg": 1.77,
      "spreadHighAvg": 14.87,
      "avg30d": 12.42,
      "spread30dAvg": 12.19,
      "historyDays": 30
    }
  }
};
