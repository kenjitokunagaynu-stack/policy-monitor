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
  "targetDate": "2026-11-21",
  "fetchedAt": "2026-11-21T13:48:17+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 30.19,
        "priceAvg30d": 26.39
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 30.05,
        "priceAvg30d": 25.44
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 30.05,
        "priceAvg30d": 24.74
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 30.21,
        "priceAvg30d": 24.7
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 31.08,
        "priceAvg30d": 24.83
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 31.99,
        "priceAvg30d": 25.68
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 32.0,
        "priceAvg30d": 26.77
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 32.61,
        "priceAvg30d": 27.66
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 33.02,
        "priceAvg30d": 28.08
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 32.98,
        "priceAvg30d": 28.44
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 33.29,
        "priceAvg30d": 28.75
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 33.57,
        "priceAvg30d": 29.03
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 35.3,
        "priceAvg30d": 29.57
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 36.0,
        "priceAvg30d": 29.86
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 34.89,
        "priceAvg30d": 28.6
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 31.16,
        "priceAvg30d": 26.5
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 27.98,
        "priceAvg30d": 25.36
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 26.72,
        "priceAvg30d": 24.59
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 24.0,
        "priceAvg30d": 22.75
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 12.88,
        "priceAvg30d": 20.0
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 14.5,
        "priceAvg30d": 18.64
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 12.7,
        "priceAvg30d": 17.63
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 12.5,
        "priceAvg30d": 17.19
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 12.58,
        "priceAvg30d": 16.91
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 12.7,
        "priceAvg30d": 14.97
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 13.6,
        "priceAvg30d": 15.47
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 20.91,
        "priceAvg30d": 19.74
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 20.91,
        "priceAvg30d": 22.01
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 24.32,
        "priceAvg30d": 24.0
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 26.91,
        "priceAvg30d": 26.84
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 30.05,
        "priceAvg30d": 29.53
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 33.05,
        "priceAvg30d": 32.49
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 37.65,
        "priceAvg30d": 35.56
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 38.0,
        "priceAvg30d": 36.62
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 38.59,
        "priceAvg30d": 36.29
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 40.0,
        "priceAvg30d": 35.94
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 43.71,
        "priceAvg30d": 35.16
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 43.13,
        "priceAvg30d": 34.92
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 42.13,
        "priceAvg30d": 34.14
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 42.13,
        "priceAvg30d": 32.88
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 41.62,
        "priceAvg30d": 32.29
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 40.01,
        "priceAvg30d": 31.89
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 38.01,
        "priceAvg30d": 31.43
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 35.0,
        "priceAvg30d": 30.25
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 36.21,
        "priceAvg30d": 30.65
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 32.59,
        "priceAvg30d": 29.47
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 31.61,
        "priceAvg30d": 28.99
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 29.98,
        "priceAvg30d": 26.6
      }
    ],
    "avg": 30.31,
    "max": 43.71,
    "maxBlock": 37,
    "min": 12.5,
    "minBlock": 23,
    "spread3h": 27.5,
    "spreadLowAvg": 13.16,
    "spreadHighAvg": 40.66,
    "avg30d": 27.21,
    "spread30dAvg": 19.22,
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
          "price": 22.82,
          "priceAvg30d": 25.03
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.82,
          "priceAvg30d": 22.94
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.0,
          "priceAvg30d": 22.34
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.82,
          "priceAvg30d": 23.23
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.82,
          "priceAvg30d": 23.99
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.82,
          "priceAvg30d": 24.46
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.0,
          "priceAvg30d": 25.22
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.24,
          "priceAvg30d": 26.02
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.34,
          "priceAvg30d": 26.42
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.6,
          "priceAvg30d": 26.93
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 26.61,
          "priceAvg30d": 27.28
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.44,
          "priceAvg30d": 27.56
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 26.61,
          "priceAvg30d": 27.6
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 27.88,
          "priceAvg30d": 27.4
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 26.61,
          "priceAvg30d": 24.93
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.69,
          "priceAvg30d": 22.55
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.43,
          "priceAvg30d": 21.41
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 22.82,
          "priceAvg30d": 18.94
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.66,
          "priceAvg30d": 17.62
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.96,
          "priceAvg30d": 15.42
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.02,
          "priceAvg30d": 14.34
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.48,
          "priceAvg30d": 12.88
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.48,
          "priceAvg30d": 13.25
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.53,
          "priceAvg30d": 13.04
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.02,
          "priceAvg30d": 11.6
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.36,
          "priceAvg30d": 11.97
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.9,
          "priceAvg30d": 15.39
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.91,
          "priceAvg30d": 19.62
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.52,
          "priceAvg30d": 21.83
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 27.68,
          "priceAvg30d": 24.94
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.05,
          "priceAvg30d": 27.69
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.05,
          "priceAvg30d": 31.04
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 50.0,
          "priceAvg30d": 34.08
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.89,
          "priceAvg30d": 34.2
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 46.05,
          "priceAvg30d": 33.29
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.65,
          "priceAvg30d": 33.11
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.65,
          "priceAvg30d": 33.17
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 37.65,
          "priceAvg30d": 33.69
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.65,
          "priceAvg30d": 33.21
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 37.65,
          "priceAvg30d": 32.3
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 37.65,
          "priceAvg30d": 32.19
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 37.65,
          "priceAvg30d": 30.52
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 37.65,
          "priceAvg30d": 29.63
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.82,
          "priceAvg30d": 28.06
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.46,
          "priceAvg30d": 28.06
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.46,
          "priceAvg30d": 27.0
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 29.46,
          "priceAvg30d": 26.71
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.22,
          "priceAvg30d": 24.82
        }
      ],
      "avg": 26.55,
      "max": 50.0,
      "maxBlock": 33,
      "min": 9.53,
      "minBlock": 24,
      "spread3h": 26.02,
      "spreadLowAvg": 10.54,
      "spreadHighAvg": 36.56,
      "avg30d": 24.77,
      "spread30dAvg": 18.93,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 22.82,
          "priceAvg30d": 26.52
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.82,
          "priceAvg30d": 25.41
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.0,
          "priceAvg30d": 24.63
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.82,
          "priceAvg30d": 24.01
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.82,
          "priceAvg30d": 24.83
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.82,
          "priceAvg30d": 25.56
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.0,
          "priceAvg30d": 26.71
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.24,
          "priceAvg30d": 27.23
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.34,
          "priceAvg30d": 27.71
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.6,
          "priceAvg30d": 27.96
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 26.61,
          "priceAvg30d": 28.51
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.44,
          "priceAvg30d": 28.9
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 26.61,
          "priceAvg30d": 29.52
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 27.88,
          "priceAvg30d": 29.17
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 26.61,
          "priceAvg30d": 26.56
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.69,
          "priceAvg30d": 23.6
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.43,
          "priceAvg30d": 23.44
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 22.82,
          "priceAvg30d": 22.09
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.66,
          "priceAvg30d": 20.53
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.96,
          "priceAvg30d": 19.05
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.02,
          "priceAvg30d": 17.57
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.1,
          "priceAvg30d": 16.42
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 7.55,
          "priceAvg30d": 15.75
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.58,
          "priceAvg30d": 15.71
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.02,
          "priceAvg30d": 14.56
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.36,
          "priceAvg30d": 15.04
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.66,
          "priceAvg30d": 18.82
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.91,
          "priceAvg30d": 21.14
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.79,
          "priceAvg30d": 23.69
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.91,
          "priceAvg30d": 26.97
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.05,
          "priceAvg30d": 29.86
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.05,
          "priceAvg30d": 33.6
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.26,
          "priceAvg30d": 36.05
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.65,
          "priceAvg30d": 37.22
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.65,
          "priceAvg30d": 37.28
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.65,
          "priceAvg30d": 36.86
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.65,
          "priceAvg30d": 35.94
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 37.65,
          "priceAvg30d": 35.85
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.65,
          "priceAvg30d": 35.47
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 37.65,
          "priceAvg30d": 34.26
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 37.65,
          "priceAvg30d": 33.68
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 37.65,
          "priceAvg30d": 32.47
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 37.65,
          "priceAvg30d": 32.36
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.82,
          "priceAvg30d": 31.18
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.46,
          "priceAvg30d": 30.77
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.46,
          "priceAvg30d": 28.75
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 29.46,
          "priceAvg30d": 27.83
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 29.22,
          "priceAvg30d": 25.14
        }
      ],
      "avg": 25.8,
      "max": 37.65,
      "maxBlock": 34,
      "min": 7.55,
      "minBlock": 23,
      "spread3h": 25.88,
      "spreadLowAvg": 9.67,
      "spreadHighAvg": 35.55,
      "avg30d": 26.92,
      "spread30dAvg": 20.46,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.0,
          "priceAvg30d": 29.84
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.74,
          "priceAvg30d": 29.67
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.77,
          "priceAvg30d": 29.62
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 31.46,
          "priceAvg30d": 29.19
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.08,
          "priceAvg30d": 29.22
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.6,
          "priceAvg30d": 29.31
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.6,
          "priceAvg30d": 29.41
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.09,
          "priceAvg30d": 29.45
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.73,
          "priceAvg30d": 29.73
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.09,
          "priceAvg30d": 29.88
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.56,
          "priceAvg30d": 30.15
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.3,
          "priceAvg30d": 30.78
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.01,
          "priceAvg30d": 31.87
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.07,
          "priceAvg30d": 32.17
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.09,
          "priceAvg30d": 31.99
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 31.73,
          "priceAvg30d": 31.46
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 28.21,
          "priceAvg30d": 29.95
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.45,
          "priceAvg30d": 30.47
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.77,
          "priceAvg30d": 29.99
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.25,
          "priceAvg30d": 28.33
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.98,
          "priceAvg30d": 27.65
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.61,
          "priceAvg30d": 26.9
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.0,
          "priceAvg30d": 26.48
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.2,
          "priceAvg30d": 26.68
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 14.49,
          "priceAvg30d": 25.94
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.0,
          "priceAvg30d": 26.64
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.91,
          "priceAvg30d": 28.93
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.91,
          "priceAvg30d": 30.28
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.79,
          "priceAvg30d": 31.69
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.91,
          "priceAvg30d": 32.94
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.05,
          "priceAvg30d": 34.59
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.05,
          "priceAvg30d": 37.58
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.26,
          "priceAvg30d": 38.68
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.65,
          "priceAvg30d": 39.35
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.65,
          "priceAvg30d": 39.36
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.65,
          "priceAvg30d": 38.81
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.65,
          "priceAvg30d": 37.46
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 37.65,
          "priceAvg30d": 37.7
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.65,
          "priceAvg30d": 37.21
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 37.65,
          "priceAvg30d": 36.47
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 37.65,
          "priceAvg30d": 35.42
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 37.65,
          "priceAvg30d": 34.39
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 37.65,
          "priceAvg30d": 34.14
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 36.21,
          "priceAvg30d": 33.23
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 36.68,
          "priceAvg30d": 35.27
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.31,
          "priceAvg30d": 33.22
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.31,
          "priceAvg30d": 31.9
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.51,
          "priceAvg30d": 30.38
        }
      ],
      "avg": 30.07,
      "max": 37.65,
      "maxBlock": 34,
      "min": 13.0,
      "minBlock": 23,
      "spread3h": 20.46,
      "spreadLowAvg": 15.09,
      "spreadHighAvg": 35.55,
      "avg30d": 31.91,
      "spread30dAvg": 12.97,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 32.0,
          "priceAvg30d": 29.42
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 32.59,
          "priceAvg30d": 29.46
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 33.0,
          "priceAvg30d": 28.98
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 32.97,
          "priceAvg30d": 28.97
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 33.31,
          "priceAvg30d": 29.36
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.57,
          "priceAvg30d": 29.7
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 35.0,
          "priceAvg30d": 29.96
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 36.0,
          "priceAvg30d": 30.33
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 36.23,
          "priceAvg30d": 30.53
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 36.21,
          "priceAvg30d": 30.62
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 36.0,
          "priceAvg30d": 30.93
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.3,
          "priceAvg30d": 31.3
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.01,
          "priceAvg30d": 31.65
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.07,
          "priceAvg30d": 32.04
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.09,
          "priceAvg30d": 31.08
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.62,
          "priceAvg30d": 29.71
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 28.24,
          "priceAvg30d": 28.84
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.3,
          "priceAvg30d": 29.02
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.77,
          "priceAvg30d": 27.76
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.25,
          "priceAvg30d": 25.83
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.98,
          "priceAvg30d": 24.5
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.61,
          "priceAvg30d": 24.03
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.31,
          "priceAvg30d": 23.67
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.32,
          "priceAvg30d": 23.47
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 14.49,
          "priceAvg30d": 21.01
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.0,
          "priceAvg30d": 21.94
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.91,
          "priceAvg30d": 25.27
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.91,
          "priceAvg30d": 28.0
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.0,
          "priceAvg30d": 29.93
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.91,
          "priceAvg30d": 31.41
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.05,
          "priceAvg30d": 33.09
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.05,
          "priceAvg30d": 36.66
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.26,
          "priceAvg30d": 37.33
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.3,
          "priceAvg30d": 37.26
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.59,
          "priceAvg30d": 37.87
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 46.23,
          "priceAvg30d": 37.57
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 46.19,
          "priceAvg30d": 36.98
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 47.15,
          "priceAvg30d": 36.78
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.02,
          "priceAvg30d": 36.68
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.23,
          "priceAvg30d": 35.84
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.08,
          "priceAvg30d": 34.42
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.0,
          "priceAvg30d": 34.02
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 38.3,
          "priceAvg30d": 33.62
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 36.21,
          "priceAvg30d": 32.94
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 36.68,
          "priceAvg30d": 33.36
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.31,
          "priceAvg30d": 32.75
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.31,
          "priceAvg30d": 32.16
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.51,
          "priceAvg30d": 31.14
        }
      ],
      "avg": 32.05,
      "max": 47.15,
      "maxBlock": 38,
      "min": 13.25,
      "minBlock": 20,
      "spread3h": 24.02,
      "spreadLowAvg": 20.87,
      "spreadHighAvg": 44.89,
      "avg30d": 30.82,
      "spread30dAvg": 15.22,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.0,
          "priceAvg30d": 16.71
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.72,
          "priceAvg30d": 16.67
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.49,
          "priceAvg30d": 16.52
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.49,
          "priceAvg30d": 16.33
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.72,
          "priceAvg30d": 17.75
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.57,
          "priceAvg30d": 19.76
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 35.0,
          "priceAvg30d": 21.83
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 36.0,
          "priceAvg30d": 23.0
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 36.23,
          "priceAvg30d": 23.16
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 36.21,
          "priceAvg30d": 24.46
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 36.0,
          "priceAvg30d": 25.21
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.3,
          "priceAvg30d": 24.56
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.01,
          "priceAvg30d": 23.74
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.07,
          "priceAvg30d": 24.43
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.09,
          "priceAvg30d": 24.66
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.62,
          "priceAvg30d": 23.37
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 28.24,
          "priceAvg30d": 23.15
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.3,
          "priceAvg30d": 23.85
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.77,
          "priceAvg30d": 23.59
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.25,
          "priceAvg30d": 23.07
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.98,
          "priceAvg30d": 21.62
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.61,
          "priceAvg30d": 20.67
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.31,
          "priceAvg30d": 21.08
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.32,
          "priceAvg30d": 20.62
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 14.49,
          "priceAvg30d": 16.18
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.0,
          "priceAvg30d": 16.79
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.91,
          "priceAvg30d": 22.76
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.91,
          "priceAvg30d": 25.07
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.0,
          "priceAvg30d": 26.61
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.91,
          "priceAvg30d": 28.56
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.05,
          "priceAvg30d": 29.45
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.05,
          "priceAvg30d": 32.72
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.26,
          "priceAvg30d": 32.75
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.3,
          "priceAvg30d": 34.13
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.59,
          "priceAvg30d": 33.9
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 46.23,
          "priceAvg30d": 34.16
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 46.19,
          "priceAvg30d": 32.56
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 47.15,
          "priceAvg30d": 32.03
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.02,
          "priceAvg30d": 31.86
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.23,
          "priceAvg30d": 29.54
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.08,
          "priceAvg30d": 29.38
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.0,
          "priceAvg30d": 27.74
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 38.3,
          "priceAvg30d": 27.38
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 36.21,
          "priceAvg30d": 25.54
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 36.68,
          "priceAvg30d": 26.43
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.31,
          "priceAvg30d": 24.23
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.0,
          "priceAvg30d": 23.32
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.05,
          "priceAvg30d": 17.55
        }
      ],
      "avg": 31.57,
      "max": 47.15,
      "maxBlock": 38,
      "min": 13.25,
      "minBlock": 20,
      "spread3h": 24.02,
      "spreadLowAvg": 20.87,
      "spreadHighAvg": 44.89,
      "avg30d": 24.59,
      "spread30dAvg": 16.43,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.0,
          "priceAvg30d": 16.71
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.72,
          "priceAvg30d": 16.67
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.49,
          "priceAvg30d": 16.52
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.49,
          "priceAvg30d": 16.33
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.72,
          "priceAvg30d": 17.08
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.57,
          "priceAvg30d": 19.2
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 35.0,
          "priceAvg30d": 20.73
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 36.0,
          "priceAvg30d": 22.23
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 36.23,
          "priceAvg30d": 22.36
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 36.21,
          "priceAvg30d": 23.22
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 36.0,
          "priceAvg30d": 23.09
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.3,
          "priceAvg30d": 22.27
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.01,
          "priceAvg30d": 22.42
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.07,
          "priceAvg30d": 23.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.09,
          "priceAvg30d": 24.09
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.62,
          "priceAvg30d": 22.88
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 28.24,
          "priceAvg30d": 22.95
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.3,
          "priceAvg30d": 23.85
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.77,
          "priceAvg30d": 23.59
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.25,
          "priceAvg30d": 23.07
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.98,
          "priceAvg30d": 21.54
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.61,
          "priceAvg30d": 20.56
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.31,
          "priceAvg30d": 21.08
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 14.75,
          "priceAvg30d": 20.62
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 14.49,
          "priceAvg30d": 16.1
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.0,
          "priceAvg30d": 16.71
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.91,
          "priceAvg30d": 22.76
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.91,
          "priceAvg30d": 24.97
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.0,
          "priceAvg30d": 26.27
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.91,
          "priceAvg30d": 27.8
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.05,
          "priceAvg30d": 29.39
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.05,
          "priceAvg30d": 32.72
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.26,
          "priceAvg30d": 32.75
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.3,
          "priceAvg30d": 34.13
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.59,
          "priceAvg30d": 33.4
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 46.23,
          "priceAvg30d": 33.6
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 46.19,
          "priceAvg30d": 32.55
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 47.15,
          "priceAvg30d": 32.01
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.02,
          "priceAvg30d": 31.84
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.23,
          "priceAvg30d": 29.54
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.08,
          "priceAvg30d": 29.31
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.0,
          "priceAvg30d": 27.4
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 38.3,
          "priceAvg30d": 27.11
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 36.21,
          "priceAvg30d": 25.54
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 36.68,
          "priceAvg30d": 25.43
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.31,
          "priceAvg30d": 23.61
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.0,
          "priceAvg30d": 22.99
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.05,
          "priceAvg30d": 17.55
        }
      ],
      "avg": 31.6,
      "max": 47.15,
      "maxBlock": 38,
      "min": 13.25,
      "minBlock": 20,
      "spread3h": 24.02,
      "spreadLowAvg": 20.87,
      "spreadHighAvg": 44.89,
      "avg30d": 24.21,
      "spread30dAvg": 16.02,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.0,
          "priceAvg30d": 16.26
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.72,
          "priceAvg30d": 16.59
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.49,
          "priceAvg30d": 15.95
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.49,
          "priceAvg30d": 15.73
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.72,
          "priceAvg30d": 16.65
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.57,
          "priceAvg30d": 18.04
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 35.0,
          "priceAvg30d": 19.79
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 36.0,
          "priceAvg30d": 21.58
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 36.23,
          "priceAvg30d": 22.28
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 36.21,
          "priceAvg30d": 23.18
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 36.0,
          "priceAvg30d": 23.01
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.3,
          "priceAvg30d": 22.26
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.01,
          "priceAvg30d": 22.31
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.07,
          "priceAvg30d": 23.55
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.09,
          "priceAvg30d": 21.38
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.62,
          "priceAvg30d": 19.22
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 28.24,
          "priceAvg30d": 18.1
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.3,
          "priceAvg30d": 15.74
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.77,
          "priceAvg30d": 13.71
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.25,
          "priceAvg30d": 12.13
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.98,
          "priceAvg30d": 10.65
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.61,
          "priceAvg30d": 10.41
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.31,
          "priceAvg30d": 10.22
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 14.75,
          "priceAvg30d": 10.18
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 14.49,
          "priceAvg30d": 8.57
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.9,
          "priceAvg30d": 9.02
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.91,
          "priceAvg30d": 10.56
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.91,
          "priceAvg30d": 11.32
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.0,
          "priceAvg30d": 13.36
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.91,
          "priceAvg30d": 15.07
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.05,
          "priceAvg30d": 17.94
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.05,
          "priceAvg30d": 21.64
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.26,
          "priceAvg30d": 24.6
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.3,
          "priceAvg30d": 28.96
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.59,
          "priceAvg30d": 29.35
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 46.23,
          "priceAvg30d": 29.57
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 46.19,
          "priceAvg30d": 29.16
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 47.15,
          "priceAvg30d": 28.29
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.02,
          "priceAvg30d": 27.79
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.23,
          "priceAvg30d": 26.69
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.08,
          "priceAvg30d": 26.76
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.0,
          "priceAvg30d": 25.56
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 38.3,
          "priceAvg30d": 25.54
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 36.21,
          "priceAvg30d": 24.01
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 36.68,
          "priceAvg30d": 23.47
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.31,
          "priceAvg30d": 21.63
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.0,
          "priceAvg30d": 21.27
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.05,
          "priceAvg30d": 17.15
        }
      ],
      "avg": 31.55,
      "max": 47.15,
      "maxBlock": 38,
      "min": 13.25,
      "minBlock": 20,
      "spread3h": 24.02,
      "spreadLowAvg": 20.87,
      "spreadHighAvg": 44.89,
      "avg30d": 19.5,
      "spread30dAvg": 16.7,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.0,
          "priceAvg30d": 14.71
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.72,
          "priceAvg30d": 14.26
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.49,
          "priceAvg30d": 13.9
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.49,
          "priceAvg30d": 13.99
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.72,
          "priceAvg30d": 14.59
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.57,
          "priceAvg30d": 15.58
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 35.0,
          "priceAvg30d": 16.65
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 36.0,
          "priceAvg30d": 19.27
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 36.23,
          "priceAvg30d": 19.98
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 36.21,
          "priceAvg30d": 20.93
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 36.0,
          "priceAvg30d": 21.33
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.3,
          "priceAvg30d": 20.67
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.01,
          "priceAvg30d": 19.81
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.07,
          "priceAvg30d": 20.05
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.09,
          "priceAvg30d": 18.38
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.62,
          "priceAvg30d": 17.56
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 28.24,
          "priceAvg30d": 16.87
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.3,
          "priceAvg30d": 14.53
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.77,
          "priceAvg30d": 12.52
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.25,
          "priceAvg30d": 10.68
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.98,
          "priceAvg30d": 9.27
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 7.3,
          "priceAvg30d": 8.24
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
          "price": 4.0,
          "priceAvg30d": 8.26
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 7.0,
          "priceAvg30d": 6.53
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 7.51,
          "priceAvg30d": 7.2
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.91,
          "priceAvg30d": 9.0
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.91,
          "priceAvg30d": 10.04
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.0,
          "priceAvg30d": 11.47
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.91,
          "priceAvg30d": 13.32
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.05,
          "priceAvg30d": 15.13
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.05,
          "priceAvg30d": 17.68
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.26,
          "priceAvg30d": 21.36
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.3,
          "priceAvg30d": 25.51
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.59,
          "priceAvg30d": 26.49
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 46.23,
          "priceAvg30d": 26.68
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 46.19,
          "priceAvg30d": 25.85
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 47.15,
          "priceAvg30d": 25.42
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.02,
          "priceAvg30d": 24.13
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.23,
          "priceAvg30d": 23.11
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.08,
          "priceAvg30d": 23.38
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.0,
          "priceAvg30d": 21.09
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 38.3,
          "priceAvg30d": 22.53
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 36.21,
          "priceAvg30d": 20.48
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 36.68,
          "priceAvg30d": 19.19
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.31,
          "priceAvg30d": 17.73
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.0,
          "priceAvg30d": 18.02
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.05,
          "priceAvg30d": 15.2
        }
      ],
      "avg": 30.74,
      "max": 47.15,
      "maxBlock": 38,
      "min": 4.0,
      "minBlock": 24,
      "spread3h": 33.61,
      "spreadLowAvg": 11.28,
      "spreadHighAvg": 44.89,
      "avg30d": 17.02,
      "spread30dAvg": 16.52,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.0,
          "priceAvg30d": 15.47
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.72,
          "priceAvg30d": 15.34
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.49,
          "priceAvg30d": 14.81
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.49,
          "priceAvg30d": 14.59
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.72,
          "priceAvg30d": 15.46
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.57,
          "priceAvg30d": 16.96
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 35.0,
          "priceAvg30d": 18.85
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 36.0,
          "priceAvg30d": 20.93
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 36.23,
          "priceAvg30d": 21.84
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 36.21,
          "priceAvg30d": 22.66
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 36.0,
          "priceAvg30d": 22.61
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 35.3,
          "priceAvg30d": 21.92
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.01,
          "priceAvg30d": 22.08
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 36.07,
          "priceAvg30d": 22.97
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.09,
          "priceAvg30d": 20.75
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 32.62,
          "priceAvg30d": 18.86
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 28.24,
          "priceAvg30d": 17.25
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.3,
          "priceAvg30d": 15.21
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.77,
          "priceAvg30d": 12.22
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.25,
          "priceAvg30d": 10.4
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.98,
          "priceAvg30d": 9.25
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.61,
          "priceAvg30d": 8.69
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.31,
          "priceAvg30d": 8.38
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 14.75,
          "priceAvg30d": 8.56
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 14.49,
          "priceAvg30d": 6.89
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.9,
          "priceAvg30d": 7.04
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.91,
          "priceAvg30d": 9.03
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.91,
          "priceAvg30d": 10.46
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.0,
          "priceAvg30d": 12.38
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.91,
          "priceAvg30d": 14.42
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.05,
          "priceAvg30d": 17.7
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.05,
          "priceAvg30d": 21.01
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.26,
          "priceAvg30d": 24.6
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.3,
          "priceAvg30d": 28.96
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.59,
          "priceAvg30d": 29.19
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 46.23,
          "priceAvg30d": 29.57
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 46.19,
          "priceAvg30d": 29.16
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 47.15,
          "priceAvg30d": 28.29
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.02,
          "priceAvg30d": 27.79
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 46.23,
          "priceAvg30d": 26.69
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.08,
          "priceAvg30d": 26.76
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.0,
          "priceAvg30d": 25.56
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 38.3,
          "priceAvg30d": 25.45
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 36.21,
          "priceAvg30d": 23.67
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 36.68,
          "priceAvg30d": 23.16
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.31,
          "priceAvg30d": 21.26
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 31.0,
          "priceAvg30d": 20.25
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.05,
          "priceAvg30d": 16.48
        }
      ],
      "avg": 31.55,
      "max": 47.15,
      "maxBlock": 38,
      "min": 13.25,
      "minBlock": 20,
      "spread3h": 24.02,
      "spreadLowAvg": 20.87,
      "spreadHighAvg": 44.89,
      "avg30d": 18.79,
      "spread30dAvg": 17.61,
      "historyDays": 30
    }
  }
};
