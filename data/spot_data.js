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
  "targetDate": "2026-10-21",
  "fetchedAt": "2026-10-21T11:31:42+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 27.43,
        "priceAvg30d": 21.3
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 27.0,
        "priceAvg30d": 19.75
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 26.98,
        "priceAvg30d": 18.99
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 26.78,
        "priceAvg30d": 18.54
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 26.78,
        "priceAvg30d": 18.39
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 26.79,
        "priceAvg30d": 19.16
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 27.03,
        "priceAvg30d": 19.91
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 27.42,
        "priceAvg30d": 20.71
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 27.19,
        "priceAvg30d": 21.36
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 27.47,
        "priceAvg30d": 22.18
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 28.02,
        "priceAvg30d": 22.83
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 27.79,
        "priceAvg30d": 22.65
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 28.02,
        "priceAvg30d": 21.95
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 27.48,
        "priceAvg30d": 19.37
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 27.0,
        "priceAvg30d": 16.1
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 26.89,
        "priceAvg30d": 14.24
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 28.13,
        "priceAvg30d": 13.93
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 29.52,
        "priceAvg30d": 13.64
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 29.53,
        "priceAvg30d": 13.01
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 28.55,
        "priceAvg30d": 12.23
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 27.09,
        "priceAvg30d": 11.31
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 27.37,
        "priceAvg30d": 10.73
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 26.77,
        "priceAvg30d": 10.51
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 26.57,
        "priceAvg30d": 10.26
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 24.67,
        "priceAvg30d": 8.04
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 25.2,
        "priceAvg30d": 8.84
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 29.49,
        "priceAvg30d": 11.41
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 36.81,
        "priceAvg30d": 13.99
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 37.76,
        "priceAvg30d": 14.91
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 38.51,
        "priceAvg30d": 18.62
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 39.83,
        "priceAvg30d": 19.87
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 44.13,
        "priceAvg30d": 24.27
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 46.0,
        "priceAvg30d": 27.73
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 45.58,
        "priceAvg30d": 30.43
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 46.45,
        "priceAvg30d": 29.98
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 44.17,
        "priceAvg30d": 30.47
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 39.83,
        "priceAvg30d": 29.41
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 39.48,
        "priceAvg30d": 28.57
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 39.83,
        "priceAvg30d": 27.43
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 36.53,
        "priceAvg30d": 25.73
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 31.17,
        "priceAvg30d": 25.04
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 29.53,
        "priceAvg30d": 24.21
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 28.3,
        "priceAvg30d": 23.66
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 26.96,
        "priceAvg30d": 23.97
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 26.62,
        "priceAvg30d": 24.11
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 26.62,
        "priceAvg30d": 23.21
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 26.36,
        "priceAvg30d": 23.02
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 25.0,
        "priceAvg30d": 21.27
      }
    ],
    "avg": 31.13,
    "max": 46.45,
    "maxBlock": 35,
    "min": 24.67,
    "minBlock": 25,
    "spread3h": 14.5,
    "spreadLowAvg": 28.7,
    "spreadHighAvg": 43.2,
    "avg30d": 19.82,
    "spread30dAvg": 19.09,
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
          "price": 19.75,
          "priceAvg30d": 17.59
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.81,
          "priceAvg30d": 15.76
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.02,
          "priceAvg30d": 16.25
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 21.55,
          "priceAvg30d": 16.23
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.25,
          "priceAvg30d": 16.78
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.25,
          "priceAvg30d": 18.43
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.02,
          "priceAvg30d": 19.57
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.02,
          "priceAvg30d": 20.13
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.02,
          "priceAvg30d": 20.19
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.25,
          "priceAvg30d": 20.3
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.25,
          "priceAvg30d": 22.44
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.25,
          "priceAvg30d": 22.72
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.83,
          "priceAvg30d": 18.85
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 28.02,
          "priceAvg30d": 16.04
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.02,
          "priceAvg30d": 13.12
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 28.02,
          "priceAvg30d": 10.77
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 29.12,
          "priceAvg30d": 9.51
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.16,
          "priceAvg30d": 8.33
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.47,
          "priceAvg30d": 7.28
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.49,
          "priceAvg30d": 6.15
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 31.29,
          "priceAvg30d": 5.55
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 31.29,
          "priceAvg30d": 5.0
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 30.97,
          "priceAvg30d": 5.26
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 40.0,
          "priceAvg30d": 5.2
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 38.35,
          "priceAvg30d": 4.58
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 26.36,
          "priceAvg30d": 4.61
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 31.49,
          "priceAvg30d": 5.79
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 37.57,
          "priceAvg30d": 7.39
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 40.0,
          "priceAvg30d": 9.59
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 39.83,
          "priceAvg30d": 12.87
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.0,
          "priceAvg30d": 15.31
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 44.13,
          "priceAvg30d": 21.01
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 39.51,
          "priceAvg30d": 28.38
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.0,
          "priceAvg30d": 32.35
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.8,
          "priceAvg30d": 30.89
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.25,
          "priceAvg30d": 30.52
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.25,
          "priceAvg30d": 28.55
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 10.86,
          "priceAvg30d": 29.29
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 34.92,
          "priceAvg30d": 28.27
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.08,
          "priceAvg30d": 27.5
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.25,
          "priceAvg30d": 26.02
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.25,
          "priceAvg30d": 25.03
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.25,
          "priceAvg30d": 24.02
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.25,
          "priceAvg30d": 24.55
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.25,
          "priceAvg30d": 24.14
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.25,
          "priceAvg30d": 22.19
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.7,
          "priceAvg30d": 21.88
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.72,
          "priceAvg30d": 19.04
        }
      ],
      "avg": 26.66,
      "max": 44.13,
      "maxBlock": 32,
      "min": 9.72,
      "minBlock": 48,
      "spread3h": 23.64,
      "spreadLowAvg": 13.55,
      "spreadHighAvg": 37.19,
      "avg30d": 17.53,
      "spread30dAvg": 22.04,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.07,
          "priceAvg30d": 23.43
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.02,
          "priceAvg30d": 22.55
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.02,
          "priceAvg30d": 22.4
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.02,
          "priceAvg30d": 22.25
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.02,
          "priceAvg30d": 22.15
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.02,
          "priceAvg30d": 22.17
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.02,
          "priceAvg30d": 22.84
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.02,
          "priceAvg30d": 23.04
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.02,
          "priceAvg30d": 23.06
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.02,
          "priceAvg30d": 23.22
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.06,
          "priceAvg30d": 23.43
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.02,
          "priceAvg30d": 23.46
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 28.13,
          "priceAvg30d": 22.51
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 28.02,
          "priceAvg30d": 20.88
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.02,
          "priceAvg30d": 17.23
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 28.02,
          "priceAvg30d": 14.02
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 29.12,
          "priceAvg30d": 11.95
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.16,
          "priceAvg30d": 9.78
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.47,
          "priceAvg30d": 9.1
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.49,
          "priceAvg30d": 7.85
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 29.53,
          "priceAvg30d": 7.02
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 29.53,
          "priceAvg30d": 6.5
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 29.5,
          "priceAvg30d": 6.45
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 28.13,
          "priceAvg30d": 6.48
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 26.0,
          "priceAvg30d": 6.19
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 26.36,
          "priceAvg30d": 6.65
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 31.49,
          "priceAvg30d": 8.6
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 37.57,
          "priceAvg30d": 10.45
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 38.5,
          "priceAvg30d": 12.8
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 39.83,
          "priceAvg30d": 16.27
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.0,
          "priceAvg30d": 19.22
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 44.13,
          "priceAvg30d": 24.93
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 46.0,
          "priceAvg30d": 30.09
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 50.01,
          "priceAvg30d": 33.79
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 50.0,
          "priceAvg30d": 33.09
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 44.17,
          "priceAvg30d": 33.59
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.83,
          "priceAvg30d": 31.88
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 39.83,
          "priceAvg30d": 31.49
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 30.47
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 37.9,
          "priceAvg30d": 28.35
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.53,
          "priceAvg30d": 26.99
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 35.0,
          "priceAvg30d": 26.07
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.67,
          "priceAvg30d": 25.49
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.31,
          "priceAvg30d": 26.9
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.13,
          "priceAvg30d": 26.5
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.02,
          "priceAvg30d": 25.62
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.7,
          "priceAvg30d": 24.76
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.21,
          "priceAvg30d": 22.86
        }
      ],
      "avg": 32.49,
      "max": 50.01,
      "maxBlock": 34,
      "min": 26.0,
      "minBlock": 25,
      "spread3h": 13.59,
      "spreadLowAvg": 30.43,
      "spreadHighAvg": 44.02,
      "avg30d": 20.35,
      "spread30dAvg": 22.92,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.07,
          "priceAvg30d": 24.92
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.02,
          "priceAvg30d": 24.1
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.02,
          "priceAvg30d": 23.95
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.02,
          "priceAvg30d": 23.9
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.02,
          "priceAvg30d": 23.85
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.02,
          "priceAvg30d": 24.03
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.02,
          "priceAvg30d": 24.45
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.02,
          "priceAvg30d": 24.72
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.02,
          "priceAvg30d": 24.84
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.02,
          "priceAvg30d": 25.06
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.06,
          "priceAvg30d": 25.17
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.02,
          "priceAvg30d": 25.22
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 28.13,
          "priceAvg30d": 24.8
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 28.02,
          "priceAvg30d": 23.67
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.02,
          "priceAvg30d": 22.8
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 28.02,
          "priceAvg30d": 22.27
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 29.12,
          "priceAvg30d": 21.09
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.16,
          "priceAvg30d": 21.24
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.47,
          "priceAvg30d": 20.78
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.49,
          "priceAvg30d": 20.27
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 29.53,
          "priceAvg30d": 18.35
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 29.53,
          "priceAvg30d": 17.92
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 29.5,
          "priceAvg30d": 18.05
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 28.13,
          "priceAvg30d": 18.13
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 26.0,
          "priceAvg30d": 16.72
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 26.36,
          "priceAvg30d": 18.11
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 31.49,
          "priceAvg30d": 19.3
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 37.57,
          "priceAvg30d": 22.33
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 38.5,
          "priceAvg30d": 24.21
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 39.83,
          "priceAvg30d": 26.87
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.0,
          "priceAvg30d": 26.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 44.13,
          "priceAvg30d": 29.68
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 46.0,
          "priceAvg30d": 33.5
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 50.01,
          "priceAvg30d": 36.12
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 50.0,
          "priceAvg30d": 34.81
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 44.17,
          "priceAvg30d": 35.43
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.83,
          "priceAvg30d": 34.01
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 39.83,
          "priceAvg30d": 33.6
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 31.99
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 37.9,
          "priceAvg30d": 29.74
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.53,
          "priceAvg30d": 28.2
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 35.0,
          "priceAvg30d": 27.2
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.67,
          "priceAvg30d": 26.44
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.31,
          "priceAvg30d": 27.65
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.13,
          "priceAvg30d": 28.16
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.02,
          "priceAvg30d": 27.28
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.7,
          "priceAvg30d": 26.91
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.21,
          "priceAvg30d": 25.19
        }
      ],
      "avg": 32.49,
      "max": 50.01,
      "maxBlock": 34,
      "min": 26.0,
      "minBlock": 25,
      "spread3h": 13.59,
      "spreadLowAvg": 30.43,
      "spreadHighAvg": 44.02,
      "avg30d": 25.27,
      "spread30dAvg": 15.69,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.8,
          "priceAvg30d": 24.36
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.48,
          "priceAvg30d": 23.45
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.8,
          "priceAvg30d": 23.31
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.81,
          "priceAvg30d": 22.99
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.82,
          "priceAvg30d": 23.01
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 27.1,
          "priceAvg30d": 23.23
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.12,
          "priceAvg30d": 23.78
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.49,
          "priceAvg30d": 24.08
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.5,
          "priceAvg30d": 24.26
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.47,
          "priceAvg30d": 24.59
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.51,
          "priceAvg30d": 24.76
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.79,
          "priceAvg30d": 24.8
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.53,
          "priceAvg30d": 24.43
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 27.48,
          "priceAvg30d": 23.12
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 25.85,
          "priceAvg30d": 21.67
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.11,
          "priceAvg30d": 20.12
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 29.12,
          "priceAvg30d": 18.78
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.16,
          "priceAvg30d": 19.43
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.47,
          "priceAvg30d": 19.44
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.49,
          "priceAvg30d": 18.67
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 29.53,
          "priceAvg30d": 17.14
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 29.53,
          "priceAvg30d": 16.85
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 29.5,
          "priceAvg30d": 16.74
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 28.52,
          "priceAvg30d": 16.64
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 26.0,
          "priceAvg30d": 14.07
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 26.36,
          "priceAvg30d": 14.84
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 31.49,
          "priceAvg30d": 17.81
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 37.76,
          "priceAvg30d": 20.91
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 38.5,
          "priceAvg30d": 22.28
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 40.0,
          "priceAvg30d": 24.03
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.0,
          "priceAvg30d": 25.16
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 44.13,
          "priceAvg30d": 28.79
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 45.0,
          "priceAvg30d": 31.8
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.17,
          "priceAvg30d": 34.1
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 46.45,
          "priceAvg30d": 33.41
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 44.17,
          "priceAvg30d": 33.68
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.83,
          "priceAvg30d": 32.52
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 39.83,
          "priceAvg30d": 31.47
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 30.4
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.0,
          "priceAvg30d": 29.08
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 31.3,
          "priceAvg30d": 28.02
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.0,
          "priceAvg30d": 26.97
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.6,
          "priceAvg30d": 26.39
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.31,
          "priceAvg30d": 26.82
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.39,
          "priceAvg30d": 27.66
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.28,
          "priceAvg30d": 26.85
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.7,
          "priceAvg30d": 26.98
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.04,
          "priceAvg30d": 25.28
        }
      ],
      "avg": 31.59,
      "max": 46.45,
      "maxBlock": 35,
      "min": 25.85,
      "minBlock": 15,
      "spread3h": 14.99,
      "spreadLowAvg": 28.03,
      "spreadHighAvg": 43.02,
      "avg30d": 24.15,
      "spread30dAvg": 17.3,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.76,
          "priceAvg30d": 12.74
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 12.59
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.0,
          "priceAvg30d": 12.62
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.49,
          "priceAvg30d": 12.14
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.25,
          "priceAvg30d": 12.74
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.5,
          "priceAvg30d": 13.74
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.87,
          "priceAvg30d": 14.45
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.5,
          "priceAvg30d": 15.75
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.04,
          "priceAvg30d": 15.53
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.0,
          "priceAvg30d": 16.93
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 23.27,
          "priceAvg30d": 16.67
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.3,
          "priceAvg30d": 16.47
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.27,
          "priceAvg30d": 16.57
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 21.7,
          "priceAvg30d": 14.52
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 21.7,
          "priceAvg30d": 12.72
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.11,
          "priceAvg30d": 11.13
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 29.12,
          "priceAvg30d": 12.98
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.16,
          "priceAvg30d": 14.12
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.47,
          "priceAvg30d": 15.65
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.49,
          "priceAvg30d": 15.04
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 29.53,
          "priceAvg30d": 14.05
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 29.53,
          "priceAvg30d": 13.74
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 29.5,
          "priceAvg30d": 13.82
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 28.52,
          "priceAvg30d": 13.87
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 26.0,
          "priceAvg30d": 10.29
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 26.36,
          "priceAvg30d": 10.75
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 31.49,
          "priceAvg30d": 13.65
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 37.76,
          "priceAvg30d": 16.82
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 38.5,
          "priceAvg30d": 16.68
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 40.0,
          "priceAvg30d": 18.35
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.0,
          "priceAvg30d": 18.88
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 44.13,
          "priceAvg30d": 21.08
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 45.0,
          "priceAvg30d": 21.97
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.17,
          "priceAvg30d": 23.81
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 46.45,
          "priceAvg30d": 22.17
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 44.17,
          "priceAvg30d": 23.29
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.83,
          "priceAvg30d": 21.94
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 39.83,
          "priceAvg30d": 22.31
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 21.11
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.0,
          "priceAvg30d": 19.81
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 31.3,
          "priceAvg30d": 20.22
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.0,
          "priceAvg30d": 19.2
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.6,
          "priceAvg30d": 19.07
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.31,
          "priceAvg30d": 18.21
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.39,
          "priceAvg30d": 17.96
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.28,
          "priceAvg30d": 16.16
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.7,
          "priceAvg30d": 15.76
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.04,
          "priceAvg30d": 12.59
        }
      ],
      "avg": 29.45,
      "max": 46.45,
      "maxBlock": 35,
      "min": 15.25,
      "minBlock": 5,
      "spread3h": 24.3,
      "spreadLowAvg": 18.73,
      "spreadHighAvg": 43.02,
      "avg30d": 16.31,
      "spread30dAvg": 11.89,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.76,
          "priceAvg30d": 12.41
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 12.47
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.0,
          "priceAvg30d": 12.53
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.49,
          "priceAvg30d": 12.04
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.25,
          "priceAvg30d": 12.17
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.5,
          "priceAvg30d": 13.37
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.87,
          "priceAvg30d": 14.11
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.5,
          "priceAvg30d": 15.32
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.04,
          "priceAvg30d": 15.06
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.0,
          "priceAvg30d": 16.29
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 23.27,
          "priceAvg30d": 16.1
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.3,
          "priceAvg30d": 15.99
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.27,
          "priceAvg30d": 16.5
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 21.7,
          "priceAvg30d": 14.41
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 21.7,
          "priceAvg30d": 12.27
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.11,
          "priceAvg30d": 10.37
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 29.12,
          "priceAvg30d": 12.32
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.16,
          "priceAvg30d": 13.39
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.47,
          "priceAvg30d": 15.11
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.49,
          "priceAvg30d": 14.61
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 29.53,
          "priceAvg30d": 13.64
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 29.53,
          "priceAvg30d": 13.37
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 29.5,
          "priceAvg30d": 13.48
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 28.52,
          "priceAvg30d": 13.47
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 26.0,
          "priceAvg30d": 9.86
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 26.36,
          "priceAvg30d": 10.35
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 31.49,
          "priceAvg30d": 13.31
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 37.76,
          "priceAvg30d": 16.72
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 38.5,
          "priceAvg30d": 16.11
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 40.0,
          "priceAvg30d": 18.15
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.0,
          "priceAvg30d": 18.54
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 44.13,
          "priceAvg30d": 20.97
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 45.0,
          "priceAvg30d": 21.97
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.17,
          "priceAvg30d": 23.81
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 46.45,
          "priceAvg30d": 22.17
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 44.17,
          "priceAvg30d": 22.95
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.83,
          "priceAvg30d": 21.94
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 39.83,
          "priceAvg30d": 21.87
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 20.77
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.0,
          "priceAvg30d": 19.63
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 31.3,
          "priceAvg30d": 20.03
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.0,
          "priceAvg30d": 19.05
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.6,
          "priceAvg30d": 18.92
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.31,
          "priceAvg30d": 17.96
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.39,
          "priceAvg30d": 17.73
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.28,
          "priceAvg30d": 15.91
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.7,
          "priceAvg30d": 15.59
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.04,
          "priceAvg30d": 12.47
        }
      ],
      "avg": 29.45,
      "max": 46.45,
      "maxBlock": 35,
      "min": 15.25,
      "minBlock": 5,
      "spread3h": 24.3,
      "spreadLowAvg": 18.73,
      "spreadHighAvg": 43.02,
      "avg30d": 15.99,
      "spread30dAvg": 12.01,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.0,
          "priceAvg30d": 12.41
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 12.47
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.0,
          "priceAvg30d": 12.37
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.49,
          "priceAvg30d": 11.87
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.25,
          "priceAvg30d": 11.68
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.5,
          "priceAvg30d": 12.84
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.87,
          "priceAvg30d": 13.31
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.5,
          "priceAvg30d": 14.65
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.04,
          "priceAvg30d": 14.87
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.0,
          "priceAvg30d": 16.08
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 23.27,
          "priceAvg30d": 16.1
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.3,
          "priceAvg30d": 15.95
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.27,
          "priceAvg30d": 16.5
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 21.7,
          "priceAvg30d": 14.25
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 16.5,
          "priceAvg30d": 11.04
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.82,
          "priceAvg30d": 9.34
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.73,
          "priceAvg30d": 9.28
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 12.73,
          "priceAvg30d": 9.78
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.73,
          "priceAvg30d": 8.72
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.62,
          "priceAvg30d": 7.92
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.74,
          "priceAvg30d": 8.22
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.75,
          "priceAvg30d": 7.44
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.5,
          "priceAvg30d": 7.44
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 28.52,
          "priceAvg30d": 7.15
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.74,
          "priceAvg30d": 6.1
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.75,
          "priceAvg30d": 5.96
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 15.25,
          "priceAvg30d": 8.04
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 15.25,
          "priceAvg30d": 9.04
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 15.25,
          "priceAvg30d": 9.91
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.87,
          "priceAvg30d": 10.57
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 20.85,
          "priceAvg30d": 11.88
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 18.0,
          "priceAvg30d": 14.42
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.0,
          "priceAvg30d": 16.77
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 28.56,
          "priceAvg30d": 20.96
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 21.69
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 39.8,
          "priceAvg30d": 22.54
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 24.52,
          "priceAvg30d": 21.38
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.52,
          "priceAvg30d": 21.33
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.52,
          "priceAvg30d": 20.65
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.52,
          "priceAvg30d": 19.63
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.15,
          "priceAvg30d": 19.88
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.04,
          "priceAvg30d": 18.97
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.12,
          "priceAvg30d": 18.73
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.04,
          "priceAvg30d": 17.67
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.9,
          "priceAvg30d": 17.41
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.12,
          "priceAvg30d": 15.66
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.18,
          "priceAvg30d": 15.41
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 13.64,
          "priceAvg30d": 12.24
        }
      ],
      "avg": 19.82,
      "max": 40.0,
      "maxBlock": 33,
      "min": 11.62,
      "minBlock": 20,
      "spread3h": 13.48,
      "spreadLowAvg": 12.86,
      "spreadHighAvg": 26.35,
      "avg30d": 13.72,
      "spread30dAvg": 13.59,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.98,
          "priceAvg30d": 10.9
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.37,
          "priceAvg30d": 10.64
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 8.33,
          "priceAvg30d": 10.75
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.24,
          "priceAvg30d": 10.41
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.33,
          "priceAvg30d": 10.15
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 8.22,
          "priceAvg30d": 10.74
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 5.01,
          "priceAvg30d": 11.06
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 8.14,
          "priceAvg30d": 12.18
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.17,
          "priceAvg30d": 12.12
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.26,
          "priceAvg30d": 13.4
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 8.31,
          "priceAvg30d": 13.36
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 8.31,
          "priceAvg30d": 13.18
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 8.33,
          "priceAvg30d": 13.41
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 8.26,
          "priceAvg30d": 11.12
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.17,
          "priceAvg30d": 9.09
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.8,
          "priceAvg30d": 8.33
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 8.28
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 9.01
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.02,
          "priceAvg30d": 7.98
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 6.95
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.29
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.7
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 6.35
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.72
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.89
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.84
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.5,
          "priceAvg30d": 7.56
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 7.3,
          "priceAvg30d": 8.15
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
          "price": 8.31,
          "priceAvg30d": 9.44
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.33,
          "priceAvg30d": 10.05
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.07,
          "priceAvg30d": 11.56
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 14.3,
          "priceAvg30d": 11.48
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 14.0,
          "priceAvg30d": 15.06
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.98,
          "priceAvg30d": 15.88
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 12.37,
          "priceAvg30d": 17.35
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 11.98,
          "priceAvg30d": 16.95
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 13.07,
          "priceAvg30d": 16.4
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 11.98,
          "priceAvg30d": 15.29
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 8.33,
          "priceAvg30d": 14.12
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 8.33,
          "priceAvg30d": 14.48
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 8.31,
          "priceAvg30d": 13.58
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 8.26,
          "priceAvg30d": 13.84
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 8.22,
          "priceAvg30d": 12.93
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 8.17,
          "priceAvg30d": 12.91
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 7.8,
          "priceAvg30d": 11.97
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 7.8,
          "priceAvg30d": 12.21
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 5.0,
          "priceAvg30d": 9.98
        }
      ],
      "avg": 7.22,
      "max": 14.3,
      "maxBlock": 33,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 10.44,
      "spreadLowAvg": 0.91,
      "spreadHighAvg": 11.34,
      "avg30d": 11.08,
      "spread30dAvg": 11.54,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.0,
          "priceAvg30d": 12.41
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 12.47
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 16.0,
          "priceAvg30d": 12.16
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.49,
          "priceAvg30d": 11.74
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.25,
          "priceAvg30d": 11.55
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.5,
          "priceAvg30d": 12.62
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.87,
          "priceAvg30d": 13.31
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.5,
          "priceAvg30d": 14.65
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.04,
          "priceAvg30d": 14.87
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.0,
          "priceAvg30d": 16.08
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 23.27,
          "priceAvg30d": 16.06
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.3,
          "priceAvg30d": 15.95
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.27,
          "priceAvg30d": 16.5
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 21.7,
          "priceAvg30d": 14.25
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 16.5,
          "priceAvg30d": 11.04
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.82,
          "priceAvg30d": 9.34
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.73,
          "priceAvg30d": 8.94
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 12.73,
          "priceAvg30d": 8.03
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.73,
          "priceAvg30d": 6.85
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.62,
          "priceAvg30d": 6.07
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.36,
          "priceAvg30d": 6.14
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.62,
          "priceAvg30d": 5.65
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.5,
          "priceAvg30d": 5.46
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.62,
          "priceAvg30d": 5.29
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.62,
          "priceAvg30d": 4.98
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.62,
          "priceAvg30d": 5.03
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 15.25,
          "priceAvg30d": 5.87
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 15.25,
          "priceAvg30d": 6.9
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 15.25,
          "priceAvg30d": 7.72
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.87,
          "priceAvg30d": 9.46
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 20.85,
          "priceAvg30d": 11.44
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 18.0,
          "priceAvg30d": 13.91
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.0,
          "priceAvg30d": 16.77
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 28.56,
          "priceAvg30d": 20.96
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 21.69
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 39.8,
          "priceAvg30d": 22.54
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 24.52,
          "priceAvg30d": 21.38
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.52,
          "priceAvg30d": 21.33
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.52,
          "priceAvg30d": 20.65
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.52,
          "priceAvg30d": 19.63
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.15,
          "priceAvg30d": 19.88
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.04,
          "priceAvg30d": 18.97
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.12,
          "priceAvg30d": 18.73
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 21.04,
          "priceAvg30d": 17.67
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.9,
          "priceAvg30d": 17.41
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.12,
          "priceAvg30d": 15.66
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.18,
          "priceAvg30d": 15.41
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 13.64,
          "priceAvg30d": 12.24
        }
      ],
      "avg": 19.39,
      "max": 40.0,
      "maxBlock": 33,
      "min": 11.62,
      "minBlock": 20,
      "spread3h": 13.73,
      "spreadLowAvg": 12.61,
      "spreadHighAvg": 26.35,
      "avg30d": 13.2,
      "spread30dAvg": 14.41,
      "historyDays": 30
    }
  }
};
