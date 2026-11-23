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
  "targetDate": "2026-11-23",
  "fetchedAt": "2026-11-23T13:45:23+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 30.9,
        "priceAvg30d": 26.73
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 30.87,
        "priceAvg30d": 25.81
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 30.86,
        "priceAvg30d": 25.13
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 30.86,
        "priceAvg30d": 25.08
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 30.86,
        "priceAvg30d": 25.24
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 30.86,
        "priceAvg30d": 26.17
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 32.0,
        "priceAvg30d": 27.26
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 32.58,
        "priceAvg30d": 28.08
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 32.63,
        "priceAvg30d": 28.46
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 33.0,
        "priceAvg30d": 28.81
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 33.59,
        "priceAvg30d": 29.16
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 33.82,
        "priceAvg30d": 29.46
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 36.02,
        "priceAvg30d": 30.05
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 36.1,
        "priceAvg30d": 30.43
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 36.0,
        "priceAvg30d": 29.2
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 32.51,
        "priceAvg30d": 26.98
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 30.86,
        "priceAvg30d": 26.0
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 29.29,
        "priceAvg30d": 25.11
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 26.64,
        "priceAvg30d": 23.07
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 21.66,
        "priceAvg30d": 19.99
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 19.5,
        "priceAvg30d": 18.7
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 15.19,
        "priceAvg30d": 17.6
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 11.85,
        "priceAvg30d": 17.18
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 11.32,
        "priceAvg30d": 16.87
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 11.0,
        "priceAvg30d": 15.02
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 11.32,
        "priceAvg30d": 15.53
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 14.77,
        "priceAvg30d": 19.68
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 19.67,
        "priceAvg30d": 21.88
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 25.72,
        "priceAvg30d": 24.07
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 28.25,
        "priceAvg30d": 27.16
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 30.86,
        "priceAvg30d": 29.7
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 36.37,
        "priceAvg30d": 32.49
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 43.49,
        "priceAvg30d": 35.61
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 43.77,
        "priceAvg30d": 36.7
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 43.77,
        "priceAvg30d": 36.46
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 44.86,
        "priceAvg30d": 36.19
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 43.77,
        "priceAvg30d": 35.6
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 43.77,
        "priceAvg30d": 35.38
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 43.71,
        "priceAvg30d": 34.68
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 43.49,
        "priceAvg30d": 33.67
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 42.66,
        "priceAvg30d": 33.14
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 42.0,
        "priceAvg30d": 32.75
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 42.13,
        "priceAvg30d": 32.29
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 42.0,
        "priceAvg30d": 31.03
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 42.0,
        "priceAvg30d": 31.33
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 38.98,
        "priceAvg30d": 29.89
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 39.0,
        "priceAvg30d": 29.37
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 33.0,
        "priceAvg30d": 26.92
      }
    ],
    "avg": 32.09,
    "max": 44.86,
    "maxBlock": 36,
    "min": 11.0,
    "minBlock": 25,
    "spread3h": 29.69,
    "spreadLowAvg": 14.02,
    "spreadHighAvg": 43.71,
    "avg30d": 27.56,
    "spread30dAvg": 19.66,
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
          "price": 29.2,
          "priceAvg30d": 25.85
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.74,
          "priceAvg30d": 23.97
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.19,
          "priceAvg30d": 23.41
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.39,
          "priceAvg30d": 24.26
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.2,
          "priceAvg30d": 24.88
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 29.25,
          "priceAvg30d": 25.17
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.29,
          "priceAvg30d": 25.89
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.32,
          "priceAvg30d": 26.81
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.35,
          "priceAvg30d": 27.22
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.46,
          "priceAvg30d": 27.77
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.46,
          "priceAvg30d": 28.14
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.46,
          "priceAvg30d": 28.47
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.9,
          "priceAvg30d": 28.54
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.82,
          "priceAvg30d": 28.4
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 26.8,
          "priceAvg30d": 26.03
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 22.82,
          "priceAvg30d": 23.61
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 22.45,
          "priceAvg30d": 22.45
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.75,
          "priceAvg30d": 19.81
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.36,
          "priceAvg30d": 17.95
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.36,
          "priceAvg30d": 15.79
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.53,
          "priceAvg30d": 14.76
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.53,
          "priceAvg30d": 13.25
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.53,
          "priceAvg30d": 13.62
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.53,
          "priceAvg30d": 13.4
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.53,
          "priceAvg30d": 12.08
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.53,
          "priceAvg30d": 12.44
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.53,
          "priceAvg30d": 15.83
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.9,
          "priceAvg30d": 20.31
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.48,
          "priceAvg30d": 22.89
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.6,
          "priceAvg30d": 26.04
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.46,
          "priceAvg30d": 28.92
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 39.8,
          "priceAvg30d": 31.79
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.77,
          "priceAvg30d": 35.6
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 43.79,
          "priceAvg30d": 35.69
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.77,
          "priceAvg30d": 34.68
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.77,
          "priceAvg30d": 33.81
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.77,
          "priceAvg30d": 33.86
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.77,
          "priceAvg30d": 34.12
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 38.73,
          "priceAvg30d": 33.52
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.78,
          "priceAvg30d": 32.72
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.82,
          "priceAvg30d": 32.72
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 33.82,
          "priceAvg30d": 31.46
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.82,
          "priceAvg30d": 31.15
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.82,
          "priceAvg30d": 29.65
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.37,
          "priceAvg30d": 29.18
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.25,
          "priceAvg30d": 27.98
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 29.23,
          "priceAvg30d": 27.29
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 27.09,
          "priceAvg30d": 24.91
        }
      ],
      "avg": 27.04,
      "max": 43.79,
      "maxBlock": 34,
      "min": 9.53,
      "minBlock": 21,
      "spread3h": 30.71,
      "spreadLowAvg": 10.01,
      "spreadHighAvg": 40.72,
      "avg30d": 25.59,
      "spread30dAvg": 19.0,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.2,
          "priceAvg30d": 26.48
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.74,
          "priceAvg30d": 25.36
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.19,
          "priceAvg30d": 24.57
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.39,
          "priceAvg30d": 23.94
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.2,
          "priceAvg30d": 24.76
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 29.25,
          "priceAvg30d": 25.48
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.29,
          "priceAvg30d": 26.64
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.32,
          "priceAvg30d": 27.27
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.35,
          "priceAvg30d": 27.74
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.46,
          "priceAvg30d": 27.99
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.46,
          "priceAvg30d": 28.55
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.46,
          "priceAvg30d": 28.95
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.9,
          "priceAvg30d": 29.58
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.82,
          "priceAvg30d": 29.52
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 26.8,
          "priceAvg30d": 27.32
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 22.82,
          "priceAvg30d": 24.66
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 22.45,
          "priceAvg30d": 24.48
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.75,
          "priceAvg30d": 22.96
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.36,
          "priceAvg30d": 20.86
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.36,
          "priceAvg30d": 19.4
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.18,
          "priceAvg30d": 17.9
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 7.54,
          "priceAvg30d": 16.71
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 4.0,
          "priceAvg30d": 16.0
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 5.0,
          "priceAvg30d": 15.95
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.18,
          "priceAvg30d": 15.04
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.18,
          "priceAvg30d": 15.39
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.18,
          "priceAvg30d": 19.07
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.18,
          "priceAvg30d": 21.67
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.91,
          "priceAvg30d": 24.01
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.6,
          "priceAvg30d": 27.31
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.46,
          "priceAvg30d": 30.34
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 39.8,
          "priceAvg30d": 33.55
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.77,
          "priceAvg30d": 36.07
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 43.79,
          "priceAvg30d": 37.32
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.77,
          "priceAvg30d": 37.35
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.77,
          "priceAvg30d": 36.99
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.77,
          "priceAvg30d": 36.05
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.77,
          "priceAvg30d": 35.94
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 38.73,
          "priceAvg30d": 35.64
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.78,
          "priceAvg30d": 34.65
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.82,
          "priceAvg30d": 34.12
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 33.82,
          "priceAvg30d": 33.03
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.82,
          "priceAvg30d": 32.84
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.82,
          "priceAvg30d": 31.67
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.37,
          "priceAvg30d": 30.59
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.25,
          "priceAvg30d": 28.68
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 29.23,
          "priceAvg30d": 27.83
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 27.09,
          "priceAvg30d": 25.16
        }
      ],
      "avg": 26.48,
      "max": 43.79,
      "maxBlock": 34,
      "min": 4.0,
      "minBlock": 23,
      "spread3h": 32.32,
      "spreadLowAvg": 8.41,
      "spreadHighAvg": 40.72,
      "avg30d": 27.15,
      "spread30dAvg": 20.24,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.01,
          "priceAvg30d": 30.11
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.98,
          "priceAvg30d": 29.91
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 30.86,
          "priceAvg30d": 29.85
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.86,
          "priceAvg30d": 29.4
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.24,
          "priceAvg30d": 29.42
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.86,
          "priceAvg30d": 29.48
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.86,
          "priceAvg30d": 29.59
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.86,
          "priceAvg30d": 29.65
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.86,
          "priceAvg30d": 29.94
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.11,
          "priceAvg30d": 30.06
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.18,
          "priceAvg30d": 30.39
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.18,
          "priceAvg30d": 31.08
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.02,
          "priceAvg30d": 32.25
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 37.04,
          "priceAvg30d": 32.66
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.17,
          "priceAvg30d": 32.47
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.51,
          "priceAvg30d": 31.7
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 30.95,
          "priceAvg30d": 30.09
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.26,
          "priceAvg30d": 30.34
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 28.33,
          "priceAvg30d": 29.78
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 27.57,
          "priceAvg30d": 27.46
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 27.57,
          "priceAvg30d": 26.95
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.57,
          "priceAvg30d": 26.01
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 26.64,
          "priceAvg30d": 25.55
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 26.34,
          "priceAvg30d": 25.8
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 25.56,
          "priceAvg30d": 25.11
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 26.16,
          "priceAvg30d": 26.01
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.61,
          "priceAvg30d": 28.35
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.3,
          "priceAvg30d": 29.89
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 28.27,
          "priceAvg30d": 31.62
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.72,
          "priceAvg30d": 32.97
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.93,
          "priceAvg30d": 34.66
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 39.8,
          "priceAvg30d": 37.41
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.77,
          "priceAvg30d": 38.7
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 43.79,
          "priceAvg30d": 39.45
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.77,
          "priceAvg30d": 39.43
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.77,
          "priceAvg30d": 38.94
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.77,
          "priceAvg30d": 37.57
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.77,
          "priceAvg30d": 37.78
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.77,
          "priceAvg30d": 37.37
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.77,
          "priceAvg30d": 36.86
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 43.18,
          "priceAvg30d": 35.86
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 43.52,
          "priceAvg30d": 34.94
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.77,
          "priceAvg30d": 34.83
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.18,
          "priceAvg30d": 33.93
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.77,
          "priceAvg30d": 35.66
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 42.13,
          "priceAvg30d": 33.46
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 39.59,
          "priceAvg30d": 32.17
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 34.05,
          "priceAvg30d": 30.65
        }
      ],
      "avg": 34.74,
      "max": 43.79,
      "maxBlock": 34,
      "min": 25.56,
      "minBlock": 25,
      "spread3h": 14.2,
      "spreadLowAvg": 26.94,
      "spreadHighAvg": 41.13,
      "avg30d": 31.95,
      "spread30dAvg": 13.83,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.01,
          "priceAvg30d": 29.7
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 32.08,
          "priceAvg30d": 29.83
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 32.07,
          "priceAvg30d": 29.38
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 32.08,
          "priceAvg30d": 29.37
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 32.37,
          "priceAvg30d": 29.76
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.24,
          "priceAvg30d": 30.11
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 33.6,
          "priceAvg30d": 30.48
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.89,
          "priceAvg30d": 30.82
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.89,
          "priceAvg30d": 31.03
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.76,
          "priceAvg30d": 31.11
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 36.0,
          "priceAvg30d": 31.4
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.18,
          "priceAvg30d": 31.68
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.02,
          "priceAvg30d": 32.03
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 37.04,
          "priceAvg30d": 32.52
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.17,
          "priceAvg30d": 31.57
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 33.71,
          "priceAvg30d": 29.98
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 34.0,
          "priceAvg30d": 29.05
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.39,
          "priceAvg30d": 29.01
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 28.33,
          "priceAvg30d": 27.68
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 27.57,
          "priceAvg30d": 25.19
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 27.57,
          "priceAvg30d": 24.17
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.57,
          "priceAvg30d": 23.54
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 26.64,
          "priceAvg30d": 23.18
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 26.34,
          "priceAvg30d": 23.02
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 25.56,
          "priceAvg30d": 20.63
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 26.16,
          "priceAvg30d": 21.73
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.61,
          "priceAvg30d": 24.63
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.3,
          "priceAvg30d": 27.07
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 28.27,
          "priceAvg30d": 29.45
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.72,
          "priceAvg30d": 31.06
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.93,
          "priceAvg30d": 32.83
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 39.8,
          "priceAvg30d": 36.11
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.77,
          "priceAvg30d": 37.2
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 43.79,
          "priceAvg30d": 37.21
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.82,
          "priceAvg30d": 37.84
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 45.02,
          "priceAvg30d": 37.89
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.87,
          "priceAvg30d": 37.29
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 44.1,
          "priceAvg30d": 37.14
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.81,
          "priceAvg30d": 37.06
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.8,
          "priceAvg30d": 36.51
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 43.18,
          "priceAvg30d": 35.11
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 43.52,
          "priceAvg30d": 34.85
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.77,
          "priceAvg30d": 34.33
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.79,
          "priceAvg30d": 33.64
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.77,
          "priceAvg30d": 33.87
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 42.13,
          "priceAvg30d": 33.01
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 39.59,
          "priceAvg30d": 32.44
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.0,
          "priceAvg30d": 31.41
        }
      ],
      "avg": 35.39,
      "max": 45.02,
      "maxBlock": 36,
      "min": 25.56,
      "minBlock": 25,
      "spread3h": 16.92,
      "spreadLowAvg": 26.94,
      "spreadHighAvg": 43.86,
      "avg30d": 30.96,
      "spread30dAvg": 15.87,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.01,
          "priceAvg30d": 17.31
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 32.08,
          "priceAvg30d": 17.2
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 32.07,
          "priceAvg30d": 17.17
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 32.08,
          "priceAvg30d": 17.01
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 32.37,
          "priceAvg30d": 18.53
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.24,
          "priceAvg30d": 20.63
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 33.6,
          "priceAvg30d": 22.77
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.89,
          "priceAvg30d": 23.77
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.89,
          "priceAvg30d": 23.99
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.76,
          "priceAvg30d": 25.19
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 36.0,
          "priceAvg30d": 25.92
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.18,
          "priceAvg30d": 25.25
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.02,
          "priceAvg30d": 24.43
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 37.04,
          "priceAvg30d": 25.25
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.17,
          "priceAvg30d": 25.37
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 33.71,
          "priceAvg30d": 23.85
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 34.0,
          "priceAvg30d": 23.45
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.39,
          "priceAvg30d": 23.91
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 28.33,
          "priceAvg30d": 23.55
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.69,
          "priceAvg30d": 22.43
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 25.72,
          "priceAvg30d": 21.36
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.57,
          "priceAvg30d": 20.24
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 24.67,
          "priceAvg30d": 20.59
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.0,
          "priceAvg30d": 20.17
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 17.0,
          "priceAvg30d": 15.8
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 19.9,
          "priceAvg30d": 16.59
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 13.24,
          "priceAvg30d": 22.11
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 25.72,
          "priceAvg30d": 24.15
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.72,
          "priceAvg30d": 26.12
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.91,
          "priceAvg30d": 28.21
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.49,
          "priceAvg30d": 29.19
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.05,
          "priceAvg30d": 31.98
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.11,
          "priceAvg30d": 32.41
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 43.79,
          "priceAvg30d": 34.07
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.82,
          "priceAvg30d": 33.87
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 45.02,
          "priceAvg30d": 34.48
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.87,
          "priceAvg30d": 32.87
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 44.1,
          "priceAvg30d": 32.39
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.81,
          "priceAvg30d": 32.23
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.8,
          "priceAvg30d": 30.22
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 43.18,
          "priceAvg30d": 30.07
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 43.52,
          "priceAvg30d": 28.57
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.77,
          "priceAvg30d": 28.09
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.79,
          "priceAvg30d": 26.24
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.77,
          "priceAvg30d": 27.28
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 40.0,
          "priceAvg30d": 24.94
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 39.59,
          "priceAvg30d": 23.91
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.0,
          "priceAvg30d": 18.14
        }
      ],
      "avg": 34.03,
      "max": 45.02,
      "maxBlock": 36,
      "min": 13.24,
      "minBlock": 27,
      "spread3h": 21.21,
      "spreadLowAvg": 22.54,
      "spreadHighAvg": 43.75,
      "avg30d": 24.86,
      "spread30dAvg": 16.75,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.01,
          "priceAvg30d": 17.31
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 32.08,
          "priceAvg30d": 17.2
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 32.07,
          "priceAvg30d": 17.17
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 32.08,
          "priceAvg30d": 17.01
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 32.37,
          "priceAvg30d": 17.85
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.24,
          "priceAvg30d": 20.07
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 33.6,
          "priceAvg30d": 21.67
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.89,
          "priceAvg30d": 23.0
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.89,
          "priceAvg30d": 22.99
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.76,
          "priceAvg30d": 23.75
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 36.0,
          "priceAvg30d": 23.61
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.18,
          "priceAvg30d": 22.8
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.02,
          "priceAvg30d": 23.02
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 37.04,
          "priceAvg30d": 24.43
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.17,
          "priceAvg30d": 24.8
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 33.71,
          "priceAvg30d": 23.35
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 34.0,
          "priceAvg30d": 23.26
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.39,
          "priceAvg30d": 23.91
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 28.33,
          "priceAvg30d": 23.55
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.69,
          "priceAvg30d": 22.43
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 25.72,
          "priceAvg30d": 21.29
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.57,
          "priceAvg30d": 20.13
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 24.67,
          "priceAvg30d": 20.59
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.0,
          "priceAvg30d": 20.22
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 17.0,
          "priceAvg30d": 15.72
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 19.9,
          "priceAvg30d": 16.5
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 13.24,
          "priceAvg30d": 22.11
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 25.72,
          "priceAvg30d": 24.05
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.72,
          "priceAvg30d": 25.79
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.91,
          "priceAvg30d": 27.45
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.49,
          "priceAvg30d": 29.14
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.05,
          "priceAvg30d": 31.98
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.11,
          "priceAvg30d": 32.41
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 43.79,
          "priceAvg30d": 34.07
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.82,
          "priceAvg30d": 33.37
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 45.02,
          "priceAvg30d": 33.92
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.87,
          "priceAvg30d": 32.85
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 44.1,
          "priceAvg30d": 32.37
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.81,
          "priceAvg30d": 32.22
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.8,
          "priceAvg30d": 30.22
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 43.18,
          "priceAvg30d": 30.0
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 43.52,
          "priceAvg30d": 28.23
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.77,
          "priceAvg30d": 27.82
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.79,
          "priceAvg30d": 26.24
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.77,
          "priceAvg30d": 26.28
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 40.0,
          "priceAvg30d": 24.32
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 39.59,
          "priceAvg30d": 23.58
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.0,
          "priceAvg30d": 18.14
        }
      ],
      "avg": 34.03,
      "max": 45.02,
      "maxBlock": 36,
      "min": 13.24,
      "minBlock": 27,
      "spread3h": 21.21,
      "spreadLowAvg": 22.54,
      "spreadHighAvg": 43.75,
      "avg30d": 24.46,
      "spread30dAvg": 16.35,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.01,
          "priceAvg30d": 17.31
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 32.08,
          "priceAvg30d": 17.12
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 32.07,
          "priceAvg30d": 16.6
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 32.08,
          "priceAvg30d": 16.41
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 32.37,
          "priceAvg30d": 17.43
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.24,
          "priceAvg30d": 19.3
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 33.6,
          "priceAvg30d": 20.98
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.89,
          "priceAvg30d": 22.52
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.89,
          "priceAvg30d": 22.91
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.76,
          "priceAvg30d": 23.7
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 36.0,
          "priceAvg30d": 23.53
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.18,
          "priceAvg30d": 22.79
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.02,
          "priceAvg30d": 22.91
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 37.04,
          "priceAvg30d": 24.34
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.17,
          "priceAvg30d": 22.71
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 33.71,
          "priceAvg30d": 20.36
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 34.0,
          "priceAvg30d": 19.15
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.39,
          "priceAvg30d": 16.6
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.0,
          "priceAvg30d": 14.21
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 20.0,
          "priceAvg30d": 12.41
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.9,
          "priceAvg30d": 11.18
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.91,
          "priceAvg30d": 10.83
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.86,
          "priceAvg30d": 10.6
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.14,
          "priceAvg30d": 10.64
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.87,
          "priceAvg30d": 9.01
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.75,
          "priceAvg30d": 9.52
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.87,
          "priceAvg30d": 11.21
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.89,
          "priceAvg30d": 11.88
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.16,
          "priceAvg30d": 13.54
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 13.85,
          "priceAvg30d": 15.27
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.42,
          "priceAvg30d": 18.41
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.05,
          "priceAvg30d": 22.23
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.11,
          "priceAvg30d": 25.12
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 43.79,
          "priceAvg30d": 29.37
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.82,
          "priceAvg30d": 30.16
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 45.02,
          "priceAvg30d": 30.42
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.87,
          "priceAvg30d": 29.9
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 44.1,
          "priceAvg30d": 29.27
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.81,
          "priceAvg30d": 28.44
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.8,
          "priceAvg30d": 27.72
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 43.18,
          "priceAvg30d": 27.89
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 43.52,
          "priceAvg30d": 26.87
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.77,
          "priceAvg30d": 26.63
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.79,
          "priceAvg30d": 25.03
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.77,
          "priceAvg30d": 24.56
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 40.0,
          "priceAvg30d": 22.68
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 39.59,
          "priceAvg30d": 22.2
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.0,
          "priceAvg30d": 18.06
        }
      ],
      "avg": 31.54,
      "max": 45.02,
      "maxBlock": 36,
      "min": 9.75,
      "minBlock": 26,
      "spread3h": 31.29,
      "spreadLowAvg": 12.46,
      "spreadHighAvg": 43.75,
      "avg30d": 20.25,
      "spread30dAvg": 16.82,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.01,
          "priceAvg30d": 15.99
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 32.08,
          "priceAvg30d": 14.79
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 32.07,
          "priceAvg30d": 14.55
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 32.08,
          "priceAvg30d": 14.67
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 32.37,
          "priceAvg30d": 15.36
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.24,
          "priceAvg30d": 17.15
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 33.6,
          "priceAvg30d": 18.43
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.89,
          "priceAvg30d": 20.91
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.89,
          "priceAvg30d": 21.42
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.76,
          "priceAvg30d": 22.34
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 36.0,
          "priceAvg30d": 22.47
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.18,
          "priceAvg30d": 21.83
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.02,
          "priceAvg30d": 21.04
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 37.04,
          "priceAvg30d": 21.62
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.17,
          "priceAvg30d": 20.11
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 33.71,
          "priceAvg30d": 19.02
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 34.0,
          "priceAvg30d": 18.15
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.39,
          "priceAvg30d": 15.79
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.0,
          "priceAvg30d": 13.16
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.9,
          "priceAvg30d": 10.75
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 9.6
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 1.01,
          "priceAvg30d": 8.48
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.86,
          "priceAvg30d": 8.95
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.14,
          "priceAvg30d": 8.7
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.87,
          "priceAvg30d": 6.99
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.75,
          "priceAvg30d": 7.51
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.87,
          "priceAvg30d": 9.76
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 1.01,
          "priceAvg30d": 10.46
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.5,
          "priceAvg30d": 11.99
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 5.0,
          "priceAvg30d": 13.7
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.42,
          "priceAvg30d": 15.79
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.05,
          "priceAvg30d": 19.33
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.11,
          "priceAvg30d": 22.93
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 43.79,
          "priceAvg30d": 27.31
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.82,
          "priceAvg30d": 28.18
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 45.02,
          "priceAvg30d": 28.64
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.87,
          "priceAvg30d": 27.82
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 44.1,
          "priceAvg30d": 27.42
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.81,
          "priceAvg30d": 26.16
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.8,
          "priceAvg30d": 25.4
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 43.18,
          "priceAvg30d": 25.51
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 43.52,
          "priceAvg30d": 23.21
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.77,
          "priceAvg30d": 24.44
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.79,
          "priceAvg30d": 22.34
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.77,
          "priceAvg30d": 21.15
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 40.0,
          "priceAvg30d": 19.41
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 39.59,
          "priceAvg30d": 19.5
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.0,
          "priceAvg30d": 16.65
        }
      ],
      "avg": 29.99,
      "max": 45.02,
      "maxBlock": 36,
      "min": 1.01,
      "minBlock": 22,
      "spread3h": 33.37,
      "spreadLowAvg": 10.38,
      "spreadHighAvg": 43.75,
      "avg30d": 18.27,
      "spread30dAvg": 17.88,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.01,
          "priceAvg30d": 16.51
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 32.08,
          "priceAvg30d": 16.08
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 32.07,
          "priceAvg30d": 15.57
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 32.08,
          "priceAvg30d": 15.36
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 32.37,
          "priceAvg30d": 16.36
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.24,
          "priceAvg30d": 18.22
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 33.6,
          "priceAvg30d": 20.03
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 34.89,
          "priceAvg30d": 21.87
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 34.89,
          "priceAvg30d": 22.48
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.76,
          "priceAvg30d": 23.18
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 36.0,
          "priceAvg30d": 23.13
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.18,
          "priceAvg30d": 22.46
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.02,
          "priceAvg30d": 22.67
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 37.04,
          "priceAvg30d": 23.77
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.17,
          "priceAvg30d": 22.08
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 33.71,
          "priceAvg30d": 19.99
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 34.0,
          "priceAvg30d": 18.31
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.39,
          "priceAvg30d": 16.06
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 25.01,
          "priceAvg30d": 12.72
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 20.0,
          "priceAvg30d": 10.68
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.9,
          "priceAvg30d": 9.78
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.91,
          "priceAvg30d": 9.11
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.86,
          "priceAvg30d": 8.76
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.14,
          "priceAvg30d": 9.02
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.87,
          "priceAvg30d": 7.32
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.75,
          "priceAvg30d": 7.55
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.87,
          "priceAvg30d": 9.68
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.89,
          "priceAvg30d": 11.02
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.32,
          "priceAvg30d": 12.57
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 13.85,
          "priceAvg30d": 14.62
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.42,
          "priceAvg30d": 18.17
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.05,
          "priceAvg30d": 21.6
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.11,
          "priceAvg30d": 25.12
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 43.79,
          "priceAvg30d": 29.37
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.82,
          "priceAvg30d": 30.0
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 45.02,
          "priceAvg30d": 30.42
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.87,
          "priceAvg30d": 29.9
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 44.1,
          "priceAvg30d": 29.27
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.81,
          "priceAvg30d": 28.44
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.8,
          "priceAvg30d": 27.72
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 43.18,
          "priceAvg30d": 27.89
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 43.52,
          "priceAvg30d": 26.87
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.77,
          "priceAvg30d": 26.54
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.79,
          "priceAvg30d": 24.7
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.77,
          "priceAvg30d": 24.25
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 40.0,
          "priceAvg30d": 22.3
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 39.59,
          "priceAvg30d": 21.18
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.0,
          "priceAvg30d": 17.39
        }
      ],
      "avg": 31.3,
      "max": 45.02,
      "maxBlock": 36,
      "min": 9.75,
      "minBlock": 26,
      "spread3h": 33.09,
      "spreadLowAvg": 10.66,
      "spreadHighAvg": 43.75,
      "avg30d": 19.54,
      "spread30dAvg": 17.72,
      "historyDays": 30
    }
  }
};
