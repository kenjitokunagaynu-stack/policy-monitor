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
  "targetDate": "2026-11-26",
  "fetchedAt": "2026-11-26T14:57:42+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 32.91,
        "priceAvg30d": 27.13
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 31.06,
        "priceAvg30d": 26.29
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 31.27,
        "priceAvg30d": 25.61
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 30.85,
        "priceAvg30d": 25.56
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 31.28,
        "priceAvg30d": 25.75
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 31.38,
        "priceAvg30d": 26.75
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 32.15,
        "priceAvg30d": 27.79
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 33.04,
        "priceAvg30d": 28.61
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 35.3,
        "priceAvg30d": 28.94
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 35.67,
        "priceAvg30d": 29.32
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 35.31,
        "priceAvg30d": 29.81
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 35.99,
        "priceAvg30d": 30.15
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 46.48,
        "priceAvg30d": 31.03
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 46.77,
        "priceAvg30d": 31.54
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 46.8,
        "priceAvg30d": 30.31
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 44.61,
        "priceAvg30d": 28.05
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 40.0,
        "priceAvg30d": 27.01
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 35.05,
        "priceAvg30d": 25.66
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 30.54,
        "priceAvg30d": 23.44
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 28.75,
        "priceAvg30d": 20.07
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 27.42,
        "priceAvg30d": 18.74
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 26.94,
        "priceAvg30d": 17.47
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 26.91,
        "priceAvg30d": 16.88
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 25.53,
        "priceAvg30d": 16.44
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 22.45,
        "priceAvg30d": 14.24
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 25.04,
        "priceAvg30d": 14.78
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 27.75,
        "priceAvg30d": 19.48
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 29.2,
        "priceAvg30d": 21.89
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 29.74,
        "priceAvg30d": 24.29
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 31.0,
        "priceAvg30d": 27.42
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 38.0,
        "priceAvg30d": 30.36
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 44.62,
        "priceAvg30d": 33.41
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 46.21,
        "priceAvg30d": 36.79
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 46.5,
        "priceAvg30d": 37.88
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 46.21,
        "priceAvg30d": 37.66
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 45.29,
        "priceAvg30d": 37.43
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 44.7,
        "priceAvg30d": 36.76
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 45.1,
        "priceAvg30d": 36.55
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 43.98,
        "priceAvg30d": 35.9
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 43.78,
        "priceAvg30d": 34.89
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 43.91,
        "priceAvg30d": 34.4
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 43.71,
        "priceAvg30d": 33.94
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 43.18,
        "priceAvg30d": 33.47
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 41.78,
        "priceAvg30d": 32.22
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 39.3,
        "priceAvg30d": 32.5
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 31.5,
        "priceAvg30d": 30.98
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 31.4,
        "priceAvg30d": 30.43
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 30.8,
        "priceAvg30d": 27.53
      }
    ],
    "avg": 36.19,
    "max": 46.8,
    "maxBlock": 15,
    "min": 22.45,
    "minBlock": 25,
    "spread3h": 14.59,
    "spreadLowAvg": 26.89,
    "spreadHighAvg": 41.48,
    "avg30d": 28.2,
    "spread30dAvg": 21.13,
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
          "price": 27.59,
          "priceAvg30d": 26.55
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.65,
          "priceAvg30d": 25.09
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.91,
          "priceAvg30d": 24.85
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.91,
          "priceAvg30d": 24.67
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.16,
          "priceAvg30d": 25.18
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 21.42,
          "priceAvg30d": 25.68
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 26.09,
          "priceAvg30d": 26.22
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.49,
          "priceAvg30d": 26.63
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.2,
          "priceAvg30d": 26.92
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.2,
          "priceAvg30d": 27.36
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.2,
          "priceAvg30d": 27.72
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 34.2,
          "priceAvg30d": 28.26
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.82,
          "priceAvg30d": 28.54
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 35.0,
          "priceAvg30d": 29.3
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.23,
          "priceAvg30d": 26.81
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 23.14,
          "priceAvg30d": 24.79
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.0,
          "priceAvg30d": 23.75
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 22.45,
          "priceAvg30d": 20.85
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 22.65,
          "priceAvg30d": 18.98
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 21.09,
          "priceAvg30d": 16.77
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 20.23,
          "priceAvg30d": 15.6
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 16.05,
          "priceAvg30d": 14.21
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 19.91,
          "priceAvg30d": 14.54
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.74,
          "priceAvg30d": 14.34
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.53,
          "priceAvg30d": 12.98
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.53,
          "priceAvg30d": 13.36
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.96,
          "priceAvg30d": 17.15
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 17.35,
          "priceAvg30d": 21.36
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 18.33,
          "priceAvg30d": 23.9
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.82,
          "priceAvg30d": 27.16
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 21.2,
          "priceAvg30d": 29.58
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.0,
          "priceAvg30d": 33.04
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.0,
          "priceAvg30d": 36.13
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 41.68,
          "priceAvg30d": 37.01
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 33.82,
          "priceAvg30d": 36.41
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.21,
          "priceAvg30d": 35.4
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.3,
          "priceAvg30d": 35.46
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 35.3,
          "priceAvg30d": 34.98
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.9,
          "priceAvg30d": 33.95
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.2,
          "priceAvg30d": 32.83
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.2,
          "priceAvg30d": 32.82
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.2,
          "priceAvg30d": 31.75
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 36.0,
          "priceAvg30d": 31.21
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.85,
          "priceAvg30d": 30.12
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.01,
          "priceAvg30d": 29.33
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.76,
          "priceAvg30d": 28.11
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.84,
          "priceAvg30d": 27.67
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.52,
          "priceAvg30d": 24.38
        }
      ],
      "avg": 26.08,
      "max": 41.68,
      "maxBlock": 34,
      "min": 9.53,
      "minBlock": 25,
      "spread3h": 18.83,
      "spreadLowAvg": 14.09,
      "spreadHighAvg": 32.92,
      "avg30d": 26.24,
      "spread30dAvg": 19.1,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 34.98,
          "priceAvg30d": 26.07
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.54,
          "priceAvg30d": 24.63
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.27,
          "priceAvg30d": 23.72
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.9,
          "priceAvg30d": 23.39
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.28,
          "priceAvg30d": 24.36
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.3,
          "priceAvg30d": 25.3
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 31.8,
          "priceAvg30d": 26.51
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.49,
          "priceAvg30d": 27.2
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.2,
          "priceAvg30d": 27.58
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.2,
          "priceAvg30d": 27.92
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.2,
          "priceAvg30d": 28.59
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 34.2,
          "priceAvg30d": 28.96
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.82,
          "priceAvg30d": 29.66
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 35.0,
          "priceAvg30d": 29.75
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 29.23,
          "priceAvg30d": 26.78
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 23.14,
          "priceAvg30d": 23.87
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.0,
          "priceAvg30d": 23.81
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 22.45,
          "priceAvg30d": 21.79
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 14.28,
          "priceAvg30d": 19.5
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.36,
          "priceAvg30d": 17.9
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.18,
          "priceAvg30d": 16.5
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.18,
          "priceAvg30d": 15.18
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.18,
          "priceAvg30d": 14.28
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.18,
          "priceAvg30d": 14.22
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.23,
          "priceAvg30d": 13.32
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.03,
          "priceAvg30d": 13.69
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.96,
          "priceAvg30d": 17.45
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 13.12,
          "priceAvg30d": 20.1
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 18.33,
          "priceAvg30d": 22.73
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.82,
          "priceAvg30d": 26.61
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 24.32,
          "priceAvg30d": 29.56
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.0,
          "priceAvg30d": 33.37
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.0,
          "priceAvg30d": 36.37
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 41.68,
          "priceAvg30d": 37.56
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 33.82,
          "priceAvg30d": 37.87
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.21,
          "priceAvg30d": 37.36
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.3,
          "priceAvg30d": 36.58
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 35.3,
          "priceAvg30d": 36.12
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.9,
          "priceAvg30d": 35.79
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.2,
          "priceAvg30d": 34.31
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.2,
          "priceAvg30d": 33.93
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.2,
          "priceAvg30d": 33.14
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 36.0,
          "priceAvg30d": 32.83
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 38.33,
          "priceAvg30d": 31.37
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 34.0,
          "priceAvg30d": 30.06
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.59,
          "priceAvg30d": 28.27
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.91,
          "priceAvg30d": 27.42
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.05,
          "priceAvg30d": 24.97
        }
      ],
      "avg": 26.91,
      "max": 41.68,
      "maxBlock": 34,
      "min": 8.23,
      "minBlock": 25,
      "spread3h": 23.33,
      "spreadLowAvg": 10.11,
      "spreadHighAvg": 33.44,
      "avg30d": 26.63,
      "spread30dAvg": 21.84,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 34.98,
          "priceAvg30d": 30.12
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.54,
          "priceAvg30d": 29.98
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.27,
          "priceAvg30d": 29.61
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.85,
          "priceAvg30d": 29.43
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.28,
          "priceAvg30d": 29.48
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.3,
          "priceAvg30d": 29.61
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 31.8,
          "priceAvg30d": 29.66
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.49,
          "priceAvg30d": 29.82
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 35.0,
          "priceAvg30d": 29.93
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 35.58,
          "priceAvg30d": 30.21
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.77,
          "priceAvg30d": 30.61
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.29,
          "priceAvg30d": 31.47
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 43.98,
          "priceAvg30d": 32.81
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 46.51,
          "priceAvg30d": 33.38
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.8,
          "priceAvg30d": 33.07
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 46.48,
          "priceAvg30d": 32.14
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 43.32,
          "priceAvg30d": 29.85
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 33.13,
          "priceAvg30d": 29.93
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.54,
          "priceAvg30d": 29.25
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 28.75,
          "priceAvg30d": 26.9
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 27.61,
          "priceAvg30d": 26.43
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.61,
          "priceAvg30d": 25.68
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.95,
          "priceAvg30d": 25.02
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.36,
          "priceAvg30d": 24.88
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 26.91,
          "priceAvg30d": 24.1
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 27.17,
          "priceAvg30d": 25.19
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.13,
          "priceAvg30d": 27.74
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 29.22,
          "priceAvg30d": 29.28
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.54,
          "priceAvg30d": 31.07
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 31.69,
          "priceAvg30d": 32.72
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 39.19,
          "priceAvg30d": 34.46
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 43.32,
          "priceAvg30d": 37.83
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.32,
          "priceAvg30d": 39.38
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 43.32,
          "priceAvg30d": 40.02
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.3,
          "priceAvg30d": 39.95
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.18,
          "priceAvg30d": 39.3
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 42.66,
          "priceAvg30d": 38.1
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.0,
          "priceAvg30d": 38.35
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.18,
          "priceAvg30d": 37.98
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.32,
          "priceAvg30d": 37.53
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 42.66,
          "priceAvg30d": 36.73
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 42.66,
          "priceAvg30d": 35.92
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 36.0,
          "priceAvg30d": 35.63
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 41.62,
          "priceAvg30d": 34.65
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 42.66,
          "priceAvg30d": 36.07
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.59,
          "priceAvg30d": 34.22
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.91,
          "priceAvg30d": 32.84
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.05,
          "priceAvg30d": 30.99
        }
      ],
      "avg": 35.91,
      "max": 46.8,
      "maxBlock": 15,
      "min": 26.91,
      "minBlock": 25,
      "spread3h": 13.54,
      "spreadLowAvg": 27.91,
      "spreadHighAvg": 41.45,
      "avg30d": 32.07,
      "spread30dAvg": 14.5,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 34.98,
          "priceAvg30d": 30.17
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.54,
          "priceAvg30d": 30.32
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.27,
          "priceAvg30d": 30.01
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.85,
          "priceAvg30d": 30.01
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.28,
          "priceAvg30d": 30.4
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.96,
          "priceAvg30d": 30.66
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.49,
          "priceAvg30d": 30.98
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.49,
          "priceAvg30d": 31.36
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 35.0,
          "priceAvg30d": 31.51
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 35.58,
          "priceAvg30d": 31.58
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 35.67,
          "priceAvg30d": 31.93
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.29,
          "priceAvg30d": 32.32
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 43.98,
          "priceAvg30d": 32.78
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 46.51,
          "priceAvg30d": 33.53
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.8,
          "priceAvg30d": 32.79
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 46.48,
          "priceAvg30d": 31.1
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 43.32,
          "priceAvg30d": 30.11
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 36.68,
          "priceAvg30d": 29.66
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 35.04,
          "priceAvg30d": 28.11
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.93,
          "priceAvg30d": 25.29
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 29.3,
          "priceAvg30d": 24.24
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.95,
          "priceAvg30d": 23.58
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.95,
          "priceAvg30d": 23.21
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.49,
          "priceAvg30d": 23.03
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 26.91,
          "priceAvg30d": 20.4
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 27.17,
          "priceAvg30d": 21.41
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.73,
          "priceAvg30d": 24.59
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 31.3,
          "priceAvg30d": 27.07
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.54,
          "priceAvg30d": 29.47
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.43,
          "priceAvg30d": 31.54
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.84,
          "priceAvg30d": 33.44
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 46.48,
          "priceAvg30d": 37.01
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 46.49,
          "priceAvg30d": 38.29
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 47.12,
          "priceAvg30d": 38.37
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 47.11,
          "priceAvg30d": 39.0
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 47.11,
          "priceAvg30d": 39.07
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 46.5,
          "priceAvg30d": 38.48
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 46.8,
          "priceAvg30d": 38.39
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.54,
          "priceAvg30d": 38.18
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.57,
          "priceAvg30d": 37.75
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.81,
          "priceAvg30d": 36.45
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.21,
          "priceAvg30d": 36.22
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 46.5,
          "priceAvg30d": 35.73
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 45.29,
          "priceAvg30d": 35.03
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 42.66,
          "priceAvg30d": 35.13
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.59,
          "priceAvg30d": 34.1
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.91,
          "priceAvg30d": 33.55
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.05,
          "priceAvg30d": 31.99
        }
      ],
      "avg": 37.61,
      "max": 47.12,
      "maxBlock": 34,
      "min": 26.91,
      "minBlock": 25,
      "spread3h": 17.99,
      "spreadLowAvg": 28.43,
      "spreadHighAvg": 46.42,
      "avg30d": 31.65,
      "spread30dAvg": 16.65,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 34.98,
          "priceAvg30d": 19.28
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.54,
          "priceAvg30d": 19.0
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.27,
          "priceAvg30d": 18.86
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.85,
          "priceAvg30d": 18.53
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.28,
          "priceAvg30d": 20.15
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.96,
          "priceAvg30d": 22.34
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.49,
          "priceAvg30d": 24.55
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.49,
          "priceAvg30d": 25.54
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 35.0,
          "priceAvg30d": 25.71
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 35.58,
          "priceAvg30d": 26.67
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 35.67,
          "priceAvg30d": 27.51
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.29,
          "priceAvg30d": 27.18
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 43.98,
          "priceAvg30d": 26.59
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 46.51,
          "priceAvg30d": 27.69
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.8,
          "priceAvg30d": 28.19
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 46.48,
          "priceAvg30d": 26.29
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 43.32,
          "priceAvg30d": 25.82
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 36.68,
          "priceAvg30d": 25.63
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 35.04,
          "priceAvg30d": 24.92
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.93,
          "priceAvg30d": 23.2
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 29.3,
          "priceAvg30d": 21.71
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.95,
          "priceAvg30d": 20.72
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.95,
          "priceAvg30d": 20.85
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.49,
          "priceAvg30d": 20.13
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 26.91,
          "priceAvg30d": 15.8
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 27.17,
          "priceAvg30d": 16.62
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.73,
          "priceAvg30d": 22.26
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 31.3,
          "priceAvg30d": 24.76
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.54,
          "priceAvg30d": 26.73
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.43,
          "priceAvg30d": 29.07
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.84,
          "priceAvg30d": 30.34
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 46.48,
          "priceAvg30d": 33.04
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 46.49,
          "priceAvg30d": 34.16
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 47.12,
          "priceAvg30d": 35.68
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 47.11,
          "priceAvg30d": 35.43
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 47.11,
          "priceAvg30d": 36.02
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 46.5,
          "priceAvg30d": 34.37
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 46.8,
          "priceAvg30d": 34.03
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.54,
          "priceAvg30d": 33.72
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.57,
          "priceAvg30d": 31.96
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.81,
          "priceAvg30d": 31.92
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.21,
          "priceAvg30d": 30.68
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 46.5,
          "priceAvg30d": 30.22
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 45.29,
          "priceAvg30d": 28.55
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 42.66,
          "priceAvg30d": 29.47
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.59,
          "priceAvg30d": 27.06
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.91,
          "priceAvg30d": 26.12
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.05,
          "priceAvg30d": 20.26
        }
      ],
      "avg": 37.61,
      "max": 47.12,
      "maxBlock": 34,
      "min": 26.91,
      "minBlock": 25,
      "spread3h": 17.99,
      "spreadLowAvg": 28.43,
      "spreadHighAvg": 46.42,
      "avg30d": 26.36,
      "spread30dAvg": 17.01,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 34.98,
          "priceAvg30d": 19.28
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.54,
          "priceAvg30d": 19.0
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.27,
          "priceAvg30d": 18.86
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.85,
          "priceAvg30d": 18.53
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.28,
          "priceAvg30d": 19.47
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.96,
          "priceAvg30d": 21.78
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.49,
          "priceAvg30d": 23.45
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.49,
          "priceAvg30d": 24.77
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 35.0,
          "priceAvg30d": 24.7
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 35.58,
          "priceAvg30d": 25.22
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 35.67,
          "priceAvg30d": 25.2
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.29,
          "priceAvg30d": 24.74
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 43.98,
          "priceAvg30d": 25.18
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 46.51,
          "priceAvg30d": 26.87
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.8,
          "priceAvg30d": 27.62
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 46.48,
          "priceAvg30d": 25.8
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 43.32,
          "priceAvg30d": 25.62
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 36.68,
          "priceAvg30d": 25.63
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 35.04,
          "priceAvg30d": 24.92
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.93,
          "priceAvg30d": 23.2
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 29.3,
          "priceAvg30d": 21.63
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.95,
          "priceAvg30d": 20.61
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.95,
          "priceAvg30d": 20.85
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.49,
          "priceAvg30d": 20.18
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 26.91,
          "priceAvg30d": 15.72
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 27.17,
          "priceAvg30d": 16.54
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.73,
          "priceAvg30d": 22.26
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 31.3,
          "priceAvg30d": 24.66
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.54,
          "priceAvg30d": 26.39
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.43,
          "priceAvg30d": 28.3
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.84,
          "priceAvg30d": 30.28
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 46.48,
          "priceAvg30d": 33.04
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 46.49,
          "priceAvg30d": 34.16
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 47.12,
          "priceAvg30d": 35.68
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 47.11,
          "priceAvg30d": 34.93
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 47.11,
          "priceAvg30d": 35.46
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 46.5,
          "priceAvg30d": 34.36
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 46.8,
          "priceAvg30d": 34.02
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.54,
          "priceAvg30d": 33.7
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.57,
          "priceAvg30d": 31.96
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.81,
          "priceAvg30d": 31.84
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.21,
          "priceAvg30d": 30.35
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 46.5,
          "priceAvg30d": 29.95
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 45.29,
          "priceAvg30d": 28.55
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 42.66,
          "priceAvg30d": 28.47
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.59,
          "priceAvg30d": 26.45
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.91,
          "priceAvg30d": 25.79
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.05,
          "priceAvg30d": 20.26
        }
      ],
      "avg": 37.61,
      "max": 47.12,
      "maxBlock": 34,
      "min": 26.91,
      "minBlock": 25,
      "spread3h": 17.99,
      "spreadLowAvg": 28.43,
      "spreadHighAvg": 46.42,
      "avg30d": 25.96,
      "spread30dAvg": 16.61,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 34.98,
          "priceAvg30d": 19.28
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.54,
          "priceAvg30d": 18.91
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.27,
          "priceAvg30d": 18.34
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.85,
          "priceAvg30d": 18.14
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.28,
          "priceAvg30d": 19.27
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.96,
          "priceAvg30d": 21.29
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.49,
          "priceAvg30d": 22.97
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.49,
          "priceAvg30d": 24.29
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 35.0,
          "priceAvg30d": 24.62
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 35.58,
          "priceAvg30d": 25.18
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 35.67,
          "priceAvg30d": 25.12
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.29,
          "priceAvg30d": 24.73
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 43.98,
          "priceAvg30d": 25.07
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 46.51,
          "priceAvg30d": 26.78
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.8,
          "priceAvg30d": 25.54
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 46.48,
          "priceAvg30d": 23.03
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 43.32,
          "priceAvg30d": 21.51
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 36.68,
          "priceAvg30d": 18.6
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 35.04,
          "priceAvg30d": 15.79
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.93,
          "priceAvg30d": 13.33
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 29.3,
          "priceAvg30d": 11.9
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.95,
          "priceAvg30d": 11.1
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.53,
          "priceAvg30d": 10.95
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.53,
          "priceAvg30d": 10.98
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.0,
          "priceAvg30d": 9.36
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.53,
          "priceAvg30d": 9.8
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.73,
          "priceAvg30d": 11.8
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 31.3,
          "priceAvg30d": 12.58
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.54,
          "priceAvg30d": 14.57
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.43,
          "priceAvg30d": 15.97
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.84,
          "priceAvg30d": 19.94
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 46.48,
          "priceAvg30d": 23.42
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 46.49,
          "priceAvg30d": 27.09
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 47.12,
          "priceAvg30d": 31.32
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 47.11,
          "priceAvg30d": 32.18
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 47.11,
          "priceAvg30d": 32.42
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 46.5,
          "priceAvg30d": 31.86
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 46.8,
          "priceAvg30d": 31.38
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.54,
          "priceAvg30d": 30.36
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.57,
          "priceAvg30d": 29.82
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.81,
          "priceAvg30d": 29.92
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.21,
          "priceAvg30d": 28.99
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 46.5,
          "priceAvg30d": 28.8
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 45.29,
          "priceAvg30d": 27.37
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 42.66,
          "priceAvg30d": 26.75
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.59,
          "priceAvg30d": 24.8
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.91,
          "priceAvg30d": 24.41
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.05,
          "priceAvg30d": 20.18
        }
      ],
      "avg": 37.12,
      "max": 47.12,
      "maxBlock": 34,
      "min": 15.0,
      "minBlock": 25,
      "spread3h": 19.99,
      "spreadLowAvg": 26.43,
      "spreadHighAvg": 46.42,
      "avg30d": 21.91,
      "spread30dAvg": 18.27,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 34.98,
          "priceAvg30d": 18.62
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.54,
          "priceAvg30d": 17.38
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.27,
          "priceAvg30d": 17.1
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.85,
          "priceAvg30d": 17.22
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.28,
          "priceAvg30d": 18.05
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.96,
          "priceAvg30d": 19.96
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.49,
          "priceAvg30d": 21.3
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.49,
          "priceAvg30d": 23.83
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 35.0,
          "priceAvg30d": 24.14
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 35.58,
          "priceAvg30d": 24.96
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 35.67,
          "priceAvg30d": 25.12
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.29,
          "priceAvg30d": 24.66
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 43.98,
          "priceAvg30d": 24.16
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 46.51,
          "priceAvg30d": 25.21
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.8,
          "priceAvg30d": 23.67
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 46.48,
          "priceAvg30d": 22.16
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 43.32,
          "priceAvg30d": 21.11
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 36.68,
          "priceAvg30d": 18.57
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 35.04,
          "priceAvg30d": 15.47
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.93,
          "priceAvg30d": 11.82
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 29.3,
          "priceAvg30d": 10.63
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.95,
          "priceAvg30d": 9.18
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.53,
          "priceAvg30d": 9.84
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.53,
          "priceAvg30d": 9.47
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.0,
          "priceAvg30d": 7.59
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.53,
          "priceAvg30d": 7.93
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.73,
          "priceAvg30d": 10.6
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 31.3,
          "priceAvg30d": 11.44
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.54,
          "priceAvg30d": 12.93
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.43,
          "priceAvg30d": 14.83
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.84,
          "priceAvg30d": 17.87
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 46.48,
          "priceAvg30d": 22.49
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 46.49,
          "priceAvg30d": 26.55
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 47.12,
          "priceAvg30d": 30.93
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 47.11,
          "priceAvg30d": 31.8
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 47.11,
          "priceAvg30d": 32.3
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 46.5,
          "priceAvg30d": 31.43
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 46.8,
          "priceAvg30d": 31.08
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.54,
          "priceAvg30d": 29.79
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.57,
          "priceAvg30d": 29.03
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.81,
          "priceAvg30d": 29.1
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.21,
          "priceAvg30d": 26.83
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 46.5,
          "priceAvg30d": 28.03
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 45.29,
          "priceAvg30d": 25.95
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 42.66,
          "priceAvg30d": 24.79
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.59,
          "priceAvg30d": 22.72
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.91,
          "priceAvg30d": 22.8
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.05,
          "priceAvg30d": 19.35
        }
      ],
      "avg": 37.12,
      "max": 47.12,
      "maxBlock": 34,
      "min": 15.0,
      "minBlock": 25,
      "spread3h": 19.99,
      "spreadLowAvg": 26.43,
      "spreadHighAvg": 46.42,
      "avg30d": 20.87,
      "spread30dAvg": 20.04,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 34.98,
          "priceAvg30d": 18.49
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.54,
          "priceAvg30d": 17.88
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.27,
          "priceAvg30d": 17.32
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.85,
          "priceAvg30d": 17.09
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.28,
          "priceAvg30d": 18.21
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.96,
          "priceAvg30d": 20.21
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.49,
          "priceAvg30d": 22.03
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.49,
          "priceAvg30d": 23.64
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 35.0,
          "priceAvg30d": 24.19
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 35.58,
          "priceAvg30d": 24.66
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 35.67,
          "priceAvg30d": 24.72
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.29,
          "priceAvg30d": 24.39
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 43.98,
          "priceAvg30d": 24.83
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 46.51,
          "priceAvg30d": 26.21
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.8,
          "priceAvg30d": 24.9
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 46.48,
          "priceAvg30d": 22.66
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 43.32,
          "priceAvg30d": 20.89
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 36.68,
          "priceAvg30d": 18.06
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 35.04,
          "priceAvg30d": 14.47
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.93,
          "priceAvg30d": 11.97
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 29.3,
          "priceAvg30d": 10.75
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.95,
          "priceAvg30d": 9.54
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.53,
          "priceAvg30d": 9.27
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.53,
          "priceAvg30d": 9.52
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.0,
          "priceAvg30d": 7.83
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.53,
          "priceAvg30d": 7.98
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.73,
          "priceAvg30d": 10.43
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 31.3,
          "priceAvg30d": 11.78
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.54,
          "priceAvg30d": 13.32
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.43,
          "priceAvg30d": 15.5
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 44.84,
          "priceAvg30d": 19.7
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 46.48,
          "priceAvg30d": 22.86
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 46.49,
          "priceAvg30d": 27.09
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 47.12,
          "priceAvg30d": 31.32
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 47.11,
          "priceAvg30d": 32.02
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 47.11,
          "priceAvg30d": 32.42
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 46.5,
          "priceAvg30d": 31.86
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 46.8,
          "priceAvg30d": 31.38
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.54,
          "priceAvg30d": 30.36
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.57,
          "priceAvg30d": 29.82
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.81,
          "priceAvg30d": 29.92
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.21,
          "priceAvg30d": 28.99
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 46.5,
          "priceAvg30d": 28.7
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 45.29,
          "priceAvg30d": 27.04
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 42.66,
          "priceAvg30d": 26.44
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.59,
          "priceAvg30d": 24.43
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.91,
          "priceAvg30d": 23.38
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.05,
          "priceAvg30d": 19.51
        }
      ],
      "avg": 37.12,
      "max": 47.12,
      "maxBlock": 34,
      "min": 15.0,
      "minBlock": 25,
      "spread3h": 19.99,
      "spreadLowAvg": 26.43,
      "spreadHighAvg": 46.42,
      "avg30d": 21.25,
      "spread30dAvg": 19.22,
      "historyDays": 30
    }
  }
};
