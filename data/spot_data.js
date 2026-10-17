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
  "targetDate": "2026-10-17",
  "fetchedAt": "2026-10-17T11:08:41+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 23.95,
        "priceAvg30d": 20.35
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 23.73,
        "priceAvg30d": 18.78
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 23.58,
        "priceAvg30d": 17.88
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 23.53,
        "priceAvg30d": 17.33
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 23.58,
        "priceAvg30d": 17.1
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 24.54,
        "priceAvg30d": 17.87
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 25.0,
        "priceAvg30d": 18.62
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 25.28,
        "priceAvg30d": 19.49
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 26.23,
        "priceAvg30d": 20.22
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 26.24,
        "priceAvg30d": 21.19
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 26.55,
        "priceAvg30d": 21.87
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 26.53,
        "priceAvg30d": 21.63
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 25.55,
        "priceAvg30d": 20.74
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 23.58,
        "priceAvg30d": 17.99
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 13.79,
        "priceAvg30d": 15.14
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 9.94,
        "priceAvg30d": 13.49
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 10.15,
        "priceAvg30d": 13.08
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 9.61,
        "priceAvg30d": 12.92
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 2.5,
        "priceAvg30d": 12.61
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 0.7,
        "priceAvg30d": 11.89
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 0.01,
        "priceAvg30d": 10.97
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 0.01,
        "priceAvg30d": 10.36
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 0.01,
        "priceAvg30d": 10.17
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 0.01,
        "priceAvg30d": 9.84
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 0.01,
        "priceAvg30d": 7.67
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 0.01,
        "priceAvg30d": 8.45
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 0.01,
        "priceAvg30d": 10.77
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 1.0,
        "priceAvg30d": 13.18
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 3.0,
        "priceAvg30d": 14.19
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 9.73,
        "priceAvg30d": 17.6
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 11.37,
        "priceAvg30d": 18.78
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 19.89,
        "priceAvg30d": 22.78
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 22.52,
        "priceAvg30d": 25.89
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 26.0,
        "priceAvg30d": 28.69
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 26.64,
        "priceAvg30d": 28.38
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 26.64,
        "priceAvg30d": 29.03
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 26.26,
        "priceAvg30d": 28.32
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 25.98,
        "priceAvg30d": 27.51
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 25.85,
        "priceAvg30d": 26.38
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 25.33,
        "priceAvg30d": 24.93
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 25.0,
        "priceAvg30d": 24.17
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 24.99,
        "priceAvg30d": 23.47
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 25.03,
        "priceAvg30d": 22.87
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 24.21,
        "priceAvg30d": 23.05
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 25.35,
        "priceAvg30d": 23.12
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 24.52,
        "priceAvg30d": 22.04
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 24.58,
        "priceAvg30d": 21.91
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 24.03,
        "priceAvg30d": 20.17
      }
    ],
    "avg": 17.55,
    "max": 26.64,
    "maxBlock": 35,
    "min": 0.01,
    "minBlock": 21,
    "spread3h": 22.41,
    "spreadLowAvg": 2.14,
    "spreadHighAvg": 24.55,
    "avg30d": 18.85,
    "spread30dAvg": 17.96,
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
          "price": 14.9,
          "priceAvg30d": 17.06
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 14.9,
          "priceAvg30d": 14.87
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 14.9,
          "priceAvg30d": 15.28
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 14.9,
          "priceAvg30d": 15.21
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.0,
          "priceAvg30d": 16.1
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.0,
          "priceAvg30d": 17.65
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.0,
          "priceAvg30d": 18.78
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 17.43,
          "priceAvg30d": 18.96
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.88,
          "priceAvg30d": 18.51
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 14.9,
          "priceAvg30d": 18.91
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.9,
          "priceAvg30d": 19.65
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 26.24,
          "priceAvg30d": 19.25
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.0,
          "priceAvg30d": 17.07
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.9,
          "priceAvg30d": 15.15
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.75,
          "priceAvg30d": 12.5
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.72,
          "priceAvg30d": 10.38
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 3.0,
          "priceAvg30d": 9.16
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 8.64
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 7.09
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 6.34
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 5.82
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 5.55
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 5.81
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 5.67
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.36
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.27
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 6.18
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.66,
          "priceAvg30d": 7.58
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 3.0,
          "priceAvg30d": 8.97
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.72,
          "priceAvg30d": 11.13
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 1.0,
          "priceAvg30d": 14.19
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.73,
          "priceAvg30d": 19.17
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 26.96,
          "priceAvg30d": 25.13
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 29.53,
          "priceAvg30d": 29.07
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.74,
          "priceAvg30d": 27.75
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.1,
          "priceAvg30d": 28.52
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.1,
          "priceAvg30d": 26.9
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.1,
          "priceAvg30d": 27.5
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.53,
          "priceAvg30d": 26.67
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.53,
          "priceAvg30d": 25.39
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.1,
          "priceAvg30d": 24.04
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.69,
          "priceAvg30d": 23.17
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.13,
          "priceAvg30d": 22.31
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.01,
          "priceAvg30d": 22.86
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.53,
          "priceAvg30d": 21.76
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.5,
          "priceAvg30d": 20.51
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.13,
          "priceAvg30d": 19.97
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.68,
          "priceAvg30d": 17.98
        }
      ],
      "avg": 15.37,
      "max": 29.74,
      "maxBlock": 35,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 23.46,
      "spreadLowAvg": 2.29,
      "spreadHighAvg": 25.75,
      "avg30d": 16.39,
      "spread30dAvg": 20.06,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.0,
          "priceAvg30d": 22.16
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.3,
          "priceAvg30d": 21.03
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.44,
          "priceAvg30d": 20.77
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.96,
          "priceAvg30d": 20.52
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.64,
          "priceAvg30d": 20.32
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.8,
          "priceAvg30d": 20.29
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.81,
          "priceAvg30d": 21.11
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.51,
          "priceAvg30d": 21.37
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.09,
          "priceAvg30d": 21.33
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.08,
          "priceAvg30d": 21.5
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.12,
          "priceAvg30d": 21.63
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.79,
          "priceAvg30d": 21.67
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.0,
          "priceAvg30d": 20.78
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 15.92,
          "priceAvg30d": 19.23
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.75,
          "priceAvg30d": 15.99
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.6,
          "priceAvg30d": 13.03
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 3.0,
          "priceAvg30d": 11.08
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 8.99
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 8.3
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 7.03
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 6.19
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 5.7
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 5.57
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 5.52
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.38
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.79
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 7.23
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 8.95
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 1.0,
          "priceAvg30d": 10.93
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 1.01,
          "priceAvg30d": 14.24
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 1.0,
          "priceAvg30d": 17.89
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.73,
          "priceAvg30d": 23.68
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 26.96,
          "priceAvg30d": 27.98
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 29.53,
          "priceAvg30d": 31.97
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.74,
          "priceAvg30d": 31.34
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.74,
          "priceAvg30d": 32.0
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.58,
          "priceAvg30d": 30.48
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.58,
          "priceAvg30d": 30.11
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.53,
          "priceAvg30d": 29.13
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.53,
          "priceAvg30d": 27.08
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.1,
          "priceAvg30d": 25.68
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.69,
          "priceAvg30d": 24.79
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.13,
          "priceAvg30d": 24.38
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.01,
          "priceAvg30d": 25.77
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.53,
          "priceAvg30d": 24.54
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.5,
          "priceAvg30d": 23.53
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.13,
          "priceAvg30d": 23.06
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.68,
          "priceAvg30d": 21.39
        }
      ],
      "avg": 18.1,
      "max": 29.74,
      "maxBlock": 35,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 23.75,
      "spreadLowAvg": 2.27,
      "spreadHighAvg": 26.02,
      "avg30d": 18.93,
      "spread30dAvg": 22.07,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.0,
          "priceAvg30d": 24.16
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.3,
          "priceAvg30d": 23.27
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.44,
          "priceAvg30d": 23.03
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.96,
          "priceAvg30d": 22.83
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.64,
          "priceAvg30d": 22.62
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.8,
          "priceAvg30d": 22.78
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.81,
          "priceAvg30d": 23.29
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.51,
          "priceAvg30d": 23.68
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.09,
          "priceAvg30d": 23.86
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.08,
          "priceAvg30d": 24.08
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.12,
          "priceAvg30d": 24.14
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.79,
          "priceAvg30d": 24.17
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.0,
          "priceAvg30d": 23.75
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.46,
          "priceAvg30d": 22.65
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.13,
          "priceAvg30d": 21.65
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 23.58,
          "priceAvg30d": 21.42
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.97,
          "priceAvg30d": 20.4
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 20.75,
          "priceAvg30d": 20.95
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.26,
          "priceAvg30d": 20.99
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.37,
          "priceAvg30d": 20.66
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.79,
          "priceAvg30d": 19.18
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.04,
          "priceAvg30d": 18.81
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.04,
          "priceAvg30d": 18.93
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.05,
          "priceAvg30d": 18.87
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.32,
          "priceAvg30d": 17.27
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 1.02,
          "priceAvg30d": 18.43
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 19.54
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.03,
          "priceAvg30d": 21.94
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 17.04,
          "priceAvg30d": 23.55
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 22.62,
          "priceAvg30d": 25.46
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.58,
          "priceAvg30d": 24.73
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.9,
          "priceAvg30d": 28.46
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 26.96,
          "priceAvg30d": 31.82
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 29.53,
          "priceAvg30d": 34.4
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.74,
          "priceAvg30d": 33.31
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.74,
          "priceAvg30d": 34.06
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.58,
          "priceAvg30d": 32.87
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.58,
          "priceAvg30d": 32.5
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.53,
          "priceAvg30d": 31.02
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.53,
          "priceAvg30d": 28.97
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.1,
          "priceAvg30d": 27.4
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.69,
          "priceAvg30d": 26.57
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.13,
          "priceAvg30d": 25.89
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.01,
          "priceAvg30d": 26.9
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.53,
          "priceAvg30d": 27.25
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.5,
          "priceAvg30d": 26.4
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.13,
          "priceAvg30d": 26.19
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.68,
          "priceAvg30d": 24.61
        }
      ],
      "avg": 21.99,
      "max": 29.74,
      "maxBlock": 35,
      "min": 0.04,
      "minBlock": 22,
      "spread3h": 24.41,
      "spreadLowAvg": 4.14,
      "spreadHighAvg": 28.55,
      "avg30d": 24.58,
      "spread30dAvg": 13.75,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.0,
          "priceAvg30d": 24.0
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.3,
          "priceAvg30d": 23.09
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.44,
          "priceAvg30d": 22.75
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.96,
          "priceAvg30d": 22.45
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.64,
          "priceAvg30d": 22.28
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.8,
          "priceAvg30d": 22.43
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.81,
          "priceAvg30d": 22.96
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.51,
          "priceAvg30d": 23.33
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.09,
          "priceAvg30d": 23.52
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.08,
          "priceAvg30d": 23.83
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.12,
          "priceAvg30d": 24.04
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.79,
          "priceAvg30d": 24.11
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.0,
          "priceAvg30d": 23.73
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.46,
          "priceAvg30d": 22.39
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 21.01,
          "priceAvg30d": 21.03
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.59,
          "priceAvg30d": 19.83
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.43,
          "priceAvg30d": 18.84
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 5.5,
          "priceAvg30d": 19.39
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 19.36
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.93,
          "priceAvg30d": 18.62
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.7,
          "priceAvg30d": 17.14
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.04,
          "priceAvg30d": 16.72
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.04,
          "priceAvg30d": 16.6
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.04,
          "priceAvg30d": 16.42
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 13.96
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.02,
          "priceAvg30d": 14.71
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.56,
          "priceAvg30d": 17.63
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 1.01,
          "priceAvg30d": 20.89
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 1.0,
          "priceAvg30d": 22.2
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 6.5,
          "priceAvg30d": 23.71
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.97,
          "priceAvg30d": 24.72
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.31,
          "priceAvg30d": 28.05
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.99,
          "priceAvg30d": 30.87
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.41,
          "priceAvg30d": 33.12
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.38,
          "priceAvg30d": 32.56
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 27.4,
          "priceAvg30d": 32.85
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 27.4,
          "priceAvg30d": 31.82
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.7,
          "priceAvg30d": 30.94
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 26.01,
          "priceAvg30d": 30.01
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.85,
          "priceAvg30d": 28.75
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.85,
          "priceAvg30d": 27.52
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.0,
          "priceAvg30d": 26.65
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.96,
          "priceAvg30d": 26.15
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.08,
          "priceAvg30d": 26.64
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.29,
          "priceAvg30d": 27.05
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.25,
          "priceAvg30d": 26.34
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.01,
          "priceAvg30d": 26.42
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.83,
          "priceAvg30d": 24.82
        }
      ],
      "avg": 18.68,
      "max": 28.12,
      "maxBlock": 11,
      "min": 0.01,
      "minBlock": 25,
      "spread3h": 27.04,
      "spreadLowAvg": 0.28,
      "spreadHighAvg": 27.32,
      "avg30d": 23.69,
      "spread30dAvg": 15.67,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.0,
          "priceAvg30d": 11.46
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 18.62,
          "priceAvg30d": 11.62
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.93,
          "priceAvg30d": 11.88
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.92,
          "priceAvg30d": 11.62
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.64,
          "priceAvg30d": 11.68
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.8,
          "priceAvg30d": 12.41
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.81,
          "priceAvg30d": 13.29
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.51,
          "priceAvg30d": 14.12
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.09,
          "priceAvg30d": 14.0
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.08,
          "priceAvg30d": 15.35
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.12,
          "priceAvg30d": 15.23
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.79,
          "priceAvg30d": 15.27
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 21.24,
          "priceAvg30d": 16.2
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.0,
          "priceAvg30d": 13.43
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 17.3,
          "priceAvg30d": 12.05
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.59,
          "priceAvg30d": 10.3
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.43,
          "priceAvg30d": 12.07
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 5.5,
          "priceAvg30d": 13.18
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 14.79
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.93,
          "priceAvg30d": 14.23
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.7,
          "priceAvg30d": 13.32
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.04,
          "priceAvg30d": 13.0
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.04,
          "priceAvg30d": 13.18
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.04,
          "priceAvg30d": 13.1
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 9.64
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.02,
          "priceAvg30d": 10.13
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.56,
          "priceAvg30d": 12.74
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 1.01,
          "priceAvg30d": 15.92
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 1.0,
          "priceAvg30d": 15.56
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 3.1,
          "priceAvg30d": 16.98
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.77,
          "priceAvg30d": 17.3
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.88,
          "priceAvg30d": 19.48
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.68,
          "priceAvg30d": 19.89
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.89,
          "priceAvg30d": 21.45
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.24,
          "priceAvg30d": 20.17
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.7,
          "priceAvg30d": 21.48
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.24,
          "priceAvg30d": 20.33
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.24,
          "priceAvg30d": 20.78
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.83,
          "priceAvg30d": 19.72
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.87,
          "priceAvg30d": 18.43
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.24,
          "priceAvg30d": 18.82
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.24,
          "priceAvg30d": 18.05
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.24,
          "priceAvg30d": 18.11
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.83,
          "priceAvg30d": 17.04
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.83,
          "priceAvg30d": 17.02
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.58,
          "priceAvg30d": 15.21
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.62,
          "priceAvg30d": 14.9
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.8,
          "priceAvg30d": 11.65
        }
      ],
      "avg": 14.98,
      "max": 28.12,
      "maxBlock": 11,
      "min": 0.01,
      "minBlock": 25,
      "spread3h": 25.17,
      "spreadLowAvg": 0.28,
      "spreadHighAvg": 25.45,
      "avg30d": 15.16,
      "spread30dAvg": 9.62,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 18.62,
          "priceAvg30d": 11.38
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 18.62,
          "priceAvg30d": 11.5
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.93,
          "priceAvg30d": 11.78
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.92,
          "priceAvg30d": 11.53
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.0,
          "priceAvg30d": 11.53
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.82,
          "priceAvg30d": 12.32
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.0,
          "priceAvg30d": 13.2
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.7,
          "priceAvg30d": 14.05
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.51,
          "priceAvg30d": 13.93
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 21.24,
          "priceAvg30d": 15.35
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.7,
          "priceAvg30d": 15.22
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.18,
          "priceAvg30d": 15.19
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 21.24,
          "priceAvg30d": 16.13
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.0,
          "priceAvg30d": 13.32
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 17.3,
          "priceAvg30d": 11.61
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.71,
          "priceAvg30d": 9.61
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.43,
          "priceAvg30d": 11.41
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 5.5,
          "priceAvg30d": 12.46
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 14.25
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.93,
          "priceAvg30d": 13.79
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.7,
          "priceAvg30d": 12.91
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.04,
          "priceAvg30d": 12.62
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.04,
          "priceAvg30d": 12.84
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.04,
          "priceAvg30d": 12.71
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 9.21
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.02,
          "priceAvg30d": 9.73
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.56,
          "priceAvg30d": 12.4
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 1.01,
          "priceAvg30d": 15.82
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 1.0,
          "priceAvg30d": 14.99
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 3.1,
          "priceAvg30d": 16.79
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.24,
          "priceAvg30d": 16.97
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.81,
          "priceAvg30d": 19.41
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.68,
          "priceAvg30d": 19.89
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.89,
          "priceAvg30d": 21.45
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.24,
          "priceAvg30d": 20.17
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.7,
          "priceAvg30d": 21.14
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.24,
          "priceAvg30d": 20.33
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.24,
          "priceAvg30d": 20.34
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.83,
          "priceAvg30d": 19.38
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.87,
          "priceAvg30d": 18.25
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.24,
          "priceAvg30d": 18.64
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.24,
          "priceAvg30d": 17.89
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.24,
          "priceAvg30d": 17.95
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.83,
          "priceAvg30d": 16.8
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.83,
          "priceAvg30d": 16.79
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.58,
          "priceAvg30d": 14.96
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.62,
          "priceAvg30d": 14.73
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.8,
          "priceAvg30d": 11.52
        }
      ],
      "avg": 13.53,
      "max": 22.51,
      "maxBlock": 9,
      "min": 0.01,
      "minBlock": 25,
      "spread3h": 20.82,
      "spreadLowAvg": 0.28,
      "spreadHighAvg": 21.11,
      "avg30d": 14.92,
      "spread30dAvg": 9.88,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 18.62,
          "priceAvg30d": 11.38
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 18.62,
          "priceAvg30d": 11.5
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.93,
          "priceAvg30d": 11.62
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.92,
          "priceAvg30d": 11.35
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.0,
          "priceAvg30d": 11.04
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.82,
          "priceAvg30d": 11.78
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.0,
          "priceAvg30d": 12.37
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.7,
          "priceAvg30d": 13.53
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.51,
          "priceAvg30d": 13.7
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 21.24,
          "priceAvg30d": 15.08
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.7,
          "priceAvg30d": 15.2
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.18,
          "priceAvg30d": 15.15
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 21.24,
          "priceAvg30d": 16.05
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.0,
          "priceAvg30d": 13.06
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.5,
          "priceAvg30d": 10.62
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.71,
          "priceAvg30d": 8.67
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.43,
          "priceAvg30d": 8.62
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 5.5,
          "priceAvg30d": 8.61
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 7.87
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.02,
          "priceAvg30d": 7.21
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.77
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 7.21
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 7.22
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.87
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.95
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.89
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 7.48
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.02,
          "priceAvg30d": 8.65
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 1.0,
          "priceAvg30d": 9.14
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 3.1,
          "priceAvg30d": 9.95
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.24,
          "priceAvg30d": 11.1
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.81,
          "priceAvg30d": 13.31
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.68,
          "priceAvg30d": 14.65
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.89,
          "priceAvg30d": 18.61
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.24,
          "priceAvg30d": 19.69
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.7,
          "priceAvg30d": 20.73
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.24,
          "priceAvg30d": 19.87
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.24,
          "priceAvg30d": 19.86
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.83,
          "priceAvg30d": 19.26
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.87,
          "priceAvg30d": 18.25
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.24,
          "priceAvg30d": 18.49
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.24,
          "priceAvg30d": 17.81
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.24,
          "priceAvg30d": 17.92
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.83,
          "priceAvg30d": 16.71
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.83,
          "priceAvg30d": 16.68
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.58,
          "priceAvg30d": 14.96
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.62,
          "priceAvg30d": 14.73
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.8,
          "priceAvg30d": 11.52
        }
      ],
      "avg": 13.32,
      "max": 22.51,
      "maxBlock": 9,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 19.77,
      "spreadLowAvg": 1.34,
      "spreadHighAvg": 21.11,
      "avg30d": 12.81,
      "spread30dAvg": 12.21,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.14,
          "priceAvg30d": 11.27
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 3.0,
          "priceAvg30d": 11.21
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 3.0,
          "priceAvg30d": 11.21
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 2.9,
          "priceAvg30d": 10.96
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 3.0,
          "priceAvg30d": 10.5
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 5.0,
          "priceAvg30d": 11.13
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 5.0,
          "priceAvg30d": 11.38
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 8.14,
          "priceAvg30d": 12.61
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.17,
          "priceAvg30d": 12.46
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.26,
          "priceAvg30d": 13.94
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 8.26,
          "priceAvg30d": 14.14
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 8.22,
          "priceAvg30d": 13.96
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 8.19,
          "priceAvg30d": 14.55
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 3.01,
          "priceAvg30d": 11.81
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 7.3,
          "priceAvg30d": 9.05
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.42,
          "priceAvg30d": 7.54
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.43,
          "priceAvg30d": 7.62
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 5.5,
          "priceAvg30d": 7.84
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 7.13
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.02,
          "priceAvg30d": 6.24
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 6.73
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.32
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 5.88
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.14
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.74
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.77
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 7.0
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 7.77
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 1.0,
          "priceAvg30d": 8.17
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 3.1,
          "priceAvg30d": 8.7
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.24,
          "priceAvg30d": 9.25
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.42,
          "priceAvg30d": 11.73
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 3.0,
          "priceAvg30d": 12.57
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 3.0,
          "priceAvg30d": 15.66
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 8.17,
          "priceAvg30d": 16.36
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 8.25,
          "priceAvg30d": 17.84
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 8.44,
          "priceAvg30d": 17.46
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 8.4,
          "priceAvg30d": 17.24
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 8.42,
          "priceAvg30d": 16.34
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 8.39,
          "priceAvg30d": 14.95
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 8.38,
          "priceAvg30d": 15.41
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 8.38,
          "priceAvg30d": 14.57
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 8.17,
          "priceAvg30d": 14.9
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 8.14,
          "priceAvg30d": 13.94
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 7.3,
          "priceAvg30d": 14.02
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 5.0,
          "priceAvg30d": 12.86
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 5.01,
          "priceAvg30d": 13.13
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 5.0,
          "priceAvg30d": 10.37
        }
      ],
      "avg": 5.14,
      "max": 8.44,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 6.1,
      "spreadLowAvg": 1.34,
      "spreadHighAvg": 7.44,
      "avg30d": 11.32,
      "spread30dAvg": 10.97,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 18.62,
          "priceAvg30d": 11.38
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 18.62,
          "priceAvg30d": 11.5
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.93,
          "priceAvg30d": 11.62
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.92,
          "priceAvg30d": 11.35
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.0,
          "priceAvg30d": 11.04
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.82,
          "priceAvg30d": 11.78
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.0,
          "priceAvg30d": 12.37
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.7,
          "priceAvg30d": 13.53
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.51,
          "priceAvg30d": 13.7
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 21.24,
          "priceAvg30d": 15.08
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.7,
          "priceAvg30d": 15.16
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.18,
          "priceAvg30d": 15.15
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 21.24,
          "priceAvg30d": 16.05
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.0,
          "priceAvg30d": 13.06
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.5,
          "priceAvg30d": 10.62
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.71,
          "priceAvg30d": 8.67
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.43,
          "priceAvg30d": 8.44
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 5.5,
          "priceAvg30d": 7.97
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 6.92
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 6.31
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 6.21
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 5.65
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 5.45
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 5.31
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 4.92
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.01
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 5.99
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.02,
          "priceAvg30d": 7.12
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 1.0,
          "priceAvg30d": 8.12
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 3.1,
          "priceAvg30d": 9.17
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.24,
          "priceAvg30d": 10.65
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.81,
          "priceAvg30d": 12.81
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.68,
          "priceAvg30d": 14.65
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.89,
          "priceAvg30d": 18.61
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.24,
          "priceAvg30d": 19.69
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.7,
          "priceAvg30d": 20.73
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.24,
          "priceAvg30d": 19.87
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.24,
          "priceAvg30d": 19.86
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.83,
          "priceAvg30d": 19.26
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.87,
          "priceAvg30d": 18.25
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.24,
          "priceAvg30d": 18.49
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.24,
          "priceAvg30d": 17.81
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.24,
          "priceAvg30d": 17.92
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.83,
          "priceAvg30d": 16.71
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.83,
          "priceAvg30d": 16.68
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.58,
          "priceAvg30d": 14.96
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.62,
          "priceAvg30d": 14.73
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.8,
          "priceAvg30d": 11.52
        }
      ],
      "avg": 13.32,
      "max": 22.51,
      "maxBlock": 9,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 18.36,
      "spreadLowAvg": 2.74,
      "spreadHighAvg": 21.11,
      "avg30d": 12.45,
      "spread30dAvg": 12.73,
      "historyDays": 30
    }
  }
};
