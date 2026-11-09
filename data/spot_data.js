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
  "targetDate": "2026-11-09",
  "fetchedAt": "2026-11-09T12:41:21+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 25.14,
        "priceAvg30d": 24.84
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 21.26,
        "priceAvg30d": 23.86
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 15.0,
        "priceAvg30d": 23.29
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 19.0,
        "priceAvg30d": 23.03
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 21.26,
        "priceAvg30d": 23.19
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 21.56,
        "priceAvg30d": 23.95
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 24.51,
        "priceAvg30d": 24.86
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 26.93,
        "priceAvg30d": 25.63
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 27.91,
        "priceAvg30d": 25.96
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 28.91,
        "priceAvg30d": 26.29
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 29.28,
        "priceAvg30d": 26.54
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 29.45,
        "priceAvg30d": 26.7
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 30.39,
        "priceAvg30d": 26.68
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 32.01,
        "priceAvg30d": 25.86
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 34.11,
        "priceAvg30d": 23.46
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 36.12,
        "priceAvg30d": 20.85
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 41.04,
        "priceAvg30d": 19.62
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 41.16,
        "priceAvg30d": 18.69
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 41.16,
        "priceAvg30d": 17.08
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 41.24,
        "priceAvg30d": 15.68
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 41.17,
        "priceAvg30d": 14.66
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 41.21,
        "priceAvg30d": 14.09
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 41.01,
        "priceAvg30d": 13.69
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 41.07,
        "priceAvg30d": 13.62
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 37.61,
        "priceAvg30d": 11.92
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 37.3,
        "priceAvg30d": 12.41
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 41.08,
        "priceAvg30d": 16.21
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 42.73,
        "priceAvg30d": 18.77
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 41.77,
        "priceAvg30d": 19.83
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 41.74,
        "priceAvg30d": 23.22
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 41.49,
        "priceAvg30d": 25.32
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 41.13,
        "priceAvg30d": 29.17
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 42.35,
        "priceAvg30d": 33.03
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 42.75,
        "priceAvg30d": 34.45
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 41.1,
        "priceAvg30d": 33.97
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 40.08,
        "priceAvg30d": 33.78
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 37.51,
        "priceAvg30d": 32.44
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 37.0,
        "priceAvg30d": 31.76
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 37.01,
        "priceAvg30d": 30.88
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 36.0,
        "priceAvg30d": 29.17
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 36.25,
        "priceAvg30d": 28.54
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 34.52,
        "priceAvg30d": 27.87
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 34.14,
        "priceAvg30d": 27.41
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 32.88,
        "priceAvg30d": 27.07
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 33.08,
        "priceAvg30d": 27.39
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 31.23,
        "priceAvg30d": 26.64
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 30.51,
        "priceAvg30d": 26.34
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 29.98,
        "priceAvg30d": 24.29
      }
    ],
    "avg": 34.44,
    "max": 42.75,
    "maxBlock": 34,
    "min": 15.0,
    "minBlock": 3,
    "spread3h": 18.69,
    "spreadLowAvg": 21.92,
    "spreadHighAvg": 40.61,
    "avg30d": 24.04,
    "spread30dAvg": 19.46,
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
          "price": 29.21,
          "priceAvg30d": 21.46
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.91,
          "priceAvg30d": 19.31
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.91,
          "priceAvg30d": 19.25
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.91,
          "priceAvg30d": 20.01
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.91,
          "priceAvg30d": 20.77
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.91,
          "priceAvg30d": 22.34
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.91,
          "priceAvg30d": 22.97
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.21,
          "priceAvg30d": 23.92
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.21,
          "priceAvg30d": 24.48
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.45,
          "priceAvg30d": 24.39
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.98,
          "priceAvg30d": 26.48
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.98,
          "priceAvg30d": 27.27
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.31,
          "priceAvg30d": 24.51
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 34.22,
          "priceAvg30d": 22.56
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 36.69,
          "priceAvg30d": 19.62
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 41.07,
          "priceAvg30d": 16.87
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 47.42,
          "priceAvg30d": 15.62
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 48.71,
          "priceAvg30d": 13.14
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 40.0,
          "priceAvg30d": 12.8
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 28.5,
          "priceAvg30d": 11.41
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 28.25,
          "priceAvg30d": 10.75
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 25.8,
          "priceAvg30d": 9.57
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 26.2,
          "priceAvg30d": 10.08
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 28.45,
          "priceAvg30d": 10.32
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 27.89,
          "priceAvg30d": 8.55
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 28.12,
          "priceAvg30d": 8.34
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.5,
          "priceAvg30d": 10.62
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 50.0,
          "priceAvg30d": 13.42
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 50.01,
          "priceAvg30d": 16.63
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 46.0,
          "priceAvg30d": 19.81
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 40.0,
          "priceAvg30d": 22.32
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.98,
          "priceAvg30d": 27.0
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.0,
          "priceAvg30d": 33.29
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.0,
          "priceAvg30d": 34.93
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.98,
          "priceAvg30d": 33.11
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.98,
          "priceAvg30d": 32.37
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 41.07,
          "priceAvg30d": 31.15
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 30.98,
          "priceAvg30d": 31.66
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.98,
          "priceAvg30d": 32.76
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.98,
          "priceAvg30d": 31.19
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.98,
          "priceAvg30d": 31.8
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.98,
          "priceAvg30d": 29.82
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.98,
          "priceAvg30d": 28.07
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.98,
          "priceAvg30d": 26.78
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 30.98,
          "priceAvg30d": 26.17
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 34.11,
          "priceAvg30d": 24.8
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 33.3,
          "priceAvg30d": 24.47
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.65,
          "priceAvg30d": 22.12
        }
      ],
      "avg": 33.37,
      "max": 50.01,
      "maxBlock": 29,
      "min": 25.8,
      "minBlock": 22,
      "spread3h": 7.39,
      "spreadLowAvg": 29.88,
      "spreadHighAvg": 37.27,
      "avg30d": 21.9,
      "spread30dAvg": 22.74,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.21,
          "priceAvg30d": 25.31
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.91,
          "priceAvg30d": 24.94
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.91,
          "priceAvg30d": 24.37
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.91,
          "priceAvg30d": 24.2
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.91,
          "priceAvg30d": 24.7
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.91,
          "priceAvg30d": 25.1
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.91,
          "priceAvg30d": 25.87
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.21,
          "priceAvg30d": 25.86
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.21,
          "priceAvg30d": 26.23
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.45,
          "priceAvg30d": 26.32
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.98,
          "priceAvg30d": 26.75
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.98,
          "priceAvg30d": 27.03
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.31,
          "priceAvg30d": 26.9
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 34.22,
          "priceAvg30d": 25.55
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 40.0,
          "priceAvg30d": 22.08
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 41.07,
          "priceAvg30d": 19.7
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 47.42,
          "priceAvg30d": 18.77
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 50.01,
          "priceAvg30d": 16.73
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 50.01,
          "priceAvg30d": 16.38
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 50.01,
          "priceAvg30d": 15.81
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 50.01,
          "priceAvg30d": 14.59
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 50.01,
          "priceAvg30d": 14.25
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 50.01,
          "priceAvg30d": 13.86
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 50.01,
          "priceAvg30d": 13.88
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 50.01,
          "priceAvg30d": 12.65
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 50.01,
          "priceAvg30d": 12.73
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 50.01,
          "priceAvg30d": 15.69
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 50.01,
          "priceAvg30d": 17.76
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 50.01,
          "priceAvg30d": 20.43
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 50.01,
          "priceAvg30d": 23.29
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 50.01,
          "priceAvg30d": 25.65
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 50.01,
          "priceAvg30d": 30.44
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 50.0,
          "priceAvg30d": 34.42
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 50.0,
          "priceAvg30d": 36.25
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 48.21,
          "priceAvg30d": 35.7
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 47.09,
          "priceAvg30d": 35.67
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 41.07,
          "priceAvg30d": 34.17
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 41.07,
          "priceAvg30d": 33.94
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 41.07,
          "priceAvg30d": 33.16
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.84,
          "priceAvg30d": 31.46
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.61,
          "priceAvg30d": 30.91
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 35.51,
          "priceAvg30d": 29.48
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 34.72,
          "priceAvg30d": 29.01
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 34.49,
          "priceAvg30d": 29.05
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 35.0,
          "priceAvg30d": 28.82
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 34.11,
          "priceAvg30d": 27.34
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 33.3,
          "priceAvg30d": 26.74
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.65,
          "priceAvg30d": 24.45
        }
      ],
      "avg": 40.18,
      "max": 50.01,
      "maxBlock": 18,
      "min": 28.91,
      "minBlock": 2,
      "spread3h": 17.99,
      "spreadLowAvg": 28.43,
      "spreadHighAvg": 46.42,
      "avg30d": 24.67,
      "spread30dAvg": 20.87,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.21,
          "priceAvg30d": 28.21
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.91,
          "priceAvg30d": 27.93
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.91,
          "priceAvg30d": 27.88
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.91,
          "priceAvg30d": 27.44
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.91,
          "priceAvg30d": 27.67
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.91,
          "priceAvg30d": 27.72
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.91,
          "priceAvg30d": 27.92
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.21,
          "priceAvg30d": 27.9
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.21,
          "priceAvg30d": 28.14
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.45,
          "priceAvg30d": 28.18
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.98,
          "priceAvg30d": 28.39
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 30.98,
          "priceAvg30d": 28.91
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 32.31,
          "priceAvg30d": 29.03
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 34.22,
          "priceAvg30d": 28.34
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 40.0,
          "priceAvg30d": 27.75
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 41.07,
          "priceAvg30d": 27.31
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 47.42,
          "priceAvg30d": 25.78
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 50.01,
          "priceAvg30d": 25.68
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 50.01,
          "priceAvg30d": 24.93
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 50.01,
          "priceAvg30d": 23.34
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 50.01,
          "priceAvg30d": 22.53
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 50.01,
          "priceAvg30d": 22.08
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 50.01,
          "priceAvg30d": 22.01
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 50.01,
          "priceAvg30d": 22.64
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 50.01,
          "priceAvg30d": 22.47
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 50.01,
          "priceAvg30d": 23.34
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 50.01,
          "priceAvg30d": 25.07
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 50.01,
          "priceAvg30d": 27.02
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 50.01,
          "priceAvg30d": 28.59
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 50.01,
          "priceAvg30d": 30.93
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 50.01,
          "priceAvg30d": 30.99
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 50.01,
          "priceAvg30d": 34.28
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 50.0,
          "priceAvg30d": 36.36
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 50.0,
          "priceAvg30d": 37.63
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 48.21,
          "priceAvg30d": 37.3
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 47.09,
          "priceAvg30d": 37.28
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 41.07,
          "priceAvg30d": 35.39
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 41.07,
          "priceAvg30d": 35.49
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 41.07,
          "priceAvg30d": 34.5
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.84,
          "priceAvg30d": 33.0
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.61,
          "priceAvg30d": 31.8
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 35.51,
          "priceAvg30d": 30.6
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 34.72,
          "priceAvg30d": 30.1
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 34.49,
          "priceAvg30d": 30.53
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 35.0,
          "priceAvg30d": 31.7
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 34.11,
          "priceAvg30d": 30.31
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 33.3,
          "priceAvg30d": 29.27
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.65,
          "priceAvg30d": 27.85
        }
      ],
      "avg": 40.18,
      "max": 50.01,
      "maxBlock": 18,
      "min": 28.91,
      "minBlock": 2,
      "spread3h": 16.52,
      "spreadLowAvg": 29.9,
      "spreadHighAvg": 46.42,
      "avg30d": 28.95,
      "spread30dAvg": 13.96,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.17,
          "priceAvg30d": 27.39
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.03,
          "priceAvg30d": 27.06
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.8,
          "priceAvg30d": 26.53
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.91,
          "priceAvg30d": 26.42
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.8,
          "priceAvg30d": 26.89
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.03,
          "priceAvg30d": 27.27
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 30.17,
          "priceAvg30d": 27.62
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 30.51,
          "priceAvg30d": 27.88
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 30.71,
          "priceAvg30d": 28.05
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.0,
          "priceAvg30d": 28.16
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.01,
          "priceAvg30d": 28.41
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.28,
          "priceAvg30d": 28.66
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.99,
          "priceAvg30d": 28.53
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 32.51,
          "priceAvg30d": 27.8
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 33.28,
          "priceAvg30d": 26.02
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 35.35,
          "priceAvg30d": 23.72
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 37.3,
          "priceAvg30d": 22.77
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 41.16,
          "priceAvg30d": 23.07
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 41.16,
          "priceAvg30d": 22.11
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 41.24,
          "priceAvg30d": 20.99
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 37.6,
          "priceAvg30d": 19.41
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 37.57,
          "priceAvg30d": 19.08
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 37.3,
          "priceAvg30d": 18.67
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 37.32,
          "priceAvg30d": 18.65
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 37.01,
          "priceAvg30d": 16.6
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 37.0,
          "priceAvg30d": 17.33
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.6,
          "priceAvg30d": 20.84
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 41.24,
          "priceAvg30d": 23.72
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 37.59,
          "priceAvg30d": 25.25
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 37.58,
          "priceAvg30d": 27.04
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 37.59,
          "priceAvg30d": 28.59
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 37.6,
          "priceAvg30d": 33.31
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.59,
          "priceAvg30d": 35.0
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.61,
          "priceAvg30d": 35.19
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.28,
          "priceAvg30d": 35.61
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.96,
          "priceAvg30d": 35.62
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.3,
          "priceAvg30d": 34.38
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 37.32,
          "priceAvg30d": 33.85
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.01,
          "priceAvg30d": 33.44
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.84,
          "priceAvg30d": 31.84
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 36.61,
          "priceAvg30d": 30.31
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 35.51,
          "priceAvg30d": 29.68
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 34.72,
          "priceAvg30d": 29.16
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 34.49,
          "priceAvg30d": 28.93
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 34.6,
          "priceAvg30d": 29.8
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 34.11,
          "priceAvg30d": 29.26
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 33.3,
          "priceAvg30d": 29.09
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 32.65,
          "priceAvg30d": 28.11
        }
      ],
      "avg": 35.09,
      "max": 41.24,
      "maxBlock": 20,
      "min": 28.91,
      "minBlock": 4,
      "spread3h": 8.68,
      "spreadLowAvg": 30.0,
      "spreadHighAvg": 38.68,
      "avg30d": 27.15,
      "spread30dAvg": 17.89,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.14,
          "priceAvg30d": 15.6
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.32,
          "priceAvg30d": 15.73
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.52,
          "priceAvg30d": 15.12
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.52,
          "priceAvg30d": 14.28
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.52,
          "priceAvg30d": 15.15
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.52,
          "priceAvg30d": 16.78
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 14.14,
          "priceAvg30d": 17.76
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 14.32,
          "priceAvg30d": 18.99
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.32,
          "priceAvg30d": 18.97
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.0,
          "priceAvg30d": 20.37
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.01,
          "priceAvg30d": 20.91
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.28,
          "priceAvg30d": 19.91
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.0,
          "priceAvg30d": 19.12
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 32.51,
          "priceAvg30d": 18.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 30.0,
          "priceAvg30d": 18.47
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 35.35,
          "priceAvg30d": 16.88
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 37.3,
          "priceAvg30d": 17.73
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 41.16,
          "priceAvg30d": 18.79
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 41.16,
          "priceAvg30d": 18.6
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 41.24,
          "priceAvg30d": 18.52
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 37.6,
          "priceAvg30d": 17.27
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 37.57,
          "priceAvg30d": 16.9
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 36.0,
          "priceAvg30d": 17.22
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 31.0,
          "priceAvg30d": 17.31
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.66,
          "priceAvg30d": 13.94
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.66,
          "priceAvg30d": 14.73
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.0,
          "priceAvg30d": 19.15
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 41.24,
          "priceAvg30d": 22.12
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 37.59,
          "priceAvg30d": 23.02
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 37.58,
          "priceAvg30d": 23.98
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 37.59,
          "priceAvg30d": 25.32
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 37.6,
          "priceAvg30d": 28.56
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.59,
          "priceAvg30d": 29.17
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.61,
          "priceAvg30d": 30.92
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.28,
          "priceAvg30d": 29.43
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.96,
          "priceAvg30d": 29.84
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.18,
          "priceAvg30d": 28.23
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.14,
          "priceAvg30d": 28.33
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.01,
          "priceAvg30d": 27.9
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.6,
          "priceAvg30d": 25.85
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.5,
          "priceAvg30d": 25.49
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.6,
          "priceAvg30d": 24.2
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.5,
          "priceAvg30d": 23.52
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.14,
          "priceAvg30d": 23.03
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 34.6,
          "priceAvg30d": 22.61
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.66,
          "priceAvg30d": 20.67
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 22.66,
          "priceAvg30d": 20.11
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.14,
          "priceAvg30d": 15.31
        }
      ],
      "avg": 28.6,
      "max": 41.24,
      "maxBlock": 20,
      "min": 11.14,
      "minBlock": 1,
      "spread3h": 23.92,
      "spreadLowAvg": 14.54,
      "spreadHighAvg": 38.46,
      "avg30d": 20.84,
      "spread30dAvg": 16.23,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.14,
          "priceAvg30d": 15.35
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.32,
          "priceAvg30d": 15.73
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.52,
          "priceAvg30d": 15.12
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.52,
          "priceAvg30d": 14.28
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.52,
          "priceAvg30d": 14.73
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.52,
          "priceAvg30d": 16.51
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 14.14,
          "priceAvg30d": 17.5
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 14.32,
          "priceAvg30d": 18.63
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.32,
          "priceAvg30d": 18.57
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.0,
          "priceAvg30d": 19.73
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.02,
          "priceAvg30d": 19.79
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.32,
          "priceAvg30d": 19.08
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.1,
          "priceAvg30d": 19.12
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.34,
          "priceAvg30d": 18.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.51,
          "priceAvg30d": 18.06
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.5,
          "priceAvg30d": 16.55
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.5,
          "priceAvg30d": 17.63
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 41.16,
          "priceAvg30d": 18.79
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 41.16,
          "priceAvg30d": 18.6
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 41.24,
          "priceAvg30d": 18.52
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 37.6,
          "priceAvg30d": 17.22
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 37.57,
          "priceAvg30d": 16.84
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 36.0,
          "priceAvg30d": 17.16
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 31.0,
          "priceAvg30d": 17.26
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.66,
          "priceAvg30d": 13.94
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.66,
          "priceAvg30d": 14.73
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.0,
          "priceAvg30d": 19.15
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 41.24,
          "priceAvg30d": 22.12
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.0,
          "priceAvg30d": 22.7
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 25.25,
          "priceAvg30d": 23.98
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 36.0,
          "priceAvg30d": 25.31
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 37.6,
          "priceAvg30d": 28.53
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 37.59,
          "priceAvg30d": 29.17
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.61,
          "priceAvg30d": 30.92
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.99,
          "priceAvg30d": 29.43
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 26.38,
          "priceAvg30d": 29.5
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.18,
          "priceAvg30d": 28.23
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.14,
          "priceAvg30d": 27.89
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.01,
          "priceAvg30d": 27.56
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.6,
          "priceAvg30d": 25.67
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.5,
          "priceAvg30d": 25.3
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.6,
          "priceAvg30d": 24.04
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.5,
          "priceAvg30d": 23.36
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.14,
          "priceAvg30d": 22.78
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.66,
          "priceAvg30d": 22.37
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.66,
          "priceAvg30d": 20.42
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 22.66,
          "priceAvg30d": 19.94
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.14,
          "priceAvg30d": 15.18
        }
      ],
      "avg": 25.88,
      "max": 41.24,
      "maxBlock": 20,
      "min": 11.14,
      "minBlock": 1,
      "spread3h": 22.96,
      "spreadLowAvg": 14.54,
      "spreadHighAvg": 37.5,
      "avg30d": 20.66,
      "spread30dAvg": 16.06,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.14,
          "priceAvg30d": 14.77
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.32,
          "priceAvg30d": 15.65
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.52,
          "priceAvg30d": 14.47
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.52,
          "priceAvg30d": 13.68
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.52,
          "priceAvg30d": 14.19
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.52,
          "priceAvg30d": 15.5
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 14.14,
          "priceAvg30d": 16.26
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 14.32,
          "priceAvg30d": 17.84
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.32,
          "priceAvg30d": 18.49
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.0,
          "priceAvg30d": 19.68
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.02,
          "priceAvg30d": 19.71
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.32,
          "priceAvg30d": 19.07
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.1,
          "priceAvg30d": 19.01
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.34,
          "priceAvg30d": 18.49
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.51,
          "priceAvg30d": 14.41
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.5,
          "priceAvg30d": 12.47
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.5,
          "priceAvg30d": 12.51
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.88,
          "priceAvg30d": 11.69
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 13.85,
          "priceAvg30d": 10.76
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.32,
          "priceAvg30d": 10.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.32,
          "priceAvg30d": 8.27
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.85,
          "priceAvg30d": 7.79
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.47,
          "priceAvg30d": 7.55
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.32,
          "priceAvg30d": 7.94
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.32,
          "priceAvg30d": 6.89
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.52,
          "priceAvg30d": 7.02
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 13.0,
          "priceAvg30d": 8.32
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 14.32,
          "priceAvg30d": 8.98
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 15.56,
          "priceAvg30d": 10.88
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.0,
          "priceAvg30d": 12.25
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.45,
          "priceAvg30d": 14.33
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.96,
          "priceAvg30d": 17.16
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 33.28,
          "priceAvg30d": 21.44
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.0,
          "priceAvg30d": 24.93
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.99,
          "priceAvg30d": 24.83
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 26.38,
          "priceAvg30d": 25.42
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.18,
          "priceAvg30d": 24.37
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.14,
          "priceAvg30d": 23.73
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.07,
          "priceAvg30d": 23.77
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.07,
          "priceAvg30d": 22.75
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.5,
          "priceAvg30d": 22.59
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.6,
          "priceAvg30d": 21.94
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.5,
          "priceAvg30d": 21.36
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.14,
          "priceAvg30d": 20.81
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.3,
          "priceAvg30d": 20.22
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.32,
          "priceAvg30d": 18.34
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.32,
          "priceAvg30d": 18.07
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.14,
          "priceAvg30d": 14.15
        }
      ],
      "avg": 19.22,
      "max": 37.0,
      "maxBlock": 34,
      "min": 11.14,
      "minBlock": 1,
      "spread3h": 15.06,
      "spreadLowAvg": 14.14,
      "spreadHighAvg": 29.21,
      "avg30d": 16.14,
      "spread30dAvg": 14.97,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.14,
          "priceAvg30d": 11.72
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.32,
          "priceAvg30d": 11.28
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.52,
          "priceAvg30d": 10.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.52,
          "priceAvg30d": 10.42
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.52,
          "priceAvg30d": 10.49
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.52,
          "priceAvg30d": 10.76
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 14.14,
          "priceAvg30d": 10.65
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 14.32,
          "priceAvg30d": 13.04
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.32,
          "priceAvg30d": 13.77
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.0,
          "priceAvg30d": 14.88
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.02,
          "priceAvg30d": 15.46
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.32,
          "priceAvg30d": 15.05
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.1,
          "priceAvg30d": 14.59
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.34,
          "priceAvg30d": 12.6
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.51,
          "priceAvg30d": 10.08
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.5,
          "priceAvg30d": 10.17
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.5,
          "priceAvg30d": 10.56
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.88,
          "priceAvg30d": 9.8
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 13.47,
          "priceAvg30d": 8.85
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.47,
          "priceAvg30d": 8.15
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.32,
          "priceAvg30d": 6.34
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.85,
          "priceAvg30d": 5.35
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.47,
          "priceAvg30d": 5.32
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.32,
          "priceAvg30d": 5.52
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.32,
          "priceAvg30d": 4.66
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.63,
          "priceAvg30d": 5.07
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.89,
          "priceAvg30d": 6.96
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 13.47,
          "priceAvg30d": 7.25
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 13.47,
          "priceAvg30d": 8.51
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.0,
          "priceAvg30d": 9.63
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.45,
          "priceAvg30d": 10.6
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.96,
          "priceAvg30d": 11.38
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 33.28,
          "priceAvg30d": 13.51
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.0,
          "priceAvg30d": 17.27
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.99,
          "priceAvg30d": 18.6
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 26.38,
          "priceAvg30d": 19.28
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.18,
          "priceAvg30d": 18.35
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.14,
          "priceAvg30d": 17.9
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.07,
          "priceAvg30d": 16.87
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.07,
          "priceAvg30d": 15.97
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.5,
          "priceAvg30d": 16.1
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 13.47,
          "priceAvg30d": 14.95
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.5,
          "priceAvg30d": 15.65
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.14,
          "priceAvg30d": 14.51
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.3,
          "priceAvg30d": 13.25
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.47,
          "priceAvg30d": 12.08
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.32,
          "priceAvg30d": 12.42
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.14,
          "priceAvg30d": 10.38
        }
      ],
      "avg": 18.66,
      "max": 37.0,
      "maxBlock": 34,
      "min": 8.89,
      "minBlock": 27,
      "spread3h": 15.67,
      "spreadLowAvg": 13.54,
      "spreadHighAvg": 29.21,
      "avg30d": 11.81,
      "spread30dAvg": 13.48,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.14,
          "priceAvg30d": 14.77
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.32,
          "priceAvg30d": 15.22
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.52,
          "priceAvg30d": 14.0
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.52,
          "priceAvg30d": 13.46
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.52,
          "priceAvg30d": 13.89
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.52,
          "priceAvg30d": 15.27
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 14.14,
          "priceAvg30d": 16.14
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 14.32,
          "priceAvg30d": 17.8
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.32,
          "priceAvg30d": 18.31
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.0,
          "priceAvg30d": 19.38
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.02,
          "priceAvg30d": 19.4
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.32,
          "priceAvg30d": 18.77
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.1,
          "priceAvg30d": 18.81
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.34,
          "priceAvg30d": 18.33
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.51,
          "priceAvg30d": 14.34
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.5,
          "priceAvg30d": 12.47
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.5,
          "priceAvg30d": 12.13
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.88,
          "priceAvg30d": 10.58
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 13.85,
          "priceAvg30d": 8.98
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.32,
          "priceAvg30d": 8.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.32,
          "priceAvg30d": 6.91
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 13.85,
          "priceAvg30d": 6.54
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.47,
          "priceAvg30d": 6.39
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.32,
          "priceAvg30d": 6.23
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.32,
          "priceAvg30d": 5.5
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.52,
          "priceAvg30d": 5.63
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 13.0,
          "priceAvg30d": 6.5
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 14.32,
          "priceAvg30d": 7.67
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 15.56,
          "priceAvg30d": 9.31
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.0,
          "priceAvg30d": 11.66
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.45,
          "priceAvg30d": 14.33
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.96,
          "priceAvg30d": 17.08
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 33.28,
          "priceAvg30d": 21.44
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.0,
          "priceAvg30d": 24.93
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.99,
          "priceAvg30d": 24.83
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 26.38,
          "priceAvg30d": 25.42
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.18,
          "priceAvg30d": 24.37
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.14,
          "priceAvg30d": 23.73
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.07,
          "priceAvg30d": 23.77
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.07,
          "priceAvg30d": 22.75
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.5,
          "priceAvg30d": 22.59
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.6,
          "priceAvg30d": 21.94
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.5,
          "priceAvg30d": 21.36
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.14,
          "priceAvg30d": 20.81
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.3,
          "priceAvg30d": 20.22
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.32,
          "priceAvg30d": 18.34
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 14.32,
          "priceAvg30d": 18.07
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.14,
          "priceAvg30d": 14.15
        }
      ],
      "avg": 19.22,
      "max": 37.0,
      "maxBlock": 34,
      "min": 11.14,
      "minBlock": 1,
      "spread3h": 15.06,
      "spreadLowAvg": 14.14,
      "spreadHighAvg": 29.21,
      "avg30d": 15.68,
      "spread30dAvg": 15.72,
      "historyDays": 30
    }
  }
};
