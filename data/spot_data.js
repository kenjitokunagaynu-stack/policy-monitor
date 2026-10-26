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
  "targetDate": "2026-10-26",
  "fetchedAt": "2026-10-26T11:18:56+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 27.0,
        "priceAvg30d": 22.1
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 26.0,
        "priceAvg30d": 20.85
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 25.97,
        "priceAvg30d": 20.28
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 25.92,
        "priceAvg30d": 20.09
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 25.77,
        "priceAvg30d": 20.13
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 23.52,
        "priceAvg30d": 20.77
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 25.61,
        "priceAvg30d": 21.31
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 25.97,
        "priceAvg30d": 21.98
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 26.18,
        "priceAvg30d": 22.58
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 26.67,
        "priceAvg30d": 23.16
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 26.58,
        "priceAvg30d": 23.63
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 26.31,
        "priceAvg30d": 23.62
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 26.67,
        "priceAvg30d": 23.14
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 27.57,
        "priceAvg30d": 21.08
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 29.69,
        "priceAvg30d": 18.09
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 30.18,
        "priceAvg30d": 16.19
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 35.83,
        "priceAvg30d": 15.52
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 40.84,
        "priceAvg30d": 15.14
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 40.01,
        "priceAvg30d": 14.36
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 40.01,
        "priceAvg30d": 13.56
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 38.37,
        "priceAvg30d": 12.87
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 38.37,
        "priceAvg30d": 12.39
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 38.37,
        "priceAvg30d": 12.33
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 38.37,
        "priceAvg30d": 12.24
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 37.0,
        "priceAvg30d": 9.99
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 35.98,
        "priceAvg30d": 10.65
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 38.37,
        "priceAvg30d": 13.55
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 38.37,
        "priceAvg30d": 16.1
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 38.37,
        "priceAvg30d": 17.0
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 38.37,
        "priceAvg30d": 20.34
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 40.0,
        "priceAvg30d": 21.81
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 40.02,
        "priceAvg30d": 26.07
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 40.0,
        "priceAvg30d": 29.3
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 39.96,
        "priceAvg30d": 31.8
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 38.37,
        "priceAvg30d": 31.32
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 38.37,
        "priceAvg30d": 31.47
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 38.29,
        "priceAvg30d": 30.1
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 37.43,
        "priceAvg30d": 29.32
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 35.48,
        "priceAvg30d": 28.23
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 32.09,
        "priceAvg30d": 26.39
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 31.12,
        "priceAvg30d": 25.65
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 30.18,
        "priceAvg30d": 24.77
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 30.18,
        "priceAvg30d": 24.22
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 30.0,
        "priceAvg30d": 24.27
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 30.21,
        "priceAvg30d": 24.61
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 29.86,
        "priceAvg30d": 23.81
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 29.6,
        "priceAvg30d": 23.72
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 29.14,
        "priceAvg30d": 22.23
      }
    ],
    "avg": 32.97,
    "max": 40.84,
    "maxBlock": 18,
    "min": 23.52,
    "minBlock": 6,
    "spread3h": 9.78,
    "spreadLowAvg": 25.9,
    "spreadHighAvg": 35.68,
    "avg30d": 21.13,
    "spread30dAvg": 18.27,
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
          "price": 18.56,
          "priceAvg30d": 18.69
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 14.38,
          "priceAvg30d": 15.78
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.88,
          "priceAvg30d": 16.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 18.16,
          "priceAvg30d": 17.39
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.02,
          "priceAvg30d": 18.07
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.78,
          "priceAvg30d": 19.59
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.75,
          "priceAvg30d": 20.94
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.77,
          "priceAvg30d": 21.42
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.6,
          "priceAvg30d": 21.39
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.6,
          "priceAvg30d": 21.3
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.1,
          "priceAvg30d": 23.81
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.1,
          "priceAvg30d": 24.42
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.98,
          "priceAvg30d": 20.73
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.19,
          "priceAvg30d": 18.08
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.19,
          "priceAvg30d": 14.68
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.99,
          "priceAvg30d": 12.37
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.06,
          "priceAvg30d": 11.22
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.7,
          "priceAvg30d": 9.67
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.94,
          "priceAvg30d": 8.76
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.5,
          "priceAvg30d": 7.51
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.14,
          "priceAvg30d": 6.92
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.5,
          "priceAvg30d": 6.25
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.5,
          "priceAvg30d": 6.45
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.7,
          "priceAvg30d": 6.65
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.68,
          "priceAvg30d": 5.92
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.63,
          "priceAvg30d": 5.6
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.08,
          "priceAvg30d": 6.97
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.25,
          "priceAvg30d": 8.89
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 32.57,
          "priceAvg30d": 11.42
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.61,
          "priceAvg30d": 14.69
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.31,
          "priceAvg30d": 17.11
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 40.02,
          "priceAvg30d": 23.06
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.0,
          "priceAvg30d": 30.37
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.0,
          "priceAvg30d": 33.0
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.0,
          "priceAvg30d": 30.55
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.02,
          "priceAvg30d": 30.63
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 28.58
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.35,
          "priceAvg30d": 29.56
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.63,
          "priceAvg30d": 29.28
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.0,
          "priceAvg30d": 28.32
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 31.12,
          "priceAvg30d": 27.21
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 36.0,
          "priceAvg30d": 25.11
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 50.0,
          "priceAvg30d": 23.38
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.06,
          "priceAvg30d": 23.11
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 40.0,
          "priceAvg30d": 23.35
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.06,
          "priceAvg30d": 21.75
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 33.06,
          "priceAvg30d": 21.73
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.48,
          "priceAvg30d": 19.73
        }
      ],
      "avg": 25.15,
      "max": 50.0,
      "maxBlock": 43,
      "min": 10.14,
      "minBlock": 21,
      "spread3h": 24.07,
      "spreadLowAvg": 10.64,
      "spreadHighAvg": 34.71,
      "avg30d": 18.5,
      "spread30dAvg": 22.81,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.6,
          "priceAvg30d": 24.98
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.6,
          "priceAvg30d": 24.37
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.6,
          "priceAvg30d": 24.6
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.6,
          "priceAvg30d": 24.3
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.43,
          "priceAvg30d": 24.31
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.0,
          "priceAvg30d": 24.19
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.3,
          "priceAvg30d": 24.69
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.77,
          "priceAvg30d": 24.8
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.6,
          "priceAvg30d": 24.76
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.6,
          "priceAvg30d": 24.79
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.95,
          "priceAvg30d": 25.05
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.18,
          "priceAvg30d": 25.22
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.72,
          "priceAvg30d": 24.52
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.35,
          "priceAvg30d": 22.67
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 40.0,
          "priceAvg30d": 19.24
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 40.03,
          "priceAvg30d": 16.1
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 41.15,
          "priceAvg30d": 14.24
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 42.03,
          "priceAvg30d": 12.49
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 41.18,
          "priceAvg30d": 11.73
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 41.08,
          "priceAvg30d": 10.55
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 33.35,
          "priceAvg30d": 9.65
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 33.35,
          "priceAvg30d": 9.16
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 33.35,
          "priceAvg30d": 9.09
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 33.35,
          "priceAvg30d": 9.12
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 33.06,
          "priceAvg30d": 8.86
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 33.06,
          "priceAvg30d": 9.3
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 40.01,
          "priceAvg30d": 11.42
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 40.01,
          "priceAvg30d": 13.49
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 40.0,
          "priceAvg30d": 16.24
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 37.24,
          "priceAvg30d": 20.1
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.31,
          "priceAvg30d": 22.96
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 40.02,
          "priceAvg30d": 28.75
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.0,
          "priceAvg30d": 33.05
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.0,
          "priceAvg30d": 35.63
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.0,
          "priceAvg30d": 35.06
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.02,
          "priceAvg30d": 35.45
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 33.72
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.35,
          "priceAvg30d": 33.25
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.63,
          "priceAvg30d": 31.67
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.0,
          "priceAvg30d": 29.66
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 31.12,
          "priceAvg30d": 28.54
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.3,
          "priceAvg30d": 27.32
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 31.01,
          "priceAvg30d": 26.67
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.06,
          "priceAvg30d": 27.49
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 40.0,
          "priceAvg30d": 27.61
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.06,
          "priceAvg30d": 26.69
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 33.06,
          "priceAvg30d": 25.84
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.48,
          "priceAvg30d": 24.14
        }
      ],
      "avg": 34.8,
      "max": 42.03,
      "maxBlock": 18,
      "min": 27.0,
      "minBlock": 6,
      "spread3h": 10.25,
      "spreadLowAvg": 29.22,
      "spreadHighAvg": 39.46,
      "avg30d": 22.45,
      "spread30dAvg": 22.29,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.6,
          "priceAvg30d": 25.55
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.6,
          "priceAvg30d": 24.86
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.6,
          "priceAvg30d": 24.98
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.6,
          "priceAvg30d": 24.73
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.43,
          "priceAvg30d": 24.73
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.0,
          "priceAvg30d": 24.86
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.3,
          "priceAvg30d": 25.24
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.77,
          "priceAvg30d": 25.39
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.6,
          "priceAvg30d": 25.59
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.6,
          "priceAvg30d": 25.7
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.95,
          "priceAvg30d": 25.87
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.18,
          "priceAvg30d": 26.04
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.72,
          "priceAvg30d": 25.57
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.35,
          "priceAvg30d": 24.42
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 40.0,
          "priceAvg30d": 23.58
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 40.03,
          "priceAvg30d": 23.02
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 41.15,
          "priceAvg30d": 21.7
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 42.03,
          "priceAvg30d": 21.77
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 41.18,
          "priceAvg30d": 21.46
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 41.08,
          "priceAvg30d": 20.9
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 41.04,
          "priceAvg30d": 19.35
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 41.24,
          "priceAvg30d": 18.96
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 40.52,
          "priceAvg30d": 19.33
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 40.52,
          "priceAvg30d": 19.55
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 40.84,
          "priceAvg30d": 18.07
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 40.0,
          "priceAvg30d": 19.19
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 40.01,
          "priceAvg30d": 20.42
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 40.01,
          "priceAvg30d": 23.58
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 40.0,
          "priceAvg30d": 25.21
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 37.24,
          "priceAvg30d": 27.65
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.31,
          "priceAvg30d": 26.95
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 40.02,
          "priceAvg30d": 30.7
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.0,
          "priceAvg30d": 33.69
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.0,
          "priceAvg30d": 35.77
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.0,
          "priceAvg30d": 35.06
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.02,
          "priceAvg30d": 35.45
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 33.72
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.35,
          "priceAvg30d": 33.25
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.63,
          "priceAvg30d": 31.67
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.0,
          "priceAvg30d": 29.66
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 31.12,
          "priceAvg30d": 28.54
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.3,
          "priceAvg30d": 27.32
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 31.01,
          "priceAvg30d": 26.67
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.06,
          "priceAvg30d": 27.49
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 40.0,
          "priceAvg30d": 28.16
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.06,
          "priceAvg30d": 27.29
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 33.06,
          "priceAvg30d": 26.81
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.48,
          "priceAvg30d": 25.19
        }
      ],
      "avg": 35.73,
      "max": 42.03,
      "maxBlock": 18,
      "min": 27.0,
      "minBlock": 6,
      "spread3h": 11.53,
      "spreadLowAvg": 29.22,
      "spreadHighAvg": 40.75,
      "avg30d": 25.85,
      "spread30dAvg": 14.77,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.19,
          "priceAvg30d": 24.66
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 25.99,
          "priceAvg30d": 23.85
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.0,
          "priceAvg30d": 23.79
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 20.0,
          "priceAvg30d": 23.6
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.0,
          "priceAvg30d": 23.62
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.99,
          "priceAvg30d": 23.85
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 26.29,
          "priceAvg30d": 24.34
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.58,
          "priceAvg30d": 24.64
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.58,
          "priceAvg30d": 24.84
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.81,
          "priceAvg30d": 25.15
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.08,
          "priceAvg30d": 25.36
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.51,
          "priceAvg30d": 25.46
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.48,
          "priceAvg30d": 25.05
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 29.82,
          "priceAvg30d": 23.69
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.51,
          "priceAvg30d": 22.25
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 31.09,
          "priceAvg30d": 20.65
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 36.99,
          "priceAvg30d": 19.23
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 41.0,
          "priceAvg30d": 19.79
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 41.18,
          "priceAvg30d": 19.87
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 41.08,
          "priceAvg30d": 19.09
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 41.04,
          "priceAvg30d": 17.58
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 41.24,
          "priceAvg30d": 17.29
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 40.52,
          "priceAvg30d": 17.24
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 40.52,
          "priceAvg30d": 17.11
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 40.84,
          "priceAvg30d": 14.59
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 40.0,
          "priceAvg30d": 15.33
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 40.01,
          "priceAvg30d": 18.55
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 40.01,
          "priceAvg30d": 21.95
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 40.0,
          "priceAvg30d": 23.24
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 38.37,
          "priceAvg30d": 24.95
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.31,
          "priceAvg30d": 25.97
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 40.02,
          "priceAvg30d": 29.89
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.0,
          "priceAvg30d": 32.48
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.0,
          "priceAvg30d": 34.17
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.0,
          "priceAvg30d": 33.67
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.02,
          "priceAvg30d": 33.82
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 32.6
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
          "price": 37.63,
          "priceAvg30d": 30.77
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.0,
          "priceAvg30d": 28.88
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 31.12,
          "priceAvg30d": 27.87
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.3,
          "priceAvg30d": 26.82
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.6,
          "priceAvg30d": 26.3
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.59,
          "priceAvg30d": 26.36
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.1,
          "priceAvg30d": 27.17
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.8,
          "priceAvg30d": 26.51
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.79,
          "priceAvg30d": 26.62
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.48,
          "priceAvg30d": 25.18
        }
      ],
      "avg": 33.86,
      "max": 41.24,
      "maxBlock": 22,
      "min": 20.0,
      "minBlock": 3,
      "spread3h": 16.23,
      "spreadLowAvg": 24.64,
      "spreadHighAvg": 40.86,
      "avg30d": 24.53,
      "spread30dAvg": 17.08,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.49,
          "priceAvg30d": 14.04
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.73,
          "priceAvg30d": 13.88
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.49,
          "priceAvg30d": 13.56
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.49,
          "priceAvg30d": 13.12
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.73,
          "priceAvg30d": 13.81
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.49,
          "priceAvg30d": 15.15
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.49,
          "priceAvg30d": 15.88
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.43,
          "priceAvg30d": 17.28
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.62,
          "priceAvg30d": 17.3
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.73,
          "priceAvg30d": 18.87
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.08,
          "priceAvg30d": 18.56
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.01,
          "priceAvg30d": 18.28
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.06,
          "priceAvg30d": 17.96
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.02,
          "priceAvg30d": 16.13
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.49,
          "priceAvg30d": 14.32
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 14.3,
          "priceAvg30d": 13.17
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.94,
          "priceAvg30d": 14.96
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 38.37,
          "priceAvg30d": 15.92
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 38.37,
          "priceAvg30d": 17.55
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 41.08,
          "priceAvg30d": 16.92
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 41.04,
          "priceAvg30d": 15.91
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 41.24,
          "priceAvg30d": 15.61
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 40.52,
          "priceAvg30d": 15.86
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 40.52,
          "priceAvg30d": 16.0
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 40.84,
          "priceAvg30d": 12.2
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 40.0,
          "priceAvg30d": 12.42
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 40.01,
          "priceAvg30d": 15.76
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 40.01,
          "priceAvg30d": 19.19
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 40.0,
          "priceAvg30d": 19.1
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 38.37,
          "priceAvg30d": 20.7
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.0,
          "priceAvg30d": 21.4
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.37,
          "priceAvg30d": 24.65
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.37,
          "priceAvg30d": 25.23
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.37,
          "priceAvg30d": 27.06
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.37,
          "priceAvg30d": 25.55
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.37,
          "priceAvg30d": 25.88
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 24.64
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.37,
          "priceAvg30d": 24.89
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.63,
          "priceAvg30d": 23.95
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.0,
          "priceAvg30d": 22.28
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.0,
          "priceAvg30d": 22.57
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.51,
          "priceAvg30d": 21.53
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.51,
          "priceAvg30d": 21.07
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 23.52,
          "priceAvg30d": 20.06
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.9,
          "priceAvg30d": 19.61
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.61,
          "priceAvg30d": 17.61
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.55,
          "priceAvg30d": 17.47
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.0,
          "priceAvg30d": 14.07
        }
      ],
      "avg": 27.02,
      "max": 41.24,
      "maxBlock": 22,
      "min": 10.01,
      "minBlock": 12,
      "spread3h": 29.06,
      "spreadLowAvg": 11.33,
      "spreadHighAvg": 40.4,
      "avg30d": 18.31,
      "spread30dAvg": 13.68,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.49,
          "priceAvg30d": 13.78
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.73,
          "priceAvg30d": 13.77
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.49,
          "priceAvg30d": 13.47
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.49,
          "priceAvg30d": 13.02
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.73,
          "priceAvg30d": 13.24
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.49,
          "priceAvg30d": 14.79
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.49,
          "priceAvg30d": 15.53
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.43,
          "priceAvg30d": 16.84
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.62,
          "priceAvg30d": 16.83
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.73,
          "priceAvg30d": 18.22
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.08,
          "priceAvg30d": 17.99
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.01,
          "priceAvg30d": 17.82
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.06,
          "priceAvg30d": 17.89
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.02,
          "priceAvg30d": 16.06
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.49,
          "priceAvg30d": 13.87
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 14.3,
          "priceAvg30d": 12.57
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.94,
          "priceAvg30d": 14.78
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 38.37,
          "priceAvg30d": 15.7
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 38.37,
          "priceAvg30d": 17.23
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 41.08,
          "priceAvg30d": 16.58
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 41.04,
          "priceAvg30d": 15.55
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 41.24,
          "priceAvg30d": 15.23
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 40.52,
          "priceAvg30d": 15.54
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 40.52,
          "priceAvg30d": 15.68
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 40.84,
          "priceAvg30d": 11.85
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 40.0,
          "priceAvg30d": 12.1
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 40.01,
          "priceAvg30d": 15.51
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 40.01,
          "priceAvg30d": 19.19
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 40.0,
          "priceAvg30d": 18.68
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 38.37,
          "priceAvg30d": 20.53
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.0,
          "priceAvg30d": 21.22
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.37,
          "priceAvg30d": 24.61
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.37,
          "priceAvg30d": 25.23
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.37,
          "priceAvg30d": 27.06
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.37,
          "priceAvg30d": 25.55
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.37,
          "priceAvg30d": 25.54
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.37,
          "priceAvg30d": 24.64
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.37,
          "priceAvg30d": 24.44
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.63,
          "priceAvg30d": 23.61
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.0,
          "priceAvg30d": 22.1
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.0,
          "priceAvg30d": 22.38
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.51,
          "priceAvg30d": 21.37
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.51,
          "priceAvg30d": 20.91
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 23.52,
          "priceAvg30d": 19.81
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.9,
          "priceAvg30d": 19.37
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.61,
          "priceAvg30d": 17.36
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.55,
          "priceAvg30d": 17.3
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.0,
          "priceAvg30d": 13.95
        }
      ],
      "avg": 27.02,
      "max": 41.24,
      "maxBlock": 22,
      "min": 10.01,
      "minBlock": 12,
      "spread3h": 29.06,
      "spreadLowAvg": 11.33,
      "spreadHighAvg": 40.4,
      "avg30d": 18.05,
      "spread30dAvg": 13.58,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.49,
          "priceAvg30d": 13.21
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.73,
          "priceAvg30d": 13.77
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.49,
          "priceAvg30d": 13.25
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.49,
          "priceAvg30d": 12.63
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.73,
          "priceAvg30d": 12.53
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.49,
          "priceAvg30d": 13.59
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.49,
          "priceAvg30d": 14.27
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.43,
          "priceAvg30d": 16.0
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.62,
          "priceAvg30d": 16.64
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.73,
          "priceAvg30d": 18.01
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.08,
          "priceAvg30d": 17.99
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.01,
          "priceAvg30d": 17.78
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.06,
          "priceAvg30d": 17.89
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.02,
          "priceAvg30d": 15.9
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.49,
          "priceAvg30d": 11.85
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 14.3,
          "priceAvg30d": 10.25
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.94,
          "priceAvg30d": 10.44
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 29.9,
          "priceAvg30d": 10.71
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.0,
          "priceAvg30d": 9.79
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.0,
          "priceAvg30d": 9.05
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 26.91,
          "priceAvg30d": 8.88
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 29.9,
          "priceAvg30d": 8.08
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.0,
          "priceAvg30d": 8.24
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.63,
          "priceAvg30d": 8.48
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.67,
          "priceAvg30d": 6.9
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.67,
          "priceAvg30d": 6.82
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 15.69,
          "priceAvg30d": 8.99
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 26.8,
          "priceAvg30d": 9.97
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 26.15,
          "priceAvg30d": 11.65
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.0,
          "priceAvg30d": 12.86
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 24.62,
          "priceAvg30d": 13.68
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.0,
          "priceAvg30d": 16.25
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.49,
          "priceAvg30d": 19.59
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.9,
          "priceAvg30d": 23.53
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 24.52,
          "priceAvg30d": 23.69
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 24.52,
          "priceAvg30d": 24.45
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 24.52,
          "priceAvg30d": 23.14
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.52,
          "priceAvg30d": 22.77
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.52,
          "priceAvg30d": 22.71
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.52,
          "priceAvg30d": 21.4
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.52,
          "priceAvg30d": 21.48
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.51,
          "priceAvg30d": 20.47
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.37,
          "priceAvg30d": 20.06
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.68,
          "priceAvg30d": 18.95
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.9,
          "priceAvg30d": 18.6
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.61,
          "priceAvg30d": 16.56
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.55,
          "priceAvg30d": 16.54
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.0,
          "priceAvg30d": 12.99
        }
      ],
      "avg": 20.46,
      "max": 38.0,
      "maxBlock": 32,
      "min": 10.01,
      "minBlock": 12,
      "spread3h": 16.11,
      "spreadLowAvg": 11.33,
      "spreadHighAvg": 27.45,
      "avg30d": 15.07,
      "spread30dAvg": 14.92,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 5.0,
          "priceAvg30d": 10.93
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 3.0,
          "priceAvg30d": 11.15
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 2.9,
          "priceAvg30d": 10.89
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 2.5,
          "priceAvg30d": 10.48
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 2.0,
          "priceAvg30d": 10.27
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 2.0,
          "priceAvg30d": 10.33
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 2.9,
          "priceAvg30d": 10.46
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 3.01,
          "priceAvg30d": 11.62
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 5.0,
          "priceAvg30d": 11.97
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.0,
          "priceAvg30d": 13.08
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 8.14,
          "priceAvg30d": 13.19
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 8.14,
          "priceAvg30d": 13.08
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 5.0,
          "priceAvg30d": 12.95
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 3.5,
          "priceAvg30d": 10.65
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 2.9,
          "priceAvg30d": 8.81
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 5.0,
          "priceAvg30d": 8.55
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.23,
          "priceAvg30d": 8.75
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.32,
          "priceAvg30d": 9.14
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.32,
          "priceAvg30d": 8.21
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.32,
          "priceAvg30d": 7.59
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.23,
          "priceAvg30d": 7.52
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.23,
          "priceAvg30d": 6.65
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.23,
          "priceAvg30d": 6.52
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.23,
          "priceAvg30d": 6.77
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.14,
          "priceAvg30d": 5.99
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.14,
          "priceAvg30d": 6.19
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.23,
          "priceAvg30d": 7.98
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.32,
          "priceAvg30d": 8.61
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.32,
          "priceAvg30d": 10.1
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.32,
          "priceAvg30d": 11.05
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.32,
          "priceAvg30d": 11.04
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.93,
          "priceAvg30d": 11.53
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.87,
          "priceAvg30d": 11.64
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 12.87,
          "priceAvg30d": 15.09
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 12.87,
          "priceAvg30d": 15.75
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 12.87,
          "priceAvg30d": 16.63
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 13.07,
          "priceAvg30d": 16.09
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 11.75,
          "priceAvg30d": 15.74
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 8.93,
          "priceAvg30d": 14.8
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 8.32,
          "priceAvg30d": 13.57
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 8.23,
          "priceAvg30d": 14.1
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 8.23,
          "priceAvg30d": 13.47
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 8.23,
          "priceAvg30d": 13.64
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 8.14,
          "priceAvg30d": 12.76
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 8.14,
          "priceAvg30d": 12.38
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.13,
          "priceAvg30d": 11.45
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.5,
          "priceAvg30d": 11.85
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.0,
          "priceAvg30d": 9.53
        }
      ],
      "avg": 7.85,
      "max": 15.0,
      "maxBlock": 48,
      "min": 2.0,
      "minBlock": 5,
      "spread3h": 8.22,
      "spreadLowAvg": 2.72,
      "spreadHighAvg": 10.94,
      "avg30d": 11.05,
      "spread30dAvg": 11.77,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.49,
          "priceAvg30d": 13.21
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.73,
          "priceAvg30d": 13.56
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.43,
          "priceAvg30d": 12.92
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.43,
          "priceAvg30d": 12.41
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.43,
          "priceAvg30d": 12.27
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.43,
          "priceAvg30d": 13.37
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.49,
          "priceAvg30d": 14.27
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.43,
          "priceAvg30d": 16.0
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.62,
          "priceAvg30d": 16.64
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.73,
          "priceAvg30d": 18.01
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.08,
          "priceAvg30d": 17.99
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.01,
          "priceAvg30d": 17.78
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.06,
          "priceAvg30d": 17.89
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.02,
          "priceAvg30d": 15.9
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.49,
          "priceAvg30d": 11.85
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 14.3,
          "priceAvg30d": 10.25
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.94,
          "priceAvg30d": 9.88
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 29.9,
          "priceAvg30d": 9.19
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.0,
          "priceAvg30d": 8.13
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.0,
          "priceAvg30d": 7.17
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 26.91,
          "priceAvg30d": 7.05
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 29.9,
          "priceAvg30d": 6.53
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.0,
          "priceAvg30d": 6.44
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.63,
          "priceAvg30d": 6.24
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.67,
          "priceAvg30d": 5.93
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.67,
          "priceAvg30d": 5.97
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 15.69,
          "priceAvg30d": 6.95
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 26.8,
          "priceAvg30d": 8.17
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 26.15,
          "priceAvg30d": 9.52
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.0,
          "priceAvg30d": 11.57
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 24.62,
          "priceAvg30d": 13.25
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.0,
          "priceAvg30d": 15.66
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.49,
          "priceAvg30d": 19.59
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.9,
          "priceAvg30d": 23.53
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 24.52,
          "priceAvg30d": 23.69
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 24.52,
          "priceAvg30d": 24.45
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 24.52,
          "priceAvg30d": 23.14
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.52,
          "priceAvg30d": 22.77
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.52,
          "priceAvg30d": 22.71
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.52,
          "priceAvg30d": 21.4
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.52,
          "priceAvg30d": 21.48
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.51,
          "priceAvg30d": 20.47
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.37,
          "priceAvg30d": 20.06
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.68,
          "priceAvg30d": 18.95
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.9,
          "priceAvg30d": 18.6
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.61,
          "priceAvg30d": 16.56
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.55,
          "priceAvg30d": 16.54
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.0,
          "priceAvg30d": 12.99
        }
      ],
      "avg": 20.45,
      "max": 38.0,
      "maxBlock": 32,
      "min": 10.01,
      "minBlock": 12,
      "spread3h": 16.11,
      "spreadLowAvg": 11.33,
      "spreadHighAvg": 27.45,
      "avg30d": 14.56,
      "spread30dAvg": 15.61,
      "historyDays": 30
    }
  }
};
