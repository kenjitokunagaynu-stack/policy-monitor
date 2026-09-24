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
  "targetDate": "2026-09-24",
  "fetchedAt": "2026-09-24T09:04:40+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 22.71,
        "priceAvg30d": 17.54
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 19.01,
        "priceAvg30d": 16.41
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 18.42,
        "priceAvg30d": 15.68
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 15.75,
        "priceAvg30d": 15.63
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 15.43,
        "priceAvg30d": 15.34
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 16.8,
        "priceAvg30d": 15.54
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 16.93,
        "priceAvg30d": 16.01
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 21.1,
        "priceAvg30d": 16.26
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 22.51,
        "priceAvg30d": 16.64
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 23.35,
        "priceAvg30d": 17.53
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 23.78,
        "priceAvg30d": 18.29
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 23.78,
        "priceAvg30d": 17.83
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 23.53,
        "priceAvg30d": 16.91
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 21.0,
        "priceAvg30d": 15.9
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 17.1,
        "priceAvg30d": 15.16
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 16.48,
        "priceAvg30d": 15.37
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 16.85,
        "priceAvg30d": 16.22
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 18.43,
        "priceAvg30d": 17.76
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 16.81,
        "priceAvg30d": 18.42
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 15.0,
        "priceAvg30d": 18.21
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 12.13,
        "priceAvg30d": 17.3
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 11.08,
        "priceAvg30d": 17.26
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 10.41,
        "priceAvg30d": 17.13
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 10.12,
        "priceAvg30d": 16.9
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 8.48,
        "priceAvg30d": 15.48
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 9.63,
        "priceAvg30d": 16.01
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 12.1,
        "priceAvg30d": 17.41
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 15.0,
        "priceAvg30d": 19.27
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 16.0,
        "priceAvg30d": 20.89
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 22.26,
        "priceAvg30d": 22.69
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 24.35,
        "priceAvg30d": 22.15
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 28.31,
        "priceAvg30d": 24.66
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 33.15,
        "priceAvg30d": 26.32
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 34.2,
        "priceAvg30d": 28.94
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 35.83,
        "priceAvg30d": 28.85
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 40.01,
        "priceAvg30d": 29.39
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 40.0,
        "priceAvg30d": 29.31
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 36.0,
        "priceAvg30d": 28.58
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 33.59,
        "priceAvg30d": 27.23
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 33.15,
        "priceAvg30d": 25.2
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 28.5,
        "priceAvg30d": 23.5
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 28.0,
        "priceAvg30d": 22.4
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 26.17,
        "priceAvg30d": 21.37
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 26.21,
        "priceAvg30d": 22.1
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 26.28,
        "priceAvg30d": 21.29
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 25.45,
        "priceAvg30d": 19.53
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 24.84,
        "priceAvg30d": 19.24
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 24.33,
        "priceAvg30d": 17.17
      }
    ],
    "avg": 22.09,
    "max": 40.01,
    "maxBlock": 36,
    "min": 8.48,
    "minBlock": 25,
    "spread3h": 24.07,
    "spreadLowAvg": 11.39,
    "spreadHighAvg": 35.46,
    "avg30d": 19.8,
    "spread30dAvg": 14.3,
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
          "price": 10.46,
          "priceAvg30d": 13.18
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.5,
          "priceAvg30d": 12.4
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.5,
          "priceAvg30d": 12.16
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.5,
          "priceAvg30d": 11.82
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.46,
          "priceAvg30d": 12.78
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.37,
          "priceAvg30d": 13.5
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.41,
          "priceAvg30d": 14.6
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.69,
          "priceAvg30d": 14.72
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.46,
          "priceAvg30d": 15.26
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.7,
          "priceAvg30d": 15.39
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 11.05,
          "priceAvg30d": 14.97
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.6,
          "priceAvg30d": 13.82
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.69,
          "priceAvg30d": 12.79
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.04,
          "priceAvg30d": 11.39
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.5,
          "priceAvg30d": 10.69
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.5,
          "priceAvg30d": 10.07
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.81,
          "priceAvg30d": 9.69
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.64,
          "priceAvg30d": 10.23
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.5,
          "priceAvg30d": 9.54
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.92,
          "priceAvg30d": 8.67
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 6.23,
          "priceAvg30d": 8.06
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 6.03,
          "priceAvg30d": 8.14
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 5.0,
          "priceAvg30d": 8.68
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 4.5,
          "priceAvg30d": 7.98
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 3.0,
          "priceAvg30d": 7.62
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 3.69,
          "priceAvg30d": 7.4
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 5.51,
          "priceAvg30d": 8.62
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 5.75,
          "priceAvg30d": 10.59
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 6.9,
          "priceAvg30d": 10.65
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 7.01,
          "priceAvg30d": 11.81
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.5,
          "priceAvg30d": 13.64
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 15.99,
          "priceAvg30d": 16.01
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.99,
          "priceAvg30d": 18.31
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 45.0,
          "priceAvg30d": 20.36
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 36.0,
          "priceAvg30d": 21.08
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 31.99,
          "priceAvg30d": 21.43
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 50.01,
          "priceAvg30d": 20.72
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 50.01,
          "priceAvg30d": 21.18
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 49.93,
          "priceAvg30d": 20.76
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 38.18,
          "priceAvg30d": 19.93
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.59,
          "priceAvg30d": 19.22
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 33.59,
          "priceAvg30d": 18.85
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.31,
          "priceAvg30d": 17.65
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.59,
          "priceAvg30d": 17.59
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.11,
          "priceAvg30d": 16.69
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.17,
          "priceAvg30d": 15.25
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 33.02,
          "priceAvg30d": 14.17
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.0,
          "priceAvg30d": 13.33
        }
      ],
      "avg": 18.12,
      "max": 50.01,
      "maxBlock": 37,
      "min": 3.0,
      "minBlock": 25,
      "spread3h": 36.77,
      "spreadLowAvg": 5.08,
      "spreadHighAvg": 41.85,
      "avg30d": 13.82,
      "spread30dAvg": 12.02,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.75,
          "priceAvg30d": 18.17
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 25.63,
          "priceAvg30d": 16.69
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.49,
          "priceAvg30d": 15.59
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.61,
          "priceAvg30d": 15.36
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.58,
          "priceAvg30d": 15.54
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.42,
          "priceAvg30d": 15.71
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.5,
          "priceAvg30d": 16.93
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.63,
          "priceAvg30d": 17.03
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.9,
          "priceAvg30d": 17.52
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.23,
          "priceAvg30d": 17.92
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 26.6,
          "priceAvg30d": 18.37
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 26.47,
          "priceAvg30d": 17.68
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 26.2,
          "priceAvg30d": 16.16
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.87,
          "priceAvg30d": 14.12
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 25.86,
          "priceAvg30d": 13.29
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.35,
          "priceAvg30d": 12.85
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 14.0,
          "priceAvg30d": 10.91
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.64,
          "priceAvg30d": 11.68
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.5,
          "priceAvg30d": 12.42
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.92,
          "priceAvg30d": 11.93
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 6.23,
          "priceAvg30d": 11.26
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 6.03,
          "priceAvg30d": 11.57
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 5.0,
          "priceAvg30d": 11.27
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 4.5,
          "priceAvg30d": 10.29
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 3.0,
          "priceAvg30d": 8.98
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 3.69,
          "priceAvg30d": 9.54
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 5.51,
          "priceAvg30d": 11.25
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 5.75,
          "priceAvg30d": 12.84
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 4.5,
          "priceAvg30d": 13.11
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 4.5,
          "priceAvg30d": 14.54
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.48,
          "priceAvg30d": 16.36
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 14.83,
          "priceAvg30d": 20.03
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 31.99,
          "priceAvg30d": 22.57
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 50.01,
          "priceAvg30d": 25.43
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 50.01,
          "priceAvg30d": 24.89
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 50.01,
          "priceAvg30d": 25.31
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 50.01,
          "priceAvg30d": 25.12
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 50.01,
          "priceAvg30d": 24.96
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 49.98,
          "priceAvg30d": 23.78
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 38.18,
          "priceAvg30d": 22.66
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.59,
          "priceAvg30d": 21.19
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 33.59,
          "priceAvg30d": 20.17
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.31,
          "priceAvg30d": 19.42
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.59,
          "priceAvg30d": 19.42
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.11,
          "priceAvg30d": 19.9
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 31.17,
          "priceAvg30d": 18.45
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 33.02,
          "priceAvg30d": 18.56
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.0,
          "priceAvg30d": 17.78
        }
      ],
      "avg": 23.89,
      "max": 50.01,
      "maxBlock": 34,
      "min": 3.0,
      "minBlock": 25,
      "spread3h": 29.31,
      "spreadLowAvg": 5.08,
      "spreadHighAvg": 34.39,
      "avg30d": 16.8,
      "spread30dAvg": 13.94,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.75,
          "priceAvg30d": 19.69
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 25.63,
          "priceAvg30d": 19.05
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.49,
          "priceAvg30d": 18.32
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.61,
          "priceAvg30d": 18.77
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.58,
          "priceAvg30d": 18.56
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.42,
          "priceAvg30d": 18.53
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.5,
          "priceAvg30d": 18.93
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.63,
          "priceAvg30d": 18.99
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.9,
          "priceAvg30d": 19.41
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.23,
          "priceAvg30d": 19.71
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 26.6,
          "priceAvg30d": 20.15
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 26.47,
          "priceAvg30d": 19.79
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 26.2,
          "priceAvg30d": 19.02
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.87,
          "priceAvg30d": 19.07
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 25.86,
          "priceAvg30d": 19.2
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.71,
          "priceAvg30d": 19.9
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.09,
          "priceAvg30d": 21.16
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.81,
          "priceAvg30d": 23.62
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.93,
          "priceAvg30d": 23.46
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.27,
          "priceAvg30d": 23.81
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.59,
          "priceAvg30d": 23.02
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.35,
          "priceAvg30d": 23.54
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 24.35,
          "priceAvg30d": 23.67
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.35,
          "priceAvg30d": 23.7
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 23.53,
          "priceAvg30d": 22.22
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 24.35,
          "priceAvg30d": 22.83
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 26.2,
          "priceAvg30d": 24.11
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.94,
          "priceAvg30d": 25.38
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 33.59,
          "priceAvg30d": 26.06
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 35.83,
          "priceAvg30d": 27.13
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.31,
          "priceAvg30d": 25.12
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 35.83,
          "priceAvg30d": 27.2
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 50.01,
          "priceAvg30d": 28.7
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 50.01,
          "priceAvg30d": 30.33
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 50.01,
          "priceAvg30d": 29.52
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 50.01,
          "priceAvg30d": 29.42
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 50.01,
          "priceAvg30d": 28.88
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 50.01,
          "priceAvg30d": 28.85
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 49.98,
          "priceAvg30d": 27.16
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 38.18,
          "priceAvg30d": 26.03
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.59,
          "priceAvg30d": 23.93
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 33.59,
          "priceAvg30d": 23.32
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.31,
          "priceAvg30d": 22.61
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.59,
          "priceAvg30d": 24.33
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 35.83,
          "priceAvg30d": 23.6
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.59,
          "priceAvg30d": 22.4
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 33.02,
          "priceAvg30d": 22.3
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.0,
          "priceAvg30d": 20.5
        }
      ],
      "avg": 31.32,
      "max": 50.01,
      "maxBlock": 33,
      "min": 23.53,
      "minBlock": 25,
      "spread3h": 16.58,
      "spreadLowAvg": 25.26,
      "spreadHighAvg": 41.83,
      "avg30d": 23.02,
      "spread30dAvg": 11.22,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.75,
          "priceAvg30d": 19.83
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 25.63,
          "priceAvg30d": 19.18
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 25.49,
          "priceAvg30d": 18.46
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.61,
          "priceAvg30d": 18.68
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.58,
          "priceAvg30d": 18.48
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.42,
          "priceAvg30d": 18.51
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.5,
          "priceAvg30d": 18.79
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.63,
          "priceAvg30d": 19.05
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.9,
          "priceAvg30d": 19.48
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.23,
          "priceAvg30d": 19.81
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 26.6,
          "priceAvg30d": 20.13
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 26.47,
          "priceAvg30d": 20.16
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 26.2,
          "priceAvg30d": 19.66
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.87,
          "priceAvg30d": 19.28
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 25.86,
          "priceAvg30d": 18.74
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.71,
          "priceAvg30d": 19.09
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.09,
          "priceAvg30d": 20.84
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.81,
          "priceAvg30d": 22.73
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 26.93,
          "priceAvg30d": 23.5
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.0,
          "priceAvg30d": 23.67
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 23.58,
          "priceAvg30d": 22.9
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 23.3,
          "priceAvg30d": 23.08
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.32,
          "priceAvg30d": 23.05
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 23.32,
          "priceAvg30d": 23.02
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 21.89,
          "priceAvg30d": 21.41
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.04,
          "priceAvg30d": 21.95
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 24.15,
          "priceAvg30d": 24.26
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.94,
          "priceAvg30d": 25.71
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 28.62,
          "priceAvg30d": 26.44
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.05,
          "priceAvg30d": 27.33
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.31,
          "priceAvg30d": 26.95
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.41,
          "priceAvg30d": 29.05
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.93,
          "priceAvg30d": 30.41
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.93,
          "priceAvg30d": 32.63
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 45.0,
          "priceAvg30d": 32.65
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 45.0,
          "priceAvg30d": 32.99
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 45.0,
          "priceAvg30d": 32.92
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.93,
          "priceAvg30d": 32.0
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 32.93,
          "priceAvg30d": 30.66
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 38.18,
          "priceAvg30d": 28.44
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.59,
          "priceAvg30d": 26.95
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 33.59,
          "priceAvg30d": 25.87
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 28.31,
          "priceAvg30d": 24.82
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 33.59,
          "priceAvg30d": 24.7
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 33.83,
          "priceAvg30d": 24.1
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 33.0,
          "priceAvg30d": 22.7
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 33.02,
          "priceAvg30d": 22.35
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 30.0,
          "priceAvg30d": 20.65
        }
      ],
      "avg": 29.0,
      "max": 45.0,
      "maxBlock": 35,
      "min": 21.89,
      "minBlock": 25,
      "spread3h": 12.69,
      "spreadLowAvg": 24.18,
      "spreadHighAvg": 36.87,
      "avg30d": 23.71,
      "spread30dAvg": 14.93,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.95,
          "priceAvg30d": 13.94
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.12,
          "priceAvg30d": 13.88
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.07,
          "priceAvg30d": 13.75
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.07,
          "priceAvg30d": 13.62
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.98,
          "priceAvg30d": 13.48
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.18,
          "priceAvg30d": 13.75
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.31,
          "priceAvg30d": 13.92
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.31,
          "priceAvg30d": 14.08
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.38,
          "priceAvg30d": 13.85
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.22,
          "priceAvg30d": 14.7
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.63,
          "priceAvg30d": 15.36
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.81,
          "priceAvg30d": 15.34
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.63,
          "priceAvg30d": 16.18
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.31,
          "priceAvg30d": 14.44
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.99,
          "priceAvg30d": 14.34
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.98,
          "priceAvg30d": 13.84
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.87,
          "priceAvg30d": 15.12
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.07,
          "priceAvg30d": 18.35
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 14.88,
          "priceAvg30d": 19.66
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 17.34,
          "priceAvg30d": 20.27
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.34,
          "priceAvg30d": 19.65
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 17.1,
          "priceAvg30d": 19.57
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 16.81,
          "priceAvg30d": 19.35
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 16.81,
          "priceAvg30d": 19.33
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.23,
          "priceAvg30d": 17.25
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 16.8,
          "priceAvg30d": 17.87
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 17.34,
          "priceAvg30d": 20.26
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 18.71,
          "priceAvg30d": 21.62
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 16.85,
          "priceAvg30d": 22.37
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 17.34,
          "priceAvg30d": 23.13
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 18.78,
          "priceAvg30d": 22.23
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.0,
          "priceAvg30d": 23.77
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.66,
          "priceAvg30d": 24.34
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 26.77,
          "priceAvg30d": 26.79
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.98,
          "priceAvg30d": 26.66
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.9,
          "priceAvg30d": 27.85
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.96,
          "priceAvg30d": 27.95
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.96,
          "priceAvg30d": 26.95
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.78,
          "priceAvg30d": 25.44
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.7,
          "priceAvg30d": 23.29
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 18.64,
          "priceAvg30d": 21.92
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.68,
          "priceAvg30d": 20.91
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.34,
          "priceAvg30d": 20.22
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.81,
          "priceAvg30d": 18.93
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.45,
          "priceAvg30d": 18.19
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.63,
          "priceAvg30d": 16.71
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.05,
          "priceAvg30d": 16.45
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.41,
          "priceAvg30d": 13.82
        }
      ],
      "avg": 15.39,
      "max": 29.9,
      "maxBlock": 36,
      "min": 8.41,
      "minBlock": 48,
      "spread3h": 8.98,
      "spreadLowAvg": 13.71,
      "spreadHighAvg": 22.69,
      "avg30d": 18.85,
      "spread30dAvg": 13.83,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.95,
          "priceAvg30d": 13.48
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.12,
          "priceAvg30d": 13.76
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.07,
          "priceAvg30d": 13.75
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.07,
          "priceAvg30d": 13.62
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.98,
          "priceAvg30d": 13.47
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.18,
          "priceAvg30d": 13.75
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.31,
          "priceAvg30d": 13.92
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.31,
          "priceAvg30d": 14.08
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.38,
          "priceAvg30d": 13.85
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.22,
          "priceAvg30d": 14.7
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.63,
          "priceAvg30d": 15.33
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.81,
          "priceAvg30d": 15.32
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.63,
          "priceAvg30d": 16.18
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.31,
          "priceAvg30d": 14.44
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.99,
          "priceAvg30d": 14.33
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.98,
          "priceAvg30d": 13.68
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.87,
          "priceAvg30d": 14.44
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.07,
          "priceAvg30d": 16.96
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 14.88,
          "priceAvg30d": 18.59
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 17.34,
          "priceAvg30d": 18.99
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.34,
          "priceAvg30d": 18.41
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 17.1,
          "priceAvg30d": 18.51
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 16.81,
          "priceAvg30d": 18.75
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 16.81,
          "priceAvg30d": 18.16
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 12.23,
          "priceAvg30d": 16.65
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 16.8,
          "priceAvg30d": 17.02
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 17.34,
          "priceAvg30d": 19.45
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 18.71,
          "priceAvg30d": 20.99
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 16.85,
          "priceAvg30d": 21.5
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 17.34,
          "priceAvg30d": 22.14
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 18.78,
          "priceAvg30d": 21.07
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.0,
          "priceAvg30d": 22.58
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.66,
          "priceAvg30d": 23.82
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 26.77,
          "priceAvg30d": 26.43
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.98,
          "priceAvg30d": 26.52
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.9,
          "priceAvg30d": 27.72
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.96,
          "priceAvg30d": 27.83
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.96,
          "priceAvg30d": 26.81
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.78,
          "priceAvg30d": 25.31
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.7,
          "priceAvg30d": 23.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 18.64,
          "priceAvg30d": 21.92
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.68,
          "priceAvg30d": 20.91
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.34,
          "priceAvg30d": 20.22
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.81,
          "priceAvg30d": 18.93
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.45,
          "priceAvg30d": 18.19
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.63,
          "priceAvg30d": 16.71
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.05,
          "priceAvg30d": 16.45
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.41,
          "priceAvg30d": 13.77
        }
      ],
      "avg": 15.39,
      "max": 29.9,
      "maxBlock": 36,
      "min": 8.41,
      "minBlock": 48,
      "spread3h": 8.98,
      "spreadLowAvg": 13.71,
      "spreadHighAvg": 22.69,
      "avg30d": 18.47,
      "spread30dAvg": 13.46,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.95,
          "priceAvg30d": 13.48
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.12,
          "priceAvg30d": 13.76
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.07,
          "priceAvg30d": 13.75
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.07,
          "priceAvg30d": 13.62
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.98,
          "priceAvg30d": 13.47
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.18,
          "priceAvg30d": 13.75
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.31,
          "priceAvg30d": 13.82
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.31,
          "priceAvg30d": 14.08
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.38,
          "priceAvg30d": 13.81
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.22,
          "priceAvg30d": 14.63
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.63,
          "priceAvg30d": 15.31
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.81,
          "priceAvg30d": 15.31
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.63,
          "priceAvg30d": 16.11
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.31,
          "priceAvg30d": 14.3
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.99,
          "priceAvg30d": 13.92
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.98,
          "priceAvg30d": 12.91
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.87,
          "priceAvg30d": 13.25
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.07,
          "priceAvg30d": 14.39
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.98,
          "priceAvg30d": 14.6
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.63,
          "priceAvg30d": 13.67
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.29,
          "priceAvg30d": 13.63
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.28,
          "priceAvg30d": 13.33
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.76,
          "priceAvg30d": 13.05
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.02,
          "priceAvg30d": 12.89
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 7.85,
          "priceAvg30d": 11.35
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.11,
          "priceAvg30d": 11.49
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.17,
          "priceAvg30d": 13.87
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 7.87,
          "priceAvg30d": 15.48
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 7.8,
          "priceAvg30d": 15.0
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.05,
          "priceAvg30d": 15.76
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.14,
          "priceAvg30d": 18.29
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.47,
          "priceAvg30d": 21.34
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 14.63,
          "priceAvg30d": 23.29
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.68,
          "priceAvg30d": 26.22
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.98,
          "priceAvg30d": 26.52
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.9,
          "priceAvg30d": 27.72
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.96,
          "priceAvg30d": 27.83
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.96,
          "priceAvg30d": 26.81
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.78,
          "priceAvg30d": 25.31
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.7,
          "priceAvg30d": 23.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 18.64,
          "priceAvg30d": 21.92
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.68,
          "priceAvg30d": 20.91
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.34,
          "priceAvg30d": 20.22
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.81,
          "priceAvg30d": 18.93
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.45,
          "priceAvg30d": 18.15
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.63,
          "priceAvg30d": 16.7
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.05,
          "priceAvg30d": 16.45
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.41,
          "priceAvg30d": 13.77
        }
      ],
      "avg": 12.64,
      "max": 29.9,
      "maxBlock": 36,
      "min": 7.8,
      "minBlock": 29,
      "spread3h": 10.03,
      "spreadLowAvg": 9.3,
      "spreadHighAvg": 19.33,
      "avg30d": 16.9,
      "spread30dAvg": 14.47,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.95,
          "priceAvg30d": 13.05
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.12,
          "priceAvg30d": 13.03
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.07,
          "priceAvg30d": 12.87
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.07,
          "priceAvg30d": 12.81
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.98,
          "priceAvg30d": 12.54
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.18,
          "priceAvg30d": 12.87
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.31,
          "priceAvg30d": 12.84
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.31,
          "priceAvg30d": 13.26
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.38,
          "priceAvg30d": 12.81
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.22,
          "priceAvg30d": 13.69
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.63,
          "priceAvg30d": 14.56
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.81,
          "priceAvg30d": 14.64
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.63,
          "priceAvg30d": 15.29
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.31,
          "priceAvg30d": 13.1
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.99,
          "priceAvg30d": 12.52
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.98,
          "priceAvg30d": 11.8
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.87,
          "priceAvg30d": 12.36
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.07,
          "priceAvg30d": 13.43
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.98,
          "priceAvg30d": 12.85
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.63,
          "priceAvg30d": 11.48
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 7.0,
          "priceAvg30d": 10.73
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 6.5,
          "priceAvg30d": 10.48
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 2.9,
          "priceAvg30d": 10.33
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 7.85,
          "priceAvg30d": 10.38
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 7.85,
          "priceAvg30d": 9.33
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.11,
          "priceAvg30d": 9.57
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.17,
          "priceAvg30d": 11.65
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 7.87,
          "priceAvg30d": 13.74
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 13.72
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 14.16
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 0.01,
          "priceAvg30d": 16.43
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 2.5,
          "priceAvg30d": 19.42
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 7.91,
          "priceAvg30d": 21.2
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 8.04,
          "priceAvg30d": 24.34
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 12.29,
          "priceAvg30d": 24.75
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 15.0,
          "priceAvg30d": 26.81
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 14.5,
          "priceAvg30d": 27.14
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 13.08,
          "priceAvg30d": 26.12
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.29,
          "priceAvg30d": 24.06
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.29,
          "priceAvg30d": 21.06
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 12.51,
          "priceAvg30d": 20.21
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 8.74,
          "priceAvg30d": 19.06
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 8.66,
          "priceAvg30d": 18.15
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 8.08,
          "priceAvg30d": 17.03
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 7.99,
          "priceAvg30d": 16.3
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 7.93,
          "priceAvg30d": 15.17
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 8.0,
          "priceAvg30d": 15.11
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.08,
          "priceAvg30d": 13.0
        }
      ],
      "avg": 9.18,
      "max": 15.0,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 29,
      "spread3h": 6.91,
      "spreadLowAvg": 4.44,
      "spreadHighAvg": 11.35,
      "avg30d": 15.44,
      "spread30dAvg": 15.29,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.95,
          "priceAvg30d": 12.44
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.12,
          "priceAvg30d": 12.74
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.07,
          "priceAvg30d": 11.68
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.07,
          "priceAvg30d": 11.3
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.98,
          "priceAvg30d": 10.79
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.18,
          "priceAvg30d": 10.92
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.31,
          "priceAvg30d": 11.0
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.31,
          "priceAvg30d": 11.48
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.38,
          "priceAvg30d": 11.32
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.22,
          "priceAvg30d": 12.66
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.63,
          "priceAvg30d": 13.67
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.81,
          "priceAvg30d": 14.15
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.63,
          "priceAvg30d": 15.17
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.31,
          "priceAvg30d": 12.3
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.99,
          "priceAvg30d": 11.54
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.98,
          "priceAvg30d": 10.55
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.87,
          "priceAvg30d": 11.6
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.07,
          "priceAvg30d": 11.98
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.98,
          "priceAvg30d": 12.21
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.63,
          "priceAvg30d": 11.43
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.29,
          "priceAvg30d": 10.69
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.28,
          "priceAvg30d": 10.37
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.76,
          "priceAvg30d": 10.31
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.02,
          "priceAvg30d": 10.31
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 7.85,
          "priceAvg30d": 9.64
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.11,
          "priceAvg30d": 9.88
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 8.17,
          "priceAvg30d": 11.12
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 7.87,
          "priceAvg30d": 12.49
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 7.8,
          "priceAvg30d": 13.54
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.05,
          "priceAvg30d": 14.76
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.14,
          "priceAvg30d": 17.8
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.47,
          "priceAvg30d": 20.85
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 14.63,
          "priceAvg30d": 23.09
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.68,
          "priceAvg30d": 26.22
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.98,
          "priceAvg30d": 26.52
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.9,
          "priceAvg30d": 27.72
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.96,
          "priceAvg30d": 27.83
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.96,
          "priceAvg30d": 26.81
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.78,
          "priceAvg30d": 25.31
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.7,
          "priceAvg30d": 23.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 18.64,
          "priceAvg30d": 21.92
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 17.68,
          "priceAvg30d": 20.91
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.34,
          "priceAvg30d": 20.21
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.81,
          "priceAvg30d": 18.93
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.45,
          "priceAvg30d": 18.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.63,
          "priceAvg30d": 16.35
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.05,
          "priceAvg30d": 15.77
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.41,
          "priceAvg30d": 12.12
        }
      ],
      "avg": 12.64,
      "max": 29.9,
      "maxBlock": 36,
      "min": 7.8,
      "minBlock": 29,
      "spread3h": 10.03,
      "spreadLowAvg": 9.3,
      "spreadHighAvg": 19.33,
      "avg30d": 15.49,
      "spread30dAvg": 16.43,
      "historyDays": 30
    }
  }
};
