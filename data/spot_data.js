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
  "targetDate": "2026-09-08",
  "fetchedAt": "2026-09-08T09:05:49+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 21.95,
        "priceAvg30d": 17.16
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 20.59,
        "priceAvg30d": 16.21
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 20.59,
        "priceAvg30d": 15.51
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 20.1,
        "priceAvg30d": 16.2
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 20.59,
        "priceAvg30d": 16.08
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 20.59,
        "priceAvg30d": 16.05
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 20.59,
        "priceAvg30d": 16.08
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 20.59,
        "priceAvg30d": 16.25
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 20.95,
        "priceAvg30d": 16.32
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 21.08,
        "priceAvg30d": 16.9
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 21.97,
        "priceAvg30d": 17.46
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 21.85,
        "priceAvg30d": 16.87
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 21.25,
        "priceAvg30d": 15.77
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 21.2,
        "priceAvg30d": 15.22
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 20.59,
        "priceAvg30d": 14.71
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 20.89,
        "priceAvg30d": 15.11
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 21.15,
        "priceAvg30d": 15.84
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 22.11,
        "priceAvg30d": 17.14
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 23.51,
        "priceAvg30d": 17.15
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 23.65,
        "priceAvg30d": 17.12
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 23.08,
        "priceAvg30d": 16.34
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 23.51,
        "priceAvg30d": 16.36
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 23.94,
        "priceAvg30d": 16.51
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 23.02,
        "priceAvg30d": 16.56
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 21.74,
        "priceAvg30d": 15.59
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 21.97,
        "priceAvg30d": 15.99
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 23.51,
        "priceAvg30d": 16.83
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 25.75,
        "priceAvg30d": 18.21
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 27.34,
        "priceAvg30d": 19.6
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 29.51,
        "priceAvg30d": 21.5
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 26.51,
        "priceAvg30d": 20.47
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 29.51,
        "priceAvg30d": 23.44
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 30.98,
        "priceAvg30d": 25.07
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 32.52,
        "priceAvg30d": 27.45
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 32.0,
        "priceAvg30d": 27.92
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 32.46,
        "priceAvg30d": 28.83
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 32.48,
        "priceAvg30d": 28.89
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 32.0,
        "priceAvg30d": 28.53
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 30.0,
        "priceAvg30d": 26.96
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 25.62,
        "priceAvg30d": 25.21
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 24.36,
        "priceAvg30d": 23.49
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 23.39,
        "priceAvg30d": 21.41
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 22.41,
        "priceAvg30d": 20.23
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 23.64,
        "priceAvg30d": 22.29
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 23.64,
        "priceAvg30d": 21.23
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 22.47,
        "priceAvg30d": 19.42
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 23.07,
        "priceAvg30d": 19.09
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 21.98,
        "priceAvg30d": 17.34
      }
    ],
    "avg": 24.13,
    "max": 32.52,
    "maxBlock": 34,
    "min": 20.1,
    "minBlock": 4,
    "spread3h": 9.84,
    "spreadLowAvg": 20.82,
    "spreadHighAvg": 30.66,
    "avg30d": 19.29,
    "spread30dAvg": 13.37,
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
          "price": 21.61,
          "priceAvg30d": 14.81
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 13.69
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.77,
          "priceAvg30d": 12.91
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.85,
          "priceAvg30d": 13.23
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.33,
          "priceAvg30d": 13.69
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.33,
          "priceAvg30d": 13.8
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.48,
          "priceAvg30d": 14.65
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.52,
          "priceAvg30d": 14.77
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.75,
          "priceAvg30d": 14.92
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.5,
          "priceAvg30d": 15.45
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.64,
          "priceAvg30d": 14.95
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.8,
          "priceAvg30d": 13.82
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.33,
          "priceAvg30d": 12.29
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.34,
          "priceAvg30d": 11.27
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.39,
          "priceAvg30d": 10.35
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.33,
          "priceAvg30d": 9.81
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.4,
          "priceAvg30d": 10.19
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.14,
          "priceAvg30d": 9.99
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.33,
          "priceAvg30d": 9.61
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.79,
          "priceAvg30d": 8.83
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.6,
          "priceAvg30d": 8.21
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.6,
          "priceAvg30d": 8.15
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.33,
          "priceAvg30d": 8.61
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.51,
          "priceAvg30d": 8.31
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.45,
          "priceAvg30d": 8.21
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.33,
          "priceAvg30d": 8.12
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 16.53,
          "priceAvg30d": 9.04
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.8,
          "priceAvg30d": 10.07
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 20.87,
          "priceAvg30d": 10.39
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.59,
          "priceAvg30d": 11.83
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 26.51,
          "priceAvg30d": 13.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 29.51,
          "priceAvg30d": 14.8
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 18.01
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.52,
          "priceAvg30d": 20.85
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.51,
          "priceAvg30d": 21.29
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 21.86
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 32.48,
          "priceAvg30d": 22.07
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.0,
          "priceAvg30d": 22.66
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.21,
          "priceAvg30d": 21.31
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.23,
          "priceAvg30d": 20.84
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.55,
          "priceAvg30d": 19.62
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.64,
          "priceAvg30d": 18.7
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.4,
          "priceAvg30d": 17.69
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.0,
          "priceAvg30d": 18.66
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.75,
          "priceAvg30d": 19.02
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.49,
          "priceAvg30d": 17.37
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.43,
          "priceAvg30d": 16.95
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 20.01,
          "priceAvg30d": 14.83
        }
      ],
      "avg": 20.2,
      "max": 32.52,
      "maxBlock": 34,
      "min": 9.4,
      "minBlock": 17,
      "spread3h": 19.28,
      "spreadLowAvg": 10.39,
      "spreadHighAvg": 29.67,
      "avg30d": 14.24,
      "spread30dAvg": 12.46,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.28,
          "priceAvg30d": 18.13
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 16.97
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.77,
          "priceAvg30d": 15.68
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.85,
          "priceAvg30d": 16.31
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.33,
          "priceAvg30d": 16.39
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.33,
          "priceAvg30d": 16.28
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.48,
          "priceAvg30d": 17.04
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.52,
          "priceAvg30d": 17.41
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.75,
          "priceAvg30d": 17.64
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.5,
          "priceAvg30d": 18.47
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.6,
          "priceAvg30d": 18.73
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.8,
          "priceAvg30d": 17.49
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.33,
          "priceAvg30d": 15.36
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.34,
          "priceAvg30d": 13.65
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.39,
          "priceAvg30d": 13.3
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.33,
          "priceAvg30d": 12.41
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.4,
          "priceAvg30d": 10.99
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.14,
          "priceAvg30d": 11.19
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.33,
          "priceAvg30d": 11.4
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.79,
          "priceAvg30d": 10.83
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.6,
          "priceAvg30d": 10.28
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.6,
          "priceAvg30d": 10.65
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.33,
          "priceAvg30d": 10.41
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.51,
          "priceAvg30d": 9.8
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.45,
          "priceAvg30d": 9.34
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.33,
          "priceAvg30d": 9.68
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 16.53,
          "priceAvg30d": 10.67
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.8,
          "priceAvg30d": 11.6
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.37,
          "priceAvg30d": 11.68
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 27.41,
          "priceAvg30d": 13.35
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 26.51,
          "priceAvg30d": 14.6
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 29.51,
          "priceAvg30d": 16.77
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 20.29
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.52,
          "priceAvg30d": 23.24
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.51,
          "priceAvg30d": 23.74
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 24.59
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 32.48,
          "priceAvg30d": 24.31
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.0,
          "priceAvg30d": 24.54
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.21,
          "priceAvg30d": 23.03
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.23,
          "priceAvg30d": 21.82
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.55,
          "priceAvg30d": 20.08
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.64,
          "priceAvg30d": 19.1
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.4,
          "priceAvg30d": 18.31
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.0,
          "priceAvg30d": 19.79
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.39,
          "priceAvg30d": 20.33
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.76,
          "priceAvg30d": 18.77
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.21,
          "priceAvg30d": 19.13
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.35,
          "priceAvg30d": 17.61
        }
      ],
      "avg": 20.76,
      "max": 32.52,
      "maxBlock": 34,
      "min": 9.4,
      "minBlock": 17,
      "spread3h": 19.28,
      "spreadLowAvg": 10.39,
      "spreadHighAvg": 29.67,
      "avg30d": 16.32,
      "spread30dAvg": 13.18,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.28,
          "priceAvg30d": 18.13
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.52,
          "priceAvg30d": 17.23
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.52,
          "priceAvg30d": 16.42
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.0,
          "priceAvg30d": 17.87
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.38,
          "priceAvg30d": 17.6
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.38,
          "priceAvg30d": 17.39
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.48,
          "priceAvg30d": 17.45
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.52,
          "priceAvg30d": 17.72
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.75,
          "priceAvg30d": 17.94
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.5,
          "priceAvg30d": 18.57
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.6,
          "priceAvg30d": 19.0
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.89,
          "priceAvg30d": 18.32
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.52,
          "priceAvg30d": 16.86
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.02,
          "priceAvg30d": 16.89
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.36,
          "priceAvg30d": 17.32
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.23,
          "priceAvg30d": 17.77
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.5,
          "priceAvg30d": 18.31
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 29.51,
          "priceAvg30d": 20.27
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 29.51,
          "priceAvg30d": 19.51
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.0,
          "priceAvg30d": 20.09
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 31.01,
          "priceAvg30d": 19.25
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 31.0,
          "priceAvg30d": 19.67
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 31.81,
          "priceAvg30d": 20.14
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 30.0,
          "priceAvg30d": 20.71
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 25.94,
          "priceAvg30d": 19.57
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 29.0,
          "priceAvg30d": 20.2
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 29.21,
          "priceAvg30d": 21.11
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 29.51,
          "priceAvg30d": 22.7
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 23.57
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 34.98,
          "priceAvg30d": 25.02
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 26.51,
          "priceAvg30d": 21.66
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 29.51,
          "priceAvg30d": 24.48
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.23,
          "priceAvg30d": 25.71
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.52,
          "priceAvg30d": 27.06
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.51,
          "priceAvg30d": 27.19
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 27.46
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 32.48,
          "priceAvg30d": 26.66
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.0,
          "priceAvg30d": 26.78
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.21,
          "priceAvg30d": 25.07
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.23,
          "priceAvg30d": 23.92
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.55,
          "priceAvg30d": 21.54
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.64,
          "priceAvg30d": 20.73
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.4,
          "priceAvg30d": 20.0
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.76,
          "priceAvg30d": 23.45
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.39,
          "priceAvg30d": 22.06
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.76,
          "priceAvg30d": 20.42
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.21,
          "priceAvg30d": 20.67
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.35,
          "priceAvg30d": 18.45
        }
      ],
      "avg": 26.9,
      "max": 34.98,
      "maxBlock": 30,
      "min": 22.0,
      "minBlock": 4,
      "spread3h": 5.73,
      "spreadLowAvg": 23.59,
      "spreadHighAvg": 29.33,
      "avg30d": 20.75,
      "spread30dAvg": 9.94,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.0,
          "priceAvg30d": 18.05
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.52,
          "priceAvg30d": 17.17
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.52,
          "priceAvg30d": 16.39
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.39,
          "priceAvg30d": 17.71
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.38,
          "priceAvg30d": 17.51
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.38,
          "priceAvg30d": 17.33
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.48,
          "priceAvg30d": 17.23
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.52,
          "priceAvg30d": 17.58
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.75,
          "priceAvg30d": 17.9
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.5,
          "priceAvg30d": 18.57
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.6,
          "priceAvg30d": 18.93
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.89,
          "priceAvg30d": 18.59
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.52,
          "priceAvg30d": 17.07
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.02,
          "priceAvg30d": 16.61
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.36,
          "priceAvg30d": 16.3
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.23,
          "priceAvg30d": 16.68
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.5,
          "priceAvg30d": 17.65
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 29.51,
          "priceAvg30d": 19.17
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 29.51,
          "priceAvg30d": 19.42
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.0,
          "priceAvg30d": 19.74
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 31.01,
          "priceAvg30d": 19.25
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 31.0,
          "priceAvg30d": 19.28
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 31.81,
          "priceAvg30d": 19.46
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 30.0,
          "priceAvg30d": 19.85
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 25.94,
          "priceAvg30d": 18.56
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 29.0,
          "priceAvg30d": 18.93
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 29.21,
          "priceAvg30d": 20.85
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 29.51,
          "priceAvg30d": 22.59
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 23.53
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 34.98,
          "priceAvg30d": 24.64
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.0,
          "priceAvg30d": 23.92
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.3,
          "priceAvg30d": 26.69
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.62,
          "priceAvg30d": 28.19
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.52,
          "priceAvg30d": 30.18
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.0,
          "priceAvg30d": 30.85
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.46,
          "priceAvg30d": 31.5
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 32.48,
          "priceAvg30d": 31.99
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.0,
          "priceAvg30d": 30.79
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.3,
          "priceAvg30d": 29.24
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.5,
          "priceAvg30d": 27.82
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.75,
          "priceAvg30d": 26.37
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.18,
          "priceAvg30d": 24.73
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.44,
          "priceAvg30d": 23.4
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.76,
          "priceAvg30d": 23.98
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.39,
          "priceAvg30d": 23.6
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.76,
          "priceAvg30d": 21.82
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.21,
          "priceAvg30d": 20.93
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.35,
          "priceAvg30d": 18.61
        }
      ],
      "avg": 27.25,
      "max": 34.98,
      "maxBlock": 30,
      "min": 22.39,
      "minBlock": 4,
      "spread3h": 6.73,
      "spreadLowAvg": 23.55,
      "spreadHighAvg": 30.27,
      "avg30d": 21.61,
      "spread30dAvg": 14.67,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.76,
          "priceAvg30d": 16.03
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 16.72,
          "priceAvg30d": 15.95
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.72,
          "priceAvg30d": 15.29
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.91,
          "priceAvg30d": 15.14
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.72,
          "priceAvg30d": 15.14
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 16.72,
          "priceAvg30d": 15.65
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 18.0,
          "priceAvg30d": 15.44
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.32,
          "priceAvg30d": 15.51
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 18.61,
          "priceAvg30d": 15.45
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.26,
          "priceAvg30d": 15.94
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.9,
          "priceAvg30d": 16.37
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.61,
          "priceAvg30d": 16.17
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.12,
          "priceAvg30d": 15.49
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.24,
          "priceAvg30d": 14.69
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 16.76,
          "priceAvg30d": 14.52
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.72,
          "priceAvg30d": 15.26
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.75,
          "priceAvg30d": 16.53
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 17.0,
          "priceAvg30d": 18.55
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 18.0,
          "priceAvg30d": 19.08
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.0,
          "priceAvg30d": 19.42
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 31.01,
          "priceAvg30d": 19.02
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 31.0,
          "priceAvg30d": 19.03
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 31.81,
          "priceAvg30d": 18.78
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 30.0,
          "priceAvg30d": 19.58
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.38,
          "priceAvg30d": 17.79
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 29.0,
          "priceAvg30d": 18.11
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 29.21,
          "priceAvg30d": 19.99
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 29.51,
          "priceAvg30d": 21.57
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 22.23
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 34.98,
          "priceAvg30d": 23.15
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.0,
          "priceAvg30d": 22.7
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.3,
          "priceAvg30d": 25.17
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.62,
          "priceAvg30d": 26.66
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.52,
          "priceAvg30d": 28.82
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.0,
          "priceAvg30d": 29.04
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.46,
          "priceAvg30d": 30.24
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 32.48,
          "priceAvg30d": 30.65
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.0,
          "priceAvg30d": 29.61
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.3,
          "priceAvg30d": 27.93
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.5,
          "priceAvg30d": 26.4
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.96,
          "priceAvg30d": 24.93
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.59,
          "priceAvg30d": 23.15
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.84,
          "priceAvg30d": 21.53
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.01,
          "priceAvg30d": 21.35
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.38,
          "priceAvg30d": 21.03
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.68,
          "priceAvg30d": 19.57
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.0,
          "priceAvg30d": 19.02
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 17.59,
          "priceAvg30d": 16.56
        }
      ],
      "avg": 23.65,
      "max": 34.98,
      "maxBlock": 30,
      "min": 15.75,
      "minBlock": 17,
      "spread3h": 10.99,
      "spreadLowAvg": 19.29,
      "spreadHighAvg": 30.27,
      "avg30d": 20.11,
      "spread30dAvg": 14.31,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.76,
          "priceAvg30d": 14.98
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 16.72,
          "priceAvg30d": 15.3
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.72,
          "priceAvg30d": 14.73
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.91,
          "priceAvg30d": 14.59
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.72,
          "priceAvg30d": 14.56
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 16.72,
          "priceAvg30d": 14.88
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 18.0,
          "priceAvg30d": 14.65
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.32,
          "priceAvg30d": 14.72
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 18.61,
          "priceAvg30d": 14.68
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.26,
          "priceAvg30d": 15.2
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.9,
          "priceAvg30d": 15.64
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.61,
          "priceAvg30d": 15.57
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.12,
          "priceAvg30d": 15.1
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.24,
          "priceAvg30d": 14.24
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 16.76,
          "priceAvg30d": 13.86
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.72,
          "priceAvg30d": 14.3
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.75,
          "priceAvg30d": 15.47
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 17.0,
          "priceAvg30d": 17.53
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 18.0,
          "priceAvg30d": 18.09
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 18.32,
          "priceAvg30d": 18.43
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 18.68,
          "priceAvg30d": 18.31
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 20.0,
          "priceAvg30d": 18.25
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 20.0,
          "priceAvg30d": 18.62
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 19.12,
          "priceAvg30d": 18.95
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 18.61,
          "priceAvg30d": 17.2
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.56,
          "priceAvg30d": 17.52
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.84,
          "priceAvg30d": 19.67
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.2,
          "priceAvg30d": 21.41
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 27.0,
          "priceAvg30d": 22.03
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 27.2,
          "priceAvg30d": 22.74
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.94,
          "priceAvg30d": 22.5
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.61,
          "priceAvg30d": 24.22
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 25.35
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.52,
          "priceAvg30d": 28.49
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.0,
          "priceAvg30d": 28.85
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.46,
          "priceAvg30d": 29.86
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 32.48,
          "priceAvg30d": 30.29
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.0,
          "priceAvg30d": 29.39
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.3,
          "priceAvg30d": 27.82
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.5,
          "priceAvg30d": 26.24
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.96,
          "priceAvg30d": 24.8
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.59,
          "priceAvg30d": 22.99
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.84,
          "priceAvg30d": 21.41
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.01,
          "priceAvg30d": 20.32
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.38,
          "priceAvg30d": 18.76
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.68,
          "priceAvg30d": 16.94
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.0,
          "priceAvg30d": 16.73
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 17.59,
          "priceAvg30d": 15.15
        }
      ],
      "avg": 21.42,
      "max": 32.52,
      "maxBlock": 34,
      "min": 15.75,
      "minBlock": 17,
      "spread3h": 12.08,
      "spreadLowAvg": 17.34,
      "spreadHighAvg": 29.42,
      "avg30d": 19.4,
      "spread30dAvg": 14.75,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.76,
          "priceAvg30d": 14.98
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 16.72,
          "priceAvg30d": 15.3
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.72,
          "priceAvg30d": 14.73
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.91,
          "priceAvg30d": 14.59
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.72,
          "priceAvg30d": 14.56
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 16.72,
          "priceAvg30d": 14.88
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 18.0,
          "priceAvg30d": 14.65
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.32,
          "priceAvg30d": 14.72
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 18.61,
          "priceAvg30d": 14.68
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.26,
          "priceAvg30d": 15.2
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.9,
          "priceAvg30d": 15.64
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.61,
          "priceAvg30d": 15.57
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.12,
          "priceAvg30d": 15.1
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.24,
          "priceAvg30d": 14.24
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 16.76,
          "priceAvg30d": 13.78
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.72,
          "priceAvg30d": 13.71
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.75,
          "priceAvg30d": 14.5
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 17.0,
          "priceAvg30d": 15.77
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 18.0,
          "priceAvg30d": 15.25
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 18.32,
          "priceAvg30d": 14.21
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 18.32,
          "priceAvg30d": 14.38
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 20.0,
          "priceAvg30d": 14.07
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 20.0,
          "priceAvg30d": 13.89
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 19.12,
          "priceAvg30d": 13.9
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 18.61,
          "priceAvg30d": 12.54
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.56,
          "priceAvg30d": 12.71
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.84,
          "priceAvg30d": 14.37
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.2,
          "priceAvg30d": 15.74
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 27.0,
          "priceAvg30d": 15.98
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 27.2,
          "priceAvg30d": 17.1
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.94,
          "priceAvg30d": 19.29
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.61,
          "priceAvg30d": 22.79
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 25.24
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.52,
          "priceAvg30d": 28.45
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.0,
          "priceAvg30d": 28.85
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.46,
          "priceAvg30d": 29.86
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 32.48,
          "priceAvg30d": 30.29
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.0,
          "priceAvg30d": 29.39
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.3,
          "priceAvg30d": 27.82
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.5,
          "priceAvg30d": 26.24
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.96,
          "priceAvg30d": 24.8
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.59,
          "priceAvg30d": 22.99
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.84,
          "priceAvg30d": 21.41
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.01,
          "priceAvg30d": 20.32
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.38,
          "priceAvg30d": 18.76
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.68,
          "priceAvg30d": 16.94
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.0,
          "priceAvg30d": 16.73
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 17.59,
          "priceAvg30d": 15.15
        }
      ],
      "avg": 21.41,
      "max": 32.52,
      "maxBlock": 34,
      "min": 15.75,
      "minBlock": 17,
      "spread3h": 12.08,
      "spreadLowAvg": 17.34,
      "spreadHighAvg": 29.42,
      "avg30d": 18.04,
      "spread30dAvg": 15.92,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.76,
          "priceAvg30d": 14.98
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 16.72,
          "priceAvg30d": 15.3
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.72,
          "priceAvg30d": 14.73
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.91,
          "priceAvg30d": 14.59
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.72,
          "priceAvg30d": 14.56
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 16.72,
          "priceAvg30d": 14.88
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 18.0,
          "priceAvg30d": 14.65
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.32,
          "priceAvg30d": 14.72
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 18.61,
          "priceAvg30d": 14.68
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.26,
          "priceAvg30d": 15.2
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.9,
          "priceAvg30d": 15.64
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.61,
          "priceAvg30d": 15.57
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.12,
          "priceAvg30d": 15.1
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.24,
          "priceAvg30d": 14.24
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 16.76,
          "priceAvg30d": 13.69
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.72,
          "priceAvg30d": 13.18
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.75,
          "priceAvg30d": 13.8
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 17.0,
          "priceAvg30d": 14.71
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 18.0,
          "priceAvg30d": 14.7
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 18.32,
          "priceAvg30d": 13.15
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 18.32,
          "priceAvg30d": 12.86
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 20.0,
          "priceAvg30d": 11.86
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 20.0,
          "priceAvg30d": 11.38
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 19.12,
          "priceAvg30d": 11.68
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 18.61,
          "priceAvg30d": 10.33
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.56,
          "priceAvg30d": 10.82
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.84,
          "priceAvg30d": 12.47
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.2,
          "priceAvg30d": 14.28
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 27.0,
          "priceAvg30d": 14.56
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 27.2,
          "priceAvg30d": 16.16
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.94,
          "priceAvg30d": 18.28
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.61,
          "priceAvg30d": 21.81
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 24.54
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.52,
          "priceAvg30d": 28.31
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.0,
          "priceAvg30d": 28.74
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.46,
          "priceAvg30d": 29.86
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 32.48,
          "priceAvg30d": 30.29
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.0,
          "priceAvg30d": 29.39
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.3,
          "priceAvg30d": 27.82
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.5,
          "priceAvg30d": 26.24
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.96,
          "priceAvg30d": 24.8
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.59,
          "priceAvg30d": 22.99
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.84,
          "priceAvg30d": 21.41
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.01,
          "priceAvg30d": 20.32
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.38,
          "priceAvg30d": 18.76
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.68,
          "priceAvg30d": 16.94
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.0,
          "priceAvg30d": 16.73
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 17.59,
          "priceAvg30d": 15.15
        }
      ],
      "avg": 21.41,
      "max": 32.52,
      "maxBlock": 34,
      "min": 15.75,
      "minBlock": 17,
      "spread3h": 12.08,
      "spreadLowAvg": 17.34,
      "spreadHighAvg": 29.42,
      "avg30d": 17.52,
      "spread30dAvg": 17.71,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.0,
          "priceAvg30d": 14.28
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.25,
          "priceAvg30d": 14.3
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 12.93
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.95,
          "priceAvg30d": 12.33
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.6,
          "priceAvg30d": 11.94
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 12.12
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.95,
          "priceAvg30d": 12.03
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.95,
          "priceAvg30d": 12.15
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.95,
          "priceAvg30d": 12.16
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.25,
          "priceAvg30d": 13.22
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.63,
          "priceAvg30d": 14.02
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.63,
          "priceAvg30d": 14.4
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.12,
          "priceAvg30d": 14.02
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.0,
          "priceAvg30d": 12.02
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.95,
          "priceAvg30d": 11.34
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.95,
          "priceAvg30d": 11.55
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.67,
          "priceAvg30d": 12.97
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.25,
          "priceAvg30d": 13.79
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 13.06,
          "priceAvg30d": 13.48
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.95,
          "priceAvg30d": 13.09
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.6,
          "priceAvg30d": 12.5
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.6,
          "priceAvg30d": 12.34
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.95,
          "priceAvg30d": 12.31
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.6,
          "priceAvg30d": 12.19
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.21,
          "priceAvg30d": 11.5
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.6,
          "priceAvg30d": 11.63
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.95,
          "priceAvg30d": 12.89
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.25,
          "priceAvg30d": 14.53
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 15.19,
          "priceAvg30d": 15.16
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.59,
          "priceAvg30d": 16.42
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.53,
          "priceAvg30d": 18.79
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.61,
          "priceAvg30d": 22.27
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 25.04
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.52,
          "priceAvg30d": 28.45
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.0,
          "priceAvg30d": 28.85
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.46,
          "priceAvg30d": 29.86
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 32.48,
          "priceAvg30d": 30.29
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.0,
          "priceAvg30d": 29.39
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.3,
          "priceAvg30d": 27.82
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.5,
          "priceAvg30d": 26.24
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.96,
          "priceAvg30d": 24.8
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.59,
          "priceAvg30d": 22.99
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.84,
          "priceAvg30d": 21.4
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.01,
          "priceAvg30d": 20.32
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.38,
          "priceAvg30d": 18.61
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.68,
          "priceAvg30d": 16.59
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.0,
          "priceAvg30d": 16.04
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.25,
          "priceAvg30d": 13.58
        }
      ],
      "avg": 17.06,
      "max": 32.52,
      "maxBlock": 34,
      "min": 10.21,
      "minBlock": 25,
      "spread3h": 18.52,
      "spreadLowAvg": 10.83,
      "spreadHighAvg": 29.35,
      "avg30d": 16.89,
      "spread30dAvg": 17.45,
      "historyDays": 30
    }
  }
};
