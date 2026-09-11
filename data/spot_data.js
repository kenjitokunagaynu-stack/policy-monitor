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
  "targetDate": "2026-09-11",
  "fetchedAt": "2026-09-11T09:05:20+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 13.27,
        "priceAvg30d": 17.53
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 13.24,
        "priceAvg30d": 16.57
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 12.2,
        "priceAvg30d": 15.92
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 11.19,
        "priceAvg30d": 16.29
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 11.13,
        "priceAvg30d": 16.14
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 11.32,
        "priceAvg30d": 16.13
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 12.2,
        "priceAvg30d": 16.26
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 12.06,
        "priceAvg30d": 16.44
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 14.61,
        "priceAvg30d": 16.52
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 12.66,
        "priceAvg30d": 17.11
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 12.99,
        "priceAvg30d": 17.79
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 11.87,
        "priceAvg30d": 17.29
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 11.8,
        "priceAvg30d": 16.32
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 11.91,
        "priceAvg30d": 15.77
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 11.99,
        "priceAvg30d": 15.29
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 14.61,
        "priceAvg30d": 15.73
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 17.4,
        "priceAvg30d": 16.49
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 21.43,
        "priceAvg30d": 17.92
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 22.27,
        "priceAvg30d": 18.2
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 22.39,
        "priceAvg30d": 18.14
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 21.97,
        "priceAvg30d": 17.36
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 21.97,
        "priceAvg30d": 17.37
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 21.41,
        "priceAvg30d": 17.52
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 20.87,
        "priceAvg30d": 17.47
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 15.0,
        "priceAvg30d": 16.36
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 14.63,
        "priceAvg30d": 16.74
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 20.0,
        "priceAvg30d": 17.77
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 21.34,
        "priceAvg30d": 19.29
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 21.57,
        "priceAvg30d": 20.77
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 21.98,
        "priceAvg30d": 22.67
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 20.84,
        "priceAvg30d": 21.68
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 21.98,
        "priceAvg30d": 24.61
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 21.66,
        "priceAvg30d": 26.22
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 22.66,
        "priceAvg30d": 28.52
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 22.51,
        "priceAvg30d": 28.75
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 22.78,
        "priceAvg30d": 29.5
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 22.67,
        "priceAvg30d": 29.49
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 22.26,
        "priceAvg30d": 29.05
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 20.89,
        "priceAvg30d": 27.47
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 20.01,
        "priceAvg30d": 25.64
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 19.1,
        "priceAvg30d": 23.83
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 19.31,
        "priceAvg30d": 21.77
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 18.64,
        "priceAvg30d": 20.53
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 18.5,
        "priceAvg30d": 22.43
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 18.35,
        "priceAvg30d": 21.39
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 16.72,
        "priceAvg30d": 19.58
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 16.8,
        "priceAvg30d": 19.37
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 15.69,
        "priceAvg30d": 17.58
      }
    ],
    "avg": 17.6,
    "max": 22.78,
    "maxBlock": 36,
    "min": 11.13,
    "minBlock": 5,
    "spread3h": 10.07,
    "spreadLowAvg": 12.03,
    "spreadHighAvg": 22.11,
    "avg30d": 19.89,
    "spread30dAvg": 13.37,
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
          "price": 9.6,
          "priceAvg30d": 14.72
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.4,
          "priceAvg30d": 13.87
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.5,
          "priceAvg30d": 13.1
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.59,
          "priceAvg30d": 13.41
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.6,
          "priceAvg30d": 13.78
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.5,
          "priceAvg30d": 14.05
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 14.61,
          "priceAvg30d": 15.19
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.99,
          "priceAvg30d": 15.48
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 15.0,
          "priceAvg30d": 15.62
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 15.66,
          "priceAvg30d": 15.95
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.0,
          "priceAvg30d": 15.7
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.0,
          "priceAvg30d": 14.78
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 12.5,
          "priceAvg30d": 13.23
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.35,
          "priceAvg30d": 11.79
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 9.55,
          "priceAvg30d": 10.83
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.18,
          "priceAvg30d": 10.27
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.18,
          "priceAvg30d": 10.55
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.18,
          "priceAvg30d": 10.38
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.18,
          "priceAvg30d": 10.05
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 7.0,
          "priceAvg30d": 9.26
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.18,
          "priceAvg30d": 8.48
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.18,
          "priceAvg30d": 8.51
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 7.0,
          "priceAvg30d": 8.9
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 7.0,
          "priceAvg30d": 8.42
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.18,
          "priceAvg30d": 8.02
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.18,
          "priceAvg30d": 7.96
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 9.18,
          "priceAvg30d": 9.19
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.18,
          "priceAvg30d": 10.48
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.18,
          "priceAvg30d": 10.74
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.18,
          "priceAvg30d": 12.39
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.6,
          "priceAvg30d": 13.72
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.5,
          "priceAvg30d": 15.85
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.33,
          "priceAvg30d": 19.3
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 9.6,
          "priceAvg30d": 22.05
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 12.5,
          "priceAvg30d": 22.37
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 18.75,
          "priceAvg30d": 22.88
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 13.72,
          "priceAvg30d": 22.94
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 15.0,
          "priceAvg30d": 23.74
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 12.5,
          "priceAvg30d": 22.4
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 12.5,
          "priceAvg30d": 21.38
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 12.5,
          "priceAvg30d": 20.13
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.4,
          "priceAvg30d": 19.17
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.57,
          "priceAvg30d": 18.14
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 12.5,
          "priceAvg30d": 18.85
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 12.5,
          "priceAvg30d": 19.27
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 9.6,
          "priceAvg30d": 17.39
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 9.18,
          "priceAvg30d": 16.9
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.18,
          "priceAvg30d": 14.93
        }
      ],
      "avg": 11.38,
      "max": 19.57,
      "maxBlock": 43,
      "min": 7.0,
      "minBlock": 20,
      "spread3h": 4.35,
      "spreadLowAvg": 8.82,
      "spreadHighAvg": 13.17,
      "avg30d": 14.72,
      "spread30dAvg": 12.96,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.8,
          "priceAvg30d": 18.66
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 14.69,
          "priceAvg30d": 17.42
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.99,
          "priceAvg30d": 16.14
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.59,
          "priceAvg30d": 16.54
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.6,
          "priceAvg30d": 16.48
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.5,
          "priceAvg30d": 16.58
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 14.61,
          "priceAvg30d": 17.4
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.99,
          "priceAvg30d": 17.81
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 15.0,
          "priceAvg30d": 17.95
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 15.66,
          "priceAvg30d": 18.6
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.0,
          "priceAvg30d": 19.17
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.0,
          "priceAvg30d": 18.08
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.61,
          "priceAvg30d": 16.07
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.27,
          "priceAvg30d": 14.03
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 16.32,
          "priceAvg30d": 13.47
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 15.91,
          "priceAvg30d": 12.74
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 13.42,
          "priceAvg30d": 11.3
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 22.14,
          "priceAvg30d": 11.57
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.35,
          "priceAvg30d": 11.83
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 24.55,
          "priceAvg30d": 11.35
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.2,
          "priceAvg30d": 10.58
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.32,
          "priceAvg30d": 10.88
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 20.33,
          "priceAvg30d": 10.66
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 19.0,
          "priceAvg30d": 9.89
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 10.17,
          "priceAvg30d": 9.38
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 10.16,
          "priceAvg30d": 9.76
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 13.9,
          "priceAvg30d": 11.08
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 16.99,
          "priceAvg30d": 12.24
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 15.0,
          "priceAvg30d": 12.48
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 18.17,
          "priceAvg30d": 14.38
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 19.81,
          "priceAvg30d": 15.67
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 23.55,
          "priceAvg30d": 18.16
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.32,
          "priceAvg30d": 21.72
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 23.85,
          "priceAvg30d": 24.64
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.85,
          "priceAvg30d": 24.97
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.85,
          "priceAvg30d": 25.6
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.85,
          "priceAvg30d": 25.37
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.32,
          "priceAvg30d": 25.41
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.66,
          "priceAvg30d": 23.8
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.36,
          "priceAvg30d": 22.55
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.97,
          "priceAvg30d": 20.67
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.42,
          "priceAvg30d": 19.72
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.87,
          "priceAvg30d": 18.82
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 15.0,
          "priceAvg30d": 19.98
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.33,
          "priceAvg30d": 20.81
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.0,
          "priceAvg30d": 19.11
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.79,
          "priceAvg30d": 19.57
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.51,
          "priceAvg30d": 18.17
        }
      ],
      "avg": 17.99,
      "max": 24.55,
      "maxBlock": 20,
      "min": 9.59,
      "minBlock": 4,
      "spread3h": 8.59,
      "spreadLowAvg": 12.87,
      "spreadHighAvg": 21.46,
      "avg30d": 16.86,
      "spread30dAvg": 13.81,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.8,
          "priceAvg30d": 18.66
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 14.69,
          "priceAvg30d": 17.76
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.99,
          "priceAvg30d": 17.0
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.59,
          "priceAvg30d": 17.9
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.6,
          "priceAvg30d": 17.69
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 11.5,
          "priceAvg30d": 17.64
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 14.61,
          "priceAvg30d": 17.73
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.99,
          "priceAvg30d": 17.98
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 15.0,
          "priceAvg30d": 18.18
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 15.66,
          "priceAvg30d": 18.74
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.0,
          "priceAvg30d": 19.34
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.0,
          "priceAvg30d": 18.6
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 14.61,
          "priceAvg30d": 17.3
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 14.27,
          "priceAvg30d": 17.43
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 20.09,
          "priceAvg30d": 17.99
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 21.16,
          "priceAvg30d": 18.53
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 21.98,
          "priceAvg30d": 19.26
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.79,
          "priceAvg30d": 21.52
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 24.35,
          "priceAvg30d": 20.82
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 24.55,
          "priceAvg30d": 21.29
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 24.35,
          "priceAvg30d": 20.67
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 24.32,
          "priceAvg30d": 21.02
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 23.85,
          "priceAvg30d": 21.43
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 24.02,
          "priceAvg30d": 21.81
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 23.85,
          "priceAvg30d": 20.5
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 23.85,
          "priceAvg30d": 21.2
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 23.85,
          "priceAvg30d": 22.21
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.85,
          "priceAvg30d": 23.77
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.85,
          "priceAvg30d": 24.67
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 23.85,
          "priceAvg30d": 26.23
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 23.13,
          "priceAvg30d": 22.93
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 23.55,
          "priceAvg30d": 25.68
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.32,
          "priceAvg30d": 26.95
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 23.85,
          "priceAvg30d": 28.1
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 23.85,
          "priceAvg30d": 27.96
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.85,
          "priceAvg30d": 27.96
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.85,
          "priceAvg30d": 27.26
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.32,
          "priceAvg30d": 27.22
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 22.66,
          "priceAvg30d": 25.41
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.36,
          "priceAvg30d": 24.22
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.97,
          "priceAvg30d": 21.86
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 21.42,
          "priceAvg30d": 21.19
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.87,
          "priceAvg30d": 20.4
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.84,
          "priceAvg30d": 23.51
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.84,
          "priceAvg30d": 22.09
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.7,
          "priceAvg30d": 20.65
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.79,
          "priceAvg30d": 21.01
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 16.51,
          "priceAvg30d": 18.86
        }
      ],
      "avg": 20.01,
      "max": 24.55,
      "maxBlock": 20,
      "min": 9.59,
      "minBlock": 4,
      "spread3h": 10.91,
      "spreadLowAvg": 12.87,
      "spreadHighAvg": 23.77,
      "avg30d": 21.42,
      "spread30dAvg": 10.51,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.69,
          "priceAvg30d": 18.58
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.69,
          "priceAvg30d": 17.7
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.69,
          "priceAvg30d": 16.99
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.0,
          "priceAvg30d": 17.93
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.0,
          "priceAvg30d": 17.73
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 14.0,
          "priceAvg30d": 17.7
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.64,
          "priceAvg30d": 17.6
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 15.69,
          "priceAvg30d": 17.95
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 15.69,
          "priceAvg30d": 18.22
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 15.66,
          "priceAvg30d": 18.84
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.65,
          "priceAvg30d": 19.33
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.73,
          "priceAvg30d": 18.93
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.7,
          "priceAvg30d": 17.69
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.72,
          "priceAvg30d": 17.44
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 20.09,
          "priceAvg30d": 17.32
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 22.11,
          "priceAvg30d": 17.86
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 27.01,
          "priceAvg30d": 18.94
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 27.6,
          "priceAvg30d": 20.67
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 31.01,
          "priceAvg30d": 21.04
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 31.01,
          "priceAvg30d": 21.34
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 31.01,
          "priceAvg30d": 20.9
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 31.03,
          "priceAvg30d": 20.99
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 30.99,
          "priceAvg30d": 21.23
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 30.71,
          "priceAvg30d": 21.47
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 26.99,
          "priceAvg30d": 20.02
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 25.84,
          "priceAvg30d": 20.49
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 27.58,
          "priceAvg30d": 22.5
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 30.68,
          "priceAvg30d": 24.19
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 31.01,
          "priceAvg30d": 25.1
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 30.99,
          "priceAvg30d": 26.28
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.0,
          "priceAvg30d": 25.41
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.18,
          "priceAvg30d": 28.08
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 25.29,
          "priceAvg30d": 29.57
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 24.32,
          "priceAvg30d": 31.31
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 25.02,
          "priceAvg30d": 31.71
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 24.82,
          "priceAvg30d": 32.3
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 24.03,
          "priceAvg30d": 32.69
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.99,
          "priceAvg30d": 31.55
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.1,
          "priceAvg30d": 29.91
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.09,
          "priceAvg30d": 28.25
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 22.61,
          "priceAvg30d": 26.6
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.6,
          "priceAvg30d": 25.14
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 22.61,
          "priceAvg30d": 23.82
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.58,
          "priceAvg30d": 24.07
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 23.0,
          "priceAvg30d": 23.64
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.8,
          "priceAvg30d": 22.09
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.76,
          "priceAvg30d": 21.36
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 20.31,
          "priceAvg30d": 19.02
        }
      ],
      "avg": 22.8,
      "max": 31.03,
      "maxBlock": 22,
      "min": 14.0,
      "minBlock": 5,
      "spread3h": 15.0,
      "spreadLowAvg": 15.28,
      "spreadHighAvg": 30.29,
      "avg30d": 22.49,
      "spread30dAvg": 14.84,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.69,
          "priceAvg30d": 16.43
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.69,
          "priceAvg30d": 16.19
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.69,
          "priceAvg30d": 15.55
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.0,
          "priceAvg30d": 15.29
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.0,
          "priceAvg30d": 15.35
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 14.0,
          "priceAvg30d": 15.86
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.64,
          "priceAvg30d": 15.71
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 15.69,
          "priceAvg30d": 15.8
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 15.69,
          "priceAvg30d": 15.74
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 15.66,
          "priceAvg30d": 16.24
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.65,
          "priceAvg30d": 16.79
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.73,
          "priceAvg30d": 16.62
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.7,
          "priceAvg30d": 16.07
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.72,
          "priceAvg30d": 15.15
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 17.0,
          "priceAvg30d": 15.01
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 17.0,
          "priceAvg30d": 15.65
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.01,
          "priceAvg30d": 16.79
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 17.24,
          "priceAvg30d": 19.24
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 18.61,
          "priceAvg30d": 19.86
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 19.01,
          "priceAvg30d": 20.56
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 19.01,
          "priceAvg30d": 20.22
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 19.01,
          "priceAvg30d": 20.3
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 19.0,
          "priceAvg30d": 20.09
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 18.68,
          "priceAvg30d": 20.78
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 16.72,
          "priceAvg30d": 18.71
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 14.9,
          "priceAvg30d": 19.26
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 17.24,
          "priceAvg30d": 21.2
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 18.61,
          "priceAvg30d": 22.81
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 18.32,
          "priceAvg30d": 23.5
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 18.32,
          "priceAvg30d": 24.63
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.24,
          "priceAvg30d": 23.96
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 17.11,
          "priceAvg30d": 26.56
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 18.5,
          "priceAvg30d": 27.89
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.8,
          "priceAvg30d": 29.84
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 18.64,
          "priceAvg30d": 29.72
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.0,
          "priceAvg30d": 30.69
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.12,
          "priceAvg30d": 31.01
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.0,
          "priceAvg30d": 30.02
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.61,
          "priceAvg30d": 28.4
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.11,
          "priceAvg30d": 26.74
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.0,
          "priceAvg30d": 25.11
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.5,
          "priceAvg30d": 23.32
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.32,
          "priceAvg30d": 21.68
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.11,
          "priceAvg30d": 21.44
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.76,
          "priceAvg30d": 21.18
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.72,
          "priceAvg30d": 19.75
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.0,
          "priceAvg30d": 19.33
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 17.24,
          "priceAvg30d": 16.58
        }
      ],
      "avg": 17.08,
      "max": 19.12,
      "maxBlock": 37,
      "min": 12.01,
      "minBlock": 17,
      "spread3h": 0.93,
      "spreadLowAvg": 17.6,
      "spreadHighAvg": 18.53,
      "avg30d": 20.72,
      "spread30dAvg": 14.81,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.69,
          "priceAvg30d": 15.37
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.69,
          "priceAvg30d": 15.55
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.69,
          "priceAvg30d": 14.99
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.0,
          "priceAvg30d": 14.74
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.0,
          "priceAvg30d": 14.77
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 14.0,
          "priceAvg30d": 15.1
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.64,
          "priceAvg30d": 14.93
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 15.69,
          "priceAvg30d": 15.01
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 15.69,
          "priceAvg30d": 14.97
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 15.66,
          "priceAvg30d": 15.51
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.65,
          "priceAvg30d": 16.05
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.73,
          "priceAvg30d": 16.01
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.7,
          "priceAvg30d": 15.68
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.72,
          "priceAvg30d": 14.7
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 17.0,
          "priceAvg30d": 14.34
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 17.0,
          "priceAvg30d": 14.68
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.01,
          "priceAvg30d": 15.72
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 17.24,
          "priceAvg30d": 17.83
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 18.61,
          "priceAvg30d": 18.54
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 19.01,
          "priceAvg30d": 18.9
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 19.01,
          "priceAvg30d": 18.84
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 19.01,
          "priceAvg30d": 18.98
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 19.0,
          "priceAvg30d": 19.38
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 18.68,
          "priceAvg30d": 19.49
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 16.72,
          "priceAvg30d": 17.6
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 14.9,
          "priceAvg30d": 17.91
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 17.24,
          "priceAvg30d": 20.16
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 18.61,
          "priceAvg30d": 22.12
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 18.32,
          "priceAvg30d": 22.72
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 18.32,
          "priceAvg30d": 23.43
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 17.24,
          "priceAvg30d": 23.13
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 17.11,
          "priceAvg30d": 24.91
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 18.5,
          "priceAvg30d": 26.05
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.8,
          "priceAvg30d": 29.14
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 18.64,
          "priceAvg30d": 29.38
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.0,
          "priceAvg30d": 30.17
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.12,
          "priceAvg30d": 30.53
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.0,
          "priceAvg30d": 29.67
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.61,
          "priceAvg30d": 28.16
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.11,
          "priceAvg30d": 26.44
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.0,
          "priceAvg30d": 24.98
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.5,
          "priceAvg30d": 23.17
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.32,
          "priceAvg30d": 21.56
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.11,
          "priceAvg30d": 20.41
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.76,
          "priceAvg30d": 18.91
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.72,
          "priceAvg30d": 17.11
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.0,
          "priceAvg30d": 17.04
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 17.24,
          "priceAvg30d": 15.17
        }
      ],
      "avg": 17.08,
      "max": 19.12,
      "maxBlock": 37,
      "min": 12.01,
      "minBlock": 17,
      "spread3h": 0.93,
      "spreadLowAvg": 17.6,
      "spreadHighAvg": 18.53,
      "avg30d": 19.79,
      "spread30dAvg": 14.92,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.69,
          "priceAvg30d": 15.37
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 15.69,
          "priceAvg30d": 15.55
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 15.69,
          "priceAvg30d": 14.99
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 15.0,
          "priceAvg30d": 14.74
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 14.0,
          "priceAvg30d": 14.77
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 14.0,
          "priceAvg30d": 15.1
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 15.64,
          "priceAvg30d": 14.93
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 15.69,
          "priceAvg30d": 15.01
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 15.69,
          "priceAvg30d": 14.97
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 15.66,
          "priceAvg30d": 15.51
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.65,
          "priceAvg30d": 16.05
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.73,
          "priceAvg30d": 16.01
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.7,
          "priceAvg30d": 15.68
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 16.72,
          "priceAvg30d": 14.7
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 17.0,
          "priceAvg30d": 14.26
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 17.0,
          "priceAvg30d": 14.1
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.01,
          "priceAvg30d": 14.75
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
          "price": 10.6,
          "priceAvg30d": 15.72
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.03,
          "priceAvg30d": 14.82
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.03,
          "priceAvg30d": 14.9
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.03,
          "priceAvg30d": 14.81
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.03,
          "priceAvg30d": 14.65
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.03,
          "priceAvg30d": 14.49
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.86,
          "priceAvg30d": 12.77
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.86,
          "priceAvg30d": 12.96
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.21,
          "priceAvg30d": 14.65
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.6,
          "priceAvg30d": 16.18
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.6,
          "priceAvg30d": 16.52
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.6,
          "priceAvg30d": 17.65
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.95,
          "priceAvg30d": 19.77
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 17.11,
          "priceAvg30d": 23.41
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 18.5,
          "priceAvg30d": 25.94
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.8,
          "priceAvg30d": 29.11
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 18.64,
          "priceAvg30d": 29.38
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.0,
          "priceAvg30d": 30.17
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.12,
          "priceAvg30d": 30.53
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.0,
          "priceAvg30d": 29.67
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.61,
          "priceAvg30d": 28.16
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.11,
          "priceAvg30d": 26.44
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.0,
          "priceAvg30d": 24.98
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.5,
          "priceAvg30d": 23.17
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.32,
          "priceAvg30d": 21.56
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.11,
          "priceAvg30d": 20.41
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.76,
          "priceAvg30d": 18.91
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.72,
          "priceAvg30d": 17.11
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.0,
          "priceAvg30d": 17.04
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 17.24,
          "priceAvg30d": 15.17
        }
      ],
      "avg": 14.84,
      "max": 19.12,
      "maxBlock": 37,
      "min": 9.86,
      "minBlock": 25,
      "spread3h": 8.4,
      "spreadLowAvg": 10.13,
      "spreadHighAvg": 18.53,
      "avg30d": 18.41,
      "spread30dAvg": 15.95,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 7.95,
          "priceAvg30d": 15.37
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 7.88,
          "priceAvg30d": 15.55
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 7.01,
          "priceAvg30d": 14.99
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 7.0,
          "priceAvg30d": 14.74
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 7.0,
          "priceAvg30d": 14.77
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 7.01,
          "priceAvg30d": 15.1
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 7.0,
          "priceAvg30d": 14.93
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 7.86,
          "priceAvg30d": 15.01
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 7.89,
          "priceAvg30d": 14.97
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 7.97,
          "priceAvg30d": 15.51
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 7.97,
          "priceAvg30d": 16.05
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 7.96,
          "priceAvg30d": 16.01
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 7.97,
          "priceAvg30d": 15.68
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 7.91,
          "priceAvg30d": 14.7
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 7.85,
          "priceAvg30d": 14.14
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 4.0,
          "priceAvg30d": 13.75
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 3.5,
          "priceAvg30d": 14.26
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 7.85,
          "priceAvg30d": 15.28
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 7.85,
          "priceAvg30d": 14.94
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 7.85,
          "priceAvg30d": 13.43
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 4.0,
          "priceAvg30d": 13.06
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.9,
          "priceAvg30d": 12.47
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 2.5,
          "priceAvg30d": 12.1
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 4.5,
          "priceAvg30d": 12.25
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 7.86,
          "priceAvg30d": 10.58
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 7.85,
          "priceAvg30d": 11.06
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 5.0,
          "priceAvg30d": 12.82
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 6.8,
          "priceAvg30d": 14.9
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.5,
          "priceAvg30d": 15.26
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 2.9,
          "priceAvg30d": 16.8
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 2.9,
          "priceAvg30d": 18.9
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 7.87,
          "priceAvg30d": 22.59
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 7.96,
          "priceAvg30d": 25.32
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 8.05,
          "priceAvg30d": 28.84
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 8.07,
          "priceAvg30d": 29.12
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 9.03,
          "priceAvg30d": 30.0
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 13.07,
          "priceAvg30d": 30.41
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 12.28,
          "priceAvg30d": 29.54
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 8.74,
          "priceAvg30d": 27.89
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 8.07,
          "priceAvg30d": 25.97
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 7.99,
          "priceAvg30d": 24.4
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 8.04,
          "priceAvg30d": 22.51
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 7.97,
          "priceAvg30d": 20.85
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 7.99,
          "priceAvg30d": 19.79
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 9.18,
          "priceAvg30d": 18.29
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 9.18,
          "priceAvg30d": 16.57
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 7.99,
          "priceAvg30d": 16.49
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 7.92,
          "priceAvg30d": 15.1
        }
      ],
      "avg": 7.17,
      "max": 13.07,
      "maxBlock": 37,
      "min": 2.5,
      "minBlock": 23,
      "spread3h": 3.21,
      "spreadLowAvg": 5.83,
      "spreadHighAvg": 9.04,
      "avg30d": 17.77,
      "spread30dAvg": 17.73,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 15.69,
          "priceAvg30d": 14.33
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.24,
          "priceAvg30d": 14.6
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.95,
          "priceAvg30d": 12.98
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.95,
          "priceAvg30d": 12.37
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.95,
          "priceAvg30d": 11.97
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.95,
          "priceAvg30d": 12.17
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.95,
          "priceAvg30d": 12.08
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 14.63,
          "priceAvg30d": 12.22
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 14.63,
          "priceAvg30d": 12.23
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 15.66,
          "priceAvg30d": 13.4
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 15.65,
          "priceAvg30d": 14.39
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 15.73,
          "priceAvg30d": 14.8
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 16.7,
          "priceAvg30d": 14.71
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 15.0,
          "priceAvg30d": 12.32
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.51,
          "priceAvg30d": 11.46
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 10.95,
          "priceAvg30d": 11.64
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 12.01,
          "priceAvg30d": 12.97
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 10.95,
          "priceAvg30d": 13.77
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.6,
          "priceAvg30d": 13.64
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 10.03,
          "priceAvg30d": 13.14
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 10.03,
          "priceAvg30d": 12.56
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 10.03,
          "priceAvg30d": 12.41
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.03,
          "priceAvg30d": 12.36
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 10.03,
          "priceAvg30d": 12.2
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.86,
          "priceAvg30d": 11.46
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 9.86,
          "priceAvg30d": 11.63
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 10.21,
          "priceAvg30d": 12.86
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.6,
          "priceAvg30d": 14.45
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.6,
          "priceAvg30d": 15.19
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.6,
          "priceAvg30d": 16.6
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.95,
          "priceAvg30d": 19.26
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 17.11,
          "priceAvg30d": 22.89
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 18.5,
          "priceAvg30d": 25.74
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.8,
          "priceAvg30d": 29.11
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 18.64,
          "priceAvg30d": 29.38
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.0,
          "priceAvg30d": 30.17
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 19.12,
          "priceAvg30d": 30.53
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.0,
          "priceAvg30d": 29.67
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 18.61,
          "priceAvg30d": 28.16
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 17.11,
          "priceAvg30d": 26.44
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 17.0,
          "priceAvg30d": 24.98
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 18.5,
          "priceAvg30d": 23.17
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 18.32,
          "priceAvg30d": 21.55
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 17.11,
          "priceAvg30d": 20.41
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 16.76,
          "priceAvg30d": 18.76
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 16.72,
          "priceAvg30d": 16.77
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 17.0,
          "priceAvg30d": 16.36
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 17.24,
          "priceAvg30d": 13.39
        }
      ],
      "avg": 14.08,
      "max": 19.12,
      "maxBlock": 37,
      "min": 9.86,
      "minBlock": 25,
      "spread3h": 8.4,
      "spreadLowAvg": 10.13,
      "spreadHighAvg": 18.53,
      "avg30d": 17.08,
      "spread30dAvg": 17.79,
      "historyDays": 30
    }
  }
};
