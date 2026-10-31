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
  "targetDate": "2026-10-31",
  "fetchedAt": "2026-10-31T12:17:16+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 28.45,
        "priceAvg30d": 23.81
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 27.79,
        "priceAvg30d": 22.7
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 27.31,
        "priceAvg30d": 22.22
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 27.0,
        "priceAvg30d": 22.14
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 27.09,
        "priceAvg30d": 22.24
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 27.9,
        "priceAvg30d": 22.75
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 28.45,
        "priceAvg30d": 23.39
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 28.63,
        "priceAvg30d": 24.0
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 28.71,
        "priceAvg30d": 24.49
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 29.03,
        "priceAvg30d": 24.95
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 28.71,
        "priceAvg30d": 25.14
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 28.45,
        "priceAvg30d": 25.18
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 28.45,
        "priceAvg30d": 24.97
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 27.91,
        "priceAvg30d": 23.32
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 26.73,
        "priceAvg30d": 20.65
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 13.02,
        "priceAvg30d": 18.28
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 11.6,
        "priceAvg30d": 17.31
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 10.0,
        "priceAvg30d": 16.9
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 3.0,
        "priceAvg30d": 15.43
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 2.5,
        "priceAvg30d": 14.53
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 0.03,
        "priceAvg30d": 13.67
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
        "priceAvg30d": 12.96
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 0.01,
        "priceAvg30d": 12.9
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 0.01,
        "priceAvg30d": 10.56
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 0.01,
        "priceAvg30d": 11.24
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 1.0,
        "priceAvg30d": 14.53
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 2.5,
        "priceAvg30d": 17.31
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 2.5,
        "priceAvg30d": 18.32
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 9.87,
        "priceAvg30d": 21.95
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 11.61,
        "priceAvg30d": 23.75
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 15.0,
        "priceAvg30d": 27.99
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 23.78,
        "priceAvg30d": 31.24
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 27.86,
        "priceAvg30d": 33.57
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 26.43,
        "priceAvg30d": 33.07
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 25.66,
        "priceAvg30d": 33.03
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 23.48,
        "priceAvg30d": 31.44
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 24.48,
        "priceAvg30d": 30.58
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 25.66,
        "priceAvg30d": 29.52
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 25.0,
        "priceAvg30d": 27.58
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 26.7,
        "priceAvg30d": 26.92
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 25.5,
        "priceAvg30d": 26.03
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 25.15,
        "priceAvg30d": 25.51
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 22.18,
        "priceAvg30d": 25.58
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 21.54,
        "priceAvg30d": 25.97
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 20.6,
        "priceAvg30d": 25.23
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 19.51,
        "priceAvg30d": 25.15
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 14.76,
        "priceAvg30d": 23.85
      }
    ],
    "avg": 18.37,
    "max": 29.03,
    "maxBlock": 10,
    "min": 0.01,
    "minBlock": 22,
    "spread3h": 27.64,
    "spreadLowAvg": 0.93,
    "spreadHighAvg": 28.57,
    "avg30d": 22.65,
    "spread30dAvg": 18.39,
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
          "price": 31.78,
          "priceAvg30d": 20.13
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.27,
          "priceAvg30d": 16.79
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 30.51,
          "priceAvg30d": 17.7
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.0,
          "priceAvg30d": 18.64
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 30.0,
          "priceAvg30d": 19.31
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.45,
          "priceAvg30d": 20.82
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.53,
          "priceAvg30d": 22.13
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.81,
          "priceAvg30d": 23.46
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.53,
          "priceAvg30d": 23.99
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.92,
          "priceAvg30d": 23.98
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.92,
          "priceAvg30d": 25.93
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.78,
          "priceAvg30d": 26.79
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.78,
          "priceAvg30d": 23.14
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.78,
          "priceAvg30d": 20.23
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.3,
          "priceAvg30d": 16.96
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.48,
          "priceAvg30d": 13.82
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.7,
          "priceAvg30d": 12.54
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.5,
          "priceAvg30d": 10.76
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.85,
          "priceAvg30d": 9.88
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.85,
          "priceAvg30d": 8.85
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.85,
          "priceAvg30d": 8.22
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 5.0,
          "priceAvg30d": 7.68
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 1.0,
          "priceAvg30d": 7.92
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 8.16
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.5,
          "priceAvg30d": 6.73
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 3.0,
          "priceAvg30d": 6.45
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 3.0,
          "priceAvg30d": 8.26
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.85,
          "priceAvg30d": 10.41
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.85,
          "priceAvg30d": 13.69
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.5,
          "priceAvg30d": 17.39
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.08,
          "priceAvg30d": 20.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.08,
          "priceAvg30d": 25.99
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 14.76,
          "priceAvg30d": 32.81
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 23.78,
          "priceAvg30d": 35.65
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.01,
          "priceAvg30d": 33.16
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.0,
          "priceAvg30d": 33.67
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.29,
          "priceAvg30d": 31.63
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 15.0,
          "priceAvg30d": 32.1
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 14.7,
          "priceAvg30d": 31.96
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.0,
          "priceAvg30d": 31.08
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 14.7,
          "priceAvg30d": 29.96
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.0,
          "priceAvg30d": 27.76
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.0,
          "priceAvg30d": 26.47
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.82,
          "priceAvg30d": 26.71
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.25,
          "priceAvg30d": 26.3
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.0,
          "priceAvg30d": 24.87
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.14,
          "priceAvg30d": 24.86
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.85,
          "priceAvg30d": 22.71
        }
      ],
      "avg": 17.43,
      "max": 31.78,
      "maxBlock": 1,
      "min": 0.01,
      "minBlock": 24,
      "spread3h": 24.62,
      "spreadLowAvg": 4.06,
      "spreadHighAvg": 28.68,
      "avg30d": 20.59,
      "spread30dAvg": 23.9,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 31.78,
          "priceAvg30d": 25.86
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.27,
          "priceAvg30d": 25.18
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 30.51,
          "priceAvg30d": 25.49
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.0,
          "priceAvg30d": 25.26
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 30.0,
          "priceAvg30d": 25.34
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.45,
          "priceAvg30d": 25.48
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.53,
          "priceAvg30d": 26.08
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.81,
          "priceAvg30d": 26.13
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.53,
          "priceAvg30d": 26.49
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.92,
          "priceAvg30d": 26.62
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.92,
          "priceAvg30d": 26.99
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.78,
          "priceAvg30d": 27.33
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.78,
          "priceAvg30d": 26.84
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.78,
          "priceAvg30d": 24.72
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.3,
          "priceAvg30d": 21.37
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.48,
          "priceAvg30d": 18.29
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.7,
          "priceAvg30d": 16.87
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.5,
          "priceAvg30d": 15.43
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 3.0,
          "priceAvg30d": 14.54
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 13.63
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 12.38
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 11.97
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 11.61
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 11.64
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 10.81
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 11.21
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 14.01
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 15.99
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.44,
          "priceAvg30d": 19.12
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.6,
          "priceAvg30d": 22.75
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.46,
          "priceAvg30d": 25.41
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.61,
          "priceAvg30d": 31.27
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 14.76,
          "priceAvg30d": 35.11
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 23.78,
          "priceAvg30d": 37.15
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.01,
          "priceAvg30d": 36.5
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.0,
          "priceAvg30d": 36.63
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.29,
          "priceAvg30d": 34.69
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 15.0,
          "priceAvg30d": 34.16
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 14.7,
          "priceAvg30d": 32.76
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.0,
          "priceAvg30d": 31.06
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 14.7,
          "priceAvg30d": 29.71
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.0,
          "priceAvg30d": 28.39
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.0,
          "priceAvg30d": 27.9
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.82,
          "priceAvg30d": 28.79
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 9.61,
          "priceAvg30d": 29.39
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 9.61,
          "priceAvg30d": 27.84
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.6,
          "priceAvg30d": 27.03
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.6,
          "priceAvg30d": 25.16
        }
      ],
      "avg": 15.98,
      "max": 31.78,
      "maxBlock": 1,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 23.81,
      "spreadLowAvg": 4.87,
      "spreadHighAvg": 28.68,
      "avg30d": 24.26,
      "spread30dAvg": 21.69,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 31.78,
          "priceAvg30d": 26.56
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.27,
          "priceAvg30d": 26.01
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 30.51,
          "priceAvg30d": 26.27
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.29,
          "priceAvg30d": 25.99
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 30.29,
          "priceAvg30d": 26.06
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.45,
          "priceAvg30d": 26.06
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.53,
          "priceAvg30d": 26.33
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.81,
          "priceAvg30d": 26.37
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.53,
          "priceAvg30d": 26.61
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.92,
          "priceAvg30d": 26.7
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.92,
          "priceAvg30d": 26.99
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.78,
          "priceAvg30d": 27.33
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.75,
          "priceAvg30d": 27.05
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 29.72,
          "priceAvg30d": 25.88
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.71,
          "priceAvg30d": 25.2
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.91,
          "priceAvg30d": 24.54
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 23.0,
          "priceAvg30d": 23.24
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.63,
          "priceAvg30d": 23.33
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 16.68,
          "priceAvg30d": 22.44
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.61,
          "priceAvg30d": 21.61
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.19,
          "priceAvg30d": 20.1
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.04,
          "priceAvg30d": 19.73
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.11,
          "priceAvg30d": 19.99
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.6,
          "priceAvg30d": 20.27
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 13.04,
          "priceAvg30d": 19.23
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 20.99,
          "priceAvg30d": 20.11
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 26.94,
          "priceAvg30d": 21.72
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.55,
          "priceAvg30d": 24.61
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.0,
          "priceAvg30d": 26.28
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.39,
          "priceAvg30d": 28.43
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.8,
          "priceAvg30d": 28.49
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 29.28,
          "priceAvg30d": 32.44
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.47,
          "priceAvg30d": 35.3
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 33.03,
          "priceAvg30d": 37.24
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.3,
          "priceAvg30d": 36.5
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.92,
          "priceAvg30d": 36.64
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.29,
          "priceAvg30d": 34.69
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 30.95,
          "priceAvg30d": 34.16
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.96,
          "priceAvg30d": 32.76
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.3,
          "priceAvg30d": 31.07
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.0,
          "priceAvg30d": 29.71
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.99,
          "priceAvg30d": 28.39
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.91,
          "priceAvg30d": 27.9
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.02,
          "priceAvg30d": 28.79
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 30.47,
          "priceAvg30d": 29.76
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 30.29,
          "priceAvg30d": 28.35
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.03,
          "priceAvg30d": 27.73
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.71,
          "priceAvg30d": 26.28
        }
      ],
      "avg": 26.85,
      "max": 33.03,
      "maxBlock": 34,
      "min": 11.04,
      "minBlock": 22,
      "spread3h": 17.64,
      "spreadLowAvg": 12.54,
      "spreadHighAvg": 30.18,
      "avg30d": 27.03,
      "spread30dAvg": 14.71,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.91,
          "priceAvg30d": 25.72
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.27,
          "priceAvg30d": 25.05
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 30.51,
          "priceAvg30d": 24.89
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.29,
          "priceAvg30d": 24.77
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 30.29,
          "priceAvg30d": 24.88
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.45,
          "priceAvg30d": 25.29
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.53,
          "priceAvg30d": 25.64
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.81,
          "priceAvg30d": 25.88
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.53,
          "priceAvg30d": 26.06
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.92,
          "priceAvg30d": 26.28
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.92,
          "priceAvg30d": 26.52
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.78,
          "priceAvg30d": 26.75
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.75,
          "priceAvg30d": 26.41
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 29.72,
          "priceAvg30d": 25.13
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.42,
          "priceAvg30d": 23.6
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.04,
          "priceAvg30d": 21.84
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.13,
          "priceAvg30d": 20.47
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.97,
          "priceAvg30d": 21.09
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 20.78
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.51,
          "priceAvg30d": 19.74
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 7.9,
          "priceAvg30d": 17.81
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 6.0,
          "priceAvg30d": 17.5
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 4.0,
          "priceAvg30d": 17.34
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.0,
          "priceAvg30d": 17.2
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.51,
          "priceAvg30d": 14.58
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 7.49,
          "priceAvg30d": 15.29
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 3.0,
          "priceAvg30d": 19.0
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 22.54
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.5,
          "priceAvg30d": 24.16
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.03,
          "priceAvg30d": 25.93
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.0,
          "priceAvg30d": 27.46
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.3,
          "priceAvg30d": 31.76
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 28.67,
          "priceAvg30d": 34.39
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 28.67,
          "priceAvg30d": 35.68
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.51,
          "priceAvg30d": 35.16
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.55,
          "priceAvg30d": 35.2
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.47,
          "priceAvg30d": 33.78
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.48,
          "priceAvg30d": 32.96
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.48,
          "priceAvg30d": 32.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.65,
          "priceAvg30d": 30.35
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.68,
          "priceAvg30d": 28.86
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.35,
          "priceAvg30d": 27.78
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.47,
          "priceAvg30d": 27.22
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.35,
          "priceAvg30d": 27.2
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.27,
          "priceAvg30d": 28.24
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.44,
          "priceAvg30d": 27.59
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.51,
          "priceAvg30d": 27.41
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.62,
          "priceAvg30d": 26.22
        }
      ],
      "avg": 22.08,
      "max": 30.92,
      "maxBlock": 10,
      "min": 2.5,
      "minBlock": 19,
      "spread3h": 20.8,
      "spreadLowAvg": 9.92,
      "spreadHighAvg": 30.72,
      "avg30d": 25.57,
      "spread30dAvg": 17.74,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.25,
          "priceAvg30d": 15.38
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 14.98
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.28,
          "priceAvg30d": 14.44
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 17.3,
          "priceAvg30d": 13.6
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.95,
          "priceAvg30d": 14.69
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.58,
          "priceAvg30d": 15.96
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.0,
          "priceAvg30d": 16.92
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.3,
          "priceAvg30d": 18.56
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.5,
          "priceAvg30d": 18.53
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.3,
          "priceAvg30d": 20.08
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.9,
          "priceAvg30d": 19.54
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.58,
          "priceAvg30d": 19.09
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.94,
          "priceAvg30d": 18.93
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.58,
          "priceAvg30d": 17.57
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.42,
          "priceAvg30d": 16.5
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.04,
          "priceAvg30d": 15.13
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.13,
          "priceAvg30d": 17.04
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.97,
          "priceAvg30d": 18.34
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 19.1
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.51,
          "priceAvg30d": 18.3
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 7.9,
          "priceAvg30d": 16.75
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 6.0,
          "priceAvg30d": 16.37
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 4.0,
          "priceAvg30d": 16.52
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.0,
          "priceAvg30d": 16.76
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.51,
          "priceAvg30d": 12.92
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 7.49,
          "priceAvg30d": 13.23
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 3.0,
          "priceAvg30d": 17.15
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 20.56
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.5,
          "priceAvg30d": 21.33
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.03,
          "priceAvg30d": 22.83
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.0,
          "priceAvg30d": 23.73
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.3,
          "priceAvg30d": 27.07
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 20.58,
          "priceAvg30d": 27.68
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 16.62,
          "priceAvg30d": 29.55
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 14.3,
          "priceAvg30d": 27.84
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.27,
          "priceAvg30d": 27.99
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 15.0,
          "priceAvg30d": 27.02
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 14.29,
          "priceAvg30d": 27.14
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 15.54,
          "priceAvg30d": 26.52
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.0,
          "priceAvg30d": 24.52
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.67,
          "priceAvg30d": 24.46
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.67,
          "priceAvg30d": 23.26
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.62,
          "priceAvg30d": 22.76
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.67,
          "priceAvg30d": 21.86
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.67,
          "priceAvg30d": 21.02
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.28,
          "priceAvg30d": 19.18
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.81,
          "priceAvg30d": 19.34
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.08,
          "priceAvg30d": 15.27
        }
      ],
      "avg": 14.74,
      "max": 28.42,
      "maxBlock": 15,
      "min": 2.5,
      "minBlock": 19,
      "spread3h": 6.45,
      "spreadLowAvg": 9.92,
      "spreadHighAvg": 16.37,
      "avg30d": 19.86,
      "spread30dAvg": 15.07,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.25,
          "priceAvg30d": 15.13
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 14.87
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.28,
          "priceAvg30d": 14.34
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 17.3,
          "priceAvg30d": 13.5
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.95,
          "priceAvg30d": 14.12
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.58,
          "priceAvg30d": 15.59
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.0,
          "priceAvg30d": 16.58
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.3,
          "priceAvg30d": 18.13
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.5,
          "priceAvg30d": 18.07
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.3,
          "priceAvg30d": 19.44
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.9,
          "priceAvg30d": 18.97
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.58,
          "priceAvg30d": 18.62
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.94,
          "priceAvg30d": 18.86
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.58,
          "priceAvg30d": 17.5
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.42,
          "priceAvg30d": 16.05
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.04,
          "priceAvg30d": 14.53
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.13,
          "priceAvg30d": 16.94
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.97,
          "priceAvg30d": 18.33
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 19.08
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.51,
          "priceAvg30d": 18.3
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 7.9,
          "priceAvg30d": 16.71
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 6.0,
          "priceAvg30d": 16.32
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 4.0,
          "priceAvg30d": 16.46
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.0,
          "priceAvg30d": 16.71
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.51,
          "priceAvg30d": 12.92
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 7.49,
          "priceAvg30d": 13.23
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 3.0,
          "priceAvg30d": 17.15
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 20.55
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.5,
          "priceAvg30d": 20.91
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.03,
          "priceAvg30d": 22.66
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.0,
          "priceAvg30d": 23.55
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.3,
          "priceAvg30d": 27.03
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 20.58,
          "priceAvg30d": 27.68
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 16.62,
          "priceAvg30d": 29.55
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 14.3,
          "priceAvg30d": 27.84
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.27,
          "priceAvg30d": 27.65
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 15.0,
          "priceAvg30d": 27.02
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 14.29,
          "priceAvg30d": 26.7
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 15.54,
          "priceAvg30d": 26.18
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.0,
          "priceAvg30d": 24.34
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.67,
          "priceAvg30d": 24.27
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.67,
          "priceAvg30d": 23.1
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.62,
          "priceAvg30d": 22.61
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.67,
          "priceAvg30d": 21.61
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.67,
          "priceAvg30d": 20.79
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.28,
          "priceAvg30d": 18.93
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.81,
          "priceAvg30d": 19.17
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.08,
          "priceAvg30d": 15.15
        }
      ],
      "avg": 14.74,
      "max": 28.42,
      "maxBlock": 15,
      "min": 2.5,
      "minBlock": 19,
      "spread3h": 6.45,
      "spreadLowAvg": 9.92,
      "spreadHighAvg": 16.37,
      "avg30d": 19.66,
      "spread30dAvg": 14.78,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.25,
          "priceAvg30d": 14.55
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 14.87
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.28,
          "priceAvg30d": 13.93
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 17.3,
          "priceAvg30d": 13.04
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.95,
          "priceAvg30d": 13.22
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.58,
          "priceAvg30d": 14.52
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.0,
          "priceAvg30d": 15.21
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.0,
          "priceAvg30d": 17.17
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.5,
          "priceAvg30d": 17.94
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.3,
          "priceAvg30d": 19.23
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.9,
          "priceAvg30d": 18.95
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.58,
          "priceAvg30d": 18.61
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.94,
          "priceAvg30d": 18.79
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.01,
          "priceAvg30d": 17.42
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.52,
          "priceAvg30d": 13.27
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.99,
          "priceAvg30d": 11.15
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.75,
          "priceAvg30d": 11.45
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.36,
          "priceAvg30d": 11.53
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 10.47
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 9.69
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 8.7
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 8.14
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 7.93
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 8.16
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.76
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.69
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 8.48
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 9.46
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 11.34
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 2.5,
          "priceAvg30d": 12.65
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.99,
          "priceAvg30d": 13.46
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.14,
          "priceAvg30d": 16.67
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 9.99,
          "priceAvg30d": 20.43
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 16.62,
          "priceAvg30d": 24.29
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 14.3,
          "priceAvg30d": 24.36
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.27,
          "priceAvg30d": 25.02
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 15.0,
          "priceAvg30d": 24.07
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 14.29,
          "priceAvg30d": 23.48
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 15.54,
          "priceAvg30d": 23.29
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.0,
          "priceAvg30d": 22.16
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.67,
          "priceAvg30d": 22.37
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.67,
          "priceAvg30d": 21.66
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.62,
          "priceAvg30d": 21.17
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.67,
          "priceAvg30d": 20.03
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.67,
          "priceAvg30d": 19.69
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.28,
          "priceAvg30d": 17.68
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.81,
          "priceAvg30d": 17.95
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.08,
          "priceAvg30d": 14.11
        }
      ],
      "avg": 12.38,
      "max": 22.5,
      "maxBlock": 9,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 18.04,
      "spreadLowAvg": 3.52,
      "spreadHighAvg": 21.56,
      "avg30d": 15.73,
      "spread30dAvg": 14.84,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.07,
          "priceAvg30d": 11.66
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.0,
          "priceAvg30d": 11.07
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.8,
          "priceAvg30d": 10.61
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.0,
          "priceAvg30d": 10.25
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.07,
          "priceAvg30d": 10.26
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.07,
          "priceAvg30d": 10.41
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.0,
          "priceAvg30d": 10.23
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.0,
          "priceAvg30d": 12.19
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.5,
          "priceAvg30d": 12.75
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.3,
          "priceAvg30d": 14.08
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.9,
          "priceAvg30d": 14.33
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.58,
          "priceAvg30d": 14.2
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.94,
          "priceAvg30d": 13.86
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.07,
          "priceAvg30d": 12.25
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.07,
          "priceAvg30d": 9.25
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.43,
          "priceAvg30d": 8.97
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.75,
          "priceAvg30d": 9.77
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.36,
          "priceAvg30d": 9.61
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 8.55
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 7.61
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 6.35
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 5.45
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 5.26
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 5.51
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 4.5
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 4.74
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 6.81
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 7.48
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 9.18
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 2.5,
          "priceAvg30d": 10.11
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.43,
          "priceAvg30d": 10.26
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.14,
          "priceAvg30d": 11.43
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.45,
          "priceAvg30d": 12.79
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 16.62,
          "priceAvg30d": 16.57
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 14.3,
          "priceAvg30d": 17.97
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.27,
          "priceAvg30d": 18.51
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 15.0,
          "priceAvg30d": 18.12
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 14.29,
          "priceAvg30d": 17.49
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 15.54,
          "priceAvg30d": 16.5
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.0,
          "priceAvg30d": 15.55
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.67,
          "priceAvg30d": 15.82
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.67,
          "priceAvg30d": 14.84
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.62,
          "priceAvg30d": 15.21
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.67,
          "priceAvg30d": 13.58
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.67,
          "priceAvg30d": 12.82
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.28,
          "priceAvg30d": 11.87
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.81,
          "priceAvg30d": 12.45
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.08,
          "priceAvg30d": 10.31
        }
      ],
      "avg": 11.44,
      "max": 22.5,
      "maxBlock": 9,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 16.79,
      "spreadLowAvg": 3.52,
      "spreadHighAvg": 20.31,
      "avg30d": 11.45,
      "spread30dAvg": 12.88,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.25,
          "priceAvg30d": 14.55
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 14.43
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.28,
          "priceAvg30d": 13.45
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 17.3,
          "priceAvg30d": 12.82
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.95,
          "priceAvg30d": 12.92
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.58,
          "priceAvg30d": 14.3
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.0,
          "priceAvg30d": 15.21
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.0,
          "priceAvg30d": 17.17
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.5,
          "priceAvg30d": 17.94
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.3,
          "priceAvg30d": 19.23
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.9,
          "priceAvg30d": 18.95
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.58,
          "priceAvg30d": 18.61
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.94,
          "priceAvg30d": 18.79
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.01,
          "priceAvg30d": 17.42
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.52,
          "priceAvg30d": 13.27
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.99,
          "priceAvg30d": 11.15
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.75,
          "priceAvg30d": 10.89
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.36,
          "priceAvg30d": 10.02
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.05,
          "priceAvg30d": 8.47
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 7.38
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 6.78
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.28
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 6.03
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 5.82
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.11
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.21
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 6.31
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 7.76
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 9.33
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 2.5,
          "priceAvg30d": 11.4
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.99,
          "priceAvg30d": 13.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.14,
          "priceAvg30d": 16.08
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 9.99,
          "priceAvg30d": 20.43
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 16.62,
          "priceAvg30d": 24.29
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 14.3,
          "priceAvg30d": 24.36
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.27,
          "priceAvg30d": 25.02
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 15.0,
          "priceAvg30d": 24.07
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 14.29,
          "priceAvg30d": 23.48
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 15.54,
          "priceAvg30d": 23.29
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.0,
          "priceAvg30d": 22.16
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.67,
          "priceAvg30d": 22.37
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.67,
          "priceAvg30d": 21.66
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.62,
          "priceAvg30d": 21.17
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.67,
          "priceAvg30d": 20.03
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.67,
          "priceAvg30d": 19.69
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.28,
          "priceAvg30d": 17.68
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.81,
          "priceAvg30d": 17.95
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.08,
          "priceAvg30d": 14.11
        }
      ],
      "avg": 12.36,
      "max": 22.5,
      "maxBlock": 9,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 18.2,
      "spreadLowAvg": 3.36,
      "spreadHighAvg": 21.56,
      "avg30d": 15.16,
      "spread30dAvg": 15.94,
      "historyDays": 30
    }
  }
};
