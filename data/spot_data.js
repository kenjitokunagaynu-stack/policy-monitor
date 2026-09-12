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
  "targetDate": "2026-09-12",
  "fetchedAt": "2026-09-12T09:04:50+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 12.36,
        "priceAvg30d": 17.6
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 12.4,
        "priceAvg30d": 16.66
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 12.12,
        "priceAvg30d": 15.99
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 12.07,
        "priceAvg30d": 16.32
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 11.76,
        "priceAvg30d": 16.18
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 11.64,
        "priceAvg30d": 16.18
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 12.06,
        "priceAvg30d": 16.34
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 12.12,
        "priceAvg30d": 16.52
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 12.12,
        "priceAvg30d": 16.67
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 12.51,
        "priceAvg30d": 17.17
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 13.21,
        "priceAvg30d": 17.86
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 12.51,
        "priceAvg30d": 17.34
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 12.12,
        "priceAvg30d": 16.36
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 10.6,
        "priceAvg30d": 15.83
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 9.5,
        "priceAvg30d": 15.35
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 7.66,
        "priceAvg30d": 15.88
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 6.1,
        "priceAvg30d": 16.73
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 8.26,
        "priceAvg30d": 18.3
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 8.5,
        "priceAvg30d": 18.6
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 8.08,
        "priceAvg30d": 18.53
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 8.0,
        "priceAvg30d": 17.73
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 7.0,
        "priceAvg30d": 17.74
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 6.71,
        "priceAvg30d": 17.9
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 5.0,
        "priceAvg30d": 17.82
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 6.1,
        "priceAvg30d": 16.53
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 6.94,
        "priceAvg30d": 16.9
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 8.0,
        "priceAvg30d": 18.09
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 9.28,
        "priceAvg30d": 19.65
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 9.51,
        "priceAvg30d": 21.13
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 9.51,
        "priceAvg30d": 23.04
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 10.02,
        "priceAvg30d": 22.01
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 11.53,
        "priceAvg30d": 24.91
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 12.08,
        "priceAvg30d": 26.45
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 17.61,
        "priceAvg30d": 28.67
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 18.93,
        "priceAvg30d": 28.87
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 20.04,
        "priceAvg30d": 29.59
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 20.94,
        "priceAvg30d": 29.57
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 20.94,
        "priceAvg30d": 29.12
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 20.94,
        "priceAvg30d": 27.49
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 20.94,
        "priceAvg30d": 25.64
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 19.83,
        "priceAvg30d": 23.84
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 18.93,
        "priceAvg30d": 21.82
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 17.45,
        "priceAvg30d": 20.64
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 17.0,
        "priceAvg30d": 22.55
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 17.23,
        "priceAvg30d": 21.4
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 14.42,
        "priceAvg30d": 19.62
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 14.07,
        "priceAvg30d": 19.43
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 12.12,
        "priceAvg30d": 17.65
      }
    ],
    "avg": 12.47,
    "max": 20.94,
    "maxBlock": 37,
    "min": 5.0,
    "minBlock": 24,
    "spread3h": 12.78,
    "spreadLowAvg": 7.12,
    "spreadHighAvg": 19.9,
    "avg30d": 20.05,
    "spread30dAvg": 13.42,
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
          "price": 13.39,
          "priceAvg30d": 14.55
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.0,
          "priceAvg30d": 13.85
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.51,
          "priceAvg30d": 13.17
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.6,
          "priceAvg30d": 13.37
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.21,
          "priceAvg30d": 13.75
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.12,
          "priceAvg30d": 14.08
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.12,
          "priceAvg30d": 15.35
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.21,
          "priceAvg30d": 15.57
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.21,
          "priceAvg30d": 15.76
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.63,
          "priceAvg30d": 16.11
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 15.83
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.52,
          "priceAvg30d": 14.94
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.15,
          "priceAvg30d": 13.32
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.53,
          "priceAvg30d": 11.81
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 7.0,
          "priceAvg30d": 10.82
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 3.5,
          "priceAvg30d": 10.25
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 0.4,
          "priceAvg30d": 10.54
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.01,
          "priceAvg30d": 10.37
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 10.03
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 9.2
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 8.49
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 8.49
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 8.84
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 8.32
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 8.03
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 7.97
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 9.17
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 1.64,
          "priceAvg30d": 10.46
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 4.37,
          "priceAvg30d": 10.72
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.12,
          "priceAvg30d": 12.37
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.22,
          "priceAvg30d": 13.71
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.97,
          "priceAvg30d": 15.94
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.58,
          "priceAvg30d": 19.05
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.47,
          "priceAvg30d": 21.78
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.94,
          "priceAvg30d": 22.18
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.47,
          "priceAvg30d": 22.84
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.94,
          "priceAvg30d": 22.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.94,
          "priceAvg30d": 23.57
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.94,
          "priceAvg30d": 22.15
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.94,
          "priceAvg30d": 21.14
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.1,
          "priceAvg30d": 19.88
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.79,
          "priceAvg30d": 19.19
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.57,
          "priceAvg30d": 18.17
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.01,
          "priceAvg30d": 18.77
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.3,
          "priceAvg30d": 19.05
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.6,
          "priceAvg30d": 17.09
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.28,
          "priceAvg30d": 16.64
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.6,
          "priceAvg30d": 14.87
        }
      ],
      "avg": 10.55,
      "max": 20.94,
      "maxBlock": 35,
      "min": 0.01,
      "minBlock": 18,
      "spread3h": 15.41,
      "spreadLowAvg": 1.82,
      "spreadHighAvg": 17.23,
      "avg30d": 14.67,
      "spread30dAvg": 12.8,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.39,
          "priceAvg30d": 18.64
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.0,
          "priceAvg30d": 17.53
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.51,
          "priceAvg30d": 16.22
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.6,
          "priceAvg30d": 16.49
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.21,
          "priceAvg30d": 16.45
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.12,
          "priceAvg30d": 16.61
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.12,
          "priceAvg30d": 17.56
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.21,
          "priceAvg30d": 17.89
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.21,
          "priceAvg30d": 18.09
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.63,
          "priceAvg30d": 18.76
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 19.3
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.52,
          "priceAvg30d": 18.22
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.15,
          "priceAvg30d": 16.2
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.8,
          "priceAvg30d": 14.13
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 7.82,
          "priceAvg30d": 13.58
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.79,
          "priceAvg30d": 12.92
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 1.0,
          "priceAvg30d": 11.42
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 11.99
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 3.38,
          "priceAvg30d": 12.31
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 4.88,
          "priceAvg30d": 11.87
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 6.84,
          "priceAvg30d": 11.08
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 5.0,
          "priceAvg30d": 11.37
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 4.13,
          "priceAvg30d": 11.04
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 2.5,
          "priceAvg30d": 10.2
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.5,
          "priceAvg30d": 9.39
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 1.69,
          "priceAvg30d": 9.8
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 11.22
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 1.64,
          "priceAvg30d": 12.48
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 4.37,
          "priceAvg30d": 12.65
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.12,
          "priceAvg30d": 14.66
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.22,
          "priceAvg30d": 16.0
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.13,
          "priceAvg30d": 18.62
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.58,
          "priceAvg30d": 21.91
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.47,
          "priceAvg30d": 24.85
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.94,
          "priceAvg30d": 25.17
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.47,
          "priceAvg30d": 25.7
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.94,
          "priceAvg30d": 25.48
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.94,
          "priceAvg30d": 25.49
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.94,
          "priceAvg30d": 23.88
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.94,
          "priceAvg30d": 22.65
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.1,
          "priceAvg30d": 20.73
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.79,
          "priceAvg30d": 19.81
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.57,
          "priceAvg30d": 18.89
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.01,
          "priceAvg30d": 19.98
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.3,
          "priceAvg30d": 20.86
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.6,
          "priceAvg30d": 19.12
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.28,
          "priceAvg30d": 19.66
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.6,
          "priceAvg30d": 18.36
        }
      ],
      "avg": 11.36,
      "max": 20.94,
      "maxBlock": 35,
      "min": 1.0,
      "minBlock": 17,
      "spread3h": 11.48,
      "spreadLowAvg": 5.78,
      "spreadHighAvg": 17.25,
      "avg30d": 17.03,
      "spread30dAvg": 13.78,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.39,
          "priceAvg30d": 18.64
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.0,
          "priceAvg30d": 17.87
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.51,
          "priceAvg30d": 17.08
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.6,
          "priceAvg30d": 17.85
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.21,
          "priceAvg30d": 17.66
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.12,
          "priceAvg30d": 17.67
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.12,
          "priceAvg30d": 17.89
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.21,
          "priceAvg30d": 18.07
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.21,
          "priceAvg30d": 18.32
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.63,
          "priceAvg30d": 18.9
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 19.47
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.52,
          "priceAvg30d": 18.73
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.15,
          "priceAvg30d": 17.42
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.8,
          "priceAvg30d": 17.53
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.0,
          "priceAvg30d": 18.21
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.79,
          "priceAvg30d": 18.73
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.13,
          "priceAvg30d": 19.4
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.2,
          "priceAvg30d": 21.69
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.13,
          "priceAvg30d": 21.01
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.5,
          "priceAvg30d": 21.46
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.43,
          "priceAvg30d": 20.85
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.1,
          "priceAvg30d": 21.19
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.76,
          "priceAvg30d": 21.61
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.3,
          "priceAvg30d": 21.99
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.75,
          "priceAvg30d": 20.67
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.59,
          "priceAvg30d": 21.38
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.59,
          "priceAvg30d": 22.38
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.31,
          "priceAvg30d": 23.94
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 11.5,
          "priceAvg30d": 24.83
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.49,
          "priceAvg30d": 26.39
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.48,
          "priceAvg30d": 23.08
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.99,
          "priceAvg30d": 25.8
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.0,
          "priceAvg30d": 27.06
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.47,
          "priceAvg30d": 28.23
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.94,
          "priceAvg30d": 28.04
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.47,
          "priceAvg30d": 28.03
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.94,
          "priceAvg30d": 27.33
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.94,
          "priceAvg30d": 27.3
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.94,
          "priceAvg30d": 25.5
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.94,
          "priceAvg30d": 24.29
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.1,
          "priceAvg30d": 21.92
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.79,
          "priceAvg30d": 21.27
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.57,
          "priceAvg30d": 20.48
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.01,
          "priceAvg30d": 23.58
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.3,
          "priceAvg30d": 22.15
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.6,
          "priceAvg30d": 20.69
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.28,
          "priceAvg30d": 21.07
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.6,
          "priceAvg30d": 18.91
        }
      ],
      "avg": 13.72,
      "max": 20.94,
      "maxBlock": 35,
      "min": 7.79,
      "minBlock": 16,
      "spread3h": 8.73,
      "spreadLowAvg": 10.07,
      "spreadHighAvg": 18.8,
      "avg30d": 21.53,
      "spread30dAvg": 10.54,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.39,
          "priceAvg30d": 18.62
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.0,
          "priceAvg30d": 17.85
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.51,
          "priceAvg30d": 17.16
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.6,
          "priceAvg30d": 18.07
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.21,
          "priceAvg30d": 17.85
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.12,
          "priceAvg30d": 17.82
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.12,
          "priceAvg30d": 17.8
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.21,
          "priceAvg30d": 18.13
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.21,
          "priceAvg30d": 18.38
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.63,
          "priceAvg30d": 18.99
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 19.49
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.52,
          "priceAvg30d": 19.09
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.15,
          "priceAvg30d": 17.88
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.37,
          "priceAvg30d": 17.62
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.6,
          "priceAvg30d": 17.54
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.79,
          "priceAvg30d": 18.09
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.13,
          "priceAvg30d": 19.24
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.2,
          "priceAvg30d": 20.99
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.13,
          "priceAvg30d": 21.48
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.5,
          "priceAvg30d": 21.77
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.31,
          "priceAvg30d": 21.33
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 6.85,
          "priceAvg30d": 21.42
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 5.68,
          "priceAvg30d": 21.65
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.0,
          "priceAvg30d": 21.9
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 6.55,
          "priceAvg30d": 20.32
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.31,
          "priceAvg30d": 20.77
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.59,
          "priceAvg30d": 22.83
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.31,
          "priceAvg30d": 24.59
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 11.5,
          "priceAvg30d": 25.5
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.49,
          "priceAvg30d": 26.68
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.48,
          "priceAvg30d": 25.62
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.11,
          "priceAvg30d": 28.26
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.08,
          "priceAvg30d": 29.74
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.37,
          "priceAvg30d": 31.45
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 17.59,
          "priceAvg30d": 31.84
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.47,
          "priceAvg30d": 32.39
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.94,
          "priceAvg30d": 32.78
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.94,
          "priceAvg30d": 31.66
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.94,
          "priceAvg30d": 30.0
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.94,
          "priceAvg30d": 28.34
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.1,
          "priceAvg30d": 26.68
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.79,
          "priceAvg30d": 25.27
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.57,
          "priceAvg30d": 23.95
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.01,
          "priceAvg30d": 24.26
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.3,
          "priceAvg30d": 23.78
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.6,
          "priceAvg30d": 22.2
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.28,
          "priceAvg30d": 21.48
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.6,
          "priceAvg30d": 19.2
        }
      ],
      "avg": 13.07,
      "max": 20.94,
      "maxBlock": 37,
      "min": 5.68,
      "minBlock": 23,
      "spread3h": 11.95,
      "spreadLowAvg": 7.75,
      "spreadHighAvg": 19.71,
      "avg30d": 22.7,
      "spread30dAvg": 15.01,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.95,
          "priceAvg30d": 16.58
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.95,
          "priceAvg30d": 16.38
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.6,
          "priceAvg30d": 15.72
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.6,
          "priceAvg30d": 15.43
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.6,
          "priceAvg30d": 15.47
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 15.98
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.0,
          "priceAvg30d": 15.91
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.1,
          "priceAvg30d": 15.99
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.21,
          "priceAvg30d": 15.93
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.63,
          "priceAvg30d": 16.4
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 16.96
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.52,
          "priceAvg30d": 16.8
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.15,
          "priceAvg30d": 16.29
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.6,
          "priceAvg30d": 15.37
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 15.27
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.79,
          "priceAvg30d": 15.91
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.13,
          "priceAvg30d": 16.8
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.51,
          "priceAvg30d": 19.47
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.51,
          "priceAvg30d": 20.07
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.38,
          "priceAvg30d": 20.85
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.31,
          "priceAvg30d": 20.42
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 6.85,
          "priceAvg30d": 20.5
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 5.68,
          "priceAvg30d": 20.28
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.0,
          "priceAvg30d": 20.93
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 6.55,
          "priceAvg30d": 18.78
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.31,
          "priceAvg30d": 19.32
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.51,
          "priceAvg30d": 21.44
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.02,
          "priceAvg30d": 23.11
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 11.5,
          "priceAvg30d": 23.79
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.49,
          "priceAvg30d": 24.9
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.02,
          "priceAvg30d": 24.19
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.6,
          "priceAvg30d": 26.79
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.08,
          "priceAvg30d": 27.84
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.37,
          "priceAvg30d": 30.03
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 17.48,
          "priceAvg30d": 29.9
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.38,
          "priceAvg30d": 30.83
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.04,
          "priceAvg30d": 31.11
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.59,
          "priceAvg30d": 30.06
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.94,
          "priceAvg30d": 28.43
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.94,
          "priceAvg30d": 26.77
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.38,
          "priceAvg30d": 25.14
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.93,
          "priceAvg30d": 23.44
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.48,
          "priceAvg30d": 21.8
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.01,
          "priceAvg30d": 21.55
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.23,
          "priceAvg30d": 21.29
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.6,
          "priceAvg30d": 19.86
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.28,
          "priceAvg30d": 19.3
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.0,
          "priceAvg30d": 16.71
        }
      ],
      "avg": 12.45,
      "max": 20.94,
      "maxBlock": 39,
      "min": 5.68,
      "minBlock": 23,
      "spread3h": 12.14,
      "spreadLowAvg": 7.57,
      "spreadHighAvg": 19.71,
      "avg30d": 20.88,
      "spread30dAvg": 14.78,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.95,
          "priceAvg30d": 15.53
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.95,
          "priceAvg30d": 15.74
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.6,
          "priceAvg30d": 15.16
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.6,
          "priceAvg30d": 14.88
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.6,
          "priceAvg30d": 14.88
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 15.22
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.0,
          "priceAvg30d": 15.12
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.1,
          "priceAvg30d": 15.2
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.21,
          "priceAvg30d": 15.17
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.63,
          "priceAvg30d": 15.67
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 16.22
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.52,
          "priceAvg30d": 16.2
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.15,
          "priceAvg30d": 15.89
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.6,
          "priceAvg30d": 14.93
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 14.61
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.79,
          "priceAvg30d": 14.94
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.13,
          "priceAvg30d": 15.72
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.51,
          "priceAvg30d": 18.06
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.51,
          "priceAvg30d": 18.74
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.38,
          "priceAvg30d": 19.19
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.31,
          "priceAvg30d": 19.04
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 6.85,
          "priceAvg30d": 19.18
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 5.68,
          "priceAvg30d": 19.57
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.0,
          "priceAvg30d": 19.65
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 6.55,
          "priceAvg30d": 17.68
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.31,
          "priceAvg30d": 17.97
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.51,
          "priceAvg30d": 20.4
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.02,
          "priceAvg30d": 22.42
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 11.5,
          "priceAvg30d": 23.01
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.49,
          "priceAvg30d": 23.72
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.02,
          "priceAvg30d": 23.38
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.6,
          "priceAvg30d": 25.16
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.08,
          "priceAvg30d": 26.33
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.37,
          "priceAvg30d": 29.34
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 17.48,
          "priceAvg30d": 29.56
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.38,
          "priceAvg30d": 30.31
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.04,
          "priceAvg30d": 30.63
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.59,
          "priceAvg30d": 29.71
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.94,
          "priceAvg30d": 28.2
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.94,
          "priceAvg30d": 26.48
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.38,
          "priceAvg30d": 25.01
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.93,
          "priceAvg30d": 23.29
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.48,
          "priceAvg30d": 21.68
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.01,
          "priceAvg30d": 20.52
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.23,
          "priceAvg30d": 19.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.6,
          "priceAvg30d": 17.22
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.28,
          "priceAvg30d": 17.16
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.0,
          "priceAvg30d": 15.3
        }
      ],
      "avg": 12.45,
      "max": 20.94,
      "maxBlock": 39,
      "min": 5.68,
      "minBlock": 23,
      "spread3h": 12.14,
      "spreadLowAvg": 7.57,
      "spreadHighAvg": 19.71,
      "avg30d": 19.96,
      "spread30dAvg": 14.77,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.95,
          "priceAvg30d": 15.53
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.95,
          "priceAvg30d": 15.74
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.6,
          "priceAvg30d": 15.16
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.6,
          "priceAvg30d": 14.88
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.6,
          "priceAvg30d": 14.88
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 15.22
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.0,
          "priceAvg30d": 15.12
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.1,
          "priceAvg30d": 15.2
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.21,
          "priceAvg30d": 15.17
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.63,
          "priceAvg30d": 15.67
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 16.22
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.52,
          "priceAvg30d": 16.2
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.15,
          "priceAvg30d": 15.89
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.6,
          "priceAvg30d": 14.93
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 14.52
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.79,
          "priceAvg30d": 14.36
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.13,
          "priceAvg30d": 14.75
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.51,
          "priceAvg30d": 16.08
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.51,
          "priceAvg30d": 15.66
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.38,
          "priceAvg30d": 14.81
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.31,
          "priceAvg30d": 14.91
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 6.85,
          "priceAvg30d": 14.82
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 5.68,
          "priceAvg30d": 14.68
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.0,
          "priceAvg30d": 14.52
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 6.55,
          "priceAvg30d": 12.79
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.31,
          "priceAvg30d": 12.98
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.51,
          "priceAvg30d": 14.68
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.01,
          "priceAvg30d": 16.22
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.51,
          "priceAvg30d": 16.55
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.74,
          "priceAvg30d": 17.68
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.63,
          "priceAvg30d": 19.82
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.6,
          "priceAvg30d": 23.67
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.08,
          "priceAvg30d": 26.23
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.37,
          "priceAvg30d": 29.3
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 17.48,
          "priceAvg30d": 29.56
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.38,
          "priceAvg30d": 30.31
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.04,
          "priceAvg30d": 30.63
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.59,
          "priceAvg30d": 29.71
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.94,
          "priceAvg30d": 28.2
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.94,
          "priceAvg30d": 26.48
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.38,
          "priceAvg30d": 25.01
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.93,
          "priceAvg30d": 23.29
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.48,
          "priceAvg30d": 21.68
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.01,
          "priceAvg30d": 20.52
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.23,
          "priceAvg30d": 19.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.6,
          "priceAvg30d": 17.22
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.28,
          "priceAvg30d": 17.16
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.0,
          "priceAvg30d": 15.3
        }
      ],
      "avg": 12.34,
      "max": 20.94,
      "maxBlock": 39,
      "min": 5.68,
      "minBlock": 23,
      "spread3h": 12.14,
      "spreadLowAvg": 7.57,
      "spreadHighAvg": 19.71,
      "avg30d": 18.52,
      "spread30dAvg": 16.05,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 7.99,
          "priceAvg30d": 15.27
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.07,
          "priceAvg30d": 15.48
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 8.06,
          "priceAvg30d": 14.87
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 8.03,
          "priceAvg30d": 14.61
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.04,
          "priceAvg30d": 14.65
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 8.02,
          "priceAvg30d": 14.99
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 8.03,
          "priceAvg30d": 14.84
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 8.07,
          "priceAvg30d": 14.94
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.07,
          "priceAvg30d": 14.91
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.9,
          "priceAvg30d": 15.41
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.51,
          "priceAvg30d": 15.97
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.13,
          "priceAvg30d": 15.94
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.15,
          "priceAvg30d": 15.6
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.12,
          "priceAvg30d": 14.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.2,
          "priceAvg30d": 14.11
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.79,
          "priceAvg30d": 13.58
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.1,
          "priceAvg30d": 13.98
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 7.96,
          "priceAvg30d": 15.2
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 3.0,
          "priceAvg30d": 14.78
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 13.35
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 12.87
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 12.25
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 12.05
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 12.14
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 10.53
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 11.01
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 12.72
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 14.85
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.0,
          "priceAvg30d": 15.08
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 3.0,
          "priceAvg30d": 16.58
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 6.5,
          "priceAvg30d": 18.68
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 7.92,
          "priceAvg30d": 22.53
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 7.96,
          "priceAvg30d": 25.25
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 8.05,
          "priceAvg30d": 28.68
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 8.74,
          "priceAvg30d": 28.94
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 15.41,
          "priceAvg30d": 29.81
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.5,
          "priceAvg30d": 30.31
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.5,
          "priceAvg30d": 29.35
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.0,
          "priceAvg30d": 27.59
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.51,
          "priceAvg30d": 25.7
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 12.13,
          "priceAvg30d": 24.13
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 13.27,
          "priceAvg30d": 22.28
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 8.72,
          "priceAvg30d": 20.62
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 8.69,
          "priceAvg30d": 19.59
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 8.9,
          "priceAvg30d": 18.15
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 8.74,
          "priceAvg30d": 16.43
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.28,
          "priceAvg30d": 16.3
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.0,
          "priceAvg30d": 14.92
        }
      ],
      "avg": 7.8,
      "max": 17.5,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 10.95,
      "spreadLowAvg": 2.25,
      "spreadHighAvg": 13.2,
      "avg30d": 17.63,
      "spread30dAvg": 17.63,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.95,
          "priceAvg30d": 14.49
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.95,
          "priceAvg30d": 14.71
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.6,
          "priceAvg30d": 13.01
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.6,
          "priceAvg30d": 12.41
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.6,
          "priceAvg30d": 12.01
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 12.2
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.0,
          "priceAvg30d": 12.12
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.1,
          "priceAvg30d": 12.38
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.21,
          "priceAvg30d": 12.39
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.63,
          "priceAvg30d": 13.55
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.21,
          "priceAvg30d": 14.57
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.52,
          "priceAvg30d": 14.98
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.15,
          "priceAvg30d": 14.92
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.6,
          "priceAvg30d": 12.49
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.63,
          "priceAvg30d": 11.58
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.79,
          "priceAvg30d": 11.7
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.13,
          "priceAvg30d": 13.04
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.51,
          "priceAvg30d": 13.8
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.51,
          "priceAvg30d": 13.66
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.38,
          "priceAvg30d": 13.15
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.31,
          "priceAvg30d": 12.57
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 6.85,
          "priceAvg30d": 12.43
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 5.68,
          "priceAvg30d": 12.39
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.0,
          "priceAvg30d": 12.23
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 6.55,
          "priceAvg30d": 11.48
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.31,
          "priceAvg30d": 11.65
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.51,
          "priceAvg30d": 12.89
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.01,
          "priceAvg30d": 14.49
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.51,
          "priceAvg30d": 15.23
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.74,
          "priceAvg30d": 16.63
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.63,
          "priceAvg30d": 19.31
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.6,
          "priceAvg30d": 23.14
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.08,
          "priceAvg30d": 26.03
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.37,
          "priceAvg30d": 29.3
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 17.48,
          "priceAvg30d": 29.56
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.38,
          "priceAvg30d": 30.31
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.04,
          "priceAvg30d": 30.63
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.59,
          "priceAvg30d": 29.71
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.94,
          "priceAvg30d": 28.2
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.94,
          "priceAvg30d": 26.48
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.38,
          "priceAvg30d": 25.01
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.93,
          "priceAvg30d": 23.29
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.48,
          "priceAvg30d": 21.67
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.01,
          "priceAvg30d": 20.52
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.23,
          "priceAvg30d": 18.87
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.6,
          "priceAvg30d": 16.88
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.28,
          "priceAvg30d": 16.47
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.0,
          "priceAvg30d": 13.52
        }
      ],
      "avg": 12.34,
      "max": 20.94,
      "maxBlock": 39,
      "min": 5.68,
      "minBlock": 23,
      "spread3h": 12.14,
      "spreadLowAvg": 7.57,
      "spreadHighAvg": 19.71,
      "avg30d": 17.17,
      "spread30dAvg": 17.88,
      "historyDays": 30
    }
  }
};
