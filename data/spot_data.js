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
  "targetDate": "2026-11-10",
  "fetchedAt": "2026-11-10T14:14:03+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 30.0,
        "priceAvg30d": 24.87
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 29.5,
        "priceAvg30d": 23.79
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 29.45,
        "priceAvg30d": 23.01
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 29.48,
        "priceAvg30d": 22.88
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 29.5,
        "priceAvg30d": 23.12
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 30.0,
        "priceAvg30d": 23.87
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 30.27,
        "priceAvg30d": 24.85
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 30.27,
        "priceAvg30d": 25.7
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 30.51,
        "priceAvg30d": 26.07
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 30.51,
        "priceAvg30d": 26.42
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 30.51,
        "priceAvg30d": 26.65
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 31.03,
        "priceAvg30d": 26.85
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 32.0,
        "priceAvg30d": 26.91
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 32.5,
        "priceAvg30d": 26.26
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 33.0,
        "priceAvg30d": 24.18
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 33.05,
        "priceAvg30d": 21.72
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 32.3,
        "priceAvg30d": 20.64
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 33.54,
        "priceAvg30d": 19.77
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 31.5,
        "priceAvg30d": 18.25
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 30.21,
        "priceAvg30d": 16.89
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 28.0,
        "priceAvg30d": 15.94
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 21.9,
        "priceAvg30d": 15.38
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 20.68,
        "priceAvg30d": 14.97
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 18.01,
        "priceAvg30d": 14.9
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 11.9,
        "priceAvg30d": 13.08
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 12.19,
        "priceAvg30d": 13.51
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 15.0,
        "priceAvg30d": 17.28
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 21.28,
        "priceAvg30d": 19.89
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 28.26,
        "priceAvg30d": 20.93
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 30.22,
        "priceAvg30d": 24.25
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 32.25,
        "priceAvg30d": 26.34
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 36.6,
        "priceAvg30d": 30.02
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 40.08,
        "priceAvg30d": 33.67
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 40.1,
        "priceAvg30d": 35.05
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 38.82,
        "priceAvg30d": 34.49
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 37.64,
        "priceAvg30d": 34.24
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 37.57,
        "priceAvg30d": 32.86
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 37.6,
        "priceAvg30d": 32.16
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 37.31,
        "priceAvg30d": 31.3
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 37.54,
        "priceAvg30d": 29.55
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 37.29,
        "priceAvg30d": 28.96
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 37.74,
        "priceAvg30d": 28.24
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 35.8,
        "priceAvg30d": 27.81
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 34.9,
        "priceAvg30d": 27.41
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 34.3,
        "priceAvg30d": 27.72
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 33.21,
        "priceAvg30d": 26.91
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 32.99,
        "priceAvg30d": 26.58
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 31.36,
        "priceAvg30d": 24.55
      }
    ],
    "avg": 30.83,
    "max": 40.1,
    "maxBlock": 34,
    "min": 11.9,
    "minBlock": 25,
    "spread3h": 18.98,
    "spreadLowAvg": 18.18,
    "spreadHighAvg": 37.16,
    "avg30d": 24.6,
    "spread30dAvg": 19.39,
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
          "price": 31.81,
          "priceAvg30d": 21.55
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.47,
          "priceAvg30d": 19.4
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.49,
          "priceAvg30d": 19.33
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 31.34,
          "priceAvg30d": 20.1
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.34,
          "priceAvg30d": 20.86
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.28,
          "priceAvg30d": 21.64
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 31.41,
          "priceAvg30d": 22.44
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.73,
          "priceAvg30d": 23.56
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 32.25,
          "priceAvg30d": 24.45
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 32.25,
          "priceAvg30d": 24.17
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.25,
          "priceAvg30d": 25.81
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 32.74,
          "priceAvg30d": 26.8
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.33,
          "priceAvg30d": 24.71
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 34.72,
          "priceAvg30d": 22.92
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.3,
          "priceAvg30d": 20.48
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 34.9,
          "priceAvg30d": 17.93
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 34.9,
          "priceAvg30d": 16.89
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 29.39,
          "priceAvg30d": 14.45
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 29.38,
          "priceAvg30d": 13.96
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 28.0,
          "priceAvg30d": 12.08
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.45,
          "priceAvg30d": 11.56
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 19.82,
          "priceAvg30d": 10.35
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.02,
          "priceAvg30d": 10.87
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.16,
          "priceAvg30d": 11.2
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.87,
          "priceAvg30d": 9.4
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.84,
          "priceAvg30d": 9.21
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.1,
          "priceAvg30d": 11.4
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.21,
          "priceAvg30d": 15.0
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 34.5,
          "priceAvg30d": 18.15
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 40.0,
          "priceAvg30d": 21.03
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 42.96,
          "priceAvg30d": 23.09
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 42.96,
          "priceAvg30d": 27.3
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 50.0,
          "priceAvg30d": 32.95
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 50.01,
          "priceAvg30d": 33.6
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 46.23,
          "priceAvg30d": 32.48
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 50.0,
          "priceAvg30d": 31.58
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 55.0,
          "priceAvg30d": 30.85
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 54.01,
          "priceAvg30d": 30.85
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 42.96,
          "priceAvg30d": 31.12
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 45.66,
          "priceAvg30d": 29.49
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.8,
          "priceAvg30d": 29.5
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 50.01,
          "priceAvg30d": 27.52
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 42.96,
          "priceAvg30d": 26.43
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 42.96,
          "priceAvg30d": 26.15
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 48.85,
          "priceAvg30d": 25.44
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 48.85,
          "priceAvg30d": 24.2
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 40.0,
          "priceAvg30d": 24.08
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 37.22,
          "priceAvg30d": 22.31
        }
      ],
      "avg": 35.41,
      "max": 55.0,
      "maxBlock": 37,
      "min": 10.87,
      "minBlock": 25,
      "spread3h": 29.29,
      "spreadLowAvg": 18.86,
      "spreadHighAvg": 48.15,
      "avg30d": 21.89,
      "spread30dAvg": 20.6,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 31.81,
          "priceAvg30d": 25.4
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.47,
          "priceAvg30d": 25.02
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.49,
          "priceAvg30d": 24.45
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 31.34,
          "priceAvg30d": 24.28
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.34,
          "priceAvg30d": 24.79
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.28,
          "priceAvg30d": 25.19
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 31.41,
          "priceAvg30d": 25.92
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.73,
          "priceAvg30d": 25.92
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 32.25,
          "priceAvg30d": 26.3
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 32.25,
          "priceAvg30d": 26.38
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.25,
          "priceAvg30d": 26.83
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 32.74,
          "priceAvg30d": 27.16
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.33,
          "priceAvg30d": 27.11
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 34.72,
          "priceAvg30d": 25.91
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.3,
          "priceAvg30d": 23.05
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 34.9,
          "priceAvg30d": 20.75
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 34.9,
          "priceAvg30d": 20.1
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 34.63,
          "priceAvg30d": 18.31
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.59,
          "priceAvg30d": 18.01
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 28.0,
          "priceAvg30d": 17.48
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.45,
          "priceAvg30d": 16.25
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 19.82,
          "priceAvg30d": 15.91
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.02,
          "priceAvg30d": 15.53
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.16,
          "priceAvg30d": 15.54
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.87,
          "priceAvg30d": 14.31
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.84,
          "priceAvg30d": 14.4
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.1,
          "priceAvg30d": 17.36
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.21,
          "priceAvg30d": 19.34
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 34.5,
          "priceAvg30d": 21.95
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 40.0,
          "priceAvg30d": 24.65
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 42.96,
          "priceAvg30d": 26.75
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 42.96,
          "priceAvg30d": 31.38
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 46.5,
          "priceAvg30d": 35.26
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.0,
          "priceAvg30d": 37.04
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 46.23,
          "priceAvg30d": 36.3
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 42.96,
          "priceAvg30d": 36.11
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 42.96,
          "priceAvg30d": 34.66
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 46.0,
          "priceAvg30d": 34.3
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 42.96,
          "priceAvg30d": 33.68
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 45.66,
          "priceAvg30d": 31.82
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.8,
          "priceAvg30d": 31.3
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 47.95,
          "priceAvg30d": 29.84
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 42.96,
          "priceAvg30d": 29.36
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 42.96,
          "priceAvg30d": 29.33
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 42.96,
          "priceAvg30d": 29.11
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 35.26,
          "priceAvg30d": 27.6
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 34.61,
          "priceAvg30d": 26.99
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 33.98,
          "priceAvg30d": 24.7
        }
      ],
      "avg": 34.2,
      "max": 47.95,
      "maxBlock": 42,
      "min": 10.87,
      "minBlock": 25,
      "spread3h": 25.19,
      "spreadLowAvg": 18.86,
      "spreadHighAvg": 44.05,
      "avg30d": 25.4,
      "spread30dAvg": 20.62,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 31.81,
          "priceAvg30d": 28.3
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.47,
          "priceAvg30d": 28.02
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.49,
          "priceAvg30d": 27.97
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 31.34,
          "priceAvg30d": 27.52
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.34,
          "priceAvg30d": 27.76
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.28,
          "priceAvg30d": 27.81
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 31.41,
          "priceAvg30d": 27.97
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.73,
          "priceAvg30d": 27.97
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 32.25,
          "priceAvg30d": 28.2
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 32.25,
          "priceAvg30d": 28.24
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.25,
          "priceAvg30d": 28.47
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 32.74,
          "priceAvg30d": 29.03
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.33,
          "priceAvg30d": 29.23
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 34.72,
          "priceAvg30d": 28.69
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.3,
          "priceAvg30d": 28.39
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 36.14,
          "priceAvg30d": 28.03
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 36.02,
          "priceAvg30d": 26.79
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 45.94,
          "priceAvg30d": 26.86
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 42.96,
          "priceAvg30d": 26.22
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 42.89,
          "priceAvg30d": 24.68
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.2,
          "priceAvg30d": 23.91
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 33.63,
          "priceAvg30d": 23.48
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 32.92,
          "priceAvg30d": 23.34
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 32.3,
          "priceAvg30d": 23.93
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 31.59,
          "priceAvg30d": 23.76
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 31.45,
          "priceAvg30d": 24.5
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 32.23,
          "priceAvg30d": 26.16
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 32.65,
          "priceAvg30d": 28.11
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 34.99,
          "priceAvg30d": 29.68
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 40.0,
          "priceAvg30d": 31.9
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 42.96,
          "priceAvg30d": 32.08
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 42.96,
          "priceAvg30d": 35.22
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 46.5,
          "priceAvg30d": 37.21
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.0,
          "priceAvg30d": 38.43
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 46.23,
          "priceAvg30d": 37.9
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 42.96,
          "priceAvg30d": 37.72
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 42.96,
          "priceAvg30d": 35.89
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 46.0,
          "priceAvg30d": 35.85
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 42.96,
          "priceAvg30d": 35.01
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 45.66,
          "priceAvg30d": 33.36
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.8,
          "priceAvg30d": 32.2
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 47.95,
          "priceAvg30d": 30.95
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 42.96,
          "priceAvg30d": 30.45
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 42.96,
          "priceAvg30d": 30.8
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 42.96,
          "priceAvg30d": 31.99
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 35.26,
          "priceAvg30d": 30.57
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 34.61,
          "priceAvg30d": 29.52
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 33.98,
          "priceAvg30d": 28.09
        }
      ],
      "avg": 37.46,
      "max": 47.95,
      "maxBlock": 42,
      "min": 31.28,
      "minBlock": 6,
      "spread3h": 12.46,
      "spreadLowAvg": 31.59,
      "spreadHighAvg": 44.05,
      "avg30d": 29.54,
      "spread30dAvg": 13.95,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.71,
          "priceAvg30d": 27.51
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.47,
          "priceAvg30d": 27.18
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.49,
          "priceAvg30d": 26.63
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 31.34,
          "priceAvg30d": 26.5
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.34,
          "priceAvg30d": 27.0
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.28,
          "priceAvg30d": 27.37
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 31.41,
          "priceAvg30d": 27.72
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.73,
          "priceAvg30d": 27.99
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 32.25,
          "priceAvg30d": 28.17
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 32.25,
          "priceAvg30d": 28.28
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.25,
          "priceAvg30d": 28.52
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 32.74,
          "priceAvg30d": 28.79
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.33,
          "priceAvg30d": 28.72
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 34.72,
          "priceAvg30d": 28.1
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.3,
          "priceAvg30d": 26.43
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 36.14,
          "priceAvg30d": 24.49
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 36.02,
          "priceAvg30d": 23.59
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 36.17,
          "priceAvg30d": 24.1
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 36.1,
          "priceAvg30d": 23.19
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 36.02,
          "priceAvg30d": 22.04
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.2,
          "priceAvg30d": 20.37
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 31.21,
          "priceAvg30d": 20.07
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 30.51,
          "priceAvg30d": 19.74
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 30.48,
          "priceAvg30d": 19.69
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 24.63,
          "priceAvg30d": 17.7
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 24.59,
          "priceAvg30d": 18.43
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 29.69,
          "priceAvg30d": 21.8
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.29,
          "priceAvg30d": 24.71
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 34.99,
          "priceAvg30d": 26.11
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 36.98,
          "priceAvg30d": 27.88
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 37.3,
          "priceAvg30d": 29.42
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.16,
          "priceAvg30d": 33.84
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 41.18,
          "priceAvg30d": 35.43
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.0,
          "priceAvg30d": 35.57
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.6,
          "priceAvg30d": 36.0
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.59,
          "priceAvg30d": 35.98
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.29,
          "priceAvg30d": 34.75
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 37.3,
          "priceAvg30d": 34.25
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.31,
          "priceAvg30d": 33.85
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 37.3,
          "priceAvg30d": 32.26
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 37.29,
          "priceAvg30d": 30.73
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 37.74,
          "priceAvg30d": 30.08
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 38.09,
          "priceAvg30d": 29.52
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 38.22,
          "priceAvg30d": 29.3
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 36.14,
          "priceAvg30d": 30.13
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 35.26,
          "priceAvg30d": 29.56
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 34.61,
          "priceAvg30d": 29.34
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 33.98,
          "priceAvg30d": 28.36
        }
      ],
      "avg": 34.33,
      "max": 41.18,
      "maxBlock": 33,
      "min": 24.59,
      "minBlock": 26,
      "spread3h": 8.34,
      "spreadLowAvg": 30.1,
      "spreadHighAvg": 38.44,
      "avg30d": 27.65,
      "spread30dAvg": 17.53,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.85,
          "priceAvg30d": 15.58
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.42,
          "priceAvg30d": 15.74
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.42,
          "priceAvg30d": 15.15
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.42,
          "priceAvg30d": 14.31
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.65,
          "priceAvg30d": 15.19
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.3,
          "priceAvg30d": 16.77
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 31.41,
          "priceAvg30d": 17.83
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.73,
          "priceAvg30d": 19.06
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 32.25,
          "priceAvg30d": 19.06
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 32.25,
          "priceAvg30d": 21.01
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 32.25,
          "priceAvg30d": 21.39
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 32.74,
          "priceAvg30d": 20.52
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.33,
          "priceAvg30d": 19.46
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 34.72,
          "priceAvg30d": 19.33
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.3,
          "priceAvg30d": 19.14
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 36.14,
          "priceAvg30d": 17.73
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 36.02,
          "priceAvg30d": 18.55
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 36.17,
          "priceAvg30d": 19.82
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 36.1,
          "priceAvg30d": 19.68
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 36.02,
          "priceAvg30d": 19.56
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.2,
          "priceAvg30d": 18.23
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.51,
          "priceAvg30d": 17.88
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 30.0,
          "priceAvg30d": 18.26
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 22.34,
          "priceAvg30d": 18.14
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.81,
          "priceAvg30d": 14.56
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.85,
          "priceAvg30d": 15.34
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 24.51,
          "priceAvg30d": 20.09
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.29,
          "priceAvg30d": 23.11
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 26.01,
          "priceAvg30d": 23.88
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 36.98,
          "priceAvg30d": 24.83
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 26.38,
          "priceAvg30d": 26.16
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.16,
          "priceAvg30d": 29.09
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 41.18,
          "priceAvg30d": 29.59
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.0,
          "priceAvg30d": 31.3
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.6,
          "priceAvg30d": 29.99
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.59,
          "priceAvg30d": 30.35
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.0,
          "priceAvg30d": 28.38
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.5,
          "priceAvg30d": 28.5
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.31,
          "priceAvg30d": 28.47
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 37.3,
          "priceAvg30d": 26.11
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 37.29,
          "priceAvg30d": 25.72
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 37.74,
          "priceAvg30d": 24.4
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 38.0,
          "priceAvg30d": 23.78
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.0,
          "priceAvg30d": 23.25
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 36.14,
          "priceAvg30d": 23.2
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 35.26,
          "priceAvg30d": 21.01
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 34.61,
          "priceAvg30d": 20.44
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.19,
          "priceAvg30d": 15.5
        }
      ],
      "avg": 29.9,
      "max": 41.18,
      "maxBlock": 33,
      "min": 10.81,
      "minBlock": 25,
      "spread3h": 12.87,
      "spreadLowAvg": 23.75,
      "spreadHighAvg": 36.62,
      "avg30d": 21.34,
      "spread30dAvg": 16.59,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.85,
          "priceAvg30d": 15.33
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.42,
          "priceAvg30d": 15.74
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.42,
          "priceAvg30d": 15.15
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.42,
          "priceAvg30d": 14.31
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.65,
          "priceAvg30d": 14.77
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.3,
          "priceAvg30d": 16.51
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.19,
          "priceAvg30d": 17.57
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.0,
          "priceAvg30d": 18.7
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.01,
          "priceAvg30d": 18.67
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.9,
          "priceAvg30d": 19.86
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.0,
          "priceAvg30d": 19.87
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.0,
          "priceAvg30d": 19.13
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.8,
          "priceAvg30d": 19.19
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.0,
          "priceAvg30d": 18.99
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 35.0,
          "priceAvg30d": 18.54
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 36.14,
          "priceAvg30d": 17.14
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 36.02,
          "priceAvg30d": 18.26
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 36.17,
          "priceAvg30d": 19.82
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 36.1,
          "priceAvg30d": 19.68
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 36.02,
          "priceAvg30d": 19.56
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.2,
          "priceAvg30d": 18.19
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.51,
          "priceAvg30d": 17.83
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 30.0,
          "priceAvg30d": 18.2
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 22.34,
          "priceAvg30d": 18.09
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.35,
          "priceAvg30d": 14.56
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.35,
          "priceAvg30d": 15.34
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 24.51,
          "priceAvg30d": 20.09
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.29,
          "priceAvg30d": 23.11
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.25,
          "priceAvg30d": 23.3
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.38,
          "priceAvg30d": 24.42
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 26.38,
          "priceAvg30d": 26.09
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.16,
          "priceAvg30d": 29.05
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 41.18,
          "priceAvg30d": 29.59
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.0,
          "priceAvg30d": 31.3
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.99,
          "priceAvg30d": 29.75
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 31.78,
          "priceAvg30d": 29.66
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.0,
          "priceAvg30d": 28.38
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.5,
          "priceAvg30d": 28.06
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.31,
          "priceAvg30d": 28.13
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 37.3,
          "priceAvg30d": 25.93
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 35.0,
          "priceAvg30d": 25.54
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.6,
          "priceAvg30d": 24.24
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.0,
          "priceAvg30d": 23.62
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.0,
          "priceAvg30d": 23.0
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.14,
          "priceAvg30d": 22.64
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.51,
          "priceAvg30d": 20.76
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.72,
          "priceAvg30d": 20.27
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.19,
          "priceAvg30d": 15.37
        }
      ],
      "avg": 27.51,
      "max": 41.18,
      "maxBlock": 33,
      "min": 8.35,
      "minBlock": 25,
      "spread3h": 9.28,
      "spreadLowAvg": 23.33,
      "spreadHighAvg": 32.62,
      "avg30d": 21.07,
      "spread30dAvg": 16.39,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.85,
          "priceAvg30d": 14.76
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.42,
          "priceAvg30d": 15.66
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.42,
          "priceAvg30d": 14.5
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.42,
          "priceAvg30d": 13.71
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.65,
          "priceAvg30d": 14.23
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.71,
          "priceAvg30d": 15.49
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.19,
          "priceAvg30d": 16.33
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.0,
          "priceAvg30d": 17.9
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.01,
          "priceAvg30d": 18.58
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.9,
          "priceAvg30d": 19.82
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.0,
          "priceAvg30d": 19.79
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.0,
          "priceAvg30d": 19.12
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.8,
          "priceAvg30d": 19.08
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.0,
          "priceAvg30d": 18.85
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.5,
          "priceAvg30d": 14.89
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 29.5,
          "priceAvg30d": 13.06
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.03,
          "priceAvg30d": 13.27
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.0,
          "priceAvg30d": 12.06
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.17,
          "priceAvg30d": 10.94
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.66,
          "priceAvg30d": 10.11
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.87,
          "priceAvg30d": 8.5
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.48,
          "priceAvg30d": 8.1
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.5,
          "priceAvg30d": 7.86
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 4.0,
          "priceAvg30d": 8.2
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.0,
          "priceAvg30d": 7.17
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.5,
          "priceAvg30d": 7.27
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.9,
          "priceAvg30d": 8.46
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 5.01,
          "priceAvg30d": 9.16
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.67,
          "priceAvg30d": 11.11
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 2.5,
          "priceAvg30d": 12.62
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.43,
          "priceAvg30d": 14.96
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.42,
          "priceAvg30d": 17.93
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.71,
          "priceAvg30d": 22.15
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.0,
          "priceAvg30d": 25.57
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.99,
          "priceAvg30d": 25.15
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 31.78,
          "priceAvg30d": 25.58
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.0,
          "priceAvg30d": 24.52
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.5,
          "priceAvg30d": 23.9
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.55,
          "priceAvg30d": 23.91
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.5,
          "priceAvg30d": 22.89
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.07,
          "priceAvg30d": 22.84
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.6,
          "priceAvg30d": 22.19
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.0,
          "priceAvg30d": 21.62
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.0,
          "priceAvg30d": 21.03
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.14,
          "priceAvg30d": 20.28
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.51,
          "priceAvg30d": 18.4
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.72,
          "priceAvg30d": 18.13
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.19,
          "priceAvg30d": 14.34
        }
      ],
      "avg": 19.75,
      "max": 32.5,
      "maxBlock": 40,
      "min": 0.5,
      "minBlock": 26,
      "spread3h": 23.44,
      "spreadLowAvg": 5.68,
      "spreadHighAvg": 29.12,
      "avg30d": 16.37,
      "spread30dAvg": 15.05,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.49,
          "priceAvg30d": 11.7
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.42,
          "priceAvg30d": 11.29
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.42,
          "priceAvg30d": 10.72
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.42,
          "priceAvg30d": 10.44
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.65,
          "priceAvg30d": 10.53
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.47,
          "priceAvg30d": 10.76
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.19,
          "priceAvg30d": 10.72
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.0,
          "priceAvg30d": 13.1
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.01,
          "priceAvg30d": 13.86
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.9,
          "priceAvg30d": 15.02
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.0,
          "priceAvg30d": 15.54
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.0,
          "priceAvg30d": 15.1
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.47,
          "priceAvg30d": 14.66
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.47,
          "priceAvg30d": 12.96
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.0,
          "priceAvg30d": 10.56
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 24.5,
          "priceAvg30d": 10.76
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.03,
          "priceAvg30d": 11.31
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.0,
          "priceAvg30d": 10.16
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.17,
          "priceAvg30d": 9.02
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.66,
          "priceAvg30d": 8.19
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.87,
          "priceAvg30d": 6.66
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.48,
          "priceAvg30d": 5.75
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.5,
          "priceAvg30d": 5.77
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 4.0,
          "priceAvg30d": 5.93
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.0,
          "priceAvg30d": 5.07
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.5,
          "priceAvg30d": 5.33
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.9,
          "priceAvg30d": 6.99
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 5.01,
          "priceAvg30d": 7.42
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.67,
          "priceAvg30d": 8.68
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 2.5,
          "priceAvg30d": 10.0
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 2.5,
          "priceAvg30d": 11.23
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.34,
          "priceAvg30d": 12.2
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.71,
          "priceAvg30d": 14.22
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.0,
          "priceAvg30d": 17.91
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.99,
          "priceAvg30d": 18.92
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 31.78,
          "priceAvg30d": 19.44
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.0,
          "priceAvg30d": 18.5
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.5,
          "priceAvg30d": 18.07
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.55,
          "priceAvg30d": 17.0
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.5,
          "priceAvg30d": 16.11
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.07,
          "priceAvg30d": 16.35
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.6,
          "priceAvg30d": 14.73
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.0,
          "priceAvg30d": 15.91
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.0,
          "priceAvg30d": 14.73
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.14,
          "priceAvg30d": 13.31
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.51,
          "priceAvg30d": 12.11
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.72,
          "priceAvg30d": 12.47
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.19,
          "priceAvg30d": 10.57
        }
      ],
      "avg": 18.45,
      "max": 32.5,
      "maxBlock": 40,
      "min": 0.5,
      "minBlock": 26,
      "spread3h": 23.44,
      "spreadLowAvg": 5.68,
      "spreadHighAvg": 29.12,
      "avg30d": 12.04,
      "spread30dAvg": 13.47,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.85,
          "priceAvg30d": 14.76
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.42,
          "priceAvg30d": 15.23
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.42,
          "priceAvg30d": 14.03
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.42,
          "priceAvg30d": 13.48
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.65,
          "priceAvg30d": 13.93
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.71,
          "priceAvg30d": 15.27
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.19,
          "priceAvg30d": 16.2
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.0,
          "priceAvg30d": 17.86
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.01,
          "priceAvg30d": 18.4
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.9,
          "priceAvg30d": 19.52
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.0,
          "priceAvg30d": 19.48
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.0,
          "priceAvg30d": 18.81
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.8,
          "priceAvg30d": 18.89
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.0,
          "priceAvg30d": 18.69
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.5,
          "priceAvg30d": 14.82
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 29.5,
          "priceAvg30d": 13.06
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.71,
          "priceAvg30d": 12.88
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.42,
          "priceAvg30d": 10.95
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.17,
          "priceAvg30d": 9.16
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.5,
          "priceAvg30d": 8.11
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.14
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.84
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 6.7
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.49
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
          "priceAvg30d": 5.88
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 6.63
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 7.85
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 9.54
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 2.5,
          "priceAvg30d": 12.03
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.43,
          "priceAvg30d": 14.96
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.42,
          "priceAvg30d": 17.84
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 15.71,
          "priceAvg30d": 22.15
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.0,
          "priceAvg30d": 25.57
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.99,
          "priceAvg30d": 25.15
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 31.78,
          "priceAvg30d": 25.58
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.0,
          "priceAvg30d": 24.52
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 27.5,
          "priceAvg30d": 23.9
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.55,
          "priceAvg30d": 23.91
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.5,
          "priceAvg30d": 22.89
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.07,
          "priceAvg30d": 22.84
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.6,
          "priceAvg30d": 22.19
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.0,
          "priceAvg30d": 21.62
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.0,
          "priceAvg30d": 21.03
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.14,
          "priceAvg30d": 20.28
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.51,
          "priceAvg30d": 18.4
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.72,
          "priceAvg30d": 18.13
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.19,
          "priceAvg30d": 14.34
        }
      ],
      "avg": 18.04,
      "max": 32.5,
      "maxBlock": 40,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 25.6,
      "spreadLowAvg": 3.52,
      "spreadHighAvg": 29.12,
      "avg30d": 15.91,
      "spread30dAvg": 15.8,
      "historyDays": 30
    }
  }
};
