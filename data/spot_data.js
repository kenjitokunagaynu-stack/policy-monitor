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
  "targetDate": "2026-09-14",
  "fetchedAt": "2026-09-14T09:05:26+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 11.92,
        "priceAvg30d": 17.47
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 13.15,
        "priceAvg30d": 16.66
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 12.47,
        "priceAvg30d": 16.03
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 11.89,
        "priceAvg30d": 16.37
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 12.2,
        "priceAvg30d": 16.23
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 12.39,
        "priceAvg30d": 16.24
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 14.11,
        "priceAvg30d": 16.42
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 14.28,
        "priceAvg30d": 16.53
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 15.28,
        "priceAvg30d": 16.68
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 14.12,
        "priceAvg30d": 17.13
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 14.3,
        "priceAvg30d": 17.8
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 15.28,
        "priceAvg30d": 17.28
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 16.8,
        "priceAvg30d": 16.56
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 15.0,
        "priceAvg30d": 15.93
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 12.95,
        "priceAvg30d": 15.41
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 11.88,
        "priceAvg30d": 15.85
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 14.41,
        "priceAvg30d": 16.65
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 15.0,
        "priceAvg30d": 18.29
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 18.56,
        "priceAvg30d": 18.58
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 18.0,
        "priceAvg30d": 18.53
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 14.63,
        "priceAvg30d": 17.71
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 14.01,
        "priceAvg30d": 17.75
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 14.12,
        "priceAvg30d": 17.78
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 14.41,
        "priceAvg30d": 17.63
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 12.66,
        "priceAvg30d": 16.39
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 14.12,
        "priceAvg30d": 16.8
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 17.23,
        "priceAvg30d": 18.02
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 22.48,
        "priceAvg30d": 19.65
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 24.48,
        "priceAvg30d": 21.12
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 28.47,
        "priceAvg30d": 23.01
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 28.31,
        "priceAvg30d": 22.04
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 31.8,
        "priceAvg30d": 25.02
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 33.38,
        "priceAvg30d": 26.58
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 33.38,
        "priceAvg30d": 28.97
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 33.38,
        "priceAvg30d": 29.16
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 33.38,
        "priceAvg30d": 29.79
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 32.74,
        "priceAvg30d": 29.83
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 32.09,
        "priceAvg30d": 29.33
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 30.55,
        "priceAvg30d": 27.72
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 27.43,
        "priceAvg30d": 25.86
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 25.38,
        "priceAvg30d": 24.11
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 25.0,
        "priceAvg30d": 22.05
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 23.24,
        "priceAvg30d": 20.85
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 25.0,
        "priceAvg30d": 22.65
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 25.0,
        "priceAvg30d": 21.5
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 23.13,
        "priceAvg30d": 19.56
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 22.65,
        "priceAvg30d": 19.39
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 21.82,
        "priceAvg30d": 17.59
      }
    ],
    "avg": 20.17,
    "max": 33.38,
    "maxBlock": 33,
    "min": 11.88,
    "minBlock": 16,
    "spread3h": 16.0,
    "spreadLowAvg": 15.45,
    "spreadHighAvg": 31.45,
    "avg30d": 20.09,
    "spread30dAvg": 13.69,
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
          "price": 10.85,
          "priceAvg30d": 14.43
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.65,
          "priceAvg30d": 13.83
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.95,
          "priceAvg30d": 13.23
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.07,
          "priceAvg30d": 13.37
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.0,
          "priceAvg30d": 13.9
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.0,
          "priceAvg30d": 14.13
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 14.28,
          "priceAvg30d": 15.42
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 14.99,
          "priceAvg30d": 15.56
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.42,
          "priceAvg30d": 15.79
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 15.28,
          "priceAvg30d": 16.03
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 9.93,
          "priceAvg30d": 15.77
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 9.93,
          "priceAvg30d": 14.88
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.39,
          "priceAvg30d": 13.59
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.0,
          "priceAvg30d": 11.86
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.28,
          "priceAvg30d": 10.71
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.78,
          "priceAvg30d": 10.01
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.73,
          "priceAvg30d": 10.18
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 21.93,
          "priceAvg30d": 10.02
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 21.84,
          "priceAvg30d": 9.69
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 21.95,
          "priceAvg30d": 8.84
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.03,
          "priceAvg30d": 8.17
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.03,
          "priceAvg30d": 8.18
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 14.8,
          "priceAvg30d": 8.52
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.97,
          "priceAvg30d": 8.0
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.73,
          "priceAvg30d": 7.71
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.97,
          "priceAvg30d": 7.65
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.73,
          "priceAvg30d": 8.84
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 12.68,
          "priceAvg30d": 10.2
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.81,
          "priceAvg30d": 10.5
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 15.5,
          "priceAvg30d": 12.14
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 18.0,
          "priceAvg30d": 13.63
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.0,
          "priceAvg30d": 15.85
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 21.65,
          "priceAvg30d": 18.9
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 22.08,
          "priceAvg30d": 21.88
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.03,
          "priceAvg30d": 22.36
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 20.33,
          "priceAvg30d": 23.0
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 15.0,
          "priceAvg30d": 22.88
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 10.0,
          "priceAvg30d": 23.66
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 20.77,
          "priceAvg30d": 22.13
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 20.44,
          "priceAvg30d": 21.07
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.06,
          "priceAvg30d": 19.83
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 10.73,
          "priceAvg30d": 19.28
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 10.68,
          "priceAvg30d": 18.14
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 9.97,
          "priceAvg30d": 18.5
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 9.97,
          "priceAvg30d": 18.81
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 9.97,
          "priceAvg30d": 17.21
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 12.74,
          "priceAvg30d": 16.49
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.11,
          "priceAvg30d": 14.81
        }
      ],
      "avg": 15.08,
      "max": 22.08,
      "maxBlock": 34,
      "min": 9.93,
      "minBlock": 11,
      "spread3h": 3.67,
      "spreadLowAvg": 16.0,
      "spreadHighAvg": 19.67,
      "avg30d": 14.57,
      "spread30dAvg": 13.1,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 14.28,
          "priceAvg30d": 18.51
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.0,
          "priceAvg30d": 17.51
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.95,
          "priceAvg30d": 16.27
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.07,
          "priceAvg30d": 16.49
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.0,
          "priceAvg30d": 16.6
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 13.0,
          "priceAvg30d": 16.73
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 14.28,
          "priceAvg30d": 17.68
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 14.99,
          "priceAvg30d": 17.89
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.42,
          "priceAvg30d": 18.15
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 15.28,
          "priceAvg30d": 18.68
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.28,
          "priceAvg30d": 19.24
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.4,
          "priceAvg30d": 18.15
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.39,
          "priceAvg30d": 16.47
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.0,
          "priceAvg30d": 14.19
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.28,
          "priceAvg30d": 13.5
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.51,
          "priceAvg30d": 12.82
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.27,
          "priceAvg30d": 11.08
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 12.39,
          "priceAvg30d": 11.68
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.54,
          "priceAvg30d": 12.09
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 11.36,
          "priceAvg30d": 11.68
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.46,
          "priceAvg30d": 11.0
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.46,
          "priceAvg30d": 11.23
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.46,
          "priceAvg30d": 10.87
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 7.0,
          "priceAvg30d": 9.99
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 4.0,
          "priceAvg30d": 9.15
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.39,
          "priceAvg30d": 9.54
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.49,
          "priceAvg30d": 10.92
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 12.68,
          "priceAvg30d": 12.22
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.81,
          "priceAvg30d": 12.43
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 16.18,
          "priceAvg30d": 14.44
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 18.0,
          "priceAvg30d": 15.92
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.0,
          "priceAvg30d": 18.54
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 27.0,
          "priceAvg30d": 21.76
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 28.48,
          "priceAvg30d": 25.21
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.75,
          "priceAvg30d": 25.35
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.9,
          "priceAvg30d": 25.85
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 34.5,
          "priceAvg30d": 25.63
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.17,
          "priceAvg30d": 25.57
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.6,
          "priceAvg30d": 24.0
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.5,
          "priceAvg30d": 22.75
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.5,
          "priceAvg30d": 20.86
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.26,
          "priceAvg30d": 19.99
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.0,
          "priceAvg30d": 18.94
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.0,
          "priceAvg30d": 19.83
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.5,
          "priceAvg30d": 20.9
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.0,
          "priceAvg30d": 19.24
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.87,
          "priceAvg30d": 19.81
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.0,
          "priceAvg30d": 18.25
        }
      ],
      "avg": 18.01,
      "max": 34.5,
      "maxBlock": 37,
      "min": 4.0,
      "minBlock": 25,
      "spread3h": 20.32,
      "spreadLowAvg": 9.58,
      "spreadHighAvg": 29.9,
      "avg30d": 16.99,
      "spread30dAvg": 13.92,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 14.28,
          "priceAvg30d": 18.51
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.01,
          "priceAvg30d": 17.85
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.28,
          "priceAvg30d": 17.13
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 14.12,
          "priceAvg30d": 18.04
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.5,
          "priceAvg30d": 17.88
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 14.12,
          "priceAvg30d": 17.87
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 14.28,
          "priceAvg30d": 18.15
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 14.99,
          "priceAvg30d": 18.12
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.42,
          "priceAvg30d": 18.35
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 15.28,
          "priceAvg30d": 18.82
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.28,
          "priceAvg30d": 19.39
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.4,
          "priceAvg30d": 18.64
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.39,
          "priceAvg30d": 17.65
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 19.4,
          "priceAvg30d": 17.66
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.28,
          "priceAvg30d": 18.17
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 15.28,
          "priceAvg30d": 18.68
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 22.23,
          "priceAvg30d": 19.42
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 20.0,
          "priceAvg30d": 21.67
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 23.0,
          "priceAvg30d": 21.13
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.47,
          "priceAvg30d": 21.52
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.31,
          "priceAvg30d": 20.88
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.27,
          "priceAvg30d": 21.36
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 22.4,
          "priceAvg30d": 21.54
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 22.31,
          "priceAvg30d": 21.88
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.26,
          "priceAvg30d": 20.51
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.65,
          "priceAvg30d": 21.2
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.13,
          "priceAvg30d": 22.26
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 27.31,
          "priceAvg30d": 23.79
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 28.47,
          "priceAvg30d": 24.49
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 33.38,
          "priceAvg30d": 26.02
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 28.47,
          "priceAvg30d": 23.13
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 34.02,
          "priceAvg30d": 25.93
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.23,
          "priceAvg30d": 27.5
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.02,
          "priceAvg30d": 28.65
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 35.23,
          "priceAvg30d": 28.26
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 34.6,
          "priceAvg30d": 28.24
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 34.5,
          "priceAvg30d": 27.59
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.17,
          "priceAvg30d": 27.54
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 32.74,
          "priceAvg30d": 25.7
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.47,
          "priceAvg30d": 24.48
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.11,
          "priceAvg30d": 22.14
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.88,
          "priceAvg30d": 21.52
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.19,
          "priceAvg30d": 20.68
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 31.46,
          "priceAvg30d": 23.61
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 30.0,
          "priceAvg30d": 22.26
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.0,
          "priceAvg30d": 20.75
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.87,
          "priceAvg30d": 21.13
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.0,
          "priceAvg30d": 18.8
        }
      ],
      "avg": 23.93,
      "max": 36.02,
      "maxBlock": 34,
      "min": 14.12,
      "minBlock": 4,
      "spread3h": 18.43,
      "spreadLowAvg": 15.24,
      "spreadHighAvg": 33.68,
      "avg30d": 21.59,
      "spread30dAvg": 10.96,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 14.28,
          "priceAvg30d": 18.49
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 19.01,
          "priceAvg30d": 17.82
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.28,
          "priceAvg30d": 17.21
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 14.12,
          "priceAvg30d": 17.96
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.0,
          "priceAvg30d": 17.76
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 15.28,
          "priceAvg30d": 17.71
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.28,
          "priceAvg30d": 17.82
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 15.28,
          "priceAvg30d": 18.05
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.42,
          "priceAvg30d": 18.27
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 15.28,
          "priceAvg30d": 18.78
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.28,
          "priceAvg30d": 19.28
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 19.4,
          "priceAvg30d": 18.86
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 19.39,
          "priceAvg30d": 18.1
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 19.4,
          "priceAvg30d": 17.76
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.28,
          "priceAvg30d": 17.61
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 15.28,
          "priceAvg30d": 18.06
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 22.23,
          "priceAvg30d": 19.24
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 20.0,
          "priceAvg30d": 21.12
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 23.0,
          "priceAvg30d": 21.63
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.47,
          "priceAvg30d": 21.9
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.31,
          "priceAvg30d": 21.41
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.27,
          "priceAvg30d": 21.61
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 22.4,
          "priceAvg30d": 21.71
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 22.31,
          "priceAvg30d": 21.8
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.26,
          "priceAvg30d": 20.25
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.65,
          "priceAvg30d": 20.76
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 26.5,
          "priceAvg30d": 22.84
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 31.91,
          "priceAvg30d": 24.62
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 33.38,
          "priceAvg30d": 25.48
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 33.38,
          "priceAvg30d": 26.57
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 32.3,
          "priceAvg30d": 25.67
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 34.02,
          "priceAvg30d": 28.28
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.23,
          "priceAvg30d": 29.69
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 36.02,
          "priceAvg30d": 31.65
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 35.23,
          "priceAvg30d": 31.86
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 34.6,
          "priceAvg30d": 32.49
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 34.5,
          "priceAvg30d": 32.91
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.01,
          "priceAvg30d": 31.77
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 32.74,
          "priceAvg30d": 30.12
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 28.47,
          "priceAvg30d": 28.46
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 28.11,
          "priceAvg30d": 26.83
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.92,
          "priceAvg30d": 25.46
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 25.57,
          "priceAvg30d": 24.08
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 31.46,
          "priceAvg30d": 24.19
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 30.0,
          "priceAvg30d": 23.81
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.0,
          "priceAvg30d": 22.02
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.87,
          "priceAvg30d": 21.25
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.0,
          "priceAvg30d": 19.0
        }
      ],
      "avg": 24.34,
      "max": 36.02,
      "maxBlock": 34,
      "min": 14.12,
      "minBlock": 4,
      "spread3h": 18.62,
      "spreadLowAvg": 15.69,
      "spreadHighAvg": 34.31,
      "avg30d": 22.71,
      "spread30dAvg": 15.13,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.0,
          "priceAvg30d": 16.43
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.38,
          "priceAvg30d": 16.33
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.38,
          "priceAvg30d": 15.76
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.38,
          "priceAvg30d": 15.43
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.37,
          "priceAvg30d": 15.46
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.98,
          "priceAvg30d": 16.02
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.5,
          "priceAvg30d": 15.94
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 14.61,
          "priceAvg30d": 16.08
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.61,
          "priceAvg30d": 16.0
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 14.61,
          "priceAvg30d": 16.57
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.28,
          "priceAvg30d": 17.01
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.95,
          "priceAvg30d": 16.87
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.23,
          "priceAvg30d": 16.45
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.0,
          "priceAvg30d": 15.49
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 14.41,
          "priceAvg30d": 15.31
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.38,
          "priceAvg30d": 15.82
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 14.41,
          "priceAvg30d": 16.72
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 18.56,
          "priceAvg30d": 19.43
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 23.0,
          "priceAvg30d": 20.13
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.47,
          "priceAvg30d": 20.92
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.31,
          "priceAvg30d": 20.5
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 19.21,
          "priceAvg30d": 20.64
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 19.77,
          "priceAvg30d": 20.34
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.0,
          "priceAvg30d": 20.84
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.26,
          "priceAvg30d": 18.71
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.65,
          "priceAvg30d": 19.3
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 26.5,
          "priceAvg30d": 21.45
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 31.91,
          "priceAvg30d": 23.1
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 33.38,
          "priceAvg30d": 23.79
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 33.38,
          "priceAvg30d": 24.75
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 32.3,
          "priceAvg30d": 24.14
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 34.02,
          "priceAvg30d": 26.76
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 33.38,
          "priceAvg30d": 27.79
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 33.38,
          "priceAvg30d": 30.23
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.55,
          "priceAvg30d": 30.07
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 31.05
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.53,
          "priceAvg30d": 31.38
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.5,
          "priceAvg30d": 30.29
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 28.73
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.58,
          "priceAvg30d": 27.07
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.0,
          "priceAvg30d": 25.41
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.56,
          "priceAvg30d": 23.77
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.93,
          "priceAvg30d": 22.06
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.48,
          "priceAvg30d": 21.79
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.56,
          "priceAvg30d": 21.34
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.48,
          "priceAvg30d": 19.68
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.48,
          "priceAvg30d": 19.07
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.95,
          "priceAvg30d": 16.58
        }
      ],
      "avg": 20.72,
      "max": 34.02,
      "maxBlock": 32,
      "min": 9.0,
      "minBlock": 1,
      "spread3h": 21.09,
      "spreadLowAvg": 11.63,
      "spreadHighAvg": 32.73,
      "avg30d": 20.93,
      "spread30dAvg": 15.01,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.0,
          "priceAvg30d": 15.38
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.38,
          "priceAvg30d": 15.69
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.38,
          "priceAvg30d": 15.2
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.38,
          "priceAvg30d": 14.91
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.37,
          "priceAvg30d": 14.91
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.98,
          "priceAvg30d": 15.29
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.5,
          "priceAvg30d": 15.22
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 14.61,
          "priceAvg30d": 15.34
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.61,
          "priceAvg30d": 15.3
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 14.61,
          "priceAvg30d": 15.83
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.28,
          "priceAvg30d": 16.27
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.95,
          "priceAvg30d": 16.27
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.23,
          "priceAvg30d": 16.06
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.0,
          "priceAvg30d": 15.04
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 14.41,
          "priceAvg30d": 14.69
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.38,
          "priceAvg30d": 14.91
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 14.41,
          "priceAvg30d": 15.66
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 18.56,
          "priceAvg30d": 18.04
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 23.0,
          "priceAvg30d": 18.81
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.47,
          "priceAvg30d": 19.26
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.31,
          "priceAvg30d": 19.11
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 19.21,
          "priceAvg30d": 19.32
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 19.77,
          "priceAvg30d": 19.63
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 20.0,
          "priceAvg30d": 19.55
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 22.26,
          "priceAvg30d": 17.61
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 22.65,
          "priceAvg30d": 17.96
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 26.5,
          "priceAvg30d": 20.41
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 31.91,
          "priceAvg30d": 22.44
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 33.38,
          "priceAvg30d": 23.04
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 33.38,
          "priceAvg30d": 23.6
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 32.3,
          "priceAvg30d": 23.38
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 33.38,
          "priceAvg30d": 25.27
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 33.38,
          "priceAvg30d": 26.48
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 33.38,
          "priceAvg30d": 29.65
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.55,
          "priceAvg30d": 29.85
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 30.68
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.53,
          "priceAvg30d": 31.03
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.5,
          "priceAvg30d": 30.03
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 28.6
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.58,
          "priceAvg30d": 26.88
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.0,
          "priceAvg30d": 25.37
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.56,
          "priceAvg30d": 23.68
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.93,
          "priceAvg30d": 21.94
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.48,
          "priceAvg30d": 20.76
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.56,
          "priceAvg30d": 19.29
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.48,
          "priceAvg30d": 17.31
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.48,
          "priceAvg30d": 17.19
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.95,
          "priceAvg30d": 15.18
        }
      ],
      "avg": 20.71,
      "max": 33.38,
      "maxBlock": 29,
      "min": 9.0,
      "minBlock": 1,
      "spread3h": 18.38,
      "spreadLowAvg": 11.63,
      "spreadHighAvg": 30.02,
      "avg30d": 20.07,
      "spread30dAvg": 15.1,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.0,
          "priceAvg30d": 15.38
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.38,
          "priceAvg30d": 15.69
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.38,
          "priceAvg30d": 15.2
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.38,
          "priceAvg30d": 14.91
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.37,
          "priceAvg30d": 14.91
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.98,
          "priceAvg30d": 15.29
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.5,
          "priceAvg30d": 15.22
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 14.61,
          "priceAvg30d": 15.34
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.61,
          "priceAvg30d": 15.3
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 14.61,
          "priceAvg30d": 15.83
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.28,
          "priceAvg30d": 16.27
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.95,
          "priceAvg30d": 16.27
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.23,
          "priceAvg30d": 16.06
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.0,
          "priceAvg30d": 15.04
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 14.41,
          "priceAvg30d": 14.6
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.38,
          "priceAvg30d": 14.33
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.98,
          "priceAvg30d": 14.69
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.95,
          "priceAvg30d": 16.06
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.37,
          "priceAvg30d": 15.73
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.31,
          "priceAvg30d": 14.88
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.31,
          "priceAvg30d": 14.98
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.31,
          "priceAvg30d": 14.97
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.16,
          "priceAvg30d": 14.73
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.31,
          "priceAvg30d": 14.42
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.63,
          "priceAvg30d": 12.73
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.63,
          "priceAvg30d": 12.96
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.14,
          "priceAvg30d": 14.68
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 16.24
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.94,
          "priceAvg30d": 16.54
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.9,
          "priceAvg30d": 17.62
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 21.58,
          "priceAvg30d": 19.82
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.54,
          "priceAvg30d": 23.78
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 33.38,
          "priceAvg30d": 26.38
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 33.38,
          "priceAvg30d": 29.61
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.55,
          "priceAvg30d": 29.85
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 30.68
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.53,
          "priceAvg30d": 31.03
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.5,
          "priceAvg30d": 30.03
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 28.6
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.58,
          "priceAvg30d": 26.88
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.0,
          "priceAvg30d": 25.37
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.56,
          "priceAvg30d": 23.68
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.93,
          "priceAvg30d": 21.94
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.48,
          "priceAvg30d": 20.76
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.56,
          "priceAvg30d": 19.29
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.48,
          "priceAvg30d": 17.31
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.48,
          "priceAvg30d": 17.19
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.95,
          "priceAvg30d": 15.18
        }
      ],
      "avg": 16.6,
      "max": 33.38,
      "maxBlock": 33,
      "min": 9.0,
      "minBlock": 1,
      "spread3h": 14.86,
      "spreadLowAvg": 11.63,
      "spreadHighAvg": 26.49,
      "avg30d": 18.63,
      "spread30dAvg": 16.38,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.04,
          "priceAvg30d": 14.98
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 7.92,
          "priceAvg30d": 15.25
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 7.87,
          "priceAvg30d": 14.77
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 7.85,
          "priceAvg30d": 14.52
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 7.0,
          "priceAvg30d": 14.55
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 7.85,
          "priceAvg30d": 14.89
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 7.85,
          "priceAvg30d": 14.75
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 7.87,
          "priceAvg30d": 14.84
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 7.91,
          "priceAvg30d": 14.82
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.0,
          "priceAvg30d": 15.31
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 8.04,
          "priceAvg30d": 15.85
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 8.04,
          "priceAvg30d": 15.89
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 8.04,
          "priceAvg30d": 15.6
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 7.89,
          "priceAvg30d": 14.55
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 7.89,
          "priceAvg30d": 14.05
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 7.93,
          "priceAvg30d": 13.51
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.1,
          "priceAvg30d": 13.81
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 7.92,
          "priceAvg30d": 14.99
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 2.9,
          "priceAvg30d": 14.35
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 12.95
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.1,
          "priceAvg30d": 12.44
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.02,
          "priceAvg30d": 12.03
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 11.84
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.02,
          "priceAvg30d": 11.79
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 2.9,
          "priceAvg30d": 10.18
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 3.0,
          "priceAvg30d": 10.63
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.0,
          "priceAvg30d": 12.16
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 14.22
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 7.85,
          "priceAvg30d": 14.6
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 7.99,
          "priceAvg30d": 16.09
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.04,
          "priceAvg30d": 18.36
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.2,
          "priceAvg30d": 22.43
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.2,
          "priceAvg30d": 25.16
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.48,
          "priceAvg30d": 28.35
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.0,
          "priceAvg30d": 28.55
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 29.77
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.53,
          "priceAvg30d": 30.34
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.5,
          "priceAvg30d": 29.34
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.0,
          "priceAvg30d": 27.61
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 13.07,
          "priceAvg30d": 25.46
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 12.2,
          "priceAvg30d": 23.91
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 13.07,
          "priceAvg30d": 22.08
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 8.02,
          "priceAvg30d": 20.23
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 7.99,
          "priceAvg30d": 19.18
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 7.97,
          "priceAvg30d": 17.79
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 7.94,
          "priceAvg30d": 16.1
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 7.97,
          "priceAvg30d": 16.16
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 7.94,
          "priceAvg30d": 14.71
        }
      ],
      "avg": 9.39,
      "max": 32.5,
      "maxBlock": 38,
      "min": 0.01,
      "minBlock": 23,
      "spread3h": 20.71,
      "spreadLowAvg": 1.42,
      "spreadHighAvg": 22.13,
      "avg30d": 17.41,
      "spread30dAvg": 17.66,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.0,
          "priceAvg30d": 14.34
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.38,
          "priceAvg30d": 14.66
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.38,
          "priceAvg30d": 13.05
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.38,
          "priceAvg30d": 12.43
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.37,
          "priceAvg30d": 12.03
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.98,
          "priceAvg30d": 12.27
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.5,
          "priceAvg30d": 12.22
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 14.61,
          "priceAvg30d": 12.51
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.61,
          "priceAvg30d": 12.52
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 14.61,
          "priceAvg30d": 13.72
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.28,
          "priceAvg30d": 14.61
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 16.95,
          "priceAvg30d": 15.05
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.23,
          "priceAvg30d": 15.09
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.0,
          "priceAvg30d": 12.61
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 14.41,
          "priceAvg30d": 11.65
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.38,
          "priceAvg30d": 11.67
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.98,
          "priceAvg30d": 12.97
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.95,
          "priceAvg30d": 13.78
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.37,
          "priceAvg30d": 13.73
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.31,
          "priceAvg30d": 13.23
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.31,
          "priceAvg30d": 12.64
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.31,
          "priceAvg30d": 12.57
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.16,
          "priceAvg30d": 12.44
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.31,
          "priceAvg30d": 12.14
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.63,
          "priceAvg30d": 11.42
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.63,
          "priceAvg30d": 11.63
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.14,
          "priceAvg30d": 12.9
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.31,
          "priceAvg30d": 14.55
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.94,
          "priceAvg30d": 15.25
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 12.9,
          "priceAvg30d": 16.63
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 21.58,
          "priceAvg30d": 19.33
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.54,
          "priceAvg30d": 23.25
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 33.38,
          "priceAvg30d": 26.18
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 33.38,
          "priceAvg30d": 29.61
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.55,
          "priceAvg30d": 29.85
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.0,
          "priceAvg30d": 30.68
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.53,
          "priceAvg30d": 31.03
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.5,
          "priceAvg30d": 30.03
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 28.6
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.58,
          "priceAvg30d": 26.88
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 20.0,
          "priceAvg30d": 25.37
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.56,
          "priceAvg30d": 23.68
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.93,
          "priceAvg30d": 21.93
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.48,
          "priceAvg30d": 20.76
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.56,
          "priceAvg30d": 19.14
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.48,
          "priceAvg30d": 16.96
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.48,
          "priceAvg30d": 16.5
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.95,
          "priceAvg30d": 13.4
        }
      ],
      "avg": 16.6,
      "max": 33.38,
      "maxBlock": 33,
      "min": 9.0,
      "minBlock": 1,
      "spread3h": 14.86,
      "spreadLowAvg": 11.63,
      "spreadHighAvg": 26.49,
      "avg30d": 17.28,
      "spread30dAvg": 18.21,
      "historyDays": 30
    }
  }
};
