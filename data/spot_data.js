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
  "targetDate": "2026-10-15",
  "fetchedAt": "2026-10-15T11:22:10+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 23.12,
        "priceAvg30d": 20.05
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 22.2,
        "priceAvg30d": 18.38
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 22.6,
        "priceAvg30d": 17.38
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 22.77,
        "priceAvg30d": 16.73
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 23.0,
        "priceAvg30d": 16.48
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 23.7,
        "priceAvg30d": 17.24
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 24.41,
        "priceAvg30d": 17.96
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 24.65,
        "priceAvg30d": 18.87
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 24.96,
        "priceAvg30d": 19.58
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 25.06,
        "priceAvg30d": 20.67
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 25.06,
        "priceAvg30d": 21.46
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 25.28,
        "priceAvg30d": 21.25
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 25.14,
        "priceAvg30d": 20.33
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 25.0,
        "priceAvg30d": 17.59
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 22.4,
        "priceAvg30d": 14.87
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 19.69,
        "priceAvg30d": 13.45
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 12.3,
        "priceAvg30d": 13.56
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 12.08,
        "priceAvg30d": 13.65
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 10.66,
        "priceAvg30d": 13.56
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 9.9,
        "priceAvg30d": 12.91
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 10.09,
        "priceAvg30d": 11.93
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 9.98,
        "priceAvg30d": 11.33
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 8.5,
        "priceAvg30d": 11.16
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 8.51,
        "priceAvg30d": 10.79
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 3.0,
        "priceAvg30d": 8.69
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 4.85,
        "priceAvg30d": 9.41
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 10.48,
        "priceAvg30d": 11.63
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 13.0,
        "priceAvg30d": 13.95
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 11.78,
        "priceAvg30d": 14.88
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 19.97,
        "priceAvg30d": 17.96
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 22.53,
        "priceAvg30d": 19.02
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 24.77,
        "priceAvg30d": 22.93
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 33.25,
        "priceAvg30d": 25.57
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 37.89,
        "priceAvg30d": 28.23
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 35.72,
        "priceAvg30d": 27.98
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 35.06,
        "priceAvg30d": 28.65
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 33.25,
        "priceAvg30d": 28.11
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 29.0,
        "priceAvg30d": 27.5
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 27.01,
        "priceAvg30d": 26.33
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 25.0,
        "priceAvg30d": 24.85
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 24.82,
        "priceAvg30d": 24.06
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 24.5,
        "priceAvg30d": 23.34
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 25.0,
        "priceAvg30d": 22.68
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 24.8,
        "priceAvg30d": 22.84
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 25.16,
        "priceAvg30d": 22.83
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 24.82,
        "priceAvg30d": 21.65
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 25.0,
        "priceAvg30d": 21.48
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 24.6,
        "priceAvg30d": 19.55
      }
    ],
    "avg": 21.38,
    "max": 37.89,
    "maxBlock": 34,
    "min": 3.0,
    "minBlock": 25,
    "spread3h": 21.54,
    "spreadLowAvg": 9.22,
    "spreadHighAvg": 30.76,
    "avg30d": 18.86,
    "spread30dAvg": 17.47,
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
          "price": 10.57,
          "priceAvg30d": 17.09
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 10.26,
          "priceAvg30d": 15.13
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 10.23,
          "priceAvg30d": 15.5
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 10.22,
          "priceAvg30d": 15.47
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 10.25,
          "priceAvg30d": 16.18
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.26,
          "priceAvg30d": 17.9
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.26,
          "priceAvg30d": 18.69
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.26,
          "priceAvg30d": 18.92
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.26,
          "priceAvg30d": 18.4
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 10.26,
          "priceAvg30d": 18.81
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.26,
          "priceAvg30d": 19.83
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.34,
          "priceAvg30d": 19.17
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 10.0,
          "priceAvg30d": 16.72
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.26,
          "priceAvg30d": 14.96
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.0,
          "priceAvg30d": 12.56
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.19,
          "priceAvg30d": 10.59
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.19,
          "priceAvg30d": 9.25
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 7.27,
          "priceAvg30d": 8.87
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 4.78,
          "priceAvg30d": 7.3
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 6.6
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 1.0,
          "priceAvg30d": 6.15
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.1,
          "priceAvg30d": 5.92
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.04,
          "priceAvg30d": 6.26
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.15
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.97
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.7,
          "priceAvg30d": 5.84
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 6.78
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 7.48,
          "priceAvg30d": 8.47
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.32,
          "priceAvg30d": 9.75
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.26,
          "priceAvg30d": 11.86
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.9,
          "priceAvg30d": 14.89
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.47,
          "priceAvg30d": 19.17
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 10.23,
          "priceAvg30d": 25.08
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 13.0,
          "priceAvg30d": 29.1
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 16.0,
          "priceAvg30d": 27.8
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.66,
          "priceAvg30d": 28.32
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 15.5,
          "priceAvg30d": 26.96
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 15.29,
          "priceAvg30d": 27.59
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 10.38,
          "priceAvg30d": 26.93
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 10.53,
          "priceAvg30d": 25.71
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 13.24,
          "priceAvg30d": 24.36
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 13.0,
          "priceAvg30d": 23.49
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 12.34,
          "priceAvg30d": 22.5
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 10.48,
          "priceAvg30d": 23.09
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 10.29,
          "priceAvg30d": 22.06
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 10.51,
          "priceAvg30d": 20.77
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.0,
          "priceAvg30d": 20.35
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 10.54,
          "priceAvg30d": 18.64
        }
      ],
      "avg": 9.27,
      "max": 23.66,
      "maxBlock": 36,
      "min": 0.01,
      "minBlock": 24,
      "spread3h": 12.93,
      "spreadLowAvg": 0.48,
      "spreadHighAvg": 13.4,
      "avg30d": 16.62,
      "spread30dAvg": 19.7,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.04,
          "priceAvg30d": 22.03
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.39,
          "priceAvg30d": 20.84
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.68,
          "priceAvg30d": 20.56
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.68,
          "priceAvg30d": 20.27
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.06,
          "priceAvg30d": 20.04
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.06,
          "priceAvg30d": 20.02
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.5,
          "priceAvg30d": 20.82
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.5,
          "priceAvg30d": 21.09
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.25,
          "priceAvg30d": 21.06
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.5,
          "priceAvg30d": 21.23
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 26.31,
          "priceAvg30d": 21.37
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 26.71,
          "priceAvg30d": 21.4
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 26.59,
          "priceAvg30d": 20.37
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.34,
          "priceAvg30d": 18.85
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 18.78,
          "priceAvg30d": 15.76
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.19,
          "priceAvg30d": 13.38
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.19,
          "priceAvg30d": 11.32
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 7.27,
          "priceAvg30d": 9.8
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 4.78,
          "priceAvg30d": 9.32
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 8.13
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 1.0,
          "priceAvg30d": 7.34
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.1,
          "priceAvg30d": 6.87
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.04,
          "priceAvg30d": 6.68
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.65
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.33
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.7,
          "priceAvg30d": 6.65
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 8.23
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 7.48,
          "priceAvg30d": 9.96
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.32,
          "priceAvg30d": 11.85
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 21.04,
          "priceAvg30d": 14.47
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.26,
          "priceAvg30d": 17.9
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.01,
          "priceAvg30d": 23.36
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.72,
          "priceAvg30d": 27.61
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 39.42,
          "priceAvg30d": 31.39
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.58,
          "priceAvg30d": 30.88
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 39.01,
          "priceAvg30d": 31.56
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.06,
          "priceAvg30d": 30.27
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 33.39,
          "priceAvg30d": 29.97
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 32.01,
          "priceAvg30d": 28.81
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.59,
          "priceAvg30d": 26.89
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.3,
          "priceAvg30d": 25.52
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.47,
          "priceAvg30d": 24.66
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.5,
          "priceAvg30d": 24.16
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.96,
          "priceAvg30d": 25.39
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.63,
          "priceAvg30d": 24.14
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.29,
          "priceAvg30d": 23.23
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.02,
          "priceAvg30d": 22.79
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.19,
          "priceAvg30d": 21.59
        }
      ],
      "avg": 20.93,
      "max": 39.42,
      "maxBlock": 34,
      "min": 0.01,
      "minBlock": 24,
      "spread3h": 33.8,
      "spreadLowAvg": 0.48,
      "spreadHighAvg": 34.27,
      "avg30d": 19.02,
      "spread30dAvg": 20.64,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.04,
          "priceAvg30d": 24.03
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.39,
          "priceAvg30d": 23.09
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.68,
          "priceAvg30d": 22.84
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.68,
          "priceAvg30d": 22.61
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.06,
          "priceAvg30d": 22.37
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.06,
          "priceAvg30d": 22.52
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.5,
          "priceAvg30d": 23.0
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.5,
          "priceAvg30d": 23.41
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.25,
          "priceAvg30d": 23.58
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.5,
          "priceAvg30d": 23.81
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 26.31,
          "priceAvg30d": 23.88
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 26.71,
          "priceAvg30d": 23.9
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 26.59,
          "priceAvg30d": 23.48
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.34,
          "priceAvg30d": 22.47
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.78,
          "priceAvg30d": 21.56
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 24.33,
          "priceAvg30d": 21.45
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 23.4,
          "priceAvg30d": 20.67
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 23.48,
          "priceAvg30d": 21.53
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 23.4,
          "priceAvg30d": 21.62
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 23.4,
          "priceAvg30d": 21.38
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 23.2,
          "priceAvg30d": 19.94
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 22.64,
          "priceAvg30d": 19.68
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 21.69,
          "priceAvg30d": 19.82
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 22.09,
          "priceAvg30d": 19.73
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 20.49,
          "priceAvg30d": 18.21
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 20.73,
          "priceAvg30d": 19.31
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 22.32,
          "priceAvg30d": 20.21
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 23.1,
          "priceAvg30d": 22.58
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 23.0,
          "priceAvg30d": 24.15
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.4,
          "priceAvg30d": 25.95
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.26,
          "priceAvg30d": 25.12
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.01,
          "priceAvg30d": 28.43
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.72,
          "priceAvg30d": 31.59
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 39.42,
          "priceAvg30d": 33.92
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 38.58,
          "priceAvg30d": 32.97
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 39.01,
          "priceAvg30d": 33.71
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.06,
          "priceAvg30d": 32.65
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 33.39,
          "priceAvg30d": 32.36
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 32.01,
          "priceAvg30d": 30.87
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.59,
          "priceAvg30d": 28.88
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.3,
          "priceAvg30d": 27.26
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.47,
          "priceAvg30d": 26.43
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.5,
          "priceAvg30d": 25.71
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.96,
          "priceAvg30d": 26.64
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.63,
          "priceAvg30d": 26.95
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.29,
          "priceAvg30d": 26.12
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.02,
          "priceAvg30d": 25.94
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.19,
          "priceAvg30d": 24.45
        }
      ],
      "avg": 26.63,
      "max": 39.42,
      "maxBlock": 34,
      "min": 20.49,
      "minBlock": 25,
      "spread3h": 12.18,
      "spreadLowAvg": 22.09,
      "spreadHighAvg": 34.27,
      "avg30d": 24.64,
      "spread30dAvg": 13.46,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 25.04,
          "priceAvg30d": 23.87
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.39,
          "priceAvg30d": 22.97
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.68,
          "priceAvg30d": 22.62
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 24.68,
          "priceAvg30d": 22.3
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 25.06,
          "priceAvg30d": 22.13
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 25.06,
          "priceAvg30d": 22.28
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.5,
          "priceAvg30d": 22.78
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.65,
          "priceAvg30d": 23.14
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 26.04,
          "priceAvg30d": 23.33
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.87,
          "priceAvg30d": 23.64
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 26.31,
          "priceAvg30d": 23.83
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 26.71,
          "priceAvg30d": 23.88
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 26.59,
          "priceAvg30d": 23.52
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 25.34,
          "priceAvg30d": 22.24
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 24.78,
          "priceAvg30d": 20.95
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 24.06,
          "priceAvg30d": 19.96
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 18.29,
          "priceAvg30d": 19.36
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 18.58,
          "priceAvg30d": 20.18
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 18.28,
          "priceAvg30d": 20.2
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 15.0,
          "priceAvg30d": 19.8
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.61,
          "priceAvg30d": 18.4
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.48,
          "priceAvg30d": 17.98
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.98,
          "priceAvg30d": 17.89
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.0,
          "priceAvg30d": 17.66
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 3.69,
          "priceAvg30d": 15.46
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.26,
          "priceAvg30d": 16.08
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.58,
          "priceAvg30d": 18.64
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 20.02,
          "priceAvg30d": 21.57
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 21.99,
          "priceAvg30d": 22.76
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 24.4,
          "priceAvg30d": 24.12
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 25.26,
          "priceAvg30d": 25.07
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 32.01,
          "priceAvg30d": 27.8
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 35.72,
          "priceAvg30d": 30.58
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 39.42,
          "priceAvg30d": 32.59
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 39.0,
          "priceAvg30d": 32.17
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 39.01,
          "priceAvg30d": 32.47
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 35.06,
          "priceAvg30d": 31.54
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 33.39,
          "priceAvg30d": 30.74
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 32.01,
          "priceAvg30d": 29.86
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.59,
          "priceAvg30d": 28.6
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 27.3,
          "priceAvg30d": 27.33
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.47,
          "priceAvg30d": 26.49
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 27.5,
          "priceAvg30d": 25.92
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 28.96,
          "priceAvg30d": 26.3
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 28.63,
          "priceAvg30d": 26.74
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 27.29,
          "priceAvg30d": 26.06
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.02,
          "priceAvg30d": 26.17
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.19,
          "priceAvg30d": 24.65
        }
      ],
      "avg": 24.33,
      "max": 39.42,
      "maxBlock": 34,
      "min": 3.69,
      "minBlock": 25,
      "spread3h": 22.12,
      "spreadLowAvg": 12.22,
      "spreadHighAvg": 34.34,
      "avg30d": 23.85,
      "spread30dAvg": 14.9,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.0,
          "priceAvg30d": 11.08
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.42,
          "priceAvg30d": 11.24
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.42,
          "priceAvg30d": 11.5
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.42,
          "priceAvg30d": 11.24
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.42,
          "priceAvg30d": 11.38
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 17.0,
          "priceAvg30d": 11.92
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 18.0,
          "priceAvg30d": 12.69
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.62,
          "priceAvg30d": 13.47
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.76,
          "priceAvg30d": 13.32
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.9,
          "priceAvg30d": 14.57
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.82,
          "priceAvg30d": 14.77
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.84,
          "priceAvg30d": 14.84
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.68,
          "priceAvg30d": 15.8
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.0,
          "priceAvg30d": 12.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 19.69,
          "priceAvg30d": 11.52
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.0,
          "priceAvg30d": 9.86
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 18.29,
          "priceAvg30d": 11.85
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 18.58,
          "priceAvg30d": 13.56
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 18.28,
          "priceAvg30d": 15.56
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 15.0,
          "priceAvg30d": 15.34
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.61,
          "priceAvg30d": 14.27
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.48,
          "priceAvg30d": 13.84
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.98,
          "priceAvg30d": 14.06
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.0,
          "priceAvg30d": 13.57
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 3.69,
          "priceAvg30d": 10.28
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.26,
          "priceAvg30d": 10.65
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.58,
          "priceAvg30d": 13.42
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 19.82,
          "priceAvg30d": 16.34
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 19.69,
          "priceAvg30d": 16.32
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 19.76,
          "priceAvg30d": 17.57
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 19.82,
          "priceAvg30d": 17.78
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 23.19,
          "priceAvg30d": 19.77
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.19,
          "priceAvg30d": 19.68
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.89,
          "priceAvg30d": 20.44
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.0,
          "priceAvg30d": 19.71
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 35.0,
          "priceAvg30d": 20.92
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.19,
          "priceAvg30d": 20.19
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.63,
          "priceAvg30d": 20.24
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.01,
          "priceAvg30d": 19.2
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.54,
          "priceAvg30d": 18.1
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.0,
          "priceAvg30d": 18.5
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.83,
          "priceAvg30d": 17.77
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.84,
          "priceAvg30d": 17.82
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.64,
          "priceAvg30d": 16.7
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.54,
          "priceAvg30d": 16.62
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.0,
          "priceAvg30d": 14.73
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.63,
          "priceAvg30d": 14.38
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 21.63,
          "priceAvg30d": 10.82
        }
      ],
      "avg": 18.99,
      "max": 37.89,
      "maxBlock": 34,
      "min": 3.69,
      "minBlock": 25,
      "spread3h": 13.88,
      "spreadLowAvg": 12.19,
      "spreadHighAvg": 26.07,
      "avg30d": 15.04,
      "spread30dAvg": 9.82,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.0,
          "priceAvg30d": 10.99
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.42,
          "priceAvg30d": 11.13
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.42,
          "priceAvg30d": 11.41
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.42,
          "priceAvg30d": 11.15
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.42,
          "priceAvg30d": 11.24
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 17.0,
          "priceAvg30d": 11.82
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 18.0,
          "priceAvg30d": 12.6
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.62,
          "priceAvg30d": 13.4
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.76,
          "priceAvg30d": 13.25
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.9,
          "priceAvg30d": 14.57
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.82,
          "priceAvg30d": 14.75
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.84,
          "priceAvg30d": 14.76
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.68,
          "priceAvg30d": 15.73
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.0,
          "priceAvg30d": 12.52
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 19.69,
          "priceAvg30d": 11.08
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 16.0,
          "priceAvg30d": 9.16
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 18.29,
          "priceAvg30d": 11.19
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 18.58,
          "priceAvg30d": 12.84
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 18.28,
          "priceAvg30d": 15.01
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 15.0,
          "priceAvg30d": 14.91
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 11.61,
          "priceAvg30d": 13.86
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 11.48,
          "priceAvg30d": 13.47
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 10.98,
          "priceAvg30d": 13.72
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 11.0,
          "priceAvg30d": 13.17
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 3.69,
          "priceAvg30d": 9.85
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.26,
          "priceAvg30d": 10.25
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.58,
          "priceAvg30d": 13.08
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 19.82,
          "priceAvg30d": 16.24
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 19.69,
          "priceAvg30d": 15.64
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 19.76,
          "priceAvg30d": 17.28
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 19.82,
          "priceAvg30d": 17.09
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 23.19,
          "priceAvg30d": 19.3
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.19,
          "priceAvg30d": 19.68
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 37.89,
          "priceAvg30d": 20.44
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.0,
          "priceAvg30d": 19.71
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 24.8,
          "priceAvg30d": 20.92
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.19,
          "priceAvg30d": 20.19
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.63,
          "priceAvg30d": 20.24
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.01,
          "priceAvg30d": 19.2
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.54,
          "priceAvg30d": 18.1
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.0,
          "priceAvg30d": 18.5
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.83,
          "priceAvg30d": 17.77
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.84,
          "priceAvg30d": 17.82
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.64,
          "priceAvg30d": 16.7
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.54,
          "priceAvg30d": 16.62
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.0,
          "priceAvg30d": 14.73
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.63,
          "priceAvg30d": 14.38
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 21.63,
          "priceAvg30d": 10.82
        }
      ],
      "avg": 18.78,
      "max": 37.89,
      "maxBlock": 34,
      "min": 3.69,
      "minBlock": 25,
      "spread3h": 12.18,
      "spreadLowAvg": 12.19,
      "spreadHighAvg": 24.36,
      "avg30d": 14.84,
      "spread30dAvg": 9.92,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.0,
          "priceAvg30d": 10.99
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.42,
          "priceAvg30d": 11.13
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.42,
          "priceAvg30d": 11.25
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.42,
          "priceAvg30d": 10.97
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.42,
          "priceAvg30d": 10.74
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 17.0,
          "priceAvg30d": 11.29
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 18.0,
          "priceAvg30d": 11.77
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.62,
          "priceAvg30d": 12.88
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.76,
          "priceAvg30d": 13.02
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.9,
          "priceAvg30d": 14.29
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.82,
          "priceAvg30d": 14.73
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.84,
          "priceAvg30d": 14.72
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.68,
          "priceAvg30d": 15.66
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.0,
          "priceAvg30d": 12.26
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.42,
          "priceAvg30d": 10.44
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.98,
          "priceAvg30d": 8.66
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.48,
          "priceAvg30d": 8.94
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.33,
          "priceAvg30d": 8.97
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 6.87,
          "priceAvg30d": 8.63
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 8.04
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.39,
          "priceAvg30d": 8.43
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.0,
          "priceAvg30d": 7.83
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 1.0,
          "priceAvg30d": 7.72
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 1.0,
          "priceAvg30d": 7.28
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.55
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.55
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.5,
          "priceAvg30d": 8.39
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 4.04,
          "priceAvg30d": 9.52
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.36,
          "priceAvg30d": 9.31
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.95,
          "priceAvg30d": 10.31
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.98,
          "priceAvg30d": 11.38
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.84,
          "priceAvg30d": 13.34
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 20.85,
          "priceAvg30d": 14.23
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.0,
          "priceAvg30d": 17.65
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.0,
          "priceAvg30d": 19.23
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 24.8,
          "priceAvg30d": 20.51
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.19,
          "priceAvg30d": 19.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.63,
          "priceAvg30d": 19.76
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.01,
          "priceAvg30d": 19.09
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.54,
          "priceAvg30d": 18.1
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.0,
          "priceAvg30d": 18.36
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.83,
          "priceAvg30d": 17.69
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.84,
          "priceAvg30d": 17.78
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.64,
          "priceAvg30d": 16.61
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.54,
          "priceAvg30d": 16.51
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.0,
          "priceAvg30d": 14.72
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.63,
          "priceAvg30d": 14.38
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 21.63,
          "priceAvg30d": 10.82
        }
      ],
      "avg": 14.98,
      "max": 32.0,
      "maxBlock": 35,
      "min": 0.01,
      "minBlock": 25,
      "spread3h": 20.46,
      "spreadLowAvg": 1.76,
      "spreadHighAvg": 22.22,
      "avg30d": 12.73,
      "spread30dAvg": 11.73,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.0,
          "priceAvg30d": 10.89
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.42,
          "priceAvg30d": 10.74
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.42,
          "priceAvg30d": 10.73
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.42,
          "priceAvg30d": 10.49
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.42,
          "priceAvg30d": 10.16
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 17.0,
          "priceAvg30d": 10.79
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 18.0,
          "priceAvg30d": 11.14
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.62,
          "priceAvg30d": 12.35
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.76,
          "priceAvg30d": 11.96
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.9,
          "priceAvg30d": 13.52
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.82,
          "priceAvg30d": 13.97
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.84,
          "priceAvg30d": 13.94
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.68,
          "priceAvg30d": 14.51
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.0,
          "priceAvg30d": 11.2
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.42,
          "priceAvg30d": 9.12
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.98,
          "priceAvg30d": 7.93
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.48,
          "priceAvg30d": 8.3
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.33,
          "priceAvg30d": 8.44
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 6.87,
          "priceAvg30d": 7.74
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 6.93
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 2.39,
          "priceAvg30d": 7.38
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 2.0,
          "priceAvg30d": 6.98
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 1.0,
          "priceAvg30d": 6.63
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 1.0,
          "priceAvg30d": 6.6
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.37
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.43
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.5,
          "priceAvg30d": 7.98
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 4.04,
          "priceAvg30d": 8.98
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.36,
          "priceAvg30d": 8.66
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.95,
          "priceAvg30d": 9.0
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.98,
          "priceAvg30d": 9.53
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.84,
          "priceAvg30d": 11.69
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 20.85,
          "priceAvg30d": 12.37
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.0,
          "priceAvg30d": 15.36
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.0,
          "priceAvg30d": 15.97
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 24.8,
          "priceAvg30d": 17.66
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.19,
          "priceAvg30d": 17.6
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.63,
          "priceAvg30d": 17.43
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.01,
          "priceAvg30d": 16.49
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.54,
          "priceAvg30d": 14.86
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.0,
          "priceAvg30d": 15.61
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.83,
          "priceAvg30d": 14.87
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.84,
          "priceAvg30d": 15.2
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.64,
          "priceAvg30d": 14.22
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.54,
          "priceAvg30d": 14.27
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.0,
          "priceAvg30d": 13.02
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.63,
          "priceAvg30d": 13.2
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 21.63,
          "priceAvg30d": 10.09
        }
      ],
      "avg": 14.98,
      "max": 32.0,
      "maxBlock": 35,
      "min": 0.01,
      "minBlock": 25,
      "spread3h": 20.46,
      "spreadLowAvg": 1.76,
      "spreadHighAvg": 22.22,
      "avg30d": 11.44,
      "spread30dAvg": 10.42,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 13.0,
          "priceAvg30d": 10.99
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 13.42,
          "priceAvg30d": 11.13
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 13.42,
          "priceAvg30d": 11.25
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 13.42,
          "priceAvg30d": 10.97
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 13.42,
          "priceAvg30d": 10.74
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 17.0,
          "priceAvg30d": 11.29
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 18.0,
          "priceAvg30d": 11.77
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 18.62,
          "priceAvg30d": 12.88
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 19.76,
          "priceAvg30d": 13.02
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.9,
          "priceAvg30d": 14.29
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 19.82,
          "priceAvg30d": 14.69
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.84,
          "priceAvg30d": 14.72
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.68,
          "priceAvg30d": 15.66
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 24.0,
          "priceAvg30d": 12.26
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.42,
          "priceAvg30d": 10.44
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.98,
          "priceAvg30d": 8.66
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.48,
          "priceAvg30d": 8.66
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.33,
          "priceAvg30d": 8.33
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 6.87,
          "priceAvg30d": 7.69
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 2.5,
          "priceAvg30d": 6.92
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 1.0,
          "priceAvg30d": 6.66
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.07
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 5.81
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 5.68
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.28
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.42
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 6.36
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 4.04,
          "priceAvg30d": 7.35
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.36,
          "priceAvg30d": 8.29
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.95,
          "priceAvg30d": 9.52
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 9.98,
          "priceAvg30d": 10.94
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.84,
          "priceAvg30d": 12.84
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 20.85,
          "priceAvg30d": 14.23
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 31.0,
          "priceAvg30d": 17.65
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 32.0,
          "priceAvg30d": 19.23
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 24.8,
          "priceAvg30d": 20.51
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.19,
          "priceAvg30d": 19.73
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 21.63,
          "priceAvg30d": 19.76
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 21.01,
          "priceAvg30d": 19.09
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 21.54,
          "priceAvg30d": 18.1
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 21.0,
          "priceAvg30d": 18.36
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 20.83,
          "priceAvg30d": 17.69
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 20.84,
          "priceAvg30d": 17.78
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 20.64,
          "priceAvg30d": 16.61
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 21.54,
          "priceAvg30d": 16.51
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 21.0,
          "priceAvg30d": 14.72
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 21.63,
          "priceAvg30d": 14.38
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 21.63,
          "priceAvg30d": 10.82
        }
      ],
      "avg": 14.82,
      "max": 32.0,
      "maxBlock": 35,
      "min": 0.01,
      "minBlock": 22,
      "spread3h": 20.48,
      "spreadLowAvg": 1.73,
      "spreadHighAvg": 22.22,
      "avg30d": 12.33,
      "spread30dAvg": 12.13,
      "historyDays": 30
    }
  }
};
