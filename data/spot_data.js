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
  "targetDate": "2026-10-25",
  "fetchedAt": "2026-10-25T11:19:04+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 26.61,
        "priceAvg30d": 21.97
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 25.17,
        "priceAvg30d": 20.73
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 24.5,
        "priceAvg30d": 20.05
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 24.51,
        "priceAvg30d": 19.8
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 24.89,
        "priceAvg30d": 19.83
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 25.16,
        "priceAvg30d": 20.48
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 25.16,
        "priceAvg30d": 21.03
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 26.0,
        "priceAvg30d": 21.68
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 26.39,
        "priceAvg30d": 22.27
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 26.49,
        "priceAvg30d": 22.87
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 26.76,
        "priceAvg30d": 23.45
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 26.64,
        "priceAvg30d": 23.44
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 26.01,
        "priceAvg30d": 22.95
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 26.29,
        "priceAvg30d": 20.8
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 25.18,
        "priceAvg30d": 17.75
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 25.01,
        "priceAvg30d": 15.82
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 23.34,
        "priceAvg30d": 15.22
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 24.75,
        "priceAvg30d": 14.81
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 24.45,
        "priceAvg30d": 14.11
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 24.51,
        "priceAvg30d": 13.3
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 24.37,
        "priceAvg30d": 12.55
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 23.9,
        "priceAvg30d": 12.06
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 25.23,
        "priceAvg30d": 11.89
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 25.97,
        "priceAvg30d": 11.74
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 25.55,
        "priceAvg30d": 9.47
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 25.55,
        "priceAvg30d": 10.14
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 25.55,
        "priceAvg30d": 13.07
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 25.97,
        "priceAvg30d": 15.7
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 26.19,
        "priceAvg30d": 16.6
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 26.92,
        "priceAvg30d": 20.0
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 27.94,
        "priceAvg30d": 21.49
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 27.71,
        "priceAvg30d": 25.97
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 28.62,
        "priceAvg30d": 29.23
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 30.14,
        "priceAvg30d": 31.75
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 30.18,
        "priceAvg30d": 31.22
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 30.22,
        "priceAvg30d": 31.38
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 31.1,
        "priceAvg30d": 29.97
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 30.53,
        "priceAvg30d": 29.19
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 30.0,
        "priceAvg30d": 28.08
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 29.99,
        "priceAvg30d": 26.2
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 29.15,
        "priceAvg30d": 25.44
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 28.63,
        "priceAvg30d": 24.55
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 27.54,
        "priceAvg30d": 23.97
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 26.02,
        "priceAvg30d": 24.2
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 26.51,
        "priceAvg30d": 24.53
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 26.08,
        "priceAvg30d": 23.73
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 26.64,
        "priceAvg30d": 23.6
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 25.97,
        "priceAvg30d": 22.02
      }
    ],
    "avg": 26.58,
    "max": 31.1,
    "maxBlock": 37,
    "min": 23.34,
    "minBlock": 17,
    "spread3h": 5.14,
    "spreadLowAvg": 25.03,
    "spreadHighAvg": 30.18,
    "avg30d": 20.88,
    "spread30dAvg": 18.54,
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
          "price": 10.88,
          "priceAvg30d": 18.76
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.83,
          "priceAvg30d": 15.83
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.73,
          "priceAvg30d": 16.73
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 16.95,
          "priceAvg30d": 17.32
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 29.01,
          "priceAvg30d": 17.94
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.08,
          "priceAvg30d": 19.32
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 33.14,
          "priceAvg30d": 20.67
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.25,
          "priceAvg30d": 21.22
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.35,
          "priceAvg30d": 21.12
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.2,
          "priceAvg30d": 21.1
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.9,
          "priceAvg30d": 23.46
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 33.35,
          "priceAvg30d": 24.02
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.1,
          "priceAvg30d": 20.13
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 30.0,
          "priceAvg30d": 17.43
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 17.65,
          "priceAvg30d": 14.44
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.71,
          "priceAvg30d": 12.34
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.5,
          "priceAvg30d": 11.19
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.42,
          "priceAvg30d": 9.59
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.36,
          "priceAvg30d": 8.58
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.71,
          "priceAvg30d": 7.35
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.71,
          "priceAvg30d": 6.76
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 3.0,
          "priceAvg30d": 6.25
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 2.0,
          "priceAvg30d": 6.46
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.69
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.95
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 1.0,
          "priceAvg30d": 5.57
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.04,
          "priceAvg30d": 6.97
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 8.89
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.71,
          "priceAvg30d": 11.38
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.39,
          "priceAvg30d": 14.66
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.53,
          "priceAvg30d": 17.08
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.82,
          "priceAvg30d": 23.05
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 29.01,
          "priceAvg30d": 30.24
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 14.0,
          "priceAvg30d": 33.13
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 10.92,
          "priceAvg30d": 31.27
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.99,
          "priceAvg30d": 31.0
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.9,
          "priceAvg30d": 28.84
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 28.31,
          "priceAvg30d": 29.6
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.01,
          "priceAvg30d": 29.28
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 29.01,
          "priceAvg30d": 28.31
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.01,
          "priceAvg30d": 27.15
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.0,
          "priceAvg30d": 25.33
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 10.88,
          "priceAvg30d": 23.86
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.85,
          "priceAvg30d": 23.7
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 12.5,
          "priceAvg30d": 23.92
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.88,
          "priceAvg30d": 22.32
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.9,
          "priceAvg30d": 22.28
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 17.99,
          "priceAvg30d": 19.99
        }
      ],
      "avg": 16.71,
      "max": 33.35,
      "maxBlock": 9,
      "min": 0.01,
      "minBlock": 24,
      "spread3h": 29.69,
      "spreadLowAvg": 2.63,
      "spreadHighAvg": 32.32,
      "avg30d": 18.51,
      "spread30dAvg": 22.5,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 33.06,
          "priceAvg30d": 24.73
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 33.06,
          "priceAvg30d": 24.12
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.9,
          "priceAvg30d": 24.37
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.34,
          "priceAvg30d": 24.12
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.31,
          "priceAvg30d": 24.1
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.08,
          "priceAvg30d": 23.92
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 33.14,
          "priceAvg30d": 24.42
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.25,
          "priceAvg30d": 24.59
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.35,
          "priceAvg30d": 24.48
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.2,
          "priceAvg30d": 24.59
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.9,
          "priceAvg30d": 24.82
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 33.35,
          "priceAvg30d": 24.94
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.1,
          "priceAvg30d": 24.32
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 31.2,
          "priceAvg30d": 22.46
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 32.19,
          "priceAvg30d": 18.6
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 33.2,
          "priceAvg30d": 15.32
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.69,
          "priceAvg30d": 13.5
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 32.23,
          "priceAvg30d": 11.52
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 33.18,
          "priceAvg30d": 10.79
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 33.16,
          "priceAvg30d": 9.61
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 33.13,
          "priceAvg30d": 8.72
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 33.35,
          "priceAvg30d": 8.15
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 33.35,
          "priceAvg30d": 8.06
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 33.11,
          "priceAvg30d": 8.05
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 33.1,
          "priceAvg30d": 7.79
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 33.07,
          "priceAvg30d": 8.2
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 33.06,
          "priceAvg30d": 10.32
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 33.08,
          "priceAvg30d": 12.39
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 33.11,
          "priceAvg30d": 15.15
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 33.35,
          "priceAvg30d": 19.07
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 35.48,
          "priceAvg30d": 21.94
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 35.83,
          "priceAvg30d": 27.87
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.83,
          "priceAvg30d": 32.69
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.0,
          "priceAvg30d": 35.44
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.43,
          "priceAvg30d": 34.79
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.01,
          "priceAvg30d": 35.2
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.01,
          "priceAvg30d": 33.37
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.36,
          "priceAvg30d": 32.96
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.83,
          "priceAvg30d": 31.44
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.83,
          "priceAvg30d": 29.42
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 35.48,
          "priceAvg30d": 28.27
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.19,
          "priceAvg30d": 27.13
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.13,
          "priceAvg30d": 26.42
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 35.83,
          "priceAvg30d": 27.24
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 33.35,
          "priceAvg30d": 27.49
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.0,
          "priceAvg30d": 26.52
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.97,
          "priceAvg30d": 25.66
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.5,
          "priceAvg30d": 23.98
        }
      ],
      "avg": 33.76,
      "max": 40.43,
      "maxBlock": 35,
      "min": 30.34,
      "minBlock": 4,
      "spread3h": 5.75,
      "spreadLowAvg": 32.59,
      "spreadHighAvg": 38.34,
      "avg30d": 21.94,
      "spread30dAvg": 22.79,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 35.83,
          "priceAvg30d": 25.22
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 34.8,
          "priceAvg30d": 24.55
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 31.9,
          "priceAvg30d": 24.75
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.34,
          "priceAvg30d": 24.55
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 31.31,
          "priceAvg30d": 24.52
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 33.08,
          "priceAvg30d": 24.59
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 33.14,
          "priceAvg30d": 24.97
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.25,
          "priceAvg30d": 25.19
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 33.35,
          "priceAvg30d": 25.31
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.2,
          "priceAvg30d": 25.5
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.9,
          "priceAvg30d": 25.64
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 33.35,
          "priceAvg30d": 25.77
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.1,
          "priceAvg30d": 25.37
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 31.2,
          "priceAvg30d": 24.22
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 32.19,
          "priceAvg30d": 23.34
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 33.2,
          "priceAvg30d": 22.74
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 31.69,
          "priceAvg30d": 21.5
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 32.23,
          "priceAvg30d": 21.6
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 33.18,
          "priceAvg30d": 21.26
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 33.16,
          "priceAvg30d": 20.69
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 33.13,
          "priceAvg30d": 19.12
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 33.35,
          "priceAvg30d": 18.71
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 35.83,
          "priceAvg30d": 18.99
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 40.01,
          "priceAvg30d": 19.05
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 35.83,
          "priceAvg30d": 17.69
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 35.83,
          "priceAvg30d": 18.8
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 40.43,
          "priceAvg30d": 19.9
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 40.52,
          "priceAvg30d": 23.07
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 40.52,
          "priceAvg30d": 24.77
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 35.83,
          "priceAvg30d": 27.4
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 35.48,
          "priceAvg30d": 26.71
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 35.83,
          "priceAvg30d": 30.51
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.83,
          "priceAvg30d": 33.69
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 40.01,
          "priceAvg30d": 35.97
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.43,
          "priceAvg30d": 34.79
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 40.01,
          "priceAvg30d": 35.2
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 40.01,
          "priceAvg30d": 33.37
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.36,
          "priceAvg30d": 32.96
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.83,
          "priceAvg30d": 31.44
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 35.83,
          "priceAvg30d": 29.42
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 35.48,
          "priceAvg30d": 28.27
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.19,
          "priceAvg30d": 27.13
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.13,
          "priceAvg30d": 26.42
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 35.83,
          "priceAvg30d": 27.24
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 39.76,
          "priceAvg30d": 27.82
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 35.83,
          "priceAvg30d": 27.03
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 35.83,
          "priceAvg30d": 26.54
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.5,
          "priceAvg30d": 25.04
        }
      ],
      "avg": 34.93,
      "max": 40.52,
      "maxBlock": 28,
      "min": 30.34,
      "minBlock": 4,
      "spread3h": 3.98,
      "spreadLowAvg": 33.34,
      "spreadHighAvg": 37.32,
      "avg30d": 25.59,
      "spread30dAvg": 14.85,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 28.21,
          "priceAvg30d": 24.58
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.62,
          "priceAvg30d": 23.81
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.49,
          "priceAvg30d": 23.74
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.49,
          "priceAvg30d": 23.55
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.59,
          "priceAvg30d": 23.57
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.81,
          "priceAvg30d": 23.79
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.39,
          "priceAvg30d": 24.27
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.51,
          "priceAvg30d": 24.53
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.87,
          "priceAvg30d": 24.71
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.29,
          "priceAvg30d": 25.01
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 29.5,
          "priceAvg30d": 25.21
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.29,
          "priceAvg30d": 25.31
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 28.51,
          "priceAvg30d": 24.94
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 27.03,
          "priceAvg30d": 23.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 26.19,
          "priceAvg30d": 22.21
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.99,
          "priceAvg30d": 20.62
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.29,
          "priceAvg30d": 19.21
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.39,
          "priceAvg30d": 19.81
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.43,
          "priceAvg30d": 19.89
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.43,
          "priceAvg30d": 19.1
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 26.43,
          "priceAvg30d": 17.58
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 26.59,
          "priceAvg30d": 17.28
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 26.69,
          "priceAvg30d": 17.2
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 26.89,
          "priceAvg30d": 17.05
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 27.27,
          "priceAvg30d": 14.49
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 28.06,
          "priceAvg30d": 15.2
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.49,
          "priceAvg30d": 18.43
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 28.82,
          "priceAvg30d": 21.84
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 29.5,
          "priceAvg30d": 23.17
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.53,
          "priceAvg30d": 24.91
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.0,
          "priceAvg30d": 25.92
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.02,
          "priceAvg30d": 29.82
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.45,
          "priceAvg30d": 32.62
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.02,
          "priceAvg30d": 34.64
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.29,
          "priceAvg30d": 33.67
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.59,
          "priceAvg30d": 33.81
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 33.02,
          "priceAvg30d": 32.48
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 33.0,
          "priceAvg30d": 31.73
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 33.0,
          "priceAvg30d": 30.63
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.58,
          "priceAvg30d": 28.75
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.3,
          "priceAvg30d": 27.7
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.97,
          "priceAvg30d": 26.65
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 31.49,
          "priceAvg30d": 26.1
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 29.21,
          "priceAvg30d": 26.33
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 29.09,
          "priceAvg30d": 27.18
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.37,
          "priceAvg30d": 26.5
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.99,
          "priceAvg30d": 26.6
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 27.66,
          "priceAvg30d": 25.12
        }
      ],
      "avg": 28.87,
      "max": 33.02,
      "maxBlock": 37,
      "min": 25.99,
      "minBlock": 16,
      "spread3h": 5.77,
      "spreadLowAvg": 26.81,
      "spreadHighAvg": 32.58,
      "avg30d": 24.48,
      "spread30dAvg": 17.09,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.74,
          "priceAvg30d": 13.95
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.54,
          "priceAvg30d": 13.77
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 14.99,
          "priceAvg30d": 13.4
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.98,
          "priceAvg30d": 12.79
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.98,
          "priceAvg30d": 13.49
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 21.94,
          "priceAvg30d": 14.76
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.09,
          "priceAvg30d": 15.54
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.54,
          "priceAvg30d": 16.9
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.94,
          "priceAvg30d": 16.91
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.18,
          "priceAvg30d": 18.47
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.0,
          "priceAvg30d": 18.07
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.52,
          "priceAvg30d": 17.8
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 21.94,
          "priceAvg30d": 17.57
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.61,
          "priceAvg30d": 15.78
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.76,
          "priceAvg30d": 14.18
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.09,
          "priceAvg30d": 12.84
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.09,
          "priceAvg30d": 14.62
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.42,
          "priceAvg30d": 15.81
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.49,
          "priceAvg30d": 17.57
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.75,
          "priceAvg30d": 17.05
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 21.94,
          "priceAvg30d": 15.74
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 21.94,
          "priceAvg30d": 15.43
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.52,
          "priceAvg30d": 15.64
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.51,
          "priceAvg30d": 15.74
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 24.51,
          "priceAvg30d": 11.85
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.52,
          "priceAvg30d": 12.2
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.61,
          "priceAvg30d": 15.65
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.61,
          "priceAvg30d": 19.11
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 20.09,
          "priceAvg30d": 18.99
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.09,
          "priceAvg30d": 20.61
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 19.98,
          "priceAvg30d": 21.35
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.09,
          "priceAvg30d": 24.62
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 20.61,
          "priceAvg30d": 25.16
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.64,
          "priceAvg30d": 26.99
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.94,
          "priceAvg30d": 25.44
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.52,
          "priceAvg30d": 25.73
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 24.51,
          "priceAvg30d": 24.45
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.52,
          "priceAvg30d": 24.72
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.94,
          "priceAvg30d": 23.83
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.54,
          "priceAvg30d": 22.14
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.94,
          "priceAvg30d": 22.43
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.64,
          "priceAvg30d": 21.41
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.64,
          "priceAvg30d": 20.95
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.25,
          "priceAvg30d": 20.11
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.51,
          "priceAvg30d": 19.52
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.51,
          "priceAvg30d": 17.52
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.25,
          "priceAvg30d": 17.48
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.74,
          "priceAvg30d": 14.14
        }
      ],
      "avg": 19.95,
      "max": 25.0,
      "maxBlock": 11,
      "min": 12.49,
      "minBlock": 19,
      "spread3h": 3.75,
      "spreadLowAvg": 18.37,
      "spreadHighAvg": 22.12,
      "avg30d": 18.13,
      "spread30dAvg": 13.82,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.74,
          "priceAvg30d": 13.66
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.54,
          "priceAvg30d": 13.66
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 14.99,
          "priceAvg30d": 13.31
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.98,
          "priceAvg30d": 12.7
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 19.98,
          "priceAvg30d": 12.92
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 21.94,
          "priceAvg30d": 14.4
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.09,
          "priceAvg30d": 15.2
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.54,
          "priceAvg30d": 16.47
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.94,
          "priceAvg30d": 16.44
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.18,
          "priceAvg30d": 17.83
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.0,
          "priceAvg30d": 17.5
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.52,
          "priceAvg30d": 17.33
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 21.94,
          "priceAvg30d": 17.5
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.61,
          "priceAvg30d": 15.67
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.76,
          "priceAvg30d": 13.73
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.09,
          "priceAvg30d": 12.24
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.09,
          "priceAvg30d": 14.44
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.42,
          "priceAvg30d": 15.59
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.49,
          "priceAvg30d": 17.24
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.75,
          "priceAvg30d": 16.71
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 21.94,
          "priceAvg30d": 15.38
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 21.94,
          "priceAvg30d": 15.06
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.52,
          "priceAvg30d": 15.32
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.51,
          "priceAvg30d": 15.43
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 24.51,
          "priceAvg30d": 11.5
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.52,
          "priceAvg30d": 11.88
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.61,
          "priceAvg30d": 15.4
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.61,
          "priceAvg30d": 19.11
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 20.09,
          "priceAvg30d": 18.57
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.09,
          "priceAvg30d": 20.44
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 19.98,
          "priceAvg30d": 21.17
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.09,
          "priceAvg30d": 24.58
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 20.61,
          "priceAvg30d": 25.16
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.64,
          "priceAvg30d": 26.99
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.94,
          "priceAvg30d": 25.44
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.52,
          "priceAvg30d": 25.39
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 24.51,
          "priceAvg30d": 24.45
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.52,
          "priceAvg30d": 24.28
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.94,
          "priceAvg30d": 23.49
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.54,
          "priceAvg30d": 21.96
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.94,
          "priceAvg30d": 22.24
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.64,
          "priceAvg30d": 21.25
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.64,
          "priceAvg30d": 20.8
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.25,
          "priceAvg30d": 19.86
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.51,
          "priceAvg30d": 19.28
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.51,
          "priceAvg30d": 17.27
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.25,
          "priceAvg30d": 17.31
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.74,
          "priceAvg30d": 14.01
        }
      ],
      "avg": 19.95,
      "max": 25.0,
      "maxBlock": 11,
      "min": 12.49,
      "minBlock": 19,
      "spread3h": 3.75,
      "spreadLowAvg": 18.37,
      "spreadHighAvg": 22.12,
      "avg30d": 17.87,
      "spread30dAvg": 13.73,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.74,
          "priceAvg30d": 13.09
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.54,
          "priceAvg30d": 13.66
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.54,
          "priceAvg30d": 13.15
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.54,
          "priceAvg30d": 12.53
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.42,
          "priceAvg30d": 12.42
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.42,
          "priceAvg30d": 13.48
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.49,
          "priceAvg30d": 14.16
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.54,
          "priceAvg30d": 15.63
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.94,
          "priceAvg30d": 16.25
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.18,
          "priceAvg30d": 17.61
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.0,
          "priceAvg30d": 17.5
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.52,
          "priceAvg30d": 17.29
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 21.94,
          "priceAvg30d": 17.5
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.61,
          "priceAvg30d": 15.51
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.76,
          "priceAvg30d": 11.71
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.42,
          "priceAvg30d": 10.14
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.09,
          "priceAvg30d": 10.1
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.42,
          "priceAvg30d": 10.59
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.49,
          "priceAvg30d": 9.71
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.75,
          "priceAvg30d": 8.96
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.75,
          "priceAvg30d": 8.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.43,
          "priceAvg30d": 8.0
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.43,
          "priceAvg30d": 8.15
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.76,
          "priceAvg30d": 8.39
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.43,
          "priceAvg30d": 6.81
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.75,
          "priceAvg30d": 6.72
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 13.42,
          "priceAvg30d": 8.88
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 13.42,
          "priceAvg30d": 9.87
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 18.83,
          "priceAvg30d": 11.36
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.0,
          "priceAvg30d": 12.53
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 19.87,
          "priceAvg30d": 13.36
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.09,
          "priceAvg30d": 15.94
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 20.61,
          "priceAvg30d": 19.31
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.64,
          "priceAvg30d": 23.44
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.94,
          "priceAvg30d": 23.58
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.52,
          "priceAvg30d": 24.3
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 24.51,
          "priceAvg30d": 22.95
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.52,
          "priceAvg30d": 22.6
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.94,
          "priceAvg30d": 22.6
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.54,
          "priceAvg30d": 21.26
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.94,
          "priceAvg30d": 21.34
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.64,
          "priceAvg30d": 20.36
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.64,
          "priceAvg30d": 19.95
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.25,
          "priceAvg30d": 19.01
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.51,
          "priceAvg30d": 18.51
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.51,
          "priceAvg30d": 16.47
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.25,
          "priceAvg30d": 16.55
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.74,
          "priceAvg30d": 13.05
        }
      ],
      "avg": 17.53,
      "max": 25.0,
      "maxBlock": 11,
      "min": 12.43,
      "minBlock": 22,
      "spread3h": 9.52,
      "spreadLowAvg": 12.6,
      "spreadHighAvg": 22.12,
      "avg30d": 14.9,
      "spread30dAvg": 14.86,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.2,
          "priceAvg30d": 10.95
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.2,
          "priceAvg30d": 11.15
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 8.15,
          "priceAvg30d": 10.96
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 8.14,
          "priceAvg30d": 10.56
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.16,
          "priceAvg30d": 10.34
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 8.16,
          "priceAvg30d": 10.39
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 5.01,
          "priceAvg30d": 10.55
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 3.0,
          "priceAvg30d": 11.79
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 5.0,
          "priceAvg30d": 12.07
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 5.01,
          "priceAvg30d": 13.19
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 7.0,
          "priceAvg30d": 13.24
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 5.0,
          "priceAvg30d": 13.2
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 2.9,
          "priceAvg30d": 13.13
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 0.01,
          "priceAvg30d": 10.91
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 5.0,
          "priceAvg30d": 8.93
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.07,
          "priceAvg30d": 8.45
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.09,
          "priceAvg30d": 8.41
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.42,
          "priceAvg30d": 9.03
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.49,
          "priceAvg30d": 8.13
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.75,
          "priceAvg30d": 7.5
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.75,
          "priceAvg30d": 7.43
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.43,
          "priceAvg30d": 6.57
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.43,
          "priceAvg30d": 6.44
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.76,
          "priceAvg30d": 6.67
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.43,
          "priceAvg30d": 5.9
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.75,
          "priceAvg30d": 6.08
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 13.42,
          "priceAvg30d": 7.87
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 13.42,
          "priceAvg30d": 8.51
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 18.83,
          "priceAvg30d": 9.82
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.0,
          "priceAvg30d": 10.72
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 19.87,
          "priceAvg30d": 10.72
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.38,
          "priceAvg30d": 11.61
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 5.0,
          "priceAvg30d": 11.84
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 8.14,
          "priceAvg30d": 15.23
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 8.17,
          "priceAvg30d": 15.89
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 8.24,
          "priceAvg30d": 16.82
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 8.25,
          "priceAvg30d": 16.36
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 8.21,
          "priceAvg30d": 15.93
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 8.18,
          "priceAvg30d": 14.92
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 8.15,
          "priceAvg30d": 13.59
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 8.14,
          "priceAvg30d": 14.13
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 7.3,
          "priceAvg30d": 13.52
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 8.14,
          "priceAvg30d": 13.64
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 5.01,
          "priceAvg30d": 12.86
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 5.0,
          "priceAvg30d": 12.49
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 3.0,
          "priceAvg30d": 11.61
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 4.0,
          "priceAvg30d": 12.0
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 2.9,
          "priceAvg30d": 9.72
        }
      ],
      "avg": 9.04,
      "max": 20.09,
      "maxBlock": 17,
      "min": 0.01,
      "minBlock": 14,
      "spread3h": 0.61,
      "spreadLowAvg": 8.84,
      "spreadHighAvg": 9.46,
      "avg30d": 11.08,
      "spread30dAvg": 11.86,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.74,
          "priceAvg30d": 13.09
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.54,
          "priceAvg30d": 13.45
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.54,
          "priceAvg30d": 12.81
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.54,
          "priceAvg30d": 12.31
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.42,
          "priceAvg30d": 12.16
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.42,
          "priceAvg30d": 13.26
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.49,
          "priceAvg30d": 14.16
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.54,
          "priceAvg30d": 15.63
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.94,
          "priceAvg30d": 16.25
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.18,
          "priceAvg30d": 17.61
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.0,
          "priceAvg30d": 17.5
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.52,
          "priceAvg30d": 17.29
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 21.94,
          "priceAvg30d": 17.5
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.61,
          "priceAvg30d": 15.51
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.76,
          "priceAvg30d": 11.71
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.42,
          "priceAvg30d": 10.14
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 13.42,
          "priceAvg30d": 9.76
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.42,
          "priceAvg30d": 9.08
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.49,
          "priceAvg30d": 8.06
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.75,
          "priceAvg30d": 7.08
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.75,
          "priceAvg30d": 6.96
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.43,
          "priceAvg30d": 6.44
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 12.43,
          "priceAvg30d": 6.35
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.76,
          "priceAvg30d": 6.14
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.43,
          "priceAvg30d": 5.84
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.75,
          "priceAvg30d": 5.87
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 13.42,
          "priceAvg30d": 6.84
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 13.42,
          "priceAvg30d": 8.06
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 18.83,
          "priceAvg30d": 9.24
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.0,
          "priceAvg30d": 11.25
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 19.87,
          "priceAvg30d": 12.93
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.09,
          "priceAvg30d": 15.35
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 20.61,
          "priceAvg30d": 19.31
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.64,
          "priceAvg30d": 23.44
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.94,
          "priceAvg30d": 23.58
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.52,
          "priceAvg30d": 24.3
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 24.51,
          "priceAvg30d": 22.95
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.52,
          "priceAvg30d": 22.6
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.94,
          "priceAvg30d": 22.6
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.54,
          "priceAvg30d": 21.26
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.94,
          "priceAvg30d": 21.34
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.64,
          "priceAvg30d": 20.36
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.64,
          "priceAvg30d": 19.95
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.25,
          "priceAvg30d": 19.01
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.51,
          "priceAvg30d": 18.51
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.51,
          "priceAvg30d": 16.47
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.25,
          "priceAvg30d": 16.55
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.74,
          "priceAvg30d": 13.05
        }
      ],
      "avg": 17.39,
      "max": 25.0,
      "maxBlock": 11,
      "min": 12.43,
      "minBlock": 22,
      "spread3h": 9.52,
      "spreadLowAvg": 12.6,
      "spreadHighAvg": 22.12,
      "avg30d": 14.39,
      "spread30dAvg": 15.55,
      "historyDays": 30
    }
  }
};
