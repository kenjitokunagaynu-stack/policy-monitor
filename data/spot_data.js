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
  "targetDate": "2026-09-27",
  "fetchedAt": "2026-09-27T09:05:32+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 16.85,
        "priceAvg30d": 17.58
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 14.11,
        "priceAvg30d": 16.35
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 12.75,
        "priceAvg30d": 15.45
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 13.41,
        "priceAvg30d": 15.27
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 12.91,
        "priceAvg30d": 14.98
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 16.5,
        "priceAvg30d": 15.24
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 17.54,
        "priceAvg30d": 15.75
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 20.04,
        "priceAvg30d": 16.19
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 20.0,
        "priceAvg30d": 16.67
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 20.04,
        "priceAvg30d": 17.63
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 19.79,
        "priceAvg30d": 18.48
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 18.63,
        "priceAvg30d": 18.01
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 16.5,
        "priceAvg30d": 16.97
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 12.18,
        "priceAvg30d": 15.8
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 11.17,
        "priceAvg30d": 14.81
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 10.92,
        "priceAvg30d": 14.89
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 10.41,
        "priceAvg30d": 15.59
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 10.41,
        "priceAvg30d": 16.98
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 10.0,
        "priceAvg30d": 17.76
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 10.1,
        "priceAvg30d": 17.52
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 9.58,
        "priceAvg30d": 16.53
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 9.5,
        "priceAvg30d": 16.49
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 9.59,
        "priceAvg30d": 16.23
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 10.23,
        "priceAvg30d": 15.93
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 9.58,
        "priceAvg30d": 14.56
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 10.68,
        "priceAvg30d": 14.98
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 8.12,
        "priceAvg30d": 16.38
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 9.38,
        "priceAvg30d": 18.24
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 9.87,
        "priceAvg30d": 19.62
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 12.0,
        "priceAvg30d": 21.47
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 11.38,
        "priceAvg30d": 21.14
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 14.98,
        "priceAvg30d": 23.52
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 16.85,
        "priceAvg30d": 24.85
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 19.5,
        "priceAvg30d": 27.42
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 24.05,
        "priceAvg30d": 27.41
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 24.57,
        "priceAvg30d": 28.02
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 25.08,
        "priceAvg30d": 28.04
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 25.0,
        "priceAvg30d": 27.32
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 24.64,
        "priceAvg30d": 26.06
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 24.0,
        "priceAvg30d": 24.56
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 23.61,
        "priceAvg30d": 23.12
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 23.61,
        "priceAvg30d": 22.19
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 23.59,
        "priceAvg30d": 21.18
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 23.59,
        "priceAvg30d": 21.59
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 23.5,
        "priceAvg30d": 21.09
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 20.5,
        "priceAvg30d": 19.53
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 20.0,
        "priceAvg30d": 19.23
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 17.26,
        "priceAvg30d": 17.14
      }
    ],
    "avg": 16.22,
    "max": 25.08,
    "maxBlock": 37,
    "min": 8.12,
    "minBlock": 27,
    "spread3h": 13.34,
    "spreadLowAvg": 10.29,
    "spreadHighAvg": 23.63,
    "avg30d": 19.2,
    "spread30dAvg": 13.68,
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
          "price": 11.08,
          "priceAvg30d": 13.22
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.72,
          "priceAvg30d": 12.48
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.0,
          "priceAvg30d": 12.22
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.88,
          "priceAvg30d": 12.05
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.73,
          "priceAvg30d": 13.1
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.64,
          "priceAvg30d": 13.53
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.45,
          "priceAvg30d": 14.62
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.45,
          "priceAvg30d": 14.89
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.45,
          "priceAvg30d": 15.03
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.45,
          "priceAvg30d": 15.23
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.92,
          "priceAvg30d": 14.78
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.69,
          "priceAvg30d": 13.63
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.45,
          "priceAvg30d": 12.38
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.45,
          "priceAvg30d": 11.05
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.17,
          "priceAvg30d": 10.44
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.0,
          "priceAvg30d": 9.86
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.49,
          "priceAvg30d": 9.09
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.41,
          "priceAvg30d": 9.83
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.49,
          "priceAvg30d": 8.99
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.0,
          "priceAvg30d": 8.34
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 6.77,
          "priceAvg30d": 7.8
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 5.0,
          "priceAvg30d": 7.76
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 6.1,
          "priceAvg30d": 8.17
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 5.0,
          "priceAvg30d": 7.36
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.49,
          "priceAvg30d": 6.89
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.49,
          "priceAvg30d": 6.77
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.49,
          "priceAvg30d": 7.86
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.49,
          "priceAvg30d": 9.64
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.49,
          "priceAvg30d": 9.92
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.49,
          "priceAvg30d": 10.88
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.49,
          "priceAvg30d": 12.64
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.45,
          "priceAvg30d": 14.98
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 20.33,
          "priceAvg30d": 17.61
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.81,
          "priceAvg30d": 19.7
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 10.8,
          "priceAvg30d": 20.76
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 10.69,
          "priceAvg30d": 20.89
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 10.45,
          "priceAvg30d": 21.21
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.9,
          "priceAvg30d": 21.4
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 15.46,
          "priceAvg30d": 21.42
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 13.02,
          "priceAvg30d": 20.2
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 10.71,
          "priceAvg30d": 19.86
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 10.45,
          "priceAvg30d": 19.5
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 10.7,
          "priceAvg30d": 17.85
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.21,
          "priceAvg30d": 17.6
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 11.01,
          "priceAvg30d": 16.9
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.81,
          "priceAvg30d": 15.64
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.45,
          "priceAvg30d": 14.74
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.45,
          "priceAvg30d": 13.73
        }
      ],
      "avg": 10.54,
      "max": 23.9,
      "maxBlock": 38,
      "min": 5.0,
      "minBlock": 22,
      "spread3h": 4.38,
      "spreadLowAvg": 7.48,
      "spreadHighAvg": 11.85,
      "avg30d": 13.63,
      "spread30dAvg": 12.57,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.08,
          "priceAvg30d": 18.54
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.72,
          "priceAvg30d": 17.11
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.0,
          "priceAvg30d": 16.03
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.0,
          "priceAvg30d": 15.77
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.93,
          "priceAvg30d": 15.93
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.93,
          "priceAvg30d": 15.93
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.91,
          "priceAvg30d": 17.33
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.93,
          "priceAvg30d": 17.45
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.92,
          "priceAvg30d": 17.71
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.92,
          "priceAvg30d": 18.04
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.92,
          "priceAvg30d": 18.44
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.93,
          "priceAvg30d": 17.75
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.45,
          "priceAvg30d": 16.33
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.45,
          "priceAvg30d": 14.48
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.17,
          "priceAvg30d": 13.39
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.0,
          "priceAvg30d": 12.53
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.91,
          "priceAvg30d": 10.71
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.41,
          "priceAvg30d": 11.03
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.01,
          "priceAvg30d": 11.59
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.0,
          "priceAvg30d": 11.26
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 6.77,
          "priceAvg30d": 10.58
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 5.0,
          "priceAvg30d": 10.72
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 6.1,
          "priceAvg30d": 10.39
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 5.0,
          "priceAvg30d": 9.37
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.49,
          "priceAvg30d": 8.15
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.49,
          "priceAvg30d": 8.71
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.49,
          "priceAvg30d": 10.23
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.87,
          "priceAvg30d": 11.59
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.87,
          "priceAvg30d": 11.88
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.08,
          "priceAvg30d": 13.09
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.08,
          "priceAvg30d": 15.25
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.0,
          "priceAvg30d": 18.93
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 20.33,
          "priceAvg30d": 21.86
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 26.38,
          "priceAvg30d": 25.5
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.0,
          "priceAvg30d": 25.14
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 33.5,
          "priceAvg30d": 25.65
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 33.68,
          "priceAvg30d": 25.61
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 33.68,
          "priceAvg30d": 25.18
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.68,
          "priceAvg30d": 24.44
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.08,
          "priceAvg30d": 22.94
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.05,
          "priceAvg30d": 21.84
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.07,
          "priceAvg30d": 20.82
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.54,
          "priceAvg30d": 19.95
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.26,
          "priceAvg30d": 19.67
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.1,
          "priceAvg30d": 19.99
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.51,
          "priceAvg30d": 18.68
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.26,
          "priceAvg30d": 18.88
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.73,
          "priceAvg30d": 18.03
        }
      ],
      "avg": 15.83,
      "max": 33.68,
      "maxBlock": 37,
      "min": 5.0,
      "minBlock": 22,
      "spread3h": 23.32,
      "spreadLowAvg": 7.56,
      "spreadHighAvg": 30.89,
      "avg30d": 16.68,
      "spread30dAvg": 14.42,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.1,
          "priceAvg30d": 20.06
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.59,
          "priceAvg30d": 19.47
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.59,
          "priceAvg30d": 18.76
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.69,
          "priceAvg30d": 19.18
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.59,
          "priceAvg30d": 18.96
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.01,
          "priceAvg30d": 18.95
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.32,
          "priceAvg30d": 19.4
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.01,
          "priceAvg30d": 19.47
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.78,
          "priceAvg30d": 19.9
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.93,
          "priceAvg30d": 20.2
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.13,
          "priceAvg30d": 20.6
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.0,
          "priceAvg30d": 20.25
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.59,
          "priceAvg30d": 19.48
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.59,
          "priceAvg30d": 19.52
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.59,
          "priceAvg30d": 19.64
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 23.4,
          "priceAvg30d": 20.18
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 14.5,
          "priceAvg30d": 21.29
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 17.37,
          "priceAvg30d": 23.59
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 19.5,
          "priceAvg30d": 23.61
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.59,
          "priceAvg30d": 23.89
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.64,
          "priceAvg30d": 23.12
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.63,
          "priceAvg30d": 23.59
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 22.99,
          "priceAvg30d": 23.68
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 22.99,
          "priceAvg30d": 23.66
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 20.0,
          "priceAvg30d": 22.21
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.53,
          "priceAvg30d": 22.69
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.04,
          "priceAvg30d": 23.71
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.41,
          "priceAvg30d": 24.82
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 13.0,
          "priceAvg30d": 25.74
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 22.91,
          "priceAvg30d": 26.73
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.21,
          "priceAvg30d": 24.85
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.0,
          "priceAvg30d": 26.82
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.57,
          "priceAvg30d": 28.27
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 26.38,
          "priceAvg30d": 30.13
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.0,
          "priceAvg30d": 29.11
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 33.5,
          "priceAvg30d": 29.23
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 33.68,
          "priceAvg30d": 29.19
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 33.68,
          "priceAvg30d": 29.07
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.68,
          "priceAvg30d": 27.82
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.08,
          "priceAvg30d": 26.29
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.05,
          "priceAvg30d": 24.57
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.07,
          "priceAvg30d": 23.98
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.54,
          "priceAvg30d": 23.14
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.26,
          "priceAvg30d": 24.46
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.1,
          "priceAvg30d": 24.14
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.51,
          "priceAvg30d": 23.05
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.26,
          "priceAvg30d": 23.01
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.73,
          "priceAvg30d": 20.96
        }
      ],
      "avg": 23.78,
      "max": 33.68,
      "maxBlock": 37,
      "min": 10.04,
      "minBlock": 27,
      "spread3h": 12.08,
      "spreadLowAvg": 18.81,
      "spreadHighAvg": 30.89,
      "avg30d": 23.22,
      "spread30dAvg": 10.4,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.5,
          "priceAvg30d": 20.29
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.81,
          "priceAvg30d": 19.77
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.49,
          "priceAvg30d": 19.05
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.51,
          "priceAvg30d": 19.25
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.51,
          "priceAvg30d": 19.07
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.46,
          "priceAvg30d": 19.1
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.81,
          "priceAvg30d": 19.41
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 16.1,
          "priceAvg30d": 19.71
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.08,
          "priceAvg30d": 20.15
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.0,
          "priceAvg30d": 20.45
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.0,
          "priceAvg30d": 20.75
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.85,
          "priceAvg30d": 20.81
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.09,
          "priceAvg30d": 20.35
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 15.0,
          "priceAvg30d": 19.99
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.75,
          "priceAvg30d": 19.56
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.21,
          "priceAvg30d": 19.74
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.21,
          "priceAvg30d": 21.33
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 12.04,
          "priceAvg30d": 22.96
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.61,
          "priceAvg30d": 23.64
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.27,
          "priceAvg30d": 23.71
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.0,
          "priceAvg30d": 22.97
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.1,
          "priceAvg30d": 23.16
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.41,
          "priceAvg30d": 23.06
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.6,
          "priceAvg30d": 23.03
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.58,
          "priceAvg30d": 21.5
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.4,
          "priceAvg30d": 21.95
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.04,
          "priceAvg30d": 23.75
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.41,
          "priceAvg30d": 25.15
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.05,
          "priceAvg30d": 25.84
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.26,
          "priceAvg30d": 26.7
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.21,
          "priceAvg30d": 26.37
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 16.85,
          "priceAvg30d": 28.03
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.32,
          "priceAvg30d": 29.06
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.1,
          "priceAvg30d": 31.37
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.4,
          "priceAvg30d": 31.49
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 27.35,
          "priceAvg30d": 31.71
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 27.29,
          "priceAvg30d": 31.55
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.2,
          "priceAvg30d": 30.49
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.06,
          "priceAvg30d": 29.18
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.35,
          "priceAvg30d": 27.47
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.05,
          "priceAvg30d": 26.28
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.07,
          "priceAvg30d": 25.55
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.54,
          "priceAvg30d": 24.51
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.09,
          "priceAvg30d": 24.8
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.1,
          "priceAvg30d": 24.47
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.51,
          "priceAvg30d": 23.22
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.26,
          "priceAvg30d": 23.1
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.73,
          "priceAvg30d": 21.26
        }
      ],
      "avg": 17.62,
      "max": 28.05,
      "maxBlock": 41,
      "min": 9.58,
      "minBlock": 25,
      "spread3h": 16.23,
      "spreadLowAvg": 10.33,
      "spreadHighAvg": 26.55,
      "avg30d": 23.67,
      "spread30dAvg": 13.11,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.58,
          "priceAvg30d": 12.86
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.3,
          "priceAvg30d": 13.04
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 12.95
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.5,
          "priceAvg30d": 12.87
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.5,
          "priceAvg30d": 12.78
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.5,
          "priceAvg30d": 13.04
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.95,
          "priceAvg30d": 13.25
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.41,
          "priceAvg30d": 13.4
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.63,
          "priceAvg30d": 13.27
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.85,
          "priceAvg30d": 14.22
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.85,
          "priceAvg30d": 14.87
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.85,
          "priceAvg30d": 14.83
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.41,
          "priceAvg30d": 15.67
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.95,
          "priceAvg30d": 13.81
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.41,
          "priceAvg30d": 13.71
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.27,
          "priceAvg30d": 13.07
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.0,
          "priceAvg30d": 14.08
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.4,
          "priceAvg30d": 17.07
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.58,
          "priceAvg30d": 18.7
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.37,
          "priceAvg30d": 19.51
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.3,
          "priceAvg30d": 18.99
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.58,
          "priceAvg30d": 18.93
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.41,
          "priceAvg30d": 18.67
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.6,
          "priceAvg30d": 18.66
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.58,
          "priceAvg30d": 16.46
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.4,
          "priceAvg30d": 17.23
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.04,
          "priceAvg30d": 19.23
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.41,
          "priceAvg30d": 20.52
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.05,
          "priceAvg30d": 21.01
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.26,
          "priceAvg30d": 21.75
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.21,
          "priceAvg30d": 20.97
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 16.85,
          "priceAvg30d": 21.97
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.32,
          "priceAvg30d": 22.02
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.21,
          "priceAvg30d": 24.18
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.3,
          "priceAvg30d": 24.09
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.85,
          "priceAvg30d": 25.25
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.0,
          "priceAvg30d": 25.13
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.04,
          "priceAvg30d": 24.43
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.0,
          "priceAvg30d": 22.9
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.85,
          "priceAvg30d": 21.03
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.0,
          "priceAvg30d": 20.27
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.04,
          "priceAvg30d": 19.54
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.01,
          "priceAvg30d": 18.97
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.37,
          "priceAvg30d": 17.85
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.21,
          "priceAvg30d": 17.43
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.21,
          "priceAvg30d": 16.08
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.95,
          "priceAvg30d": 15.64
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 7.85,
          "priceAvg30d": 13.07
        }
      ],
      "avg": 12.69,
      "max": 17.04,
      "maxBlock": 38,
      "min": 7.85,
      "minBlock": 48,
      "spread3h": 4.38,
      "spreadLowAvg": 12.46,
      "spreadHighAvg": 16.83,
      "avg30d": 17.69,
      "spread30dAvg": 12.08,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.58,
          "priceAvg30d": 12.79
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.3,
          "priceAvg30d": 13.04
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 12.95
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.5,
          "priceAvg30d": 12.87
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.5,
          "priceAvg30d": 12.78
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.5,
          "priceAvg30d": 13.04
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.95,
          "priceAvg30d": 13.25
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.41,
          "priceAvg30d": 13.4
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.63,
          "priceAvg30d": 13.27
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.85,
          "priceAvg30d": 14.22
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.85,
          "priceAvg30d": 14.87
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.85,
          "priceAvg30d": 14.82
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.41,
          "priceAvg30d": 15.67
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.95,
          "priceAvg30d": 13.77
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.41,
          "priceAvg30d": 13.7
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.27,
          "priceAvg30d": 12.91
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.0,
          "priceAvg30d": 13.41
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.4,
          "priceAvg30d": 15.68
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.58,
          "priceAvg30d": 17.64
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.37,
          "priceAvg30d": 18.23
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.3,
          "priceAvg30d": 17.75
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.58,
          "priceAvg30d": 17.87
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.41,
          "priceAvg30d": 18.07
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.6,
          "priceAvg30d": 17.49
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.58,
          "priceAvg30d": 15.86
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.4,
          "priceAvg30d": 16.38
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.04,
          "priceAvg30d": 18.42
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.41,
          "priceAvg30d": 19.89
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.05,
          "priceAvg30d": 20.14
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.26,
          "priceAvg30d": 20.76
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.21,
          "priceAvg30d": 19.81
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 16.85,
          "priceAvg30d": 20.79
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.32,
          "priceAvg30d": 21.5
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.21,
          "priceAvg30d": 23.81
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.3,
          "priceAvg30d": 23.95
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.85,
          "priceAvg30d": 25.12
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.0,
          "priceAvg30d": 25.02
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.04,
          "priceAvg30d": 24.3
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.0,
          "priceAvg30d": 22.77
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.85,
          "priceAvg30d": 20.89
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.0,
          "priceAvg30d": 20.27
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.04,
          "priceAvg30d": 19.54
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.01,
          "priceAvg30d": 18.97
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.37,
          "priceAvg30d": 17.85
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.21,
          "priceAvg30d": 17.43
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.21,
          "priceAvg30d": 16.08
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.95,
          "priceAvg30d": 15.64
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 7.85,
          "priceAvg30d": 13.07
        }
      ],
      "avg": 12.69,
      "max": 17.04,
      "maxBlock": 38,
      "min": 7.85,
      "minBlock": 48,
      "spread3h": 4.38,
      "spreadLowAvg": 12.46,
      "spreadHighAvg": 16.83,
      "avg30d": 17.33,
      "spread30dAvg": 11.7,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.58,
          "priceAvg30d": 12.79
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.3,
          "priceAvg30d": 13.04
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 12.95
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.5,
          "priceAvg30d": 12.87
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.5,
          "priceAvg30d": 12.78
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.5,
          "priceAvg30d": 13.04
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.95,
          "priceAvg30d": 13.15
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.41,
          "priceAvg30d": 13.4
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.63,
          "priceAvg30d": 13.23
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.85,
          "priceAvg30d": 14.16
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.85,
          "priceAvg30d": 14.85
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.85,
          "priceAvg30d": 14.81
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.41,
          "priceAvg30d": 15.59
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.95,
          "priceAvg30d": 13.62
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.41,
          "priceAvg30d": 13.29
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.27,
          "priceAvg30d": 12.13
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.0,
          "priceAvg30d": 12.22
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.4,
          "priceAvg30d": 13.11
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.58,
          "priceAvg30d": 13.92
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.37,
          "priceAvg30d": 12.98
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.3,
          "priceAvg30d": 13.01
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.58,
          "priceAvg30d": 12.94
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.41,
          "priceAvg30d": 12.42
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.6,
          "priceAvg30d": 12.12
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.58,
          "priceAvg30d": 11.0
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.4,
          "priceAvg30d": 11.06
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.04,
          "priceAvg30d": 13.1
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.41,
          "priceAvg30d": 14.67
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.05,
          "priceAvg30d": 14.19
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.26,
          "priceAvg30d": 14.9
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.21,
          "priceAvg30d": 17.04
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 16.85,
          "priceAvg30d": 19.05
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.32,
          "priceAvg30d": 20.39
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.21,
          "priceAvg30d": 23.27
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.3,
          "priceAvg30d": 23.95
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.85,
          "priceAvg30d": 25.12
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.0,
          "priceAvg30d": 25.02
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.04,
          "priceAvg30d": 24.3
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.0,
          "priceAvg30d": 22.77
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.85,
          "priceAvg30d": 20.89
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.0,
          "priceAvg30d": 20.27
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.04,
          "priceAvg30d": 19.54
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.01,
          "priceAvg30d": 18.97
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.37,
          "priceAvg30d": 17.85
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.21,
          "priceAvg30d": 17.39
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.21,
          "priceAvg30d": 16.08
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.95,
          "priceAvg30d": 15.64
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 7.85,
          "priceAvg30d": 13.07
        }
      ],
      "avg": 12.69,
      "max": 17.04,
      "maxBlock": 38,
      "min": 7.85,
      "minBlock": 48,
      "spread3h": 4.38,
      "spreadLowAvg": 12.46,
      "spreadHighAvg": 16.83,
      "avg30d": 15.79,
      "spread30dAvg": 12.58,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.58,
          "priceAvg30d": 12.33
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.3,
          "priceAvg30d": 12.23
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 12.07
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.5,
          "priceAvg30d": 12.05
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.5,
          "priceAvg30d": 11.86
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.5,
          "priceAvg30d": 12.16
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.95,
          "priceAvg30d": 12.09
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.41,
          "priceAvg30d": 12.5
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.63,
          "priceAvg30d": 12.0
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.85,
          "priceAvg30d": 13.0
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.85,
          "priceAvg30d": 14.04
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.85,
          "priceAvg30d": 14.09
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.41,
          "priceAvg30d": 14.7
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.95,
          "priceAvg30d": 12.4
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.41,
          "priceAvg30d": 11.89
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.27,
          "priceAvg30d": 11.02
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.0,
          "priceAvg30d": 11.33
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.4,
          "priceAvg30d": 12.15
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.58,
          "priceAvg30d": 12.17
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.37,
          "priceAvg30d": 10.79
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.3,
          "priceAvg30d": 10.3
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.58,
          "priceAvg30d": 10.09
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.41,
          "priceAvg30d": 9.75
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.6,
          "priceAvg30d": 9.72
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.58,
          "priceAvg30d": 8.97
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.4,
          "priceAvg30d": 9.14
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.04,
          "priceAvg30d": 10.88
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.41,
          "priceAvg30d": 12.94
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.05,
          "priceAvg30d": 12.65
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.26,
          "priceAvg30d": 13.04
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.21,
          "priceAvg30d": 14.84
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 16.85,
          "priceAvg30d": 16.76
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.32,
          "priceAvg30d": 18.03
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.21,
          "priceAvg30d": 20.89
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 12.29,
          "priceAvg30d": 21.45
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.3,
          "priceAvg30d": 23.47
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.0,
          "priceAvg30d": 23.88
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.0,
          "priceAvg30d": 23.04
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 15.5,
          "priceAvg30d": 20.92
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.29,
          "priceAvg30d": 18.1
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 12.29,
          "priceAvg30d": 17.84
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 8.78,
          "priceAvg30d": 17.04
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 8.94,
          "priceAvg30d": 16.28
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 8.62,
          "priceAvg30d": 15.26
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 8.04,
          "priceAvg30d": 14.97
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 7.97,
          "priceAvg30d": 14.03
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 8.01,
          "priceAvg30d": 14.0
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 7.85,
          "priceAvg30d": 12.09
        }
      ],
      "avg": 11.59,
      "max": 16.85,
      "maxBlock": 10,
      "min": 7.85,
      "minBlock": 48,
      "spread3h": 6.34,
      "spreadLowAvg": 8.01,
      "spreadHighAvg": 14.35,
      "avg30d": 14.11,
      "spread30dAvg": 13.05,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.58,
          "priceAvg30d": 11.97
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.3,
          "priceAvg30d": 12.35
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 11.51
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.5,
          "priceAvg30d": 11.15
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.5,
          "priceAvg30d": 10.71
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.5,
          "priceAvg30d": 10.93
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.95,
          "priceAvg30d": 11.01
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.41,
          "priceAvg30d": 11.39
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.63,
          "priceAvg30d": 11.37
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.85,
          "priceAvg30d": 12.71
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.85,
          "priceAvg30d": 13.67
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.85,
          "priceAvg30d": 14.05
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.41,
          "priceAvg30d": 14.95
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.95,
          "priceAvg30d": 12.08
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.41,
          "priceAvg30d": 11.32
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.27,
          "priceAvg30d": 10.14
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.0,
          "priceAvg30d": 10.78
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.4,
          "priceAvg30d": 11.16
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.58,
          "priceAvg30d": 11.53
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.37,
          "priceAvg30d": 11.03
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.3,
          "priceAvg30d": 10.38
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.58,
          "priceAvg30d": 10.15
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.41,
          "priceAvg30d": 9.98
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.6,
          "priceAvg30d": 9.89
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.58,
          "priceAvg30d": 9.32
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.4,
          "priceAvg30d": 9.45
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.04,
          "priceAvg30d": 10.41
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.41,
          "priceAvg30d": 11.79
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.05,
          "priceAvg30d": 12.58
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.26,
          "priceAvg30d": 13.79
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.21,
          "priceAvg30d": 16.55
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 16.85,
          "priceAvg30d": 18.56
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.32,
          "priceAvg30d": 20.19
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.21,
          "priceAvg30d": 23.27
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.3,
          "priceAvg30d": 23.95
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.85,
          "priceAvg30d": 25.12
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.0,
          "priceAvg30d": 25.02
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.04,
          "priceAvg30d": 24.3
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.0,
          "priceAvg30d": 22.77
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.85,
          "priceAvg30d": 20.89
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.0,
          "priceAvg30d": 20.27
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.04,
          "priceAvg30d": 19.54
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.01,
          "priceAvg30d": 18.96
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.37,
          "priceAvg30d": 17.85
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.21,
          "priceAvg30d": 17.25
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.21,
          "priceAvg30d": 15.73
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.95,
          "priceAvg30d": 14.96
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 7.85,
          "priceAvg30d": 11.67
        }
      ],
      "avg": 12.69,
      "max": 17.04,
      "maxBlock": 38,
      "min": 7.85,
      "minBlock": 48,
      "spread3h": 4.38,
      "spreadLowAvg": 12.46,
      "spreadHighAvg": 16.83,
      "avg30d": 14.59,
      "spread30dAvg": 13.91,
      "historyDays": 30
    }
  }
};
