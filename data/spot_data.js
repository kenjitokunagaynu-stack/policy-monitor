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
  "targetDate": "2026-09-28",
  "fetchedAt": "2026-09-28T09:05:36+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 11.32,
        "priceAvg30d": 17.42
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 10.98,
        "priceAvg30d": 16.1
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 10.47,
        "priceAvg30d": 15.17
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 11.11,
        "priceAvg30d": 15.02
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 11.21,
        "priceAvg30d": 14.73
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 11.27,
        "priceAvg30d": 15.11
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 11.4,
        "priceAvg30d": 15.64
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 12.08,
        "priceAvg30d": 16.16
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 12.1,
        "priceAvg30d": 16.65
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 12.61,
        "priceAvg30d": 17.6
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 17.29,
        "priceAvg30d": 18.43
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 19.26,
        "priceAvg30d": 17.93
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 19.45,
        "priceAvg30d": 16.83
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 17.54,
        "priceAvg30d": 15.54
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 15.01,
        "priceAvg30d": 14.49
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 19.7,
        "priceAvg30d": 14.53
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 24.45,
        "priceAvg30d": 15.2
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 27.18,
        "priceAvg30d": 16.39
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 30.06,
        "priceAvg30d": 17.21
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 30.18,
        "priceAvg30d": 16.99
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 30.0,
        "priceAvg30d": 16.08
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 29.5,
        "priceAvg30d": 16.01
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 28.89,
        "priceAvg30d": 15.81
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 27.5,
        "priceAvg30d": 15.54
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 25.5,
        "priceAvg30d": 14.18
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 25.44,
        "priceAvg30d": 14.62
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 27.15,
        "priceAvg30d": 15.93
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 31.29,
        "priceAvg30d": 17.8
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 32.39,
        "priceAvg30d": 19.02
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 34.67,
        "priceAvg30d": 20.87
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 32.11,
        "priceAvg30d": 20.61
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 34.65,
        "priceAvg30d": 22.93
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 35.73,
        "priceAvg30d": 24.32
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 35.73,
        "priceAvg30d": 26.97
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 32.11,
        "priceAvg30d": 27.11
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 32.11,
        "priceAvg30d": 27.79
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 32.11,
        "priceAvg30d": 27.78
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 32.11,
        "priceAvg30d": 27.04
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 28.35,
        "priceAvg30d": 25.85
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 25.51,
        "priceAvg30d": 24.37
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 25.0,
        "priceAvg30d": 23.05
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 24.43,
        "priceAvg30d": 22.22
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 23.44,
        "priceAvg30d": 21.25
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 23.97,
        "priceAvg30d": 21.63
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 24.0,
        "priceAvg30d": 21.15
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 22.46,
        "priceAvg30d": 19.52
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 22.46,
        "priceAvg30d": 19.23
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 20.35,
        "priceAvg30d": 17.09
      }
    ],
    "avg": 23.62,
    "max": 35.73,
    "maxBlock": 33,
    "min": 10.47,
    "minBlock": 3,
    "spread3h": 21.37,
    "spreadLowAvg": 12.19,
    "spreadHighAvg": 33.56,
    "avg30d": 18.94,
    "spread30dAvg": 13.77,
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
          "price": 15.5,
          "priceAvg30d": 13.17
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.5,
          "priceAvg30d": 12.51
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.58,
          "priceAvg30d": 12.3
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.67,
          "priceAvg30d": 12.09
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.75,
          "priceAvg30d": 13.04
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.58,
          "priceAvg30d": 13.47
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.69,
          "priceAvg30d": 14.4
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.82,
          "priceAvg30d": 14.68
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.71,
          "priceAvg30d": 14.79
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.59,
          "priceAvg30d": 15.0
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.46,
          "priceAvg30d": 14.58
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 17.01,
          "priceAvg30d": 13.51
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 13.18,
          "priceAvg30d": 12.4
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.68,
          "priceAvg30d": 11.06
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.78,
          "priceAvg30d": 10.46
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 14.97,
          "priceAvg30d": 9.83
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.0,
          "priceAvg30d": 9.17
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.46,
          "priceAvg30d": 9.85
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 13.0,
          "priceAvg30d": 9.02
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.58,
          "priceAvg30d": 8.44
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.45,
          "priceAvg30d": 7.73
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.0,
          "priceAvg30d": 7.64
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.92,
          "priceAvg30d": 8.08
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.67,
          "priceAvg30d": 7.36
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.67,
          "priceAvg30d": 7.07
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.67,
          "priceAvg30d": 6.85
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.0,
          "priceAvg30d": 7.88
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 13.0,
          "priceAvg30d": 9.73
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 15.5,
          "priceAvg30d": 10.01
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.82,
          "priceAvg30d": 11.1
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.74,
          "priceAvg30d": 12.72
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 31.91,
          "priceAvg30d": 15.04
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.85,
          "priceAvg30d": 17.97
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 35.95,
          "priceAvg30d": 19.74
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 25.83,
          "priceAvg30d": 20.7
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.86,
          "priceAvg30d": 20.89
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 10.45,
          "priceAvg30d": 21.13
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 10.67,
          "priceAvg30d": 21.61
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 9.49,
          "priceAvg30d": 21.35
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 9.49,
          "priceAvg30d": 20.04
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 9.49,
          "priceAvg30d": 19.63
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 9.49,
          "priceAvg30d": 19.27
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 9.49,
          "priceAvg30d": 17.63
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 9.49,
          "priceAvg30d": 17.4
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 9.49,
          "priceAvg30d": 16.68
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 9.49,
          "priceAvg30d": 15.42
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.49,
          "priceAvg30d": 14.68
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.49,
          "priceAvg30d": 13.75
        }
      ],
      "avg": 13.86,
      "max": 35.95,
      "maxBlock": 34,
      "min": 9.49,
      "minBlock": 39,
      "spread3h": 12.53,
      "spreadLowAvg": 11.08,
      "spreadHighAvg": 23.61,
      "avg30d": 13.6,
      "spread30dAvg": 12.42,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.79,
          "priceAvg30d": 18.19
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 18.1,
          "priceAvg30d": 16.88
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 14.13,
          "priceAvg30d": 15.84
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 14.5,
          "priceAvg30d": 15.58
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.0,
          "priceAvg30d": 15.76
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 14.5,
          "priceAvg30d": 15.83
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.7,
          "priceAvg30d": 17.13
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.97,
          "priceAvg30d": 17.26
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.34,
          "priceAvg30d": 17.48
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.46,
          "priceAvg30d": 17.73
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.46,
          "priceAvg30d": 18.1
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.46,
          "priceAvg30d": 17.64
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.71,
          "priceAvg30d": 16.32
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.0,
          "priceAvg30d": 14.49
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.47,
          "priceAvg30d": 13.41
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.23,
          "priceAvg30d": 12.5
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.0,
          "priceAvg30d": 10.84
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.46,
          "priceAvg30d": 11.05
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 13.0,
          "priceAvg30d": 11.63
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.58,
          "priceAvg30d": 11.36
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.45,
          "priceAvg30d": 10.51
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.0,
          "priceAvg30d": 10.57
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.92,
          "priceAvg30d": 10.27
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.67,
          "priceAvg30d": 9.37
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.67,
          "priceAvg30d": 8.32
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.67,
          "priceAvg30d": 8.79
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.0,
          "priceAvg30d": 10.23
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 13.0,
          "priceAvg30d": 11.59
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 15.5,
          "priceAvg30d": 11.96
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.82,
          "priceAvg30d": 13.2
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 30.0,
          "priceAvg30d": 15.3
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 36.45,
          "priceAvg30d": 19.04
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 36.09,
          "priceAvg30d": 21.86
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 35.95,
          "priceAvg30d": 25.65
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 34.86,
          "priceAvg30d": 25.16
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.73,
          "priceAvg30d": 25.74
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.73,
          "priceAvg30d": 25.8
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 35.73,
          "priceAvg30d": 25.43
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 24.83
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.18,
          "priceAvg30d": 23.17
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.0,
          "priceAvg30d": 22.07
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.85,
          "priceAvg30d": 21.06
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.92,
          "priceAvg30d": 20.21
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.07,
          "priceAvg30d": 19.98
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.73,
          "priceAvg30d": 20.14
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.01,
          "priceAvg30d": 18.89
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.96,
          "priceAvg30d": 19.09
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.61,
          "priceAvg30d": 18.29
        }
      ],
      "avg": 21.86,
      "max": 36.45,
      "maxBlock": 32,
      "min": 9.67,
      "minBlock": 24,
      "spread3h": 19.42,
      "spreadLowAvg": 9.95,
      "spreadHighAvg": 29.37,
      "avg30d": 16.7,
      "spread30dAvg": 14.66,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.79,
          "priceAvg30d": 20.18
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 18.1,
          "priceAvg30d": 19.54
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 14.13,
          "priceAvg30d": 18.86
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 14.5,
          "priceAvg30d": 19.33
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.0,
          "priceAvg30d": 19.07
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 14.5,
          "priceAvg30d": 19.12
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.7,
          "priceAvg30d": 19.57
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.97,
          "priceAvg30d": 19.7
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.34,
          "priceAvg30d": 20.11
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.46,
          "priceAvg30d": 20.4
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.46,
          "priceAvg30d": 20.7
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.46,
          "priceAvg30d": 20.35
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.71,
          "priceAvg30d": 19.58
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.0,
          "priceAvg30d": 19.62
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.47,
          "priceAvg30d": 19.71
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.23,
          "priceAvg30d": 20.21
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.26,
          "priceAvg30d": 20.94
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.59,
          "priceAvg30d": 23.15
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 35.73,
          "priceAvg30d": 23.22
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 35.73,
          "priceAvg30d": 23.65
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 32.11,
          "priceAvg30d": 22.86
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 32.11,
          "priceAvg30d": 23.33
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 32.11,
          "priceAvg30d": 23.42
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 32.11,
          "priceAvg30d": 23.41
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 30.0,
          "priceAvg30d": 22.0
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 29.9,
          "priceAvg30d": 22.49
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 30.59,
          "priceAvg30d": 23.14
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 35.83,
          "priceAvg30d": 24.23
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 37.17,
          "priceAvg30d": 25.16
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 37.92,
          "priceAvg30d": 26.46
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 35.83,
          "priceAvg30d": 24.29
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 36.45,
          "priceAvg30d": 26.48
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 36.09,
          "priceAvg30d": 28.05
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 35.95,
          "priceAvg30d": 29.9
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 34.86,
          "priceAvg30d": 29.05
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.73,
          "priceAvg30d": 29.32
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.73,
          "priceAvg30d": 29.3
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 35.73,
          "priceAvg30d": 29.24
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 28.17
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.18,
          "priceAvg30d": 26.52
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.0,
          "priceAvg30d": 24.81
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.85,
          "priceAvg30d": 24.2
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.92,
          "priceAvg30d": 23.33
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.07,
          "priceAvg30d": 24.58
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.73,
          "priceAvg30d": 24.3
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.01,
          "priceAvg30d": 23.22
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.96,
          "priceAvg30d": 23.18
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.61,
          "priceAvg30d": 21.14
        }
      ],
      "avg": 27.93,
      "max": 37.92,
      "maxBlock": 30,
      "min": 14.13,
      "minBlock": 3,
      "spread3h": 17.72,
      "spreadLowAvg": 17.6,
      "spreadHighAvg": 35.33,
      "avg30d": 23.18,
      "spread30dAvg": 10.46,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 19.79,
          "priceAvg30d": 20.12
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 18.1,
          "priceAvg30d": 19.58
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 14.13,
          "priceAvg30d": 18.88
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 14.5,
          "priceAvg30d": 19.08
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.0,
          "priceAvg30d": 18.91
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 14.5,
          "priceAvg30d": 18.95
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.7,
          "priceAvg30d": 19.26
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.97,
          "priceAvg30d": 19.58
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.34,
          "priceAvg30d": 20.01
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.46,
          "priceAvg30d": 20.38
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.46,
          "priceAvg30d": 20.72
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.46,
          "priceAvg30d": 20.68
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 23.71,
          "priceAvg30d": 20.23
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.0,
          "priceAvg30d": 19.83
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.47,
          "priceAvg30d": 19.29
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 25.23,
          "priceAvg30d": 19.39
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.26,
          "priceAvg30d": 20.91
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 30.59,
          "priceAvg30d": 22.34
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 35.73,
          "priceAvg30d": 22.99
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 35.73,
          "priceAvg30d": 23.06
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 32.11,
          "priceAvg30d": 22.32
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 32.11,
          "priceAvg30d": 22.47
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 32.11,
          "priceAvg30d": 22.38
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 32.11,
          "priceAvg30d": 22.36
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 30.0,
          "priceAvg30d": 20.94
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 29.9,
          "priceAvg30d": 21.32
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 30.59,
          "priceAvg30d": 23.18
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 35.83,
          "priceAvg30d": 24.56
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 37.17,
          "priceAvg30d": 25.21
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 37.92,
          "priceAvg30d": 26.07
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 35.83,
          "priceAvg30d": 25.79
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 36.45,
          "priceAvg30d": 27.44
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 36.09,
          "priceAvg30d": 28.48
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 35.95,
          "priceAvg30d": 31.09
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 34.86,
          "priceAvg30d": 31.27
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.73,
          "priceAvg30d": 31.55
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.73,
          "priceAvg30d": 31.37
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 35.73,
          "priceAvg30d": 30.26
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 28.94
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 26.18,
          "priceAvg30d": 27.41
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.0,
          "priceAvg30d": 26.34
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 25.85,
          "priceAvg30d": 25.67
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.92,
          "priceAvg30d": 24.66
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.07,
          "priceAvg30d": 24.92
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.73,
          "priceAvg30d": 24.62
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 28.01,
          "priceAvg30d": 23.39
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.96,
          "priceAvg30d": 23.27
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.61,
          "priceAvg30d": 21.45
        }
      ],
      "avg": 27.93,
      "max": 37.92,
      "maxBlock": 30,
      "min": 14.13,
      "minBlock": 3,
      "spread3h": 17.72,
      "spreadLowAvg": 17.6,
      "spreadHighAvg": 35.33,
      "avg30d": 23.39,
      "spread30dAvg": 13.26,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 7.96,
          "priceAvg30d": 12.62
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.3,
          "priceAvg30d": 12.64
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.58,
          "priceAvg30d": 12.63
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.11,
          "priceAvg30d": 12.54
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.03,
          "priceAvg30d": 12.46
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.99,
          "priceAvg30d": 12.72
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.86,
          "priceAvg30d": 12.94
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 14.16,
          "priceAvg30d": 13.18
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.55,
          "priceAvg30d": 13.08
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.26,
          "priceAvg30d": 14.09
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.6,
          "priceAvg30d": 14.73
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.2,
          "priceAvg30d": 14.69
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.2,
          "priceAvg30d": 15.46
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.5,
          "priceAvg30d": 13.59
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.31,
          "priceAvg30d": 13.36
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.0,
          "priceAvg30d": 12.65
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 18.0,
          "priceAvg30d": 13.58
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.61,
          "priceAvg30d": 16.39
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 35.73,
          "priceAvg30d": 17.99
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 35.73,
          "priceAvg30d": 18.76
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 32.11,
          "priceAvg30d": 18.29
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 32.11,
          "priceAvg30d": 18.23
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 32.11,
          "priceAvg30d": 17.99
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 32.11,
          "priceAvg30d": 18.0
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 30.0,
          "priceAvg30d": 15.9
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 29.75,
          "priceAvg30d": 16.59
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 30.59,
          "priceAvg30d": 18.65
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 35.73,
          "priceAvg30d": 19.94
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 35.73,
          "priceAvg30d": 20.38
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 35.73,
          "priceAvg30d": 21.12
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 35.73,
          "priceAvg30d": 20.38
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 35.73,
          "priceAvg30d": 21.38
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.73,
          "priceAvg30d": 21.44
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 35.73,
          "priceAvg30d": 23.51
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 34.86,
          "priceAvg30d": 23.5
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.73,
          "priceAvg30d": 24.74
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.73,
          "priceAvg30d": 24.6
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 35.73,
          "priceAvg30d": 23.86
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 22.32
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.0,
          "priceAvg30d": 20.61
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.45,
          "priceAvg30d": 19.96
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.76,
          "priceAvg30d": 19.32
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.29,
          "priceAvg30d": 18.84
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.52,
          "priceAvg30d": 17.61
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 15.3,
          "priceAvg30d": 17.18
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.01,
          "priceAvg30d": 15.87
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.58,
          "priceAvg30d": 15.37
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.41,
          "priceAvg30d": 12.73
        }
      ],
      "avg": 22.29,
      "max": 35.73,
      "maxBlock": 19,
      "min": 7.96,
      "minBlock": 1,
      "spread3h": 14.93,
      "spreadLowAvg": 10.83,
      "spreadHighAvg": 25.76,
      "avg30d": 17.26,
      "spread30dAvg": 11.83,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 7.96,
          "priceAvg30d": 12.54
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.3,
          "priceAvg30d": 12.63
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.58,
          "priceAvg30d": 12.63
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.11,
          "priceAvg30d": 12.54
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.03,
          "priceAvg30d": 12.46
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.99,
          "priceAvg30d": 12.72
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.86,
          "priceAvg30d": 12.94
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 14.16,
          "priceAvg30d": 13.18
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.55,
          "priceAvg30d": 13.08
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.26,
          "priceAvg30d": 14.09
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.6,
          "priceAvg30d": 14.73
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.2,
          "priceAvg30d": 14.68
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.2,
          "priceAvg30d": 15.46
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.5,
          "priceAvg30d": 13.55
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.31,
          "priceAvg30d": 13.36
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.0,
          "priceAvg30d": 12.49
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 18.0,
          "priceAvg30d": 12.91
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.61,
          "priceAvg30d": 15.0
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 35.73,
          "priceAvg30d": 16.93
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 35.73,
          "priceAvg30d": 17.47
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 32.11,
          "priceAvg30d": 17.05
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 32.11,
          "priceAvg30d": 17.17
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 32.11,
          "priceAvg30d": 17.39
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 32.11,
          "priceAvg30d": 16.82
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 30.0,
          "priceAvg30d": 15.3
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 29.75,
          "priceAvg30d": 15.75
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 30.59,
          "priceAvg30d": 17.84
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 35.73,
          "priceAvg30d": 19.3
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 35.73,
          "priceAvg30d": 19.51
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 35.73,
          "priceAvg30d": 20.13
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 35.73,
          "priceAvg30d": 19.23
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 35.73,
          "priceAvg30d": 20.19
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.73,
          "priceAvg30d": 20.92
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 35.73,
          "priceAvg30d": 23.15
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 34.86,
          "priceAvg30d": 23.36
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.73,
          "priceAvg30d": 24.61
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.73,
          "priceAvg30d": 24.49
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 35.73,
          "priceAvg30d": 23.72
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.0,
          "priceAvg30d": 22.19
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.0,
          "priceAvg30d": 20.48
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.45,
          "priceAvg30d": 19.96
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.76,
          "priceAvg30d": 19.32
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.29,
          "priceAvg30d": 18.84
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.52,
          "priceAvg30d": 17.61
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 15.3,
          "priceAvg30d": 17.18
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.01,
          "priceAvg30d": 15.87
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.58,
          "priceAvg30d": 15.37
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.41,
          "priceAvg30d": 12.73
        }
      ],
      "avg": 22.29,
      "max": 35.73,
      "maxBlock": 19,
      "min": 7.96,
      "minBlock": 1,
      "spread3h": 14.93,
      "spreadLowAvg": 10.83,
      "spreadHighAvg": 25.76,
      "avg30d": 16.89,
      "spread30dAvg": 11.45,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 7.96,
          "priceAvg30d": 12.54
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.3,
          "priceAvg30d": 12.63
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.58,
          "priceAvg30d": 12.63
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.11,
          "priceAvg30d": 12.54
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.03,
          "priceAvg30d": 12.46
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.99,
          "priceAvg30d": 12.72
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.86,
          "priceAvg30d": 12.84
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 14.16,
          "priceAvg30d": 13.18
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.55,
          "priceAvg30d": 13.04
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.26,
          "priceAvg30d": 14.02
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.6,
          "priceAvg30d": 14.71
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.2,
          "priceAvg30d": 14.68
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.2,
          "priceAvg30d": 15.38
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.5,
          "priceAvg30d": 13.41
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.31,
          "priceAvg30d": 12.95
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.0,
          "priceAvg30d": 11.72
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 18.0,
          "priceAvg30d": 11.71
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.61,
          "priceAvg30d": 12.44
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 25.24,
          "priceAvg30d": 13.34
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.24,
          "priceAvg30d": 12.56
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 30.0,
          "priceAvg30d": 12.88
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 30.0,
          "priceAvg30d": 12.79
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.5,
          "priceAvg30d": 12.32
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.17,
          "priceAvg30d": 12.02
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 30.0,
          "priceAvg30d": 10.9
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 29.75,
          "priceAvg30d": 10.95
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.5,
          "priceAvg30d": 12.78
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 29.0,
          "priceAvg30d": 14.08
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 28.0,
          "priceAvg30d": 13.56
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.9,
          "priceAvg30d": 14.31
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 24.0,
          "priceAvg30d": 16.46
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 23.61,
          "priceAvg30d": 18.46
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.23,
          "priceAvg30d": 19.81
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.5,
          "priceAvg30d": 22.6
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.35,
          "priceAvg30d": 23.36
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 27.15,
          "priceAvg30d": 24.61
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.61,
          "priceAvg30d": 24.49
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.61,
          "priceAvg30d": 23.72
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 26.5,
          "priceAvg30d": 22.19
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.0,
          "priceAvg30d": 20.48
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.45,
          "priceAvg30d": 19.96
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.76,
          "priceAvg30d": 19.32
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.29,
          "priceAvg30d": 18.84
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.52,
          "priceAvg30d": 17.61
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 15.3,
          "priceAvg30d": 17.15
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.01,
          "priceAvg30d": 15.86
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.58,
          "priceAvg30d": 15.37
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.41,
          "priceAvg30d": 12.73
        }
      ],
      "avg": 19.24,
      "max": 30.0,
      "maxBlock": 21,
      "min": 7.96,
      "minBlock": 1,
      "spread3h": 15.63,
      "spreadLowAvg": 10.83,
      "spreadHighAvg": 26.46,
      "avg30d": 15.44,
      "spread30dAvg": 12.27,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 7.96,
          "priceAvg30d": 12.09
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.3,
          "priceAvg30d": 11.83
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.58,
          "priceAvg30d": 11.75
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.11,
          "priceAvg30d": 11.72
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.03,
          "priceAvg30d": 11.54
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.99,
          "priceAvg30d": 11.84
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.86,
          "priceAvg30d": 11.78
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 14.16,
          "priceAvg30d": 12.28
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.55,
          "priceAvg30d": 11.81
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.26,
          "priceAvg30d": 12.87
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 8.05,
          "priceAvg30d": 13.9
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 8.1,
          "priceAvg30d": 13.95
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 8.07,
          "priceAvg30d": 14.49
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 8.03,
          "priceAvg30d": 12.18
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.31,
          "priceAvg30d": 11.56
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.0,
          "priceAvg30d": 10.61
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.94,
          "priceAvg30d": 10.83
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.81,
          "priceAvg30d": 11.48
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 12.68,
          "priceAvg30d": 11.59
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 12.29,
          "priceAvg30d": 10.36
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 30.0,
          "priceAvg30d": 10.18
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 30.0,
          "priceAvg30d": 9.94
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.5,
          "priceAvg30d": 9.65
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.17,
          "priceAvg30d": 9.63
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 30.0,
          "priceAvg30d": 8.88
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 29.75,
          "priceAvg30d": 9.02
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.5,
          "priceAvg30d": 10.56
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 29.0,
          "priceAvg30d": 12.35
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 28.0,
          "priceAvg30d": 12.02
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.9,
          "priceAvg30d": 12.45
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 24.0,
          "priceAvg30d": 14.26
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.29,
          "priceAvg30d": 16.17
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.5,
          "priceAvg30d": 17.45
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.8,
          "priceAvg30d": 20.22
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 14.16,
          "priceAvg30d": 20.73
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 14.16,
          "priceAvg30d": 22.95
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 12.68,
          "priceAvg30d": 23.32
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 12.29,
          "priceAvg30d": 22.43
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 8.78,
          "priceAvg30d": 20.29
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 8.05,
          "priceAvg30d": 17.53
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 8.05,
          "priceAvg30d": 17.37
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 8.05,
          "priceAvg30d": 16.55
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 8.1,
          "priceAvg30d": 15.87
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 8.04,
          "priceAvg30d": 14.83
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 8.01,
          "priceAvg30d": 14.55
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 8.05,
          "priceAvg30d": 13.65
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 8.3,
          "priceAvg30d": 13.62
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.3,
          "priceAvg30d": 11.75
        }
      ],
      "avg": 14.53,
      "max": 30.0,
      "maxBlock": 21,
      "min": 7.96,
      "minBlock": 1,
      "spread3h": 11.1,
      "spreadLowAvg": 9.47,
      "spreadHighAvg": 20.57,
      "avg30d": 13.72,
      "spread30dAvg": 12.74,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 7.96,
          "priceAvg30d": 11.88
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.3,
          "priceAvg30d": 11.96
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.58,
          "priceAvg30d": 11.45
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.11,
          "priceAvg30d": 11.15
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.03,
          "priceAvg30d": 10.71
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.99,
          "priceAvg30d": 10.93
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 11.86,
          "priceAvg30d": 11.02
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 14.16,
          "priceAvg30d": 11.49
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.55,
          "priceAvg30d": 11.51
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.26,
          "priceAvg30d": 12.89
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.6,
          "priceAvg30d": 13.76
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.2,
          "priceAvg30d": 13.91
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.2,
          "priceAvg30d": 14.74
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.5,
          "priceAvg30d": 12.03
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.31,
          "priceAvg30d": 11.25
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 13.0,
          "priceAvg30d": 10.07
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 18.0,
          "priceAvg30d": 10.7
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.61,
          "priceAvg30d": 11.09
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 25.24,
          "priceAvg30d": 11.44
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 25.24,
          "priceAvg30d": 10.85
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 30.0,
          "priceAvg30d": 10.27
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 30.0,
          "priceAvg30d": 10.05
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 27.5,
          "priceAvg30d": 9.92
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 27.17,
          "priceAvg30d": 9.79
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 30.0,
          "priceAvg30d": 9.22
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 29.75,
          "priceAvg30d": 9.33
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.5,
          "priceAvg30d": 10.09
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 29.0,
          "priceAvg30d": 11.2
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 28.0,
          "priceAvg30d": 11.95
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.9,
          "priceAvg30d": 13.2
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 24.0,
          "priceAvg30d": 15.99
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 23.61,
          "priceAvg30d": 17.97
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.23,
          "priceAvg30d": 19.61
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.5,
          "priceAvg30d": 22.6
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.35,
          "priceAvg30d": 23.36
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 27.15,
          "priceAvg30d": 24.61
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.61,
          "priceAvg30d": 24.49
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.61,
          "priceAvg30d": 23.72
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 26.5,
          "priceAvg30d": 22.19
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.0,
          "priceAvg30d": 20.48
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.45,
          "priceAvg30d": 19.96
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.76,
          "priceAvg30d": 19.32
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 17.29,
          "priceAvg30d": 18.83
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.52,
          "priceAvg30d": 17.61
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 15.3,
          "priceAvg30d": 17.0
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.01,
          "priceAvg30d": 15.52
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.58,
          "priceAvg30d": 14.68
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.41,
          "priceAvg30d": 11.46
        }
      ],
      "avg": 19.24,
      "max": 30.0,
      "maxBlock": 21,
      "min": 7.96,
      "minBlock": 1,
      "spread3h": 15.63,
      "spreadLowAvg": 10.83,
      "spreadHighAvg": 26.46,
      "avg30d": 14.36,
      "spread30dAvg": 13.45,
      "historyDays": 30
    }
  }
};
