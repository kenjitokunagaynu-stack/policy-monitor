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
  "targetDate": "2026-09-30",
  "fetchedAt": "2026-09-30T12:00:19+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 18.93,
        "priceAvg30d": 17.29
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 17.0,
        "priceAvg30d": 15.94
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 17.04,
        "priceAvg30d": 14.99
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 15.74,
        "priceAvg30d": 14.65
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 15.74,
        "priceAvg30d": 14.4
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 17.0,
        "priceAvg30d": 14.82
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 17.14,
        "priceAvg30d": 15.4
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 17.04,
        "priceAvg30d": 15.97
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 20.35,
        "priceAvg30d": 16.43
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 22.5,
        "priceAvg30d": 17.42
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 23.37,
        "priceAvg30d": 18.49
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 23.5,
        "priceAvg30d": 18.06
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 22.72,
        "priceAvg30d": 17.1
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 16.8,
        "priceAvg30d": 15.84
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 11.1,
        "priceAvg30d": 14.69
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 9.98,
        "priceAvg30d": 14.96
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 10.14,
        "priceAvg30d": 15.95
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 10.28,
        "priceAvg30d": 17.27
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 9.83,
        "priceAvg30d": 18.18
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 8.62,
        "priceAvg30d": 17.94
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 6.39,
        "priceAvg30d": 17.0
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 2.57,
        "priceAvg30d": 16.87
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 3.0,
        "priceAvg30d": 16.62
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 2.86,
        "priceAvg30d": 16.28
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 1.0,
        "priceAvg30d": 14.72
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 2.5,
        "priceAvg30d": 15.16
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 8.5,
        "priceAvg30d": 16.68
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 10.31,
        "priceAvg30d": 18.68
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 10.31,
        "priceAvg30d": 19.91
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 12.21,
        "priceAvg30d": 21.74
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 14.5,
        "priceAvg30d": 21.37
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 23.68,
        "priceAvg30d": 23.75
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 26.41,
        "priceAvg30d": 25.14
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 29.9,
        "priceAvg30d": 27.66
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 31.3,
        "priceAvg30d": 27.48
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 33.5,
        "priceAvg30d": 28.12
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 33.0,
        "priceAvg30d": 27.91
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 31.62,
        "priceAvg30d": 27.16
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 30.0,
        "priceAvg30d": 25.84
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 27.04,
        "priceAvg30d": 24.31
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 26.01,
        "priceAvg30d": 23.08
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 25.24,
        "priceAvg30d": 22.24
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 24.0,
        "priceAvg30d": 21.33
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 23.7,
        "priceAvg30d": 21.79
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 23.7,
        "priceAvg30d": 21.34
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 23.51,
        "priceAvg30d": 19.72
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 23.41,
        "priceAvg30d": 19.45
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 22.53,
        "priceAvg30d": 17.35
      }
    ],
    "avg": 17.86,
    "max": 33.5,
    "maxBlock": 36,
    "min": 1.0,
    "minBlock": 25,
    "spread3h": 25.41,
    "spreadLowAvg": 4.96,
    "spreadHighAvg": 30.37,
    "avg30d": 19.26,
    "spread30dAvg": 14.17,
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
          "price": 10.79,
          "priceAvg30d": 13.3
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.0,
          "priceAvg30d": 12.56
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.9,
          "priceAvg30d": 12.32
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.88,
          "priceAvg30d": 12.15
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.0,
          "priceAvg30d": 12.98
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.37,
          "priceAvg30d": 13.54
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.37,
          "priceAvg30d": 14.42
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.38,
          "priceAvg30d": 14.7
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.0,
          "priceAvg30d": 15.0
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 17.05,
          "priceAvg30d": 15.14
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 23.37,
          "priceAvg30d": 15.03
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.37,
          "priceAvg30d": 13.78
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.37,
          "priceAvg30d": 12.55
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.37,
          "priceAvg30d": 11.15
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.0,
          "priceAvg30d": 10.57
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.49,
          "priceAvg30d": 10.08
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.49,
          "priceAvg30d": 9.51
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.5,
          "priceAvg30d": 10.26
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 5.0,
          "priceAvg30d": 9.5
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 8.71
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 8.02
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.0,
          "priceAvg30d": 7.91
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 2.0,
          "priceAvg30d": 8.29
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 2.0,
          "priceAvg30d": 7.51
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.04,
          "priceAvg30d": 7.01
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 1.0,
          "priceAvg30d": 7.03
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.5,
          "priceAvg30d": 8.27
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.4,
          "priceAvg30d": 10.12
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.49,
          "priceAvg30d": 10.41
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 14.31,
          "priceAvg30d": 11.67
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.18,
          "priceAvg30d": 13.35
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.55,
          "priceAvg30d": 15.89
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.39,
          "priceAvg30d": 19.08
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.01,
          "priceAvg30d": 21.06
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 25.86,
          "priceAvg30d": 21.61
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 25.01,
          "priceAvg30d": 21.39
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.37,
          "priceAvg30d": 21.32
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 30.68,
          "priceAvg30d": 21.71
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.69,
          "priceAvg30d": 21.52
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.85,
          "priceAvg30d": 19.88
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.62,
          "priceAvg30d": 19.55
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.37,
          "priceAvg30d": 19.28
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.37,
          "priceAvg30d": 18.01
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 13.0,
          "priceAvg30d": 17.42
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 23.37,
          "priceAvg30d": 16.98
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.0,
          "priceAvg30d": 15.51
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.0,
          "priceAvg30d": 14.73
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.57,
          "priceAvg30d": 13.81
        }
      ],
      "avg": 15.38,
      "max": 30.68,
      "maxBlock": 38,
      "min": 0.04,
      "minBlock": 25,
      "spread3h": 21.25,
      "spreadLowAvg": 2.98,
      "spreadHighAvg": 24.23,
      "avg30d": 13.87,
      "spread30dAvg": 12.76,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.54,
          "priceAvg30d": 18.45
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.76,
          "priceAvg30d": 17.07
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.0,
          "priceAvg30d": 15.92
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.91,
          "priceAvg30d": 15.58
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.7,
          "priceAvg30d": 15.76
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.91,
          "priceAvg30d": 15.82
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 24.0,
          "priceAvg30d": 17.32
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.0,
          "priceAvg30d": 17.52
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.0,
          "priceAvg30d": 17.7
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.76,
          "priceAvg30d": 17.92
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.25,
          "priceAvg30d": 18.28
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.29,
          "priceAvg30d": 17.83
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.76,
          "priceAvg30d": 16.71
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.7,
          "priceAvg30d": 15.36
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.75,
          "priceAvg30d": 14.35
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.49,
          "priceAvg30d": 13.32
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.64,
          "priceAvg30d": 10.93
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.22,
          "priceAvg30d": 11.14
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 5.0,
          "priceAvg30d": 11.71
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 11.26
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 10.39
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.0,
          "priceAvg30d": 10.36
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 2.0,
          "priceAvg30d": 10.1
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 2.0,
          "priceAvg30d": 9.27
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.04,
          "priceAvg30d": 8.14
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 1.0,
          "priceAvg30d": 8.7
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.0,
          "priceAvg30d": 10.2
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 6.41,
          "priceAvg30d": 11.65
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.49,
          "priceAvg30d": 12.11
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 14.31,
          "priceAvg30d": 13.65
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.18,
          "priceAvg30d": 15.91
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.96,
          "priceAvg30d": 19.84
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 33.83,
          "priceAvg30d": 22.85
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.29,
          "priceAvg30d": 26.82
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.61,
          "priceAvg30d": 26.44
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.07,
          "priceAvg30d": 27.05
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.53,
          "priceAvg30d": 26.91
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 35.83,
          "priceAvg30d": 26.58
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.83,
          "priceAvg30d": 25.84
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.29,
          "priceAvg30d": 24.04
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.21,
          "priceAvg30d": 22.89
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.58,
          "priceAvg30d": 22.04
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.01,
          "priceAvg30d": 21.17
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.83,
          "priceAvg30d": 21.06
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.39,
          "priceAvg30d": 21.23
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.09,
          "priceAvg30d": 19.96
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.65,
          "priceAvg30d": 20.14
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.4,
          "priceAvg30d": 19.25
        }
      ],
      "avg": 20.53,
      "max": 37.53,
      "maxBlock": 37,
      "min": 0.04,
      "minBlock": 25,
      "spread3h": 32.42,
      "spreadLowAvg": 2.57,
      "spreadHighAvg": 34.99,
      "avg30d": 17.18,
      "spread30dAvg": 15.47,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.54,
          "priceAvg30d": 20.44
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.76,
          "priceAvg30d": 19.74
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.0,
          "priceAvg30d": 18.94
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.91,
          "priceAvg30d": 19.2
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.7,
          "priceAvg30d": 18.96
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.91,
          "priceAvg30d": 19.05
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 24.0,
          "priceAvg30d": 19.67
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.0,
          "priceAvg30d": 19.92
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.0,
          "priceAvg30d": 20.31
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.76,
          "priceAvg30d": 20.59
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.25,
          "priceAvg30d": 20.86
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.29,
          "priceAvg30d": 20.53
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.76,
          "priceAvg30d": 19.93
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.7,
          "priceAvg30d": 20.07
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.7,
          "priceAvg30d": 20.22
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 23.69,
          "priceAvg30d": 20.7
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 23.7,
          "priceAvg30d": 21.6
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.7,
          "priceAvg30d": 24.01
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 23.7,
          "priceAvg30d": 24.35
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.25,
          "priceAvg30d": 24.75
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.7,
          "priceAvg30d": 23.82
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.51,
          "priceAvg30d": 24.24
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 22.52,
          "priceAvg30d": 24.29
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 21.74,
          "priceAvg30d": 24.21
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 14.31,
          "priceAvg30d": 22.65
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.0,
          "priceAvg30d": 23.15
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.7,
          "priceAvg30d": 23.92
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.54,
          "priceAvg30d": 25.33
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.5,
          "priceAvg30d": 26.2
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.91,
          "priceAvg30d": 27.53
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 26.81,
          "priceAvg30d": 25.28
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.96,
          "priceAvg30d": 27.34
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 33.83,
          "priceAvg30d": 28.93
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.29,
          "priceAvg30d": 30.67
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.61,
          "priceAvg30d": 29.71
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.07,
          "priceAvg30d": 30.01
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.53,
          "priceAvg30d": 29.81
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 35.83,
          "priceAvg30d": 29.71
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.83,
          "priceAvg30d": 28.46
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.29,
          "priceAvg30d": 26.64
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.21,
          "priceAvg30d": 24.97
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.58,
          "priceAvg30d": 24.37
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.01,
          "priceAvg30d": 23.52
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.83,
          "priceAvg30d": 24.89
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.39,
          "priceAvg30d": 24.7
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.09,
          "priceAvg30d": 23.62
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.65,
          "priceAvg30d": 23.6
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.4,
          "priceAvg30d": 21.62
        }
      ],
      "avg": 26.33,
      "max": 37.53,
      "maxBlock": 37,
      "min": 14.31,
      "minBlock": 25,
      "spread3h": 12.82,
      "spreadLowAvg": 22.17,
      "spreadHighAvg": 34.99,
      "avg30d": 23.69,
      "spread30dAvg": 10.97,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.54,
          "priceAvg30d": 20.38
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.76,
          "priceAvg30d": 19.78
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.44,
          "priceAvg30d": 18.95
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.91,
          "priceAvg30d": 18.91
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.71,
          "priceAvg30d": 18.74
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.91,
          "priceAvg30d": 18.83
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 24.0,
          "priceAvg30d": 19.29
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.0,
          "priceAvg30d": 19.74
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.53,
          "priceAvg30d": 20.13
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.01,
          "priceAvg30d": 20.5
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.25,
          "priceAvg30d": 20.83
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.29,
          "priceAvg30d": 20.79
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.76,
          "priceAvg30d": 20.54
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.7,
          "priceAvg30d": 20.29
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.7,
          "priceAvg30d": 19.81
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 23.69,
          "priceAvg30d": 19.89
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 23.7,
          "priceAvg30d": 21.57
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.7,
          "priceAvg30d": 23.21
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 23.7,
          "priceAvg30d": 24.05
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.25,
          "priceAvg30d": 24.1
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.7,
          "priceAvg30d": 23.25
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.51,
          "priceAvg30d": 23.35
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 22.52,
          "priceAvg30d": 23.25
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 21.74,
          "priceAvg30d": 23.15
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 14.31,
          "priceAvg30d": 21.56
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.0,
          "priceAvg30d": 21.97
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.7,
          "priceAvg30d": 23.97
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.54,
          "priceAvg30d": 25.66
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.5,
          "priceAvg30d": 26.25
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.91,
          "priceAvg30d": 27.09
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 26.81,
          "priceAvg30d": 26.67
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.96,
          "priceAvg30d": 28.14
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 33.83,
          "priceAvg30d": 29.19
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.29,
          "priceAvg30d": 31.5
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.61,
          "priceAvg30d": 31.57
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.07,
          "priceAvg30d": 31.8
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.53,
          "priceAvg30d": 31.4
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 35.83,
          "priceAvg30d": 30.34
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.83,
          "priceAvg30d": 28.83
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.29,
          "priceAvg30d": 27.26
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.21,
          "priceAvg30d": 26.11
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.58,
          "priceAvg30d": 25.46
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.01,
          "priceAvg30d": 24.58
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.83,
          "priceAvg30d": 25.05
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.39,
          "priceAvg30d": 24.89
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.09,
          "priceAvg30d": 23.7
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.37,
          "priceAvg30d": 23.62
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 27.1,
          "priceAvg30d": 21.92
        }
      ],
      "avg": 26.41,
      "max": 37.53,
      "maxBlock": 37,
      "min": 14.31,
      "minBlock": 25,
      "spread3h": 12.82,
      "spreadLowAvg": 22.17,
      "spreadHighAvg": 34.99,
      "avg30d": 23.79,
      "spread30dAvg": 13.49,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.03,
          "priceAvg30d": 12.0
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.0,
          "priceAvg30d": 12.18
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.31,
          "priceAvg30d": 12.4
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.31,
          "priceAvg30d": 12.18
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.52,
          "priceAvg30d": 12.07
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.93,
          "priceAvg30d": 12.38
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.0,
          "priceAvg30d": 12.7
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.31,
          "priceAvg30d": 13.02
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.52,
          "priceAvg30d": 12.74
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.56,
          "priceAvg30d": 13.7
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.1,
          "priceAvg30d": 14.5
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.88,
          "priceAvg30d": 14.55
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.74,
          "priceAvg30d": 15.43
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.8,
          "priceAvg30d": 13.36
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.98,
          "priceAvg30d": 12.95
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 12.39
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 5.0,
          "priceAvg30d": 13.65
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.12,
          "priceAvg30d": 16.57
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.45,
          "priceAvg30d": 19.05
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.49,
          "priceAvg30d": 19.8
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.45,
          "priceAvg30d": 19.21
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.45,
          "priceAvg30d": 19.11
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.45,
          "priceAvg30d": 18.84
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.45,
          "priceAvg30d": 18.67
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.35,
          "priceAvg30d": 16.12
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.35,
          "priceAvg30d": 16.84
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.65,
          "priceAvg30d": 18.99
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 6.5,
          "priceAvg30d": 20.8
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.5,
          "priceAvg30d": 20.87
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.52,
          "priceAvg30d": 21.54
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 16.48,
          "priceAvg30d": 20.75
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 17.46,
          "priceAvg30d": 21.79
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.0,
          "priceAvg30d": 22.14
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 21.31,
          "priceAvg30d": 23.91
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 26.12,
          "priceAvg30d": 23.81
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 28.8,
          "priceAvg30d": 24.99
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.86,
          "priceAvg30d": 24.42
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.5,
          "priceAvg30d": 23.63
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.59,
          "priceAvg30d": 21.86
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.2,
          "priceAvg30d": 20.21
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.12,
          "priceAvg30d": 19.29
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.45,
          "priceAvg30d": 18.64
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.1,
          "priceAvg30d": 18.38
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.42,
          "priceAvg30d": 17.19
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.45,
          "priceAvg30d": 16.81
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.93,
          "priceAvg30d": 15.44
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.54,
          "priceAvg30d": 14.83
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.74,
          "priceAvg30d": 12.34
        }
      ],
      "avg": 14.35,
      "max": 28.8,
      "maxBlock": 36,
      "min": 2.5,
      "minBlock": 29,
      "spread3h": 12.24,
      "spreadLowAvg": 11.83,
      "spreadHighAvg": 24.06,
      "avg30d": 17.27,
      "spread30dAvg": 11.97,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.03,
          "priceAvg30d": 11.92
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.0,
          "priceAvg30d": 12.18
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.31,
          "priceAvg30d": 12.4
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.31,
          "priceAvg30d": 12.18
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.52,
          "priceAvg30d": 12.07
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.93,
          "priceAvg30d": 12.38
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.0,
          "priceAvg30d": 12.7
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.31,
          "priceAvg30d": 13.02
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.52,
          "priceAvg30d": 12.74
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.56,
          "priceAvg30d": 13.7
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.1,
          "priceAvg30d": 14.5
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.88,
          "priceAvg30d": 14.54
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.74,
          "priceAvg30d": 15.43
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.8,
          "priceAvg30d": 13.32
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.98,
          "priceAvg30d": 12.95
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 12.23
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.5,
          "priceAvg30d": 12.98
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.0,
          "priceAvg30d": 15.18
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.38,
          "priceAvg30d": 17.98
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 1.59,
          "priceAvg30d": 18.47
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 1.0,
          "priceAvg30d": 17.97
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 1.01,
          "priceAvg30d": 18.04
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 2.5,
          "priceAvg30d": 18.24
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 2.5,
          "priceAvg30d": 17.5
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 15.52
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.8,
          "priceAvg30d": 15.99
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.0,
          "priceAvg30d": 18.18
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 6.5,
          "priceAvg30d": 20.17
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.5,
          "priceAvg30d": 20.0
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.52,
          "priceAvg30d": 20.55
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 16.48,
          "priceAvg30d": 19.6
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 17.46,
          "priceAvg30d": 20.61
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.0,
          "priceAvg30d": 21.62
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 21.31,
          "priceAvg30d": 23.55
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 26.12,
          "priceAvg30d": 23.66
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 28.8,
          "priceAvg30d": 24.86
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.86,
          "priceAvg30d": 24.3
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.5,
          "priceAvg30d": 23.5
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.59,
          "priceAvg30d": 21.73
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.2,
          "priceAvg30d": 20.07
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.12,
          "priceAvg30d": 19.29
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.45,
          "priceAvg30d": 18.64
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.1,
          "priceAvg30d": 18.38
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.42,
          "priceAvg30d": 17.19
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.45,
          "priceAvg30d": 16.81
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.93,
          "priceAvg30d": 15.44
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.54,
          "priceAvg30d": 14.83
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.74,
          "priceAvg30d": 12.34
        }
      ],
      "avg": 12.5,
      "max": 28.8,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 25,
      "spread3h": 21.51,
      "spreadLowAvg": 2.55,
      "spreadHighAvg": 24.06,
      "avg30d": 16.91,
      "spread30dAvg": 11.47,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.03,
          "priceAvg30d": 11.92
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.0,
          "priceAvg30d": 12.18
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.31,
          "priceAvg30d": 12.4
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.31,
          "priceAvg30d": 12.18
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.0,
          "priceAvg30d": 12.07
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.98,
          "priceAvg30d": 12.38
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.14,
          "priceAvg30d": 12.6
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.31,
          "priceAvg30d": 13.02
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.37,
          "priceAvg30d": 12.7
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.56,
          "priceAvg30d": 13.64
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.1,
          "priceAvg30d": 14.48
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.8,
          "priceAvg30d": 14.54
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.74,
          "priceAvg30d": 15.35
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.38,
          "priceAvg30d": 13.17
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.98,
          "priceAvg30d": 12.62
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 11.86
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.5,
          "priceAvg30d": 12.06
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.0,
          "priceAvg30d": 12.96
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.02,
          "priceAvg30d": 13.48
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 13.13
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 13.32
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 13.25
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 12.8
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 12.58
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 11.59
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 11.62
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.04,
          "priceAvg30d": 13.26
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.0,
          "priceAvg30d": 14.56
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.0,
          "priceAvg30d": 13.76
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 2.0,
          "priceAvg30d": 14.68
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 2.5,
          "priceAvg30d": 16.65
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.98,
          "priceAvg30d": 18.41
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.38,
          "priceAvg30d": 19.74
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.5,
          "priceAvg30d": 22.53
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.61,
          "priceAvg30d": 23.41
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 28.0,
          "priceAvg30d": 24.48
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.86,
          "priceAvg30d": 23.9
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.23,
          "priceAvg30d": 23.09
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.59,
          "priceAvg30d": 21.62
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.2,
          "priceAvg30d": 20.07
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.12,
          "priceAvg30d": 19.29
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.45,
          "priceAvg30d": 18.64
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.1,
          "priceAvg30d": 18.38
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.42,
          "priceAvg30d": 17.19
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.45,
          "priceAvg30d": 16.78
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.93,
          "priceAvg30d": 15.43
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.54,
          "priceAvg30d": 14.83
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.74,
          "priceAvg30d": 12.34
        }
      ],
      "avg": 10.8,
      "max": 28.0,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 20.44,
      "spreadLowAvg": 0.76,
      "spreadHighAvg": 21.2,
      "avg30d": 15.35,
      "spread30dAvg": 12.09,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.03,
          "priceAvg30d": 11.47
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.0,
          "priceAvg30d": 11.38
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 7.96,
          "priceAvg30d": 11.51
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 7.95,
          "priceAvg30d": 11.36
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 7.96,
          "priceAvg30d": 11.15
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 7.98,
          "priceAvg30d": 11.5
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 8.0,
          "priceAvg30d": 11.54
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 9.22,
          "priceAvg30d": 12.12
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.54,
          "priceAvg30d": 11.48
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.0,
          "priceAvg30d": 12.48
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.1,
          "priceAvg30d": 13.42
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.8,
          "priceAvg30d": 13.48
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.74,
          "priceAvg30d": 14.01
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 8.82,
          "priceAvg30d": 11.7
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.05,
          "priceAvg30d": 11.22
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 2.9,
          "priceAvg30d": 10.75
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 0.01,
          "priceAvg30d": 10.79
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.01,
          "priceAvg30d": 11.85
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 11.51
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 10.77
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 10.9
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 10.71
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 10.45
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 10.41
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 9.66
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 9.81
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 11.36
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 13.16
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 12.48
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 12.82
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 0.01,
          "priceAvg30d": 14.45
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 7.93,
          "priceAvg30d": 15.75
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 7.88,
          "priceAvg30d": 16.53
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 8.05,
          "priceAvg30d": 19.25
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 12.29,
          "priceAvg30d": 19.52
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 13.81,
          "priceAvg30d": 21.67
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 14.16,
          "priceAvg30d": 21.83
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 13.81,
          "priceAvg30d": 20.93
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 9.0,
          "priceAvg30d": 18.77
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 8.78,
          "priceAvg30d": 16.16
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.81,
          "priceAvg30d": 15.96
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 12.29,
          "priceAvg30d": 15.15
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.1,
          "priceAvg30d": 14.76
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.42,
          "priceAvg30d": 13.85
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.45,
          "priceAvg30d": 13.69
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.93,
          "priceAvg30d": 12.95
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.54,
          "priceAvg30d": 12.99
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.74,
          "priceAvg30d": 11.32
        }
      ],
      "avg": 7.9,
      "max": 19.45,
      "maxBlock": 45,
      "min": 0.01,
      "minBlock": 17,
      "spread3h": 13.87,
      "spreadLowAvg": 3.3,
      "spreadHighAvg": 17.17,
      "avg30d": 13.39,
      "spread30dAvg": 11.69,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.03,
          "priceAvg30d": 11.32
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.0,
          "priceAvg30d": 11.5
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.31,
          "priceAvg30d": 11.22
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.31,
          "priceAvg30d": 10.79
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.0,
          "priceAvg30d": 10.45
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.98,
          "priceAvg30d": 10.67
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.14,
          "priceAvg30d": 10.83
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.31,
          "priceAvg30d": 11.39
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.37,
          "priceAvg30d": 11.2
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.56,
          "priceAvg30d": 12.5
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.1,
          "priceAvg30d": 13.53
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.8,
          "priceAvg30d": 13.77
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.74,
          "priceAvg30d": 14.71
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.38,
          "priceAvg30d": 12.13
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.98,
          "priceAvg30d": 11.22
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 10.34
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.5,
          "priceAvg30d": 11.04
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.0,
          "priceAvg30d": 11.61
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.02,
          "priceAvg30d": 12.01
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 11.44
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 11.01
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 10.76
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 10.56
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 10.42
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 9.93
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 10.03
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.04,
          "priceAvg30d": 10.71
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.0,
          "priceAvg30d": 11.91
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.0,
          "priceAvg30d": 12.55
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 2.0,
          "priceAvg30d": 13.9
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 2.5,
          "priceAvg30d": 16.49
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.98,
          "priceAvg30d": 18.21
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.38,
          "priceAvg30d": 19.74
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.5,
          "priceAvg30d": 22.53
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.61,
          "priceAvg30d": 23.41
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 28.0,
          "priceAvg30d": 24.48
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.86,
          "priceAvg30d": 23.9
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.23,
          "priceAvg30d": 23.09
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.59,
          "priceAvg30d": 21.62
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.2,
          "priceAvg30d": 20.07
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.12,
          "priceAvg30d": 19.29
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.45,
          "priceAvg30d": 18.64
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.1,
          "priceAvg30d": 18.37
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.42,
          "priceAvg30d": 17.19
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.45,
          "priceAvg30d": 16.63
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.93,
          "priceAvg30d": 15.08
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.54,
          "priceAvg30d": 14.21
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.74,
          "priceAvg30d": 11.13
        }
      ],
      "avg": 10.8,
      "max": 28.0,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 20.44,
      "spreadLowAvg": 0.76,
      "spreadHighAvg": 21.2,
      "avg30d": 14.37,
      "spread30dAvg": 13.05,
      "historyDays": 30
    }
  }
};
