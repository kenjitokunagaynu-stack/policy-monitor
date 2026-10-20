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
  "targetDate": "2026-10-20",
  "fetchedAt": "2026-10-20T11:37:52+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 26.44,
        "priceAvg30d": 20.95
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 24.99,
        "priceAvg30d": 19.39
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 24.15,
        "priceAvg30d": 18.6
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 24.96,
        "priceAvg30d": 18.11
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 24.96,
        "priceAvg30d": 17.93
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 24.75,
        "priceAvg30d": 18.73
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 25.1,
        "priceAvg30d": 19.49
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 25.47,
        "priceAvg30d": 20.35
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 25.49,
        "priceAvg30d": 21.05
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 26.17,
        "priceAvg30d": 21.87
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 26.51,
        "priceAvg30d": 22.52
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 26.81,
        "priceAvg30d": 22.26
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 26.64,
        "priceAvg30d": 21.48
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 26.68,
        "priceAvg30d": 18.85
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 26.91,
        "priceAvg30d": 15.55
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 27.11,
        "priceAvg30d": 13.66
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 27.51,
        "priceAvg30d": 13.36
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 30.0,
        "priceAvg30d": 12.98
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 30.48,
        "priceAvg30d": 12.36
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 30.18,
        "priceAvg30d": 11.58
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 29.53,
        "priceAvg30d": 10.69
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 29.5,
        "priceAvg30d": 10.1
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 29.53,
        "priceAvg30d": 9.87
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 29.53,
        "priceAvg30d": 9.61
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 27.72,
        "priceAvg30d": 7.47
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 27.72,
        "priceAvg30d": 8.28
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 32.52,
        "priceAvg30d": 10.72
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 37.59,
        "priceAvg30d": 13.18
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 37.76,
        "priceAvg30d": 14.17
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 39.41,
        "priceAvg30d": 17.85
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 39.41,
        "priceAvg30d": 19.11
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 43.58,
        "priceAvg30d": 23.37
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 45.13,
        "priceAvg30d": 26.8
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 47.88,
        "priceAvg30d": 29.5
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 45.34,
        "priceAvg30d": 29.2
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 44.69,
        "priceAvg30d": 29.75
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 40.5,
        "priceAvg30d": 28.89
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 39.41,
        "priceAvg30d": 28.09
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 37.57,
        "priceAvg30d": 27.0
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 32.01,
        "priceAvg30d": 25.44
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 32.3,
        "priceAvg30d": 24.71
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 30.0,
        "priceAvg30d": 23.97
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 28.18,
        "priceAvg30d": 23.48
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 28.96,
        "priceAvg30d": 23.74
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 28.23,
        "priceAvg30d": 23.85
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 27.48,
        "priceAvg30d": 22.86
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 26.63,
        "priceAvg30d": 22.73
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 25.9,
        "priceAvg30d": 20.88
      }
    ],
    "avg": 31.15,
    "max": 47.88,
    "maxBlock": 34,
    "min": 24.15,
    "minBlock": 3,
    "spread3h": 17.61,
    "spreadLowAvg": 25.5,
    "spreadHighAvg": 43.11,
    "avg30d": 19.3,
    "spread30dAvg": 18.92,
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
          "price": 32.35,
          "priceAvg30d": 16.83
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 32.35,
          "priceAvg30d": 15.0
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 32.35,
          "priceAvg30d": 15.49
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 32.69,
          "priceAvg30d": 15.49
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 30.0,
          "priceAvg30d": 16.1
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 32.78,
          "priceAvg30d": 17.69
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 36.0,
          "priceAvg30d": 18.71
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 45.0,
          "priceAvg30d": 18.98
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 50.0,
          "priceAvg30d": 18.87
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 55.0,
          "priceAvg30d": 18.83
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 99.9,
          "priceAvg30d": 19.46
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 105.0,
          "priceAvg30d": 19.57
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 50.01,
          "priceAvg30d": 17.53
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.0,
          "priceAvg30d": 15.38
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 27.72,
          "priceAvg30d": 12.51
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.72,
          "priceAvg30d": 10.19
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.92,
          "priceAvg30d": 9.03
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.1,
          "priceAvg30d": 7.85
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 22.72,
          "priceAvg30d": 6.87
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 15.33,
          "priceAvg30d": 5.96
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.8,
          "priceAvg30d": 5.51
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.8,
          "priceAvg30d": 4.96
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.81,
          "priceAvg30d": 5.22
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.96,
          "priceAvg30d": 5.15
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.74,
          "priceAvg30d": 4.53
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.89,
          "priceAvg30d": 4.57
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 13.0,
          "priceAvg30d": 5.68
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.42,
          "priceAvg30d": 6.96
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 36.0,
          "priceAvg30d": 8.74
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 50.01,
          "priceAvg30d": 11.57
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 41.29,
          "priceAvg30d": 14.52
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 50.0,
          "priceAvg30d": 20.16
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 80.0,
          "priceAvg30d": 26.5
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 80.0,
          "priceAvg30d": 30.55
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 80.0,
          "priceAvg30d": 29.09
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 50.0,
          "priceAvg30d": 29.72
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.77,
          "priceAvg30d": 27.97
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 50.0,
          "priceAvg30d": 28.51
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.55,
          "priceAvg30d": 27.72
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 50.0,
          "priceAvg30d": 26.71
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 50.0,
          "priceAvg30d": 25.22
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 45.0,
          "priceAvg30d": 24.39
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 40.0,
          "priceAvg30d": 23.55
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 45.0,
          "priceAvg30d": 23.91
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 50.0,
          "priceAvg30d": 22.82
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.84,
          "priceAvg30d": 21.45
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 40.0,
          "priceAvg30d": 20.9
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.19,
          "priceAvg30d": 18.52
        }
      ],
      "avg": 39.44,
      "max": 105.0,
      "maxBlock": 12,
      "min": 10.74,
      "minBlock": 25,
      "spread3h": 38.79,
      "spreadLowAvg": 13.31,
      "spreadHighAvg": 52.1,
      "avg30d": 16.7,
      "spread30dAvg": 21.3,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.67,
          "priceAvg30d": 22.86
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.64,
          "priceAvg30d": 21.99
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.99,
          "priceAvg30d": 21.85
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.08,
          "priceAvg30d": 21.67
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.08,
          "priceAvg30d": 21.57
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.81,
          "priceAvg30d": 21.6
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 26.8,
          "priceAvg30d": 22.29
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.8,
          "priceAvg30d": 22.5
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.08,
          "priceAvg30d": 22.5
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.42,
          "priceAvg30d": 22.66
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.72,
          "priceAvg30d": 22.83
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.72,
          "priceAvg30d": 22.87
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.48,
          "priceAvg30d": 21.92
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 27.72,
          "priceAvg30d": 20.27
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 27.72,
          "priceAvg30d": 16.62
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.72,
          "priceAvg30d": 13.41
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.78,
          "priceAvg30d": 11.41
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 32.49,
          "priceAvg30d": 9.06
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 36.53,
          "priceAvg30d": 8.24
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 36.53,
          "priceAvg30d": 6.96
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.48,
          "priceAvg30d": 6.16
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 35.0,
          "priceAvg30d": 5.65
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 36.53,
          "priceAvg30d": 5.56
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 37.56,
          "priceAvg30d": 5.55
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 32.01,
          "priceAvg30d": 5.44
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 32.67,
          "priceAvg30d": 5.88
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.76,
          "priceAvg30d": 7.67
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 40.43,
          "priceAvg30d": 9.45
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 50.0,
          "priceAvg30d": 11.48
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 50.01,
          "priceAvg30d": 14.96
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 41.29,
          "priceAvg30d": 18.43
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 44.18,
          "priceAvg30d": 24.27
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 50.0,
          "priceAvg30d": 29.21
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 50.0,
          "priceAvg30d": 32.99
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 44.2,
          "priceAvg30d": 32.48
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.0,
          "priceAvg30d": 33.02
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.0,
          "priceAvg30d": 31.43
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 39.41,
          "priceAvg30d": 31.07
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.08,
          "priceAvg30d": 30.17
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.18,
          "priceAvg30d": 28.22
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.18,
          "priceAvg30d": 26.85
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.53,
          "priceAvg30d": 25.94
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.72,
          "priceAvg30d": 25.43
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.13,
          "priceAvg30d": 26.82
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.13,
          "priceAvg30d": 25.89
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.72,
          "priceAvg30d": 25.01
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.67,
          "priceAvg30d": 24.22
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.19,
          "priceAvg30d": 22.33
        }
      ],
      "avg": 33.29,
      "max": 50.01,
      "maxBlock": 30,
      "min": 25.99,
      "minBlock": 3,
      "spread3h": 16.87,
      "spreadLowAvg": 27.07,
      "spreadHighAvg": 43.94,
      "avg30d": 19.72,
      "spread30dAvg": 22.91,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.67,
          "priceAvg30d": 24.62
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.64,
          "priceAvg30d": 23.81
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.99,
          "priceAvg30d": 23.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.08,
          "priceAvg30d": 23.56
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.08,
          "priceAvg30d": 23.5
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.81,
          "priceAvg30d": 23.7
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 26.8,
          "priceAvg30d": 24.13
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.8,
          "priceAvg30d": 24.42
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.08,
          "priceAvg30d": 24.54
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.42,
          "priceAvg30d": 24.74
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.72,
          "priceAvg30d": 24.85
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.72,
          "priceAvg30d": 24.9
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.48,
          "priceAvg30d": 24.49
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 27.72,
          "priceAvg30d": 23.27
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 27.72,
          "priceAvg30d": 22.45
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.72,
          "priceAvg30d": 21.94
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.78,
          "priceAvg30d": 20.76
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 32.49,
          "priceAvg30d": 20.76
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 36.53,
          "priceAvg30d": 20.23
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 36.53,
          "priceAvg30d": 19.78
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.48,
          "priceAvg30d": 17.96
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 35.0,
          "priceAvg30d": 17.58
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 36.53,
          "priceAvg30d": 17.68
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 37.56,
          "priceAvg30d": 17.72
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 32.01,
          "priceAvg30d": 16.51
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 32.67,
          "priceAvg30d": 17.88
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.76,
          "priceAvg30d": 18.91
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 40.43,
          "priceAvg30d": 21.84
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 50.0,
          "priceAvg30d": 23.39
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 50.01,
          "priceAvg30d": 26.06
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 41.29,
          "priceAvg30d": 25.5
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 44.18,
          "priceAvg30d": 29.07
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 50.0,
          "priceAvg30d": 32.7
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 50.0,
          "priceAvg30d": 35.32
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 44.2,
          "priceAvg30d": 34.2
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.0,
          "priceAvg30d": 34.87
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.0,
          "priceAvg30d": 33.55
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 39.41,
          "priceAvg30d": 33.18
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.08,
          "priceAvg30d": 31.69
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.18,
          "priceAvg30d": 29.61
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.18,
          "priceAvg30d": 28.06
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.53,
          "priceAvg30d": 27.07
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.72,
          "priceAvg30d": 26.38
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.13,
          "priceAvg30d": 27.58
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.13,
          "priceAvg30d": 28.08
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.72,
          "priceAvg30d": 27.2
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.67,
          "priceAvg30d": 26.86
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.19,
          "priceAvg30d": 25.12
        }
      ],
      "avg": 33.29,
      "max": 50.01,
      "maxBlock": 30,
      "min": 25.99,
      "minBlock": 3,
      "spread3h": 16.87,
      "spreadLowAvg": 27.07,
      "spreadHighAvg": 43.94,
      "avg30d": 24.91,
      "spread30dAvg": 15.41,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.46,
          "priceAvg30d": 24.08
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.29,
          "priceAvg30d": 23.22
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.87,
          "priceAvg30d": 23.09
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.5,
          "priceAvg30d": 22.81
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.68,
          "priceAvg30d": 22.77
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.68,
          "priceAvg30d": 23.01
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 24.04,
          "priceAvg30d": 23.55
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.22,
          "priceAvg30d": 23.85
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.22,
          "priceAvg30d": 24.03
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.76,
          "priceAvg30d": 24.34
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.72,
          "priceAvg30d": 24.53
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 26.5,
          "priceAvg30d": 24.49
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.74,
          "priceAvg30d": 24.15
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 26.17,
          "priceAvg30d": 22.78
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 26.45,
          "priceAvg30d": 21.32
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.16,
          "priceAvg30d": 19.71
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.78,
          "priceAvg30d": 18.38
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 32.49,
          "priceAvg30d": 18.88
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 36.53,
          "priceAvg30d": 18.77
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 36.53,
          "priceAvg30d": 18.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.48,
          "priceAvg30d": 16.5
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 35.0,
          "priceAvg30d": 16.23
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 36.53,
          "priceAvg30d": 16.07
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 37.56,
          "priceAvg30d": 15.93
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 32.01,
          "priceAvg30d": 13.55
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 32.5,
          "priceAvg30d": 14.3
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.76,
          "priceAvg30d": 17.1
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 40.0,
          "priceAvg30d": 20.32
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 43.56,
          "priceAvg30d": 21.64
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 40.93,
          "priceAvg30d": 23.5
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 41.29,
          "priceAvg30d": 24.65
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 44.18,
          "priceAvg30d": 28.18
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.23,
          "priceAvg30d": 31.19
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.79,
          "priceAvg30d": 33.47
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 44.2,
          "priceAvg30d": 32.8
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.0,
          "priceAvg30d": 33.12
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.5,
          "priceAvg30d": 32.04
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 39.41,
          "priceAvg30d": 31.05
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.08,
          "priceAvg30d": 30.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.18,
          "priceAvg30d": 28.95
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.18,
          "priceAvg30d": 27.88
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.53,
          "priceAvg30d": 26.84
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.72,
          "priceAvg30d": 26.33
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.13,
          "priceAvg30d": 26.74
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.02,
          "priceAvg30d": 27.55
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.6,
          "priceAvg30d": 26.8
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.44,
          "priceAvg30d": 26.94
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.99,
          "priceAvg30d": 25.22
        }
      ],
      "avg": 31.95,
      "max": 44.79,
      "maxBlock": 34,
      "min": 22.5,
      "minBlock": 4,
      "spread3h": 18.56,
      "spreadLowAvg": 24.34,
      "spreadHighAvg": 42.9,
      "avg30d": 23.77,
      "spread30dAvg": 17.01,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.76,
          "priceAvg30d": 12.4
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.87,
          "priceAvg30d": 12.27
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.76,
          "priceAvg30d": 12.34
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 17.5,
          "priceAvg30d": 11.93
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 17.5,
          "priceAvg30d": 12.44
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.87,
          "priceAvg30d": 13.39
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.5,
          "priceAvg30d": 14.27
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.76,
          "priceAvg30d": 15.44
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.5,
          "priceAvg30d": 15.29
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.87,
          "priceAvg30d": 16.68
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.86,
          "priceAvg30d": 16.34
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.5,
          "priceAvg30d": 16.13
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.65,
          "priceAvg30d": 16.46
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 21.7,
          "priceAvg30d": 14.19
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.8,
          "priceAvg30d": 12.24
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.16,
          "priceAvg30d": 10.39
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.78,
          "priceAvg30d": 12.26
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 32.49,
          "priceAvg30d": 13.23
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 36.53,
          "priceAvg30d": 14.64
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 36.53,
          "priceAvg30d": 14.03
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.48,
          "priceAvg30d": 13.14
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 35.0,
          "priceAvg30d": 12.87
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 36.53,
          "priceAvg30d": 12.9
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 37.56,
          "priceAvg30d": 12.83
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 32.01,
          "priceAvg30d": 9.42
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 32.5,
          "priceAvg30d": 9.87
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.76,
          "priceAvg30d": 12.59
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 40.0,
          "priceAvg30d": 15.81
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 43.56,
          "priceAvg30d": 15.56
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 40.93,
          "priceAvg30d": 17.31
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 41.29,
          "priceAvg30d": 17.83
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 44.18,
          "priceAvg30d": 19.92
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.23,
          "priceAvg30d": 20.76
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.79,
          "priceAvg30d": 22.59
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 44.2,
          "priceAvg30d": 21.09
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.0,
          "priceAvg30d": 22.36
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.5,
          "priceAvg30d": 21.15
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 39.41,
          "priceAvg30d": 21.53
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.08,
          "priceAvg30d": 20.4
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.18,
          "priceAvg30d": 19.24
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.18,
          "priceAvg30d": 19.66
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.53,
          "priceAvg30d": 18.75
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.72,
          "priceAvg30d": 18.68
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.13,
          "priceAvg30d": 17.76
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.02,
          "priceAvg30d": 17.52
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.6,
          "priceAvg30d": 15.65
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.25,
          "priceAvg30d": 15.4
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 21.7,
          "priceAvg30d": 12.15
        }
      ],
      "avg": 30.21,
      "max": 44.79,
      "maxBlock": 34,
      "min": 15.5,
      "minBlock": 7,
      "spread3h": 24.23,
      "spreadLowAvg": 18.67,
      "spreadHighAvg": 42.9,
      "avg30d": 15.65,
      "spread30dAvg": 11.1,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.76,
          "priceAvg30d": 12.07
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.87,
          "priceAvg30d": 12.16
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.76,
          "priceAvg30d": 12.25
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 17.5,
          "priceAvg30d": 11.84
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 17.5,
          "priceAvg30d": 11.87
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.87,
          "priceAvg30d": 13.03
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.5,
          "priceAvg30d": 13.93
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.76,
          "priceAvg30d": 15.0
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.5,
          "priceAvg30d": 14.83
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.87,
          "priceAvg30d": 16.03
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.86,
          "priceAvg30d": 15.77
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.5,
          "priceAvg30d": 15.65
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.65,
          "priceAvg30d": 16.39
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 21.7,
          "priceAvg30d": 14.08
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.8,
          "priceAvg30d": 11.8
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 27.16,
          "priceAvg30d": 9.63
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.78,
          "priceAvg30d": 11.6
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 32.49,
          "priceAvg30d": 12.51
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 36.53,
          "priceAvg30d": 14.1
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 36.53,
          "priceAvg30d": 13.6
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 35.48,
          "priceAvg30d": 12.73
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 35.0,
          "priceAvg30d": 12.5
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 36.53,
          "priceAvg30d": 12.56
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 37.56,
          "priceAvg30d": 12.43
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 32.01,
          "priceAvg30d": 8.99
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 32.5,
          "priceAvg30d": 9.47
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 37.76,
          "priceAvg30d": 12.25
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 40.0,
          "priceAvg30d": 15.71
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 43.56,
          "priceAvg30d": 14.99
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 40.93,
          "priceAvg30d": 17.12
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 41.29,
          "priceAvg30d": 17.48
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 44.18,
          "priceAvg30d": 19.82
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.23,
          "priceAvg30d": 20.76
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.79,
          "priceAvg30d": 22.59
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 44.2,
          "priceAvg30d": 21.09
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.0,
          "priceAvg30d": 22.02
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.5,
          "priceAvg30d": 21.15
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 39.41,
          "priceAvg30d": 21.09
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.08,
          "priceAvg30d": 20.06
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.18,
          "priceAvg30d": 19.06
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.18,
          "priceAvg30d": 19.47
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.53,
          "priceAvg30d": 18.6
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.72,
          "priceAvg30d": 18.52
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.13,
          "priceAvg30d": 17.51
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.02,
          "priceAvg30d": 17.28
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.6,
          "priceAvg30d": 15.4
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 24.25,
          "priceAvg30d": 15.23
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 21.7,
          "priceAvg30d": 12.02
        }
      ],
      "avg": 30.21,
      "max": 44.79,
      "maxBlock": 34,
      "min": 15.5,
      "minBlock": 7,
      "spread3h": 24.23,
      "spreadLowAvg": 18.67,
      "spreadHighAvg": 42.9,
      "avg30d": 15.33,
      "spread30dAvg": 11.22,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.76,
          "priceAvg30d": 12.07
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.87,
          "priceAvg30d": 12.16
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.76,
          "priceAvg30d": 12.08
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 17.5,
          "priceAvg30d": 11.66
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 17.5,
          "priceAvg30d": 11.38
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.87,
          "priceAvg30d": 12.49
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.47,
          "priceAvg30d": 13.19
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 15.25,
          "priceAvg30d": 14.48
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.5,
          "priceAvg30d": 14.64
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.87,
          "priceAvg30d": 15.82
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.86,
          "priceAvg30d": 15.77
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.5,
          "priceAvg30d": 15.62
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.65,
          "priceAvg30d": 16.39
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.12,
          "priceAvg30d": 13.97
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.47,
          "priceAvg30d": 10.91
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.47,
          "priceAvg30d": 9.06
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.75,
          "priceAvg30d": 9.06
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.82,
          "priceAvg30d": 8.95
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 36.53,
          "priceAvg30d": 7.71
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 36.53,
          "priceAvg30d": 6.91
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 29.0,
          "priceAvg30d": 7.52
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 20.88,
          "priceAvg30d": 7.03
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 20.87,
          "priceAvg30d": 7.04
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.87,
          "priceAvg30d": 6.67
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.74,
          "priceAvg30d": 5.86
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.0,
          "priceAvg30d": 5.76
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.87,
          "priceAvg30d": 7.54
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.88,
          "priceAvg30d": 8.67
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.0,
          "priceAvg30d": 9.48
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.88,
          "priceAvg30d": 10.2
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 20.87,
          "priceAvg30d": 11.5
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 22.15,
          "priceAvg30d": 14.0
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 39.5,
          "priceAvg30d": 15.72
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.79,
          "priceAvg30d": 19.75
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 44.2,
          "priceAvg30d": 20.61
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.0,
          "priceAvg30d": 21.61
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.73,
          "priceAvg30d": 20.68
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 37.73,
          "priceAvg30d": 20.61
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.08,
          "priceAvg30d": 19.95
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.18,
          "priceAvg30d": 19.06
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.0,
          "priceAvg30d": 19.32
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.53,
          "priceAvg30d": 18.52
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.27,
          "priceAvg30d": 18.49
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.15,
          "priceAvg30d": 17.42
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.04,
          "priceAvg30d": 17.2
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.18,
          "priceAvg30d": 15.4
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.8,
          "priceAvg30d": 15.23
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.0,
          "priceAvg30d": 12.02
        }
      ],
      "avg": 23.82,
      "max": 44.79,
      "maxBlock": 34,
      "min": 12.0,
      "minBlock": 26,
      "spread3h": 14.7,
      "spreadLowAvg": 19.87,
      "spreadHighAvg": 34.57,
      "avg30d": 13.27,
      "spread30dAvg": 13.12,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.17,
          "priceAvg30d": 10.94
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.14,
          "priceAvg30d": 10.72
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 7.8,
          "priceAvg30d": 10.87
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 5.01,
          "priceAvg30d": 10.62
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 5.01,
          "priceAvg30d": 10.26
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 8.0,
          "priceAvg30d": 10.79
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 8.14,
          "priceAvg30d": 11.12
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 8.19,
          "priceAvg30d": 12.25
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.22,
          "priceAvg30d": 12.2
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.31,
          "priceAvg30d": 13.53
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 8.33,
          "priceAvg30d": 13.45
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 8.33,
          "priceAvg30d": 13.25
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 8.33,
          "priceAvg30d": 13.71
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 8.26,
          "priceAvg30d": 11.24
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.31,
          "priceAvg30d": 9.13
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.26,
          "priceAvg30d": 8.23
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.75,
          "priceAvg30d": 8.06
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.82,
          "priceAvg30d": 8.18
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 36.53,
          "priceAvg30d": 6.97
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 36.53,
          "priceAvg30d": 5.94
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 29.0,
          "priceAvg30d": 6.59
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 20.88,
          "priceAvg30d": 6.29
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 20.87,
          "priceAvg30d": 5.95
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.87,
          "priceAvg30d": 6.23
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.74,
          "priceAvg30d": 5.65
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.0,
          "priceAvg30d": 5.64
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.87,
          "priceAvg30d": 7.06
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.88,
          "priceAvg30d": 7.79
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.0,
          "priceAvg30d": 8.5
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.88,
          "priceAvg30d": 9.07
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 20.87,
          "priceAvg30d": 9.68
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 22.15,
          "priceAvg30d": 11.15
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.82,
          "priceAvg30d": 11.36
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.0,
          "priceAvg30d": 14.51
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 26.83,
          "priceAvg30d": 15.38
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.0,
          "priceAvg30d": 16.79
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.0,
          "priceAvg30d": 16.54
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.34,
          "priceAvg30d": 16.23
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.87,
          "priceAvg30d": 15.36
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.87,
          "priceAvg30d": 14.12
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.07,
          "priceAvg30d": 14.49
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 11.82,
          "priceAvg30d": 13.72
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 11.82,
          "priceAvg30d": 13.98
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 8.35,
          "priceAvg30d": 13.14
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 8.33,
          "priceAvg30d": 13.12
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 8.26,
          "priceAvg30d": 12.07
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 8.26,
          "priceAvg30d": 12.38
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.22,
          "priceAvg30d": 9.99
        }
      ],
      "avg": 15.34,
      "max": 36.53,
      "maxBlock": 19,
      "min": 5.01,
      "minBlock": 4,
      "spread3h": 15.5,
      "spreadLowAvg": 7.54,
      "spreadHighAvg": 23.04,
      "avg30d": 10.92,
      "spread30dAvg": 11.04,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.76,
          "priceAvg30d": 12.07
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.87,
          "priceAvg30d": 12.16
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.47,
          "priceAvg30d": 12.08
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.47,
          "priceAvg30d": 11.66
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.47,
          "priceAvg30d": 11.38
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.47,
          "priceAvg30d": 12.49
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.47,
          "priceAvg30d": 13.19
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 15.25,
          "priceAvg30d": 14.48
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 17.5,
          "priceAvg30d": 14.64
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.87,
          "priceAvg30d": 15.82
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.86,
          "priceAvg30d": 15.73
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.5,
          "priceAvg30d": 15.62
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.65,
          "priceAvg30d": 16.39
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.12,
          "priceAvg30d": 13.97
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.47,
          "priceAvg30d": 10.91
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.47,
          "priceAvg30d": 9.06
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.75,
          "priceAvg30d": 8.72
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.81,
          "priceAvg30d": 7.86
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.81,
          "priceAvg30d": 6.69
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.46,
          "priceAvg30d": 5.84
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.46,
          "priceAvg30d": 5.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.46,
          "priceAvg30d": 5.3
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.46,
          "priceAvg30d": 5.11
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.34,
          "priceAvg30d": 4.95
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.73,
          "priceAvg30d": 4.66
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.73,
          "priceAvg30d": 4.71
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.46,
          "priceAvg30d": 5.53
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.46,
          "priceAvg30d": 6.6
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.81,
          "priceAvg30d": 7.67
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 15.25,
          "priceAvg30d": 9.27
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 20.87,
          "priceAvg30d": 11.07
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 22.15,
          "priceAvg30d": 13.5
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 39.5,
          "priceAvg30d": 15.72
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 44.79,
          "priceAvg30d": 19.75
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 44.2,
          "priceAvg30d": 20.61
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.0,
          "priceAvg30d": 21.61
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.73,
          "priceAvg30d": 20.68
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 37.73,
          "priceAvg30d": 20.61
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.08,
          "priceAvg30d": 19.95
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.18,
          "priceAvg30d": 19.06
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.0,
          "priceAvg30d": 19.32
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 29.53,
          "priceAvg30d": 18.52
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.27,
          "priceAvg30d": 18.49
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.15,
          "priceAvg30d": 17.42
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.04,
          "priceAvg30d": 17.2
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.18,
          "priceAvg30d": 15.4
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 18.8,
          "priceAvg30d": 15.23
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.0,
          "priceAvg30d": 12.02
        }
      ],
      "avg": 19.93,
      "max": 44.79,
      "maxBlock": 34,
      "min": 9.73,
      "minBlock": 25,
      "spread3h": 24.26,
      "spreadLowAvg": 10.32,
      "spreadHighAvg": 34.57,
      "avg30d": 12.84,
      "spread30dAvg": 13.85,
      "historyDays": 30
    }
  }
};
