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
  "targetDate": "2026-10-19",
  "fetchedAt": "2026-10-19T11:24:36+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 24.11,
        "priceAvg30d": 20.77
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 22.31,
        "priceAvg30d": 19.26
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 21.61,
        "priceAvg30d": 18.49
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 22.12,
        "priceAvg30d": 17.98
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 23.37,
        "priceAvg30d": 17.76
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 23.56,
        "priceAvg30d": 18.61
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 23.91,
        "priceAvg30d": 19.35
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 24.2,
        "priceAvg30d": 20.23
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 25.52,
        "priceAvg30d": 20.88
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 26.18,
        "priceAvg30d": 21.73
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 26.49,
        "priceAvg30d": 22.37
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 26.67,
        "priceAvg30d": 22.08
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 26.64,
        "priceAvg30d": 21.17
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 26.67,
        "priceAvg30d": 18.48
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 26.62,
        "priceAvg30d": 15.06
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 26.16,
        "priceAvg30d": 13.16
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 24.85,
        "priceAvg30d": 12.9
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 26.64,
        "priceAvg30d": 12.48
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 26.67,
        "priceAvg30d": 11.84
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 26.67,
        "priceAvg30d": 11.07
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 26.32,
        "priceAvg30d": 10.18
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 26.64,
        "priceAvg30d": 9.57
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 26.67,
        "priceAvg30d": 9.33
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 27.7,
        "priceAvg30d": 9.03
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 26.13,
        "priceAvg30d": 6.94
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 26.64,
        "priceAvg30d": 7.74
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 31.51,
        "priceAvg30d": 10.01
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 36.99,
        "priceAvg30d": 12.32
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 37.76,
        "priceAvg30d": 13.31
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 37.95,
        "priceAvg30d": 17.03
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 37.95,
        "priceAvg30d": 18.26
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 37.95,
        "priceAvg30d": 22.57
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 44.09,
        "priceAvg30d": 25.89
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 44.01,
        "priceAvg30d": 28.73
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 40.84,
        "priceAvg30d": 28.55
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 40.43,
        "priceAvg30d": 29.16
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 37.95,
        "priceAvg30d": 28.36
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 37.21,
        "priceAvg30d": 27.6
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 35.48,
        "priceAvg30d": 26.57
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 30.18,
        "priceAvg30d": 25.16
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 30.18,
        "priceAvg30d": 24.44
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 27.85,
        "priceAvg30d": 23.77
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 27.9,
        "priceAvg30d": 23.18
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 33.24,
        "priceAvg30d": 23.35
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 33.03,
        "priceAvg30d": 23.47
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 32.51,
        "priceAvg30d": 22.42
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 32.03,
        "priceAvg30d": 22.33
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 26.9,
        "priceAvg30d": 20.55
      }
    ],
    "avg": 29.9,
    "max": 44.09,
    "maxBlock": 33,
    "min": 21.61,
    "minBlock": 3,
    "spread3h": 16.66,
    "spreadLowAvg": 23.19,
    "spreadHighAvg": 39.85,
    "avg30d": 18.86,
    "spread30dAvg": 18.75,
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
          "price": 10.56,
          "priceAvg30d": 17.16
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.23,
          "priceAvg30d": 15.02
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.88,
          "priceAvg30d": 15.56
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.87,
          "priceAvg30d": 15.56
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.8,
          "priceAvg30d": 16.43
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.89,
          "priceAvg30d": 18.02
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.97,
          "priceAvg30d": 19.05
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.0,
          "priceAvg30d": 19.33
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 15.0,
          "priceAvg30d": 19.09
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 14.1,
          "priceAvg30d": 19.09
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.99,
          "priceAvg30d": 19.85
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.99,
          "priceAvg30d": 19.89
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.87,
          "priceAvg30d": 17.23
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.98,
          "priceAvg30d": 15.35
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.82,
          "priceAvg30d": 12.51
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.98,
          "priceAvg30d": 10.25
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 16.69,
          "priceAvg30d": 8.94
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 12.92,
          "priceAvg30d": 8.14
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.67,
          "priceAvg30d": 6.45
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 20.0,
          "priceAvg30d": 5.73
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 18.49,
          "priceAvg30d": 5.23
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.96,
          "priceAvg30d": 4.95
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 14.81,
          "priceAvg30d": 5.23
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 16.22,
          "priceAvg30d": 5.13
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.79,
          "priceAvg30d": 4.93
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.77,
          "priceAvg30d": 4.81
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 14.34,
          "priceAvg30d": 5.64
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.96,
          "priceAvg30d": 7.17
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.37,
          "priceAvg30d": 8.76
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 33.08,
          "priceAvg30d": 11.14
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 43.06,
          "priceAvg30d": 13.75
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 37.95,
          "priceAvg30d": 19.56
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.09,
          "priceAvg30d": 25.71
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.01,
          "priceAvg30d": 29.75
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.5,
          "priceAvg30d": 28.24
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.0,
          "priceAvg30d": 28.93
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.95,
          "priceAvg30d": 27.21
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.99,
          "priceAvg30d": 27.83
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.48,
          "priceAvg30d": 27.1
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 31.9,
          "priceAvg30d": 26.14
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.01,
          "priceAvg30d": 24.59
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.0,
          "priceAvg30d": 23.75
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.55,
          "priceAvg30d": 22.86
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 36.99,
          "priceAvg30d": 23.35
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 37.53,
          "priceAvg30d": 21.9
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 36.08,
          "priceAvg30d": 20.58
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 40.0,
          "priceAvg30d": 19.9
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.13,
          "priceAvg30d": 17.9
        }
      ],
      "avg": 22.65,
      "max": 44.09,
      "maxBlock": 33,
      "min": 10.56,
      "minBlock": 1,
      "spread3h": 28.72,
      "spreadLowAvg": 11.04,
      "spreadHighAvg": 39.77,
      "avg30d": 16.47,
      "spread30dAvg": 20.61,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.58,
          "priceAvg30d": 22.64
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 25.09,
          "priceAvg30d": 21.57
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.36,
          "priceAvg30d": 21.43
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.14,
          "priceAvg30d": 21.24
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.64,
          "priceAvg30d": 21.11
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.64,
          "priceAvg30d": 21.13
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 26.64,
          "priceAvg30d": 21.87
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.64,
          "priceAvg30d": 22.04
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.67,
          "priceAvg30d": 21.94
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.67,
          "priceAvg30d": 22.1
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 26.67,
          "priceAvg30d": 22.27
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.32,
          "priceAvg30d": 22.29
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.09,
          "priceAvg30d": 21.34
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 27.08,
          "priceAvg30d": 19.69
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 27.09,
          "priceAvg30d": 16.04
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.82,
          "priceAvg30d": 12.84
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.64,
          "priceAvg30d": 10.87
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.67,
          "priceAvg30d": 8.49
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.67,
          "priceAvg30d": 7.67
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.67,
          "priceAvg30d": 6.39
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 26.64,
          "priceAvg30d": 5.59
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 26.64,
          "priceAvg30d": 5.08
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 26.67,
          "priceAvg30d": 4.98
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 26.96,
          "priceAvg30d": 4.97
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 26.67,
          "priceAvg30d": 4.87
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 27.52,
          "priceAvg30d": 5.28
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.9,
          "priceAvg30d": 6.72
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 37.95,
          "priceAvg30d": 8.51
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 40.0,
          "priceAvg30d": 10.47
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 44.19,
          "priceAvg30d": 13.82
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 43.06,
          "priceAvg30d": 17.44
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 37.95,
          "priceAvg30d": 23.67
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.09,
          "priceAvg30d": 28.42
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.01,
          "priceAvg30d": 32.19
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.5,
          "priceAvg30d": 31.63
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.0,
          "priceAvg30d": 32.24
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.95,
          "priceAvg30d": 30.66
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.99,
          "priceAvg30d": 30.39
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.48,
          "priceAvg30d": 29.55
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 31.9,
          "priceAvg30d": 27.65
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.01,
          "priceAvg30d": 26.22
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.85,
          "priceAvg30d": 25.37
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.9,
          "priceAvg30d": 24.93
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 36.99,
          "priceAvg30d": 26.25
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 37.53,
          "priceAvg30d": 24.95
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 36.08,
          "priceAvg30d": 24.13
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.49,
          "priceAvg30d": 23.46
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.13,
          "priceAvg30d": 21.72
        }
      ],
      "avg": 31.27,
      "max": 44.19,
      "maxBlock": 30,
      "min": 24.36,
      "minBlock": 3,
      "spread3h": 14.42,
      "spreadLowAvg": 25.73,
      "spreadHighAvg": 40.16,
      "avg30d": 19.09,
      "spread30dAvg": 22.64,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.58,
          "priceAvg30d": 24.64
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 25.09,
          "priceAvg30d": 23.8
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.36,
          "priceAvg30d": 23.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.14,
          "priceAvg30d": 23.53
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.64,
          "priceAvg30d": 23.41
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.64,
          "priceAvg30d": 23.63
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 26.64,
          "priceAvg30d": 24.05
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.64,
          "priceAvg30d": 24.36
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.67,
          "priceAvg30d": 24.46
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.67,
          "priceAvg30d": 24.68
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 26.67,
          "priceAvg30d": 24.77
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.32,
          "priceAvg30d": 24.79
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.09,
          "priceAvg30d": 24.3
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 27.08,
          "priceAvg30d": 23.1
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 27.09,
          "priceAvg30d": 22.15
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.82,
          "priceAvg30d": 21.71
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.64,
          "priceAvg30d": 20.39
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.67,
          "priceAvg30d": 20.61
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.67,
          "priceAvg30d": 20.06
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.67,
          "priceAvg30d": 19.65
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 26.64,
          "priceAvg30d": 17.82
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 26.64,
          "priceAvg30d": 17.45
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 26.67,
          "priceAvg30d": 17.54
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 26.96,
          "priceAvg30d": 17.55
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 26.67,
          "priceAvg30d": 16.37
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 27.52,
          "priceAvg30d": 17.72
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.9,
          "priceAvg30d": 18.17
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 37.95,
          "priceAvg30d": 21.1
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 40.0,
          "priceAvg30d": 22.72
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 44.19,
          "priceAvg30d": 25.32
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 43.06,
          "priceAvg30d": 24.51
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 37.95,
          "priceAvg30d": 28.47
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.09,
          "priceAvg30d": 31.97
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.01,
          "priceAvg30d": 34.62
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.5,
          "priceAvg30d": 33.6
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.0,
          "priceAvg30d": 34.29
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.95,
          "priceAvg30d": 33.05
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.99,
          "priceAvg30d": 32.7
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.48,
          "priceAvg30d": 31.26
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 31.9,
          "priceAvg30d": 29.3
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.01,
          "priceAvg30d": 27.75
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.85,
          "priceAvg30d": 26.91
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.9,
          "priceAvg30d": 26.21
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 36.99,
          "priceAvg30d": 27.14
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 37.53,
          "priceAvg30d": 27.64
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 36.08,
          "priceAvg30d": 26.81
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.49,
          "priceAvg30d": 26.58
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.13,
          "priceAvg30d": 24.94
        }
      ],
      "avg": 31.27,
      "max": 44.19,
      "maxBlock": 30,
      "min": 24.36,
      "minBlock": 3,
      "spread3h": 14.42,
      "spreadLowAvg": 25.73,
      "spreadHighAvg": 40.16,
      "avg30d": 24.61,
      "spread30dAvg": 15.04,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.81,
          "priceAvg30d": 24.12
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.14,
          "priceAvg30d": 23.32
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.95,
          "priceAvg30d": 23.2
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.73,
          "priceAvg30d": 22.95
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.52,
          "priceAvg30d": 22.92
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.96,
          "priceAvg30d": 23.13
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 24.03,
          "priceAvg30d": 23.56
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.2,
          "priceAvg30d": 23.87
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.52,
          "priceAvg30d": 23.99
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.33,
          "priceAvg30d": 24.29
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 26.61,
          "priceAvg30d": 24.45
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.32,
          "priceAvg30d": 24.39
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.09,
          "priceAvg30d": 23.96
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 27.08,
          "priceAvg30d": 22.6
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 27.09,
          "priceAvg30d": 21.02
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.82,
          "priceAvg30d": 19.23
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.17,
          "priceAvg30d": 17.89
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 32.51,
          "priceAvg30d": 18.2
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 33.5,
          "priceAvg30d": 18.05
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 35.0,
          "priceAvg30d": 17.23
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 33.48,
          "priceAvg30d": 15.78
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 37.76,
          "priceAvg30d": 15.36
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 37.76,
          "priceAvg30d": 15.21
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 37.76,
          "priceAvg30d": 15.07
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 33.49,
          "priceAvg30d": 12.83
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 33.49,
          "priceAvg30d": 13.58
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.9,
          "priceAvg30d": 16.24
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 37.95,
          "priceAvg30d": 19.47
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 40.0,
          "priceAvg30d": 20.73
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 44.19,
          "priceAvg30d": 22.52
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 43.06,
          "priceAvg30d": 23.66
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 37.95,
          "priceAvg30d": 27.58
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.09,
          "priceAvg30d": 30.46
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.01,
          "priceAvg30d": 32.76
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.5,
          "priceAvg30d": 32.21
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.0,
          "priceAvg30d": 32.54
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.95,
          "priceAvg30d": 31.54
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.99,
          "priceAvg30d": 30.57
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.48,
          "priceAvg30d": 29.66
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 31.9,
          "priceAvg30d": 28.64
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.01,
          "priceAvg30d": 27.57
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.85,
          "priceAvg30d": 26.68
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.6,
          "priceAvg30d": 26.2
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.35,
          "priceAvg30d": 26.59
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 33.03,
          "priceAvg30d": 27.26
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.3,
          "priceAvg30d": 26.54
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.29,
          "priceAvg30d": 26.67
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.05,
          "priceAvg30d": 25.04
        }
      ],
      "avg": 31.76,
      "max": 44.19,
      "maxBlock": 30,
      "min": 19.52,
      "minBlock": 5,
      "spread3h": 18.16,
      "spreadLowAvg": 22.0,
      "spreadHighAvg": 40.16,
      "avg30d": 23.36,
      "spread30dAvg": 16.79,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.7,
          "priceAvg30d": 12.01
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.87,
          "priceAvg30d": 11.94
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.76,
          "priceAvg30d": 12.03
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.23,
          "priceAvg30d": 11.77
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.75,
          "priceAvg30d": 12.26
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.76,
          "priceAvg30d": 13.08
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.76,
          "priceAvg30d": 13.96
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.87,
          "priceAvg30d": 15.12
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.0,
          "priceAvg30d": 14.97
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.33,
          "priceAvg30d": 16.19
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 26.61,
          "priceAvg30d": 16.01
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.0,
          "priceAvg30d": 16.02
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.87,
          "priceAvg30d": 16.37
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.0,
          "priceAvg30d": 13.87
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 20.0,
          "priceAvg30d": 11.88
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.7,
          "priceAvg30d": 9.95
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.17,
          "priceAvg30d": 11.69
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 32.51,
          "priceAvg30d": 12.49
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 33.5,
          "priceAvg30d": 13.86
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 35.0,
          "priceAvg30d": 13.2
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 33.48,
          "priceAvg30d": 12.36
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 37.76,
          "priceAvg30d": 11.94
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 37.76,
          "priceAvg30d": 11.98
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 37.76,
          "priceAvg30d": 11.9
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 33.49,
          "priceAvg30d": 8.57
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 33.49,
          "priceAvg30d": 9.06
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.9,
          "priceAvg30d": 11.66
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 37.95,
          "priceAvg30d": 14.89
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 40.0,
          "priceAvg30d": 14.5
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 44.19,
          "priceAvg30d": 16.19
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 43.06,
          "priceAvg30d": 16.74
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 37.95,
          "priceAvg30d": 19.0
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.09,
          "priceAvg30d": 19.67
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.01,
          "priceAvg30d": 21.49
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.5,
          "priceAvg30d": 20.3
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.0,
          "priceAvg30d": 21.61
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.95,
          "priceAvg30d": 20.46
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.99,
          "priceAvg30d": 20.92
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.48,
          "priceAvg30d": 19.84
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 31.9,
          "priceAvg30d": 18.76
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.01,
          "priceAvg30d": 19.2
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.85,
          "priceAvg30d": 18.39
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.6,
          "priceAvg30d": 18.36
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.35,
          "priceAvg30d": 17.3
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 23.27,
          "priceAvg30d": 17.3
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.76,
          "priceAvg30d": 15.51
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.76,
          "priceAvg30d": 15.28
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 13.82,
          "priceAvg30d": 12.02
        }
      ],
      "avg": 29.41,
      "max": 44.19,
      "maxBlock": 30,
      "min": 13.82,
      "minBlock": 48,
      "spread3h": 19.8,
      "spreadLowAvg": 20.36,
      "spreadHighAvg": 40.16,
      "avg30d": 15.08,
      "spread30dAvg": 10.7,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.7,
          "priceAvg30d": 11.69
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.87,
          "priceAvg30d": 11.83
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.76,
          "priceAvg30d": 11.93
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.23,
          "priceAvg30d": 11.68
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.75,
          "priceAvg30d": 11.69
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.76,
          "priceAvg30d": 12.71
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.76,
          "priceAvg30d": 13.61
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.87,
          "priceAvg30d": 14.69
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.0,
          "priceAvg30d": 14.51
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 21.7,
          "priceAvg30d": 15.7
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.7,
          "priceAvg30d": 15.61
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.0,
          "priceAvg30d": 15.55
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.87,
          "priceAvg30d": 16.3
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.0,
          "priceAvg30d": 13.76
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 20.0,
          "priceAvg30d": 11.43
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.7,
          "priceAvg30d": 9.19
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.17,
          "priceAvg30d": 11.03
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 32.51,
          "priceAvg30d": 11.76
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 33.5,
          "priceAvg30d": 13.32
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 35.0,
          "priceAvg30d": 12.76
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 33.48,
          "priceAvg30d": 11.95
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 37.76,
          "priceAvg30d": 11.57
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 37.76,
          "priceAvg30d": 11.64
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 37.76,
          "priceAvg30d": 11.5
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 33.49,
          "priceAvg30d": 8.14
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 33.49,
          "priceAvg30d": 8.66
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.9,
          "priceAvg30d": 11.32
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 37.95,
          "priceAvg30d": 14.79
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 40.0,
          "priceAvg30d": 13.93
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 44.19,
          "priceAvg30d": 16.0
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 43.06,
          "priceAvg30d": 16.4
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 37.95,
          "priceAvg30d": 18.9
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.09,
          "priceAvg30d": 19.67
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.01,
          "priceAvg30d": 21.49
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.5,
          "priceAvg30d": 20.3
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.0,
          "priceAvg30d": 21.27
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.95,
          "priceAvg30d": 20.46
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.99,
          "priceAvg30d": 20.48
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.48,
          "priceAvg30d": 19.5
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 31.9,
          "priceAvg30d": 18.58
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.01,
          "priceAvg30d": 19.02
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.85,
          "priceAvg30d": 18.23
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.6,
          "priceAvg30d": 18.2
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.35,
          "priceAvg30d": 17.05
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 23.27,
          "priceAvg30d": 17.06
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.76,
          "priceAvg30d": 15.27
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.76,
          "priceAvg30d": 15.11
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 13.82,
          "priceAvg30d": 11.89
        }
      ],
      "avg": 29.21,
      "max": 44.19,
      "maxBlock": 30,
      "min": 13.82,
      "minBlock": 48,
      "spread3h": 19.8,
      "spreadLowAvg": 20.36,
      "spreadHighAvg": 40.16,
      "avg30d": 14.77,
      "spread30dAvg": 10.82,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.7,
          "priceAvg30d": 11.69
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.87,
          "priceAvg30d": 11.83
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.76,
          "priceAvg30d": 11.77
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.23,
          "priceAvg30d": 11.5
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.75,
          "priceAvg30d": 11.2
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.76,
          "priceAvg30d": 12.18
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.76,
          "priceAvg30d": 12.88
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.87,
          "priceAvg30d": 14.17
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.0,
          "priceAvg30d": 14.32
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 21.7,
          "priceAvg30d": 15.48
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.7,
          "priceAvg30d": 15.61
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.0,
          "priceAvg30d": 15.51
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.87,
          "priceAvg30d": 16.3
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.0,
          "priceAvg30d": 13.65
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 20.0,
          "priceAvg30d": 10.55
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.7,
          "priceAvg30d": 8.62
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.05,
          "priceAvg30d": 8.49
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.07,
          "priceAvg30d": 8.39
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 15.69,
          "priceAvg30d": 7.52
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 15.69,
          "priceAvg30d": 6.72
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 15.68,
          "priceAvg30d": 7.34
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 15.69,
          "priceAvg30d": 6.84
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 15.69,
          "priceAvg30d": 6.86
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 15.69,
          "priceAvg30d": 6.47
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.69,
          "priceAvg30d": 5.61
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.69,
          "priceAvg30d": 5.54
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.07,
          "priceAvg30d": 6.97
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 8.02
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 37.51,
          "priceAvg30d": 8.5
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.5,
          "priceAvg30d": 9.57
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.0,
          "priceAvg30d": 10.85
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 37.95,
          "priceAvg30d": 13.08
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.09,
          "priceAvg30d": 14.62
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.01,
          "priceAvg30d": 18.65
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.5,
          "priceAvg30d": 19.82
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.0,
          "priceAvg30d": 20.86
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.95,
          "priceAvg30d": 20.0
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.99,
          "priceAvg30d": 20.0
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.48,
          "priceAvg30d": 19.38
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 31.9,
          "priceAvg30d": 18.58
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.01,
          "priceAvg30d": 18.87
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.85,
          "priceAvg30d": 18.15
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.6,
          "priceAvg30d": 18.16
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.35,
          "priceAvg30d": 16.96
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 23.27,
          "priceAvg30d": 16.98
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.76,
          "priceAvg30d": 15.27
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.76,
          "priceAvg30d": 15.11
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 13.82,
          "priceAvg30d": 11.89
        }
      ],
      "avg": 24.81,
      "max": 44.09,
      "maxBlock": 33,
      "min": 13.82,
      "minBlock": 48,
      "spread3h": 16.63,
      "spreadLowAvg": 20.36,
      "spreadHighAvg": 36.99,
      "avg30d": 12.86,
      "spread30dAvg": 12.82,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 5.0,
          "priceAvg30d": 11.11
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 2.0,
          "priceAvg30d": 10.98
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 2.0,
          "priceAvg30d": 11.15
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 2.0,
          "priceAvg30d": 10.9
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 2.0,
          "priceAvg30d": 10.54
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 0.02,
          "priceAvg30d": 11.13
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 2.9,
          "priceAvg30d": 11.37
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 5.0,
          "priceAvg30d": 12.43
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.14,
          "priceAvg30d": 12.27
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.22,
          "priceAvg30d": 13.64
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 8.22,
          "priceAvg30d": 13.74
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 8.22,
          "priceAvg30d": 13.53
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 5.0,
          "priceAvg30d": 14.11
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 3.0,
          "priceAvg30d": 11.49
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.26,
          "priceAvg30d": 9.16
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.7,
          "priceAvg30d": 7.78
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.05,
          "priceAvg30d": 7.5
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.07,
          "priceAvg30d": 7.61
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 15.69,
          "priceAvg30d": 6.78
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 15.69,
          "priceAvg30d": 5.75
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 15.68,
          "priceAvg30d": 6.41
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 15.69,
          "priceAvg30d": 6.1
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 15.69,
          "priceAvg30d": 5.77
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 15.69,
          "priceAvg30d": 6.04
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.69,
          "priceAvg30d": 5.4
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.69,
          "priceAvg30d": 5.42
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.07,
          "priceAvg30d": 6.49
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 7.13
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 37.51,
          "priceAvg30d": 7.53
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.5,
          "priceAvg30d": 8.44
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.0,
          "priceAvg30d": 9.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 14.27,
          "priceAvg30d": 11.02
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 3.0,
          "priceAvg30d": 11.63
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 8.37,
          "priceAvg30d": 14.59
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 8.35,
          "priceAvg30d": 15.66
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 8.35,
          "priceAvg30d": 17.1
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 11.67,
          "priceAvg30d": 16.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 8.37,
          "priceAvg30d": 16.57
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 8.31,
          "priceAvg30d": 15.7
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 8.22,
          "priceAvg30d": 14.44
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 8.26,
          "priceAvg30d": 14.83
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 8.22,
          "priceAvg30d": 14.0
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 8.26,
          "priceAvg30d": 14.27
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 8.22,
          "priceAvg30d": 13.36
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 8.21,
          "priceAvg30d": 13.4
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 8.23,
          "priceAvg30d": 12.32
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 8.31,
          "priceAvg30d": 12.64
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.31,
          "priceAvg30d": 10.04
        }
      ],
      "avg": 11.88,
      "max": 37.51,
      "maxBlock": 29,
      "min": 0.02,
      "minBlock": 6,
      "spread3h": 20.75,
      "spreadLowAvg": 3.67,
      "spreadHighAvg": 24.42,
      "avg30d": 10.94,
      "spread30dAvg": 10.61,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.7,
          "priceAvg30d": 11.69
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.87,
          "priceAvg30d": 11.83
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.76,
          "priceAvg30d": 11.77
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.23,
          "priceAvg30d": 11.5
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.75,
          "priceAvg30d": 11.2
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.76,
          "priceAvg30d": 12.18
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.76,
          "priceAvg30d": 12.88
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.87,
          "priceAvg30d": 14.17
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.0,
          "priceAvg30d": 14.32
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 21.7,
          "priceAvg30d": 15.48
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.7,
          "priceAvg30d": 15.56
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.0,
          "priceAvg30d": 15.51
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.87,
          "priceAvg30d": 16.3
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.0,
          "priceAvg30d": 13.65
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 20.0,
          "priceAvg30d": 10.55
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.7,
          "priceAvg30d": 8.62
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 22.15,
          "priceAvg30d": 8.32
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.82,
          "priceAvg30d": 7.74
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 13.47,
          "priceAvg30d": 6.58
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.81,
          "priceAvg30d": 5.81
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.63,
          "priceAvg30d": 5.78
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.63,
          "priceAvg30d": 5.28
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.1,
          "priceAvg30d": 5.08
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.81,
          "priceAvg30d": 4.92
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.63,
          "priceAvg30d": 4.57
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.63,
          "priceAvg30d": 4.66
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.1,
          "priceAvg30d": 5.49
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 13.64,
          "priceAvg30d": 6.49
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 14.0,
          "priceAvg30d": 7.48
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 25.0,
          "priceAvg30d": 8.78
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.0,
          "priceAvg30d": 10.41
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 37.95,
          "priceAvg30d": 12.58
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.09,
          "priceAvg30d": 14.62
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.01,
          "priceAvg30d": 18.65
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.5,
          "priceAvg30d": 19.82
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.0,
          "priceAvg30d": 20.86
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.95,
          "priceAvg30d": 20.0
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.99,
          "priceAvg30d": 20.0
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.48,
          "priceAvg30d": 19.38
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 31.9,
          "priceAvg30d": 18.58
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.01,
          "priceAvg30d": 18.87
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.85,
          "priceAvg30d": 18.15
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.6,
          "priceAvg30d": 18.16
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.35,
          "priceAvg30d": 16.96
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 23.27,
          "priceAvg30d": 16.98
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.76,
          "priceAvg30d": 15.27
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.76,
          "priceAvg30d": 15.11
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 13.82,
          "priceAvg30d": 11.89
        }
      ],
      "avg": 22.4,
      "max": 44.09,
      "maxBlock": 33,
      "min": 10.63,
      "minBlock": 21,
      "spread3h": 24.47,
      "spreadLowAvg": 11.77,
      "spreadHighAvg": 36.24,
      "avg30d": 12.51,
      "spread30dAvg": 13.29,
      "historyDays": 30
    }
  }
};
