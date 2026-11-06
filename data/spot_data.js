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
  "targetDate": "2026-11-06",
  "fetchedAt": "2026-11-06T13:13:02+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 23.97,
        "priceAvg30d": 24.9
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 24.71,
        "priceAvg30d": 23.85
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 22.61,
        "priceAvg30d": 23.38
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 22.61,
        "priceAvg30d": 23.15
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 20.76,
        "priceAvg30d": 23.29
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 22.61,
        "priceAvg30d": 23.92
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 25.3,
        "priceAvg30d": 24.61
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 24.71,
        "priceAvg30d": 25.32
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 25.44,
        "priceAvg30d": 25.63
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 25.44,
        "priceAvg30d": 26.0
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 25.52,
        "priceAvg30d": 26.26
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 25.94,
        "priceAvg30d": 26.38
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 26.0,
        "priceAvg30d": 26.31
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 25.94,
        "priceAvg30d": 25.52
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 25.0,
        "priceAvg30d": 23.09
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 19.87,
        "priceAvg30d": 20.54
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 13.9,
        "priceAvg30d": 19.52
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 12.07,
        "priceAvg30d": 18.77
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 10.85,
        "priceAvg30d": 17.06
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 9.0,
        "priceAvg30d": 16.06
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 9.86,
        "priceAvg30d": 14.95
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 8.55,
        "priceAvg30d": 14.46
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 8.14,
        "priceAvg30d": 14.06
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 7.0,
        "priceAvg30d": 14.01
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 2.5,
        "priceAvg30d": 12.03
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 2.5,
        "priceAvg30d": 12.6
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 10.11,
        "priceAvg30d": 16.38
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 12.7,
        "priceAvg30d": 18.97
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 12.19,
        "priceAvg30d": 20.17
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 20.0,
        "priceAvg30d": 23.49
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 26.12,
        "priceAvg30d": 25.5
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 28.2,
        "priceAvg30d": 29.16
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 30.0,
        "priceAvg30d": 32.78
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 30.37,
        "priceAvg30d": 34.57
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 29.77,
        "priceAvg30d": 33.87
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 29.5,
        "priceAvg30d": 33.75
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 28.83,
        "priceAvg30d": 32.22
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 28.5,
        "priceAvg30d": 31.44
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 28.47,
        "priceAvg30d": 30.49
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 28.0,
        "priceAvg30d": 28.76
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 28.13,
        "priceAvg30d": 28.14
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 27.42,
        "priceAvg30d": 27.36
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 27.28,
        "priceAvg30d": 26.85
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 25.94,
        "priceAvg30d": 26.69
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 27.57,
        "priceAvg30d": 26.96
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 25.94,
        "priceAvg30d": 26.2
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 25.94,
        "priceAvg30d": 25.94
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 19.9,
        "priceAvg30d": 24.34
      }
    ],
    "avg": 21.29,
    "max": 30.37,
    "maxBlock": 34,
    "min": 2.5,
    "minBlock": 25,
    "spread3h": 20.57,
    "spreadLowAvg": 8.17,
    "spreadHighAvg": 28.74,
    "avg30d": 23.95,
    "spread30dAvg": 18.84,
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
          "price": 28.0,
          "priceAvg30d": 21.92
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.48,
          "priceAvg30d": 19.3
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.0,
          "priceAvg30d": 19.62
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.35,
          "priceAvg30d": 20.4
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.78,
          "priceAvg30d": 21.26
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.0,
          "priceAvg30d": 22.91
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.35,
          "priceAvg30d": 23.81
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.78,
          "priceAvg30d": 24.77
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.35,
          "priceAvg30d": 25.31
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.49,
          "priceAvg30d": 25.21
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.57,
          "priceAvg30d": 27.22
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.57,
          "priceAvg30d": 28.19
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 28.58,
          "priceAvg30d": 24.87
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 28.47,
          "priceAvg30d": 22.45
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.04,
          "priceAvg30d": 19.3
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.7,
          "priceAvg30d": 16.48
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.4,
          "priceAvg30d": 15.43
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.02,
          "priceAvg30d": 12.8
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.82,
          "priceAvg30d": 12.13
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.22,
          "priceAvg30d": 11.12
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.4,
          "priceAvg30d": 10.4
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.5,
          "priceAvg30d": 9.3
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.93,
          "priceAvg30d": 9.81
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.93,
          "priceAvg30d": 10.02
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.4,
          "priceAvg30d": 8.26
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.93,
          "priceAvg30d": 7.99
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.5,
          "priceAvg30d": 10.36
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.93,
          "priceAvg30d": 12.93
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 11.22,
          "priceAvg30d": 16.4
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 13.59,
          "priceAvg30d": 19.84
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 20.9,
          "priceAvg30d": 22.38
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 26.46,
          "priceAvg30d": 27.29
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.6,
          "priceAvg30d": 33.97
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.62,
          "priceAvg30d": 35.88
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.2,
          "priceAvg30d": 33.98
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 27.59,
          "priceAvg30d": 33.77
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 27.56,
          "priceAvg30d": 32.32
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.3,
          "priceAvg30d": 32.52
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 27.52,
          "priceAvg30d": 33.42
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.74,
          "priceAvg30d": 32.39
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.78,
          "priceAvg30d": 32.0
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.11,
          "priceAvg30d": 29.75
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.83,
          "priceAvg30d": 28.34
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.18,
          "priceAvg30d": 28.17
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 11.66,
          "priceAvg30d": 28.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 11.38,
          "priceAvg30d": 26.28
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.93,
          "priceAvg30d": 26.1
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 3.01,
          "priceAvg30d": 23.76
        }
      ],
      "avg": 21.76,
      "max": 30.62,
      "maxBlock": 34,
      "min": 3.01,
      "minBlock": 48,
      "spread3h": 16.62,
      "spreadLowAvg": 10.6,
      "spreadHighAvg": 27.22,
      "avg30d": 22.29,
      "spread30dAvg": 23.64,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.0,
          "priceAvg30d": 26.18
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.48,
          "priceAvg30d": 25.8
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.0,
          "priceAvg30d": 25.24
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.35,
          "priceAvg30d": 25.08
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.78,
          "priceAvg30d": 25.59
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.0,
          "priceAvg30d": 25.95
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.35,
          "priceAvg30d": 26.7
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.78,
          "priceAvg30d": 26.72
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.35,
          "priceAvg30d": 27.07
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.49,
          "priceAvg30d": 27.14
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.57,
          "priceAvg30d": 27.49
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.57,
          "priceAvg30d": 27.95
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 28.58,
          "priceAvg30d": 27.75
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 28.47,
          "priceAvg30d": 26.31
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 27.57,
          "priceAvg30d": 22.73
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.12,
          "priceAvg30d": 19.86
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.4,
          "priceAvg30d": 18.63
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.59,
          "priceAvg30d": 16.74
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.0,
          "priceAvg30d": 16.14
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.51,
          "priceAvg30d": 15.5
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.24,
          "priceAvg30d": 14.2
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.31,
          "priceAvg30d": 13.89
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.14,
          "priceAvg30d": 13.46
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.13,
          "priceAvg30d": 13.51
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 6.0,
          "priceAvg30d": 12.37
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 7.0,
          "priceAvg30d": 12.41
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.29,
          "priceAvg30d": 15.45
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.85,
          "priceAvg30d": 17.78
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.18,
          "priceAvg30d": 20.86
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 13.59,
          "priceAvg30d": 23.89
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 20.9,
          "priceAvg30d": 26.47
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 28.86,
          "priceAvg30d": 31.29
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.6,
          "priceAvg30d": 35.1
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.62,
          "priceAvg30d": 37.2
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.2,
          "priceAvg30d": 36.57
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.04,
          "priceAvg30d": 36.49
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.49,
          "priceAvg30d": 34.62
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.25,
          "priceAvg30d": 34.27
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.3,
          "priceAvg30d": 33.41
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.14,
          "priceAvg30d": 31.87
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.81,
          "priceAvg30d": 30.87
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.41,
          "priceAvg30d": 29.62
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.47,
          "priceAvg30d": 29.08
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.18,
          "priceAvg30d": 29.7
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 11.66,
          "priceAvg30d": 29.92
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 11.38,
          "priceAvg30d": 28.37
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.93,
          "priceAvg30d": 27.72
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 3.01,
          "priceAvg30d": 25.67
        }
      ],
      "avg": 21.21,
      "max": 30.62,
      "maxBlock": 34,
      "min": 3.01,
      "minBlock": 48,
      "spread3h": 17.75,
      "spreadLowAvg": 10.6,
      "spreadHighAvg": 28.35,
      "avg30d": 25.14,
      "spread30dAvg": 21.52,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.0,
          "priceAvg30d": 27.79
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.48,
          "priceAvg30d": 27.52
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.0,
          "priceAvg30d": 27.56
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.35,
          "priceAvg30d": 27.3
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.78,
          "priceAvg30d": 27.36
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.0,
          "priceAvg30d": 27.38
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.35,
          "priceAvg30d": 27.58
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.78,
          "priceAvg30d": 27.57
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.35,
          "priceAvg30d": 27.8
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.49,
          "priceAvg30d": 27.83
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.57,
          "priceAvg30d": 28.1
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.57,
          "priceAvg30d": 28.57
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 28.58,
          "priceAvg30d": 28.62
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 28.47,
          "priceAvg30d": 27.83
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 27.57,
          "priceAvg30d": 27.36
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.19,
          "priceAvg30d": 26.99
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.94,
          "priceAvg30d": 26.17
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.16,
          "priceAvg30d": 25.84
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 15.1,
          "priceAvg30d": 25.11
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.66,
          "priceAvg30d": 24.27
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 13.08,
          "priceAvg30d": 22.77
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.21,
          "priceAvg30d": 22.46
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.25,
          "priceAvg30d": 22.46
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.25,
          "priceAvg30d": 22.96
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 6.0,
          "priceAvg30d": 22.41
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 7.0,
          "priceAvg30d": 23.44
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 13.08,
          "priceAvg30d": 24.88
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.94,
          "priceAvg30d": 27.23
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.18,
          "priceAvg30d": 29.05
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 27.35,
          "priceAvg30d": 30.87
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 28.27,
          "priceAvg30d": 30.89
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 28.86,
          "priceAvg30d": 33.89
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.6,
          "priceAvg30d": 36.43
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.62,
          "priceAvg30d": 37.96
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.2,
          "priceAvg30d": 37.25
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.04,
          "priceAvg30d": 37.26
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.49,
          "priceAvg30d": 35.33
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.25,
          "priceAvg30d": 35.08
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.3,
          "priceAvg30d": 33.98
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.14,
          "priceAvg30d": 32.53
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.81,
          "priceAvg30d": 31.45
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.41,
          "priceAvg30d": 30.06
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.47,
          "priceAvg30d": 29.48
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.47,
          "priceAvg30d": 30.21
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 30.07,
          "priceAvg30d": 31.24
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.05,
          "priceAvg30d": 29.78
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.47,
          "priceAvg30d": 28.76
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.0,
          "priceAvg30d": 27.33
        }
      ],
      "avg": 24.82,
      "max": 30.62,
      "maxBlock": 34,
      "min": 6.0,
      "minBlock": 25,
      "spread3h": 16.95,
      "spreadLowAvg": 12.62,
      "spreadHighAvg": 29.58,
      "avg30d": 28.79,
      "spread30dAvg": 13.74,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.41,
          "priceAvg30d": 26.87
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.0,
          "priceAvg30d": 26.45
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.21,
          "priceAvg30d": 25.92
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.7,
          "priceAvg30d": 25.83
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.59,
          "priceAvg30d": 26.3
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.7,
          "priceAvg30d": 26.69
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.7,
          "priceAvg30d": 27.03
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.16,
          "priceAvg30d": 27.26
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.19,
          "priceAvg30d": 27.43
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.7,
          "priceAvg30d": 27.59
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.16,
          "priceAvg30d": 27.83
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.16,
          "priceAvg30d": 28.12
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.16,
          "priceAvg30d": 27.96
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 29.19,
          "priceAvg30d": 27.14
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.59,
          "priceAvg30d": 25.34
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 28.2,
          "priceAvg30d": 23.29
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.94,
          "priceAvg30d": 22.55
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.34,
          "priceAvg30d": 22.99
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 15.1,
          "priceAvg30d": 22.46
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.23,
          "priceAvg30d": 21.65
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 13.08,
          "priceAvg30d": 19.85
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.97,
          "priceAvg30d": 19.57
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.79,
          "priceAvg30d": 19.14
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.57,
          "priceAvg30d": 19.12
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 6.0,
          "priceAvg30d": 16.82
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.0,
          "priceAvg30d": 17.53
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 21.95,
          "priceAvg30d": 20.67
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.77,
          "priceAvg30d": 23.85
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 28.2,
          "priceAvg30d": 25.64
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.14,
          "priceAvg30d": 27.45
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.32,
          "priceAvg30d": 28.8
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 36.6,
          "priceAvg30d": 32.82
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 36.97,
          "priceAvg30d": 34.97
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.0,
          "priceAvg30d": 35.87
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.58,
          "priceAvg30d": 35.77
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.3,
          "priceAvg30d": 35.81
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.98,
          "priceAvg30d": 34.48
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.01,
          "priceAvg30d": 33.78
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 34.99,
          "priceAvg30d": 33.36
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 33.42,
          "priceAvg30d": 31.72
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.43,
          "priceAvg30d": 30.06
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.98,
          "priceAvg30d": 29.12
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 31.62,
          "priceAvg30d": 28.61
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.79,
          "priceAvg30d": 28.52
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 30.79,
          "priceAvg30d": 29.34
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 30.07,
          "priceAvg30d": 28.72
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 29.98,
          "priceAvg30d": 28.56
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.69,
          "priceAvg30d": 27.55
        }
      ],
      "avg": 27.43,
      "max": 37.0,
      "maxBlock": 34,
      "min": 6.0,
      "minBlock": 25,
      "spread3h": 19.12,
      "spreadLowAvg": 16.34,
      "spreadHighAvg": 35.46,
      "avg30d": 26.96,
      "spread30dAvg": 17.41,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.26,
          "priceAvg30d": 15.41
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 15.21
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.28,
          "priceAvg30d": 14.58
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.28,
          "priceAvg30d": 13.82
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 17.08,
          "priceAvg30d": 15.0
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.0,
          "priceAvg30d": 16.33
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.25,
          "priceAvg30d": 17.19
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 17.07,
          "priceAvg30d": 18.6
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.07,
          "priceAvg30d": 18.48
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 18.09,
          "priceAvg30d": 20.03
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.09,
          "priceAvg30d": 20.28
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.09,
          "priceAvg30d": 19.36
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 18.09,
          "priceAvg30d": 18.59
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 18.09,
          "priceAvg30d": 17.76
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 16.28,
          "priceAvg30d": 17.74
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.42,
          "priceAvg30d": 16.09
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.81,
          "priceAvg30d": 17.96
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 18.47,
          "priceAvg30d": 18.86
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 15.1,
          "priceAvg30d": 18.88
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.23,
          "priceAvg30d": 19.17
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 13.08,
          "priceAvg30d": 17.71
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.97,
          "priceAvg30d": 17.39
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.79,
          "priceAvg30d": 17.7
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.57,
          "priceAvg30d": 17.78
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 6.0,
          "priceAvg30d": 13.9
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.0,
          "priceAvg30d": 14.35
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 21.95,
          "priceAvg30d": 18.52
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.77,
          "priceAvg30d": 21.69
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 28.2,
          "priceAvg30d": 22.86
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.14,
          "priceAvg30d": 24.1
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 26.52,
          "priceAvg30d": 25.32
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 36.6,
          "priceAvg30d": 28.24
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.3,
          "priceAvg30d": 29.23
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.8,
          "priceAvg30d": 30.77
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.15,
          "priceAvg30d": 28.72
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 22.51,
          "priceAvg30d": 29.19
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 22.61,
          "priceAvg30d": 27.81
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.13,
          "priceAvg30d": 27.89
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.15,
          "priceAvg30d": 27.38
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.15,
          "priceAvg30d": 25.3
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.99,
          "priceAvg30d": 25.18
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.29,
          "priceAvg30d": 23.72
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.51,
          "priceAvg30d": 22.9
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.61,
          "priceAvg30d": 22.6
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.61,
          "priceAvg30d": 21.96
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.95,
          "priceAvg30d": 19.9
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.76,
          "priceAvg30d": 19.59
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.0,
          "priceAvg30d": 15.17
        }
      ],
      "avg": 19.23,
      "max": 36.6,
      "maxBlock": 32,
      "min": 6.0,
      "minBlock": 25,
      "spread3h": 9.84,
      "spreadLowAvg": 16.34,
      "spreadHighAvg": 26.19,
      "avg30d": 20.55,
      "spread30dAvg": 15.51,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.26,
          "priceAvg30d": 15.17
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 15.21
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.28,
          "priceAvg30d": 14.58
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.28,
          "priceAvg30d": 13.82
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 17.08,
          "priceAvg30d": 14.58
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.0,
          "priceAvg30d": 16.06
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.25,
          "priceAvg30d": 16.93
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 17.07,
          "priceAvg30d": 18.24
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.07,
          "priceAvg30d": 18.09
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 18.09,
          "priceAvg30d": 19.39
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.09,
          "priceAvg30d": 19.15
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.09,
          "priceAvg30d": 18.53
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 18.09,
          "priceAvg30d": 18.59
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 18.09,
          "priceAvg30d": 17.76
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 16.28,
          "priceAvg30d": 17.33
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.42,
          "priceAvg30d": 15.76
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.81,
          "priceAvg30d": 17.86
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 18.47,
          "priceAvg30d": 18.86
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 15.1,
          "priceAvg30d": 18.88
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.23,
          "priceAvg30d": 19.17
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 13.08,
          "priceAvg30d": 17.67
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.97,
          "priceAvg30d": 17.33
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.79,
          "priceAvg30d": 17.64
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.57,
          "priceAvg30d": 17.73
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 6.0,
          "priceAvg30d": 13.9
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.0,
          "priceAvg30d": 14.35
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 21.95,
          "priceAvg30d": 18.52
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.77,
          "priceAvg30d": 21.69
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 28.2,
          "priceAvg30d": 22.54
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.14,
          "priceAvg30d": 24.1
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 26.52,
          "priceAvg30d": 25.3
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 36.6,
          "priceAvg30d": 28.21
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.3,
          "priceAvg30d": 29.23
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.8,
          "priceAvg30d": 30.77
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.15,
          "priceAvg30d": 28.72
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 22.51,
          "priceAvg30d": 28.85
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 22.61,
          "priceAvg30d": 27.81
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.13,
          "priceAvg30d": 27.44
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.15,
          "priceAvg30d": 27.04
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.15,
          "priceAvg30d": 25.12
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.99,
          "priceAvg30d": 24.99
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.29,
          "priceAvg30d": 23.56
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.51,
          "priceAvg30d": 22.75
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.61,
          "priceAvg30d": 22.35
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.61,
          "priceAvg30d": 21.72
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.95,
          "priceAvg30d": 19.65
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.76,
          "priceAvg30d": 19.41
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.0,
          "priceAvg30d": 15.04
        }
      ],
      "avg": 19.23,
      "max": 36.6,
      "maxBlock": 32,
      "min": 6.0,
      "minBlock": 25,
      "spread3h": 9.84,
      "spreadLowAvg": 16.34,
      "spreadHighAvg": 26.19,
      "avg30d": 20.36,
      "spread30dAvg": 15.34,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.26,
          "priceAvg30d": 14.59
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 15.21
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.28,
          "priceAvg30d": 14.16
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.28,
          "priceAvg30d": 13.37
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 17.08,
          "priceAvg30d": 13.68
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.0,
          "priceAvg30d": 14.99
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.25,
          "priceAvg30d": 15.49
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 17.07,
          "priceAvg30d": 17.14
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.07,
          "priceAvg30d": 17.96
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 18.09,
          "priceAvg30d": 19.18
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.09,
          "priceAvg30d": 19.13
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.09,
          "priceAvg30d": 18.52
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 18.09,
          "priceAvg30d": 18.52
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 18.09,
          "priceAvg30d": 17.66
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 16.28,
          "priceAvg30d": 13.82
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.42,
          "priceAvg30d": 12.17
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.81,
          "priceAvg30d": 12.32
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.43,
          "priceAvg30d": 11.89
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.87,
          "priceAvg30d": 10.66
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 7.52,
          "priceAvg30d": 9.95
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 8.69
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 4.0,
          "priceAvg30d": 8.19
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.34,
          "priceAvg30d": 7.83
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.43,
          "priceAvg30d": 8.28
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 6.0,
          "priceAvg30d": 7.03
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.38,
          "priceAvg30d": 7.04
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.36,
          "priceAvg30d": 8.46
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.64,
          "priceAvg30d": 9.18
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.41,
          "priceAvg30d": 11.09
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.87,
          "priceAvg30d": 12.47
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.42,
          "priceAvg30d": 14.3
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.42,
          "priceAvg30d": 17.17
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 16.31,
          "priceAvg30d": 21.54
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 22.15,
          "priceAvg30d": 24.93
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.15,
          "priceAvg30d": 24.67
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 22.51,
          "priceAvg30d": 25.23
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 22.61,
          "priceAvg30d": 24.13
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.13,
          "priceAvg30d": 23.51
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.15,
          "priceAvg30d": 23.48
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.15,
          "priceAvg30d": 22.36
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.99,
          "priceAvg30d": 22.44
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.96,
          "priceAvg30d": 21.78
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.96,
          "priceAvg30d": 21.16
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.96,
          "priceAvg30d": 20.54
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.0,
          "priceAvg30d": 19.97
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.09,
          "priceAvg30d": 18.15
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.09,
          "priceAvg30d": 17.97
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.0,
          "priceAvg30d": 14.01
        }
      ],
      "avg": 15.38,
      "max": 22.61,
      "maxBlock": 37,
      "min": 2.5,
      "minBlock": 21,
      "spread3h": 14.11,
      "spreadLowAvg": 8.1,
      "spreadHighAvg": 22.21,
      "avg30d": 15.96,
      "spread30dAvg": 14.43,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.49,
          "priceAvg30d": 11.66
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.0,
          "priceAvg30d": 11.24
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 8.77,
          "priceAvg30d": 10.74
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 8.55,
          "priceAvg30d": 10.45
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.55,
          "priceAvg30d": 10.5
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.49,
          "priceAvg30d": 10.67
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 8.42,
          "priceAvg30d": 10.64
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.47,
          "priceAvg30d": 12.48
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.07,
          "priceAvg30d": 13.24
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 18.09,
          "priceAvg30d": 14.38
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.09,
          "priceAvg30d": 14.89
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.09,
          "priceAvg30d": 14.5
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 18.09,
          "priceAvg30d": 14.16
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.47,
          "priceAvg30d": 12.54
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.42,
          "priceAvg30d": 10.11
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.42,
          "priceAvg30d": 10.01
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.81,
          "priceAvg30d": 10.5
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.43,
          "priceAvg30d": 10.0
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.87,
          "priceAvg30d": 8.75
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 7.52,
          "priceAvg30d": 8.1
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 6.74
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 4.0,
          "priceAvg30d": 5.75
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.34,
          "priceAvg30d": 5.57
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.43,
          "priceAvg30d": 5.8
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 6.0,
          "priceAvg30d": 4.79
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.38,
          "priceAvg30d": 5.09
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.36,
          "priceAvg30d": 7.09
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.64,
          "priceAvg30d": 7.43
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.41,
          "priceAvg30d": 9.05
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.87,
          "priceAvg30d": 10.19
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.42,
          "priceAvg30d": 10.64
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.42,
          "priceAvg30d": 11.78
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 16.31,
          "priceAvg30d": 13.8
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 22.15,
          "priceAvg30d": 17.44
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.15,
          "priceAvg30d": 18.69
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 22.51,
          "priceAvg30d": 19.09
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 22.61,
          "priceAvg30d": 18.42
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.13,
          "priceAvg30d": 17.97
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.15,
          "priceAvg30d": 17.04
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.15,
          "priceAvg30d": 15.98
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.99,
          "priceAvg30d": 16.12
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 12.07,
          "priceAvg30d": 15.19
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 13.47,
          "priceAvg30d": 15.64
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 13.22,
          "priceAvg30d": 14.4
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 12.07,
          "priceAvg30d": 13.28
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 8.42,
          "priceAvg30d": 12.29
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 12.07,
          "priceAvg30d": 12.72
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.42,
          "priceAvg30d": 10.5
        }
      ],
      "avg": 12.83,
      "max": 22.61,
      "maxBlock": 37,
      "min": 2.5,
      "minBlock": 21,
      "spread3h": 14.11,
      "spreadLowAvg": 8.1,
      "spreadHighAvg": 22.21,
      "avg30d": 11.83,
      "spread30dAvg": 12.92,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.26,
          "priceAvg30d": 14.59
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 14.78
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.28,
          "priceAvg30d": 13.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.28,
          "priceAvg30d": 13.14
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 17.08,
          "priceAvg30d": 13.38
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.0,
          "priceAvg30d": 14.76
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.25,
          "priceAvg30d": 15.42
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 17.07,
          "priceAvg30d": 17.11
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.07,
          "priceAvg30d": 17.93
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 18.09,
          "priceAvg30d": 19.03
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.09,
          "priceAvg30d": 18.98
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 18.09,
          "priceAvg30d": 18.42
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 18.09,
          "priceAvg30d": 18.5
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 18.09,
          "priceAvg30d": 17.65
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 16.28,
          "priceAvg30d": 13.74
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.42,
          "priceAvg30d": 12.17
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 11.81,
          "priceAvg30d": 11.94
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.43,
          "priceAvg30d": 10.78
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.87,
          "priceAvg30d": 9.06
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 7.52,
          "priceAvg30d": 8.11
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.27
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.82
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 6.67
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.52
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.78
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.9
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 6.82
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.5,
          "priceAvg30d": 8.14
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.41,
          "priceAvg30d": 9.71
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.87,
          "priceAvg30d": 11.88
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.42,
          "priceAvg30d": 14.3
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.42,
          "priceAvg30d": 17.08
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 16.31,
          "priceAvg30d": 21.54
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 22.15,
          "priceAvg30d": 24.93
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.15,
          "priceAvg30d": 24.67
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 22.51,
          "priceAvg30d": 25.23
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 22.61,
          "priceAvg30d": 24.13
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.13,
          "priceAvg30d": 23.51
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.15,
          "priceAvg30d": 23.48
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.15,
          "priceAvg30d": 22.36
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.99,
          "priceAvg30d": 22.44
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.96,
          "priceAvg30d": 21.78
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.96,
          "priceAvg30d": 21.16
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.96,
          "priceAvg30d": 20.54
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.0,
          "priceAvg30d": 19.97
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.09,
          "priceAvg30d": 18.15
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.09,
          "priceAvg30d": 17.97
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.0,
          "priceAvg30d": 14.01
        }
      ],
      "avg": 14.23,
      "max": 22.61,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 17.57,
      "spreadLowAvg": 4.64,
      "spreadHighAvg": 22.21,
      "avg30d": 15.54,
      "spread30dAvg": 15.49,
      "historyDays": 30
    }
  }
};
