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
  "targetDate": "2026-10-22",
  "fetchedAt": "2026-10-22T11:28:37+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 23.95,
        "priceAvg30d": 21.65
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 23.65,
        "priceAvg30d": 20.21
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 23.58,
        "priceAvg30d": 19.48
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 23.65,
        "priceAvg30d": 19.05
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 23.59,
        "priceAvg30d": 18.89
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 24.1,
        "priceAvg30d": 19.65
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 24.13,
        "priceAvg30d": 20.34
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 24.85,
        "priceAvg30d": 21.16
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 25.55,
        "priceAvg30d": 21.8
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 26.12,
        "priceAvg30d": 22.52
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 26.12,
        "priceAvg30d": 23.13
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 26.16,
        "priceAvg30d": 22.98
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 26.16,
        "priceAvg30d": 22.32
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 25.79,
        "priceAvg30d": 19.82
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 23.95,
        "priceAvg30d": 16.53
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 22.06,
        "priceAvg30d": 14.67
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 15.26,
        "priceAvg30d": 14.4
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 13.07,
        "priceAvg30d": 14.15
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 12.01,
        "priceAvg30d": 13.52
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 10.63,
        "priceAvg30d": 12.71
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 10.63,
        "priceAvg30d": 11.74
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 10.46,
        "priceAvg30d": 11.18
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 9.94,
        "priceAvg30d": 10.96
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 9.72,
        "priceAvg30d": 10.7
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 8.34,
        "priceAvg30d": 8.43
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 9.03,
        "priceAvg30d": 9.23
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 11.01,
        "priceAvg30d": 11.93
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 12.05,
        "priceAvg30d": 14.67
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 12.45,
        "priceAvg30d": 15.45
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 15.0,
        "priceAvg30d": 19.15
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 22.37,
        "priceAvg30d": 20.46
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 26.28,
        "priceAvg30d": 24.99
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 32.79,
        "priceAvg30d": 28.52
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 36.76,
        "priceAvg30d": 31.14
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 36.0,
        "priceAvg30d": 30.72
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 36.76,
        "priceAvg30d": 31.1
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 33.9,
        "priceAvg30d": 29.86
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 32.84,
        "priceAvg30d": 28.98
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 30.01,
        "priceAvg30d": 27.87
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 27.6,
        "priceAvg30d": 26.12
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 27.14,
        "priceAvg30d": 25.27
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 26.6,
        "priceAvg30d": 24.4
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 26.14,
        "priceAvg30d": 23.8
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 25.0,
        "priceAvg30d": 24.11
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 25.67,
        "priceAvg30d": 24.3
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 25.98,
        "priceAvg30d": 23.46
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 26.16,
        "priceAvg30d": 23.28
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 24.65,
        "priceAvg30d": 21.62
      }
    ],
    "avg": 22.41,
    "max": 36.76,
    "maxBlock": 34,
    "min": 8.34,
    "minBlock": 25,
    "spread3h": 20.98,
    "spreadLowAvg": 10.37,
    "spreadHighAvg": 31.35,
    "avg30d": 20.26,
    "spread30dAvg": 19.17,
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
          "price": 9.72,
          "priceAvg30d": 17.9
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.65,
          "priceAvg30d": 15.74
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.72,
          "priceAvg30d": 16.86
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.63,
          "priceAvg30d": 16.63
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.61,
          "priceAvg30d": 17.13
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.7,
          "priceAvg30d": 18.78
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.99,
          "priceAvg30d": 20.18
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.99,
          "priceAvg30d": 20.74
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.7,
          "priceAvg30d": 20.77
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.7,
          "priceAvg30d": 20.66
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.62,
          "priceAvg30d": 22.79
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.82,
          "priceAvg30d": 23.05
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.99,
          "priceAvg30d": 19.35
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.98,
          "priceAvg30d": 16.62
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.72,
          "priceAvg30d": 13.73
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.6,
          "priceAvg30d": 11.38
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.6,
          "priceAvg30d": 10.13
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 4.37,
          "priceAvg30d": 9.01
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 4.0,
          "priceAvg30d": 8.01
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.0,
          "priceAvg30d": 6.93
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.04,
          "priceAvg30d": 6.36
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 1.0,
          "priceAvg30d": 5.81
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 1.0,
          "priceAvg30d": 5.97
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.05,
          "priceAvg30d": 6.21
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.54
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.03,
          "priceAvg30d": 5.18
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.88,
          "priceAvg30d": 6.53
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 8.32
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.6,
          "priceAvg30d": 10.61
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.78,
          "priceAvg30d": 13.89
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.82,
          "priceAvg30d": 16.28
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.25,
          "priceAvg30d": 21.81
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 20.25,
          "priceAvg30d": 29.13
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.25,
          "priceAvg30d": 32.97
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.12,
          "priceAvg30d": 31.29
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.25,
          "priceAvg30d": 30.66
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.25,
          "priceAvg30d": 28.88
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.33,
          "priceAvg30d": 29.3
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.83,
          "priceAvg30d": 28.8
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.3,
          "priceAvg30d": 27.65
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.8,
          "priceAvg30d": 26.34
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.02,
          "priceAvg30d": 25.36
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 14.9,
          "priceAvg30d": 24.35
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 11.74,
          "priceAvg30d": 24.87
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 14.9,
          "priceAvg30d": 24.46
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.11,
          "priceAvg30d": 22.52
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.46,
          "priceAvg30d": 21.92
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.4,
          "priceAvg30d": 19.05
        }
      ],
      "avg": 12.79,
      "max": 35.83,
      "maxBlock": 39,
      "min": 0.01,
      "minBlock": 25,
      "spread3h": 25.75,
      "spreadLowAvg": 0.91,
      "spreadHighAvg": 26.66,
      "avg30d": 18.05,
      "spread30dAvg": 22.68,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.16,
          "priceAvg30d": 24.04
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.57,
          "priceAvg30d": 23.17
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.62,
          "priceAvg30d": 23.01
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.6,
          "priceAvg30d": 22.86
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.64,
          "priceAvg30d": 22.77
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.78,
          "priceAvg30d": 22.78
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 26.64,
          "priceAvg30d": 23.45
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.79,
          "priceAvg30d": 23.65
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.8,
          "priceAvg30d": 23.67
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.01,
          "priceAvg30d": 23.83
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.03,
          "priceAvg30d": 24.04
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.14,
          "priceAvg30d": 24.08
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.36,
          "priceAvg30d": 23.13
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.52,
          "priceAvg30d": 21.49
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.78,
          "priceAvg30d": 17.84
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.6,
          "priceAvg30d": 14.63
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.6,
          "priceAvg30d": 12.58
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 4.37,
          "priceAvg30d": 10.46
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 4.0,
          "priceAvg30d": 9.83
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 8.55
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 7.68
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 1.0,
          "priceAvg30d": 7.16
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 1.0,
          "priceAvg30d": 7.11
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.05,
          "priceAvg30d": 7.1
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.74
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.03,
          "priceAvg30d": 7.21
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.88,
          "priceAvg30d": 9.33
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 11.25
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.6,
          "priceAvg30d": 13.55
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.78,
          "priceAvg30d": 17.12
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 15.0,
          "priceAvg30d": 20.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.45,
          "priceAvg30d": 25.72
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 36.53,
          "priceAvg30d": 31.06
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.25,
          "priceAvg30d": 34.87
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.25,
          "priceAvg30d": 34.22
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.25,
          "priceAvg30d": 34.53
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.25,
          "priceAvg30d": 32.86
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.76,
          "priceAvg30d": 32.47
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.83,
          "priceAvg30d": 31.17
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.3,
          "priceAvg30d": 29.03
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.8,
          "priceAvg30d": 27.86
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.02,
          "priceAvg30d": 26.91
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 29.02,
          "priceAvg30d": 26.25
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.03,
          "priceAvg30d": 27.49
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.59,
          "priceAvg30d": 27.13
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.43,
          "priceAvg30d": 26.24
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.46,
          "priceAvg30d": 25.33
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.61,
          "priceAvg30d": 23.51
        }
      ],
      "avg": 20.89,
      "max": 37.25,
      "maxBlock": 34,
      "min": 0.01,
      "minBlock": 25,
      "spread3h": 31.71,
      "spreadLowAvg": 0.91,
      "spreadHighAvg": 32.62,
      "avg30d": 21.06,
      "spread30dAvg": 23.15,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.16,
          "priceAvg30d": 25.08
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.57,
          "priceAvg30d": 24.31
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.62,
          "priceAvg30d": 24.16
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.6,
          "priceAvg30d": 24.11
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.64,
          "priceAvg30d": 24.06
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.78,
          "priceAvg30d": 24.24
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 26.64,
          "priceAvg30d": 24.67
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.79,
          "priceAvg30d": 24.93
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.8,
          "priceAvg30d": 25.05
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.01,
          "priceAvg30d": 25.27
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.03,
          "priceAvg30d": 25.38
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.14,
          "priceAvg30d": 25.42
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.36,
          "priceAvg30d": 24.97
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 26.76,
          "priceAvg30d": 23.83
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 26.42,
          "priceAvg30d": 23.0
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.29,
          "priceAvg30d": 22.39
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 26.16,
          "priceAvg30d": 21.23
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 26.16,
          "priceAvg30d": 21.38
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.16,
          "priceAvg30d": 20.93
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.04,
          "priceAvg30d": 20.33
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 26.16,
          "priceAvg30d": 18.41
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 26.16,
          "priceAvg30d": 17.98
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 26.16,
          "priceAvg30d": 18.11
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.69,
          "priceAvg30d": 18.14
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 25.65,
          "priceAvg30d": 16.68
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 25.01,
          "priceAvg30d": 18.07
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 25.3,
          "priceAvg30d": 19.43
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.98,
          "priceAvg30d": 22.63
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.93,
          "priceAvg30d": 24.52
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.46,
          "priceAvg30d": 27.22
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.38,
          "priceAvg30d": 26.36
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 35.83,
          "priceAvg30d": 30.12
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 36.53,
          "priceAvg30d": 34.0
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.25,
          "priceAvg30d": 36.76
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.25,
          "priceAvg30d": 35.44
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 37.25,
          "priceAvg30d": 35.87
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.25,
          "priceAvg30d": 34.21
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.76,
          "priceAvg30d": 33.78
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.83,
          "priceAvg30d": 32.17
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.3,
          "priceAvg30d": 29.89
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.8,
          "priceAvg30d": 28.31
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.02,
          "priceAvg30d": 27.33
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 29.02,
          "priceAvg30d": 26.5
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.03,
          "priceAvg30d": 27.6
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.59,
          "priceAvg30d": 28.06
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.43,
          "priceAvg30d": 27.25
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.46,
          "priceAvg30d": 26.85
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.61,
          "priceAvg30d": 25.15
        }
      ],
      "avg": 28.55,
      "max": 37.25,
      "maxBlock": 34,
      "min": 24.98,
      "minBlock": 28,
      "spread3h": 9.29,
      "spreadLowAvg": 25.95,
      "spreadHighAvg": 35.25,
      "avg30d": 25.45,
      "spread30dAvg": 15.82,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.7,
          "priceAvg30d": 24.49
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.57,
          "priceAvg30d": 23.61
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.62,
          "priceAvg30d": 23.48
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 26.6,
          "priceAvg30d": 23.23
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 26.64,
          "priceAvg30d": 23.25
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 26.78,
          "priceAvg30d": 23.48
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 26.64,
          "priceAvg30d": 23.96
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.79,
          "priceAvg30d": 24.27
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.8,
          "priceAvg30d": 24.45
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.01,
          "priceAvg30d": 24.78
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.03,
          "priceAvg30d": 24.95
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.14,
          "priceAvg30d": 24.99
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.36,
          "priceAvg30d": 24.58
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 26.76,
          "priceAvg30d": 23.27
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 26.42,
          "priceAvg30d": 21.79
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.99,
          "priceAvg30d": 20.18
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 23.77,
          "priceAvg30d": 18.92
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.77,
          "priceAvg30d": 19.57
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 21.9,
          "priceAvg30d": 19.58
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 18.99,
          "priceAvg30d": 18.74
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 15.0,
          "priceAvg30d": 17.2
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.1,
          "priceAvg30d": 16.91
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.35,
          "priceAvg30d": 16.8
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.83,
          "priceAvg30d": 16.67
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.28,
          "priceAvg30d": 14.03
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.28,
          "priceAvg30d": 14.8
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.95,
          "priceAvg30d": 17.93
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.98,
          "priceAvg30d": 21.22
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.59,
          "priceAvg30d": 22.6
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.46,
          "priceAvg30d": 24.39
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.38,
          "priceAvg30d": 25.5
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.3,
          "priceAvg30d": 29.23
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.3,
          "priceAvg30d": 32.27
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.3,
          "priceAvg30d": 34.57
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.03,
          "priceAvg30d": 33.93
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.31,
          "priceAvg30d": 34.12
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.76,
          "priceAvg30d": 32.71
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.98,
          "priceAvg30d": 31.66
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.9,
          "priceAvg30d": 30.58
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.3,
          "priceAvg30d": 29.14
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.01,
          "priceAvg30d": 27.96
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.02,
          "priceAvg30d": 26.97
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 29.02,
          "priceAvg30d": 26.31
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.03,
          "priceAvg30d": 26.77
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.59,
          "priceAvg30d": 27.54
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.43,
          "priceAvg30d": 26.76
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.46,
          "priceAvg30d": 26.93
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 26.61,
          "priceAvg30d": 25.24
        }
      ],
      "avg": 26.79,
      "max": 38.31,
      "maxBlock": 36,
      "min": 12.28,
      "minBlock": 25,
      "spread3h": 20.63,
      "spreadLowAvg": 16.91,
      "spreadHighAvg": 37.54,
      "avg30d": 24.3,
      "spread30dAvg": 17.41,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.7,
          "priceAvg30d": 13.05
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.76,
          "priceAvg30d": 12.91
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.76,
          "priceAvg30d": 12.81
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.76,
          "priceAvg30d": 12.31
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 17.17,
          "priceAvg30d": 12.96
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.87,
          "priceAvg30d": 14.04
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 21.7,
          "priceAvg30d": 14.77
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.35,
          "priceAvg30d": 16.12
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.25,
          "priceAvg30d": 15.88
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.01,
          "priceAvg30d": 17.32
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.03,
          "priceAvg30d": 17.06
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.14,
          "priceAvg30d": 16.9
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.36,
          "priceAvg30d": 17.0
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.25,
          "priceAvg30d": 14.9
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 26.42,
          "priceAvg30d": 13.12
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.99,
          "priceAvg30d": 11.68
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 23.77,
          "priceAvg30d": 13.68
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.77,
          "priceAvg30d": 14.78
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 21.9,
          "priceAvg30d": 16.36
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 18.99,
          "priceAvg30d": 15.79
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 15.0,
          "priceAvg30d": 14.62
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.1,
          "priceAvg30d": 14.38
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.35,
          "priceAvg30d": 14.42
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.83,
          "priceAvg30d": 14.42
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.28,
          "priceAvg30d": 10.81
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.28,
          "priceAvg30d": 11.28
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.95,
          "priceAvg30d": 14.3
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.98,
          "priceAvg30d": 17.65
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.59,
          "priceAvg30d": 17.49
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.46,
          "priceAvg30d": 19.13
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.38,
          "priceAvg30d": 19.87
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.3,
          "priceAvg30d": 22.23
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.3,
          "priceAvg30d": 23.2
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.3,
          "priceAvg30d": 24.97
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.03,
          "priceAvg30d": 23.32
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.31,
          "priceAvg30d": 24.21
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.76,
          "priceAvg30d": 22.7
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.98,
          "priceAvg30d": 23.08
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.9,
          "priceAvg30d": 21.91
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.3,
          "priceAvg30d": 20.48
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.01,
          "priceAvg30d": 20.85
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.02,
          "priceAvg30d": 19.86
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 29.02,
          "priceAvg30d": 19.61
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.03,
          "priceAvg30d": 18.79
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.35,
          "priceAvg30d": 18.47
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.9,
          "priceAvg30d": 16.69
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.7,
          "priceAvg30d": 16.31
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 19.83,
          "priceAvg30d": 13.2
        }
      ],
      "avg": 25.13,
      "max": 38.31,
      "maxBlock": 36,
      "min": 12.28,
      "minBlock": 25,
      "spread3h": 20.63,
      "spreadLowAvg": 16.91,
      "spreadHighAvg": 37.54,
      "avg30d": 16.91,
      "spread30dAvg": 12.57,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 21.7,
          "priceAvg30d": 12.77
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.76,
          "priceAvg30d": 12.79
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.76,
          "priceAvg30d": 12.72
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.76,
          "priceAvg30d": 12.22
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 17.17,
          "priceAvg30d": 12.39
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.87,
          "priceAvg30d": 13.68
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 21.7,
          "priceAvg30d": 14.42
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.35,
          "priceAvg30d": 15.69
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.25,
          "priceAvg30d": 15.42
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.01,
          "priceAvg30d": 16.67
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.03,
          "priceAvg30d": 16.49
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.14,
          "priceAvg30d": 16.42
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.36,
          "priceAvg30d": 16.93
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.25,
          "priceAvg30d": 14.79
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 26.42,
          "priceAvg30d": 12.67
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.99,
          "priceAvg30d": 10.92
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 23.77,
          "priceAvg30d": 13.01
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.77,
          "priceAvg30d": 14.06
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 21.9,
          "priceAvg30d": 15.81
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 18.99,
          "priceAvg30d": 15.36
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 15.0,
          "priceAvg30d": 14.2
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 14.1,
          "priceAvg30d": 14.0
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.35,
          "priceAvg30d": 14.08
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 12.83,
          "priceAvg30d": 14.03
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.28,
          "priceAvg30d": 10.38
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 12.28,
          "priceAvg30d": 10.88
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.95,
          "priceAvg30d": 13.96
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 24.98,
          "priceAvg30d": 17.55
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 25.59,
          "priceAvg30d": 16.91
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.46,
          "priceAvg30d": 18.93
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.38,
          "priceAvg30d": 19.53
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 38.3,
          "priceAvg30d": 22.12
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 38.3,
          "priceAvg30d": 23.2
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.3,
          "priceAvg30d": 24.97
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.03,
          "priceAvg30d": 23.32
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.31,
          "priceAvg30d": 23.87
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 37.76,
          "priceAvg30d": 22.7
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.98,
          "priceAvg30d": 22.64
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.9,
          "priceAvg30d": 21.57
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.3,
          "priceAvg30d": 20.3
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.01,
          "priceAvg30d": 20.66
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.02,
          "priceAvg30d": 19.7
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 29.02,
          "priceAvg30d": 19.46
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.03,
          "priceAvg30d": 18.54
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.35,
          "priceAvg30d": 18.24
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.9,
          "priceAvg30d": 16.44
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.7,
          "priceAvg30d": 16.13
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 19.83,
          "priceAvg30d": 13.07
        }
      ],
      "avg": 25.13,
      "max": 38.31,
      "maxBlock": 36,
      "min": 12.28,
      "minBlock": 25,
      "spread3h": 20.63,
      "spreadLowAvg": 16.91,
      "spreadHighAvg": 37.54,
      "avg30d": 16.6,
      "spread30dAvg": 12.69,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.25,
          "priceAvg30d": 12.64
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.76,
          "priceAvg30d": 12.79
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.76,
          "priceAvg30d": 12.56
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.76,
          "priceAvg30d": 12.04
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 17.17,
          "priceAvg30d": 11.9
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.25,
          "priceAvg30d": 13.15
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.95,
          "priceAvg30d": 13.62
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.35,
          "priceAvg30d": 15.02
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.25,
          "priceAvg30d": 15.23
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.01,
          "priceAvg30d": 16.46
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.03,
          "priceAvg30d": 16.49
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.14,
          "priceAvg30d": 16.39
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.36,
          "priceAvg30d": 16.93
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.25,
          "priceAvg30d": 14.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.06,
          "priceAvg30d": 11.27
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.81,
          "priceAvg30d": 9.48
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.23,
          "priceAvg30d": 9.43
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.23,
          "priceAvg30d": 9.86
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.91,
          "priceAvg30d": 8.8
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 3.01,
          "priceAvg30d": 8.04
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 8.22
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 7.51
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 7.62
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 7.76
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.17
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.1
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 8.25
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.0,
          "priceAvg30d": 9.15
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.23,
          "priceAvg30d": 10.14
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.81,
          "priceAvg30d": 10.94
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.46,
          "priceAvg30d": 12.23
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.06,
          "priceAvg30d": 14.7
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.75,
          "priceAvg30d": 17.83
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 24.52,
          "priceAvg30d": 21.57
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 24.52,
          "priceAvg30d": 22.3
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 31.1,
          "priceAvg30d": 23.31
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 33.08,
          "priceAvg30d": 21.64
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 30.0,
          "priceAvg30d": 21.59
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.9,
          "priceAvg30d": 20.94
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.3,
          "priceAvg30d": 19.95
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.0,
          "priceAvg30d": 20.2
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.52,
          "priceAvg30d": 19.29
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.52,
          "priceAvg30d": 18.99
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.52,
          "priceAvg30d": 18.01
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.35,
          "priceAvg30d": 17.71
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.9,
          "priceAvg30d": 15.99
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.7,
          "priceAvg30d": 15.7
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 19.83,
          "priceAvg30d": 12.43
        }
      ],
      "avg": 17.04,
      "max": 35.9,
      "maxBlock": 39,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 26.3,
      "spreadLowAvg": 3.7,
      "spreadHighAvg": 30.0,
      "avg30d": 14.02,
      "spread30dAvg": 13.89,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.33,
          "priceAvg30d": 10.99
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.76,
          "priceAvg30d": 10.57
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.76,
          "priceAvg30d": 10.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 19.76,
          "priceAvg30d": 10.37
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 17.17,
          "priceAvg30d": 10.13
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.99,
          "priceAvg30d": 10.67
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 8.15,
          "priceAvg30d": 10.88
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 8.2,
          "priceAvg30d": 12.1
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.22,
          "priceAvg30d": 12.05
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.33,
          "priceAvg30d": 13.33
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 8.37,
          "priceAvg30d": 13.25
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 8.37,
          "priceAvg30d": 13.11
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 8.37,
          "priceAvg30d": 13.34
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 8.26,
          "priceAvg30d": 11.06
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 7.8,
          "priceAvg30d": 9.04
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.15,
          "priceAvg30d": 8.27
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.16,
          "priceAvg30d": 8.1
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 8.75
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.02,
          "priceAvg30d": 7.64
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 6.68
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 6.87
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.35
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 6.08
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.38
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.54
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.56
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 7.35
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 8.0
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 8.94
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 2.5,
          "priceAvg30d": 9.39
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 0.02,
          "priceAvg30d": 9.98
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 0.02,
          "priceAvg30d": 11.68
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.17,
          "priceAvg30d": 11.69
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 8.35,
          "priceAvg30d": 15.18
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 12.06,
          "priceAvg30d": 15.89
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 13.07,
          "priceAvg30d": 17.21
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 13.07,
          "priceAvg30d": 16.79
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 13.07,
          "priceAvg30d": 16.28
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.06,
          "priceAvg30d": 15.16
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 8.33,
          "priceAvg30d": 13.9
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 8.37,
          "priceAvg30d": 14.34
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 8.49,
          "priceAvg30d": 13.48
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 8.46,
          "priceAvg30d": 13.71
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 8.51,
          "priceAvg30d": 12.84
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 8.47,
          "priceAvg30d": 12.78
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 8.42,
          "priceAvg30d": 11.89
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 8.26,
          "priceAvg30d": 12.12
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.22,
          "priceAvg30d": 9.88
        }
      ],
      "avg": 7.2,
      "max": 19.76,
      "maxBlock": 2,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 11.19,
      "spreadLowAvg": 1.79,
      "spreadHighAvg": 12.97,
      "avg30d": 10.96,
      "spread30dAvg": 11.74,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.25,
          "priceAvg30d": 12.64
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.76,
          "priceAvg30d": 12.79
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.76,
          "priceAvg30d": 12.35
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 18.42,
          "priceAvg30d": 11.91
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 17.17,
          "priceAvg30d": 11.76
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.25,
          "priceAvg30d": 12.93
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.95,
          "priceAvg30d": 13.62
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.35,
          "priceAvg30d": 15.02
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.25,
          "priceAvg30d": 15.23
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 27.01,
          "priceAvg30d": 16.46
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.03,
          "priceAvg30d": 16.49
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 27.14,
          "priceAvg30d": 16.39
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 27.36,
          "priceAvg30d": 16.93
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.25,
          "priceAvg30d": 14.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.06,
          "priceAvg30d": 11.27
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.81,
          "priceAvg30d": 9.48
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.23,
          "priceAvg30d": 9.09
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.23,
          "priceAvg30d": 8.28
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.91,
          "priceAvg30d": 7.27
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 3.01,
          "priceAvg30d": 6.46
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 6.55
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.03
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 5.91
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 5.68
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.37
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.42
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 6.38
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.0,
          "priceAvg30d": 7.41
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.23,
          "priceAvg30d": 8.11
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.81,
          "priceAvg30d": 9.84
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.46,
          "priceAvg30d": 11.8
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.06,
          "priceAvg30d": 14.2
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.75,
          "priceAvg30d": 17.83
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 24.52,
          "priceAvg30d": 21.57
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 24.52,
          "priceAvg30d": 22.3
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 31.1,
          "priceAvg30d": 23.31
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 33.08,
          "priceAvg30d": 21.64
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 30.0,
          "priceAvg30d": 21.59
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 35.9,
          "priceAvg30d": 20.94
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.3,
          "priceAvg30d": 19.95
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 29.0,
          "priceAvg30d": 20.2
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 24.52,
          "priceAvg30d": 19.29
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.52,
          "priceAvg30d": 18.99
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.52,
          "priceAvg30d": 18.01
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.35,
          "priceAvg30d": 17.71
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.9,
          "priceAvg30d": 15.99
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.7,
          "priceAvg30d": 15.7
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 19.83,
          "priceAvg30d": 12.43
        }
      ],
      "avg": 17.01,
      "max": 35.9,
      "maxBlock": 39,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 26.3,
      "spreadLowAvg": 3.7,
      "spreadHighAvg": 30.0,
      "avg30d": 13.57,
      "spread30dAvg": 14.52,
      "historyDays": 30
    }
  }
};
