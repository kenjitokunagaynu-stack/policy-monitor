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
  "targetDate": "2026-09-23",
  "fetchedAt": "2026-09-23T09:05:05+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 21.9,
        "priceAvg30d": 17.45
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 21.0,
        "priceAvg30d": 16.31
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 20.0,
        "priceAvg30d": 15.58
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 17.4,
        "priceAvg30d": 15.6
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 16.11,
        "priceAvg30d": 15.37
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 17.1,
        "priceAvg30d": 15.54
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 19.61,
        "priceAvg30d": 15.93
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 21.02,
        "priceAvg30d": 16.14
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 22.1,
        "priceAvg30d": 16.47
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 24.24,
        "priceAvg30d": 17.32
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 23.5,
        "priceAvg30d": 18.13
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 21.02,
        "priceAvg30d": 17.75
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 18.42,
        "priceAvg30d": 16.9
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 13.71,
        "priceAvg30d": 16.04
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 10.4,
        "priceAvg30d": 15.38
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 10.38,
        "priceAvg30d": 15.6
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 10.01,
        "priceAvg30d": 16.48
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 10.35,
        "priceAvg30d": 18.07
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 9.63,
        "priceAvg30d": 18.75
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 10.0,
        "priceAvg30d": 18.52
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 9.99,
        "priceAvg30d": 17.58
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 9.63,
        "priceAvg30d": 17.55
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 8.79,
        "priceAvg30d": 17.48
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 7.86,
        "priceAvg30d": 17.28
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 6.48,
        "priceAvg30d": 15.87
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 9.63,
        "priceAvg30d": 16.3
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 10.14,
        "priceAvg30d": 17.72
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 11.25,
        "priceAvg30d": 19.58
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 10.98,
        "priceAvg30d": 21.26
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 12.35,
        "priceAvg30d": 23.1
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 13.71,
        "priceAvg30d": 22.43
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 17.5,
        "priceAvg30d": 25.09
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 23.5,
        "priceAvg30d": 26.57
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 26.72,
        "priceAvg30d": 29.14
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 26.47,
        "priceAvg30d": 29.03
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 27.65,
        "priceAvg30d": 29.52
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 27.94,
        "priceAvg30d": 29.48
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 27.92,
        "priceAvg30d": 28.74
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 26.83,
        "priceAvg30d": 27.39
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 25.0,
        "priceAvg30d": 25.39
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 25.0,
        "priceAvg30d": 23.58
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 24.35,
        "priceAvg30d": 22.31
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 24.35,
        "priceAvg30d": 21.26
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 23.61,
        "priceAvg30d": 22.35
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 22.99,
        "priceAvg30d": 21.56
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 22.5,
        "priceAvg30d": 19.63
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 21.94,
        "priceAvg30d": 19.36
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 20.0,
        "priceAvg30d": 17.27
      }
    ],
    "avg": 17.98,
    "max": 27.94,
    "maxBlock": 37,
    "min": 6.48,
    "minBlock": 25,
    "spread3h": 17.21,
    "spreadLowAvg": 9.55,
    "spreadHighAvg": 26.77,
    "avg30d": 19.94,
    "spread30dAvg": 14.2,
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
          "price": 10.69,
          "priceAvg30d": 13.46
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.93,
          "priceAvg30d": 12.57
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.99,
          "priceAvg30d": 12.07
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.64,
          "priceAvg30d": 11.86
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.6,
          "priceAvg30d": 12.82
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 16.2,
          "priceAvg30d": 13.37
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.33,
          "priceAvg30d": 14.41
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.01,
          "priceAvg30d": 14.63
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.0,
          "priceAvg30d": 15.03
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.23,
          "priceAvg30d": 15.13
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.7,
          "priceAvg30d": 14.93
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 11.6,
          "priceAvg30d": 14.04
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.68,
          "priceAvg30d": 13.03
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.5,
          "priceAvg30d": 11.49
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.19,
          "priceAvg30d": 10.74
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 3.5,
          "priceAvg30d": 10.3
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 0.01,
          "priceAvg30d": 10.01
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.01,
          "priceAvg30d": 10.56
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 9.87
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 9.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 8.39
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 8.47
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 9.0
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 8.31
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 7.95
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 7.73
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 8.94
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 10.91
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 10.98
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 3.0,
          "priceAvg30d": 12.21
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.5,
          "priceAvg30d": 13.91
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.5,
          "priceAvg30d": 16.38
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.46,
          "priceAvg30d": 18.78
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.67,
          "priceAvg30d": 21.04
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 28.0,
          "priceAvg30d": 21.18
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 27.28,
          "priceAvg30d": 21.56
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.95,
          "priceAvg30d": 21.1
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.0,
          "priceAvg30d": 21.69
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 15.25,
          "priceAvg30d": 21.27
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 16.0,
          "priceAvg30d": 20.32
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 12.5,
          "priceAvg30d": 19.5
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.0,
          "priceAvg30d": 18.7
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 15.74,
          "priceAvg30d": 17.81
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.0,
          "priceAvg30d": 17.67
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.78,
          "priceAvg30d": 17.09
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.7,
          "priceAvg30d": 15.77
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.51,
          "priceAvg30d": 14.71
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.64,
          "priceAvg30d": 13.7
        }
      ],
      "avg": 10.99,
      "max": 28.0,
      "maxBlock": 35,
      "min": 0.01,
      "minBlock": 17,
      "spread3h": 11.94,
      "spreadLowAvg": 3.7,
      "spreadHighAvg": 15.64,
      "avg30d": 14.05,
      "spread30dAvg": 12.14,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.27,
          "priceAvg30d": 17.91
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 21.78,
          "priceAvg30d": 16.58
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 18.57,
          "priceAvg30d": 15.42
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.65,
          "priceAvg30d": 15.23
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.78,
          "priceAvg30d": 15.43
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 16.2,
          "priceAvg30d": 15.58
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.33,
          "priceAvg30d": 16.74
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.01,
          "priceAvg30d": 16.94
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.0,
          "priceAvg30d": 17.29
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.23,
          "priceAvg30d": 17.66
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.29,
          "priceAvg30d": 18.17
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.0,
          "priceAvg30d": 17.49
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.23,
          "priceAvg30d": 16.22
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.1,
          "priceAvg30d": 13.99
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.19,
          "priceAvg30d": 13.34
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.65,
          "priceAvg30d": 12.92
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.67,
          "priceAvg30d": 10.94
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 3.0,
          "priceAvg30d": 11.91
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 6.9,
          "priceAvg30d": 12.52
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 12.17
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 3.5,
          "priceAvg30d": 11.47
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 3.5,
          "priceAvg30d": 11.78
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 6.1,
          "priceAvg30d": 11.39
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 5.56,
          "priceAvg30d": 10.43
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 4.0,
          "priceAvg30d": 9.17
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 5.69,
          "priceAvg30d": 9.68
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.39,
          "priceAvg30d": 11.26
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.13,
          "priceAvg30d": 12.82
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.15,
          "priceAvg30d": 13.1
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 11.73,
          "priceAvg30d": 14.65
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 16.21,
          "priceAvg30d": 16.41
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.58,
          "priceAvg30d": 19.87
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 27.0,
          "priceAvg30d": 22.48
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 34.58,
          "priceAvg30d": 25.32
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 34.01,
          "priceAvg30d": 24.79
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 34.31,
          "priceAvg30d": 25.21
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 34.32,
          "priceAvg30d": 25.02
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.58,
          "priceAvg30d": 24.85
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 34.6,
          "priceAvg30d": 23.64
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 33.5,
          "priceAvg30d": 22.47
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.23,
          "priceAvg30d": 20.78
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.63,
          "priceAvg30d": 19.8
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.17,
          "priceAvg30d": 19.09
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.11,
          "priceAvg30d": 19.33
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.66,
          "priceAvg30d": 19.8
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 30.11,
          "priceAvg30d": 18.33
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.32,
          "priceAvg30d": 18.44
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.01,
          "priceAvg30d": 17.58
        }
      ],
      "avg": 19.85,
      "max": 34.6,
      "maxBlock": 39,
      "min": 2.5,
      "minBlock": 20,
      "spread3h": 28.32,
      "spreadLowAvg": 5.28,
      "spreadHighAvg": 33.59,
      "avg30d": 16.74,
      "spread30dAvg": 13.52,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.27,
          "priceAvg30d": 19.42
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.78,
          "priceAvg30d": 18.77
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.04,
          "priceAvg30d": 18.04
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.0,
          "priceAvg30d": 18.51
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.96,
          "priceAvg30d": 18.31
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 24.8,
          "priceAvg30d": 18.3
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 24.99,
          "priceAvg30d": 18.69
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.08,
          "priceAvg30d": 18.72
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.14,
          "priceAvg30d": 19.14
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.5,
          "priceAvg30d": 19.44
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.29,
          "priceAvg30d": 19.95
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.03,
          "priceAvg30d": 19.6
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.73,
          "priceAvg30d": 18.82
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.47,
          "priceAvg30d": 18.89
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.41,
          "priceAvg30d": 19.02
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 24.41,
          "priceAvg30d": 19.74
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 24.24,
          "priceAvg30d": 21.03
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.11,
          "priceAvg30d": 23.52
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.41,
          "priceAvg30d": 23.4
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.06,
          "priceAvg30d": 23.69
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.63,
          "priceAvg30d": 22.94
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.63,
          "priceAvg30d": 23.44
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 22.62,
          "priceAvg30d": 23.73
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 21.74,
          "priceAvg30d": 23.8
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 21.02,
          "priceAvg30d": 22.25
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.87,
          "priceAvg30d": 22.77
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.83,
          "priceAvg30d": 24.03
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.89,
          "priceAvg30d": 25.35
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.74,
          "priceAvg30d": 26.0
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 25.77,
          "priceAvg30d": 27.27
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.49,
          "priceAvg30d": 24.92
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 28.29,
          "priceAvg30d": 27.24
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.11,
          "priceAvg30d": 28.72
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 34.58,
          "priceAvg30d": 30.22
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 34.01,
          "priceAvg30d": 29.43
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 34.31,
          "priceAvg30d": 29.32
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 34.32,
          "priceAvg30d": 28.78
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.58,
          "priceAvg30d": 28.74
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 34.6,
          "priceAvg30d": 27.02
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 33.5,
          "priceAvg30d": 25.83
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.23,
          "priceAvg30d": 23.52
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.63,
          "priceAvg30d": 22.95
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.17,
          "priceAvg30d": 22.28
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.11,
          "priceAvg30d": 24.34
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.66,
          "priceAvg30d": 23.5
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 30.11,
          "priceAvg30d": 22.27
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.32,
          "priceAvg30d": 22.18
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.01,
          "priceAvg30d": 20.3
        }
      ],
      "avg": 27.41,
      "max": 34.6,
      "maxBlock": 39,
      "min": 21.02,
      "minBlock": 25,
      "spread3h": 10.17,
      "spreadLowAvg": 23.43,
      "spreadHighAvg": 33.59,
      "avg30d": 22.88,
      "spread30dAvg": 11.25,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 27.27,
          "priceAvg30d": 19.57
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 26.78,
          "priceAvg30d": 18.87
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 26.04,
          "priceAvg30d": 18.15
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 25.0,
          "priceAvg30d": 18.42
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 24.96,
          "priceAvg30d": 18.21
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 24.8,
          "priceAvg30d": 18.27
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 24.99,
          "priceAvg30d": 18.54
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 26.08,
          "priceAvg30d": 18.79
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.14,
          "priceAvg30d": 19.21
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 26.5,
          "priceAvg30d": 19.54
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.29,
          "priceAvg30d": 19.94
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.03,
          "priceAvg30d": 19.97
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.73,
          "priceAvg30d": 19.46
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.47,
          "priceAvg30d": 19.11
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.41,
          "priceAvg30d": 18.56
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 24.41,
          "priceAvg30d": 18.93
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 24.24,
          "priceAvg30d": 20.71
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.11,
          "priceAvg30d": 22.63
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.41,
          "priceAvg30d": 23.43
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.06,
          "priceAvg30d": 23.55
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.63,
          "priceAvg30d": 22.82
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.63,
          "priceAvg30d": 23.0
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 22.62,
          "priceAvg30d": 23.11
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 21.74,
          "priceAvg30d": 23.11
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 20.0,
          "priceAvg30d": 21.48
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 19.99,
          "priceAvg30d": 22.02
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.83,
          "priceAvg30d": 24.4
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.89,
          "priceAvg30d": 25.91
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.74,
          "priceAvg30d": 26.61
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 25.77,
          "priceAvg30d": 27.51
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 27.49,
          "priceAvg30d": 27.06
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 28.29,
          "priceAvg30d": 29.15
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.11,
          "priceAvg30d": 30.5
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 34.58,
          "priceAvg30d": 32.64
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 34.01,
          "priceAvg30d": 32.67
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 34.31,
          "priceAvg30d": 32.95
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 34.32,
          "priceAvg30d": 32.97
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.58,
          "priceAvg30d": 31.98
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 34.6,
          "priceAvg30d": 30.65
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 33.5,
          "priceAvg30d": 28.54
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.23,
          "priceAvg30d": 26.89
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.63,
          "priceAvg30d": 25.8
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 30.17,
          "priceAvg30d": 24.65
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.11,
          "priceAvg30d": 24.71
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.66,
          "priceAvg30d": 24.08
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 30.11,
          "priceAvg30d": 22.65
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 30.32,
          "priceAvg30d": 22.22
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 28.01,
          "priceAvg30d": 20.52
        }
      ],
      "avg": 27.3,
      "max": 34.6,
      "maxBlock": 39,
      "min": 19.99,
      "minBlock": 26,
      "spread3h": 10.79,
      "spreadLowAvg": 22.8,
      "spreadHighAvg": 33.59,
      "avg30d": 23.63,
      "spread30dAvg": 15.03,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.06,
          "priceAvg30d": 14.24
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.78,
          "priceAvg30d": 14.17
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.87,
          "priceAvg30d": 13.97
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.87,
          "priceAvg30d": 13.84
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.92,
          "priceAvg30d": 13.71
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.28,
          "priceAvg30d": 13.99
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 14.16
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.7,
          "priceAvg30d": 14.29
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.61,
          "priceAvg30d": 14.11
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.25,
          "priceAvg30d": 14.89
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.09,
          "priceAvg30d": 15.54
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.95,
          "priceAvg30d": 15.57
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.39,
          "priceAvg30d": 16.37
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.0,
          "priceAvg30d": 14.66
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.2,
          "priceAvg30d": 14.55
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.61,
          "priceAvg30d": 14.24
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.9,
          "priceAvg30d": 15.46
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.92,
          "priceAvg30d": 18.76
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.01,
          "priceAvg30d": 20.07
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.01,
          "priceAvg30d": 20.69
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.99,
          "priceAvg30d": 20.06
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.88,
          "priceAvg30d": 20.02
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.29,
          "priceAvg30d": 19.89
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.29,
          "priceAvg30d": 19.87
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.92,
          "priceAvg30d": 17.65
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.9,
          "priceAvg30d": 18.28
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 13.0,
          "priceAvg30d": 20.76
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 17.1,
          "priceAvg30d": 22.05
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 17.1,
          "priceAvg30d": 22.78
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.0,
          "priceAvg30d": 23.5
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.32,
          "priceAvg30d": 22.78
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.16,
          "priceAvg30d": 24.54
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.0,
          "priceAvg30d": 25.16
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.28,
          "priceAvg30d": 27.6
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.25,
          "priceAvg30d": 27.44
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.73,
          "priceAvg30d": 28.39
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.73,
          "priceAvg30d": 28.59
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.73,
          "priceAvg30d": 27.53
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 14.61,
          "priceAvg30d": 26.09
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.09,
          "priceAvg30d": 24.1
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.47,
          "priceAvg30d": 22.52
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 10.4,
          "priceAvg30d": 21.54
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 12.61,
          "priceAvg30d": 20.63
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.14,
          "priceAvg30d": 19.61
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 11.7,
          "priceAvg30d": 18.86
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 11.25,
          "priceAvg30d": 17.29
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.95,
          "priceAvg30d": 16.98
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.99,
          "priceAvg30d": 14.29
        }
      ],
      "avg": 11.28,
      "max": 20.0,
      "maxBlock": 30,
      "min": 7.61,
      "minBlock": 16,
      "spread3h": 2.88,
      "spreadLowAvg": 10.07,
      "spreadHighAvg": 12.95,
      "avg30d": 19.29,
      "spread30dAvg": 14.15,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.06,
          "priceAvg30d": 13.78
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.78,
          "priceAvg30d": 14.06
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.87,
          "priceAvg30d": 13.97
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.87,
          "priceAvg30d": 13.84
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.92,
          "priceAvg30d": 13.7
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.28,
          "priceAvg30d": 13.99
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 14.16
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.7,
          "priceAvg30d": 14.29
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.61,
          "priceAvg30d": 14.11
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.25,
          "priceAvg30d": 14.89
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.09,
          "priceAvg30d": 15.51
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.95,
          "priceAvg30d": 15.55
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.39,
          "priceAvg30d": 16.37
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.0,
          "priceAvg30d": 14.66
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.2,
          "priceAvg30d": 14.55
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 14.0
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 14.88
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 17.61
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 6.0,
          "priceAvg30d": 19.14
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.29,
          "priceAvg30d": 19.46
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.29,
          "priceAvg30d": 18.87
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.88,
          "priceAvg30d": 18.95
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.29,
          "priceAvg30d": 19.29
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 8.29,
          "priceAvg30d": 18.7
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.92,
          "priceAvg30d": 17.05
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.9,
          "priceAvg30d": 17.43
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 13.0,
          "priceAvg30d": 19.95
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 17.1,
          "priceAvg30d": 21.42
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 17.1,
          "priceAvg30d": 21.91
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.0,
          "priceAvg30d": 22.52
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 14.32,
          "priceAvg30d": 21.62
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.16,
          "priceAvg30d": 23.35
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.0,
          "priceAvg30d": 24.64
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.28,
          "priceAvg30d": 27.24
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.25,
          "priceAvg30d": 27.3
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.73,
          "priceAvg30d": 28.26
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.73,
          "priceAvg30d": 28.47
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.73,
          "priceAvg30d": 27.4
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 14.61,
          "priceAvg30d": 25.96
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.09,
          "priceAvg30d": 23.97
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.47,
          "priceAvg30d": 22.52
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 10.4,
          "priceAvg30d": 21.54
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 12.61,
          "priceAvg30d": 20.63
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.14,
          "priceAvg30d": 19.61
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 11.7,
          "priceAvg30d": 18.56
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 11.25,
          "priceAvg30d": 16.93
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.95,
          "priceAvg30d": 16.69
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.99,
          "priceAvg30d": 14.01
        }
      ],
      "avg": 10.8,
      "max": 20.0,
      "maxBlock": 30,
      "min": 2.5,
      "minBlock": 18,
      "spread3h": 6.33,
      "spreadLowAvg": 6.61,
      "spreadHighAvg": 12.95,
      "avg30d": 18.9,
      "spread30dAvg": 13.72,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.06,
          "priceAvg30d": 13.78
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.78,
          "priceAvg30d": 14.06
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.87,
          "priceAvg30d": 13.97
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.87,
          "priceAvg30d": 13.84
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.92,
          "priceAvg30d": 13.7
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.28,
          "priceAvg30d": 13.99
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 14.06
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.7,
          "priceAvg30d": 14.29
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.61,
          "priceAvg30d": 14.07
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.25,
          "priceAvg30d": 14.82
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.09,
          "priceAvg30d": 15.49
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.95,
          "priceAvg30d": 15.55
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.39,
          "priceAvg30d": 16.29
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.0,
          "priceAvg30d": 14.51
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.2,
          "priceAvg30d": 14.13
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 13.23
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 13.6
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 14.65
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 14.91
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.02,
          "priceAvg30d": 14.0
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 13.97
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 13.73
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 13.56
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 13.32
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 11.7
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 11.83
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 14.21
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 1.0,
          "priceAvg30d": 15.78
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.9,
          "priceAvg30d": 15.26
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 2.5,
          "priceAvg30d": 16.18
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.11,
          "priceAvg30d": 18.75
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.16,
          "priceAvg30d": 22.1
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.0,
          "priceAvg30d": 24.12
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.28,
          "priceAvg30d": 27.03
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.25,
          "priceAvg30d": 27.3
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.73,
          "priceAvg30d": 28.26
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.73,
          "priceAvg30d": 28.47
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.73,
          "priceAvg30d": 27.4
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 14.61,
          "priceAvg30d": 25.96
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.09,
          "priceAvg30d": 23.97
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.47,
          "priceAvg30d": 22.52
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 10.4,
          "priceAvg30d": 21.54
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 12.61,
          "priceAvg30d": 20.63
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.14,
          "priceAvg30d": 19.61
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 11.7,
          "priceAvg30d": 18.53
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 11.25,
          "priceAvg30d": 16.92
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.95,
          "priceAvg30d": 16.69
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.99,
          "priceAvg30d": 14.01
        }
      ],
      "avg": 8.01,
      "max": 16.73,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 12.34,
      "spreadLowAvg": 0.59,
      "spreadHighAvg": 12.93,
      "avg30d": 17.3,
      "spread30dAvg": 14.72,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.06,
          "priceAvg30d": 13.35
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.78,
          "priceAvg30d": 13.32
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.87,
          "priceAvg30d": 13.09
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.87,
          "priceAvg30d": 13.03
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.92,
          "priceAvg30d": 12.78
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.28,
          "priceAvg30d": 13.11
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 13.07
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.7,
          "priceAvg30d": 13.47
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.61,
          "priceAvg30d": 13.07
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.25,
          "priceAvg30d": 13.88
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.09,
          "priceAvg30d": 14.74
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.95,
          "priceAvg30d": 14.87
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.39,
          "priceAvg30d": 15.48
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.0,
          "priceAvg30d": 13.32
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.2,
          "priceAvg30d": 12.74
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 12.12
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 12.71
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 13.69
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 13.15
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.02,
          "priceAvg30d": 11.77
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 11.02
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 10.74
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 10.62
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 10.66
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 9.54
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 9.79
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 11.99
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 1.0,
          "priceAvg30d": 14.05
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.9,
          "priceAvg30d": 13.98
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 2.5,
          "priceAvg30d": 14.59
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.11,
          "priceAvg30d": 16.89
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.16,
          "priceAvg30d": 20.18
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.0,
          "priceAvg30d": 22.02
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.28,
          "priceAvg30d": 25.16
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.25,
          "priceAvg30d": 25.53
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.73,
          "priceAvg30d": 27.35
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.73,
          "priceAvg30d": 27.79
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.73,
          "priceAvg30d": 26.71
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 14.61,
          "priceAvg30d": 24.72
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.09,
          "priceAvg30d": 21.87
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.47,
          "priceAvg30d": 20.81
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 10.4,
          "priceAvg30d": 19.7
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 12.61,
          "priceAvg30d": 18.56
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.14,
          "priceAvg30d": 17.71
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 11.7,
          "priceAvg30d": 16.68
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 11.25,
          "priceAvg30d": 15.39
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.95,
          "priceAvg30d": 15.34
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.99,
          "priceAvg30d": 13.24
        }
      ],
      "avg": 8.01,
      "max": 16.73,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 12.34,
      "spreadLowAvg": 0.59,
      "spreadHighAvg": 12.93,
      "avg30d": 15.82,
      "spread30dAvg": 15.64,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.06,
          "priceAvg30d": 12.74
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.78,
          "priceAvg30d": 13.03
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.87,
          "priceAvg30d": 11.82
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.87,
          "priceAvg30d": 11.44
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.92,
          "priceAvg30d": 10.93
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.28,
          "priceAvg30d": 11.05
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.38,
          "priceAvg30d": 11.13
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 11.7,
          "priceAvg30d": 11.56
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.61,
          "priceAvg30d": 11.51
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.25,
          "priceAvg30d": 12.76
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.09,
          "priceAvg30d": 13.85
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.95,
          "priceAvg30d": 14.39
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.39,
          "priceAvg30d": 15.35
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.0,
          "priceAvg30d": 12.44
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.2,
          "priceAvg30d": 11.62
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 10.7
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 2.9,
          "priceAvg30d": 11.85
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 12.24
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 12.51
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.02,
          "priceAvg30d": 11.76
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 11.03
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 10.71
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 10.65
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 10.65
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 9.98
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 10.21
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 11.46
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 1.0,
          "priceAvg30d": 12.8
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.9,
          "priceAvg30d": 13.8
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 2.5,
          "priceAvg30d": 15.18
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.11,
          "priceAvg30d": 18.26
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.16,
          "priceAvg30d": 21.61
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.0,
          "priceAvg30d": 23.91
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.28,
          "priceAvg30d": 27.03
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 11.25,
          "priceAvg30d": 27.3
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.73,
          "priceAvg30d": 28.26
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.73,
          "priceAvg30d": 28.47
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 16.73,
          "priceAvg30d": 27.4
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 14.61,
          "priceAvg30d": 25.96
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.09,
          "priceAvg30d": 23.97
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.47,
          "priceAvg30d": 22.52
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 10.4,
          "priceAvg30d": 21.54
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 12.61,
          "priceAvg30d": 20.62
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.14,
          "priceAvg30d": 19.61
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 11.7,
          "priceAvg30d": 18.38
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 11.25,
          "priceAvg30d": 16.57
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.95,
          "priceAvg30d": 16.0
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.99,
          "priceAvg30d": 12.26
        }
      ],
      "avg": 8.01,
      "max": 16.73,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 12.34,
      "spreadLowAvg": 0.59,
      "spreadHighAvg": 12.93,
      "avg30d": 15.85,
      "spread30dAvg": 16.74,
      "historyDays": 30
    }
  }
};
