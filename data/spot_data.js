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
  "targetDate": "2026-11-27",
  "fetchedAt": "2026-11-27T14:51:26+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 30.05,
        "priceAvg30d": 27.28
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 29.82,
        "priceAvg30d": 26.42
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 29.97,
        "priceAvg30d": 25.75
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 29.54,
        "priceAvg30d": 25.69
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 29.74,
        "priceAvg30d": 25.89
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 30.38,
        "priceAvg30d": 26.89
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 31.01,
        "priceAvg30d": 27.94
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 31.02,
        "priceAvg30d": 28.78
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 31.92,
        "priceAvg30d": 29.16
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 32.53,
        "priceAvg30d": 29.53
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 34.11,
        "priceAvg30d": 30.01
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 34.89,
        "priceAvg30d": 30.36
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 42.66,
        "priceAvg30d": 31.57
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 46.46,
        "priceAvg30d": 32.1
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 46.53,
        "priceAvg30d": 30.88
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 42.13,
        "priceAvg30d": 28.56
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 40.19,
        "priceAvg30d": 27.39
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 34.18,
        "priceAvg30d": 25.87
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 29.54,
        "priceAvg30d": 23.57
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 27.9,
        "priceAvg30d": 20.16
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 25.24,
        "priceAvg30d": 18.89
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 22.87,
        "priceAvg30d": 17.7
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 18.0,
        "priceAvg30d": 17.33
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 13.97,
        "priceAvg30d": 16.87
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 10.43,
        "priceAvg30d": 14.64
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 10.95,
        "priceAvg30d": 15.25
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 25.24,
        "priceAvg30d": 19.92
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 27.63,
        "priceAvg30d": 22.13
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 27.64,
        "priceAvg30d": 24.41
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 29.55,
        "priceAvg30d": 27.52
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 32.18,
        "priceAvg30d": 30.64
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 41.95,
        "priceAvg30d": 33.79
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 44.04,
        "priceAvg30d": 37.05
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 45.5,
        "priceAvg30d": 38.15
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 45.29,
        "priceAvg30d": 37.9
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 45.0,
        "priceAvg30d": 37.66
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 44.01,
        "priceAvg30d": 37.01
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 42.92,
        "priceAvg30d": 36.83
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 41.95,
        "priceAvg30d": 36.26
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 42.22,
        "priceAvg30d": 35.31
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 42.97,
        "priceAvg30d": 34.85
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 42.92,
        "priceAvg30d": 34.42
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 41.86,
        "priceAvg30d": 33.94
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 33.69,
        "priceAvg30d": 32.68
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 34.72,
        "priceAvg30d": 32.85
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 32.3,
        "priceAvg30d": 31.09
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 31.93,
        "priceAvg30d": 30.55
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 30.05,
        "priceAvg30d": 27.67
      }
    ],
    "avg": 33.57,
    "max": 46.53,
    "maxBlock": 15,
    "min": 10.43,
    "minBlock": 25,
    "spread3h": 20.31,
    "spreadLowAvg": 19.78,
    "spreadHighAvg": 40.09,
    "avg30d": 28.48,
    "spread30dAvg": 20.9,
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
          "price": 31.78,
          "priceAvg30d": 26.45
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 25.01
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.18,
          "priceAvg30d": 24.5
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.67,
          "priceAvg30d": 24.34
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.78,
          "priceAvg30d": 24.85
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.38,
          "priceAvg30d": 25.37
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 31.02,
          "priceAvg30d": 26.31
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.13,
          "priceAvg30d": 26.7
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.13,
          "priceAvg30d": 26.87
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.13,
          "priceAvg30d": 27.31
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.92,
          "priceAvg30d": 27.67
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 34.09,
          "priceAvg30d": 28.39
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 42.66,
          "priceAvg30d": 28.62
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 46.46,
          "priceAvg30d": 29.42
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 38.55,
          "priceAvg30d": 26.59
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 29.2,
          "priceAvg30d": 24.29
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 22.45,
          "priceAvg30d": 23.4
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.83,
          "priceAvg30d": 20.64
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 25.2,
          "priceAvg30d": 18.92
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.0,
          "priceAvg30d": 16.67
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.98,
          "priceAvg30d": 15.49
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 21.09,
          "priceAvg30d": 13.96
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.13,
          "priceAvg30d": 14.42
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 17.19,
          "priceAvg30d": 13.92
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.9,
          "priceAvg30d": 12.8
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.9,
          "priceAvg30d": 13.18
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 24.66,
          "priceAvg30d": 16.72
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 25.13,
          "priceAvg30d": 21.14
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.09,
          "priceAvg30d": 23.52
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 25.16,
          "priceAvg30d": 26.86
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.35,
          "priceAvg30d": 29.05
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 35.0,
          "priceAvg30d": 32.74
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 42.13,
          "priceAvg30d": 36.11
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.13,
          "priceAvg30d": 37.03
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 42.13,
          "priceAvg30d": 36.17
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.93,
          "priceAvg30d": 35.23
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 41.95,
          "priceAvg30d": 35.39
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 41.95,
          "priceAvg30d": 34.89
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 33.85
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.04,
          "priceAvg30d": 32.6
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.99,
          "priceAvg30d": 32.69
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 28.13,
          "priceAvg30d": 31.71
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.8,
          "priceAvg30d": 31.4
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 26.05,
          "priceAvg30d": 30.01
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.48,
          "priceAvg30d": 29.23
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.98,
          "priceAvg30d": 27.95
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.91,
          "priceAvg30d": 27.56
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.53,
          "priceAvg30d": 24.36
        }
      ],
      "avg": 28.88,
      "max": 46.46,
      "maxBlock": 14,
      "min": 11.9,
      "minBlock": 25,
      "spread3h": 12.3,
      "spreadLowAvg": 20.85,
      "spreadHighAvg": 33.15,
      "avg30d": 26.09,
      "spread30dAvg": 19.19,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 31.78,
          "priceAvg30d": 26.19
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 20.0,
          "priceAvg30d": 24.66
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 20.18,
          "priceAvg30d": 23.73
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.67,
          "priceAvg30d": 23.36
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.78,
          "priceAvg30d": 24.38
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.38,
          "priceAvg30d": 25.32
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 31.02,
          "priceAvg30d": 26.55
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.13,
          "priceAvg30d": 27.27
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.13,
          "priceAvg30d": 27.52
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.13,
          "priceAvg30d": 27.87
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.92,
          "priceAvg30d": 28.54
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 34.09,
          "priceAvg30d": 28.92
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 42.66,
          "priceAvg30d": 29.51
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 46.46,
          "priceAvg30d": 29.72
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 38.55,
          "priceAvg30d": 26.47
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 29.2,
          "priceAvg30d": 23.36
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 22.45,
          "priceAvg30d": 23.46
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.83,
          "priceAvg30d": 21.2
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 20.0,
          "priceAvg30d": 18.87
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.5,
          "priceAvg30d": 17.22
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.18,
          "priceAvg30d": 15.83
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.7,
          "priceAvg30d": 14.52
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.43,
          "priceAvg30d": 13.69
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.43,
          "priceAvg30d": 13.69
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.39,
          "priceAvg30d": 13.09
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.39,
          "priceAvg30d": 13.5
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.43,
          "priceAvg30d": 17.02
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 13.62,
          "priceAvg30d": 19.58
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 20.26,
          "priceAvg30d": 22.34
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 25.13,
          "priceAvg30d": 26.31
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.35,
          "priceAvg30d": 29.14
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 35.0,
          "priceAvg30d": 33.07
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 42.13,
          "priceAvg30d": 36.36
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.13,
          "priceAvg30d": 37.58
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 42.13,
          "priceAvg30d": 37.64
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.93,
          "priceAvg30d": 37.19
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 41.95,
          "priceAvg30d": 36.51
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 41.95,
          "priceAvg30d": 36.03
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 41.95,
          "priceAvg30d": 35.69
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 41.95,
          "priceAvg30d": 34.08
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 41.95,
          "priceAvg30d": 33.8
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 35.3,
          "priceAvg30d": 33.1
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.8,
          "priceAvg30d": 33.02
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.48,
          "priceAvg30d": 31.65
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.34,
          "priceAvg30d": 30.17
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.46,
          "priceAvg30d": 28.33
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 29.46,
          "priceAvg30d": 27.48
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.53,
          "priceAvg30d": 25.07
        }
      ],
      "avg": 28.05,
      "max": 46.46,
      "maxBlock": 14,
      "min": 8.39,
      "minBlock": 25,
      "spread3h": 23.48,
      "spreadLowAvg": 9.67,
      "spreadHighAvg": 33.15,
      "avg30d": 26.45,
      "spread30dAvg": 22.14,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 31.78,
          "priceAvg30d": 30.24
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.4,
          "priceAvg30d": 30.01
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.92,
          "priceAvg30d": 29.63
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.58,
          "priceAvg30d": 29.44
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 30.38,
          "priceAvg30d": 29.5
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.38,
          "priceAvg30d": 29.63
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 31.02,
          "priceAvg30d": 29.69
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.13,
          "priceAvg30d": 29.88
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.13,
          "priceAvg30d": 30.07
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 30.13,
          "priceAvg30d": 30.37
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.92,
          "priceAvg30d": 30.61
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 34.09,
          "priceAvg30d": 31.46
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 42.66,
          "priceAvg30d": 33.0
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 46.46,
          "priceAvg30d": 33.73
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.52,
          "priceAvg30d": 33.36
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 41.95,
          "priceAvg30d": 32.42
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 36.99,
          "priceAvg30d": 30.11
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 31.63,
          "priceAvg30d": 29.71
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 29.54,
          "priceAvg30d": 29.16
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 28.12,
          "priceAvg30d": 26.83
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 27.17,
          "priceAvg30d": 26.38
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.17,
          "priceAvg30d": 25.64
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.0,
          "priceAvg30d": 25.05
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.54,
          "priceAvg30d": 24.9
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 14.49,
          "priceAvg30d": 24.1
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 20.05,
          "priceAvg30d": 25.2
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.17,
          "priceAvg30d": 27.76
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.43,
          "priceAvg30d": 29.3
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 28.43,
          "priceAvg30d": 31.1
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.54,
          "priceAvg30d": 32.68
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 32.07,
          "priceAvg30d": 34.53
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.95,
          "priceAvg30d": 37.94
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 42.13,
          "priceAvg30d": 39.48
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 42.13,
          "priceAvg30d": 40.1
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 42.13,
          "priceAvg30d": 40.04
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 42.66,
          "priceAvg30d": 39.4
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 41.95,
          "priceAvg30d": 38.25
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 41.95,
          "priceAvg30d": 38.52
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 41.95,
          "priceAvg30d": 38.18
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 41.95,
          "priceAvg30d": 37.77
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 41.95,
          "priceAvg30d": 37.05
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 41.95,
          "priceAvg30d": 36.33
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 36.0,
          "priceAvg30d": 35.82
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.48,
          "priceAvg30d": 35.04
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.34,
          "priceAvg30d": 36.47
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.26,
          "priceAvg30d": 34.28
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.94,
          "priceAvg30d": 32.9
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.93,
          "priceAvg30d": 31.02
        }
      ],
      "avg": 33.7,
      "max": 46.52,
      "maxBlock": 15,
      "min": 14.49,
      "minBlock": 25,
      "spread3h": 13.74,
      "spreadLowAvg": 25.23,
      "spreadHighAvg": 38.96,
      "avg30d": 32.17,
      "spread30dAvg": 14.56,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 31.78,
          "priceAvg30d": 30.35
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 31.4,
          "priceAvg30d": 30.38
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.92,
          "priceAvg30d": 30.09
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.58,
          "priceAvg30d": 30.07
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 30.64,
          "priceAvg30d": 30.48
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 31.01,
          "priceAvg30d": 30.75
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.0,
          "priceAvg30d": 31.08
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 33.48,
          "priceAvg30d": 31.45
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.81,
          "priceAvg30d": 31.69
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.09,
          "priceAvg30d": 31.77
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 34.11,
          "priceAvg30d": 32.12
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 34.09,
          "priceAvg30d": 32.49
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 42.66,
          "priceAvg30d": 33.24
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 46.46,
          "priceAvg30d": 34.07
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.52,
          "priceAvg30d": 33.35
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 45.93,
          "priceAvg30d": 31.65
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 46.48,
          "priceAvg30d": 30.47
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.31,
          "priceAvg30d": 29.8
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.33,
          "priceAvg30d": 28.26
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.05,
          "priceAvg30d": 25.35
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 28.24,
          "priceAvg30d": 24.34
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 27.82,
          "priceAvg30d": 23.63
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 26.96,
          "priceAvg30d": 23.31
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.24,
          "priceAvg30d": 23.16
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.87,
          "priceAvg30d": 20.86
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.87,
          "priceAvg30d": 21.81
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.92,
          "priceAvg30d": 24.73
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.43,
          "priceAvg30d": 27.19
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 28.43,
          "priceAvg30d": 29.49
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 31.14,
          "priceAvg30d": 31.53
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 42.37,
          "priceAvg30d": 33.7
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.95,
          "priceAvg30d": 37.22
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.63,
          "priceAvg30d": 38.49
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.48,
          "priceAvg30d": 38.59
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 46.21,
          "priceAvg30d": 39.21
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 46.21,
          "priceAvg30d": 39.3
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 45.0,
          "priceAvg30d": 38.75
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 44.04,
          "priceAvg30d": 38.68
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 41.95,
          "priceAvg30d": 38.5
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.75,
          "priceAvg30d": 38.1
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.0,
          "priceAvg30d": 36.92
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.21,
          "priceAvg30d": 36.75
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 45.12,
          "priceAvg30d": 36.27
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 42.5,
          "priceAvg30d": 35.54
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 44.31,
          "priceAvg30d": 35.52
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.26,
          "priceAvg30d": 34.16
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.99,
          "priceAvg30d": 33.61
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.54,
          "priceAvg30d": 32.02
        }
      ],
      "avg": 36.4,
      "max": 46.52,
      "maxBlock": 15,
      "min": 22.87,
      "minBlock": 25,
      "spread3h": 15.28,
      "spreadLowAvg": 26.54,
      "spreadHighAvg": 41.82,
      "avg30d": 31.88,
      "spread30dAvg": 16.72,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.52,
          "priceAvg30d": 19.99
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.49,
          "priceAvg30d": 19.52
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.72,
          "priceAvg30d": 19.23
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.63,
          "priceAvg30d": 19.05
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.72,
          "priceAvg30d": 20.52
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.7,
          "priceAvg30d": 22.95
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.0,
          "priceAvg30d": 25.09
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 33.48,
          "priceAvg30d": 26.07
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.81,
          "priceAvg30d": 26.29
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.09,
          "priceAvg30d": 27.2
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 34.11,
          "priceAvg30d": 28.02
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 34.09,
          "priceAvg30d": 27.69
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 42.66,
          "priceAvg30d": 27.39
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 46.46,
          "priceAvg30d": 28.55
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.52,
          "priceAvg30d": 29.06
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 45.93,
          "priceAvg30d": 27.16
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 46.48,
          "priceAvg30d": 26.53
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.31,
          "priceAvg30d": 26.03
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.33,
          "priceAvg30d": 25.08
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.05,
          "priceAvg30d": 23.26
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 27.49,
          "priceAvg30d": 21.87
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 25.24,
          "priceAvg30d": 20.84
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.24,
          "priceAvg30d": 21.0
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.24,
          "priceAvg30d": 20.26
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.42,
          "priceAvg30d": 16.26
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 16.0,
          "priceAvg30d": 17.03
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.38,
          "priceAvg30d": 22.4
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.43,
          "priceAvg30d": 24.88
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.67,
          "priceAvg30d": 26.75
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.91,
          "priceAvg30d": 29.06
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.49,
          "priceAvg30d": 30.6
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.95,
          "priceAvg30d": 33.31
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.63,
          "priceAvg30d": 34.43
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.48,
          "priceAvg30d": 35.97
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 46.21,
          "priceAvg30d": 35.72
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 46.21,
          "priceAvg30d": 36.31
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 45.0,
          "priceAvg30d": 34.64
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 44.04,
          "priceAvg30d": 34.32
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 41.95,
          "priceAvg30d": 34.04
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.75,
          "priceAvg30d": 32.7
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.0,
          "priceAvg30d": 32.69
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.21,
          "priceAvg30d": 31.49
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 45.12,
          "priceAvg30d": 30.98
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 42.5,
          "priceAvg30d": 29.27
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 44.31,
          "priceAvg30d": 30.19
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.26,
          "priceAvg30d": 27.46
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.99,
          "priceAvg30d": 26.49
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.54,
          "priceAvg30d": 20.8
        }
      ],
      "avg": 35.14,
      "max": 46.52,
      "maxBlock": 15,
      "min": 15.42,
      "minBlock": 25,
      "spread3h": 17.23,
      "spreadLowAvg": 24.59,
      "spreadHighAvg": 41.82,
      "avg30d": 26.8,
      "spread30dAvg": 17.19,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.52,
          "priceAvg30d": 19.99
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.49,
          "priceAvg30d": 19.52
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.72,
          "priceAvg30d": 19.23
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.63,
          "priceAvg30d": 19.05
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.72,
          "priceAvg30d": 19.85
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.7,
          "priceAvg30d": 22.39
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.0,
          "priceAvg30d": 23.99
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 33.48,
          "priceAvg30d": 25.3
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.81,
          "priceAvg30d": 25.29
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.09,
          "priceAvg30d": 25.76
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 34.11,
          "priceAvg30d": 25.71
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 34.09,
          "priceAvg30d": 25.24
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 42.66,
          "priceAvg30d": 25.98
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 46.46,
          "priceAvg30d": 27.72
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.52,
          "priceAvg30d": 28.49
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 45.93,
          "priceAvg30d": 26.66
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 46.48,
          "priceAvg30d": 26.33
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.31,
          "priceAvg30d": 26.03
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.33,
          "priceAvg30d": 25.08
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.05,
          "priceAvg30d": 23.26
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 27.49,
          "priceAvg30d": 21.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 25.24,
          "priceAvg30d": 20.73
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.24,
          "priceAvg30d": 21.0
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.24,
          "priceAvg30d": 20.31
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.42,
          "priceAvg30d": 16.17
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 16.0,
          "priceAvg30d": 16.94
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.38,
          "priceAvg30d": 22.4
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.43,
          "priceAvg30d": 24.78
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.67,
          "priceAvg30d": 26.42
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.91,
          "priceAvg30d": 28.29
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.49,
          "priceAvg30d": 30.55
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.95,
          "priceAvg30d": 33.31
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.63,
          "priceAvg30d": 34.43
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.48,
          "priceAvg30d": 35.97
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 46.21,
          "priceAvg30d": 35.22
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 46.21,
          "priceAvg30d": 35.75
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 45.0,
          "priceAvg30d": 34.63
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 44.04,
          "priceAvg30d": 34.31
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 41.95,
          "priceAvg30d": 34.02
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.75,
          "priceAvg30d": 32.7
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.0,
          "priceAvg30d": 32.62
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.21,
          "priceAvg30d": 31.15
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 45.12,
          "priceAvg30d": 30.72
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 42.5,
          "priceAvg30d": 29.27
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 44.31,
          "priceAvg30d": 29.19
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.26,
          "priceAvg30d": 26.85
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.99,
          "priceAvg30d": 26.16
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.54,
          "priceAvg30d": 20.8
        }
      ],
      "avg": 35.14,
      "max": 46.52,
      "maxBlock": 15,
      "min": 15.42,
      "minBlock": 25,
      "spread3h": 17.23,
      "spreadLowAvg": 24.59,
      "spreadHighAvg": 41.82,
      "avg30d": 26.4,
      "spread30dAvg": 16.78,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.52,
          "priceAvg30d": 19.99
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.49,
          "priceAvg30d": 19.44
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.72,
          "priceAvg30d": 18.92
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.63,
          "priceAvg30d": 18.71
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.72,
          "priceAvg30d": 19.85
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.7,
          "priceAvg30d": 21.9
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.0,
          "priceAvg30d": 23.51
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 33.48,
          "priceAvg30d": 24.83
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.81,
          "priceAvg30d": 25.2
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.09,
          "priceAvg30d": 25.71
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 34.11,
          "priceAvg30d": 25.63
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 34.09,
          "priceAvg30d": 25.23
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 42.66,
          "priceAvg30d": 25.87
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 46.46,
          "priceAvg30d": 27.64
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.52,
          "priceAvg30d": 26.63
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 45.93,
          "priceAvg30d": 24.19
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 46.48,
          "priceAvg30d": 22.62
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.31,
          "priceAvg30d": 19.49
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.52,
          "priceAvg30d": 16.64
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 14.74,
          "priceAvg30d": 14.03
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.32,
          "priceAvg30d": 12.55
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.03,
          "priceAvg30d": 11.7
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.32,
          "priceAvg30d": 11.4
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.03,
          "priceAvg30d": 11.44
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.34,
          "priceAvg30d": 9.57
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.62,
          "priceAvg30d": 10.26
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.32,
          "priceAvg30d": 12.43
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 15.19,
          "priceAvg30d": 13.3
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.32,
          "priceAvg30d": 15.26
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.91,
          "priceAvg30d": 16.72
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.49,
          "priceAvg30d": 21.1
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.95,
          "priceAvg30d": 24.52
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.63,
          "priceAvg30d": 28.12
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.48,
          "priceAvg30d": 32.14
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 46.21,
          "priceAvg30d": 32.75
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 46.21,
          "priceAvg30d": 32.99
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 45.0,
          "priceAvg30d": 32.39
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 44.04,
          "priceAvg30d": 31.98
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 41.95,
          "priceAvg30d": 31.09
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.75,
          "priceAvg30d": 30.57
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.0,
          "priceAvg30d": 30.7
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.21,
          "priceAvg30d": 29.8
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 45.12,
          "priceAvg30d": 29.6
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 42.5,
          "priceAvg30d": 28.17
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 44.31,
          "priceAvg30d": 27.49
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.26,
          "priceAvg30d": 25.26
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.99,
          "priceAvg30d": 24.84
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.54,
          "priceAvg30d": 20.72
        }
      ],
      "avg": 32.75,
      "max": 46.52,
      "maxBlock": 15,
      "min": 10.34,
      "minBlock": 25,
      "spread3h": 29.9,
      "spreadLowAvg": 11.92,
      "spreadHighAvg": 41.82,
      "avg30d": 22.6,
      "spread30dAvg": 18.37,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.52,
          "priceAvg30d": 19.35
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.49,
          "priceAvg30d": 18.11
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.72,
          "priceAvg30d": 17.83
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.63,
          "priceAvg30d": 17.94
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.72,
          "priceAvg30d": 18.63
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.7,
          "priceAvg30d": 20.57
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.0,
          "priceAvg30d": 22.06
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 33.48,
          "priceAvg30d": 24.48
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.81,
          "priceAvg30d": 24.99
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.09,
          "priceAvg30d": 25.71
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 34.11,
          "priceAvg30d": 25.63
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 34.09,
          "priceAvg30d": 25.17
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 42.66,
          "priceAvg30d": 25.23
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 46.46,
          "priceAvg30d": 26.07
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.52,
          "priceAvg30d": 24.91
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 45.93,
          "priceAvg30d": 23.43
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 46.48,
          "priceAvg30d": 22.22
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.31,
          "priceAvg30d": 19.48
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.52,
          "priceAvg30d": 16.35
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 14.74,
          "priceAvg30d": 12.85
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.32,
          "priceAvg30d": 11.61
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.03,
          "priceAvg30d": 10.11
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.32,
          "priceAvg30d": 10.63
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.03,
          "priceAvg30d": 10.26
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.34,
          "priceAvg30d": 8.09
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.62,
          "priceAvg30d": 8.72
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.32,
          "priceAvg30d": 11.31
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 15.19,
          "priceAvg30d": 12.21
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.32,
          "priceAvg30d": 13.65
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.91,
          "priceAvg30d": 15.6
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.49,
          "priceAvg30d": 19.03
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.95,
          "priceAvg30d": 23.59
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.63,
          "priceAvg30d": 27.58
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.48,
          "priceAvg30d": 31.75
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 46.21,
          "priceAvg30d": 32.37
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 46.21,
          "priceAvg30d": 32.87
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 45.0,
          "priceAvg30d": 31.95
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 44.04,
          "priceAvg30d": 31.68
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 41.95,
          "priceAvg30d": 30.52
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.75,
          "priceAvg30d": 29.78
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.0,
          "priceAvg30d": 29.88
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.21,
          "priceAvg30d": 27.63
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 45.12,
          "priceAvg30d": 28.83
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 42.5,
          "priceAvg30d": 27.02
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 44.31,
          "priceAvg30d": 25.76
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.26,
          "priceAvg30d": 23.38
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.99,
          "priceAvg30d": 23.43
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.54,
          "priceAvg30d": 19.92
        }
      ],
      "avg": 32.75,
      "max": 46.52,
      "maxBlock": 15,
      "min": 10.34,
      "minBlock": 25,
      "spread3h": 29.9,
      "spreadLowAvg": 11.92,
      "spreadHighAvg": 41.82,
      "avg30d": 21.67,
      "spread30dAvg": 19.97,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.52,
          "priceAvg30d": 19.2
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.49,
          "priceAvg30d": 18.4
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.72,
          "priceAvg30d": 17.9
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.63,
          "priceAvg30d": 17.66
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.72,
          "priceAvg30d": 18.79
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.7,
          "priceAvg30d": 20.82
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 32.0,
          "priceAvg30d": 22.57
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 33.48,
          "priceAvg30d": 24.17
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.81,
          "priceAvg30d": 24.77
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 34.09,
          "priceAvg30d": 25.19
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 34.11,
          "priceAvg30d": 25.23
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 34.09,
          "priceAvg30d": 24.9
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 42.66,
          "priceAvg30d": 25.63
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 46.46,
          "priceAvg30d": 27.06
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 46.52,
          "priceAvg30d": 26.0
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 45.93,
          "priceAvg30d": 23.83
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 46.48,
          "priceAvg30d": 22.0
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 35.31,
          "priceAvg30d": 18.96
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.52,
          "priceAvg30d": 15.31
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 14.74,
          "priceAvg30d": 12.67
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.32,
          "priceAvg30d": 11.4
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.03,
          "priceAvg30d": 10.14
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.32,
          "priceAvg30d": 9.72
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.03,
          "priceAvg30d": 9.98
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.34,
          "priceAvg30d": 8.04
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.62,
          "priceAvg30d": 8.44
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 12.32,
          "priceAvg30d": 11.06
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 15.19,
          "priceAvg30d": 12.5
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.32,
          "priceAvg30d": 14.01
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.91,
          "priceAvg30d": 16.25
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.49,
          "priceAvg30d": 20.86
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.95,
          "priceAvg30d": 23.96
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.63,
          "priceAvg30d": 28.12
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.48,
          "priceAvg30d": 32.14
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 46.21,
          "priceAvg30d": 32.59
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 46.21,
          "priceAvg30d": 32.99
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 45.0,
          "priceAvg30d": 32.39
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 44.04,
          "priceAvg30d": 31.98
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 41.95,
          "priceAvg30d": 31.09
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.75,
          "priceAvg30d": 30.57
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 46.0,
          "priceAvg30d": 30.7
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 46.21,
          "priceAvg30d": 29.8
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 45.12,
          "priceAvg30d": 29.51
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 42.5,
          "priceAvg30d": 27.83
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 44.31,
          "priceAvg30d": 27.18
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.26,
          "priceAvg30d": 24.89
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.99,
          "priceAvg30d": 23.82
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.54,
          "priceAvg30d": 20.05
        }
      ],
      "avg": 32.75,
      "max": 46.52,
      "maxBlock": 15,
      "min": 10.34,
      "minBlock": 25,
      "spread3h": 29.9,
      "spreadLowAvg": 11.92,
      "spreadHighAvg": 41.82,
      "avg30d": 21.94,
      "spread30dAvg": 19.32,
      "historyDays": 30
    }
  }
};
