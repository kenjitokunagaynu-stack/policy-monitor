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
  "targetDate": "2026-11-16",
  "fetchedAt": "2026-11-16T12:50:31+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 23.08,
        "priceAvg30d": 25.95
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 23.44,
        "priceAvg30d": 24.88
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 24.79,
        "priceAvg30d": 24.12
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 24.79,
        "priceAvg30d": 24.06
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 24.02,
        "priceAvg30d": 24.3
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 22.59,
        "priceAvg30d": 25.16
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 24.02,
        "priceAvg30d": 26.2
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 25.53,
        "priceAvg30d": 26.99
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 26.67,
        "priceAvg30d": 27.42
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 27.47,
        "priceAvg30d": 27.74
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 27.69,
        "priceAvg30d": 28.05
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 28.05,
        "priceAvg30d": 28.27
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 28.77,
        "priceAvg30d": 28.5
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 30.08,
        "priceAvg30d": 28.27
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 28.93,
        "priceAvg30d": 26.49
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 28.09,
        "priceAvg30d": 24.19
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 27.0,
        "priceAvg30d": 23.31
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 25.0,
        "priceAvg30d": 22.62
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 23.0,
        "priceAvg30d": 20.74
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 12.52,
        "priceAvg30d": 18.51
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 11.42,
        "priceAvg30d": 17.27
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 12.02,
        "priceAvg30d": 16.4
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 11.78,
        "priceAvg30d": 15.97
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 11.42,
        "priceAvg30d": 15.9
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 9.25,
        "priceAvg30d": 14.27
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 10.0,
        "priceAvg30d": 14.72
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 14.0,
        "priceAvg30d": 18.4
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 20.5,
        "priceAvg30d": 21.05
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 27.18,
        "priceAvg30d": 22.7
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 28.67,
        "priceAvg30d": 25.81
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 30.81,
        "priceAvg30d": 28.05
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 37.3,
        "priceAvg30d": 31.31
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 42.99,
        "priceAvg30d": 34.6
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 43.59,
        "priceAvg30d": 35.84
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 43.59,
        "priceAvg30d": 35.47
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 41.32,
        "priceAvg30d": 35.1
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 43.02,
        "priceAvg30d": 33.87
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 43.19,
        "priceAvg30d": 33.53
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 43.02,
        "priceAvg30d": 32.76
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 40.98,
        "priceAvg30d": 31.42
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 37.29,
        "priceAvg30d": 30.86
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 36.1,
        "priceAvg30d": 30.24
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 36.0,
        "priceAvg30d": 29.76
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 33.01,
        "priceAvg30d": 28.99
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 33.11,
        "priceAvg30d": 29.22
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 30.48,
        "priceAvg30d": 28.29
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 30.33,
        "priceAvg30d": 27.89
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 28.26,
        "priceAvg30d": 25.7
      }
    ],
    "avg": 27.84,
    "max": 43.59,
    "maxBlock": 34,
    "min": 9.25,
    "minBlock": 25,
    "spread3h": 26.55,
    "spreadLowAvg": 13.29,
    "spreadHighAvg": 39.84,
    "avg30d": 26.07,
    "spread30dAvg": 19.57,
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
          "price": 28.98,
          "priceAvg30d": 23.67
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 28.45,
          "priceAvg30d": 21.91
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.61,
          "priceAvg30d": 21.89
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.11,
          "priceAvg30d": 22.6
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.81,
          "priceAvg30d": 23.01
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.58,
          "priceAvg30d": 23.69
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.28,
          "priceAvg30d": 24.35
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.06,
          "priceAvg30d": 25.63
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.47,
          "priceAvg30d": 26.62
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.36,
          "priceAvg30d": 26.39
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.48,
          "priceAvg30d": 28.07
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.44,
          "priceAvg30d": 28.93
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.88,
          "priceAvg30d": 26.96
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.79,
          "priceAvg30d": 25.39
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 31.9,
          "priceAvg30d": 22.79
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.06,
          "priceAvg30d": 20.68
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 28.61,
          "priceAvg30d": 19.12
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 28.87,
          "priceAvg30d": 16.58
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 29.07,
          "priceAvg30d": 16.02
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.12,
          "priceAvg30d": 14.13
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.81,
          "priceAvg30d": 13.18
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 15.05,
          "priceAvg30d": 11.72
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.09,
          "priceAvg30d": 12.37
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.48,
          "priceAvg30d": 12.44
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.16,
          "priceAvg30d": 10.84
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.09,
          "priceAvg30d": 10.79
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.49,
          "priceAvg30d": 13.56
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.84,
          "priceAvg30d": 17.71
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 18.96,
          "priceAvg30d": 20.71
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 28.11,
          "priceAvg30d": 24.51
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 32.52,
          "priceAvg30d": 26.55
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 34.03,
          "priceAvg30d": 30.28
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.06,
          "priceAvg30d": 35.24
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 30.06,
          "priceAvg30d": 35.26
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.32,
          "priceAvg30d": 33.98
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.06,
          "priceAvg30d": 32.75
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.0,
          "priceAvg30d": 32.72
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.76,
          "priceAvg30d": 32.9
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.24,
          "priceAvg30d": 33.22
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 33.3,
          "priceAvg30d": 32.05
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 34.39,
          "priceAvg30d": 32.09
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.73,
          "priceAvg30d": 30.33
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 37.5,
          "priceAvg30d": 29.23
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 35.0,
          "priceAvg30d": 28.06
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 31.23,
          "priceAvg30d": 28.1
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.05,
          "priceAvg30d": 26.58
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.11,
          "priceAvg30d": 26.21
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 31.1,
          "priceAvg30d": 24.38
        }
      ],
      "avg": 27.47,
      "max": 37.5,
      "maxBlock": 43,
      "min": 10.81,
      "minBlock": 21,
      "spread3h": 14.5,
      "spreadLowAvg": 18.11,
      "spreadHighAvg": 32.62,
      "avg30d": 24.09,
      "spread30dAvg": 21.01,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.69,
          "priceAvg30d": 26.55
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.59,
          "priceAvg30d": 26.04
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.84,
          "priceAvg30d": 25.26
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.84,
          "priceAvg30d": 25.23
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.84,
          "priceAvg30d": 25.75
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.84,
          "priceAvg30d": 26.38
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.59,
          "priceAvg30d": 27.09
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.0,
          "priceAvg30d": 27.06
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.47,
          "priceAvg30d": 27.55
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.69,
          "priceAvg30d": 27.65
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.09,
          "priceAvg30d": 28.11
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.09,
          "priceAvg30d": 28.45
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.88,
          "priceAvg30d": 28.8
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.79,
          "priceAvg30d": 27.88
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 31.9,
          "priceAvg30d": 25.01
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.27,
          "priceAvg30d": 22.55
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 22.45,
          "priceAvg30d": 21.75
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 22.45,
          "priceAvg30d": 20.49
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 21.54,
          "priceAvg30d": 19.59
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.12,
          "priceAvg30d": 18.7
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.09,
          "priceAvg30d": 17.47
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.07,
          "priceAvg30d": 16.73
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.06,
          "priceAvg30d": 16.31
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.03,
          "priceAvg30d": 16.33
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.16,
          "priceAvg30d": 15.12
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.43,
          "priceAvg30d": 15.4
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.43,
          "priceAvg30d": 18.88
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 13.0,
          "priceAvg30d": 21.06
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 18.96,
          "priceAvg30d": 23.64
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.99,
          "priceAvg30d": 26.55
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 33.1,
          "priceAvg30d": 28.7
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 34.03,
          "priceAvg30d": 32.65
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 40.0,
          "priceAvg30d": 36.1
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 41.94,
          "priceAvg30d": 37.35
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 41.94,
          "priceAvg30d": 37.19
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.19,
          "priceAvg30d": 36.65
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.63,
          "priceAvg30d": 35.58
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.61,
          "priceAvg30d": 35.32
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 41.9,
          "priceAvg30d": 34.93
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 38.1,
          "priceAvg30d": 33.64
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 35.0,
          "priceAvg30d": 33.31
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.73,
          "priceAvg30d": 32.03
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 37.5,
          "priceAvg30d": 31.67
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 37.29,
          "priceAvg30d": 30.74
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 31.23,
          "priceAvg30d": 30.74
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 29.05,
          "priceAvg30d": 28.84
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.11,
          "priceAvg30d": 28.03
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 31.1,
          "priceAvg30d": 25.92
        }
      ],
      "avg": 25.74,
      "max": 43.63,
      "maxBlock": 37,
      "min": 8.16,
      "minBlock": 25,
      "spread3h": 31.78,
      "spreadLowAvg": 10.0,
      "spreadHighAvg": 41.78,
      "avg30d": 26.72,
      "spread30dAvg": 20.65,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.69,
          "priceAvg30d": 29.45
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.94,
          "priceAvg30d": 29.26
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.13,
          "priceAvg30d": 29.25
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.09,
          "priceAvg30d": 28.79
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.09,
          "priceAvg30d": 29.0
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.26,
          "priceAvg30d": 29.03
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.38,
          "priceAvg30d": 29.14
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 27.0,
          "priceAvg30d": 29.11
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 27.47,
          "priceAvg30d": 29.46
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.69,
          "priceAvg30d": 29.52
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.09,
          "priceAvg30d": 29.75
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 28.09,
          "priceAvg30d": 30.32
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.88,
          "priceAvg30d": 30.93
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 33.79,
          "priceAvg30d": 30.72
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 32.1,
          "priceAvg30d": 30.56
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.12,
          "priceAvg30d": 30.02
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.91,
          "priceAvg30d": 28.68
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.69,
          "priceAvg30d": 29.24
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 27.48,
          "priceAvg30d": 28.49
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.38,
          "priceAvg30d": 27.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 23.29,
          "priceAvg30d": 25.9
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.29,
          "priceAvg30d": 25.1
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 24.32,
          "priceAvg30d": 24.73
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.04,
          "priceAvg30d": 24.99
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 21.88,
          "priceAvg30d": 24.57
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.44,
          "priceAvg30d": 25.4
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 24.31,
          "priceAvg30d": 27.64
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 25.89,
          "priceAvg30d": 29.74
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 28.09,
          "priceAvg30d": 31.31
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.39,
          "priceAvg30d": 33.21
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 36.09,
          "priceAvg30d": 34.05
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 42.42,
          "priceAvg30d": 36.63
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.54,
          "priceAvg30d": 38.27
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.0,
          "priceAvg30d": 39.12
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 47.49,
          "priceAvg30d": 38.86
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.19,
          "priceAvg30d": 38.27
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.63,
          "priceAvg30d": 36.8
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.61,
          "priceAvg30d": 36.88
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.29,
          "priceAvg30d": 36.26
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.0,
          "priceAvg30d": 35.23
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 39.93,
          "priceAvg30d": 34.47
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 39.5,
          "priceAvg30d": 33.15
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 39.0,
          "priceAvg30d": 32.76
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 37.29,
          "priceAvg30d": 32.28
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 37.31,
          "priceAvg30d": 33.86
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 35.8,
          "priceAvg30d": 32.03
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.11,
          "priceAvg30d": 30.72
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 31.1,
          "priceAvg30d": 29.4
        }
      ],
      "avg": 32.16,
      "max": 47.49,
      "maxBlock": 35,
      "min": 21.88,
      "minBlock": 25,
      "spread3h": 19.52,
      "spreadLowAvg": 24.38,
      "spreadHighAvg": 43.9,
      "avg30d": 31.03,
      "spread30dAvg": 14.05,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.69,
          "priceAvg30d": 28.77
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.94,
          "priceAvg30d": 28.59
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 28.13,
          "priceAvg30d": 28.06
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.09,
          "priceAvg30d": 27.95
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.13,
          "priceAvg30d": 28.48
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.37,
          "priceAvg30d": 28.88
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 28.59,
          "priceAvg30d": 29.18
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.77,
          "priceAvg30d": 29.43
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.21,
          "priceAvg30d": 29.63
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.92,
          "priceAvg30d": 29.72
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.4,
          "priceAvg30d": 29.97
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 33.0,
          "priceAvg30d": 30.25
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 33.11,
          "priceAvg30d": 30.42
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 34.29,
          "priceAvg30d": 30.23
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 34.04,
          "priceAvg30d": 28.76
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 30.71,
          "priceAvg30d": 27.08
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 28.88,
          "priceAvg30d": 26.34
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 28.77,
          "priceAvg30d": 26.76
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 28.48,
          "priceAvg30d": 25.73
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.38,
          "priceAvg30d": 24.24
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 23.29,
          "priceAvg30d": 22.89
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.29,
          "priceAvg30d": 22.51
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 24.32,
          "priceAvg30d": 22.23
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.04,
          "priceAvg30d": 22.1
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 19.36,
          "priceAvg30d": 19.77
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.67,
          "priceAvg30d": 20.48
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 24.31,
          "priceAvg30d": 23.94
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 25.89,
          "priceAvg30d": 26.72
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 30.78,
          "priceAvg30d": 28.39
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 35.48,
          "priceAvg30d": 29.89
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 36.09,
          "priceAvg30d": 31.51
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 42.42,
          "priceAvg30d": 35.36
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.54,
          "priceAvg30d": 36.16
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.0,
          "priceAvg30d": 36.11
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.59,
          "priceAvg30d": 36.76
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.19,
          "priceAvg30d": 36.47
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.63,
          "priceAvg30d": 35.61
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.61,
          "priceAvg30d": 35.27
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 43.29,
          "priceAvg30d": 35.0
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 43.0,
          "priceAvg30d": 33.82
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 39.93,
          "priceAvg30d": 32.64
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 37.6,
          "priceAvg30d": 32.1
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 39.0,
          "priceAvg30d": 31.5
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 37.29,
          "priceAvg30d": 30.97
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 37.31,
          "priceAvg30d": 31.62
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 35.8,
          "priceAvg30d": 31.09
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 35.81,
          "priceAvg30d": 30.8
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 35.52,
          "priceAvg30d": 29.89
        }
      ],
      "avg": 32.75,
      "max": 45.0,
      "maxBlock": 34,
      "min": 19.36,
      "minBlock": 25,
      "spread3h": 17.99,
      "spreadLowAvg": 24.25,
      "spreadHighAvg": 42.24,
      "avg30d": 29.38,
      "spread30dAvg": 16.32,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.71,
          "priceAvg30d": 16.03
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.85,
          "priceAvg30d": 16.0
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.85,
          "priceAvg30d": 15.51
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.85,
          "priceAvg30d": 14.96
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.53,
          "priceAvg30d": 16.75
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.59,
          "priceAvg30d": 18.93
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.08,
          "priceAvg30d": 20.57
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.02,
          "priceAvg30d": 21.77
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.45,
          "priceAvg30d": 21.83
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.79,
          "priceAvg30d": 23.39
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.02,
          "priceAvg30d": 24.23
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.45,
          "priceAvg30d": 23.24
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.45,
          "priceAvg30d": 21.82
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.45,
          "priceAvg30d": 22.14
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.79,
          "priceAvg30d": 22.02
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 23.45,
          "priceAvg30d": 20.82
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 23.45,
          "priceAvg30d": 20.85
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.42,
          "priceAvg30d": 21.81
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.67,
          "priceAvg30d": 21.73
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.38,
          "priceAvg30d": 21.59
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 23.29,
          "priceAvg30d": 20.45
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.29,
          "priceAvg30d": 19.65
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 24.32,
          "priceAvg30d": 20.27
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.04,
          "priceAvg30d": 19.84
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 19.36,
          "priceAvg30d": 15.72
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.34,
          "priceAvg30d": 16.54
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 24.31,
          "priceAvg30d": 21.59
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 25.53,
          "priceAvg30d": 23.81
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 26.67,
          "priceAvg30d": 25.2
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 35.48,
          "priceAvg30d": 26.93
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 36.09,
          "priceAvg30d": 27.77
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 42.42,
          "priceAvg30d": 30.76
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.54,
          "priceAvg30d": 31.13
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.0,
          "priceAvg30d": 32.73
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.59,
          "priceAvg30d": 32.58
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.19,
          "priceAvg30d": 32.87
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.63,
          "priceAvg30d": 30.99
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.61,
          "priceAvg30d": 30.33
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 40.0,
          "priceAvg30d": 30.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.0,
          "priceAvg30d": 27.76
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 35.0,
          "priceAvg30d": 27.59
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.18,
          "priceAvg30d": 25.96
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 29.5,
          "priceAvg30d": 25.38
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.53,
          "priceAvg30d": 24.04
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.67,
          "priceAvg30d": 24.31
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.42,
          "priceAvg30d": 22.02
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.42,
          "priceAvg30d": 21.49
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 18.5,
          "priceAvg30d": 16.06
        }
      ],
      "avg": 27.0,
      "max": 45.0,
      "maxBlock": 34,
      "min": 12.34,
      "minBlock": 26,
      "spread3h": 18.21,
      "spreadLowAvg": 24.04,
      "spreadHighAvg": 42.24,
      "avg30d": 23.12,
      "spread30dAvg": 17.31,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.71,
          "priceAvg30d": 15.78
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.85,
          "priceAvg30d": 16.0
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.85,
          "priceAvg30d": 15.51
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.85,
          "priceAvg30d": 14.96
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.53,
          "priceAvg30d": 15.66
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.59,
          "priceAvg30d": 18.1
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.08,
          "priceAvg30d": 19.3
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.02,
          "priceAvg30d": 20.64
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.45,
          "priceAvg30d": 20.64
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.79,
          "priceAvg30d": 21.51
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.02,
          "priceAvg30d": 21.71
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.45,
          "priceAvg30d": 20.78
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.45,
          "priceAvg30d": 20.75
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.45,
          "priceAvg30d": 21.39
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.79,
          "priceAvg30d": 21.5
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 23.45,
          "priceAvg30d": 20.32
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 23.45,
          "priceAvg30d": 20.65
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.42,
          "priceAvg30d": 21.81
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.67,
          "priceAvg30d": 21.73
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.38,
          "priceAvg30d": 21.59
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 23.29,
          "priceAvg30d": 20.45
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.29,
          "priceAvg30d": 19.65
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 24.32,
          "priceAvg30d": 20.27
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.04,
          "priceAvg30d": 19.84
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 19.36,
          "priceAvg30d": 15.64
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.34,
          "priceAvg30d": 16.46
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 24.31,
          "priceAvg30d": 21.59
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 25.53,
          "priceAvg30d": 23.81
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 26.67,
          "priceAvg30d": 24.92
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 35.48,
          "priceAvg30d": 26.17
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 36.09,
          "priceAvg30d": 27.7
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 42.42,
          "priceAvg30d": 30.73
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.54,
          "priceAvg30d": 31.13
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.0,
          "priceAvg30d": 32.73
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.59,
          "priceAvg30d": 32.09
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 43.19,
          "priceAvg30d": 32.31
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 43.63,
          "priceAvg30d": 30.97
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 43.61,
          "priceAvg30d": 30.32
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 39.5,
          "priceAvg30d": 30.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.0,
          "priceAvg30d": 27.76
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 35.0,
          "priceAvg30d": 27.52
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.18,
          "priceAvg30d": 25.62
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 29.5,
          "priceAvg30d": 25.12
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.53,
          "priceAvg30d": 24.04
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.67,
          "priceAvg30d": 23.62
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.42,
          "priceAvg30d": 21.66
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.42,
          "priceAvg30d": 21.16
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 18.5,
          "priceAvg30d": 16.06
        }
      ],
      "avg": 26.99,
      "max": 45.0,
      "maxBlock": 34,
      "min": 12.34,
      "minBlock": 26,
      "spread3h": 18.21,
      "spreadLowAvg": 24.04,
      "spreadHighAvg": 42.24,
      "avg30d": 22.7,
      "spread30dAvg": 16.94,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.71,
          "priceAvg30d": 15.21
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.85,
          "priceAvg30d": 15.91
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.85,
          "priceAvg30d": 14.95
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.85,
          "priceAvg30d": 14.36
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.53,
          "priceAvg30d": 15.24
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.59,
          "priceAvg30d": 16.95
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.08,
          "priceAvg30d": 18.3
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.02,
          "priceAvg30d": 19.84
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.45,
          "priceAvg30d": 20.56
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.79,
          "priceAvg30d": 21.46
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.02,
          "priceAvg30d": 21.63
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.45,
          "priceAvg30d": 20.78
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.45,
          "priceAvg30d": 20.64
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.45,
          "priceAvg30d": 21.25
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.79,
          "priceAvg30d": 18.05
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 23.45,
          "priceAvg30d": 15.8
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 16.31,
          "priceAvg30d": 15.26
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.42,
          "priceAvg30d": 13.68
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.23,
          "priceAvg30d": 12.04
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.17,
          "priceAvg30d": 10.99
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.85,
          "priceAvg30d": 9.53
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.19,
          "priceAvg30d": 9.25
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.86,
          "priceAvg30d": 9.22
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.87,
          "priceAvg30d": 9.35
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.9,
          "priceAvg30d": 7.99
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.67,
          "priceAvg30d": 8.17
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.85,
          "priceAvg30d": 9.46
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.42,
          "priceAvg30d": 10.12
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.85,
          "priceAvg30d": 11.88
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.42,
          "priceAvg30d": 13.18
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.0,
          "priceAvg30d": 15.44
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.32,
          "priceAvg30d": 18.42
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.5,
          "priceAvg30d": 23.06
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.3,
          "priceAvg30d": 27.26
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.59,
          "priceAvg30d": 27.49
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.0,
          "priceAvg30d": 28.24
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.5,
          "priceAvg30d": 27.12
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 39.5,
          "priceAvg30d": 26.16
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.0,
          "priceAvg30d": 25.6
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.0,
          "priceAvg30d": 24.56
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 35.0,
          "priceAvg30d": 24.65
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.18,
          "priceAvg30d": 23.58
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 29.5,
          "priceAvg30d": 23.11
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.53,
          "priceAvg30d": 22.06
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.0,
          "priceAvg30d": 21.26
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.0,
          "priceAvg30d": 19.31
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.42,
          "priceAvg30d": 19.01
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 18.5,
          "priceAvg30d": 15.02
        }
      ],
      "avg": 21.48,
      "max": 43.59,
      "maxBlock": 35,
      "min": 2.9,
      "minBlock": 25,
      "spread3h": 26.54,
      "spreadLowAvg": 10.14,
      "spreadHighAvg": 36.69,
      "avg30d": 17.76,
      "spread30dAvg": 15.94,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.71,
          "priceAvg30d": 12.1
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.85,
          "priceAvg30d": 11.54
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.85,
          "priceAvg30d": 11.16
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.85,
          "priceAvg30d": 11.1
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.53,
          "priceAvg30d": 11.58
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.59,
          "priceAvg30d": 12.39
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.08,
          "priceAvg30d": 13.14
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.02,
          "priceAvg30d": 15.53
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.45,
          "priceAvg30d": 16.31
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.79,
          "priceAvg30d": 17.22
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.02,
          "priceAvg30d": 17.77
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.45,
          "priceAvg30d": 17.09
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.45,
          "priceAvg30d": 16.05
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.45,
          "priceAvg30d": 15.32
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.79,
          "priceAvg30d": 13.95
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 23.45,
          "priceAvg30d": 13.75
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 16.31,
          "priceAvg30d": 13.71
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.42,
          "priceAvg30d": 12.13
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.23,
          "priceAvg30d": 10.43
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.17,
          "priceAvg30d": 9.35
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.85,
          "priceAvg30d": 7.87
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.19,
          "priceAvg30d": 6.89
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.86,
          "priceAvg30d": 7.14
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.87,
          "priceAvg30d": 6.75
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.9,
          "priceAvg30d": 5.82
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.67,
          "priceAvg30d": 6.23
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.85,
          "priceAvg30d": 7.76
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.42,
          "priceAvg30d": 8.57
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.85,
          "priceAvg30d": 9.89
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.42,
          "priceAvg30d": 11.01
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.0,
          "priceAvg30d": 12.14
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.32,
          "priceAvg30d": 13.03
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.5,
          "priceAvg30d": 15.76
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.3,
          "priceAvg30d": 20.37
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.59,
          "priceAvg30d": 21.55
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.0,
          "priceAvg30d": 22.13
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.5,
          "priceAvg30d": 21.37
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 39.5,
          "priceAvg30d": 20.6
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.0,
          "priceAvg30d": 19.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.0,
          "priceAvg30d": 18.23
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 35.0,
          "priceAvg30d": 18.5
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.18,
          "priceAvg30d": 16.53
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 29.5,
          "priceAvg30d": 17.84
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.53,
          "priceAvg30d": 16.15
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.0,
          "priceAvg30d": 14.71
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.0,
          "priceAvg30d": 13.41
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.42,
          "priceAvg30d": 13.78
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 18.5,
          "priceAvg30d": 11.68
        }
      ],
      "avg": 21.48,
      "max": 43.59,
      "maxBlock": 35,
      "min": 2.9,
      "minBlock": 25,
      "spread3h": 26.54,
      "spreadLowAvg": 10.14,
      "spreadHighAvg": 36.69,
      "avg30d": 13.67,
      "spread30dAvg": 14.7,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.71,
          "priceAvg30d": 14.73
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.85,
          "priceAvg30d": 14.95
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.85,
          "priceAvg30d": 13.88
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.85,
          "priceAvg30d": 13.47
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.53,
          "priceAvg30d": 14.31
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.0,
          "priceAvg30d": 16.19
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.08,
          "priceAvg30d": 17.91
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.02,
          "priceAvg30d": 19.8
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.45,
          "priceAvg30d": 20.38
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.79,
          "priceAvg30d": 21.16
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.02,
          "priceAvg30d": 21.32
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.45,
          "priceAvg30d": 20.47
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.45,
          "priceAvg30d": 20.41
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 23.45,
          "priceAvg30d": 20.76
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.79,
          "priceAvg30d": 17.59
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 23.45,
          "priceAvg30d": 15.43
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 16.31,
          "priceAvg30d": 14.3
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.42,
          "priceAvg30d": 12.11
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.23,
          "priceAvg30d": 9.62
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.17,
          "priceAvg30d": 8.22
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.85,
          "priceAvg30d": 7.33
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.19,
          "priceAvg30d": 7.15
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.45,
          "priceAvg30d": 6.93
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 6.82,
          "priceAvg30d": 6.79
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.02,
          "priceAvg30d": 6.06
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 1.0,
          "priceAvg30d": 6.17
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.85,
          "priceAvg30d": 7.05
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.42,
          "priceAvg30d": 8.37
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.85,
          "priceAvg30d": 9.72
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.42,
          "priceAvg30d": 12.2
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.0,
          "priceAvg30d": 15.21
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.32,
          "priceAvg30d": 17.78
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.5,
          "priceAvg30d": 23.06
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.3,
          "priceAvg30d": 27.26
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 43.59,
          "priceAvg30d": 27.33
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.0,
          "priceAvg30d": 28.24
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.5,
          "priceAvg30d": 27.12
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 39.5,
          "priceAvg30d": 26.16
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.0,
          "priceAvg30d": 25.6
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 30.0,
          "priceAvg30d": 24.56
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 35.0,
          "priceAvg30d": 24.65
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 27.18,
          "priceAvg30d": 23.58
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 29.5,
          "priceAvg30d": 23.03
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.53,
          "priceAvg30d": 21.82
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.0,
          "priceAvg30d": 20.95
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.0,
          "priceAvg30d": 19.06
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.71,
          "priceAvg30d": 18.73
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 14.27,
          "priceAvg30d": 14.78
        }
      ],
      "avg": 20.85,
      "max": 43.59,
      "maxBlock": 35,
      "min": 1.0,
      "minBlock": 26,
      "spread3h": 28.45,
      "spreadLowAvg": 8.23,
      "spreadHighAvg": 36.69,
      "avg30d": 16.95,
      "spread30dAvg": 17.0,
      "historyDays": 30
    }
  }
};
