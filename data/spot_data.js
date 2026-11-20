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
  "targetDate": "2026-11-20",
  "fetchedAt": "2026-11-20T13:53:06+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 28.89,
        "priceAvg30d": 26.34
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 29.1,
        "priceAvg30d": 25.37
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 28.71,
        "priceAvg30d": 24.68
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 29.88,
        "priceAvg30d": 24.59
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 28.66,
        "priceAvg30d": 24.76
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 29.52,
        "priceAvg30d": 25.59
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 29.51,
        "priceAvg30d": 26.68
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 29.97,
        "priceAvg30d": 27.58
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 30.8,
        "priceAvg30d": 27.96
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 31.74,
        "priceAvg30d": 28.3
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 32.37,
        "priceAvg30d": 28.6
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 33.14,
        "priceAvg30d": 28.85
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 36.61,
        "priceAvg30d": 29.28
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 40.0,
        "priceAvg30d": 29.44
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 38.89,
        "priceAvg30d": 28.2
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 36.61,
        "priceAvg30d": 26.17
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 33.0,
        "priceAvg30d": 25.2
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 32.52,
        "priceAvg30d": 24.49
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 29.98,
        "priceAvg30d": 22.74
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 28.76,
        "priceAvg30d": 19.99
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 27.34,
        "priceAvg30d": 18.63
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 27.34,
        "priceAvg30d": 17.63
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 27.0,
        "priceAvg30d": 17.19
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 27.23,
        "priceAvg30d": 16.89
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 23.44,
        "priceAvg30d": 15.01
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 24.45,
        "priceAvg30d": 15.49
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 27.12,
        "priceAvg30d": 19.82
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 27.77,
        "priceAvg30d": 22.32
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 29.99,
        "priceAvg30d": 24.26
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 31.14,
        "priceAvg30d": 27.08
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 38.31,
        "priceAvg30d": 29.58
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 43.29,
        "priceAvg30d": 32.52
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 43.19,
        "priceAvg30d": 35.66
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 44.5,
        "priceAvg30d": 36.66
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 43.29,
        "priceAvg30d": 36.4
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 43.19,
        "priceAvg30d": 35.97
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 43.19,
        "priceAvg30d": 35.05
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 43.19,
        "priceAvg30d": 34.8
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 43.19,
        "priceAvg30d": 34.03
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 38.89,
        "priceAvg30d": 32.8
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 40.78,
        "priceAvg30d": 31.97
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 40.0,
        "priceAvg30d": 31.54
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 38.3,
        "priceAvg30d": 31.1
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 37.67,
        "priceAvg30d": 29.89
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 41.0,
        "priceAvg30d": 30.17
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 38.89,
        "priceAvg30d": 29.06
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 38.3,
        "priceAvg30d": 28.6
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 32.89,
        "priceAvg30d": 26.34
      }
    ],
    "avg": 34.24,
    "max": 44.5,
    "maxBlock": 34,
    "min": 23.44,
    "minBlock": 25,
    "spread3h": 15.59,
    "spreadLowAvg": 26.82,
    "spreadHighAvg": 42.41,
    "avg30d": 27.11,
    "spread30dAvg": 19.18,
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
          "price": 29.43,
          "priceAvg30d": 24.71
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.59,
          "priceAvg30d": 22.81
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.59,
          "priceAvg30d": 22.82
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.59,
          "priceAvg30d": 23.49
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.88,
          "priceAvg30d": 23.8
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.88,
          "priceAvg30d": 24.27
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.92,
          "priceAvg30d": 25.29
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.02,
          "priceAvg30d": 26.09
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.85,
          "priceAvg30d": 26.46
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.26,
          "priceAvg30d": 26.63
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.81,
          "priceAvg30d": 26.96
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.81,
          "priceAvg30d": 27.25
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.81,
          "priceAvg30d": 27.43
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.55,
          "priceAvg30d": 27.31
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.92,
          "priceAvg30d": 24.9
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 28.92,
          "priceAvg30d": 22.52
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 28.92,
          "priceAvg30d": 21.42
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 28.06,
          "priceAvg30d": 19.01
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 27.79,
          "priceAvg30d": 17.74
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.0,
          "priceAvg30d": 15.6
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.19,
          "priceAvg30d": 14.64
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.0,
          "priceAvg30d": 13.46
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.38,
          "priceAvg30d": 13.87
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.9,
          "priceAvg30d": 13.98
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.09,
          "priceAvg30d": 12.5
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.66,
          "priceAvg30d": 12.46
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.47,
          "priceAvg30d": 15.69
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 25.71,
          "priceAvg30d": 20.02
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 27.64,
          "priceAvg30d": 22.25
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 28.92,
          "priceAvg30d": 25.31
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 32.01,
          "priceAvg30d": 27.96
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.0,
          "priceAvg30d": 31.14
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.89,
          "priceAvg30d": 34.1
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 41.4,
          "priceAvg30d": 34.02
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 41.0,
          "priceAvg30d": 32.85
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.5,
          "priceAvg30d": 32.54
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.8,
          "priceAvg30d": 32.62
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.8,
          "priceAvg30d": 32.83
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.0,
          "priceAvg30d": 33.2
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.01,
          "priceAvg30d": 31.97
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 31.9,
          "priceAvg30d": 31.8
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.8,
          "priceAvg30d": 30.2
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 29.49,
          "priceAvg30d": 29.32
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.92,
          "priceAvg30d": 27.77
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.23,
          "priceAvg30d": 27.86
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.76,
          "priceAvg30d": 26.85
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.17,
          "priceAvg30d": 26.2
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.9,
          "priceAvg30d": 24.75
        }
      ],
      "avg": 26.82,
      "max": 41.4,
      "maxBlock": 34,
      "min": 11.09,
      "minBlock": 25,
      "spread3h": 21.51,
      "spreadLowAvg": 16.35,
      "spreadHighAvg": 37.87,
      "avg30d": 24.76,
      "spread30dAvg": 19.0,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 17.55,
          "priceAvg30d": 26.87
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.59,
          "priceAvg30d": 25.89
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.59,
          "priceAvg30d": 25.11
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.59,
          "priceAvg30d": 24.49
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.88,
          "priceAvg30d": 24.9
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.88,
          "priceAvg30d": 25.63
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.92,
          "priceAvg30d": 26.78
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.02,
          "priceAvg30d": 27.3
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.85,
          "priceAvg30d": 27.75
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.26,
          "priceAvg30d": 27.92
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.22,
          "priceAvg30d": 28.4
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.89,
          "priceAvg30d": 28.77
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.01,
          "priceAvg30d": 29.39
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.55,
          "priceAvg30d": 29.08
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.92,
          "priceAvg30d": 26.53
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 28.92,
          "priceAvg30d": 23.57
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 28.92,
          "priceAvg30d": 23.45
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 28.92,
          "priceAvg30d": 22.14
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 27.79,
          "priceAvg30d": 20.66
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.0,
          "priceAvg30d": 19.23
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.19,
          "priceAvg30d": 17.81
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.0,
          "priceAvg30d": 16.94
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.38,
          "priceAvg30d": 16.32
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.9,
          "priceAvg30d": 16.25
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.66,
          "priceAvg30d": 15.04
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.66,
          "priceAvg30d": 15.53
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.47,
          "priceAvg30d": 19.12
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 25.71,
          "priceAvg30d": 21.53
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 27.64,
          "priceAvg30d": 24.05
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 28.92,
          "priceAvg30d": 27.33
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 32.01,
          "priceAvg30d": 30.13
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.0,
          "priceAvg30d": 33.71
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.89,
          "priceAvg30d": 36.29
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 41.4,
          "priceAvg30d": 37.51
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 41.0,
          "priceAvg30d": 37.58
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.5,
          "priceAvg30d": 37.09
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.8,
          "priceAvg30d": 36.04
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.8,
          "priceAvg30d": 35.95
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.0,
          "priceAvg30d": 35.64
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.01,
          "priceAvg30d": 34.46
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 31.9,
          "priceAvg30d": 33.83
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.8,
          "priceAvg30d": 32.65
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 29.49,
          "priceAvg30d": 32.47
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.92,
          "priceAvg30d": 31.16
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.76,
          "priceAvg30d": 30.88
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.76,
          "priceAvg30d": 28.85
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.2,
          "priceAvg30d": 28.21
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 5.0,
          "priceAvg30d": 25.85
        }
      ],
      "avg": 26.31,
      "max": 41.4,
      "maxBlock": 34,
      "min": 5.0,
      "minBlock": 48,
      "spread3h": 15.64,
      "spreadLowAvg": 22.23,
      "spreadHighAvg": 37.87,
      "avg30d": 27.13,
      "spread30dAvg": 20.39,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.21,
          "priceAvg30d": 29.77
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.24,
          "priceAvg30d": 29.6
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.1,
          "priceAvg30d": 29.61
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.24,
          "priceAvg30d": 29.11
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.1,
          "priceAvg30d": 29.22
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.24,
          "priceAvg30d": 29.23
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.52,
          "priceAvg30d": 29.36
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.69,
          "priceAvg30d": 29.4
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.24,
          "priceAvg30d": 29.65
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.94,
          "priceAvg30d": 29.78
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.22,
          "priceAvg30d": 30.04
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.98,
          "priceAvg30d": 30.65
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.0,
          "priceAvg30d": 31.61
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 38.89,
          "priceAvg30d": 31.81
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 38.89,
          "priceAvg30d": 31.62
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 38.0,
          "priceAvg30d": 31.13
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.53,
          "priceAvg30d": 29.87
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.69,
          "priceAvg30d": 30.45
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 27.79,
          "priceAvg30d": 30.12
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 27.74,
          "priceAvg30d": 28.43
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 27.34,
          "priceAvg30d": 27.72
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.34,
          "priceAvg30d": 26.97
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.34,
          "priceAvg30d": 26.55
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.34,
          "priceAvg30d": 26.71
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 26.93,
          "priceAvg30d": 25.9
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 27.24,
          "priceAvg30d": 26.61
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.5,
          "priceAvg30d": 29.06
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.5,
          "priceAvg30d": 30.62
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.25,
          "priceAvg30d": 31.97
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.9,
          "priceAvg30d": 33.24
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 35.91,
          "priceAvg30d": 34.73
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.0,
          "priceAvg30d": 37.68
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.89,
          "priceAvg30d": 38.92
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 41.4,
          "priceAvg30d": 39.64
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 41.0,
          "priceAvg30d": 39.66
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.89,
          "priceAvg30d": 38.99
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.89,
          "priceAvg30d": 37.49
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.89,
          "priceAvg30d": 37.73
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 38.89,
          "priceAvg30d": 37.25
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 38.89,
          "priceAvg30d": 36.44
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 38.89,
          "priceAvg30d": 35.34
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 38.89,
          "priceAvg30d": 34.26
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 38.89,
          "priceAvg30d": 33.93
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.06,
          "priceAvg30d": 33.07
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.19,
          "priceAvg30d": 34.77
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 43.19,
          "priceAvg30d": 32.72
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 42.65,
          "priceAvg30d": 31.37
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 37.99,
          "priceAvg30d": 29.99
        }
      ],
      "avg": 33.74,
      "max": 43.19,
      "maxBlock": 45,
      "min": 26.93,
      "minBlock": 25,
      "spread3h": 11.74,
      "spreadLowAvg": 27.38,
      "spreadHighAvg": 39.11,
      "avg30d": 31.87,
      "spread30dAvg": 13.03,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.21,
          "priceAvg30d": 29.31
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.97,
          "priceAvg30d": 29.31
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.88,
          "priceAvg30d": 28.81
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 31.79,
          "priceAvg30d": 28.8
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.37,
          "priceAvg30d": 29.21
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.24,
          "priceAvg30d": 29.6
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.74,
          "priceAvg30d": 29.84
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.79,
          "priceAvg30d": 30.19
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 32.97,
          "priceAvg30d": 30.35
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.3,
          "priceAvg30d": 30.42
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.62,
          "priceAvg30d": 30.73
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.0,
          "priceAvg30d": 31.02
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.61,
          "priceAvg30d": 31.34
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 42.99,
          "priceAvg30d": 31.52
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 42.97,
          "priceAvg30d": 30.51
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 43.03,
          "priceAvg30d": 29.14
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 35.55,
          "priceAvg30d": 28.62
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.49,
          "priceAvg30d": 28.85
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 33.58,
          "priceAvg30d": 27.69
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.29,
          "priceAvg30d": 25.87
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 28.47,
          "priceAvg30d": 24.53
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.91,
          "priceAvg30d": 24.08
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.94,
          "priceAvg30d": 23.73
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.34,
          "priceAvg30d": 23.51
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 25.57,
          "priceAvg30d": 21.02
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 27.24,
          "priceAvg30d": 21.91
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.5,
          "priceAvg30d": 25.41
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.58,
          "priceAvg30d": 28.3
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.25,
          "priceAvg30d": 30.21
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.99,
          "priceAvg30d": 31.64
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 38.59,
          "priceAvg30d": 33.13
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 43.61,
          "priceAvg30d": 36.68
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 45.0,
          "priceAvg30d": 37.33
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.23,
          "priceAvg30d": 37.22
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.58,
          "priceAvg30d": 37.96
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.32,
          "priceAvg30d": 37.6
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.31,
          "priceAvg30d": 36.87
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.28,
          "priceAvg30d": 36.67
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.6,
          "priceAvg30d": 36.56
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.19,
          "priceAvg30d": 35.57
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 43.19,
          "priceAvg30d": 34.03
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 43.29,
          "priceAvg30d": 33.61
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.19,
          "priceAvg30d": 33.14
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.01,
          "priceAvg30d": 32.45
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.19,
          "priceAvg30d": 32.84
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 43.19,
          "priceAvg30d": 32.19
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 43.02,
          "priceAvg30d": 31.62
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 37.99,
          "priceAvg30d": 30.74
        }
      ],
      "avg": 36.29,
      "max": 46.23,
      "maxBlock": 34,
      "min": 25.57,
      "minBlock": 25,
      "spread3h": 15.15,
      "spreadLowAvg": 27.75,
      "spreadHighAvg": 42.9,
      "avg30d": 30.66,
      "spread30dAvg": 15.22,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.21,
          "priceAvg30d": 16.37
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.97,
          "priceAvg30d": 16.31
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.88,
          "priceAvg30d": 15.99
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 31.79,
          "priceAvg30d": 15.78
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.37,
          "priceAvg30d": 17.21
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.67,
          "priceAvg30d": 19.52
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.74,
          "priceAvg30d": 21.46
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.79,
          "priceAvg30d": 22.66
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 32.97,
          "priceAvg30d": 22.76
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.3,
          "priceAvg30d": 24.08
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.62,
          "priceAvg30d": 24.86
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.0,
          "priceAvg30d": 24.14
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.61,
          "priceAvg30d": 23.29
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 42.99,
          "priceAvg30d": 23.72
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 42.97,
          "priceAvg30d": 23.95
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 43.03,
          "priceAvg30d": 22.81
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 35.55,
          "priceAvg30d": 22.93
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.49,
          "priceAvg30d": 23.68
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 33.58,
          "priceAvg30d": 23.52
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.29,
          "priceAvg30d": 23.11
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 28.47,
          "priceAvg30d": 21.65
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.91,
          "priceAvg30d": 20.72
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.94,
          "priceAvg30d": 21.13
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.34,
          "priceAvg30d": 20.66
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 25.0,
          "priceAvg30d": 16.22
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 25.0,
          "priceAvg30d": 16.84
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.5,
          "priceAvg30d": 22.89
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.58,
          "priceAvg30d": 25.38
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.25,
          "priceAvg30d": 26.88
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.99,
          "priceAvg30d": 28.8
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 38.59,
          "priceAvg30d": 29.5
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 43.61,
          "priceAvg30d": 32.73
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 45.0,
          "priceAvg30d": 32.75
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.23,
          "priceAvg30d": 34.09
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.58,
          "priceAvg30d": 33.99
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.32,
          "priceAvg30d": 34.19
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.31,
          "priceAvg30d": 32.44
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.28,
          "priceAvg30d": 31.91
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.6,
          "priceAvg30d": 31.74
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.19,
          "priceAvg30d": 29.27
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 43.19,
          "priceAvg30d": 28.99
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 43.29,
          "priceAvg30d": 27.33
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.19,
          "priceAvg30d": 26.89
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.01,
          "priceAvg30d": 25.05
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.19,
          "priceAvg30d": 25.9
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 43.19,
          "priceAvg30d": 23.67
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 43.02,
          "priceAvg30d": 22.77
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 37.99,
          "priceAvg30d": 17.15
        }
      ],
      "avg": 36.16,
      "max": 46.23,
      "maxBlock": 34,
      "min": 25.0,
      "minBlock": 25,
      "spread3h": 15.52,
      "spreadLowAvg": 27.38,
      "spreadHighAvg": 42.9,
      "avg30d": 24.37,
      "spread30dAvg": 16.72,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.21,
          "priceAvg30d": 16.37
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.97,
          "priceAvg30d": 16.31
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.88,
          "priceAvg30d": 15.99
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 31.79,
          "priceAvg30d": 15.78
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.37,
          "priceAvg30d": 16.54
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.67,
          "priceAvg30d": 18.96
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.91,
          "priceAvg30d": 20.46
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.79,
          "priceAvg30d": 21.89
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 32.97,
          "priceAvg30d": 21.96
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.3,
          "priceAvg30d": 22.85
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.62,
          "priceAvg30d": 22.75
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.0,
          "priceAvg30d": 21.85
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.61,
          "priceAvg30d": 21.98
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 42.99,
          "priceAvg30d": 22.92
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 42.97,
          "priceAvg30d": 23.38
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 43.03,
          "priceAvg30d": 22.32
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 35.55,
          "priceAvg30d": 22.74
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.49,
          "priceAvg30d": 23.68
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 33.58,
          "priceAvg30d": 23.52
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.29,
          "priceAvg30d": 23.11
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 28.47,
          "priceAvg30d": 21.58
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.91,
          "priceAvg30d": 20.62
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.94,
          "priceAvg30d": 21.13
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.34,
          "priceAvg30d": 20.66
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 25.0,
          "priceAvg30d": 16.13
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 25.0,
          "priceAvg30d": 16.75
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.5,
          "priceAvg30d": 22.89
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.58,
          "priceAvg30d": 25.28
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.25,
          "priceAvg30d": 26.55
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.99,
          "priceAvg30d": 28.03
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 38.59,
          "priceAvg30d": 29.44
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 43.61,
          "priceAvg30d": 32.73
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 45.0,
          "priceAvg30d": 32.75
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.23,
          "priceAvg30d": 34.09
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.58,
          "priceAvg30d": 33.5
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.32,
          "priceAvg30d": 33.63
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.31,
          "priceAvg30d": 32.43
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.28,
          "priceAvg30d": 31.9
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.6,
          "priceAvg30d": 31.72
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.19,
          "priceAvg30d": 29.27
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 43.19,
          "priceAvg30d": 28.91
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 43.29,
          "priceAvg30d": 26.99
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.19,
          "priceAvg30d": 26.63
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.01,
          "priceAvg30d": 25.05
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.19,
          "priceAvg30d": 24.91
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 43.19,
          "priceAvg30d": 23.05
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 43.02,
          "priceAvg30d": 22.44
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 37.99,
          "priceAvg30d": 17.15
        }
      ],
      "avg": 36.1,
      "max": 46.23,
      "maxBlock": 34,
      "min": 25.0,
      "minBlock": 25,
      "spread3h": 15.52,
      "spreadLowAvg": 27.38,
      "spreadHighAvg": 42.9,
      "avg30d": 23.99,
      "spread30dAvg": 16.31,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.21,
          "priceAvg30d": 15.79
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.97,
          "priceAvg30d": 16.22
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.88,
          "priceAvg30d": 15.42
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 31.79,
          "priceAvg30d": 15.19
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.37,
          "priceAvg30d": 16.12
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.67,
          "priceAvg30d": 17.81
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.91,
          "priceAvg30d": 19.52
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.79,
          "priceAvg30d": 21.24
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 32.97,
          "priceAvg30d": 21.88
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.3,
          "priceAvg30d": 22.8
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.62,
          "priceAvg30d": 22.67
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.0,
          "priceAvg30d": 21.84
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.61,
          "priceAvg30d": 21.87
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 42.99,
          "priceAvg30d": 22.84
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 42.97,
          "priceAvg30d": 20.5
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 43.03,
          "priceAvg30d": 18.25
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 35.55,
          "priceAvg30d": 17.34
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.49,
          "priceAvg30d": 14.98
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 33.58,
          "priceAvg30d": 13.01
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.29,
          "priceAvg30d": 11.55
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 23.53,
          "priceAvg30d": 10.29
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 16.67,
          "priceAvg30d": 10.28
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.89,
          "priceAvg30d": 10.21
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.53,
          "priceAvg30d": 10.35
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 13.85,
          "priceAvg30d": 8.54
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 14.89,
          "priceAvg30d": 8.95
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.5,
          "priceAvg30d": 10.15
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.45,
          "priceAvg30d": 11.02
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.25,
          "priceAvg30d": 12.86
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.99,
          "priceAvg30d": 14.66
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 38.59,
          "priceAvg30d": 17.35
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 43.61,
          "priceAvg30d": 20.79
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 45.0,
          "priceAvg30d": 24.43
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.23,
          "priceAvg30d": 28.37
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.58,
          "priceAvg30d": 28.9
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.32,
          "priceAvg30d": 29.45
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.31,
          "priceAvg30d": 28.53
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.28,
          "priceAvg30d": 27.66
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.6,
          "priceAvg30d": 27.16
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.19,
          "priceAvg30d": 26.07
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 43.19,
          "priceAvg30d": 26.05
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 43.29,
          "priceAvg30d": 24.82
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.19,
          "priceAvg30d": 24.77
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.01,
          "priceAvg30d": 23.27
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.19,
          "priceAvg30d": 22.73
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 43.19,
          "priceAvg30d": 20.86
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 43.02,
          "priceAvg30d": 20.48
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 37.99,
          "priceAvg30d": 16.33
        }
      ],
      "avg": 34.86,
      "max": 46.23,
      "maxBlock": 34,
      "min": 13.85,
      "minBlock": 25,
      "spread3h": 22.75,
      "spreadLowAvg": 20.16,
      "spreadHighAvg": 42.9,
      "avg30d": 19.0,
      "spread30dAvg": 16.4,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.21,
          "priceAvg30d": 14.1
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.97,
          "priceAvg30d": 13.51
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.88,
          "priceAvg30d": 13.12
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 31.79,
          "priceAvg30d": 13.24
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.37,
          "priceAvg30d": 13.82
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.67,
          "priceAvg30d": 14.97
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.91,
          "priceAvg30d": 15.88
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.79,
          "priceAvg30d": 18.48
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 32.97,
          "priceAvg30d": 19.15
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.3,
          "priceAvg30d": 20.1
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.62,
          "priceAvg30d": 20.49
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.0,
          "priceAvg30d": 19.74
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.61,
          "priceAvg30d": 18.87
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 42.99,
          "priceAvg30d": 18.89
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 42.97,
          "priceAvg30d": 17.22
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 43.03,
          "priceAvg30d": 16.38
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 35.55,
          "priceAvg30d": 15.78
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.49,
          "priceAvg30d": 13.43
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 33.58,
          "priceAvg30d": 11.4
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.29,
          "priceAvg30d": 9.71
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 23.53,
          "priceAvg30d": 8.49
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 16.67,
          "priceAvg30d": 7.69
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.89,
          "priceAvg30d": 7.95
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.53,
          "priceAvg30d": 7.48
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 13.85,
          "priceAvg30d": 6.07
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 14.89,
          "priceAvg30d": 6.7
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.5,
          "priceAvg30d": 8.17
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.45,
          "priceAvg30d": 9.47
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.25,
          "priceAvg30d": 10.74
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.99,
          "priceAvg30d": 12.5
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 38.59,
          "priceAvg30d": 14.12
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 43.61,
          "priceAvg30d": 16.67
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 45.0,
          "priceAvg30d": 20.34
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.23,
          "priceAvg30d": 24.44
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.58,
          "priceAvg30d": 25.44
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.32,
          "priceAvg30d": 25.65
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.31,
          "priceAvg30d": 24.8
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.28,
          "priceAvg30d": 24.42
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.6,
          "priceAvg30d": 23.07
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.19,
          "priceAvg30d": 21.95
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 43.19,
          "priceAvg30d": 22.22
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 43.29,
          "priceAvg30d": 19.92
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.19,
          "priceAvg30d": 21.37
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.01,
          "priceAvg30d": 19.33
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.19,
          "priceAvg30d": 18.03
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 43.19,
          "priceAvg30d": 16.55
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 43.02,
          "priceAvg30d": 16.85
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 37.99,
          "priceAvg30d": 14.1
        }
      ],
      "avg": 34.86,
      "max": 46.23,
      "maxBlock": 34,
      "min": 13.85,
      "minBlock": 25,
      "spread3h": 22.75,
      "spreadLowAvg": 20.16,
      "spreadHighAvg": 42.9,
      "avg30d": 16.1,
      "spread30dAvg": 16.11,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.21,
          "priceAvg30d": 14.99
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.97,
          "priceAvg30d": 14.98
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.88,
          "priceAvg30d": 14.28
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 31.79,
          "priceAvg30d": 14.05
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.37,
          "priceAvg30d": 14.93
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.67,
          "priceAvg30d": 16.72
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.91,
          "priceAvg30d": 18.58
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.79,
          "priceAvg30d": 20.59
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 32.97,
          "priceAvg30d": 21.45
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 33.3,
          "priceAvg30d": 22.28
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 33.62,
          "priceAvg30d": 22.27
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 36.0,
          "priceAvg30d": 21.5
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 36.61,
          "priceAvg30d": 21.63
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 42.99,
          "priceAvg30d": 22.26
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 42.97,
          "priceAvg30d": 19.86
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 43.03,
          "priceAvg30d": 17.88
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 35.55,
          "priceAvg30d": 16.49
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.49,
          "priceAvg30d": 14.45
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 33.58,
          "priceAvg30d": 11.52
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 29.29,
          "priceAvg30d": 9.81
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 23.53,
          "priceAvg30d": 8.88
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 16.67,
          "priceAvg30d": 8.52
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.89,
          "priceAvg30d": 8.37
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.53,
          "priceAvg30d": 8.16
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 13.85,
          "priceAvg30d": 6.81
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 14.89,
          "priceAvg30d": 6.93
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.5,
          "priceAvg30d": 8.62
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.45,
          "priceAvg30d": 10.16
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.25,
          "priceAvg30d": 11.88
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.99,
          "priceAvg30d": 14.02
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 38.59,
          "priceAvg30d": 17.11
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 43.61,
          "priceAvg30d": 20.15
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 45.0,
          "priceAvg30d": 24.43
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.23,
          "priceAvg30d": 28.37
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.58,
          "priceAvg30d": 28.74
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.32,
          "priceAvg30d": 29.45
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.31,
          "priceAvg30d": 28.53
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.28,
          "priceAvg30d": 27.66
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.6,
          "priceAvg30d": 27.16
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.19,
          "priceAvg30d": 26.07
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 43.19,
          "priceAvg30d": 26.05
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 43.29,
          "priceAvg30d": 24.82
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 43.19,
          "priceAvg30d": 24.68
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 43.01,
          "priceAvg30d": 22.94
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 43.19,
          "priceAvg30d": 22.42
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 43.19,
          "priceAvg30d": 20.49
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 43.02,
          "priceAvg30d": 19.45
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 37.99,
          "priceAvg30d": 15.66
        }
      ],
      "avg": 34.86,
      "max": 46.23,
      "maxBlock": 34,
      "min": 13.85,
      "minBlock": 25,
      "spread3h": 22.75,
      "spreadLowAvg": 20.16,
      "spreadHighAvg": 42.9,
      "avg30d": 18.27,
      "spread30dAvg": 17.3,
      "historyDays": 30
    }
  }
};
