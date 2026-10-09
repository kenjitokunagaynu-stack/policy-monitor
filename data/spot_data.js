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
  "targetDate": "2026-10-09",
  "fetchedAt": "2026-10-09T12:40:08+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 22.72,
        "priceAvg30d": 18.12
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 22.1,
        "priceAvg30d": 16.49
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 22.2,
        "priceAvg30d": 15.32
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 22.72,
        "priceAvg30d": 14.72
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 22.72,
        "priceAvg30d": 14.37
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 23.1,
        "priceAvg30d": 15.09
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 23.53,
        "priceAvg30d": 15.94
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 23.91,
        "priceAvg30d": 16.86
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 24.17,
        "priceAvg30d": 17.69
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 24.68,
        "priceAvg30d": 18.79
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 24.02,
        "priceAvg30d": 19.71
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 24.54,
        "priceAvg30d": 19.41
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 24.04,
        "priceAvg30d": 18.58
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 22.13,
        "priceAvg30d": 16.09
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 20.78,
        "priceAvg30d": 13.75
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 11.77,
        "priceAvg30d": 12.9
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 10.63,
        "priceAvg30d": 13.35
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 10.28,
        "priceAvg30d": 14.07
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 9.81,
        "priceAvg30d": 14.49
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 9.33,
        "priceAvg30d": 13.97
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 9.33,
        "priceAvg30d": 13.02
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 9.0,
        "priceAvg30d": 12.48
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 8.46,
        "priceAvg30d": 12.34
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 8.5,
        "priceAvg30d": 11.91
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 4.1,
        "priceAvg30d": 9.95
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 5.5,
        "priceAvg30d": 10.57
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 8.26,
        "priceAvg30d": 12.73
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 10.23,
        "priceAvg30d": 15.01
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 11.04,
        "priceAvg30d": 15.94
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 19.82,
        "priceAvg30d": 18.28
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 21.09,
        "priceAvg30d": 18.99
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 24.25,
        "priceAvg30d": 22.31
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 25.74,
        "priceAvg30d": 24.16
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 30.1,
        "priceAvg30d": 26.92
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 29.77,
        "priceAvg30d": 26.83
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 29.77,
        "priceAvg30d": 27.45
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 27.0,
        "priceAvg30d": 27.21
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 26.5,
        "priceAvg30d": 26.74
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 25.59,
        "priceAvg30d": 25.53
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 25.37,
        "priceAvg30d": 24.21
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 25.37,
        "priceAvg30d": 23.3
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 24.32,
        "priceAvg30d": 22.68
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 23.59,
        "priceAvg30d": 21.85
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 25.0,
        "priceAvg30d": 21.82
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 25.59,
        "priceAvg30d": 21.67
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 24.43,
        "priceAvg30d": 20.25
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 24.41,
        "priceAvg30d": 20.08
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 22.72,
        "priceAvg30d": 17.99
      }
    ],
    "avg": 19.88,
    "max": 30.1,
    "maxBlock": 34,
    "min": 4.1,
    "minBlock": 25,
    "spread3h": 17.95,
    "spreadLowAvg": 8.33,
    "spreadHighAvg": 26.27,
    "avg30d": 18.17,
    "spread30dAvg": 15.93,
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
          "price": 24.6,
          "priceAvg30d": 14.59
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.01,
          "priceAvg30d": 13.29
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.5,
          "priceAvg30d": 13.26
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.99,
          "priceAvg30d": 13.04
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.0,
          "priceAvg30d": 13.96
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.1,
          "priceAvg30d": 14.98
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.12,
          "priceAvg30d": 16.33
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.29,
          "priceAvg30d": 16.98
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.46,
          "priceAvg30d": 16.99
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.59,
          "priceAvg30d": 17.08
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.63,
          "priceAvg30d": 17.51
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.99,
          "priceAvg30d": 16.66
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.6,
          "priceAvg30d": 14.79
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.99,
          "priceAvg30d": 12.83
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.0,
          "priceAvg30d": 11.27
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.45,
          "priceAvg30d": 9.85
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.61,
          "priceAvg30d": 8.64
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.4,
          "priceAvg30d": 8.93
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 7.93
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 7.02
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 6.78
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 5.0,
          "priceAvg30d": 6.64
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 7.29,
          "priceAvg30d": 6.62
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.01,
          "priceAvg30d": 6.07
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.0,
          "priceAvg30d": 5.86
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 3.0,
          "priceAvg30d": 5.86
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 5.84,
          "priceAvg30d": 6.56
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.5,
          "priceAvg30d": 8.71
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.33,
          "priceAvg30d": 9.27
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 14.58,
          "priceAvg30d": 11.0
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 21.85,
          "priceAvg30d": 13.1
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.69,
          "priceAvg30d": 17.1
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.7,
          "priceAvg30d": 21.43
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.0,
          "priceAvg30d": 24.55
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.0,
          "priceAvg30d": 24.27
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 50.0,
          "priceAvg30d": 24.39
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 50.01,
          "priceAvg30d": 23.06
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 45.0,
          "priceAvg30d": 24.24
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 23.2
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 50.0,
          "priceAvg30d": 21.69
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.0,
          "priceAvg30d": 20.42
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.34,
          "priceAvg30d": 19.7
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 40.0,
          "priceAvg30d": 18.99
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 50.0,
          "priceAvg30d": 19.34
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 50.01,
          "priceAvg30d": 18.39
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 40.0,
          "priceAvg30d": 17.53
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 45.0,
          "priceAvg30d": 16.68
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 40.0,
          "priceAvg30d": 15.67
        }
      ],
      "avg": 24.29,
      "max": 50.01,
      "maxBlock": 37,
      "min": 2.5,
      "minBlock": 19,
      "spread3h": 36.42,
      "spreadLowAvg": 6.41,
      "spreadHighAvg": 42.83,
      "avg30d": 14.65,
      "spread30dAvg": 15.32,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.6,
          "priceAvg30d": 20.1
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.22,
          "priceAvg30d": 18.83
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.5,
          "priceAvg30d": 18.31
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.99,
          "priceAvg30d": 17.82
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.0,
          "priceAvg30d": 17.77
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.1,
          "priceAvg30d": 17.9
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.12,
          "priceAvg30d": 18.91
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.29,
          "priceAvg30d": 19.2
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.46,
          "priceAvg30d": 19.36
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.59,
          "priceAvg30d": 19.38
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.63,
          "priceAvg30d": 19.64
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.99,
          "priceAvg30d": 19.59
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.6,
          "priceAvg30d": 18.59
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.99,
          "priceAvg30d": 16.89
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.13,
          "priceAvg30d": 14.39
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.68,
          "priceAvg30d": 12.56
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.61,
          "priceAvg30d": 10.34
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 4.0,
          "priceAvg30d": 10.05
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 9.89
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 1.0,
          "priceAvg30d": 8.8
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.04,
          "priceAvg30d": 8.27
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 7.76
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 7.55
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 7.11
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.43
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.99
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.5,
          "priceAvg30d": 8.26
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 3.0,
          "priceAvg30d": 9.99
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.19,
          "priceAvg30d": 11.1
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 14.58,
          "priceAvg30d": 13.41
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 21.85,
          "priceAvg30d": 16.33
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.69,
          "priceAvg30d": 21.43
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.56,
          "priceAvg30d": 25.04
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.0,
          "priceAvg30d": 29.28
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 35.81,
          "priceAvg30d": 28.84
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.01,
          "priceAvg30d": 29.38
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 32.6,
          "priceAvg30d": 28.96
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 31.56,
          "priceAvg30d": 28.42
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.77,
          "priceAvg30d": 27.61
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.77,
          "priceAvg30d": 25.76
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.5,
          "priceAvg30d": 24.5
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.51,
          "priceAvg30d": 23.76
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.98,
          "priceAvg30d": 23.12
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.5,
          "priceAvg30d": 23.19
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.09,
          "priceAvg30d": 22.87
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.64,
          "priceAvg30d": 21.98
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.59,
          "priceAvg30d": 21.52
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.02,
          "priceAvg30d": 20.12
        }
      ],
      "avg": 19.89,
      "max": 36.0,
      "maxBlock": 34,
      "min": 0.01,
      "minBlock": 22,
      "spread3h": 29.99,
      "spreadLowAvg": 0.59,
      "spreadHighAvg": 30.59,
      "avg30d": 17.86,
      "spread30dAvg": 18.63,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.6,
          "priceAvg30d": 22.1
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.22,
          "priceAvg30d": 21.28
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.5,
          "priceAvg30d": 20.76
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.99,
          "priceAvg30d": 20.77
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.0,
          "priceAvg30d": 20.45
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.1,
          "priceAvg30d": 20.67
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.12,
          "priceAvg30d": 21.23
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.29,
          "priceAvg30d": 21.59
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.46,
          "priceAvg30d": 21.95
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.59,
          "priceAvg30d": 22.05
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.63,
          "priceAvg30d": 22.19
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.99,
          "priceAvg30d": 22.17
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.6,
          "priceAvg30d": 21.7
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.99,
          "priceAvg30d": 20.87
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.13,
          "priceAvg30d": 20.51
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.61,
          "priceAvg30d": 20.47
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.78,
          "priceAvg30d": 20.3
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 20.78,
          "priceAvg30d": 21.69
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 20.78,
          "priceAvg30d": 22.06
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 20.78,
          "priceAvg30d": 22.1
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.74,
          "priceAvg30d": 20.88
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.4,
          "priceAvg30d": 20.77
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.5,
          "priceAvg30d": 20.79
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.49,
          "priceAvg30d": 20.61
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.28,
          "priceAvg30d": 18.93
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.04,
          "priceAvg30d": 19.65
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.04,
          "priceAvg30d": 20.79
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.78,
          "priceAvg30d": 22.78
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 22.66,
          "priceAvg30d": 23.92
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.13,
          "priceAvg30d": 25.53
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.63,
          "priceAvg30d": 24.62
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.69,
          "priceAvg30d": 27.51
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.56,
          "priceAvg30d": 30.12
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.0,
          "priceAvg30d": 32.32
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 35.81,
          "priceAvg30d": 31.45
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.01,
          "priceAvg30d": 31.75
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 32.6,
          "priceAvg30d": 31.45
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 31.56,
          "priceAvg30d": 30.96
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.77,
          "priceAvg30d": 29.8
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.77,
          "priceAvg30d": 27.88
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.5,
          "priceAvg30d": 26.43
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.51,
          "priceAvg30d": 25.73
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.98,
          "priceAvg30d": 24.95
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.5,
          "priceAvg30d": 25.61
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.09,
          "priceAvg30d": 25.89
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.64,
          "priceAvg30d": 25.04
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.59,
          "priceAvg30d": 24.78
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.02,
          "priceAvg30d": 22.98
        }
      ],
      "avg": 24.0,
      "max": 36.0,
      "maxBlock": 34,
      "min": 8.28,
      "minBlock": 25,
      "spread3h": 17.01,
      "spreadLowAvg": 13.88,
      "spreadHighAvg": 30.88,
      "avg30d": 23.77,
      "spread30dAvg": 12.89,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.6,
          "priceAvg30d": 22.06
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.24,
          "priceAvg30d": 21.23
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.92,
          "priceAvg30d": 20.65
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.99,
          "priceAvg30d": 20.37
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.0,
          "priceAvg30d": 20.07
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.1,
          "priceAvg30d": 20.25
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.12,
          "priceAvg30d": 20.85
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.29,
          "priceAvg30d": 21.31
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.46,
          "priceAvg30d": 21.6
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.59,
          "priceAvg30d": 21.77
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.63,
          "priceAvg30d": 22.03
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.99,
          "priceAvg30d": 22.02
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.6,
          "priceAvg30d": 21.81
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.99,
          "priceAvg30d": 20.89
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.13,
          "priceAvg30d": 20.03
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.61,
          "priceAvg30d": 19.62
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 16.51,
          "priceAvg30d": 20.07
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.78,
          "priceAvg30d": 21.09
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 17.09,
          "priceAvg30d": 21.33
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 16.81,
          "priceAvg30d": 20.94
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.74,
          "priceAvg30d": 19.91
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.4,
          "priceAvg30d": 19.59
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.5,
          "priceAvg30d": 19.59
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.49,
          "priceAvg30d": 19.37
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.28,
          "priceAvg30d": 17.48
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.17,
          "priceAvg30d": 18.07
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.04,
          "priceAvg30d": 20.37
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.78,
          "priceAvg30d": 22.83
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 22.66,
          "priceAvg30d": 23.86
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.13,
          "priceAvg30d": 24.96
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 24.61,
          "priceAvg30d": 25.43
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.69,
          "priceAvg30d": 27.55
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.56,
          "priceAvg30d": 29.04
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.0,
          "priceAvg30d": 31.26
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 35.81,
          "priceAvg30d": 31.07
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.01,
          "priceAvg30d": 31.32
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 32.6,
          "priceAvg30d": 30.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.0,
          "priceAvg30d": 30.04
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.99,
          "priceAvg30d": 29.03
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.0,
          "priceAvg30d": 27.8
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.5,
          "priceAvg30d": 26.53
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.51,
          "priceAvg30d": 25.84
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.4,
          "priceAvg30d": 25.14
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.5,
          "priceAvg30d": 25.55
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.09,
          "priceAvg30d": 25.78
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.64,
          "priceAvg30d": 24.87
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.59,
          "priceAvg30d": 24.85
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.07,
          "priceAvg30d": 23.19
        }
      ],
      "avg": 23.82,
      "max": 36.0,
      "maxBlock": 34,
      "min": 8.17,
      "minBlock": 26,
      "spread3h": 16.26,
      "spreadLowAvg": 14.79,
      "spreadHighAvg": 31.05,
      "avg30d": 23.35,
      "spread30dAvg": 14.01,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.02,
          "priceAvg30d": 10.8
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.02,
          "priceAvg30d": 10.95
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.62,
          "priceAvg30d": 11.28
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.62,
          "priceAvg30d": 11.09
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.61,
          "priceAvg30d": 11.03
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.61,
          "priceAvg30d": 11.5
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.47,
          "priceAvg30d": 12.27
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.88,
          "priceAvg30d": 12.93
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.94,
          "priceAvg30d": 12.77
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.3,
          "priceAvg30d": 13.91
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.51,
          "priceAvg30d": 14.31
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.51,
          "priceAvg30d": 14.56
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 18.5,
          "priceAvg30d": 15.42
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.33,
          "priceAvg30d": 12.85
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.23,
          "priceAvg30d": 11.66
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.01,
          "priceAvg30d": 10.08
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 16.51,
          "priceAvg30d": 11.44
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.78,
          "priceAvg30d": 13.64
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 17.09,
          "priceAvg30d": 15.93
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 16.81,
          "priceAvg30d": 15.67
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.74,
          "priceAvg30d": 14.98
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.4,
          "priceAvg30d": 14.5
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.5,
          "priceAvg30d": 14.87
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.49,
          "priceAvg30d": 14.41
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.28,
          "priceAvg30d": 12.01
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.17,
          "priceAvg30d": 12.29
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.03,
          "priceAvg30d": 14.43
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 19.82,
          "priceAvg30d": 16.87
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 19.94,
          "priceAvg30d": 17.24
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.13,
          "priceAvg30d": 18.66
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 21.77,
          "priceAvg30d": 18.29
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.33,
          "priceAvg30d": 19.63
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.6,
          "priceAvg30d": 19.18
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.14,
          "priceAvg30d": 20.12
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.95,
          "priceAvg30d": 19.76
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.46,
          "priceAvg30d": 20.93
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.34,
          "priceAvg30d": 20.34
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.18,
          "priceAvg30d": 20.45
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.64,
          "priceAvg30d": 19.34
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.46,
          "priceAvg30d": 18.04
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.34,
          "priceAvg30d": 17.88
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.77,
          "priceAvg30d": 17.29
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.64,
          "priceAvg30d": 17.32
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.64,
          "priceAvg30d": 16.08
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.09,
          "priceAvg30d": 16.12
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.95,
          "priceAvg30d": 14.33
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.82,
          "priceAvg30d": 14.21
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.64,
          "priceAvg30d": 11.01
        }
      ],
      "avg": 17.3,
      "max": 24.33,
      "maxBlock": 32,
      "min": 8.17,
      "minBlock": 26,
      "spread3h": 6.91,
      "spreadLowAvg": 14.01,
      "spreadHighAvg": 20.92,
      "avg30d": 15.1,
      "spread30dAvg": 10.16,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.02,
          "priceAvg30d": 10.72
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.02,
          "priceAvg30d": 10.84
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.62,
          "priceAvg30d": 11.19
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.62,
          "priceAvg30d": 11.0
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.61,
          "priceAvg30d": 10.88
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.61,
          "priceAvg30d": 11.4
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.47,
          "priceAvg30d": 12.19
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.88,
          "priceAvg30d": 12.86
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.94,
          "priceAvg30d": 12.69
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.3,
          "priceAvg30d": 13.91
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.51,
          "priceAvg30d": 14.29
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.51,
          "priceAvg30d": 14.48
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 18.5,
          "priceAvg30d": 15.35
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.33,
          "priceAvg30d": 12.74
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.23,
          "priceAvg30d": 11.63
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.01,
          "priceAvg30d": 9.65
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 16.51,
          "priceAvg30d": 10.87
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.78,
          "priceAvg30d": 12.52
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 17.09,
          "priceAvg30d": 15.04
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 16.81,
          "priceAvg30d": 14.95
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.74,
          "priceAvg30d": 14.35
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.4,
          "priceAvg30d": 14.01
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.5,
          "priceAvg30d": 14.43
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.49,
          "priceAvg30d": 13.77
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.28,
          "priceAvg30d": 11.19
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.17,
          "priceAvg30d": 11.47
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.03,
          "priceAvg30d": 13.65
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 19.82,
          "priceAvg30d": 16.31
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 19.94,
          "priceAvg30d": 16.41
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.13,
          "priceAvg30d": 17.83
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 21.77,
          "priceAvg30d": 17.17
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.33,
          "priceAvg30d": 18.62
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.6,
          "priceAvg30d": 18.72
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.14,
          "priceAvg30d": 19.76
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.95,
          "priceAvg30d": 19.62
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.46,
          "priceAvg30d": 20.8
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.34,
          "priceAvg30d": 20.23
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.18,
          "priceAvg30d": 20.31
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.64,
          "priceAvg30d": 19.21
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.46,
          "priceAvg30d": 17.9
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.34,
          "priceAvg30d": 17.88
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.77,
          "priceAvg30d": 17.29
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.64,
          "priceAvg30d": 17.32
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.64,
          "priceAvg30d": 16.08
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.09,
          "priceAvg30d": 16.12
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.95,
          "priceAvg30d": 14.33
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.82,
          "priceAvg30d": 14.21
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.64,
          "priceAvg30d": 11.01
        }
      ],
      "avg": 17.3,
      "max": 24.33,
      "maxBlock": 32,
      "min": 8.17,
      "minBlock": 26,
      "spread3h": 6.91,
      "spreadLowAvg": 14.01,
      "spreadHighAvg": 20.92,
      "avg30d": 14.78,
      "spread30dAvg": 9.78,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.02,
          "priceAvg30d": 10.72
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.02,
          "priceAvg30d": 10.84
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.62,
          "priceAvg30d": 11.1
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.62,
          "priceAvg30d": 10.82
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.62,
          "priceAvg30d": 10.56
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.02,
          "priceAvg30d": 10.96
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.47,
          "priceAvg30d": 11.58
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.88,
          "priceAvg30d": 12.34
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.94,
          "priceAvg30d": 12.46
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.3,
          "priceAvg30d": 13.63
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.51,
          "priceAvg30d": 14.28
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.51,
          "priceAvg30d": 14.44
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 18.5,
          "priceAvg30d": 15.27
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.33,
          "priceAvg30d": 12.48
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.23,
          "priceAvg30d": 10.99
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.46,
          "priceAvg30d": 9.23
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.44,
          "priceAvg30d": 9.44
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.71,
          "priceAvg30d": 9.52
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.71,
          "priceAvg30d": 9.46
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.45,
          "priceAvg30d": 8.9
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.81,
          "priceAvg30d": 9.36
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.5,
          "priceAvg30d": 9.1
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.39,
          "priceAvg30d": 8.96
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.89,
          "priceAvg30d": 8.43
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.15,
          "priceAvg30d": 7.55
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.17,
          "priceAvg30d": 7.62
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.81,
          "priceAvg30d": 9.1
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.0,
          "priceAvg30d": 10.29
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.22,
          "priceAvg30d": 10.07
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.71,
          "priceAvg30d": 10.95
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.98,
          "priceAvg30d": 11.83
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.02,
          "priceAvg30d": 14.12
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.6,
          "priceAvg30d": 14.53
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.51,
          "priceAvg30d": 17.58
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.95,
          "priceAvg30d": 19.14
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.46,
          "priceAvg30d": 20.39
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.54,
          "priceAvg30d": 19.82
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.18,
          "priceAvg30d": 19.83
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.64,
          "priceAvg30d": 19.09
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.46,
          "priceAvg30d": 17.9
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.54,
          "priceAvg30d": 17.88
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.77,
          "priceAvg30d": 17.27
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.64,
          "priceAvg30d": 17.28
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.64,
          "priceAvg30d": 15.99
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.09,
          "priceAvg30d": 16.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.95,
          "priceAvg30d": 14.33
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.82,
          "priceAvg30d": 14.21
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.64,
          "priceAvg30d": 11.01
        }
      ],
      "avg": 14.8,
      "max": 22.18,
      "maxBlock": 38,
      "min": 8.15,
      "minBlock": 25,
      "spread3h": 11.97,
      "spreadLowAvg": 8.79,
      "spreadHighAvg": 20.77,
      "avg30d": 12.89,
      "spread30dAvg": 10.81,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.02,
          "priceAvg30d": 10.18
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.02,
          "priceAvg30d": 9.93
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.62,
          "priceAvg30d": 10.08
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.62,
          "priceAvg30d": 9.87
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.62,
          "priceAvg30d": 9.52
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.02,
          "priceAvg30d": 9.95
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.47,
          "priceAvg30d": 10.33
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.88,
          "priceAvg30d": 11.09
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.94,
          "priceAvg30d": 10.71
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.3,
          "priceAvg30d": 12.11
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.51,
          "priceAvg30d": 12.85
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.51,
          "priceAvg30d": 12.99
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 18.5,
          "priceAvg30d": 13.36
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.33,
          "priceAvg30d": 10.67
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.23,
          "priceAvg30d": 8.95
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.46,
          "priceAvg30d": 7.72
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.44,
          "priceAvg30d": 7.95
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.71,
          "priceAvg30d": 8.31
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.71,
          "priceAvg30d": 7.47
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.45,
          "priceAvg30d": 6.58
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.37,
          "priceAvg30d": 6.97
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.5,
          "priceAvg30d": 6.86
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.39,
          "priceAvg30d": 6.61
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.45,
          "priceAvg30d": 6.56
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.15,
          "priceAvg30d": 6.42
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.17,
          "priceAvg30d": 6.37
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.2,
          "priceAvg30d": 7.43
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.45,
          "priceAvg30d": 8.77
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.22,
          "priceAvg30d": 8.57
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.49,
          "priceAvg30d": 8.74
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.46,
          "priceAvg30d": 9.09
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.02,
          "priceAvg30d": 11.18
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.6,
          "priceAvg30d": 11.18
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.51,
          "priceAvg30d": 13.53
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.95,
          "priceAvg30d": 14.33
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.46,
          "priceAvg30d": 16.63
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.54,
          "priceAvg30d": 17.0
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.18,
          "priceAvg30d": 16.8
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.64,
          "priceAvg30d": 15.3
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.46,
          "priceAvg30d": 12.95
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 16.0,
          "priceAvg30d": 13.6
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 15.01,
          "priceAvg30d": 12.82
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 13.78,
          "priceAvg30d": 12.86
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 13.78,
          "priceAvg30d": 11.94
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 12.45,
          "priceAvg30d": 12.2
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.78,
          "priceAvg30d": 11.3
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.82,
          "priceAvg30d": 11.69
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.64,
          "priceAvg30d": 9.5
        }
      ],
      "avg": 13.87,
      "max": 22.18,
      "maxBlock": 38,
      "min": 8.15,
      "minBlock": 25,
      "spread3h": 11.31,
      "spreadLowAvg": 8.53,
      "spreadHighAvg": 19.84,
      "avg30d": 10.58,
      "spread30dAvg": 9.59,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.02,
          "priceAvg30d": 10.5
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.02,
          "priceAvg30d": 10.75
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.62,
          "priceAvg30d": 10.71
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.62,
          "priceAvg30d": 10.48
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.62,
          "priceAvg30d": 10.26
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.02,
          "priceAvg30d": 10.65
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.47,
          "priceAvg30d": 11.22
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.88,
          "priceAvg30d": 12.1
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.94,
          "priceAvg30d": 12.22
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.3,
          "priceAvg30d": 13.51
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.51,
          "priceAvg30d": 14.2
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.51,
          "priceAvg30d": 14.31
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 18.5,
          "priceAvg30d": 15.27
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.33,
          "priceAvg30d": 12.28
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.23,
          "priceAvg30d": 10.58
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.46,
          "priceAvg30d": 8.77
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.44,
          "priceAvg30d": 8.91
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.71,
          "priceAvg30d": 8.62
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.71,
          "priceAvg30d": 8.19
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.45,
          "priceAvg30d": 7.43
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.81,
          "priceAvg30d": 7.21
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.5,
          "priceAvg30d": 6.86
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.39,
          "priceAvg30d": 6.55
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.89,
          "priceAvg30d": 6.46
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.15,
          "priceAvg30d": 6.27
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.17,
          "priceAvg30d": 6.49
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.81,
          "priceAvg30d": 7.09
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.0,
          "priceAvg30d": 8.11
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.22,
          "priceAvg30d": 8.94
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.71,
          "priceAvg30d": 10.01
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.98,
          "priceAvg30d": 11.39
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.02,
          "priceAvg30d": 13.62
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.6,
          "priceAvg30d": 14.53
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.51,
          "priceAvg30d": 17.58
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.95,
          "priceAvg30d": 19.14
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.46,
          "priceAvg30d": 20.39
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.54,
          "priceAvg30d": 19.82
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.18,
          "priceAvg30d": 19.83
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.64,
          "priceAvg30d": 19.09
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.46,
          "priceAvg30d": 17.9
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.54,
          "priceAvg30d": 17.88
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.77,
          "priceAvg30d": 17.27
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.64,
          "priceAvg30d": 17.28
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.64,
          "priceAvg30d": 15.99
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.09,
          "priceAvg30d": 16.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.95,
          "priceAvg30d": 14.33
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.82,
          "priceAvg30d": 14.21
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.64,
          "priceAvg30d": 11.01
        }
      ],
      "avg": 14.8,
      "max": 22.18,
      "maxBlock": 38,
      "min": 8.15,
      "minBlock": 25,
      "spread3h": 11.97,
      "spreadLowAvg": 8.79,
      "spreadHighAvg": 20.77,
      "avg30d": 12.34,
      "spread30dAvg": 11.42,
      "historyDays": 30
    }
  }
};
