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
  "targetDate": "2026-09-17",
  "fetchedAt": "2026-09-17T09:04:50+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 18.56,
        "priceAvg30d": 17.77
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 16.95,
        "priceAvg30d": 16.91
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 14.07,
        "priceAvg30d": 16.31
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 12.99,
        "priceAvg30d": 16.35
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 12.95,
        "priceAvg30d": 16.27
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 12.99,
        "priceAvg30d": 16.37
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 14.07,
        "priceAvg30d": 16.55
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 14.19,
        "priceAvg30d": 16.65
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 16.0,
        "priceAvg30d": 16.81
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 17.65,
        "priceAvg30d": 17.35
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 19.9,
        "priceAvg30d": 18.07
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 19.9,
        "priceAvg30d": 17.71
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 19.9,
        "priceAvg30d": 17.11
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 17.48,
        "priceAvg30d": 16.51
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 15.5,
        "priceAvg30d": 16.0
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 13.52,
        "priceAvg30d": 16.48
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 12.16,
        "priceAvg30d": 17.37
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 12.95,
        "priceAvg30d": 19.12
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 13.16,
        "priceAvg30d": 19.72
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 12.34,
        "priceAvg30d": 19.59
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 11.48,
        "priceAvg30d": 18.64
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 11.21,
        "priceAvg30d": 18.66
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 11.21,
        "priceAvg30d": 18.7
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 10.31,
        "priceAvg30d": 18.54
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 9.87,
        "priceAvg30d": 17.11
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 9.87,
        "priceAvg30d": 17.56
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 10.58,
        "priceAvg30d": 18.97
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 11.47,
        "priceAvg30d": 20.7
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 12.92,
        "priceAvg30d": 22.27
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 14.9,
        "priceAvg30d": 24.21
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 15.78,
        "priceAvg30d": 23.24
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 22.08,
        "priceAvg30d": 26.12
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 22.67,
        "priceAvg30d": 27.58
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 26.08,
        "priceAvg30d": 29.98
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 25.1,
        "priceAvg30d": 29.98
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 26.61,
        "priceAvg30d": 30.59
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 28.23,
        "priceAvg30d": 30.62
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 26.49,
        "priceAvg30d": 30.04
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 23.98,
        "priceAvg30d": 28.35
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 22.38,
        "priceAvg30d": 26.26
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 21.95,
        "priceAvg30d": 24.46
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 21.66,
        "priceAvg30d": 22.47
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 21.39,
        "priceAvg30d": 21.26
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 19.9,
        "priceAvg30d": 23.17
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 19.9,
        "priceAvg30d": 21.99
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 18.9,
        "priceAvg30d": 19.94
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 17.54,
        "priceAvg30d": 19.73
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 17.48,
        "priceAvg30d": 17.85
      }
    ],
    "avg": 17.07,
    "max": 28.23,
    "maxBlock": 37,
    "min": 9.87,
    "minBlock": 25,
    "spread3h": 14.33,
    "spreadLowAvg": 10.78,
    "spreadHighAvg": 25.11,
    "avg30d": 20.71,
    "spread30dAvg": 13.98,
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
          "price": 20.59,
          "priceAvg30d": 14.35
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.9,
          "priceAvg30d": 13.79
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.9,
          "priceAvg30d": 13.34
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 17.47,
          "priceAvg30d": 13.2
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.1,
          "priceAvg30d": 13.97
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.75,
          "priceAvg30d": 14.5
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 17.5,
          "priceAvg30d": 15.46
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.0,
          "priceAvg30d": 15.66
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.7,
          "priceAvg30d": 15.94
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.9,
          "priceAvg30d": 16.01
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.9,
          "priceAvg30d": 15.85
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.06,
          "priceAvg30d": 14.91
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.9,
          "priceAvg30d": 13.9
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.14,
          "priceAvg30d": 12.25
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.0,
          "priceAvg30d": 11.41
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.0,
          "priceAvg30d": 10.81
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.53,
          "priceAvg30d": 10.5
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.53,
          "priceAvg30d": 10.72
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.53,
          "priceAvg30d": 10.24
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.88,
          "priceAvg30d": 9.41
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.23,
          "priceAvg30d": 8.82
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.4,
          "priceAvg30d": 8.89
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.21,
          "priceAvg30d": 9.19
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 7.0,
          "priceAvg30d": 8.49
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 6.0,
          "priceAvg30d": 8.03
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 6.0,
          "priceAvg30d": 7.94
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 7.0,
          "priceAvg30d": 9.33
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.53,
          "priceAvg30d": 11.27
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.53,
          "priceAvg30d": 11.54
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.53,
          "priceAvg30d": 13.13
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.53,
          "priceAvg30d": 14.72
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.41,
          "priceAvg30d": 16.94
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.55,
          "priceAvg30d": 19.68
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.11,
          "priceAvg30d": 22.32
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 24.63,
          "priceAvg30d": 22.7
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 25.97,
          "priceAvg30d": 23.25
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 27.0,
          "priceAvg30d": 22.92
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.66,
          "priceAvg30d": 23.55
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.79,
          "priceAvg30d": 22.4
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 14.97,
          "priceAvg30d": 21.19
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.77,
          "priceAvg30d": 20.14
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.35,
          "priceAvg30d": 19.34
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.8,
          "priceAvg30d": 18.08
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.85,
          "priceAvg30d": 18.52
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.77,
          "priceAvg30d": 18.81
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.29,
          "priceAvg30d": 17.14
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.9,
          "priceAvg30d": 16.48
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 19.9,
          "priceAvg30d": 15.17
        }
      ],
      "avg": 16.0,
      "max": 27.0,
      "maxBlock": 37,
      "min": 6.0,
      "minBlock": 25,
      "spread3h": 15.66,
      "spreadLowAvg": 7.69,
      "spreadHighAvg": 23.36,
      "avg30d": 14.92,
      "spread30dAvg": 12.83,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 20.59,
          "priceAvg30d": 19.0
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.9,
          "priceAvg30d": 17.96
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.9,
          "priceAvg30d": 16.8
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 17.47,
          "priceAvg30d": 16.69
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.1,
          "priceAvg30d": 16.95
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.75,
          "priceAvg30d": 17.1
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 17.5,
          "priceAvg30d": 18.07
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.0,
          "priceAvg30d": 18.25
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.7,
          "priceAvg30d": 18.62
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.9,
          "priceAvg30d": 19.0
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.9,
          "priceAvg30d": 19.57
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.06,
          "priceAvg30d": 18.76
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.9,
          "priceAvg30d": 17.15
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.14,
          "priceAvg30d": 14.82
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.0,
          "priceAvg30d": 14.05
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 14.78,
          "priceAvg30d": 13.5
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.53,
          "priceAvg30d": 11.53
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.44,
          "priceAvg30d": 12.48
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.44,
          "priceAvg30d": 13.04
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.88,
          "priceAvg30d": 12.59
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.23,
          "priceAvg30d": 11.82
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 8.4,
          "priceAvg30d": 12.13
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.21,
          "priceAvg30d": 11.76
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 7.0,
          "priceAvg30d": 10.8
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 6.0,
          "priceAvg30d": 9.6
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 6.0,
          "priceAvg30d": 10.11
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 6.1,
          "priceAvg30d": 11.79
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 6.36,
          "priceAvg30d": 13.4
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.39,
          "priceAvg30d": 13.6
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.66,
          "priceAvg30d": 15.63
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.44,
          "priceAvg30d": 17.26
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 13.41,
          "priceAvg30d": 20.02
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 17.55,
          "priceAvg30d": 23.24
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.11,
          "priceAvg30d": 26.14
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 24.63,
          "priceAvg30d": 26.11
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 25.97,
          "priceAvg30d": 26.7
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 27.0,
          "priceAvg30d": 26.7
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.66,
          "priceAvg30d": 26.64
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.79,
          "priceAvg30d": 24.78
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.35,
          "priceAvg30d": 23.16
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.77,
          "priceAvg30d": 21.42
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.35,
          "priceAvg30d": 20.46
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.8,
          "priceAvg30d": 19.38
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.85,
          "priceAvg30d": 20.17
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.74,
          "priceAvg30d": 21.53
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.29,
          "priceAvg30d": 19.77
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.9,
          "priceAvg30d": 20.23
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 19.9,
          "priceAvg30d": 19.13
        }
      ],
      "avg": 16.04,
      "max": 27.0,
      "maxBlock": 37,
      "min": 6.0,
      "minBlock": 25,
      "spread3h": 17.24,
      "spreadLowAvg": 7.01,
      "spreadHighAvg": 24.25,
      "avg30d": 17.7,
      "spread30dAvg": 14.07,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 20.59,
          "priceAvg30d": 19.0
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.9,
          "priceAvg30d": 18.51
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.9,
          "priceAvg30d": 17.86
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 18.34,
          "priceAvg30d": 18.39
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.1,
          "priceAvg30d": 18.3
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.75,
          "priceAvg30d": 18.29
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 17.5,
          "priceAvg30d": 18.54
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.0,
          "priceAvg30d": 18.49
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.7,
          "priceAvg30d": 18.82
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 19.9,
          "priceAvg30d": 19.13
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.9,
          "priceAvg30d": 19.73
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.06,
          "priceAvg30d": 19.25
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.9,
          "priceAvg30d": 18.41
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 19.9,
          "priceAvg30d": 18.56
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 19.9,
          "priceAvg30d": 18.96
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.1,
          "priceAvg30d": 19.53
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 22.27,
          "priceAvg30d": 20.71
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.52,
          "priceAvg30d": 23.1
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.23,
          "priceAvg30d": 22.75
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.85,
          "priceAvg30d": 23.11
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.74,
          "priceAvg30d": 22.58
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.27,
          "priceAvg30d": 23.08
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 22.12,
          "priceAvg30d": 23.38
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.84,
          "priceAvg30d": 23.57
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.28,
          "priceAvg30d": 22.05
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.0,
          "priceAvg30d": 22.76
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.88,
          "priceAvg30d": 23.81
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.04,
          "priceAvg30d": 25.21
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 22.42,
          "priceAvg30d": 25.98
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.18,
          "priceAvg30d": 27.58
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 22.29,
          "priceAvg30d": 24.62
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 23.66,
          "priceAvg30d": 27.15
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 24.21,
          "priceAvg30d": 28.64
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.11,
          "priceAvg30d": 29.77
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 24.63,
          "priceAvg30d": 29.36
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 25.97,
          "priceAvg30d": 29.12
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 27.0,
          "priceAvg30d": 28.43
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 25.66,
          "priceAvg30d": 28.48
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.79,
          "priceAvg30d": 26.64
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.65,
          "priceAvg30d": 25.04
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.26,
          "priceAvg30d": 22.74
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.78,
          "priceAvg30d": 22.11
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.51,
          "priceAvg30d": 21.24
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.5,
          "priceAvg30d": 24.44
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.74,
          "priceAvg30d": 23.04
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.7,
          "priceAvg30d": 21.45
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.92,
          "priceAvg30d": 21.73
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 19.9,
          "priceAvg30d": 19.68
        }
      ],
      "avg": 21.36,
      "max": 27.0,
      "maxBlock": 37,
      "min": 15.0,
      "minBlock": 26,
      "spread3h": 4.04,
      "spreadLowAvg": 20.6,
      "spreadHighAvg": 24.64,
      "avg30d": 22.56,
      "spread30dAvg": 10.94,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 22.38,
          "priceAvg30d": 18.97
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.85,
          "priceAvg30d": 18.55
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 19.9,
          "priceAvg30d": 18.0
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 18.34,
          "priceAvg30d": 18.38
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 16.1,
          "priceAvg30d": 18.3
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.75,
          "priceAvg30d": 18.36
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 17.5,
          "priceAvg30d": 18.42
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 19.0,
          "priceAvg30d": 18.6
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.7,
          "priceAvg30d": 18.94
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 20.27,
          "priceAvg30d": 19.25
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.4,
          "priceAvg30d": 19.68
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.85,
          "priceAvg30d": 19.51
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.0,
          "priceAvg30d": 18.91
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.81,
          "priceAvg30d": 18.7
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 19.9,
          "priceAvg30d": 18.49
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.1,
          "priceAvg30d": 19.03
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 22.27,
          "priceAvg30d": 20.52
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.52,
          "priceAvg30d": 22.54
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.23,
          "priceAvg30d": 23.2
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.85,
          "priceAvg30d": 23.55
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.74,
          "priceAvg30d": 22.89
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.27,
          "priceAvg30d": 23.11
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 22.12,
          "priceAvg30d": 23.25
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.84,
          "priceAvg30d": 23.33
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.28,
          "priceAvg30d": 21.79
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.0,
          "priceAvg30d": 22.31
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 20.88,
          "priceAvg30d": 24.35
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.4,
          "priceAvg30d": 26.13
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.86,
          "priceAvg30d": 27.05
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 25.61,
          "priceAvg30d": 28.04
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.0,
          "priceAvg30d": 27.28
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 29.58,
          "priceAvg30d": 29.43
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 29.97,
          "priceAvg30d": 30.81
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 29.99,
          "priceAvg30d": 32.71
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 29.98,
          "priceAvg30d": 32.92
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.95,
          "priceAvg30d": 33.34
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 29.29,
          "priceAvg30d": 33.7
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 29.66,
          "priceAvg30d": 32.64
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 29.61,
          "priceAvg30d": 31.05
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.1,
          "priceAvg30d": 28.94
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.99,
          "priceAvg30d": 27.29
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.0,
          "priceAvg30d": 25.89
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.58,
          "priceAvg30d": 24.57
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.5,
          "priceAvg30d": 24.83
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.0,
          "priceAvg30d": 24.06
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.47,
          "priceAvg30d": 22.22
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 22.99,
          "priceAvg30d": 21.7
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.02,
          "priceAvg30d": 19.85
        }
      ],
      "avg": 23.18,
      "max": 29.99,
      "maxBlock": 34,
      "min": 15.0,
      "minBlock": 26,
      "spread3h": 8.73,
      "spreadLowAvg": 20.9,
      "spreadHighAvg": 29.63,
      "avg30d": 23.65,
      "spread30dAvg": 15.14,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.17,
          "priceAvg30d": 15.99
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.4,
          "priceAvg30d": 16.05
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.31,
          "priceAvg30d": 15.62
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.31,
          "priceAvg30d": 15.15
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.14,
          "priceAvg30d": 15.24
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.31,
          "priceAvg30d": 15.79
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.3,
          "priceAvg30d": 15.71
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.41,
          "priceAvg30d": 15.85
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.2,
          "priceAvg30d": 15.78
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 14.82,
          "priceAvg30d": 16.38
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.31,
          "priceAvg30d": 16.87
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.82,
          "priceAvg30d": 16.92
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.94,
          "priceAvg30d": 16.76
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.82,
          "priceAvg30d": 15.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 19.9,
          "priceAvg30d": 15.56
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.95,
          "priceAvg30d": 15.78
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.3,
          "priceAvg30d": 16.99
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.94,
          "priceAvg30d": 20.39
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 16.98,
          "priceAvg30d": 21.63
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 17.48,
          "priceAvg30d": 22.5
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.48,
          "priceAvg30d": 21.68
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 17.23,
          "priceAvg30d": 21.62
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 18.93,
          "priceAvg30d": 21.38
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 18.9,
          "priceAvg30d": 21.52
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.28,
          "priceAvg30d": 19.39
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.0,
          "priceAvg30d": 20.0
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 16.94,
          "priceAvg30d": 22.64
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 16.95,
          "priceAvg30d": 24.34
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 18.86,
          "priceAvg30d": 25.33
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 18.56,
          "priceAvg30d": 26.03
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 18.86,
          "priceAvg30d": 25.39
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 19.27,
          "priceAvg30d": 27.6
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.27,
          "priceAvg30d": 28.13
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.0,
          "priceAvg30d": 30.54
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.09,
          "priceAvg30d": 30.22
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.59,
          "priceAvg30d": 31.15
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.12,
          "priceAvg30d": 31.61
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.0,
          "priceAvg30d": 30.6
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.93,
          "priceAvg30d": 29.06
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.6,
          "priceAvg30d": 27.13
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.4,
          "priceAvg30d": 25.48
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.71,
          "priceAvg30d": 23.95
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.56,
          "priceAvg30d": 22.33
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.94,
          "priceAvg30d": 21.95
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.95,
          "priceAvg30d": 21.14
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.8,
          "priceAvg30d": 19.36
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.37,
          "priceAvg30d": 18.92
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.0,
          "priceAvg30d": 16.38
        }
      ],
      "avg": 16.03,
      "max": 21.12,
      "maxBlock": 37,
      "min": 10.14,
      "minBlock": 5,
      "spread3h": 8.53,
      "spreadLowAvg": 10.84,
      "spreadHighAvg": 19.37,
      "avg30d": 21.28,
      "spread30dAvg": 15.49,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.17,
          "priceAvg30d": 15.02
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.4,
          "priceAvg30d": 15.45
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.31,
          "priceAvg30d": 15.06
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.31,
          "priceAvg30d": 14.81
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.14,
          "priceAvg30d": 14.86
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.31,
          "priceAvg30d": 15.19
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 13.3,
          "priceAvg30d": 15.12
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.41,
          "priceAvg30d": 15.27
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 12.2,
          "priceAvg30d": 15.24
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 14.82,
          "priceAvg30d": 15.84
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.31,
          "priceAvg30d": 16.33
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.82,
          "priceAvg30d": 16.49
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.94,
          "priceAvg30d": 16.4
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.82,
          "priceAvg30d": 15.24
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 19.9,
          "priceAvg30d": 14.96
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.95,
          "priceAvg30d": 14.95
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.3,
          "priceAvg30d": 16.02
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.94,
          "priceAvg30d": 19.0
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 16.98,
          "priceAvg30d": 20.42
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 17.48,
          "priceAvg30d": 20.95
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.48,
          "priceAvg30d": 20.3
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 17.23,
          "priceAvg30d": 20.38
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 18.93,
          "priceAvg30d": 20.68
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 18.9,
          "priceAvg30d": 20.23
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 15.28,
          "priceAvg30d": 18.38
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.0,
          "priceAvg30d": 18.73
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 16.94,
          "priceAvg30d": 21.6
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 16.95,
          "priceAvg30d": 23.81
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 18.86,
          "priceAvg30d": 24.61
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 18.56,
          "priceAvg30d": 24.95
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 18.86,
          "priceAvg30d": 24.26
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 19.27,
          "priceAvg30d": 26.01
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 19.27,
          "priceAvg30d": 27.17
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.0,
          "priceAvg30d": 30.17
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.09,
          "priceAvg30d": 30.07
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.59,
          "priceAvg30d": 31.02
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.12,
          "priceAvg30d": 31.5
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.0,
          "priceAvg30d": 30.46
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.93,
          "priceAvg30d": 28.93
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.6,
          "priceAvg30d": 26.95
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.4,
          "priceAvg30d": 25.43
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.71,
          "priceAvg30d": 23.86
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.56,
          "priceAvg30d": 22.21
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.94,
          "priceAvg30d": 21.05
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.95,
          "priceAvg30d": 19.65
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.8,
          "priceAvg30d": 17.67
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.37,
          "priceAvg30d": 17.42
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.0,
          "priceAvg30d": 15.15
        }
      ],
      "avg": 16.03,
      "max": 21.12,
      "maxBlock": 37,
      "min": 10.14,
      "minBlock": 5,
      "spread3h": 8.53,
      "spreadLowAvg": 10.84,
      "spreadHighAvg": 19.37,
      "avg30d": 20.53,
      "spread30dAvg": 15.6,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.17,
          "priceAvg30d": 15.02
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.4,
          "priceAvg30d": 15.45
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.31,
          "priceAvg30d": 15.06
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.31,
          "priceAvg30d": 14.81
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.14,
          "priceAvg30d": 14.86
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.31,
          "priceAvg30d": 15.19
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.31,
          "priceAvg30d": 15.12
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.41,
          "priceAvg30d": 15.27
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.95,
          "priceAvg30d": 15.24
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.92,
          "priceAvg30d": 15.84
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.8,
          "priceAvg30d": 16.33
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.63,
          "priceAvg30d": 16.49
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.63,
          "priceAvg30d": 16.4
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.4,
          "priceAvg30d": 15.24
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.98,
          "priceAvg30d": 14.88
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 14.37
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 4.39,
          "priceAvg30d": 14.93
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.9,
          "priceAvg30d": 16.09
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 16.2
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 15.23
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.0,
          "priceAvg30d": 15.15
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 15.1
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.02,
          "priceAvg30d": 14.78
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 1.0,
          "priceAvg30d": 14.4
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 12.86
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.02,
          "priceAvg30d": 13.11
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 3.5,
          "priceAvg30d": 15.24
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.26,
          "priceAvg30d": 16.72
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.87,
          "priceAvg30d": 16.38
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.14,
          "priceAvg30d": 17.56
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.31,
          "priceAvg30d": 20.06
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.95,
          "priceAvg30d": 24.15
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 13.35,
          "priceAvg30d": 26.77
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.0,
          "priceAvg30d": 29.95
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.09,
          "priceAvg30d": 30.07
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.59,
          "priceAvg30d": 31.02
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.12,
          "priceAvg30d": 31.5
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.0,
          "priceAvg30d": 30.46
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.93,
          "priceAvg30d": 28.93
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.6,
          "priceAvg30d": 26.95
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.4,
          "priceAvg30d": 25.43
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.71,
          "priceAvg30d": 23.86
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.56,
          "priceAvg30d": 22.21
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.94,
          "priceAvg30d": 21.05
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.0,
          "priceAvg30d": 19.65
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.63,
          "priceAvg30d": 17.67
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.37,
          "priceAvg30d": 17.42
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.0,
          "priceAvg30d": 15.15
        }
      ],
      "avg": 10.84,
      "max": 21.12,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 22,
      "spread3h": 18.03,
      "spreadLowAvg": 1.34,
      "spreadHighAvg": 19.37,
      "avg30d": 18.78,
      "spread30dAvg": 16.71,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.17,
          "priceAvg30d": 14.58
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 7.0,
          "priceAvg30d": 14.82
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 6.5,
          "priceAvg30d": 14.45
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 6.5,
          "priceAvg30d": 14.25
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 5.0,
          "priceAvg30d": 14.3
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 6.5,
          "priceAvg30d": 14.58
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 7.0,
          "priceAvg30d": 14.4
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.41,
          "priceAvg30d": 14.45
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.95,
          "priceAvg30d": 14.24
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.92,
          "priceAvg30d": 14.9
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.8,
          "priceAvg30d": 15.58
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.63,
          "priceAvg30d": 15.81
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.63,
          "priceAvg30d": 15.58
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 7.0,
          "priceAvg30d": 14.16
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 3.0,
          "priceAvg30d": 13.88
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 0.02,
          "priceAvg30d": 13.49
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 4.39,
          "priceAvg30d": 13.91
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.9,
          "priceAvg30d": 14.81
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 14.17
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 12.6
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 11.99
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 11.59
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 11.5
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 11.47
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 10.2
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.02,
          "priceAvg30d": 10.68
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 3.5,
          "priceAvg30d": 12.5
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.26,
          "priceAvg30d": 14.5
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.87,
          "priceAvg30d": 14.47
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.14,
          "priceAvg30d": 15.65
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.31,
          "priceAvg30d": 17.75
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.95,
          "priceAvg30d": 21.81
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 13.35,
          "priceAvg30d": 24.55
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.0,
          "priceAvg30d": 28.08
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.09,
          "priceAvg30d": 28.3
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.59,
          "priceAvg30d": 30.11
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.12,
          "priceAvg30d": 30.81
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.0,
          "priceAvg30d": 29.77
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.93,
          "priceAvg30d": 27.68
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.6,
          "priceAvg30d": 24.86
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.4,
          "priceAvg30d": 23.72
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.71,
          "priceAvg30d": 22.01
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.56,
          "priceAvg30d": 20.14
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.94,
          "priceAvg30d": 19.15
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.0,
          "priceAvg30d": 17.8
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.63,
          "priceAvg30d": 16.14
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.37,
          "priceAvg30d": 16.08
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.0,
          "priceAvg30d": 14.38
        }
      ],
      "avg": 9.95,
      "max": 21.12,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 18.05,
      "spreadLowAvg": 1.32,
      "spreadHighAvg": 19.37,
      "avg30d": 17.22,
      "spread30dAvg": 18.04,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.17,
          "priceAvg30d": 13.98
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.4,
          "priceAvg30d": 14.42
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.31,
          "priceAvg30d": 12.91
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.31,
          "priceAvg30d": 12.34
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.14,
          "priceAvg30d": 11.98
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.31,
          "priceAvg30d": 12.16
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.31,
          "priceAvg30d": 12.12
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.41,
          "priceAvg30d": 12.45
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.95,
          "priceAvg30d": 12.46
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.92,
          "priceAvg30d": 13.73
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 13.8,
          "priceAvg30d": 14.67
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.63,
          "priceAvg30d": 15.27
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.63,
          "priceAvg30d": 15.42
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.4,
          "priceAvg30d": 12.95
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.98,
          "priceAvg30d": 12.05
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.0,
          "priceAvg30d": 11.78
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 4.39,
          "priceAvg30d": 13.1
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.9,
          "priceAvg30d": 13.91
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.5,
          "priceAvg30d": 14.2
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 13.35
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.0,
          "priceAvg30d": 12.61
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 12.53
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.02,
          "priceAvg30d": 12.32
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 1.0,
          "priceAvg30d": 12.11
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 11.39
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.02,
          "priceAvg30d": 11.6
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 3.5,
          "priceAvg30d": 12.9
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 8.26,
          "priceAvg30d": 14.39
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.87,
          "priceAvg30d": 15.09
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.14,
          "priceAvg30d": 16.56
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.31,
          "priceAvg30d": 19.58
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.95,
          "priceAvg30d": 23.62
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 13.35,
          "priceAvg30d": 26.56
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.0,
          "priceAvg30d": 29.95
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.09,
          "priceAvg30d": 30.07
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.59,
          "priceAvg30d": 31.02
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.12,
          "priceAvg30d": 31.5
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 20.0,
          "priceAvg30d": 30.46
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.93,
          "priceAvg30d": 28.93
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.6,
          "priceAvg30d": 26.95
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.4,
          "priceAvg30d": 25.43
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 16.71,
          "priceAvg30d": 23.86
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.56,
          "priceAvg30d": 22.2
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 16.94,
          "priceAvg30d": 21.05
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.0,
          "priceAvg30d": 19.5
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 14.63,
          "priceAvg30d": 17.32
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.37,
          "priceAvg30d": 16.74
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 12.0,
          "priceAvg30d": 13.37
        }
      ],
      "avg": 10.84,
      "max": 21.12,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 22,
      "spread3h": 18.03,
      "spreadLowAvg": 1.34,
      "spreadHighAvg": 19.37,
      "avg30d": 17.39,
      "spread30dAvg": 18.46,
      "historyDays": 30
    }
  }
};
