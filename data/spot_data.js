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
  "targetDate": "2026-09-26",
  "fetchedAt": "2026-09-26T09:04:42+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 18.59,
        "priceAvg30d": 17.66
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 17.98,
        "priceAvg30d": 16.45
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 16.5,
        "priceAvg30d": 15.6
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 15.0,
        "priceAvg30d": 15.43
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 14.67,
        "priceAvg30d": 15.15
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 14.67,
        "priceAvg30d": 15.4
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 14.67,
        "priceAvg30d": 15.91
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 15.5,
        "priceAvg30d": 16.32
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 17.12,
        "priceAvg30d": 16.75
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 18.01,
        "priceAvg30d": 17.68
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 18.3,
        "priceAvg30d": 18.53
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 17.29,
        "priceAvg30d": 18.09
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 14.12,
        "priceAvg30d": 17.14
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 14.03,
        "priceAvg30d": 15.98
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 14.03,
        "priceAvg30d": 15.01
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 14.03,
        "priceAvg30d": 15.14
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 14.31,
        "priceAvg30d": 15.96
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 15.0,
        "priceAvg30d": 17.48
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 17.8,
        "priceAvg30d": 18.17
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 18.0,
        "priceAvg30d": 17.92
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 18.0,
        "priceAvg30d": 16.91
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 17.29,
        "priceAvg30d": 16.83
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 17.0,
        "priceAvg30d": 16.58
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 16.2,
        "priceAvg30d": 16.31
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 15.0,
        "priceAvg30d": 14.87
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 15.0,
        "priceAvg30d": 15.4
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 17.5,
        "priceAvg30d": 16.8
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 18.01,
        "priceAvg30d": 18.7
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 20.0,
        "priceAvg30d": 20.03
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 20.33,
        "priceAvg30d": 21.95
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 20.4,
        "priceAvg30d": 21.56
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 21.74,
        "priceAvg30d": 23.94
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 20.8,
        "priceAvg30d": 25.31
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 21.74,
        "priceAvg30d": 27.86
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 20.4,
        "priceAvg30d": 27.79
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 20.4,
        "priceAvg30d": 28.37
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 20.4,
        "priceAvg30d": 28.38
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 20.85,
        "priceAvg30d": 27.66
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 20.4,
        "priceAvg30d": 26.38
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 19.0,
        "priceAvg30d": 24.77
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 17.54,
        "priceAvg30d": 23.3
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 17.0,
        "priceAvg30d": 22.35
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 17.0,
        "priceAvg30d": 21.29
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 14.67,
        "priceAvg30d": 21.84
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 15.06,
        "priceAvg30d": 21.29
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 14.31,
        "priceAvg30d": 19.71
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 14.12,
        "priceAvg30d": 19.41
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 12.75,
        "priceAvg30d": 17.32
      }
    ],
    "avg": 17.14,
    "max": 21.74,
    "maxBlock": 32,
    "min": 12.75,
    "minBlock": 48,
    "spread3h": 6.11,
    "spreadLowAvg": 14.5,
    "spreadHighAvg": 20.61,
    "avg30d": 19.47,
    "spread30dAvg": 13.87,
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
          "price": 24.31,
          "priceAvg30d": 12.82
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.08,
          "priceAvg30d": 12.09
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.81,
          "priceAvg30d": 11.76
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.78,
          "priceAvg30d": 11.62
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.0,
          "priceAvg30d": 12.7
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 16.1,
          "priceAvg30d": 13.41
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.0,
          "priceAvg30d": 14.51
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.33,
          "priceAvg30d": 14.63
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.0,
          "priceAvg30d": 15.16
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.71,
          "priceAvg30d": 15.29
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.7,
          "priceAvg30d": 14.75
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.48,
          "priceAvg30d": 13.61
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 9.67,
          "priceAvg30d": 12.47
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.67,
          "priceAvg30d": 11.14
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.54,
          "priceAvg30d": 10.54
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.54,
          "priceAvg30d": 9.88
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.23,
          "priceAvg30d": 9.33
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.0,
          "priceAvg30d": 9.98
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.49,
          "priceAvg30d": 9.21
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.49,
          "priceAvg30d": 8.44
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.49,
          "priceAvg30d": 7.81
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.49,
          "priceAvg30d": 7.79
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.49,
          "priceAvg30d": 8.27
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.49,
          "priceAvg30d": 7.55
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 8.5,
          "priceAvg30d": 7.1
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.4,
          "priceAvg30d": 6.91
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.49,
          "priceAvg30d": 8.04
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.45,
          "priceAvg30d": 9.91
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.45,
          "priceAvg30d": 10.19
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.49,
          "priceAvg30d": 11.17
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.45,
          "priceAvg30d": 12.94
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.35,
          "priceAvg30d": 15.24
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.37,
          "priceAvg30d": 17.83
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 23.37,
          "priceAvg30d": 19.93
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 20.0,
          "priceAvg30d": 21.03
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.0,
          "priceAvg30d": 21.24
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 24.26,
          "priceAvg30d": 21.19
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.4,
          "priceAvg30d": 21.44
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.0,
          "priceAvg30d": 21.36
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.0,
          "priceAvg30d": 20.14
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.74,
          "priceAvg30d": 19.8
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.4,
          "priceAvg30d": 19.48
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 11.85,
          "priceAvg30d": 18.09
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 13.0,
          "priceAvg30d": 17.87
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 10.45,
          "priceAvg30d": 17.13
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 9.78,
          "priceAvg30d": 15.9
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.45,
          "priceAvg30d": 14.98
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.78,
          "priceAvg30d": 13.99
        }
      ],
      "avg": 14.74,
      "max": 24.4,
      "maxBlock": 38,
      "min": 8.4,
      "minBlock": 26,
      "spread3h": 11.86,
      "spreadLowAvg": 9.64,
      "spreadHighAvg": 21.5,
      "avg30d": 13.7,
      "spread30dAvg": 12.62,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.31,
          "priceAvg30d": 18.47
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.08,
          "priceAvg30d": 17.01
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.81,
          "priceAvg30d": 15.94
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.78,
          "priceAvg30d": 15.69
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.0,
          "priceAvg30d": 15.87
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 16.1,
          "priceAvg30d": 16.06
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 20.0,
          "priceAvg30d": 17.33
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 20.33,
          "priceAvg30d": 17.43
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.0,
          "priceAvg30d": 17.93
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.71,
          "priceAvg30d": 18.34
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.7,
          "priceAvg30d": 18.76
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.48,
          "priceAvg30d": 18.07
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 9.67,
          "priceAvg30d": 16.68
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 9.67,
          "priceAvg30d": 14.84
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.54,
          "priceAvg30d": 13.77
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.54,
          "priceAvg30d": 13.02
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.23,
          "priceAvg30d": 11.04
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.0,
          "priceAvg30d": 11.48
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.67,
          "priceAvg30d": 12.1
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 9.67,
          "priceAvg30d": 11.76
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.67,
          "priceAvg30d": 11.06
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.55,
          "priceAvg30d": 11.21
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 9.67,
          "priceAvg30d": 10.88
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.55,
          "priceAvg30d": 9.88
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.67,
          "priceAvg30d": 8.62
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.67,
          "priceAvg30d": 9.17
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.78,
          "priceAvg30d": 10.73
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 11.25,
          "priceAvg30d": 12.08
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 13.0,
          "priceAvg30d": 12.31
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 15.0,
          "priceAvg30d": 13.51
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 18.5,
          "priceAvg30d": 15.51
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 20.35,
          "priceAvg30d": 19.19
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.37,
          "priceAvg30d": 22.08
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 24.0,
          "priceAvg30d": 25.7
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.25,
          "priceAvg30d": 25.3
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 24.17,
          "priceAvg30d": 25.72
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 24.26,
          "priceAvg30d": 25.59
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.4,
          "priceAvg30d": 25.23
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.0,
          "priceAvg30d": 24.38
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.0,
          "priceAvg30d": 22.88
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.74,
          "priceAvg30d": 21.78
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.4,
          "priceAvg30d": 20.8
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.0,
          "priceAvg30d": 19.86
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.4,
          "priceAvg30d": 19.69
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 10.45,
          "priceAvg30d": 20.32
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 9.78,
          "priceAvg30d": 18.99
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.45,
          "priceAvg30d": 19.18
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.78,
          "priceAvg30d": 18.34
        }
      ],
      "avg": 15.78,
      "max": 24.4,
      "maxBlock": 38,
      "min": 9.54,
      "minBlock": 15,
      "spread3h": 13.47,
      "spreadLowAvg": 9.93,
      "spreadHighAvg": 23.4,
      "avg30d": 16.91,
      "spread30dAvg": 14.23,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.31,
          "priceAvg30d": 19.98
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.08,
          "priceAvg30d": 19.37
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.81,
          "priceAvg30d": 18.67
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.78,
          "priceAvg30d": 19.1
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.0,
          "priceAvg30d": 18.89
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.0,
          "priceAvg30d": 18.89
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.01,
          "priceAvg30d": 19.33
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.05,
          "priceAvg30d": 19.39
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.05,
          "priceAvg30d": 19.82
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.05,
          "priceAvg30d": 20.13
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.1,
          "priceAvg30d": 20.54
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.05,
          "priceAvg30d": 20.19
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.05,
          "priceAvg30d": 19.43
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.05,
          "priceAvg30d": 19.47
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.96,
          "priceAvg30d": 19.57
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 22.95,
          "priceAvg30d": 20.23
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 23.71,
          "priceAvg30d": 21.5
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 24.0,
          "priceAvg30d": 23.9
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.08,
          "priceAvg30d": 23.81
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 24.28,
          "priceAvg30d": 24.12
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.28,
          "priceAvg30d": 23.31
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.08,
          "priceAvg30d": 23.79
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 24.08,
          "priceAvg30d": 23.88
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.08,
          "priceAvg30d": 23.86
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 23.71,
          "priceAvg30d": 22.39
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.24,
          "priceAvg30d": 22.92
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.24,
          "priceAvg30d": 23.96
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.71,
          "priceAvg30d": 25.18
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.71,
          "priceAvg30d": 25.97
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.8,
          "priceAvg30d": 27.1
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.95,
          "priceAvg30d": 25.04
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.08,
          "priceAvg30d": 27.02
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.37,
          "priceAvg30d": 28.49
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 24.0,
          "priceAvg30d": 30.34
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.25,
          "priceAvg30d": 29.27
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 24.17,
          "priceAvg30d": 29.3
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 24.26,
          "priceAvg30d": 29.18
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.4,
          "priceAvg30d": 29.12
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.0,
          "priceAvg30d": 27.76
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.0,
          "priceAvg30d": 26.23
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.74,
          "priceAvg30d": 24.52
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.4,
          "priceAvg30d": 23.95
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.0,
          "priceAvg30d": 23.05
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.4,
          "priceAvg30d": 24.49
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.4,
          "priceAvg30d": 24.15
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 20.4,
          "priceAvg30d": 23.02
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 22.02,
          "priceAvg30d": 22.92
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.98,
          "priceAvg30d": 21.06
        }
      ],
      "avg": 22.86,
      "max": 24.4,
      "maxBlock": 38,
      "min": 15.98,
      "minBlock": 48,
      "spread3h": 2.46,
      "spreadLowAvg": 20.94,
      "spreadHighAvg": 23.4,
      "avg30d": 23.28,
      "spread30dAvg": 10.72,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 24.31,
          "priceAvg30d": 20.2
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.08,
          "priceAvg30d": 19.67
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 23.81,
          "priceAvg30d": 18.96
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 22.78,
          "priceAvg30d": 19.16
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 22.0,
          "priceAvg30d": 18.99
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 22.0,
          "priceAvg30d": 19.02
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 22.01,
          "priceAvg30d": 19.33
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.05,
          "priceAvg30d": 19.63
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 22.05,
          "priceAvg30d": 20.07
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.05,
          "priceAvg30d": 20.37
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.1,
          "priceAvg30d": 20.66
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 22.05,
          "priceAvg30d": 20.66
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.05,
          "priceAvg30d": 20.19
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 22.05,
          "priceAvg30d": 19.82
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.96,
          "priceAvg30d": 19.32
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 22.95,
          "priceAvg30d": 19.61
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 23.71,
          "priceAvg30d": 21.35
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 24.0,
          "priceAvg30d": 23.16
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.08,
          "priceAvg30d": 23.84
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 24.28,
          "priceAvg30d": 23.94
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.28,
          "priceAvg30d": 23.16
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.08,
          "priceAvg30d": 23.36
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 24.08,
          "priceAvg30d": 23.26
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.08,
          "priceAvg30d": 23.23
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 23.71,
          "priceAvg30d": 21.68
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.24,
          "priceAvg30d": 22.18
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.24,
          "priceAvg30d": 24.03
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.71,
          "priceAvg30d": 25.51
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.71,
          "priceAvg30d": 26.2
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.8,
          "priceAvg30d": 27.07
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.95,
          "priceAvg30d": 26.74
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.08,
          "priceAvg30d": 28.4
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.37,
          "priceAvg30d": 29.5
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 24.0,
          "priceAvg30d": 31.9
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.25,
          "priceAvg30d": 31.89
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 24.17,
          "priceAvg30d": 32.07
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 24.26,
          "priceAvg30d": 31.9
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 24.4,
          "priceAvg30d": 30.75
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 24.0,
          "priceAvg30d": 29.43
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.0,
          "priceAvg30d": 27.74
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.74,
          "priceAvg30d": 26.52
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.4,
          "priceAvg30d": 25.68
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.0,
          "priceAvg30d": 24.54
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.5,
          "priceAvg30d": 24.85
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 17.16,
          "priceAvg30d": 24.58
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 17.0,
          "priceAvg30d": 23.3
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 22.02,
          "priceAvg30d": 22.96
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 15.98,
          "priceAvg30d": 21.21
        }
      ],
      "avg": 22.7,
      "max": 24.4,
      "maxBlock": 38,
      "min": 15.98,
      "minBlock": 48,
      "spread3h": 4.68,
      "spreadLowAvg": 18.73,
      "spreadHighAvg": 23.4,
      "avg30d": 23.78,
      "spread30dAvg": 13.41,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.74,
          "priceAvg30d": 13.29
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.95,
          "priceAvg30d": 13.31
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.2,
          "priceAvg30d": 13.25
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.2,
          "priceAvg30d": 13.13
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.2,
          "priceAvg30d": 13.01
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.53,
          "priceAvg30d": 13.25
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.2,
          "priceAvg30d": 13.46
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.95,
          "priceAvg30d": 13.65
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.34,
          "priceAvg30d": 13.42
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.8,
          "priceAvg30d": 14.3
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.52,
          "priceAvg30d": 15.0
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.63,
          "priceAvg30d": 14.93
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.2,
          "priceAvg30d": 15.83
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.1,
          "priceAvg30d": 13.97
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.2,
          "priceAvg30d": 13.83
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.95,
          "priceAvg30d": 13.33
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.95,
          "priceAvg30d": 14.53
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.21,
          "priceAvg30d": 17.63
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 17.29,
          "priceAvg30d": 19.14
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 17.8,
          "priceAvg30d": 19.95
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.86,
          "priceAvg30d": 19.4
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 18.0,
          "priceAvg30d": 19.34
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 18.63,
          "priceAvg30d": 19.05
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 18.63,
          "priceAvg30d": 19.04
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 17.5,
          "priceAvg30d": 16.85
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 17.8,
          "priceAvg30d": 17.64
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 21.82,
          "priceAvg30d": 19.55
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.71,
          "priceAvg30d": 20.89
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.71,
          "priceAvg30d": 21.37
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.8,
          "priceAvg30d": 22.12
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.95,
          "priceAvg30d": 21.33
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.08,
          "priceAvg30d": 22.34
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 18.64,
          "priceAvg30d": 22.62
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.12,
          "priceAvg30d": 24.94
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 17.01,
          "priceAvg30d": 24.71
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.3,
          "priceAvg30d": 25.97
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.04,
          "priceAvg30d": 25.76
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.04,
          "priceAvg30d": 24.93
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.0,
          "priceAvg30d": 23.38
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.92,
          "priceAvg30d": 21.53
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.0,
          "priceAvg30d": 20.67
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 14.63,
          "priceAvg30d": 19.86
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 13.41,
          "priceAvg30d": 19.29
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 12.2,
          "priceAvg30d": 18.15
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.41,
          "priceAvg30d": 17.66
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.2,
          "priceAvg30d": 16.32
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.04,
          "priceAvg30d": 15.91
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.12,
          "priceAvg30d": 13.29
        }
      ],
      "avg": 15.53,
      "max": 24.08,
      "maxBlock": 32,
      "min": 8.12,
      "minBlock": 48,
      "spread3h": 8.82,
      "spreadLowAvg": 11.88,
      "spreadHighAvg": 20.71,
      "avg30d": 18.04,
      "spread30dAvg": 12.3,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.74,
          "priceAvg30d": 13.04
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.95,
          "priceAvg30d": 13.31
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.2,
          "priceAvg30d": 13.25
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.2,
          "priceAvg30d": 13.13
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.2,
          "priceAvg30d": 13.01
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.53,
          "priceAvg30d": 13.25
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.2,
          "priceAvg30d": 13.46
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.95,
          "priceAvg30d": 13.65
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.34,
          "priceAvg30d": 13.42
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.8,
          "priceAvg30d": 14.3
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.52,
          "priceAvg30d": 14.97
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.63,
          "priceAvg30d": 14.91
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.2,
          "priceAvg30d": 15.83
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.1,
          "priceAvg30d": 13.94
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.2,
          "priceAvg30d": 13.82
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.95,
          "priceAvg30d": 13.17
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.95,
          "priceAvg30d": 13.86
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.21,
          "priceAvg30d": 16.24
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 17.29,
          "priceAvg30d": 18.07
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 17.8,
          "priceAvg30d": 18.67
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.86,
          "priceAvg30d": 18.15
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 18.0,
          "priceAvg30d": 18.27
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 18.63,
          "priceAvg30d": 18.45
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 18.63,
          "priceAvg30d": 17.87
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 17.5,
          "priceAvg30d": 16.24
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 17.8,
          "priceAvg30d": 16.79
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 21.82,
          "priceAvg30d": 18.75
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.71,
          "priceAvg30d": 20.25
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.71,
          "priceAvg30d": 20.5
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.8,
          "priceAvg30d": 21.13
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.95,
          "priceAvg30d": 20.18
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.08,
          "priceAvg30d": 21.16
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 18.64,
          "priceAvg30d": 22.1
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.12,
          "priceAvg30d": 24.58
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 17.01,
          "priceAvg30d": 24.56
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.3,
          "priceAvg30d": 25.84
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.04,
          "priceAvg30d": 25.64
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.04,
          "priceAvg30d": 24.8
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.0,
          "priceAvg30d": 23.25
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.92,
          "priceAvg30d": 21.4
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.0,
          "priceAvg30d": 20.67
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 14.63,
          "priceAvg30d": 19.86
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 13.41,
          "priceAvg30d": 19.29
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 12.2,
          "priceAvg30d": 18.15
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.41,
          "priceAvg30d": 17.66
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.2,
          "priceAvg30d": 16.32
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.04,
          "priceAvg30d": 15.91
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.12,
          "priceAvg30d": 13.29
        }
      ],
      "avg": 15.53,
      "max": 24.08,
      "maxBlock": 32,
      "min": 8.12,
      "minBlock": 48,
      "spread3h": 8.82,
      "spreadLowAvg": 11.88,
      "spreadHighAvg": 20.71,
      "avg30d": 17.67,
      "spread30dAvg": 11.93,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.74,
          "priceAvg30d": 13.04
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.95,
          "priceAvg30d": 13.31
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.2,
          "priceAvg30d": 13.25
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.2,
          "priceAvg30d": 13.13
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.2,
          "priceAvg30d": 13.01
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.53,
          "priceAvg30d": 13.25
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.2,
          "priceAvg30d": 13.36
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.95,
          "priceAvg30d": 13.65
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.34,
          "priceAvg30d": 13.38
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.8,
          "priceAvg30d": 14.23
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.52,
          "priceAvg30d": 14.95
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.63,
          "priceAvg30d": 14.91
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.2,
          "priceAvg30d": 15.76
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.1,
          "priceAvg30d": 13.79
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.2,
          "priceAvg30d": 13.41
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.95,
          "priceAvg30d": 12.4
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.95,
          "priceAvg30d": 12.66
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.21,
          "priceAvg30d": 13.67
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 17.29,
          "priceAvg30d": 14.28
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 17.8,
          "priceAvg30d": 13.24
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.86,
          "priceAvg30d": 13.23
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 18.0,
          "priceAvg30d": 13.11
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 18.63,
          "priceAvg30d": 12.56
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 18.63,
          "priceAvg30d": 12.22
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 17.5,
          "priceAvg30d": 11.12
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 17.8,
          "priceAvg30d": 11.23
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 21.82,
          "priceAvg30d": 13.24
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.71,
          "priceAvg30d": 14.69
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.71,
          "priceAvg30d": 14.27
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.8,
          "priceAvg30d": 15.0
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.95,
          "priceAvg30d": 17.41
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.08,
          "priceAvg30d": 19.42
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 18.64,
          "priceAvg30d": 20.98
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.12,
          "priceAvg30d": 24.03
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 17.01,
          "priceAvg30d": 24.56
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.3,
          "priceAvg30d": 25.84
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.04,
          "priceAvg30d": 25.64
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.04,
          "priceAvg30d": 24.8
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.0,
          "priceAvg30d": 23.25
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.92,
          "priceAvg30d": 21.4
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.0,
          "priceAvg30d": 20.67
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 14.63,
          "priceAvg30d": 19.86
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 13.41,
          "priceAvg30d": 19.29
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 12.2,
          "priceAvg30d": 18.15
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.41,
          "priceAvg30d": 17.63
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.2,
          "priceAvg30d": 16.32
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.04,
          "priceAvg30d": 15.91
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.12,
          "priceAvg30d": 13.29
        }
      ],
      "avg": 15.53,
      "max": 24.08,
      "maxBlock": 32,
      "min": 8.12,
      "minBlock": 48,
      "spread3h": 8.82,
      "spreadLowAvg": 11.88,
      "spreadHighAvg": 20.71,
      "avg30d": 16.08,
      "spread30dAvg": 12.8,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.74,
          "priceAvg30d": 12.59
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.95,
          "priceAvg30d": 12.5
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.2,
          "priceAvg30d": 12.36
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.2,
          "priceAvg30d": 12.31
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.2,
          "priceAvg30d": 12.09
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.53,
          "priceAvg30d": 12.37
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.2,
          "priceAvg30d": 12.3
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.95,
          "priceAvg30d": 12.75
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 8.74,
          "priceAvg30d": 12.31
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 12.68,
          "priceAvg30d": 13.22
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.52,
          "priceAvg30d": 14.14
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.16,
          "priceAvg30d": 14.2
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.2,
          "priceAvg30d": 14.87
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.1,
          "priceAvg30d": 12.56
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.2,
          "priceAvg30d": 12.02
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.95,
          "priceAvg30d": 11.28
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.95,
          "priceAvg30d": 11.77
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.21,
          "priceAvg30d": 12.71
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 17.29,
          "priceAvg30d": 12.52
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 17.8,
          "priceAvg30d": 11.04
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.86,
          "priceAvg30d": 10.52
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 18.0,
          "priceAvg30d": 10.26
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 18.63,
          "priceAvg30d": 9.89
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 18.63,
          "priceAvg30d": 9.83
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 17.5,
          "priceAvg30d": 9.1
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 17.8,
          "priceAvg30d": 9.31
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 21.82,
          "priceAvg30d": 11.01
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.71,
          "priceAvg30d": 12.96
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.71,
          "priceAvg30d": 12.74
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.8,
          "priceAvg30d": 13.13
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.95,
          "priceAvg30d": 15.21
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.08,
          "priceAvg30d": 17.13
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 18.64,
          "priceAvg30d": 18.63
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.12,
          "priceAvg30d": 21.65
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 12.29,
          "priceAvg30d": 22.22
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 14.0,
          "priceAvg30d": 24.27
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 12.29,
          "priceAvg30d": 24.67
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 12.68,
          "priceAvg30d": 23.69
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.29,
          "priceAvg30d": 21.56
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 9.03,
          "priceAvg30d": 18.83
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 10.0,
          "priceAvg30d": 18.47
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 12.29,
          "priceAvg30d": 17.44
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 12.29,
          "priceAvg30d": 16.63
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 9.0,
          "priceAvg30d": 15.66
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.41,
          "priceAvg30d": 15.2
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.2,
          "priceAvg30d": 14.27
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.04,
          "priceAvg30d": 14.26
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.12,
          "priceAvg30d": 12.3
        }
      ],
      "avg": 14.48,
      "max": 24.08,
      "maxBlock": 32,
      "min": 8.12,
      "minBlock": 48,
      "spread3h": 8.04,
      "spreadLowAvg": 11.88,
      "spreadHighAvg": 19.92,
      "avg30d": 14.43,
      "spread30dAvg": 13.31,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 8.74,
          "priceAvg30d": 12.1
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.95,
          "priceAvg30d": 12.34
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.2,
          "priceAvg30d": 11.45
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.2,
          "priceAvg30d": 11.09
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 12.2,
          "priceAvg30d": 10.64
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.53,
          "priceAvg30d": 10.83
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 12.2,
          "priceAvg30d": 10.92
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.95,
          "priceAvg30d": 11.34
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.34,
          "priceAvg30d": 11.24
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 16.8,
          "priceAvg30d": 12.46
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.52,
          "priceAvg30d": 13.49
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 14.63,
          "priceAvg30d": 13.91
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.2,
          "priceAvg30d": 14.89
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.1,
          "priceAvg30d": 12.03
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.2,
          "priceAvg30d": 11.3
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.95,
          "priceAvg30d": 10.19
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.95,
          "priceAvg30d": 11.23
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 13.21,
          "priceAvg30d": 11.55
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 15.0,
          "priceAvg30d": 11.97
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 17.8,
          "priceAvg30d": 11.28
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 17.86,
          "priceAvg30d": 10.6
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 17.86,
          "priceAvg30d": 10.31
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 17.86,
          "priceAvg30d": 10.14
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 17.86,
          "priceAvg30d": 10.02
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 17.5,
          "priceAvg30d": 9.44
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 17.8,
          "priceAvg30d": 9.62
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 17.86,
          "priceAvg30d": 10.68
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 17.86,
          "priceAvg30d": 11.96
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 17.86,
          "priceAvg30d": 12.81
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 20.46,
          "priceAvg30d": 14.0
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.95,
          "priceAvg30d": 16.92
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 24.08,
          "priceAvg30d": 18.93
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 18.64,
          "priceAvg30d": 20.78
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 17.12,
          "priceAvg30d": 24.03
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 17.01,
          "priceAvg30d": 24.56
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 16.3,
          "priceAvg30d": 25.84
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 17.04,
          "priceAvg30d": 25.64
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 17.04,
          "priceAvg30d": 24.8
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 17.0,
          "priceAvg30d": 23.25
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 15.92,
          "priceAvg30d": 21.4
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.0,
          "priceAvg30d": 20.67
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 14.63,
          "priceAvg30d": 19.86
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 13.41,
          "priceAvg30d": 19.28
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 12.2,
          "priceAvg30d": 18.15
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 13.41,
          "priceAvg30d": 17.48
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 12.2,
          "priceAvg30d": 15.97
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 10.04,
          "priceAvg30d": 15.22
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 8.12,
          "priceAvg30d": 11.89
        }
      ],
      "avg": 15.05,
      "max": 24.08,
      "maxBlock": 32,
      "min": 8.12,
      "minBlock": 48,
      "spread3h": 7.29,
      "spreadLowAvg": 11.88,
      "spreadHighAvg": 19.17,
      "avg30d": 14.8,
      "spread30dAvg": 14.5,
      "historyDays": 30
    }
  }
};
