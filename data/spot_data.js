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
  "targetDate": "2026-10-12",
  "fetchedAt": "2026-10-12T12:18:27+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 23.31,
        "priceAvg30d": 18.82
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 22.36,
        "priceAvg30d": 17.21
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 21.69,
        "priceAvg30d": 16.15
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 20.8,
        "priceAvg30d": 15.64
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 21.07,
        "priceAvg30d": 15.38
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 21.69,
        "priceAvg30d": 16.13
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 21.63,
        "priceAvg30d": 16.93
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 22.1,
        "priceAvg30d": 17.87
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 22.48,
        "priceAvg30d": 18.6
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 22.83,
        "priceAvg30d": 19.7
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 23.7,
        "priceAvg30d": 20.52
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 23.7,
        "priceAvg30d": 20.28
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 23.22,
        "priceAvg30d": 19.35
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 22.24,
        "priceAvg30d": 16.48
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 20.28,
        "priceAvg30d": 13.72
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 17.77,
        "priceAvg30d": 12.34
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 13.0,
        "priceAvg30d": 12.64
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 11.76,
        "priceAvg30d": 12.86
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 10.51,
        "priceAvg30d": 12.97
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 9.32,
        "priceAvg30d": 12.42
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 9.61,
        "priceAvg30d": 11.46
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 9.61,
        "priceAvg30d": 10.9
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 8.45,
        "priceAvg30d": 10.75
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 9.03,
        "priceAvg30d": 10.4
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 8.01,
        "priceAvg30d": 8.61
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 8.5,
        "priceAvg30d": 9.35
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 8.51,
        "priceAvg30d": 11.39
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 11.62,
        "priceAvg30d": 13.6
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 12.52,
        "priceAvg30d": 14.47
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 20.28,
        "priceAvg30d": 17.28
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 22.96,
        "priceAvg30d": 18.21
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 25.19,
        "priceAvg30d": 21.96
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 28.1,
        "priceAvg30d": 24.18
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 29.08,
        "priceAvg30d": 27.07
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 29.08,
        "priceAvg30d": 27.08
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 30.17,
        "priceAvg30d": 27.76
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 29.9,
        "priceAvg30d": 27.41
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 29.08,
        "priceAvg30d": 26.99
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 29.08,
        "priceAvg30d": 25.8
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 26.73,
        "priceAvg30d": 24.52
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 25.81,
        "priceAvg30d": 23.68
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 25.28,
        "priceAvg30d": 23.02
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 24.83,
        "priceAvg30d": 22.27
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 26.13,
        "priceAvg30d": 22.36
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 27.21,
        "priceAvg30d": 22.29
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 25.98,
        "priceAvg30d": 20.93
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 25.94,
        "priceAvg30d": 20.71
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 24.99,
        "priceAvg30d": 18.73
      }
    ],
    "avg": 20.57,
    "max": 30.17,
    "maxBlock": 36,
    "min": 8.01,
    "minBlock": 25,
    "spread3h": 19.77,
    "spreadLowAvg": 9.29,
    "spreadHighAvg": 29.05,
    "avg30d": 18.11,
    "spread30dAvg": 17.1,
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
          "price": 24.8,
          "priceAvg30d": 16.11
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.22,
          "priceAvg30d": 14.22
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.59,
          "priceAvg30d": 14.5
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.4,
          "priceAvg30d": 14.41
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.4,
          "priceAvg30d": 15.4
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.68,
          "priceAvg30d": 17.07
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.4,
          "priceAvg30d": 17.85
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.7,
          "priceAvg30d": 18.39
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.32,
          "priceAvg30d": 18.02
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.51,
          "priceAvg30d": 18.29
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.15,
          "priceAvg30d": 19.11
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.62,
          "priceAvg30d": 18.22
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.8,
          "priceAvg30d": 15.71
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.4,
          "priceAvg30d": 13.72
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.49,
          "priceAvg30d": 11.17
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.01,
          "priceAvg30d": 9.54
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.16,
          "priceAvg30d": 8.34
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.92,
          "priceAvg30d": 8.58
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.32,
          "priceAvg30d": 7.24
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.32,
          "priceAvg30d": 6.6
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 7.48,
          "priceAvg30d": 6.15
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 6.39,
          "priceAvg30d": 6.06
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 5.0,
          "priceAvg30d": 6.2
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 7.43,
          "priceAvg30d": 5.86
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 7.71,
          "priceAvg30d": 5.73
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 7.17,
          "priceAvg30d": 5.63
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.32,
          "priceAvg30d": 6.48
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.94,
          "priceAvg30d": 8.27
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.22,
          "priceAvg30d": 9.13
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 15.5,
          "priceAvg30d": 11.17
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.82,
          "priceAvg30d": 13.9
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 29.08,
          "priceAvg30d": 18.01
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 29.08,
          "priceAvg30d": 23.45
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.17,
          "priceAvg30d": 27.75
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.17,
          "priceAvg30d": 26.71
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 33.18,
          "priceAvg30d": 27.58
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.5,
          "priceAvg30d": 26.21
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 30.17,
          "priceAvg30d": 26.78
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.17,
          "priceAvg30d": 26.42
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.08,
          "priceAvg30d": 25.21
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.9,
          "priceAvg30d": 23.88
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.9,
          "priceAvg30d": 22.89
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.59,
          "priceAvg30d": 21.86
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.9,
          "priceAvg30d": 22.12
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.31,
          "priceAvg30d": 21.05
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.08,
          "priceAvg30d": 20.09
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.98,
          "priceAvg30d": 19.4
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.16,
          "priceAvg30d": 17.76
        }
      ],
      "avg": 21.28,
      "max": 33.18,
      "maxBlock": 36,
      "min": 5.0,
      "minBlock": 23,
      "spread3h": 22.63,
      "spreadLowAvg": 7.58,
      "spreadHighAvg": 30.21,
      "avg30d": 15.92,
      "spread30dAvg": 18.85,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.8,
          "priceAvg30d": 20.82
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.22,
          "priceAvg30d": 19.6
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.59,
          "priceAvg30d": 19.15
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.4,
          "priceAvg30d": 18.88
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.4,
          "priceAvg30d": 18.93
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.68,
          "priceAvg30d": 18.87
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.4,
          "priceAvg30d": 19.79
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.7,
          "priceAvg30d": 20.14
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.32,
          "priceAvg30d": 20.26
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.51,
          "priceAvg30d": 20.28
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.15,
          "priceAvg30d": 20.39
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.62,
          "priceAvg30d": 20.47
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.8,
          "priceAvg30d": 19.37
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.4,
          "priceAvg30d": 17.62
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.49,
          "priceAvg30d": 14.39
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.01,
          "priceAvg30d": 12.06
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 16.92,
          "priceAvg30d": 9.8
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.92,
          "priceAvg30d": 8.57
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.32,
          "priceAvg30d": 8.2
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.32,
          "priceAvg30d": 7.03
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 7.48,
          "priceAvg30d": 6.59
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 6.39,
          "priceAvg30d": 6.12
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 4.67,
          "priceAvg30d": 6.07
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 7.43,
          "priceAvg30d": 5.84
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 7.71,
          "priceAvg30d": 5.49
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 7.17,
          "priceAvg30d": 6.0
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.61,
          "priceAvg30d": 7.04
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 12.63,
          "priceAvg30d": 8.69
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 21.69,
          "priceAvg30d": 10.07
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.17,
          "priceAvg30d": 12.7
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.82,
          "priceAvg30d": 16.33
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 29.08,
          "priceAvg30d": 21.49
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 29.08,
          "priceAvg30d": 25.38
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.17,
          "priceAvg30d": 29.72
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.17,
          "priceAvg30d": 29.59
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 33.18,
          "priceAvg30d": 30.25
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.5,
          "priceAvg30d": 29.44
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 30.17,
          "priceAvg30d": 29.2
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.17,
          "priceAvg30d": 28.09
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.08,
          "priceAvg30d": 26.21
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.08,
          "priceAvg30d": 24.96
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.08,
          "priceAvg30d": 24.09
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.59,
          "priceAvg30d": 23.54
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 29.6,
          "priceAvg30d": 24.34
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.31,
          "priceAvg30d": 23.54
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.08,
          "priceAvg30d": 22.66
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.98,
          "priceAvg30d": 22.16
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.16,
          "priceAvg30d": 20.81
        }
      ],
      "avg": 22.11,
      "max": 33.18,
      "maxBlock": 36,
      "min": 4.67,
      "minBlock": 23,
      "spread3h": 22.63,
      "spreadLowAvg": 7.58,
      "spreadHighAvg": 30.21,
      "avg30d": 17.94,
      "spread30dAvg": 20.19,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.8,
          "priceAvg30d": 22.82
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.22,
          "priceAvg30d": 22.05
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.59,
          "priceAvg30d": 21.61
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.4,
          "priceAvg30d": 21.76
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.4,
          "priceAvg30d": 21.52
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.68,
          "priceAvg30d": 21.62
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.4,
          "priceAvg30d": 22.11
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.7,
          "priceAvg30d": 22.52
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.32,
          "priceAvg30d": 22.83
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.51,
          "priceAvg30d": 22.91
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.15,
          "priceAvg30d": 22.94
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.62,
          "priceAvg30d": 23.05
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.8,
          "priceAvg30d": 22.48
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.4,
          "priceAvg30d": 21.43
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.49,
          "priceAvg30d": 20.39
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.69,
          "priceAvg30d": 20.33
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.85,
          "priceAvg30d": 19.8
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 20.28,
          "priceAvg30d": 20.68
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 20.28,
          "priceAvg30d": 20.83
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 20.28,
          "priceAvg30d": 20.62
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 20.28,
          "priceAvg30d": 19.04
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 20.28,
          "priceAvg30d": 18.93
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 19.39,
          "priceAvg30d": 19.02
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.28,
          "priceAvg30d": 18.92
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 19.42,
          "priceAvg30d": 17.43
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 20.28,
          "priceAvg30d": 18.48
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 15.0,
          "priceAvg30d": 19.58
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.28,
          "priceAvg30d": 21.86
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 21.69,
          "priceAvg30d": 23.14
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.17,
          "priceAvg30d": 24.91
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.82,
          "priceAvg30d": 24.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 29.08,
          "priceAvg30d": 27.21
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 29.08,
          "priceAvg30d": 30.23
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.17,
          "priceAvg30d": 32.57
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.17,
          "priceAvg30d": 31.98
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 33.18,
          "priceAvg30d": 32.62
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 31.5,
          "priceAvg30d": 31.93
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 30.17,
          "priceAvg30d": 31.74
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.17,
          "priceAvg30d": 30.28
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.08,
          "priceAvg30d": 28.34
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.08,
          "priceAvg30d": 26.8
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.08,
          "priceAvg30d": 26.07
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.59,
          "priceAvg30d": 25.32
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 29.6,
          "priceAvg30d": 26.23
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.31,
          "priceAvg30d": 26.47
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.08,
          "priceAvg30d": 25.57
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.98,
          "priceAvg30d": 25.32
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.16,
          "priceAvg30d": 23.67
        }
      ],
      "avg": 24.82,
      "max": 33.18,
      "maxBlock": 36,
      "min": 15.0,
      "minBlock": 27,
      "spread3h": 9.19,
      "spreadLowAvg": 21.02,
      "spreadHighAvg": 30.21,
      "avg30d": 23.79,
      "spread30dAvg": 13.74,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 23.11,
          "priceAvg30d": 22.71
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.08,
          "priceAvg30d": 21.96
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.07,
          "priceAvg30d": 21.41
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.92,
          "priceAvg30d": 21.17
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.92,
          "priceAvg30d": 21.0
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.1,
          "priceAvg30d": 21.14
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.22,
          "priceAvg30d": 21.69
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.7,
          "priceAvg30d": 22.13
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.32,
          "priceAvg30d": 22.44
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.51,
          "priceAvg30d": 22.61
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.15,
          "priceAvg30d": 22.76
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.62,
          "priceAvg30d": 22.88
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.8,
          "priceAvg30d": 22.52
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.4,
          "priceAvg30d": 21.25
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.49,
          "priceAvg30d": 19.78
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.69,
          "priceAvg30d": 18.72
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 13.04,
          "priceAvg30d": 18.67
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 12.49,
          "priceAvg30d": 19.37
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.78,
          "priceAvg30d": 19.36
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.16,
          "priceAvg30d": 19.04
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.32,
          "priceAvg30d": 17.81
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.32,
          "priceAvg30d": 17.52
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.31,
          "priceAvg30d": 17.37
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.12,
          "priceAvg30d": 17.18
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.01,
          "priceAvg30d": 15.25
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.5,
          "priceAvg30d": 15.86
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.22,
          "priceAvg30d": 18.25
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.28,
          "priceAvg30d": 21.0
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 21.69,
          "priceAvg30d": 22.1
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.17,
          "priceAvg30d": 23.3
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.82,
          "priceAvg30d": 24.1
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 29.08,
          "priceAvg30d": 26.6
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 34.59,
          "priceAvg30d": 28.78
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 34.59,
          "priceAvg30d": 31.04
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 34.6,
          "priceAvg30d": 30.83
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 34.61,
          "priceAvg30d": 31.22
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 34.3,
          "priceAvg30d": 30.61
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 31.79,
          "priceAvg30d": 29.99
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.8,
          "priceAvg30d": 29.12
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 31.79,
          "priceAvg30d": 27.89
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.59,
          "priceAvg30d": 26.78
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.31,
          "priceAvg30d": 26.01
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 29.02,
          "priceAvg30d": 25.35
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 29.6,
          "priceAvg30d": 25.8
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.31,
          "priceAvg30d": 26.19
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.08,
          "priceAvg30d": 25.25
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 28.98,
          "priceAvg30d": 25.24
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.16,
          "priceAvg30d": 23.78
        }
      ],
      "avg": 23.34,
      "max": 34.61,
      "maxBlock": 36,
      "min": 8.01,
      "minBlock": 25,
      "spread3h": 21.32,
      "spreadLowAvg": 12.29,
      "spreadHighAvg": 33.61,
      "avg30d": 22.98,
      "spread30dAvg": 14.62,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.0,
          "priceAvg30d": 10.3
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.0,
          "priceAvg30d": 10.59
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.0,
          "priceAvg30d": 10.87
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.98,
          "priceAvg30d": 10.71
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.1,
          "priceAvg30d": 10.74
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.5,
          "priceAvg30d": 11.29
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.41,
          "priceAvg30d": 12.12
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.0,
          "priceAvg30d": 12.98
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.0,
          "priceAvg30d": 12.81
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.89,
          "priceAvg30d": 14.12
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.5,
          "priceAvg30d": 14.54
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.89,
          "priceAvg30d": 14.5
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.88,
          "priceAvg30d": 15.5
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.03,
          "priceAvg30d": 12.58
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.49,
          "priceAvg30d": 11.15
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 18.0,
          "priceAvg30d": 9.45
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 13.04,
          "priceAvg30d": 11.21
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.62,
          "priceAvg30d": 12.71
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.0,
          "priceAvg30d": 14.83
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.9,
          "priceAvg30d": 14.63
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.08,
          "priceAvg30d": 13.74
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.08,
          "priceAvg30d": 13.28
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.08,
          "priceAvg30d": 13.5
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.89,
          "priceAvg30d": 13.05
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.01,
          "priceAvg30d": 10.56
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.5,
          "priceAvg30d": 10.86
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.0,
          "priceAvg30d": 13.07
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 19.69,
          "priceAvg30d": 15.86
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 21.69,
          "priceAvg30d": 16.32
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.95,
          "priceAvg30d": 17.9
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.49,
          "priceAvg30d": 17.73
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.0,
          "priceAvg30d": 19.39
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 34.59,
          "priceAvg30d": 18.82
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.0,
          "priceAvg30d": 20.13
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.92,
          "priceAvg30d": 19.81
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.02,
          "priceAvg30d": 21.03
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.63,
          "priceAvg30d": 20.53
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.06,
          "priceAvg30d": 20.54
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.01,
          "priceAvg30d": 19.4
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.8,
          "priceAvg30d": 18.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.11,
          "priceAvg30d": 18.36
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.0,
          "priceAvg30d": 17.68
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.82,
          "priceAvg30d": 17.58
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.81,
          "priceAvg30d": 16.41
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.82,
          "priceAvg30d": 16.42
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.18,
          "priceAvg30d": 14.39
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.06,
          "priceAvg30d": 14.07
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.0,
          "priceAvg30d": 10.8
        }
      ],
      "avg": 15.76,
      "max": 34.59,
      "maxBlock": 33,
      "min": 8.01,
      "minBlock": 25,
      "spread3h": 8.36,
      "spreadLowAvg": 11.37,
      "spreadHighAvg": 19.73,
      "avg30d": 14.73,
      "spread30dAvg": 10.61,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.0,
          "priceAvg30d": 10.22
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.0,
          "priceAvg30d": 10.47
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.0,
          "priceAvg30d": 10.78
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.98,
          "priceAvg30d": 10.61
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.1,
          "priceAvg30d": 10.59
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.5,
          "priceAvg30d": 11.19
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.41,
          "priceAvg30d": 12.04
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.0,
          "priceAvg30d": 12.91
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.0,
          "priceAvg30d": 12.74
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.89,
          "priceAvg30d": 14.12
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.5,
          "priceAvg30d": 14.52
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.89,
          "priceAvg30d": 14.42
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.88,
          "priceAvg30d": 15.43
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.03,
          "priceAvg30d": 12.47
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 11.61,
          "priceAvg30d": 11.07
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.97,
          "priceAvg30d": 9.02
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.99,
          "priceAvg30d": 10.66
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.62,
          "priceAvg30d": 11.98
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.0,
          "priceAvg30d": 14.28
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.9,
          "priceAvg30d": 14.19
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.8,
          "priceAvg30d": 13.36
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.43,
          "priceAvg30d": 12.96
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.34,
          "priceAvg30d": 13.22
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.34,
          "priceAvg30d": 12.7
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 7.97,
          "priceAvg30d": 10.13
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.5,
          "priceAvg30d": 10.46
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.0,
          "priceAvg30d": 12.73
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 19.69,
          "priceAvg30d": 15.76
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.0,
          "priceAvg30d": 15.97
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.95,
          "priceAvg30d": 17.61
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.49,
          "priceAvg30d": 17.04
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.0,
          "priceAvg30d": 18.89
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 34.59,
          "priceAvg30d": 18.82
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.0,
          "priceAvg30d": 20.13
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.92,
          "priceAvg30d": 19.81
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.02,
          "priceAvg30d": 21.03
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.63,
          "priceAvg30d": 20.53
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.06,
          "priceAvg30d": 20.54
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.01,
          "priceAvg30d": 19.4
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.8,
          "priceAvg30d": 18.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.11,
          "priceAvg30d": 18.36
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.0,
          "priceAvg30d": 17.68
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.82,
          "priceAvg30d": 17.58
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.81,
          "priceAvg30d": 16.41
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.82,
          "priceAvg30d": 16.42
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.18,
          "priceAvg30d": 14.39
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.06,
          "priceAvg30d": 14.07
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.0,
          "priceAvg30d": 10.8
        }
      ],
      "avg": 14.97,
      "max": 34.59,
      "maxBlock": 33,
      "min": 7.97,
      "minBlock": 25,
      "spread3h": 9.18,
      "spreadLowAvg": 10.55,
      "spreadHighAvg": 19.73,
      "avg30d": 14.56,
      "spread30dAvg": 10.59,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.0,
          "priceAvg30d": 10.22
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.0,
          "priceAvg30d": 10.47
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.0,
          "priceAvg30d": 10.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.98,
          "priceAvg30d": 10.44
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.1,
          "priceAvg30d": 10.21
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.5,
          "priceAvg30d": 10.73
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.41,
          "priceAvg30d": 11.44
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.0,
          "priceAvg30d": 12.39
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.0,
          "priceAvg30d": 12.51
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.89,
          "priceAvg30d": 13.84
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.5,
          "priceAvg30d": 14.5
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.89,
          "priceAvg30d": 14.38
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.88,
          "priceAvg30d": 15.35
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.03,
          "priceAvg30d": 12.21
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 11.61,
          "priceAvg30d": 10.43
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.97,
          "priceAvg30d": 8.54
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.99,
          "priceAvg30d": 8.83
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.62,
          "priceAvg30d": 8.87
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.0,
          "priceAvg30d": 8.68
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.9,
          "priceAvg30d": 8.13
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.8,
          "priceAvg30d": 8.47
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.43,
          "priceAvg30d": 8.05
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.34,
          "priceAvg30d": 7.85
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.34,
          "priceAvg30d": 7.48
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.9,
          "priceAvg30d": 6.98
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.5,
          "priceAvg30d": 7.05
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.14,
          "priceAvg30d": 8.7
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.45,
          "priceAvg30d": 9.83
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.83,
          "priceAvg30d": 9.54
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.95,
          "priceAvg30d": 10.49
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.49,
          "priceAvg30d": 11.53
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.44,
          "priceAvg30d": 13.61
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.99,
          "priceAvg30d": 14.21
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 21.04,
          "priceAvg30d": 17.64
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.92,
          "priceAvg30d": 19.34
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.02,
          "priceAvg30d": 20.62
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.63,
          "priceAvg30d": 20.07
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.06,
          "priceAvg30d": 20.06
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.01,
          "priceAvg30d": 19.28
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.8,
          "priceAvg30d": 18.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.11,
          "priceAvg30d": 18.21
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.0,
          "priceAvg30d": 17.6
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.82,
          "priceAvg30d": 17.54
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.81,
          "priceAvg30d": 16.32
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.82,
          "priceAvg30d": 16.31
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.18,
          "priceAvg30d": 14.38
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.06,
          "priceAvg30d": 14.07
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.0,
          "priceAvg30d": 10.8
        }
      ],
      "avg": 13.75,
      "max": 23.02,
      "maxBlock": 36,
      "min": 2.5,
      "minBlock": 26,
      "spread3h": 13.61,
      "spreadLowAvg": 7.5,
      "spreadHighAvg": 21.11,
      "avg30d": 12.65,
      "spread30dAvg": 11.66,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.0,
          "priceAvg30d": 9.94
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.0,
          "priceAvg30d": 9.82
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.0,
          "priceAvg30d": 9.96
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.98,
          "priceAvg30d": 9.75
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.1,
          "priceAvg30d": 9.39
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.5,
          "priceAvg30d": 9.96
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.41,
          "priceAvg30d": 10.47
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.0,
          "priceAvg30d": 11.4
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.0,
          "priceAvg30d": 11.01
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.89,
          "priceAvg30d": 12.58
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.5,
          "priceAvg30d": 13.33
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.89,
          "priceAvg30d": 13.18
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.88,
          "priceAvg30d": 13.73
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.03,
          "priceAvg30d": 10.69
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 11.61,
          "priceAvg30d": 8.77
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.97,
          "priceAvg30d": 7.7
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.99,
          "priceAvg30d": 7.96
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.62,
          "priceAvg30d": 8.0
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.0,
          "priceAvg30d": 7.04
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.9,
          "priceAvg30d": 6.19
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.8,
          "priceAvg30d": 6.5
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.43,
          "priceAvg30d": 6.28
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.34,
          "priceAvg30d": 5.94
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.34,
          "priceAvg30d": 5.96
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.9,
          "priceAvg30d": 6.08
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.5,
          "priceAvg30d": 6.12
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.14,
          "priceAvg30d": 7.39
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.45,
          "priceAvg30d": 8.5
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.83,
          "priceAvg30d": 8.4
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.95,
          "priceAvg30d": 8.69
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.49,
          "priceAvg30d": 9.17
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.44,
          "priceAvg30d": 11.14
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.99,
          "priceAvg30d": 11.37
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 21.04,
          "priceAvg30d": 14.22
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.92,
          "priceAvg30d": 15.14
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.02,
          "priceAvg30d": 17.36
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.63,
          "priceAvg30d": 17.57
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.06,
          "priceAvg30d": 17.39
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.01,
          "priceAvg30d": 16.09
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.8,
          "priceAvg30d": 13.98
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.11,
          "priceAvg30d": 14.63
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.0,
          "priceAvg30d": 13.94
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.82,
          "priceAvg30d": 13.94
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.81,
          "priceAvg30d": 12.97
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.82,
          "priceAvg30d": 13.09
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.18,
          "priceAvg30d": 11.94
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.06,
          "priceAvg30d": 12.4
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.0,
          "priceAvg30d": 9.68
        }
      ],
      "avg": 13.75,
      "max": 23.02,
      "maxBlock": 36,
      "min": 2.5,
      "minBlock": 26,
      "spread3h": 13.61,
      "spreadLowAvg": 7.5,
      "spreadHighAvg": 21.11,
      "avg30d": 10.77,
      "spread30dAvg": 10.44,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 16.0,
          "priceAvg30d": 10.22
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.0,
          "priceAvg30d": 10.47
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.0,
          "priceAvg30d": 10.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.98,
          "priceAvg30d": 10.44
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.1,
          "priceAvg30d": 10.21
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.5,
          "priceAvg30d": 10.73
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.41,
          "priceAvg30d": 11.44
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.0,
          "priceAvg30d": 12.39
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.0,
          "priceAvg30d": 12.51
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.89,
          "priceAvg30d": 13.84
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 16.5,
          "priceAvg30d": 14.46
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.89,
          "priceAvg30d": 14.38
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.88,
          "priceAvg30d": 15.35
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.03,
          "priceAvg30d": 12.21
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 11.61,
          "priceAvg30d": 10.43
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.97,
          "priceAvg30d": 8.54
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.99,
          "priceAvg30d": 8.55
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.62,
          "priceAvg30d": 8.23
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.0,
          "priceAvg30d": 7.74
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.9,
          "priceAvg30d": 7.01
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.8,
          "priceAvg30d": 6.7
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.43,
          "priceAvg30d": 6.29
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.34,
          "priceAvg30d": 5.98
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.34,
          "priceAvg30d": 5.91
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.9,
          "priceAvg30d": 5.72
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 2.5,
          "priceAvg30d": 5.92
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.14,
          "priceAvg30d": 6.7
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.45,
          "priceAvg30d": 7.66
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.83,
          "priceAvg30d": 8.52
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.95,
          "priceAvg30d": 9.7
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.49,
          "priceAvg30d": 11.09
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.44,
          "priceAvg30d": 13.1
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.99,
          "priceAvg30d": 14.21
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 21.04,
          "priceAvg30d": 17.64
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.92,
          "priceAvg30d": 19.34
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.02,
          "priceAvg30d": 20.62
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.63,
          "priceAvg30d": 20.07
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.06,
          "priceAvg30d": 20.06
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.01,
          "priceAvg30d": 19.28
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.8,
          "priceAvg30d": 18.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.11,
          "priceAvg30d": 18.21
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.0,
          "priceAvg30d": 17.6
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.82,
          "priceAvg30d": 17.54
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.81,
          "priceAvg30d": 16.32
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.82,
          "priceAvg30d": 16.31
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.18,
          "priceAvg30d": 14.38
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.06,
          "priceAvg30d": 14.07
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.0,
          "priceAvg30d": 10.8
        }
      ],
      "avg": 13.75,
      "max": 23.02,
      "maxBlock": 36,
      "min": 2.5,
      "minBlock": 26,
      "spread3h": 13.61,
      "spreadLowAvg": 7.5,
      "spreadHighAvg": 21.11,
      "avg30d": 12.24,
      "spread30dAvg": 12.08,
      "historyDays": 30
    }
  }
};
