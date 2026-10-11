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
  "targetDate": "2026-10-11",
  "fetchedAt": "2026-10-11T11:55:01+09:00",
  "sourceUrl": "https://www.jepx.jp/electricpower/market-data/spot/",
  "avgWindowLabel": "過去30日平均",
  "national": {
    "label": "システムプライス（全国）",
    "blocks": [
      {
        "block": 1,
        "label": "00:00~00:30",
        "price": 23.0,
        "priceAvg30d": 18.5
      },
      {
        "block": 2,
        "label": "00:30~01:00",
        "price": 21.93,
        "priceAvg30d": 16.92
      },
      {
        "block": 3,
        "label": "01:00~01:30",
        "price": 21.6,
        "priceAvg30d": 15.84
      },
      {
        "block": 4,
        "label": "01:30~02:00",
        "price": 20.99,
        "priceAvg30d": 15.31
      },
      {
        "block": 5,
        "label": "02:00~02:30",
        "price": 21.25,
        "priceAvg30d": 15.04
      },
      {
        "block": 6,
        "label": "02:30~03:00",
        "price": 21.89,
        "priceAvg30d": 15.78
      },
      {
        "block": 7,
        "label": "03:00~03:30",
        "price": 22.36,
        "priceAvg30d": 16.59
      },
      {
        "block": 8,
        "label": "03:30~04:00",
        "price": 22.84,
        "priceAvg30d": 17.51
      },
      {
        "block": 9,
        "label": "04:00~04:30",
        "price": 23.22,
        "priceAvg30d": 18.32
      },
      {
        "block": 10,
        "label": "04:30~05:00",
        "price": 23.4,
        "priceAvg30d": 19.34
      },
      {
        "block": 11,
        "label": "05:00~05:30",
        "price": 23.7,
        "priceAvg30d": 20.16
      },
      {
        "block": 12,
        "label": "05:30~06:00",
        "price": 23.38,
        "priceAvg30d": 19.89
      },
      {
        "block": 13,
        "label": "06:00~06:30",
        "price": 22.24,
        "priceAvg30d": 19.0
      },
      {
        "block": 14,
        "label": "06:30~07:00",
        "price": 13.79,
        "priceAvg30d": 16.42
      },
      {
        "block": 15,
        "label": "07:00~07:30",
        "price": 10.1,
        "priceAvg30d": 13.78
      },
      {
        "block": 16,
        "label": "07:30~08:00",
        "price": 8.86,
        "priceAvg30d": 12.53
      },
      {
        "block": 17,
        "label": "08:00~08:30",
        "price": 8.75,
        "priceAvg30d": 12.93
      },
      {
        "block": 18,
        "label": "08:30~09:00",
        "price": 3.0,
        "priceAvg30d": 13.48
      },
      {
        "block": 19,
        "label": "09:00~09:30",
        "price": 1.0,
        "priceAvg30d": 13.68
      },
      {
        "block": 20,
        "label": "09:30~10:00",
        "price": 0.5,
        "priceAvg30d": 13.15
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
        "priceAvg30d": 11.63
      },
      {
        "block": 23,
        "label": "11:00~11:30",
        "price": 0.01,
        "priceAvg30d": 11.47
      },
      {
        "block": 24,
        "label": "11:30~12:00",
        "price": 0.01,
        "priceAvg30d": 11.09
      },
      {
        "block": 25,
        "label": "12:00~12:30",
        "price": 0.01,
        "priceAvg30d": 9.11
      },
      {
        "block": 26,
        "label": "12:30~13:00",
        "price": 0.04,
        "priceAvg30d": 9.84
      },
      {
        "block": 27,
        "label": "13:00~13:30",
        "price": 1.0,
        "priceAvg30d": 12.03
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
        "price": 3.8,
        "priceAvg30d": 15.06
      },
      {
        "block": 30,
        "label": "14:30~15:00",
        "price": 9.19,
        "priceAvg30d": 17.71
      },
      {
        "block": 31,
        "label": "15:00~15:30",
        "price": 12.0,
        "priceAvg30d": 18.51
      },
      {
        "block": 32,
        "label": "15:30~16:00",
        "price": 20.5,
        "priceAvg30d": 22.01
      },
      {
        "block": 33,
        "label": "16:00~16:30",
        "price": 23.8,
        "priceAvg30d": 24.11
      },
      {
        "block": 34,
        "label": "16:30~17:00",
        "price": 24.35,
        "priceAvg30d": 27.02
      },
      {
        "block": 35,
        "label": "17:00~17:30",
        "price": 25.0,
        "priceAvg30d": 27.0
      },
      {
        "block": 36,
        "label": "17:30~18:00",
        "price": 25.79,
        "priceAvg30d": 27.66
      },
      {
        "block": 37,
        "label": "18:00~18:30",
        "price": 26.31,
        "priceAvg30d": 27.29
      },
      {
        "block": 38,
        "label": "18:30~19:00",
        "price": 25.86,
        "priceAvg30d": 26.87
      },
      {
        "block": 39,
        "label": "19:00~19:30",
        "price": 24.99,
        "priceAvg30d": 25.66
      },
      {
        "block": 40,
        "label": "19:30~20:00",
        "price": 23.91,
        "priceAvg30d": 24.39
      },
      {
        "block": 41,
        "label": "20:00~20:30",
        "price": 23.86,
        "priceAvg30d": 23.52
      },
      {
        "block": 42,
        "label": "20:30~21:00",
        "price": 23.59,
        "priceAvg30d": 22.88
      },
      {
        "block": 43,
        "label": "21:00~21:30",
        "price": 24.13,
        "priceAvg30d": 22.08
      },
      {
        "block": 44,
        "label": "21:30~22:00",
        "price": 24.5,
        "priceAvg30d": 22.16
      },
      {
        "block": 45,
        "label": "22:00~22:30",
        "price": 25.2,
        "priceAvg30d": 22.07
      },
      {
        "block": 46,
        "label": "22:30~23:00",
        "price": 24.19,
        "priceAvg30d": 20.68
      },
      {
        "block": 47,
        "label": "23:00~23:30",
        "price": 23.84,
        "priceAvg30d": 20.48
      },
      {
        "block": 48,
        "label": "23:30~24:00",
        "price": 22.48,
        "priceAvg30d": 18.51
      }
    ],
    "avg": 16.22,
    "max": 26.31,
    "maxBlock": 37,
    "min": 0.01,
    "minBlock": 21,
    "spread3h": 24.23,
    "spreadLowAvg": 0.76,
    "spreadHighAvg": 24.98,
    "avg30d": 18.15,
    "spread30dAvg": 16.63,
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
          "price": 26.01,
          "priceAvg30d": 15.56
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.69,
          "priceAvg30d": 13.75
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.43,
          "priceAvg30d": 14.1
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.7,
          "priceAvg30d": 13.94
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.7,
          "priceAvg30d": 14.93
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 24.03,
          "priceAvg30d": 16.65
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.0,
          "priceAvg30d": 17.51
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.05,
          "priceAvg30d": 17.98
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.42,
          "priceAvg30d": 17.67
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.28,
          "priceAvg30d": 17.97
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.82,
          "priceAvg30d": 18.75
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.82,
          "priceAvg30d": 17.86
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.0,
          "priceAvg30d": 15.33
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.62,
          "priceAvg30d": 13.38
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.0,
          "priceAvg30d": 11.05
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 9.32,
          "priceAvg30d": 9.53
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 9.32,
          "priceAvg30d": 8.33
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 9.32,
          "priceAvg30d": 8.57
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 9.32,
          "priceAvg30d": 7.23
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 8.5,
          "priceAvg30d": 6.55
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 8.5,
          "priceAvg30d": 6.18
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 9.31,
          "priceAvg30d": 6.06
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 8.5,
          "priceAvg30d": 6.15
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 9.32,
          "priceAvg30d": 5.78
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 9.31,
          "priceAvg30d": 5.73
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 8.4,
          "priceAvg30d": 5.66
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 7.91,
          "priceAvg30d": 6.52
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 2.5,
          "priceAvg30d": 8.49
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 8.4,
          "priceAvg30d": 9.15
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 8.5,
          "priceAvg30d": 11.19
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.79,
          "priceAvg30d": 13.77
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.32,
          "priceAvg30d": 17.72
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 26.21,
          "priceAvg30d": 22.92
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 28.1,
          "priceAvg30d": 27.14
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 40.0,
          "priceAvg30d": 25.79
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 50.0,
          "priceAvg30d": 26.54
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 42.89,
          "priceAvg30d": 25.23
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.02,
          "priceAvg30d": 26.14
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.22,
          "priceAvg30d": 25.83
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.62,
          "priceAvg30d": 24.7
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.39,
          "priceAvg30d": 23.41
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.39,
          "priceAvg30d": 22.66
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.42,
          "priceAvg30d": 21.63
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.17,
          "priceAvg30d": 21.53
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.62,
          "priceAvg30d": 20.55
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.45,
          "priceAvg30d": 19.53
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.31,
          "priceAvg30d": 18.83
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.78,
          "priceAvg30d": 17.21
        }
      ],
      "avg": 21.1,
      "max": 50.0,
      "maxBlock": 36,
      "min": 2.5,
      "minBlock": 28,
      "spread3h": 24.19,
      "spreadLowAvg": 9.38,
      "spreadHighAvg": 33.57,
      "avg30d": 15.6,
      "spread30dAvg": 18.19,
      "historyDays": 30
    },
    "東北": {
      "label": "エリアプライス（東北）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.01,
          "priceAvg30d": 20.41
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.69,
          "priceAvg30d": 19.27
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.43,
          "priceAvg30d": 18.77
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.7,
          "priceAvg30d": 18.41
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.7,
          "priceAvg30d": 18.46
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 24.03,
          "priceAvg30d": 18.45
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.0,
          "priceAvg30d": 19.44
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.05,
          "priceAvg30d": 19.74
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.42,
          "priceAvg30d": 19.92
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.28,
          "priceAvg30d": 19.96
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.82,
          "priceAvg30d": 20.03
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.82,
          "priceAvg30d": 20.11
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.0,
          "priceAvg30d": 19.06
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.62,
          "priceAvg30d": 17.41
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 13.0,
          "priceAvg30d": 14.5
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 8.13,
          "priceAvg30d": 12.32
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 8.13,
          "priceAvg30d": 9.97
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 1.01,
          "priceAvg30d": 9.27
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 0.01,
          "priceAvg30d": 9.01
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 0.01,
          "priceAvg30d": 7.85
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.4
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.93
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 6.75
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.47
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 5.83
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.34
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.01,
          "priceAvg30d": 7.5
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.01,
          "priceAvg30d": 9.25
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 0.01,
          "priceAvg30d": 10.57
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 2.5,
          "priceAvg30d": 13.22
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 13.79,
          "priceAvg30d": 16.53
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 21.32,
          "priceAvg30d": 21.56
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 26.21,
          "priceAvg30d": 25.28
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 28.1,
          "priceAvg30d": 29.58
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 34.43,
          "priceAvg30d": 29.24
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 33.6,
          "priceAvg30d": 29.92
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 33.6,
          "priceAvg30d": 29.12
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.02,
          "priceAvg30d": 28.84
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.22,
          "priceAvg30d": 27.84
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.62,
          "priceAvg30d": 26.04
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.39,
          "priceAvg30d": 24.81
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.39,
          "priceAvg30d": 23.93
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.42,
          "priceAvg30d": 23.35
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.17,
          "priceAvg30d": 23.83
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.62,
          "priceAvg30d": 23.3
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.45,
          "priceAvg30d": 22.42
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.31,
          "priceAvg30d": 21.94
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.78,
          "priceAvg30d": 20.5
        }
      ],
      "avg": 18.23,
      "max": 34.43,
      "maxBlock": 35,
      "min": 0.01,
      "minBlock": 19,
      "spread3h": 26.59,
      "spreadLowAvg": 2.88,
      "spreadHighAvg": 29.48,
      "avg30d": 17.93,
      "spread30dAvg": 19.59,
      "historyDays": 30
    },
    "東京": {
      "label": "エリアプライス（東京）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.01,
          "priceAvg30d": 22.41
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.69,
          "priceAvg30d": 21.71
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.43,
          "priceAvg30d": 21.22
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.7,
          "priceAvg30d": 21.29
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.7,
          "priceAvg30d": 21.05
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 24.03,
          "priceAvg30d": 21.21
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.0,
          "priceAvg30d": 21.77
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.05,
          "priceAvg30d": 22.12
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.42,
          "priceAvg30d": 22.48
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.28,
          "priceAvg30d": 22.59
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.82,
          "priceAvg30d": 22.58
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.82,
          "priceAvg30d": 22.69
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.0,
          "priceAvg30d": 22.17
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 20.62,
          "priceAvg30d": 21.22
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 15.0,
          "priceAvg30d": 20.56
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 19.23,
          "priceAvg30d": 20.39
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 15.6,
          "priceAvg30d": 20.01
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 11.32,
          "priceAvg30d": 21.09
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 10.0,
          "priceAvg30d": 21.31
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 3.01,
          "priceAvg30d": 21.34
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 1.0,
          "priceAvg30d": 19.82
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.05,
          "priceAvg30d": 19.74
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 1.02,
          "priceAvg30d": 19.78
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 3.01,
          "priceAvg30d": 19.62
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 11.3,
          "priceAvg30d": 17.85
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 15.0,
          "priceAvg30d": 18.78
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 15.6,
          "priceAvg30d": 19.86
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 15.5,
          "priceAvg30d": 22.14
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 19.23,
          "priceAvg30d": 23.29
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 19.9,
          "priceAvg30d": 25.04
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 22.25,
          "priceAvg30d": 24.05
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 25.4,
          "priceAvg30d": 27.14
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 27.62,
          "priceAvg30d": 30.08
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 28.1,
          "priceAvg30d": 32.43
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 34.43,
          "priceAvg30d": 31.63
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 33.6,
          "priceAvg30d": 32.29
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 33.6,
          "priceAvg30d": 31.61
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 34.02,
          "priceAvg30d": 31.39
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 30.22,
          "priceAvg30d": 30.03
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 27.62,
          "priceAvg30d": 28.16
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 26.39,
          "priceAvg30d": 26.65
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 26.39,
          "priceAvg30d": 25.9
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 26.42,
          "priceAvg30d": 25.13
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 30.17,
          "priceAvg30d": 25.92
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 27.62,
          "priceAvg30d": 26.24
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.45,
          "priceAvg30d": 25.34
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.31,
          "priceAvg30d": 25.1
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.78,
          "priceAvg30d": 23.36
        }
      ],
      "avg": 21.49,
      "max": 34.43,
      "maxBlock": 35,
      "min": 0.05,
      "minBlock": 22,
      "spread3h": 25.5,
      "spreadLowAvg": 4.89,
      "spreadHighAvg": 30.39,
      "avg30d": 23.74,
      "spread30dAvg": 13.26,
      "historyDays": 30
    },
    "中部": {
      "label": "エリアプライス（中部）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 26.01,
          "priceAvg30d": 22.37
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 24.69,
          "priceAvg30d": 21.66
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 24.43,
          "priceAvg30d": 21.12
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 23.7,
          "priceAvg30d": 20.88
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 23.7,
          "priceAvg30d": 20.68
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 24.03,
          "priceAvg30d": 20.81
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 25.0,
          "priceAvg30d": 21.38
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 25.05,
          "priceAvg30d": 21.81
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 25.42,
          "priceAvg30d": 22.11
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 25.28,
          "priceAvg30d": 22.29
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 25.82,
          "priceAvg30d": 22.42
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 25.82,
          "priceAvg30d": 22.54
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 24.0,
          "priceAvg30d": 22.27
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 17.17,
          "priceAvg30d": 21.24
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 11.54,
          "priceAvg30d": 20.06
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.8,
          "priceAvg30d": 19.23
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 5.0,
          "priceAvg30d": 19.4
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 20.21
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 20.36
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 1.0,
          "priceAvg30d": 20.04
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 18.85
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 18.56
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 18.4
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 18.2
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 16.15
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 16.72
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.02,
          "priceAvg30d": 19.17
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.5,
          "priceAvg30d": 22.01
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.5,
          "priceAvg30d": 23.05
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 5.56,
          "priceAvg30d": 24.15
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.86,
          "priceAvg30d": 24.63
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.49,
          "priceAvg30d": 27.02
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 23.8,
          "priceAvg30d": 28.83
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.5,
          "priceAvg30d": 31.2
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.69,
          "priceAvg30d": 31.01
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 23.76,
          "priceAvg30d": 31.26
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 23.78,
          "priceAvg30d": 30.61
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 23.76,
          "priceAvg30d": 30.0
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 23.81,
          "priceAvg30d": 29.1
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 23.61,
          "priceAvg30d": 27.87
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 24.12,
          "priceAvg30d": 26.73
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 23.84,
          "priceAvg30d": 25.97
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 24.13,
          "priceAvg30d": 25.3
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 24.1,
          "priceAvg30d": 25.75
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 26.8,
          "priceAvg30d": 26.06
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 26.09,
          "priceAvg30d": 25.11
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 26.31,
          "priceAvg30d": 25.09
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 25.78,
          "priceAvg30d": 23.6
        }
      ],
      "avg": 16.27,
      "max": 26.8,
      "maxBlock": 45,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 24.29,
      "spreadLowAvg": 0.76,
      "spreadHighAvg": 25.04,
      "avg30d": 23.19,
      "spread30dAvg": 14.31,
      "historyDays": 30
    },
    "北陸": {
      "label": "エリアプライス（北陸）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.08,
          "priceAvg30d": 10.49
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.97,
          "priceAvg30d": 10.78
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.57,
          "priceAvg30d": 11.08
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 8.5,
          "priceAvg30d": 10.92
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.5,
          "priceAvg30d": 10.92
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.08,
          "priceAvg30d": 11.42
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.51,
          "priceAvg30d": 12.29
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.68,
          "priceAvg30d": 13.08
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.5,
          "priceAvg30d": 12.88
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 18.62,
          "priceAvg30d": 14.02
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.62,
          "priceAvg30d": 14.44
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.78,
          "priceAvg30d": 14.57
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.49,
          "priceAvg30d": 15.47
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.06,
          "priceAvg30d": 12.74
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 10.36,
          "priceAvg30d": 11.38
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.8,
          "priceAvg30d": 9.79
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 5.0,
          "priceAvg30d": 11.45
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 13.2
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 15.41
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 1.0,
          "priceAvg30d": 15.23
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 14.37
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 13.91
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 14.13
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 13.67
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 11.12
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 11.35
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.02,
          "priceAvg30d": 13.64
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.5,
          "priceAvg30d": 16.46
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.5,
          "priceAvg30d": 16.85
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 5.56,
          "priceAvg30d": 18.33
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.86,
          "priceAvg30d": 18.01
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.49,
          "priceAvg30d": 19.54
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.49,
          "priceAvg30d": 19.02
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.5,
          "priceAvg30d": 20.11
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.69,
          "priceAvg30d": 19.78
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.82,
          "priceAvg30d": 21.01
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.64,
          "priceAvg30d": 20.48
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.81,
          "priceAvg30d": 20.51
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.82,
          "priceAvg30d": 19.36
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.76,
          "priceAvg30d": 18.07
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.69,
          "priceAvg30d": 18.27
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.51,
          "priceAvg30d": 17.64
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.82,
          "priceAvg30d": 17.53
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.76,
          "priceAvg30d": 16.32
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.69,
          "priceAvg30d": 16.32
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.0,
          "priceAvg30d": 14.44
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.5,
          "priceAvg30d": 14.18
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.48,
          "priceAvg30d": 11.06
        }
      ],
      "avg": 10.8,
      "max": 20.64,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 18.98,
      "spreadLowAvg": 0.76,
      "spreadHighAvg": 19.73,
      "avg30d": 14.94,
      "spread30dAvg": 10.01,
      "historyDays": 30
    },
    "関西": {
      "label": "エリアプライス（関西）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.08,
          "priceAvg30d": 10.41
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.97,
          "priceAvg30d": 10.66
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.57,
          "priceAvg30d": 10.98
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 8.5,
          "priceAvg30d": 10.83
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.5,
          "priceAvg30d": 10.77
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.08,
          "priceAvg30d": 11.32
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.51,
          "priceAvg30d": 12.21
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.68,
          "priceAvg30d": 13.01
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.5,
          "priceAvg30d": 12.81
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 18.62,
          "priceAvg30d": 14.02
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.62,
          "priceAvg30d": 14.42
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.78,
          "priceAvg30d": 14.48
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.49,
          "priceAvg30d": 15.4
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.06,
          "priceAvg30d": 12.63
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.81,
          "priceAvg30d": 11.35
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.8,
          "priceAvg30d": 9.36
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 5.0,
          "priceAvg30d": 10.89
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 12.47
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 14.87
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 1.0,
          "priceAvg30d": 14.8
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 14.0
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 13.6
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 13.85
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 13.33
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 10.69
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 10.95
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.02,
          "priceAvg30d": 13.3
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.5,
          "priceAvg30d": 16.36
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.5,
          "priceAvg30d": 16.5
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 5.56,
          "priceAvg30d": 18.03
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.86,
          "priceAvg30d": 17.32
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 12.49,
          "priceAvg30d": 19.05
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.49,
          "priceAvg30d": 19.02
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.5,
          "priceAvg30d": 20.11
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.69,
          "priceAvg30d": 19.78
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.82,
          "priceAvg30d": 21.01
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.64,
          "priceAvg30d": 20.48
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.81,
          "priceAvg30d": 20.51
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.82,
          "priceAvg30d": 19.36
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.76,
          "priceAvg30d": 18.07
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.69,
          "priceAvg30d": 18.27
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.51,
          "priceAvg30d": 17.64
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.82,
          "priceAvg30d": 17.53
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.76,
          "priceAvg30d": 16.32
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.69,
          "priceAvg30d": 16.32
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.0,
          "priceAvg30d": 14.44
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.5,
          "priceAvg30d": 14.18
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.48,
          "priceAvg30d": 11.06
        }
      ],
      "avg": 10.77,
      "max": 20.64,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 18.98,
      "spreadLowAvg": 0.76,
      "spreadHighAvg": 19.73,
      "avg30d": 14.77,
      "spread30dAvg": 9.99,
      "historyDays": 30
    },
    "中国": {
      "label": "エリアプライス（中国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.08,
          "priceAvg30d": 10.41
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.97,
          "priceAvg30d": 10.66
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.57,
          "priceAvg30d": 10.9
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 8.5,
          "priceAvg30d": 10.66
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.5,
          "priceAvg30d": 10.39
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.08,
          "priceAvg30d": 10.86
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.51,
          "priceAvg30d": 11.61
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.68,
          "priceAvg30d": 12.49
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.5,
          "priceAvg30d": 12.58
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 18.62,
          "priceAvg30d": 13.75
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.62,
          "priceAvg30d": 14.4
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.78,
          "priceAvg30d": 14.44
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.49,
          "priceAvg30d": 15.33
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.06,
          "priceAvg30d": 12.36
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.81,
          "priceAvg30d": 10.71
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.8,
          "priceAvg30d": 8.88
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 5.0,
          "priceAvg30d": 9.06
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 9.15
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 9.0
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 1.0,
          "priceAvg30d": 8.44
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 8.81
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 8.38
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 8.19
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 7.81
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 7.31
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 7.38
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.02,
          "priceAvg30d": 9.04
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.5,
          "priceAvg30d": 10.16
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.5,
          "priceAvg30d": 9.81
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 5.56,
          "priceAvg30d": 10.66
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.86,
          "priceAvg30d": 11.6
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.0,
          "priceAvg30d": 13.85
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.49,
          "priceAvg30d": 14.41
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.5,
          "priceAvg30d": 17.62
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.69,
          "priceAvg30d": 19.3
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.82,
          "priceAvg30d": 20.59
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.64,
          "priceAvg30d": 20.02
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.81,
          "priceAvg30d": 20.03
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.82,
          "priceAvg30d": 19.24
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.76,
          "priceAvg30d": 18.07
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.69,
          "priceAvg30d": 18.12
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.51,
          "priceAvg30d": 17.56
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.82,
          "priceAvg30d": 17.49
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.76,
          "priceAvg30d": 16.24
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.69,
          "priceAvg30d": 16.21
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.0,
          "priceAvg30d": 14.44
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.5,
          "priceAvg30d": 14.18
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.48,
          "priceAvg30d": 11.06
        }
      ],
      "avg": 10.72,
      "max": 20.64,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 18.98,
      "spreadLowAvg": 0.76,
      "spreadHighAvg": 19.73,
      "avg30d": 12.78,
      "spread30dAvg": 11.31,
      "historyDays": 30
    },
    "四国": {
      "label": "エリアプライス（四国）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.08,
          "priceAvg30d": 9.87
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.97,
          "priceAvg30d": 9.75
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.57,
          "priceAvg30d": 9.88
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 8.5,
          "priceAvg30d": 9.7
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.5,
          "priceAvg30d": 9.34
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.08,
          "priceAvg30d": 9.86
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.51,
          "priceAvg30d": 10.35
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.68,
          "priceAvg30d": 11.23
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.5,
          "priceAvg30d": 10.83
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 18.62,
          "priceAvg30d": 12.22
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.62,
          "priceAvg30d": 12.97
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.78,
          "priceAvg30d": 12.99
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.49,
          "priceAvg30d": 13.42
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.06,
          "priceAvg30d": 10.55
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.81,
          "priceAvg30d": 8.74
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.8,
          "priceAvg30d": 7.61
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 5.0,
          "priceAvg30d": 7.91
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 8.17
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 7.27
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 1.0,
          "priceAvg30d": 6.42
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 6.63
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.38
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 6.02
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.11
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.34
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.38
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.02,
          "priceAvg30d": 7.55
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.5,
          "priceAvg30d": 8.71
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.5,
          "priceAvg30d": 8.4
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 5.56,
          "priceAvg30d": 8.6
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.86,
          "priceAvg30d": 8.97
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 9.03,
          "priceAvg30d": 11.1
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 9.21,
          "priceAvg30d": 11.33
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.5,
          "priceAvg30d": 13.83
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.69,
          "priceAvg30d": 14.75
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.82,
          "priceAvg30d": 17.01
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.64,
          "priceAvg30d": 17.32
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.81,
          "priceAvg30d": 17.14
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.82,
          "priceAvg30d": 15.73
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.76,
          "priceAvg30d": 13.59
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.69,
          "priceAvg30d": 14.24
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.51,
          "priceAvg30d": 13.56
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.82,
          "priceAvg30d": 13.55
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.76,
          "priceAvg30d": 12.58
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.69,
          "priceAvg30d": 12.74
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.0,
          "priceAvg30d": 11.74
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.5,
          "priceAvg30d": 12.22
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.48,
          "priceAvg30d": 9.63
        }
      ],
      "avg": 10.63,
      "max": 20.64,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 18.98,
      "spreadLowAvg": 0.76,
      "spreadHighAvg": 19.73,
      "avg30d": 10.65,
      "spread30dAvg": 9.91,
      "historyDays": 30
    },
    "九州": {
      "label": "エリアプライス（九州）",
      "blocks": [
        {
          "block": 1,
          "label": "00:00~00:30",
          "price": 10.08,
          "priceAvg30d": 10.41
        },
        {
          "block": 2,
          "label": "00:30~01:00",
          "price": 9.97,
          "priceAvg30d": 10.58
        },
        {
          "block": 3,
          "label": "01:00~01:30",
          "price": 9.57,
          "priceAvg30d": 10.74
        },
        {
          "block": 4,
          "label": "01:30~02:00",
          "price": 8.5,
          "priceAvg30d": 10.52
        },
        {
          "block": 5,
          "label": "02:00~02:30",
          "price": 8.5,
          "priceAvg30d": 10.29
        },
        {
          "block": 6,
          "label": "02:30~03:00",
          "price": 10.08,
          "priceAvg30d": 10.76
        },
        {
          "block": 7,
          "label": "03:00~03:30",
          "price": 10.51,
          "priceAvg30d": 11.45
        },
        {
          "block": 8,
          "label": "03:30~04:00",
          "price": 12.68,
          "priceAvg30d": 12.45
        },
        {
          "block": 9,
          "label": "04:00~04:30",
          "price": 13.5,
          "priceAvg30d": 12.54
        },
        {
          "block": 10,
          "label": "04:30~05:00",
          "price": 18.62,
          "priceAvg30d": 13.75
        },
        {
          "block": 11,
          "label": "05:00~05:30",
          "price": 18.62,
          "priceAvg30d": 14.36
        },
        {
          "block": 12,
          "label": "05:30~06:00",
          "price": 13.78,
          "priceAvg30d": 14.44
        },
        {
          "block": 13,
          "label": "06:00~06:30",
          "price": 17.49,
          "priceAvg30d": 15.33
        },
        {
          "block": 14,
          "label": "06:30~07:00",
          "price": 12.06,
          "priceAvg30d": 12.31
        },
        {
          "block": 15,
          "label": "07:00~07:30",
          "price": 8.81,
          "priceAvg30d": 10.56
        },
        {
          "block": 16,
          "label": "07:30~08:00",
          "price": 6.8,
          "priceAvg30d": 8.68
        },
        {
          "block": 17,
          "label": "08:00~08:30",
          "price": 5.0,
          "priceAvg30d": 8.78
        },
        {
          "block": 18,
          "label": "08:30~09:00",
          "price": 2.5,
          "priceAvg30d": 8.51
        },
        {
          "block": 19,
          "label": "09:00~09:30",
          "price": 1.0,
          "priceAvg30d": 8.06
        },
        {
          "block": 20,
          "label": "09:30~10:00",
          "price": 1.0,
          "priceAvg30d": 7.31
        },
        {
          "block": 21,
          "label": "10:00~10:30",
          "price": 0.01,
          "priceAvg30d": 7.04
        },
        {
          "block": 22,
          "label": "10:30~11:00",
          "price": 0.01,
          "priceAvg30d": 6.62
        },
        {
          "block": 23,
          "label": "11:00~11:30",
          "price": 0.01,
          "priceAvg30d": 6.31
        },
        {
          "block": 24,
          "label": "11:30~12:00",
          "price": 0.01,
          "priceAvg30d": 6.24
        },
        {
          "block": 25,
          "label": "12:00~12:30",
          "price": 0.01,
          "priceAvg30d": 6.05
        },
        {
          "block": 26,
          "label": "12:30~13:00",
          "price": 0.01,
          "priceAvg30d": 6.25
        },
        {
          "block": 27,
          "label": "13:00~13:30",
          "price": 0.02,
          "priceAvg30d": 7.04
        },
        {
          "block": 28,
          "label": "13:30~14:00",
          "price": 0.5,
          "priceAvg30d": 8.0
        },
        {
          "block": 29,
          "label": "14:00~14:30",
          "price": 2.5,
          "priceAvg30d": 8.79
        },
        {
          "block": 30,
          "label": "14:30~15:00",
          "price": 5.56,
          "priceAvg30d": 9.87
        },
        {
          "block": 31,
          "label": "15:00~15:30",
          "price": 8.86,
          "priceAvg30d": 11.15
        },
        {
          "block": 32,
          "label": "15:30~16:00",
          "price": 10.0,
          "priceAvg30d": 13.34
        },
        {
          "block": 33,
          "label": "16:00~16:30",
          "price": 12.49,
          "priceAvg30d": 14.41
        },
        {
          "block": 34,
          "label": "16:30~17:00",
          "price": 19.5,
          "priceAvg30d": 17.62
        },
        {
          "block": 35,
          "label": "17:00~17:30",
          "price": 19.69,
          "priceAvg30d": 19.3
        },
        {
          "block": 36,
          "label": "17:30~18:00",
          "price": 19.82,
          "priceAvg30d": 20.59
        },
        {
          "block": 37,
          "label": "18:00~18:30",
          "price": 20.64,
          "priceAvg30d": 20.02
        },
        {
          "block": 38,
          "label": "18:30~19:00",
          "price": 19.81,
          "priceAvg30d": 20.03
        },
        {
          "block": 39,
          "label": "19:00~19:30",
          "price": 19.82,
          "priceAvg30d": 19.24
        },
        {
          "block": 40,
          "label": "19:30~20:00",
          "price": 19.76,
          "priceAvg30d": 18.07
        },
        {
          "block": 41,
          "label": "20:00~20:30",
          "price": 19.69,
          "priceAvg30d": 18.12
        },
        {
          "block": 42,
          "label": "20:30~21:00",
          "price": 19.51,
          "priceAvg30d": 17.56
        },
        {
          "block": 43,
          "label": "21:00~21:30",
          "price": 19.82,
          "priceAvg30d": 17.49
        },
        {
          "block": 44,
          "label": "21:30~22:00",
          "price": 19.76,
          "priceAvg30d": 16.24
        },
        {
          "block": 45,
          "label": "22:00~22:30",
          "price": 19.69,
          "priceAvg30d": 16.21
        },
        {
          "block": 46,
          "label": "22:30~23:00",
          "price": 15.0,
          "priceAvg30d": 14.44
        },
        {
          "block": 47,
          "label": "23:00~23:30",
          "price": 13.5,
          "priceAvg30d": 14.18
        },
        {
          "block": 48,
          "label": "23:30~24:00",
          "price": 9.48,
          "priceAvg30d": 11.06
        }
      ],
      "avg": 10.72,
      "max": 20.64,
      "maxBlock": 37,
      "min": 0.01,
      "minBlock": 21,
      "spread3h": 18.98,
      "spreadLowAvg": 0.76,
      "spreadHighAvg": 19.73,
      "avg30d": 12.36,
      "spread30dAvg": 11.72,
      "historyDays": 30
    }
  }
};
