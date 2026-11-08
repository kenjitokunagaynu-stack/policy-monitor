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
  "targetDate": "2026-11-08",
  "fetchedAt": "2026-11-08T12:23:16+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 20.89,
        "priceAvg30d": 24.9
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 19.99,
        "priceAvg30d": 23.93
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 19.12,
        "priceAvg30d": 23.39
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 20.89,
        "priceAvg30d": 23.09
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 20.89,
        "priceAvg30d": 23.25
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 20.89,
        "priceAvg30d": 24.02
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 22.74,
        "priceAvg30d": 24.89
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 24.51,
        "priceAvg30d": 25.61
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 24.51,
        "priceAvg30d": 25.95
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 24.72,
        "priceAvg30d": 26.29
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 22.74,
        "priceAvg30d": 26.58
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 25.16,
        "priceAvg30d": 26.68
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 25.3,
        "priceAvg30d": 26.63
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 22.74,
        "priceAvg30d": 25.84
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 15.56,
        "priceAvg30d": 23.63
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 10.56,
        "priceAvg30d": 20.89
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 9.18,
        "priceAvg30d": 19.67
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 5.5,
        "priceAvg30d": 18.85
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 8.38,
        "priceAvg30d": 17.12
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 1.01,
        "priceAvg30d": 15.96
      },
      {
        "block": 21,
        "label": "10:00~10:30",
        "price": 1.0,
        "priceAvg30d": 14.94
      },
      {
        "block": 22,
        "label": "10:30~11:00",
        "price": 0.02,
        "priceAvg30d": 14.39
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 0.01,
        "priceAvg30d": 13.97
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 0.01,
        "priceAvg30d": 13.9
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 0.02,
        "priceAvg30d": 12.06
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 0.5,
        "priceAvg30d": 12.58
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 1.01,
        "priceAvg30d": 16.45
      },
      {
        "block": 28,
        "label": "13:30~14:00",
        "price": 2.49,
        "priceAvg30d": 19.03
      },
      {
        "block": 29,
        "label": "14:00~14:30",
        "price": 2.5,
        "priceAvg30d": 20.12
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 9.98,
        "priceAvg30d": 23.55
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 12.69,
        "priceAvg30d": 25.6
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 20.0,
        "priceAvg30d": 29.31
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 27.0,
        "priceAvg30d": 32.99
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 28.5,
        "priceAvg30d": 34.5
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 29.5,
        "priceAvg30d": 33.98
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 30.46,
        "priceAvg30d": 33.76
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 29.89,
        "priceAvg30d": 32.34
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 31.54,
        "priceAvg30d": 31.6
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 31.54,
        "priceAvg30d": 30.68
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 31.02,
        "priceAvg30d": 28.98
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 29.98,
        "priceAvg30d": 28.38
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 30.54,
        "priceAvg30d": 27.66
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 29.98,
        "priceAvg30d": 27.2
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 29.45,
        "priceAvg30d": 26.93
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 29.45,
        "priceAvg30d": 27.26
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 29.25,
        "priceAvg30d": 26.48
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 28.5,
        "priceAvg30d": 26.21
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 23.3,
        "priceAvg30d": 24.27
      }
    ],
    "avg": 18.45,
    "max": 31.54,
    "maxBlock": 38,
    "min": 0.01,
    "minBlock": 23,
    "spread3h": 29.97,
    "spreadLowAvg": 0.43,
    "spreadHighAvg": 30.4,
    "avg30d": 24.09,
    "spread30dAvg": 19.06,
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
          "price": 9.88,
          "priceAvg30d": 21.95
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.88,
          "priceAvg30d": 19.42
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.88,
          "priceAvg30d": 19.74
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.88,
          "priceAvg30d": 20.51
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.88,
          "priceAvg30d": 21.27
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.02,
          "priceAvg30d": 22.84
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.36,
          "priceAvg30d": 23.47
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.4,
          "priceAvg30d": 24.41
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.87,
          "priceAvg30d": 24.96
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.66,
          "priceAvg30d": 24.86
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.5,
          "priceAvg30d": 26.98
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.0,
          "priceAvg30d": 27.8
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 11.66,
          "priceAvg30d": 24.97
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.87,
          "priceAvg30d": 23.03
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 5.5,
          "priceAvg30d": 19.87
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 5.0,
          "priceAvg30d": 17.05
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 1.02,
          "priceAvg30d": 15.91
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.0,
          "priceAvg30d": 13.38
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 12.85
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.03,
          "priceAvg30d": 11.49
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.02,
          "priceAvg30d": 10.83
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.02,
          "priceAvg30d": 9.74
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.5,
          "priceAvg30d": 10.3
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 1.0,
          "priceAvg30d": 10.48
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.0,
          "priceAvg30d": 8.69
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 1.0,
          "priceAvg30d": 8.41
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 1.0,
          "priceAvg30d": 10.78
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 9.88,
          "priceAvg30d": 13.37
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.88,
          "priceAvg30d": 16.61
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 9.88,
          "priceAvg30d": 19.97
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.36,
          "priceAvg30d": 22.7
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.38,
          "priceAvg30d": 27.44
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 27.0,
          "priceAvg30d": 33.48
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.0,
          "priceAvg30d": 35.23
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.19,
          "priceAvg30d": 33.41
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.99,
          "priceAvg30d": 33.03
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 28.57,
          "priceAvg30d": 31.86
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 31.02,
          "priceAvg30d": 32.12
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.02,
          "priceAvg30d": 33.06
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 31.02,
          "priceAvg30d": 31.82
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 31.02,
          "priceAvg30d": 31.76
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.02,
          "priceAvg30d": 29.76
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 31.52,
          "priceAvg30d": 28.35
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.0,
          "priceAvg30d": 27.55
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.82,
          "priceAvg30d": 26.94
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.61,
          "priceAvg30d": 25.25
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.46,
          "priceAvg30d": 25.05
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 27.17,
          "priceAvg30d": 22.54
        }
      ],
      "avg": 14.12,
      "max": 31.52,
      "maxBlock": 43,
      "min": 0.02,
      "minBlock": 21,
      "spread3h": 28.32,
      "spreadLowAvg": 0.59,
      "spreadHighAvg": 28.92,
      "avg30d": 22.24,
      "spread30dAvg": 23.01,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 9.18,
          "priceAvg30d": 25.82
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.18,
          "priceAvg30d": 25.44
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.18,
          "priceAvg30d": 24.88
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 9.18,
          "priceAvg30d": 24.72
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 9.18,
          "priceAvg30d": 25.23
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.02,
          "priceAvg30d": 25.6
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.36,
          "priceAvg30d": 26.36
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 10.36,
          "priceAvg30d": 26.36
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 10.87,
          "priceAvg30d": 26.72
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 11.66,
          "priceAvg30d": 26.78
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 10.5,
          "priceAvg30d": 27.26
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 10.0,
          "priceAvg30d": 27.57
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 11.66,
          "priceAvg30d": 27.37
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 10.87,
          "priceAvg30d": 26.02
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 5.5,
          "priceAvg30d": 22.67
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 3.5,
          "priceAvg30d": 20.04
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 1.02,
          "priceAvg30d": 19.06
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 0.04,
          "priceAvg30d": 16.86
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 16.43
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.03,
          "priceAvg30d": 15.85
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.02,
          "priceAvg30d": 14.59
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.02,
          "priceAvg30d": 14.25
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 13.86
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.02,
          "priceAvg30d": 13.88
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.02,
          "priceAvg30d": 12.65
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.02,
          "priceAvg30d": 12.73
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.02,
          "priceAvg30d": 15.77
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.02,
          "priceAvg30d": 17.86
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 1.0,
          "priceAvg30d": 20.7
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 5.0,
          "priceAvg30d": 23.61
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 10.36,
          "priceAvg30d": 26.04
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.38,
          "priceAvg30d": 30.88
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 27.0,
          "priceAvg30d": 34.6
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 27.0,
          "priceAvg30d": 36.55
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 27.19,
          "priceAvg30d": 35.99
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 29.99,
          "priceAvg30d": 35.84
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.9,
          "priceAvg30d": 34.23
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 31.54,
          "priceAvg30d": 33.94
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 31.54,
          "priceAvg30d": 33.11
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 31.54,
          "priceAvg30d": 31.41
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 31.54,
          "priceAvg30d": 30.77
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 31.54,
          "priceAvg30d": 29.28
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 31.52,
          "priceAvg30d": 28.79
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 27.0,
          "priceAvg30d": 29.07
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.82,
          "priceAvg30d": 28.86
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.61,
          "priceAvg30d": 27.31
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 27.46,
          "priceAvg30d": 26.68
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 27.17,
          "priceAvg30d": 24.35
        }
      ],
      "avg": 13.51,
      "max": 31.54,
      "maxBlock": 38,
      "min": 0.01,
      "minBlock": 23,
      "spread3h": 30.43,
      "spreadLowAvg": 0.02,
      "spreadHighAvg": 30.45,
      "avg30d": 24.89,
      "spread30dAvg": 20.86,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 29.62,
          "priceAvg30d": 28.04
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 29.21,
          "priceAvg30d": 27.77
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 29.07,
          "priceAvg30d": 27.73
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 28.26,
          "priceAvg30d": 27.33
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 28.26,
          "priceAvg30d": 27.56
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 28.26,
          "priceAvg30d": 27.62
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 29.07,
          "priceAvg30d": 27.79
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 29.07,
          "priceAvg30d": 27.78
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 29.07,
          "priceAvg30d": 28.02
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 29.21,
          "priceAvg30d": 28.06
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 27.3,
          "priceAvg30d": 28.34
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 29.45,
          "priceAvg30d": 28.79
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 29.45,
          "priceAvg30d": 28.9
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 29.21,
          "priceAvg30d": 28.2
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 22.98,
          "priceAvg30d": 27.76
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.0,
          "priceAvg30d": 27.36
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 1.02,
          "priceAvg30d": 26.44
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.25,
          "priceAvg30d": 26.06
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 16.82,
          "priceAvg30d": 25.06
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 3.0,
          "priceAvg30d": 23.93
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 9.9,
          "priceAvg30d": 22.63
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 5.1,
          "priceAvg30d": 22.39
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 5.0,
          "priceAvg30d": 22.29
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 7.86,
          "priceAvg30d": 22.79
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.25,
          "priceAvg30d": 22.43
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 11.16,
          "priceAvg30d": 23.34
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 11.65,
          "priceAvg30d": 25.05
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.0,
          "priceAvg30d": 27.38
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.31,
          "priceAvg30d": 29.0
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 22.74,
          "priceAvg30d": 30.98
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 22.74,
          "priceAvg30d": 31.02
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 29.53,
          "priceAvg30d": 34.15
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 32.5,
          "priceAvg30d": 36.37
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 35.8,
          "priceAvg30d": 37.64
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 46.23,
          "priceAvg30d": 36.95
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 46.8,
          "priceAvg30d": 36.89
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 41.77,
          "priceAvg30d": 35.09
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 46.8,
          "priceAvg30d": 34.98
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 46.8,
          "priceAvg30d": 33.93
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 44.0,
          "priceAvg30d": 32.53
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 33.95,
          "priceAvg30d": 31.59
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 34.42,
          "priceAvg30d": 30.3
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 33.74,
          "priceAvg30d": 29.8
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.5,
          "priceAvg30d": 30.36
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.5,
          "priceAvg30d": 31.55
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.46,
          "priceAvg30d": 30.08
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.08,
          "priceAvg30d": 29.05
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 31.38,
          "priceAvg30d": 27.6
        }
      ],
      "avg": 25.76,
      "max": 46.8,
      "maxBlock": 36,
      "min": 1.02,
      "minBlock": 17,
      "spread3h": 24.77,
      "spreadLowAvg": 16.88,
      "spreadHighAvg": 41.65,
      "avg30d": 28.89,
      "spread30dAvg": 13.7,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 30.19,
          "priceAvg30d": 27.21
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 30.5,
          "priceAvg30d": 26.86
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 30.81,
          "priceAvg30d": 26.33
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 30.8,
          "priceAvg30d": 26.22
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 30.83,
          "priceAvg30d": 26.7
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 30.82,
          "priceAvg30d": 27.08
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 31.1,
          "priceAvg30d": 27.42
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 31.62,
          "priceAvg30d": 27.67
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 31.69,
          "priceAvg30d": 27.85
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 31.69,
          "priceAvg30d": 27.96
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 31.69,
          "priceAvg30d": 28.21
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 31.58,
          "priceAvg30d": 28.47
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 31.58,
          "priceAvg30d": 28.33
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 31.42,
          "priceAvg30d": 27.59
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 28.3,
          "priceAvg30d": 25.85
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 20.73,
          "priceAvg30d": 23.75
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.0,
          "priceAvg30d": 22.82
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 12.52,
          "priceAvg30d": 23.21
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.19,
          "priceAvg30d": 22.34
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 5.0,
          "priceAvg30d": 21.39
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 3.0,
          "priceAvg30d": 19.73
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 1.01,
          "priceAvg30d": 19.53
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 1.0,
          "priceAvg30d": 19.08
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.03,
          "priceAvg30d": 19.06
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.0,
          "priceAvg30d": 16.84
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 1.1,
          "priceAvg30d": 17.57
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.5,
          "priceAvg30d": 21.13
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.0,
          "priceAvg30d": 24.08
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.31,
          "priceAvg30d": 25.66
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 13.97,
          "priceAvg30d": 27.38
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 15.6,
          "priceAvg30d": 28.89
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 29.52,
          "priceAvg30d": 33.19
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 30.08,
          "priceAvg30d": 35.08
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.23,
          "priceAvg30d": 35.78
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 28.29,
          "priceAvg30d": 35.86
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 30.17,
          "priceAvg30d": 35.78
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 30.17,
          "priceAvg30d": 34.46
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 32.24,
          "priceAvg30d": 33.91
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 34.94,
          "priceAvg30d": 33.41
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 36.14,
          "priceAvg30d": 31.63
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 31.25,
          "priceAvg30d": 30.18
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 32.48,
          "priceAvg30d": 29.45
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 32.12,
          "priceAvg30d": 28.94
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 32.5,
          "priceAvg30d": 28.77
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 32.11,
          "priceAvg30d": 29.67
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 32.46,
          "priceAvg30d": 29.04
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 32.08,
          "priceAvg30d": 28.87
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 31.38,
          "priceAvg30d": 27.9
        }
      ],
      "avg": 23.2,
      "max": 36.14,
      "maxBlock": 40,
      "min": 0.03,
      "minBlock": 24,
      "spread3h": 30.6,
      "spreadLowAvg": 1.6,
      "spreadHighAvg": 32.2,
      "avg30d": 27.17,
      "spread30dAvg": 17.41,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.49,
          "priceAvg30d": 15.61
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.86,
          "priceAvg30d": 15.74
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.86,
          "priceAvg30d": 15.08
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.86,
          "priceAvg30d": 14.24
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.1,
          "priceAvg30d": 15.1
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.86,
          "priceAvg30d": 16.8
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.12,
          "priceAvg30d": 17.67
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.34,
          "priceAvg30d": 18.91
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.47,
          "priceAvg30d": 18.92
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.15,
          "priceAvg30d": 20.31
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.15,
          "priceAvg30d": 20.82
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.99,
          "priceAvg30d": 19.86
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.15,
          "priceAvg30d": 19.0
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 19.12,
          "priceAvg30d": 18.47
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 14.84,
          "priceAvg30d": 18.32
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.14,
          "priceAvg30d": 16.85
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.0,
          "priceAvg30d": 17.78
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 12.52,
          "priceAvg30d": 18.93
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.19,
          "priceAvg30d": 18.83
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 5.0,
          "priceAvg30d": 18.91
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 3.0,
          "priceAvg30d": 17.59
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 1.01,
          "priceAvg30d": 17.34
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 1.0,
          "priceAvg30d": 17.64
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.03,
          "priceAvg30d": 17.73
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.0,
          "priceAvg30d": 14.18
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 1.1,
          "priceAvg30d": 14.96
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.5,
          "priceAvg30d": 19.4
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.0,
          "priceAvg30d": 22.45
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.31,
          "priceAvg30d": 23.35
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 13.97,
          "priceAvg30d": 24.32
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.34,
          "priceAvg30d": 25.64
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.14,
          "priceAvg30d": 29.0
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.42,
          "priceAvg30d": 29.44
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.23,
          "priceAvg30d": 30.98
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.66,
          "priceAvg30d": 29.34
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.08,
          "priceAvg30d": 29.75
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.08,
          "priceAvg30d": 28.24
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.19,
          "priceAvg30d": 28.3
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.19,
          "priceAvg30d": 27.82
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.66,
          "priceAvg30d": 25.78
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.19,
          "priceAvg30d": 25.5
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.66,
          "priceAvg30d": 24.17
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.19,
          "priceAvg30d": 23.44
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.34,
          "priceAvg30d": 22.98
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.66,
          "priceAvg30d": 22.55
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.34,
          "priceAvg30d": 20.59
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.12,
          "priceAvg30d": 20.13
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.42,
          "priceAvg30d": 15.42
        }
      ],
      "avg": 14.98,
      "max": 23.19,
      "maxBlock": 38,
      "min": 0.03,
      "minBlock": 24,
      "spread3h": 21.38,
      "spreadLowAvg": 1.6,
      "spreadHighAvg": 22.98,
      "avg30d": 20.92,
      "spread30dAvg": 15.75,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.49,
          "priceAvg30d": 15.37
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.86,
          "priceAvg30d": 15.74
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.86,
          "priceAvg30d": 15.08
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.86,
          "priceAvg30d": 14.24
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.1,
          "priceAvg30d": 14.68
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.86,
          "priceAvg30d": 16.54
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.12,
          "priceAvg30d": 17.41
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.34,
          "priceAvg30d": 18.55
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.47,
          "priceAvg30d": 18.52
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.15,
          "priceAvg30d": 19.67
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.15,
          "priceAvg30d": 19.7
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.99,
          "priceAvg30d": 19.03
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.15,
          "priceAvg30d": 19.0
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 19.12,
          "priceAvg30d": 18.47
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 14.84,
          "priceAvg30d": 17.9
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.14,
          "priceAvg30d": 16.52
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.0,
          "priceAvg30d": 17.68
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 12.52,
          "priceAvg30d": 18.93
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.19,
          "priceAvg30d": 18.83
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 5.0,
          "priceAvg30d": 18.91
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 3.0,
          "priceAvg30d": 17.55
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 1.01,
          "priceAvg30d": 17.29
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 1.0,
          "priceAvg30d": 17.58
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.03,
          "priceAvg30d": 17.67
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.0,
          "priceAvg30d": 14.18
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 1.1,
          "priceAvg30d": 14.96
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.5,
          "priceAvg30d": 19.4
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 10.0,
          "priceAvg30d": 22.45
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 10.31,
          "priceAvg30d": 23.02
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 13.97,
          "priceAvg30d": 24.32
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 12.34,
          "priceAvg30d": 25.62
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.14,
          "priceAvg30d": 28.97
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.42,
          "priceAvg30d": 29.44
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.23,
          "priceAvg30d": 30.98
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.66,
          "priceAvg30d": 29.34
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.08,
          "priceAvg30d": 29.41
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.08,
          "priceAvg30d": 28.24
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.19,
          "priceAvg30d": 27.86
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.19,
          "priceAvg30d": 27.48
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.66,
          "priceAvg30d": 25.6
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.19,
          "priceAvg30d": 25.31
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.66,
          "priceAvg30d": 24.01
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.19,
          "priceAvg30d": 23.28
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.34,
          "priceAvg30d": 22.73
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 22.66,
          "priceAvg30d": 22.32
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 22.34,
          "priceAvg30d": 20.34
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.12,
          "priceAvg30d": 19.96
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.42,
          "priceAvg30d": 15.29
        }
      ],
      "avg": 14.98,
      "max": 23.19,
      "maxBlock": 38,
      "min": 0.03,
      "minBlock": 24,
      "spread3h": 21.38,
      "spreadLowAvg": 1.6,
      "spreadHighAvg": 22.98,
      "avg30d": 20.74,
      "spread30dAvg": 15.57,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.49,
          "priceAvg30d": 14.79
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.86,
          "priceAvg30d": 15.65
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.86,
          "priceAvg30d": 14.43
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.86,
          "priceAvg30d": 13.64
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.1,
          "priceAvg30d": 14.08
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.86,
          "priceAvg30d": 15.5
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.12,
          "priceAvg30d": 16.17
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.34,
          "priceAvg30d": 17.75
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.47,
          "priceAvg30d": 18.44
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.15,
          "priceAvg30d": 19.62
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.15,
          "priceAvg30d": 19.62
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.99,
          "priceAvg30d": 19.03
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.15,
          "priceAvg30d": 18.89
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 19.12,
          "priceAvg30d": 18.33
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 14.84,
          "priceAvg30d": 14.26
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.14,
          "priceAvg30d": 12.38
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.85,
          "priceAvg30d": 12.43
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.66,
          "priceAvg30d": 11.69
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 4.98,
          "priceAvg30d": 10.88
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 5.0,
          "priceAvg30d": 10.11
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 3.0,
          "priceAvg30d": 8.5
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 1.01,
          "priceAvg30d": 8.04
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 1.0,
          "priceAvg30d": 7.8
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.03,
          "priceAvg30d": 8.23
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.0,
          "priceAvg30d": 7.13
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 1.1,
          "priceAvg30d": 7.26
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.5,
          "priceAvg30d": 8.56
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 9.28
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 9.86,
          "priceAvg30d": 10.82
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.43,
          "priceAvg30d": 12.2
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.14,
          "priceAvg30d": 14.29
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.14,
          "priceAvg30d": 17.23
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.42,
          "priceAvg30d": 21.71
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.23,
          "priceAvg30d": 24.97
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.66,
          "priceAvg30d": 24.74
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.08,
          "priceAvg30d": 25.33
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.08,
          "priceAvg30d": 24.32
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.08,
          "priceAvg30d": 23.7
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.08,
          "priceAvg30d": 23.69
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.66,
          "priceAvg30d": 22.67
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.19,
          "priceAvg30d": 22.53
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.66,
          "priceAvg30d": 21.91
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.08,
          "priceAvg30d": 21.28
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.15,
          "priceAvg30d": 20.76
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.99,
          "priceAvg30d": 20.23
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.96,
          "priceAvg30d": 18.34
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.12,
          "priceAvg30d": 18.1
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.42,
          "priceAvg30d": 14.25
        }
      ],
      "avg": 14.29,
      "max": 23.19,
      "maxBlock": 41,
      "min": 0.01,
      "minBlock": 28,
      "spread3h": 16.78,
      "spreadLowAvg": 6.0,
      "spreadHighAvg": 22.78,
      "avg30d": 16.16,
      "spread30dAvg": 14.81,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.49,
          "priceAvg30d": 11.73
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.86,
          "priceAvg30d": 11.28
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.49,
          "priceAvg30d": 10.66
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.86,
          "priceAvg30d": 10.37
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.1,
          "priceAvg30d": 10.37
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.86,
          "priceAvg30d": 10.76
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.12,
          "priceAvg30d": 10.56
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.34,
          "priceAvg30d": 12.96
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.47,
          "priceAvg30d": 13.72
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.15,
          "priceAvg30d": 14.82
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.15,
          "priceAvg30d": 15.38
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.99,
          "priceAvg30d": 15.0
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.15,
          "priceAvg30d": 14.47
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.5,
          "priceAvg30d": 12.49
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 12.49,
          "priceAvg30d": 10.0
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.51,
          "priceAvg30d": 10.17
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.34,
          "priceAvg30d": 10.56
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.38,
          "priceAvg30d": 9.81
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 4.98,
          "priceAvg30d": 8.97
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 5.0,
          "priceAvg30d": 8.26
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 3.0,
          "priceAvg30d": 6.55
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 1.01,
          "priceAvg30d": 5.6
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 1.0,
          "priceAvg30d": 5.57
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.03,
          "priceAvg30d": 5.8
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 1.0,
          "priceAvg30d": 4.89
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 1.1,
          "priceAvg30d": 5.31
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 2.5,
          "priceAvg30d": 7.19
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 7.53
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 8.79
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 0.01,
          "priceAvg30d": 9.92
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 0.02,
          "priceAvg30d": 10.88
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 8.37,
          "priceAvg30d": 11.54
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 8.55,
          "priceAvg30d": 13.88
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.23,
          "priceAvg30d": 17.31
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.66,
          "priceAvg30d": 18.51
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.08,
          "priceAvg30d": 19.19
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.08,
          "priceAvg30d": 18.3
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.08,
          "priceAvg30d": 17.87
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.0,
          "priceAvg30d": 16.93
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.66,
          "priceAvg30d": 15.9
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.19,
          "priceAvg30d": 15.86
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.66,
          "priceAvg30d": 14.69
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.08,
          "priceAvg30d": 15.34
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.15,
          "priceAvg30d": 14.23
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.99,
          "priceAvg30d": 12.97
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 18.8,
          "priceAvg30d": 11.92
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.0,
          "priceAvg30d": 12.45
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.42,
          "priceAvg30d": 10.49
        }
      ],
      "avg": 13.21,
      "max": 23.19,
      "maxBlock": 41,
      "min": 0.01,
      "minBlock": 28,
      "spread3h": 21.33,
      "spreadLowAvg": 0.77,
      "spreadHighAvg": 22.11,
      "avg30d": 11.83,
      "spread30dAvg": 13.14,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 12.49,
          "priceAvg30d": 14.79
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 12.86,
          "priceAvg30d": 15.22
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 12.86,
          "priceAvg30d": 13.96
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 12.86,
          "priceAvg30d": 13.42
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 15.1,
          "priceAvg30d": 13.78
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 12.86,
          "priceAvg30d": 15.27
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 19.12,
          "priceAvg30d": 16.05
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 22.34,
          "priceAvg30d": 17.72
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 21.47,
          "priceAvg30d": 18.26
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 22.15,
          "priceAvg30d": 19.32
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 22.15,
          "priceAvg30d": 19.31
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 20.99,
          "priceAvg30d": 18.72
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 22.15,
          "priceAvg30d": 18.69
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 19.12,
          "priceAvg30d": 18.17
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 14.84,
          "priceAvg30d": 14.18
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 11.14,
          "priceAvg30d": 12.38
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 10.85,
          "priceAvg30d": 12.05
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 8.66,
          "priceAvg30d": 10.58
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 4.03,
          "priceAvg30d": 9.14
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 8.28
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.24
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.82
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 6.67
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.52
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.78
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 5.9
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 6.82
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 7.97
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 4.01,
          "priceAvg30d": 9.45
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 10.43,
          "priceAvg30d": 11.6
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 11.14,
          "priceAvg30d": 14.29
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 11.14,
          "priceAvg30d": 17.14
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 11.42,
          "priceAvg30d": 21.71
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 18.23,
          "priceAvg30d": 24.97
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 22.66,
          "priceAvg30d": 24.74
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.08,
          "priceAvg30d": 25.33
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.08,
          "priceAvg30d": 24.32
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.08,
          "priceAvg30d": 23.7
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.08,
          "priceAvg30d": 23.69
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 22.66,
          "priceAvg30d": 22.67
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 23.19,
          "priceAvg30d": 22.53
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 22.66,
          "priceAvg30d": 21.91
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 23.08,
          "priceAvg30d": 21.28
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 22.15,
          "priceAvg30d": 20.76
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 20.99,
          "priceAvg30d": 20.23
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 19.96,
          "priceAvg30d": 18.34
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 19.12,
          "priceAvg30d": 18.1
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 11.42,
          "priceAvg30d": 14.25
        }
      ],
      "avg": 13.85,
      "max": 23.19,
      "maxBlock": 41,
      "min": 0.01,
      "minBlock": 20,
      "spread3h": 18.86,
      "spreadLowAvg": 3.93,
      "spreadHighAvg": 22.78,
      "avg30d": 15.71,
      "spread30dAvg": 15.49,
      "historyDays": 30
    }
  }
};
