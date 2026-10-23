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
  "targetDate": "2026-10-23",
  "fetchedAt": "2026-10-23T11:33:18+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 25.03,
        "priceAvg30d": 21.75
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 25.03,
        "priceAvg30d": 20.35
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 24.72,
        "priceAvg30d": 19.62
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 24.78,
        "priceAvg30d": 19.2
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 25.03,
        "priceAvg30d": 19.17
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 25.24,
        "priceAvg30d": 19.89
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 25.19,
        "priceAvg30d": 20.52
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 26.16,
        "priceAvg30d": 21.33
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 26.52,
        "priceAvg30d": 21.98
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 26.51,
        "priceAvg30d": 22.67
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 26.64,
        "priceAvg30d": 23.24
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 26.87,
        "priceAvg30d": 23.13
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 27.1,
        "priceAvg30d": 22.55
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 26.33,
        "priceAvg30d": 20.21
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 25.0,
        "priceAvg30d": 16.96
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 22.34,
        "priceAvg30d": 15.1
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 20.39,
        "priceAvg30d": 14.57
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 19.07,
        "priceAvg30d": 14.27
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 15.0,
        "priceAvg30d": 13.6
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 12.64,
        "priceAvg30d": 12.83
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 11.9,
        "priceAvg30d": 12.01
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 12.18,
        "priceAvg30d": 11.48
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 12.35,
        "priceAvg30d": 11.25
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 14.03,
        "priceAvg30d": 11.0
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 11.97,
        "priceAvg30d": 8.71
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 12.73,
        "priceAvg30d": 9.5
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 21.7,
        "priceAvg30d": 12.21
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 23.9,
        "priceAvg30d": 14.89
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 25.11,
        "priceAvg30d": 15.76
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 26.75,
        "priceAvg30d": 19.3
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 29.28,
        "priceAvg30d": 20.8
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 35.68,
        "priceAvg30d": 25.3
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 37.76,
        "priceAvg30d": 28.86
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 37.99,
        "priceAvg30d": 31.51
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 37.76,
        "priceAvg30d": 31.04
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 37.67,
        "priceAvg30d": 31.38
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 35.68,
        "priceAvg30d": 30.04
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 35.68,
        "priceAvg30d": 29.14
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 35.0,
        "priceAvg30d": 27.94
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 29.9,
        "priceAvg30d": 26.16
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 27.9,
        "priceAvg30d": 25.34
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 26.64,
        "priceAvg30d": 24.47
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 26.36,
        "priceAvg30d": 23.85
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 25.6,
        "priceAvg30d": 24.14
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 28.13,
        "priceAvg30d": 24.37
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 27.32,
        "priceAvg30d": 23.57
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 27.3,
        "priceAvg30d": 23.4
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 26.25,
        "priceAvg30d": 21.78
      }
    ],
    "avg": 25.34,
    "max": 37.99,
    "maxBlock": 34,
    "min": 11.9,
    "minBlock": 21,
    "spread3h": 21.43,
    "spreadLowAvg": 14.21,
    "spreadHighAvg": 35.64,
    "avg30d": 20.46,
    "spread30dAvg": 19.06,
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
          "price": 17.96,
          "priceAvg30d": 17.87
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.96,
          "priceAvg30d": 15.77
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.7,
          "priceAvg30d": 16.86
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.66,
          "priceAvg30d": 16.66
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.95,
          "priceAvg30d": 17.17
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.4,
          "priceAvg30d": 18.79
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 21.1,
          "priceAvg30d": 20.23
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.12,
          "priceAvg30d": 20.79
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.12,
          "priceAvg30d": 20.81
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.25,
          "priceAvg30d": 20.67
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.25,
          "priceAvg30d": 22.82
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.25,
          "priceAvg30d": 23.09
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.25,
          "priceAvg30d": 19.4
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.27,
          "priceAvg30d": 16.67
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 14.81,
          "priceAvg30d": 13.83
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.93,
          "priceAvg30d": 11.67
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.74,
          "priceAvg30d": 10.45
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.61,
          "priceAvg30d": 9.16
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.44,
          "priceAvg30d": 8.15
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.85,
          "priceAvg30d": 7.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 7.86,
          "priceAvg30d": 6.36
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 7.86,
          "priceAvg30d": 5.84
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.13,
          "priceAvg30d": 6.01
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.13,
          "priceAvg30d": 6.22
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.05,
          "priceAvg30d": 5.54
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 5.85,
          "priceAvg30d": 5.18
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.13,
          "priceAvg30d": 6.56
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.72,
          "priceAvg30d": 8.41
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.72,
          "priceAvg30d": 10.93
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.4,
          "priceAvg30d": 14.21
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.72,
          "priceAvg30d": 16.61
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.25,
          "priceAvg30d": 22.48
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 20.25,
          "priceAvg30d": 29.77
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.25,
          "priceAvg30d": 33.32
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.25,
          "priceAvg30d": 31.74
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.76,
          "priceAvg30d": 31.01
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.0,
          "priceAvg30d": 29.23
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.99,
          "priceAvg30d": 29.83
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.53,
          "priceAvg30d": 29.41
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 31.9,
          "priceAvg30d": 28.06
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 30.11,
          "priceAvg30d": 26.69
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.36,
          "priceAvg30d": 25.68
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 10.86,
          "priceAvg30d": 23.98
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.5,
          "priceAvg30d": 24.29
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 10.5,
          "priceAvg30d": 24.32
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.7,
          "priceAvg30d": 22.46
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.0,
          "priceAvg30d": 22.4
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.0,
          "priceAvg30d": 19.51
        }
      ],
      "avg": 16.51,
      "max": 36.99,
      "maxBlock": 38,
      "min": 5.05,
      "minBlock": 25,
      "spread3h": 23.12,
      "spreadLowAvg": 7.97,
      "spreadHighAvg": 31.09,
      "avg30d": 18.21,
      "spread30dAvg": 22.92,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.3,
          "priceAvg30d": 24.6
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.81,
          "priceAvg30d": 23.73
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.77,
          "priceAvg30d": 23.58
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.8,
          "priceAvg30d": 23.43
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.81,
          "priceAvg30d": 23.37
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.0,
          "priceAvg30d": 23.36
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.77,
          "priceAvg30d": 24.02
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.0,
          "priceAvg30d": 24.23
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.12,
          "priceAvg30d": 24.25
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.12,
          "priceAvg30d": 24.42
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.23,
          "priceAvg30d": 24.62
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.81,
          "priceAvg30d": 24.66
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.18,
          "priceAvg30d": 23.72
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 28.01,
          "priceAvg30d": 21.92
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 25.0,
          "priceAvg30d": 17.95
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.93,
          "priceAvg30d": 14.92
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.74,
          "priceAvg30d": 12.9
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.61,
          "priceAvg30d": 10.61
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.44,
          "priceAvg30d": 9.96
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.85,
          "priceAvg30d": 8.63
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 7.86,
          "priceAvg30d": 7.77
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 7.86,
          "priceAvg30d": 7.19
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.13,
          "priceAvg30d": 7.15
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.13,
          "priceAvg30d": 7.1
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 5.05,
          "priceAvg30d": 6.74
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 5.85,
          "priceAvg30d": 7.21
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.13,
          "priceAvg30d": 9.36
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.38,
          "priceAvg30d": 11.33
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 14.76,
          "priceAvg30d": 13.87
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 25.01,
          "priceAvg30d": 17.44
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 28.27,
          "priceAvg30d": 20.52
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.4,
          "priceAvg30d": 26.8
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 36.3,
          "priceAvg30d": 32.24
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.67,
          "priceAvg30d": 35.8
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.21,
          "priceAvg30d": 35.15
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.76,
          "priceAvg30d": 35.45
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.0,
          "priceAvg30d": 33.78
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.99,
          "priceAvg30d": 33.34
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.0,
          "priceAvg30d": 31.78
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.8,
          "priceAvg30d": 29.44
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.54,
          "priceAvg30d": 28.21
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.18,
          "priceAvg30d": 27.23
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.21,
          "priceAvg30d": 26.36
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.13,
          "priceAvg30d": 27.42
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 35.68,
          "priceAvg30d": 27.45
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.67,
          "priceAvg30d": 26.49
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.18,
          "priceAvg30d": 25.8
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.0,
          "priceAvg30d": 24.05
        }
      ],
      "avg": 24.28,
      "max": 37.67,
      "maxBlock": 34,
      "min": 5.05,
      "minBlock": 25,
      "spread3h": 26.58,
      "spreadLowAvg": 7.91,
      "spreadHighAvg": 34.49,
      "avg30d": 21.49,
      "spread30dAvg": 23.59,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.3,
          "priceAvg30d": 25.08
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.81,
          "priceAvg30d": 24.33
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.77,
          "priceAvg30d": 24.21
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.8,
          "priceAvg30d": 24.16
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.81,
          "priceAvg30d": 24.13
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.0,
          "priceAvg30d": 24.31
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.77,
          "priceAvg30d": 24.72
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.0,
          "priceAvg30d": 24.99
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.12,
          "priceAvg30d": 25.11
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.12,
          "priceAvg30d": 25.34
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.23,
          "priceAvg30d": 25.44
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.81,
          "priceAvg30d": 25.48
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.18,
          "priceAvg30d": 25.06
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 28.01,
          "priceAvg30d": 23.96
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 27.11,
          "priceAvg30d": 23.12
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.33,
          "priceAvg30d": 22.54
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.03,
          "priceAvg30d": 21.37
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.03,
          "priceAvg30d": 21.52
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.98,
          "priceAvg30d": 21.08
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 24.49,
          "priceAvg30d": 20.54
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 23.9,
          "priceAvg30d": 18.88
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.08,
          "priceAvg30d": 18.46
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 24.25,
          "priceAvg30d": 18.58
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.34,
          "priceAvg30d": 18.55
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 23.56,
          "priceAvg30d": 17.06
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 24.34,
          "priceAvg30d": 18.4
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 25.36,
          "priceAvg30d": 19.52
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 25.95,
          "priceAvg30d": 22.66
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 26.4,
          "priceAvg30d": 24.56
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.64,
          "priceAvg30d": 27.23
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 28.27,
          "priceAvg30d": 26.32
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.4,
          "priceAvg30d": 30.23
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 36.3,
          "priceAvg30d": 33.95
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.67,
          "priceAvg30d": 36.33
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 37.21,
          "priceAvg30d": 35.15
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 36.76,
          "priceAvg30d": 35.45
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 36.0,
          "priceAvg30d": 33.78
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 36.99,
          "priceAvg30d": 33.34
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 36.0,
          "priceAvg30d": 31.78
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.8,
          "priceAvg30d": 29.44
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.54,
          "priceAvg30d": 28.21
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.18,
          "priceAvg30d": 27.23
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.21,
          "priceAvg30d": 26.36
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.13,
          "priceAvg30d": 27.42
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 35.68,
          "priceAvg30d": 27.91
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.67,
          "priceAvg30d": 27.08
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.18,
          "priceAvg30d": 26.68
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.0,
          "priceAvg30d": 25.11
        }
      ],
      "avg": 29.01,
      "max": 37.67,
      "maxBlock": 34,
      "min": 23.56,
      "minBlock": 25,
      "spread3h": 9.77,
      "spreadLowAvg": 24.72,
      "spreadHighAvg": 34.49,
      "avg30d": 25.46,
      "spread30dAvg": 15.28,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.3,
          "priceAvg30d": 24.47
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 27.81,
          "priceAvg30d": 23.63
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 27.77,
          "priceAvg30d": 23.53
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 27.8,
          "priceAvg30d": 23.29
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 27.81,
          "priceAvg30d": 23.32
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.0,
          "priceAvg30d": 23.55
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 27.77,
          "priceAvg30d": 24.02
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 28.0,
          "priceAvg30d": 24.33
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 28.12,
          "priceAvg30d": 24.51
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 28.12,
          "priceAvg30d": 24.85
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 28.23,
          "priceAvg30d": 25.02
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.81,
          "priceAvg30d": 25.05
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 30.18,
          "priceAvg30d": 24.66
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 28.01,
          "priceAvg30d": 23.4
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 27.11,
          "priceAvg30d": 22.01
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 26.33,
          "priceAvg30d": 20.41
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 25.03,
          "priceAvg30d": 19.08
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.03,
          "priceAvg30d": 19.73
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.98,
          "priceAvg30d": 19.71
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 24.49,
          "priceAvg30d": 18.91
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 23.9,
          "priceAvg30d": 17.3
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.08,
          "priceAvg30d": 16.99
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 24.25,
          "priceAvg30d": 16.84
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.34,
          "priceAvg30d": 16.66
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 23.56,
          "priceAvg30d": 14.02
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 24.34,
          "priceAvg30d": 14.74
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.97,
          "priceAvg30d": 17.98
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 36.99,
          "priceAvg30d": 21.25
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 37.3,
          "priceAvg30d": 22.63
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 37.59,
          "priceAvg30d": 24.4
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 37.76,
          "priceAvg30d": 25.47
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.57,
          "priceAvg30d": 29.42
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 39.0,
          "priceAvg30d": 32.39
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.59,
          "priceAvg30d": 34.57
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.57,
          "priceAvg30d": 33.92
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.61,
          "priceAvg30d": 34.12
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.31,
          "priceAvg30d": 32.82
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.01,
          "priceAvg30d": 31.73
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.76,
          "priceAvg30d": 30.62
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.8,
          "priceAvg30d": 29.09
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.54,
          "priceAvg30d": 27.89
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.18,
          "priceAvg30d": 26.86
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.21,
          "priceAvg30d": 26.17
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.13,
          "priceAvg30d": 26.58
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.04,
          "priceAvg30d": 27.39
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.0,
          "priceAvg30d": 26.59
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.18,
          "priceAvg30d": 26.76
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 27.81,
          "priceAvg30d": 25.19
        }
      ],
      "avg": 30.36,
      "max": 41.57,
      "maxBlock": 32,
      "min": 23.56,
      "minBlock": 25,
      "spread3h": 11.31,
      "spreadLowAvg": 27.16,
      "spreadHighAvg": 38.47,
      "avg30d": 24.33,
      "spread30dAvg": 17.36,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.87,
          "priceAvg30d": 13.49
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.76,
          "priceAvg30d": 13.28
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.74,
          "priceAvg30d": 13.13
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.07,
          "priceAvg30d": 12.63
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.81,
          "priceAvg30d": 13.21
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.76,
          "priceAvg30d": 14.36
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.87,
          "priceAvg30d": 15.15
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.39,
          "priceAvg30d": 16.5
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.39,
          "priceAvg30d": 16.4
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.84,
          "priceAvg30d": 17.87
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.85,
          "priceAvg30d": 17.59
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.86,
          "priceAvg30d": 17.47
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.87,
          "priceAvg30d": 17.35
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.39,
          "priceAvg30d": 15.37
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 20.39,
          "priceAvg30d": 13.68
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.39,
          "priceAvg30d": 12.32
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.7,
          "priceAvg30d": 14.14
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 22.9,
          "priceAvg30d": 15.25
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.25,
          "priceAvg30d": 16.92
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 24.25,
          "priceAvg30d": 16.32
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 21.7,
          "priceAvg30d": 15.03
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.35,
          "priceAvg30d": 14.76
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 24.25,
          "priceAvg30d": 14.78
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.34,
          "priceAvg30d": 14.77
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 23.56,
          "priceAvg30d": 11.13
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 24.34,
          "priceAvg30d": 11.61
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.97,
          "priceAvg30d": 15.01
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 36.99,
          "priceAvg30d": 18.39
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 37.3,
          "priceAvg30d": 18.15
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 37.59,
          "priceAvg30d": 19.7
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 37.76,
          "priceAvg30d": 20.46
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.57,
          "priceAvg30d": 23.17
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 39.0,
          "priceAvg30d": 24.21
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.59,
          "priceAvg30d": 25.91
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.57,
          "priceAvg30d": 24.19
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.61,
          "priceAvg30d": 24.95
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.31,
          "priceAvg30d": 23.43
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.01,
          "priceAvg30d": 23.81
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.76,
          "priceAvg30d": 22.69
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.8,
          "priceAvg30d": 21.23
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.54,
          "priceAvg30d": 21.58
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.18,
          "priceAvg30d": 20.55
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.21,
          "priceAvg30d": 20.23
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.13,
          "priceAvg30d": 19.36
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.0,
          "priceAvg30d": 18.85
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.25,
          "priceAvg30d": 17.07
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.0,
          "priceAvg30d": 16.7
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.35,
          "priceAvg30d": 13.59
        }
      ],
      "avg": 26.78,
      "max": 41.57,
      "maxBlock": 32,
      "min": 13.07,
      "minBlock": 4,
      "spread3h": 20.0,
      "spreadLowAvg": 18.47,
      "spreadHighAvg": 38.47,
      "avg30d": 17.45,
      "spread30dAvg": 13.08,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.87,
          "priceAvg30d": 13.21
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.76,
          "priceAvg30d": 13.17
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.74,
          "priceAvg30d": 13.04
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.07,
          "priceAvg30d": 12.53
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.81,
          "priceAvg30d": 12.64
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 19.76,
          "priceAvg30d": 14.0
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.87,
          "priceAvg30d": 14.8
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.39,
          "priceAvg30d": 16.07
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.39,
          "priceAvg30d": 15.93
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.84,
          "priceAvg30d": 17.23
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.85,
          "priceAvg30d": 17.02
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.86,
          "priceAvg30d": 17.0
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.87,
          "priceAvg30d": 17.28
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.39,
          "priceAvg30d": 15.26
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 20.39,
          "priceAvg30d": 13.23
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.39,
          "priceAvg30d": 11.67
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.7,
          "priceAvg30d": 13.72
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 22.9,
          "priceAvg30d": 14.78
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.25,
          "priceAvg30d": 16.46
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 24.25,
          "priceAvg30d": 15.92
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 21.7,
          "priceAvg30d": 14.62
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.35,
          "priceAvg30d": 14.39
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 24.25,
          "priceAvg30d": 14.45
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.34,
          "priceAvg30d": 14.45
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 23.56,
          "priceAvg30d": 10.79
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 24.34,
          "priceAvg30d": 11.29
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 28.97,
          "priceAvg30d": 14.76
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 36.99,
          "priceAvg30d": 18.39
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 37.3,
          "priceAvg30d": 17.73
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 37.59,
          "priceAvg30d": 19.54
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 37.76,
          "priceAvg30d": 20.27
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 41.57,
          "priceAvg30d": 23.13
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 39.0,
          "priceAvg30d": 24.21
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.59,
          "priceAvg30d": 25.91
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.57,
          "priceAvg30d": 24.19
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 38.61,
          "priceAvg30d": 24.61
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 38.31,
          "priceAvg30d": 23.43
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.01,
          "priceAvg30d": 23.37
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 37.76,
          "priceAvg30d": 22.35
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.8,
          "priceAvg30d": 21.05
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 32.54,
          "priceAvg30d": 21.39
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 30.18,
          "priceAvg30d": 20.4
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.21,
          "priceAvg30d": 20.08
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.13,
          "priceAvg30d": 19.11
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.0,
          "priceAvg30d": 18.61
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.25,
          "priceAvg30d": 16.82
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.0,
          "priceAvg30d": 16.53
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.35,
          "priceAvg30d": 13.46
        }
      ],
      "avg": 26.78,
      "max": 41.57,
      "maxBlock": 32,
      "min": 13.07,
      "minBlock": 4,
      "spread3h": 20.0,
      "spreadLowAvg": 18.47,
      "spreadHighAvg": 38.47,
      "avg30d": 17.17,
      "spread30dAvg": 13.1,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.74,
          "priceAvg30d": 12.87
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.76,
          "priceAvg30d": 13.17
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.74,
          "priceAvg30d": 12.87
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.07,
          "priceAvg30d": 12.36
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.81,
          "priceAvg30d": 12.14
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.73,
          "priceAvg30d": 13.31
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.44,
          "priceAvg30d": 13.97
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 15.25,
          "priceAvg30d": 15.4
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.39,
          "priceAvg30d": 15.74
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.84,
          "priceAvg30d": 17.02
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.85,
          "priceAvg30d": 17.02
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.86,
          "priceAvg30d": 16.96
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.87,
          "priceAvg30d": 17.28
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.39,
          "priceAvg30d": 15.09
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 16.09,
          "priceAvg30d": 11.35
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 15.72,
          "priceAvg30d": 9.72
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.74,
          "priceAvg30d": 9.69
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 12.35,
          "priceAvg30d": 10.14
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.81,
          "priceAvg30d": 9.01
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.19,
          "priceAvg30d": 8.07
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.63,
          "priceAvg30d": 8.14
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.81,
          "priceAvg30d": 7.43
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.15,
          "priceAvg30d": 7.55
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.19,
          "priceAvg30d": 7.76
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.19,
          "priceAvg30d": 6.17
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.81,
          "priceAvg30d": 6.1
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.19,
          "priceAvg30d": 8.25
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 12.75,
          "priceAvg30d": 9.22
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 18.15,
          "priceAvg30d": 10.42
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 21.62,
          "priceAvg30d": 11.27
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 24.52,
          "priceAvg30d": 12.41
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 28.0,
          "priceAvg30d": 14.84
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 39.0,
          "priceAvg30d": 17.99
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.59,
          "priceAvg30d": 22.05
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.0,
          "priceAvg30d": 22.72
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.9,
          "priceAvg30d": 23.81
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.9,
          "priceAvg30d": 22.21
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.1,
          "priceAvg30d": 22.09
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.9,
          "priceAvg30d": 21.71
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.2,
          "priceAvg30d": 20.7
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.1,
          "priceAvg30d": 20.84
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.26,
          "priceAvg30d": 19.8
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.26,
          "priceAvg30d": 19.46
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.88,
          "priceAvg30d": 18.5
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.87,
          "priceAvg30d": 18.08
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.0,
          "priceAvg30d": 16.37
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.0,
          "priceAvg30d": 16.1
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.73,
          "priceAvg30d": 12.83
        }
      ],
      "avg": 18.69,
      "max": 39.0,
      "maxBlock": 33,
      "min": 10.63,
      "minBlock": 21,
      "spread3h": 17.19,
      "spreadLowAvg": 11.42,
      "spreadHighAvg": 28.61,
      "avg30d": 14.33,
      "spread30dAvg": 14.49,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.74,
          "priceAvg30d": 10.99
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.76,
          "priceAvg30d": 10.95
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.74,
          "priceAvg30d": 11.0
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.07,
          "priceAvg30d": 10.69
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.81,
          "priceAvg30d": 10.38
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 8.51,
          "priceAvg30d": 10.66
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 8.22,
          "priceAvg30d": 10.8
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 8.31,
          "priceAvg30d": 12.01
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 11.98,
          "priceAvg30d": 12.03
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 13.07,
          "priceAvg30d": 13.26
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.85,
          "priceAvg30d": 13.16
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.86,
          "priceAvg30d": 13.06
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.87,
          "priceAvg30d": 13.06
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.07,
          "priceAvg30d": 10.99
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.48,
          "priceAvg30d": 8.98
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.48,
          "priceAvg30d": 8.43
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.17,
          "priceAvg30d": 8.29
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.17,
          "priceAvg30d": 8.77
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.35,
          "priceAvg30d": 7.56
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.19,
          "priceAvg30d": 6.61
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.17,
          "priceAvg30d": 6.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.26
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 6.01
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 1.01,
          "priceAvg30d": 6.38
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 3.0,
          "priceAvg30d": 5.54
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.17,
          "priceAvg30d": 5.56
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.19,
          "priceAvg30d": 7.35
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.35,
          "priceAvg30d": 8.0
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.37,
          "priceAvg30d": 8.94
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 13.07,
          "priceAvg30d": 9.48
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.07,
          "priceAvg30d": 9.82
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.37,
          "priceAvg30d": 11.42
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.98,
          "priceAvg30d": 11.7
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.07,
          "priceAvg30d": 15.13
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 15.0,
          "priceAvg30d": 15.89
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 14.5,
          "priceAvg30d": 17.11
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 13.07,
          "priceAvg30d": 16.69
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 12.87,
          "priceAvg30d": 16.22
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 11.98,
          "priceAvg30d": 15.14
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 8.37,
          "priceAvg30d": 13.85
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.07,
          "priceAvg30d": 14.29
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 12.87,
          "priceAvg30d": 13.45
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 12.87,
          "priceAvg30d": 13.64
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 11.98,
          "priceAvg30d": 12.8
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 8.47,
          "priceAvg30d": 12.69
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 8.47,
          "priceAvg30d": 11.82
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 11.98,
          "priceAvg30d": 12.07
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.37,
          "priceAvg30d": 9.89
        }
      ],
      "avg": 10.93,
      "max": 20.87,
      "maxBlock": 13,
      "min": 0.01,
      "minBlock": 22,
      "spread3h": 8.85,
      "spreadLowAvg": 5.29,
      "spreadHighAvg": 14.13,
      "avg30d": 10.95,
      "spread30dAvg": 11.84,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.74,
          "priceAvg30d": 12.87
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.44,
          "priceAvg30d": 13.17
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.06,
          "priceAvg30d": 12.66
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.81,
          "priceAvg30d": 12.18
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.06,
          "priceAvg30d": 12.01
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.73,
          "priceAvg30d": 13.1
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.44,
          "priceAvg30d": 13.97
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 15.25,
          "priceAvg30d": 15.4
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.39,
          "priceAvg30d": 15.74
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.84,
          "priceAvg30d": 17.02
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.85,
          "priceAvg30d": 17.02
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.86,
          "priceAvg30d": 16.96
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.87,
          "priceAvg30d": 17.28
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.39,
          "priceAvg30d": 15.09
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 16.09,
          "priceAvg30d": 11.35
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 15.72,
          "priceAvg30d": 9.72
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.74,
          "priceAvg30d": 9.35
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 12.35,
          "priceAvg30d": 8.63
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 11.81,
          "priceAvg30d": 7.57
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.19,
          "priceAvg30d": 6.56
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.63,
          "priceAvg30d": 6.55
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.81,
          "priceAvg30d": 6.03
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 11.15,
          "priceAvg30d": 5.91
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.19,
          "priceAvg30d": 5.68
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.19,
          "priceAvg30d": 5.37
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.81,
          "priceAvg30d": 5.42
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.19,
          "priceAvg30d": 6.38
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 12.75,
          "priceAvg30d": 7.47
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 18.15,
          "priceAvg30d": 8.38
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 21.62,
          "priceAvg30d": 10.16
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 24.52,
          "priceAvg30d": 11.98
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 28.0,
          "priceAvg30d": 14.33
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 39.0,
          "priceAvg30d": 17.99
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 38.59,
          "priceAvg30d": 22.05
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.0,
          "priceAvg30d": 22.72
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.9,
          "priceAvg30d": 23.81
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.9,
          "priceAvg30d": 22.21
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.1,
          "priceAvg30d": 22.09
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.9,
          "priceAvg30d": 21.71
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.2,
          "priceAvg30d": 20.7
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.1,
          "priceAvg30d": 20.84
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.26,
          "priceAvg30d": 19.8
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.26,
          "priceAvg30d": 19.46
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.88,
          "priceAvg30d": 18.5
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.87,
          "priceAvg30d": 18.08
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.0,
          "priceAvg30d": 16.37
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 15.0,
          "priceAvg30d": 16.1
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.73,
          "priceAvg30d": 12.83
        }
      ],
      "avg": 18.38,
      "max": 39.0,
      "maxBlock": 33,
      "min": 10.63,
      "minBlock": 21,
      "spread3h": 17.19,
      "spreadLowAvg": 11.42,
      "spreadHighAvg": 28.61,
      "avg30d": 13.89,
      "spread30dAvg": 15.17,
      "historyDays": 30
    }
  }
};
