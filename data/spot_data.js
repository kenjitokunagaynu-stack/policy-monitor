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
  "targetDate": "2026-10-06",
  "fetchedAt": "2026-10-06T12:51:37+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 22.77,
        "priceAvg30d": 17.32
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 22.5,
        "priceAvg30d": 15.67
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 21.44,
        "priceAvg30d": 14.52
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 21.0,
        "priceAvg30d": 13.96
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 21.44,
        "priceAvg30d": 13.58
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 22.0,
        "priceAvg30d": 14.31
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 22.06,
        "priceAvg30d": 15.21
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 22.77,
        "priceAvg30d": 16.03
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 22.77,
        "priceAvg30d": 16.87
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 23.38,
        "priceAvg30d": 18.02
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 23.52,
        "priceAvg30d": 19.0
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 23.53,
        "priceAvg30d": 18.62
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 23.37,
        "priceAvg30d": 17.79
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 22.77,
        "priceAvg30d": 15.39
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 19.94,
        "priceAvg30d": 13.59
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 15.78,
        "priceAvg30d": 13.31
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 15.78,
        "priceAvg30d": 13.83
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 15.49,
        "priceAvg30d": 14.7
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 11.33,
        "priceAvg30d": 15.46
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 10.63,
        "priceAvg30d": 15.03
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 10.27,
        "priceAvg30d": 14.18
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 9.81,
        "priceAvg30d": 13.74
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 9.81,
        "priceAvg30d": 13.62
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 9.19,
        "priceAvg30d": 13.24
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 5.0,
        "priceAvg30d": 11.55
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 6.3,
        "priceAvg30d": 12.11
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 10.63,
        "priceAvg30d": 13.99
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 15.62,
        "priceAvg30d": 15.92
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 16.83,
        "priceAvg30d": 16.91
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 21.77,
        "priceAvg30d": 18.97
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 23.52,
        "priceAvg30d": 19.19
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 28.19,
        "priceAvg30d": 22.37
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 35.16,
        "priceAvg30d": 23.83
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 40.0,
        "priceAvg30d": 26.27
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 38.11,
        "priceAvg30d": 26.5
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 38.11,
        "priceAvg30d": 27.08
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 33.88,
        "priceAvg30d": 27.1
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 33.59,
        "priceAvg30d": 26.72
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 31.0,
        "priceAvg30d": 25.47
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 26.53,
        "priceAvg30d": 24.07
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 25.21,
        "priceAvg30d": 23.11
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 24.85,
        "priceAvg30d": 22.46
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 24.66,
        "priceAvg30d": 21.56
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 24.2,
        "priceAvg30d": 21.42
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 24.03,
        "priceAvg30d": 21.25
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 23.33,
        "priceAvg30d": 19.78
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 23.33,
        "priceAvg30d": 19.56
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 22.5,
        "priceAvg30d": 17.46
      }
    ],
    "avg": 21.66,
    "max": 40.0,
    "maxBlock": 34,
    "min": 5.0,
    "minBlock": 25,
    "spread3h": 22.6,
    "spreadLowAvg": 10.23,
    "spreadHighAvg": 32.83,
    "avg30d": 18.16,
    "spread30dAvg": 15.16,
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
          "price": 13.0,
          "priceAvg30d": 14.4
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.53,
          "priceAvg30d": 13.17
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.32,
          "priceAvg30d": 13.1
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.45,
          "priceAvg30d": 13.02
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.38,
          "priceAvg30d": 13.87
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.0,
          "priceAvg30d": 14.69
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.55,
          "priceAvg30d": 15.55
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.77,
          "priceAvg30d": 16.07
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.78,
          "priceAvg30d": 16.13
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.41,
          "priceAvg30d": 16.41
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.82,
          "priceAvg30d": 16.85
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.96,
          "priceAvg30d": 15.8
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.61,
          "priceAvg30d": 14.15
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.05,
          "priceAvg30d": 12.3
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.71,
          "priceAvg30d": 10.75
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.51,
          "priceAvg30d": 9.83
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.27,
          "priceAvg30d": 8.75
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.27,
          "priceAvg30d": 9.49
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.27,
          "priceAvg30d": 8.52
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.33,
          "priceAvg30d": 7.73
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.33,
          "priceAvg30d": 7.13
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.33,
          "priceAvg30d": 7.1
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.33,
          "priceAvg30d": 7.35
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.33,
          "priceAvg30d": 6.77
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.25,
          "priceAvg30d": 6.24
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.13,
          "priceAvg30d": 6.28
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.22,
          "priceAvg30d": 7.47
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.27,
          "priceAvg30d": 9.59
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.51,
          "priceAvg30d": 9.96
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.51,
          "priceAvg30d": 11.75
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 20.0,
          "priceAvg30d": 13.57
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.35,
          "priceAvg30d": 17.01
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.07,
          "priceAvg30d": 20.37
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 50.01,
          "priceAvg30d": 22.92
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 45.06,
          "priceAvg30d": 22.78
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 44.21,
          "priceAvg30d": 22.91
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.99,
          "priceAvg30d": 22.26
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.64,
          "priceAvg30d": 23.55
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 34.52,
          "priceAvg30d": 22.43
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.5,
          "priceAvg30d": 20.87
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.79,
          "priceAvg30d": 20.01
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.79,
          "priceAvg30d": 19.69
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.23,
          "priceAvg30d": 18.54
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.93,
          "priceAvg30d": 18.25
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.99,
          "priceAvg30d": 17.63
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.96,
          "priceAvg30d": 16.69
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.05,
          "priceAvg30d": 15.86
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.77,
          "priceAvg30d": 14.88
        }
      ],
      "avg": 21.25,
      "max": 50.01,
      "maxBlock": 34,
      "min": 8.13,
      "minBlock": 26,
      "spread3h": 27.63,
      "spreadLowAvg": 9.65,
      "spreadHighAvg": 37.28,
      "avg30d": 14.38,
      "spread30dAvg": 14.19,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.11,
          "priceAvg30d": 19.23
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.8,
          "priceAvg30d": 17.8
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.53,
          "priceAvg30d": 17.26
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.53,
          "priceAvg30d": 16.9
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.53,
          "priceAvg30d": 16.86
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.53,
          "priceAvg30d": 16.98
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.55,
          "priceAvg30d": 18.14
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.77,
          "priceAvg30d": 18.3
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.78,
          "priceAvg30d": 18.49
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.41,
          "priceAvg30d": 18.71
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.82,
          "priceAvg30d": 19.08
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.96,
          "priceAvg30d": 18.73
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.61,
          "priceAvg30d": 17.59
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.05,
          "priceAvg30d": 15.78
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.52,
          "priceAvg30d": 13.81
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 23.0,
          "priceAvg30d": 12.65
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 22.73,
          "priceAvg30d": 10.33
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.0,
          "priceAvg30d": 10.26
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 22.45,
          "priceAvg30d": 10.49
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 16.0,
          "priceAvg30d": 9.88
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.0,
          "priceAvg30d": 9.11
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.61,
          "priceAvg30d": 8.96
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.33,
          "priceAvg30d": 8.75
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.33,
          "priceAvg30d": 7.98
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.25,
          "priceAvg30d": 7.07
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.13,
          "priceAvg30d": 7.73
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 14.0,
          "priceAvg30d": 9.19
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 16.0,
          "priceAvg30d": 10.9
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.89,
          "priceAvg30d": 11.6
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.29,
          "priceAvg30d": 13.93
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.59,
          "priceAvg30d": 16.07
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 35.81,
          "priceAvg30d": 20.85
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.07,
          "priceAvg30d": 23.98
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 50.01,
          "priceAvg30d": 27.87
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 45.06,
          "priceAvg30d": 27.65
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 44.21,
          "priceAvg30d": 28.21
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.99,
          "priceAvg30d": 28.16
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.64,
          "priceAvg30d": 27.75
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 34.52,
          "priceAvg30d": 27.02
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.5,
          "priceAvg30d": 25.15
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.79,
          "priceAvg30d": 24.09
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.79,
          "priceAvg30d": 23.24
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.23,
          "priceAvg30d": 22.26
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.93,
          "priceAvg30d": 22.06
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.99,
          "priceAvg30d": 22.23
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.45,
          "priceAvg30d": 21.33
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.05,
          "priceAvg30d": 20.85
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.77,
          "priceAvg30d": 19.59
        }
      ],
      "avg": 25.16,
      "max": 50.01,
      "maxBlock": 34,
      "min": 8.13,
      "minBlock": 26,
      "spread3h": 26.49,
      "spreadLowAvg": 13.63,
      "spreadHighAvg": 40.12,
      "avg30d": 17.52,
      "spread30dAvg": 17.54,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.11,
          "priceAvg30d": 21.23
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.8,
          "priceAvg30d": 20.36
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.53,
          "priceAvg30d": 19.84
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.53,
          "priceAvg30d": 19.93
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.53,
          "priceAvg30d": 19.64
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.53,
          "priceAvg30d": 19.85
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.55,
          "priceAvg30d": 20.46
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.77,
          "priceAvg30d": 20.68
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.78,
          "priceAvg30d": 21.09
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.41,
          "priceAvg30d": 21.38
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.82,
          "priceAvg30d": 21.64
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 24.96,
          "priceAvg30d": 21.34
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.61,
          "priceAvg30d": 20.81
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.05,
          "priceAvg30d": 20.21
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.52,
          "priceAvg30d": 20.09
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 23.0,
          "priceAvg30d": 20.26
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 22.73,
          "priceAvg30d": 20.3
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.0,
          "priceAvg30d": 22.0
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 22.45,
          "priceAvg30d": 22.43
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 21.79,
          "priceAvg30d": 22.58
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 19.95,
          "priceAvg30d": 21.65
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 18.26,
          "priceAvg30d": 21.8
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 19.95,
          "priceAvg30d": 21.87
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 19.94,
          "priceAvg30d": 21.64
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.82,
          "priceAvg30d": 20.16
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.9,
          "priceAvg30d": 20.85
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.48,
          "priceAvg30d": 21.94
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.71,
          "priceAvg30d": 23.42
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.89,
          "priceAvg30d": 24.3
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.29,
          "priceAvg30d": 25.92
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.59,
          "priceAvg30d": 24.38
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 35.81,
          "priceAvg30d": 27.22
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.07,
          "priceAvg30d": 29.2
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 50.01,
          "priceAvg30d": 30.95
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 45.06,
          "priceAvg30d": 30.35
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 44.21,
          "priceAvg30d": 30.7
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.99,
          "priceAvg30d": 30.65
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.64,
          "priceAvg30d": 30.48
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 34.52,
          "priceAvg30d": 29.21
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.5,
          "priceAvg30d": 27.31
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.79,
          "priceAvg30d": 26.01
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.79,
          "priceAvg30d": 25.38
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.23,
          "priceAvg30d": 24.5
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.93,
          "priceAvg30d": 25.14
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.99,
          "priceAvg30d": 25.42
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.45,
          "priceAvg30d": 24.52
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.05,
          "priceAvg30d": 24.2
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.77,
          "priceAvg30d": 22.46
        }
      ],
      "avg": 26.73,
      "max": 50.01,
      "maxBlock": 34,
      "min": 15.82,
      "minBlock": 25,
      "spread3h": 20.08,
      "spreadLowAvg": 20.04,
      "spreadHighAvg": 40.12,
      "avg30d": 23.49,
      "spread30dAvg": 12.21,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.11,
          "priceAvg30d": 21.2
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 23.8,
          "priceAvg30d": 20.43
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.53,
          "priceAvg30d": 19.84
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.53,
          "priceAvg30d": 19.6
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.53,
          "priceAvg30d": 19.28
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.53,
          "priceAvg30d": 19.48
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.55,
          "priceAvg30d": 20.09
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 23.8,
          "priceAvg30d": 20.52
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 23.82,
          "priceAvg30d": 20.93
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.41,
          "priceAvg30d": 21.3
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.82,
          "priceAvg30d": 21.59
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.01,
          "priceAvg30d": 21.48
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 25.23,
          "priceAvg30d": 21.2
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.99,
          "priceAvg30d": 20.4
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.52,
          "priceAvg30d": 19.67
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 23.0,
          "priceAvg30d": 19.41
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 22.73,
          "priceAvg30d": 20.2
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.0,
          "priceAvg30d": 21.44
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 22.45,
          "priceAvg30d": 21.76
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 21.79,
          "priceAvg30d": 21.54
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 19.95,
          "priceAvg30d": 20.73
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 18.26,
          "priceAvg30d": 20.64
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 19.95,
          "priceAvg30d": 20.62
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 19.94,
          "priceAvg30d": 20.34
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.82,
          "priceAvg30d": 18.71
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.9,
          "priceAvg30d": 19.3
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.48,
          "priceAvg30d": 21.51
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.71,
          "priceAvg30d": 23.5
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 24.89,
          "priceAvg30d": 24.28
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 26.29,
          "priceAvg30d": 25.35
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.59,
          "priceAvg30d": 25.21
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 35.81,
          "priceAvg30d": 27.21
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 44.07,
          "priceAvg30d": 28.1
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 46.0,
          "priceAvg30d": 30.06
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 45.06,
          "priceAvg30d": 30.06
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 44.21,
          "priceAvg30d": 30.32
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 39.99,
          "priceAvg30d": 30.01
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 38.64,
          "priceAvg30d": 29.53
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 34.52,
          "priceAvg30d": 28.54
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 32.5,
          "priceAvg30d": 27.04
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.79,
          "priceAvg30d": 26.02
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.79,
          "priceAvg30d": 25.46
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.23,
          "priceAvg30d": 24.59
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.93,
          "priceAvg30d": 25.08
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 25.99,
          "priceAvg30d": 25.3
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 25.45,
          "priceAvg30d": 24.33
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.05,
          "priceAvg30d": 24.26
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 23.77,
          "priceAvg30d": 22.64
        }
      ],
      "avg": 26.68,
      "max": 46.0,
      "maxBlock": 34,
      "min": 15.82,
      "minBlock": 25,
      "spread3h": 20.08,
      "spreadLowAvg": 20.04,
      "spreadHighAvg": 40.12,
      "avg30d": 23.13,
      "spread30dAvg": 13.23,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.62,
          "priceAvg30d": 10.96
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.62,
          "priceAvg30d": 11.16
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.62,
          "priceAvg30d": 11.43
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.81,
          "priceAvg30d": 11.08
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.81,
          "priceAvg30d": 10.91
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.62,
          "priceAvg30d": 11.44
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.4,
          "priceAvg30d": 12.07
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.0,
          "priceAvg30d": 12.47
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.18,
          "priceAvg30d": 12.34
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.99,
          "priceAvg30d": 13.35
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.94,
          "priceAvg30d": 14.03
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.94,
          "priceAvg30d": 14.24
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.82,
          "priceAvg30d": 15.06
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.43,
          "priceAvg30d": 12.8
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.81,
          "priceAvg30d": 11.76
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.97,
          "priceAvg30d": 10.64
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 16.65,
          "priceAvg30d": 10.95
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.0,
          "priceAvg30d": 13.45
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 22.45,
          "priceAvg30d": 15.94
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 21.79,
          "priceAvg30d": 16.27
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 19.95,
          "priceAvg30d": 15.81
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 18.26,
          "priceAvg30d": 15.55
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 19.95,
          "priceAvg30d": 15.47
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 19.94,
          "priceAvg30d": 15.38
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.82,
          "priceAvg30d": 12.93
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 14.99,
          "priceAvg30d": 13.67
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 19.88,
          "priceAvg30d": 15.58
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 19.94,
          "priceAvg30d": 17.68
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 19.95,
          "priceAvg30d": 17.78
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 21.77,
          "priceAvg30d": 18.97
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 21.77,
          "priceAvg30d": 18.42
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.33,
          "priceAvg30d": 19.73
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 21.77,
          "priceAvg30d": 19.16
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.0,
          "priceAvg30d": 20.31
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.82,
          "priceAvg30d": 20.41
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.18,
          "priceAvg30d": 21.73
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.95,
          "priceAvg30d": 21.22
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.46,
          "priceAvg30d": 21.17
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.1,
          "priceAvg30d": 19.98
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.51,
          "priceAvg30d": 18.44
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.46,
          "priceAvg30d": 17.88
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.95,
          "priceAvg30d": 17.26
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.77,
          "priceAvg30d": 17.15
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.46,
          "priceAvg30d": 15.87
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.82,
          "priceAvg30d": 15.88
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.24,
          "priceAvg30d": 14.36
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.4,
          "priceAvg30d": 14.11
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.22,
          "priceAvg30d": 11.43
        }
      ],
      "avg": 17.79,
      "max": 24.33,
      "maxBlock": 32,
      "min": 9.97,
      "minBlock": 16,
      "spread3h": 2.15,
      "spreadLowAvg": 18.36,
      "spreadHighAvg": 20.51,
      "avg30d": 15.33,
      "spread30dAvg": 10.45,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.62,
          "priceAvg30d": 10.87
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.62,
          "priceAvg30d": 11.05
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.62,
          "priceAvg30d": 11.34
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.81,
          "priceAvg30d": 10.99
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.81,
          "priceAvg30d": 10.77
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.62,
          "priceAvg30d": 11.34
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.4,
          "priceAvg30d": 11.98
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.0,
          "priceAvg30d": 12.39
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.18,
          "priceAvg30d": 12.27
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.99,
          "priceAvg30d": 13.35
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.94,
          "priceAvg30d": 14.01
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.94,
          "priceAvg30d": 14.16
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.82,
          "priceAvg30d": 14.99
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.43,
          "priceAvg30d": 12.69
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.81,
          "priceAvg30d": 11.73
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.97,
          "priceAvg30d": 10.21
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 16.65,
          "priceAvg30d": 10.38
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.0,
          "priceAvg30d": 12.02
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 22.45,
          "priceAvg30d": 14.62
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 21.79,
          "priceAvg30d": 14.66
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 19.95,
          "priceAvg30d": 14.28
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 18.26,
          "priceAvg30d": 14.17
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 19.95,
          "priceAvg30d": 14.6
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 19.94,
          "priceAvg30d": 13.95
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.82,
          "priceAvg30d": 11.99
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 14.99,
          "priceAvg30d": 12.51
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 19.88,
          "priceAvg30d": 14.52
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 19.94,
          "priceAvg30d": 17.04
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 19.95,
          "priceAvg30d": 16.85
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 21.77,
          "priceAvg30d": 17.88
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 21.77,
          "priceAvg30d": 17.1
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.33,
          "priceAvg30d": 18.54
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 21.77,
          "priceAvg30d": 18.64
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.0,
          "priceAvg30d": 19.95
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.82,
          "priceAvg30d": 20.27
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.18,
          "priceAvg30d": 21.6
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.95,
          "priceAvg30d": 21.11
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.46,
          "priceAvg30d": 21.03
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.1,
          "priceAvg30d": 19.85
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.51,
          "priceAvg30d": 18.31
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.46,
          "priceAvg30d": 17.88
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.95,
          "priceAvg30d": 17.26
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 21.77,
          "priceAvg30d": 17.15
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.46,
          "priceAvg30d": 15.87
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.82,
          "priceAvg30d": 15.88
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.24,
          "priceAvg30d": 14.36
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.4,
          "priceAvg30d": 14.11
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.22,
          "priceAvg30d": 11.43
        }
      ],
      "avg": 17.79,
      "max": 24.33,
      "maxBlock": 32,
      "min": 9.97,
      "minBlock": 16,
      "spread3h": 2.15,
      "spreadLowAvg": 18.36,
      "spreadHighAvg": 20.51,
      "avg30d": 14.87,
      "spread30dAvg": 10.15,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.62,
          "priceAvg30d": 10.87
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.62,
          "priceAvg30d": 11.05
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.62,
          "priceAvg30d": 11.34
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.81,
          "priceAvg30d": 10.99
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.81,
          "priceAvg30d": 10.75
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.62,
          "priceAvg30d": 11.21
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.4,
          "priceAvg30d": 11.72
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.0,
          "priceAvg30d": 12.39
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.18,
          "priceAvg30d": 12.15
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.99,
          "priceAvg30d": 13.29
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.94,
          "priceAvg30d": 13.99
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.94,
          "priceAvg30d": 14.12
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.82,
          "priceAvg30d": 14.91
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.43,
          "priceAvg30d": 12.43
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.81,
          "priceAvg30d": 11.4
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.97,
          "priceAvg30d": 9.84
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.63,
          "priceAvg30d": 9.77
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.81,
          "priceAvg30d": 10.08
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.16,
          "priceAvg30d": 10.47
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 5.0,
          "priceAvg30d": 10.21
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 10.55
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 3.01,
          "priceAvg30d": 10.31
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.0,
          "priceAvg30d": 9.97
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 2.5,
          "priceAvg30d": 9.67
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 9.03
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 9.16
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.5,
          "priceAvg30d": 10.58
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 4.37,
          "priceAvg30d": 11.91
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 6.1,
          "priceAvg30d": 11.28
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.41,
          "priceAvg30d": 12.09
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.81,
          "priceAvg30d": 12.82
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.46,
          "priceAvg30d": 15.21
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.81,
          "priceAvg30d": 15.7
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.0,
          "priceAvg30d": 18.32
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.82,
          "priceAvg30d": 19.79
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.18,
          "priceAvg30d": 21.19
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.95,
          "priceAvg30d": 20.7
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.46,
          "priceAvg30d": 20.55
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.06,
          "priceAvg30d": 19.73
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.51,
          "priceAvg30d": 18.31
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.46,
          "priceAvg30d": 17.88
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.18,
          "priceAvg30d": 17.26
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.64,
          "priceAvg30d": 17.15
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.86,
          "priceAvg30d": 15.87
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.43,
          "priceAvg30d": 15.85
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.24,
          "priceAvg30d": 14.35
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.4,
          "priceAvg30d": 14.11
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.22,
          "priceAvg30d": 11.43
        }
      ],
      "avg": 12.63,
      "max": 20.64,
      "maxBlock": 43,
      "min": 0.01,
      "minBlock": 25,
      "spread3h": 14.21,
      "spreadLowAvg": 3.4,
      "spreadHighAvg": 17.61,
      "avg30d": 13.41,
      "spread30dAvg": 10.6,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.62,
          "priceAvg30d": 10.33
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.62,
          "priceAvg30d": 10.13
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.62,
          "priceAvg30d": 10.32
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.81,
          "priceAvg30d": 10.03
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.81,
          "priceAvg30d": 9.7
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.62,
          "priceAvg30d": 10.2
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.4,
          "priceAvg30d": 10.47
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.0,
          "priceAvg30d": 11.14
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.18,
          "priceAvg30d": 10.4
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.99,
          "priceAvg30d": 11.77
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.94,
          "priceAvg30d": 12.56
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.94,
          "priceAvg30d": 12.66
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.82,
          "priceAvg30d": 13.0
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.43,
          "priceAvg30d": 10.61
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.81,
          "priceAvg30d": 9.36
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.97,
          "priceAvg30d": 8.33
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.41,
          "priceAvg30d": 8.32
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.81,
          "priceAvg30d": 8.87
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.16,
          "priceAvg30d": 8.48
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 7.89
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 8.16
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 8.01
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 7.91
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 7.94
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 7.8
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 7.78
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 8.83
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 10.25
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 6.1,
          "priceAvg30d": 9.73
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.41,
          "priceAvg30d": 9.83
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.51,
          "priceAvg30d": 10.29
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.46,
          "priceAvg30d": 12.16
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.81,
          "priceAvg30d": 12.16
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.0,
          "priceAvg30d": 14.27
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.82,
          "priceAvg30d": 14.98
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.18,
          "priceAvg30d": 17.43
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.95,
          "priceAvg30d": 17.88
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.46,
          "priceAvg30d": 17.52
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.06,
          "priceAvg30d": 15.94
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.51,
          "priceAvg30d": 13.35
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.46,
          "priceAvg30d": 13.6
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.18,
          "priceAvg30d": 12.82
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.64,
          "priceAvg30d": 12.73
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.86,
          "priceAvg30d": 11.81
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.43,
          "priceAvg30d": 12.05
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.24,
          "priceAvg30d": 11.32
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.4,
          "priceAvg30d": 11.59
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.22,
          "priceAvg30d": 9.93
        }
      ],
      "avg": 12.07,
      "max": 20.64,
      "maxBlock": 43,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 13.04,
      "spreadLowAvg": 4.57,
      "spreadHighAvg": 17.61,
      "avg30d": 11.1,
      "spread30dAvg": 9.43,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 11.62,
          "priceAvg30d": 10.53
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.62,
          "priceAvg30d": 10.71
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 11.62,
          "priceAvg30d": 10.68
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.81,
          "priceAvg30d": 10.47
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.81,
          "priceAvg30d": 10.23
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.62,
          "priceAvg30d": 10.6
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 16.4,
          "priceAvg30d": 10.95
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.0,
          "priceAvg30d": 11.76
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.18,
          "priceAvg30d": 11.56
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.99,
          "priceAvg30d": 12.75
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.94,
          "priceAvg30d": 13.61
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.94,
          "priceAvg30d": 13.69
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.82,
          "priceAvg30d": 14.72
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.43,
          "priceAvg30d": 11.88
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.81,
          "priceAvg30d": 10.57
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.97,
          "priceAvg30d": 8.97
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.63,
          "priceAvg30d": 9.0
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.81,
          "priceAvg30d": 8.79
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 8.16,
          "priceAvg30d": 8.8
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 5.0,
          "priceAvg30d": 8.22
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.5,
          "priceAvg30d": 8.12
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 3.01,
          "priceAvg30d": 7.79
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 1.0,
          "priceAvg30d": 7.55
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.04,
          "priceAvg30d": 7.48
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 7.27
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 7.51
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 8.1
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 4.37,
          "priceAvg30d": 8.84
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 6.1,
          "priceAvg30d": 9.41
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.41,
          "priceAvg30d": 10.65
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.81,
          "priceAvg30d": 12.23
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.46,
          "priceAvg30d": 14.5
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.81,
          "priceAvg30d": 15.7
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.0,
          "priceAvg30d": 18.32
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.82,
          "priceAvg30d": 19.79
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.18,
          "priceAvg30d": 21.19
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 16.95,
          "priceAvg30d": 20.7
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.46,
          "priceAvg30d": 20.55
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.06,
          "priceAvg30d": 19.73
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.51,
          "priceAvg30d": 18.31
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.46,
          "priceAvg30d": 17.88
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.18,
          "priceAvg30d": 17.26
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.64,
          "priceAvg30d": 17.15
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.86,
          "priceAvg30d": 15.87
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.43,
          "priceAvg30d": 15.85
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 13.24,
          "priceAvg30d": 14.35
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.4,
          "priceAvg30d": 14.11
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.22,
          "priceAvg30d": 11.16
        }
      ],
      "avg": 12.4,
      "max": 20.64,
      "maxBlock": 43,
      "min": 0.01,
      "minBlock": 25,
      "spread3h": 16.04,
      "spreadLowAvg": 1.57,
      "spreadHighAvg": 17.61,
      "avg30d": 12.62,
      "spread30dAvg": 11.24,
      "historyDays": 30
    }
  }
};
