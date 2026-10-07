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
  "targetDate": "2026-10-07",
  "fetchedAt": "2026-10-07T12:19:28+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 22.72,
        "priceAvg30d": 17.69
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 21.77,
        "priceAvg30d": 16.07
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 21.77,
        "priceAvg30d": 14.89
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 21.98,
        "priceAvg30d": 14.26
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 21.98,
        "priceAvg30d": 13.94
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 22.0,
        "priceAvg30d": 14.65
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 22.0,
        "priceAvg30d": 15.51
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 22.22,
        "priceAvg30d": 16.41
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 22.61,
        "priceAvg30d": 17.23
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 22.86,
        "priceAvg30d": 18.31
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 22.72,
        "priceAvg30d": 19.29
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 22.86,
        "priceAvg30d": 19.0
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 22.72,
        "priceAvg30d": 18.21
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 21.98,
        "priceAvg30d": 15.81
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 15.06,
        "priceAvg30d": 13.97
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 11.33,
        "priceAvg30d": 13.52
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 10.81,
        "priceAvg30d": 14.05
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 10.62,
        "priceAvg30d": 14.88
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 10.23,
        "priceAvg30d": 15.49
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 9.81,
        "priceAvg30d": 15.05
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 9.73,
        "priceAvg30d": 14.2
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 8.5,
        "priceAvg30d": 13.75
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 8.45,
        "priceAvg30d": 13.63
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 8.46,
        "priceAvg30d": 13.21
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 1.84,
        "priceAvg30d": 11.39
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 3.0,
        "priceAvg30d": 11.98
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 7.5,
        "priceAvg30d": 13.99
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 10.09,
        "priceAvg30d": 16.05
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 9.73,
        "priceAvg30d": 17.04
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 12.03,
        "priceAvg30d": 19.26
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 17.67,
        "priceAvg30d": 19.54
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 22.73,
        "priceAvg30d": 22.79
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 26.25,
        "priceAvg30d": 24.48
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 32.54,
        "priceAvg30d": 26.98
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 26.41,
        "priceAvg30d": 27.09
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 28.61,
        "priceAvg30d": 27.66
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 25.4,
        "priceAvg30d": 27.54
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 25.51,
        "priceAvg30d": 27.14
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 25.79,
        "priceAvg30d": 25.82
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 24.94,
        "priceAvg30d": 24.28
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 24.33,
        "priceAvg30d": 23.29
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 23.67,
        "priceAvg30d": 22.68
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 22.72,
        "priceAvg30d": 21.82
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 23.93,
        "priceAvg30d": 21.77
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 23.93,
        "priceAvg30d": 21.59
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 23.06,
        "priceAvg30d": 20.13
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 23.34,
        "priceAvg30d": 19.95
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 22.15,
        "priceAvg30d": 17.85
      }
    ],
    "avg": 18.8,
    "max": 32.54,
    "maxBlock": 34,
    "min": 1.84,
    "minBlock": 25,
    "spread3h": 16.84,
    "spreadLowAvg": 7.67,
    "spreadHighAvg": 24.51,
    "avg30d": 18.44,
    "spread30dAvg": 15.58,
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
          "price": 24.26,
          "priceAvg30d": 14.44
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.57,
          "priceAvg30d": 13.16
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.49,
          "priceAvg30d": 13.11
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.49,
          "priceAvg30d": 12.88
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.35,
          "priceAvg30d": 13.75
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.39,
          "priceAvg30d": 14.66
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.77,
          "priceAvg30d": 15.81
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.9,
          "priceAvg30d": 16.46
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.01,
          "priceAvg30d": 16.45
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.28,
          "priceAvg30d": 16.54
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.55,
          "priceAvg30d": 17.0
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.83,
          "priceAvg30d": 16.2
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.64,
          "priceAvg30d": 14.62
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.5,
          "priceAvg30d": 12.78
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.38,
          "priceAvg30d": 11.23
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.33,
          "priceAvg30d": 9.88
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.5,
          "priceAvg30d": 8.85
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 7.93,
          "priceAvg30d": 9.61
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 4.37,
          "priceAvg30d": 8.83
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 1.0,
          "priceAvg30d": 8.05
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.44
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 7.41
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 7.67
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 7.09
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.48
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.55
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 7.78
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 5.0,
          "priceAvg30d": 9.85
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 7.93,
          "priceAvg30d": 10.17
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.33,
          "priceAvg30d": 11.84
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.0,
          "priceAvg30d": 13.94
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.0,
          "priceAvg30d": 17.68
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.44,
          "priceAvg30d": 21.28
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 35.16,
          "priceAvg30d": 23.91
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.54,
          "priceAvg30d": 23.62
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 34.52,
          "priceAvg30d": 23.69
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.44,
          "priceAvg30d": 22.87
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.0,
          "priceAvg30d": 24.14
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.13,
          "priceAvg30d": 22.88
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.01,
          "priceAvg30d": 21.26
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.51,
          "priceAvg30d": 20.25
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.02,
          "priceAvg30d": 19.9
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.94,
          "priceAvg30d": 18.85
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.08,
          "priceAvg30d": 18.72
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.88,
          "priceAvg30d": 18.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.12,
          "priceAvg30d": 17.19
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.85,
          "priceAvg30d": 16.35
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.96,
          "priceAvg30d": 15.36
        }
      ],
      "avg": 18.11,
      "max": 35.16,
      "maxBlock": 34,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 24.93,
      "spreadLowAvg": 2.22,
      "spreadHighAvg": 27.16,
      "avg30d": 14.72,
      "spread30dAvg": 14.51,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.26,
          "priceAvg30d": 19.64
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.57,
          "priceAvg30d": 18.24
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.49,
          "priceAvg30d": 17.68
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.49,
          "priceAvg30d": 17.2
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.35,
          "priceAvg30d": 17.18
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.39,
          "priceAvg30d": 17.29
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.77,
          "priceAvg30d": 18.4
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.9,
          "priceAvg30d": 18.69
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.01,
          "priceAvg30d": 18.82
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.28,
          "priceAvg30d": 18.84
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.55,
          "priceAvg30d": 19.23
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.83,
          "priceAvg30d": 19.13
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.64,
          "priceAvg30d": 18.07
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.14,
          "priceAvg30d": 16.26
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 20.56,
          "priceAvg30d": 14.32
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.0,
          "priceAvg30d": 13.08
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.5,
          "priceAvg30d": 10.84
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 7.93,
          "priceAvg30d": 10.73
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 4.37,
          "priceAvg30d": 10.93
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 1.0,
          "priceAvg30d": 10.13
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 9.26
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 9.08
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 8.9
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 8.26
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 7.31
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 8.0
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 9.62
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 5.0,
          "priceAvg30d": 11.35
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 7.93,
          "priceAvg30d": 12.29
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.33,
          "priceAvg30d": 14.54
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 15.0,
          "priceAvg30d": 16.82
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.55,
          "priceAvg30d": 21.66
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.44,
          "priceAvg30d": 24.89
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 35.16,
          "priceAvg30d": 28.86
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.54,
          "priceAvg30d": 28.46
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 34.52,
          "priceAvg30d": 28.95
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.44,
          "priceAvg30d": 28.77
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.0,
          "priceAvg30d": 28.31
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.13,
          "priceAvg30d": 27.47
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.01,
          "priceAvg30d": 25.54
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.51,
          "priceAvg30d": 24.33
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.02,
          "priceAvg30d": 23.46
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.94,
          "priceAvg30d": 22.56
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.08,
          "priceAvg30d": 22.53
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.88,
          "priceAvg30d": 22.61
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.12,
          "priceAvg30d": 21.75
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.85,
          "priceAvg30d": 21.31
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.96,
          "priceAvg30d": 20.04
        }
      ],
      "avg": 18.74,
      "max": 35.16,
      "maxBlock": 34,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 26.03,
      "spreadLowAvg": 2.22,
      "spreadHighAvg": 28.25,
      "avg30d": 17.95,
      "spread30dAvg": 17.82,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.26,
          "priceAvg30d": 21.64
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.57,
          "priceAvg30d": 20.8
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.49,
          "priceAvg30d": 20.26
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.49,
          "priceAvg30d": 20.23
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.35,
          "priceAvg30d": 19.96
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.39,
          "priceAvg30d": 20.17
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.77,
          "priceAvg30d": 20.72
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.9,
          "priceAvg30d": 21.07
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.01,
          "priceAvg30d": 21.41
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.28,
          "priceAvg30d": 21.52
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.55,
          "priceAvg30d": 21.78
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.83,
          "priceAvg30d": 21.75
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.64,
          "priceAvg30d": 21.29
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.14,
          "priceAvg30d": 20.69
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.14,
          "priceAvg30d": 20.59
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.98,
          "priceAvg30d": 20.7
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.45,
          "priceAvg30d": 20.82
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 21.98,
          "priceAvg30d": 22.47
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 21.98,
          "priceAvg30d": 22.88
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 20.81,
          "priceAvg30d": 23.01
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.85,
          "priceAvg30d": 22.0
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.2,
          "priceAvg30d": 22.06
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.44,
          "priceAvg30d": 22.16
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.5,
          "priceAvg30d": 21.91
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.1,
          "priceAvg30d": 20.29
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.21,
          "priceAvg30d": 20.95
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.04,
          "priceAvg30d": 22.22
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 15.0,
          "priceAvg30d": 23.74
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 20.91,
          "priceAvg30d": 24.66
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 22.86,
          "priceAvg30d": 26.31
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 22.15,
          "priceAvg30d": 24.95
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.55,
          "priceAvg30d": 27.85
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.44,
          "priceAvg30d": 30.11
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 35.16,
          "priceAvg30d": 31.94
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.54,
          "priceAvg30d": 31.16
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 34.52,
          "priceAvg30d": 31.44
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.44,
          "priceAvg30d": 31.26
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.0,
          "priceAvg30d": 31.04
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 28.13,
          "priceAvg30d": 29.66
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.01,
          "priceAvg30d": 27.7
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.51,
          "priceAvg30d": 26.25
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.02,
          "priceAvg30d": 25.6
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.94,
          "priceAvg30d": 24.8
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.08,
          "priceAvg30d": 25.47
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.88,
          "priceAvg30d": 25.8
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.12,
          "priceAvg30d": 24.93
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.85,
          "priceAvg30d": 24.67
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.96,
          "priceAvg30d": 22.9
        }
      ],
      "avg": 23.15,
      "max": 35.16,
      "maxBlock": 34,
      "min": 10.1,
      "minBlock": 25,
      "spread3h": 16.38,
      "spreadLowAvg": 13.06,
      "spreadHighAvg": 29.44,
      "avg30d": 23.91,
      "spread30dAvg": 12.51,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.26,
          "priceAvg30d": 21.61
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.57,
          "priceAvg30d": 20.86
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.49,
          "priceAvg30d": 20.26
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.49,
          "priceAvg30d": 19.96
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.35,
          "priceAvg30d": 19.67
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.39,
          "priceAvg30d": 19.87
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.77,
          "priceAvg30d": 20.45
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.9,
          "priceAvg30d": 20.91
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.01,
          "priceAvg30d": 21.26
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.28,
          "priceAvg30d": 21.62
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.55,
          "priceAvg30d": 21.92
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.83,
          "priceAvg30d": 21.88
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.64,
          "priceAvg30d": 21.68
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.14,
          "priceAvg30d": 20.88
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.14,
          "priceAvg30d": 20.11
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.98,
          "priceAvg30d": 19.84
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 19.82,
          "priceAvg30d": 20.68
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 21.98,
          "priceAvg30d": 21.87
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 21.98,
          "priceAvg30d": 22.14
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 19.95,
          "priceAvg30d": 21.88
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.85,
          "priceAvg30d": 21.03
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.2,
          "priceAvg30d": 20.88
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.44,
          "priceAvg30d": 20.91
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.5,
          "priceAvg30d": 20.61
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.1,
          "priceAvg30d": 18.84
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.21,
          "priceAvg30d": 19.4
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.21,
          "priceAvg30d": 21.79
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 15.0,
          "priceAvg30d": 23.8
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 20.91,
          "priceAvg30d": 24.6
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.38,
          "priceAvg30d": 25.72
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.32,
          "priceAvg30d": 25.77
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 28.01,
          "priceAvg30d": 27.84
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.44,
          "priceAvg30d": 29.05
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.97,
          "priceAvg30d": 30.92
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.54,
          "priceAvg30d": 30.87
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 34.52,
          "priceAvg30d": 31.09
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.44,
          "priceAvg30d": 30.65
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.0,
          "priceAvg30d": 30.12
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.73,
          "priceAvg30d": 28.99
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 33.99,
          "priceAvg30d": 27.43
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.59,
          "priceAvg30d": 26.26
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.49,
          "priceAvg30d": 25.67
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.37,
          "priceAvg30d": 24.89
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.08,
          "priceAvg30d": 25.42
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.06,
          "priceAvg30d": 25.68
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.6,
          "priceAvg30d": 24.75
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.32,
          "priceAvg30d": 24.7
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.18,
          "priceAvg30d": 23.06
        }
      ],
      "avg": 23.71,
      "max": 36.97,
      "maxBlock": 34,
      "min": 10.1,
      "minBlock": 25,
      "spread3h": 17.45,
      "spreadLowAvg": 13.09,
      "spreadHighAvg": 30.55,
      "avg30d": 23.54,
      "spread30dAvg": 13.56,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.81,
          "priceAvg30d": 10.99
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.81,
          "priceAvg30d": 11.2
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.42,
          "priceAvg30d": 11.47
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.05,
          "priceAvg30d": 11.1
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.82,
          "priceAvg30d": 10.93
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.88,
          "priceAvg30d": 11.47
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.82,
          "priceAvg30d": 12.2
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.88,
          "priceAvg30d": 12.67
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.94,
          "priceAvg30d": 12.62
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 21.77,
          "priceAvg30d": 13.58
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.4,
          "priceAvg30d": 14.25
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.4,
          "priceAvg30d": 14.49
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.43,
          "priceAvg30d": 15.37
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.92,
          "priceAvg30d": 13.04
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.0,
          "priceAvg30d": 11.79
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.14,
          "priceAvg30d": 10.63
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 19.82,
          "priceAvg30d": 11.23
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.88,
          "priceAvg30d": 13.87
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 20.08,
          "priceAvg30d": 16.32
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 19.95,
          "priceAvg30d": 16.61
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.85,
          "priceAvg30d": 16.1
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.2,
          "priceAvg30d": 15.79
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.44,
          "priceAvg30d": 15.76
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.5,
          "priceAvg30d": 15.65
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 3.01,
          "priceAvg30d": 13.06
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.0,
          "priceAvg30d": 13.74
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 6.3,
          "priceAvg30d": 15.78
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.58,
          "priceAvg30d": 17.84
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.55,
          "priceAvg30d": 17.93
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 19.94,
          "priceAvg30d": 19.19
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 19.94,
          "priceAvg30d": 18.66
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.33,
          "priceAvg30d": 19.98
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.44,
          "priceAvg30d": 19.36
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.97,
          "priceAvg30d": 20.39
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.88,
          "priceAvg30d": 20.5
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.64,
          "priceAvg30d": 21.75
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.95,
          "priceAvg30d": 21.15
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.88,
          "priceAvg30d": 21.2
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.5,
          "priceAvg30d": 19.94
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.46,
          "priceAvg30d": 18.43
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.77,
          "priceAvg30d": 18.0
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.8,
          "priceAvg30d": 17.49
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.5,
          "priceAvg30d": 17.38
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.94,
          "priceAvg30d": 16.11
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.9,
          "priceAvg30d": 16.11
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.43,
          "priceAvg30d": 14.37
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.42,
          "priceAvg30d": 14.26
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.58,
          "priceAvg30d": 11.43
        }
      ],
      "avg": 17.29,
      "max": 36.97,
      "maxBlock": 34,
      "min": 2.0,
      "minBlock": 26,
      "spread3h": 13.13,
      "spreadLowAvg": 9.56,
      "spreadHighAvg": 22.7,
      "avg30d": 15.48,
      "spread30dAvg": 10.26,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.81,
          "priceAvg30d": 10.91
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.81,
          "priceAvg30d": 11.09
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.42,
          "priceAvg30d": 11.38
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.05,
          "priceAvg30d": 11.0
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.82,
          "priceAvg30d": 10.79
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.88,
          "priceAvg30d": 11.37
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.82,
          "priceAvg30d": 12.11
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.88,
          "priceAvg30d": 12.6
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.94,
          "priceAvg30d": 12.55
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 21.77,
          "priceAvg30d": 13.58
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.4,
          "priceAvg30d": 14.24
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.4,
          "priceAvg30d": 14.41
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.43,
          "priceAvg30d": 15.3
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.92,
          "priceAvg30d": 12.93
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.0,
          "priceAvg30d": 11.77
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.14,
          "priceAvg30d": 10.21
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 19.82,
          "priceAvg30d": 10.66
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.88,
          "priceAvg30d": 12.45
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 20.08,
          "priceAvg30d": 15.0
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 19.95,
          "priceAvg30d": 15.01
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.85,
          "priceAvg30d": 14.57
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.2,
          "priceAvg30d": 14.41
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.44,
          "priceAvg30d": 14.89
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.5,
          "priceAvg30d": 14.21
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 3.01,
          "priceAvg30d": 12.12
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.0,
          "priceAvg30d": 12.58
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 6.3,
          "priceAvg30d": 14.71
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.58,
          "priceAvg30d": 17.21
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.55,
          "priceAvg30d": 17.0
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 19.94,
          "priceAvg30d": 18.1
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 19.94,
          "priceAvg30d": 17.33
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.33,
          "priceAvg30d": 18.79
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.44,
          "priceAvg30d": 18.84
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.97,
          "priceAvg30d": 20.03
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.88,
          "priceAvg30d": 20.35
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.64,
          "priceAvg30d": 21.62
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.95,
          "priceAvg30d": 21.03
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.88,
          "priceAvg30d": 21.06
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.5,
          "priceAvg30d": 19.81
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.46,
          "priceAvg30d": 18.29
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.77,
          "priceAvg30d": 18.0
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.8,
          "priceAvg30d": 17.49
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.5,
          "priceAvg30d": 17.38
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.94,
          "priceAvg30d": 16.11
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.9,
          "priceAvg30d": 16.11
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.43,
          "priceAvg30d": 14.37
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.42,
          "priceAvg30d": 14.26
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.58,
          "priceAvg30d": 11.43
        }
      ],
      "avg": 17.29,
      "max": 36.97,
      "maxBlock": 34,
      "min": 2.0,
      "minBlock": 26,
      "spread3h": 13.13,
      "spreadLowAvg": 9.56,
      "spreadHighAvg": 22.7,
      "avg30d": 15.03,
      "spread30dAvg": 9.97,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.81,
          "priceAvg30d": 10.91
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.81,
          "priceAvg30d": 11.09
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.81,
          "priceAvg30d": 11.38
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.81,
          "priceAvg30d": 11.0
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.81,
          "priceAvg30d": 10.77
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.81,
          "priceAvg30d": 11.24
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 11.85
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.82,
          "priceAvg30d": 12.6
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.4,
          "priceAvg30d": 12.44
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.8,
          "priceAvg30d": 13.52
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.4,
          "priceAvg30d": 14.22
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.4,
          "priceAvg30d": 14.36
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.43,
          "priceAvg30d": 15.22
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.92,
          "priceAvg30d": 12.67
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.97,
          "priceAvg30d": 11.44
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.14,
          "priceAvg30d": 9.84
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.81,
          "priceAvg30d": 9.85
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.15,
          "priceAvg30d": 10.06
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 5.0,
          "priceAvg30d": 10.37
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 10.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.32,
          "priceAvg30d": 10.26
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.38,
          "priceAvg30d": 10.04
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.33,
          "priceAvg30d": 9.86
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.95,
          "priceAvg30d": 9.36
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 3.01,
          "priceAvg30d": 8.63
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.0,
          "priceAvg30d": 8.73
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 6.3,
          "priceAvg30d": 10.2
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 3.12,
          "priceAvg30d": 11.55
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.0,
          "priceAvg30d": 10.96
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.81,
          "priceAvg30d": 11.87
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.51,
          "priceAvg30d": 12.63
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.23,
          "priceAvg30d": 15.0
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.62,
          "priceAvg30d": 15.54
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.44,
          "priceAvg30d": 18.4
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.88,
          "priceAvg30d": 19.88
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.64,
          "priceAvg30d": 21.21
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.95,
          "priceAvg30d": 20.63
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.88,
          "priceAvg30d": 20.58
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.5,
          "priceAvg30d": 19.7
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.46,
          "priceAvg30d": 18.29
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.77,
          "priceAvg30d": 18.0
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.8,
          "priceAvg30d": 17.47
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.5,
          "priceAvg30d": 17.34
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.94,
          "priceAvg30d": 16.03
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.9,
          "priceAvg30d": 16.0
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.43,
          "priceAvg30d": 14.36
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.42,
          "priceAvg30d": 14.26
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.58,
          "priceAvg30d": 11.43
        }
      ],
      "avg": 12.87,
      "max": 21.77,
      "maxBlock": 41,
      "min": 2.0,
      "minBlock": 26,
      "spread3h": 13.89,
      "spreadLowAvg": 6.62,
      "spreadHighAvg": 20.51,
      "avg30d": 13.4,
      "spread30dAvg": 10.81,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.81,
          "priceAvg30d": 10.37
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.81,
          "priceAvg30d": 10.18
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.81,
          "priceAvg30d": 10.35
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.81,
          "priceAvg30d": 10.05
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.81,
          "priceAvg30d": 9.72
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.81,
          "priceAvg30d": 10.23
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 10.6
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.82,
          "priceAvg30d": 11.34
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.4,
          "priceAvg30d": 10.69
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.8,
          "priceAvg30d": 11.99
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.4,
          "priceAvg30d": 12.79
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.4,
          "priceAvg30d": 12.91
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.43,
          "priceAvg30d": 13.31
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.92,
          "priceAvg30d": 10.85
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.97,
          "priceAvg30d": 9.4
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.14,
          "priceAvg30d": 8.33
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.81,
          "priceAvg30d": 8.36
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.15,
          "priceAvg30d": 8.85
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 5.0,
          "priceAvg30d": 8.39
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 7.67
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.32,
          "priceAvg30d": 7.87
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.38,
          "priceAvg30d": 7.8
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.38,
          "priceAvg30d": 7.54
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.32,
          "priceAvg30d": 7.54
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 3.01,
          "priceAvg30d": 7.5
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.0,
          "priceAvg30d": 7.48
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 6.3,
          "priceAvg30d": 8.53
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 3.12,
          "priceAvg30d": 10.03
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.0,
          "priceAvg30d": 9.47
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.81,
          "priceAvg30d": 9.65
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.51,
          "priceAvg30d": 10.14
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.23,
          "priceAvg30d": 12.05
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.62,
          "priceAvg30d": 12.19
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.44,
          "priceAvg30d": 14.35
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.88,
          "priceAvg30d": 15.06
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.64,
          "priceAvg30d": 17.45
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.95,
          "priceAvg30d": 17.81
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.88,
          "priceAvg30d": 17.55
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.5,
          "priceAvg30d": 15.9
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.46,
          "priceAvg30d": 13.34
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.77,
          "priceAvg30d": 13.72
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.8,
          "priceAvg30d": 13.02
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.5,
          "priceAvg30d": 12.92
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.94,
          "priceAvg30d": 11.97
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.9,
          "priceAvg30d": 12.2
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.43,
          "priceAvg30d": 11.33
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.42,
          "priceAvg30d": 11.74
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.58,
          "priceAvg30d": 9.93
        }
      ],
      "avg": 12.82,
      "max": 21.77,
      "maxBlock": 41,
      "min": 2.0,
      "minBlock": 26,
      "spread3h": 14.32,
      "spreadLowAvg": 6.19,
      "spreadHighAvg": 20.51,
      "avg30d": 11.09,
      "spread30dAvg": 9.57,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.81,
          "priceAvg30d": 10.57
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.81,
          "priceAvg30d": 10.75
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.81,
          "priceAvg30d": 10.71
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.81,
          "priceAvg30d": 10.48
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.81,
          "priceAvg30d": 10.25
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.81,
          "priceAvg30d": 10.63
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.62,
          "priceAvg30d": 11.14
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.82,
          "priceAvg30d": 12.01
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 16.4,
          "priceAvg30d": 11.85
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.8,
          "priceAvg30d": 13.06
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.4,
          "priceAvg30d": 13.92
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.4,
          "priceAvg30d": 14.0
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.43,
          "priceAvg30d": 15.03
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.92,
          "priceAvg30d": 12.13
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.97,
          "priceAvg30d": 10.61
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.14,
          "priceAvg30d": 8.97
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.81,
          "priceAvg30d": 9.08
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.15,
          "priceAvg30d": 8.78
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 5.0,
          "priceAvg30d": 8.73
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 8.05
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 1.0,
          "priceAvg30d": 7.86
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.04,
          "priceAvg30d": 7.55
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 7.25
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 7.14
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.93
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 7.17
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.04,
          "priceAvg30d": 7.79
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 3.12,
          "priceAvg30d": 8.65
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.0,
          "priceAvg30d": 9.26
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.81,
          "priceAvg30d": 10.58
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.51,
          "priceAvg30d": 12.17
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.23,
          "priceAvg30d": 14.49
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.62,
          "priceAvg30d": 15.54
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.44,
          "priceAvg30d": 18.4
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.88,
          "priceAvg30d": 19.88
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.64,
          "priceAvg30d": 21.21
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.95,
          "priceAvg30d": 20.63
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.88,
          "priceAvg30d": 20.58
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.5,
          "priceAvg30d": 19.7
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.46,
          "priceAvg30d": 18.29
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.77,
          "priceAvg30d": 18.0
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.8,
          "priceAvg30d": 17.47
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.5,
          "priceAvg30d": 17.34
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.94,
          "priceAvg30d": 16.03
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.9,
          "priceAvg30d": 16.0
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.43,
          "priceAvg30d": 14.36
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.42,
          "priceAvg30d": 14.26
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.58,
          "priceAvg30d": 11.16
        }
      ],
      "avg": 11.91,
      "max": 21.77,
      "maxBlock": 41,
      "min": 0.01,
      "minBlock": 23,
      "spread3h": 19.92,
      "spreadLowAvg": 0.59,
      "spreadHighAvg": 20.51,
      "avg30d": 12.63,
      "spread30dAvg": 11.5,
      "historyDays": 30
    }
  }
};
