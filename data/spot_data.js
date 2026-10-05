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
  "targetDate": "2026-10-05",
  "fetchedAt": "2026-10-05T12:02:23+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 11.32,
        "priceAvg30d": 17.5
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 11.03,
        "priceAvg30d": 15.79
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 11.27,
        "priceAvg30d": 14.63
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 11.38,
        "priceAvg30d": 14.19
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 11.6,
        "priceAvg30d": 13.83
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 15.0,
        "priceAvg30d": 14.49
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 19.88,
        "priceAvg30d": 15.23
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 20.5,
        "priceAvg30d": 16.03
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 21.13,
        "priceAvg30d": 16.84
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 21.88,
        "priceAvg30d": 17.96
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 21.47,
        "priceAvg30d": 18.97
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 21.96,
        "priceAvg30d": 18.52
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 21.98,
        "priceAvg30d": 17.54
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 21.77,
        "priceAvg30d": 15.23
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 21.0,
        "priceAvg30d": 13.37
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 21.13,
        "priceAvg30d": 13.0
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 21.7,
        "priceAvg30d": 13.43
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 22.74,
        "priceAvg30d": 14.26
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 23.12,
        "priceAvg30d": 15.0
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 22.98,
        "priceAvg30d": 14.58
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 22.03,
        "priceAvg30d": 13.75
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 21.95,
        "priceAvg30d": 13.31
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 22.09,
        "priceAvg30d": 13.17
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 21.88,
        "priceAvg30d": 12.79
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 19.95,
        "priceAvg30d": 11.15
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 19.95,
        "priceAvg30d": 11.72
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 22.85,
        "priceAvg30d": 13.52
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 24.8,
        "priceAvg30d": 15.41
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 25.55,
        "priceAvg30d": 16.37
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 30.26,
        "priceAvg30d": 18.3
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 31.3,
        "priceAvg30d": 18.49
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 32.5,
        "priceAvg30d": 21.67
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 31.31,
        "priceAvg30d": 23.16
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 34.52,
        "priceAvg30d": 25.58
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 32.55,
        "priceAvg30d": 25.97
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 33.59,
        "priceAvg30d": 26.57
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 34.1,
        "priceAvg30d": 26.6
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 34.74,
        "priceAvg30d": 26.17
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 31.5,
        "priceAvg30d": 25.05
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 30.0,
        "priceAvg30d": 23.71
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 28.13,
        "priceAvg30d": 22.81
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 26.8,
        "priceAvg30d": 22.18
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 25.36,
        "priceAvg30d": 21.27
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 23.97,
        "priceAvg30d": 21.18
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 24.2,
        "priceAvg30d": 21.0
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 23.24,
        "priceAvg30d": 19.49
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 23.24,
        "priceAvg30d": 19.27
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 22.13,
        "priceAvg30d": 17.12
      }
    ],
    "avg": 23.53,
    "max": 34.74,
    "maxBlock": 38,
    "min": 11.03,
    "minBlock": 2,
    "spread3h": 17.89,
    "spreadLowAvg": 13.75,
    "spreadHighAvg": 31.64,
    "avg30d": 17.86,
    "spread30dAvg": 14.95,
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
          "price": 21.11,
          "priceAvg30d": 14.3
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.19,
          "priceAvg30d": 13.18
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 21.0,
          "priceAvg30d": 12.82
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 21.13,
          "priceAvg30d": 12.68
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 21.13,
          "priceAvg30d": 13.58
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 21.13,
          "priceAvg30d": 14.49
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
          "price": 22.13,
          "priceAvg30d": 16.02
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.2,
          "priceAvg30d": 15.99
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.72,
          "priceAvg30d": 16.32
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 23.46,
          "priceAvg30d": 16.41
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.55,
          "priceAvg30d": 15.35
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.49,
          "priceAvg30d": 13.7
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.14,
          "priceAvg30d": 11.84
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.33,
          "priceAvg30d": 10.64
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.33,
          "priceAvg30d": 9.53
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.33,
          "priceAvg30d": 8.43
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.5,
          "priceAvg30d": 9.14
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.27,
          "priceAvg30d": 8.18
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.33,
          "priceAvg30d": 7.42
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.33,
          "priceAvg30d": 6.82
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.27,
          "priceAvg30d": 6.76
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.51,
          "priceAvg30d": 7.0
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.27,
          "priceAvg30d": 6.43
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.33,
          "priceAvg30d": 5.93
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.33,
          "priceAvg30d": 5.97
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.33,
          "priceAvg30d": 7.16
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.27,
          "priceAvg30d": 9.25
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.51,
          "priceAvg30d": 9.61
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 17.25,
          "priceAvg30d": 11.27
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.35,
          "priceAvg30d": 13.53
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 15.88,
          "priceAvg30d": 16.79
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 26.92,
          "priceAvg30d": 19.81
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 33.93,
          "priceAvg30d": 22.25
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 34.95,
          "priceAvg30d": 22.18
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.81,
          "priceAvg30d": 22.33
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.01,
          "priceAvg30d": 21.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 35.02,
          "priceAvg30d": 22.99
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.61,
          "priceAvg30d": 22.01
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.26,
          "priceAvg30d": 20.5
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.13,
          "priceAvg30d": 19.71
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.08,
          "priceAvg30d": 19.41
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.48,
          "priceAvg30d": 18.08
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.51,
          "priceAvg30d": 18.24
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 10.59,
          "priceAvg30d": 17.69
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.67,
          "priceAvg30d": 16.21
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.49,
          "priceAvg30d": 15.46
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.83,
          "priceAvg30d": 14.45
        }
      ],
      "avg": 19.51,
      "max": 35.81,
      "maxBlock": 36,
      "min": 9.33,
      "minBlock": 16,
      "spread3h": 18.4,
      "spreadLowAvg": 14.51,
      "spreadHighAvg": 32.91,
      "avg30d": 14.07,
      "spread30dAvg": 14.03,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.11,
          "priceAvg30d": 19.13
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.19,
          "priceAvg30d": 17.99
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 21.0,
          "priceAvg30d": 17.04
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 21.13,
          "priceAvg30d": 16.86
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 21.13,
          "priceAvg30d": 16.84
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 21.13,
          "priceAvg30d": 16.97
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.0,
          "priceAvg30d": 18.09
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.13,
          "priceAvg30d": 18.25
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.2,
          "priceAvg30d": 18.44
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.72,
          "priceAvg30d": 18.62
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 23.46,
          "priceAvg30d": 18.98
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.55,
          "priceAvg30d": 18.57
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.49,
          "priceAvg30d": 17.19
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.14,
          "priceAvg30d": 15.47
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.72,
          "priceAvg30d": 13.57
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 22.72,
          "priceAvg30d": 12.3
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 22.72,
          "priceAvg30d": 9.88
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 24.19,
          "priceAvg30d": 9.74
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 21.55,
          "priceAvg30d": 9.97
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 18.0,
          "priceAvg30d": 9.45
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.5,
          "priceAvg30d": 8.61
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 17.31,
          "priceAvg30d": 8.47
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 15.01,
          "priceAvg30d": 8.29
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 15.52,
          "priceAvg30d": 7.5
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 19.58,
          "priceAvg30d": 6.42
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.72,
          "priceAvg30d": 7.05
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 25.63,
          "priceAvg30d": 8.48
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.78,
          "priceAvg30d": 10.14
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 31.0,
          "priceAvg30d": 10.77
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 31.28,
          "priceAvg30d": 13.11
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 32.54,
          "priceAvg30d": 15.29
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.55,
          "priceAvg30d": 20.08
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 33.88,
          "priceAvg30d": 23.22
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 35.83,
          "priceAvg30d": 27.14
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 34.95,
          "priceAvg30d": 27.04
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.81,
          "priceAvg30d": 27.62
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.01,
          "priceAvg30d": 27.63
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 35.02,
          "priceAvg30d": 27.19
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.61,
          "priceAvg30d": 26.6
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.26,
          "priceAvg30d": 24.78
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.13,
          "priceAvg30d": 23.79
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.08,
          "priceAvg30d": 22.96
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.48,
          "priceAvg30d": 21.93
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.6,
          "priceAvg30d": 21.74
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.33,
          "priceAvg30d": 21.89
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.67,
          "priceAvg30d": 20.93
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.49,
          "priceAvg30d": 20.45
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.83,
          "priceAvg30d": 19.17
        }
      ],
      "avg": 25.22,
      "max": 35.83,
      "maxBlock": 34,
      "min": 12.19,
      "minBlock": 2,
      "spread3h": 12.29,
      "spreadLowAvg": 21.83,
      "spreadHighAvg": 34.12,
      "avg30d": 17.12,
      "spread30dAvg": 17.67,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.11,
          "priceAvg30d": 21.13
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.19,
          "priceAvg30d": 20.55
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 21.0,
          "priceAvg30d": 19.62
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 21.13,
          "priceAvg30d": 19.88
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 21.13,
          "priceAvg30d": 19.62
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 21.13,
          "priceAvg30d": 19.84
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.0,
          "priceAvg30d": 20.41
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.13,
          "priceAvg30d": 20.64
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.2,
          "priceAvg30d": 21.03
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.72,
          "priceAvg30d": 21.29
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 23.46,
          "priceAvg30d": 21.53
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.55,
          "priceAvg30d": 21.19
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.49,
          "priceAvg30d": 20.41
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.14,
          "priceAvg30d": 20.01
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.72,
          "priceAvg30d": 19.85
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 22.72,
          "priceAvg30d": 19.92
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 22.72,
          "priceAvg30d": 19.9
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 24.19,
          "priceAvg30d": 21.56
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.07,
          "priceAvg30d": 22.0
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.97,
          "priceAvg30d": 22.15
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 23.02,
          "priceAvg30d": 21.25
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 23.0,
          "priceAvg30d": 21.4
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.38,
          "priceAvg30d": 21.45
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.38,
          "priceAvg30d": 21.22
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.72,
          "priceAvg30d": 19.75
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.72,
          "priceAvg30d": 20.39
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 25.63,
          "priceAvg30d": 21.42
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.78,
          "priceAvg30d": 22.75
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 31.0,
          "priceAvg30d": 23.63
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 31.28,
          "priceAvg30d": 25.27
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 32.54,
          "priceAvg30d": 23.68
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.55,
          "priceAvg30d": 26.55
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 33.88,
          "priceAvg30d": 28.44
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 35.83,
          "priceAvg30d": 30.22
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 34.95,
          "priceAvg30d": 29.75
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.81,
          "priceAvg30d": 30.11
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.01,
          "priceAvg30d": 30.12
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 35.02,
          "priceAvg30d": 29.92
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.61,
          "priceAvg30d": 28.79
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.26,
          "priceAvg30d": 26.94
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.13,
          "priceAvg30d": 25.71
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.08,
          "priceAvg30d": 25.1
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.48,
          "priceAvg30d": 24.17
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.6,
          "priceAvg30d": 24.82
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.33,
          "priceAvg30d": 25.08
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.67,
          "priceAvg30d": 24.11
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.49,
          "priceAvg30d": 23.81
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.83,
          "priceAvg30d": 22.03
        }
      ],
      "avg": 26.04,
      "max": 35.83,
      "maxBlock": 34,
      "min": 12.19,
      "minBlock": 2,
      "spread3h": 12.29,
      "spreadLowAvg": 21.83,
      "spreadHighAvg": 34.12,
      "avg30d": 23.13,
      "spread30dAvg": 12.1,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.11,
          "priceAvg30d": 21.1
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.19,
          "priceAvg30d": 20.62
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 21.0,
          "priceAvg30d": 19.63
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 21.13,
          "priceAvg30d": 19.56
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 21.13,
          "priceAvg30d": 19.26
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 21.13,
          "priceAvg30d": 19.47
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.0,
          "priceAvg30d": 20.04
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.13,
          "priceAvg30d": 20.47
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.2,
          "priceAvg30d": 20.87
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.72,
          "priceAvg30d": 21.21
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 23.46,
          "priceAvg30d": 21.49
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.55,
          "priceAvg30d": 21.32
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.49,
          "priceAvg30d": 20.98
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.14,
          "priceAvg30d": 20.21
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.72,
          "priceAvg30d": 19.43
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 22.72,
          "priceAvg30d": 19.07
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 22.72,
          "priceAvg30d": 19.8
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 24.19,
          "priceAvg30d": 21.0
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 25.25,
          "priceAvg30d": 21.29
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.13,
          "priceAvg30d": 21.07
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 25.13,
          "priceAvg30d": 20.27
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.99,
          "priceAvg30d": 20.18
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.14,
          "priceAvg30d": 20.15
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.72,
          "priceAvg30d": 19.88
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.72,
          "priceAvg30d": 18.3
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.72,
          "priceAvg30d": 18.84
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 25.63,
          "priceAvg30d": 21.0
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.78,
          "priceAvg30d": 22.84
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 31.0,
          "priceAvg30d": 23.62
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 31.28,
          "priceAvg30d": 24.7
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 32.54,
          "priceAvg30d": 24.5
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.55,
          "priceAvg30d": 26.54
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 33.88,
          "priceAvg30d": 27.34
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 35.83,
          "priceAvg30d": 29.33
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 34.95,
          "priceAvg30d": 29.45
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.81,
          "priceAvg30d": 29.73
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.01,
          "priceAvg30d": 29.48
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 35.02,
          "priceAvg30d": 28.97
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.61,
          "priceAvg30d": 28.11
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.26,
          "priceAvg30d": 26.67
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.13,
          "priceAvg30d": 25.72
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.08,
          "priceAvg30d": 25.17
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.48,
          "priceAvg30d": 24.27
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.6,
          "priceAvg30d": 24.76
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.33,
          "priceAvg30d": 24.96
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.67,
          "priceAvg30d": 23.93
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.49,
          "priceAvg30d": 23.86
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.83,
          "priceAvg30d": 22.22
        }
      ],
      "avg": 26.24,
      "max": 35.83,
      "maxBlock": 34,
      "min": 12.19,
      "minBlock": 2,
      "spread3h": 12.29,
      "spreadLowAvg": 21.83,
      "spreadHighAvg": 34.12,
      "avg30d": 22.76,
      "spread30dAvg": 13.11,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.81,
          "priceAvg30d": 11.08
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.46,
          "priceAvg30d": 11.28
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.63,
          "priceAvg30d": 11.52
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.63,
          "priceAvg30d": 11.29
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.63,
          "priceAvg30d": 11.18
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.06,
          "priceAvg30d": 11.73
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.91,
          "priceAvg30d": 12.29
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.88,
          "priceAvg30d": 12.5
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.0,
          "priceAvg30d": 12.36
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.8,
          "priceAvg30d": 13.33
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.95,
          "priceAvg30d": 14.14
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.82,
          "priceAvg30d": 14.21
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.95,
          "priceAvg30d": 15.05
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 19.82,
          "priceAvg30d": 12.71
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 14.5,
          "priceAvg30d": 11.79
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.61,
          "priceAvg30d": 10.63
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.22,
          "priceAvg30d": 10.61
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 24.19,
          "priceAvg30d": 12.96
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 25.25,
          "priceAvg30d": 15.41
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.13,
          "priceAvg30d": 15.74
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 25.13,
          "priceAvg30d": 15.28
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.99,
          "priceAvg30d": 15.04
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.14,
          "priceAvg30d": 14.94
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.72,
          "priceAvg30d": 14.86
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 21.77,
          "priceAvg30d": 12.5
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 19.95,
          "priceAvg30d": 13.31
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 24.33,
          "priceAvg30d": 15.08
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 17.01
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 17.09
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.5,
          "priceAvg30d": 18.29
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.5,
          "priceAvg30d": 17.95
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.55,
          "priceAvg30d": 19.06
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.95,
          "priceAvg30d": 18.86
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 21.77,
          "priceAvg30d": 20.05
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.1,
          "priceAvg30d": 20.3
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.1,
          "priceAvg30d": 21.67
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.0,
          "priceAvg30d": 21.02
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.0,
          "priceAvg30d": 21.01
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.3,
          "priceAvg30d": 19.87
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.77,
          "priceAvg30d": 18.35
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.14,
          "priceAvg30d": 17.68
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.3,
          "priceAvg30d": 17.14
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.77,
          "priceAvg30d": 16.99
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.94,
          "priceAvg30d": 15.76
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.0,
          "priceAvg30d": 15.84
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.4,
          "priceAvg30d": 14.3
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.4,
          "priceAvg30d": 14.05
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.55,
          "priceAvg30d": 11.48
        }
      ],
      "avg": 20.3,
      "max": 32.55,
      "maxBlock": 32,
      "min": 10.46,
      "minBlock": 2,
      "spread3h": 13.72,
      "spreadLowAvg": 10.91,
      "spreadHighAvg": 24.64,
      "avg30d": 15.14,
      "spread30dAvg": 10.29,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.81,
          "priceAvg30d": 11.0
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.46,
          "priceAvg30d": 11.16
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.63,
          "priceAvg30d": 11.43
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.63,
          "priceAvg30d": 11.19
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.63,
          "priceAvg30d": 11.03
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.06,
          "priceAvg30d": 11.63
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.91,
          "priceAvg30d": 12.21
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.88,
          "priceAvg30d": 12.43
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.0,
          "priceAvg30d": 12.28
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.8,
          "priceAvg30d": 13.33
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.95,
          "priceAvg30d": 14.13
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.82,
          "priceAvg30d": 14.13
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.95,
          "priceAvg30d": 14.98
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 19.82,
          "priceAvg30d": 12.61
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 14.5,
          "priceAvg30d": 11.76
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.61,
          "priceAvg30d": 10.2
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.22,
          "priceAvg30d": 10.04
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 24.19,
          "priceAvg30d": 11.54
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 25.25,
          "priceAvg30d": 14.09
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.13,
          "priceAvg30d": 14.14
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 25.13,
          "priceAvg30d": 13.75
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.99,
          "priceAvg30d": 13.66
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.14,
          "priceAvg30d": 14.07
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.72,
          "priceAvg30d": 13.42
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 21.77,
          "priceAvg30d": 11.55
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 19.95,
          "priceAvg30d": 12.15
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 24.33,
          "priceAvg30d": 14.02
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 16.38
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 16.16
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.5,
          "priceAvg30d": 17.2
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.5,
          "priceAvg30d": 16.63
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.55,
          "priceAvg30d": 17.87
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.95,
          "priceAvg30d": 18.35
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 21.77,
          "priceAvg30d": 19.69
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.1,
          "priceAvg30d": 20.16
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.1,
          "priceAvg30d": 21.54
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.0,
          "priceAvg30d": 20.91
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.0,
          "priceAvg30d": 20.87
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.3,
          "priceAvg30d": 19.74
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.77,
          "priceAvg30d": 18.22
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.14,
          "priceAvg30d": 17.68
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.3,
          "priceAvg30d": 17.14
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.77,
          "priceAvg30d": 16.99
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.94,
          "priceAvg30d": 15.76
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.0,
          "priceAvg30d": 15.84
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.4,
          "priceAvg30d": 14.3
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.4,
          "priceAvg30d": 14.05
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.55,
          "priceAvg30d": 11.48
        }
      ],
      "avg": 20.3,
      "max": 32.55,
      "maxBlock": 32,
      "min": 10.46,
      "minBlock": 2,
      "spread3h": 13.72,
      "spreadLowAvg": 10.91,
      "spreadHighAvg": 24.64,
      "avg30d": 14.68,
      "spread30dAvg": 10.0,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.81,
          "priceAvg30d": 11.0
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.46,
          "priceAvg30d": 11.16
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.63,
          "priceAvg30d": 11.43
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.63,
          "priceAvg30d": 11.19
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.63,
          "priceAvg30d": 11.01
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.06,
          "priceAvg30d": 11.5
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.91,
          "priceAvg30d": 11.95
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.88,
          "priceAvg30d": 12.43
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.0,
          "priceAvg30d": 12.17
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.8,
          "priceAvg30d": 13.26
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.95,
          "priceAvg30d": 14.11
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.82,
          "priceAvg30d": 14.08
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.95,
          "priceAvg30d": 14.91
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 19.82,
          "priceAvg30d": 12.34
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 14.5,
          "priceAvg30d": 11.43
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.61,
          "priceAvg30d": 9.83
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.22,
          "priceAvg30d": 9.43
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 24.19,
          "priceAvg30d": 9.59
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 25.25,
          "priceAvg30d": 9.94
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.13,
          "priceAvg30d": 9.69
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 25.13,
          "priceAvg30d": 10.02
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.99,
          "priceAvg30d": 9.79
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.14,
          "priceAvg30d": 9.44
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.72,
          "priceAvg30d": 9.15
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 21.77,
          "priceAvg30d": 8.59
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 19.95,
          "priceAvg30d": 8.79
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 24.33,
          "priceAvg30d": 10.08
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 11.24
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 10.59
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.5,
          "priceAvg30d": 11.41
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.5,
          "priceAvg30d": 12.35
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.55,
          "priceAvg30d": 14.53
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.95,
          "priceAvg30d": 15.41
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 21.77,
          "priceAvg30d": 18.06
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.1,
          "priceAvg30d": 19.68
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.1,
          "priceAvg30d": 21.13
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.0,
          "priceAvg30d": 20.5
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.0,
          "priceAvg30d": 20.39
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.3,
          "priceAvg30d": 19.62
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.77,
          "priceAvg30d": 18.22
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.14,
          "priceAvg30d": 17.68
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.3,
          "priceAvg30d": 17.14
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.77,
          "priceAvg30d": 16.99
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.94,
          "priceAvg30d": 15.76
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.0,
          "priceAvg30d": 15.81
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.4,
          "priceAvg30d": 14.29
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.4,
          "priceAvg30d": 14.05
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.55,
          "priceAvg30d": 11.48
        }
      ],
      "avg": 20.3,
      "max": 32.55,
      "maxBlock": 32,
      "min": 10.46,
      "minBlock": 2,
      "spread3h": 13.72,
      "spreadLowAvg": 10.91,
      "spreadHighAvg": 24.64,
      "avg30d": 13.22,
      "spread30dAvg": 10.44,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.81,
          "priceAvg30d": 10.46
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.46,
          "priceAvg30d": 10.25
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.63,
          "priceAvg30d": 10.4
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.63,
          "priceAvg30d": 10.24
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.63,
          "priceAvg30d": 9.97
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.06,
          "priceAvg30d": 10.49
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.91,
          "priceAvg30d": 10.69
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.88,
          "priceAvg30d": 11.17
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.0,
          "priceAvg30d": 10.42
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.8,
          "priceAvg30d": 11.74
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.95,
          "priceAvg30d": 12.68
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.82,
          "priceAvg30d": 12.63
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.95,
          "priceAvg30d": 13.0
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 19.82,
          "priceAvg30d": 10.53
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 14.5,
          "priceAvg30d": 9.39
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.61,
          "priceAvg30d": 8.32
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.22,
          "priceAvg30d": 7.99
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 24.19,
          "priceAvg30d": 8.38
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 25.25,
          "priceAvg30d": 7.95
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.13,
          "priceAvg30d": 7.27
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 25.13,
          "priceAvg30d": 7.54
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.99,
          "priceAvg30d": 7.38
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.14,
          "priceAvg30d": 7.24
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.72,
          "priceAvg30d": 7.23
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 21.77,
          "priceAvg30d": 7.15
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 19.95,
          "priceAvg30d": 7.2
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 24.33,
          "priceAvg30d": 8.23
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 9.54
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 9.03
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.5,
          "priceAvg30d": 9.15
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.5,
          "priceAvg30d": 9.74
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.55,
          "priceAvg30d": 11.49
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.95,
          "priceAvg30d": 11.87
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 21.77,
          "priceAvg30d": 14.01
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.1,
          "priceAvg30d": 14.87
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.1,
          "priceAvg30d": 17.37
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.0,
          "priceAvg30d": 17.68
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.0,
          "priceAvg30d": 17.36
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.3,
          "priceAvg30d": 15.83
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.77,
          "priceAvg30d": 13.26
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.14,
          "priceAvg30d": 13.4
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.0,
          "priceAvg30d": 12.7
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.77,
          "priceAvg30d": 12.57
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.94,
          "priceAvg30d": 11.7
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.0,
          "priceAvg30d": 12.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.4,
          "priceAvg30d": 11.26
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.4,
          "priceAvg30d": 11.53
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.55,
          "priceAvg30d": 9.98
        }
      ],
      "avg": 20.29,
      "max": 32.55,
      "maxBlock": 32,
      "min": 10.46,
      "minBlock": 2,
      "spread3h": 13.72,
      "spreadLowAvg": 10.91,
      "spreadHighAvg": 24.64,
      "avg30d": 10.88,
      "spread30dAvg": 9.41,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.81,
          "priceAvg30d": 10.54
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.46,
          "priceAvg30d": 10.83
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.63,
          "priceAvg30d": 10.66
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.63,
          "priceAvg30d": 10.45
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.63,
          "priceAvg30d": 10.22
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.06,
          "priceAvg30d": 10.53
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.91,
          "priceAvg30d": 10.83
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.88,
          "priceAvg30d": 11.44
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.0,
          "priceAvg30d": 11.38
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.8,
          "priceAvg30d": 12.55
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.95,
          "priceAvg30d": 13.54
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.82,
          "priceAvg30d": 13.66
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.95,
          "priceAvg30d": 14.64
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 19.82,
          "priceAvg30d": 11.71
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 14.5,
          "priceAvg30d": 10.43
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.61,
          "priceAvg30d": 8.91
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.0,
          "priceAvg30d": 8.84
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 12.06,
          "priceAvg30d": 8.71
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.06,
          "priceAvg30d": 8.71
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.81,
          "priceAvg30d": 8.17
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.23,
          "priceAvg30d": 8.09
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.23,
          "priceAvg30d": 7.77
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.05,
          "priceAvg30d": 7.53
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.81,
          "priceAvg30d": 7.46
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.81,
          "priceAvg30d": 7.24
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.81,
          "priceAvg30d": 7.48
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.81,
          "priceAvg30d": 8.09
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.23,
          "priceAvg30d": 8.84
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.46,
          "priceAvg30d": 9.38
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.81,
          "priceAvg30d": 10.63
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.41,
          "priceAvg30d": 12.2
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 17.43,
          "priceAvg30d": 14.33
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.95,
          "priceAvg30d": 15.41
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 21.77,
          "priceAvg30d": 18.06
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.1,
          "priceAvg30d": 19.68
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.1,
          "priceAvg30d": 21.13
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.0,
          "priceAvg30d": 20.5
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.0,
          "priceAvg30d": 20.39
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.3,
          "priceAvg30d": 19.62
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.77,
          "priceAvg30d": 18.22
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.14,
          "priceAvg30d": 17.68
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.3,
          "priceAvg30d": 17.14
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.77,
          "priceAvg30d": 16.99
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.94,
          "priceAvg30d": 15.76
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.0,
          "priceAvg30d": 15.81
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.4,
          "priceAvg30d": 14.29
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.4,
          "priceAvg30d": 14.05
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.55,
          "priceAvg30d": 11.21
        }
      ],
      "avg": 15.54,
      "max": 25.14,
      "maxBlock": 41,
      "min": 9.81,
      "minBlock": 24,
      "spread3h": 11.86,
      "spreadLowAvg": 9.99,
      "spreadHighAvg": 21.85,
      "avg30d": 12.53,
      "spread30dAvg": 11.13,
      "historyDays": 30
    }
  }
};
