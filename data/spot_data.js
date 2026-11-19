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
  "targetDate": "2026-11-19",
  "fetchedAt": "2026-11-19T14:02:02+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 28.16,
        "priceAvg30d": 26.28
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 27.76,
        "priceAvg30d": 25.28
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 27.76,
        "priceAvg30d": 24.56
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 27.28,
        "priceAvg30d": 24.52
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 27.74,
        "priceAvg30d": 24.67
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 28.66,
        "priceAvg30d": 25.46
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 29.5,
        "priceAvg30d": 26.54
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 30.0,
        "priceAvg30d": 27.43
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 30.04,
        "priceAvg30d": 27.81
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 31.1,
        "priceAvg30d": 28.13
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 31.64,
        "priceAvg30d": 28.43
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 32.0,
        "priceAvg30d": 28.68
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 33.31,
        "priceAvg30d": 29.06
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 36.01,
        "priceAvg30d": 29.13
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 33.0,
        "priceAvg30d": 28.0
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 31.61,
        "priceAvg30d": 26.02
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 29.62,
        "priceAvg30d": 25.13
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 28.7,
        "priceAvg30d": 24.54
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 27.64,
        "priceAvg30d": 22.83
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 27.26,
        "priceAvg30d": 20.09
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 25.89,
        "priceAvg30d": 18.75
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 22.59,
        "priceAvg30d": 17.86
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 22.45,
        "priceAvg30d": 17.42
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 17.3,
        "priceAvg30d": 17.29
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 12.84,
        "priceAvg30d": 15.51
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 13.75,
        "priceAvg30d": 15.96
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 26.26,
        "priceAvg30d": 20.03
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 27.28,
        "priceAvg30d": 22.66
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 28.26,
        "priceAvg30d": 24.58
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 31.32,
        "priceAvg30d": 27.35
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 34.9,
        "priceAvg30d": 29.73
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 38.77,
        "priceAvg30d": 32.68
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 42.98,
        "priceAvg30d": 35.73
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 42.97,
        "priceAvg30d": 36.82
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 43.05,
        "priceAvg30d": 36.48
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 42.97,
        "priceAvg30d": 36.03
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 42.9,
        "priceAvg30d": 34.97
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 42.9,
        "priceAvg30d": 34.68
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 40.0,
        "priceAvg30d": 33.95
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 38.77,
        "priceAvg30d": 32.58
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 38.77,
        "priceAvg30d": 31.75
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 38.77,
        "priceAvg30d": 31.25
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 38.5,
        "priceAvg30d": 30.75
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 37.5,
        "priceAvg30d": 29.61
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 38.77,
        "priceAvg30d": 29.82
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 37.61,
        "priceAvg30d": 28.73
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 37.01,
        "priceAvg30d": 28.25
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 33.51,
        "priceAvg30d": 26.09
      }
    ],
    "avg": 32.03,
    "max": 43.05,
    "maxBlock": 35,
    "min": 12.84,
    "minBlock": 25,
    "spread3h": 20.64,
    "spreadLowAvg": 21.61,
    "spreadHighAvg": 42.25,
    "avg30d": 27.08,
    "spread30dAvg": 19.08,
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
          "price": 29.45,
          "priceAvg30d": 24.81
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.42,
          "priceAvg30d": 22.97
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.44,
          "priceAvg30d": 22.92
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.63,
          "priceAvg30d": 23.66
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.43,
          "priceAvg30d": 24.12
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.0,
          "priceAvg30d": 24.86
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.01,
          "priceAvg30d": 25.55
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.04,
          "priceAvg30d": 26.65
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.22,
          "priceAvg30d": 27.18
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.13,
          "priceAvg30d": 27.46
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.51,
          "priceAvg30d": 29.28
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.04,
          "priceAvg30d": 29.71
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.65,
          "priceAvg30d": 28.08
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.14,
          "priceAvg30d": 27.31
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 21.24,
          "priceAvg30d": 25.11
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 15.01,
          "priceAvg30d": 22.94
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 24.21,
          "priceAvg30d": 21.47
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.75,
          "priceAvg30d": 19.19
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.38,
          "priceAvg30d": 18.09
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.66,
          "priceAvg30d": 15.72
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.36,
          "priceAvg30d": 14.65
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.82,
          "priceAvg30d": 13.49
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.81,
          "priceAvg30d": 13.87
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.81,
          "priceAvg30d": 13.98
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.4,
          "priceAvg30d": 12.52
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.82,
          "priceAvg30d": 12.5
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.02,
          "priceAvg30d": 15.79
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.5,
          "priceAvg30d": 20.45
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.93,
          "priceAvg30d": 23.02
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 22.45,
          "priceAvg30d": 26.22
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.94,
          "priceAvg30d": 28.4
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.83,
          "priceAvg30d": 31.75
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.01,
          "priceAvg30d": 35.7
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.01,
          "priceAvg30d": 35.62
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.01,
          "priceAvg30d": 34.45
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.08,
          "priceAvg30d": 33.2
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 32.01,
          "priceAvg30d": 33.01
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.01,
          "priceAvg30d": 33.43
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 32.01,
          "priceAvg30d": 33.59
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 31.88,
          "priceAvg30d": 32.58
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.61,
          "priceAvg30d": 32.48
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.89,
          "priceAvg30d": 30.74
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.89,
          "priceAvg30d": 29.69
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.55,
          "priceAvg30d": 28.36
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.68,
          "priceAvg30d": 28.57
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.5,
          "priceAvg30d": 27.1
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.0,
          "priceAvg30d": 26.7
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 13.59,
          "priceAvg30d": 25.17
        }
      ],
      "avg": 23.54,
      "max": 32.01,
      "maxBlock": 33,
      "min": 9.82,
      "minBlock": 22,
      "spread3h": 18.32,
      "spreadLowAvg": 11.07,
      "spreadHighAvg": 29.39,
      "avg30d": 25.29,
      "spread30dAvg": 19.68,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.45,
          "priceAvg30d": 26.78
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.42,
          "priceAvg30d": 25.8
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.44,
          "priceAvg30d": 25.0
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.84,
          "priceAvg30d": 24.97
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.84,
          "priceAvg30d": 25.38
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.0,
          "priceAvg30d": 26.03
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.01,
          "priceAvg30d": 26.74
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.04,
          "priceAvg30d": 27.26
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.22,
          "priceAvg30d": 27.71
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.13,
          "priceAvg30d": 27.83
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.51,
          "priceAvg30d": 28.31
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.04,
          "priceAvg30d": 28.66
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.65,
          "priceAvg30d": 29.28
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.14,
          "priceAvg30d": 29.0
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 21.24,
          "priceAvg30d": 26.75
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 15.01,
          "priceAvg30d": 23.99
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 24.21,
          "priceAvg30d": 23.57
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.75,
          "priceAvg30d": 22.56
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.38,
          "priceAvg30d": 21.46
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.66,
          "priceAvg30d": 20.06
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.36,
          "priceAvg30d": 18.65
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.82,
          "priceAvg30d": 17.78
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 7.76,
          "priceAvg30d": 17.28
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.29,
          "priceAvg30d": 17.29
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.0,
          "priceAvg30d": 15.94
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.18,
          "priceAvg30d": 16.31
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.02,
          "priceAvg30d": 20.04
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.5,
          "priceAvg30d": 22.53
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.93,
          "priceAvg30d": 25.28
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 22.45,
          "priceAvg30d": 28.25
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.94,
          "priceAvg30d": 30.57
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.83,
          "priceAvg30d": 34.12
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.01,
          "priceAvg30d": 36.89
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.01,
          "priceAvg30d": 38.11
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.01,
          "priceAvg30d": 37.98
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.08,
          "priceAvg30d": 37.52
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 32.01,
          "priceAvg30d": 36.3
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.01,
          "priceAvg30d": 36.2
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 32.01,
          "priceAvg30d": 35.78
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 31.88,
          "priceAvg30d": 34.4
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 31.83,
          "priceAvg30d": 33.77
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.81,
          "priceAvg30d": 32.61
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.89,
          "priceAvg30d": 32.43
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.55,
          "priceAvg30d": 31.18
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.88,
          "priceAvg30d": 30.96
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.5,
          "priceAvg30d": 28.93
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.0,
          "priceAvg30d": 28.27
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 13.59,
          "priceAvg30d": 26.27
        }
      ],
      "avg": 22.86,
      "max": 32.01,
      "maxBlock": 33,
      "min": 5.0,
      "minBlock": 25,
      "spread3h": 20.46,
      "spreadLowAvg": 8.93,
      "spreadHighAvg": 29.39,
      "avg30d": 27.47,
      "spread30dAvg": 20.27,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.45,
          "priceAvg30d": 29.68
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.42,
          "priceAvg30d": 29.5
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.44,
          "priceAvg30d": 29.5
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.44,
          "priceAvg30d": 29.03
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.44,
          "priceAvg30d": 29.14
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.05,
          "priceAvg30d": 29.13
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.9,
          "priceAvg30d": 29.25
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.59,
          "priceAvg30d": 29.31
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.22,
          "priceAvg30d": 29.61
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.13,
          "priceAvg30d": 29.69
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.51,
          "priceAvg30d": 29.95
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.04,
          "priceAvg30d": 30.54
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.6,
          "priceAvg30d": 31.4
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.33,
          "priceAvg30d": 31.52
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 34.0,
          "priceAvg30d": 31.42
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.97,
          "priceAvg30d": 30.95
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 30.38,
          "priceAvg30d": 29.79
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 29.62,
          "priceAvg30d": 30.55
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 27.69,
          "priceAvg30d": 30.41
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 27.48,
          "priceAvg30d": 28.73
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 27.26,
          "priceAvg30d": 28.0
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.26,
          "priceAvg30d": 27.23
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.09,
          "priceAvg30d": 26.87
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 26.0,
          "priceAvg30d": 27.09
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.54,
          "priceAvg30d": 26.22
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.44,
          "priceAvg30d": 26.92
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.28,
          "priceAvg30d": 29.41
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.5,
          "priceAvg30d": 31.05
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 29.5,
          "priceAvg30d": 32.65
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 31.1,
          "priceAvg30d": 33.87
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 32.78,
          "priceAvg30d": 35.01
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.77,
          "priceAvg30d": 37.87
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 41.15,
          "priceAvg30d": 39.21
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.77,
          "priceAvg30d": 40.01
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.77,
          "priceAvg30d": 39.84
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.77,
          "priceAvg30d": 39.13
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.77,
          "priceAvg30d": 37.53
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.77,
          "priceAvg30d": 37.75
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 38.77,
          "priceAvg30d": 37.16
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 38.77,
          "priceAvg30d": 36.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 37.3,
          "priceAvg30d": 35.1
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 38.77,
          "priceAvg30d": 33.95
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 38.77,
          "priceAvg30d": 33.57
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 38.77,
          "priceAvg30d": 32.72
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.18,
          "priceAvg30d": 34.27
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 38.9,
          "priceAvg30d": 32.34
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 38.77,
          "priceAvg30d": 30.96
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 33.51,
          "priceAvg30d": 29.75
        }
      ],
      "avg": 32.7,
      "max": 43.18,
      "maxBlock": 45,
      "min": 22.54,
      "minBlock": 25,
      "spread3h": 11.49,
      "spreadLowAvg": 26.43,
      "spreadHighAvg": 37.91,
      "avg30d": 31.89,
      "spread30dAvg": 13.21,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.45,
          "priceAvg30d": 29.21
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.42,
          "priceAvg30d": 29.14
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.44,
          "priceAvg30d": 28.63
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 29.44,
          "priceAvg30d": 28.57
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.44,
          "priceAvg30d": 29.01
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.33,
          "priceAvg30d": 29.38
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 31.1,
          "priceAvg30d": 29.61
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.0,
          "priceAvg30d": 29.93
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.02,
          "priceAvg30d": 30.06
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 32.6,
          "priceAvg30d": 30.16
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.61,
          "priceAvg30d": 30.47
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 32.97,
          "priceAvg30d": 30.81
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.6,
          "priceAvg30d": 31.08
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.33,
          "priceAvg30d": 31.18
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.97,
          "priceAvg30d": 30.19
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.97,
          "priceAvg30d": 28.95
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 30.38,
          "priceAvg30d": 28.53
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.0,
          "priceAvg30d": 28.93
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 28.58,
          "priceAvg30d": 27.95
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 28.13,
          "priceAvg30d": 26.15
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 27.26,
          "priceAvg30d": 24.81
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.26,
          "priceAvg30d": 24.34
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.09,
          "priceAvg30d": 24.04
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 26.0,
          "priceAvg30d": 23.9
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.54,
          "priceAvg30d": 21.34
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.44,
          "priceAvg30d": 22.21
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.77,
          "priceAvg30d": 25.74
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.66,
          "priceAvg30d": 28.68
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.43,
          "priceAvg30d": 30.65
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 36.0,
          "priceAvg30d": 31.81
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 38.3,
          "priceAvg30d": 33.23
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 42.9,
          "priceAvg30d": 36.72
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.28,
          "priceAvg30d": 37.36
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 43.3,
          "priceAvg30d": 37.27
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.31,
          "priceAvg30d": 37.99
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.63,
          "priceAvg30d": 37.58
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 42.97,
          "priceAvg30d": 36.78
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 42.99,
          "priceAvg30d": 36.55
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 42.9,
          "priceAvg30d": 36.34
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 42.9,
          "priceAvg30d": 35.14
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 42.9,
          "priceAvg30d": 33.6
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 42.9,
          "priceAvg30d": 33.16
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.19,
          "priceAvg30d": 32.62
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.12,
          "priceAvg30d": 31.95
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.18,
          "priceAvg30d": 32.33
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 42.9,
          "priceAvg30d": 31.64
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 38.77,
          "priceAvg30d": 31.21
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.78,
          "priceAvg30d": 30.42
        }
      ],
      "avg": 34.66,
      "max": 43.63,
      "maxBlock": 36,
      "min": 22.54,
      "minBlock": 25,
      "spread3h": 16.42,
      "spreadLowAvg": 26.7,
      "spreadHighAvg": 43.12,
      "avg30d": 30.57,
      "spread30dAvg": 15.29,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.42,
          "priceAvg30d": 16.18
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.11,
          "priceAvg30d": 16.2
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.59,
          "priceAvg30d": 15.9
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.91,
          "priceAvg30d": 15.6
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.11,
          "priceAvg30d": 17.03
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.51,
          "priceAvg30d": 19.33
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.18,
          "priceAvg30d": 21.08
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.0,
          "priceAvg30d": 22.25
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.02,
          "priceAvg30d": 22.24
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 32.6,
          "priceAvg30d": 23.66
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.61,
          "priceAvg30d": 24.47
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 32.97,
          "priceAvg30d": 23.72
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.6,
          "priceAvg30d": 22.86
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.33,
          "priceAvg30d": 23.23
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.97,
          "priceAvg30d": 23.54
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.97,
          "priceAvg30d": 22.62
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 29.99,
          "priceAvg30d": 22.86
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.67,
          "priceAvg30d": 23.87
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 25.53,
          "priceAvg30d": 23.89
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.0,
          "priceAvg30d": 23.5
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 27.26,
          "priceAvg30d": 21.92
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.26,
          "priceAvg30d": 20.98
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 22.91,
          "priceAvg30d": 21.59
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 22.91,
          "priceAvg30d": 21.15
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.7,
          "priceAvg30d": 16.86
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.7,
          "priceAvg30d": 17.5
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 25.0,
          "priceAvg30d": 23.32
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.66,
          "priceAvg30d": 25.76
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.43,
          "priceAvg30d": 27.32
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 36.0,
          "priceAvg30d": 28.96
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 38.3,
          "priceAvg30d": 29.6
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 42.9,
          "priceAvg30d": 32.78
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.28,
          "priceAvg30d": 32.78
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 43.3,
          "priceAvg30d": 34.14
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.31,
          "priceAvg30d": 34.02
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.63,
          "priceAvg30d": 34.17
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 42.97,
          "priceAvg30d": 32.36
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 42.99,
          "priceAvg30d": 31.79
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 42.9,
          "priceAvg30d": 31.51
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 42.9,
          "priceAvg30d": 28.85
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 42.9,
          "priceAvg30d": 28.56
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 42.9,
          "priceAvg30d": 26.88
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.19,
          "priceAvg30d": 26.38
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.12,
          "priceAvg30d": 24.55
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.18,
          "priceAvg30d": 25.4
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 42.9,
          "priceAvg30d": 23.12
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 38.77,
          "priceAvg30d": 22.29
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.78,
          "priceAvg30d": 16.68
        }
      ],
      "avg": 33.0,
      "max": 43.63,
      "maxBlock": 36,
      "min": 12.7,
      "minBlock": 25,
      "spread3h": 19.89,
      "spreadLowAvg": 23.24,
      "spreadHighAvg": 43.12,
      "avg30d": 24.28,
      "spread30dAvg": 16.86,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.42,
          "priceAvg30d": 16.18
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.11,
          "priceAvg30d": 16.2
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.59,
          "priceAvg30d": 15.9
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.91,
          "priceAvg30d": 15.6
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.11,
          "priceAvg30d": 16.35
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.51,
          "priceAvg30d": 18.77
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.18,
          "priceAvg30d": 20.07
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.0,
          "priceAvg30d": 21.48
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.02,
          "priceAvg30d": 21.45
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 32.6,
          "priceAvg30d": 22.42
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.61,
          "priceAvg30d": 22.35
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 32.97,
          "priceAvg30d": 21.43
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.6,
          "priceAvg30d": 21.54
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.33,
          "priceAvg30d": 22.43
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.97,
          "priceAvg30d": 22.97
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.97,
          "priceAvg30d": 22.12
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 29.99,
          "priceAvg30d": 22.67
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.67,
          "priceAvg30d": 23.87
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 25.53,
          "priceAvg30d": 23.89
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.0,
          "priceAvg30d": 23.5
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 25.0,
          "priceAvg30d": 21.92
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 23.99,
          "priceAvg30d": 20.98
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 22.91,
          "priceAvg30d": 21.59
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 22.91,
          "priceAvg30d": 21.15
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.7,
          "priceAvg30d": 16.78
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.7,
          "priceAvg30d": 17.41
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 25.0,
          "priceAvg30d": 23.32
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 25.53,
          "priceAvg30d": 25.76
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 28.71,
          "priceAvg30d": 27.04
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 36.0,
          "priceAvg30d": 28.19
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 38.3,
          "priceAvg30d": 29.54
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 42.9,
          "priceAvg30d": 32.78
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.28,
          "priceAvg30d": 32.78
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 43.3,
          "priceAvg30d": 34.14
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.31,
          "priceAvg30d": 33.53
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.63,
          "priceAvg30d": 33.61
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 42.97,
          "priceAvg30d": 32.35
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 42.99,
          "priceAvg30d": 31.78
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 42.9,
          "priceAvg30d": 31.49
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 42.9,
          "priceAvg30d": 28.85
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 42.9,
          "priceAvg30d": 28.49
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 42.9,
          "priceAvg30d": 26.55
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.19,
          "priceAvg30d": 26.11
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.12,
          "priceAvg30d": 24.55
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.18,
          "priceAvg30d": 24.4
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 42.9,
          "priceAvg30d": 22.51
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 38.77,
          "priceAvg30d": 21.96
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.78,
          "priceAvg30d": 16.68
        }
      ],
      "avg": 32.79,
      "max": 43.63,
      "maxBlock": 36,
      "min": 12.7,
      "minBlock": 25,
      "spread3h": 20.95,
      "spreadLowAvg": 22.17,
      "spreadHighAvg": 43.12,
      "avg30d": 23.9,
      "spread30dAvg": 16.42,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.42,
          "priceAvg30d": 15.6
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.11,
          "priceAvg30d": 16.12
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.59,
          "priceAvg30d": 15.33
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.91,
          "priceAvg30d": 15.0
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.11,
          "priceAvg30d": 15.93
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.51,
          "priceAvg30d": 17.62
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.18,
          "priceAvg30d": 19.06
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.0,
          "priceAvg30d": 20.68
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.02,
          "priceAvg30d": 21.36
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 32.6,
          "priceAvg30d": 22.38
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.61,
          "priceAvg30d": 22.27
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 32.97,
          "priceAvg30d": 21.42
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.6,
          "priceAvg30d": 21.43
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.33,
          "priceAvg30d": 22.3
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.97,
          "priceAvg30d": 19.75
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.97,
          "priceAvg30d": 17.6
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 29.99,
          "priceAvg30d": 16.76
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.67,
          "priceAvg30d": 15.12
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 25.53,
          "priceAvg30d": 13.38
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 15.19,
          "priceAvg30d": 12.26
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 19.9,
          "priceAvg30d": 10.59
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.85,
          "priceAvg30d": 10.51
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.48,
          "priceAvg30d": 10.49
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.08,
          "priceAvg30d": 10.61
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.32,
          "priceAvg30d": 8.58
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.52,
          "priceAvg30d": 8.96
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 13.18,
          "priceAvg30d": 10.4
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 15.57,
          "priceAvg30d": 11.19
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.11,
          "priceAvg30d": 12.85
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.11,
          "priceAvg30d": 14.59
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 33.01,
          "priceAvg30d": 16.95
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 42.9,
          "priceAvg30d": 20.1
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.28,
          "priceAvg30d": 24.31
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 43.3,
          "priceAvg30d": 28.42
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.31,
          "priceAvg30d": 28.93
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.63,
          "priceAvg30d": 29.43
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 42.97,
          "priceAvg30d": 28.36
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 42.99,
          "priceAvg30d": 27.48
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 42.9,
          "priceAvg30d": 26.93
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 42.9,
          "priceAvg30d": 25.65
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 42.9,
          "priceAvg30d": 25.62
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 42.9,
          "priceAvg30d": 24.38
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.19,
          "priceAvg30d": 24.11
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.12,
          "priceAvg30d": 22.57
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.18,
          "priceAvg30d": 21.99
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 42.9,
          "priceAvg30d": 20.07
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 38.77,
          "priceAvg30d": 19.81
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.78,
          "priceAvg30d": 15.64
        }
      ],
      "avg": 30.84,
      "max": 43.63,
      "maxBlock": 36,
      "min": 11.32,
      "minBlock": 25,
      "spread3h": 29.84,
      "spreadLowAvg": 13.28,
      "spreadHighAvg": 43.12,
      "avg30d": 18.77,
      "spread30dAvg": 15.89,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.42,
          "priceAvg30d": 13.52
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.11,
          "priceAvg30d": 13.01
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.59,
          "priceAvg30d": 12.62
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.91,
          "priceAvg30d": 12.65
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.11,
          "priceAvg30d": 13.21
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.51,
          "priceAvg30d": 14.38
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.18,
          "priceAvg30d": 15.25
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.0,
          "priceAvg30d": 17.68
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.02,
          "priceAvg30d": 18.32
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 32.6,
          "priceAvg30d": 19.29
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.61,
          "priceAvg30d": 19.68
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 32.97,
          "priceAvg30d": 18.92
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.6,
          "priceAvg30d": 18.02
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.33,
          "priceAvg30d": 17.96
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.97,
          "priceAvg30d": 16.3
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.97,
          "priceAvg30d": 15.56
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 29.99,
          "priceAvg30d": 15.21
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.67,
          "priceAvg30d": 13.57
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 25.53,
          "priceAvg30d": 11.76
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.07,
          "priceAvg30d": 10.62
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 15.76,
          "priceAvg30d": 8.93
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 7.0,
          "priceAvg30d": 8.15
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 7.0,
          "priceAvg30d": 8.41
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 5.01,
          "priceAvg30d": 8.01
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.5,
          "priceAvg30d": 6.41
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.5,
          "priceAvg30d": 7.02
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 5.01,
          "priceAvg30d": 8.7
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 15.57,
          "priceAvg30d": 9.64
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 19.41,
          "priceAvg30d": 10.86
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.11,
          "priceAvg30d": 12.43
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 33.01,
          "priceAvg30d": 13.72
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 42.9,
          "priceAvg30d": 15.97
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.28,
          "priceAvg30d": 19.29
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 43.3,
          "priceAvg30d": 23.83
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.31,
          "priceAvg30d": 24.89
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.63,
          "priceAvg30d": 25.26
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 42.97,
          "priceAvg30d": 24.34
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 42.99,
          "priceAvg30d": 23.7
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 42.9,
          "priceAvg30d": 22.07
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 42.9,
          "priceAvg30d": 20.95
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 42.9,
          "priceAvg30d": 21.23
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 42.9,
          "priceAvg30d": 18.88
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.19,
          "priceAvg30d": 20.32
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.12,
          "priceAvg30d": 18.17
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.18,
          "priceAvg30d": 16.86
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 42.9,
          "priceAvg30d": 15.4
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 38.77,
          "priceAvg30d": 15.83
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.78,
          "priceAvg30d": 13.18
        }
      ],
      "avg": 29.58,
      "max": 43.63,
      "maxBlock": 36,
      "min": 2.5,
      "minBlock": 25,
      "spread3h": 36.11,
      "spreadLowAvg": 7.02,
      "spreadHighAvg": 43.12,
      "avg30d": 15.62,
      "spread30dAvg": 15.42,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.42,
          "priceAvg30d": 14.8
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.11,
          "priceAvg30d": 14.87
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.59,
          "priceAvg30d": 13.97
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.91,
          "priceAvg30d": 13.74
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.11,
          "priceAvg30d": 14.6
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.51,
          "priceAvg30d": 16.32
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.18,
          "priceAvg30d": 18.12
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.0,
          "priceAvg30d": 20.03
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.02,
          "priceAvg30d": 20.93
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 32.6,
          "priceAvg30d": 21.86
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.61,
          "priceAvg30d": 21.88
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 32.97,
          "priceAvg30d": 21.08
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.6,
          "priceAvg30d": 21.2
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.33,
          "priceAvg30d": 21.72
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.97,
          "priceAvg30d": 19.11
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.97,
          "priceAvg30d": 17.23
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 29.99,
          "priceAvg30d": 15.92
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.67,
          "priceAvg30d": 13.92
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 25.53,
          "priceAvg30d": 11.03
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 15.19,
          "priceAvg30d": 9.65
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 19.9,
          "priceAvg30d": 8.57
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.85,
          "priceAvg30d": 8.41
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.48,
          "priceAvg30d": 8.3
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.08,
          "priceAvg30d": 8.07
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.32,
          "priceAvg30d": 6.76
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.52,
          "priceAvg30d": 6.87
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 13.18,
          "priceAvg30d": 8.53
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 15.57,
          "priceAvg30d": 9.99
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.11,
          "priceAvg30d": 11.47
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.11,
          "priceAvg30d": 13.75
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 33.01,
          "priceAvg30d": 16.71
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 42.9,
          "priceAvg30d": 19.46
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 43.28,
          "priceAvg30d": 24.31
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 43.3,
          "priceAvg30d": 28.42
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.31,
          "priceAvg30d": 28.77
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.63,
          "priceAvg30d": 29.43
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 42.97,
          "priceAvg30d": 28.36
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 42.99,
          "priceAvg30d": 27.48
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 42.9,
          "priceAvg30d": 26.93
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 42.9,
          "priceAvg30d": 25.65
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 42.9,
          "priceAvg30d": 25.62
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 42.9,
          "priceAvg30d": 24.38
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.19,
          "priceAvg30d": 24.02
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.12,
          "priceAvg30d": 22.24
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.18,
          "priceAvg30d": 21.68
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 42.9,
          "priceAvg30d": 19.7
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 38.77,
          "priceAvg30d": 18.79
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.78,
          "priceAvg30d": 14.97
        }
      ],
      "avg": 30.84,
      "max": 43.63,
      "maxBlock": 36,
      "min": 11.32,
      "minBlock": 25,
      "spread3h": 29.84,
      "spreadLowAvg": 13.28,
      "spreadHighAvg": 43.12,
      "avg30d": 17.91,
      "spread30dAvg": 17.12,
      "historyDays": 30
    }
  }
};
