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
  "targetDate": "2026-09-15",
  "fetchedAt": "2026-09-15T09:04:58+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 19.52,
        "priceAvg30d": 17.41
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 16.94,
        "priceAvg30d": 16.68
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 16.0,
        "priceAvg30d": 16.11
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 14.13,
        "priceAvg30d": 16.31
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 14.12,
        "priceAvg30d": 16.2
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 14.13,
        "priceAvg30d": 16.22
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 14.28,
        "priceAvg30d": 16.43
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 14.97,
        "priceAvg30d": 16.5
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 15.0,
        "priceAvg30d": 16.68
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 16.98,
        "priceAvg30d": 17.09
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 18.86,
        "priceAvg30d": 17.75
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 19.17,
        "priceAvg30d": 17.28
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 19.07,
        "priceAvg30d": 16.7
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 19.52,
        "priceAvg30d": 16.09
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 19.52,
        "priceAvg30d": 15.52
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 20.0,
        "priceAvg30d": 15.92
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 22.31,
        "priceAvg30d": 16.81
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 24.56,
        "priceAvg30d": 18.48
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 27.75,
        "priceAvg30d": 18.9
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 27.24,
        "priceAvg30d": 18.83
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 25.6,
        "priceAvg30d": 17.89
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 25.7,
        "priceAvg30d": 17.9
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 25.33,
        "priceAvg30d": 17.98
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 24.91,
        "priceAvg30d": 17.85
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 22.82,
        "priceAvg30d": 16.54
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 22.65,
        "priceAvg30d": 17.0
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 24.61,
        "priceAvg30d": 18.33
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 26.12,
        "priceAvg30d": 20.09
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 27.71,
        "priceAvg30d": 21.65
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 28.19,
        "priceAvg30d": 23.64
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 28.03,
        "priceAvg30d": 22.66
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 30.0,
        "priceAvg30d": 25.69
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 31.02,
        "priceAvg30d": 27.24
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 31.29,
        "priceAvg30d": 29.52
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 30.0,
        "priceAvg30d": 29.66
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 30.0,
        "priceAvg30d": 30.35
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 30.0,
        "priceAvg30d": 30.35
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 29.0,
        "priceAvg30d": 29.84
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 26.79,
        "priceAvg30d": 28.17
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 23.61,
        "priceAvg30d": 26.21
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 22.59,
        "priceAvg30d": 24.42
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 22.03,
        "priceAvg30d": 22.37
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 21.74,
        "priceAvg30d": 21.13
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 21.58,
        "priceAvg30d": 23.0
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 20.8,
        "priceAvg30d": 21.86
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 19.97,
        "priceAvg30d": 19.87
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 19.27,
        "priceAvg30d": 19.66
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 15.0,
        "priceAvg30d": 17.88
      }
    ],
    "avg": 22.51,
    "max": 31.29,
    "maxBlock": 34,
    "min": 14.12,
    "minBlock": 5,
    "spread3h": 14.77,
    "spreadLowAvg": 15.08,
    "spreadHighAvg": 29.84,
    "avg30d": 20.35,
    "spread30dAvg": 13.99,
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
          "price": 10.71,
          "priceAvg30d": 14.28
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.97,
          "priceAvg30d": 13.73
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.53,
          "priceAvg30d": 13.21
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.72,
          "priceAvg30d": 13.19
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.06,
          "priceAvg30d": 13.82
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.11,
          "priceAvg30d": 14.03
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.0,
          "priceAvg30d": 15.36
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 13.0,
          "priceAvg30d": 15.47
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.73,
          "priceAvg30d": 15.86
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.73,
          "priceAvg30d": 15.93
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 20.08,
          "priceAvg30d": 15.49
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.1,
          "priceAvg30d": 14.71
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.86,
          "priceAvg30d": 13.91
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.7,
          "priceAvg30d": 12.11
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 20.0,
          "priceAvg30d": 10.93
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 19.79,
          "priceAvg30d": 10.28
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 16.01,
          "priceAvg30d": 10.2
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.0,
          "priceAvg30d": 10.43
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.73,
          "priceAvg30d": 10.1
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.97,
          "priceAvg30d": 9.29
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.73,
          "priceAvg30d": 8.6
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.73,
          "priceAvg30d": 8.59
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.0,
          "priceAvg30d": 8.74
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.0,
          "priceAvg30d": 8.06
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.97,
          "priceAvg30d": 7.78
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.73,
          "priceAvg30d": 7.7
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 16.01,
          "priceAvg30d": 8.91
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 22.16,
          "priceAvg30d": 10.31
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 22.09,
          "priceAvg30d": 10.61
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 22.06,
          "priceAvg30d": 12.33
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 22.14,
          "priceAvg30d": 13.91
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 22.04,
          "priceAvg30d": 16.23
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 21.23,
          "priceAvg30d": 19.17
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 22.91,
          "priceAvg30d": 22.03
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.81,
          "priceAvg30d": 22.47
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 22.81,
          "priceAvg30d": 23.06
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 22.51,
          "priceAvg30d": 22.75
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 22.44,
          "priceAvg30d": 23.37
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.23,
          "priceAvg30d": 22.21
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.21,
          "priceAvg30d": 21.17
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.0,
          "priceAvg30d": 19.92
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.98,
          "priceAvg30d": 19.07
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.65,
          "priceAvg30d": 17.93
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.43,
          "priceAvg30d": 18.3
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.18,
          "priceAvg30d": 18.62
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.7,
          "priceAvg30d": 17.03
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.1,
          "priceAvg30d": 16.4
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 21.41,
          "priceAvg30d": 14.74
        }
      ],
      "avg": 16.96,
      "max": 25.0,
      "maxBlock": 41,
      "min": 9.53,
      "minBlock": 3,
      "spread3h": 10.21,
      "spreadLowAvg": 12.45,
      "spreadHighAvg": 22.66,
      "avg30d": 14.63,
      "spread30dAvg": 12.92,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 23.28,
          "priceAvg30d": 18.48
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.12,
          "priceAvg30d": 17.49
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.26,
          "priceAvg30d": 16.25
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 21.56,
          "priceAvg30d": 16.31
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.33,
          "priceAvg30d": 16.52
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.33,
          "priceAvg30d": 16.63
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.7,
          "priceAvg30d": 17.62
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.07,
          "priceAvg30d": 17.8
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.71,
          "priceAvg30d": 18.22
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 21.15,
          "priceAvg30d": 18.58
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.93,
          "priceAvg30d": 19.12
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 21.93,
          "priceAvg30d": 18.21
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 20.33,
          "priceAvg30d": 16.66
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.27,
          "priceAvg30d": 14.36
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 20.0,
          "priceAvg30d": 13.57
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 24.21,
          "priceAvg30d": 12.83
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 20.33,
          "priceAvg30d": 11.09
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 25.47,
          "priceAvg30d": 11.77
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 28.1,
          "priceAvg30d": 12.18
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 27.24,
          "priceAvg30d": 11.74
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 25.48,
          "priceAvg30d": 11.0
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 25.86,
          "priceAvg30d": 11.22
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 25.0,
          "priceAvg30d": 10.91
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 25.83,
          "priceAvg30d": 9.95
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 19.35,
          "priceAvg30d": 9.02
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.84,
          "priceAvg30d": 9.58
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 24.61,
          "priceAvg30d": 10.97
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 25.57,
          "priceAvg30d": 12.33
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 26.06,
          "priceAvg30d": 12.54
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 27.5,
          "priceAvg30d": 14.65
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 29.45,
          "priceAvg30d": 16.2
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 30.0,
          "priceAvg30d": 18.91
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.0,
          "priceAvg30d": 22.2
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.0,
          "priceAvg30d": 25.57
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 30.0,
          "priceAvg30d": 25.65
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 31.0,
          "priceAvg30d": 26.23
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 33.75,
          "priceAvg30d": 26.15
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 33.75,
          "priceAvg30d": 26.09
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 26.5,
          "priceAvg30d": 24.45
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.86,
          "priceAvg30d": 23.09
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.0,
          "priceAvg30d": 21.21
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.98,
          "priceAvg30d": 20.19
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.65,
          "priceAvg30d": 19.14
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.43,
          "priceAvg30d": 19.96
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.18,
          "priceAvg30d": 21.33
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.7,
          "priceAvg30d": 19.66
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 20.1,
          "priceAvg30d": 20.15
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.65,
          "priceAvg30d": 18.65
        }
      ],
      "avg": 24.3,
      "max": 33.75,
      "maxBlock": 37,
      "min": 18.84,
      "minBlock": 26,
      "spread3h": 4.95,
      "spreadLowAvg": 24.4,
      "spreadHighAvg": 29.35,
      "avg30d": 17.13,
      "spread30dAvg": 14.34,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 23.28,
          "priceAvg30d": 18.48
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.41,
          "priceAvg30d": 18.03
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.26,
          "priceAvg30d": 17.29
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 21.56,
          "priceAvg30d": 17.99
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 20.65,
          "priceAvg30d": 17.85
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 20.33,
          "priceAvg30d": 17.81
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.7,
          "priceAvg30d": 18.09
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 21.07,
          "priceAvg30d": 18.03
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 20.71,
          "priceAvg30d": 18.42
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 21.15,
          "priceAvg30d": 18.71
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 21.93,
          "priceAvg30d": 19.28
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 21.93,
          "priceAvg30d": 18.7
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.26,
          "priceAvg30d": 17.84
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.43,
          "priceAvg30d": 17.9
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.07,
          "priceAvg30d": 18.24
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 24.21,
          "priceAvg30d": 18.75
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 28.01,
          "priceAvg30d": 19.83
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 32.01,
          "priceAvg30d": 22.02
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 32.01,
          "priceAvg30d": 21.58
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 32.01,
          "priceAvg30d": 21.94
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 31.5,
          "priceAvg30d": 21.31
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 31.31,
          "priceAvg30d": 21.76
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 31.98,
          "priceAvg30d": 22.01
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 31.62,
          "priceAvg30d": 22.35
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 30.0,
          "priceAvg30d": 20.99
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 31.02,
          "priceAvg30d": 21.69
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 32.74,
          "priceAvg30d": 22.76
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 33.5,
          "priceAvg30d": 24.39
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 34.6,
          "priceAvg30d": 25.13
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 34.6,
          "priceAvg30d": 26.78
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.98,
          "priceAvg30d": 23.74
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 34.6,
          "priceAvg30d": 26.64
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 34.17,
          "priceAvg30d": 28.23
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 34.17,
          "priceAvg30d": 29.27
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 33.75,
          "priceAvg30d": 28.81
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 33.75,
          "priceAvg30d": 28.78
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 33.75,
          "priceAvg30d": 28.11
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 33.75,
          "priceAvg30d": 28.06
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.59,
          "priceAvg30d": 26.18
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.01,
          "priceAvg30d": 24.86
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 25.57,
          "priceAvg30d": 22.5
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.98,
          "priceAvg30d": 21.84
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.8,
          "priceAvg30d": 20.96
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 25.0,
          "priceAvg30d": 24.12
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.25,
          "priceAvg30d": 22.74
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.57,
          "priceAvg30d": 21.17
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 23.32,
          "priceAvg30d": 21.48
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.65,
          "priceAvg30d": 19.2
        }
      ],
      "avg": 27.45,
      "max": 34.6,
      "maxBlock": 29,
      "min": 20.33,
      "minBlock": 6,
      "spread3h": 11.91,
      "spreadLowAvg": 21.16,
      "spreadHighAvg": 33.07,
      "avg30d": 21.93,
      "spread30dAvg": 11.32,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 23.28,
          "priceAvg30d": 18.45
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 22.57,
          "priceAvg30d": 18.01
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 22.3,
          "priceAvg30d": 17.37
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.21,
          "priceAvg30d": 17.91
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.21,
          "priceAvg30d": 17.74
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.23,
          "priceAvg30d": 17.69
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.23,
          "priceAvg30d": 17.79
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.23,
          "priceAvg30d": 17.96
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.23,
          "priceAvg30d": 18.34
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.28,
          "priceAvg30d": 18.68
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.31,
          "priceAvg30d": 19.16
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.4,
          "priceAvg30d": 18.91
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.57,
          "priceAvg30d": 18.29
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.74,
          "priceAvg30d": 18.0
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 23.07,
          "priceAvg30d": 17.77
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 24.21,
          "priceAvg30d": 18.25
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 28.01,
          "priceAvg30d": 19.67
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 32.01,
          "priceAvg30d": 21.47
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 32.01,
          "priceAvg30d": 22.08
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 32.01,
          "priceAvg30d": 22.39
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 31.5,
          "priceAvg30d": 21.84
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 31.31,
          "priceAvg30d": 22.04
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 31.98,
          "priceAvg30d": 22.18
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 31.62,
          "priceAvg30d": 22.27
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 30.0,
          "priceAvg30d": 20.73
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 31.02,
          "priceAvg30d": 21.24
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 32.04,
          "priceAvg30d": 23.45
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 31.99,
          "priceAvg30d": 25.38
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 32.0,
          "priceAvg30d": 26.28
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.01,
          "priceAvg30d": 27.33
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.98,
          "priceAvg30d": 26.41
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.49,
          "priceAvg30d": 28.99
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.48,
          "priceAvg30d": 30.41
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 32.52,
          "priceAvg30d": 32.27
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.49,
          "priceAvg30d": 32.41
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 32.5,
          "priceAvg30d": 33.03
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 32.0,
          "priceAvg30d": 33.43
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.03,
          "priceAvg30d": 32.28
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.59,
          "priceAvg30d": 30.6
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 24.9,
          "priceAvg30d": 28.84
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.7,
          "priceAvg30d": 27.19
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.0,
          "priceAvg30d": 25.79
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.67,
          "priceAvg30d": 24.37
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.71,
          "priceAvg30d": 24.7
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 24.25,
          "priceAvg30d": 24.29
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 23.57,
          "priceAvg30d": 22.44
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 23.32,
          "priceAvg30d": 21.6
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 22.65,
          "priceAvg30d": 19.4
        }
      ],
      "avg": 27.11,
      "max": 32.52,
      "maxBlock": 34,
      "min": 22.21,
      "minBlock": 4,
      "spread3h": 9.85,
      "spreadLowAvg": 22.47,
      "spreadHighAvg": 32.32,
      "avg30d": 23.07,
      "spread30dAvg": 15.5,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.98,
          "priceAvg30d": 16.22
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.98,
          "priceAvg30d": 16.23
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 15.76
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.56,
          "priceAvg30d": 15.25
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.56,
          "priceAvg30d": 15.29
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 15.85
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.98,
          "priceAvg30d": 15.82
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.98,
          "priceAvg30d": 15.98
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.98,
          "priceAvg30d": 15.91
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 14.01,
          "priceAvg30d": 16.43
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.7,
          "priceAvg30d": 16.89
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.3,
          "priceAvg30d": 16.85
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.94,
          "priceAvg30d": 16.57
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.05,
          "priceAvg30d": 15.62
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.0,
          "priceAvg30d": 15.44
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.1,
          "priceAvg30d": 15.85
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 16.95,
          "priceAvg30d": 16.88
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.8,
          "priceAvg30d": 19.73
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.0,
          "priceAvg30d": 20.58
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.0,
          "priceAvg30d": 21.4
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.38,
          "priceAvg30d": 20.93
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 19.9,
          "priceAvg30d": 20.97
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 19.8,
          "priceAvg30d": 20.72
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 18.56,
          "priceAvg30d": 21.24
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 17.23,
          "priceAvg30d": 19.19
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.0,
          "priceAvg30d": 19.79
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.5,
          "priceAvg30d": 22.06
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 23.86
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 32.0,
          "priceAvg30d": 24.59
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 32.01,
          "priceAvg30d": 25.51
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 31.98,
          "priceAvg30d": 24.88
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.49,
          "priceAvg30d": 27.48
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 21.0,
          "priceAvg30d": 28.45
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 22.59,
          "priceAvg30d": 30.76
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.12,
          "priceAvg30d": 30.47
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.12,
          "priceAvg30d": 31.5
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.12,
          "priceAvg30d": 31.89
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.0,
          "priceAvg30d": 30.86
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.0,
          "priceAvg30d": 29.21
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.9,
          "priceAvg30d": 27.27
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.38,
          "priceAvg30d": 25.58
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.27,
          "priceAvg30d": 23.99
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.27,
          "priceAvg30d": 22.27
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.86,
          "priceAvg30d": 21.94
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.93,
          "priceAvg30d": 21.53
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.48,
          "priceAvg30d": 19.82
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.98,
          "priceAvg30d": 19.13
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.56,
          "priceAvg30d": 16.71
        }
      ],
      "avg": 18.9,
      "max": 32.49,
      "maxBlock": 32,
      "min": 10.56,
      "minBlock": 4,
      "spread3h": 15.88,
      "spreadLowAvg": 10.9,
      "spreadHighAvg": 26.78,
      "avg30d": 21.19,
      "spread30dAvg": 15.46,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.98,
          "priceAvg30d": 15.25
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.98,
          "priceAvg30d": 15.62
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 15.2
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.56,
          "priceAvg30d": 14.91
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.56,
          "priceAvg30d": 14.91
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 15.26
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.98,
          "priceAvg30d": 15.23
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.98,
          "priceAvg30d": 15.4
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.98,
          "priceAvg30d": 15.37
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 14.01,
          "priceAvg30d": 15.9
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.7,
          "priceAvg30d": 16.35
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.3,
          "priceAvg30d": 16.41
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.94,
          "priceAvg30d": 16.2
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.05,
          "priceAvg30d": 15.23
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.0,
          "priceAvg30d": 14.85
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.1,
          "priceAvg30d": 14.95
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 16.95,
          "priceAvg30d": 15.82
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.8,
          "priceAvg30d": 18.34
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.0,
          "priceAvg30d": 19.26
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 30.0,
          "priceAvg30d": 19.75
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.38,
          "priceAvg30d": 19.55
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 19.9,
          "priceAvg30d": 19.66
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 19.8,
          "priceAvg30d": 20.01
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 18.56,
          "priceAvg30d": 19.95
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 17.23,
          "priceAvg30d": 18.08
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.0,
          "priceAvg30d": 18.44
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.5,
          "priceAvg30d": 21.02
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 23.19
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 29.0,
          "priceAvg30d": 23.85
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 29.0,
          "priceAvg30d": 24.36
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 21.0,
          "priceAvg30d": 24.12
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.5,
          "priceAvg30d": 25.96
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 21.0,
          "priceAvg30d": 27.14
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 22.59,
          "priceAvg30d": 30.18
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.12,
          "priceAvg30d": 30.24
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.12,
          "priceAvg30d": 31.13
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.12,
          "priceAvg30d": 31.54
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.0,
          "priceAvg30d": 30.59
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.0,
          "priceAvg30d": 29.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.9,
          "priceAvg30d": 27.08
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.38,
          "priceAvg30d": 25.53
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.27,
          "priceAvg30d": 23.9
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.27,
          "priceAvg30d": 22.14
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.86,
          "priceAvg30d": 20.91
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.93,
          "priceAvg30d": 19.47
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.48,
          "priceAvg30d": 17.46
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.98,
          "priceAvg30d": 17.29
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.56,
          "priceAvg30d": 15.31
        }
      ],
      "avg": 18.3,
      "max": 30.0,
      "maxBlock": 19,
      "min": 10.56,
      "minBlock": 4,
      "spread3h": 9.29,
      "spreadLowAvg": 10.9,
      "spreadHighAvg": 20.19,
      "avg30d": 20.36,
      "spread30dAvg": 15.49,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.98,
          "priceAvg30d": 15.25
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.98,
          "priceAvg30d": 15.62
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 15.2
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.56,
          "priceAvg30d": 14.91
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.56,
          "priceAvg30d": 14.91
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 15.26
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.98,
          "priceAvg30d": 15.23
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.98,
          "priceAvg30d": 15.4
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.98,
          "priceAvg30d": 15.37
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 14.01,
          "priceAvg30d": 15.9
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.7,
          "priceAvg30d": 16.35
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.3,
          "priceAvg30d": 16.41
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.94,
          "priceAvg30d": 16.2
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.05,
          "priceAvg30d": 15.23
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.0,
          "priceAvg30d": 14.77
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.1,
          "priceAvg30d": 14.36
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 16.95,
          "priceAvg30d": 14.73
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.8,
          "priceAvg30d": 16.11
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.0,
          "priceAvg30d": 15.76
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 26.76,
          "priceAvg30d": 14.93
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 22.38,
          "priceAvg30d": 15.02
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 19.9,
          "priceAvg30d": 15.0
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 16.04,
          "priceAvg30d": 14.8
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.33,
          "priceAvg30d": 14.5
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 17.23,
          "priceAvg30d": 12.78
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.0,
          "priceAvg30d": 13.01
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.5,
          "priceAvg30d": 14.76
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 16.27
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.0,
          "priceAvg30d": 16.63
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.0,
          "priceAvg30d": 17.74
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 21.0,
          "priceAvg30d": 20.22
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.5,
          "priceAvg30d": 24.44
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 21.0,
          "priceAvg30d": 27.04
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 22.59,
          "priceAvg30d": 30.14
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.12,
          "priceAvg30d": 30.24
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.12,
          "priceAvg30d": 31.13
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.12,
          "priceAvg30d": 31.54
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.0,
          "priceAvg30d": 30.59
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.0,
          "priceAvg30d": 29.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.9,
          "priceAvg30d": 27.08
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.38,
          "priceAvg30d": 25.53
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.27,
          "priceAvg30d": 23.9
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.27,
          "priceAvg30d": 22.14
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.86,
          "priceAvg30d": 20.91
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.93,
          "priceAvg30d": 19.47
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.48,
          "priceAvg30d": 17.46
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.98,
          "priceAvg30d": 17.29
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.56,
          "priceAvg30d": 15.31
        }
      ],
      "avg": 17.5,
      "max": 30.0,
      "maxBlock": 19,
      "min": 10.56,
      "minBlock": 4,
      "spread3h": 8.75,
      "spreadLowAvg": 10.9,
      "spreadHighAvg": 19.65,
      "avg30d": 18.79,
      "spread30dAvg": 16.67,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.98,
          "priceAvg30d": 14.81
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 8.06,
          "priceAvg30d": 15.1
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 8.02,
          "priceAvg30d": 14.69
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 8.0,
          "priceAvg30d": 14.43
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 7.99,
          "priceAvg30d": 14.44
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 8.01,
          "priceAvg30d": 14.75
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 7.97,
          "priceAvg30d": 14.61
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 7.99,
          "priceAvg30d": 14.68
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 7.99,
          "priceAvg30d": 14.67
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 8.08,
          "priceAvg30d": 15.15
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 12.08,
          "priceAvg30d": 15.68
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.3,
          "priceAvg30d": 15.74
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 15.5,
          "priceAvg30d": 15.43
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 8.08,
          "priceAvg30d": 14.47
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.06,
          "priceAvg30d": 14.0
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.5,
          "priceAvg30d": 13.51
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.5,
          "priceAvg30d": 13.76
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 16.5,
          "priceAvg30d": 14.94
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 18.0,
          "priceAvg30d": 14.13
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 13.81,
          "priceAvg30d": 12.74
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 12.08,
          "priceAvg30d": 12.13
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.0,
          "priceAvg30d": 11.72
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 13.81,
          "priceAvg30d": 11.56
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 13.33,
          "priceAvg30d": 11.52
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 17.23,
          "priceAvg30d": 10.01
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 18.0,
          "priceAvg30d": 10.46
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.5,
          "priceAvg30d": 11.96
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.0,
          "priceAvg30d": 14.0
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.0,
          "priceAvg30d": 14.61
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.08,
          "priceAvg30d": 16.08
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 7.99,
          "priceAvg30d": 18.35
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.06,
          "priceAvg30d": 22.48
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.08,
          "priceAvg30d": 25.12
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 20.0,
          "priceAvg30d": 28.38
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.44,
          "priceAvg30d": 28.69
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.12,
          "priceAvg30d": 30.22
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.12,
          "priceAvg30d": 30.86
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.0,
          "priceAvg30d": 29.9
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.44,
          "priceAvg30d": 27.89
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 13.5,
          "priceAvg30d": 25.37
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.38,
          "priceAvg30d": 23.82
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.27,
          "priceAvg30d": 22.05
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.27,
          "priceAvg30d": 20.08
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.86,
          "priceAvg30d": 19.01
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.93,
          "priceAvg30d": 17.62
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.48,
          "priceAvg30d": 15.93
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.98,
          "priceAvg30d": 15.95
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.56,
          "priceAvg30d": 14.54
        }
      ],
      "avg": 14.29,
      "max": 30.0,
      "maxBlock": 28,
      "min": 7.97,
      "minBlock": 7,
      "spread3h": 7.12,
      "spreadLowAvg": 8.01,
      "spreadHighAvg": 15.13,
      "avg30d": 17.33,
      "spread30dAvg": 18.15,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.98,
          "priceAvg30d": 14.21
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.98,
          "priceAvg30d": 14.59
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 13.05
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.56,
          "priceAvg30d": 12.44
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.56,
          "priceAvg30d": 12.04
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 12.23
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.98,
          "priceAvg30d": 12.23
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.98,
          "priceAvg30d": 12.58
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.98,
          "priceAvg30d": 12.59
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 14.01,
          "priceAvg30d": 13.79
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 14.7,
          "priceAvg30d": 14.69
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.3,
          "priceAvg30d": 15.2
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.94,
          "priceAvg30d": 15.23
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 13.05,
          "priceAvg30d": 12.81
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.0,
          "priceAvg30d": 11.82
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 12.1,
          "priceAvg30d": 11.7
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 16.95,
          "priceAvg30d": 13.02
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 19.8,
          "priceAvg30d": 13.83
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 30.0,
          "priceAvg30d": 13.76
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 20.0,
          "priceAvg30d": 13.28
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 14.63,
          "priceAvg30d": 12.68
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 12.1,
          "priceAvg30d": 12.61
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.98,
          "priceAvg30d": 12.51
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.98,
          "priceAvg30d": 12.22
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.38,
          "priceAvg30d": 11.47
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.38,
          "priceAvg30d": 11.68
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.95,
          "priceAvg30d": 12.97
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.98,
          "priceAvg30d": 14.58
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 12.0,
          "priceAvg30d": 15.34
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 19.9,
          "priceAvg30d": 16.75
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 21.0,
          "priceAvg30d": 19.74
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.5,
          "priceAvg30d": 23.91
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 21.0,
          "priceAvg30d": 26.84
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 22.59,
          "priceAvg30d": 30.14
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 21.12,
          "priceAvg30d": 30.24
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 21.12,
          "priceAvg30d": 31.13
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 21.12,
          "priceAvg30d": 31.54
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.0,
          "priceAvg30d": 30.59
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.0,
          "priceAvg30d": 29.08
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.9,
          "priceAvg30d": 27.08
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.38,
          "priceAvg30d": 25.53
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.27,
          "priceAvg30d": 23.9
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.27,
          "priceAvg30d": 22.14
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 18.86,
          "priceAvg30d": 20.91
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 18.93,
          "priceAvg30d": 19.32
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.48,
          "priceAvg30d": 17.11
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 16.98,
          "priceAvg30d": 16.61
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.56,
          "priceAvg30d": 13.53
        }
      ],
      "avg": 15.84,
      "max": 30.0,
      "maxBlock": 19,
      "min": 10.38,
      "minBlock": 25,
      "spread3h": 4.87,
      "spreadLowAvg": 11.06,
      "spreadHighAvg": 15.93,
      "avg30d": 17.44,
      "spread30dAvg": 18.5,
      "historyDays": 30
    }
  }
};
