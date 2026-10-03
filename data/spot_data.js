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
  "targetDate": "2026-10-03",
  "fetchedAt": "2026-10-03T11:55:05+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 21.0,
        "priceAvg30d": 17.48
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 20.0,
        "priceAvg30d": 15.92
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 18.5,
        "priceAvg30d": 14.87
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 19.77,
        "priceAvg30d": 14.38
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 19.1,
        "priceAvg30d": 14.04
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 19.88,
        "priceAvg30d": 14.61
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 19.82,
        "priceAvg30d": 15.33
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 20.0,
        "priceAvg30d": 15.98
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 20.88,
        "priceAvg30d": 16.75
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 21.0,
        "priceAvg30d": 17.9
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 22.1,
        "priceAvg30d": 18.84
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 21.75,
        "priceAvg30d": 18.43
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 20.72,
        "priceAvg30d": 17.46
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 12.0,
        "priceAvg30d": 15.7
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 9.33,
        "priceAvg30d": 14.07
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 3.0,
        "priceAvg30d": 14.16
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 1.0,
        "priceAvg30d": 14.97
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 0.04,
        "priceAvg30d": 16.14
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 0.01,
        "priceAvg30d": 16.97
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 0.01,
        "priceAvg30d": 16.6
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 0.01,
        "priceAvg30d": 15.66
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 0.01,
        "priceAvg30d": 15.27
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 0.01,
        "priceAvg30d": 15.12
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 0.01,
        "priceAvg30d": 14.76
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 0.01,
        "priceAvg30d": 12.92
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 0.01,
        "priceAvg30d": 13.51
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 0.01,
        "priceAvg30d": 15.36
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 0.01,
        "priceAvg30d": 17.38
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 0.02,
        "priceAvg30d": 18.31
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 0.1,
        "priceAvg30d": 20.1
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 0.5,
        "priceAvg30d": 20.17
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 10.1,
        "priceAvg30d": 23.02
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 10.15,
        "priceAvg30d": 24.37
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 17.43,
        "priceAvg30d": 26.4
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 19.95,
        "priceAvg30d": 26.58
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 21.57,
        "priceAvg30d": 26.93
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 21.57,
        "priceAvg30d": 26.9
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 21.72,
        "priceAvg30d": 26.51
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 20.99,
        "priceAvg30d": 25.21
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 19.94,
        "priceAvg30d": 23.82
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 19.18,
        "priceAvg30d": 22.87
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 17.49,
        "priceAvg30d": 22.28
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 17.49,
        "priceAvg30d": 21.36
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 17.49,
        "priceAvg30d": 21.27
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 18.83,
        "priceAvg30d": 21.05
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 17.0,
        "priceAvg30d": 19.56
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 18.0,
        "priceAvg30d": 19.26
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 16.4,
        "priceAvg30d": 17.19
      }
    ],
    "avg": 12.41,
    "max": 22.1,
    "maxBlock": 11,
    "min": 0.01,
    "minBlock": 19,
    "spread3h": 18.71,
    "spreadLowAvg": 0.68,
    "spreadHighAvg": 19.39,
    "avg30d": 18.62,
    "spread30dAvg": 14.4,
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
          "price": 11.05,
          "priceAvg30d": 13.82
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.45,
          "priceAvg30d": 12.76
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.43,
          "priceAvg30d": 12.43
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 11.17,
          "priceAvg30d": 12.29
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 11.58,
          "priceAvg30d": 13.18
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.98,
          "priceAvg30d": 14.07
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 14.86,
          "priceAvg30d": 14.98
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.38,
          "priceAvg30d": 15.15
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.38,
          "priceAvg30d": 15.11
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.81,
          "priceAvg30d": 15.41
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.39,
          "priceAvg30d": 15.51
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.66,
          "priceAvg30d": 14.46
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.1,
          "priceAvg30d": 13.15
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.39,
          "priceAvg30d": 11.68
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.19,
          "priceAvg30d": 10.66
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 4.0,
          "priceAvg30d": 9.8
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 1.02,
          "priceAvg30d": 9.21
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 9.88
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 9.09
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 8.26
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.61
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 7.48
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 7.8
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 7.16
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.61
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.64
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 5.0,
          "priceAvg30d": 7.78
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.33,
          "priceAvg30d": 9.72
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.33,
          "priceAvg30d": 10.09
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.33,
          "priceAvg30d": 11.59
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.33,
          "priceAvg30d": 13.73
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 18.13,
          "priceAvg30d": 16.39
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 22.13,
          "priceAvg30d": 19.36
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.49,
          "priceAvg30d": 22.06
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 25.51,
          "priceAvg30d": 21.99
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 25.86,
          "priceAvg30d": 22.03
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 26.1,
          "priceAvg30d": 21.36
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.1,
          "priceAvg30d": 22.63
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.51,
          "priceAvg30d": 21.67
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.65,
          "priceAvg30d": 20.19
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.0,
          "priceAvg30d": 19.25
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.29,
          "priceAvg30d": 19.1
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.73,
          "priceAvg30d": 17.8
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.73,
          "priceAvg30d": 17.99
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 23.31,
          "priceAvg30d": 17.4
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.12,
          "priceAvg30d": 15.62
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.02,
          "priceAvg30d": 14.83
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.28,
          "priceAvg30d": 13.86
        }
      ],
      "avg": 14.53,
      "max": 26.1,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 24.51,
      "spreadLowAvg": 1.01,
      "spreadHighAvg": 25.52,
      "avg30d": 13.97,
      "spread30dAvg": 13.26,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.12,
          "priceAvg30d": 18.97
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 25.01,
          "priceAvg30d": 17.78
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.36,
          "priceAvg30d": 16.84
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.66,
          "priceAvg30d": 16.67
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.07,
          "priceAvg30d": 16.59
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.66,
          "priceAvg30d": 16.7
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.66,
          "priceAvg30d": 17.88
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.38,
          "priceAvg30d": 18.04
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.38,
          "priceAvg30d": 18.23
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.81,
          "priceAvg30d": 18.44
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.39,
          "priceAvg30d": 18.83
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.66,
          "priceAvg30d": 18.43
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.1,
          "priceAvg30d": 17.37
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 11.39,
          "priceAvg30d": 16.01
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.19,
          "priceAvg30d": 14.35
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 4.0,
          "priceAvg30d": 13.11
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 1.02,
          "priceAvg30d": 10.87
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 10.85
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 11.21
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 10.62
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 9.79
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 9.6
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 9.46
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 8.59
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 7.4
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 8.06
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 9.6
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 11.18
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.9,
          "priceAvg30d": 11.79
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 7.83,
          "priceAvg30d": 13.92
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 4.92,
          "priceAvg30d": 16.27
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 18.13,
          "priceAvg30d": 20.62
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 22.13,
          "priceAvg30d": 23.47
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.49,
          "priceAvg30d": 27.35
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 25.51,
          "priceAvg30d": 27.14
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 25.86,
          "priceAvg30d": 27.7
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 26.1,
          "priceAvg30d": 27.62
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.1,
          "priceAvg30d": 27.17
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.51,
          "priceAvg30d": 26.45
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.65,
          "priceAvg30d": 24.64
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.0,
          "priceAvg30d": 23.57
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.29,
          "priceAvg30d": 22.75
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.73,
          "priceAvg30d": 21.71
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.73,
          "priceAvg30d": 21.62
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 23.31,
          "priceAvg30d": 21.71
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.12,
          "priceAvg30d": 20.71
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.02,
          "priceAvg30d": 20.4
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.28,
          "priceAvg30d": 19.03
        }
      ],
      "avg": 15.78,
      "max": 26.1,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 24.51,
      "spreadLowAvg": 1.01,
      "spreadHighAvg": 25.52,
      "avg30d": 17.44,
      "spread30dAvg": 16.8,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.57,
          "priceAvg30d": 20.95
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 25.01,
          "priceAvg30d": 20.35
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.36,
          "priceAvg30d": 19.41
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.66,
          "priceAvg30d": 19.69
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.07,
          "priceAvg30d": 19.37
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.66,
          "priceAvg30d": 19.57
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.66,
          "priceAvg30d": 20.2
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.38,
          "priceAvg30d": 20.43
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.38,
          "priceAvg30d": 20.83
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.81,
          "priceAvg30d": 21.12
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.39,
          "priceAvg30d": 21.38
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.66,
          "priceAvg30d": 21.05
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.22,
          "priceAvg30d": 20.38
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 18.13,
          "priceAvg30d": 20.37
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.3,
          "priceAvg30d": 20.5
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.03,
          "priceAvg30d": 20.86
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 1.02,
          "priceAvg30d": 21.48
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 23.86
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.74,
          "priceAvg30d": 24.0
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 24.19
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 23.22
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 23.53
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 23.59
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 23.42
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 21.59
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 22.25
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 23.31
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.04,
          "priceAvg30d": 24.69
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.9,
          "priceAvg30d": 25.49
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 7.83,
          "priceAvg30d": 26.84
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 4.92,
          "priceAvg30d": 25.08
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 18.13,
          "priceAvg30d": 27.29
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 22.13,
          "priceAvg30d": 28.9
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 25.49,
          "priceAvg30d": 30.57
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 25.51,
          "priceAvg30d": 29.95
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 25.86,
          "priceAvg30d": 30.19
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 26.1,
          "priceAvg30d": 30.11
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 26.1,
          "priceAvg30d": 29.9
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.51,
          "priceAvg30d": 28.64
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.65,
          "priceAvg30d": 26.8
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.0,
          "priceAvg30d": 25.5
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.29,
          "priceAvg30d": 24.88
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.73,
          "priceAvg30d": 23.95
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.73,
          "priceAvg30d": 24.7
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 23.31,
          "priceAvg30d": 24.9
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.12,
          "priceAvg30d": 23.9
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.02,
          "priceAvg30d": 23.75
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.28,
          "priceAvg30d": 21.89
        }
      ],
      "avg": 16.31,
      "max": 26.1,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 25.05,
      "spreadLowAvg": 0.47,
      "spreadHighAvg": 25.52,
      "avg30d": 23.73,
      "spread30dAvg": 11.12,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.57,
          "priceAvg30d": 20.9
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 25.01,
          "priceAvg30d": 20.42
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.36,
          "priceAvg30d": 19.42
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.66,
          "priceAvg30d": 19.37
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.07,
          "priceAvg30d": 19.11
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 23.66,
          "priceAvg30d": 19.29
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 23.66,
          "priceAvg30d": 19.83
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 24.38,
          "priceAvg30d": 20.26
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 24.38,
          "priceAvg30d": 20.67
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 24.81,
          "priceAvg30d": 21.04
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 24.39,
          "priceAvg30d": 21.36
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 23.66,
          "priceAvg30d": 21.18
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.22,
          "priceAvg30d": 20.95
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 18.13,
          "priceAvg30d": 20.59
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.3,
          "priceAvg30d": 20.08
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.03,
          "priceAvg30d": 20.05
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 1.02,
          "priceAvg30d": 21.45
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 23.05
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.74,
          "priceAvg30d": 23.51
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 23.34
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 22.46
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 22.45
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 22.36
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 22.15
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 20.24
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 20.83
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 23.09
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.04,
          "priceAvg30d": 24.81
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.9,
          "priceAvg30d": 25.58
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 4.92,
          "priceAvg30d": 26.48
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 4.92,
          "priceAvg30d": 26.17
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 15.0,
          "priceAvg30d": 27.7
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 21.8,
          "priceAvg30d": 28.19
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 23.29,
          "priceAvg30d": 29.81
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 25.51,
          "priceAvg30d": 29.9
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 25.86,
          "priceAvg30d": 30.03
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 25.58,
          "priceAvg30d": 29.78
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.66,
          "priceAvg30d": 29.32
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 25.34,
          "priceAvg30d": 28.29
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.65,
          "priceAvg30d": 26.66
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.0,
          "priceAvg30d": 25.65
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.29,
          "priceAvg30d": 25.02
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.73,
          "priceAvg30d": 24.1
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.73,
          "priceAvg30d": 24.7
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 23.31,
          "priceAvg30d": 24.79
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 24.12,
          "priceAvg30d": 23.72
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 25.02,
          "priceAvg30d": 23.66
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 24.28,
          "priceAvg30d": 22.01
        }
      ],
      "avg": 16.09,
      "max": 25.86,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 23.9,
      "spreadLowAvg": 0.47,
      "spreadHighAvg": 24.36,
      "avg30d": 23.45,
      "spread30dAvg": 12.41,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.01,
          "priceAvg30d": 11.48
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.7,
          "priceAvg30d": 11.53
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.99,
          "priceAvg30d": 11.86
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.01,
          "priceAvg30d": 11.62
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.03,
          "priceAvg30d": 11.55
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.97,
          "priceAvg30d": 12.05
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.06,
          "priceAvg30d": 12.52
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 9.97,
          "priceAvg30d": 12.8
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 9.92,
          "priceAvg30d": 12.62
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 9.98,
          "priceAvg30d": 13.62
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.06,
          "priceAvg30d": 14.35
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.06,
          "priceAvg30d": 14.42
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.4,
          "priceAvg30d": 15.19
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.06,
          "priceAvg30d": 13.03
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.85,
          "priceAvg30d": 12.34
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.03,
          "priceAvg30d": 11.4
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 1.02,
          "priceAvg30d": 12.13
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 14.93
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.74,
          "priceAvg30d": 17.63
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 18.01
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 17.48
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 17.29
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 17.12
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 17.05
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 14.29
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 15.06
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 17.1
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.04,
          "priceAvg30d": 18.94
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.9,
          "priceAvg30d": 18.93
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 4.92,
          "priceAvg30d": 19.93
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 4.92,
          "priceAvg30d": 19.62
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.92,
          "priceAvg30d": 20.58
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.15,
          "priceAvg30d": 20.37
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.01,
          "priceAvg30d": 21.43
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 12.61,
          "priceAvg30d": 21.43
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 12.75,
          "priceAvg30d": 22.58
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 9.97,
          "priceAvg30d": 22.05
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 12.75,
          "priceAvg30d": 22.01
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.72,
          "priceAvg30d": 20.66
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.75,
          "priceAvg30d": 18.96
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 9.97,
          "priceAvg30d": 18.22
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 12.06,
          "priceAvg30d": 17.59
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 13.5,
          "priceAvg30d": 17.32
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 12.75,
          "priceAvg30d": 16.12
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.4,
          "priceAvg30d": 16.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.61,
          "priceAvg30d": 14.55
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 12.61,
          "priceAvg30d": 14.21
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.66,
          "priceAvg30d": 11.72
        }
      ],
      "avg": 8.23,
      "max": 16.4,
      "maxBlock": 13,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 10.38,
      "spreadLowAvg": 0.47,
      "spreadHighAvg": 10.84,
      "avg30d": 16.12,
      "spread30dAvg": 10.63,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.94,
          "priceAvg30d": 11.4
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.7,
          "priceAvg30d": 11.53
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.98,
          "priceAvg30d": 11.86
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.97,
          "priceAvg30d": 11.62
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.81,
          "priceAvg30d": 11.55
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.97,
          "priceAvg30d": 12.05
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.06,
          "priceAvg30d": 12.51
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 9.97,
          "priceAvg30d": 12.8
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 9.92,
          "priceAvg30d": 12.62
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 9.98,
          "priceAvg30d": 13.62
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.06,
          "priceAvg30d": 14.35
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.06,
          "priceAvg30d": 14.41
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.4,
          "priceAvg30d": 15.19
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.06,
          "priceAvg30d": 12.99
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.0,
          "priceAvg30d": 12.34
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 1.0,
          "priceAvg30d": 11.24
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 1.01,
          "priceAvg30d": 11.56
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.5,
          "priceAvg30d": 13.52
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 16.32
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 16.38
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 15.92
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 15.9
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 16.25
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 15.62
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 13.34
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 13.9
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 16.04
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 18.3
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 18.09
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 19.01
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 0.01,
          "priceAvg30d": 18.47
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.73,
          "priceAvg30d": 19.4
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.15,
          "priceAvg30d": 19.85
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.01,
          "priceAvg30d": 21.07
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 12.61,
          "priceAvg30d": 21.29
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 12.75,
          "priceAvg30d": 22.45
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 9.97,
          "priceAvg30d": 21.94
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 12.75,
          "priceAvg30d": 21.88
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.72,
          "priceAvg30d": 20.53
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.75,
          "priceAvg30d": 18.83
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 9.97,
          "priceAvg30d": 18.22
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 12.06,
          "priceAvg30d": 17.59
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 13.5,
          "priceAvg30d": 17.32
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 12.75,
          "priceAvg30d": 16.12
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.4,
          "priceAvg30d": 16.01
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.61,
          "priceAvg30d": 14.55
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 12.61,
          "priceAvg30d": 14.21
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.66,
          "priceAvg30d": 11.72
        }
      ],
      "avg": 7.74,
      "max": 16.4,
      "maxBlock": 13,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 8.94,
      "spreadLowAvg": 0.42,
      "spreadHighAvg": 9.36,
      "avg30d": 15.7,
      "spread30dAvg": 10.43,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.94,
          "priceAvg30d": 11.4
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.7,
          "priceAvg30d": 11.53
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.98,
          "priceAvg30d": 11.86
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.97,
          "priceAvg30d": 11.62
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.81,
          "priceAvg30d": 11.53
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.97,
          "priceAvg30d": 11.92
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.06,
          "priceAvg30d": 12.25
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 9.97,
          "priceAvg30d": 12.8
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 9.92,
          "priceAvg30d": 12.51
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 9.98,
          "priceAvg30d": 13.56
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.06,
          "priceAvg30d": 14.33
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.06,
          "priceAvg30d": 14.36
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.4,
          "priceAvg30d": 15.11
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.06,
          "priceAvg30d": 12.73
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.0,
          "priceAvg30d": 12.01
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 1.0,
          "priceAvg30d": 10.88
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 1.01,
          "priceAvg30d": 10.95
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.5,
          "priceAvg30d": 11.58
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 12.16
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 11.93
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 12.19
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 12.04
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 11.62
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 11.34
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 10.38
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 10.55
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 12.1
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 13.17
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 12.52
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 13.22
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 0.01,
          "priceAvg30d": 14.18
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.73,
          "priceAvg30d": 16.03
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.15,
          "priceAvg30d": 16.91
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.01,
          "priceAvg30d": 19.4
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 12.61,
          "priceAvg30d": 20.81
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 12.75,
          "priceAvg30d": 22.04
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 9.97,
          "priceAvg30d": 21.53
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 12.75,
          "priceAvg30d": 21.4
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.72,
          "priceAvg30d": 20.42
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.75,
          "priceAvg30d": 18.83
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 9.97,
          "priceAvg30d": 18.22
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 12.06,
          "priceAvg30d": 17.59
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 13.5,
          "priceAvg30d": 17.32
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 12.75,
          "priceAvg30d": 16.12
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.4,
          "priceAvg30d": 15.98
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.61,
          "priceAvg30d": 14.55
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 12.61,
          "priceAvg30d": 14.21
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.66,
          "priceAvg30d": 11.72
        }
      ],
      "avg": 7.74,
      "max": 16.4,
      "maxBlock": 13,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 8.94,
      "spreadLowAvg": 0.42,
      "spreadHighAvg": 9.36,
      "avg30d": 14.24,
      "spread30dAvg": 10.88,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.27,
          "priceAvg30d": 10.95
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.44,
          "priceAvg30d": 10.73
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 8.17,
          "priceAvg30d": 10.9
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 8.16,
          "priceAvg30d": 10.72
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.17,
          "priceAvg30d": 10.54
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 8.18,
          "priceAvg30d": 10.97
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 8.21,
          "priceAvg30d": 11.13
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 8.26,
          "priceAvg30d": 11.6
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.31,
          "priceAvg30d": 10.81
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.87,
          "priceAvg30d": 12.07
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 9.55,
          "priceAvg30d": 12.98
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 9.41,
          "priceAvg30d": 13.0
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 8.49,
          "priceAvg30d": 13.47
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 7.3,
          "priceAvg30d": 11.11
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 0.01,
          "priceAvg30d": 10.53
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 0.02,
          "priceAvg30d": 9.66
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 1.01,
          "priceAvg30d": 9.6
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.5,
          "priceAvg30d": 10.4
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 10.19
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 9.51
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 9.7
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 9.62
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 9.42
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 9.43
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 8.94
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 8.97
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 10.29
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 11.67
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 11.17
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 11.29
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 0.01,
          "priceAvg30d": 11.89
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.45,
          "priceAvg30d": 13.27
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 2.9,
          "priceAvg30d": 13.62
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 2.9,
          "priceAvg30d": 15.65
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 8.2,
          "priceAvg30d": 16.18
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 8.33,
          "priceAvg30d": 18.45
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 8.33,
          "priceAvg30d": 18.77
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 8.32,
          "priceAvg30d": 18.52
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 8.28,
          "priceAvg30d": 16.77
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 8.26,
          "priceAvg30d": 14.04
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 8.26,
          "priceAvg30d": 14.09
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 8.21,
          "priceAvg30d": 13.3
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 8.22,
          "priceAvg30d": 13.11
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 8.19,
          "priceAvg30d": 12.21
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 8.14,
          "priceAvg30d": 12.45
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 7.0,
          "priceAvg30d": 11.71
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 8.14,
          "priceAvg30d": 11.84
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 7.0,
          "priceAvg30d": 10.33
        }
      ],
      "avg": 5.14,
      "max": 9.55,
      "maxBlock": 11,
      "min": 0.01,
      "minBlock": 15,
      "spread3h": 3.98,
      "spreadLowAvg": 4.46,
      "spreadHighAvg": 8.44,
      "avg30d": 12.03,
      "spread30dAvg": 10.13,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.94,
          "priceAvg30d": 10.83
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 11.7,
          "priceAvg30d": 10.85
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.98,
          "priceAvg30d": 10.73
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.97,
          "priceAvg30d": 10.49
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.81,
          "priceAvg30d": 10.3
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 9.97,
          "priceAvg30d": 10.52
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.06,
          "priceAvg30d": 10.73
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 9.97,
          "priceAvg30d": 11.4
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 9.92,
          "priceAvg30d": 11.34
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 9.98,
          "priceAvg30d": 12.43
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.06,
          "priceAvg30d": 13.38
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 12.06,
          "priceAvg30d": 13.6
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.4,
          "priceAvg30d": 14.47
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.06,
          "priceAvg30d": 11.69
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.0,
          "priceAvg30d": 10.78
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 1.0,
          "priceAvg30d": 9.79
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 1.01,
          "priceAvg30d": 10.16
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.5,
          "priceAvg30d": 10.55
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 10.93
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 10.42
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 10.06
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 9.74
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 9.56
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 9.39
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 8.92
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 8.98
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 9.85
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 10.76
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 11.31
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 12.44
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 0.01,
          "priceAvg30d": 14.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.73,
          "priceAvg30d": 15.82
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.15,
          "priceAvg30d": 16.91
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 10.01,
          "priceAvg30d": 19.4
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 12.61,
          "priceAvg30d": 20.81
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 12.75,
          "priceAvg30d": 22.04
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 9.97,
          "priceAvg30d": 21.53
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 12.75,
          "priceAvg30d": 21.4
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.72,
          "priceAvg30d": 20.42
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.75,
          "priceAvg30d": 18.83
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 9.97,
          "priceAvg30d": 18.22
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 12.06,
          "priceAvg30d": 17.59
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 13.5,
          "priceAvg30d": 17.31
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 12.75,
          "priceAvg30d": 16.12
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.4,
          "priceAvg30d": 15.86
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.61,
          "priceAvg30d": 14.44
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 12.61,
          "priceAvg30d": 14.09
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.66,
          "priceAvg30d": 11.19
        }
      ],
      "avg": 7.74,
      "max": 16.4,
      "maxBlock": 13,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 8.94,
      "spreadLowAvg": 0.42,
      "spreadHighAvg": 9.36,
      "avg30d": 13.38,
      "spread30dAvg": 11.72,
      "historyDays": 30
    }
  }
};
