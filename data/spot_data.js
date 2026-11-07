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
  "targetDate": "2026-11-07",
  "fetchedAt": "2026-11-07T12:44:55+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 21.58,
        "priceAvg30d": 24.94
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 21.58,
        "priceAvg30d": 23.95
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 21.58,
        "priceAvg30d": 23.4
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 19.3,
        "priceAvg30d": 23.17
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 21.58,
        "priceAvg30d": 23.25
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 24.51,
        "priceAvg30d": 23.94
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 26.96,
        "priceAvg30d": 24.72
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 28.85,
        "priceAvg30d": 25.4
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 29.45,
        "priceAvg30d": 25.73
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 29.28,
        "priceAvg30d": 26.09
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 29.71,
        "priceAvg30d": 26.36
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 29.45,
        "priceAvg30d": 26.48
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 29.42,
        "priceAvg30d": 26.42
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 27.0,
        "priceAvg30d": 25.66
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 20.21,
        "priceAvg30d": 23.42
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 12.32,
        "priceAvg30d": 20.82
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 12.0,
        "priceAvg30d": 19.62
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 11.14,
        "priceAvg30d": 18.82
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 10.52,
        "priceAvg30d": 17.08
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 5.81,
        "priceAvg30d": 16.03
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 2.5,
        "priceAvg30d": 14.96
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 0.5,
        "priceAvg30d": 14.46
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 0.02,
        "priceAvg30d": 14.05
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 0.02,
        "priceAvg30d": 13.97
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 0.02,
        "priceAvg30d": 12.06
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 0.05,
        "priceAvg30d": 12.58
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 2.0,
        "priceAvg30d": 16.46
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 8.52,
        "priceAvg30d": 19.06
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 6.28,
        "priceAvg30d": 20.25
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 9.86,
        "priceAvg30d": 23.75
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 12.0,
        "priceAvg30d": 25.78
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 20.0,
        "priceAvg30d": 29.34
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 27.5,
        "priceAvg30d": 32.91
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 29.32,
        "priceAvg30d": 34.5
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 29.45,
        "priceAvg30d": 33.99
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 29.32,
        "priceAvg30d": 33.78
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 29.0,
        "priceAvg30d": 32.34
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 28.34,
        "priceAvg30d": 31.54
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 28.5,
        "priceAvg30d": 30.58
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 28.43,
        "priceAvg30d": 28.86
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 28.02,
        "priceAvg30d": 28.27
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 28.67,
        "priceAvg30d": 27.48
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 28.7,
        "priceAvg30d": 27.0
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 28.43,
        "priceAvg30d": 26.76
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 29.69,
        "priceAvg30d": 27.08
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 29.1,
        "priceAvg30d": 26.3
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 29.28,
        "priceAvg30d": 26.03
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 23.19,
        "priceAvg30d": 24.26
      }
    ],
    "avg": 19.77,
    "max": 29.71,
    "maxBlock": 11,
    "min": 0.02,
    "minBlock": 23,
    "spread3h": 27.42,
    "spreadLowAvg": 1.48,
    "spreadHighAvg": 28.91,
    "avg30d": 24.04,
    "spread30dAvg": 18.96,
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
          "price": 10.4,
          "priceAvg30d": 22.04
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.88,
          "priceAvg30d": 19.43
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.36,
          "priceAvg30d": 19.74
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.88,
          "priceAvg30d": 20.53
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.88,
          "priceAvg30d": 21.38
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.68,
          "priceAvg30d": 23.03
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.87,
          "priceAvg30d": 23.93
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.26,
          "priceAvg30d": 24.87
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.15,
          "priceAvg30d": 25.42
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.23,
          "priceAvg30d": 25.32
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.29,
          "priceAvg30d": 27.32
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.15,
          "priceAvg30d": 28.28
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 9.88,
          "priceAvg30d": 25.0
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.88,
          "priceAvg30d": 23.05
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.88,
          "priceAvg30d": 19.89
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.88,
          "priceAvg30d": 17.03
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.5,
          "priceAvg30d": 16.0
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 13.37
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 12.81
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 1.0,
          "priceAvg30d": 11.46
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 10.75
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.5,
          "priceAvg30d": 9.65
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 4.0,
          "priceAvg30d": 10.17
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 3.0,
          "priceAvg30d": 10.38
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.5,
          "priceAvg30d": 8.6
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.5,
          "priceAvg30d": 8.32
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 3.0,
          "priceAvg30d": 10.68
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.88,
          "priceAvg30d": 13.13
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.88,
          "priceAvg30d": 16.51
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.88,
          "priceAvg30d": 19.98
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.15,
          "priceAvg30d": 22.64
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.15,
          "priceAvg30d": 27.5
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 18.22,
          "priceAvg30d": 33.94
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 22.62,
          "priceAvg30d": 35.73
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.47,
          "priceAvg30d": 33.91
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 22.47,
          "priceAvg30d": 33.53
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.23,
          "priceAvg30d": 32.19
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.47,
          "priceAvg30d": 32.47
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.47,
          "priceAvg30d": 33.4
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.17,
          "priceAvg30d": 32.35
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.47,
          "priceAvg30d": 32.01
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 13.25,
          "priceAvg30d": 29.75
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 12.38,
          "priceAvg30d": 28.37
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.87,
          "priceAvg30d": 28.11
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 9.88,
          "priceAvg30d": 27.53
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 9.88,
          "priceAvg30d": 25.82
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.36,
          "priceAvg30d": 25.6
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.88,
          "priceAvg30d": 23.06
        }
      ],
      "avg": 10.87,
      "max": 25.23,
      "maxBlock": 37,
      "min": 1.0,
      "minBlock": 19,
      "spread3h": 17.96,
      "spreadLowAvg": 3.48,
      "spreadHighAvg": 21.44,
      "avg30d": 22.42,
      "spread30dAvg": 23.36,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.4,
          "priceAvg30d": 26.31
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.88,
          "priceAvg30d": 25.93
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.36,
          "priceAvg30d": 25.36
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.88,
          "priceAvg30d": 25.21
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.88,
          "priceAvg30d": 25.71
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.68,
          "priceAvg30d": 26.07
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.87,
          "priceAvg30d": 26.82
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.26,
          "priceAvg30d": 26.81
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.15,
          "priceAvg30d": 27.18
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.23,
          "priceAvg30d": 27.25
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.29,
          "priceAvg30d": 27.59
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.15,
          "priceAvg30d": 28.04
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 9.88,
          "priceAvg30d": 27.88
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.88,
          "priceAvg30d": 26.49
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 5.0,
          "priceAvg30d": 22.97
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 3.5,
          "priceAvg30d": 20.23
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 1.0,
          "priceAvg30d": 19.19
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.03,
          "priceAvg30d": 16.92
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 16.4
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 1.0,
          "priceAvg30d": 15.81
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 14.51
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.5,
          "priceAvg30d": 14.16
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 4.0,
          "priceAvg30d": 13.73
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 3.0,
          "priceAvg30d": 13.78
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.5,
          "priceAvg30d": 12.56
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.5,
          "priceAvg30d": 12.65
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.5,
          "priceAvg30d": 15.69
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 1.0,
          "priceAvg30d": 17.91
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 1.0,
          "priceAvg30d": 20.9
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 1.0,
          "priceAvg30d": 24.04
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 3.0,
          "priceAvg30d": 26.67
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.97,
          "priceAvg30d": 31.44
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 18.22,
          "priceAvg30d": 35.07
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 22.62,
          "priceAvg30d": 37.04
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.47,
          "priceAvg30d": 36.49
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 22.47,
          "priceAvg30d": 36.34
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.23,
          "priceAvg30d": 34.56
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.47,
          "priceAvg30d": 34.28
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.47,
          "priceAvg30d": 33.45
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.17,
          "priceAvg30d": 31.94
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.47,
          "priceAvg30d": 31.02
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 13.25,
          "priceAvg30d": 29.77
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 12.38,
          "priceAvg30d": 29.24
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 11.66,
          "priceAvg30d": 29.64
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 9.88,
          "priceAvg30d": 29.45
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 9.0,
          "priceAvg30d": 27.91
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.36,
          "priceAvg30d": 27.22
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 6.6,
          "priceAvg30d": 24.98
        }
      ],
      "avg": 9.7,
      "max": 25.23,
      "maxBlock": 37,
      "min": 0.03,
      "minBlock": 18,
      "spread3h": 19.11,
      "spreadLowAvg": 2.33,
      "spreadHighAvg": 21.44,
      "avg30d": 25.22,
      "spread30dAvg": 21.24,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.89,
          "priceAvg30d": 27.91
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.09,
          "priceAvg30d": 27.65
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.28,
          "priceAvg30d": 27.68
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 21.58,
          "priceAvg30d": 27.43
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.86,
          "priceAvg30d": 27.47
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.26,
          "priceAvg30d": 27.5
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.3,
          "priceAvg30d": 27.7
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.2,
          "priceAvg30d": 27.67
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.24,
          "priceAvg30d": 27.91
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.85,
          "priceAvg30d": 27.93
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.45,
          "priceAvg30d": 28.2
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.45,
          "priceAvg30d": 28.66
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.72,
          "priceAvg30d": 28.75
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 29.45,
          "priceAvg30d": 28.01
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.26,
          "priceAvg30d": 27.54
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.69,
          "priceAvg30d": 27.13
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.58,
          "priceAvg30d": 26.32
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.43,
          "priceAvg30d": 25.95
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 21.58,
          "priceAvg30d": 24.88
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.5,
          "priceAvg30d": 23.97
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.67,
          "priceAvg30d": 22.61
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.0,
          "priceAvg30d": 22.39
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.0,
          "priceAvg30d": 22.32
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.3,
          "priceAvg30d": 22.82
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.9,
          "priceAvg30d": 22.27
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.3,
          "priceAvg30d": 23.3
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.65,
          "priceAvg30d": 24.95
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 14.49,
          "priceAvg30d": 27.56
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 15.01,
          "priceAvg30d": 29.19
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 21.58,
          "priceAvg30d": 31.02
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 20.61,
          "priceAvg30d": 31.1
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 29.21,
          "priceAvg30d": 34.03
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.88,
          "priceAvg30d": 36.41
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.42,
          "priceAvg30d": 37.81
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.88,
          "priceAvg30d": 37.17
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.88,
          "priceAvg30d": 37.11
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.0,
          "priceAvg30d": 35.26
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.68,
          "priceAvg30d": 35.08
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 34.02
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.98,
          "priceAvg30d": 32.6
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.69,
          "priceAvg30d": 31.59
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.88,
          "priceAvg30d": 30.2
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.88,
          "priceAvg30d": 29.63
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.88,
          "priceAvg30d": 30.29
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.5,
          "priceAvg30d": 31.38
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.08,
          "priceAvg30d": 29.91
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.1,
          "priceAvg30d": 28.88
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.69,
          "priceAvg30d": 27.46
        }
      ],
      "avg": 24.81,
      "max": 32.5,
      "maxBlock": 45,
      "min": 9.9,
      "minBlock": 25,
      "spread3h": 19.79,
      "spreadLowAvg": 11.29,
      "spreadHighAvg": 31.08,
      "avg30d": 28.85,
      "spread30dAvg": 13.76,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.8,
          "priceAvg30d": 27.01
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.1,
          "priceAvg30d": 26.63
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.37,
          "priceAvg30d": 26.11
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 31.1,
          "priceAvg30d": 26.0
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.11,
          "priceAvg30d": 26.47
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.12,
          "priceAvg30d": 26.87
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 31.47,
          "priceAvg30d": 27.2
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.1,
          "priceAvg30d": 27.44
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 32.31,
          "priceAvg30d": 27.6
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.82,
          "priceAvg30d": 27.74
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.1,
          "priceAvg30d": 27.98
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.8,
          "priceAvg30d": 28.26
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.5,
          "priceAvg30d": 28.11
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 31.49,
          "priceAvg30d": 27.34
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.5,
          "priceAvg30d": 25.56
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 28.17,
          "priceAvg30d": 23.5
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.0,
          "priceAvg30d": 22.75
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.43,
          "priceAvg30d": 23.1
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 19.43,
          "priceAvg30d": 22.23
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.5,
          "priceAvg30d": 21.42
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.32,
          "priceAvg30d": 19.69
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.0,
          "priceAvg30d": 19.53
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.0,
          "priceAvg30d": 19.12
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.3,
          "priceAvg30d": 19.09
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.9,
          "priceAvg30d": 16.68
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.3,
          "priceAvg30d": 17.49
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.65,
          "priceAvg30d": 21.03
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 14.1,
          "priceAvg30d": 24.28
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 14.3,
          "priceAvg30d": 25.88
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 15.0,
          "priceAvg30d": 27.64
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 20.61,
          "priceAvg30d": 28.97
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 27.99,
          "priceAvg30d": 33.11
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 35.15
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 34.98,
          "priceAvg30d": 35.87
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.19,
          "priceAvg30d": 35.9
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 34.89,
          "priceAvg30d": 35.87
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.0,
          "priceAvg30d": 34.63
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.68,
          "priceAvg30d": 34.01
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 33.5
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.98,
          "priceAvg30d": 31.7
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.69,
          "priceAvg30d": 30.19
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.31,
          "priceAvg30d": 29.31
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.01,
          "priceAvg30d": 28.78
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 31.36,
          "priceAvg30d": 28.68
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.5,
          "priceAvg30d": 29.5
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.08,
          "priceAvg30d": 28.87
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.5,
          "priceAvg30d": 28.68
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.42,
          "priceAvg30d": 27.67
        }
      ],
      "avg": 26.03,
      "max": 36.19,
      "maxBlock": 35,
      "min": 9.9,
      "minBlock": 25,
      "spread3h": 20.03,
      "spreadLowAvg": 11.22,
      "spreadHighAvg": 31.26,
      "avg30d": 27.09,
      "spread30dAvg": 17.47,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.42,
          "priceAvg30d": 15.59
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 17.55,
          "priceAvg30d": 15.51
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.34,
          "priceAvg30d": 14.67
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.34,
          "priceAvg30d": 13.83
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.71,
          "priceAvg30d": 14.91
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.0,
          "priceAvg30d": 16.33
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 31.47,
          "priceAvg30d": 17.07
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.1,
          "priceAvg30d": 18.5
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 32.31,
          "priceAvg30d": 18.39
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.82,
          "priceAvg30d": 19.91
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.1,
          "priceAvg30d": 20.34
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.8,
          "priceAvg30d": 19.41
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.5,
          "priceAvg30d": 18.61
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 31.49,
          "priceAvg30d": 17.97
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.5,
          "priceAvg30d": 17.89
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 28.17,
          "priceAvg30d": 16.2
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.0,
          "priceAvg30d": 17.69
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.43,
          "priceAvg30d": 18.81
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 19.43,
          "priceAvg30d": 18.72
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.5,
          "priceAvg30d": 18.95
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.32,
          "priceAvg30d": 17.55
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.0,
          "priceAvg30d": 17.35
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.0,
          "priceAvg30d": 17.67
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.3,
          "priceAvg30d": 17.75
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.9,
          "priceAvg30d": 14.0
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.3,
          "priceAvg30d": 14.62
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.65,
          "priceAvg30d": 19.04
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 14.1,
          "priceAvg30d": 22.26
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 14.3,
          "priceAvg30d": 23.45
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 15.0,
          "priceAvg30d": 24.41
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 20.61,
          "priceAvg30d": 25.54
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 27.99,
          "priceAvg30d": 28.65
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 29.02
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 34.98,
          "priceAvg30d": 30.4
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.19,
          "priceAvg30d": 28.8
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 34.89,
          "priceAvg30d": 29.25
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.0,
          "priceAvg30d": 27.9
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.68,
          "priceAvg30d": 27.96
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 27.4
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.98,
          "priceAvg30d": 25.36
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.69,
          "priceAvg30d": 25.16
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.31,
          "priceAvg30d": 23.7
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.01,
          "priceAvg30d": 22.97
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.0,
          "priceAvg30d": 22.69
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.5,
          "priceAvg30d": 22.05
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.08,
          "priceAvg30d": 20.05
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.0,
          "priceAvg30d": 19.66
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.86,
          "priceAvg30d": 15.35
        }
      ],
      "avg": 23.93,
      "max": 36.19,
      "maxBlock": 35,
      "min": 9.9,
      "minBlock": 25,
      "spread3h": 20.03,
      "spreadLowAvg": 11.22,
      "spreadHighAvg": 31.26,
      "avg30d": 20.61,
      "spread30dAvg": 15.4,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.42,
          "priceAvg30d": 15.35
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 17.55,
          "priceAvg30d": 15.51
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.34,
          "priceAvg30d": 14.67
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.34,
          "priceAvg30d": 13.83
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.71,
          "priceAvg30d": 14.49
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.0,
          "priceAvg30d": 16.06
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 31.47,
          "priceAvg30d": 16.81
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 32.1,
          "priceAvg30d": 18.14
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 32.31,
          "priceAvg30d": 17.99
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.82,
          "priceAvg30d": 19.27
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.1,
          "priceAvg30d": 19.21
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.8,
          "priceAvg30d": 18.59
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.5,
          "priceAvg30d": 18.61
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 31.49,
          "priceAvg30d": 17.97
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.5,
          "priceAvg30d": 17.47
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 28.17,
          "priceAvg30d": 15.87
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.0,
          "priceAvg30d": 17.59
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.43,
          "priceAvg30d": 18.81
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 19.43,
          "priceAvg30d": 18.72
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.5,
          "priceAvg30d": 18.95
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.32,
          "priceAvg30d": 17.51
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.0,
          "priceAvg30d": 17.29
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.0,
          "priceAvg30d": 17.62
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.3,
          "priceAvg30d": 17.7
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.9,
          "priceAvg30d": 14.0
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.3,
          "priceAvg30d": 14.62
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.65,
          "priceAvg30d": 19.04
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 14.1,
          "priceAvg30d": 22.26
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 14.3,
          "priceAvg30d": 23.13
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 15.0,
          "priceAvg30d": 24.41
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 20.61,
          "priceAvg30d": 25.52
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 27.99,
          "priceAvg30d": 28.62
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 29.02
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 34.98,
          "priceAvg30d": 30.4
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.19,
          "priceAvg30d": 28.8
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 34.89,
          "priceAvg30d": 28.91
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.0,
          "priceAvg30d": 27.9
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.68,
          "priceAvg30d": 27.52
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 27.06
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.98,
          "priceAvg30d": 25.18
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.69,
          "priceAvg30d": 24.97
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.31,
          "priceAvg30d": 23.55
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.01,
          "priceAvg30d": 22.81
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.0,
          "priceAvg30d": 22.44
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.5,
          "priceAvg30d": 21.81
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.08,
          "priceAvg30d": 19.8
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.0,
          "priceAvg30d": 19.49
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.86,
          "priceAvg30d": 15.22
        }
      ],
      "avg": 23.93,
      "max": 36.19,
      "maxBlock": 35,
      "min": 9.9,
      "minBlock": 25,
      "spread3h": 20.03,
      "spreadLowAvg": 11.22,
      "spreadHighAvg": 31.26,
      "avg30d": 20.43,
      "spread30dAvg": 15.23,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.42,
          "priceAvg30d": 14.77
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.0,
          "priceAvg30d": 15.51
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.86,
          "priceAvg30d": 14.34
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.86,
          "priceAvg30d": 13.55
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.71,
          "priceAvg30d": 13.89
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 17.07,
          "priceAvg30d": 15.29
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.47,
          "priceAvg30d": 15.64
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.3,
          "priceAvg30d": 17.32
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.0,
          "priceAvg30d": 17.99
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.5,
          "priceAvg30d": 19.22
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.5,
          "priceAvg30d": 19.18
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.8,
          "priceAvg30d": 18.58
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.3,
          "priceAvg30d": 18.54
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.3,
          "priceAvg30d": 17.87
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 17.07,
          "priceAvg30d": 14.03
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.11,
          "priceAvg30d": 12.28
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.99,
          "priceAvg30d": 12.39
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 11.97
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 4.36,
          "priceAvg30d": 10.82
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 10.12
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 8.5
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 8.04
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 7.8
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 8.23
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 7.13
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 7.26
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 8.56
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 9.37
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 11.1
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 12.47
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 6.9,
          "priceAvg30d": 14.39
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.14,
          "priceAvg30d": 17.2
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.42,
          "priceAvg30d": 21.69
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.07,
          "priceAvg30d": 24.98
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.96,
          "priceAvg30d": 24.74
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.99,
          "priceAvg30d": 25.3
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.08,
          "priceAvg30d": 24.21
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.08,
          "priceAvg30d": 23.58
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.08,
          "priceAvg30d": 23.51
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.18,
          "priceAvg30d": 22.42
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.08,
          "priceAvg30d": 22.41
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.08,
          "priceAvg30d": 21.75
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.15,
          "priceAvg30d": 21.14
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 23.08,
          "priceAvg30d": 20.54
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 23.0,
          "priceAvg30d": 20.04
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.99,
          "priceAvg30d": 18.17
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.96,
          "priceAvg30d": 17.96
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.86,
          "priceAvg30d": 14.19
        }
      ],
      "avg": 14.87,
      "max": 31.8,
      "maxBlock": 12,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 25.55,
      "spreadLowAvg": 2.56,
      "spreadHighAvg": 28.11,
      "avg30d": 16.04,
      "spread30dAvg": 14.43,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.42,
          "priceAvg30d": 11.71
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.07,
          "priceAvg30d": 11.24
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.95,
          "priceAvg30d": 10.67
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.24,
          "priceAvg30d": 10.37
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.54,
          "priceAvg30d": 10.42
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.07,
          "priceAvg30d": 10.72
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.49,
          "priceAvg30d": 10.53
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.0,
          "priceAvg30d": 12.54
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.0,
          "priceAvg30d": 13.26
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.5,
          "priceAvg30d": 14.42
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 30.5,
          "priceAvg30d": 14.94
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.8,
          "priceAvg30d": 14.56
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 28.63,
          "priceAvg30d": 14.18
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.47,
          "priceAvg30d": 12.59
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.55,
          "priceAvg30d": 10.06
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.24,
          "priceAvg30d": 10.12
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.46,
          "priceAvg30d": 10.57
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 10.08
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 4.36,
          "priceAvg30d": 8.91
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 8.26
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 6.55
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 5.6
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 5.57
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 5.8
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 4.89
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.31
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 7.19
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 7.61
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 9.07
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 10.19
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 6.9,
          "priceAvg30d": 10.73
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 2.0,
          "priceAvg30d": 11.82
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.27,
          "priceAvg30d": 13.96
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 12.07,
          "priceAvg30d": 17.49
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 12.49,
          "priceAvg30d": 18.76
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.99,
          "priceAvg30d": 19.15
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 13.47,
          "priceAvg30d": 18.51
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 14.12,
          "priceAvg30d": 18.05
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 13.47,
          "priceAvg30d": 17.06
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 13.47,
          "priceAvg30d": 16.03
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 12.49,
          "priceAvg30d": 16.1
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 12.12,
          "priceAvg30d": 14.9
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.0,
          "priceAvg30d": 15.41
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.0,
          "priceAvg30d": 14.18
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.0,
          "priceAvg30d": 13.02
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.47,
          "priceAvg30d": 11.99
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.0,
          "priceAvg30d": 12.51
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.86,
          "priceAvg30d": 10.42
        }
      ],
      "avg": 11.03,
      "max": 31.8,
      "maxBlock": 12,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 21.3,
      "spreadLowAvg": 2.31,
      "spreadHighAvg": 23.61,
      "avg30d": 11.83,
      "spread30dAvg": 12.91,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.42,
          "priceAvg30d": 14.77
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.0,
          "priceAvg30d": 15.08
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.86,
          "priceAvg30d": 13.87
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.86,
          "priceAvg30d": 13.33
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.71,
          "priceAvg30d": 13.59
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 17.07,
          "priceAvg30d": 15.07
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.8,
          "priceAvg30d": 15.57
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.3,
          "priceAvg30d": 17.28
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.8,
          "priceAvg30d": 17.95
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.8,
          "priceAvg30d": 19.08
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.8,
          "priceAvg30d": 19.03
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.8,
          "priceAvg30d": 18.47
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.01,
          "priceAvg30d": 18.52
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.8,
          "priceAvg30d": 17.86
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 17.07,
          "priceAvg30d": 13.96
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.11,
          "priceAvg30d": 12.28
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.99,
          "priceAvg30d": 12.0
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 10.86
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 9.22
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 8.28
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.24
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
          "price": 0.01,
          "priceAvg30d": 8.05
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 9.73
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 11.88
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 6.9,
          "priceAvg30d": 14.39
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.14,
          "priceAvg30d": 17.12
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.42,
          "priceAvg30d": 21.69
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.07,
          "priceAvg30d": 24.98
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.96,
          "priceAvg30d": 24.74
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.99,
          "priceAvg30d": 25.3
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.08,
          "priceAvg30d": 24.21
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.08,
          "priceAvg30d": 23.58
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.08,
          "priceAvg30d": 23.51
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 25.18,
          "priceAvg30d": 22.42
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.08,
          "priceAvg30d": 22.41
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.08,
          "priceAvg30d": 21.75
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.15,
          "priceAvg30d": 21.14
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 23.08,
          "priceAvg30d": 20.54
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 23.0,
          "priceAvg30d": 20.04
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.99,
          "priceAvg30d": 18.17
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.96,
          "priceAvg30d": 17.96
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.86,
          "priceAvg30d": 14.19
        }
      ],
      "avg": 14.13,
      "max": 25.8,
      "maxBlock": 7,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 16.9,
      "spreadLowAvg": 3.52,
      "spreadHighAvg": 20.42,
      "avg30d": 15.62,
      "spread30dAvg": 15.41,
      "historyDays": 30
    }
  }
};
