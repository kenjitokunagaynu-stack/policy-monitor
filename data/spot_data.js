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
  "targetDate": "2026-09-29",
  "fetchedAt": "2026-09-29T12:17:47+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 19.32,
        "priceAvg30d": 17.13
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 16.1,
        "priceAvg30d": 15.83
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 14.63,
        "priceAvg30d": 14.89
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 12.29,
        "priceAvg30d": 14.82
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 11.69,
        "priceAvg30d": 14.56
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 11.69,
        "priceAvg30d": 14.95
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 11.68,
        "priceAvg30d": 15.51
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 12.75,
        "priceAvg30d": 16.05
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 12.75,
        "priceAvg30d": 16.55
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 14.31,
        "priceAvg30d": 17.49
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 18.24,
        "priceAvg30d": 18.46
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 17.29,
        "priceAvg30d": 18.07
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 18.0,
        "priceAvg30d": 16.98
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 18.26,
        "priceAvg30d": 15.64
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 17.54,
        "priceAvg30d": 14.52
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 20.5,
        "priceAvg30d": 14.72
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 23.37,
        "priceAvg30d": 15.55
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 25.54,
        "priceAvg30d": 16.8
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 27.52,
        "priceAvg30d": 17.62
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 27.0,
        "priceAvg30d": 17.4
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 26.0,
        "priceAvg30d": 16.47
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 25.51,
        "priceAvg30d": 16.37
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 25.0,
        "priceAvg30d": 16.14
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 24.08,
        "priceAvg30d": 15.82
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 20.5,
        "priceAvg30d": 14.4
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 20.33,
        "priceAvg30d": 14.85
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 24.06,
        "priceAvg30d": 16.23
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 25.86,
        "priceAvg30d": 18.18
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 26.0,
        "priceAvg30d": 19.43
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 26.0,
        "priceAvg30d": 21.33
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 26.15,
        "priceAvg30d": 20.98
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 28.48,
        "priceAvg30d": 23.35
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 31.28,
        "priceAvg30d": 24.74
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 32.88,
        "priceAvg30d": 27.33
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 30.86,
        "priceAvg30d": 27.3
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 30.61,
        "priceAvg30d": 27.95
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 28.67,
        "priceAvg30d": 27.95
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 28.64,
        "priceAvg30d": 27.21
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 25.9,
        "priceAvg30d": 25.89
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 25.5,
        "priceAvg30d": 24.33
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 24.22,
        "priceAvg30d": 23.11
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 23.79,
        "priceAvg30d": 22.28
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 23.04,
        "priceAvg30d": 21.33
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 23.04,
        "priceAvg30d": 21.74
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 22.99,
        "priceAvg30d": 21.28
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 22.5,
        "priceAvg30d": 19.66
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 20.5,
        "priceAvg30d": 19.38
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 17.29,
        "priceAvg30d": 17.27
      }
    ],
    "avg": 22.09,
    "max": 32.88,
    "maxBlock": 34,
    "min": 11.68,
    "minBlock": 7,
    "spread3h": 16.76,
    "spreadLowAvg": 12.58,
    "spreadHighAvg": 29.34,
    "avg30d": 19.08,
    "spread30dAvg": 14.14,
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
          "price": 10.45,
          "priceAvg30d": 13.27
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.49,
          "priceAvg30d": 12.56
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.49,
          "priceAvg30d": 12.32
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.45,
          "priceAvg30d": 12.11
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.49,
          "priceAvg30d": 12.98
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.62,
          "priceAvg30d": 13.5
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 9.49,
          "priceAvg30d": 14.42
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 9.49,
          "priceAvg30d": 14.71
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.45,
          "priceAvg30d": 14.95
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.45,
          "priceAvg30d": 15.08
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.69,
          "priceAvg30d": 15.0
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 9.49,
          "priceAvg30d": 13.76
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.42,
          "priceAvg30d": 12.52
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.49,
          "priceAvg30d": 11.13
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.0,
          "priceAvg30d": 10.53
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.49,
          "priceAvg30d": 10.03
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 7.0,
          "priceAvg30d": 9.37
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.5,
          "priceAvg30d": 10.01
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.63,
          "priceAvg30d": 9.22
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 5.61,
          "priceAvg30d": 8.53
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 5.0,
          "priceAvg30d": 7.85
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 3.0,
          "priceAvg30d": 7.81
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 4.37,
          "priceAvg30d": 8.18
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 4.28,
          "priceAvg30d": 7.45
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.5,
          "priceAvg30d": 7.09
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 5.0,
          "priceAvg30d": 6.94
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 7.81,
          "priceAvg30d": 8.04
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.4,
          "priceAvg30d": 9.93
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.62,
          "priceAvg30d": 10.23
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.22,
          "priceAvg30d": 11.6
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.49,
          "priceAvg30d": 13.27
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.0,
          "priceAvg30d": 15.78
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 20.88,
          "priceAvg30d": 18.7
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 23.42,
          "priceAvg30d": 20.61
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.6,
          "priceAvg30d": 21.15
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.37,
          "priceAvg30d": 20.94
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.37,
          "priceAvg30d": 20.87
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.71,
          "priceAvg30d": 21.35
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.93,
          "priceAvg30d": 21.05
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 13.0,
          "priceAvg30d": 19.77
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 15.5,
          "priceAvg30d": 19.36
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 13.0,
          "priceAvg30d": 19.17
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.38,
          "priceAvg30d": 17.56
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.79,
          "priceAvg30d": 17.36
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.0,
          "priceAvg30d": 16.61
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.0,
          "priceAvg30d": 15.37
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.68,
          "priceAvg30d": 14.66
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.71,
          "priceAvg30d": 13.74
        }
      ],
      "avg": 11.71,
      "max": 23.93,
      "maxBlock": 39,
      "min": 2.5,
      "minBlock": 25,
      "spread3h": 13.18,
      "spreadLowAvg": 5.48,
      "spreadHighAvg": 18.66,
      "avg30d": 13.72,
      "spread30dAvg": 12.58,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.0,
          "priceAvg30d": 18.15
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.04,
          "priceAvg30d": 16.78
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.04,
          "priceAvg30d": 15.62
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.77,
          "priceAvg30d": 15.39
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.62,
          "priceAvg30d": 15.6
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.62,
          "priceAvg30d": 15.65
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.62,
          "priceAvg30d": 17.15
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.77,
          "priceAvg30d": 17.36
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.04,
          "priceAvg30d": 17.6
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.04,
          "priceAvg30d": 17.85
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 23.04,
          "priceAvg30d": 18.19
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.04,
          "priceAvg30d": 17.76
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.04,
          "priceAvg30d": 16.52
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.22,
          "priceAvg30d": 14.94
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.88,
          "priceAvg30d": 13.88
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.33,
          "priceAvg30d": 13.0
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 7.0,
          "priceAvg30d": 11.02
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.5,
          "priceAvg30d": 11.18
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.63,
          "priceAvg30d": 11.75
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 5.61,
          "priceAvg30d": 11.39
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 5.1,
          "priceAvg30d": 10.54
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 3.0,
          "priceAvg30d": 10.58
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 4.37,
          "priceAvg30d": 10.28
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.65,
          "priceAvg30d": 9.37
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.0,
          "priceAvg30d": 8.3
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 7.67,
          "priceAvg30d": 8.76
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.63,
          "priceAvg30d": 10.24
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.4,
          "priceAvg30d": 11.7
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.62,
          "priceAvg30d": 12.15
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.22,
          "priceAvg30d": 13.66
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.49,
          "priceAvg30d": 15.93
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.0,
          "priceAvg30d": 19.73
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 20.88,
          "priceAvg30d": 22.47
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.0,
          "priceAvg30d": 26.18
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.91,
          "priceAvg30d": 25.67
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.91,
          "priceAvg30d": 26.29
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.59,
          "priceAvg30d": 26.32
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.91,
          "priceAvg30d": 25.92
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 25.17
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.5,
          "priceAvg30d": 23.45
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.15,
          "priceAvg30d": 22.35
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.91,
          "priceAvg30d": 21.5
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.5,
          "priceAvg30d": 20.64
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.91,
          "priceAvg30d": 20.52
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.45,
          "priceAvg30d": 20.71
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.69,
          "priceAvg30d": 19.47
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.6,
          "priceAvg30d": 19.65
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.26,
          "priceAvg30d": 18.79
        }
      ],
      "avg": 19.38,
      "max": 32.91,
      "maxBlock": 35,
      "min": 3.0,
      "minBlock": 22,
      "spread3h": 20.99,
      "spreadLowAvg": 5.89,
      "spreadHighAvg": 26.88,
      "avg30d": 16.94,
      "spread30dAvg": 15.0,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.0,
          "priceAvg30d": 20.14
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.04,
          "priceAvg30d": 19.44
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.04,
          "priceAvg30d": 18.64
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.77,
          "priceAvg30d": 19.14
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.62,
          "priceAvg30d": 18.9
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.62,
          "priceAvg30d": 18.94
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.62,
          "priceAvg30d": 19.59
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.77,
          "priceAvg30d": 19.8
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.04,
          "priceAvg30d": 20.23
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.04,
          "priceAvg30d": 20.52
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 23.04,
          "priceAvg30d": 20.79
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.04,
          "priceAvg30d": 20.47
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.04,
          "priceAvg30d": 19.74
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.22,
          "priceAvg30d": 19.8
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.88,
          "priceAvg30d": 19.89
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.64,
          "priceAvg30d": 20.39
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 30.09,
          "priceAvg30d": 21.14
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 32.91,
          "priceAvg30d": 23.46
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 35.73,
          "priceAvg30d": 23.66
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 37.07,
          "priceAvg30d": 24.04
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.73,
          "priceAvg30d": 23.12
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 35.08,
          "priceAvg30d": 23.57
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 35.01,
          "priceAvg30d": 23.63
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 33.5,
          "priceAvg30d": 23.61
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 30.45,
          "priceAvg30d": 22.16
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 30.45,
          "priceAvg30d": 22.67
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 32.91,
          "priceAvg30d": 23.33
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 36.92,
          "priceAvg30d": 24.6
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 34.5,
          "priceAvg30d": 25.58
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 36.14,
          "priceAvg30d": 26.91
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 34.66,
          "priceAvg30d": 24.71
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.42,
          "priceAvg30d": 26.9
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 34.44,
          "priceAvg30d": 28.47
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 34.02,
          "priceAvg30d": 30.32
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.91,
          "priceAvg30d": 29.41
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.91,
          "priceAvg30d": 29.76
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.59,
          "priceAvg30d": 29.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.91,
          "priceAvg30d": 29.65
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 28.43
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.5,
          "priceAvg30d": 26.61
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.15,
          "priceAvg30d": 24.94
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.91,
          "priceAvg30d": 24.34
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.5,
          "priceAvg30d": 23.46
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.91,
          "priceAvg30d": 24.78
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.45,
          "priceAvg30d": 24.55
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.69,
          "priceAvg30d": 23.47
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.6,
          "priceAvg30d": 23.43
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.26,
          "priceAvg30d": 21.33
        }
      ],
      "avg": 28.72,
      "max": 37.07,
      "maxBlock": 20,
      "min": 22.62,
      "minBlock": 5,
      "spread3h": 11.28,
      "spreadLowAvg": 22.81,
      "spreadHighAvg": 34.09,
      "avg30d": 23.38,
      "spread30dAvg": 10.87,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.0,
          "priceAvg30d": 20.08
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.04,
          "priceAvg30d": 19.48
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.04,
          "priceAvg30d": 18.65
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.77,
          "priceAvg30d": 18.85
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.62,
          "priceAvg30d": 18.68
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.62,
          "priceAvg30d": 18.72
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.62,
          "priceAvg30d": 19.22
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.77,
          "priceAvg30d": 19.61
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.04,
          "priceAvg30d": 20.05
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 23.04,
          "priceAvg30d": 20.43
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 23.04,
          "priceAvg30d": 20.77
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.04,
          "priceAvg30d": 20.72
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.04,
          "priceAvg30d": 20.36
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.22,
          "priceAvg30d": 20.02
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.88,
          "priceAvg30d": 19.48
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.64,
          "priceAvg30d": 19.58
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 30.09,
          "priceAvg30d": 21.11
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 32.91,
          "priceAvg30d": 22.65
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 35.73,
          "priceAvg30d": 23.36
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 37.07,
          "priceAvg30d": 23.38
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.73,
          "priceAvg30d": 22.54
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 35.08,
          "priceAvg30d": 22.68
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 35.01,
          "priceAvg30d": 22.58
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 33.5,
          "priceAvg30d": 22.56
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 30.45,
          "priceAvg30d": 21.07
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 30.45,
          "priceAvg30d": 21.49
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 32.91,
          "priceAvg30d": 23.37
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 36.92,
          "priceAvg30d": 24.93
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 34.5,
          "priceAvg30d": 25.63
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 36.14,
          "priceAvg30d": 26.46
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 34.66,
          "priceAvg30d": 26.09
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.42,
          "priceAvg30d": 27.71
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 34.44,
          "priceAvg30d": 28.73
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 34.02,
          "priceAvg30d": 31.33
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.91,
          "priceAvg30d": 31.48
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.91,
          "priceAvg30d": 31.74
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.59,
          "priceAvg30d": 31.39
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.91,
          "priceAvg30d": 30.28
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 28.85
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.5,
          "priceAvg30d": 27.31
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.15,
          "priceAvg30d": 26.23
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.91,
          "priceAvg30d": 25.58
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.5,
          "priceAvg30d": 24.62
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.91,
          "priceAvg30d": 25.02
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.45,
          "priceAvg30d": 24.8
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.69,
          "priceAvg30d": 23.56
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.6,
          "priceAvg30d": 23.46
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.26,
          "priceAvg30d": 21.64
        }
      ],
      "avg": 28.72,
      "max": 37.07,
      "maxBlock": 20,
      "min": 22.62,
      "minBlock": 5,
      "spread3h": 11.28,
      "spreadLowAvg": 22.81,
      "spreadHighAvg": 34.09,
      "avg30d": 23.51,
      "spread30dAvg": 13.5,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.96,
          "priceAvg30d": 12.2
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.52,
          "priceAvg30d": 12.3
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 12.5
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.52,
          "priceAvg30d": 12.36
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.56,
          "priceAvg30d": 12.25
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.38,
          "priceAvg30d": 12.52
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 12.81
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.25,
          "priceAvg30d": 13.12
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.59,
          "priceAvg30d": 12.86
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.31,
          "priceAvg30d": 13.83
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.95,
          "priceAvg30d": 14.6
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.0,
          "priceAvg30d": 14.67
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.4,
          "priceAvg30d": 15.42
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.03,
          "priceAvg30d": 13.39
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.31,
          "priceAvg30d": 13.1
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.68,
          "priceAvg30d": 12.54
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 17.29,
          "priceAvg30d": 13.61
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.45,
          "priceAvg30d": 16.47
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 35.73,
          "priceAvg30d": 18.36
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 37.07,
          "priceAvg30d": 19.09
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.73,
          "priceAvg30d": 18.51
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 35.08,
          "priceAvg30d": 18.44
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 34.5,
          "priceAvg30d": 18.19
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 30.0,
          "priceAvg30d": 18.2
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 18.63,
          "priceAvg30d": 16.03
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.28,
          "priceAvg30d": 16.76
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 19.45,
          "priceAvg30d": 18.84
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 20.3
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 19.45,
          "priceAvg30d": 20.75
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.29,
          "priceAvg30d": 21.44
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 19.45,
          "priceAvg30d": 20.69
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.46,
          "priceAvg30d": 21.62
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 34.44,
          "priceAvg30d": 21.68
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 34.02,
          "priceAvg30d": 23.75
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.91,
          "priceAvg30d": 23.71
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.91,
          "priceAvg30d": 24.93
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.0,
          "priceAvg30d": 24.63
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.61,
          "priceAvg30d": 23.88
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.5,
          "priceAvg30d": 22.24
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.0,
          "priceAvg30d": 20.41
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.45,
          "priceAvg30d": 19.64
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.64,
          "priceAvg30d": 19.0
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.63,
          "priceAvg30d": 18.65
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.29,
          "priceAvg30d": 17.45
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 15.52,
          "priceAvg30d": 17.09
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.7,
          "priceAvg30d": 15.66
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.25,
          "priceAvg30d": 15.14
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.31,
          "priceAvg30d": 12.52
        }
      ],
      "avg": 19.64,
      "max": 37.07,
      "maxBlock": 20,
      "min": 8.96,
      "minBlock": 1,
      "spread3h": 19.63,
      "spreadLowAvg": 10.0,
      "spreadHighAvg": 29.63,
      "avg30d": 17.25,
      "spread30dAvg": 11.82,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.96,
          "priceAvg30d": 12.12
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.52,
          "priceAvg30d": 12.3
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 12.5
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.52,
          "priceAvg30d": 12.36
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.56,
          "priceAvg30d": 12.25
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.38,
          "priceAvg30d": 12.52
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 12.81
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.25,
          "priceAvg30d": 13.12
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.59,
          "priceAvg30d": 12.86
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.31,
          "priceAvg30d": 13.83
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.95,
          "priceAvg30d": 14.6
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.0,
          "priceAvg30d": 14.66
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.4,
          "priceAvg30d": 15.42
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.03,
          "priceAvg30d": 13.36
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.31,
          "priceAvg30d": 13.1
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.68,
          "priceAvg30d": 12.38
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 17.29,
          "priceAvg30d": 12.94
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.45,
          "priceAvg30d": 15.08
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 35.73,
          "priceAvg30d": 17.29
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 35.73,
          "priceAvg30d": 17.8
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.73,
          "priceAvg30d": 17.27
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 35.0,
          "priceAvg30d": 17.37
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 34.5,
          "priceAvg30d": 17.59
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 30.0,
          "priceAvg30d": 17.02
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 18.63,
          "priceAvg30d": 15.43
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.28,
          "priceAvg30d": 15.92
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 19.45,
          "priceAvg30d": 18.04
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 19.67
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 19.45,
          "priceAvg30d": 19.88
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.29,
          "priceAvg30d": 20.45
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 19.45,
          "priceAvg30d": 19.53
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.46,
          "priceAvg30d": 20.43
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 34.44,
          "priceAvg30d": 21.16
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 34.02,
          "priceAvg30d": 23.38
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.91,
          "priceAvg30d": 23.57
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.91,
          "priceAvg30d": 24.8
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.0,
          "priceAvg30d": 24.51
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.61,
          "priceAvg30d": 23.75
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.5,
          "priceAvg30d": 22.11
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.0,
          "priceAvg30d": 20.27
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.45,
          "priceAvg30d": 19.64
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.64,
          "priceAvg30d": 19.0
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.63,
          "priceAvg30d": 18.65
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.29,
          "priceAvg30d": 17.45
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 15.52,
          "priceAvg30d": 17.09
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.7,
          "priceAvg30d": 15.66
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.25,
          "priceAvg30d": 15.14
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.31,
          "priceAvg30d": 12.52
        }
      ],
      "avg": 19.61,
      "max": 35.73,
      "maxBlock": 19,
      "min": 8.96,
      "minBlock": 1,
      "spread3h": 15.81,
      "spreadLowAvg": 10.0,
      "spreadHighAvg": 25.81,
      "avg30d": 16.89,
      "spread30dAvg": 11.45,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.96,
          "priceAvg30d": 12.12
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.52,
          "priceAvg30d": 12.3
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 12.5
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.52,
          "priceAvg30d": 12.36
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.56,
          "priceAvg30d": 12.25
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.38,
          "priceAvg30d": 12.52
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 12.71
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.25,
          "priceAvg30d": 13.12
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.59,
          "priceAvg30d": 12.82
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.31,
          "priceAvg30d": 13.77
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.95,
          "priceAvg30d": 14.59
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.0,
          "priceAvg30d": 14.65
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.4,
          "priceAvg30d": 15.34
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.03,
          "priceAvg30d": 13.21
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.31,
          "priceAvg30d": 12.68
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.68,
          "priceAvg30d": 11.69
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.38,
          "priceAvg30d": 11.98
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.95,
          "priceAvg30d": 12.9
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.38,
          "priceAvg30d": 13.42
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.31,
          "priceAvg30d": 13.06
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.4,
          "priceAvg30d": 13.26
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.38,
          "priceAvg30d": 13.22
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.37,
          "priceAvg30d": 12.77
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.31,
          "priceAvg30d": 12.55
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.38,
          "priceAvg30d": 11.56
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.31,
          "priceAvg30d": 11.59
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.4,
          "priceAvg30d": 13.23
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 12.29,
          "priceAvg30d": 14.48
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.38,
          "priceAvg30d": 13.76
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.95,
          "priceAvg30d": 14.63
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.95,
          "priceAvg30d": 16.6
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.25,
          "priceAvg30d": 18.38
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 21.02,
          "priceAvg30d": 19.7
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.0,
          "priceAvg30d": 22.5
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.91,
          "priceAvg30d": 23.32
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 24.52
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.0,
          "priceAvg30d": 24.11
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.61,
          "priceAvg30d": 23.34
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.5,
          "priceAvg30d": 21.99
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.0,
          "priceAvg30d": 20.27
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.45,
          "priceAvg30d": 19.64
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.64,
          "priceAvg30d": 19.0
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.63,
          "priceAvg30d": 18.65
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.29,
          "priceAvg30d": 17.45
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 15.52,
          "priceAvg30d": 17.06
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.7,
          "priceAvg30d": 15.65
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.25,
          "priceAvg30d": 15.14
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.31,
          "priceAvg30d": 12.52
        }
      ],
      "avg": 14.1,
      "max": 32.91,
      "maxBlock": 35,
      "min": 8.96,
      "minBlock": 1,
      "spread3h": 13.48,
      "spreadLowAvg": 10.0,
      "spreadHighAvg": 23.48,
      "avg30d": 15.43,
      "spread30dAvg": 12.28,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.96,
          "priceAvg30d": 11.67
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.52,
          "priceAvg30d": 11.5
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 11.62
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.52,
          "priceAvg30d": 11.55
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.56,
          "priceAvg30d": 11.33
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.38,
          "priceAvg30d": 11.64
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 11.66
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.25,
          "priceAvg30d": 12.22
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.59,
          "priceAvg30d": 11.6
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.31,
          "priceAvg30d": 12.61
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 8.1,
          "priceAvg30d": 13.63
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 8.1,
          "priceAvg30d": 13.69
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 8.1,
          "priceAvg30d": 14.21
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 8.01,
          "priceAvg30d": 11.9
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.31,
          "priceAvg30d": 11.29
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.68,
          "priceAvg30d": 10.58
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.1,
          "priceAvg30d": 10.79
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.95,
          "priceAvg30d": 11.62
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.38,
          "priceAvg30d": 11.25
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.31,
          "priceAvg30d": 10.43
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.4,
          "priceAvg30d": 10.56
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.38,
          "priceAvg30d": 10.37
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.37,
          "priceAvg30d": 10.1
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.31,
          "priceAvg30d": 10.15
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.38,
          "priceAvg30d": 9.61
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.31,
          "priceAvg30d": 9.67
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.4,
          "priceAvg30d": 11.01
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 12.29,
          "priceAvg30d": 12.75
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.38,
          "priceAvg30d": 12.22
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.95,
          "priceAvg30d": 12.77
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.95,
          "priceAvg30d": 14.39
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.25,
          "priceAvg30d": 15.72
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.05,
          "priceAvg30d": 16.91
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 8.62,
          "priceAvg30d": 19.93
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 8.1,
          "priceAvg30d": 20.25
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 8.78,
          "priceAvg30d": 22.42
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 8.94,
          "priceAvg30d": 22.58
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 8.78,
          "priceAvg30d": 21.67
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 8.94,
          "priceAvg30d": 19.5
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 8.94,
          "priceAvg30d": 16.83
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 8.78,
          "priceAvg30d": 16.67
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 8.1,
          "priceAvg30d": 15.87
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 8.05,
          "priceAvg30d": 15.38
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 8.0,
          "priceAvg30d": 14.41
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 7.99,
          "priceAvg30d": 14.22
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 8.76,
          "priceAvg30d": 13.37
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.8,
          "priceAvg30d": 13.35
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.21,
          "priceAvg30d": 11.53
        }
      ],
      "avg": 9.68,
      "max": 12.29,
      "maxBlock": 28,
      "min": 7.99,
      "minBlock": 45,
      "spread3h": 1.91,
      "spreadLowAvg": 8.65,
      "spreadHighAvg": 10.56,
      "avg30d": 13.56,
      "spread30dAvg": 12.55,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.96,
          "priceAvg30d": 11.5
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.52,
          "priceAvg30d": 11.63
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 11.32
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.52,
          "priceAvg30d": 10.97
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.56,
          "priceAvg30d": 10.57
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.38,
          "priceAvg30d": 10.79
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 10.95
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.25,
          "priceAvg30d": 11.49
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.59,
          "priceAvg30d": 11.32
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.31,
          "priceAvg30d": 12.63
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.95,
          "priceAvg30d": 13.64
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.0,
          "priceAvg30d": 13.88
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.4,
          "priceAvg30d": 14.7
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.03,
          "priceAvg30d": 12.03
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.31,
          "priceAvg30d": 11.19
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.68,
          "priceAvg30d": 10.17
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.38,
          "priceAvg30d": 10.97
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.95,
          "priceAvg30d": 11.55
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.38,
          "priceAvg30d": 11.95
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.31,
          "priceAvg30d": 11.37
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.4,
          "priceAvg30d": 10.95
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.38,
          "priceAvg30d": 10.74
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.37,
          "priceAvg30d": 10.53
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.31,
          "priceAvg30d": 10.39
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.38,
          "priceAvg30d": 9.89
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.31,
          "priceAvg30d": 10.0
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.4,
          "priceAvg30d": 10.68
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 12.29,
          "priceAvg30d": 11.83
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.38,
          "priceAvg30d": 12.54
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.95,
          "priceAvg30d": 13.86
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.95,
          "priceAvg30d": 16.44
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.25,
          "priceAvg30d": 18.17
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 21.02,
          "priceAvg30d": 19.68
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.0,
          "priceAvg30d": 22.5
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.91,
          "priceAvg30d": 23.32
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 24.52
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.0,
          "priceAvg30d": 24.11
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.61,
          "priceAvg30d": 23.34
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.5,
          "priceAvg30d": 21.99
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.0,
          "priceAvg30d": 20.27
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.45,
          "priceAvg30d": 19.64
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.64,
          "priceAvg30d": 19.0
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.63,
          "priceAvg30d": 18.64
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.29,
          "priceAvg30d": 17.45
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 15.52,
          "priceAvg30d": 16.91
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.7,
          "priceAvg30d": 15.31
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.25,
          "priceAvg30d": 14.53
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.31,
          "priceAvg30d": 11.26
        }
      ],
      "avg": 14.1,
      "max": 32.91,
      "maxBlock": 35,
      "min": 8.96,
      "minBlock": 1,
      "spread3h": 13.48,
      "spreadLowAvg": 10.0,
      "spreadHighAvg": 23.48,
      "avg30d": 14.44,
      "spread30dAvg": 13.27,
      "historyDays": 30
    }
  }
};
