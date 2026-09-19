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
  "targetDate": "2026-09-19",
  "fetchedAt": "2026-09-19T09:04:51+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 18.78,
        "priceAvg30d": 17.6
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 18.3,
        "priceAvg30d": 16.7
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 18.42,
        "priceAvg30d": 15.98
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 18.29,
        "priceAvg30d": 16.03
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 18.3,
        "priceAvg30d": 15.94
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 19.79,
        "priceAvg30d": 15.98
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 19.59,
        "priceAvg30d": 16.22
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 20.4,
        "priceAvg30d": 16.31
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 20.4,
        "priceAvg30d": 16.6
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 22.07,
        "priceAvg30d": 17.24
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 22.01,
        "priceAvg30d": 18.0
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 21.46,
        "priceAvg30d": 17.71
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 17.5,
        "priceAvg30d": 17.12
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 15.68,
        "priceAvg30d": 16.44
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 11.85,
        "priceAvg30d": 15.94
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 11.04,
        "priceAvg30d": 16.26
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 11.16,
        "priceAvg30d": 17.07
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 11.48,
        "priceAvg30d": 18.75
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 11.16,
        "priceAvg30d": 19.4
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 11.24,
        "priceAvg30d": 19.28
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 11.02,
        "priceAvg30d": 18.33
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 10.7,
        "priceAvg30d": 18.38
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 10.52,
        "priceAvg30d": 18.39
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 10.37,
        "priceAvg30d": 18.24
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 10.31,
        "priceAvg30d": 16.79
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 10.38,
        "priceAvg30d": 17.19
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 10.31,
        "priceAvg30d": 18.59
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 11.14,
        "priceAvg30d": 20.41
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 12.0,
        "priceAvg30d": 22.04
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 13.39,
        "priceAvg30d": 23.94
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 12.48,
        "priceAvg30d": 23.13
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 14.09,
        "priceAvg30d": 25.94
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 16.85,
        "priceAvg30d": 27.24
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 20.96,
        "priceAvg30d": 29.71
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 21.58,
        "priceAvg30d": 29.59
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 22.48,
        "priceAvg30d": 30.15
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 22.04,
        "priceAvg30d": 30.12
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 22.51,
        "priceAvg30d": 29.43
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 22.3,
        "priceAvg30d": 27.88
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 22.01,
        "priceAvg30d": 25.84
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 22.0,
        "priceAvg30d": 24.04
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 21.66,
        "priceAvg30d": 22.27
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 18.79,
        "priceAvg30d": 21.17
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 21.49,
        "priceAvg30d": 22.68
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 21.49,
        "priceAvg30d": 21.73
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 19.4,
        "priceAvg30d": 19.75
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 20.12,
        "priceAvg30d": 19.48
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 17.1,
        "priceAvg30d": 17.7
      }
    ],
    "avg": 16.84,
    "max": 22.51,
    "maxBlock": 38,
    "min": 10.31,
    "minBlock": 25,
    "spread3h": 11.5,
    "spreadLowAvg": 10.57,
    "spreadHighAvg": 22.07,
    "avg30d": 20.43,
    "spread30dAvg": 13.94,
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
          "price": 20.7,
          "priceAvg30d": 14.34
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.0,
          "priceAvg30d": 13.79
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.0,
          "priceAvg30d": 13.25
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.0,
          "priceAvg30d": 13.03
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.84,
          "priceAvg30d": 13.75
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 21.03,
          "priceAvg30d": 14.24
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 21.06,
          "priceAvg30d": 15.31
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.41,
          "priceAvg30d": 15.56
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.77,
          "priceAvg30d": 15.93
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.07,
          "priceAvg30d": 16.02
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.57,
          "priceAvg30d": 15.87
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.67,
          "priceAvg30d": 14.94
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.7,
          "priceAvg30d": 14.03
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.97,
          "priceAvg30d": 12.26
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.7,
          "priceAvg30d": 11.31
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.0,
          "priceAvg30d": 10.87
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 14.01,
          "priceAvg30d": 10.48
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 21.53,
          "priceAvg30d": 10.71
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 14.01,
          "priceAvg30d": 10.22
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.0,
          "priceAvg30d": 9.38
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.97,
          "priceAvg30d": 8.8
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.7,
          "priceAvg30d": 8.85
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 15.0,
          "priceAvg30d": 9.16
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 15.5,
          "priceAvg30d": 8.42
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.52,
          "priceAvg30d": 7.83
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.0,
          "priceAvg30d": 7.75
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 13.0,
          "priceAvg30d": 9.22
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 17.31,
          "priceAvg30d": 11.24
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 13.0,
          "priceAvg30d": 11.52
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.0,
          "priceAvg30d": 12.9
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 20.0,
          "priceAvg30d": 14.38
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 19.9,
          "priceAvg30d": 16.39
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 20.33,
          "priceAvg30d": 19.3
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.0,
          "priceAvg30d": 21.84
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 15.0,
          "priceAvg30d": 22.41
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.42,
          "priceAvg30d": 22.84
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 15.0,
          "priceAvg30d": 22.59
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.6,
          "priceAvg30d": 23.12
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.0,
          "priceAvg30d": 22.04
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.0,
          "priceAvg30d": 20.65
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.0,
          "priceAvg30d": 20.01
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 10.7,
          "priceAvg30d": 19.25
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 13.0,
          "priceAvg30d": 18.04
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.9,
          "priceAvg30d": 18.0
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 9.97,
          "priceAvg30d": 18.61
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 9.97,
          "priceAvg30d": 16.96
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.97,
          "priceAvg30d": 16.24
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.66,
          "priceAvg30d": 15.15
        }
      ],
      "avg": 15.93,
      "max": 22.57,
      "maxBlock": 11,
      "min": 9.66,
      "minBlock": 48,
      "spread3h": 7.79,
      "spreadLowAvg": 9.97,
      "spreadHighAvg": 17.77,
      "avg30d": 14.77,
      "spread30dAvg": 12.59,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 18.93,
          "priceAvg30d": 18.99
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.5,
          "priceAvg30d": 17.92
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.79,
          "priceAvg30d": 16.72
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.38,
          "priceAvg30d": 16.51
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.79,
          "priceAvg30d": 16.73
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.5,
          "priceAvg30d": 16.85
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 14.01,
          "priceAvg30d": 17.93
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.0,
          "priceAvg30d": 18.15
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 9.78,
          "priceAvg30d": 18.62
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 9.78,
          "priceAvg30d": 18.99
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 9.78,
          "priceAvg30d": 19.57
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 9.78,
          "priceAvg30d": 18.79
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 9.67,
          "priceAvg30d": 17.28
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.54,
          "priceAvg30d": 14.83
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.54,
          "priceAvg30d": 13.95
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.53,
          "priceAvg30d": 13.62
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.23,
          "priceAvg30d": 11.51
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.64,
          "priceAvg30d": 12.46
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.64,
          "priceAvg30d": 13.02
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.64,
          "priceAvg30d": 12.58
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.5,
          "priceAvg30d": 11.81
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.5,
          "priceAvg30d": 12.11
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.5,
          "priceAvg30d": 11.72
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.5,
          "priceAvg30d": 10.74
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.48,
          "priceAvg30d": 9.48
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.44,
          "priceAvg30d": 9.98
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.46,
          "priceAvg30d": 11.65
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.64,
          "priceAvg30d": 13.27
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.64,
          "priceAvg30d": 13.55
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.91,
          "priceAvg30d": 15.52
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.39,
          "priceAvg30d": 16.92
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 19.9,
          "priceAvg30d": 19.87
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 20.33,
          "priceAvg30d": 23.0
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.0,
          "priceAvg30d": 26.12
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 15.0,
          "priceAvg30d": 26.02
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.42,
          "priceAvg30d": 26.49
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 15.0,
          "priceAvg30d": 26.51
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.6,
          "priceAvg30d": 26.29
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.0,
          "priceAvg30d": 24.42
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.0,
          "priceAvg30d": 22.8
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.0,
          "priceAvg30d": 21.29
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 10.7,
          "priceAvg30d": 20.38
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 13.0,
          "priceAvg30d": 19.34
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.9,
          "priceAvg30d": 19.65
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 9.54,
          "priceAvg30d": 21.41
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 9.54,
          "priceAvg30d": 19.59
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.67,
          "priceAvg30d": 19.97
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.66,
          "priceAvg30d": 19.13
        }
      ],
      "avg": 12.16,
      "max": 20.33,
      "maxBlock": 33,
      "min": 9.44,
      "minBlock": 26,
      "spread3h": 6.23,
      "spreadLowAvg": 9.54,
      "spreadHighAvg": 15.77,
      "avg30d": 17.58,
      "spread30dAvg": 13.96,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.91,
          "priceAvg30d": 18.99
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.9,
          "priceAvg30d": 18.48
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.36,
          "priceAvg30d": 17.72
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.15,
          "priceAvg30d": 18.23
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.92,
          "priceAvg30d": 18.07
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 24.43,
          "priceAvg30d": 18.02
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 24.35,
          "priceAvg30d": 18.4
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.71,
          "priceAvg30d": 18.38
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.38,
          "priceAvg30d": 18.82
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.62,
          "priceAvg30d": 19.12
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.35,
          "priceAvg30d": 19.67
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.15,
          "priceAvg30d": 19.24
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 21.5,
          "priceAvg30d": 18.43
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 21.74,
          "priceAvg30d": 18.56
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 18.02,
          "priceAvg30d": 18.84
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 19.88,
          "priceAvg30d": 19.43
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.68,
          "priceAvg30d": 20.77
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 22.26,
          "priceAvg30d": 23.19
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 21.83,
          "priceAvg30d": 22.86
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 22.7,
          "priceAvg30d": 23.22
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.59,
          "priceAvg30d": 22.66
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.68,
          "priceAvg30d": 23.14
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 22.59,
          "priceAvg30d": 23.44
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 21.87,
          "priceAvg30d": 23.59
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.65,
          "priceAvg30d": 21.89
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.7,
          "priceAvg30d": 22.58
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 15.68,
          "priceAvg30d": 23.86
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 15.68,
          "priceAvg30d": 25.26
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 20.0,
          "priceAvg30d": 25.87
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 21.96,
          "priceAvg30d": 27.33
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.39,
          "priceAvg30d": 24.78
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 19.9,
          "priceAvg30d": 27.17
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 22.19,
          "priceAvg30d": 28.48
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 22.8,
          "priceAvg30d": 29.64
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.7,
          "priceAvg30d": 29.1
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 22.78,
          "priceAvg30d": 28.92
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 22.7,
          "priceAvg30d": 28.24
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.8,
          "priceAvg30d": 28.2
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.7,
          "priceAvg30d": 26.47
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.7,
          "priceAvg30d": 24.92
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.8,
          "priceAvg30d": 22.8
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.81,
          "priceAvg30d": 22.27
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.7,
          "priceAvg30d": 21.43
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 23.86,
          "priceAvg30d": 24.16
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.16,
          "priceAvg30d": 22.95
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.43,
          "priceAvg30d": 21.46
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.16,
          "priceAvg30d": 21.47
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.79,
          "priceAvg30d": 19.68
        }
      ],
      "avg": 22.26,
      "max": 25.91,
      "maxBlock": 1,
      "min": 13.39,
      "minBlock": 31,
      "spread3h": 3.27,
      "spreadLowAvg": 20.42,
      "spreadHighAvg": 23.69,
      "avg30d": 22.5,
      "spread30dAvg": 10.78,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.91,
          "priceAvg30d": 19.14
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.9,
          "priceAvg30d": 18.59
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.36,
          "priceAvg30d": 17.85
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.15,
          "priceAvg30d": 18.2
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.92,
          "priceAvg30d": 18.03
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 24.43,
          "priceAvg30d": 18.06
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 24.35,
          "priceAvg30d": 18.25
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.71,
          "priceAvg30d": 18.47
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.38,
          "priceAvg30d": 18.91
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.62,
          "priceAvg30d": 19.24
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.35,
          "priceAvg30d": 19.66
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.15,
          "priceAvg30d": 19.64
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 21.5,
          "priceAvg30d": 19.09
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 21.74,
          "priceAvg30d": 18.78
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 18.02,
          "priceAvg30d": 18.37
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.23,
          "priceAvg30d": 18.93
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.25,
          "priceAvg30d": 20.58
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 12.0,
          "priceAvg30d": 22.62
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.0,
          "priceAvg30d": 23.26
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.0,
          "priceAvg30d": 23.63
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.91,
          "priceAvg30d": 22.95
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.74,
          "priceAvg30d": 23.17
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.84,
          "priceAvg30d": 23.3
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.84,
          "priceAvg30d": 23.35
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.9,
          "priceAvg30d": 21.63
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.0,
          "priceAvg30d": 22.13
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.24,
          "priceAvg30d": 24.37
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 12.55,
          "priceAvg30d": 25.96
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.55,
          "priceAvg30d": 26.75
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 15.0,
          "priceAvg30d": 27.81
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.39,
          "priceAvg30d": 27.16
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 19.9,
          "priceAvg30d": 29.36
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 22.19,
          "priceAvg30d": 30.63
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 22.8,
          "priceAvg30d": 32.68
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.7,
          "priceAvg30d": 32.85
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 22.78,
          "priceAvg30d": 33.08
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 22.7,
          "priceAvg30d": 33.25
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.8,
          "priceAvg30d": 32.26
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.7,
          "priceAvg30d": 30.89
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.7,
          "priceAvg30d": 28.63
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.8,
          "priceAvg30d": 26.98
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.81,
          "priceAvg30d": 25.7
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.8,
          "priceAvg30d": 24.28
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 23.86,
          "priceAvg30d": 24.54
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.16,
          "priceAvg30d": 23.6
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.43,
          "priceAvg30d": 21.87
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.16,
          "priceAvg30d": 21.54
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.79,
          "priceAvg30d": 19.9
        }
      ],
      "avg": 19.63,
      "max": 25.91,
      "maxBlock": 1,
      "min": 11.74,
      "minBlock": 22,
      "spread3h": 11.77,
      "spreadLowAvg": 11.91,
      "spreadHighAvg": 23.69,
      "avg30d": 23.54,
      "spread30dAvg": 14.98,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.05,
          "priceAvg30d": 15.47
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.8,
          "priceAvg30d": 15.44
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.37,
          "priceAvg30d": 15.02
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.38,
          "priceAvg30d": 14.81
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.38,
          "priceAvg30d": 14.93
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.38,
          "priceAvg30d": 15.17
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 15.32
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.38,
          "priceAvg30d": 15.36
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.41,
          "priceAvg30d": 15.33
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.7,
          "priceAvg30d": 16.0
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.81,
          "priceAvg30d": 16.49
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.81,
          "priceAvg30d": 16.58
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.1,
          "priceAvg30d": 16.74
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.41,
          "priceAvg30d": 15.51
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.12,
          "priceAvg30d": 15.56
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.42,
          "priceAvg30d": 15.44
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.99,
          "priceAvg30d": 16.48
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.14,
          "priceAvg30d": 19.98
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.99,
          "priceAvg30d": 21.3
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.98,
          "priceAvg30d": 22.22
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.14,
          "priceAvg30d": 21.34
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.01,
          "priceAvg30d": 21.37
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.14,
          "priceAvg30d": 21.25
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.98,
          "priceAvg30d": 21.39
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.1,
          "priceAvg30d": 19.18
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.28,
          "priceAvg30d": 19.77
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.87,
          "priceAvg30d": 22.35
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 23.79
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.26,
          "priceAvg30d": 24.61
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.52,
          "priceAvg30d": 25.29
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.45,
          "priceAvg30d": 24.65
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.38,
          "priceAvg30d": 26.88
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.25,
          "priceAvg30d": 27.27
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.95,
          "priceAvg30d": 29.86
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.77,
          "priceAvg30d": 29.46
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 17.67,
          "priceAvg30d": 30.26
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.34,
          "priceAvg30d": 30.55
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.71,
          "priceAvg30d": 29.53
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.64,
          "priceAvg30d": 28.21
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.6,
          "priceAvg30d": 26.19
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 18.42,
          "priceAvg30d": 24.67
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.85,
          "priceAvg30d": 23.24
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.81,
          "priceAvg30d": 22.02
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.63,
          "priceAvg30d": 21.47
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.66,
          "priceAvg30d": 20.2
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.8,
          "priceAvg30d": 18.44
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.0,
          "priceAvg30d": 18.17
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.85,
          "priceAvg30d": 15.72
        }
      ],
      "avg": 12.38,
      "max": 18.71,
      "maxBlock": 38,
      "min": 8.1,
      "minBlock": 25,
      "spread3h": 7.81,
      "spreadLowAvg": 9.93,
      "spreadHighAvg": 17.74,
      "avg30d": 20.76,
      "spread30dAvg": 15.28,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.05,
          "priceAvg30d": 14.71
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.8,
          "priceAvg30d": 15.02
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.37,
          "priceAvg30d": 14.65
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.38,
          "priceAvg30d": 14.46
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.38,
          "priceAvg30d": 14.55
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.38,
          "priceAvg30d": 14.78
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 14.92
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.38,
          "priceAvg30d": 14.97
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.41,
          "priceAvg30d": 14.94
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.7,
          "priceAvg30d": 15.61
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.81,
          "priceAvg30d": 16.11
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.81,
          "priceAvg30d": 16.23
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.1,
          "priceAvg30d": 16.37
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.41,
          "priceAvg30d": 15.12
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.12,
          "priceAvg30d": 15.14
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.42,
          "priceAvg30d": 14.91
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.99,
          "priceAvg30d": 15.8
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.14,
          "priceAvg30d": 18.9
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.99,
          "priceAvg30d": 20.44
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.98,
          "priceAvg30d": 20.99
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.14,
          "priceAvg30d": 20.15
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.01,
          "priceAvg30d": 20.31
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.14,
          "priceAvg30d": 20.66
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.98,
          "priceAvg30d": 20.3
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.1,
          "priceAvg30d": 18.38
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.28,
          "priceAvg30d": 18.66
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.87,
          "priceAvg30d": 21.48
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 23.25
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.26,
          "priceAvg30d": 23.9
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.52,
          "priceAvg30d": 24.22
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.45,
          "priceAvg30d": 23.6
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.38,
          "priceAvg30d": 25.37
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.25,
          "priceAvg30d": 26.49
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.95,
          "priceAvg30d": 29.49
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.77,
          "priceAvg30d": 29.31
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 17.67,
          "priceAvg30d": 30.13
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.34,
          "priceAvg30d": 30.43
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.71,
          "priceAvg30d": 29.4
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.64,
          "priceAvg30d": 28.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.6,
          "priceAvg30d": 26.01
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 18.42,
          "priceAvg30d": 24.62
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.85,
          "priceAvg30d": 23.15
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.81,
          "priceAvg30d": 21.89
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.63,
          "priceAvg30d": 20.77
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.66,
          "priceAvg30d": 19.42
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.8,
          "priceAvg30d": 17.62
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.0,
          "priceAvg30d": 17.35
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.85,
          "priceAvg30d": 14.96
        }
      ],
      "avg": 12.38,
      "max": 18.71,
      "maxBlock": 38,
      "min": 8.1,
      "minBlock": 25,
      "spread3h": 7.81,
      "spreadLowAvg": 9.93,
      "spreadHighAvg": 17.74,
      "avg30d": 20.17,
      "spread30dAvg": 15.02,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.05,
          "priceAvg30d": 14.71
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.8,
          "priceAvg30d": 15.02
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.37,
          "priceAvg30d": 14.65
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.38,
          "priceAvg30d": 14.46
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.38,
          "priceAvg30d": 14.55
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.38,
          "priceAvg30d": 14.78
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 14.82
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.38,
          "priceAvg30d": 14.97
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.41,
          "priceAvg30d": 14.9
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.7,
          "priceAvg30d": 15.55
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.81,
          "priceAvg30d": 16.1
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.81,
          "priceAvg30d": 16.23
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.1,
          "priceAvg30d": 16.3
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.41,
          "priceAvg30d": 14.97
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.12,
          "priceAvg30d": 14.73
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.42,
          "priceAvg30d": 13.96
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.99,
          "priceAvg30d": 14.45
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.14,
          "priceAvg30d": 15.53
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.99,
          "priceAvg30d": 15.7
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.98,
          "priceAvg30d": 14.88
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.14,
          "priceAvg30d": 14.45
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.01,
          "priceAvg30d": 14.41
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.14,
          "priceAvg30d": 14.15
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.98,
          "priceAvg30d": 13.87
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.1,
          "priceAvg30d": 12.22
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.28,
          "priceAvg30d": 12.42
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.87,
          "priceAvg30d": 14.94
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 16.47
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.26,
          "priceAvg30d": 16.33
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.41,
          "priceAvg30d": 17.24
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.45,
          "priceAvg30d": 19.67
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.38,
          "priceAvg30d": 23.59
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.25,
          "priceAvg30d": 25.89
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.95,
          "priceAvg30d": 29.28
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.77,
          "priceAvg30d": 29.31
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 17.67,
          "priceAvg30d": 30.13
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.34,
          "priceAvg30d": 30.43
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.71,
          "priceAvg30d": 29.4
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.64,
          "priceAvg30d": 28.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.6,
          "priceAvg30d": 26.01
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 18.42,
          "priceAvg30d": 24.62
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.85,
          "priceAvg30d": 23.15
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.81,
          "priceAvg30d": 21.89
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.63,
          "priceAvg30d": 20.77
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.66,
          "priceAvg30d": 19.39
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.8,
          "priceAvg30d": 17.61
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.0,
          "priceAvg30d": 17.35
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.85,
          "priceAvg30d": 14.96
        }
      ],
      "avg": 12.38,
      "max": 18.71,
      "maxBlock": 38,
      "min": 8.1,
      "minBlock": 25,
      "spread3h": 7.81,
      "spreadLowAvg": 9.93,
      "spreadHighAvg": 17.74,
      "avg30d": 18.32,
      "spread30dAvg": 16.36,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.05,
          "priceAvg30d": 14.28
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.8,
          "priceAvg30d": 14.29
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.37,
          "priceAvg30d": 13.77
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.38,
          "priceAvg30d": 13.65
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.38,
          "priceAvg30d": 13.62
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.38,
          "priceAvg30d": 13.9
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 13.83
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.38,
          "priceAvg30d": 14.15
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.41,
          "priceAvg30d": 13.9
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.7,
          "priceAvg30d": 14.61
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.81,
          "priceAvg30d": 15.35
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.81,
          "priceAvg30d": 15.56
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.1,
          "priceAvg30d": 15.48
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.41,
          "priceAvg30d": 13.78
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.12,
          "priceAvg30d": 13.29
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.42,
          "priceAvg30d": 12.79
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.99,
          "priceAvg30d": 13.46
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.14,
          "priceAvg30d": 14.28
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.99,
          "priceAvg30d": 13.74
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.98,
          "priceAvg30d": 12.45
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.14,
          "priceAvg30d": 11.38
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.01,
          "priceAvg30d": 10.95
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.14,
          "priceAvg30d": 10.85
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.98,
          "priceAvg30d": 10.88
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.1,
          "priceAvg30d": 9.81
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.28,
          "priceAvg30d": 10.26
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.87,
          "priceAvg30d": 12.42
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 14.35
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.26,
          "priceAvg30d": 14.47
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.41,
          "priceAvg30d": 15.35
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.45,
          "priceAvg30d": 17.51
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.38,
          "priceAvg30d": 21.26
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.25,
          "priceAvg30d": 23.68
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.95,
          "priceAvg30d": 27.41
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.77,
          "priceAvg30d": 27.54
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 17.67,
          "priceAvg30d": 29.23
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.34,
          "priceAvg30d": 29.75
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.71,
          "priceAvg30d": 28.71
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.64,
          "priceAvg30d": 26.83
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.6,
          "priceAvg30d": 23.91
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 18.42,
          "priceAvg30d": 22.91
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.85,
          "priceAvg30d": 21.3
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.81,
          "priceAvg30d": 19.83
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.63,
          "priceAvg30d": 18.87
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.66,
          "priceAvg30d": 17.54
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.8,
          "priceAvg30d": 16.09
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.0,
          "priceAvg30d": 16.01
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.85,
          "priceAvg30d": 14.19
        }
      ],
      "avg": 12.38,
      "max": 18.71,
      "maxBlock": 38,
      "min": 8.1,
      "minBlock": 25,
      "spread3h": 7.81,
      "spreadLowAvg": 9.93,
      "spreadHighAvg": 17.74,
      "avg30d": 16.74,
      "spread30dAvg": 17.55,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.05,
          "priceAvg30d": 13.67
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.8,
          "priceAvg30d": 13.99
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.37,
          "priceAvg30d": 12.5
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.38,
          "priceAvg30d": 11.99
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.38,
          "priceAvg30d": 11.67
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.38,
          "priceAvg30d": 11.75
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 11.82
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.38,
          "priceAvg30d": 12.14
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.41,
          "priceAvg30d": 12.12
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.7,
          "priceAvg30d": 13.44
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.81,
          "priceAvg30d": 14.44
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.81,
          "priceAvg30d": 15.01
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.1,
          "priceAvg30d": 15.32
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.41,
          "priceAvg30d": 12.68
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.12,
          "priceAvg30d": 11.89
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.42,
          "priceAvg30d": 11.38
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.99,
          "priceAvg30d": 12.63
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.14,
          "priceAvg30d": 13.34
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.99,
          "priceAvg30d": 13.7
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.98,
          "priceAvg30d": 13.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.14,
          "priceAvg30d": 12.2
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.01,
          "priceAvg30d": 12.06
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.14,
          "priceAvg30d": 11.84
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.98,
          "priceAvg30d": 11.71
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.1,
          "priceAvg30d": 10.99
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.28,
          "priceAvg30d": 11.18
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.87,
          "priceAvg30d": 12.65
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 14.16
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.26,
          "priceAvg30d": 15.04
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.14,
          "priceAvg30d": 16.24
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.31,
          "priceAvg30d": 19.19
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.38,
          "priceAvg30d": 23.07
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.25,
          "priceAvg30d": 25.69
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.95,
          "priceAvg30d": 29.28
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.77,
          "priceAvg30d": 29.31
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 17.67,
          "priceAvg30d": 30.13
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.34,
          "priceAvg30d": 30.43
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 18.71,
          "priceAvg30d": 29.4
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.64,
          "priceAvg30d": 28.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.6,
          "priceAvg30d": 26.01
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 18.42,
          "priceAvg30d": 24.62
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.85,
          "priceAvg30d": 23.15
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 16.81,
          "priceAvg30d": 21.89
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 14.63,
          "priceAvg30d": 20.77
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.66,
          "priceAvg30d": 19.24
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.8,
          "priceAvg30d": 17.26
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.0,
          "priceAvg30d": 16.67
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.85,
          "priceAvg30d": 13.18
        }
      ],
      "avg": 12.37,
      "max": 18.71,
      "maxBlock": 38,
      "min": 8.1,
      "minBlock": 25,
      "spread3h": 7.81,
      "spreadLowAvg": 9.93,
      "spreadHighAvg": 17.74,
      "avg30d": 16.96,
      "spread30dAvg": 18.0,
      "historyDays": 30
    }
  }
};
